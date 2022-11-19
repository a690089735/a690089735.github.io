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
fn sort_by_hierarchy obj_list:(getcurrentselection()) combine:false = --按层级匹配物体,combine:true可以把返回值拼合成一个数组.
(
	local
	prt_list = for o in obj_list where (finditem obj_list o.parent) == 0 collect o, --收集父物体,不单独提取的话,会因为列表的不断删除而发生错过物体的问题
	all_list = for p in prt_list collect for n in #()+p where (fid = finditem obj_list n)>0 collect (deleteitem obj_list fid;n) --收集父物体和列表中的子物体
	if combine then combine_array all_list else all_list
)


fn clear_Keys objs:(getcurrentselection()) keys:(for t = animationrange.start to animationrange.end collect t)= --仅保留keys里的部分
(
	with redraw off(
		objs = sort_by_hierarchy obj_list:objs combine:true
		save_trans = for t in keys collect at time t(for i in objs collect i.transform) --逐帧记录变换
		deleteKeys objs--清除关键帧 #allKeys (default): deletes all keys in the controller.
		with animate on
		(
			for j = 1 to keys.count do at time keys[j] (for i = 1 to objs.count do objs[i].transform = save_trans[j][i]) --逐帧还原变换
		)
	)
)

clear_Keys()