fn combine_array ary = --合并多维数组
(
	new_ary = #()
	for a in ary do new_ary += a
	new_ary
)

fn sort_by_hierarchy obj_list:(getcurrentselection()) combine:false = --按层级匹配物体,combine:true可以把返回值拼合成一个数组.
(
	local
	prt_list = for o in obj_list where (finditem obj_list o.parent) == 0 collect o, --收集父物体,不单独提取的话,会因为列表的不断删除而发生错过物体的问题
	all_list = for p in prt_list collect for n in #() + p where (fid = finditem obj_list n) > 0 collect (deleteitem obj_list fid ; n) --收集父物体和列表中的子物体
	if combine then combine_array all_list else all_list
)

fn filename_filter str = --删除文件名中不允许的字符
(
	for t in #("?", "*", ":", "\"", "<", ">", "\\", "/", "|", "\n", "\t", "\r", ".") do str = substituteString str t "" ; str --可以判断处理后的文本长度是不是变了,变了的话弹出一个气泡,提示不能有这些字符.当然,不提示也行.注意要排除点".",因为命名功能依赖于此
)

--是否需要进位
fn need_carry new_num old_num = --num1是新的数量,num2是旧的数量
(
	-- 	print (new_num as string).count > (old_num as string).count
	( new_num as string ).count > ( old_num as string ).count
)