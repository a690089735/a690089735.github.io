
fn get_skin_bone_nodes sk =
(
	for n in refs.dependson sk where isvalidnode n collect n
)

fn get_skin_select_verts sk =
(
	(try skinOps.getSelectedVertices sk catch for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i) as bitarray
)

fn get_vert_weights sk vid =
(
	/* 获得一个顶点的骨骼权重
	返回 #(bone_list,weight_list)
	*/
	local bone_list = #(),weight_list = #()
	for wid = 1 to skinOps.GetVertexWeightCount sk vid do (append bone_list (skinOps.GetVertexWeightBoneID sk vid wid);append weight_list (skinOps.GetVertexWeight sk vid wid))
	#(bone_list,weight_list)
)

fn get_bone_weights sk bid: =
(
	/* 获得skin中的选中骨骼的对应顶点权重,格式与软选择权重互通
	依赖于get_skin_select_verts|get_vert_weights
	返回 #(#(vid,#weight,weight_id),#(vid,#weight,weight_id))
	*/
	if bid == unsupplied do bid = skinOps.GetSelectedBone sk
	skinOps.selectVerticesByBone sk
	for vid in (get_skin_select_verts sk) collect
	(
		local weights = get_vert_weights sk vid
		#(vid,weights,finditem weights[1] bid)
	)
)

fn array_normalize ary =
(
	local sum = 0
	for i in ary do sum += i
	for i in ary collect i / sum
)

fn get_vert_weights_limited sk vid bid_list =
(
	/* 获得一个顶点的骨骼权重,但是仅限选定骨骼的部分
	返回 #(bone_list,weight_list)
	*/
	local bone_list = #(),weight_list = #()
	for wid = 1 to skinOps.GetVertexWeightCount sk vid where (bid = skinOps.GetVertexWeightBoneID sk vid wid; findItem bid_list bid > 0) do (append bone_list bid;append weight_list (skinOps.GetVertexWeight sk vid wid))
	#(bone_list,array_normalize weight_list)
)

fn select_all_verts sk bids =
(
	local verts = #{}
	for vid = 1 to skinOps.GetNumberVertices sk do
	(
		for bid = 1 to skinOps.GetVertexWeightCount sk vid where findItem bids (skinOps.GetVertexWeightBoneID sk vid bid) > 0 do exit with verts[vid] = true
	)
	skinOps.SelectVertices sk verts
	actionMan.executeAction 0 "272"
	actionMan.executeAction 0 "272"
)

fn copy_verts_nodes_weights_limited sk bid_list verts: =
(
	/* 复制当前skin的每顶点骨骼(节点)权重(得到顶点编号,骨骼编号,骨骼权重)
	返回#(vid,#(#nodes,#weights))
	依赖get_skin_select_verts|get_skin_select_verts|get_skin_bone_nodes|weights_bones_to_nodes
	*/
	fn weights_bones_to_nodes sk data nodes =
	(
		/* 将权重数据中的骨骼序号转为节点
		传入#(#bone_list,#weight_list),返回#(#node_list,#weight_list)
		*/
		for i = 1 to data[1].count do data[1][i] = nodes[data[1][i]]
		data
	)
	if verts == unsupplied do verts = get_skin_select_verts sk
	local nodes = get_skin_bone_nodes sk --在copy时获取一次来优化速度
	for vid in (get_skin_select_verts sk) collect #(vid,weights_bones_to_nodes sk (get_vert_weights_limited sk vid bid_list) nodes)
)

fn merge_weights weights = --合并重复权重,不合并直接设置权重数值可能会反直觉
(
	local new_weights = #(#(),#())
	for i = 1 to weights[1].count do if (wid = findItem new_weights[1] weights[1][i]) > 0 then new_weights[2][wid] += weights[2][i] else (append new_weights[1] weights[1][i];append new_weights[2] weights[2][i])
	new_weights
)

fn paste_verts_nodes_weights_to_select_bone sk data =
(
	/* 按当前选中骨骼的权重,替换每权重顶点的骨骼(节点)权重.(以选中的骨骼权重为遮罩,替换到这部分权重)
	如果粘贴的骨骼不存在,则自动添加
	传入#(vid,#(#nodes,#weights))
	*/
	fn weights_nodes_to_bones sk data nodes =
	(
		/* 将权重数据中的骨骼序号转为节点
		传入#(vid,#(#nodes,#weights)),返回#(vid,#(#bone_list,#weight_list)),不存在的骨骼自动添加
		*/
		for i = 1 to data.count do
			for j = 1 to data[i][2][1].count do
			(
				bid = findItem nodes data[i][2][1][j]
				data[i][2][1][j] = if bid > 0 then bid else (skinOps.addbone sk data[i][2][1][j] -1;append nodes data[i][2][1][j];skinOps.GetNumberBones sk)
			)
		data
	)
	fn Comparator a b = (
		case of
		(
			(a > b[1]) : 1 --往后搜索
			(a < b[1]) : -1 --往前搜索
			default : 0 --不改变
		)
	)
	
	local
	bid = skinOps.GetSelectedBone sk,
	pending_list = get_bone_weights sk bid:bid, --待处理的列表,已经选择当前骨骼的顶点,也已经获取到当前骨骼的权重,附带一个权重列表中当前权重的id.如#(#(vid,#weight,weight_id),#(vid,#weight,weight_id))
	input_weigths_list = weights_nodes_to_bones sk data (get_skin_bone_nodes sk)
-- 	print #("pending_list",pending_list)
	undo "Paste weights to verts" on skinOps.bakeSelectedVerts sk
	for i in pending_list do
	(
		local
		vid = i[1], --#(vid,#weight,weight_id)[1]
		vert_weights = i[2], --#(vid,#weight,weight_id)[2]
		weight_id = i[3], --#(vid,#weight,weight_id)[3]
		weight = i[2][2][weight_id], --#weight[2][weight_id]
		input_weights = try((bsearch vid input_weigths_list Comparator)[2])catch(false) --#(vid,#(#bone_list,#weight_list))[2]
		if input_weights != false do
		(
-- 			print #("input_weights",input_weights)
			new_weights = #(#(),#())
			for j = 1 to vert_weights[1].count where vert_weights[1][j] != bid do (append new_weights[1] vert_weights[1][j];append new_weights[2] vert_weights[2][j])
			for j = 1 to input_weights[1].count do (append new_weights[1] input_weights[1][j];append new_weights[2] (input_weights[2][j]*weight))
			
			new_weights = merge_weights new_weights
-- 			print new_weights
	 		skinOps.ReplaceVertexWeights sk vid new_weights[1] new_weights[2]
		)
	)
)


fn upUI s e = 
(
	local
	sel = $
	_sk = try(for m in sel.modifiers where classof m == skin do exit with m)catch(false)
	if isValidNode sel and isValidObj _sk and subObjectLevel == 1 then
	(
		lbx_bone_list.items = for i in get_skin_bone_nodes _sk collect i.name
		lbx_bone_list.selection = skinOps.GetSelectedBone _sk
		btn_copy.enabled = btn_replace.enabled = true
	)
	else(
		lbx_bone_list.items = #()
		btn_copy.enabled = btn_replace.enabled = false
	)
)

fn reg_up_ui =
(
	_up_tool = NodeEventCallback mouseUp:true delay:500 selectionChanged:upUI subobjectSelectionChanged:upUI --在#SelectionChanged和#subobjectSelectionChanged
)
fn unreg_up_ui =
(
	_up_tool = undefined
	gc light:true
)