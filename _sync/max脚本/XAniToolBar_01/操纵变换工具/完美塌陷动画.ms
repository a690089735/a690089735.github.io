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
	animationRange = interval (if st < animationRange.start then st else animationRange.start) (if et > animationRange.end then et else animationRange.end)
)
fn copy_transform objs:(getcurrentselection()) = --加上按实际时间复制
(
	local st = animationRange.start,et = animationRange.end 
	#(animationRange,for obj in objs collect (for t = st to et collect at time t obj.transform))
)

fn paste_transform objs:(getcurrentselection()) data =
(
	local st = data[1].start,et = data[1].end,transform_ary = data[2],count = transform_ary.count
	set_animationrange st et
	with animate on (for i = 1 to count do (local obj = objs[i],trans_ary = transform_ary[i],j = 0;for t = st to et do (j+=1;obj.transform = trans_ary[j])))
)