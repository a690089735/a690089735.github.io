fn PointTo node1 node2 Axis:1 =--node1Ö¸Ïònode2,1:x,2:y,3:z
(
	trans1 = copy node1.transform
	trans2 = node2.transform
	look = normalize(trans2.pos - trans1.pos)
	qaxis = normalize(cross look trans1[Axis])
	qangle = acos(dot trans1[Axis] look)
	trans3 = copy trans1
	trans3[4] = [0,0,0]
	translate (rotate trans3 (quat qangle qaxis)) trans1.pos
	node1.transform = trans3
)
PointTo $[1] $[2] Axis:1