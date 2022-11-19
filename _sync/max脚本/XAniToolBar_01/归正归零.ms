undo "น้ีýน้มใ" on
(
	for i in selection do
	(
		local otrans = i.transform,opos = otrans[4],
		deg = amax #(acos(dot otrans[3] [0,0,1]), 0),
		axis = normalize(cross otrans[3] [0,0,1]),
		ntrans = rotate (Matrix3 otrans[1] otrans[2] otrans[3] [0,0,0]) (quat -deg axis)
		ntrans[4] = [opos[1],opos[2],0]
		i.transform = ntrans
	)
)
-- DegToRad
-- radToDeg