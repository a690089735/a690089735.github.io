try (destroyDialog PoseToolsRO) catch()

--拷贝变换--
PoseToolsRO
setsel
copyPaste
pasteOptions
bufferTM = #()
buttonW = 150
buttonH = 30
sel1 = #()
sel2 = #()
(
fn mirrorMatrixFn \
axis:"x" 				/*(Axis to mirror over)*/
flip:"x" 				/*(Axis to flip)*/
tm:(matrix3 1) 			/*(Matrix to mirror)*/
pivotTm:(matrix3 1) 	/*(Matrix to mirror around)*/
=						/*By Mike Biddlecombe and Paul Neale.  I'm just ripping it off!*/
(
	fn FetchReflection a =
	(
		case a of
		(
			"x": [-1,1,1]  -- reflect in YZ plane
			"y": [1,-1,1]  --         in ZX plane
			"z": [1,1,-1]  --         in XY plane
			"xy": [-1,-1,1]
			"yz": [1,-1,-1]
			"xz": [-1,1,-1]
			"xyz": [-1,-1,-1]
		)
	)

	aReflection = scalematrix (FetchReflection axis)
	fReflection = scalematrix (FetchReflection flip)

	fReflection * (tm * (inverse pivotTm)) * aReflection * pivotTm
)

rollout setsel "选择物体"
(
	button setsel1 "选择集1" width:(68) height:buttonH offset:[-50,0]
	button setsel2 "选择集2" width:(68) height:buttonH offset:[50,-35] tooltip:"注意:粘贴基于选择的顺序！"
	label lbl1 "=>" width:(20) height:20 offset:[3,-28]
	on setsel1 pressed do
	(
		sel1 = selection as array
		setsel1.caption = sel1.count as string
	)
	on setsel2 pressed do
	(
		sel2 = selection as array
		setsel2.caption = sel2.count as string
	)
)

rollout PoseToolsRO "复制/粘贴变换值" width:218 height:391
(
	subrollout PoseSubRO "复制工具" width:210 height:383 pos:[4,4]
	on PoseToolsRO close do bufferTM = #()
)


rollout copyPaste "复制/粘贴"
(
	button copyPose "复制数据" width:buttonW height:buttonH
	button pastePose "粘贴数据" width:buttonW height:buttonH offset:[1,0] tooltip:"注意:粘贴基于选择的顺序！" enabled:false
	
	on copyPose pressed do
	(
		bufferTM = #()
		if selection.count > 0 then
		(
			pastePose.enabled = true
			if (pasteOptions.posOptions.state == 2 or pasteOptions.rotOptions.state == 2) then flipChosen = true else flipChosen = false
			pasteOptions.affectPos.enabled 		= pastePose.enabled
			if pasteOptions.affectPos.checked then pasteOptions.posOptions.enabled = pastePose.enabled
			pasteOptions.affectRot.enabled 		= pastePose.enabled
			if pasteOptions.affectRot.checked then pasteOptions.rotOptions.enabled = pastePose.enabled
			pasteOptions.flipWorld.enabled 		= flipChosen
			if not pasteOptions.flipWorld.checked then pasteOptions.flipObj.enabled = flipChosen
			pasteOptions.flipAxisRadio.enabled 	= flipChosen
			pasteOptions.upAxisCheck.enabled 	= flipChosen
			if pasteOptions.upAxisCheck.checked then pasteOptions.upAxisRadio.enabled = flipChosen
			for i in sel1 do
			(
				append bufferTM i.transform
			)
		)
	)
	
	on pastePose pressed do
	(
		if (pasteOptions.affectPos.checked or pasteOptions.affectRot.checked) then
		(
			if not (pasteOptions.flipWorld.checked) and not (isvalidnode pasteOptions.flipObj.object) then
			(
				messagebox "请选择一个物体围绕反转" title:"错误:"
			)
			else
			(
				selArray = sel2
				if bufferTM.count != selArray.count then
				(
					if bufferTM.count == 1
					then (errorText = "剪贴板中已有1个变换信息.\n\n")
					else (errorText = "剪贴板中已有" + bufferTM.count as string + "个变换信息.\n\n")
					
					if selArray.count == 1
					then (errorText += "         你选择了1个物体.")
					else (errorText += "         你选择了" + selArray.count as string + "个物体.")
					
					messagebox errorText title:"选择不匹配:"
					selArray = #()
				)
				else
				(
					undo "粘贴变换" on
					(
						for i = 1 to selArray.count do
						(
							pastePosition = selArray[i].transform.pos
							parentInArray = false
							posLocked = false
							for j = 1 to selArray.count do -- run through selection array and find if an object within it is the object's parent
							(
								if selArray[i].parent == selArray[j] then parentInArray = true
							)
							if ((getTransformLockFlags selArray[i])[1]) or ((getTransformLockFlags selArray[i])[2]) or ((getTransformLockFlags selArray[i])[3]) then posLocked = true
							if pasteOptions.posOptions.state == 1 then posFlip = false else posFlip = true
							if pasteOptions.rotOptions.state == 1 then rotFlip = false else rotFlip = true
							if pasteOptions.affectPos.checked and (not parentInArray) and (not posLocked) then
							(
								if posFlip then
								(
									if pasteOptions.flipWorld.checked then
									(
										case pasteOptions.flipAxisRadio.state of
										(
											1: (pastePosition = [ -bufferTM[i].translation[1],  bufferTM[i].translation[2],  bufferTM[i].translation[3] ])
											2: (pastePosition = [  bufferTM[i].translation[1], -bufferTM[i].translation[2],  bufferTM[i].translation[3] ])
											3: (pastePosition = [  bufferTM[i].translation[1],  bufferTM[i].translation[2], -bufferTM[i].translation[3] ])
										)
									)
									else
									(
										case pasteOptions.flipAxisRadio.state of
										(
											1: mirrorTM = (mirrorMatrixFn axis:"x" flip:"x" tm:bufferTM[i] pivottm:pasteOptions.flipObj.object.transform)
											2: mirrorTM = (mirrorMatrixFn axis:"y" flip:"y" tm:bufferTM[i] pivottm:pasteOptions.flipObj.object.transform)
											3: mirrorTM = (mirrorMatrixFn axis:"z" flip:"z" tm:bufferTM[i] pivottm:pasteOptions.flipObj.object.transform)
										)
										pastePosition = mirrorTM.translation
									)
								)
								else pastePosition = bufferTM[i].translation
							)
							if pasteOptions.affectRot.checked then -- if affect rotation is on
							(
								if rotFlip then
								(
									case pasteOptions.flipAxisRadio.state of
									(
										1: flipAxis = "x"
										2: flipAxis = "y"
										3: flipAxis = "z"
									)
									case pasteOptions.upAxisRadio.state of
									(
										1: upAxis = "x"
										2: upAxis = "y"
										3: upAxis = "z"
									)
									if pasteOptions.flipWorld.checked then
									(							
										selArray[i].transform = (mirrorMatrixFn axis:flipAxis flip:upAxis tm:bufferTM[i] pivottm:(matrix3 1))
									)
									else
									(							
										selArray[i].transform = (mirrorMatrixFn axis:flipAxis flip:upAxis tm:bufferTM[i] pivottm:pasteOptions.flipObj.object.transform)
									)
									if not posFlip then selArray[i].pos = pastePosition
								)
								else
								(
									selArray[i].transform = (matrix3 (bufferTM[i].row1) (bufferTM[i].row2) (bufferTM[i].row3) pastePosition)
								)
							)
							else selArray[i].pos = pastePosition
						)
					)
				)
			)
		)
	)
	
	on copyPaste rolledUp state do
	(
		if state == true then
		(
			PoseToolsRO.height += 86
			PoseToolsRO.PoseSubRO.height += 86
		)
		else
		(
			PoseToolsRO.height -=86
			PoseToolsRO.PoseSubRO.height -=86
		)
	)
)

rollout pasteOptions "粘贴选项" width:400 height:205
(
	checkbox affectPos "处理位置" pos:[13,7] width:72 height:15 enabled:false checked:true
	radiobuttons posOptions "" pos:[80,27] width:106 height:16 enabled:false labels:#("正常", "反转") columns:2
	checkbox affectRot "处理旋转" pos:[13,47] width:72 height:15 enabled:false checked:true
	radiobuttons rotOptions "" pos:[80,67] width:106 height:16 enabled:false labels:#("正常", "反转") columns:2
	GroupBox grp1 "反转参考:" pos:[4,87] width:392 height:88
	checkbox flipWorld "世界中心" pos:[13,106] width:72 height:15 enabled:false checked:true
	pickbutton flipObj "拾取物体" pos:[96,104] width:90 height:21 enabled:false pose:[96,103] autoDisplay:true
	label AxisLabel "反转轴向:" pos:[28,130] width:55 height:13
	radiobuttons flipAxisRadio "" pos:[95,130] width:97 height:16 enabled:false labels:#("X", "Y", "Z") default:1 columns:3
	checkbox upAxisCheck "方向参考:" pos:[8,152] width:75 height:15 enabled:false
	radiobuttons upAxisRadio "" pos:[94,154] width:97 height:16 enabled:false labels:#("X", "Y", "Z") default:1 columns:3
	on pasteOptions rolledUp state do
	(
		if state == true then
		(
			PoseToolsRO.height += 184
			PoseToolsRO.PoseSubRO.height += 184
		)
		else
		(
			PoseToolsRO.height -= 184
			PoseToolsRO.PoseSubRO.height -= 184
		)
	)
	on affectPos changed state do
		(posOptions.enabled = affectPos.checked)
	on posOptions changed state do
	(
		if (posOptions.state == 2 or rotOptions.state == 2) then flipChosen = true else flipChosen = false
		flipWorld.enabled 		= flipChosen
		if not flipWorld.checked then flipObj.enabled = flipChosen
		flipAxisRadio.enabled 	= flipChosen
		upAxisCheck.enabled 	= flipChosen
		if upAxisCheck.checked then pasteOptions.upAxisRadio.enabled = flipChosen
	)
	on affectRot changed state do
		(rotOptions.enabled = affectRot.checked)
	on rotOptions changed state do
	(
		if (posOptions.state == 2 or rotOptions.state == 2) then flipChosen = true else flipChosen = false
		flipWorld.enabled 		= flipChosen
		if not flipWorld.checked then flipObj.enabled = flipChosen
		flipAxisRadio.enabled 	= flipChosen
		upAxisCheck.enabled 	= flipChosen
		if upAxisCheck.checked then pasteOptions.upAxisRadio.enabled = flipChosen
	)
	on flipWorld changed state do
		(flipObj.enabled = not flipWorld.checked)
	on flipObj picked obj do
	(
		if obj != undefined then flipWorld.checked = false
	)
	on flipAxisRadio changed state do
	(
		if not upAxisCheck.checked then	upAxisRadio.state = flipAxisRadio.state
	)
	on upAxisCheck changed state do
	(
		if state == off then upAxisRadio.state = flipAxisRadio.state
		upAxisRadio.enabled = upAxisCheck.checked
	)
)
	



)
--拷贝变换结束--

createdialog PoseToolsRO width:218

addsubrollout PoseToolsRO.PoseSubRO setsel

addsubrollout PoseToolsRO.PoseSubRO copyPaste

addsubrollout PoseToolsRO.PoseSubRO pasteOptions
