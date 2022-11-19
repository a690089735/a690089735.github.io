fn HideLongestEdges meshObj = 
(
	local
		faceSel = getFaceSelection meshObj,
		faceSel = faceSel as array,
		edgesArr = #()
	for theFace in faceSel do
	(
		edgesFromFace = (meshop.getEdgesUsingFace meshObj theFace) as array
		
		distance_List = for i = 1 to 3 collect
		(
			vertsFromEdges = (meshop.getVertsUsingEdge meshObj edgesFromFace[i]) as array
			vert1 = meshOp.getVert meshObj vertsFromEdges[1]
			vert2 = meshOp.getVert meshObj vertsFromEdges[2]
			distance vert1 vert2
		)
		
		edge_number = finditem distance_List (amax distance_List)
				
		setEdgeVis meshObj theFace edge_number false
	)
	update meshObj
)