

--由以上测试可得,添加顺序不同,骨骼序号不同,所以要按顺序获取骨骼,再按顺序加一遍.(先加的序号小)



try(destroyDialog CleanSkinTool)catch()

rollout CleanSkinTool "净化权重工具" width:152 height:104
(
	button btn1 "复制骨骼列表" pos:[8,8] width:88 height:24
	button btn2 "粘贴" pos:[104,8] width:40 height:24
	button btn3 "复制权重设置" pos:[8,40] width:88 height:24
	button btn4 "粘贴" pos:[104,40] width:40 height:24
	button btn5 "移除零权重" pos:[56,72] width:88 height:24
	
	local Skm1,Skm2,boneList,skData
	
	on btn1 pressed  do
	try
	(
		skm1 = for m in selection[1].modifiers where classof m == skin do exit with m
		boneList = for i = 1 to skinOps.GetNumberBones skm1 collect getnodeByName (skinOps.GetBoneName skm1 i 0) --获取骨骼
		btn1.tooltip = "OK"
	)
	catch(messagebox "出错!")
	on btn2 pressed  do
	(
-- 		skm2 = for m in selection[1].modifiers where classof m == skin do exit with m
		skm2 = (skin())
		addmodifier selection[1] (skm2)
		for i = 1 to skinOps.GetNumberBones skm2 do skinOps.removebone skm2 i
		for b in boneList do skinOps.addbone skm2 b -1 --按获取的骨骼添加
	)
	on btn3 pressed  do
	if classof skm1 == skin then(
		skData = for i = 1 to skinOps.GetNumberVertices skm1 collect (for j = 1 to skinOps.GetVertexWeightCount skm1 i collect #(skinOps.GetVertexWeightBoneID skm1 i j,skinOps.GetVertexWeight skm1 i j))--获取每个顶点对应的骨骼ID和权重
		btn3.tooltip = "OK"
	)else messagebox "未复制骨骼列表"
	on btn4 pressed  do
	if classof skm2 == skin then(
		--设置骨骼和权重
		for i = 1 to skData.count do
		(
			BList = for d in skData[i] collect d[1]
			WList = for d in skData[i] collect d[2]
			skinOps.SetVertexWeights skm2 i BList WList
		)
	)else messagebox "未粘贴骨骼列表"
	on btn5 pressed  do
	(
		try(skinOps.RemoveZeroWeights (for m in selection[1].modifiers where classof m == skin do exit with m))catch()
	)
)
createDialog CleanSkinTool