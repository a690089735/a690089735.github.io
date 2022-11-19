try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:152 height:72
(
	local 
	objs1,
	objs2
	
	fn setLinkconstraint objs1 objs2 = 
	(
		local
		count = objs1.count,
		objs1Prt = #()
		
		for i = 1 to count do --记录并清理父物体,添加控制器--添加约束目标
		(
			o = objs1[i]
			append objs1Prt o.parent;
			o.parent = undefined;
			ctrl = o[3].controller = Link_Constraint()
			ctrl.addTarget objs2[i] 0
		) 
		
		for i = 1 to count do --回复层级
		(
			objs1[i].parent = objs1Prt[i]
		)
		
	)
-- setLinkconstraint #($[1]) #($[2])
	button btn_C1 "Collect1" pos:[8,8] width:64 height:24 toolTip:"收集骨骼"
	button btn_C2 "Collect2" pos:[80,8] width:64 height:24 toolTip:"收集控制器"
	button btn_Do "Do" pos:[8,40] width:136 height:24 toolTip:"执行绑定"
	on btn_C1 pressed do
	(
		objs1 = getcurrentselection()
	)
	on btn_C2 pressed do
	(
		objs2 = getcurrentselection()
	)
	on btn_Do pressed do
	(
		setLinkconstraint objs1 objs2
	)
)
createdialog unnamedRollout