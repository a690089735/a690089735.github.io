--核心处理功能
fn getnearvertex m v = --提供一个网格物体和一个点坐标
(
	local 
		tm = mesh mesh:(snapshotAsMesh m),
		IPM = MeshProjIntersect()
	IPM.SetNode tm
	IPM.Build()
	IPM.ClosestFace v
	
	local
		face = IPM.GetHitFace(), --获取面id,从0开始
		coor = IPM.GetHitBary(), --获取重心坐标,取其1和2即可
		id = 1
	for i = 2 to 3 do if coor[i] > coor[id] do id = i --权重最大的id,就是这个面上最近的点

	local vid = (getFace tm (face+1))[id] as integer,vpos = getVert tm vid
	IPM.free()
	delete tm
	#(vid,vpos)
)
-- getnearvertex $ [0,0,0]