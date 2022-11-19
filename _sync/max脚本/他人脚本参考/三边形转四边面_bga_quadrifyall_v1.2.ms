/*//////////   SCRIPT:   QuadrifyAll+ v1.2   //////////*/
/*//////////   CREATED BY:   Branko Zivkovic   //////////*/
/*//////////   EMAIL:   barigazy@hotmail.com   //////////*/
try(destroyDialog ::quadAllRoll)catch()
rollout quadAllRoll " QuadrifyAll+ v1.2"
(
	fn filtPolyMesh o = (isKindof o GeometryClass and (isKindOf o Editable_Poly or isKindOf o Editable_Mesh or isKindOf o PolyMeshObject))
	
	local expFile = getDir #export + "/exportTest.3ds", idList = #(), gfm = getFaceMatID, sfm = setFaceMatID 
	local objMat, objID

	pickbutton pb_PickObj "Pick Object" pos:[5,5] width:140 height:22 filter:filtPolyMesh
	groupBox gb1 "Preserve:" pos:[5,28] width:140 height:52
	checkBox cb_uv "UV's"  pos:[10,45] width:40 checked:on
	checkBox cb_mtl "Material" pos:[75,45] width:60 checked:on
	checkBox cb_fid "FaceID's"  pos:[10,62] width:60 checked:on
	checkBox cb_oid "ObjectID"  pos:[75,62] width:60 checked:on
	groupBox gb2 "Convert To:" pos:[5,82] width:140 height:35
	radioButtons rb_pm "" labels:#("E_Poly", "E_Mesh") columns:2 pos:[10,98]
	button pb_doit "Quadrify!" pos:[5,120] width:140 height:22 enabled:off
	
	fn QuadifyAll obj uv:cb_uv.checked mtl:cb_mtl.checked fID:cb_fid.checked oID:cb_oid.checked =
	(
		local idList = #(), facesList = #()
		local tnt = Bomb strength:0 gravity:0 chaos:0 seed:0 spin:0 detonation:0f minFragmentSize:2 \
		maxFragmentSize:2 fallOffEnable:off isHidden:on isSelected:off
		bindSpaceWarp obj tnt ; sliderTime = 5f
		local objTemp = snapShot obj
		delete #(tnt, obj)
		if fID do
		(
			for i in 1 to objTemp.Faces.count do appendIfUnique idList (gfm objTemp i) ; sort idList
			if idList.count > 1 do (for i = 1 to idList.count do append facesList #())
			if facesList.count != 0 do
			(
				for i = 1 to objTemp.Faces.count do
				(
					idx = finditem idList (gfm objTemp i)
					append facesList[idx] i 
				)
			)
		)
		meshop.autoEdge objTemp #{1..(objTemp.Edges.count)} 24 type:#SetClear
		meshop.weldVertsByThreshold objTemp #{1..(objTemp.Verts.count)} 0.001
		if idList.count != 0 do 
		(
			for i = 1 to facesList.count do
			(
				for j = 1 to facesList[i].count do sfm objTemp facesList[i][j] idList[i]
			)
			free facesList ; free idList
		)
		if mtl then objTemp.material = objMat else objTemp.material = undefined
		if oID do objTemp.gbufferchannel = objID
		select objTemp ; objTemp
	)
	on pb_PickObj picked p_obj do
	(
		if p_obj != undefined do
		(
			CenterPivot p_obj ; ResetXForm p_obj
			convertToMesh p_obj ; select p_obj
			pb_PickObj.text = p_obj.name
			objMat = p_obj.material
			objID = p_obj.gbufferchannel
			pb_doit.enabled = on
		)
	)
	on pb_doit pressed do
	(
		if isValidNode (pickedObj = getNodeByName pb_PickObj.text) do
		(
			if getCommandPanelTaskMode() != #create do max create mode
			undo off with redraw off 
			(
				if cb_uv.checked then
				(
					addmodifier pickedObj (Unwrap_UVW ())
					objTemp = QuadifyAll (snapShot pickedObj)
					swap pickedObj.baseobject objTemp.baseobject ; delete objTemp
					select pickedObj
				)
				else
				(
					objTemp = QuadifyAll pickedObj
					objTemp.name = pb_PickObj.text
				)
				if rb_pm.state == 1 then convertToPoly selection[1] else convertToMesh selection[1]
			)
			CenterObject pickedObj
			pb_PickObj.text = "Pick Object"
			pb_doit.enabled = off
		)
	)
	on quadAllRoll close do (gc())
)
createDialog quadAllRoll 150 146 style:#(#style_titlebar, #style_sysmenu, #style_toolwindow)