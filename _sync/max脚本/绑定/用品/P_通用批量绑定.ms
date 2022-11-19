try(destroydialog unnamedRollout)catch()

rollout unnamedRollout "Untitled" width:152 height:192
(
	local
	objs1,
	objs2
	fn obj2str objs = 
	(
		local str = "物体:\n"
		for o in objs do str += (o.name+"\n")
		str
	)
	checkButton ckb1 "将约束留滞在新层级" pos:[8,8] width:136 height:24
	button btn_get1 "被动" pos:[8,40] width:64 height:24 toolTip:"被影响的物体"
	button btn_get2 "控制" pos:[80,40] width:64 height:24 toolTip:"用作控制的物体"
	button btn_set2 "冻结型方向约束" pos:[8,104] width:136 height:24 toolTip:"以旋转约束为基的冻结变换."
	button btn_set1 "重设现有的冻结变换" pos:[8,72] width:136 height:24 enabled:false toolTip:"记录变换到现有的冻结变换."
	
	on btn_get1 pressed do
	(
		objs1 = getcurrentselection()
		btn_get1.toolTip = obj2str objs1
	)
	on btn_get2 pressed do
	(
		objs2 = getcurrentselection()
		btn_get2.toolTip = obj2str objs2
	)
	on btn_set2 pressed do
	undo "冻结型方向约束" on(
		if ckb1.checked then
		(
			for i = 1 to objs1.count do
			(
				local
				ctrl,
				sctrl,
				o1 = objs1[i],
				o2 = objs2[i],
				pt = dummy boxsize:[1,1,1] transform:o1.transform
				
				--先设定父物体,这样有旋转问题的地方会显示出来,然后重更新skin即可.
				pt.parent = o1.parent
				o1.parent = pt
				
				ctrl = pt[3][1].controller = position_List()
				ctrl[1].controller = Bezier_position()
				ctrl[2].controller = Position_XYZ()
				ctrl.active = 2
				
				ctrl = pt[3][2].controller = rotation_List()
				sctrl = ctrl[1].controller = Orientation_Constraint()
				sctrl.appendTarget o2 50.0
				sctrl.RELATIVE = on
				ctrl[2].controller = Euler_XYZ()
				ctrl.active = 2
			)
		)else
		(
			for i = 1 to objs1.count do
			(
				local
				ctrl,
				sctrl,
				o1 = objs1[i],
				o2 = objs2[i]
				
				ctrl = o1[3][1].controller = position_List()
				ctrl[1].controller = Bezier_position()
				ctrl[2].controller = Position_XYZ()
				ctrl.active = 2
				
				ctrl = o1[3][2].controller = rotation_List()
				sctrl = ctrl[1].controller = Orientation_Constraint()
				sctrl.appendTarget o2 50.0
				sctrl.RELATIVE = on
				ctrl[2].controller = Euler_XYZ()
				ctrl.active = 2
			)
		)
	)
	on btn_set1 pressed do
		(
	)
)
createdialog unnamedRollout
