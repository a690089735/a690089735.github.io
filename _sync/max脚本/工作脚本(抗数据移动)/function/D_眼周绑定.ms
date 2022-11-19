try(Destroydialog EyeLidRollout)catch()

rollout EyeLidRollout "眼周绑定生成器" width:136 height:128
(
	fn  setFreezeTransform objs Frot:true= 
	(
		for obj in objs do 
		(
			obj.pos.controller = bezier_position ()
			obj.pos.controller = position_list ()
			obj.pos.controller.Available.controller =  Position_XYZ ()
			obj.pos.controller.Active = 2
			if Frot do 
			(
				obj.rotation.controller = Euler_XYZ ()
				obj.rotation.controller = rotation_list ()
				obj.rotation.controller.Available.controller = Euler_XYZ ()
				obj.rotation.controller.Active = 2
			)
		)
	)
	fn CreateRootRig Spl1 Spl2 =
	(
		prt = spl1.parent
		--**获取样条线长度
		LineLength = getSegLengths Spl1 1
		LineLength = LineLength[LineLength.count]
		--计算分段长度
		ALength = LineLength / 2 + 0.05
		Chain_Name = Spl1.name
		root = 	Point name:(uniqueName (Chain_Name + "_knot_root")) pos:prt.pos Centermarker:false Axistripod:false Cross:true Box:true  size:(LineLength*0.5) drawontop:false wirecolor:green parent:prt dir:[0,-1,0]
			
		rotC = Point Centermarker:false Axistripod:true Cross:false Box:true pos:prt.pos name:(uniqueName(Chain_Name + "_RotC_")) size:(ALength*0.75) wirecolor:Yellow dir:[0,-1,0] parent:root
		
		UpRot = Point Centermarker:false Axistripod:true Cross:false Box:true pos:prt.pos name:(uniqueName(Chain_Name + "_RotP_")) size:(LineLength*0.25) wirecolor:green dir:((getknotpoint Spl1 1 2) - root.pos) parent:root
		DnRot = Point Centermarker:false Axistripod:true Cross:false Box:true pos:prt.pos name:(uniqueName(Chain_Name + "_RotP_")) size:(LineLength*0.25) wirecolor:green dir:((getknotpoint Spl2 1 2) - root.pos) parent:root
		setFreezeTransform #(rotC,UpRot,DnRot)
	
		paramWire.connect rotC.rotation.controller[2][1] UpRot.rotation.controller[2][1] "X_Rotation * 0.15"
		paramWire.connect rotC.rotation.controller[2][2] UpRot.rotation.controller[2][2] "Y_Rotation * 0.3"
		paramWire.connect rotC.rotation.controller[2][1] DnRot.rotation.controller[2][1] "X_Rotation * 0.075"
		paramWire.connect rotC.rotation.controller[2][2] DnRot.rotation.controller[2][2] "Y_Rotation * 0.3"
			
		return #(root,uprot,dnrot)
	)
	fn CreateChainRig Spl boneNum LookRot handleCtrl root rotP reuse:#()= 
	(
-- 		Chain_Name = substituteString Spl.name "_Spl" ""
		Chain_Name = Spl.name
		setKnotType spl 1 2 #bezierCorner
		controllerNum = numknots Spl 1
		clearselection()
		--**获取样条线长度
		LineLength = getSegLengths Spl 1
		LineLength = LineLength[LineLength.count]
		--计算分段长度
		ALength = LineLength / (controllerNum - 1) + 0.05
		--**创建虚拟体
		skinMod = (skin())
		addModifier Spl skinMod
		
		ctrlList = for i = 1 to controllerNum collect Point Centermarker:true Axistripod:false Cross:false Box:true pos:(getknotpoint Spl 1 i) name:(uniqueName(Chain_Name + "_Ctrl_")) size:(ALength*0.55) wirecolor:orange dir:[0,-1,0]
		if reuse.count == 2 then--**复用
		(
			delete ctrlList[1];delete ctrlList[ctrlList.count]
			ctrlList[1] = reuse[1];ctrlList[ctrlList.count] = reuse[2]
		)
		Spl.parent = ctrlList.parent = root
		c2p = copy ctrlList[2] name:(uniqueName(Chain_Name + "_Ctrl_")) wirecolor:green
		c2p.size *= 0.5
		ctrlList[2].parent = c2p
		c2p.parent = rotP
		setFreezeTransform #(c2p)
		c2pctrl = c2p.rotation.controller[1].controller = Orientation_Constraint ()
		c2pctrl.appendTarget root 50.0
		--**skin
		select Spl
		max modify mode
		if handleCtrl then 
		(
			(
				i=2
				p1 = Point Centermarker:true Axistripod:false Cross:false Box:true pos:(getOutVec Spl 1 i) name:(uniqueName(Chain_Name + "_HCtrl_")) size:(ALength*0.35) wirecolor:((orange+white)/2) dir:[0,-1,0]
				p2 = Point Centermarker:true Axistripod:false Cross:false Box:true pos:(getInVec Spl 1 i) name:(uniqueName(Chain_Name + "_HCtrl_")) size:(ALength*0.35) wirecolor:((orange+white)/2) dir:[0,-1,0]
				p1.parent = p2.parent = ctrlList[i]
				insertItem (p1) ctrlList (i+1)
				insertItem (p2) ctrlList i
			)
			for i = 1 to ctrlList.count do 
			(
				skinOps.addbone skinMod ctrlList[i] 0
			)
			classof Spl;
			boneList = #(1,1,1,2,3,4,5,5,5);weightList = #(1,1,1,1,1,1,1,1,1)
			for i = 1 to 9 do skinOps.SetVertexWeights skinMod  i boneList[i] weightList[i]
		)
		else
			for i = 1 to ctrlList.count do 
			(
				skinOps.addbone skinMod ctrlList[i] 0
				for j = (i*3-2) to (i*3) do (classof Spl; skinOps.SetVertexWeights (skinMod) (j) (i) (1))
			)
		--**创建标记点(父物体)
		LengthPerCent= LineLength / (boneNum * LineLength) * 100 --分段百分比
		knotSize = LineLength / boneNum * 0.35
		KnotParentList = #()
		for i = 1 to (boneNum + 1) do
		(
			newknot = dummy name:(uniqueName(Chain_Name + "_Kn_P_")) boxsize:[0,0,0] dir:[0,-1,0]
			newknot.parent = root
			newknot.pos.controller = position_list ()
			newknot.pos.controller.Position_XYZ.controller = Path_Constraint ()
			deleteKeys newknot.pos.controller.Path_Constraint.controller.percent.keys #allKeys
			newknot.pos.controller.Path_Constraint.appendTarget Spl 50.0
			newknot.pos.controller.Path_Constraint.controller.percent = (LengthPerCent * (i - 1))
			newknot.pos.controller.Path_Constraint.controller.follow = true
			newknot.pos.controller.Available.controller = Position_XYZ ()
			newknot.pos.controller.Active = 2
			newknot.rotation.controller = rotation_list ()--用来绕过冻结变换的报错
			newknot.rotation.controller.Available.controller = Euler_XYZ ()--用来绕过冻结变换的报错
			newknot.rotation.controller.Active = 2--用来绕过冻结变换的报错
			append KnotParentList newknot
		)
-- 		freeze KnotParentList --冻结
		--**创建标记点(子物体)
		knotSize = LineLength / boneNum * 0.75
		KnotList = #()
		for i in KnotParentList do
		(
			newknot = dummy name:(uniqueName(Chain_Name + "_Kn_")) boxsize:[0,0,0] dir:[0,-1,0]
			newknot.transform = i.transform
			newknot.parent = i
			newknot.pos.controller = position_list ()
			newknot.pos.controller.Available.controller = Position_XYZ ()
			newknot.pos.controller.Active = 2
			newknot.rotation.controller = rotation_list ()--用来绕过冻结变换的报错
			newknot.rotation.controller.Available.controller = Euler_XYZ ()--用来绕过冻结变换的报错
			newknot.rotation.controller.Active = 2--用来绕过冻结变换的报错
			append KnotList newknot
		)
		--**创建骨骼
		boneList = #()
		boneSize = knotSize * 0.55
		bonename = Chain_Name + "_Bn_"
		for i = 1 to (KnotList.count - 1) do
		(
			pos1 = KnotList[i].transform.pos; pos2 = KnotList[i+1].transform.pos
			newbone = BoneSys.createBone pos1  pos2  (pos1+pos2)
			newbone.name = uniqueName bonename
			newbone.backfin = newbone.frontfin = newbone.sidefins = false
			newbone.width = newbone.height = boneSize
			newbone.taper = 0.0
			append boneList newbone
		)
		pos1 = KnotList[KnotList.count].transform.pos
		parent = boneList[boneList.count]
		newbone = BoneSys.createBone pos1 (pos1 + (boneSize / 2)) [0,0,1]
		newbone.name = uniqueName bonename
		newbone.backfin = newbone.frontfin = newbone.sidefins = false
		newbone.width = newbone.height = boneSize
		newbone.taper = 90.0
		append boneList newbone
		--骨骼链接
		count = boneList.count
		for i = count to 2 by -1 do boneList[i].parent = boneList[i-1]
		boneList[1].parent = KnotList[1]
		boneList[count].rotation.controller.value = (quat 0 0 0 1)
		--骨骼约束
		upnode = root
		if LookRot do upnode = copy root name:(uniqueName(Chain_Name + "Up_")) parent:Root wirecolor:blue
		upnode.size = ALength*0.15
		for i = 1 to (count - 1) do
		(
			b = boneList[i]
			--位置约束
			b.pos.controller = position_list ()
			b.pos.controller.Available.controller = Position_Constraint ()
			b.pos.controller[2].appendTarget knotList[i] 50.0
			b.pos.controller.Active = 2
			--注视约束
			b.rotation.controller = rotation_list ()
			b.rotation.controller.Available.controller = LookAt_Constraint ()
			b.rotation.controller[2].appendTarget knotList[i+1] 50.0
			b.rotation.controller[2].lookat_vector_length = 0.0
			b.rotation.controller.Active = 2
			b.rotation.controller.LookAt_Constraint.controller.upnode_world = off
			b.rotation.controller.LookAt_Constraint.controller.pickUpNode = upnode
		)
		if LookRot do 
		(
			upnode.rotation.controller = rotation_list ()
			upnode.rotation.controller.Available.controller = LookAt_Constraint ()
			upnode.rotation.controller[2].appendTarget  ctrlList[ctrlList.count/2+1] 50.0
			upnode.rotation.controller[2].lookat_vector_length = 0.0
			upnode.rotation.controller.Active = 2
			upnode.rotation.controller.LookAt_Constraint.controller.upnode_world = off
			upnode.rotation.controller.LookAt_Constraint.controller.pickUpNode = root
			upnode.rotation.controller.LookAt_Constraint.controller.target_axis = 2
			upnode.rotation.controller.LookAt_Constraint.controller.upnode_axis = 0
			upnode.rotation.controller.LookAt_Constraint.controller.StoUP_axis = 0
		)
		--位置约束
		b = boneList[count]
		b.pos.controller = position_list ()
		b.pos.controller.Available.controller = Position_Constraint ()
		b.pos.controller[2].appendTarget knotList[count] 50.0
		b.pos.controller.Active = 2
		
		return #(ctrlList[1],ctrlList[ctrlList.count])
	)
	button btn_Execute "创建眼周绑定" pos:[8,8] width:120 height:40 toolTip:"选中两条样条线.点击执行,检查通过后自动创建.
(请先设好首点,否则难以镜像.)
(请按先上后下的顺序选择,以便绑定旋转和复用眼角.))"
	button btn2 "选择" pos:[80,56] width:48 height:16
	edittext edt1 "" pos:[8,56] width:64 height:16
	button btn3 "眼球旋转绑定" pos:[8,96] width:120 height:24 toolTip:"选中被控,然后选控制器."
	label lbl1 "-------------------------------" pos:[8,80] width:120 height:16


	on EyeLidRollout open do
	(
	edt1.text="*_Kn_*"
	)
	on btn_Execute pressed do
	at time 0(
		--检查
		--检查标准:1.两条样条线;2.物体都是样条线;2.每条3个点;3.样条线都有父物体
		tipList = #("\n\t选中中含有非图形物体.","\n\t样条线内部数量不符合规定.","\n\t选中物体未含有父物体.","\n\t样条线命名可能不正确","\n\t样条线数量不为2.","\n\n自动选择了可以修复的物体.","\n\t二者父物体不匹配.")
		tips = "发现以下问题:"
		sel = selection as array
		if sel.count != 2 then tips += tipList[5] else if sel[1].parent != sel[2].parent do tips += tipList[7]
		unShape = for spl in sel where superclassof spl != shape collect spl
		unNum = for spl in sel where superclassof spl == shape and numSplines spl != 1 or numknots spl 1 != 3 collect spl
		unPrt = for spl in sel where spl.parent == undefined collect spl
		unNamed =  for spl in sel where not matchPattern spl.name pattern:"*_Spl*" collect spl
		er = #(unShape,unNum,unPrt,unNamed)
		for i = 1 to er.count where er[i].count != 0 do tips += tipList[i]
		
		--判断执行
		if tips.count == 7 then
		undo "CreateChainRig" on(
			temp = CreateRootRig sel[1] sel[2]
			CreateChainRig sel[2] 5 true true temp[1] temp[3] reuse:(
				CreateChainRig sel[1] 5 true true temp[1] temp[2]
			)
		)
		else
		(
			clearselection();erObjs = #();for a in er where classof a == array do erObjs += a;select (makeUniqueArray erObjs);messagebox (tips+=tipList[6])
		)
	)
	on btn2 pressed do
	(
		execute ("select $'" + edt1.text + "'")
	)
	on btn3 pressed  do
	undo on(
		--获取内容
		obj1 = selection[2];obj2 = selection[1]
		--绑定
		paramWire.connect obj1.pos.controller[2][2].controller[1] obj2.rotation.controller[2][1] ("Limited_Controller__Bezier_Float/-25")
		paramWire.connect obj1.pos.controller[2][1].controller[1] obj2.rotation.controller[2][2] ("Limited_Controller__Bezier_Float/25")
	)
)

createdialog EyeLidRollout
