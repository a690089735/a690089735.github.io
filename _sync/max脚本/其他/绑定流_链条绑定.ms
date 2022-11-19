try (destroydialog ChainRig)catch()


/* UI */
rollout ChainRig "ChainRig" width:160 height:152
(
	edittext edt_name "name:" pos:[16,16] width:128 height:16
	button btn_create "Create Chain Rig" pos:[16,112] width:128 height:24
	spinner spn_bone_number " Bone count:" pos:[16,88] width:128 height:16 range:[2,150,6] type:#integer scale:1
	GroupBox grp_2 "Properties" pos:[8,40] width:144 height:104
	checkbox chk_LookRot "LookRot" pos:[14,64] width:56 height:16
	checkbox chk_HandleCtrl "HandleCtrl" pos:[77,64] width:72 height:16
	
	/* Variable */
	local Chain_Name= "spIKchain"
	local BaseL = undefined
	local BoneCount = 6
	local KontParentList = #()
	local ControllerCount = 4
	local KnotList = #()
	local ctrlList = #()
	local LineLength = 0
	local boneList = #()
	local ctrlcount = 0

	/* Function */
	fn CreateChainRig boneNum LookRot handleCtrl= 
	(
		controllerNum = numknots BaseL 1
		clearselection()
		slidertime = 0f
		--**获取样条线长度
		LineLength = getSegLengths BaseL 1
		LineLength = LineLength[LineLength.count]
		--计算分段长度
		ALength = LineLength / (controllerNum - 1) + 0.05
		--**创建虚拟体
		skinMod = (skin())
		addModifier BaseL skinMod
		ctrlList = for i = 1 to controllerNum collect Point Centermarker:true Axistripod:false Cross:false Box:true pos:(getknotpoint BaseL 1 i) name:(uniqueName(Chain_Name + "_Ctrl_")) size:(ALength*0.55) wirecolor:orange
		--**创建父物体
		root = Point name:(uniqueName (Chain_Name + "_knot_root")) pos:((ctrlList[1].transform.pos+ctrlList[ctrlList.count].transform.pos)/2) Centermarker:false Axistripod:false Cross:true Box:true  size:(LineLength*0.5) drawontop:false wirecolor:green
		BaseL.parent = ctrlList.parent = root
		--**skin
		select BaseL
		max modify mode
		if handleCtrl 
		then 
		(for i = controllerNum to 1 by -1 do 
		(
			p1 = Point Centermarker:true Axistripod:false Cross:false Box:true pos:(getOutVec BaseL 1 i) name:(uniqueName(Chain_Name + "_HCtrl_")) size:(ALength*0.35) wirecolor:((orange+white)/2)
			p2 = Point Centermarker:true Axistripod:false Cross:false Box:true pos:(getInVec BaseL 1 i) name:(uniqueName(Chain_Name + "_HCtrl_")) size:(ALength*0.35) wirecolor:((orange+white)/2)
			p1.parent = p2.parent = ctrlList[i]
			insertItem (p1) ctrlList (i+1)
			insertItem (p2) ctrlList i
		)
		for i = 1 to ctrlList.count do 
		(
			skinOps.addbone skinMod ctrlList[i] 0
			classof BaseL; skinOps.SetVertexWeights (skinMod) (i) (i) (1)
		))
		else
		for i = 1 to ctrlList.count do 
		(
			skinOps.addbone skinMod ctrlList[i] 0
			for j = (i*3-2) to (i *3) do (classof BaseL; skinOps.SetVertexWeights (skinMod) (j) (i) (1))
		)
		--**创建标记点(父物体)
		LengthPerCent= LineLength / (boneNum * LineLength) * 100 --分段百分比
		knotSize = LineLength / boneNum * 0.35
		KnotParentList = #()
		for i = 1 to (boneNum + 1) do
		(
			newknot = Point name:(uniqueName(Chain_Name + "_Kn_P_")) Centermarker:true Axistripod:false Cross:false Box:true  size:knotSize drawontop:false wirecolor:red
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
-- 		freeze KnotParentList --冻结
		--**创建标记点(子物体)
		knotSize = LineLength / boneNum * 0.75
		KnotList = #()
		for i in KnotParentList do
		(
			newknot = Point name:(uniqueName(Chain_Name + "_Kn_")) Centermarker:false Axistripod:false Cross:true Box:true  size:knotSize drawontop:false wirecolor:yellow
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
		--**创建骨骼
		boneList = #()
		boneSize = knotSize * 0.55
		bonename = Chain_Name + "_Bn_"
		for i = 1 to (KnotList.count - 1) do
		(
			pos1 = KnotList[i].transform.pos; pos2 = KnotList[i+1].transform.pos
			newbone = BoneSys.createBone pos1  pos2  (pos1+pos2)
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
		upnode = root
		if LookRot do upnode = copy root
		upnode.size = (upnode.size*0.5)
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
			b.rotation.controller.LookAt_Constraint.controller.upnode_world = off
			b.rotation.controller.LookAt_Constraint.controller.pickUpNode = upnode
		)
		if LookRot do 
		(
			upnode.rotation.controller = rotation_list ()
			upnode.rotation.controller.Available.controller = LookAt_Constraint ()
			upnode.rotation.controller[2].appendTarget  ctrlList[ctrlList.count/2+1] 50.0
			upnode.rotation.controller[2].lookat_vector_length = 0.0
			upnode.rotation.controller.Active = 2
			upnode.rotation.controller.LookAt_Constraint.controller.upnode_world = off
			upnode.rotation.controller.LookAt_Constraint.controller.pickUpNode = root
			upnode.rotation.controller.LookAt_Constraint.controller.RELATIVE = on
		)
		--位置约束
		b = boneList[count]
		b.pos.controller = position_list ()
		b.pos.controller.Available.controller = Position_Constraint ()
		b.pos.controller[2].appendTarget knotList[count] 50.0
		b.pos.controller.Active = 2
	)
	
	on edt_name changed txt do
		if txt == "" then Chain_Name= "spIKchain" else Chain_Name= txt
	on btn_create pressed do
	(	BaseL = selection[1]
		slidertime = 0f
		if (isValidNode BaseL) and ((classof BaseL == line) or (classof BaseL == SplineShape)) do with redraw off (animate off (undo on (CreateChainRig (BoneCount) (chk_LookRot.checked) (chk_HandleCtrl.checked))))
	)
	on spn_bone_number changed val do
		BoneCount = val
)

createdialog ChainRig

--end