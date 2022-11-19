--需求:添加自定义属性"重置"按钮
try(destroydialog addCATool)catch()

fn select2ArrayStr =
(
	ArrayStr = "#("
	for o in selection as array do ArrayStr += ("\"" + o.name + "\", ")
	index = ArrayStr.count
	ArrayStr[index] = "";ArrayStr[index-1] = ")"
-- 	print ArrayStr
	return ArrayStr
)

ca1 = attributes ResetUI--声明自定义属性
(
	rollout ResetUIPanel "功能" width:160 height:64
	(
		button btn_ReSet "重置" width:96 height:32 toolTip:"变换到零"
		label lbl1 "" pos:[32,50] width:98 height:13
		
		on btn_ReSet pressed do --重置
		undo "reset" on(
			for i in selection as array do 
			if matchPattern i.name pattern:"*_Spring_*Spr*" then
			(i.pos.controller.Position.controller[2].controller.value = [0,0,0])
			else(
				i.pos.controller[i.pos.controller.active].value = [0,0,0]
				i.rotation.controller[i.rotation.controller.active].value = (quat 0 0 0 1)
				try(i.pos.controller[2][1].controller[1].controller[i.pos.controller[2][1].controller[1].controller.active].value = 0)catch()
				try(i.pos.controller[2][2].controller[1].controller[i.pos.controller[2][2].controller[1].controller.active].value = 0)catch()
				try(i.pos.controller[2][3].controller[1].controller[i.pos.controller[2][3].controller[1].controller.active].value = 0)catch()
				try(i.rotation.controller[2][1].controller[1].controller[i.rotation.controller[2][1].controller[1].controller.active].value = 0)catch()
				try(i.rotation.controller[2][2].controller[1].controller[i.rotation.controller[2][2].controller[1].controller.active].value = 0)catch()
				try(i.rotation.controller[2][3].controller[1].controller[i.rotation.controller[2][3].controller[1].controller.active].value = 0)catch()
			)
		)
	)
)

-- ca2 = attributes SwitchUI--声明切换
-- (
-- 	rollout Layerswitch "功能" width:160 height:64
-- 	(
-- 		local layername1 = #("adou_Hat1_Ctrl","adou_Hat1_Mesh")
-- 		local layername2 = #("adou_Hat2_Ctrl","adou_Hat2_Mesh")
-- 		local layername3 = #("adou_Hat_Ctrl")
-- 		local layername = (layername1+layername2+layername3)

-- 		fn switchLayer =
-- 		(

-- 			bool = (LayerManager.getLayerFromName layername1[1]).on
-- 			for n in layername1 do (LayerManager.getLayerFromName n).on = not bool
-- 			for n in layername2 do (LayerManager.getLayerFromName n).on = bool
-- 			for n in layername3 do (LayerManager.getLayerFromName n).on = true
-- 		)
-- 		fn hideLayer =
-- 		(
-- 			for n in layername do (LayerManager.getLayerFromName n).on = false
-- 		)
-- 		button btn_switch "切换" pos:[32,16] width:96 height:32 toolTip:"切换显示,右键全部隐藏"
-- 		label lbl1 "" pos:[32,50] width:98 height:13
-- 		on btn_switch pressed do switchLayer()
-- 		on btn_switch rightclick do hideLayer()
-- 	)
-- )

-- ca2 = attributes SwitchUI--声明切换层功能
-- (
-- 	rollout Layerswitch "功能" width:160 height:64
-- 	(
-- 		local layername1 = #("XRK_Arm_A")--主层
-- 		local layername2 = #("XRK_Arm_B")--副层
-- 		local layername3 = #()--共有层
-- 		local layername = (layername1+layername2+layername3)
-- 		
-- 		fn switchLayer =
-- 		(
-- 			bool = (LayerManager.getLayerFromName layername1[1]).on
-- 			for n in layername1 do (LayerManager.getLayerFromName n).on = not bool
-- 			for n in layername2 do (LayerManager.getLayerFromName n).on = bool
-- 			for n in layername3 do (LayerManager.getLayerFromName n).on = true
-- 		)
-- 		fn hideLayer =
-- 		(
-- 			for n in layername do (LayerManager.getLayerFromName n).on = false
-- 		)
-- 		button btn_switch "切换手臂" pos:[32,16] width:96 height:32 toolTip:"切换显示手臂"
-- 		label lbl1 "" pos:[32,50] width:98 height:13
-- 		on btn_switch pressed do switchLayer()
-- 		--on btn_switch rightclick do hideLayer()
-- 	)
-- )


