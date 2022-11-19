fn Boxingcollapse objs:(objects as array) 
deletemodifiers:false --塌陷前删除修改器
keeptrans:false --保持原变换
keepparent:false --保持原父物体
clearIsoVerts:false --清除孤立顶点
keepmodifiers:false --保持原修改器(对editpoly支持不完整)
keepcontrollers:false --保持原控制器
changecolor:true --改变新物体的颜色
wirecolor:blue --新物体的线框颜色
passtip:false --跳过的物体被提示
passcolor:red --跳过的物体的提示颜色
allGeometry:true --执行所有Geometry对象
matchlist:#() --可被执行的物体类型,上方为false的时候有用
first:true state:#create =
undo "BoxingClearModel" on(
	if first do (state = getCommandPanelTaskMode();setCommandPanelTaskMode #create)
	if classof objs == array then for obj in objs do 
		Boxingcollapse objs:obj deletemodifiers:deletemodifiers keeptrans:keeptrans keepparent:keepparent clearIsoVerts:clearIsoVerts keepmodifiers:keepmodifiers keepcontrollers:keepcontrollers changecolor:changecolor wirecolor:wirecolor first:false passtip:passtip passcolor:passcolor allGeometry:allGeometry redmatchlist:matchlist state:state
	else
	(
		if allGeometry and superclassof objs == GeometryClass do matchlist = #(classof objs)
		if findItem matchlist (classof objs) > 0 then
		(
			with redraw off(animate off(
				sname = objs.name;cbox = box wirecolor:(if changecolor then wirecolor else objs.wirecolor);ConverttoPoly cbox;polyop.deleteVerts cbox #{1..8}
				if keeptrans do cbox.transform = objs.transform;if keepparent do cbox.parent = objs.parent
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
-- 示例 maya导入用
Boxingcollapse objs:(selection as array) deletemodifiers:true keeptrans:true wirecolor:gray passtip:true --keepmodifiers:true 