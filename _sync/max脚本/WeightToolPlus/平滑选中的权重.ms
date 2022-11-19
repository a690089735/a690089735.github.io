fn smoothSelectedWeigth obj:$ sk:$.skin = --根据距离加权(现在的距离加权也有问题,应该用标准蒙皮姿势加权(先关闭skin))
(
	undo "Smooth Weight" on skinOps.bakeSelectedVerts sk
	undo off(
	--快照物体
	local
	m = snapshotasmesh obj,
	bonescount = skinOps.GetNumberBones sk,
	--从sk获取要被计算的点
	selectedSkinVerts = for i = 1 to m.numverts where skinOps.isVertexSelected sk i collect i,
	effectVerts = (meshop.getVertsUsingFace m (meshop.getPolysUsingVert m selectedSkinVerts)) as array, --所有相关的点.是个bitarray,自带排序,唯一化,性能也更好. 按照面取点的话,如果是四边形会有很好的效果.
	weight = for i = 1 to bonescount collect 0, --0权重
	weights = for vid in effectVerts collect
	(
		local w = copy weight #nomap --所有需要的权重.(相对于所有骨骼的权重)
		for i = 1 to skinOps.GetVertexWeightCount sk vid do w[skinOps.GetVertexWeightBoneID sk vid i] = skinOps.GetVertexWeight sk vid i
		w
	),
	--储存所有相关的点的权重#(#(id,id),#(weight,weight)),记录时如果对应ID顶点已存在,则不再添加ID和权重.
	vid = 0,
	boneList = #{1..bonescount} as array
	
	for vid in selectedSkinVerts do
	(
		--计算权重
		local
		range_verts = (meshop.getVertsUsingFace m (meshop.getPolysUsingVert m vid)) - #{vid}, --周围点
		range_weights = for vid in range_Verts collect weights[finditem effectVerts vid], --周围权重
		range_ratios = (
			local
			cvpos = m.verts[vid].pos,
			dis_len = 0,
			pre_len = 0,
			dis_list = for rv in range_verts collect (dis = distance m.verts[rv].pos cvpos;dis_len += dis;dis),
			pre_retios = for dis in dis_list collect (dis = dis_len/dis;pre_len += dis;dis)
			for retio in pre_retios collect retio/pre_len
		), --数值越大权重越高
		current_weight = weights[finditem effectVerts vid] --自身权重
		
		range_weights_count = range_weights.count --as float
		new_weight = Copy weight #nomap --空的权重值
		for i = 1 to range_weights.count do
		(
			local
			item_weight = range_weights[i],
			ratio = range_ratios[i]
			for bid = 1 to bonescount do (new_weight[bid] += (item_weight[bid] * ratio)) --按距离乘以比例
		)
-- 		print #(range_weights,range_ratios,new_weight)
		for bid = 1 to bonescount do (new_weight[bid] = new_weight[bid] *.5 + current_weight[bid] *.5) --加一半自身
		--设置权重
		skinOps.SetVertexWeights sk vid boneList new_weight
	)
	--从获取的顶点权重记录中,逐个均化选中点的权重,并设置
	
	--调试
-- 	print effectVerts
-- 	print weights
	)
)
smoothSelectedWeigth()