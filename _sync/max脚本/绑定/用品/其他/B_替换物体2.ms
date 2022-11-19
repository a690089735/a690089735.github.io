try(destroydialog RORollout)catch()
rollout RORollout "替换物体" width:184 height:112
(	
	local obj
	local offset = #()
	
	fn RotatePivotOnly obj rotation	= 
	(
		local rotValInv=inverse (rotation as quat)
		animate off in coordsys local obj.rotation*=RotValInv
		obj.objectoffsetrot*=RotValInv
		obj.objectoffsetpos*=RotValInv
	)
	fn CreateBoxByBone nodeB Frame:false copyscale:true = 
	(
		trans = if copyscale then nodeB.transform else 
		(
			d = dummy rotation:nodeB.rotation  pos:nodeB.pos
			result = d.transform
			delete d
			result
		)
		bb = nodeGetBoundingBox nodeB (trans)
		size = (bb[2]-bb[1])
		b = box width:size[3] length:size[2] height:size[1]
		
		b.transform = (matrix3 [0,0,-1] [0,1,0] [1,0,0] [0,0,0])*trans
		b.center = nodeB.center
		b.pivot = nodeB.pivot
		RotatePivotOnly b (EulerAngles 0 -90 0)
		
		if frame do
		(
			
			polyop.createShape (converttopoly b) #{1..12} smooth:false name:"Temp_!@#$%Frame" node:b
			delete b
			b = getnodebyname "Temp_!@#$%Frame"
		)
	
		nodeB.baseobject = b.baseobject
		nodeB.objectOffsetPos = b.objectOffsetPos
		nodeB.objectOffsetRot = b.objectOffsetRot
		nodeB.objectOffsetScale = b.objectOffsetScale
		
		delete b
	)
	button btn_copy "复制" pos:[16,24] width:72 height:24
	button btn_Paste "粘贴" pos:[96,24] width:72 height:24
	GroupBox grp1 "复制粘贴物体信息" pos:[8,8] width:168 height:48
	GroupBox grp2 "风格替换" pos:[8,56] width:168 height:48
	button btn3 "外框图形" pos:[96,72] width:72 height:24 toolTip:"选中物体,点击,物体替换为线框可撤销"
	button btn4 "方块体" pos:[24,72] width:64 height:24 toolTip:"选中物体,点击,物体替换为Box，可撤销"
	button btn5 "" pos:[16,72] width:8 height:24 toolTip:"选中物体,点击,物体替换为无缩放Box，可撤销"
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
			o.objectOffsetPos = offset[1];o.objectOffsetRot = offset[2];o.objectOffsetScale = offset[3]
		)
	)
	on btn3 pressed do
	(
		undo "ConvertToFrame" on
		(
			state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
			for obj in selection as array do CreateBoxByBone obj Frame:true
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
	on btn5 pressed do
	(
		undo "ConvertToBoxABS" on
		(
			state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
			for obj in selection as array do (CreateBoxByBone obj copyscale:false;obj.scale = [1,1,1])
			setCommandPanelTaskMode state
		)
	)
)

createdialog RORollout