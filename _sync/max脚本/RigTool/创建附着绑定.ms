fn attRig size:1 hold:true =
undo "attRig" on(
	fn rotate2 obj rot_q = --可用于注视约束的旋转功能,当.set_orientation 为真,且.relative为假时.可以交互式的设置旋转偏移.
	(
		rotate obj (quatToEuler2(rot_q - obj.transform.rotation)) --注意,$.rotation和$.transform.rotation的结果并不一定一样.
	)
	for i in getCurrentSelection() do
	(
		local
		trans = i.transform,
		verts = for p in #([1,0,0], [-.5,.866025,0], [-.5,-.866025,0]) collect p * size,
		prt = if isValidNode i.parent then i.parent else unsupplied,
		m = mesh name:(i.name+" atm") transform:trans vertices:verts tverts:verts faces:#([1,2,3]) wirecolor:green parent:prt,
		p = point name:(i.name+" atp") transform:i.transform wirecolor:green parent:prt,
		ctrl = p[3][1].controller = Attachment node:m align:hold
		AttachCtrl.addNewKey ctrl 0
		AttachCtrl.update ctrl
		if hold do (animate off (rotate2 p i.transform.rotation)) --在这里旋转对齐
		i.parent = p
	)
)
attRig size:20 hold:false