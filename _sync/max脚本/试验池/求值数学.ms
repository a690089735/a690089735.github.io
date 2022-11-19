--基本数学
fn 求缩放后的数值 变值:0.5 基值:0 缩放倍率:0.8 = --缩放倍率应当是1比例
(
	变值 + (基值-变值) * (1 - 缩放倍率)
)
-- 求缩放后的数值 变值:31.9641 基值:100 缩放倍率:0.774907

-- curveLength $ 1 --求曲线长度

fn 求缩放后的数值2 变值:0.5 基值:0 缩放倍率:0.8 = --缩放倍率可以是任意数,支持负缩放
(
	(变值 - 基值) * 缩放倍率 + 基值
)
求缩放后的数值2 变值:200 基值:100 缩放倍率:2


--向量数学
--求线与线的交点
fn lineLineIntersect pA pB pC pD preview:true = ( --线段1的起点,线段1的终点,线段2的起点,线段2的终点,里面再求相对矢量
	local
	a=pB-pA, --向量1
	b=pD-pC, --向量2
	c=pC-pA,
	cross1 = cross a b,
	cross2 = cross c b,
	result = pA + (a*((dot cross2 cross1)/((length cross1)^2)))
	if preview do point pos:result
	result
)
-- lineLineIntersect $[1].transform.pos ($[1].transform[1]+$[1].transform.pos) $[2].transform.pos ($[2].transform[1]+$[2].transform.pos)
lineLineIntersect $[1].transform.pos $[2].transform.pos $[3].transform.pos $[4].transform.pos

-- 线与平面的交点
fn planelineintersect c n a v= --planelineintersect <plane_point> <plane_normal> <line_point> <line_vector>
(
b=a+v
r=a+(dot (c-a) n) / (dot (b-a) n)*(b-a)
)

--点C到线的投影
fn pointLineProj pA pB pC = ( --求点C在直线AB上的投影
	local vAB=pB-pA
	local vAC=pC-pA
	local d=dot (normalize vAB) (normalize vAC)
	(pA+(vAB*(d*(length vAC/length vAB))))
)
--点C到直线的距离
fn pointLineDist2 pA pB pC = (
	local vAB=pB-pA
	local vAC=pC-pA
	(length (cross vAB vAC))/(length vAB)
)
--或者
-- d=distance pC (pointLineProj pA pB pC)


--求点p到平面的投影
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
-- get_p2f_footpos a b c p

-- 点D的平面投影
fn pointPlaneProj pA pB pC pD = --结果同上但是更简洁
(
	local nABC=normalize (cross (pB-pA) (pC-pA))
	pD+((dot (pA-pD) nABC)*nABC)
)
-- point pos:(pointPlaneProj $[1].pos $[2].pos $[3].pos $[4].pos) wirecolor:yellow
--点D的平面投影,
fn pointPlaneProj pD nor = --从法线构造平面
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

--点线包含：这个点在线上吗？
fn isPointLine pA pB pC tol = (
	local vAB=pB-pA
	local vAC=pC-pA
	local d=1.0-abs(dot (normalize vAB) (normalize vAC))
	if d<=tol then true else false
	)
fn lineLineIntersect pA a pB b = ( --或者使用向量
	local c=pB-pA
	local cross1 = cross a b
	local cross2 = cross c b
	pA + ( a*( (dot cross2 cross1)/((length cross1)^2) ) )
	)
	
-- Line-Line Distance：两条斜线之间的距离
fn lineLineDist pA a pB b = (
	local c=pB-pA
	local crossAB=cross a b
	abs (dot c crossAB) / (length crossAB)
	)
	
--Line-Line Angle：两条线之间的角度：
fn getVectorsAngle vAB vCD = (
	acos (dot (normalize vAB) (normalize vCD))
	)
	
-- Point-Plane Distance：求平面与点之间的距离
fn pointPlaneDist pA pB pC pD = (
	local nABC=normalize (cross (pB-pA) (pC-pA))
	length ((dot (pA-pD) nABC)*nABC)
	)
	
-- Plane-Plane Intersection : 找到 2 个平面的交点
-- p1 : 平面 1 的一点
-- n1 : 平面 1 的法线
	-- 我认为这不是最简单的解决方案。如果您知道更好的方法……
fn planePlaneIntersect p1 n1 p2 n2 = (
	-- n1, n2 are normalized
	local lineVector = cross n1 n2
	local proj1=(dot n1 p1)*n1
	local proj2=(dot n2 p2)*n2
	local perp1=cross n1 (normalize lineVector)
	local perp2=cross n2 (normalize lineVector)
	local cr = cross (proj2-proj1) perp2
	local intersectionPoint = proj1 + (perp1*( (dot cr lineVector) / ((length lineVector)^2)) )
	ray intersectionPoint lineVector
	)
-- 这是计算 2 个平面的交点的函数的改进：
-- pA, nA : 第一个平面，其中 p 是一个点，n 是平面的法线
-- pB, nB : 第二个平面
-- 	这没有在代码中检查，但如果 dir=[0,0,0] 那么平面是平行的……
fn PlanePlaneIntersection pA nA pB nB =
(
    dir= cross nA nB
    perp= cross nA dir
    p= pA + (dot (pB-pA) nB) * perp / (dot perp nB)
    ray p (normalize dir)
)
	
	
-- Plane-Plane Angle : 求两个平面 n1 和 n2 之间的角度（法线）
fn getVectorsAngle n1 n2 = ( acos (dot (normalize n1) (normalize n2)) )
	
-- 此脚本会发现一条线是否与球体相交。
-- 它返回真或假。
fn lineSphereIntersection sphereCenter sphereRadius linePoint lineVector = (
	local nLineVector= normalize lineVector
	local projPoint=linePoint+((dot (sphereCenter-linePoint) nLineVector)*nLineVector)
	local dist=distance sphereCenter projPoint
	if dist>sphereRadius then false else true
	)
	
