fname = "Test" --必须指定这个变量,
scaleV = 1
-- delete objects

fn  setZeroTrans objs absf:true first:true state:(getCommandPanelTaskMode()) = --参数为:1物体或物体数组 2绝对冻结 3是否第一次运行 4面板状态 3和4用于递归,都不需要指定
(
	if first do setCommandPanelTaskMode #create
	if classof objs == array then
		for obj in objs do setZeroTrans obj absf:absf first:false state:state
	else 
	(
-- 		if isValidNode objs do (
		if absf do objs.pos.controller = bezier_position ()
		local ctrl = objs.pos.controller = position_list ()
		ctrl.Available.controller =  Position_XYZ ()
		ctrl.Active = 2
		ctrl.setName 1 "Zero"
		ctrl.setName 2 "XYZ"
		if absf do objs.rotation.controller = Euler_XYZ ()
		local ctrl = objs.rotation.controller = rotation_list ()
		ctrl.Available.controller = Euler_XYZ ()
		ctrl.Active = 2
		ctrl.setName 1 "Zero"
		ctrl.setName 2 "XYZ"
-- 		)
	)
	if first do setCommandPanelTaskMode state
)

fn mrglayer name:fname type:#rig objs:(selection as array) setall:false = --如果setall为true,设置三种层的属性,没有容错,慎用
(
	if classof objs == array then for obj in objs do mrglayer name:name type:type objs:obj
	else
	(
		layersname = #((name+"_RIG"),(name+"_BONE"),(name+"_CTRL"))
		if setall then
		(
			layers = #(LayerManager.getLayerFromName layersname[1],LayerManager.getLayerFromName layersname[2],LayerManager.getLayerFromName layersname[3])
			layers[3].on = layers[2].on = layers[1].lock = true
			layers[3].lock = layers[2].lock = layers[1].on = false
			(LayerManager.getLayer 0).current = true
		)
		else
		(
			index = case type of
			(
				#rig:1
				#bone:2
				#ctrl:3
			)
			layer = LayerManager.getLayerFromName layersname[index]
			if layer == undefined do layer = LayerManager.newLayerFromName layersname[index]
			if isValidNode objs do layer.addnode objs
		)
	)
)

