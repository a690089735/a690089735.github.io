--
-- creat a point with attachment pos controller assigned. and set position at mouse hit position.
-- v1.0
-- tested with max 2011
-- huijunpark@gmail.com
--

try destroydialog roll_attachPt catch ()

rollout roll_attachPt "Attached Point" width:160 (
	local maxIni = getmaxinifile()
	
	fn ismesh o = try ( o.mesh; true ) catch false
	
	fn createAttachPt o align snapVert sz = (
		mp = mouse.pos
		pt = undefined
		
		with redraw off  (
			tmp = snapshot o
			arrRayRes = intersectrayex tmp (mapScreenToWorldRay mp)
			print arrRayRes #nomap
			delete tmp
		)
		
		if arrRayRes != undefined do (
			crd = [arrRayRes[3].x, arrRayRes[3].y]
			if snapVert do (
				crd.x = if crd.x > .5 then 1 else 0
				crd.y = if crd.y > .5 then 1 else 0
			)
			
			pt = point size:sz cross:on box:off axistripod:off centermarker:off
			ctr = pt.pos.controller = attachment()
			ctr.node = o
			ctr.align = align
			k = AttachCtrl.addNewKey ctr 0
			k.face = arrRayRes[2] - 1
			k.coord = crd
		)
		
		if pt != undefined then (
			select pt
			ok
		)
		else undefined
	)
	
	checkbox chk_align "Align To Surface" checked:true
	checkbox chk_snap "Snap To Vertex"
	spinner spn_size "Size" range:[.5,100,1] type:#float scale:.5 fieldWidth:50 offset:[0,10]
	checkbutton btn_pickPts ">> Pick On Surface <<" width:140 height:20 highlightColor:orange
	
	on btn_pickPts changed arg do (
		while arg do (
			o = pickobject filter:ismesh
			if o == undefined then exit else createAttachPt o chk_align.state chk_snap.state spn_size.value
		)
		
		btn_pickPts.state = false
	)
	
	on roll_attachPt open do (
		if not hasinisetting maxIni "HJ Tools" "Attached Pt_Align" do (
			setinisetting maxIni "HJ Tools" "Attached Pt_Align" "true"
			setinisetting maxIni "HJ Tools" "Attached Pt_Snap" "false"
			setinisetting maxIni "HJ Tools" "Attached Pt_Size" "5"
		)
		
		chk_align.state = getInisetting maxIni "HJ Tools" "Attached Pt_Align" == "true"
		chk_align.state = getInisetting maxIni "HJ Tools" "Attached Pt_Snap" == "true"
		spn_size.value = (getInisetting maxIni "HJ Tools" "Attached Pt_Size") as integer
	)
	
	on roll_attachPt close do (
		setInisetting maxIni "HJ Tools" "Attached Pt_Align" (chk_align.state as string)
		setInisetting maxIni "HJ Tools" "Attached Pt_Snap" (chk_align.state as string)
		setInisetting maxIni "HJ Tools" "Attached Pt_Size" (spn_size.value as string)
	)
)

createdialog roll_attachPt style:#(#style_sysmenu, #style_toolwindow)

