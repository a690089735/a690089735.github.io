try(destroydialog RORollout)catch()
rollout RORollout "替换物体" width:184 height:112
(
	button btn_copy "Copy" pos:[16,24] width:72 height:24
	button btn_Paste "Paste" pos:[96,24] width:72 height:24
	GroupBox grp1 "复制粘贴物体信息" pos:[8,8] width:168 height:48
	button btn3 "外框图形" pos:[96,72] width:72 height:24 toolTip:"选中物体,点击,物体替换为线框可撤销"
	
	local obj
	local offset = #()
	
	fn CreateFrameByBone nodeB = 
	(
		bb = nodeGetBoundingBox nodeB nodeB.transform
		size = (bb[2]-bb[1])
		b = box width:size[1] length:size[2] height:size[3]
		CenterPivot b
		b.transform = nodeB.transform
		b.pos = nodeB.center
		b.pivot = nodeB.transform.pos
	 	convertToPoly(b)

		polyop.createShape b #{1..12} smooth:false name:"Temp_!@#$%Frame" node:b
		frame = getnodebyname "Temp_!@#$%Frame"
		nodeB.baseobject = frame.baseobject
		nodeB.objectOffsetPos = frame.objectOffsetPos
		nodeB.objectOffsetRot = frame.objectOffsetRot
		nodeB.objectOffsetScale = frame.objectOffsetScale
		
		delete #(b,frame)
	)
	fn CreateBoxByBone nodeB = 
	(
		bb = nodeGetBoundingBox nodeB nodeB.transform
		size = (bb[2]-bb[1])
		b = box width:size[1] length:size[2] height:size[3]
		CenterPivot b
		b.transform = nodeB.transform
		b.pos = nodeB.center
		b.pivot = nodeB.transform.pos

		nodeB.baseobject = b.baseobject
		nodeB.objectOffsetPos = b.objectOffsetPos
		nodeB.objectOffsetRot = b.objectOffsetRot
		nodeB.objectOffsetScale = b.objectOffsetScale
		
		delete b
	)
	
	GroupBox grp2 "风格替换" pos:[8,56] width:168 height:48
	button btn4 "方块体" pos:[16,72] width:72 height:24 toolTip:"选中物体,点击,物体替换为线框可撤销"
	on btn_copy pressed do
	(
		sel = selection[1]
		obj = sel.baseobject
		offset = #(sel.objectOffsetPos,sel.objectOffsetRot,sel.objectOffsetScale)
	)
	on btn_Paste pressed do
	with undo on(
		if obj != undefined do for o in (selection as array) do 
		(
			o.baseobject = obj
			o.objectOffsetPos = offset[1]
			o.objectOffsetRot = offset[2]
			o.objectOffsetScale = offset[3]
		)
	)
	on btn3 pressed do
	(
		undo "ConvertToFrame" on
		(
			state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
			for obj in selection as array do CreateFrameByBone obj
			setCommandPanelTaskMode state 
		)
	)
	on btn4 pressed do
	(
		undo "ConvertToBox" on
		(
			state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
			for obj in selection as array do CreateBoxByBone obj
			setCommandPanelTaskMode state 
		)
	)
)

createdialog RORollout