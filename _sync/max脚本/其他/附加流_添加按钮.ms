--需求:添加自定义属性"重置"按钮
try(destroydialog addCATool)catch()
ca1 = attributes ResetUI--声明自定义属性
(
	rollout ResetUIPanel "功能" width:160 height:64
	(
		button btn_ReSet "重置" pos:[32,16] width:96 height:32 toolTip:"变换到零"
		label lbl1 "" pos:[32,50] width:98 height:13
		
		on btn_ReSet pressed do
	(
			for i in selection as array do 
			if matchPattern i.name pattern:"*_Spring_*Spr*" then
			(i.pos.controller.Position.controller[2].controller.value = [0,0,0])
			else(
			i.pos.controller[i.pos.controller.active].value = [0,0,0]
			i.rotation.controller[i.rotation.controller.active].value = (quat 0 0 0 1)
			)
		)
	)
)

ca2 = attributes ResetUI--声明自定义属性
(
	rollout Layerswitch "功能" width:160 height:64
	(
		fn switchLayer =
		(
			local layername1 = #("adou_Hat1_Ctrl","adou_Hat1_Mesh")
			local layername2 = #("adou_Hat2_Ctrl","adou_Hat2_Mesh")
			local layername3 = #("adou_Hat_Ctrl")
			bool = (LayerManager.getLayerFromName layername1[1]).on
			for n in layername1 do (LayerManager.getLayerFromName n).on = not bool
			for n in layername2 do (LayerManager.getLayerFromName n).on = bool
			for n in layername3 do (LayerManager.getLayerFromName n).on = true
		)
		fn hideLayer =
		(
			local layername = #("adou_Hat1_Ctrl","adou_Hat1_Mesh","adou_Hat2_Ctrl","adou_Hat2_Mesh","adou_Hat_Ctrl")
			for n in layername do (LayerManager.getLayerFromName n).on = false
		)
		button btn_switch "切换" pos:[32,16] width:96 height:32 toolTip:"切换显示,右键全部隐藏"
		label lbl1 "" pos:[32,50] width:98 height:13
		on btn_switch pressed do switchLayer()
		on btn_switch rightclick do hideLayer()
	)
)


ca3 = attributes FreezeUI--声明自定义属性
(
	rollout FMBN "功能" width:160 height:67
	(
		fn freezeMeshByName bool=
		(
			namearray = #("adou_body_RenderMesh",
			"adou_caomaohair_Hmesh",
			"adou_caomaoshengzi_Hmesh",
			"adou_caomao_Hmesh",
			"adou_caomao_LowMesh",
			"adou_caomaohair_Lowmesh",
			"adou_brow_Hmesh",
			"adou_brow_LowMesh",
			"adou_teeth_Dw_mesh",
			"adou_tongue_mesh",
			"adou_teeth_Up_mesh",
			"adou_eyeball_L_O_mesh",
			"adou_eyeball_L_I_mesh",
			"adou_eyeball_R_O_mesh",
			"adou_eyeball_R_I_mesh",
			"adou_bengdai_Hmesh",
			"adou_trousers_Hmesh",
			"adou_belt_Hmesh",
			"adou_bottom_L_Hmesh",
			"adou_shoes_L_Hmesh",
			"adou_shoe_R_Hmesh",
			"adou_bottom_R_Hmesh",
			"adou_sock_Hmesh",
			"adou_belt_LowMesh",
			"adou_trousers_Lowmesh",
			"adou_cloth_Hmesh",
			"adou_cloth_Lowmesh",
			"adou_hat2_rope_HMesh",
			"adou_hat2_ropeRib_HMesh",
			"adou_hat2_ropeRib_Lowmesh",
			"adou_douli_Hmesh",
			"adou_douli_LowMesh",
			"adou_rope_LowMesh",
			"adou_nail_mesh")
			
			if bool then for n in namearray do  freeze (getNodeByName n) else for n in namearray do  unfreeze (getNodeByName n) 
		)
		button btn_freeze "冻结模型" pos:[16,16] width:56 height:32 toolTip:"切换显示,右键全部隐藏"
		button btn_unfreeze "解冻模型" pos:[88,16] width:56 height:32 toolTip:"切换显示,右键全部隐藏"
		label lbl1 "" pos:[32,50] width:98 height:13
		on btn_freeze pressed  do
		(
			freezeMeshByName true
		)
		on btn_unfreeze pressed  do
		(
			freezeMeshByName false
		)
	)
)


