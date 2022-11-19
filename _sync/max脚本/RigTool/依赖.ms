/* 绑定用到的依赖功能 */
-- fn s2n sa = substituteString sa.name " " "_" --子动画转连线参数表达式变量名(可通用任意语言)
-- fn s2n sa i = ((getSubAnimName sa i) as string) --子动画转连线参数表达式变量名(可通用任意语言)sa是子动画头,i是序号
-- getSubAnimName $[3][1] 1 asString:true "X 位置" -- 直接获取的方法,这个只能从父物体获取
-- fn sFs sa str:"{}" = substituteString str "{}" (s2n sa) --用字符串和子动画组合出结果
-- fn s2s sa i str:"{}" = substituteString str "{}" ((getSubAnimName sa i) as string) --用字符串和子动画组合出结果.省去一次调用(必须是as strig ,asstring:true-输出的是带有空格的字符串)
fn s2s sa str:"{}" = substituteString str "{}" (substituteString sa.name " " "_") --最好的方案,仍是用name获取名字,然后替换空格为下划线

fn copybaseobj obj:selection[1] = 
(
	return #(obj.baseobject,#(obj.objectOffsetPos,obj.objectOffsetRot,obj.objectOffsetScale),(for i = 1 to custAttributes.count obj collect custAttributes.get obj i))
)
fn pastebaseobj obj bobj offset =
(
	obj.baseobject = bobj
	obj.objectOffsetPos = offset[1];obj.objectOffsetRot = offset[2];obj.objectOffsetScale = offset[3]
)
fn createShapeByObj obj type:0 DoubleYZ:true rep:true = --创建图形
(
	posList = case type of
	(
		0 : #(#(#([-10,-4.37114e-07,0], [-10,-4.37114e-07,0], [-3.33333,-1.45705e-07,0]), #([10,4.37114e-07,0], [3.33333,1.45705e-07,0], [10,4.37114e-07,0]), false), #(#([-4.37114e-07,10,0], [-6.78307e-07,10,-5.51786], [-1.95921e-07,10,5.51786]), #([4.37114e-07,-4.37114e-07,10], [1.95921e-07,5.51786,10], [6.78307e-07,-5.51786,10]), #([4.37114e-07,-10,-8.74228e-07], [6.78307e-07,-10,5.51786], [1.9592e-07,-10,-5.51786]), #([-4.37114e-07,1.19249e-07,-10], [-1.9592e-07,-5.51786,-10], [-6.78307e-07,5.51786,-10]), true))
		1 : #(#(#([-10,1.62921e-06,0], [-10,1.62921e-06,0], [-3.33333,5.43069e-07,0]), #([10,-1.62921e-06,0], [3.33333,-5.43069e-07,0], [10,-1.62921e-06,0]), false), #(#([-5,5,-5], [-5,5,-5], [-1.66667,5,-5]), #([5,5,-5], [1.66667,5,-5], [5,1.66667,-5]), #([5,-5,-5], [5,-1.66667,-5], [1.66667,-5,-5]), #([-5,-5,-5], [-1.66667,-5,-5], [-5,-1.66667,-5]), #([-5,5,-5], [-5,1.66667,-5], [-5,5,-1.66667]), #([-5,5,5], [-5,5,1.66667], [-5,1.66667,5]), #([-5,-5,5], [-5,-1.66667,5], [-1.66667,-5,5]), #([5,-5,5], [1.66667,-5,5], [5,-1.66667,5]), #([5,5,5], [5,1.66667,5], [1.66667,5,5]), #([-5,5,5], [-1.66667,5,5], [-5,5,5]), false), #(#([-5,-5,-5], [-5,-5,-5], [-5,-5,-1.66667]), #([-5,-5,5], [-5,-5,1.66667], [-5,-5,5]), false), #(#([5,-5,-5], [5,-5,-5], [5,-5,-1.66667]), #([5,-5,5], [5,-5,1.66667], [5,-5,5]), false), #(#([5,5,-5], [5,5,-5], [5,5,-1.66667]), #([5,5,5], [5,5,1.66667], [5,5,5]), false))
	)
	bb1 = if DoubleYZ then [20,15,15] else [20,20,20]
	bb2 = nodeGetBoundingBox obj obj.transform;bb2 = (bb2[2]-bb2[1])
	scl = (bb2 / bb1) * (if DoubleYZ then [1,1.5,1.5]else [1,1,1])
	ret = scaleMatrix scl * obj.transform
	local s = line transform:obj.transform
	for i = 1 to poslist.count do
	(
		spl = addNewSpline s
		for j = 1 to poslist[i].count do
			(x = poslist[i][j];if classof x == BooleanClass then if x do (close s spl) else (addKnot s spl #bezierCorner #curve (x[1]*ret) (x[2]*ret) (x[3]*ret)))
	)
	updateShape s
	s.pos = obj.center;s.pivot = obj.pivot
	if rep do
	(
		r = copybaseobj obj:s
		pastebaseobj obj r[1] r[2]
		delete s
	)
)

fn setZeroTrans objs absf:true first:true state:(getCommandPanelTaskMode()) = --参数为:1物体或物体数组 2绝对冻结 3是否第一次运行 4面板状态 3和4用于递归,都不需要指定
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
fn getAllHeight a = (sel=(selection as array);select a;selection.max.z)--获得全体高度
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
	
fn addLimbProp holder = --添加肢部属性,Limb一定是一个两段结构(两段,三个骨骼,三个控制器),没对属性添加控制器,因为参数连接后会自动给予控制器,其次,UI设置控制器则每次都会是一个新控制器.
(
	local LimbCA = attributes LimbAtt
	(
		Parameters Limb rollout:LimbRollout
		(	
-- 			FKBones type:#nodeTab tabsize:0 tabSizeVariable:true
			FKCtrls type:#nodeTab tabsize:0 tabSizeVariable:true
			
			IKBones type:#nodeTab tabsize:0 tabSizeVariable:true
			IKCtrls type:#nodeTab tabsize:0 tabSizeVariable:true
			
			secondCtrls type:#nodeTab tabsize:0 tabSizeVariable:true
			fineCtrls type:#nodeTab tabsize:0 tabSizeVariable:true
			
			RelAbs type:#float UI:RelAbs Default:0.0
			FKIK type:#float UI:FKIK Default:0.0
			IKSoft type:#float UI:SoftIK Default:0.0
			IKstretch type:#float UI:stretchIK Default:0.0
		)
		rollout LimbRollout "FK IK Setting"
		(
			group "Switch Rel/Abs Rotation"
			(
				spinner RelAbs "Rel / Abs" width:84 range:[0,1,0] Align:#Right type:#float scale:0.01 tooltip:"Blend RelRotation AbsRotation.Rel:0 Abs:1 Default:0"
			)
			group "Switch FK/IK"
			(
				spinner FKIK "FK / IK" width:80 range:[0,1,0] Align:#Right type:#float scale:0.01 tooltip:"Blend FK&IK.FK:0 IK:1 Default:0"
					
				button toFK "FK >> IK" Align:#Left tooltip:"Match FK to IK."
				button toIK "IK >> FK" Align:#Right offset:[0,-25] tooltip:"Match IK to FK."
				
				on toFK pressed do (IKCtrls)
				on toIK pressed do ()
			)
			
			group"IK Property"
			(
				spinner SoftIK "IK Soft" width:80 range:[0,1,0]  Align:#Right type:#float scale:0.01 --controller:(bezier_float())
				spinner stretchIK "IK Stretch" width:85 range:[0,1,0]  Align:#Right type:#float scale:0.01 --controller:(bezier_float())
			)
			 
			group"Show/Hide"
			(
				button 'FK' "FK" Align:#Left width:32 tooltip:"Show/Hide FK controller.\nClick mouse:Left or Right."
				button 'IK' "IK" Align:#Left width:32 offset:[34,-25] tooltip:"Show/Hide IK controller.\nClick mouse:Left or Right."
				button 'second' "sec" Align:#right width:32 offset:[-34,-25] tooltip:"Show/Hide sec controller.\nClick mouse:Left or Right."
				button 'fine' "fine" Align:#right width:32 offset:[0,-25] tooltip:"Show/Hide fine controller.\nClick mouse:Left or Right."
				
				on FK pressed do unhide(join #() FKctrls)
				on FK rightClick do hide(join #() FKCtrls)
				on IK pressed do unhide(join #() IKCtrls)
				on IK rightClick do hide(join #() IKCtrls)
				on second pressed do unhide(join #() secondCtrls)
				on second rightClick do hide(join #() secondCtrls)
				on fine pressed do unhide(join #() fineCtrls)
				on fine rightClick do hide(join #() fineCtrls)
			)
		)
	)	
	Custattributes.add holder LimbCA baseobject:false
	
	
)
fn updataProp holder FKCtrls:#() IKBones:#() IKCtrls:#() secondCtrls:#() fineCtrls:#() = --FKBones:#()
(
	for i in FKCtrls do append holder.FKCtrls i
-- 	for i in FKBones do append holder.FKBones i
	for i in IKCtrls do append holder.IKCtrls i
	for i in IKBones do append holder.IKBones i
	for i in secondCtrls do append holder.secondCtrls i
	for i in fineCtrls do append holder.fineCtrls i
)
fn addTransEx nd tobase:false  = --暴露变换,指定Holder可以直接为其添加属性. --相对于 添加属性＿暴露变换2.ms 做了简化,只支持列表控制器,并且移除了缩放控制器的支持(反正有问题的话,就会变成无字不可用状态,免得有预料之外的错误还导致报错)
(-- 位置微调器的scale属性(精度),应当取决于整体高度的千分之一.(再试试,说不定是百分之1)
	
	local TransExCA = attributes TransExAtt
	(
		rollout TransformRollout "Controller Transform"
		(
			group "Position" 
			(
				spinner posx "x:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.001 align:#right Indeterminate:true enabled:false
				spinner posy "y:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.001 align:#right Indeterminate:true enabled:false
				spinner posz "z:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.001 align:#right Indeterminate:true enabled:false
			)
			group "Rotation" 
			(
				spinner rotx "x:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right Indeterminate:true enabled:false
				spinner roty "y:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right Indeterminate:true enabled:false
				spinner rotz "z:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right Indeterminate:true enabled:false
			)
			on TransformRollout open do
			(
				if selection.count == 1 do
				(
					tc = selection[1].controller
					if classof(tc) == prs do 
					(
						--处理位置控制器
						try(
							pc = tc[1][2].controller
							if classof pc == Position_XYZ do
							(
								posx.controller = pc[1].controller;posx.enabled = true;posx.Indeterminate = false 
								posy.controller = pc[2].controller;posy.enabled = true;posy.Indeterminate = false 
								posz.controller = pc[3].controller;posz.enabled = true;posz.Indeterminate = false 
							)
						)catch()
						--处理旋转控制器
						try(
							rc = tc[2][2].controller
							if classof rc == Euler_XYZ do
							(
								rotx.controller = rc[1].controller;rotx.enabled = true;rotx.Indeterminate = false 
								roty.controller = rc[2].controller;roty.enabled = true;roty.Indeterminate = false 
								rotz.controller = rc[3].controller;rotz.enabled = true;rotz.Indeterminate = false 
							)
						)catch()
	 					--不处理缩放控制器
					)
				)
			)
		)
	)
	modf = EmptyModifier();addmodifier nd modf
	Custattributes.add modf TransExCA baseobject:tobase
)

--下方函数相对于 创建扭曲(测试).ms 有部分更新,更改前先备份
fn CreateTwistBySpline spl --样条线
rigPrt:undefined
bnPrt:undefined --骨骼的父物体(仅作为方便导出骨架的层级链接)
type:true --FKIK混合类型,true为直接混合,false为创建露出变换混合
end:undefined --FK旋转节点
end1:undefined --IK旋转节点
FKIKswitch:undefined --FKIK控制器(直接实例化原有的FKIK切换控制器)
FKIKswitch1:undefined --1-FKIK控制器(直接实例化原有的FKIK切换控制器)
size:10 --尺寸大小
seg:3 --段数
name:"test" --名称
sep:"_"
= --改成了仅适用于Myrig系统的方案(因为Myrig中创建的样条线transformX轴正对线条方向),type:true,表示直接链接,false表示连接到露出变换
(
	knots = #()
	psize = size*0.1
	Bonepos = #()
	dir = spl.dir
	
	num = seg+1
	for i = num to 1.0 by -1 do --创建点e
	(
		per = (i-1)/seg
		pos = pathInterp spl 1 per --线的顶点的贝塞尔手柄的缩放,会影响结果
-- 		print #(i,per,pos)
		p = point transform:spl.transform name:(name+"_knot"+(i as integer) as string) pos:pos wirecolor:gray size:psize centermarker:on axistripod:on cross:off Box:off
		p.parent = spl
		insertItem p knots 1
		insertItem pos Bonepos 1
		--绑定路径约束(列表控制器)
		Lctrl = p[3][1].controller = position_list ()
		ctrl = Lctrl[1].controller = Path_Constraint()
		ctrl.appendTarget spl 50.0
		deleteKeys ctrl.percent.keys #allKeys
		ctrl.percent = per*100
-- 		--ctrl.follow = true --可惜路径的上方向只能是世界Z(不能选自定义的上方向参照),所以无法解决反转问题,否则可以很简单的实现绑定了
-- 		--ctrl.allowUpsideDown = true--使用会有抖动,不可开启
		ctrl.loop = false
		Lctrl[2].controller = Position_XYZ()
		Lctrl.Active = 2
		--绑定过渡旋转
		Lctrl = p[3][2].controller = Rotation_List()
		Lctrl[2].controller = Euler_XYZ()
		Lctrl.Active = 2
		ctrl = Lctrl[1][1].controller = Float_List()
		ctrl[2].controller = bezier_float()
		ctrl.Active = 2
		ctrl.average = on --平均权重
		if i < num do 
			if type then
			(--实际是FKIK,但是为了匹配切换值,将二者倒置
				
-- 				print #(end,end[3][2][2])
-- 				paramWire.connect end[3][2][2][1] ctrl[1] (s2s end[3][2][2][1] str:("{}*"+ ((i-1)/(seg-1)) as string)) --IK
				--这里IK的末端也不能直接连接,需要在末端建立变换,反向读取LocalX绑定
				ET = ExposeTm transform:spl.transform name:(name+sep+"ET") centermarker:on axistripo:off cross:off Box:off useParent:off displayExposedVals:off parent:spl wirecolor:black
				ET.exposeNode = spl
				ET.localReferenceNode = end
				paramWire.connect ET[4][2] ctrl[1] (s2s ET[4][2] str:("-{}*"+ ((i-1)/(seg-1)) as string)) --IK,因为从末端计算,所以数值为负
				paramWire.connect end1[3][2][2][1] ctrl[2] (s2s end1[3][2][2][1] str:("{}*"+ ((i-1)/(seg-1)) as string)) --FK
				ctrl.weights[1].controller = FKIKswitch
				ctrl.weights[2].controller = FKIKswitch1
			)
			else
			(
				
				ET = ExposeTm transform:spl.transform name:(name+sep+"ET") centermarker:on axistripo:off cross:off Box:off useParent:off displayExposedVals:off parent:spl wirecolor:black
				ET.exposeNode = spl
				ET.localReferenceNode = RigPrt
				
				paramWire.connect ET[4][2] ctrl[1] (s2s ET[4][2] str:("{}*"+ ((i-1)/(seg-1)) as string))
-- 				
-- 				--建立露出变换(露出spl,相对于BnPrt)
-- 				--绑定到X轴
				paramWire.connect end1[3][2][2][1] ctrl[2] (s2s end1[3][2][2][1] str:("{}*"+ ((i-1)/(seg-1)) as string))
					
				ctrl.weights[1].controller = FKIKswitch
				ctrl.weights[2].controller = FKIKswitch1
			)
			
	)
	localpos = Bonepos[num] - Bonepos[seg];append Bonepos (localpos*(1+size/length(localpos))+Bonepos[seg])--尾端骨骼的pos
	
	for i = 1 to num do
	(
		bn = BoneSys.createBone Bonepos[i] Bonepos[i+1] dir
		bn.width = bn.height = size
		bn.parent = bnPrt --链接父子
		bnPrt = bn --更新父
		bn.name = (name+sep+i as string)
		--绑定位置约束和注视约束到knots
		ctrl = bn[3][1].controller = Position_Constraint()
		ctrl.appendTarget knots[i] 50.0
		ctrl = bn[3][2].controller = Orientation_Constraint()
		ctrl.appendTarget knots[i] 50.0
		if i < num do
		(
			ctrl = bn[3][2].controller = LookAt_Constraint()
			ctrl.appendTarget knots[i+1] 50.0
			ctrl.lookat_vector_length = 0.0
			ctrl.upnode_world = off
			ctrl.pickUpNode = knots[i]
			ctrl.target_axis = 0
			ctrl.upnode_axis = 2
			ctrl.StoUP_axis = 2
		)
	)
)

ok