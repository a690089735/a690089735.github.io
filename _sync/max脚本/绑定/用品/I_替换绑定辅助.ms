try (destroydialog cloneNameRollout)catch()
rollout cloneNameRollout "replaceRig" width:168 height:416
(
	button btn1 "Copy" pos:[16,24] width:64 height:24 toolTip:"记录选择物体的名称."
	button btn2 "Paste" pos:[88,24] width:64 height:24 toolTip:"粘贴物体名到选择的物体."
	GroupBox grp1 "Name" pos:[8,8] width:152 height:48
	GroupBox grp2 "Children" pos:[8,64] width:152 height:48
	button btn3 "Copy" pos:[16,80] width:64 height:24 toolTip:"记录选择物体的子物体."
	button btn4 "Paste" pos:[88,80] width:64 height:24 toolTip:"粘贴子物体到选中的物体."
	GroupBox grp3 "Skin" pos:[8,120] width:152 height:144
	button btn5 "SelectBoneBySkin" pos:[16,168] width:136 height:24 toolTip:"按选中物体的Skin来选中骨骼"
	
	
	local names,childrenList
	local NewBones = #()
	
	fn cleaneSkinBone = 
	(
		local weightThresh = 0.0001
		local objs = selection as array
		
		for obj in objs do (
			select obj
			
			for m in obj.modifiers where classof m == Skin do (
				modPanel.setCurrentObject m
				
				local vertCount = skinOps.GetNumberVertices m
				local bonesCount = skinOps.GetNumberBones m
				local unusedBones = #{1..bonesCount}
				
				for v = 1 to vertCount do (
					local vertWeightCount = skinOps.GetVertexWeightCount m v
					
					for i = 1 to vertWeightCount do (
						local weight = skinOps.GetVertexWeight m v i
						if weight >= weightThresh then (
							local boneID = skinOps.GetVertexWeightBoneID m v i
							unusedBones[boneID] = false
						)
					)
				)
				
				for i = bonesCount to 1 by -1 where unusedBones[i] do (
					skinOps.SelectBone m i
					skinOps.RemoveBone m
				)
				
				format "% Bones where removed from %.%" unusedBones.numberSet obj.name m.name
			)
		)
	)
	
	fn BuildTip p s=
	(
		if s then substituteString (substituteString (substituteString (p as string) ", " "\n") "#(" "") ")" "" else BuildTip (for i in p where IsValidNode i collect i.name) true
	)
	fn selectBoneBySkinModifier objs:selection[1] first:true state:(getCommandPanelTaskMode()) = 
	(
		local boneslist = #()
		if first do (clearselection();setCommandPanelTaskMode #modify)
		if classof objs == array then (for obj in objs do boneslist += (selectBoneBySkinModifier objs:obj first:false state:state))
		else
		(
			modf = for m in objs.modifiers where classof m == skin do exit with m
			if classof modf == skin do
			(
				select objs
				bonesList = for i = 1 to (skinOps.GetNumberBones modf) collect getnodebyname(skinOps.GetBoneName modf i 0)
			)
		)
		if first then (setCommandPanelTaskMode state; select (bonesList + objs)) else return boneslist
	)
	fn SaveEnv obj = 
	(
		m = for modf in obj.modifiers where classof modf == skin do exit with modf
		if classof(m) == Skin do 
			(
				select obj
			modPanel.setCurrentObject obj.modifiers[#Skin]
			UIAccessor.PressDefaultButton()
			skinOps.saveEnvelope m (maxfilepath + obj.name + ".env")
			classof obj
				)
	)
	fn ANoon_EnvelopeCallbackFunction =
	(
		WindowHandle = DialogMonitorOPS.GetWindowHandle()
		theDialogName = UIAccessor.GetWindowText WindowHandle
		if theDialogName != undefined and matchpattern theDialogName pattern:"*Load Envelopes*" do
			(UIAccessor.PressButtonByName WindowHandle "Match by Name"
			UIAccessor.PressButtonByName WindowHandle "OK")
		true
	)
	fn LoadEnv obj = 
	(
-- 		DialogMonitorOPS.RegisterNotification ANoon_EnvelopeCallbackFunction ID:#ANoon_Envelopes
-- 		DialogMonitorOPS.Enabled = true
		m = for modf in obj.modifiers where classof modf == skin do exit with modf
		if classof(m) == Skin do 
			(
				select obj
			modPanel.setCurrentObject m
-- 			UIAccessor.PressDefaultButton()
			skinOps.loadEnvelope m (maxfilepath + obj.name + ".env")
			classof obj
			)
-- 		DialogMonitorOPS.Enabled = false
	)
	
	button btn6 "renewalOrientation" pos:[16,352] width:136 height:24 toolTip:"更新方向约束的两个物体,会将A的方向约束,重新指定给B和C,且B会作为A的父物体.
仅支持两项式."
	label state "Ready." pos:[8,392] width:152 height:16 style_sunkenedge:true
	Timer tmr1 "Timer" pos:[136,392] width:24 height:24 interval:3250 active:false
	button btn7 "SelectObjectBySkin" pos:[16,136] width:136 height:24 toolTip:"按Skin修改器选中物体"
	GroupBox grp4 "Function" pos:[8,336] width:152 height:48
	button btn8 "Import" pos:[16,296] width:64 height:24
	GroupBox grp5 "Imp\ExpWeigth" pos:[8,280] width:152 height:48
	button btn9 "Export" pos:[88,296] width:64 height:24
	button btn10 "SetBone" pos:[16,232] width:64 height:24 toolTip:"记录选择的物体."
	button btn11 "AddBone" pos:[88,232] width:64 height:24 toolTip:"添加骨骼到选中物体的skin."
	button btn12 "CleanSkinBySelection" pos:[16,200] width:136 height:24 toolTip:"清理选中物体的Skin修改器"
	on btn1 pressed do
	(
		names = for i in (selection as array) collect i.name
		btn1.tooltip = BuildTip names true
		state.text = "CopyName.OK"
		tmr1.active = true
	)
	on btn2 pressed do
	(
		undo on(
			if selection.count == names.count then ((for i = 1 to names.count do selection[i].name = names[i]); state.text = "PasteName.OK";tmr1.active = true) else state.text = "PasteName.Error"
			tmr1.active = true
		)
	)
	on btn3 pressed do
	(
		childrenList = for i in selection[1].children collect i
		btn3.tooltip = BuildTip childrenList false
		state.text = "CopyChildren.OK"
		tmr1.active = true
	)
	on btn3 rightClick do
		select childrenList
	on btn4 pressed do
	(
		undo on(
			try(for i in childrenList where IsValidNode i do i.parent = selection[1]; state.text = "PasteChildren.OK";tmr1.active = true)catch(state.text = "PasteChildren.Error")
		)
	)
	on btn5 pressed do
	(
		selectBoneBySkinModifier objs:(selection as array)
		state.text = "SeleteBoneBySkin.OK"
		tmr1.active = true
	)
	on btn6 pressed do
	(
		a = selection[1]
		b = selection[2]
		c = selection[3]
		ctrl = a.rotation.controller[2].controller
		a.parent = b
		ctrl.deletetarget 1; ctrl.deletetarget 1
		ctrl.appendtarget b 50.0; ctrl.appendtarget c 50.0
		state.text = "RenewalOrientation.OK"
		tmr1.active = true
	)
	on tmr1 tick do
	(
		state.text = "Ready."
		tmr1.active = false
	)
	on btn7 pressed do
		select (for i in geometry where (r = false;for m in i.modifiers where classof m == skin do exit with r = true;r) collect i)
	on btn8 pressed do
	(
		try(for obj in selection as array do LoadEnv obj;state.text = "ImportWeight.OK";tmr1.active = true)catch(state.text = "ImportWeight.Error")
	)
	on btn9 pressed do
	(
		try(
			setCommandPanelTaskMode #modify
			i = 0
			for obj in selection as array do (saveEnv obj; i+=1);state.text = "ExportWeight-"+ i as string + "-.OK";tmr1.active = true
				)catch(state.text = "ExportWeight.Error")
	)
	on btn10 pressed do
	(
		NewBones = selection as array
	)
	on btn10 rightClick do
		select NewBones
	on btn11 pressed do
	if NewBones.count > 0 do(
		undo on(
			setCommandPanelTaskMode #modify
			for o in (selection as array) do
			(
				sk = for m in o.modifiers where classof m == skin do exit with m
				select o
				modPanel.setCurrentObject sk
				for b in NewBones do skinOps.addbone sk b 0
				classof o
			)
			
		)
	)
	on btn12 pressed do
	(
		cleaneSkinBone()
	)
)
createdialog cloneNameRollout
