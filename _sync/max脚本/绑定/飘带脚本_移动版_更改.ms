
try(destroydialog SpringAnime)catch()

vposCA = attributes vipos
(
	parameters main 
	(
	 	vpos 		type:#point3Tab tabSizeVariable:true animatable:false
	)	

)

sprboneCA = attributes sprbTM
(
	parameters main
	(
		boneTM	type:#matrix3
	)	

)

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
	undo on(
		for b in selection do 
			if isProperty b "boneTM" do b.transform = b.boneTM*b.parent.transform

	)


	on setRp pressed do
	undo on(
		for b in selection do 
		(
			if not isProperty b "boneTM" then CustAttributes.add b sprBoneCA
			b.BoneTM = b.transform*(inverse b.parent.transform)
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
			--if superClassOf bone == shape do continue --or (bonetype != BoneGeometry and bonetype != Biped_Object) do continue--此句
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
createdialog SpringAnime