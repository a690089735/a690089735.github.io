fn 拟合枢轴1_拟合方向 n i:20 preview:true = --节点,迭代次数(不断接近)10的效果相当好.
(
	local
	m = snapshotasmesh n,
	count = getNumVerts m,
	center = n.center,
	
	nextDirection = point3 0 0 0,
	direction = point3 0 0 1
	
	for j = 1 to i do
	(
		for vid = 1 to count do
		(
			Pos = getVert m vid
			centeredPos = Pos - center
			nextDirection += (dot centeredPos direction) * Pos;
		)
		direction = normalize(nextDirection)
	)
	if preview do
	(
		local ss = SplineShape pos:center
		addNewSpline ss
		addKnot ss 1 #corner #line center
		addKnot ss 1 #corner #line (direction + center)
		updateShape ss
	)
	direction
)

fn 拟合枢轴2_拟合平面 n i:20 preview:true = --节点,迭代次数(不断接近)10的效果相当好.
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
	
	trans = (matrix3 primaryAxis secondaryAxis (normalize(cross primaryAxis secondaryAxis)) center)
	
	if preview do
	(
-- 		local ss = SplineShape pos:center
-- 		addNewSpline ss
-- 		addKnot ss 1 #corner #line center
-- 		addKnot ss 1 #corner #line (direction + center)
-- 		updateShape ss
		point size:10 transform:trans
	)
	
	
-- 	for (int iter = 0; iter < iters; iter++) {
--   newPrimaryAxis = Vector3.zero, newSecondaryAxis = Vector3.zero;
--   foreach(point in points) {
--     point = worldSpacePoint - origin;
--     newPrimaryAxis += dot(primaryAxis, point) * point;
--     newSecondaryAxis += dot(secondaryAxis, point) * point;
--   }
--   primaryAxis = newPrimaryAxis.normalized;
--   secondaryAxis = projectOnPlane(newSecondaryAxis, 
--                                  primaryAxis).normalized;
-- }
-- normal = cross(primaryAxis, secondaryAxis).normalized;
)