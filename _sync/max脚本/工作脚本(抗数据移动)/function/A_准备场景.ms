try(destroydialog preTool)catch()

rollout preTool "场景准备" width:168 height:248
(
	local keepParent = true
	/* Box塌陷物体 */
	fn Boxingcollapse objs:(selection as array)
	deletemodifiers:false --塌陷前删除修改器
	keeptrans:false --保持原变换
	center:false --位于中心
	keepparent:false --保持原父物体
	clearIsoVerts:true --清除孤立顶点
	keepmodifiers:false --保持原修改器(对editpoly支持不完整)
	keepcontrollers:false --保持原控制器
	changecolor:true --改变新物体的颜色
	wirecolor:blue --新物体的线框颜色
	passtip:false --跳过的物体被提示
	passcolor:red --跳过的物体的提示颜色
	allGeometry:true --执行所有Geometry对象
	first:true state:#create =
	undo "BoxingClearModel" on(
-- 		if classof objs == ObjectSet do objs = objs as array
		if first do (state = getCommandPanelTaskMode();setCommandPanelTaskMode #create)
		if classof objs == array then for obj in objs do 
			Boxingcollapse objs:obj deletemodifiers:deletemodifiers keeptrans:keeptrans keepparent:keepparent center:center clearIsoVerts:clearIsoVerts keepmodifiers:keepmodifiers keepcontrollers:keepcontrollers changecolor:changecolor wirecolor:wirecolor first:false passtip:passtip passcolor:passcolor allGeometry:allGeometry
		else
		(
			exe = if allGeometry and superclassof objs != GeometryClass then false else true
			if exe then
			(
				with redraw off(animate off(
					sname = objs.name;cbox = box wirecolor:(if changecolor then wirecolor else objs.wirecolor);ConverttoPoly cbox;polyop.deleteVerts cbox #{1..8}
					if keeptrans do (cbox.transform = objs.transform;cbox.scale = [1,1,1])
					if center do cbox.pos = objs.center
					if keepparent do cbox.parent = objs.parent
					if keepmodifiers do for i = objs.modifiers.count to 1 by -1 do addmodifier cbox objs.modifiers[i]
					if keepcontrollers do cbox.transform.controller = objs.transform.controller
					if deletemodifiers do for i = 1 to objs.modifiers.count do deletemodifier objs 1
					polyop.attach cbox objs
					cbox.name = sname
					if clearIsoVerts do polyop.deleteIsoVerts cbox
				))
			)
			else
			(
				if passtip do objs.wirecolor = passcolor
			)
		)
		if first do setCommandPanelTaskMode state
	)
	button btn1 "1_检查带有修改器的物体" pos:[8,8] width:152 height:32
	button btn2 "2_B  o  x  塌  陷  -  原  点" pos:[8,48] width:152 height:32
	button btn3 "3_B  o  x  塌  陷  -  零  点" pos:[8,88] width:152 height:32
	button btn4 "4_B  o  x  塌  陷  -  中  心" pos:[8,128] width:152 height:32
	button btn5 "5_去       除       材       质" pos:[8,168] width:152 height:32
	button btn11 "创建多层" pos:[104,224] width:56 height:16
	editText edt1 "前缀" pos:[8,224] width:96 height:16
	on btn1 pressed do
		(clearselection();select (for i in objects as array where i.modifiers.count > 0 collect i))
	on btn2 pressed do
		Boxingcollapse keeptrans:true passtip:true keepparent:keepParent
	on btn3 pressed do
		Boxingcollapse keeptrans:false passtip:true keepparent:keepParent
	on btn4 pressed do
		Boxingcollapse keeptrans:false passtip:true center:true keepparent:keepParent
	on btn5 pressed do
		for i in selection do i.mat = undefined
	on btn11 pressed do
	(
		pn = edt1.text
		for n in #("_Rig_Body", "_Ctrl_Body", "_Rig_Facial", "_Ctrl_Facial", "_Mesh_All", "_Node_Hidden", "_Morpher", "_Temp", "_Other") do layerManager.newLayerFromName (pn + n)
	)
	local MainMenu --添加了这个,菜单就可用了.不然会提示未定义
	local menu = rcMenu MainMenu
	(
		menuItem MI_keepParent "保持原父子层级连接" enabled:true checked:keepParent
		on MI_keepParent picked do keepParent = not keepParent
	)
	on preTool rbuttonup pos do 
		popUpMenu menu
)


createdialog preTool
