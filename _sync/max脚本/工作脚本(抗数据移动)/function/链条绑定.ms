try (destroydialog ChainRig)catch()

/* Variable */
Chain_Name= "spIKchain"
BaseL = undefined
slidertime = 0f
BoneCount = 10
KontParentList = #()
ControllerCount = 4
KnotList = #()
LineLength = 0
boneList = #()
ctrlcount = 0

/* Function */

fn CreateLineBySelction = 
(
	--获取最长轴尺寸
	sobj = selection[1]
	bb = nodeGetBoundingBox sobj sobj.transform
	size = bb[2]-bb[1]
	maxA = 1
	for i = 2 to 3 do if size[i] > size[maxA] do maxA = i
	--创建线并对其
	l = line wirecolor:red name:(uniqueName(Chain_Name + "_Spl"));select l
	x = [0,0,0]
	x[maxA] += size[maxA]
	addnewSpline l
	addKnot l 1 #corner #line x
	addKnot l 1 #corner #line [0,0,0]
	updateShape l
	--处理变换
	CenterPivot l
	l.transform = sobj.transform
	l.pivot = sobj.transform.pos
	l.pos = sobj.center
	--返回
	return l
)
fn CreateChainRig controllerNum boneNum  = 
(
	suspendEditing()
	clearselection()
	slidertime = 0f
	--**获取样条线长度
	LineLength = getSegLengths BaseL 1
	LineLength = LineLength[LineLength.count]
	--计算分段
	ALength = LineLength / (controllerNum - 1) + 0.05
	addModifier BaseL (Normalize_Spl Length:ALength)
	convertToSplineShape BaseL
	--**创建虚拟体
	IKModifier = Spline_IK_Control linktypes:2 helper_centermarker:true helper_axistripod:false helper_cross:false box:true
	addModifier BaseL IKModifier
	IKModifier.createHelper (numknots BaseL)
	IKModifier.helper_size = ALength*0.55
	--**创建标记点(父物体)
	LengthPerCent= LineLength / (boneNum * LineLength) * 100 --分段百分比
	knotSize = LineLength / boneNum * 0.45
	KnotParentList = #()
	for i = 1 to (boneNum + 1) do
	(
		newknot = Point name:(uniqueName(Chain_Name + "_knot_P_")) Centermarker:true Axistripod:false Cross:false Box:true  size:knotSize drawontop:false wirecolor:red
		newknot.pos.controller = position_list ()
		newknot.pos.controller.Position_XYZ.controller = Path_Constraint ()
		deleteKeys newknot.pos.controller.Path_Constraint.controller.percent.keys #allKeys
		newknot.pos.controller.Path_Constraint.appendTarget BaseL 50.0
		newknot.pos.controller.Path_Constraint.controller.percent = (LengthPerCent * (i - 1))
		newknot.pos.controller.Path_Constraint.controller.follow = true
		newknot.pos.controller.Available.controller = Position_XYZ ()
		newknot.pos.controller.Active = 2
		newknot.rotation.controller = rotation_list ()--用来绕过冻结变换的报错
		newknot.rotation.controller.Available.controller = Euler_XYZ ()--用来绕过冻结变换的报错
		newknot.rotation.controller.Active = 2--用来绕过冻结变换的报错
		append KnotParentList newknot
	)
	--**创建标记点(子物体)
	knotSize = LineLength / boneNum * 0.75
	KnotList = #()
	for i in KnotParentList do
	(
		newknot = Point name:(uniqueName(Chain_Name + "_knot_")) Centermarker:false Axistripod:false Cross:true Box:true  size:knotSize drawontop:false wirecolor:yellow
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
	--**创建父物体
	root = Point name:(uniqueName (Chain_Name + "_knot_root")) pos:KnotList[1].transform.pos Centermarker:false Axistripod:false Cross:true Box:true  size:(IKModifier.helper_size * 2) drawontop:false wirecolor:green
	BaseL.parent = KnotList[1].parent = root
	for o =  IKModifier.helper_list  do
	(
		o.name = uniqueName (Chain_Name + "_ctrl_")
		o.wirecolor = orange
		o.parent = root
		setInheritanceFlags o #{1..6}
	)
	--**创建骨骼
	boneList = #()
	boneSize = knotSize * 0.55
	bonename = Chain_Name + "_bone_"
	dir = case maxA of 
	(
		2:[0,1,0]
		3:[1,0,0]
		default:[0,0,1]
	)
	for i = 1 to (KnotList.count - 1) do
	(
		newbone = BoneSys.createBone KnotList[i].transform.pos KnotList[i+1].transform.pos [0,0,1]
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
	)
	--位置约束
	b = boneList[count]
	b.pos.controller = position_list ()
	b.pos.controller.Available.controller = Position_Constraint ()
	b.pos.controller[2].appendTarget knotList[count] 50.0
	b.pos.controller.Active = 2
	resumeEditing()
)

/* UI */
rollout ChainRig "ChainRig" width:160 height:312
(
	edittext 'edt_name' "name:" pos:[16,16] width:128 height:16 align:#left
	button 'btn_create' "Create Chain Rig" pos:[16,272] width:128 height:24 align:#left
	spinner 'spn_bone_number' " Bone count:" pos:[16,248] width:128 height:16 range:[2,150,10] type:#integer scale:1 align:#left
	spinner 'spn_ctrl_count' " Ctrol count:" pos:[16,224] width:128 height:16 range:[2,20,4] type:#integer scale:1 align:#left
	GroupBox 'grp_2' "Properties" pos:[8,200] width:144 height:104 align:#left
	GroupBox 'grp_1' "First" pos:[8,40] width:144 height:64 align:#left
	label 'lbl1' "1. select a chain mesh." pos:[16,56] width:128 height:16 align:#left
	button 'btn_create_line' "Line By Selection" pos:[16,72] width:128 height:24 align:#left
	GroupBox 'grp2' "Second" pos:[8,112] width:144 height:80 align:#left
	label 'lbl2' "2. Identify the starting and ending points." pos:[16,128] width:128 height:29 align:#left
	button 'btn_pickL' "Or Pick A Line" pos:[16,160] width:128 height:24 align:#left
	on edt_name changed txt do
		if txt == "" then Chain_Name= "spIKchain" else Chain_Name= txt
	on btn_create pressed do
		if (isValidNode BaseL) and ((classof BaseL == line) or (classof BaseL == SplineShape)) do with redraw off (animate off (undo on (CreateChainRig ControllerCount BoneCount)))
	on spn_bone_number changed val do
		BoneCount = val
	on spn_ctrl_count changed val do
		ControllerCount = val
	on btn_create_line pressed do
		if selection.count > 0 do BaseL = undo on (CreateLineBySelction())
	on btn_pickL pressed  do
	(
		BaseL = selection[1]
		btn_pickL.caption = BaseL.name
	)
)

createdialog ChainRig

--end