try(destroydialog  SpringCreator)catch()
--需求:规定颜色

--控制面板
ca = attributes IK_UI --声明自定义属性
(
rollout springCtrlPanel "跟随属性" width:160 height:184
(

	spinner spn_Spring "弹力:" pos:[32,16] width:72 height:16 range:[0,3,0.5]
	slider sld_spring "" pos:[8,32] width:144 height:25 range:[0,3,0.5] type:#float orient:#horizontal ticks:4
 --50到1500 默认340  val*500+50
	button btn_Spring "重置" pos:[112,16] width:32 height:16 toolTip:"(不能设置帧)偏右则更有弹力,弹动更明显."
	
	spinner spn_damp "回归:" pos:[32,72] width:72 height:16 range:[0,2.5,0.4]
	slider sld_damp "" pos:[8,88] width:144 height:25 range:[0,2.5,0.4] type:#float orient:#horizontal ticks:4
 --0.6到3.1 默认1  0.0-2.5 + 0.6  val + 0.6
	button btn_damp "重置" pos:[112,72] width:32 height:16 toolTip:"(不能设置帧)偏右则回归性更强,停止时更不易抖动."

	spinner spn_Zero "效果:" pos:[24,128] width:72 height:16 range:[0,200,100] controller:(Linear_Float())
	slider sld_Zero "" pos:[8,144] width:136 height:25 range:[0,200,100] type:#float orient:#horizontal ticks:4 controller:(Linear_Float())
 --0到200,默认100 val
	button btn_Zero "重置" pos:[112,128] width:32 height:16 toolTip:"(能设置帧)偏右则弹动效果增强,偏左则弹动效果减少,完全居左则无弹动效果."
	
	local sprList = #()
		
	fn setspnCaption = 
	(
		spn_Spring.value = sld_Spring.value
		spn_damp.value = sld_damp.value
	)
	fn setsldCaption = 
	(
		sld_Spring.value = spn_Spring.value
		sld_damp.value = spn_damp.value
	)
	fn getSprPoint=
	(
		mainname = replace selection[1].name (selection[1].name.count-4) 5 ""
		return execute ("$'"+mainname+"_Spring_*Spr*' as array" )
	)
	
	on springCtrlPanel open do
	(
		sprList = getSprPoint()
		sld_Spring.value = (sprList[1].pos.controller.getMass()-50)/500
		sld_damp.value = sprList[1].pos.controller.getDrag()-0.6
		sld_Zero.controller = spn_Zero.controller = sprList[1].pos.controller.x_effect.controller
		setspnCaption()
	)
	on spn_Spring changed val do
	(
		setsldCaption()
		for o in sprList do o.pos.controller.SetMass (val*500+50)
	)
	on sld_spring changed val do
	(
		setspnCaption()
		for o in sprList do o.pos.controller.SetMass (val*500+50)
	)
	on btn_Spring pressed do
	(
		spn_Spring.value = sld_Spring.value = 0.5
		for o in sprList do o.pos.controller.SetMass (300)
	)
	on spn_damp changed val do
	(
		setsldCaption()
		for o in sprList do o.pos.controller.SetDrag(val + 0.6)
	)
	on sld_damp changed val do
	(
		setspnCaption()
		for o in sprList do o.pos.controller.SetDrag(val + 0.6)
	)
	on btn_damp pressed do
	(
		spn_damp.value = sld_damp.value = 0.4
		for o in sprList do o.pos.controller.SetMass (1.0)	
	)
	on btn_Zero pressed do
	(
		spn_Zero.value = sld_Zero.value = 100
	)
)
)


