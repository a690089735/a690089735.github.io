--此处不可用,只做记录
-- rm = RayMeshGridIntersect () --create an instance of the Reference Target
-- rm.Initialize 1000 --init. the voxel grid size to 10x10x10
-- rm.addNode $ --add the sphere to the grid
-- rm.buildGrid() --build the grid data (collecting faces into the grid voxels)

-- rm.closestFace $point001.pos 

-- PolyBSetSel 3 #{3}


-- 以下为可用
-- IPM = MeshProjIntersect()
-- IPM.SetNode $
-- IPM.Build()

-- IPM.ClosestFace $point001.pos --使用这个方法后,不能指定hitindex,只能为-1

-- IPM.GetHitPos() --获取最近的坐标
-- IPM.GetHitDist() --获取距离 --默认 hitIndex:-1是最近的距离
-- IPM.GetHitFace()--获取面索引,从0开始.hitIndex:-1
-- IPM.GetHitBary() --获取面重心坐标 hitIndex:<integer> 使用其1和2即可

-- IPM.free()


fn getclosestpoint m n =
(
	local IPM = MeshProjIntersect()
	IPM.SetNode m
	IPM.Build()
	IPM.ClosestFace n.pos
	local
	pos = IPM.GetHitPos(), --获取最近的坐标
	dis = IPM.GetHitDist(), --获取距离
	face = IPM.GetHitFace(), --获取面id,从0开始
	coor = IPM.GetHitBary() --获取重心坐标,取其1和2即可(因为三角形具有稳定性,所以这三个值是互相牵制的,所以使用前两个量就可以确定第三个量)
	
	IPM.free()
	
	#(pos,dis,face,coor)
)

getclosestpoint $[1] $[2]