-- /* 
ca2 = attributes SwitchUI--声明切换模型功能
(
	rollout Layerswitch "功能" width:160 height:67
	(
-- 		local OBJname1 = #("Yan13_Tail_Cloth","Yan13_Dress_Cloth")---主物体
-- 		local OBJname2 = #("Yan13_Dress_Mesh","Yan13_Tail_Mesh")--副物体
-- 		local OBJname1 = #("XRK_cuff_A_mesh.L+R","XRK_Arm_A_mesh.L+R","XRK_Rig_左臂A小指3Gizmo","XRK_Rig_左臂A小指2Gizmo","XRK_Rig_左臂A小指1Gizmo","XRK_Rig_左臂A中指3Gizmo","XRK_Rig_左臂A中指2Gizmo","XRK_Rig_左臂A中指1Gizmo","XRK_Rig_左臂A食指3Gizmo","XRK_Rig_左臂A食指2Gizmo","XRK_Rig_左臂A食指1Gizmo","XRK_Rig_左臂A拇指3Gizmo","XRK_Rig_左臂A拇指2Gizmo","XRK_Rig_左臂A拇指1Gizmo","XRK_Rig_右臂A拇指3Gizmo","XRK_Rig_右臂A拇指2Gizmo","XRK_Rig_右臂A拇指1Gizmo","XRK_Rig_右臂A食指3Gizmo","XRK_Rig_右臂A食指2Gizmo","XRK_Rig_右臂A食指1Gizmo","XRK_Rig_右臂A中指3Gizmo","XRK_Rig_右臂A中指2Gizmo","XRK_Rig_右臂A中指1Gizmo","XRK_Rig_右臂A小指3Gizmo","XRK_Rig_右臂A小指2Gizmo","XRK_Rig_右臂A小指1Gizmo","XRK_Rig_左臂A手掌Gizmo","XRK_Rig_右臂A手掌Gizmo","XRK_Rig_右臂A21Gizmo","XRK_Rig_左臂A21Gizmo","XRK_BarkerA_Bn.R005","XRK_BarkerA_Bn.R004","XRK_BarkerA_Bn.R002","XRK_BarkerA_Bn.R001","XRK_BarkerA_Bn.L005","XRK_BarkerA_Bn.L004","XRK_BarkerA_Bn.L002","XRK_BarkerA_Bn.L001")
-- 		local OBJname2 = #("XRK_Arm_B_mesh.L+R","XRK_Cuff_B_mesh.X","XRK_Rig_左臂B小指3Gizmo","XRK_Rig_左臂B小指2Gizmo","XRK_Rig_左臂B小指1Gizmo","XRK_Rig_左臂B中指3Gizmo","XRK_Rig_左臂B中指2Gizmo","XRK_Rig_左臂B中指1Gizmo","XRK_Rig_左臂B食指3Gizmo","XRK_Rig_左臂B食指2Gizmo","XRK_Rig_左臂B食指1Gizmo","XRK_Rig_左臂B拇指3Gizmo","XRK_Rig_左臂B拇指2Gizmo","XRK_Rig_左臂B拇指1Gizmo","XRK_Rig_右臂B拇指3Gizmo","XRK_Rig_右臂B拇指2Gizmo","XRK_Rig_右臂B拇指1Gizmo","XRK_Rig_右臂B食指3Gizmo","XRK_Rig_右臂B食指2Gizmo","XRK_Rig_右臂B食指1Gizmo","XRK_Rig_右臂B中指3Gizmo","XRK_Rig_右臂B中指2Gizmo","XRK_Rig_右臂B中指1Gizmo","XRK_Rig_右臂B小指3Gizmo","XRK_Rig_右臂B小指2Gizmo","XRK_Rig_右臂B小指1Gizmo","XRK_Rig_左臂B手掌Gizmo","XRK_Rig_左臂B21Gizmo","XRK_Rig_右臂B手掌Gizmo","XRK_Rig_右臂B21Gizmo","XRK_BarkerB6_Bn.R","XRK_BarkerB5_Bn.R","XRK_BarkerB4_Bn.R","XRK_BarkerB2_Bn.R","XRK_BarkerB1_Bn.R","XRK_BarkerB6_Bn.L","XRK_BarkerB5_Bn.L","XRK_BarkerB4_Bn.L","XRK_BarkerB2_Bn.L","XRK_BarkerB1_Bn.L")
-- 		local OBJname1 = #("XQing_Dress_Mesh","XQing_Ribbon_Mesh","XQing_PonyTail_Mesh")---主物体
-- 		local OBJname2 = #("XQing_Dress_Cloth","XQing_Hair_Cloth")--副物体
-- 		local OBJname1 = #("Dog_leg_F_L_Old01", "Dog_leg_F_L_Old02", "Dog_leg_F_L_Old03", "Dog_leg_F_L_Old04", "Dog_leg_F_L_Old05", "Dog_leg_F_L_Old06")
-- 		local OBJname2 = #("JQG_ArmPlate_Mesh.L", "JQG_Hand_Mesh.L")
-- 		local OBJname1 = #("SGua_Hat_Ctrl", "SGua_Hat_Prt", "SGua_Hat_Mesh")
-- 		local OBJname2 = #("SGua_Tail_Bn_001", "SGua_Tail_Mesh", "SGua_Tail_Bn_002", "SGua_Ribbon_Bn_001", "SGua_Ribbon_Ctrl", "SGua_Ribbon_Mesh")
-- 		local OBJname1 = #("MGCM_Ruga_Mesh")
-- 		local OBJname2 = #("MGCM_RugaProxy_Mesh")
-- 		local OBJname1 = #("HuaS_Paper2_Ctrl_001", "HuaS_Paper2_Ctrl_002", "HuaS_Paper2_Ctrl_005", "HuaS_Paper2_Ctrl_004", "HuaS_Paper2_Ctrl_009", "HuaS_Paper2_Ctrl_007", "HuaS_Paper2_Ctrl_006", "HuaS_Paper2_Ctrl_012", "HuaS_Paper2_Ctrl_003", "HuaS_Paper2_Ctrl_008", "HuaS_Paper2_Ctrl_010", "HuaS_Paper2_Ctrl_011", "HuaS_Card_Mesh_001")
-- 		local OBJname2 = #("HuaS_Paper_Ctrl_006", "HuaS_Paper_Ctrl_010", "HuaS_Paper_Ctrl_001", "HuaS_Paper_Ctrl_007", "HuaS_Paper_Ctrl_003", "HuaS_Paper_Ctrl_004", "HuaS_Paper_Ctrl_011", "HuaS_Paper_Ctrl_002", "HuaS_Paper_Ctrl_008", "HuaS_Paper_Ctrl_009", "HuaS_Card_Mesh_002", "HuaS_Paper_Ctrl_005", "HuaS_Paper_Root", "HuaS_Paper_Ctrl_012")
		local OBJname1 = #("HuaS_Coat_Mesh")
		local OBJname2 = #("HuaS_CoatAll_Mesh", "HuaS_CoatAll_CtrlC", "HuaS_CoatAll_CtrlA", "HuaS_CoatAll_CtrlB")
		fn switchOBJHidden =
		(
			if (getnodebyname(OBJname1[1])).ishidden then
				(for n in OBJname2 do hide (getnodebyname(n));for n in OBJname1 do unhide (getnodebyname(n)))
			else
				(for n in OBJname1 do hide (getnodebyname(n));for n in OBJname2 do unhide (getnodebyname(n)))
		)
		button btn_switch "切换外壳显示" pos:[32,16] width:96 height:32 toolTip:"切换显示"
		label lbl1 "" pos:[32,50] width:98 height:13
		on btn_switch pressed do
			switchOBJHidden()
	)
) 
-- */


