fn getnearvertex m1 m2 vList:m2.selectedVerts threshold:0.01 = --提供一个源网格,一个需要被改变的网格,一个顶点列表(可能是m2中选择的顶点).
(
	local 
	tm = mesh mesh:(snapshotAsMesh m1),
	IPM = MeshProjIntersect()
	IPM.SetNode tm
	IPM.Build()
	
	for v in vList do 
	(
		IPM.ClosestFace v.pos
		local
			face = IPM.GetHitFace(), --获取面id,从0开始
			coor = IPM.GetHitBary(), --获取重心坐标,取其1和2即可
			dis = IPM.GetHitDist(), --获取距离
			id = 1
		if dis <= threshold do
		(
			for i = 2 to 3 do if coor[i] > coor[id] do id = i --权重最大的id,就是这个面上最近的点
			local vid = (getFace tm (face+1))[id] as integer,vpos = getVert tm vid
			v.pos = vpos
		)
	)
	
	IPM.free()
	delete tm
	try(classOf m2;update m2;redrawViews())catch()
	
)
try(DestroyDialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:104 height:96
(
	button 'btn_Record' "记录目标" pos:[8,8] width:88 height:24 align:#left
	spinner 'spn_val' "阈值" pos:[8,40] width:88 height:16 range:[0.001,9999,0.01] type:#worldunits scale:0.001 align:#left
	button 'btn_Do' "接近最近点" pos:[8,64] width:88 height:24 align:#left
	
	local m1
	
	on btn_Record pressed do
	(
		m1 = selection[1]
	)
	on btn_Do pressed do
	undo "moveVertex2Mesh" on(
		local m2 = selection[1]
		if superclassof m1 == GeometryClass and (try(m2.selectedVerts;true)catch(false)) do
		(
			getnearvertex m1 m2 vList:m2.selectedVerts threshold:spn_val.value
		)
	)
)
CreateDialog unnamedRollout