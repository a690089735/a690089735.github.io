/* 选中模型
* 点击辅助
* 
* 原地复制一个模型(包括skin信息)
* 记录这个模型的骨骼名(没skin就提示),权重(文件),skin初始矩阵(文件),父物体名称
* 清除修改器,清除父物体
* 节点式保存这个复制的模型
* 删除原地复制的模型
* 
* 
* 粘贴前选中所有骨骼,名称均在选中项中过滤.*/

fn sort_by_hierarchy obj_list:(getcurrentselection()) split:false = 
(
	local sorted_obj_list = for o in $objects/* as array where findItem obj_list o > 0 collect o
	if split do
	(
		local id_list = for i = 1 to sorted_obj_list.count where findItem sorted_obj_list sorted_obj_list[i].parent == 0 collect i;append id_list (sorted_obj_list.count+1)
		sorted_obj_list = for i = 1 to id_list.count-1 collect for j = id_list[i] to (id_list[i+1]-1) collect sorted_obj_list[j]
	)
	sorted_obj_list
)
/* 	 */
fn GetBoneNodes sk = for i in refs.dependson sk where isvalidnode i collect i
fn SaveEnv obj sk dir = 
(
	select obj
	modPanel.setCurrentObject obj.modifiers[#Skin]
	UIAccessor.PressDefaultButton()
	skinOps.saveEnvelope sk (dir + "\\" + obj.name + ".env")
	classof obj
)


fn copy_skinMesh objs:(sort_by_hierarchy obj_list:(getCurrentSelection())) = 
(
	setCommandPanelTaskMode #modify
	
	local
	bufferDir = getdir #temp + "\skinMeshData",
	finish = makeDir bufferDir all:true,
	nodes = for o in objs collect (n = copy o;n.name = o.name;n),
	names = for o in objs collect o.name,
	parents = for o in objs collect if isValidNode o.parent then o.parent.name else "",
	relTransforms = for o in objs collect if isValidNode o.parent then o.transform * Inverse o.parent.transform else o.transform,
	skins = for o in objs collect for m in o.modifiers where classof m == skin do exit with (SaveEnv o m bufferDir;m),--顺便保存了封套
	bonenames = for sk in skins collect for b in GetBoneNodes sk collect b.name,
	skbones = for sk in skins collect for b in GetBoneNodes sk collect b,
	BoneBindTMs = for i = 1 to nodes.count collect for b in skbones[i] collect skinUtils.GetBoneBindTM nodes[i] b
-- 	for o in objs do
-- 	(
-- 		sk = for m in o.modifiers where classof m == skin do exit with m
-- 		SaveEnv o sk bufferDir
-- 	)
	save_file = createfile (bufferDir+@"\data.txt")
	format "%" #(names,parents,relTransforms,bonenames,BoneBindTMs) to:save_file
	close save_file

	for o in nodes do
	(
		o.parent = undefined
		for i = o.modifiers.count to 1 do deleteModifier o i
	)
	
	saveNodes nodes (bufferDir+@"\data.max") quiet:true
	
	print #("---copy",nodes,names,parents,relTransforms,bonenames,BoneBindTMs)
	
	delete nodes
	
-- 	skins = for o in objs collect for m in o.modifiers where classof m == skin do exit with m,
-- 	bnames = for sk in skins collect for b in GetBoneNodes sk collect b.name
)

fn paste_skinMesh range:(sort_by_hierarchy obj_list:(getCurrentSelection())) = 
(
	local
	bufferDir = getdir #temp + "\skinMeshData",
	load_file = openFile (bufferDir+@"\data.txt"),
	data = readValue load_file,
	nodes,
	names = data[1],
	parents = for pname in data[2] collect if pname == "" then undefined else for o in range where o.name == pnam do exit with o,
	relTransforms = data[3],
	skbones = for d in data[4] collect for bnam in d collect for o in range where o.name == bnam do exit with o
	BoneBindTMs = data[5]
	
	close load_file
	
	mergeMaxFile (bufferDir+@"\data.max") names #mergeDups #useMergedMtlDups #neverReparent mergedNodes:nodes -- #select #prompt
	
	
	
	print #("---paste",nodes,names,parents,relTransforms,skbones)
	
	clearselection() --导入前清理选择
-- 	skinUtils.ImportSkinDataNoDialog true false false false false 0.001 0 
)