-- 这是一个计算 3 个平面相交的函数。
-- 目前，这只是一个平面-平面交叉点，然后是一个线-平面交叉点，但我认为应该存在一种更短的计算方法。
fn PPPIntersection pA nA pB nB pC nC =
(
    vD= cross nA nB
    perp= cross nA vD
    pD= pA + (dot (pB-pA) nB) * perp / (dot perp nB)
    pD + (dot (pC-pD) nC)*vD / (dot vD nC)
)
	
--三角数学
/* --据三个点求圆心
--取世界坐标
gp1=$Point001.pos
gp2=$Point002.pos
gp3=$Point003.pos


-- 创建计算空间(限制计算平面,XY朝向哪里其实无所谓)
v1=gp1-gp2
v2=gp3-gp2
z = normalize(cross v1 v2)
gz=[0,0,1]
x = if dot z gz > 0 then normalize(cross z gz) else [1,0,0]
y = normalize(cross z x)
space = (matrix3 x y z gp2)
point transform:space

--求出两个中点
p1=gp1 * inverse space
p2=[0,0,0]
p3=gp3 * inverse space

m1 = (p1+p2)*0.5
m2 = (p3+p2)*0.5

--利用cross
vl1 = --求垂线1
vl2 --求垂线1

--求两垂线的焦点即是圆心坐标(相对于space),然后再回到世界坐标(乘space)

-- length [1,1,1]

*/ --暂时搁置,因为有了简洁方案,其实是在求一种叫三角形外心的东西.

--求三角形外心(据三个点求圆心)
--求三角形外心(据三个点求圆心)
fn circumcenter2sphere p1 p2 p3 = --兼容节点
(
	if isvalidnode p1 do p1 = p1.pos
	if isvalidnode p2 do p2 = p2.pos
	if isvalidnode p3 do p3 = p3.pos
		
	BC = distance p2 p3
	CA = distance p3 p1
	AB = distance p1 p2

	baryCoords = [ (BC^2*(CA^2+AB^2-BC^2)), (CA^2*(AB^2+BC^2-CA^2)), (AB^2*(BC^2+CA^2-AB^2)) ]
	triArea = baryCoords.x + baryCoords.y + baryCoords.z
	baryCoords /= triArea -- normalize the barycentric coordinates
	-- substitute in for P = uA + vB + wC
	center=(baryCoords.x * p1 + baryCoords.y * p2 + baryCoords.z * p3)
	sphere pos:center radius:(distance center p1) dir:(normalize(cross (p1-p2) (p3-p2)))--半径其实就是外心到三点其中一点的距离.
)
-- circumcenter2sphere $Point001.pos $Point002.pos $Point003.pos 
-- circumcenter2sphere $[1] $[2] $[3].pos
-- circumcenter2sphere $.selectedverts[1].pos $.selectedverts[2].pos $.selectedverts[3].pos

--三角数学
fn 已知三边长_求任意角度 a b c quest:"A" = --默认求角A 即 a的对边
(
	case quest of
	(
		"A": acos((b^2+c^2-a^2)/(2*b*c)) --角A
		"B": acos((a^2+c^2-b^2)/(2*a*c)) --角B
		"C": acos((a^2+b^2-c^2)/(2*a*b)) --角C
	)
)
	
fn 已知两边和夹角_求第三边 a b C =
(--原理:勾股定理(任意三角形勾股定理)
	sqrt(a^2 + b^2 - 2*a*b*cos C) --边c
)

fn 已知两边和夹角_求另外两角 a b C =
(--原理:a/sinA = b/sinB = c/sinC,即正弦定理
	local
	ratio = sqrt(a^2 + b^2 - 2*a*b*cos C)/sin C --比例=边c/sin角C
	[asin(a/ratio),asin(b/ratio)] --角A和角B
)


-- SDK 的PFActions_GlobalFunctions.cpp中有一些非常有用的函数可以在 maxsdk\samples\ParticleFlow\Actions 中找到。
-- 一些功能包括……
-- float MeshVolume(Mesh* mesh);
-- bool IsPointInsideMesh(Mesh* mesh, Point3 p);
-- bool ClosestPointOnMesh(const Point3& toPoint, Mesh* mesh, Point3& worldLocation, Point2& localCoords, int& faceIndex, float& dist2);


-- 衰减函数
fn GetCurveValue2 t exp1:3.0=
(
	t = (((t+0.000005)*100000) as integer) * 0.00001 --max底层在计算时会将接近0的数的幂算为无限小引发错误.这里四舍五入限制一下精度.飘带脚本的问题应该也是如此.
	if t <= 0.5 then
		0.5 * (pow (t*2.0) exp1)
	else
		1 - GetCurveValue (1-t) exp1:exp1
)
-- for i = 0 to 1 by 0.1 do print(GetCurveValue2 i exp1:6)
-- delete objects
-- for i = 0 to 1 by 0.1 do (point pos:[i,0,(GetCurveValue2 i exp1:1.5)] size:0.1) --11次
--半衰减函数
fn GetCurveValue1 t exp1:3.0=
(
	t = (((t+0.000005)*100000) as integer) * 0.00001 --max底层在计算时会将接近0的数的幂算为无限小引发错误.这里四舍五入限制一下精度.飘带脚本的问题应该也是如此.
	pow t exp1
)
-- for i = 0 to 1 by 0.1 do print(GetCurveValue1 i exp1:6)
-- delete objects
-- for i = 0 to 1 by 0.1 do (point pos:[i,0,(GetCurveValue1 i exp1:2)] size:0.1) --11次