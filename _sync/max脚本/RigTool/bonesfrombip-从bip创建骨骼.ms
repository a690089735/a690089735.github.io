--based on Biped Twists Creator v3.1.3
macroScript BonesFromBip category:"# Scripts"
(
fn setBoneProps BoneNode Parent BoneNewName BLength BWidth BHeight sidefins sidefinssize sidefinsstarttaper sidefinsendtaper frontfin frontfinsize frontfinstarttaper frontfinendtaper backfin backfinsize backfinstarttaper backfinendtaper boneScaleType boneFreezeLength BoneTaper BoneColor =
(
	BoneNode.parent = Parent; BoneNode.name = BoneNewName
	BoneNode.length = BLength; BoneNode.width = BWidth; BoneNode.height = BHeight
	BoneNode.sidefins = sidefins; BoneNode.sidefinssize = sidefinssize; BoneNode.sidefinsstarttaper = sidefinsstarttaper; BoneNode.sidefinsendtaper = sidefinsendtaper
	BoneNode.frontfin = frontfin; BoneNode.frontfinsize = frontfinsize; BoneNode.frontfinstarttaper = frontfinstarttaper; BoneNode.frontfinendtaper = frontfinendtaper
	BoneNode.backfin = backfin; BoneNode.backfinsize = backfinsize; BoneNode.backfinstarttaper = backfinstarttaper; BoneNode.backfinendtaper = backfinendtaper
	BoneNode.boneScaleType = boneScaleType; BoneNode.boneFreezeLength = boneFreezeLength
	BoneNode.taper = BoneTaper; BoneNode.wirecolor = BoneColor
)
fn AddPosConstraint BoneNode controller_nr controller_weight target target_weight is_relative =
(
	if classof BoneNode.position.controller != Position_List then BoneNode.position.controller = Position_List()
	BoneNode.position.controller[controller_nr].controller = Position_Constraint()
	BoneNode.position.controller[controller_nr].controller.appendTarget target target_weight
	BoneNode.position.controller[controller_nr].controller.relative = is_relative
	BoneNode.position.controller.weight[controller_nr] = controller_weight
)
fn AddOrientConstraint BoneNode controller_nr controller_weight target target_weight is_relative =
(
	if classof BoneNode.rotation.controller != Rotation_List then BoneNode.rotation.controller = Rotation_List()
	BoneNode.rotation.controller[controller_nr].controller = Orientation_Constraint()
	BoneNode.rotation.controller[controller_nr].controller.appendTarget target target_weight
	BoneNode.rotation.controller[controller_nr].controller.relative = is_relative
	BoneNode.rotation.controller.weight[controller_nr] = controller_weight
)
-- StoUP_axis  	0 - X axis 	1 - Y axis  	2 - Z axis
fn AddLookConstraint BoneNode controller_nr controller_weight target target_axisFlip target_weight upnode_world pickUpNode StoUP_axis StoUP_axisFlip upnode_axis lookat_vector_length is_relative =
(
	if classof BoneNode.rotation.controller != Rotation_List then BoneNode.rotation.controller = Rotation_List()
	BoneNode.rotation.controller[controller_nr].controller = LookAt_Constraint()
	BoneNode.rotation.controller[controller_nr].controller.target_axisFlip = target_axisFlip
	BoneNode.rotation.controller[controller_nr].controller.upnode_world = upnode_world
	BoneNode.rotation.controller[controller_nr].controller.upnode_axis = upnode_axis
	BoneNode.rotation.controller[controller_nr].controller.StoUP_axis = StoUP_axis
	BoneNode.rotation.controller[controller_nr].controller.StoUP_axisFlip = StoUP_axisFlip
	BoneNode.rotation.controller[controller_nr].controller.lookat_vector_length = lookat_vector_length
	BoneNode.rotation.controller[controller_nr].controller.appendTarget target target_weight
	BoneNode.rotation.controller[controller_nr].controller.pickUpNode = pickUpNode
	BoneNode.rotation.controller[controller_nr].controller.relative = is_relative
	BoneNode.rotation.controller.weight[controller_nr] = controller_weight
)
fn CreateBone NewName Parent BoneColor PosStart PosEnd Rot rotlocalx Lookat1Target Lookat1_weight Lookat1XFlip Lookat1controller_nr Lcontroller1_weight Lookat1Node Lookat1Axiss1 Lookat1Axiss2 Lookat2Target Lookat2_weight Lookat2XFlip Lookat2controller_nr Lcontroller2_weight Lookat2Node  Lookat2Axiss1 Lookat2Axiss2 	Orient1target Orient1target_weight Orient1controller_nr Orient1controller_weight Orient1is_relative Orient2target Orient2target_weight Orient2controller_nr Orient2controller_weight Orient2is_relative PositionTarget =
(
	global NewBone = BoneSys.createBone PosStart PosEnd Rot
	in coordsys local rotate NewBone (EulerAngles rotlocalx 0 0)
	setBoneProps NewBone Parent NewName NewBone.Length 1 1 false 2 0 0 false 2 0 0 false 2 0 0 #Scale false 0 BoneColor
	if Lookat1Target != U then (AddLookConstraint NewBone Lookat1controller_nr Lcontroller1_weight Lookat1Target Lookat1XFlip Lookat1_weight false Lookat1Node Lookat1Axiss1 false Lookat1Axiss2 0 false)
	if Lookat2Target != U then (AddLookConstraint NewBone Lookat2controller_nr Lcontroller2_weight Lookat2Target Lookat2XFlip Lookat2_weight false Lookat2Node Lookat2Axiss1 false Lookat2Axiss2 0 false)
	if Orient1Target != U then (AddOrientConstraint NewBone Orient1controller_nr Orient1controller_weight Orient1target Orient1target_weight Orient1is_relative)
	if Orient2Target != U then (AddOrientConstraint NewBone Orient2controller_nr Orient2controller_weight Orient2target Orient2target_weight Orient2is_relative)
	if PositionTarget != U then (AddPosConstraint NewBone 1 100 PositionTarget 100 false)
)
fn CreateUpperTwists LimbA LimbB LimbC Names TwistsSuffix col =
(
	TwistL = (distance LimbB LimbC)/4
	TwistPoint = point pos:LimbB.transform.pos; TwistPoint.transform = LimbC.transform; TwistPoint.name = "TwistHelper" + LimbB.name; TwistPoint.size = 10; TwistPoint.cross = false; TwistPoint.box = true; TwistPoint.wirecolor = color 255 0 0; TwistPoint.parent = LimbA
	--AddOrientConstraint TwistPoint 1 100 LimbA 100 false
 	CreateBone (LimbB.name + TwistsSuffix[1]) LimbB col LimbB.transform.row4 ([TwistL, 0, 0] * LimbB.transform) LimbB.transform.row3 0 	LimbC 50 false 1 100 TwistPoint 1 1    TwistPoint 50 false 1 100 TwistPoint 1 1		U 0 0 0 0  U 0 0 0 0   LimbB
	CreateBone (LimbB.name + TwistsSuffix[2]) NewBone col ([TwistL, 0, 0] * NewBone.transform)	([TwistL*2, 0, 0] * NewBone.transform) NewBone.transform.row3 0 	LimbC 100 false 1 100 NewBone 2 2    U 0 0 0 0 0 0 0   U 0 0 0 0   U 0 0 0 0   U
 	CreateBone (LimbB.name + TwistsSuffix[3]) NewBone col ([TwistL, 0, 0] * NewBone.transform)	([TwistL*2, 0, 0] * NewBone.transform) NewBone.transform.row3 0 	LimbC 100 false 1 50 NewBone 2 2    LimbC 100 false 2 50 LimbB 2 2   U 0 0 0 0   U 0 0 0 0   U
	CreateBone (LimbB.name + TwistsSuffix[4]) NewBone col ([TwistL, 0, 0] * NewBone.transform) LimbC.transform.row4	NewBone.transform.row3 0 	LimbC 100 false 1 100 LimbB 2 2    U 0 0 0 0 0 0 0   U 0 0 0 0   U 0 0 0 0   U
	CreateBone (LimbB.name + "TwistsEnd") NewBone (color 255 0 0) LimbC.transform.row4 ([1, 0, 0] * LimbC.transform) LimbC.transform.row3 0 	U 0 0 0 0 0 0 0    U 0 0 0 0 0 0 0   U 0 0 0 0   U 0 0 0 0   LimbC
	freeze NewBone; hide NewBone
)
fn CreateLowerTwists LimbA LimbB LimbC Names TwistsSuffix col LastTwistAxiss=
(
	TwistL = (distance LimbB LimbC)/4; A = LastTwistAxiss
	CreateBone (LimbB.name + TwistsSuffix[1]) LimbB col LimbB.transform.row4 ([TwistL, 0, 0] * LimbB.transform) LimbB.transform.row3 0 U 0 0 0 0 0 0 0    U 0 0 0 0 0 0 0   LimbA 50 1 100 false   LimbB 50 1 100 false   LimbB
	CreateBone (LimbB.name + TwistsSuffix[2]) NewBone col ([TwistL, 0, 0] * NewBone.transform) ([TwistL*2, 0, 0] * NewBone.transform) NewBone.transform.row3 0 LimbC 100 false 1 100 NewBone 2 2    U 0 0 0 0 0 0 0   U 0 0 0 0   U 0 0 0 0   U
	CreateBone (LimbB.name + TwistsSuffix[3]) NewBone col ([TwistL, 0, 0] * NewBone.transform) ([TwistL*2, 0, 0] * NewBone.transform) NewBone.transform.row3 0 LimbC 100 false 1 50 NewBone A A    LimbC 100 false 2 50 LimbC A A   U 0 0 0 0   U 0 0 0 0   U
	CreateBone (LimbB.name + TwistsSuffix[4]) NewBone col ([TwistL, 0, 0] * NewBone.transform) LimbC.transform.row4 NewBone.transform.row3 0 LimbC 100 false 1 100 LimbC A A    U 0 0 0 0 0 0 0   U 0 0 0 0   U 0 0 0 0   U
	CreateBone (LimbB.name + "TwistsEnd") NewBone (color 255 0 0) LimbC.transform.row4 ([1, 0, 0] * LimbC.transform) LimbC.transform.row3 0 U 0 0 0 0 0 0 0    U 0 0 0 0 0 0 0   U 0 0 0 0   U 0 0 0 0   LimbC
	freeze NewBone; hide NewBone
)
fn CreateHand ArmLink FingerLink Bip Biped_ctrl HNames FNames TwistsSuffix col1 col2 Spine ShoulderXrot ArmXrot ForearmXrot HandXrot FingersXrot =
(
	BShoulder = (biped.getNode Bip ArmLink link:1); BArm = (biped.getNode Bip ArmLink link:2); BForearm = (biped.getNode Bip ArmLink link:3); BHand = (biped.getNode Bip ArmLink link:4)
	CreateBone HNames[1] Spine col1 BShoulder.transform.row4 BArm.transform.row4 BShoulder.transform.row3 ShoulderXrot    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0   U
	Shoulder = NewBone
	CreateBone HNames[2] NewBone col2 BArm.transform.row4 BForearm.transform.row4 BArm.transform.row3 ArmXrot    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0   U
	Arm = NewBone
	CreateBone HNames[3] NewBone col2 BForearm.transform.row4 BHand.transform.row4 BForearm.transform.row3 ForearmXrot    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0   U
	Forearm = NewBone
	HandSize = if BHand.children[1] != undefined then (distance BHand BHand.children[1]) else 4
	CreateBone HNames[4] NewBone col1 BHand.transform.row4 ([HandSize, 0, 0] * BHand.transform) BHand.transform.row3 HandXrot    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0   U
	Hand = NewBone
	if Biped_ctrl.fingers > 0 then
	(
		Finger = 1; finger_index = 1
		for Finger = 1 to Biped_ctrl.fingers do
		(
			NewBone = Hand
			for index = 1 to Biped_ctrl.fingerLinks do
			(
				if (biped.getNode Bip FingerLink link:(finger_index))!=U then
				(
					global BipFinger = biped.getNode Bip FingerLink link:finger_index
					global FingerName = if Biped_ctrl.fingers == 1 then (if Biped_ctrl.fingerLinks == 1 then FNames[6] else (FNames[6] + index as string) ) else (if Biped_ctrl.fingerLinks == 1 then FNames[Finger] else (FNames[Finger] + index as string))
					CreateBone FingerName NewBone col1 BipFinger.transform.row4 BipFinger.children[1].transform.row4 BipFinger.transform.row3 FingersXrot    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0   U
				)
				finger_index += 1
			)
			CreateBone (FingerName + "End") NewBone (color 255 0 0) BipFinger.children[1].transform.row4 ([1, 0, 0] * BipFinger.children[1].transform) BipFinger.children[1].transform.row3 FingersXrot    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 0 0 0 0   U 0 0 0 0   U
			freeze NewBone; hide NewBone
		)
	)
	CreateUpperTwists Shoulder Arm Forearm HNames TwistsSuffix col1
	CreateLowerTwists Arm Forearm Hand HNames TwistsSuffix col1 1
)
fn CreateLeg LegLink ToeLink Bip Biped_ctrl LNames TNames TwistsSuffix col1 col2 Hips UplegXrot LegXrot LowLegXrot FootXrot ToesXrot =
(
	L1 = biped.getNode Bip LegLink link:1; L2 = biped.getNode Bip LegLink link:2; L3 = biped.getNode Bip LegLink link:3; F = biped.getNode Bip LegLink link:Biped_ctrl.legLinks
	CreateBone LNames[1] Hips col2 L1.transform.row4 L2.transform.row4 L1.transform.row3 UplegXrot    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0  U 100 1 100 true   U 0 0 0 0   U
	Upleg = NewBone
	CreateBone LNames[2] NewBone col2  L2.transform.row4 L3.transform.row4 L2.transform.row3 LegXrot    U 0 0 0 0 0 0 0  U 0 0 0 0 0 0 0  U 100 1 100 true   U 0 0 0 0   U
	Leg = NewBone
	if Biped_ctrl.legLinks == 4 then
	(
		CreateBone LNames[3] NewBone col2  L3.transform.row4 F.transform.row4 L3.transform.row3 LowLegXrot    U 0 0 0 0 0 0 0  U 0 0 0 0 0 0 0 U 100 1 100 true   U 0 0 0 0   U
		global LowLeg = NewBone
	)
	FootSize = (distance F F.children[1])/2
	CreateBone LNames[4] NewBone col1  F.transform.row4 ([FootSize, 0, 0] * F.transform) F.transform.row3 FootXrot    U 0 0 0 0 0 0 0  U 0 0 0 0 0 0 0  U 100 1 100 true   U 0 0 0 0   U
	Foot = NewBone
	Foot.frontfin = true; Foot.frontfinsize = FootSize; Foot.frontfinstarttaper = 96
	Toe = 1; toe_index = 1
	for Toe = 1 to Biped_ctrl.toes do (
		NewBone = Foot
		for index = 1 to Biped_ctrl.toeLinks do (
			if (biped.getNode Bip ToeLink link:toe_index)!=U then
			(
				global BipToe = biped.getNode Bip ToeLink link:toe_index
				global ToeName = if Biped_ctrl.toes == 1 then (if Biped_ctrl.toeLinks == 1 then TNames[6] else (TNames[6] + index as string) ) else (if Biped_ctrl.toeLinks == 1 then TNames[Toe] else (TNames[Toe] + index as string))
				CreateBone ToeName NewBone col1 BipToe.transform.row4 BipToe.children[1].transform.row4 BipToe.transform.row3 ToesXrot    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0   U
			)
			toe_index += 1
		)
		CreateBone (ToeName + "End") NewBone (color 255 0 0) BipToe.children[1].transform.row4 ([1, 0, 0] * BipToe.children[1].transform) BipToe.children[1].transform.row3 ToesXrot    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 0 0 0 0   U 0 0 0 0   U
		freeze NewBone; hide NewBone
	)
	CreateUpperTwists Hips Upleg Leg LNames TwistsSuffix col1
 	if Biped_ctrl.legLinks == 4 then ( CreateLowerTwists Upleg Leg LowLeg LNames TwistsSuffix col1 2; CreateLowerTwists Leg LowLeg Foot LNames TwistsSuffix col1 2) else CreateLowerTwists Upleg Leg Foot LNames TwistsSuffix col1 2
)
fn CreateCharacter =
(
	B = $
	Biped_ctrl = B.controller.rootNode.controller
	Bip_ShortThumb = (if (Biped_ctrl.shortThumb == true and Biped_ctrl.fingers >1) then true else false)
	TSuffix = #("TwistA","TwistB","TwistC","TwistD")
	SpineNm = #("Reference","Hips","Spine","Chest","Neck","Head")
	LHandNm = #("LeftShoulder","LeftArm","LeftForearm","LeftHand")
	RHandNm = #("RightShoulder","RightArm","RightForearm","RightHand")
	LFingNm = #("LeftHandThumb","LeftHandIndex","LeftHandMiddle","LeftHandRing","LeftHandPinky","LeftHandFingers")
	RFingNm = #("RightHandThumb","RightHandIndex","RightHandMiddle","RightHandRing","RightHandPinky","RightHandFingers")
	LLegNm = #("LeftUpLeg","LeftLeg","LeftLowLeg","LeftFoot")
	RLegNm = #("RightUpLeg","RightLeg","RightLowLeg","RightFoot")
	LToeNm = #("LeftFootPinky","LeftFootRing","LeftFootMiddle","LeftFootIndex","LeftFootBig","LeftToes")
	RToeNm = #("RightFootPinky","RightFootRing","RightFootMiddle","RightFootIndex","RightFootBig","RightToes")
	ca = color 245 141 0
	cb = color 0 0 0
	global U
	"reference bone"
		ReferenceBone = BoneSys.createBone [0,0,0] [1,0,0] [0,0,1]
		setBoneProps ReferenceBone U SpineNm[1] 1 1 1 false 0 0 0 false 0 0 0 false 0 0 0 #None true 0 cb
	"nodes"
		P = biped.getNode B #pelvis link:1
		S = biped.getNode B #spine link:1
		N = biped.getNode B #neck link:1
		H = biped.getNode B #head link:1
	"hips"		
		CreateBone (SpineNm[2]) ReferenceBone   ca P.transform.row4 S.transform.row4 P.transform.row3 0   U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0   U
		Hips = NewBone
	"spine"
		for i = 1 to Biped_ctrl.spineLinks do (
			SpineName = if Biped_ctrl.spineLinks == 1 then SpineNm[3] else (SpineNm[3] + i as string)
			Si = biped.getNode B #spine link:i
			if i == Biped_ctrl.spineLinks then Sj = N else Sj = biped.getNode B #spine link:(i+1)
			CreateBone SpineName NewBone   ca Si.transform.row4 Sj.transform.row4 Si.transform.row3 0   U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0   U
		)
		LastSpine = NewBone
	"neck"
		for i = 1 to Biped_ctrl.neckLinks do (
			NeckName = if Biped_ctrl.neckLinks == 1 then SpineNm[5] else (SpineNm[5] + i as string)
			Ni = biped.getNode B #neck link:i
			if i == Biped_ctrl.neckLinks then Nj = H else Nj = biped.getNode B #neck link:(i+1)
			CreateBone NeckName NewBone   ca Ni.transform.row4 Nj.transform.row4 Ni.transform.row3 0   U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0 U
		)
	"head"
		CreateBone (SpineNm[6]) NewBone   ca H.transform.row4 H.children[1].transform.row4 H.transform.row3 0   U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 100 1 100 true   U 0 0 0 0 U
		CreateBone (SpineNm[6] + "End") NewBone (color 255 0 0) H.children[1].transform.row4 ([1, 0, 0] * H.children[1].transform) H.children[1].transform.row4 0    U 0 0 0 0 0 0 0   U 0 0 0 0 0 0 0   U 0 0 0 0   U 0 0 0 0   U
		freeze NewBone; hide NewBone
	"hands"
	if Biped_ctrl.arms then
	(
		CreateHand #lArm #lfingers B Biped_ctrl LHandNm LFingNm TSuffix ca cb LastSpine 180 180 180 -90 -90
		CreateHand #rArm #rfingers B Biped_ctrl RHandNm RFingNm TSuffix ca cb LastSpine 180 180 180 90 90
	)
	"legs"
	CreateLeg #lleg #ltoes B Biped_ctrl LLegNm LToeNm TSuffix ca cb Hips 0 0 0 0 0
	CreateLeg #rleg #rtoes B Biped_ctrl RLegNm RToeNm TSuffix ca cb Hips 0 0 0 0 0
)
"MAIN"
setCommandPanelTaskMode #modify	
if classOf $ == Biped_Object then CreateCharacter()
"Done"
)