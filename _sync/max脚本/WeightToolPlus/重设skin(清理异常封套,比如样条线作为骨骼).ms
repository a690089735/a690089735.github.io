fn reFreshingSkinFrame n sk= --复制骨骼,骨骼权重
(
	setCommandPanelTaskMode #create
	local 
	skin_bones = for i in refs.dependson sk where isvalidnode i collect i,
	base_object = for b in skin_bones collect b.baseobject,
	skin_weights = for vid = 1 to skinops.getnumbervertices sk collect
	(
		local weights_count = skinOps.GetVertexWeightCount sk vid
		
		#(for i = 1 to weights_count collect (skinOps.GetVertexWeightBoneID sk vid i),
		weights_list = for i = 1 to weights_count collect (skinOps.GetVertexWeight sk vid i))
	) 
-- 	print skin_weights[2853]
	
	deleteModifier $ 1
	local temp_dummy = dummy boxsize:[0.1,0.1,0.1],temp_baseobject = temp_dummy.baseobject
	for b in skin_bones do b.baseobject = temp_baseobject
	
	select $
	local nsk = skin()
	addmodifier $ nsk
	setCommandPanelTaskMode #modify
	modPanel.setCurrentObject nsk
	for b in skin_bones do skinOps.addbone nsk b 11
	
	classof $
	
	for vid = 1 to skinops.getnumbervertices nsk do skinOps.ReplaceVertexWeights nsk vid skin_weights[vid][1] skin_weights[vid][2]
	
-- 	with printAllElements on(print skin_weights #nomap)
-- 	1.按顺序复制骨骼
-- 	2.复制骨骼权重
-- 	3.删除skin,骨骼都替换为dummy,添加skin
-- 	4.设置Skin
-- 	5.还原基本体.但多个物体的话这样会非常复杂,这里暂时未做,手动有选择的运行上述代码并导出封套文件.
)
reFreshingSkinFrame $ $.skin