/* 
蒙皮合并
1.合并所有模型,并合在一个蒙皮里.
2.没有添加蒙皮修改器的模型,会找到父物体给1的权重(可选)
3.没有添加蒙皮修改器,也没有父物体的模型.会把权重给到最近的骨骼上.并选择这些点.
*/
fn CombineMeshAndSkin objs = --2023可以不用选择物体不用修改面板,2015以下因为max原生Bug导致权重错误.测试2014-2017需要选择物体
(at time 0(with animate off(with undo off(
	objs = for obj in objs where superclassof obj == GeometryClass collect obj --清理选择
	if objs.count > 0 do(
	local
	low_version = (maxversion())[1] < 22000, --低版本兼容,但是即使兼容,在2015以下也还是会有问题 大于2020(22000) 可以不用选择skin,速度极快
	verts_count = 0,
	bones_list = #(),
	weights_list = #(),
	select_verts_list = #{} --要选择的顶点,设置了自动权重的顶点们(原来没有权重的顶点)
	if low_version then setCommandPanelTaskMode mode:#modify else setCommandPanelTaskMode mode:#create
	--收集骨骼和权重数据
	for obj in objs do --这里还是用objs.
	(
		local
		sk = for m in obj.modifiers where classof m == skin do exit with m
		if isValidObj sk then --有skin
		(
-- 			print (obj.name+":检测到skin")
-- 			if low_version do select obj --低版本兼容
			local
			b_list = for n in refs.dependson sk where isvalidnode n collect n,
			bid_list = for b in b_list collect (if (bid = findItem bones_list b) > 0 then bid else (append bones_list b;bones_list.count)),
			w_list = for vid = 1 to skinOps.GetNumberVertices sk collect #(for bid = 1 to skinOps.GetVertexWeightCount sk vid collect bid_list[skinOps.GetVertexWeightBoneID sk vid bid],for bid = 1 to skinOps.GetVertexWeightCount sk vid collect skinOps.GetVertexWeight sk vid bid)

-- 			print #(b_list,bid_list)
			verts_count += skinOps.GetNumberVertices sk
			weights_list += w_list
		)else 
		(
			if isValidNode obj.parent then --有父物体
			(
-- 				print (obj.name+":无skin有父物体")
				local
				prt = obj.parent,
				bid = if (bid = findItem bones_list prt) > 0 then bid else (append bones_list prt;bones_list.count),
				v_count = (snapshotAsMesh obj).numverts
				
				select_verts_list += #{verts_count+1..verts_count+v_count}; verts_count += v_count
				weights_list += for vid = 1 to v_count collect #(bid,1.0)
			)else --没有父物体
			(
-- 				print (obj.name+":无skin无父物体")
				local
				pos = obj.center,
				dis = distance bones_list[1].transform.pos pos,
				bid = 1,
				v_count = (snapshotAsMesh obj).numverts
				for id = 2 to bones_list.count where (ndis = distance bones_list[id].transform.pos pos) < dis do (dis = ndis;bid = id)
				
				select_verts_list += #{verts_count+1..verts_count+v_count}; verts_count += v_count
				weights_list += for vid = 1 to v_count collect #(bid,1.0)
			)
		)
	)
	
	--开始合并
-- 	delete objs_list
	local
	CombineMesh = mesh numverts:3 numfaces:1 name:(uniqueName "CombineSkinMesh") wirecolor:gray, --创建空网格会导致第一个物体UV异常.
	CombineSkin = skin()
	
-- 	addModifier objs[1] (Uvwmap())--material:.mat
-- 	convertToMesh CombineMesh
	
	for obj in objs do meshop.attach CombineMesh obj attachMat:#IDToMat condenseMat:true deleteSourceNode:false
	meshop.deleteverts CombineMesh #{1..3}
	addModifier CombineMesh CombineSkin
	for b in bones_list do skinOps.addbone CombineSkin b 0
	CombineSkin.filter_vertices = true

	classof CombineMesh --2020仍然需要这个来更新顶点,但是某些较低的版本不这样也没问题.在此兼容
	select CombineMesh --在设置前选择来更新顶点和兼容低版本

-- 	print weights_list.count
	for vid = 1 to weights_list.count do (skinOps.ReplaceVertexWeights CombineSkin vid weights_list[vid][1] weights_list[vid][2])--skinOps.SetVertexWeights --报错Exceeded the vertex countSkin:Skin
	skinOps.SelectVertices CombineSkin select_verts_list
	
)))))
-- delete $'*_snapshot'
delete $'CombineSkinMesh*'
CombineMeshAndSkin (getCurrentSelection())

/* 	
skinOps.GetVertexWeightCount <Skin> <vertex_integer> 
skinOps.GetVertexWeightBoneID <Skin> <vertex_integer> <vertex_bone_integer> 
skinOps.GetVertexWeight <Skin> <vertex_integer> <vertex_bone_integer> 
skinOps.SetVertexWeights <Skin> <vertex_integer> \ ( <vertex_bone_integer> | <vertex_bone_array> ) \ ( <weight_float> | <weight_array> )
skinOps.getSelectedVertices <Skin>
 */
-- 	skinOps.GetNumberVertices $.skin --即使是实例,也会只处理当前关联的物体,比如两个box,skinOps.GetNumberVertices 得到 8
	
-- mapped fn ad a = 
-- (
-- 	a+=1
-- )
-- a = #(1,2,3)
-- ad a
-- a
-- #(1, 2, 3)