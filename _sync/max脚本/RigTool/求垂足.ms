--求点到直线的垂足(可能在线段外)
-- fn foot_point pList:#([0,0],[1,1],[0.5,2]) = --1,start.2,end.3,point
-- (
-- 	--精度,判断值
-- 	local f = 0.000001
-- 	--返回值
-- 	local retVal = [0,0,0]
-- 	
-- 	--各轴距离,世界坐标系
-- 	local begin = pList[1],end = pList[2],pt = pList[3]
-- 	dx = begin.x - end .x
--     dy = begin.y - end .y
-- 	dz = begin.z - end .z
-- 	
-- 	--如果两个点距离过近,线段长度过小.则自身即垂足,这部分其实可以用distance代替
-- 	if abs(dx) < f and abs(dy) < f and abs(dz) < f do
--     (
--         retVal = begin;
--         return retVal;
--     )
-- 	
-- 	--计算并返回,不懂原理,日后研究
-- 	u = (pt.x - begin.x)*(begin.x - end.x) + (pt.y - begin.y)*(begin.y - end.y) + (pt.z - begin.z)*(begin.z - end.z);
--     u = u/((dx*dx)+(dy*dy)+(dz*dz));
--  
--     retVal.x = begin.x + u*dx;
--     retVal.y = begin.y + u*dy;
-- 	retVal.z = begin.z + u*dz;
-- 　　
--     return retVal;
-- 	
-- )
-- point pos:(foot_point pList:#($[1].pos,$[3].pos,$[2].pos)) isSelected:on 

fn foot_point pList:#([0,0],[1,1],[0.5,2]) f:0.000001 = --1,start.2,end.3,point 优化 --精度,判断值f
(
	--各轴距离,世界坐标系
	local begin = pList[1],end = pList[2],pt = pList[3]
	d = begin - end
	
	--如果两个点距离过近,线段长度过小.则自身即垂足,这部分其实可以用distance代替
	if (distance begin end) < f do return begin
	
	--计算并返回,不懂原理,日后研究,大概是和勾股定理相关
	u = (pt.x - begin.x)*(d.x) + (pt.y - begin.y)*(d.y) + (pt.z - begin.z)*(d.z)
    u = u/(d.x^2+d.y^2+d.z^2)
    return [begin.x + u*d.x,begin.y + u*d.y,begin.z + u*d.z]
	
)
point pos:(foot_point pList:#($[1].pos,$[3].pos,$[2].pos)) isSelected:on 