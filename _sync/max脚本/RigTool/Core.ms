
rigname = "test" + "_"
sep = "_"

-- fn rigRoot L p:undefined =
-- (
-- 	
-- )
-- (b - a)/2+a=0.5b+1.5a

TransExCA = attributes TransExAtt
(
	Parameters TransEx rollout:TransformRollout
	(
		posx type:#float ui:posx
		posy type:#float ui:posy
		posz type:#float ui:posz
		rotx type:#float ui:rotx
		roty type:#float ui:roty
		rotz type:#float ui:rotz
		sclx type:#float ui:sclx
		scly type:#float ui:scly
		sclz type:#float ui:sclz
	)
	rollout TransformRollout "Local Transform"
	(
		group "Position" 
		(
			spinner posx "x" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#left offset:[-3,0]
			spinner posy "y" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#center offset:[2,-21]
			spinner posz "z" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right offset:[3,-21]
		)
		group "Rotation" 
		(
			spinner rotx "x" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#left offset:[-3,0]
			spinner roty "y" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#center offset:[2,-21]
			spinner rotz "z" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right offset:[3,-21]
		)
		group "Scale" 
		(
			spinner sclx "x" width:60 range:[-1e+007, 1e+007, 1] type:#float scale:0.001 align:#left offset:[-3,0]
			spinner scly "y" width:60 range:[-1e+007, 1e+007, 1] type:#float scale:0.001 align:#center offset:[2,-21]
			spinner sclz "z" width:60 range:[-1e+007, 1e+007, 1] type:#float scale:0.001 align:#right offset:[3,-21]
		)
		
	)
)
LimbCA = attributes LimbAtt
(
	Parameters Limb rollout:LimbRollout
	(	
		FKCtrls type:#nodeTab tabsize:0 Variable:true
		IKCtrls type:#nodeTab tabsize:0 Variable:true
		
		secondCtrls type:#nodeTab tabsize:0 Variable:true
		fineCtrls type:#nodeTab tabsize:0 Variable:true
		
		FKIK type:#float UI:FKIK Default:0.0
		IKSoft type:#float UI:SoftIK Default:0.0
		IKstretch type:#float UI:stretchIK Default:0.0
	)
	rollout LimbRollout "FK IK Setting"
	(
		group "Limb Property"
		(
			spinner Inherit "Inherit Rotation" width:86 range:[0,1,0] Align:#Right type:#float scale:0.1 controller:(bezier_float())
			button toFK "FK->IK" Align:#Left 
			button toIK "IK->FK" Align:#Center offset:[-14,-26]
			spinner FKIK "FK/IK" width:62 range:[0,1,0] Align:#Right type:#float scale:0.1 controller:(bezier_float()) offset:[0,-22]
				
			on toFK pressed do (IKCtrls)
			on toIK pressed do ()
		)
		
		group"IK Property"
		(
			spinner SoftIK "IK Soft" width:62 range:[0,1,0]  Align:#Right type:#float scale:0.1
			spinner stretchIK "IK stretch" width:69 range:[0,1,0]  Align:#Right type:#float scale:0.1
		)
		
		group"Hide/Show"
		(
			button 'FK' "FK" Align:#Left width:48
			button 'IK' "IK" Align:#Left width:48 offset:[48,-26]
			button 'second' "second" Align:#Left width:48 offset:[96,-26]
			button 'fine' "fine" Align:#Left width:48 offset:[144,-26]
			
			on FK pressed do hide(join #() FKctrls)
			on FK rightClick do unhide(join #() FKCtrls)
			on IK pressed do hide(join #() IKCtrls)
			on IK rightClick do unhide(join #() IKCtrls)
			on second pressed do hide(join #() secondCtrls)
			on second rightClick do unhide(join #() secondCtrls)
			on fine pressed do hide(join #() fineCtrls)
			on fine rightClick do unhide(join #() fineCtrls)
		)
	)
)
fn addctrl obj holder = --普通XYZ控制器(),设计成了可以识别列表控制器中的普通控制器
(
	ctrl =  if classof obj.position.controller == position_list then obj.position.controller[obj.position.controller.active].controller = Position_XYZ() else obj.position.controller = Position_XYZ()
	holder.posx.controller = ctrl[1].controller
	holder.posy.controller = ctrl[2].controller
	holder.posz.controller = ctrl[3].controller
	
	ctrl =  if classof obj.rotation.controller == rotation_list then obj.rotation.controller[obj.rotation.controller.active].controller = ScaleXYZ() else obj.rotation.controller = ScaleXYZ()
	ctrl = obj.rotation.controller = Euler_XYZ ()
	holder.rotx.controller = ctrl[1].controller
	holder.roty.controller = ctrl[2].controller
	holder.rotz.controller = ctrl[3].controller
	
	ctrl =  if classof obj.scale.controller == scale_list then obj.scale.controller[obj.scale.controller.active].controller = ScaleXYZ() else obj.scale.controller = ScaleXYZ()
	holder.sclx.controller = ctrl[1].controller
	holder.scly.controller = ctrl[2].controller
	holder.sclz.controller = ctrl[3].controller
)

--依赖功能
fn fitWidth obj = --宽度,圆的直径,对于圆环,要除以二
(
	bb = nodeGetBoundingBox obj obj.transform
	size = (bb[2]-bb[1])
	(size[1]+size[2]+size[3])/3
)
fn getXoffset obj offset:0 = (bb = nodeGetBoundingBox obj obj.transform;[(bb[2]-bb[1])[1] + offset,0,0]) --获取X轴长度,偏移为增量
fn reLink a = for i = a.count to 2 by -1 do a[i].parent = a[i-1] --重连接父子
fn sum a = (v = 0;for i in a do v+=i;v) --数组求和
fn checkName n = if execute("$'"+n+"'") != undefined then uniquename n else n --检查名称,如果重名,则生成唯一名(自动编号)
fn reName a n = for i in a do i.name = uniquename n --批量重命名物体
-- fn animateSpline spl = --为图形上所有点添加动画控制器 这样即可:animateVertex spl #all
-- (
-- 	count = 0
-- 	for i = 1 to numsplines spl do
-- 		for j = 1 to (numknots spl i) do count+=1
-- 	animateVertex spl (for i = 1 to count*3 collect i)
-- )


--肢部绑定
fn rigLimb L na:"" seg:#() IKType:"IKLimb" p:undefined root:undefined =  --仅支持两根骨骼,IKtype换成"IKHISolver"可支持多根骨骼.HI结算器由于精度问题还是不能默认采用,默认的LimbIK只能支持两段骨骼(加上尾巴是三段)
(
-- 	L = selection as array
	/* 准备参数 */
	ptm = L[1].transform
	cn = rigname + na + sep --以后在外部获取名称,这样能保证开发中的东西可以直接调用到骨骼
	size = fitWidth L[1] --自动适配的宽度尺寸 
	halfsize = size/2
	pty = point size:size pos:(ptm.pos+[size,0,0]) name:(checkName(cn+"Pty")) centermarker:off axistripo:off cross:off Box:on wirecolor:orange
	modf = EmptyModifier()
-- 	Custattributes.add modf TransExCA baseobject:false --不再在参数控制器上加变换露出
	Custattributes.add modf LimbCA baseobject:false
	addmodifier pty modf
		
	modf.FKIK.controller = bezier_float()
	modf.IKsoft.controller = bezier_float()
	modf.IKstretch.controller = bezier_float()
	
	--创建元素
	prt = point size:size transform:ptm name:(checkName(cn+"Prt")) centermarker:off axistripo:off cross:off Box:on wirecolor:yellow
	SKBL = for b in L collect BoneSys.createBone b.pos (getXoffset b * b.transform) b.dir
	eb = SKBL[SKBL.count]
	SKBL += BoneSys.createBone (getXoffset eb * eb.transform) (getXoffset eb offset:halfsize * eb.transform) eb.dir
	SKBL.sidefins=SKBL.frontfin=SKBL.backfin=SKBL.boneFreezeLength=false
	SKBL[1].parent = L[1].parent = prt
	SKBL.width = SKBL.height = halfsize
	reLink SKBL
	maxOps.CloneNodes SKBL cloneType:#instance newNodes:&FKBL
	maxOps.CloneNodes SKBL cloneType:#instance newNodes:&IKBL
	reName SKBL (cn+"SKB")
	reName FKBL (cn+"FKB")
	reName IKBL (cn+"IKB")
	lens = (for i = 2 to IKBL.count collect distance IKBL[i-1] IKBL[i]) --每节长度
	len = sum lens --最长长度
	--创建主控制器

	/* FK绑定 */
		
	/* IK绑定 */
	--创建物体并设置参数
	IKctrl = point size:size pos:IKBL[IKBL.count].pos wirecolor:blue centermarker:off axistripo:off cross:off Box:on name:(checkName(cn+"IK"+sep+"Ctrl"))
	IKpole = point size:halfsize transform:IKBL[2].transform wirecolor:red centermarker:off axistripo:off cross:on Box:off
	limbIK = IKSys.ikChain IKBL[1] IKBL[IKBL.count] IKType
	limbIK.name = checkName(cn+"IK");LimbIK.transform.controller.goalSize = size;limbIK.parent = IKctrl
	
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
		SKBL[i]
	)
	--主要是更新控制器中的变量(尽量都用表达式控制器或者连线控制器)
	
)
-- L = (selection as array)
rigLimb (selection as array)
-- fn rigSpine L p:undefined =
-- (
-- 	
-- )

-- fn rigFoot L p:undefined =
-- (
-- 	
-- )

-- fn rigFinger L p:undefined =
-- (
-- 	
-- )

-- fn rigChain L p:undefined =
-- (
-- 	
-- )