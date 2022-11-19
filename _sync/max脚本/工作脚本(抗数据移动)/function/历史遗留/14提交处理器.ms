try(destroydialog Temp1)catch()
rollout Temp1 "临时1" width:488 height:152
(
	button btn11 "检查修改器" pos:[16,24] width:136 height:112
	button btn12 "覆盖存文件" pos:[336,24] width:136 height:112
	GroupBox grp5 "检查修改器" pos:[8,8] width:152 height:136
	GroupBox grp6 "覆盖存文件" pos:[328,8] width:152 height:136
	button btn3 "隐显其他模型" pos:[176,24] width:136 height:112
	GroupBox grp3 "隐显其他模型" pos:[168,8] width:152 height:136
	on btn11 pressed do
	(--检查是否存在bonespro
	geos = ($Geometry as array)
	sel = #()
	for i in geos do
		for j in i.Modifiers do
			if classof(j) == BonesPro do
				append sel i
	if sel.count == 0 then
		messagebox("脚本未在场景中发现 Bonespro 修改器.-s" )
	else
		(
			select sel
			messagebox("含有Bonespro的物体已被选择.-s" )
		)
	)
	on btn12 pressed do
	(
		--将当前文件复制一个,并重命名为max.bak--然后覆盖保存
		nowFilename = maxFilePath + maxFileName
		oldFilename = maxFilePath + "old.bak"
		deletefile oldFilename
		copyFile (nowFilename) (oldFilename)
		try(saveMaxFile (nowFilename) saveAsVersion:2012 quiet:False)catch(messagebox "覆盖失败,请检查文件是否存在." )
	)
	on btn3 pressed do
	(
	if hideByCategory.bones == on then
		(hideByCategory.shapes = off
		hideByCategory.helpers = off
		hideByCategory.bones = off)
	else
		(hideByCategory.shapes = on
		hideByCategory.helpers = on
		hideByCategory.bones = on)
	
	)
)
createdialog Temp1 pos:[15,90]