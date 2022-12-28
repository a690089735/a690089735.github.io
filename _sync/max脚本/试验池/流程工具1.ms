try(DestroyDialog workflowRollout)catch()
rollout workflowRollout "专有0.1" width:152 height:264
(
	fn get_keys_range objs:(getcurrentselection()) = --获取实际的动画范围
	with undo off
	(
		mapkeys objs (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
		interval (amin keys) (amax keys)
	)
	fn combine_array ary = --合并多维数组
	(
		new_ary = #()
		for a in ary do new_ary += a
		new_ary
	)
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
	fn set_transform_controller_to_PRS objs:(getcurrentselection()) = --兼容IK约束
	(
		objs = sort_by_hierarchy obj_list:objs
		buffer_transform_list = for obj in objs collect obj.transform
		for obj in objs do
		(
			local buffer_transform = obj.transform,old_ctrl=obj[3].controller
			if classof old_ctrl == IK_ControllerMatrix3Controller then (messagebox ("不支持矩阵IK:"+obj.name)) else
			(
				if classof old_ctrl == IKControl do
				(
					for o in refs.dependents old_ctrl where isvalidnode o and finditem #(SplineIKChain,IKChainControl) (classof o[3].controller) > 0 do exit with delete o
				)
				obj[3].controller = transform_script();obj[3].controller = PRS()
				obj.transform = buffer_transform
			)
		)
	)
	fn set_animationrange st et = --如果范围有超过,即自动设置范围
	(
		print("原始时间:" + animationRange as string)
		animationRange = interval (if st < animationRange.start then st else animationRange.start) (if et > animationRange.end then et else animationRange.end)
	)
	fn copy_transform objs:(getcurrentselection()) = --加上按实际时间复制
	(
		local range = get_keys_range objs:objs, st = range.start,et = range.end
		#(range,for obj in objs collect (for t = st to et collect at time t obj.transform))
	)
	fn paste_transform data objs:(getcurrentselection())=
	(
		local st = data[1].start,et = data[1].end,transform_ary = data[2],count = transform_ary.count
		set_animationrange st et
		with animate on (
			for i = 1 to count do
			(
				local obj = objs[i],trans_ary = transform_ary[i],j = 0
				for t = st to et do at time t (j+=1;obj.transform = trans_ary[j])
			)
		)
	)
	fn get_lower_version = (maxversion())[1]/1000+1995
		
		
	GroupBox 'grp1' "塌陷动画" pos:[8,8] width:136 height:48 align:#left
	button 'btn_collapseAni' "塌陷选择物体的动画" pos:[16,24] width:120 height:24 toolTip:"选中要塌陷动画的物体,点击按钮塌陷动画.\n塌陷动画时,按实际动画时间塌陷动画,这可能会改变时间范围." align:#left
	
	GroupBox 'grp2' "手部动画" pos:[8,64] width:136 height:80 align:#left
	button 'btn_CopyAni' "复制选择动画" pos:[16,80] width:120 height:24 enabled:false align:#left
	button 'btn_PasteAni' "粘贴选择动画" pos:[16,112] width:120 height:24 enabled:false align:#left
	
	GroupBox 'grp3' "输出文件" pos:[8,152] width:136 height:80 align:#left
	button 'btn_SaveLower' "保存到最低版本" pos:[16,168] width:120 height:24 toolTip:"保存为当前max支持的最低版本: 2020" align:#left
	button 'btn_PutVideo' "输出录屏文件" pos:[16,200] width:120 height:24 enabled:false toolTip:"按Ctrl点击,在输出后播放录屏文件." align:#left
	
	Timer 'tmr1' "Timer" pos:[136,392] width:24 height:24 interval:3250 active:false
	label 'bar' "就绪." pos:[8,240] width:136 height:16 style_sunkenedge:true
	
		
	fn set_state str = (bar.text = str;tmr1.active = true)
	
	
	on btn_collapseAni pressed do
	undo "塌陷动画" on(
		try
		(
			local objs = sort_by_hierarchy(),data = copy_transform objs:objs
			set_transform_controller_to_PRS objs:objs
			paste_transform data objs:objs
			set_state ("塌陷动画 [完毕]")
		)catch
		(
			set_state ("塌陷动画 [出错]")
		)
	)
	on btn_CopyAni pressed do
	(
	
	)
	on btn_PasteAni pressed do
	(
	
	)
	on btn_SaveLower pressed do
	(
		local currentPath = maxFilePath+maxFileName, savePath = if doesFileExist currentPath then currentPath else (getSaveFileName types:"3ds Max(*.max)|*.max")
		try
		(
			saveMaxFile (savePath) saveAsVersion:(get_lower_version()) clearNeedSaveFlag:true useNewFile:true quiet:false
			set_state ("保存为 " + get_lower_version() as string + " [完毕]")
		)catch
		(
			set_state ("保存为 " + get_lower_version() as string + " [路径错误]")
		)
	)
	on btn_PutVideo pressed do
	(
	
	)
-- 	on workflowRollout open do
-- 	(
-- 		
-- 	)
	on tmr1 tick do
	(
		bar.text = "就绪."
		tmr1.active = false
	)
)
CreateDialog workflowRollout