--创建扭曲绑定线
fn createRigLine name:"test_RigLine" type:0 pos2:#([0,0,10],[0,0,0]) Segnum:3 state:(getCommandPanelTaskMode()) = --创建RigLine 参数:1类型 2#(起始点,结束点) 0为腿[-1,0,0],1为臂[0,0,1],2为脊[-1,0,0] 均从上往下建立即可.
undo off(with animate off(
	--初始化
	result = #()
	append pos2 ((pos2[1]+pos2[2])/2) --中间值
	size = length (pos2[2] - pos2[1]) / 6
	dir = if type == 1 then [0,0,1] else [-1,0,0]
	tb = BoneSys.createBone pos2[1] pos2[2] dir
	t = tb.transform; delete tb
	trans = for p in pos2 collect (matrix3 t.row1 t.row2 t.row3 p)
	--创建线
	L = line transform:trans[3] name:(name + "_spl")
	addNewSpline L
	addKnot L 1 #corner #curve pos2[1] 
	addKnot L 1 #corner #curve pos2[2]
	updateShape L
	setKnotType L 1 1 #bezier
	setKnotType L 1 2 #bezier
	
	--创建控制
	p1 = point size:size centermarker:on axistripod:off cross:off Box:off transform:trans[1] name:(name+"_pp1") wirecolor:green--终点父物体--起点父物体parent:i1
	p2 = point size:size centermarker:on axistripod:off cross:off Box:off transform:trans[2] name:(name+"_pp2") wirecolor:green--终点父物体
	p3 = point size:size centermarker:on axistripod:off cross:off Box:off transform:trans[3] name:(name+"_pp3") wirecolor:green--中点父物体
	c1 = point size:size centermarker:off axistripod:off cross:off Box:on transform:trans[1] parent:p1 name:(name+"_cp1") wirecolor:green--起点(蒙皮)
	c2 = point size:size centermarker:off axistripod:off cross:off Box:on transform:trans[2] parent:p2 name:(name+"_cp2") wirecolor:green--终点(蒙皮)
	c3 = point size:size centermarker:off axistripod:off cross:off Box:on transform:trans[3] parent:p3 name:(name+"_cp3") wirecolor:green--中点(蒙皮)

	--创建蒙皮
	sk = (skin())
	select L
	addmodifier L sk
	setCommandPanelTaskMode #modify
	skinOps.addbone sk c1 0; skinOps.addbone sk c2 0; skinOps.addbone sk c3 0;
	mrglayer objs:#(p1,p2,p3,c1,c2,c3)
	if 	Segnum > 1 do--创建分段
	(
		--初始化
		count = (Segnum + 1) --实际数量
		per = 100.0 / Segnum
		--创建路径点1
		plist = #(point size:size centermarker:on axistripod:off cross:on Box:off transform:trans[1] name:(name+"_sp1") wirecolor:gray)
		plist[1].pos.controller = Path_Constraint ()
		deleteKeys plist[1].pos.controller.percent.keys #allKeys
		plist[1].pos.controller.percent = 0
		plist[1].pos.controller.appendTarget L 50.0
		plist[1].rotation.controller = Orientation_Constraint ()
		plist[1].rotation.controller.appendTarget c1 100.0
		plist[1].rotation.controller.appendTarget c2 0.0
		for i = 2 to count do --创建剩余路径点
		(
			val = ((i-1) * per)
			append plist (p = instance plist[1] name:(name + "_sp" + i as string))
			p.pos.controller.percent = val
			p.rotation.controller.setWeight 1 (100.0 - val)
			p.rotation.controller.setWeight 2 val
		)
		result = plist
		mrglayer objs:plist
		--创建分段骨骼
		if type != 2 do --创建分段骨骼
		(
			--初始化
			seglenv = (pos2[2] - pos2[1]) / segnum --单段长度矢量
			blen = length ((pos2[2] - pos2[1]) / segnum)
			poslist = for i = 1 to count collect (pos2[1] + (i - 1)*seglenv) --位置列表
			--创建分段骨骼
			blist = #()
			X = Box lengthsegs:1 widthsegs:1 heightsegs:1 length:size width:size height:blen mapcoords:off transform:trans[1] 
			X.objectoffsetrot = (quat 0 -0.707107 0 0.707107)
			X.height.controller = Float_Expression ()
			X.height.controller.SetExpression(blen as string)
			for i = 1 to count collect
			(
				b = copy X pos:poslist[i] name:(name + "_bn" + i as string) wirecolor:orange
				b.parent = if blist.count > 0 then blist[i-1] else plist[1]
				b.boneEnable = b.boneAutoAlign = true
				b.boneFreezeLength = false
				b.pos.controller = Position_Constraint()
				b.pos.controller.appendTarget plist[i] 50.0
				if i < count then
				(
					b.rotation.controller = LookAt_Constraint()
					b.rotation.controller.appendTarget (plist[i+1]) 50.0
					b.rotation.controller.upnode_world = false
					b.rotation.controller.pickUpNode = plist[i]
					b.rotation.controller.StoUP_axis = 2
					b.rotation.controller.upnode_axis = 2
					b.rotation.controller.target_axis = 0
					b.rotation.controller.lookat_vector_length = 0.0
				)
				else
				(
					b.baseobject = (td = dummy boxsize:[size,size,size]).baseobject;delete td
				)
				setTransformLockFlags b #{1..7} --锁定X轴缩放
				setInheritanceFlags b #{1..6} --不继承缩放
				append blist b
			)
			delete X
			freeze plist
			result = blist
			mrglayer objs:blist type:#bone
		)
	)
	if type == 2 then
	(
		t1 = point size:size centermarker:on axistripod:off cross:off Box:off transform:trans[3] parent:c1 name:(name+"_tp1") wirecolor:blue--参考点
		t2 = point size:size centermarker:on axistripod:off cross:off Box:off transform:trans[3] parent:c2 name:(name+"_tp2") wirecolor:blue--参考点
		--创建绑定
		setZeroTrans #(p1,p2,p3,c1,c2,c3)
		p3.pos.controller[1].controller = (Position_Constraint())
		p3.pos.controller[1].controller.appendTarget t1 50.0
		p3.pos.controller[1].controller.appendTarget t2 50.0
		p3.pos.controller.setName 1 "Zero"
		p3.rotation.controller[1].controller = (Orientation_Constraint())
		p3.rotation.controller[1].controller.appendTarget t1 50.0
		p3.rotation.controller[1].controller.appendTarget t2 50.0
		p3.rotation.controller.setName 1 "Zero"
		--设置权重
		weightlist = #(#(1,0,0),#(1,0,0),#(0.25,0,0.75),#(0,0.25,0.75),#(0,1,0),#(0,1,0))
		for i = 1 to 6 do (classof L; skinOps.SetVertexWeights sk i #(1,2,3) weightlist[i])
		mrglayer objs:#(t1,t2)
	)
	else
	(
		--创建绑定
		setZeroTrans #(c1,c2,c3)
		p3.pos.controller = Position_Constraint()
		p3.pos.controller.appendTarget c1 50.0
		p3.pos.controller.appendTarget c2 50.0
		--设置权重
		weightlist = #(#(1,0,0),#(1,0,0),#(0,0,1),#(0,0,1),#(0,1,0),#(0,1,0))
		for i = 1 to 6 do (classof L; skinOps.SetVertexWeights sk i #(1,2,3) weightlist[i])
	)
	setCommandPanelTaskMode state
 	clearSelection()
	return (#(p1,p2,p3,c1,c2,c3)+result)
))
-- createRigLine()
--创建肢体绑定
delete objects
xb1 = BoneSys.createBone [0,-0.32389,90.2656] [-8.90041e-007,-20.3618,40.9416] [-1,0,0]
xb2 = BoneSys.createBone [-8.90041e-007,-20.3618,40.9416] [0,-0.323893,0.0950661] [-1,0,0];xb2.parent = xb1
xb3 = BoneSys.createBone [0,-0.323893,0.0950661] [0,0.116533,-0.802723][-1,0,0];xb3.parent = xb2


select #(xb1,xb2,xb3)

-- fn getshapeBuild spl:selection[1] = --隐藏功能,记录图形的构建数组
-- (
-- 	if superclassof spl == shape then for i = 1 to numSplines spl collect 
-- 	(for j = 1 to numKnots spl i collect (#((getKnotPoint $ i j),(getInVec $ i j),(getOutVec $ i j))))	
-- 	else #()
-- )

--创建控制器图形
fn CtrlShape name:(uniquename"testCtrlShape") type:#cross transform:(matrix3 1) size:10 wirecolor:red parent:undefined = --创建控制器图形,类型
(
	size = size/2
	scalev = size / 5
	local s
	poslist = case type of
	(
		#cross:( --三叉十字
			#(#(#([0,0,5], [0,0,5], [0,0,1.66667]), #([0,0,-5], [0,0,-1.66667], [0,0,-5])), #(#([0,5,0], [0,5,0], [0,1.66667,0]), #([0,-5,0], [0,-1.66667,0], [0,-5,0])), #(#([5,0,0], [5,0,0], [1.66667,0,0]), #([-5,0,0], [-1.66667,0,0], [-5,0,0])))
		)
		#box:( --边框盒
			#(#(#([-5,-5,5], [-5,-5,5], [-5,-1.66667,5]), #([-5,5,5], [-5,1.66667,5], [-1.66667,5,5]), #([5,5,5], [1.66667,5,5], [5,1.66667,5]), #([5,-5,5], [5,-1.66667,5], [1.66667,-5,5]), #([-5,-5,5], [-1.66667,-5,5], [-5,-5,5])), #(#([-5,-5,-5], [-5,-5,-5], [-5,-1.66667,-5]), #([-5,5,-5], [-5,1.66667,-5], [-1.66667,5,-5]), #([5,5,-5], [1.66667,5,-5], [5,1.66667,-5]), #([5,-5,-5], [5,-1.66667,-5], [1.66667,-5,-5]), #([-5,-5,-5], [-1.66667,-5,-5], [-5,-5,-5])), #(#([-5,-5,-5], [-5,-5,-5], [-5,-5,-1.66667]), #([-5,-5,5], [-5,-5,1.66667], [-5,-5,5])), #(#([-5,5,-5], [-5,5,-5], [-5,5,-1.66667]), #([-5,5,5], [-5,5,1.66667], [-5,5,5])), #(#([5,5,-5], [5,5,-5], [5,5,-1.66667]), #([5,5,5], [5,5,1.66667], [5,5,5])), #(#([5,-5,-5], [5,-5,-5], [5,-5,-1.66667]), #([5,-5,5], [5,-5,1.66667], [5,-5,5])))
		)
		#ball:( --三叉球
			#(#(#([-2.18557e-007,0,5], [-1.11753e-006,2.75893,5], [6.80417e-007,-2.75893,5]), #([1.62921e-006,-5,-2.18557e-007], [1.50861e-006,-5,2.75893], [1.7498e-006,-5,-2.75893]), #([2.18557e-007,4.37114e-007,-5], [1.11753e-006,-2.75893,-5], [-6.80417e-007,2.75893,-5]), #([-1.62921e-006,5,0], [-1.50861e-006,5,-2.75893], [-1.7498e-006,5,2.75893])), #(#([5,0,0], [5,4.49487e-007,-2.75893], [5,-4.49487e-007,2.75893]), #([-2.18557e-007,-8.14603e-007,5], [2.75893,-8.14603e-007,5], [-2.75893,-8.14603e-007,5]), #([-5,0,-4.37114e-007], [-5,-4.49487e-007,2.75893], [-5,4.49487e-007,-2.75893]), #([0,8.14603e-007,-5], [-2.75893,8.14603e-007,-5], [2.75893,8.14603e-007,-5])), #(#([5,0,0], [5,2.75893,8.98974e-007], [5,-2.75893,-8.98974e-007]), #([-2.18557e-007,-5,-1.62921e-006], [2.75893,-5,-1.62921e-006], [-2.75893,-5,-1.62921e-006]), #([-5,4.37114e-007,0], [-5,-2.75893,-8.98974e-007], [-5,2.75893,8.98974e-007]), #([0,5,1.62921e-006], [-2.75893,5,1.62921e-006], [2.75893,5,1.62921e-006])))
		)
		#plane:( --三叉面
			#(#(#([-5,5,0], [-1.66667,5,0], [-5,1.66667,0]), #([-5,-5,0], [-5,-1.66667,0], [-1.66667,-5,0]), #([5,-5,0], [1.66667,-5,0], [5,-1.66667,0]), #([5,5,0], [5,1.66667,0], [1.66667,5,0])), #(#([-5,-2.18557e-007,-5], [-1.66667,-2.18557e-007,-5], [-5,0,-1.66667]), #([-5,2.18557e-007,5], [-5,0,1.66667], [-1.66667,2.18557e-007,5]), #([5,2.18557e-007,5], [1.66667,2.18557e-007,5], [5,0,1.66667]), #([5,-2.18557e-007,-5], [5,0,-1.66667], [1.66667,-2.18557e-007,-5])), #(#([4.37114e-007,-5,-5], [2.91409e-007,-1.66667,-5], [2.91409e-007,-5,-1.66667]), #([0,-5,5], [1.45705e-007,-5,1.66667], [-1.45705e-007,-1.66667,5]), #([-4.37114e-007,5,5], [-2.91409e-007,1.66667,5], [-2.91409e-007,5,1.66667]), #([0,5,-5], [-1.45705e-007,5,-1.66667], [1.45705e-007,1.66667,-5])))
		)
		#point:( --汇聚一点
			#(#(#([-5,5,5], [-5,5,5], [-1.66667,1.66667,1.66667]), #([5,-5,-5], [1.66667,-1.66667,-1.66667], [5,-5,-5])), #(#([5,5,5], [5,5,5], [1.66667,1.66667,1.66667]), #([-5,-5,-5], [-1.66667,-1.66667,-1.66667], [-5,-5,-5])), #(#([-5,-5,5], [-5,-5,5], [-1.66667,-1.66667,1.66667]), #([5,5,-5], [1.66667,1.66667,-1.66667], [5,5,-5])), #(#([-5,5,-5], [-5,5,-5], [-1.66667,1.66667,-1.66667]), #([5,-5,5], [1.66667,-1.66667,1.66667], [5,-5,5])))
		)
	)
	s = line name:name
	for i = 1 to poslist.count do
	(
		needclose = false
		spl = addNewSpline s
		for j = 1 to poslist[i].count do
			(addKnot s spl #bezierCorner #curve (poslist[i][j][1]*scalev) (poslist[i][j][2]*scalev) (poslist[i][j][3]*scalev);if j > 3 do needclose = true)
		if needclose do close s spl
	)
	updateShape s
	s.transform = transform
	s.wirecolor = wirecolor
	s.parent = parent
	return s
)
-- CtrlShape name:(uniquename"testCtrlShape") type:0 transform:(matrix3 1) size:10 wirecolor:red
--创建肢体绑定
fn createRigLimb name:"_Leg_L" type:0 LimbBones:(selection as array) = --创建RigLiomb 参数:1类型 2#(骨骼,骨骼,..) 0为腿[-1,0,0],1为臂[0,0,1]
(
	
	--初始化
	result = #()
	size = (distance LimbBones[1].pos LimbBones[2].pos) / 4
	prt = dummy name:(name+"_Prt") transform:LimbBones[1].transform boxsize:[size,size,size] --创建父物体
	prt.parent = LimbBones[1].parent;LimbBones[1].parent = prt --设置父物体
	
	IKbones = #()--准备IK骨骼
	FKbones = #()--准备FK骨骼
	for i = 1 to LimbBones.count do 
	(
		LimbBones[i].name = name+"_SKB"+i as string
		ib = copy LimbBones[i] wirecolor:red name:(name+"_IKB"+i as string) ;ib.parent = (try(IKbones[i-1])catch(LimbBones[1].parent))--IK骨骼
		fb = copy LimbBones[i] wirecolor:yellow name:(name+"_FKB"+i as string) ;fb.parent = (try(FKbones[i-1])catch(LimbBones[1].parent))--FK骨骼
		append IKbones ib
		append FKbones fb
		ib.boneEnable = ib.boneAutoAlign = fb.boneEnable = fb.boneAutoAlign = LimbBones[i].boneEnable = LimbBones[i].boneAutoAlign = true
		ib.boneFreezeLength = fb.boneFreezeLength = LimbBones[i].boneFreezeLength = false
	)
	
	setZeroTrans (#(prt) + LimbBones + IKbones + FKbones) --冻结所有骨骼的变换
	
	--创建扭曲链接
	UTwist = createRigLine name:(name+"_USeg") type:0 Segnum:3 pos2:#(LimbBones[1].pos,LimbBones[2].pos)
	DTwist = createRigLine name:(name+"_DSeg") type:0 Segnum:3 pos2:#(LimbBones[2].pos,LimbBones[3].pos)
	for i = 1 to 5 do (freeze #(UTwist[i],DTwist[i]))
	freeze #(UTwist[UTwist.count],DTwist[DTwist.count])
	UTwist[1].parent = UTwist[2].parent = UTwist[3].parent = LimbBones[1] --设置父物体
	DTwist[1].parent = DTwist[2].parent = DTwist[3].parent = LimbBones[2] --设置父物体
	ctrl = UTwist[2].pos.controller = Position_Constraint();ctrl.appendTarget LimbBones[2] 50.0 --设置底端位置约束
	ctrl = DTwist[2].pos.controller = Position_Constraint();ctrl.appendTarget LimbBones[3] 50.0 --设置底端位置约束
		
	--创建joint控制
	joint = dummy name:(name+"_joint_prt") transform:LimbBones[2].transform boxsize:[size,size,size]--创建关节父物体
	joint.parent = LimbBones[2]
	ctrl = joint.rotation.controller = Orientation_Constraint()
	ctrl.appendTarget LimbBones[1] 50.0
	ctrl.appendTarget LimbBones[2] 50.0
	jointCtrl = CtrlShape type:#box transform:joint.transform wirecolor:orange parent:joint name:(name+"_joint")
	
	--创建IK骨骼绑定
	limbIK = IKSys.ikChain IKbones[1] IKbones[3] "IKLimb"
	pole = CtrlShape name:(name + "_IKP") type:#cross size:size transform:joint.transform
	limbIK.name = name + "_IK"
	in coordSys Local move pole [0,size,0]
	pole.transform = (matrix3 [1,0,0] [0,1,0] [0,0,1] pole.transform.pos)
	limbIK.transform.controller.VHTarget = pole
	append result limbIK
	
	--创建IK拉伸绑定
	etp = ExposeTm transform:prt.transform useParent:off exposeNode:prt localReferenceNode:limbIK name:(name+"_etp") parent:prt
	maxlen = ((distance LimbBones[1].pos LimbBones[2].pos) + (distance LimbBones[2].pos LimbBones[3].pos)) as string
	str = ("if (Distance > " + maxlen + ") then( Distance - " + maxlen + ") /2 else 0")
	paramWire.connect etp.baseObject[#Distance] IKbones[2].transform.controller.FK_Sub_Control.controller.Position.controller[2][#X_Position] str
	paramWire.connect etp.baseObject[#Distance] IKbones[3].transform.controller.FK_Sub_Control.controller.Position.controller[2][#X_Position] str
	
	--创建FK骨骼绑定
	
	
	--创建属性控制器--IKFK匹配,和显示隐藏IKFK,使用的是#NodeTab类型的自定义属性
	paramWire.connect $[2].pos.controller[2][1] $[1].rotation.controller[#Orientation_Weight_0] "0"
	
	--约束控制骨骼--顺便绑定到属性控制器
	for i = 1 to LimbBones.count do 
	(

		ctrl = LimbBones[i].rotation.controller = Orientation_Constraint()
		ctrl.appendTarget IKBones[i] 50.0
		ctrl.appendTarget FKBones[i] 50.0
		if i > 1 do --控制的拉伸,是fk和ik的X位置值的浮点型列表,受微调器控制权重
		(
			ctrl = LimbBones[i].pos.controller[2][1].controller = float_list()
			ctrl[1].controller = IKbones[i].transform.controller.FK_Sub_Control.controller.Position.controller[2][1].controller
			ctrl.Available.controller = FKbones[i].Position.controller[2][1].controller
		)
	)
	
)
with redraw off (createRigLimb())









fn createRoot = --创建RigRoot
(
	Rectangle length:5 width:7 cornerRadius:1 name:(fname + "_Root") wirecolor:blue
)
-- createRoot()

fn createHub = --创建RigHub
(
	Point size:1 name:(fname + "_Hub") pos:([0,0,0.8]*scaleV) wirecolor:yellow
)
-- createHub()

fn setBoneProp n = --设置骨骼属性
(
	if classof n == Array then
	(
		for x in n do
		(
			x.boneEnable=x.boneAutoAlign=true
			x.boneFreezeLength=false
		)
	)
	else
	(
		x.boneEnable=x.boneAutoAlign=true
		n.boneFreezeLength=false
	)
)

fn createBox trans lwh = --创建RigBox 参数:1变换 2[长,宽,高]
(
	b = Box lengthsegs:1 widthsegs:1 heightsegs:1 length:lwh[1] width:lwh[2] height:lwh[3] transform:trans name:(fname + "_Hub") wirecolor:orange
	b.objectoffsetrot = (quat 0 -0.707107 0 0.707107)
	
	b.scale.controller = ScaleXYZ ()
	
	b.scale.controller.x_Scale.controller = float_list ()
	b.scale.controller.x_Scale.controller.Available.controller = bezier_float ()
	paramWire.connect b.scale.controller.x_Scale.controller[1] b.scale.controller.x_Scale.controller[2] "-(Bezier_Float-1)"
	b.scale.controller.z_Scale.controller = float_list ()
	b.scale.controller.z_Scale.controller.Available.controller = bezier_float ()
	paramWire.connect b.scale.controller.z_Scale.controller[1] b.scale.controller.z_Scale.controller[2] "-(Bezier_Float-1)"
	b.scale.controller.y_Scale.controller = float_list ()
	b.scale.controller.y_Scale.controller.Available.controller = bezier_float ()
	paramWire.connect b.scale.controller.y_Scale.controller[1] b.scale.controller.y_Scale.controller[2] "-(Bezier_Float-1)"
	
	paramWire.connect b.scale.controller.y_Scale.controller[1] b.baseObject[#Length] (lwh[1] as string +" * Bezier_Float") --y
	paramWire.connect b.scale.controller.z_Scale.controller[1] b.baseObject[#Width] (lwh[2] as string +" * Bezier_Float") --z
	paramWire.connect b.scale.controller.x_Scale.controller[1] b.baseObject[#Height] (lwh[3] as string +" * Bezier_Float") --x

	b
)
-- createBox (matrix3 [0,0,1] [0,1,0] [-1,0,0] [0,0,1]) [1,1,1]

