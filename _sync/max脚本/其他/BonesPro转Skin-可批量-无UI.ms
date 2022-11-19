fn BonesPro2Skin obj delBP:false = --骨骼不能有重名
(
	local bpmodf = for m in obj.modifiers where iskindof m BonesPro do exit with m,
	bcount = bpmodf.num_bones(), boneList = for i = 1 to bcount collect getnodebyname(bpmodf.get_bone_name i),
	vcount = getNumVerts(snapshotasmesh obj)
	if bpmodf != ok then
	(
		local weights = (for i = 1 to vcount collect (for j = 1 to bcount collect bpmodf.get_weight j i))
		select obj;addmodifier obj (skin())
		local skinmodf = obj.modifiers[1]
		for i in boneList do skinOps.addbone skinmodf i 0
		bidlist = for i = 1 to bcount collect i
		completeRedraw() --必须刷新才能让顶点数更新,否则修改器的顶点数一直是0
		for i = 1 to vcount do skinOps.SetVertexWeights skinmodf i bidlist weights[i]
		if delBP then deletemodifier obj bpmodf else bpmodf.enabled = false
	)else messagebox "物体未发现BP修改器."
)
setCommandPanelTaskMode mode:#modify
for o in (selection as array) do BonesPro2Skin o
-- BonesPro2Skin $ delBP:true
-- gc light:true

fn deleteBonesPro obj = for i = obj.modifiers.count to 1 by -1 where iskindof obj.modifiers[i] BonesPro do deletemodifier obj i --删除物体的所有BonesPro修改器
for o in (selection as array) do deleteBonesPro o

fn AssignBonesPro list = --将列表中的物体都作为最后一个物体的骨骼,添加BonesPro修改器
(
	modf = BonesPro()
	addmodifier list[list.count] modf
	modf.assign_bones (for i = 1 to (list.count-1) collect list[i])
-- 	modf.use_oscillation = on
)
AssignBonesPro (selection as array)