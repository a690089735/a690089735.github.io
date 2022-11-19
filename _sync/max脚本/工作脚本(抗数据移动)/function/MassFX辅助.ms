try (destroydialog MassFXTool)catch()

fn CreatSubBox PObj =
(
	bb = nodeGetBoundingBox PObj PObj.transform
	size = (bb[2]-bb[1])
	b = box width:size[1] length:size[2] height:size[3]
	CenterPivot b
	b.transform = PObj.transform
	b.pivot = PObj.transform.pos
	b.pos = PObj.center
 	b.pivot = PObj.transform.pos
 	b.name = uniqueName "MF_SubBox_"
	b.parent = PObj
)
	
rollout MassFXTool "辅助计算工具" width:128 height:240
(
	button 'btn1' "移除刚体修改器" pos:[8,8] width:112 height:32 align:#left
	button 'btn2' "创建子级Box" pos:[32,48] width:88 height:32 align:#left
	button 'btn3' "选择" pos:[8,48] width:24 height:16 align:#left
	button 'btn4' "删除" pos:[8,64] width:24 height:16 align:#left
	on btn1 pressed do
		for i in selection where classof i.modifiers[1] == MassFX_RBody do deleteModifier i 1
	on btn2 pressed do
		with animate off (for i in selection do CreatSubBox i)
	on btn3 pressed  do
		select $'MF_SubBox_*'
	on btn4 pressed  do
		delete $'MF_SubBox_*'
)

createdialog MassFXTool