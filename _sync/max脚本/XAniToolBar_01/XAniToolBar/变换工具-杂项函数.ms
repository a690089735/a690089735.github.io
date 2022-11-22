fn combine_array ary = --合并多维数组
(
	new_ary = #()
	for a in ary do new_ary += a
	new_ary
)

fn sort_by_hierarchy obj_list:(getcurrentselection()) split:false = 
(
	local sorted_obj_list = for o in execute "$objects/* as array" where findItem obj_list o > 0 collect o
	if split do
	(
		local id_list = for i = 1 to sorted_obj_list.count where findItem sorted_obj_list sorted_obj_list[i].parent == 0 collect i;append id_list (sorted_obj_list.count+1)
		sorted_obj_list = for i = 1 to id_list.count-1 collect for j = id_list[i] to (id_list[i+1]-1) collect sorted_obj_list[j]
	)
	sorted_obj_list
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