-- fn sort_by_hierarchy obj_list:(getcurrentselection()) combine:false = --按层级匹配物体,combine:false时返回拆解后的多个数组,combine:true时返回重拼后的数组.
-- (
-- 	local result = #()
-- 	if combine then for o in obj_list do result+=(for n in (#()+o) where (fid = finditem obj_list n)>0 collect (deleteitem obj_list fid;n))
-- 	else result = for o in obj_list collect for n in (#()+o) where (fid = finditem obj_list n)>0 collect (deleteitem obj_list fid;n)
-- 	return result
-- )
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

fn clear_Keys objs:(getcurrentselection()) keys:(for t = animationrange.start to animationrange.end collect t)= --仅保留keys里的部分
(
	with redraw off(
		objs = sort_by_hierarchy obj_list:objs
		save_trans = for t in keys collect at time t(for i in objs collect i.transform) --逐帧记录变换
		deleteKeys objs--清除关键帧 #allKeys (default): deletes all keys in the controller.
		with animate on
		(
			for j = 1 to keys.count do at time keys[j] (for i = 1 to objs.count do objs[i].transform = save_trans[j][i]) --逐帧还原变换
		)
	)
)

clear_Keys()