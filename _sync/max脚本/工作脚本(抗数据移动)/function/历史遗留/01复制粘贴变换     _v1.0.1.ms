try(destroyDialog ControlTansRoll)catch()
rollout ControlTansRoll "操控变换" width:168 height:352
(
	local
	bufferTM = #(),
	bufferTM_time = #(),
	sel1 = #(),
	sel2 = #(),
	Names = #(),
	RelList = #()
	
	fn mirrorMatrixFn \
	axis:"x" 				/*(Axis to mirror over)*/
	flip:"x" 				/*(Axis to flip)*/
	tm:(matrix3 1) 			/*(Matrix to mirror)*/
	pivotTm:(matrix3 1) 	/*(Matrix to mirror around)*/
	=						/*By Mike Biddlecombe and Paul Neale.  I'm just ripping it off!*/ --翻转变换的原作者(们),我只是整理和扩展了一下,便于适配我自己的实际情况.
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
	--复制相对变换
	fn copyRelTrans objs:(getcurrentselection()) = 
	(
		RelList = for o in objs collect if isvalidnode o.parent then o.transform * inverse o.parent.transform else o.transform	
	)
	--粘贴相对变换
	fn PasteRelTrans objs:(getcurrentselection()) = 
	undo "粘贴相对变换" on(
		for i = 1 to objs.count do
		(
			o = objs[i];trans = RelList[i]
			try(o.transform = if isvalidnode o.parent then trans * o.parent.transform else trans)catch(messagebox ("粘贴失败:\n"+getCurrentException()) title:"错误:")
		)
	)
	
	GroupBox grp1 "选择集" pos:[0,0] width:168 height:48
	button btn_Sel1 "选择集1" pos:[8,16] width:64 height:24 toolTip:"用于复制变换的选择集
Nodes:"
	button btn_Sel2 "选择集2" pos:[96,16] width:64 height:24 toolTip:"需要粘贴变换的选择集
Nodes:"
	
	GroupBox grp2 "复制/粘贴" pos:[0,56] width:168 height:80
	button btn_SBN "选择" pos:[8,72] width:72 height:24 toolTip:"按名称选择,Ctrl记录当前选中物体名称
Names:"
	button btn_copy "复制" pos:[88,72] width:72 height:24
	button btn1_REL "相对" pos:[8,104] width:72 height:24 toolTip:"[基于选择顺序]粘贴相对变换,Ctrl复制当前选中物体的相对变换."
	button btn_paste "粘贴" pos:[88,104] width:72 height:24 toolTip:"[基于选择顺序]按照选项粘贴变换,按住Ctrl逐帧批量粘贴[批量粘贴会自动逐帧复制]."
	
	GroupBox grp3 "选项" pos:[0,144] width:168 height:144
	checkbox chk_Pos "位置" pos:[8,160] width:40 height:16 checked:true
	radiobuttons rdo_Pos "" pos:[56,160] width:106 height:16 labels:#("正常", "反转") columns:2
	checkbox chk_Rot "旋转" pos:[8,184] width:40 height:16 checked:true
	radiobuttons rdo_Rot "" pos:[56,184] width:106 height:16 labels:#("正常", "反转") columns:2
	
	checkbox chk_World "世界原点" pos:[8,226] width:72 height:16 checked:true
	pickbutton btn_Obj "拾取参照物体" pos:[80,224] width:80 height:20 autoDisplay:true
	radiobuttons rdo_FA "" pos:[64,248] width:97 height:16 labels:#("X", "Y", "Z") columns:3
	radiobuttons rdo_DA "" pos:[64,264] width:97 height:16 labels:#("X", "Y", "Z") columns:3
	
	label lbl1 "=>" pos:[76,21] width:16 height:16
	label lbl2 "反转参照:" pos:[8,208] width:56 height:16
	label lbl3 "反转轴:" pos:[8,248] width:48 height:16
	label lbl4 "参考轴:" pos:[8,264] width:48 height:16
	
	fn CopyTM = 
	(
		bufferTM = for i in Sel1 collect i.transform
	)
	fn PasteTM =
	(
		if (chk_Pos.checked or chk_Rot.checked) then
		(
			if not (chk_World.checked) and not (isvalidnode btn_Obj.object) then
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
							for j = 1 to selArray.count do -- run through selection array and find if an object within it is the object's parent
							(
								if selArray[i].parent == selArray[j] then parentInArray = true
							)
							posLocked  = ((getTransformLockFlags selArray[i])[1] or (getTransformLockFlags selArray[i])[2] or (getTransformLockFlags selArray[i])[3])
							posFlip = (rdo_Pos.state == 2)
							rotFlip = (rdo_Rot.state == 2)
							if chk_Pos.checked and (not parentInArray) and (not posLocked) then
							(
								if posFlip then
								(
									if chk_World.checked then
									(
										case rdo_FA.state of
										(
											1: (pastePosition = [ -bufferTM[i].translation[1],  bufferTM[i].translation[2],  bufferTM[i].translation[3] ])
											2: (pastePosition = [  bufferTM[i].translation[1], -bufferTM[i].translation[2],  bufferTM[i].translation[3] ])
											3: (pastePosition = [  bufferTM[i].translation[1],  bufferTM[i].translation[2], -bufferTM[i].translation[3] ])
										)
									)
									else
									(
										case rdo_FA.state of
										(
											1: mirrorTM = (mirrorMatrixFn axis:"x" flip:"x" tm:bufferTM[i] pivottm:btn_Obj.object.transform)
											2: mirrorTM = (mirrorMatrixFn axis:"y" flip:"y" tm:bufferTM[i] pivottm:btn_Obj.object.transform)
											3: mirrorTM = (mirrorMatrixFn axis:"z" flip:"z" tm:bufferTM[i] pivottm:btn_Obj.object.transform)
										)
										pastePosition = mirrorTM.translation
									)
								)
								else pastePosition = bufferTM[i].translation
							)
							if chk_Rot.checked then -- if affect rotation is on
							(
								if rotFlip then
								(
									case rdo_FA.state of
									(
										1: flipAxis = "x"
										2: flipAxis = "y"
										3: flipAxis = "z"
									)
									case rdo_DA.state of
									(
										1: upAxis = "x"
										2: upAxis = "y"
										3: upAxis = "z"
									)
									if chk_World.checked then
									(							
										selArray[i].transform = (mirrorMatrixFn axis:flipAxis flip:upAxis tm:bufferTM[i] pivottm:(matrix3 1))
									)
									else
									(							
										selArray[i].transform = (mirrorMatrixFn axis:flipAxis flip:upAxis tm:bufferTM[i] pivottm:btn_Obj.object.transform)
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
	

	groupBox grp4 "塌陷变换" pos:[0,296] width:168 height:48
	button btn_CopyTByF "复制/粘贴" pos:[8,312] width:72 height:24 toolTip:"逐帧复制或粘贴物体变换."
-- 	on chk_World changed state do
-- 	(
-- 		btn_Obj.enabled = not state
-- 	)
	button btn16 "重置控制器" pos:[88,312] width:72 height:24 toolTip:"设置物体的变换控制器为全新的RPS控制器."
	on btn_Sel1 pressed do
	(
		sel1 = getcurrentselection()
		if sel1.count > 0 do
		(
			btn_Sel1.caption = sel1.count as string
			txt = "用于复制变换的选择集\nNodes:"
			for o in sel1 do txt += ("\n" + o.name)
			btn_Sel1.Tooltip = txt
		)
	)
	on btn_Sel2 pressed do
	(
		sel2 = getcurrentselection()
		if sel2.count > 0 do
		(
			btn_Sel2.caption = sel2.count as string
			txt = "需要粘贴变换的选择集\nNodes:"
			for o in sel2 do txt += ("\n" + o.name)
			btn_Sel2.Tooltip = txt
		)
	)
	on btn_SBN pressed do
	(
		if keyboard.controlPressed then 
		(
			txt = "按名称选择,Ctrl记录当前选中物体名称\nNames:"
			names = for i in getcurrentselection() collect (txt += ("\n"+i.name);i.name)
			btn_SBN.tooltip = txt
		)
		else 
		(
			local nodeList = for n in names collect getnodebyname n
			if nodeList.count < 1 do return(messagebox "没有名称记录.")
			try(
				undo "Select" on(select nodeList)
			)catch(if queryBox "选择失败,可能是对应名称的物体不存在,是否试着跳过无效物体,排除错误并再选一次?" do undo "Select" on(select(for n in nodeList where isValidNode n collect n)))
		)
	)
	on btn_copy pressed do
	(
		try(if Sel1.count < 1 then messagebox "选择集中没有记录" title:"提示:" else CopyTM())catch(messagebox "复制失败,请检查选择集有效性." title:"错误:")
	)
	on btn1_REL pressed do
	(
		if keyboard.controlPressed then copyRelTrans() else PasteRelTrans()
	)
	on btn_paste pressed do
	(
		if keyboard.controlPressed then
		(
			undo "批量粘贴变换" on(with animate on(
				try(
					bufferTM_time = for t = animationrange.start to animationrange.end collect #(t,at time t for i in sel1 collect i.transform)
					
					tempBuffer = bufferTM
					
					for b in bufferTM_time do
					(
						at time b[1](
							bufferTM = b[2]
							PasteTM()
						)
					)
					
					bufferTM = tempBuffer
				)catch()
			))
		)
		else PasteTM()
	)
	on btn_Obj picked obj do
		chk_World.checked = false
	on rdo_FA changed stat do
	(
		rdo_DA.state = stat
	)
	on btn_CopyTByF pressed  do
(
	
	)
	on btn16 pressed  do
(
	
	)
)
createdialog ControlTansRoll