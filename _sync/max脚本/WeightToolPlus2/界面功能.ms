

	on WeightToolPlusB open do
	(
		_UIInitialization()
		regUpUI()
	)
	on WeightToolPlusB close do
	(
		unregUpUI()
	)
-- 	--关键响应,设置权重响应
	on Spn_BoneWeight buttondown do
	(
		unregUpUI()
		_changging = true
-- 		print _changging
		undo "Set Weights" on skinOps.bakeSelectedVerts sk
		
	)
	on Spn_BoneWeight buttonup do
	(
		regUpUI()
		_changging = false
		upUI 1 0
	)
	on Spn_BoneWeight changed val do --所有写在这里的东西都不能撤销(也不应当加入撤销队列,因为操作太频繁)
	undo off(
		if _changging do --过滤掉entered引发的改变(改变完成是在输入完成之前,只能在输入完成里制作撤销,不这样的话会打乱撤销顺序)
		calcWeight sk:sk lockList:_LockList bID:_SelectedBoneID vIDs:_SelectedVertices val:val
	)
	on Spn_BoneWeight entered arg cancel do --是否是拉动和释放鼠标输入(否则是键盘输入); 是否用右键取消了更改
	(
		if not arg do --如果是键盘输入
		(
-- 			print "键盘"
			undo "Set Weights" on(skinOps.bakeSelectedVerts sk)
			calcWeight sk:sk lockList:_LockList bID:_SelectedBoneID vIDs:_SelectedVertices val:Spn_BoneWeight.value
		)
		if cancel do max undo
	)
	--列表项响应
	on Lbx_Bones MouseClick s e do
	(
	-- 		print s.SelectedIndices.item[0] --序号
-- 		print 1
		local item = s.selectedItems.item[0],newID = item.tag.value
		if _SelectedBoneID != newID do --1这样可以减少刷新,2但必须屏蔽,才能用选择触发更新回调3双击时仍然有问题,因为触发时还没改动
			skinOps.SelectBone sk newID 
	)
	on Lbx_Bones MouseDoubleClick s e do
	(
		local item = s.selectedItems.item[0],id = item.tag.value
		item.ImageKey = (_LockList[id] = not _LockList[id]) as string--下边的可能会有隐含的刷新问题.这里直接更新.
		
		lbl_BoneInfo_Ico.image = if _LockList[id]then lockimg else unlockimg--添加这句.就只能刷新一次了.
		--双击之前必定触发单击选择,所以可以直接用_SelectedBoneID,但由于刷新问题,这里要多加一次选择来让boneinfo及时刷新.
		
		--_LockList[_SelectedBoneID] = not _LockList[_SelectedBoneID]
		--skinOps.SelectBone sk item.tag.value --用于触发刷新,可让状态自动更新
		--item.ImageKey = () as string --估计有上面那句就会导致它自动刷新了.后面要加一个限制更新的方法,不然会总是闪烁
	)
	on lbl_BoneInfo MouseDoubleClick s e do
	(
		skinOps.SelectBone sk _SelectedBoneID --有这个才可以出发回调,上面也是因为单击出触发了回调
		lbl_BoneInfo_Ico.image = if (_LockList[_SelectedBoneID] = not _LockList[_SelectedBoneID]) then lockimg else unlockimg
	)
-- 	on lbl_BoneInfo MouseDoubleClick s e do
-- 	(
-- 		--skinOps.SelectBone sk _SelectedBoneID --有这个才可以出发回调,上面也是因为单击出触发了回调
-- 		lbl_BoneInfo_Ico.image = if (_LockList[_SelectedBoneID] = not _LockList[_SelectedBoneID]) then lockimg else unlockimg
-- 	)
	--标题栏响应
	on lbl_Ico mouseDown do(_Pin = true;_Offset = (GetDialogPos WeightToolPlusB) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico mouseUp do _Pin = false
	on lbl_Ico mouseMove do if _Pin do SetDialogPos WeightToolPlusB (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit mouseDown do(_Pin = true;_Offset = (GetDialogPos WeightToolPlusB) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit mouseUp do _Pin = false
	on lbl_Tit mouseMove do if _Pin do SetDialogPos WeightToolPlusB (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on btn_Cls click do DestroyDialog WeightToolPlusB
		
	--其他功能
	on 'Btn_Shrink' click do undo "Skin Shrink" on(skinOps.shrinkSelection sk)
	on 'Btn_Grow' click do undo "Skin Grow" on(skinOps.growSelection sk)
	on 'Btn_Ring' click do undo "Skin Ring" on(skinOps.ringSelection sk)
	on 'Btn_Loop' click do undo "Skin Loop" on(skinOps.loopSelection sk)

	on 'Btn_000' click do (undo "Set Weights" on(skinOps.bakeSelectedVerts sk);calcWeight vIDs:_SelectedVertices val:0) --设置单个权重skinOps.SetWeight modf 0.0
	on 'Btn_010' click do (undo "Set Weights" on(skinOps.bakeSelectedVerts sk);calcWeight vIDs:_SelectedVertices val:0.1)--设置单个权重
	on 'Btn_025' click do (undo "Set Weights" on(skinOps.bakeSelectedVerts sk);calcWeight vIDs:_SelectedVertices val:0.25)--设置单个权重
	on 'Btn_050' click do (undo "Set Weights" on(skinOps.bakeSelectedVerts sk);calcWeight vIDs:_SelectedVertices val:0.5)--设置单个权重
	on 'Btn_075' click do (undo "Set Weights" on(skinOps.bakeSelectedVerts sk);calcWeight vIDs:_SelectedVertices val:0.75)--设置单个权重
	on 'Btn_090' click do (undo "Set Weights" on(skinOps.bakeSelectedVerts sk);calcWeight vIDs:_SelectedVertices val:0.9)--设置单个权重
	on 'Btn_100' click do (undo "Set Weights" on(skinOps.bakeSelectedVerts sk);calcWeight vIDs:_SelectedVertices val:1)--设置单个权重

	on 'Btn_SetWeight' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:Spn_SetWeight.value)--设置单个权重
	on 'Btn_AddWeight' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value + Spn_SetWeight.value))--设置单个权重
	on 'Btn_MinusWeight' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value - Spn_SetWeight.value))--设置单个权重
		
	on 'Btn_ScaleWeight' click do undo "Scale Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value * Spn_ScaleWeight.value) )--缩放单个权重
	on 'Btn_AddScaleWeight' click do undo "Scale Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value *(1 + Spn_ScaleWeight.value)))--缩放单个权重
	on 'Btn_MinusScaleWeight' click do undo "Scale Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value *(1 - Spn_ScaleWeight.value)))--缩放单个权重

	on 'Btn_CopyWeight' click do undo "Copy Weights" on(skinOps.copyWeights sk;lbl_CopyBuffer.text = "Buffer " + _SelectedVertices.numberset as string)
	on 'Btn_PasteWeight' click do undo "Paste Weights" on(skinOps.pasteWeights sk)
	on 'Btn_BlendWeight' click do undo "Blend Weights" on(skinOps.blendSelected sk)
	on 'Btn_Paste_PosWeight' click do undo "Blend PosWeights" on(skinOps.pasteWeightsByPos sk)--注意按照数值

-- 	--copy
-- 	--复制顶点权重,复制软选择权重,复制权重布局
-- 	--粘贴顶点权重,粘贴软选择权重,粘贴权重布局