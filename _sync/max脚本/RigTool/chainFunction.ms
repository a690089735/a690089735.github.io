fn  setZeroTrans objs fpos:true frot:true absf:true first:true state:(getCommandPanelTaskMode()) = --参数为:1物体或物体数组 2绝对冻结 3是否第一次运行 4面板状态 3和4用于递归,都不需要指定
(
	if first do setCommandPanelTaskMode #create
	if classof objs == array then
		for obj in objs do setZeroTrans obj fpos:fpos frot:frot absf:absf first:false state:state
	else 
	(
-- 		if isValidNode objs do (
		if fpos do
		(
			if absf do objs.pos.controller = bezier_position ()
			local ctrl = objs.pos.controller = position_list ()
			ctrl.Available.controller =  Position_XYZ ()
			ctrl.Active = 2
			ctrl.setName 1 "Zero"
			ctrl.setName 2 "XYZ"
		)
		if frot do
		(
			if absf do objs.rotation.controller = Euler_XYZ ()
			local ctrl = objs.rotation.controller = rotation_list ()
			ctrl.Available.controller = Euler_XYZ ()
			ctrl.Active = 2
			ctrl.setName 1 "Zero"
			ctrl.setName 2 "XYZ"
		)
-- 		)
	)
	if first do setCommandPanelTaskMode state
)

fn rigARot self target parent canTwist:#() = --大家都事先冻结好
(
	setZeroTrans self frot:false
	ctrl = self.rotation.controller = rotation_list ()
	LookCtrl = ctrl[1].controller = rotation_script ();ctrl.setName 1 "LookAt Zero"
	LookCtrl.AddNode "nodeParent" parent --添加父物体节点变量
	LookCtrl.AddTarget "rotX" parent.rotation.controller[2].controller[1] --添加父物体X变量
	LookCtrl.addObject "posThisCtrl" self.pos.controller --添加自身位置变量
	LookCtrl.addObject "posTargetCtrl" Target.pos.controller --添加目标位置变量
	LookCtrl.script = "posThis=posThisCtrl.value*inverse nodeParent.transform
	posTarget=posTargetCtrl.value*inverse nodeParent.transform
	vector=posTarget-posThis
	axis=normalize (cross vector [1,0,0])
	angle=acos (normalize vector).x
	(quat rotX [1,0,0])*(quat angle axis)*nodeParent.transform.rotation"
-- 	ctrl[2].controller = Euler_XYZ ()
	if canTwist.count = 4 do
	(
		A = canTwist[1]
		B = canTwist[2]
		valA = canTwist[3]
		valB = canTwist[4]
		TwistCtrl = ctrl[3].controller = rotation_script ();ctrl.setName 3 "Twist XYZ"
		TwistCtrl.AddTarget "rotXA" A
		TwistCtrl.AddTarget "rotXB" B
		TwistCtrl.script = "quat (rotXA*"+valA+"+rotXB*"+valB+") [-1,0,0]"
	)
)
-- rigARot selection[1] selection[2] selection[3]

fn CreateLimbPart points seg name:"" size:0.2 = 
(
	transA = points[1].transform
	transB = points[2].transform
	transC = copy transB;transC.pos = (transA.pos + transB.pos)/2
	
	L = line transform:transA name:(name + "_spl")
	addNewSpline L
	addKnot L 1 #corner #curve transA.pos
	addKnot L 1 #corner #curve transB.pos
	updateShape L
	setKnotType L 1 1 #bezier
	setKnotType L 1 2 #bezier
	if 	Seg > 1 do--创建分段
	(
		--初始化
		count = (Seg + 1) --实际数量
		per = 100.0 / Seg
		middlePoint = point size:size centermarker:on axistripod:off cross:on Box:off transform:transC name:(name+"_MC") wirecolor:gray
		--创建路径点1
		plist = #(point size:size centermarker:on axistripod:off cross:on Box:off transform:transA name:(name+"_P1") wirecolor:gray)
		plist[1].parent = points[1]
		plctrl = plist[1].pos.controller = position_list ()
		deleteKeys ctrl.percent.keys #allKeys
		ctrl.percent = 0
		ctrl.appendTarget L 50.0
		plctrl[2].controller = Position_XYZ ()
		plctrl.setName 1 "Zero"
		plctrl.setName 2 "XYZ"
		plist[1].pos.controller = position_list ()
		for i = 2 to count do --创建剩余路径点
		(
			val = ((i-1) * per)
			append plist (p = instance plist[1] name:(name + "_P" + i as string))
			p.pos.controller[1].percent = val
		)
		
	)
)
CreateLimbPart #(selection[1],selection[2]) 6