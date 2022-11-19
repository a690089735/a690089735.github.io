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

fn pointLineProj pA pB pC = ( --求点C在直线AB上的投影
	local vAB=pB-pA
	local vAC=pC-pA
	local d=dot (normalize vAB) (normalize vAC)
	(pA+(vAB*(d*(length vAC/length vAB))))
)

fn planelineintersect c n a v= -- 线与平面的交点 planelineintersect <plane_point> <plane_normal> <line_point> <line_vector>
(
b=a+v
r=a+(dot (c-a) n) / (dot (b-a) n)*(b-a)
)

fn GetPos msg intRay obj faceNumber shift ctrl alt =
(
	local
	mpos = (local p = mouse.Pos;[p[1],p[2],0]), --鼠标位置,转为屏幕空间的point3数据
	result = case msg of
	(
		#freeMove:--悬停移动(未按下)
		(
			--显示笔刷(可不做)
			#continue
		)
		#mouseMove:--鼠标按住移动
		(
			#continue
		)
		#mousePoint:--鼠标点击(按下到抬起结束,可视为一套绘制的结尾)
		(
-- 			point pos:(gw.mapCPToWorld (gw.getPointOnCP mouse.pos))
			射线 = (mapScreenToWorldRay mouse.pos)
-- 			point pos:射线.pos dir:射线.dir
			
			point pos:(pointLineProj (mapScreenToWorldRay mouse.pos).pos (gw.mapCPToWorld (gw.getPointOnCP mouse.pos)) [0,0,0]) --这个结果带有透视效果,在视图会有弧度.
			
-- 			point pos:(planelineintersect [0,0,0] (inverseHighPrecision (viewport.getTM()))[3] 射线.pos 射线.dir) --用线和面的交点,可以消除透视弯曲
-- 				point pos:(planelineintersect [0,0,0] 射线.dir 射线.pos 射线.dir) --用线和面的交点,可以消除透视弯曲
-- 			point pos:(mapScreenToView mouse.pos (getScreenScaleFactor [mouse.pos[1],mouse.pos[2],0]))
-- 			缩放倍率 = getScreenScaleFactor [mouse.pos[1],mouse.pos[2],0]
-- 			视图平面变换 = inverseHighPrecision (viewport.getTM())
-- 			参考平面变换 = matrix3 视图平面变换[1] 视图平面变换[2] 视图平面变换[3] [0,0,0] --注意,有透视的时候画的也有透视
-- 			栅格投影位置 = (gw.mapCPToWorld (gw.getPointOnCP mouse.pos))
				
-- 			point pos:(pointPlaneProj 栅格投影位置 视图平面变换[3])
			
			#continue
		)
		#mouseAbort:--取消(右键点击)
		(
			undefined
		)
	)
	result 
)

mousetrack trackCallback:GetPos --会阻断后续的东西.