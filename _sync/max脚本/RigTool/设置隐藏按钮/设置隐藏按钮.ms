try(destroydialog PartHiderRollout)catch()

rollout PartHiderRollout "设置隐藏功能" width:168 height:304
(
	
	button 'btn_add_node' "添加物体" pos:[8,8] width:56 height:24 toolTip:"添加需要隐藏的物体到选定集合,右键点击移除." align:#left
	button 'btn_add_face' "添加面" pos:[72,8] width:56 height:24 toolTip:"添加需要隐藏的面到选定集合,右键点击移除." align:#left
	
	button 'btn_new_col' "新建" pos:[136,8] width:32 height:24 toolTip:"新建集合" align:#left
	button 'btn_up_col' "上移" pos:[136,40] width:32 height:24 toolTip:"上移集合" align:#left
	button 'btn_down_col' "下移" pos:[136,72] width:32 height:24 toolTip:"下移集合" align:#left
	button 'btn_del_col' "删除" pos:[136,105] width:32 height:24 toolTip:"删除集合" align:#left
	checkbutton 'ckb_preview' "预览" pos:[136,144] width:32 height:24 toolTip:"预览布局" align:#left
	
	listbox 'lbx_list' "" pos:[8,32] width:128 height:10 align:#left

	edittext 'edt_bname' "按钮名" pos:[8,176] width:152 height:16 align:#left
	spinner 'spn_bwidth' "宽" pos:[16,200] width:64 height:16 range:[16,200,60] type:#integer scale:1 align:#left
	spinner 'spn_bheight' "高" pos:[96,200] width:64 height:16 range:[16,200,24] type:#integer scale:1 align:#left
	radiobuttons 'rdo_align' "" pos:[16,222] width:159 height:16 labels:#("靠左", "居中", "靠右") default:2 columns:3 align:#left
	spinner 'spn_offset_x' "" pos:[40,244] width:56 height:16 range:[-100,100,0] type:#integer scale:1 align:#left
	spinner 'spn_offset_y' "" pos:[104,244] width:56 height:16 range:[-100,100,0] type:#integer scale:1 align:#left
	label 'lbl_offset' "偏移" pos:[8,244] width:24 height:16 align:#left
	button 'btn_execute' "创建承载器" pos:[8,268] width:152 height:24 align:#left

	local
	sel=0,
	node_list=#(),
	mesh_list=#(),
	mesh_types=#(),
	face_list=#(),
	CheckButtonProps = #(),
	preViewRollout
	
	include "core.ms"
	
	on lbx_list selected id do (sel = id;get_properties())
	on btn_new_col pressed do new_col()
	on btn_up_col pressed do up_col()
	on btn_down_col pressed do down_col()
	on btn_del_col pressed do del_col()
		
	on btn_add_node pressed do add_node()
	on btn_add_node rightclick do del_node()
	on btn_add_face pressed do add_face()
	on btn_add_face rightclick do del_face()
		
	on edt_bname entered text do set_properties()
	on spn_bwidth changed val do set_properties()
	on spn_bheight changed val do set_properties()
	on rdo_align changed stat do set_properties()
	on spn_offset_x changed val do set_properties()
	on spn_offset_y changed val do set_properties()
		
	on ckb_preview changed state do if state then ShowPreView() else try(destroydialog preViewRollout)catch()--预览按钮
		
-- 	on PartHiderRollout close do try(destroydialog preViewRollout)catch() --关闭窗口
	on PartHiderRollout moved pos do (pos[1] += 176;pos[2] += 31;try(SetDialogPos preViewRollout pos)catch())--移动窗口
		
	on btn_execute pressed do buildCustomAttToDummy()
)

createdialog PartHiderRollout