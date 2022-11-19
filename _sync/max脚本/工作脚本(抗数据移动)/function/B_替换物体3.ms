-- 日志:
-- 20200901 解决消除缩放时,物体间有联系时会根据父物体缩放的问题.
try(destroydialog RORollout)catch()
rollout RORollout "替换物体" width:192 height:328
(
	
	local bobj
	local offset = #()
	local atts = #()
	
	local props = #()
	
	fn copybaseobj obj:selection[1] = --如果没选东西会报错.
	try(
		return #(obj.baseobject,#(obj.objectOffsetPos,obj.objectOffsetRot,obj.objectOffsetScale),(for i = 1 to custAttributes.count obj collect custAttributes.get obj i))
	)catch(messagebox "复制出错.")
	fn pastebaseobj obj bobj offset =
	(
		obj.baseobject = bobj
		obj.objectOffsetPos = offset[1];obj.objectOffsetRot = offset[2];obj.objectOffsetScale = offset[3]
	)
	
	fn RotatePivotOnly obj rotation = 
	(
		local rotValInv=inverse (rotation as quat)
		animate off in coordsys local obj.rotation*=RotValInv
		obj.objectoffsetrot*=RotValInv
		obj.objectoffsetpos*=RotValInv
	)
	fn CreateBoxByObj nodeB type:"Box" rescale:true = --holdAtt:false = 
	(
-- 		print 1
		trans = if rescale then 
		(
			d = dummy rotation:nodeB.rotation pos:nodeB.pos
			result = d.transform
			delete d
			result
		)
		else nodeB.transform
		
-- 		print 2
		bb = nodeGetBoundingBox nodeB (trans)
		size = (bb[2]-bb[1])
		
-- 		print 3
		b = case type of
		(
			"Box":
			(
				box width:size[3] length:size[2] height:size[1]
			)
			"Frame":
			(
				tb = box width:size[3] length:size[2] height:size[1]
				polyop.createShape (converttopoly tb) #{1..12} smooth:false name:"Temp_!@#$%Frame" node:tb
				delete tb
				getnodebyname "Temp_!@#$%Frame"
			)
			"Dummy":
			(
				d = dummy();d.boxsize = [size[3],size[2],size[1]];d
			)
			"Bone":
			(
				tb = BoneSys.createBone nodeB.pos ([size[1],0,0]*nodeB.transform) nodeB.dir
				tb.width = size[3];tb.height = size[2];tb.Taper = 0
				tb.sidefins = tb.frontfin = tb.backfin = off
				tb
			)
		)
		
-- 		print 4
		b.transform = (matrix3 [0,0,-1] [0,1,0] [1,0,0] [0,0,0])*trans
		b.center = nodeB.center
		
		if type != "Bone" do 
		(
			b.pivot = nodeB.transform.pos
			RotatePivotOnly b (EulerAngles 0 -90 0)
		)
		
-- 		if holdAtt do (print "拷贝原物体自定义属性")
		
-- 		print 5
		nodeB.baseobject = b.baseobject
		nodeB.objectOffsetPos = b.objectOffsetPos
		nodeB.objectOffsetRot = b.objectOffsetRot
		nodeB.objectOffsetScale = b.objectOffsetScale
		
-- 		print 6
		if rescale do nodeB.scale = [1,1,1]
		
-- 		print 7
		delete b
	)
	
	fn createShapeByObj obj type:0 size:10 DoubleYZ:true rep:true = --这里的size,是用于手动自定义生成时的尺寸定义,大部分时候没用,但以防万一,不要删
	(
		posList = case type of
		(
			0 : #(#(#([-10,-4.37114e-07,0], [-10,-4.37114e-07,0], [-3.33333,-1.45705e-07,0]), #([10,4.37114e-07,0], [3.33333,1.45705e-07,0], [10,4.37114e-07,0]), false), #(#([-4.37114e-07,10,0], [-6.78307e-07,10,-5.51786], [-1.95921e-07,10,5.51786]), #([4.37114e-07,-4.37114e-07,10], [1.95921e-07,5.51786,10], [6.78307e-07,-5.51786,10]), #([4.37114e-07,-10,-8.74228e-07], [6.78307e-07,-10,5.51786], [1.9592e-07,-10,-5.51786]), #([-4.37114e-07,1.19249e-07,-10], [-1.9592e-07,-5.51786,-10], [-6.78307e-07,5.51786,-10]), true))
			1 : #(#(#([-10,1.62921e-06,0], [-10,1.62921e-06,0], [-3.33333,5.43069e-07,0]), #([10,-1.62921e-06,0], [3.33333,-5.43069e-07,0], [10,-1.62921e-06,0]), false), #(#([-5,5,-5], [-5,5,-5], [-1.66667,5,-5]), #([5,5,-5], [1.66667,5,-5], [5,1.66667,-5]), #([5,-5,-5], [5,-1.66667,-5], [1.66667,-5,-5]), #([-5,-5,-5], [-1.66667,-5,-5], [-5,-1.66667,-5]), #([-5,5,-5], [-5,1.66667,-5], [-5,5,-1.66667]), #([-5,5,5], [-5,5,1.66667], [-5,1.66667,5]), #([-5,-5,5], [-5,-1.66667,5], [-1.66667,-5,5]), #([5,-5,5], [1.66667,-5,5], [5,-1.66667,5]), #([5,5,5], [5,1.66667,5], [1.66667,5,5]), #([-5,5,5], [-1.66667,5,5], [-5,5,5]), false), #(#([-5,-5,-5], [-5,-5,-5], [-5,-5,-1.66667]), #([-5,-5,5], [-5,-5,1.66667], [-5,-5,5]), false), #(#([5,-5,-5], [5,-5,-5], [5,-5,-1.66667]), #([5,-5,5], [5,-5,1.66667], [5,-5,5]), false), #(#([5,5,-5], [5,5,-5], [5,5,-1.66667]), #([5,5,5], [5,5,1.66667], [5,5,5]), false))
		)
-- 		size = size/2
-- 		scalev = size / 5
		bb1 = if DoubleYZ then [20,15,15] else [20,20,20]
		bb2 = nodeGetBoundingBox obj obj.transform;bb2 = (bb2[2]-bb2[1])
		scl = (bb2 / bb1) * (if DoubleYZ then [1,1.5,1.5]else [1,1,1])
		ret = scaleMatrix scl * obj.transform
		local s = line transform:obj.transform
		for i = 1 to poslist.count do
		(
			spl = addNewSpline s
			for j = 1 to poslist[i].count do (x = poslist[i][j];if classof x == BooleanClass then if x do (close s spl) else (addKnot s spl #bezierCorner #curve (x[1]*ret) (x[2]*ret) (x[3]*ret)))
-- 				(x = poslist[i][j];if classof x == BooleanClass then if x do (close s spl) else (addKnot s spl #bezierCorner #curve (x[1]*scalev*ret) (x[2]*scalev*ret) (x[3]*scalev*ret)))
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
	
-- 	fn holdAllProp = (sel = selection as array;props = for i in sel collect getInheritanceFlags i;for i in sel do setInheritanceFlags i #none)--记录继承属性,并设置为none
-- 	fn reSetAllProp = (sel = selection as array;for i = 1 to sel.count do setInheritanceFlags sel[i] props[i])--重新设置继承属性
	
	GroupBox grp1 "替换物体" pos:[8,8] width:176 height:48
-- 	checkbutton 'btn_holdAtt' "保留属性" pos:[68,8] width:54 height:14 toolTip:"勾选此项可保留原物体的自定义属性;取消勾选此项,可以将新的属性一起替换给目标.(目前用不着,开发完了还没合并.现在是不勾选的效果.)" checked:false align:#left enabled:false --不加这个了,因为baseobject替换完必然是参照的,一改全改了.
	button btn_Copy "复制" pos:[16,24] width:72 height:24
	button btn_Paste "粘贴" pos:[104,24] width:72 height:24
	
	GroupBox grp2 "形态替换" pos:[8,56] width:176 height:48
	checkbutton btn_reScale "消除缩放" pos:[68,56] width:54 height:14 toolTip:"默认不消除缩放,取消勾选此项可保持原缩放值." checked:false
	button btn_Box "方块体" pos:[16,72] width:48 height:24 toolTip:"物体替换为Box物体."
	button btn_Frame "框图形" pos:[72,72] width:48 height:24 toolTip:"物体替换为图形线框."
	button btn_Dummy "虚拟体" pos:[128,72] width:48 height:24 toolTip:"物体替换为虚拟体."
	
	
	GroupBox grp3 "图形适配" pos:[8,104] width:176 height:48
	checkbutton btn_DoubleYZ "双倍宽度" pos:[68,104] width:54 height:14 toolTip:"勾选可将宽度YZ轴扩大一倍." checked:false
	checkbutton btn_replace "直接替换" pos:[122,104] width:54 height:14 toolTip:"勾选可直接进行替换." checked:false
	button btn_C_L "中线环" pos:[16,120] width:48 height:24 toolTip:"物体替换为中线环形状."
	button btn_C_P "中线块" pos:[72,120] width:48 height:24 toolTip:"物体替换为中线块形状."
	
	GroupBox grp4 "批量替换" pos:[8,152] width:176 height:48
	checkbutton btn_DeleteB "删除B物" pos:[68,152] width:54 height:14 toolTip:"删除B物体" checked:false
	button btn_ABAB "顺序替换" pos:[16,168] width:72 height:24 toolTip:"按ABAB的顺序替换物体,B为基准目标."
	button btn_AABB "组半替换" pos:[104,168] width:72 height:24 toolTip:"按照AABB的方式替换,从中间除开,逐个匹配,B为基准目标."
	
	GroupBox grp5 "其他功能" pos:[8,200] width:176 height:120
	button btn_Bone "!!骨骼" pos:[16,216] width:48 height:24 toolTip:"物体替换为Bone物体.注意:由于骨骼的轴向特性,必须曾经是骨骼,才能正确转为骨骼!"
	button btn_0scale "!!重缩" pos:[72,216] width:48 height:24 toolTip:"通过打断再连接的方式重置物体缩放.注意:如果有一些依赖于层级关系的绑定,重缩可能不正确!"
	button btn_Temp "!!临时" pos:[128,216] width:48 height:24 toolTip:"将物体临时替换成大小为1的点辅助对象,右键可以恢复."
	radiobuttons rdo_Axis "选择轴向-替换成图形,大小为10" pos:[16,248] width:30 height:62 labels:#("x", "y", "z") columns:1 offsets:#([-2,0], [-2,0], [-2,0])
	listbox lbx_Type "" pos:[56,266] width:120 height:3 items:#("圆环","矩形","多边形")
	
	on btn_Copy pressed do
	(
		r = copybaseobj()
		bobj = r[1];offset = r[2];atts = r[3]
	)
	on btn_Paste pressed do
		with undo on(if bobj != undefined do for o in (selection as array) do pastebaseobj o bobj offset)
	on btn_Box pressed do
	(
		undo "ConvertToBox" on
		(
			state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
	-- 			holdAllProp()
			for obj in selection as array do (CreateBoxByObj obj rescale:btn_reScale.checked)
	-- 			reSetAllProp()
			setCommandPanelTaskMode state
		)
	)
	on btn_Frame pressed do
	(
		undo "ConvertToFrame" on
		(
			state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
			for obj in (selection as array) do (CreateBoxByObj obj type:"Frame" rescale:btn_reScale.checked)
			setCommandPanelTaskMode state
		)
	)
	on btn_Dummy pressed do
	(
		undo "ConvertToDummy" on
		(
			state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
			for obj in (selection as array) do (CreateBoxByObj obj type:"Dummy" rescale:btn_reScale.checked)
			setCommandPanelTaskMode state
		)
	)
	on btn_C_L pressed do
	(
		undo "ConvertToC&L" on
		(
			for i in (selection as array) do createShapeByObj i type:0 DoubleYZ:btn_DoubleYZ.checked rep:btn_replace.checked
		)
	)
	on btn_C_P pressed do
	(
		undo "ConvertToC&P" on
		(
			for i in (selection as array) do createShapeByObj i type:1 DoubleYZ:btn_DoubleYZ.checked rep:btn_replace.checked
		)
	)
	on btn_ABAB pressed do
	(
		undo "Batch Replace" on
		(
			sel = selection as Array
			p = btn_DeleteB.checked
			for i = 2 to sel.count by 2 do
			(
				a = sel[i-1];b = sel[i]
				r = copybaseobj obj:b
				pastebaseobj a r[1] r[2]
				if p do delete b
			)	
		)
	)
	on btn_AABB pressed do
	(
		undo "Batch Replace" on
		(
			sel = selection as Array
			half = sel.count/2
			p = btn_DeleteB.checked
			for i = (half+1) to sel.count do
			(
				a = sel[i-half];b = sel[i]
				r = copybaseobj obj:b
				pastebaseobj a r[1] r[2]
				if p do delete b
			)	
		)
	)
	on btn_Bone pressed do
	(
		undo "ConvertToBone" on
		(
			state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
			for obj in (selection as array) do (CreateBoxByObj obj type:"Bone" rescale:btn_reScale.checked)
			setCommandPanelTaskMode state
		)
	)
	on btn_0scale pressed do
	(
		sel = selection as array
		parents = for i in sel collect i.parent
		for i in sel do i.parent = undefined
		sizes = for i in sel collect (n = snapshot i;resetscale n;bb = nodeGetBoundingBox n n.transform;delete n;bb[2]-bb[1])
		for i in sel do i.scale = [1,1,1]
		for i = 1 to sel.count do (sel[i].parent = parents[i];if classof sel[i] == BoneGeometry do (sel[i].width = sizes[i][3];sel[i].height = sizes[i][2];sel[i].length = sizes[i][1]))
	)
	on btn_Temp pressed do
	undo on(
		local temp = attributes tempAtt(Parameters tempbaseobj(tempobj type:#maxobject offset type:#stringTab tabSizeVariable:true))
		for i in selection as array do 
		(
			if not isProperty i "tempobj" do (Custattributes.add i temp baseobject:false;i.tempobj = i.baseobject;i.offset = #(i.objectOffsetPos as string,i.objectOffsetRot as string,i.objectOffsetScale as string))
			p = point size:1 box:on axistripod:on cross:off centermarker:off;i.baseobject = p.baseobject;delete p
		)
	)
	on btn_Temp rightClick do
		undo on(for i in selection as Array where isProperty i "tempobj" do (i.baseobject = i.tempobj;i.objectOffsetPos = execute i.offset[1];i.objectOffsetRot = execute i.offset[2];i.objectOffsetScale = execute i.offset[3]))
	on lbx_Type doubleClicked sel do
	undo "Replace baseobj" on(
		objRot = case rdo_Axis.state of
		(
			1 : (quat 0 -0.707107 0 0.707107)
			2 : (quat 0.707107 0 0 0.707107)
			3 : (quat 0 0 0 1)
		)
		appearance = case sel of
		(
			1 : Circle radius:5
			2 : Rectangle length:10 width:10 cornerRadius:0
			3 : Ngon radius:5 cornerRadius:0 nsides:6 circular:off scribe:1
		)
		for o in selection as array do
		(
			o.baseobject = appearance.baseobject
			o.objectOffsetRot = objRot
		)
		delete appearance
	)
)

createdialog RORollout