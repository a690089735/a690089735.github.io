fn setR2 type:#tcb =
(
	local state = getCommandPanelTaskMode()
	setCommandPanelTaskMode #create
	case type of --这样虽然代码比较多,但是用到的判断比较少,不确定在指定前创建控制器可以稳定保留原有的帧.
	(
		#tcb : (
			for i in getCurrentSelection() do
			(
				if classof i[3].controller == prs then
				(
					local ctrl = i[3][2].controller
					if classof ctrl == rotation_list then
					(
						i[3][2].controller[ctrl.active].controller = tcb_rotation()
					)else
					(
						i[3][2].controller = tcb_rotation()
					)
				)else messagebox (i.name + " 未找到支持的旋转控制器.")
			)
		)
		#euler : (
			for i in getCurrentSelection() do
			(
				if classof i[3].controller == prs then
				(
					local ctrl = i[3][2].controller
					if classof ctrl == rotation_list then
					(
						i[3][2].controller[ctrl.active].controller = Euler_XYZ()
					)else
					(
						i[3][2].controller = Euler_XYZ()
					)
				)else messagebox (i.name + " 未找到支持的旋转控制器.")
			)
		)
		
	)
	setCommandPanelTaskMode state
)
setR2 type:#tcb