fn BonesPro2Skin obj delBP:false = --骨骼不能有重名
(
	local
	vcount = obj.numverts,
	bpmodf = for m in obj.modifiers where iskindof m BonesPro do exit with m,
	bcount = bpmodf.num_bones(),
	boneList = for i in refs.dependson bpmodf where isvalidnode i collect i
	
	if isValidObj bpmodf then
	(
		local
		weights = (for i = 1 to vcount collect (for j = 1 to bcount collect bpmodf.get_weight j i)),
		skinmodf = skin()
		select obj;addmodifier obj skinmodf
		for i in boneList do skinOps.addbone skinmodf i 0
		bidlist = for i = 1 to bcount collect i
		completeRedraw() --必须刷新才能让顶点数更新,否则修改器的顶点数一直是0
		for i = 1 to vcount do skinOps.SetVertexWeights skinmodf i bidlist weights[i]
		if delBP then deletemodifier obj bpmodf else bpmodf.enabled = false
	)else messagebox "物体未发现BP修改器."
)
BonesPro2Skin (getcurrentselection())[1]
-- $.modifiers[1]
-- refs.dependson $.modifiers[1]

-- for i in refs.dependson sk where isvalidnode i collect i
-- 	
-- $.numverts