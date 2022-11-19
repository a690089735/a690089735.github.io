fn smoothSelectedWeigth obj:$ sk:$.skin = 
undo "Smooth Weight" on(
	--快照物体
	local
	m = snapshotasmesh obj,
	bonescount = skinOps.GetNumberBones sk,
	--从sk获取要被计算的点
	selectedSkinVerts = for i = 1 to m.numverts where (skinOps.isVertexSelected sk i) == 1 collect i,
	effectVerts = #{}, --所有相关的点.是个bitarray,自带排序,性能也更好.
	weights
	--从快照物体按获取的点获取所有需要的点.
	for id in selectedSkinVerts do effectVerts += (meshop.getVertsUsingFace m (meshop.getPolysUsingVert m id)) --自带排序,唯一化
	
	weights = for id in effectVerts collect for i = 1 to bonescount collect try(skinOps.GetVertexWeight sk id i)catch(0.0)
		
	--储存所有相关的点的权重#(#(id,id),#(weight,weight)),记录时如果对应ID顶点已存在,则不再添加ID和权重.
	effectVerts = effectVerts as array
	vid = 0
	weight = for i = 1 to bonescount collect 0 --0权重
	boneList = for i = 1 to bonescount collect i
	for vid in selectedSkinVerts do
	(
		--计算权重
-- 		print (meshop.getVertsUsingFace m (meshop.getPolysUsingVert m vid))
		Vweights = for i in (meshop.getVertsUsingFace m (meshop.getPolysUsingVert m vid)) - #{vid} collect weights[finditem effectVerts i]
		VweightsCount = Vweights.count --as float
		Vweight = Copy weight #nomap --空的权重值
		for vw in Vweights do for i = 1 to bonescount do (Vweight[i] += (vw[i] / VweightsCount))
		--设置权重
		skinOps.SetVertexWeights sk vid boneList Vweight
	)
	--从获取的顶点权重记录中,逐个均化选中点的权重,并设置
	
	--调试
-- 	print effectVerts
-- 	print weights
)