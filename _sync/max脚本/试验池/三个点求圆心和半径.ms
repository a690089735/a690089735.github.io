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