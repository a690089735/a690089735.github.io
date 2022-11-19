--贝塞尔测试

delete helpers

--公式 
--B(t) = (1-t)^3*P0 + 3(1-t)^2t*P1 + 3(1-t)*t^2*P2 + t^3 * P3 , 0 <= t <= 1

P0 = $P0.pos; P1 = $P1.pos; P2 = $P2.pos; P3 = $P3.pos

PP = $PP --用于储存所有的向量,object,point3脚本

fn clean_ca x =
(
-- first we count up and display
	z=1
	c=1  
	while z !=undefined do
	(
		z = custattributes.getdef x c
		if z != undefined then
		(
			format "% %\n" z.name (custattributes.getdefdata z)
			c=c+1
		)
	)
-- then we count down and delete the ones that are undefined 
	while (c!=0) do
	(
		z = custattributes.getdef x c
		if z != undefined then
		(
			if  (custattributes.getdefdata z)==undefined then
			(
				custAttributes.delete x z
			)
		)
		c=c-1
	)
)


undo on(
	PointsCA = attributes PointsCA
	(
		Parameters PointArray
		(	
			Points type:#maxObjectTab tabsize:0 tabSizeVariable:true
		)
	)
	clean_ca PP
	Custattributes.add PP PointsCA
	PP.points = for t = 1 to 0 by -0.1 collect
	(
		rt = 1-t
		ctrl = point3_script()
		ctrl.AddNode "P0" $P0; ctrl.AddNode "P1" $P1; ctrl.AddNode "P2" $P2; ctrl.AddNode "P3" $P3
		ctrl.script = rt as string + "^3*P0.pos + 3*"+rt as string+"^2*"+t as string+"*P1.pos + 3*"+rt as string+"*"+t as string+"^2*P2.pos + "+t as string+"^3*P3.pos"
	)
-- 	plist = for t = 1 to 0 by -0.1 collect
-- 	(
-- 		rt = 1-t
-- 		p = point pos:(rt^3*P0 + 3*rt^2*t*P1 + 3*rt*t^2*P2 + t^3*P3) parent:$P1
-- 		ctrl = p[3].controller = transform_script()
-- 		ctrl.AddNode "P0" $P0; ctrl.AddNode "P1" $P1; ctrl.AddNode "P2" $P2; ctrl.AddNode "P3" $P3
-- 		ctrl.script = "PathPoint = (" + rt as string + "^3*P0.pos + 3*"+rt as string+"^2*"+t as string+"*P1.pos + 3*"+rt as string+"*"+t as string+"^2*P2.pos + "+t as string+"^3*P3.pos)
-- 		row4 = PathPoint * inverse P1.transform
-- 		matrix3 [1,0,0] [0,1,0] [0,0,1] row4
-- 		"
-- 		p
-- 	)
-- 	space = $P1
-- 	for i = 1 to plist.count-1 do
-- 	(
-- 		p = plist[i]
-- 		ctrl = p[3].controller
-- 		ctrl.AddNode "Space" space; ctrl.AddNode "Target" plist[i+1]
-- 		space = p
		
-- 		ctrl.script += "
-- 		theTargetVector=(Target.transform.position - PathPoint) * inverse Space.transform
-- theAxis=Normalize (cross theTargetVector [1,0,0])
-- theAngle=acos (dot (Normalize theTargetVector) [1,0,0])
-- translate ((Quat theAngle theAxis) as matrix3) row4 "
		
	)
)
