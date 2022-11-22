--关键帧编辑框,关键帧列表 --没有记录时也可以修改编辑框,但不会保存 --修改编辑框后手动更新到文件,但添加一个共享到其他max的功能(直接使用settext即可) --列表增删改跨max同步

-- 设置旋转控制器TCB和欧拉(遇到列表控制器,找活动控制器,必须是欧拉控制器和TCB控制器才能转换) -- 塌陷控制器
-- 删除位置帧 --删除旋转帧 --删除缩放帧 --删除所有帧 --清除范围外的帧

-- 按范围选择,选择范围内,
-- 左键:选择(非关键帧的部分)
-- ctrl:包括时间范围外的
-- shift:按关键帧选择
-- alt:在选择前按帧列表创建关键帧
-- fn times_clamp

fn times_data_get =
(
	times_data_list = sort(getFiles(data_folder + "*.时间集合数据"))
)
fn times_data_display = --显示名称集合数据
(
	times_ddl_list.items = for i in times_data_list collect (fl = filterString (filenameFromPath i) "." ; fl[1] + "." + fl[2])
)
fn times_data_load id:times_ddl_list.selection =
(
	if id > 0 then
	(
		local f = openfile times_data_list[id]
		times_edt_times.text = readline f
		close f
	)else
	(
		times_edt_times.text = ""
	)
)

fn times_rename_all d:2 =
(
	local k = 0
	times_data_list = for f in times_data_list collect
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
fn times_data_save =
(
	local times = Get_Trans_Times_Exe() --默认不钳制,设置clamp:true来钳制,可自定义钳制范围
	if times.count > 0 then
	(
		displayTempPrompt "提示:保存时间集合数据!" 1500
		local
		old_num = times_data_list.count,
		new_num = times_data_list.count+1,
		name_num_str = new_num as string,
		d = name_num_str.count
		
		if need_carry new_num old_num do times_rename_all d:d

		local data_name = data_folder + name_num_str + ".时间集合数据"
-- 		print data_name
		with printAllElements true (
			--创建文件
			deleteFile data_name --反正不允许有重名,重名删了新建就好了
			local
			f = createFile data_name,
			str = (times[1].frame as integer) as string
			for i = 2 to times.count do str+=","+(times[i].frame as integer) as string
			format "%" str to:f
			close f
		)
		--更新
		append times_data_list data_name
	)else
	(
		displayTempPrompt "提示:没有检测到时间帧!" 1500
	)
)

fn times_data_delete =
(
	if (id = times_ddl_list.selection) > 0 then
	(
-- 		deletefile times_data_list[id]
		HiddenDOSCommand("DEL "+ times_data_list[id] +" /F") --强制删除,上边那句可能权限不够
		deleteitem times_data_list id
		deleteitem times_ddl_list.items id
		times_data_list = times_rename_all d:(times_data_list.count as string).count
	)else displayTempPrompt "提示:没有选择的时间集合!" 1500
	
)
fn times_data_select objs:(getCurrentSelection()) = --默认选择时间帧之内的帧, 按下alt时,选择时间帧,默认选择时间范围之内的帧 按下shift时,先创建关键帧序列再选择 按下ctrl时,解除时间范围限制(可影响时间范围外的帧,默认仅影响时间范围内的帧)
undo "Select Times" on(--给选择按钮加个右键菜单,删除选中的关键帧 --selectKeys $[3]可以只选择变换帧
	local
	noclamp = keyboard.controlPressed,
	create_keys = keyboard.shiftPressed,
	select_range = keyboard.altPressed,
	times = for t in filterString times_edt_times.text "," collect t as integer
	
	if times.count > 0 then
	(
		times = if noclamp then times else Clamp_Times times
		displayTempPrompt ("提示:"+ (if create_keys then "生成帧,并" else "") + (if not select_range then "选择关键时间帧." else "选择中间时间帧.") +" 操作范围:"+ (if noclamp then "全部帧" else "仅时间范围内的帧")) 1500
		if create_keys do with animate on(
			for o in objs do
			(
				local trans_list = for t in times collect at time t o.transform,i = 0
				for t in times do at time t o.transform = trans_list[i+=1]
			)
		)--按下shift时,按时间列表创建关键帧,ctrl控制是否钳制时间
		if noclamp then deselectKeys objs else deselectKeys objs animationRange --取消选择,仍然保持Ctrl的影响范围
		if select_range then --默认选择时间帧之内的帧,按下alt时,选择时间帧,默认选择时间范围之内的帧
		(
			if noclamp then for t in times do selectKeys objs #all else selectKeys objs animationRange 
			for t in times do deselectKeys objs t
		)else
		(
			for t in times do selectKeys objs t
		)
		if not noclamp do (deselectKeys objs (interval -13421700 (animationrange.start-1));deselectKeys objs (interval (animationrange.end+1) 13421700)) --默认钳制范围,按下ctrl时,可超出范围
	)else displayTempPrompt "提示:没有可选择的时间!" 1500
)

--发送文本--失败了,转换结果与C#中不一样,还得发送按钮点击来读取设置
-- Marshal = dotNetClass " System.Runtime.InteropServices.Marshal"
-- str_int64 = Marshal.StringToHGlobalAnsi("123") as Integer64
-- IntPtr = dotnetobject "IntPtr" (Marshal.StringToHGlobalAnsi("123"))
-- IntPtr.ToInt32()
-- Windows.sendMessage 333070P 0x000C 0 (22629312 as Integer64)