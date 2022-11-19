try(destroydialog CRRollout)catch()
rollout CRRollout "创建眼球绑定" width:96 height:184
(
	button btn_cc "创建注视" pos:[8,32] width:80 height:24 toolTip:"选中一把父骨骼,然后点创建,选择的第一个骨骼是眼睛骨骼"
	checkbox chk1 "创建父级" pos:[8,8] width:80 height:16 enabled:false checked:true
	button btn2 "六方旋转(画右)" pos:[8,72] width:80 height:24 toolTip:"必须是本工具创建的绑定,先选主控骨骼,然后从最左开始顺时针旋转骨骼,点击六方旋转."
	button btn3 "滑块旋转" pos:[8,152] width:80 height:24 toolTip:"必须是本工具创建的绑定,先选择滑块,然后选择骨骼"
	button btn4 "六方旋转(画左)" pos:[8,104] width:80 height:24 toolTip:"必须是本工具创建的绑定,先选主控骨骼,然后从最右开始顺时针旋转骨骼,点击六方旋转."

	
	fn  setFreezeTransform objs = 
	(
		for obj in objs do 
		(
			obj.pos.controller = bezier_position ()
			obj.pos.controller = position_list ()
			obj.pos.controller.Available.controller =  Position_XYZ ()
			obj.pos.controller.Active = 2
			obj.rotation.controller = Euler_XYZ ()
			obj.rotation.controller = rotation_list ()
			obj.rotation.controller.Available.controller = Euler_XYZ ()
			obj.rotation.controller.Active = 2
		)
	)

	fn setparamwire sub a b val= --#X_Rotation;#Y_Rotation;#Z_Rotation
	(
		paramWire.connect a.rotation.controller[2][sub] b.rotation.controller[2][sub] val
	)

	
	
	on btn_cc pressed do
	with undo on(
		BoneList = selection as array
		for B in BoneList do 
		(	
			size = (b.height+b.width)
			--最好先对骨骼命名
			p = point name:(b.name+"_P") centermarker:on axistripod:off cross:off Box:off size:(size*0.3) wirecolor:green
			p.parent = b.parent;p.transform = b.transform
			r = point name:(b.name+"_R") centermarker:off axistripod:off cross:on Box:off size:(size*0.5) wirecolor:Yellow
			r.transform = b.transform
			r.parent = p
			b.parent = r
			setFreezeTransform #(p,r)
			
			tag = point name:(b.name+"_Tag") parent:b.parent transform:b.children[1].transform centermarker:on axistripod:off cross:on Box:off size:size wirecolor:red
			b.rotation.controller = Euler_XYZ () --解除直接加旋转列表会把内容作为子控制器
			b.rotation.controller = rotation_list ()
			ctrl = b.rotation.controller[2].controller = LookAt_Constraint ()
			b.rotation.controller.Active = 2
			ctrl.appendTarget tag 50
			b.rotation.controller.LookAt_Constraint.controller.upnode_world = off
			b.rotation.controller.LookAt_Constraint.controller.lookat_vector_length = 0
			ctrl.pickUpNode = r
		)
		
	)
	on btn2 pressed do
	with undo on(
		max create mode
		
		sel = selection as array
		mainCtrl = sel[1].parent
		wireCtrl = for i = 2 to sel.count collect sel[i].parent
		
	-- 		Xvals = #()
		Yvals = #("0.05","0.15","0.15","0.05","0.1","0.1")
		Zvals = #("0.01","0.15","0.15","0.01","0.065","0.065")
		
		setFreezeTransform #(wireCtrl[2],wireCtrl[3])
		
		for i = 1 to wireCtrl.count do 
		(	
	-- 		setparamwire (#X_Rotation) mainCtrl wireCtrl [i] ("X_Rotation*"+Xvals[i] as string)
			setparamwire (#Y_Rotation) mainCtrl wireCtrl [i] ("Y_Rotation*"+Yvals[i])
			setparamwire (#Z_Rotation) mainCtrl wireCtrl [i] ("Z_Rotation*"+Zvals[i])
		)
		wireCtrl[2].rotation.controller[2].Z_Rotation.controller = float_list ()
		paramWire.connect mainCtrl.rotation.controller[2][#Y_Rotation] wireCtrl[2].rotation.controller[2].Z_Rotation.controller[#Available] "-Y_Rotation*0.12"
		wireCtrl[3].rotation.controller[2].Z_Rotation.controller = float_list ()
		paramWire.connect mainCtrl.rotation.controller[2][#Y_Rotation] wireCtrl[3].rotation.controller[2].Z_Rotation.controller[#Available] "Y_Rotation*0.12"
	)
	on btn3 pressed do
(
		with undo on(
			a = selection[1];b = selection[2].parent
			paramWire.connect a.pos.controller[2].Y_Position.controller[#Limited_Controller__Bezier_Float] b.rotation.controller[2].controller[#Y_Rotation] "-Limited_Controller__Bezier_Float/25"
			paramWire.connect a.pos.controller[2].X_Position.controller[#Limited_Controller__Bezier_Float] b.rotation.controller[2].controller[#Z_Rotation] "Limited_Controller__Bezier_Float/25"
		)
	)
	on btn4 pressed do
	with undo on(
		max create mode
		
		sel = selection as array
		mainCtrl = sel[1].parent
		wireCtrl = for i = 2 to sel.count collect sel[i].parent
		
	-- 		Xvals = #()
		Yvals = #("0.05","0.15","0.15","0.05","0.1","0.1")
		Zvals = #("0.01","0.15","0.15","0.01","0.065","0.065")
		
		setFreezeTransform #(wireCtrl[2],wireCtrl[4])
		
		for i = 1 to wireCtrl.count do 
		(	
	-- 		setparamwire (#X_Rotation) mainCtrl wireCtrl [i] ("X_Rotation*"+Xvals[i] as string)
			setparamwire (#Y_Rotation) mainCtrl wireCtrl [i] ("Y_Rotation*"+Yvals[i])
			setparamwire (#Z_Rotation) mainCtrl wireCtrl [i] ("Z_Rotation*"+Zvals[i])
		)
		wireCtrl[2].rotation.controller[2].Z_Rotation.controller = float_list ()
		paramWire.connect mainCtrl.rotation.controller[2][#Y_Rotation] wireCtrl[2].rotation.controller[2].Z_Rotation.controller[#Available] "Y_Rotation*0.12"
		wireCtrl[3].rotation.controller[2].Z_Rotation.controller = float_list ()
		paramWire.connect mainCtrl.rotation.controller[2][#Y_Rotation] wireCtrl[3].rotation.controller[2].Z_Rotation.controller[#Available] "-Y_Rotation*0.12"
	)
)

createdialog CRRollout