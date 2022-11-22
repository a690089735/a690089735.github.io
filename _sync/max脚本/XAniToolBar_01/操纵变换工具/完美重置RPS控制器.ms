--已知限制,不能删除HDIK,其他IK已经兼容.
-- mapped fn set_transform_controller_to_RPS obj =
-- (
-- 	
-- )--mapped函数可以对一个或数组参数执行,一个参数时可返回结果,数组参数时返回OK
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
-- fn set_transform_controller_to_PRS objs:(getcurrentselection()) = --已知限制,目前还未能删除IK目标的问题
-- (
-- 	objs = sort_by_hierarchy obj_list:objs combine:true
-- 	for obj in objs do
-- 	(
-- 		local buffer_transform = obj.transform
-- 		obj[3].controller = transform_script();obj[3].controller = PRS()
-- 		obj.transform = buffer_transform
-- 	)
-- )--由于排序的需求,这里不采用mapped
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
-- set_transform_controller_to_PRS()
-- finditem (classof obj[3].controller) #(IK_ControllerMatrix3Controller,IKControl)--,IK_Controller,IKChainControl)
-- finditem #(IK_ControllerMatrix3Controller,IKControl) (classof $[3].controller) >0

-- 为了提升效率,应在计算前使用
-- mode = getCommandPanelTaskMode()
-- setCommandPanelTaskMode mode:#create
-- 结束后使用
-- setCommandPanelTaskMode mode:mode