ca3_1 = "attributes FreezeUI--声明自定义属性
(
	rollout FMBN \"功能\" width:160 height:67
	(
		fn freezeMeshByName bool=
		(
			namearray = "
			
ca3_2 = "
			if bool then for n in namearray do  freeze (getNodeByName n) else for n in namearray do  unfreeze (getNodeByName n) 
		)
		button btn_freeze \"冻结模型\" pos:[16,16] width:56 height:32 toolTip:\"切换显示\"
		button btn_unfreeze \"解冻模型\" pos:[88,16] width:56 height:32 toolTip:\"切换显示\"
		label lbl1 \"\" pos:[32,50] width:98 height:13
		on btn_freeze pressed  do
		(
			freezeMeshByName true
		)
		on btn_unfreeze pressed  do
		(
			freezeMeshByName false
		)
	)
)"


fn addboneTM = 
(
	local sprboneCA = attributes sprbTM --ca4
	(
		parameters main
		(
			boneTM	type:#matrix3
		)	
	)
	for b in selection do 
	(
	
		if not isProperty b "boneTM" then (CustAttributes.add b sprboneCA #unique BaseObject:false)
		if b.parent == undefined then b.boneTM = b.transform else b.boneTM = b.transform*(inverse b.parent.transform)
	)
)

	

ca4 = attributes springMagic
(
rollout SpringAnime "弹性演算" width:160 height:116
(
	spinner delaysp "硬度" pos:[16,48] width:64 height:16 range:[0.01,1,0.3] type:#float scale:0.05
	spinner loops "循环" pos:[48,88] width:50 height:16 range:[0,100,0] type:#integer
 
	spinner subs "子步" pos:[96,48] width:56 height:16 range:[0,10,0] type:#integer
	spinner upspring "X弹簧" pos:[56,88] width:70 height:16 range:[0.1,1,0.3] type:#float scale:0.05
 
	spinner bnum "骨骼数量" pos:[24,88] width:60 height:16 range:[0,1000,1] type:#integer

	button resetRp "重置" pos:[8,8] width:56 height:28 toolTip:"回到初始pose"
	button setRp "设置" pos:[96,8] width:56 height:28 toolTip:"设置初始pose"
 
	radiobuttons a1 "" pos:[13,80] width:136 height:16 labels:#("活动帧", "自定义") columns:2 

	button applybone "烘培到帧" pos:[8,72] width:144 height:32 toolTip:"计算选择的物体"

	
	on SpringAnime open do --打开窗口
	(
		upspring.visible = a1.visible = bnum.visible = loops.visible = false
	)
	on resetRp pressed do --重置pose
	undo on(
		for b in selection do 
-- 			if isProperty b "boneTM" do 
				b.transform = b.boneTM*b.parent.transform

	)
	on setRp pressed do --设置pose
	(
		for b in selection do 
		(
-- 			if not isProperty b "boneTM" then CustAttributes.add b sprBoneCA
			b.BoneTM = b.transform*(inverse b.parent.transform)
		)
	)
	on applybone pressed do --计算
	with undo on (
		for i in selection where classof i.baseobject == Biped_Object do for m in i.modifiers do m.enabled = false
		local bones=#()
		if selection.count == 0 do return root
		local framestart,framend
		if a1.state == 1 then (
			framestart = animationRange.start
			framend = animationRange.end
		) else (
			framestart = aframestart.value as time
			framend = aframend.value as time
		)

		local bone_TM = #()
		local preTimebone_TM = #()
		bonectrl_x = #()
		bonectrl_y = #()
		bonectrl_z = #()
		bipctrl = #()
		posctrller = #()
		scaletrller = #()
		delay = delaysp.value

		for bone in selection do (
			local bonechain = #()
			local bonetype = classof bone
			local num = 1
			slidertime = framestart
-- 			if superClassOf bone == shape do continue --or (bonetype != BoneGeometry and bonetype != Biped_Object) do continue
			if bone.parent == undefined do ( messageBox (((bone.name as string)+"must have parent!")) ; continue)

			local parnode = bone.parent
			while bone!=undefined do (
				bonechain[num] = bone
				childfind = false
				if bone.children.count == 0 or num>bnum.value then exit
				else (
					for c in bone.children do
						if  classof c == bonetype or classof c == Dummy then (bone = c;num += 1 ;childfind = true;exit)
						else continue
					if childfind == false do bone = undefined
				)
			)----end while
			
			append bones bonechain

			local pTM = parnode.transform
			local preTM = #()
			local bTM = #()

			for j in 1 to bonechain.count do (
			--	preTimebone_TM[j] = bonechain[j].transform
				append preTM bonechain[j].transform
				if not isProperty bonechain[j] "boneTM" then (
					CustAttributes.add bonechain[j] sprboneCA #unique BaseObject:false
					bonechain[j].boneTM = bonechain[j].transform*(inverse bonechain[j].parent.transform)
				)
				append bTM bonechain[j].boneTM
			)
			append preTimebone_TM preTM
			append bone_TM bTM
			
			-----get bone rotate controller and delete keys
			bipc = #()
			
			if bonetype == Biped_Object do (
				for j in 1 to bonechain.count do 	
					append bipc bonechain[j].controller
			 	append bipctrl bipc		
			)


		)----end for bone
		
		if bones.count == 0 do return root

	-----------------------start to calculate---------------

			subframe = 1.0/(subs.value+1)
			for L = 0 to loops.value do (
			
			for t = framestart to framend by subframe do (
				if keyboard.escPressed then exit
				tf = ceil (t as float/TicksPerFrame)
				slidertime = tf
			
			for i in 1 to bones.count do (
				currentPTM = at time (t as float/TicksPerFrame) bones[i][1].parent.transform
				
				for j in 1 to (bones[i].count-1) do (
				
					targetboneTM = bone_TM[i][j]*currentPTM
					currentboneTM = preTimebone_TM[i][j]
					currentboneTM.pos  = preTimebone_TM[i][j+1].pos

					----------Roll spring-------------
					ang1 = acos(dot (normalize preTimebone_TM[i][j].row1) (normalize targetboneTM[1]))
					newTM = copy preTimebone_TM[i][j]
					newTM1 = copy preTimebone_TM[i][j]
					tpos = targetboneTM.pos
					vt1 = normalize (cross preTimebone_TM[i][j].row1 targetboneTM[1])
						
					if abs ang1 >0.001 do rotate newTM1 (quat ang1 -vt1) 
				
					newTM.pos = tpos
					newTM1.pos = tpos

					angY1 = acos(dot (normalize newTM1[2]) (normalize targetboneTM[2]))	
					ssvt = cross (normalize newTM1[2]) (normalize targetboneTM[2])

					xaxisdelay = (upspring.value + ((bones[i].count-1.0-j)/(bones[i].count-1.0)*(1.0-upspring.value)) )
					angY1 = angY1 * xaxisdelay
					if dot ssvt targetboneTM[1] >0 do angY1 = -angY1
					if abs angY1 >0.001 do rotate newTM1 (quat angY1 targetboneTM[1]) 
					newTM1.pos = tpos
					targetboneTM = copy newTM1

					---------------------------------------				
					tvector = normalize targetboneTM[1]
					cvector = normalize (currentboneTM.pos - targetboneTM.pos)
					vt = normalize (cross cvector tvector)
					angel = acos(dot (normalize cvector) (normalize tvector))

					--if j < 5 do angel = subFrameCheck j bones bonetype bone_TM preTimebone_TM (t-1f) angel vt
					
					angel = angel*(1.0-delay)
					
					aacurrentPTM = copy targetboneTM
					transPTM = rotate targetboneTM (quat angel vt) 
					transPTM.pos = targetboneTM.pos = aacurrentPTM.pos
					
					animate on
					(
						if classof bones[i][j] == Biped_Object then 
							biped.setTransform bones[i][j] #rotation transPTM.rotation true
						else if classof bones[i][j] == CATBone then
							bones[i][j].transform = copy transPTM
						else bones[i][j].rotation.controller.value = transPTM.rotation *(inverse currentPTM.rotation)
						
						if L == loops.value then
							if classof bones[i][j] == Biped_Object and mod (t as float/TicksPerFrame) 1 == 0 do
								biped.setTransform bones[i][j] #rotation transPTM.rotation true

					)-----end animate on


					currentPTM = preTimebone_TM[i][j] = transPTM

					if j == (bones[i].count-1) do (
					preTimebone_TM[i][j+1].pos =  bone_TM[i][j+1].pos*transPTM
					--bonelength = length bone_TM[i][j+1].pos
					--preTimebone_TM[i][j+1].pos =  transPTM.pos + ((normalize transPTM[1])*bonelength)		
					)

				)-----end for j	
			)----end for bones
			)----end for t
			)----end for Loops
		for i in selection where classof i.baseobject == Biped_Object do for m in i.modifiers do m.enabled = True
		)
)
)

ca5 = attributes CreateCATLayer--声明自定义属性
(
	rollout CreateCATLayerPanel "CAT功能" width:160 height:67
	(
		button btn_Create "CAT_创建新层" pos:[32,16] width:96 height:32 toolTip:"变换到零"
		label lbl1 "" pos:[32,50] width:98 height:13
		fn CreateCATLayerAndLinkController =(
			--1创建层,动画模式
			local CATP = getNodeByName "XRK_Rig_"
			local index = CATP.AppendLayer "NewLayer" #absolute
			local CATL = CATP.layers.controller[index]
			CATP.CATMode = 1
			--2绑定控制器
			index+=1
			local set1 = #("XRK_Rig_左臂B11","XRK_Rig_左臂A11")
			local set2 = #("XRK_Rig_右臂B11","XRK_Rig_右臂A11")
			fn setRig sets index= ( --关联层控制器函数
				obj1 = getNodeByName sets[1]
				obj2 = getNodeByName sets[2]
				obj1.transform.controller[2][index].position.controller = obj2.transform.controller[2][index].position.controller
				
				obj1.transform.controller[2][index].rotation.controller = Euler_XYZ ()
				obj2.transform.controller[2][index].rotation.controller = Euler_XYZ ()
				obj1.transform.controller[2][index].rotation.controller = rotation_list ()
				obj2.transform.controller[2][index].rotation.controller = rotation_list ()
				obj2.transform.controller[2][index].rotation.controller.Available.controller = obj1.transform.controller[2][index].rotation.controller.Available.controller = Euler_XYZ ()
				obj2.transform.controller[2][index].rotation.controller.Active = obj1.transform.controller[2][index].rotation.controller.Active = 2
			)
			--执行
			setRig set1 index
			setRig set2 index
			--跳到运动面板
			max motion mode
		)
		on btn_Create pressed do
		(
			CreateCATLayerAndLinkController()
		)
	)
)


ca6 = attributes FanSlider--声明自定义属性
(
	rollout FanSliderPanel "功能" width:160 height:67
	(
		label lbl1 "" pos:[32,50] width:98 height:13
		slider sld_Ctrl "叶面抖动" pos:[8,16] width:144 height:44 range:[-100,100,0] controller:(Bezier_Float())
		button btn_ReSet "重置" pos:[96,8] width:48 height:24
			
		on FanSliderPanel open  do
		(
			sld_Ctrl.controller = $XQing_Fan_Mesh001.morpher[1].controller
		)
		on btn_ReSet pressed do
		(
			sld_Ctrl.value = 0.0
		)
	)
)

rollout addCATool "添加按钮工具" width:240 height:288
(
	button btn_add "添加重置按钮" pos:[16,24] width:96 height:32
	button btn_add2 "添加一键切换" pos:[16,64] width:96 height:32
	button btn_add3 "添加一键冻结" pos:[16,160] width:96 height:32
	button btn_add4 "添加飘带按钮" pos:[16,104] width:96 height:32
	edittext edt_Array "" pos:[16,144] width:64 height:16
	button btn_GetArray "Get" pos:[88,144] width:22 height:16
	button btn_add5 "添加XRK加层" pos:[16,200] width:96 height:32
	button btn_add6 "添加滑条+重置" pos:[16,240] width:96 height:32
	button btn_check "检查重置按钮" pos:[128,24] width:96 height:32 toolTip:"选择中可见物体中,未添加重置按钮的物体"
	GroupBox grp1 "添加" pos:[8,8] width:112 height:272
	GroupBox grp2 "检查" pos:[120,8] width:112 height:272
	button btn10 "按修改器选择" pos:[128,64] width:96 height:32 toolTip:"选中第一个修改器与当前物体第一个修改器相同的物体."
	button btn11 "复制修改器" pos:[128,104] width:64 height:32 toolTip:"复制选中的第一个物体的第一个修改器."
	button btn12 "粘贴" pos:[192,104] width:32 height:32 toolTip:"粘贴修改器."
	
	local copyModf
	
	button btn15 "设置不可渲染" pos:[128,240] width:96 height:32 toolTip:"设置选中物体的不可渲染,以及取消之下的所有对勾."
	on btn_add pressed do --重置按钮
	(
		mdf = (EmptyModifier ());custAttributes.add mdf ca1 #unique BaseObject:false
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier do addmodifier o mdf 
	)
	on btn_add2 pressed do --一键切换
	(
		mdf = (EmptyModifier ());custAttributes.add mdf ca2 #unique BaseObject:false
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier then addmodifier o mdf else custAttributes.add o.modifiers[1] ca2 #unique BaseObject:false
	)
	on btn_add3 pressed do --一键冻结
	(
		ca3 = (execute (ca3_1 + edt_Array.text + ca3_2))
		mdf = (EmptyModifier ());custAttributes.add mdf ca3 #unique BaseObject:false
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier then addmodifier o mdf else custAttributes.add o.modifiers[1] ca3 #unique BaseObject:false
	)
	on btn_add4 pressed do --飘带按钮
	(--注意:实例化的对象,自定义参数也会实例化,最终导致计算出错.
		mdf = (EmptyModifier ());custAttributes.add mdf ca4 #unique BaseObject:false
		for o in selection as array do if instancemgr.CanMakeObjectsUnique o do InstanceMgr.MakeObjectsUnique o #individual
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier then addmodifier o mdf else custAttributes.add o.modifiers[1] ca4 #unique BaseObject:false
		addboneTM()
	)
	on btn_GetArray pressed do --获取数组文本
		edt_Array.text = select2ArrayStr()
	on btn_add5 pressed do --向日葵CAT层
	(
		mdf = (EmptyModifier ());custAttributes.add mdf ca5 #unique BaseObject:false
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier then addmodifier o mdf else custAttributes.add o.modifiers[1] ca5 #unique BaseObject:false
	)
	on btn_add6 pressed do
	(
		mdf = (EmptyModifier ());custAttributes.add mdf ca6 #unique BaseObject:false
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier then addmodifier o mdf else custAttributes.add o.modifiers[1] ca6 #unique BaseObject:false
	)
	on btn_check pressed do
	(
		objs = for o in objects where try(not o.isHidden and classof o.pos.controller == Position_List and classof o.modifiers[1] != EmptyModifier)catch(false) collect o
		if objs.count >= 1 then select objs else messagebox " 可见物体中位置列表控制器的物体,都加了承载器.\t"
	)
	on btn10 pressed do
		(modf = selection[1].modifiers[1];select(for o in objects where (for m in o.modifiers where m == modf do exit with true) == true collect o))
	on btn11 pressed do
		copyModf = selection[1].modifiers[1]
	on btn12 pressed do
		if copyModf != undefined do for i in selection as array where i.modifiers[1] != copymodf do addmodifier i copyModf
	on btn15 pressed do
	(
		for s in selection do s.renderable = s.castShadows = s.receiveshadows = s.ApplyAtmospherics = s.inheritVisibility = s.primaryVisibility = s.secondaryVisibility = false
	)
)

createdialog addCATool