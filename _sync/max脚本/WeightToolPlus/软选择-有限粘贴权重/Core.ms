fn get_soft_weights =
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
--数据为 #(#(vid,weight),#(vid,weight))
--未开启软选择会报错,已容错,就不加是否开启的判断了
-- get_soft_weights()
		
fn get_vert_weights obj vid =
(
	local bone_list = #(),weight_list = #()
	for wid = 1 to skinOps.GetVertexWeightCount obj vid do (append bone_list (skinOps.GetVertexWeightBoneID obj vid wid);append weight_list (skinOps.GetVertexWeight obj vid wid))
	#(bone_list,weight_list)
)
		
fn set_bone_weights sk weights val = 
(
	--还应该判断子层级是不是权重编辑模式
	local bid = skinOps.GetSelectedBone sk
	if bid > 0 do
	(
		for i = 1 to weights.count do skinOps.SetVertexWeights sk weights[i][1] bid (weights[i][2] * spn1.value)
	)
)
-- 合并进权重工具后可以去掉判断,因为权重工具按钮仅在符合条件时可用.
-- skinOps.GetSelectedBone $.skin

fn get_skin_bone_nodes sk = 
(
	/*获得skin中的骨骼节点
	*/
	for n in refs.dependson sk where isvalidnode n collect n
)
fn get_skin_select_verts sk =
(
	/*获得skin中选择的顶点
	较高版本支持skinOps.getSelectedVertices,兼容低版本
	*/
	(try skinOps.getSelectedVertices sk catch for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i) as bitarray
)

fn copy_verts_nodes_weights sk verts =
(
	/*复制当前skin的每顶点骨骼节点权重
	依赖get_skin_select_verts和get_skin_bone_nodes
	*/
)

fn paste_verts_nodes_weights sk val weight_mask:false replace_repeated:true =
(
	/*粘贴每顶点的骨骼节点权重到当前选择模型skin.
	weight_mask为true时,使用当前选中骨骼的顶点权重进行遮罩计算,
	replace_repeated只在weight_mask为true时有用
	*/
)