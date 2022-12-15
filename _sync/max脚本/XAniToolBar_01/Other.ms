--合并多维数组
fn combine_array ary =
(
	local new_ary = #()
	for a in ary do new_ary += a
	new_ary
)

--这里不再使用,因为即使层次排的很好,同级的子物体仍会有顺序错误,即使我们再次按名称进行排序,也无法满足所有要求(比如有同名物体,物体修改过层级等),所以请让用户认真指定.
-- fn sort_by_hierarchy obj_list:(getcurrentselection()) split:false = --优秀的排序功能,可能略有点慢,但非常准确,切割功能是给类似 创建相同层次的骨骼 使用的(比如bip转骨骼)
-- (
-- 	local sorted_obj_list = for o in execute "$objects/* as array" where findItem obj_list o > 0 collect o
-- 	if split do
-- 	(
-- 		local id_list = for i = 1 to sorted_obj_list.count where findItem sorted_obj_list sorted_obj_list[i].parent == 0 collect i;append id_list (sorted_obj_list.count+1)
-- 		sorted_obj_list = for i = 1 to id_list.count-1 collect for j = id_list[i] to (id_list[i+1]-1) collect sorted_obj_list[j]
-- 	)
-- 	sorted_obj_list
-- )

--判断是否需要进位
fn need_carry new_num old_num =
(
	(new_num as string).count > (old_num as string).count
)

--加前缀0占位依赖,d=位数,返回文本
fn covering_str num d:2 =
(
	num = num as string
	for i = 1 to d - num.count do num = "0" + num
	num
)

--删除文件名中不允许的字符
fn filename_filter str =
(
	for t in #( "?", "*", ":", "\"", "<", ">", "\\", "/", "|", "\n", "\t", "\r", "." ) do str = substituteString str t "" ; str --可以判断处理后的文本长度是不是变了,变了的话弹出一个气泡,提示不能有这些字符.当然,不提示也行.注意要排除点".",因为命名功能依赖于此
)

--按句柄模拟点击
fn send_click hwnd =
(
	windows.postMessage hwnd 0x0201 0x00000001 0x00050005--//按下左键 0x00050005 表示y=0005 x=0005 (16进制高低位)
	windows.postMessage hwnd 0x0202 0x00000000 0x00050005--//抬起左键
)

--获取关键帧 --这个很快很简单很好用,但是会在每次运行时导致轨迹工具发生刷新.因为mapkeys相当于对每个关键帧进行了一次操作.
fn GetKeys objs:(getcurrentselection()) clamp_range:false clamp_start:animationrange.start clamp_end:animationrange.end = --mapped在处理多物体时返回的是ok,实际上下面的mapkeys就能兼容单物体和多物体,clamp_range钳制范围
with undo off
(
	mapkeys objs (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
	if clamp_range then for t in sort(makeuniquearray keys) where t >= clamp_start and t <= clamp_end collect t else sort(makeuniquearray keys)
)
-- fn Get_Keys_old obj = --可以直接引入obj[3],仅获取变换帧来加速获取帧列表,以及跳过无用的可见性帧之类的帧 --这个会慢一些,更麻烦,但是自由度更高可以选择要哪些控制器的帧.而且不会引发帧刷新事件.
-- (
-- 	local result = #()
-- 	for i = 1 to obj.numSubs do 
-- 	(
-- 		local
-- 		SubAni = getSubAnim obj i, keys = SubAni.keys
-- 		
-- 		if SubAni.numSubs == 0 then
-- 			result += if keys != undefined then for k in keys collect k.time else #()
-- 		else
-- 			result += Get_Keys SubAni
-- 	)
-- 	sort(makeUniqueArray(result))
-- )
-- fn Get_Keys obj = --减少行数和更稳的逻辑(无优化)
-- (
-- 	local result = #()
-- 	for i = 1 to obj.numSubs do 
-- 	(
-- 		local SubAni = getSubAnim obj i, keys = SubAni.keys
-- 		result += if keys != undefined then for k in keys collect k.time else #()
-- 		if SubAni.numSubs > 0 do result += Get_Keys SubAni
-- 	)
-- 	sort(makeUniqueArray(result))
-- )

fn Clamp_Times times_ary start:animationrange.start end:animationrange.end = --优化为掐头去尾的模式,必须是已经排序好的时间列表,否则无效(仅掐头去尾)(即使最坏的结果应该也比每个判断两次要快的多)
(
	local
	t_s = times_ary[1]
	t_e = times_ary[times_ary.count]
	case of
	(
		(t_s>end or t_e<start) : #()
		(t_s>=start and t_e<=end) : times_ary
		(t_s>=start) : for i = 1 to (for j = times_ary.count to 1 by -1 where times_ary[j] <= end do exit with j) collect times_ary[i]
		(t_e<=end) : for i = (for j = 1 to times_ary.count where times_ary[j] >= start do exit with j) to times_ary.count collect times_ary[i]
		default : for i = (for j = 1 to times_ary.count where times_ary[j] >= start do exit with j) to (for j = times_ary.count to 1 by -1 where times_ary[j] <= end do exit with j) collect times_ary[i]
	)
)

fn Get_Trans_Times obj = --新版的递归可以支持node,node[3],甚至array和collection或ObjectSet等,但是处于效率考虑,必须在递归之外排序和整理列表. 现在仅获取变换帧来加速获取帧列表,以及跳过无用的可见性帧之类的帧
(
	local result = #()
	case of
	(
		(isValidObj obj):(
			local
			keys = obj.keys
			result += if keys != undefined then for k in keys collect k.time else #()
			for i = 1 to obj.numSubs do 
			(
				local
				SubAni = getSubAnim obj i,
				keys = SubAni.keys
				result += if keys != undefined then for k in keys collect k.time else #()
				if SubAni.numSubs > 0 do result += Get_Trans_Times SubAni
			)
		)
		(isValidNode obj): result += Get_Trans_Times obj[3]
		default : for o in obj do result += Get_Trans_Times o[3]
	)
	result
)
-- sort(makeUniqueArray(Get_Trans_Times $)) --必须在之外整理,这样可以仅整理一次
fn Get_Trans_Times_Exe obj:(getCurrentSelection()) clamp:false start:animationrange.start end:animationrange.end =
(
	if clamp then Clamp_Times (sort(makeUniqueArray(Get_Trans_Times(obj)))) start:start end:end else sort(makeUniqueArray(Get_Trans_Times(obj)))
)

-- 以下已不使用仅留作参考
-- fn find_hwnd_by_text Main_hwnd str =
-- (
-- 	for hwnd in UIAccessor.GetChildWindows Main_hwnd where 
-- )
--获取可供刷新列表的句柄,每次启动时更新即可保证实时更新.发送信息时调用.
-- fn get_send_target =
-- (
-- 	原理:
-- 	如果没有文件,则新建文件保存自身.
-- 	如果由文件,则读取文件验证一下句柄的text,保留合格的句柄和自身
-- 	local
-- 	all_process_list = (dotnetobject "system.diagnostics.process").getprocesses(),
-- 	max_process_list =  for i in processarr where i.processname == "3dsmax" collect i.MainWindowHandle, --收集max窗口句柄
-- 	tool_hwnd_list = #()
-- 	for main_hwnd in max_process_list do
-- 	(
-- 		for hwnd in UIAccessor.GetChildWindows Main_hwnd where UIAccessor.GetWindowText hwnd == ""
-- 		
-- 	)
-- )