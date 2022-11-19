-- a = $point001.pos
-- b = $point002.pos
-- c = $point003.pos
-- p = $point004.pos

-- --求出法向量
-- v1 = normalize(b - a)
-- v2 = normalize(c - a)

-- n = cross v1 v2

-- point pos:n

-- px = (n.x*n.y*a.y+n.y*n.y*p.x-n.x*n.y*p.y+n.x*n.z*a.z+n.z*n.z*p.x-n.x*n.z*p.z+n.x*n.x*a.x)/(n.x*n.x+n.y*n.y+n.z*n.z)

-- py = (n.y*n.z*a.z+n.z*n.z*p.y-n.y*n.z*p.z+n.y*n.x*a.x+n.x*n.x*p.y-n.x*n.y*p.x+n.y*n.y*a.y)/(n.x*n.x+n.y*n.y+n.z*n.z)

-- pz = (n.x*a.x*n.z+n.x*n.x*p.z-n.x*p.x*n.z+n.y*a.y*n.z+n.y*n.y*p.z-n.y*p.y*n.z+n.z*n.z*a.z)/(n.x*n.x+n.y*n.y+n.z*n.z)


-- point pos:[px,py,pz]

 
fn get_p2f_footpos a b c p = --提供面的三个点坐标,和投影点坐标
(
	local
	v1 = normalize(b - a),
	v2 = normalize(c - a),
	n = cross v1 v2,-- 求出法向量
	
	base = (n.x^2+n.y^2+n.z^2), --减少相同量的计算
	px = (n.x*n.y*a.y+n.y*n.y*p.x-n.x*n.y*p.y+n.x*n.z*a.z+n.z*n.z*p.x-n.x*n.z*p.z+n.x*n.x*a.x)/base,
	py = (n.y*n.z*a.z+n.z*n.z*p.y-n.y*n.z*p.z+n.y*n.x*a.x+n.x*n.x*p.y-n.x*n.y*p.x+n.y*n.y*a.y)/base,
	pz = (n.x*a.x*n.z+n.x*n.x*p.z-n.x*p.x*n.z+n.y*a.y*n.z+n.y*n.y*p.z-n.y*p.y*n.z+n.z*n.z*a.z)/base
	
	[px, py, pz]
)

get_p2f_footpos a b c p



fn pointPlaneProj pA pB pC pD = --点的平面投影,结果同上但是更简洁
(
	local nABC=normalize (cross (pB-pA) (pC-pA))
	pD+((dot (pA-pD) nABC)*nABC)
)
-- point pos:(pointPlaneProj $[1].pos $[2].pos $[3].pos $[4].pos) wirecolor:yellow

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