--创建器窗口
rollout SpringCreator "弹簧绑定创建器" width:160 height:128
(
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
	
	label lbl_T "创建骨骼链,然后点击创建" pos:[8,8] width:144 height:24
	button btn_C "创建" pos:[8,56] width:144 height:24
	edittext edt1 "前缀" pos:[8,32] width:136 height:16
	button btn_CC "创建主控" pos:[8,96] width:144 height:24
	
	local SpringName = ""--绑定名称前缀
	local BoneList = #()
	local np
	on btn_C pressed do
	if selection.count > 1 do with animate off(
		SpringName = edt1.text
		--1记录骨骼
		BoneList = (selection as array)
		hsize = (BoneList[1].width+BoneList[1].height)*3
		b1 = BoneList[1]
		--按骨骼位置创建线
		SpringName +=  ("_Spring_" + (($'*_Spring_*_Spl'.count+1) as string))
		spl = SplineShape name:(SpringName+"_Spl") pos:[0,0,0]
		addNewSpline spl
		for b in BoneList do 
			(b.name = (uniqueName (SpringName+"_Bn"));addKnot spl 1 #smooth #curve b.pos)
		updateShape spl
		--线转平滑(*包括在上一步)
		--样条线IK约束(检查翻转)
		mdf = Spline_IK_Control linktypes:0 helper_centermarker:false helper_axistripod:false helper_cross:false box:true helper_size:hsize
		addModifier spl mdf
		mdf.createHelper (numknots Spl)
		h1 = mdf.helper_list[1]
		h1.name = (SpringName+"Ctrl");h1.wirecolor = Green
		for i = 2 to mdf.helper_list.count do 
			(mdf.helper_list[i].name = (SpringName+"Spr"+((i-1) as string)); mdf.helper_list[i].wirecolor = Yellow ; mdf.helper_list[i].pos.controller =(SpringPositionController()))
		--逐级连接,命名,设置弹簧控制器(包括在上一步)
		--关联影响参数
		mdf.helper_list[2].pos.controller.x_effect.controller = linear_float()
		controller = mdf.helper_list[2].pos.controller.x_effect.controller
		for i = 2 to mdf.helper_list.count do 
			(mdf.helper_list[i].pos.controller.x_effect.controller =  mdf.helper_list[i].pos.controller.y_effect.controller = mdf.helper_list[i].pos.controller.z_effect.controller = controller)
		mdf.helper_list[2].pos.controller.x_effect = 100
		--创建一个更小的父物体作为上方向
		p = point cross:on centermarker:on axistripod:off Box:off name:(SpringName+"_Up") size:(h1.size/2) parent:h1 pos:h1.pos wirecolor:Red
		setTransformLockFlags p #{1..3, 7..9} --仅锁定移动和缩放
		--绑定样条线IK到骨骼
		local spIK = IKSys.ikChain b1 BoneList[BoneList.count] "SplineIKSolver" --建立"SplineIKSolver"IK
		spIK.transform.controller.pickShape = spl --设置样条线
		spIK.name = (SpringName+"_spIK")  --设置名字
		spIK.transform.controller.goalSize =hsize
		spIK.transform.controller.upnode = p
		--设置第一节骨骼的路径约束(上一步的一部分)
		b1.pos.controller = position_list ()
		local pc = b1.pos.controller.Available.controller = Path_Constraint ()
		pc.path=spl
		b1.pos.controller.setActive 2
		deleteKeys b1.transform.controller.FK_Sub_Control.controller.Position.controller.Path_Constraint.controller.PERCENT.keys #allKeys
		--设置弹簧控制器的位置控制为位置列表
		for i = 2 to mdf.helper_list.count do 
		(
			mdf.helper_list[i].pos.controller.Position.controller = position_list ();
			mdf.helper_list[i].pos.controller.Position.controller.Position_XYZ.controller = bezier_position ()
			mdf.helper_list[i].pos.controller.Position.controller.Available.controller = Position_XYZ ()
			mdf.helper_list[i].pos.controller.Position.controller.Active = 2
			--mdf.helper_list[i].pos.controller.Position.controller[2].controller
		)
		--记录h1
		np = h1
		setFreezeTransform #(h1,p,mdf.helper_list[1])
	)
	on btn_CC pressed  do
	(
		SpringName = edt1.text
		p = point cross:off centermarker:off axistripod:off Box:on name:(SpringName+"_Main") size:(np.size*5) wirecolor:orange
		--绑定控制面板到顶级物体
		if classof p.modifiers[1] != EmptyModifier do addmodifier p (EmptyModifier ())
		custAttributes.add p.modifiers[1] ca
	)
)
createdialog  SpringCreator