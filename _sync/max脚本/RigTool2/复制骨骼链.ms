fn copy_bones_list bones_list =
(
	local old_bones_list,new_bones_list
	maxOps.CloneNodes &bones_list expandHierarchy:false cloneType:#copy actualNodeList:&old_bones_list newNodes:&new_bones_list
	new_bones_list
)
-- bones_list = copy_bones_list (getcurrentselection())