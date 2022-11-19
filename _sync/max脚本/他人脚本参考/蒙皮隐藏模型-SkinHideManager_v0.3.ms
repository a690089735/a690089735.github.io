global SoxSkinHideManager

try (destroydialog SoxSkinHideManager) catch()

rollout SoxSkinHideManager "Sox SkinHideManager v0.30" width:180
(
	group "隐藏选择的元素"
	(
		button uiBtnHideSelVerts "点" align:#left across:3
		button uiBtnHideSelFace "面" align:#center offset:[-3, 0]
		button uiBtnHideSelElem "元素" align:#right
	)
	
	button uiBtnUnhideAll "显示全部"
	
	group "选项"
	(
		checkbox uiChkHideUnselected "隐藏未选择的" across:2
		button uiBtnAbout "About" offset:[20, -4]
	)

	function CheckSkinModifier obj =
	(
		if ( obj.modifiers.count == 0 ) do return 0
		for o = 1 to obj.modifiers.count do
		(
			if ( (classof obj.modifiers[o])  == Skin ) do return o
		)
		return 0
	)
	
	local idEditPolyModifier
	local idSkinModifier
	function CheckType obj =
	(
		idSkinModifier = CheckSkinModifier obj
		if idSkinModifier == 0 do return 0
		
		if ( obj.modifiers.count == 1 ) do (
			if ( (classof $.baseobject) == Editable_Poly ) then
			(
				return 3
			)
			else
			(
				return 1
			)
		)
		
		idSkin = CheckSkinModifier obj
		
		for o = idSkin to obj.modifiers.count do
		(
			if ( ( classof obj.modifiers[o] ) == Edit_Poly ) do
			(
				idEditPolyModifier = o
				return 2
			)
		)
		
		if ( ( classof obj.baseobject ) == Editable_Poly ) do return 3
		
		return 0
	)
	
	function GetSkinVertSelection skinMod =
	(
		bitArr = #{}
		loopIndex = 1
		errFlag = false
		testValue = true
		while errFlag == false do
		(
			try
			(
				testValue = skinOps.IsVertexSelected skinMod loopIndex
			)
			catch
			(
				return bitArr
			)
			
			append bitArr loopIndex
			if testValue == 0 do
			(
				bitArr[loopIndex] = false
			)
			loopIndex += 1
		)
		return bitArr
	)
	
	on uiBtnHideSelVerts pressed do
	(
		if (selection.count != 1) do return()
			
		skinType = CheckType selection[1]
						
		if ( skinType == 0 ) do return()
		
		disableSceneRedraw()
		undo on (
		case skinType of
		(
			2:
			(
				-- Edit Poly > Skin
				selectedVerts = GetSkinVertSelection selection[1].modifiers[idSkinModifier]
				if (uiChkHideUnselected.state) do
				(
					selectedVerts = -selectedVerts
				)
				modPanel.setCurrentObject selection[1].modifiers[idEditPolyModifier]
				subobjectLevel = 1
				selection[1].modifiers[idEditPolyModifier].SetSelection #Vertex #{}
				selection[1].modifiers[idEditPolyModifier].Select #Vertex selectedVerts
				selection[1].modifiers[idEditPolyModifier].ButtonOp #HideVertex
				subobjectLevel = 0
				modPanel.setCurrentObject selection[1].modifiers[idSkinModifier]
				subobjectLevel = 1
				skinOps.SelectVertices selection[1].modifiers[idSkinModifier] #{}
			)-- 2 end
			
			3:
			(
				-- Edittable Poly > Skin
				selectedVerts = GetSkinVertSelection selection[1].modifiers[idSkinModifier]
				if (uiChkHideUnselected.state) do
				(
					selectedVerts = -selectedVerts
				)
				selection[1].EditablePoly.SetSelection #Vertex selectedVerts
				selection[1].EditablePoly.Hide #Vertex
				subobjectLevel = 1
				skinOps.SelectVertices selection[1].modifiers[idSkinModifier] #{}
			)-- 3 end
			
			default: return ()
		)
		)-- undo end
		enableSceneRedraw()
	)
	
	on uiBtnHideSelFace pressed do
	(
		if (selection.count != 1) do return()
			
		skinType = CheckType selection[1]
						
		if ( skinType == 0 ) do return()
		
		disableSceneRedraw()
		undo on (
		case skinType of
		(
			2:
			(
				-- Edit Poly > Skin
				selectedVerts = GetSkinVertSelection selection[1].modifiers[idSkinModifier]
				modPanel.setCurrentObject selection[1].modifiers[idEditPolyModifier]
				subobjectLevel = 1
				selection[1].modifiers[idEditPolyModifier].SetSelection #Vertex #{}
				selection[1].modifiers[idEditPolyModifier].Select #Vertex selectedVerts
				selection[1].modifiers[idEditPolyModifier].ConvertSelection #Vertex #Face
				if (uiChkHideUnselected.state) do
				(
					subobjectLevel = 4
					actionMan.executeAction 0 "40044"  -- Selection: Select Invert
				)
				selection[1].modifiers[idEditPolyModifier].ButtonOp #HideFace
				subobjectLevel = 0
				modPanel.setCurrentObject selection[1].modifiers[idSkinModifier]
				subobjectLevel = 1
				skinOps.SelectVertices selection[1].modifiers[idSkinModifier] #{}
			)-- 2 end
			
			3:
			(
				-- Edittable Poly > Skin
				selectedVerts = GetSkinVertSelection selection[1].modifiers[idSkinModifier]
				selection[1].EditablePoly.SetSelection #Vertex selectedVerts
				selection[1].EditablePoly.ConvertSelection #Vertex #Face
				if (uiChkHideUnselected.state) do
				(
					modPanel.setCurrentObject selection[1].baseObject
					subobjectLevel = 4
					actionMan.executeAction 0 "40044"  -- Selection: Select Invert
					subobjectLevel = 0
				)
				selection[1].EditablePoly.Hide #Face
				modPanel.setCurrentObject selection[1].modifiers[idSkinModifier]
				subobjectLevel = 1
				skinOps.SelectVertices selection[1].modifiers[idSkinModifier] #{}
			)-- 3 end
			
			default: return ()
		)
		)-- undo end
		enableSceneRedraw()
	)
	
	on uiBtnHideSelElem pressed do
	(
		if (selection.count != 1) do return()
			
		skinType = CheckType selection[1]
						
		if ( skinType == 0 ) do return()
		
		disableSceneRedraw()
		undo on (
		case skinType of
		(
			2:
			(
				-- Edit Poly > Skin
				selectedVerts = GetSkinVertSelection selection[1].modifiers[idSkinModifier]
				modPanel.setCurrentObject selection[1].modifiers[idEditPolyModifier]
				subobjectLevel = 1
				selection[1].modifiers[idEditPolyModifier].SetSelection #Vertex #{}
				selection[1].modifiers[idEditPolyModifier].Select #Vertex selectedVerts
				selection[1].modifiers[idEditPolyModifier].ConvertSelection #Vertex #Element
				if (uiChkHideUnselected.state) do
				(
					subobjectLevel = 5
					actionMan.executeAction 0 "40044"  -- Selection: Select Invert
				)
				selection[1].modifiers[idEditPolyModifier].ButtonOp #HideFace
				subobjectLevel = 0
				modPanel.setCurrentObject selection[1].modifiers[idSkinModifier]
				subobjectLevel = 1
				skinOps.SelectVertices selection[1].modifiers[idSkinModifier] #{}
			)-- 2 end
			
			3:
			(
				-- Edittable Poly > Skin
				selectedVerts = GetSkinVertSelection selection[1].modifiers[idSkinModifier]
				selection[1].EditablePoly.SetSelection #Vertex selectedVerts
				selection[1].EditablePoly.ConvertSelection #Vertex #Element
				if (uiChkHideUnselected.state) do
				(
					modPanel.setCurrentObject selection[1].baseObject
					subobjectLevel = 5
					actionMan.executeAction 0 "40044"  -- Selection: Select Invert
					subobjectLevel = 0
				)
				selection[1].EditablePoly.Hide #Face
				modPanel.setCurrentObject selection[1].modifiers[idSkinModifier]
				subobjectLevel = 1
				skinOps.SelectVertices selection[1].modifiers[idSkinModifier] #{}
			)-- 3 end
			
			default: return ()
		)
		)-- undo end
		enableSceneRedraw()
	)
	
	on uiBtnUnhideAll pressed do
	(
		if (selection.count != 1) do return()
			
		skinType = CheckType selection[1]
						
		if ( skinType == 0 ) do return()
		
		undo on (
		case skinType of
		(
			2:
			(
				selection[1].modifiers[idEditPolyModifier].ButtonOp #UnhideAllFace
				selection[1].modifiers[idEditPolyModifier].ButtonOp #UnhideAllVertex
			)-- 2 end
			
			3:
			(
				selection[1].EditablePoly.unhideAll #Face
				selection[1].EditablePoly.unhideAll #Vertex
			)-- 3 end
			
			default: return ()
		)
		)-- undo end
	)
	
	on uiBtnAbout pressed do
	(
		--shellLaunch "http://cafe.naver.com/pinksox/6126" ""
	)
	
	on SoxSkinHideManager open do
	(

	)
	
	on SoxSkinHideManager close do
	(

	)
)

createDialog SoxSkinHideManager style:#(#style_titlebar, #style_toolwindow, #style_sysmenu) lockWidth:true