fn addboneTM = (
	sprboneCA = attributes sprbTM --ca4
	(
		parameters main
		(
			boneTM	type:#matrix3
		)	

	)

	(
		
		for bone in selection do (

			local bonetype = classof bone
			if superClassOf bone == shape do continue
			if bone.parent == undefined do return root
			local bones=#()
			local num = 1
			while bone.children.count > 0 do 
			(
				
				for c in bone.children do 
					if  classof c == bonetype or classof c == Dummy then 
					(
						if num == 1 then append bones bone
						append bones c
						bone = c
						num +=1
						exit
					)	else continue
			)

			for b in bones do 
			(
				if not isProperty b "boneTM" then CustAttributes.add b sprboneCA
				b.boneTM = b.transform*(inverse b.parent.transform)
			)
			
		)
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

	button resetRp "重置" pos:[8,8] width:56 height:28 toolTip:"Select first bone"
	button setRp "设置" pos:[96,8] width:56 height:28 toolTip:"Select first bone"
 
	radiobuttons a1 "" pos:[13,80] width:136 height:16 labels:#("活动帧", "自定义") columns:2 

	button applybone "烘培到帧" pos:[8,72] width:144 height:32 toolTip:"Select first bone"

	
	on SpringAnime open do
	(
		upspring.visible = a1.visible = bnum.visible = loops.visible = false
	)
	on resetRp pressed do
	(
		for bone in selection do (
			local bonetype = classof bone
			if superClassOf bone == shape do continue
			if bone.parent == undefined do return root
			local bones=#()
			local num = 1
			while bone!=undefined do (
				bones[num] = bone
				childfind = false
				if bone.children.count == 0 then exit
				else (
					for c in bone.children do
						if  classof c == bonetype or classof c == Dummy then (bone = c;num += 1 ;childfind = true;exit)
						else continue
					if childfind == false do bone = undefined
				)
			)----end while
			
			for b in bones do 
				if isProperty b "boneTM" do (
						if classof b == CATBone then (
							--posctrller = copy b.position.controller
							--scaletrller = copy b.scale.controller
							b.transform = b.boneTM*b.parent.transform
							--b.position.controller = posctrller
							--b.scale.controller = scaletrller
						) else if classof b == Biped_Object then biped.setTransform b #rotation (b.boneTM*b.parent.transform).rotation true
						else b.rotation.controller.value = b.boneTM.rotation
				)
		)----end for bone
		)
	on setRp pressed do
	(
		
		for bone in selection do (

			local bonetype = classof bone
			if superClassOf bone == shape do continue
			if bone.parent == undefined do return root
			local bones=#()
			local num = 1
			while bone.children.count > 0 do 
			(
				
				for c in bone.children do 
					if  classof c == bonetype or classof c == Dummy then 
					(
						if num == 1 then append bones bone
						append bones c
						bone = c
						num +=1
						exit
					)	else continue
			)

			for b in bones do 
			(
-- 				if not isProperty b "boneTM" then CustAttributes.add b sprboneCA
				b.boneTM = b.transform*(inverse b.parent.transform)
			)
			
		)
	)
	on applybone pressed do
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
			if superClassOf bone == shape do continue --or (bonetype != BoneGeometry and bonetype != Biped_Object) do continue
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
					CustAttributes.add bonechain[j] sprboneCA
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

rollout addCATool "添加按钮工具" width:128 height:168
(
	button btn_add "添加重置按钮" pos:[16,8] width:96 height:32
	button btn_add2 "添加一键切换" pos:[16,48] width:96 height:32
	button btn_add3 "添加一键冻结" pos:[16,88] width:96 height:32
	button btn_add4 "添加飘带按钮" pos:[16,128] width:96 height:32
	on btn_add pressed do
	(
		mdf = (EmptyModifier ());custAttributes.add mdf ca1
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier do addmodifier o mdf 
	)
	on btn_add2 pressed do
	(
		mdf = (EmptyModifier ());custAttributes.add mdf ca2
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier then addmodifier o mdf else custAttributes.add o.modifiers[1] ca2
	)
	on btn_add3 pressed do
	(
		mdf = (EmptyModifier ());custAttributes.add mdf ca3
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier then addmodifier o mdf else custAttributes.add o.modifiers[1] ca3
	)
	on btn_add4 pressed do
	(
		mdf = (EmptyModifier ());custAttributes.add mdf ca4
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier then addmodifier o mdf else custAttributes.add o.modifiers[1] ca4
		addboneTM()
	)
)

createdialog addCATool pos:[60,350]