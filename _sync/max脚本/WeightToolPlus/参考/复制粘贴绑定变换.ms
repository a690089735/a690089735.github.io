--临时使用,在复杂的应用上可能会有一些问题.且meshTM未完成
try(DestroyDialog BindTMRollout)catch()
rollout BindTMRollout "BindTM" width:248 height:96
(
	--获取蒙皮骨骼列表[依赖]
	fn GetBoneNodes sk = for i in refs.dependson sk where isvalidnode i collect i
	--根据列表项查找列表[依赖]
	fn FindListByItem ary val id =
	(
		result = 0
		for i = 1 to ary.count where ary[i][id] == val do exit with result = i
		result
	)
	--排序物体[依赖]
-- 	fn sort_by_hierarchy obj_list:(getcurrentselection()) = for o in $objects/* as array where findItem obj_list o > 0 collect o
	--排序缓存[依赖]
	fn sort_ary_by_hierarchy ary = for o in $objects/* as array where (i = FindListByItem ary o 1) > 0 collect ary[i]
	/*  */

	button 'btn_CopyBoneBindTM' "复制绑定变换(骨骼)" pos:[8,8] width:112 height:24 align:#left
	button 'btn_CopyMeshBindTM' "复制绑定变换(网格)" pos:[8,40] width:112 height:24 align:#left
	button 'btn_PasteBoneBindTM' "粘贴" pos:[128,8] width:32 height:24 align:#left
	button 'btn_PasteMeshBindTM' "粘贴" pos:[128,40] width:32 height:24 align:#left
	edittext 'edt_state' "" pos:[8,72] width:232 height:16 align:#left
	
	local BoneBindTMs,BoneBindTMs
	
	button 'btn_ApplyToBone' "应用到骨骼" pos:[167,8] width:72 height:24 align:#left
	button 'btn_ApplyToMesh' "应用到网格" pos:[168,40] width:72 height:24 align:#left
	on btn_CopyBoneBindTM pressed do
	(
		BoneBindTMs = #()
		for obj in getCurrentSelection() do
		(
			local skinModf = for m in obj.modifiers where classOf m == skin do exit with m
			
			if isValidObj skinModf do
			(
				local boneList = GetBoneNodes skinModf
				BoneBindTMs += for bn in boneList collect #(bn,skinUtils.GetBoneBindTM obj bn)
			)
		)
		print(BoneBindTMs)
	)
	on btn_PasteBoneBindTM pressed do
	(
		local BoneBindTMs_sorted = sort_ary_by_hierarchy BoneBindTMs
		for obj in getCurrentSelection() do for BoneBindTM in BoneBindTMs_sorted do skinUtils.SetBoneBindTM obj BoneBindTM[1] BoneBindTM[2]
	)
	on btn_ApplyToBone pressed do
	(
		local BoneBindTMs_sorted = sort_ary_by_hierarchy BoneBindTMs
		for obj in getCurrentSelection() do for BoneBindTM in BoneBindTMs_sorted do BoneBindTM[1].transform = (BoneBindTM[2] * obj.transform)
	)
	--下面这些实现有问题,只对缓存中的物体有用,复制粘贴没有意义,且排序应该排序selection而不是缓存
	on btn_CopyMeshBindTM pressed do
	(
		BoneBindTMs = for obj in getCurrentSelection() collect #(obj,skinUtils.GetMeshBindTM obj)
-- 		print(BoneBindTMs)
	)
	on btn_PasteMeshBindTM pressed do
	(
		local BoneBindTMs_sorted = sort_ary_by_hierarchy BoneBindTMs
		for obj in getCurrentSelection() where (i = FindListByItem BoneBindTMs_sorted obj 1) > 0 do obj.transform = BoneBindTMs_sorted[i][2]
	)
	on btn_ApplyToMesh pressed do
	(
		local BoneBindTMs_sorted = sort_ary_by_hierarchy BoneBindTMs
		for obj in getCurrentSelection() where (i = FindListByItem BoneBindTMs_sorted obj 1) > 0 do obj.transform = BoneBindTMs_sorted[i][2]
	)
)
CreateDialog BindTMRollout

redrawViews()