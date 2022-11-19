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
fn sort_by_hierarchy obj_list:(getcurrentselection()) combine:false = --按层级匹配物体,combine:true可以把返回值拼合成一个数组.
(
	local
	prt_list = for o in obj_list where (finditem obj_list o.parent) == 0 collect o, --收集父物体,不单独提取的话,会因为列表的不断删除而发生错过物体的问题
	all_list = for p in prt_list collect for n in #()+p where (fid = finditem obj_list n)>0 collect (deleteitem obj_list fid;n) --收集父物体和列表中的子物体
	if combine then combine_array all_list else all_list
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
	objs = sort_by_hierarchy obj_list:objs combine:true
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
