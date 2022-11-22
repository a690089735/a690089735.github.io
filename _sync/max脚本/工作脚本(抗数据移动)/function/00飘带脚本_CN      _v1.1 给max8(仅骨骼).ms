--------------------------Ver.  1.1     Author : Si-Chung Yuan 2017.9 --------------------------------------------------------------

--兼容helper和shape

try(DestroyDialog springMagic_rol)catch()
rollout springMagic_rol "Spring Magic V1.1" width:230 height:249
(
	local framestart, frameEnd
	local simbones = #(), bone_TM = #(), preTimebone_TM = #(), prePos = #(), bcnt = #()
-- 	local vposCA = attributes vipos
-- 	(
-- 		parameters main 
-- 		(
-- 			vpos type:#point3Tab tabSizeVariable:true animatable:false
-- 		)	
-- 	)
	local sprboneCA = attributes sprbTM
	(
		parameters main
		(
			boneTM type:#matrix3
		)	
	)
	
	spinner 'delaysp' "弹性" pos:[13,7] width:50 height:16 range:[0.01,1,0.3] type:#float scale:0.01 align:#left
	spinner 'scaleMotion' "运动倍增" pos:[124,7] width:53 height:16 range:[0,10,1] type:#float scale:0.01 align:#left
 
	spinner 'subs' "子步" pos:[13,32] width:50 height:16 range:[1,30,1] type:#integer align:#left
	spinner 'upspring' "扭曲跟随" pos:[128,32] width:49 height:16 range:[0.1,1,0.3] type:#float scale:0.01 align:#left
 
	spinner 'bnum' "骨骼数量" pos:[13,57] width:42 height:16 range:[1,1000,1] type:#integer align:#left
	checkbox 'loops' "循环" pos:[172,57] width:50 height:20 type:#integer range:[0,100,0] align:#left
	

	GroupBox 'grp1' "基本设定" pos:[4,82] width:222 height:45 align:#left
	button 'pasteRp' "粘贴" pos:[13,101] width:50 height:20 toolTip:"Select first bone" align:#left
	button 'setRp' "记录" pos:[68,101] width:50 height:20 toolTip:"Select first bone" align:#left
 
	button 'Stretch' "拉直" pos:[123,101] width:50 height:20 align:#left
	GroupBox 'grp2' "帧范围" pos:[4,132] width:222 height:45 align:#left
	radiobuttons 'a1' "" pos:[8,151] width:121 height:16 labels:#("活动", "自定义") columns:2 align:#left
	spinner 'aframeStart' "" pos:[123,151] width:40 height:16 range:[-10000,100000,1] type:#integer align:#left
 
	spinner 'aframeEnd' "到" pos:[168,151] width:41 height:16 range:[0,100000,10] type:#integer align:#left
	GroupBox 'grp3' "应用" pos:[4,182] width:222 height:45 align:#left
	button 'applybone' "计算" pos:[13,201] width:60 height:20 toolTip:"Select first bone" align:#left
 
	progressBar 'doit_prog' "" pos:[103,206] width:120 height:15 color:(color 255 0 0) align:#left
	label 'lab_aut' "作者:  Si-Chung Yuan" pos:[13,232] width:102 height:13 align:#left
	
	button 'btn6' "T" pos:[179,101] width:14 height:20 toolTip:"set to TCB" align:#left
	button 'btn7' "E" pos:[194,101] width:14 height:20 toolTip:"set to euler" align:#left
	button 'btn_DeleteAtt' "D" pos:[209,101] width:14 height:20 toolTip:"删除boneTM" align:#left
-- 	button 'btn_loop' "L" pos:[209,101] width:14 height:20 toolTip:"强制循环" align:#left
	
	fn setR2 type:#tcb =
	(
		local state = getCommandPanelTaskMode()
		setCommandPanelTaskMode #create
		case type of --这样虽然代码比较多,但是用到的判断比较少,不确定在指定前创建控制器可以稳定保留原有的帧.
		(
			#tcb : (
				for i in getCurrentSelection() do
				(
					if classof i[3].controller == prs then
					(
						local ctrl = i[3][2].controller
						if classof ctrl == rotation_list then
						(
							i[3][2].controller[ctrl.active].controller = tcb_rotation()
						)else
						(
							i[3][2].controller = tcb_rotation()
						)
					)else messagebox (i.name + " 未找到支持的旋转控制器.")
				)
			)
			#euler : (
				for i in getCurrentSelection() do
				(
					if classof i[3].controller == prs then
					(
						local ctrl = i[3][2].controller
						if classof ctrl == rotation_list then
						(
							i[3][2].controller[ctrl.active].controller = Euler_XYZ()
						)else
						(
							i[3][2].controller = Euler_XYZ()
						)
					)else messagebox (i.name + " 未找到支持的旋转控制器.")
				)
			)
			
		)
		setCommandPanelTaskMode state
	)
	
	fn setStartEndFrame = (
		if a1.state == 1 then (
			framestart = animationRange.start-1f
			frameEnd = animationRange.end-1f
		) else (
			framestart = aframeStart.value-1f as time
			frameEnd = aframeEnd.value-1f as time
		)
	)

	fn getBoneChain bone = (
		
		local bonechain = #()
		local bonetype = classof bone
		local num = 1

		if bone.parent == undefined do ( messageBox (((bone.name as string)+"must have parent!")) ; continue)

		local parnode = bone.parent
		while bone!=undefined do (
			bonechain[num] = bone
			childfind = false
			if bone.children.count == 0 or num>bnum.value then exit
			else (
				for c in bone.children do
					if  classof c == bonetype or superclassof c == Helper or superclassof c == Shape then (bone = c;num += 1 ;childfind = true;exit)
					else continue
				if childfind == false do bone = undefined
			)
		)----end while
		--format "bonechain = %\n" bonechain
		append simBones bonechain

		local pTM = parnode.transform
		local preTM = #()
		local bTM = #()

		for j in 1 to bonechain.count do (
			if classof bonechain[j] == Dummy and classof bonechain[j].controller == BipSlave_Control then(
				for i = 1 to (custAttributes.count bonechain[j]) do (
					a = CustAttributes.get bonechain[j] i
					if isProperty a "boneTM" do (
						CustAttributes.delete bonechain[j] i
-- 						isDelete  = true
					)
				)
			)else
				if not isProperty bonechain[j] "boneTM" then 
				(
					CustAttributes.add bonechain[j] sprboneCA
					bonechain[j].boneTM = bonechain[j].transform * inverse bonechain[j].parent.transform
				)
			
			if isProperty bonechain[j] "boneTM" then
				append bTM bonechain[j].boneTM
			else
				append bTM (bonechain[j].transform * inverse bonechain[j].parent.transform)
			
			append preTM bonechain[j].transform
			
		)	
		if bonechain.count > 1 then append prePos bonechain[2].transform.pos
		else append prePos (bonechain[1].transform.pos + bonechain[1].transform.row1 * bonechain[1].length)
		
		-------------- 	Add End  -----------------------------------------------------------------------------------------
		if bnum.value >= bonechain.count do (
			if bonechain.count > 1 then (
				ltm = copy bTM[bTM.count]
				append bTM ltm
			)else (
				ltm = matrix3 1
				bbox = nodeGetBoundingBox bonechain[1] bonechain[1].transform
				ltm.pos = [bbox[2].x, 0 ,0]
				append bTM ltm
			)
			tm = ltm * bonechain[preTM.count].transform
			append preTM tm
		)
		
		if classof bonechain[bonechain.count] == Dummy and \
			classof bonechain[bonechain.count].controller == BipSlave_Control do
			bonechain.count = bonechain.count - 1
		if bonechain.count > bnum.value do bonechain.count = bnum.value

		append bcnt bTM.count
		----------------------------------------------------------------------------------------------------------
		
		append preTimebone_TM preTM
		append bone_TM bTM
-- 	format "bTM.count=% preTM.count=% bonechain.count=%\n" bTM.count preTM.count bonechain.count	--不懂这里输出这个干嘛,影响性能啊.
	)
	
	on springMagic_rol open do
	(
		aframestart.value = animationRange.start
		aframeEnd.value = animationRange.end
	)
	on pasteRp pressed do
	(
			undo "reset Spring Pose" on(

				--	if selection.count == 0 do return root

					for b in selection do ( --原来是for bone
						
					if isProperty b "boneTM" do
						case of
						(
							(classof b == Biped_Object) : biped.setTransform b #rotation (b.boneTM*b.parent.transform).rotation true
							(classof b.controller == BipSlave_Control) : b.rotation.controller.value = b.boneTM.rotation
							default : b.transform = b.boneTM * b.parent.transform
						)

	-- 						local bonetype = classof bone
	-- 						if superClassOf bone == shape do continue
	-- 						--if bonetype != Biped_Object do return root
	-- 						if bone.parent == undefined do return root
	-- 						local bones=#()
	-- 						local num = 1
	-- 						while bone!=undefined do (
	-- 							bones[num] = bone
	-- 							childfind = false
	-- 							if bone.children.count == 0 then exit
	-- 							else (
	-- 								for c in bone.children do
	-- 									if  classof c == bonetype or classof c == Dummy then (bone = c;num += 1 ;childfind = true;exit)
	-- 									else continue
	-- 								if childfind == false do bone = undefined
	-- 							)
	-- 						)----end while
	-- 						
	-- 						for b in bones do 
	-- 							if isProperty b "boneTM" do (
	-- 			-- 					animate on
	-- 			-- 					(
	-- 									if classof b == CATBone then (

	-- 										b.transform = b.boneTM * b.parent.transform

	-- 									) else if classof b == Biped_Object then biped.setTransform b #rotation (b.boneTM*b.parent.transform).rotation true
	-- 									else if classof b.controller != BipSlave_Control
	-- 										do b.rotation.controller.value = b.boneTM.rotation
	-- 			-- 					)
	-- 							)
					)----end for bone
				)
		)
	on setRp pressed do
	(
		
		for b in selection do ( --原来是for obj
			
			if not isProperty b "boneTM" do CustAttributes.add b sprboneCA
			b.boneTM = b.transform*(inverse b.parent.transform)

	-- 			local objtype = classof obj
	-- 			if superClassOf obj != GeometryClass do continue
	-- 			if obj.parent == undefined do return root
	-- 			local bones=#()
	-- 			append bones obj
	-- 			
	-- 			while obj != undefined do (
	-- 				if keyboard.escPressed then exit
	-- 				isfind = false
	-- 				for c in obj.children do 
	-- 					if  classof c == objtype or classof c == Dummy then (
	-- 						append bones c
	-- 						obj = c
	-- 						isfind = true
	-- 						exit
	-- 					)else continue
	-- 				if not isfind do 
	-- 					obj = undefined
	-- 			)

	-- 			for b in bones do
	-- 				if classof b == objtype do (
	-- 					if not isProperty b "boneTM" do 
	-- 						CustAttributes.add b sprboneCA
	-- 				
	-- 					b.boneTM = b.transform*(inverse b.parent.transform)
	-- 				)
		)
		
	)
	on Stretch pressed do
	(
			with undo on (
					
					for bone in selection do (
						if bone.children.count == 0 do return root
						bone = bone.children[1]
						bonetype = classof bone
	-- 						if superClassOf bone == shape do continue
						--if bonetype != BoneGeometry and bonetype != Biped_Object do return root
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
						for b in bones do (
							if bonetype == Biped_Object then 
								biped.setTransform b #rotation b.parent.transform.rotation true
							else (
								c = copy b.parent.transform
								c.pos = b.transform.position
								b.transform = c
							)
						)
					)---end for bone
				)
		)
	on applybone pressed do
	with undo on (
			
		simbones=#()

		setStartEndFrame()

		-------------- Clear  array
		simBones = #()
		bone_TM = #()
		preTimebone_TM = #()
		prePos = #()
		bcnt = #()
		
		delay = delaysp.value

		for object in selection do 
			if superClassOf object == GeometryClass or superClassOf object == Shape or superClassOf object == helper do 
				at time frameStart getBoneChain object
		
		
	-----------------------Start  to  calculate---------------
		loopsv = if loops.checked then 2 else 1 
		subframe = 1f/subs.value
		
		pv = 100.0/ loopsv / (frameEnd - framestart + 1)
		doit_prog.value = 0.0
		totalVal = 0
		
		for L = 1 to loopsv do (
			
			for t = framestart to frameEnd do (
				if keyboard.escPressed then exit
				--slidertime = tf			------Play
				currtTime = t

				for sf in 1 to subs.value do (
					currtTime += subframe

					for i in 1 to simbones.count do (
						currentPTM = at time currtTime simbones[i][1].parent.transform
						
						for j in 1 to simbones[i].count do (
							
							targetboneTM = bone_TM[i][j] * currentPTM
							currentPos  = if j==1 then prePos[i] else preTimebone_TM[i][j+1].pos
							tpos = targetboneTM.pos
								
							----------Twist X -------------
							angX = acos(dot (normalize preTimebone_TM[i][j].row1) (normalize targetboneTM.row1))
							newTM1 = copy preTimebone_TM[i][j]
							
							vt1 = normalize (cross preTimebone_TM[i][j].row1 targetboneTM.row1)
								
							if angX >0.001 do rotate newTM1 (quat angX -vt1) 
						
							newTM1.pos = tpos

							angY1 = acos(dot (normalize newTM1[2]) (normalize targetboneTM.row2))	
							ssvt = cross (normalize newTM1[2]) (normalize targetboneTM.row2)

							xaxisdelay = (upspring.value + ((simbones[i].count-j)/(simbones[i].count)*(1.0-upspring.value)) )
							angY1 = angY1 * xaxisdelay
							if dot ssvt targetboneTM.row1 >0 do angY1 = -angY1
							if abs angY1 >0.001 do rotate newTM1 (quat angY1 targetboneTM.row1) 
							newTM1.pos = tpos
							targetboneTM = copy newTM1
							-----------------------------------------------------------------------------------------------------------------------------------------	
							
							tvector = normalize targetboneTM.row1
							cvector = normalize (currentPos - tpos)
							vt = normalize (cross cvector tvector)
							angel = acos(dot (normalize cvector) (normalize tvector))
							
							angel *= (1.0-delay)
							sangel = angel 
							if j == 1 do angel *= scaleMotion.value
							ttm = copy targetboneTM
							
							rotate targetboneTM (quat angel vt)
							if j == 1 do rotate ttm (quat sangel vt)
							targetboneTM.pos = ttm.pos = tpos

							if L == loopsv and sf == subs.value do (

								animate on at time (t + 1f)
								(
									if classof simbones[i][j].controller == BipSlave_Control and classof simbones[i][j] != Dummy then
										biped.setTransform simbones[i][j] #rotation targetboneTM.rotation true
									else if classof simbones[i][j] == CATBone then
										simbones[i][j].transform = copy targetboneTM
									else 
										simbones[i][j].rotation.controller.value = targetboneTM.rotation * inverse currentPTM.rotation
								)
							)

							currentPTM = copy targetboneTM
							preTimebone_TM[i][j] = copy targetboneTM
							
							if j == 1 do 
								prePos[i] = bone_TM[i][j+1].pos * ttm


							preTimebone_TM[i][j+1].pos = bone_TM[i][j+1].pos * targetboneTM	
							

						)-----end for j	
					)----end for bones
				)
				totalVal += pv
				if totalVal >= 20.0 do (
					doit_prog.value += totalVal
					totalVal = 0.0
				)
			)----end for t
		)----end for Loops
		doit_prog.value = 100.0
		)
	on btn6 pressed do
		setR2 type:#tcb --设置为TCB
	on btn7 pressed do
		setR2 type:#euler--设置为euler
	on btn_DeleteAtt pressed do
	(
		for s in selection do
		(
			for i = custAttributes.count s to 1 where try((CustAttributes.get s i).name == "sprbTM")catch(print s.name;false) do CustAttributes.delete s i
		)
	)
	on btn_DeleteAtt rightClick do
	(
		for s in selection do print(s.name+".boneTM:"+ (if isProperty s #boneTM then s.boneTM as string else "None"))
	)
)
createDialog springMagic_rol