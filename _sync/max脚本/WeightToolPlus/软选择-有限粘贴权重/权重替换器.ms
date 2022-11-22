try(DestroyDialog WeightReplacerRollout)catch()
rollout WeightReplacerRollout "WeightReplacer 0.1" width:232 height:204
(
	/* 
	当复制的权重总和不是1时,应当归一化,方便后续替换的计算
	*/
	
	multiListBox 'lbx_bone_list' "Bone List" pos:[8,8] width:176 height:13 align:#left
	button 'btn_copy' "Copy" pos:[184,32] width:40 height:48 align:#left
	button 'btn_replace' "Replace" pos:[184,96] width:40 height:48 align:#left
	
	local
	_up_tool,
	_sk,
	copy_buffer = #(#(),#())
	
	include "rollout_core.ms"
	
	on WeightReplacerRollout open do
	(
		reg_up_ui()
		upUI 0 0
	)
	on WeightReplacerRollout close do
	(
		unreg_up_ui()
	)
	on lbx_bone_list selectionEnd do
	(
		select_all_verts _sk lbx_bone_list.selection
	)
	on btn_copy pressed do
	(
		select_all_verts _sk lbx_bone_list.selection --选择顶点
		
		--从选择的顶点复制骨骼(节点)权重,只复制列表骨骼的部分,权重归一化处理(不用完美归一,允许误差)
		copy_buffer = copy_verts_nodes_weights_limited _sk lbx_bone_list.selection 
	)
	on btn_replace pressed do
	(
		paste_verts_nodes_weights_to_select_bone _sk copy_buffer
	)
)
CreateDialog WeightReplacerRollout