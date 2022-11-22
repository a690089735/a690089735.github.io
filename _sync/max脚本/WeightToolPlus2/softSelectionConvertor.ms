try(DestroyDialog SoftSelectionConvertorRollout)catch()
rollout SoftSelectionConvertorRollout "SoftSelectionConvertor" width:368 height:256
(
	listbox 'lbx_bone_list' "Select Limiting Bone" pos:[8,8] width:240 height:16 align:#left
	button 'btn_GetBones' "Get Bones" pos:[256,8] width:104 height:24 align:#left
	button 'btn_ClearSelection' "Clear Selection" pos:[256,32] width:104 height:24 align:#left
	
	button 'btn_CopySoftSelection' "Copy Soft Selection" pos:[256,72] width:104 height:24 align:#left
	button 'btn_CopyBoneWeigths' "Copy Bone weights" pos:[256,104] width:104 height:24 align:#left
	button 'btn_PasteToBone' "Peste To Bone" pos:[256,136] width:104 height:24 align:#left
	
	local copy_buffer = #()
	--按住Ctrl限制到当前骨骼权重
	fn get_soft_weights =
	(
		/* 获取软选择权重
		兼容6种格式
		返回 #(#(vid,weight),#(vid,weight))
		未开启软选择会报错,已容错,就不加是否开启的判断了
		*/
		if (sel = getCurrentSelection()).count == 1 then(
			local
			obj = modPanel.getCurrentObject(),
			verified = case classOf obj of
			(
				Editable_mesh : true
				Edit_Mesh : true
				Mesh_Select : true
				Editable_Poly : false
				Edit_Poly : false
				Poly_Select : false
				default : return (messageBox "软选择权重 未能获取到!\n-不支持当前对象.";#())
			)
			local
			sel = sel[1],
			vcount = sel.verts.count
			try(
				if verified then
					for vid = 1 to vcount where (weight = meshop.getVDataValue sel 1 vid) > 0 collect #(vid,weight)
				else
					for vid = 1 to vcount where (weight = polyop.getVDataValue sel 1 vid) > 0 collect #(vid,weight)
			)catch(local estr = getCurrentException();messagebox ("软选择权重 未能获取到!\n" + (if estr == "-- Runtime error: Vertex data support not enabled for specified vertex data channel: 1" then "-软选择未启用." else estr));#())
		)else (messageBox "软选择权重 未能获取到!\n-需选择一个物体.";#())
	)
	fn get_skin_select_verts sk =
	(
		/* 获得skin中选择的顶点
		较高版本支持skinOps.getSelectedVertices,兼容低版本
		*/
		(try skinOps.getSelectedVertices sk catch for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i) as bitarray
	)
	fn get_vert_weights sk vid =
	(
		/* 获得一个顶点的骨骼权重
		返回 #(bone_list,weight_list)
		*/
		local bone_list = #(),weight_list = #()
		for wid = 1 to skinOps.GetVertexWeightCount sk vid do (append bone_list (skinOps.GetVertexWeightBoneID sk vid wid);append weight_list (skinOps.GetVertexWeight sk vid wid))
		#(bone_list,weight_list)
	)
	fn set_bone_weights sk weights val:1 limit4bid: = 
	(
		/* 设置当前骨骼权重
		limit4bone是一个boneid
		val可以是列表,不是列表会自动匹配成列表
		一共三级影响,1原本软权重,2软权重倍增,但最大为1(自动就限制为1了,不用手动限制),3当限制于某根骨骼为有效,则取二者较小为权重,并从限制骨骼中减去该权重
		输入 #(#(vid,weight),#(vid,weight))
		*/
		fn merge_weights_limit weights bid = --合并重复权重,不合并直接设置权重数值可能会反直觉
		(
			local new_weights = #(#(),#())
			for i = 1 to weights[1].count do if (wid = findItem new_weights[1] weights[1][i]) > 0 then new_weights[2][wid] += weights[2][i] else (append new_weights[1] weights[1][i];append new_weights[2] weights[2][i])
			new_weights
		)
		undo "Paste weights to select bone" on skinOps.bakeSelectedVerts sk
-- 		print limit4bid
		local
		bid = skinOps.GetSelectedBone sk
		
		if classof val != array do val = for i = 1 to weights.count collect val
		if bid > 0 do 
		(
			if limit4bid != unsupplied and limit4bid > 0 and limit4bid != bid then --限1制到某根骨骼;当限制骨骼为粘贴骨骼时,不限制直接粘贴
			(
				for i = 1 to weights.count do
				(
				--取顶点权重
					local
					vid = weights[i][1],
					wet = weights[i][2]*val[i], --粘贴值(纯净输入,未处理)
					vert_weight = get_vert_weights sk vid,
					wid = findItem vert_weight[1] limit4bid,
					limit_wet
-- 					print #(#(vert_weight,wid))
				--从中取顶点限制骨权重
					if wid > 0 do --这个顶点被限定骨骼覆盖
					(
				--计算新的软权重(骨骼已有权重时,取最大值,小值应当跳过,大值应当让锁定骨骼仅减少差值部分)
						if (bwid = findItem vert_weight[1] bid) > 0 then --(如果已有权重,要限制一下)
						(
							if wet > vert_weight[2][bwid] do --如果wet大于现有,则向限制并计算,否则跳过不计算
							(
								wet -= vert_weight[2][bwid]
								vert_weight[2][wid] -= wet
								append vert_weight[1] bid
								append vert_weight[2] wet
								vert_weight = merge_weights_limit vert_weight bid
							--计算权重并设置
								skinOps.ReplaceVertexWeights sk vid vert_weight[1] vert_weight[2]
							)
						)else --bid没有权重,直接计算即可
						(
							wet = amin #(wet,vert_weight[2][wid]) --应粘贴的权重,取粘贴值和限制权重的较小值(因为不能大于限制)
							vert_weight[2][wid] -= wet
							append vert_weight[1] bid
							append vert_weight[2] wet
							vert_weight = merge_weights_limit vert_weight bid
						--计算权重并设置
							skinOps.ReplaceVertexWeights sk vid vert_weight[1] vert_weight[2]
						)
					)--不被覆盖则什么也不做
				)
			)
			else --直接粘贴
			(
				for i = 1 to weights.count do skinOps.SetVertexWeights sk weights[i][1] bid (weights[i][2]*val[i])
			)
		)
	)
	fn get_bone_weights sk bid: =
	(
		/* 获得skin中的选中骨骼的对应顶点权重,格式与软选择权重互通
		依赖于get_skin_select_verts|get_vert_weights
		返回 #(#(vid,#weight),#(vid,#weight))
		*/
		if bid == unsupplied do bid = skinOps.GetSelectedBone sk
		skinOps.selectVerticesByBone sk
		for vid in (get_skin_select_verts sk) collect
		(
			local weights = get_vert_weights sk vid
			#(vid,weights[2][findItem weights[1] bid])
		)
	)
	fn get_skin_bone_nodes sk =
	(
		/* 获得skin中的骨骼(节点)
		9.9成的情况都可以快速获取,不排除有意料之外的错误
		*/
		for n in refs.dependson sk where isvalidnode n collect n
	)
	
	on btn_GetBones pressed do
	(
		local sk = try(for modf in $.modifiers where classof modf == skin do exit with modf)catch(false)
		if isValidObj sk then
		(
			lbx_bone_list.items = for i in get_skin_bone_nodes sk collect i.name
			lbx_bone_list.selection = skinOps.GetSelectedBone sk
		)else
		(
			lbx_bone_list.items = #()
		)
	)
	on btn_CopySoftSelection pressed do
	(
		copy_buffer = get_soft_weights()
	)
	on btn_CopyBoneWeigths pressed do
	(
		copy_buffer = try(get_bone_weights (for modf in $.modifiers where classof modf == skin do exit with modf))catch(messageBox"复制骨骼权重出错";#())
	)
	on btn_PasteToBone pressed do
	(
		sk = try(for modf in $.modifiers where classof modf == skin do exit with modf)catch(messageBox"出错";undefined)
		if isValidObj sk do set_bone_weights sk copy_buffer val:1 limit4bid:lbx_bone_list.selection
	)
	on btn_ClearSelection pressed do
	(
		lbx_bone_list.selection = 0
	)
)
CreateDialog SoftSelectionConvertorRollout