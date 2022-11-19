fn weightsBlocking n sk:n.skin =
undo "weights Blocking" on(
-- 	获取选择的顶点
	local 
	selectedVertices = (for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i) as bitarray,
	divisor = selectedVertices.numberset,
	bonesList = #(),
	weightsList = #()
-- 	将每个顶点的权重除以顶点数量加入到集合中,
	for vid in selectedVertices do
	(
		for i = 1 to skinOps.GetVertexWeightCount sk vid do 
		(
			local
			bid = skinOps.GetVertexWeightBoneID sk vid i,
			wt = skinOps.GetVertexWeight sk vid i,
			wid = finditem bonesList bid
			
			if wid > 0 then --骨骼在列表中
			(
				weightsList[wid] += (wt/divisor)
				
			)else --骨骼不在列表中
			(
				append bonesList bid
				append weightsList (wt/divisor)
			)
-- 					print #(divisor,e_Bones,e_Weigths , "-----") #nomap
		)
	)
	for vid in selectedVertices do skinOps.ReplaceVertexWeights sk vid bonesList weightsList
)

weightsBlocking $ sk:$.skin