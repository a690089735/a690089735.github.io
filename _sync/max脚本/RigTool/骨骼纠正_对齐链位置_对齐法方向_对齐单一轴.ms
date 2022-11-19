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
	i=0,
	all_list = for o in obj_list where (i+=1;finditem obj_list o.parent) == 0 collect for n in #()+o where (fid = finditem obj_list n)>0 collect (deleteitem obj_list fid;n) --收集父物体
	if combine then combine_array all_list else all_list
)

fn correct_averaging_location obj_list:(getcurrentselection()) = --纠正_链平均位置
(
	obj_list = sort_by_hierarchy obj_list:obj_list --排序链
	
	for l in obj_list where (count=l.count) > 3 do --列表大于3开始纠正链位置
	(
		--取1的位置,count的位置,其余平均位置创建平面
		local
		sp=l[1].pos,
		ep=l[count].pos,
		mp=(r=[0,0,0];for i in #{2..count-1} do r+=l[i].pos;r/(count-2)),
		np=normalize (cross (mp-sp) (ep-sp))
		pos_list = for i in #{2..count-1} collect --纠正位置
		(
			local cp = l[i].pos
			l[i].pos = cp+((dot (sp-cp) np)*np)
			prt = l[i].parent;if isvalidnode prt and prt.boneEnable do (prt.realignBoneToChild();prt.resetBoneStretch())
		)
		prt = l[count].parent
		prt_trans = prt.transform
		l[count].transform = (matrix3 prt_trans[1] prt_trans[2] prt_trans[3] ep)
		if isvalidnode prt and prt.boneEnable do (prt.realignBoneToChild();prt.resetBoneStretch())
	)
)
fn correct_normalize_direction obj_list:(getcurrentselection()) = --纠正_链规范化指向
(
	obj_list = sort_by_hierarchy obj_list:obj_list --排序链(并拆分)
	
	for l in obj_list where (count=l.count) > 2 do --列表大于3开始纠正链位置,等于2则平均二者的z轴旋转
	(
		local
		sp=l[1].pos,
		ep=l[count].pos,
		mp=(r=[0,0,0];for i in #{2..count-1} do r+=l[i].pos;r/(count-2)),
		nx=normalize(mp-sp),
		ny=normalize(ep-sp),
		nz=normalize(cross nx ny)
		ny=normalize(cross nz nx)
		local
		base_trans = (matrix3 nx ny nz sp),
		trans_list = for o in l collect o.transform,--沿x轴旋转,虽然位置其实不会发生改变.但子物体的位置仍可能发生变化,故在此先行记录
		i=0
-- 		point transform:base_trans
		for o in l do
		(
			i+=1
			local
			new_trans = matrix3 1,
			current_trans = trans_list[i],
			quatAngle = acos (dot current_trans[1] base_trans[1]),
			quatAxis = normalize(cross current_trans[1] base_trans[1])
			
			rotate new_trans base_trans.rotationpart --注意,现在是旋转基本矩阵到可以对齐x的方向
			rotate new_trans (quat quatAngle quatAxis)
			translate new_trans current_trans.position
			
			o.transform = new_trans--应用变换
			if i == count do
			(
				prt = o.parent;if isvalidnode prt do
				(
					prt_transform = prt.transform
					o.transform = (matrix3 prt_transform[1] prt_transform[2] prt_transform[3] new_trans[4])
				)
			)
-- 			
		)
	)
	--取1的位置,count的位置,其余平均位置创建平面
	--求其他的
)
-- /*
fn only_axis_align obj_list:(getcurrentselection()) = --对齐单一轴
(
-- 	obj_list = sort_by_hierarchy obj_list:obj_list --排序链
	count = obj_list.count
	if count > 1 do
	for i = 1 to count - 1 do --列表大于1开始对齐单一轴到最后一个物体
	(
		local
		base_trans = obj_list[count].transform, --要参考的基本变换矩阵
		trans_list = for o in obj_list collect o.transform--沿x轴旋转,虽然位置其实不会发生改变.但子物体的位置仍可能发生变化,故在此先行记录
			
		for i = 1 to count-1 do
		(
			local
			new_trans = matrix3 1, --新变换矩阵
			o = obj_list[i],
			current_trans = trans_list[i], --物体原变换矩阵
			quatAngle = acos (dot current_trans[1] base_trans[1]),--结果无论如何都是正的,不过轴向会自动翻转.所以直接使用就好.
			quatAxis = normalize(cross current_trans[1] base_trans[1])
			
			rotate new_trans base_trans.rotationpart --注意,现在是旋转基本矩阵到可以对齐x的方向
			rotate new_trans (quat quatAngle quatAxis)
			translate new_trans current_trans.position
			
			o.transform = new_trans--应用变换
		)
	)
)
-- only_axis_align()

-- */
--