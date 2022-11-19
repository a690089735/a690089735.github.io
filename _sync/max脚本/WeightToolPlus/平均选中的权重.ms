fn normalize_weight weights =
(
	local
	count = weights.count,
	total = 0,
	other = 0
	
	for w in weights do total += w
	for i = 1 to count do ---1
	(
-- 		local val = weights[i] / total
-- 		weights[i] = val
-- 		other += valweights[i] = val
		weights[i] = weights[i] / total
	)
-- 	weights[count] = 1-other
	weights
)

fn selected_vertices_weight_equalization sk:$.skin =
(
	undo "weights equalization" on (skinOps.bakeSelectedVerts sk)
	local
	vertices = (for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i) as bitarray,
	bones_list = #(),
	weights_list = #()
	
	for vid in vertices do
	(
-- 		for i = 1 to (skinOps.GetVertexWeightCount sk _lastVertex) collect (skinOps.GetVertexWeightBoneID sk _lastVertex i) --»ñÈ¡¶¥µã¹Ç÷Àid
		for wid = 1 to skinOps.GetVertexWeightCount sk vid do 
		(
			local
			bid = skinOps.GetVertexWeightBoneID sk vid wid
			listid = findItem bones_list bid
			if listid == 0 then
			(
				append bones_list bid
				append weights_list (skinOps.GetVertexWeight sk vid wid)
			)
			else
				weights_list[listid] += skinOps.GetVertexWeight sk vid wid
		)
	)
	
	weights_list = normalize_weight weights_list
	for vid in vertices do
	(
		skinOps.ReplaceVertexWeights sk vid bones_list weights_list
	)		
)
selected_vertices_weight_equalization()