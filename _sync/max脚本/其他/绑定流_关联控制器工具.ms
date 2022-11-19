--需求1:选中控制器,创建父级,尺寸大于自身一点,方向对齐,逐级连接,冻结变换(前缀+Source+Obj层),实例复制父级和控制器,控制器的冻结变换关联轨迹,底层添加位置约束给父物体.(放入Ctrl_Face层)(提供选则)
--需求2:逐次选中物体,点击按钮连接父子,规则为1-->2,3-->4,....,99-->100
--问题:加颜色控制,让点显示十字,父物体显示方块
try(destroydialog controllertool )catch()
rollout controllertool "关联控制器工具" width:168 height:160
(
	button btn_Link "逐次链接父子" pos:[16,128] width:136 height:24 toolTip:"1>>2循环连接父子,先选子物体"
	button btn_CRef "创建实例关联控制器" pos:[16,8] width:136 height:24
	button btn7 "SC" pos:[8,40] width:24 height:16 toolTip:"源控制器"

	local SrcCtrls = #()--源控制	
	local RefCtrls = #()--实例控制
	local SrcPrts = #()--源父物体
	local RefPrts = #()--实例父物体
	local AttPnts = #()--附着点
	
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

	button btn8 "RC" pos:[40,40] width:24 height:16 toolTip:"参照控制器"
	button btn9 "SP" pos:[72,40] width:24 height:16 toolTip:"源父物体"
	button btn10 "RP" pos:[104,40] width:24 height:16 toolTip:"参照父物体"
	button btn11 "AP" pos:[136,40] width:24 height:16 toolTip:"参照控制器附着点"
	button btn_RP2AP "RP2AP连接父子" pos:[15,81] width:136 height:24 toolTip:"将参照父物体连接给网格变形点"
	on btn_Link pressed do
	(
		sel = selection as array
		for i = 1 to sel.count by 2 do sel[i].parent = sel[i+1]
	)
	on btn_CRef pressed do --创建并关联
	with undo on(
		--选中一个控制器.她会创建一个父层级,然后整个复制,冻结变换后相互关联.复制的控制器会添加第三个控制器用于位置约束到父物体.用于参照的父物体会创建一些附着点.
		max create mode
		
		SrcCtrls = #()--源控制	
		RefCtrls = #()--实例控制
		SrcPrts = #()--源父物体
		RefPrts = #()--实例父物体
		AttPnts = #()--附着点
		
		for sc in (selection as array) do
		(
			bb = nodeGetBoundingBox sc sc.transform
			bb = bb[2]-bb[1]
			size = ((bb[1]+bb[2]+bb[3])/3)
			sp = point transform:sc.transform centermarker:off axistripod:off cross:off Box:on size:size wirecolor:green
			sp.parent = sc.parent
			sc.parent = sp
			rc = instance sc;rc.wirecolor = sc.wirecolor
			rp = instance sp;rp.wirecolor = sp.wirecolor
			rc.parent = rp
			setFreezeTransform #(sc,rc,sp)
			rc.position.controller[2].controller = sc.position.controller[2].controller --关联sc和rc的冻结变换控制器
			rc.rotation.controller[2].controller  = sc.rotation.controller[2].controller--关联sc和rc的冻结变换控制器
			ctrl = rc.position.controller.Available.controller = Position_Constraint ()
			ctrl .appendTarget rp 50
			ap = point transform:sc.transform centermarker:off axistripod:off cross:on Box:off size:size wirecolor:green
			rc.name = sc.name+"_Ref"
			sp.name = sc.name+"_Prt_Src"
			rp.name = sc.name+"_Prt_Ref"
			ap.name = sc.name+"_AtP"
			sc.name = sc.name+"_Src"
			append SrcCtrls sc
			append RefCtrls rc
			append SrcPrts sp
			append RefPrts rp
			append AttPnts ap
		)
	)
	on btn7 pressed do
	(
		select SrcCtrls
	)
	on btn8 pressed do
	(
		select RefCtrls
	)
	on btn9 pressed do
	(
		select SrcPrts
	)
	on btn10 pressed do
	(
		select RefPrts
	)
	on btn11 pressed do
	(
		select AttPnts
	)
	on btn_RP2AP pressed do
	(
		for i = 1 to rp.count do (RefPrts[i].parent = AttPnts [i];setTransformLockFlags RefPrts[i] #{1..9})
	)
)

createdialog controllertool  pos:[60,350]