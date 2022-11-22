fn get_soft_weights =
(
	/* 获取软选择权重
	兼容6种格式
	返回 #(#(vid,weight),#(vid,weight))
	未开启软选择会报错,已容错,就不加是否开启的判断了
	*/
	if (sel = getCurrentSelection()).count == 1 then(
		local
		obj = modPanel.getCurrentObject(),
		verified = case classOf obj of
		(
			Editable_mesh : true
			Edit_Mesh : true
			Mesh_Select : true
			Editable_Poly : false
			Edit_Poly : false
			Poly_Select : false
			default : return (messageBox "软选择权重 未能获取到!\n-不支持当前对象.";#())
		)
		local
		sel = sel[1],
		vcount = sel.verts.count
		try(
			if verified then
				for vid = 1 to vcount where (weight = meshop.getVDataValue sel 1 vid) > 0 collect #(vid,weight)
			else
				for vid = 1 to vcount where (weight = polyop.getVDataValue sel 1 vid) > 0 collect #(vid,weight)
		)catch(local estr = getCurrentException();messagebox ("软选择权重 未能获取到!\n" + (if estr == "-- Runtime error: Vertex data support not enabled for specified vertex data channel: 1" then "-软选择未启用." else estr));#())
	)else (messageBox "软选择权重 未能获取到!\n-需选择一个物体.";#())
)
-- get_soft_weights()
		
fn set_soft_weights data =
(
	/* 设置软选择权重
	*/
)

fn get_skin_bone_nodes sk =
(
	/* 获得skin中的骨骼(节点)
	9.9成的情况都可以快速获取,不排除有意料之外的错误
	*/
	for n in refs.dependson sk where isvalidnode n collect n
)
fn get_skin_select_verts sk =
(
	/* 获得skin中选择的顶点
	较高版本支持skinOps.getSelectedVertices,兼容低版本
	*/
	(try skinOps.getSelectedVertices sk catch for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i) as bitarray
)
-- for vid in (get_skin_select_verts $.skin) do print #(vid,get_vert_weights $.skin vid)

fn select_all_verts_by_bones sk bids =
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

fn set_bone_weights sk weights val = 
(
	/* 
	输入 #(#(vid,#weight,weight_id),#(vid,#weight,weight_id))
	*/
	--还应该判断子层级是不是权重编辑模式
	local bid = skinOps.GetSelectedBone sk
	if bid > 0 do
	(
		for i = 1 to weights.count do skinOps.SetVertexWeights sk weights[i][1] bid (weights[i][2][2][weights[i][3]] * spn1.value)
	)
)
-- 合并进权重工具后可以去掉判断,因为权重工具按钮仅在符合条件时可用.
-- skinOps.GetSelectedBone $.skin

fn copy_verts_nodes_weights sk verts: =
(
	/* 复制当前skin的每顶点骨骼(节点)权重(得到顶点编号,骨骼编号,骨骼权重)
	返回#(vid,#(#nodes,#weights))
	依赖get_skin_select_verts|get_vert_weights|get_skin_bone_nodes|weights_bones_to_nodes
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
	for vid in (get_skin_select_verts sk) collect #(vid,weights_bones_to_nodes sk (get_vert_weights sk vid) nodes)
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
	undo "Paste weights to bone" on skinOps.bakeSelectedVerts sk
	local
	bid = skinOps.GetSelectedBone sk,
	pending_list = get_bone_weights sk bid:bid, --待处理的列表,已经选择当前骨骼的顶点,也已经获取到当前骨骼的权重,附带一个权重列表中当前权重的id.如#(#(vid,#weight,weight_id),#(vid,#weight,weight_id))
	input_weigths_list = weights_nodes_to_bones sk data (get_skin_bone_nodes sk)
-- 	print #("pending_list",pending_list)
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
			
-- 			print new_weights
	 		skinOps.ReplaceVertexWeights sk vid new_weights[1] new_weights[2]
		)
	)
	
)

-- fn paste_verts_nodes_weights sk val weight_mask:false replace_repeated:true =
-- (
-- 	/* 粘贴每顶点的骨骼(节点)权重到当前选择模型skin.
-- 	weight_mask为true时,使用当前选中骨骼的顶点权重进行遮罩计算,
-- 	replace_repeated只在weight_mask为true时有用,比如A已经影响了此骨骼,则A的权重会绝对化.即先排除再应用.默认false
-- 	如果粘贴的骨骼不存在,则自动添加
-- 	传入#(vid,#(#nodes,#weights))
-- 	*/
-- 	fn weights_nodes_to_bones sk data nodes =
-- 	(
-- 		/* 将权重数据中的骨骼序号转为节点
-- 		传入#(vid,#(#nodes,#weights)),返回#(vid,#(#bone_list,#weight_list)),不存在的骨骼自动添加
-- 		*/
-- 		for i = 1 to data.count do
-- 			for j = 1 to data[i][2][1].count do
-- 			(
-- 				bid = findItem nodes data[i][2][1][j]
-- 				data[i][2][1][j] = if bid > 0 then bid else (skinOps.addbone sk data[i][2][1][j] -1;append nodes data[i][2][1][j];skinOps.GetNumberBones sk)
-- 			)
-- 		data
-- 	)
-- 	--for i in weights_nodes_to_bones sk data (get_skin_bone_nodes sk) do skinOps.SetVertexWeights 
-- )

/* skinOps.SetVertexWeights <Skin> <vertex_integer> \ ( <vertex_bone_integer> | <vertex_bone_array> ) \ ( <weight_float> | <weight_array> ) 
	设置指定骨骼对指定顶点的影响。
	未指定的骨骼的任何影响权重都将保留。
	如果将骨骼和权重指定为数组，则数组必须具有相同的大小。
	skinOps.SetVertexWeights $.skin 1 #(1,2) #(0.1,0.2) 实际上结果会和剩余权重混合,逐渐接近#(0.333,0.667) 比如原权重是#(3) #(1.0) 混合#(1,2) #(1.0,1.0) 会变为(0.333,0.333,0.334)  再继续多次指定后,会变为#(0.5,0.5,0.0)
	如果权重和不为1,会自动平均,但是传入时值不会大于1,比如#(1,2) #(1.0,5.0) 和 #(1,2) #(1.0,1.0)的效果是一样的
	优势是可以保留原本为0的权重.
	* skinOps.ReplaceVertexWeights <Skin> <vertex_integer> \ ( <vertex_bone_integer> | <vertex_bone_array> ) \ ( <weight_float> | <weight_array> ) 
	设置指定骨骼对指定顶点的影响。
	未指定的骨骼的任何影响权重都将被删除。
	如果将骨骼和权重指定为数组，则数组必须具有相同的大小。
	skinOps.ReplaceVertexWeights $.skin 1 #(1,2) #(0.1,0.2) 实际上结果是#(0.333,0.667)
*/