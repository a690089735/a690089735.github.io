--由include引入主函数,可直接使用主函数的局部变量

fn trans_tool_sate_save =
(
	setINISetting cfg_file "ToolState" "ttool_mpos" (trans_chk_mirror_pos.checked as string)
	setINISetting cfg_file "ToolState" "ttool_mrot" (trans_chk_mirror_rot.checked as string)
	setINISetting cfg_file "ToolState" "ttool_mAxis" (#("x","y","z")[trans_rdo_mirror_axis.state])
	setINISetting cfg_file "ToolState" "ttool_fAxis" (#("x","y","z")[trans_rdo_flip_axis.state])
)
fn trans_tool_sate_load =
(
	trans_chk_mirror_pos.checked = getINISetting cfg_file "ToolState" "ttool_mpos" == "true"
	trans_chk_mirror_rot.checked = getINISetting cfg_file "ToolState" "ttool_mrot" == "true"
	trans_rdo_mirror_axis.state = case getINISetting cfg_file "ToolState" "ttool_mAxis" of
	(
		"y":2
		"z":3
		default:1
	)
	trans_rdo_flip_axis.state = case getINISetting cfg_file "ToolState" "ttool_fAxis" of
	(
		"y":2
		"z":3
		default:1
	)
)
fn trans_tool_set_enabled =
(
	trans_lbl_mirror_axis.enabled = trans_rdo_mirror_axis.enabled = (trans_chk_mirror_pos.checked or trans_chk_mirror_rot.checked)
	trans_lbl_flip_axis.enabled = trans_rdo_flip_axis.enabled = (trans_chk_mirror_rot.checked)
)

fn buildTransform \ -- otm:(matrix3 1) 		--源物体的变换(不需要了,以前误加的)
axis:"x"				--镜像轴
flip:"x"				--翻转轴
tm:(matrix3 1) 			--要镜像的变换(可能是复制的变换而不是原物体的变换)
pivotTm:(matrix3 1) 	--镜像参照
mirrorPos:true
mirrorRot:true
=						/*By Mike Biddlecombe and Paul Neale.  I'm just ripping it off!*/ --翻转变换的原作者(们),我只是整理和扩展了一下,便于适配我自己的实际情况.
(
	fn FetchReflection a =
	(
		case a of
		(
			"x": [-1,1,1]  -- reflect in YZ plane
			"y": [1,-1,1]  --         in ZX plane
			"z": [1,1,-1]  --         in XY plane
			"xy": [-1,-1,1]
			"yz": [1,-1,-1]
			"xz": [-1,1,-1]
			"xyz": [-1,-1,-1]
		)
	)

	aReflection = scalematrix (FetchReflection axis)
	fReflection = scalematrix (FetchReflection flip)

	resultTrans = fReflection * (tm * (inverse pivotTm)) * aReflection * pivotTm
		
-- 	print mirrorPos
-- 	print mirrorRot
	if not mirrorPos do resultTrans.pos = tm.pos
	if not mirrorRot do (tm.pos = resultTrans.pos;resultTrans = tm)
	
	resultTrans
)
fn pasteTransToPivot obj:selection[1] tm:(matrix3 1) =
(
	objtrans = translate (rotate (scale (matrix3 1) obj.objectoffsetscale) obj.objectoffsetrot) obj.objectoffsetpos
	subtrans = objtrans * obj.transform
	newobjtrans = subtrans * inverse tm
	obj.transform = tm
	obj.objectoffsetpos = newobjtrans.translationpart
	obj.objectoffsetrot = newobjtrans.rotationpart
	obj.objectoffsetscale = newobjtrans.scalepart
)

fn trans_data_get = --获取变换集合数据
(
	trans_data_list = case trans_mode of
	(
		0: sort(getFiles(data_folder + "*.单帧集合数据"))
		1: sort(getFiles(data_folder + "*.逐帧集合数据"))
		2: sort(getFiles(data_folder + "*.相对集合数据"))
	)
)

fn trans_data_display = --显示变换集合数据
(
	trans_ddl_list.items = for i in trans_data_list collect (fl = filterString (filenameFromPath i) "." ; fl[1] + "." + fl[2])
)

fn trans_data_clear = --清除变换集合数据
(
	case trans_mode of
	(
		0: for f in getFiles(data_folder + "*.单帧集合数据") do deletefile f
		1: for f in getFiles(data_folder + "*.逐帧集合数据") do deletefile f
		2: for f in getFiles(data_folder + "*.相对集合数据") do deletefile f
	)
	trans_data_list = #()
	trans_ddl_list.items = #()
)
fn trans_save_state =
(
	setINISetting cfg_file "ToolState" "trans_mode" (trans_mode as string)
)

-- 切换变换工具状态
fn trans_change_state s e = 
(
	s.text = case s.text of
	(
		"单\n帧": (trans_mode = 1;"逐\n帧")
		"逐\n帧": (trans_mode = 2;"相\n对")
		default: (trans_mode = 0;"单\n帧")--"相\n对"
	)
	trans_save_state()
	trans_data_get()
	trans_data_display()
	trans_ddl_list.selection = trans_ddl_list.items.count -- 临时使用,按理说应该保存三个不同的选择,在切换时可自动选择之前选择的东西,这个选择不需要传递到其他max(我们不需要强制选择相同的东西),但是要在关闭时保存(下次打开还是一样的)
)

fn trans_rename_all d:2 =
(
	local k = 0
	trans_data_list = for f in trans_data_list collect
	(
		local
		fname = filenameFromPath f,
		fl = filterString fname "."
		newname = covering_str (k+=1) d:d
		for i = 2 to fl.count do newname += "." + fl[i]
		newname = data_folder + newname
		renameFile f newname
		newname
	)
)

fn trans_data_delete =
(
	if (local id = trans_ddl_list.selection) > 0 do
	(
-- 		deletefile trans_data_list[id]
		HiddenDOSCommand("DEL "+ trans_data_list[id] +" /F") --强制删除,上边那句可能权限不够
		deleteitem trans_data_list id
		deleteitem trans_ddl_list.items id
	)
	trans_data_list = trans_rename_all d:(trans_data_list.count as string).count
)

-- 保存变换数据-正常和按alt两种模式(按alt不记录文件到硬盘)
fn trans_data_save obj_list:trans_copy_list =  --呼叫进度条
if obj_list.count > 0 then(
	local
	old_num = trans_data_list.count,
	new_num = trans_data_list.count+1,
	name_num_str = new_num as string,
	d = name_num_str.count
	
	if need_carry new_num old_num do trans_rename_all d:d --需要进位,用更高位重命名所有数据,直接更新原数据列表
	--创建新数据
	local
	data_name = case trans_mode of
	(
		0: data_folder + name_num_str + ".单帧集合数据"
		1: data_folder + name_num_str + ".逐帧集合数据"
		2: data_folder + name_num_str + ".相对集合数据"
	)
	local
-- 	obj_list = sort_by_hierarchy obj_list:obj_list,
	data = case trans_mode of
	(
		0: (if keyboard.altPressed then trans_temp_data = #(for o in obj_list collect o.name,for o in obj_list collect o.transform) else #(for o in obj_list collect o.name,for o in obj_list collect o.transform)) --慢不了多少,还能提升读取的速度,因为不需要额外解析了.--单帧模式,
		1: (--逐帧模式,
			local
			a = animationrange.start,
			b = animationrange.end
		#(animationRange,GetKeys objs:obj_list clamp_range:true,#(for o in obj_list collect o.name,for o in obj_list collect for t = a to b collect at time t o.transform))
		)
		2: #(for o in obj_list collect o.name, for o in obj_list collect if isvalidnode o.parent then o.transform * inverse o.parent.transform else o.transform)--相对模式
	)
	if trans_mode == 0 and keyboard.altPressed  do return 0
		
	--创建文件
-- 	deleteFile data_name --反正不允许有重名,重名删了新建就好了
	HiddenDOSCommand("DEL "+ data_name +" /F") --强制删除,上边那句可能权限不够
	local f = createFile data_name
	with printAllElements true (format "%" data to:f)
	close f
	
	--更新
	append trans_data_list data_name
)else(messagebox "没有设置任何物体.")

-- 读取变换数据
--读取名称数据(返回物体)--重设计了数据保存方式,这里不需要解析了
-- fn parse_trans_data data =
-- (
-- 	local result = #()
-- 	case trans_mode of
-- 	(
-- 		0: (--单帧模式,正常:按记录的名称粘贴 ctrl:按选中物体粘贴 Shift:粘贴到枢轴
-- 			result = #(#(),#())
-- 			for i in data do (append result[1] i[1];append result[2] i[2])
-- 		)
-- 		1: (--逐帧模式,正常:按记录的名称粘贴 ctrl:按选中物体粘贴 Shift:抽取记录的关键帧粘贴 alt:抽取时间轴上的关键帧 高级模式:右键菜单->不粘贴缩放,依然遵守CSA三个功能键
-- 			result = #(#(),#(),#())
-- 			result[1] = #(data[1],data[2])
-- 		)
-- 		2: (--相对模式,正常:按记录的名称粘贴 ctrl:按选中物体粘贴
-- 		)
-- 	)
-- 	result
-- )
fn clamp_range times =
(
	local
	t_start = animationrange.start, t_end = animationrange.end
	for t in times where t >= t_start and t <= t_end collect t
)

fn trans_data_load =
undo "Paste Transform" on( --呼叫进度条
/*
单帧模式(正常:按选中物体粘贴 ctrl:按记录的名称粘贴 shift粘贴数轴,alt临时模式,临时模式也可粘贴枢轴)
逐帧模式(ctrl按记录的名称粘贴,按shift按关键帧粘贴,alt临时模式, 高级模式:右键菜单->不粘贴缩放的逐帧粘贴,依然遵守CSA三个功能键(或者,仅粘贴位置,仅粘贴旋转,仅粘贴缩放))
	--注意逐帧模式删除了按现有帧粘贴的功能,这个功能可以被时间功能取代.
相对模式(正常:按选中物体粘贴 ctrl:按记录的名称粘贴, alt临时模式 高级模式:右键菜单->创建相对动画)

除非在单帧临时模式,或相对临时模式,否则列表选择必须大于0
	
	*/
	local
	ctrl = keyboard.controlPressed, alt = keyboard.altPressed, shift = keyboard.shiftPressed,
	--获得镜像参数
	axis = #("x","y","z")[trans_rdo_mirror_axis.state],
	flip = #("x","y","z")[trans_rdo_flip_axis.state],
	pivotTm = if trans_chk_refObj.checked and isvalidnode trans_btn_refObj.object then trans_btn_refObj.object.transform else matrix3 1,
	mirrorPos = trans_chk_mirror_pos.checked,
	mirrorRot = trans_chk_mirror_rot.checked
	
	if trans_mode == 0 and alt then --单帧临时模式,仍然保持shift粘贴数轴
	(
		local
		trans_list = trans_temp_data[2],
		paste_list = trans_paste_list,
		count = amin #(paste_list.count, trans_temp_data[1].count)--按少数截取
-- 		print #(trans_list,paste_list)
		for i = 1 to count do
		(
			local
			pre_trans = try(execute(getUserProp paste_list[i] "Mirrored_relative_transformation"))catch(Matrix3 1)
			if not mirrorPos do pre_trans[3] = [0,0,0]
			if not mirrorRot do (pre_trans[1] = [1,0,0];pre_trans[2] = [0,1,0];pre_trans[3] = [0,0,1])
			local
			trans = pre_trans * buildTransform axis:axis flip:flip tm:trans_list[i] pivotTm:pivotTm mirrorPos:mirrorPos mirrorRot:mirrorRot
			if keyboard.shiftPressed then pasteTransToPivot obj:paste_list[i] tm:trans else paste_list[i].transform = trans
		)
	)
	else
	(
		if (sid = trans_ddl_list.selection) > 0 do --其他情况
		(
			local
			--数据
			f = openFile trans_data_list[trans_ddl_list.selection],data = readValue f
			close f
	
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
						local
						pre_trans = try(execute(getUserProp paste_list[i] "Mirrored_relative_transformation"))catch(Matrix3 1)
						if not mirrorPos do pre_trans[3] = [0,0,0]
						if not mirrorRot do (pre_trans[1] = [1,0,0];pre_trans[2] = [0,1,0];pre_trans[3] = [0,0,1])
						local
						trans = pre_trans * buildTransform axis:axis flip:flip tm:trans_list[i] pivotTm:pivotTm mirrorPos:mirrorPos mirrorRot:mirrorRot
						if keyboard.shiftPressed then pasteTransToPivot obj:paste_list[i] tm:trans else paste_list[i].transform = trans --with animate (animbuttonenabled) 
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
							local
							pre_trans = try(execute(getUserProp paste_list[i] "Mirrored_relative_transformation"))catch(Matrix3 1)
							if not mirrorPos do pre_trans[3] = [0,0,0]
							if not mirrorRot do (pre_trans[1] = [1,0,0];pre_trans[2] = [0,1,0];pre_trans[3] = [0,0,1])
							local
							trans = pre_trans * buildTransform axis:axis flip:flip tm:trans_list[i][findItem keys_all t] pivotTm:pivotTm mirrorPos:mirrorPos mirrorRot:mirrorRot
							paste_list[i].transform = trans --兼容镜像
						)
					)
				)
				2: (--相对模式,正常:按选中物体粘贴 ctrl:按记录的名称粘贴  高级模式:右键菜单->创建相对动画 相对模式不兼容关联偏移
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
-- GetKeys objs:(getcurrentselection()) clamp_range:false clamp_start:animationrange.start clamp_end:animationrange.end 
-- keyboard.shiftPressed
-- keyboard.controlPressed
-- keyboard.altPressed
-- keyboard.escPressed

-- local menu_trans_list =
-- rcmenu menu_trans_list
-- (
-- 	menuItem mi_rename "重命名集合"
-- 	separator sep1
-- 	menuItem mi_reload "重加载集合"
-- 	menuItem mi_clear "清除所有集合"
-- 	
-- 	on mi_rename picked do
-- 	(
-- 		rename_dialog trans_data_list[trans_ddl_list.selection] trans_btn_other
-- 	)
-- 	on mi_reload picked do
-- 	(
-- 		trans_data_get()
-- 		trans_data_display()
-- 		trans_ddl_list.selection = trans_ddl_list.count
-- 	)
-- 	on mi_clear picked do
-- 	(
-- 		trans_data_clear()
-- 	)
-- 	on menu_names_list open do
-- 	(
-- 		mi_clear.enabled = mi_rename.enabled = trans_ddl_list.selection > 0
-- 	)
-- 	
-- )