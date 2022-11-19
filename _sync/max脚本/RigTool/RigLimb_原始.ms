/* 说明 */
-- Arm必须是3段骨骼-大臂,小臂,手掌,		Arm相当于Limb绑定+手掌绑定,	Arm还会有两种扩展(手指,肩部)
-- Leg必须是4段骨骼-大腿,小腿,脚掌,脚趾,	Leg相当于Limb+脚部绑定.		Leg还会有两种扩展(脚趾,侧翼)

/* 导入依赖 */
filein (getFilenamePath (getSourceFileName())+"依赖.ms")

/* 功能函数 */
--肢部绑定(还差个继承旋转)
fn rigLimb TBones na:"" seg:#() IKType:"IKLimb" p:undefined root:undefined  rigname:"test" sep:"_"=  --仅支持两根骨骼,IKtype换成"IKHISolver"可支持多根骨骼.HI结算器由于精度问题还是不能默认采用,默认的LimbIK只能支持两段骨骼(加上尾巴是三段)
(
-- 	TBones = selection as array --定位骨骼列表
	/* 准备绑定 */
	ptm = TBones[1].transform
	cn = rigname + sep + na + sep --以后在外部获取名称,这样能保证开发中的东西可以直接调用到骨骼
	size = fitWidth TBones[1] --自动适配的宽度尺寸 
	halfsize = size/2
	--创建元素
	prt = point size:size transform:ptm name:(checkName(cn+"Prt")) centermarker:off axistripo:off cross:off Box:on wirecolor:yellow --总父物体
	--skin骨骼
	SKBL = for b in TBones collect BoneSys.createBone b.pos (getXoffset b * b.transform) b.dir --skin骨骼列表
	eb = SKBL[SKBL.count] --末端
	SKBL += BoneSys.createBone (getXoffset eb * eb.transform) (getXoffset eb offset:halfsize * eb.transform) eb.dir
	SKBL.sidefins=SKBL.frontfin=SKBL.backfin=SKBL.boneFreezeLength=false --设置属性
	SKBL[1].parent = prt --父物体
	SKBL.width = SKBL.height = halfsize
	reLink SKBL
	reName SKBL (cn+"SKB")
-- 	setZeroTrans SKBL
	--FK控制器
	maxOps.CloneNodes SKBL cloneType:#instance newNodes:&FKCtrl
	reName FKCtrl (cn+"FKCtrl")
	for c in FKCtrl do --替换FK控制器形状
	(
		tempc = circle radius:size
		c.baseobject = tempc.baseobject
		c.objectOffsetRot = (quat 0 -0.707107 0 0.707107)
	)
	FKCtrl.wirecolor = yellow
	--IK骨骼
	maxOps.CloneNodes SKBL cloneType:#instance newNodes:&IKBL
	reName IKBL (cn+"IKB")
	lens = (for i = 2 to IKBL.count collect distance IKBL[i-1] IKBL[i]) --每节长度
	len = sum lens --最长长度
	--创建主控制器

	/* FK绑定 */
		
	/* IK绑定 */
	--创建控制器并设置参数
	IKctrl = point size:size pos:IKBL[IKBL.count].pos wirecolor:blue centermarker:off axistripo:off cross:off Box:on name:(checkName(cn+"IK"+sep+"Ctrl"))
	IKpole = point size:halfsize transform:IKBL[2].transform wirecolor:red centermarker:off axistripo:off cross:on Box:off
	limbIK = IKSys.ikChain IKBL[1] IKBL[IKBL.count] IKType
	limbIK.name = checkName(cn+"IK");LimbIK.transform.controller.goalSize = size;limbIK.parent = IKctrl
	--属性控制器
	pty = point size:size pos:(ptm.pos+[size,0,0]) name:(checkName(cn+"Pty")) centermarker:off axistripo:off cross:off Box:on wirecolor:orange
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
	paramWire.connect modf.LimbAtt[2] ctrl[2][3] ("IKSoft*"+(len/10)as string)
	paramWire.connect tgtetp[4][17] ctrl[1] "Distance"

	disetp = point size:size transform:limbIK.transform name:(checkName(cn+"dEtp")) parent:softetp wirecolor:yellow centermarker:on axistripo:off cross:off Box:off --输出IK距离(无衰减)
	ctrl = disetp[3][1][1].controller = float_limit ()
	ctrl.lower_limit_enabled = off
	ctrl.upper_limit = len
	paramWire.connect tgtetp[4][17] ctrl[1] "Distance"
		
	ctrl = limbIK[3][2][1].controller = Position_Constraint()
	ctrl.appendTarget IKctrl 1
	ctrl.appendTarget disetp 1
	paramWire.connect modf.LimbAtt[3] ctrl[1] "IKStretch"
	paramWire.connect modf.LimbAtt[3] ctrl[2] "1 - IKStretch"
	
	--IK可变长度绑定
	for i = 2 to IKBL.count do --绑定X偏移,即IK拉伸 不支持soft设置的连线参数paramWire.connect softetp[4][17] ctrl[1] ("Distance*"+(lens[i-1]/len)+"+"+lens[i-1] as string)
	(
		k = i-1
		ctrl = IKBL[i][3][4][1][1].controller = Float_Expression()
		ctrl.AddScalarTarget "D" softetp.distance.controller
		ctrl.AddScalarConstant "W" (lens[k]/len)
		ctrl.AddScalarConstant "L" (lens[k])
		ctrl.SetExpression ("D*W+L")--("D*W*A+L")
		ctrl.Update()
	)
/* 	绑定分段 */
-- 	创建分段
-- 	绑定分段
/* 	整理绑定 */
	for i = 1 to SKBL.count do
	(
		--绑定旋转
		ctrl = SKBL[i].rotation.controller = Orientation_Constraint()
		ctrl.appendTarget IKBL[i] 0.0
		ctrl.appendTarget FKCtrl[i] 100.0
		paramWire.connect modf.LimbAtt[1] ctrl[1] "FKIK"
		paramWire.connect modf.LimbAtt[1] ctrl[2] "1-FKIK"
		--绑定拉伸
		
	)
	--主要是更新控制器中的变量(尽量都用表达式控制器或者连线控制器)
	updataProp modf FKCtrls:FKCtrl IKBones:IKBL IKCtrls:#(IKctrl,IKpole) secondCtrls:#() fineCtrls:#()
)
-- L = (selection as array)
rigLimb (selection as array)

fn RigArm chain = -- Arm必须是3段骨骼-大臂,小臂,手掌,		Arm相当于Limb绑定+手掌绑定,	Arm还会有两种扩展(手指,肩部)
(
	if chain.cout == 3 do
	(
		
		
	)
	
)