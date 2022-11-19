/* 说明 */
-- Arm必须是3段骨骼-大臂,小臂,手掌,		Arm相当于Limb绑定+手掌绑定,	Arm还会有两种扩展(手指,肩部)
-- Leg必须是5段骨骼-大腿,小腿,脚掌,脚趾,脚底	Leg相当于Limb+脚部绑定.		Leg还会有两种扩展(脚趾,侧翼)
--在2014有露出距离不更新的Bug.2017一切正常.

/* 导入依赖 */
filein (getFilenamePath (getSourceFileName())+"依赖.ms")

/* 功能函数 */
--肢部绑定(还差个继承旋转)
fn rigLimb TBones na:"" seg:#(3,3)  IKType:"IKLimb" BnPrt:undefined root:undefined  rigname:"test" sep:"_" selectTBones:false =  --仅支持两根骨骼,IKtype换成"IKHISolver"可支持多根骨骼.HI结算器由于精度问题还是不能默认采用,默认的LimbIK只能支持两段骨骼(加上尾巴是三段)
(--已知限制:1.IK状态下,扭曲骨骼可能发生跳转,但暂时没办法解决,因为FK可以识别出X轴的增量旋转(正无限到负无限),IK只能识别出X轴的相对旋转值(180到-180之间).
	--剩余需求:美化FK外观
-- 	TBones = selection as array --定位骨骼列表
	/* 准备绑定 */
	ptm = TBones[1].transform
	cn = rigname + sep + na + sep --以后在外部获取名称,这样能保证开发中的东西可以直接调用到骨骼
	size = fitWidth TBones[1] --自动适配的宽度尺寸 
	halfsize = size/2
	--创建元素
	prt = point size:size transform:ptm name:(checkName(cn+"Prt")) centermarker:off axistripo:off cross:off Box:on wirecolor:yellow --parent:BnPrt--总父物体
	--Rig骨骼
	RigBL = for b in TBones collect BoneSys.createBone b.pos (getXoffset b * b.transform) b.dir --skin骨骼列表
	eb = RigBL[RigBL.count] --末端
	RigBL += BoneSys.createBone (getXoffset eb * eb.transform) (getXoffset eb offset:halfsize * eb.transform) eb.dir
	RigBL.sidefins=RigBL.frontfin=RigBL.backfin=RigBL.boneFreezeLength=false --设置属性
	RigBL[1].parent = prt --父物体
	RigBL.width = RigBL.height = halfsize
	reLink RigBL
	reName RigBL (cn+"RB")
	setZeroTrans RigBL
	--FK控制器
	maxOps.CloneNodes RigBL cloneType:#instance newNodes:&FKCtrl
	reName FKCtrl (cn+"FKCtrl")
	for c in FKCtrl do --替换FK控制器形状
	(
-- 		tempc = circle radius:size
-- 		c.baseobject = tempc.baseobject
-- 		c.objectOffsetRot = (quat 0 -0.707107 0 0.707107)
-- 		delete tempc
		createShapeByObj c type:0 DoubleYZ:true
	)
	
	FKCtrl.wirecolor = yellow
	--IK骨骼
	maxOps.CloneNodes RigBL cloneType:#instance newNodes:&IKBL
	reName IKBL (cn+"IKB")
	lens = (for i = 2 to IKBL.count collect distance IKBL[i-1] IKBL[i]) --每节长度
	len = sum lens --最长长度
-- 	IKBL.boxmode = on --方块显示
	for b in IKBL do --替换IK骨骼形状
	(
		createShapeByObj b type:1 DoubleYZ:false
	)
	--创建主控制器

	/* FK绑定 */
		
	/* IK绑定 */
	--创建控制器并设置参数
	IKctrl = point size:size transform:IKBL[IKBL.count].transform wirecolor:blue centermarker:off axistripo:off cross:off Box:on name:(checkName(cn+"IK"+sep+"Ctrl")) --parent:root
	IKpole = point size:halfsize transform:IKBL[2].transform wirecolor:red centermarker:off axistripo:off cross:on Box:off name:(checkName(cn+"IK"+sep+"Pole")) --parent:root 
	limbIK = IKSys.ikChain IKBL[1] IKBL[IKBL.count] IKType
	limbIK.name = checkName(cn+"IK");LimbIK.transform.controller.goalSize = size;limbIK.parent = IKctrl;limbIK[3].controller.VHTarget = IKpole
	setZeroTrans #(IKctrl,IKpole)
	--属性控制器
	pty = point size:size pos:(ptm.pos+[ptm.pos.x,0,0]) name:(checkName(cn+"Pty")) centermarker:off axistripo:off cross:off Box:on wirecolor:orange
	modf = EmptyModifier()
	addLimbProp modf
	addmodifier pty modf
	
	--多功能IK绑定
	softetp = ExposeTm displayExposedVals:off size:size transform:ptm useParent:off name:(checkName(cn+"sEtp")) parent:prt wirecolor:green centermarker:on axistripo:off cross:off Box:off --输出软点目标距离(软点由tgtetp代替)(在上)
	ctrl = softetp.rotation.controller =  LookAt_Constraint () --设置注视约束
	ctrl.appendTarget IKctrl 50.0
	ctrl.upnode_world = false
	ctrl.pickUpNode = prt
	ctrl.StoUP_axis = 2
	ctrl.upnode_axis = 2
	ctrl.target_axis = 0
	ctrl.lookat_vector_length = 0.0
	
	tgtetp = ExposeTm displayExposedVals:off size:size transform:limbIK.transform useParent:off exposeNode:IKctrl localReferenceNode:prt name:(checkName(cn+"tEtp")) parent:softetp wirecolor:yellow centermarker:on axistripo:off cross:off Box:off--输出IK目标距离(在下)
	softetp.exposeNode=tgtetp
	softetp.localReferenceNode=limbIK 
	ctrl = tgtetp[3][1][1].controller = float_limit ()
	ctrl.lower_limit_enabled = off
	ctrl.upper_limit = len
	paramWire.connect modf.LimbAtt[3] ctrl[2][3] ("IKSoft*"+(len/10)as string)
	paramWire.connect tgtetp[4][17] ctrl[1] (s2s tgtetp[4][17])

	disetp = point size:size transform:limbIK.transform name:(checkName(cn+"dEtp")) parent:softetp wirecolor:yellow centermarker:on axistripo:off cross:off Box:off --输出IK距离(无衰减)
	ctrl = disetp[3][1][1].controller = float_limit ()
	ctrl.lower_limit_enabled = off
	ctrl.upper_limit = len
	paramWire.connect tgtetp[4][17] ctrl[1] (s2s tgtetp[4][17])
		
	ctrl = limbIK[3][2][1].controller = Position_Constraint()
	ctrl.appendTarget IKctrl 1
	ctrl.appendTarget disetp 1
	paramWire.connect modf.LimbAtt[4] ctrl[1] "IKStretch"
	paramWire.connect modf.LimbAtt[4] ctrl[2] "1 - IKStretch"
	
	--IK可变长度绑定
	for i = 2 to IKBL.count do --绑定X偏移,即IK拉伸 不支持soft设置的连线参数:paramWire.connect softetp[4][17] ctrl[1] ("Distance*"+(lens[i-1]/len)+"+"+lens[i-1] as string)
	(
		k = i-1
		ctrl = IKBL[i][3][4][1][2][1].controller = Float_Expression()
		ctrl.AddScalarTarget "D" softetp.distance.controller
		ctrl.AddScalarConstant "W" (lens[k]/len)
-- 		ctrl.AddScalarConstant "L" (lens[k])
		ctrl.SetExpression ("D*W")--("D*W*A+L")("D*W+L")
		ctrl.Update()
	)
	ctrl = IKBL[IKBL.count].rotation.controller = Orientation_Constraint()
-- 	ctrl.RELATIVE = on--打开保持初始偏移
	ctrl.appendTarget IKctrl 1.0
/* 	绑定分段 */
-- 	创建分段
-- 	绑定分段
/* 	混合绑定 */
-- 	point3ctrl = Point3_XYZ()
-- 	print point3ctrl[1]
-- 	paramWire.connect modf.LimbAtt[1] point3ctrl[1] "FKIK"
-- 	paramWire.connect modf.LimbAtt[1] point3ctrl[2] "1-FKIK"
-- 	FKIKswitch = point3ctrl[1].controller 
-- 	FKIKswitch1 = point3ctrl[1].controller 
	
	ctrl = RigBL[1].rotation.controller = Orientation_Constraint()
	ctrl.appendTarget IKBL[1] 0.0
	ctrl.appendTarget FKCtrl[1] 1.0
	paramWire.connect modf.LimbAtt[2] ctrl[1] "FKIK"
	paramWire.connect modf.LimbAtt[2] ctrl[2] "1-FKIK"
	
	FKIKswitch = ctrl[1].controller 
	FKIKswitch1 = ctrl[2].controller 
	
	for i = 2 to RigBL.count do
	(
		--绑定旋转
		ctrl = RigBL[i].rotation.controller = Orientation_Constraint()
		ctrl.appendTarget IKBL[i] 0.0
		ctrl.appendTarget FKCtrl[i] 1.0
-- 		paramWire.connect modf.LimbAtt[1] ctrl[1] "FKIK"
-- 		paramWire.connect modf.LimbAtt[1] ctrl[2] "1-FKIK"
		ctrl[1].controller = FKIKswitch
		ctrl[2].controller = FKIKswitch1
		--绑定拉伸(其实是位置)
		if i > 1 do 
		(
			ctrl = RigBL[i][3][1][2][1].controller = float_list()
			ctrl[1].controller = IKBL[i][3][4][1][2][1].controller
			ctrl[2].controller = FKCtrl[i][3][1][2][1].controller
			ctrl.average = on
-- 			print(1);print (classof modf.LimbAtt[1]);print (classof ctrl.weights[1])
-- 			paramWire.connect modf.LimbAtt[1] ctrl[4][1] "FKIK"
-- 			paramWire.connect modf.LimbAtt[1] ctrl[4][2] "1-FKIK"
			ctrl[4][1].controller = FKIKswitch
			ctrl[4][2].controller = FKIKswitch1
		)
	)
/* 	分段绑定 */
-- 	tp = RigBL[1]--临时父物体
-- 	segPList = for i = 1 to (RigBL.count-2) collect
-- 	(
-- 		tt = ExposeTm size:size transform:b.transform name:checkName(cn + "_mp") centermarker:on axistripo:off cross:off Box:off wirecolor:gray displayExposedVals:off useParent:off localReferenceNode:prt parent:RigBL[i]
-- 		tc = point size:size transform:b.transform name:checkName(cn + "_mCtrl") centermarker:on axistripo:off cross:off Box:off wirecolor:gray parent:tt
-- 		tt.exposeNode = tc
-- 		#(tt,tc)--绑定缩放的物体和绑定注视的物体
-- 	)
-- 	insertitem #(RigBL[i]) segPList 1
-- 	insertitem RigBL[RigBL.count] segPList 1
	tp = RigBL[1]
	for i = 1 to (RigBL.count-1) do
	(
		a = RigBL[i];b = RigBL[i+1]
		--创建线
		segname = cn + i as string 
		L = line transform:a.transform name:(checkName(segname + "_spl")) parent:tp
		addNewSpline L
		addKnot L 1 #corner #curve a.pos
		addKnot L 1 #corner #curve b.pos
		updateShape L --必须放在这里,先刷新,不然下面的手柄会位置不对
		setKnotType L 1 1 #bezier
		setKnotType L 1 2 #bezier
		--绑定缩放和绑定
		tt = ExposeTm size:size transform:b.transform name:(checkName(cn + "_mp")) centermarker:on axistripo:off cross:off Box:off wirecolor:gray displayExposedVals:off useParent:off localReferenceNode:tp parent:B
		ctrl = tt.rotation.controller = Orientation_Constraint()--绑定tt
		ctrl.appendTarget a 0.5
		ctrl.appendTarget b 0.5
		if i < (RigBL.count-1) then
		(
			tp = tc = point size:size transform:tt.transform name:(checkName(cn + "_mCtrl")) centermarker:off axistripo:off cross:off Box:on wirecolor:yellow parent:tt
			setZeroTrans tc
		)
		else
			tp = tc = RigBL[RigBL.count]
		tt.exposeNode = tc
-- 		表达式控制器的方式,原先因为连线参数有不更新的问题,本以为这样可以解决,但其实是2014版本的程序问题
-- 		ctrl = L.scale.controller = Scale_Expression()
-- 		ctrl.AddScalarTarget "Dis" tp.distance.controller
-- 		ctrl.SetExpression ("[Dis/"+(distance a tt)as string+",1,1]")
-- 		连线参数的方式
-- 		paramWire.connect tt[4][#distance] L[3][3] ("[Distance/"+(distance a tt)as string+",1,1]")
-- 		只连X的方式
		ctrl = L.scale.controller = ScaleXYZ()
		paramWire.connect tt[4][17] ctrl[1] (s2s tt[4][17] str:("{}/"+(distance a tt)as string))
		--绑定注视
		ctrl = L.rotation.controller = LookAt_Constraint () --设置注视约束
		ctrl.appendTarget tc 50.0
		ctrl.upnode_world = false
-- 		ctrl.pickUpNode = tp
		ctrl.pickUpNode = RigBL[i]
		ctrl.StoUP_axis = 2
		ctrl.upnode_axis = 2
		ctrl.target_axis = 0
		ctrl.lookat_vector_length = 0.0
		--添加扭曲控制器并绑定
		animateVertex L #all
		t1 = point size:halfsize transform:L.transform pos:(getOutVec L 1 1) name:(checkName(segname + "_T1")) parent:L
		t2 = point size:halfsize transform:L.transform pos:(getinVec L 1 2) name:(checkName(segname + "_T2")) parent:L
		for t in #(t1,t2) do setTransformLockFlags t #{4..9} --锁定旋转和缩放
		setZeroTrans #(t1,t2)
		paramWire.connect t1[3][1] L[4][L[4].numSubs][3] (s2s t1[3][1])
		paramWire.connect t2[3][1] L[4][L[4].numSubs][4] (s2s t1[3][1])
		--添加扭曲骨骼
		CreateTwistBySpline L RigPrt:prt BnPrt:BnPrt type:(i==2) end:(if i == 1 then RigBL[i] else IKctrl) end1:FKCtrl[i+1] FKIKswitch:FKIKswitch FKIKswitch1:FKIKswitch1 size:halfsize seg:seg[i] name:(checkName(segname)) sep:sep
	)
/* 	整理绑定 */
	--主要是更新控制器中的变量(尽量都用表达式控制器或者连线控制器)
	updataProp modf FKCtrls:FKCtrl IKBones:IKBL IKCtrls:#(IKctrl,IKpole) secondCtrls:#() fineCtrls:#()
	
	if selectTBones do select TBones
		
	--更新显示
	RigBL.boxmode = on
		
	--附加功能
	for o in (FKCtrl+#(IKctrl,IKpole)) do addTransEx o --变换露出
)
-- L = (selection as array)
-- with redraw off(undo "script" on(animate off(at time 0(
	rigLimb (selection as array) selectTBones:true
-- ))))

/* 创建手臂绑定 */--c肩骨,u上段骨骼,d下段骨骼,h手部骨骼,f手指骨骼
fn RigArm c:undefined u:undefined d:undefined h:undefined f:#()  = -- Arm必须是3段骨骼-大臂,小臂,手掌,		Arm相当于Limb绑定+手掌绑定,	Arm还会有两种扩展(手指,肩部)
(
	
)