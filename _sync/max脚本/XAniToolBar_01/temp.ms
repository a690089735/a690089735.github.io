fn trans_data_load =
with undo "Paste Transform" on( --呼叫进度条
/*
单帧模式(正常:按选中物体粘贴 ctrl:按记录的名称粘贴 shift粘贴数轴,alt临时模式,临时模式也可粘贴枢轴)
逐帧模式(ctrl按记录的名称粘贴,按shift按关键帧粘贴,alt按现有帧粘贴, 高级模式:右键菜单->不粘贴缩放的逐帧粘贴,依然遵守CSA三个功能键(或者,仅粘贴位置,仅粘贴旋转,仅粘贴缩放))
相对模式(相对模式,正常:按选中物体粘贴 ctrl:按记录的名称粘贴  高级模式:右键菜单->创建相对动画)

除非在单帧临时模式,否则列表选择必须大于0
	
	*/
	local
	ctrl = keyboard.controlPressed, alt = keyboard.altPressed, shift = keyboard.shiftPressed
	
	if trans_mode == 0 and alt then --单帧临时模式,仍然保持shift粘贴数轴
	(
		local
		trans_list = trans_temp_data[2],
		paste_list = trans_paste_list,
		count = amin #(paste_list.count, trans_temp_data[1].count)--按少数截取
		for i = 1 to count do
		(
			local trans = (try(execute(getUserProp paste_list[i] "Mirrored_relative_transformation"))catch(Matrix3 1)) * buildTransform axis:axis flip:flip tm:trans_list[i] pivotTm:pivotTm mirrorPos:mirrorPos mirrorRot:mirrorRot
			if keyboard.shiftPressed then pasteTransToPivot obj:paste_list[i] tm:trans else paste_list[i].transform = trans
		)
	)
	else
	( 
		if (sid = trans_ddl_list.selection) > 0 do --其他情况
		(
			local
			--数据
			f = openFile trans_data_list[trans_ddl_list.selection],data = readValue f,
			--获得镜像参数
			axis = #("x","y","z")[trans_rdo_mirror_axis.state],
			flip = #("x","y","z")[trans_rdo_flip_axis.state],
			pivotTm = if trans_chk_refObj.checked and isvalidnode trans_btn_refObj.object then trans_btn_refObj.object.transform else matrix3 1,
			mirrorPos = trans_chk_mirror_pos.checked,
			mirrorRot = trans_chk_mirror_rot.checked
			close f
			
			case trans_mode of
			(
				case trans_mode of
				(
					0: (--单帧模式,正常:按选中物体粘贴 ctrl:按记录的名称粘贴 Shift:粘贴到枢轴 (完成), alt:取临时数据.
						local
						trans_list = data[2],
						paste_list = if keyboard.controlPressed then for n in data[1] where isValidNode(nd = getNodeByName n) collect nd else trans_paste_list,
						count = amin #(paste_list.count, data[1].count)--按少数截取
						
			-- 			if paste_list.count != data[1].count do messagebox "记录数量不匹配,将尽可能进行粘贴.\t" --进行提示
						for i = 1 to count do
						(
			-- 				print#(trans_list[i])
							local trans = (try(execute(getUserProp paste_list[i] "Mirrored_relative_transformation"))catch(Matrix3 1)) * buildTransform axis:axis flip:flip tm:trans_list[i] pivotTm:pivotTm mirrorPos:mirrorPos mirrorRot:mirrorRot
							if keyboard.shiftPressed then pasteTransToPivot obj:paste_list[i] tm:trans else paste_list[i].transform = trans
						)
					)
					1: with animate on(--逐帧模式,正常:按选中物体粘贴 ctrl:按记录的名称粘贴 Shift:按关键帧记录抽取 alt:按现有关键帧抽取 高级模式:右键菜单->不粘贴缩放的逐帧粘贴,依然遵守CSA三个功能键(或者,仅粘贴位置,仅粘贴旋转,仅粘贴缩放)
						local
						trans_list = data[3][2], --读取的变换列表
						paste_list = if keyboard.controlPressed then for n in data[3][1] where isValidNode(nd = getNodeByName n) collect nd else trans_paste_list, --要被粘贴的物体列表,
						count = amin #(paste_list.count, data[3][1].count), --取最小数量以兼容
						keys_range = data[1],
						keys_start = keys_range.start,
						keys_end = keys_range.end,
						keys_all = for t in keys_range.start to keys_range.end collect t,
						keys_list = clamp_range (
						if keyboard.altPressed then
							if keyboard.shiftPressed then GetKeys objs:paste_list clamp_range:true clamp_start:(amin data[2]) clamp_end:(amax data[2]) else GetKeys objs:paste_list clamp_range:true clamp_start:keys_start clamp_end:keys_end
						else
							if keyboard.shiftPressed then data[2] else keys_all
						)
						
						for t in keys_list do
						at time t(
							for i = 1 to count do
							(
								paste_list[i].transform = (try(execute(getUserProp paste_list[i] "Mirrored_relative_transformation"))catch(Matrix3 1)) * buildTransform axis:axis flip:flip tm:trans_list[i][findItem keys_all t] pivotTm:pivotTm mirrorPos:mirrorPos mirrorRot:mirrorRot --兼容镜像
							)
						)
					)
					2: (--相对模式,正常:按选中物体粘贴 ctrl:按记录的名称粘贴  高级模式:右键菜单->创建相对动画
						local
						trans_list = data[2],
						paste_list = if keyboard.controlPressed then for n in data[1] where isValidNode(nd = getNodeByName n) collect nd else trans_paste_list,
						count = amin #(paste_list.count, data[1].count)--按少数截取
						
						if paste_list.count != data[1].count do messagebox "记录数量不匹配,尽可能进行粘贴.\t" --进行提示
						for i = 1 to count do (local paste_obj = paste_list[i];if isValidNode paste_obj.parent then paste_obj.transform = trans_list[i] * paste_obj.parent.transform else paste_obj.transform = trans_list[i])
					)
				)
			)
	)
	

)