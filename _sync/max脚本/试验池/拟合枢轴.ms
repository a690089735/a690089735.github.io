-- fn 拟合枢轴_手动选择一个点指定Y轴朝向 n i:20 preview:true = --节点,迭代次数(不断接近)10的效果相当好.
-- (
-- 	local
-- 	m = snapshotasmesh n,
-- 	count = getNumVerts m,
-- 	center = n.center,
-- 	verctorY = normalize(in coordsys world (getVert m ((getVertSelection m)as array)[1]) - center),
-- 	
-- 	nextDirection = point3 0 0 0,
-- 	direction = point3 0 0 1
-- 	
-- 	for j = 1 to i do
-- 	(
-- 		for vid = 1 to count do
-- 		(
-- 			Pos = getVert m vid
-- 			centeredPos = Pos - center
-- 			nextDirection += (dot centeredPos direction) * Pos;
-- 		)
-- 		direction = normalize(nextDirection)
-- 	)
-- 	if preview do
-- 	(
-- 		local ss = SplineShape pos:center
-- 		addNewSpline ss
-- 		addKnot ss 1 #corner #line center
-- 		addKnot ss 1 #corner #line (direction + center)
-- 		updateShape ss
-- 	)
-- 	result = (matrix3 direction verctorY (normalize(cross nextDirection verctorY)) center)
-- 	if preview do point size:10 transform:result
-- 	result
-- )

fn 拟合枢轴2_拟合平面_手动选择一个点指定Y轴朝向 n i:10 preview:true = --节点,迭代次数(不断接近)10的效果相当好.
(
	fn pointPlaneProj pD nor = --点的平面投影,从法线构造平面
	(
		local
		nor = normalize(nor),
		norTrans = matrixFromNormal nor,
		pA = [100,0,0] * norTrans,
		pB = [-50,86.6025,0] * norTrans,
		pC = [-50,-86.6025,0] * norTrans,
		nABC=normalize (cross (pB-pA) (pC-pA))
		pD+((dot (pA-pD) nABC)*nABC)
	)
	
	local
	m = snapshotasmesh n,
	count = getNumVerts m,
	center = n.center,
	verctorY = normalize(in coordsys world (getVert m ((getVertSelection m)as array)[1]) - center),
	
	newPrimaryAxis = point3 0 0 0,
	newSecondaryAxis = point3 0 0 0,
	
	primaryAxis = [0,0,1],
	secondaryAxis = [0,1,0]
	
	for j = 1 to i do
	(
		for vid = 1 to count do
		(
			Pos = getVert m vid
			centeredPos = Pos - center
			
			newPrimaryAxis +=  (dot primaryAxis centeredPos) * centeredPos;
			newSecondaryAxis += (dot secondaryAxis centeredPos) * centeredPos;
		)
		primaryAxis = normalize(newPrimaryAxis);
		secondaryAxis = normalize(pointPlaneProj newSecondaryAxis primaryAxis)
	)
	
	trans = (matrix3 primaryAxis secondaryAxis (normalize(cross primaryAxis secondaryAxis)) [0,0,0])
	
	rotate trans (quat (acos(dot verctorY trans[2])) trans[1]) --没必要,完全可以乘出来,但上面那个单轴的收敛总是不对....
	trans.pos = center
	
	if preview do point size:10 transform:trans
	trans
)