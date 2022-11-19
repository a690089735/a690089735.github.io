--需求:选择控制器,选择关联模型,一键:到创建面板-->创建关联控制器-->创建父层级-->创建附着点-->绑定附着点到最近面-->逐层连接父子-->绑定变换-->移动源控制器及其父物体移动到隐藏层.
--测试:是不是不需要复制一个参照对象,也能实现这种绑定....

--需求1:选中控制器,创建父级,尺寸大于自身一点,方向对齐,逐级连接,冻结变换(前缀+Source+Obj层),实例复制父级和控制器,控制器的冻结变换关联轨迹,底层添加位置约束给父物体.(放入Ctrl_Face层)(提供选则)
--需求2:逐次选中物体,点击按钮连接父子,规则为1-->2,3-->4,....,99-->100
--问题:加颜色控制,让点显示十字,父物体显示方块
try(destroydialog AtCtrlTool)catch()

rollout AtCtrlTool "关联控制器-高级" width:168 height:256
(
	fn mesh_filt obj = superclassof obj == GeometryClass
	pickbutton btn_pick "拾取附着物体" pos:[16,24] width:136 height:24 message:"请选择一个物体" filter:mesh_filt autoDisplay:true
	button btn8 "RC" pos:[40,112] width:24 height:16 toolTip:"参照控制器"
	button btn9 "SP" pos:[72,112] width:24 height:16 toolTip:"源父物体"
	button btn10 "RP" pos:[104,112] width:24 height:16 toolTip:"参照父物体"
	button btn11 "AP" pos:[136,112] width:24 height:16 toolTip:"参照控制器附着点"
	button btn_Link "逐次链接父子" pos:[16,184] width:136 height:24 toolTip:"1>>2循环连接父子,先选子物体"
	button btn_CRef "创建实例关联控制器" pos:[16,80] width:136 height:24 toolTip:"完整的创建附着联动控制器"
	button btn7 "SC" pos:[8,112] width:24 height:16 toolTip:"源控制器"
	
	local posSet = #()

	local SrcCtrls = #()--源控制	
	local RefCtrls = #()--实例控制
	local SrcPrts = #()--源父物体
	local RefPrts = #()--实例父物体
	local AttPnts = #()--附着点
	
	local tempObj
	local tempChildren = #()
	
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
	
	GroupBox grp1 "设置附着物体" pos:[8,8] width:152 height:48

	GroupBox grp2 "选择源控制器" pos:[8,64] width:152 height:72
	GroupBox grp3 "补充功能" pos:[8,144] width:152 height:104
	button btn_CreateHold "创建承载层级" pos:[16,160] width:136 height:24 toolTip:"在目标和目标的父级之间,创建一个父级作为承载,"
	Button ckb_change "修改附着点位置" pos:[16,216] width:136 height:24 toolTip:"慎用\n按下时记录子物体,并且断开链接\n弹起时恢复链接并且重新冻结变换."
	on btn_pick picked obj do
	(
	-- 		obj = selection[1]
	 	local omesh = snapshotAsMesh obj
		vposList = for i = 1 to omesh.numverts collect (getVert omesh i) --获取所有顶点坐标
		posSet  = for i = 1 to omesh.numFaces collect 
		(
			local vID = getFace omesh i--获取顶点位置列表(按顶点序号排序)
			(vposList[vID[1]]+vposList[vID[2]]+vposList[vID[3]])/3
		)
	)
	on btn8 pressed do --rc
	(
		if keyboard.controlPressed then selectmore RefCtrls else if keyboard.altPressed then deselect RefCtrls else select RefCtrls
	)
	on btn9 pressed do --sp
	(
		if keyboard.controlPressed then selectmore SrcPrts else if keyboard.altPressed then deselect SrcPrts else select SrcPrts
	)
	on btn10 pressed do
	(
		if keyboard.controlPressed then selectmore RefPrts else if keyboard.altPressed then deselect RefPrts else select RefPrts
	)
	on btn11 pressed do
	(
		if keyboard.controlPressed then selectmore AttPnts else if keyboard.altPressed then deselect AttPnts else select AttPnts
	)
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
		
		for sc in getcurrentselection() do
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
			rc.rotation.controller[2].controller = sc.rotation.controller[2].controller --关联sc和rc的冻结旋转控制器
			rc.scale.controller = sc.scale.controller --关联sc和rc的缩放控制器
			ctrl = rc.position.controller.Available.controller = Position_Constraint ()
			ctrl .appendTarget rp 50
			ap = point transform:sc.transform centermarker:on axistripod:off cross:off Box:off size:size wirecolor:green
			--命名--
			rc.name = sc.name+"_Ref"
			sp.name = sc.name+"_Prt_Src"
			rp.name = sc.name+"_Prt_Ref"
			ap.name = sc.name+"_AtP"
			sc.name = sc.name+"_Src"
			rp.rotation.controller = Orientation_Constraint()
			rp.rotation.controller.appendtarget sp 50.0
			append SrcCtrls sc
			append RefCtrls rc
			append SrcPrts sp
			append RefPrts rp
			append AttPnts ap
		)
		--附着--
		local Dis
		for o in AttPnts do
		(
			opos = o.center
			dis = for i = 1 to PosSet.count collect distance opos posSet[i]--距离集合
			index = findItem dis (amin dis)--获得最近的面序号
			--绑定物体--
			o.pos.controller = position_list () 
			ctrl = o.pos.controller[2].controller = Attachment ()
			ctrl.align = true
			o.parent = ctrl.node = btn_pick.object
			key1 = AttachCtrl.addNewKey ctrl  0f
			key1.face = (index - 1)
			key1.coord = [0.5,0]
			o.pos.controller.setActive 2
		)
		for i = 1 to RefPrts.count do (RefPrts[i].parent = AttPnts[i];setTransformLockFlags RefPrts[i] #{1..9})--链接层级
	)
	on btn7 pressed do
	(
		select SrcCtrls
	)
	on btn_CreateHold pressed do
	undo on(
		sel = getcurrentselection()
		for o in sel do 
		(
			d = Dummy transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] (o.pos)) Boxsize:[0.01,0.01,0.01] name:(o.name+"_Hold")
			d.parent = o.parent
			o.parent = d
	-- 			setFreezeTransform #(d,o)
		)
	)
	on ckb_change pressed do
	(
		if tempObj == undefined then
		(
			tempObj = selection[1]
			tempChildren = for i in tempobj.children collect (i.parent = undefined; i)
			ckb_change.caption = ("恢复" + tempobj.name)
		)else
		(
			state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
			for i in tempChildren do i.parent = tempobj
			setFreezeTransform tempChildren Frot:false
			tempObj = undefined
			ckb_change.caption = "修改附着点位置"
			setCommandPanelTaskMode state
		)
	)
)

createdialog AtCtrlTool

--end