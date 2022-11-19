--需求:替换蒙皮骨骼 用A蒙皮,然后将权重替换到B
try(destroydialog skintool)catch()
rollout skintool "蒙皮工具" width:144 height:256
(
	button btn_load "读取skin" pos:[8,8] width:128 height:24
	listbox lbx1 "skin骨骼" pos:[8,40] width:128 height:11
	pickbutton btn_R "拾取物体替换" pos:[8,221] width:128 height:27
	local skinmod

	
	
	on btn_load pressed do
	(
		skinmod = selection[1].skin
		
		lbx1.items = for i = 1 to skinOps.GetNumberBones skinmod collect skinOps.GetBoneName skinmod i 1 --不知道为啥,这里反着来才是正的..
	)
	on btn_R picked obj do
	(
		index = lbx1.selection
		--获取所有顶点
		vertexList = for i = 1 to skinOps.GetNumberVertices skinmod where  (findItem (for j = 1 to skinOps.GetVertexWeightCount skinmod i collect skinOps.GetVertexWeightBoneID skinmod i j) index)>0 collect i
--  		print vertexList
		--获取顶点的所有骨骼和所有权重#(#(骨骼序号列表),#(权重列表))
		boneweightList = for i in vertexList collect #(for j = 1 to skinOps.GetVertexWeightCount skinmod i collect skinOps.GetVertexWeightBoneID skinmod i j ,for j = 1 to skinOps.GetVertexWeightCount skinmod i collect skinOps.GetVertexWeight skinmod i j)
--  		print boneweightList
		--替换选中的骨骼,如果不在骨骼列表里,则添加
 		if findItem lbx1.items obj.name == 0 do skinOps.addbone skinmod obj 0
		newbonelist = for i = 1 to skinOps.GetNumberBones skinmod collect skinOps.GetBoneName skinmod i 1
		boneID = findItem newbonelist obj.name
-- 		print boneID
		local listID
		for i = 1 to boneweightList.count do 
			if (listID = findItem boneweightList[i][1] boneID) == 0 
			then boneweightList[i][1][findItem boneweightList[i][1] lbx1.selection] = boneID 
			else (boneweightList[i][2][findItem boneweightList[i][1] boneID]+= boneweightList[i][2][findItem boneweightList[i][1] lbx1.selection];boneweightList[i][2][findItem boneweightList[i][1] lbx1.selection] = 0)
-- 		print boneweightList
 		for i = 1 to vertexList.count do skinOps.ReplaceVertexWeights skinmod vertexList[i] boneweightList[i][1] boneweightList[i][2]
--		整理
		lbx1.items = newbonelist
	)
)
createdialog skintool