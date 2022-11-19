local menu_setkeys_list =
rcmenu menu_setkeys_list
(
-- 	fn has_item = XAniTools_UI.trans_ddl_names.items.count > 0 -- define filter function
-- 	menuItem mi_r "Renderable" filter:has_item
	menuItem mi_set_Euler_Ctrl "设置Euler旋转控制"
	menuItem mi_set_TCB_Ctrl "设置TCB旋转控制"
	separator sep0
	menuItem mi_set_trans_keys "设置变换帧"
	menuItem mi_clr_trans_keys "清除变换帧" --默认清理全部,按住shift则只清理范围外的,按住alt则只清理范围内的,按住ctrl保留首尾.
	separator sep1
	menuItem mi_set_pos_keys "设置位置帧"
	menuItem mi_set_rot_keys "设置旋转帧"
	menuItem mi_set_scl_keys "设置缩放帧"
	separator sep2
	menuItem mi_clr_pos_keys "清除位置帧"
	menuItem mi_clr_rot_keys "清除旋转帧"
	menuItem mi_clr_scl_keys "清除缩放帧"
	separator sep3
	menuItem mi_collapse_controller "塌陷默认控制器"
	menuItem mi_collapse_ani_to_ctrl "塌陷动画到默认控制器"
	separator sep4
	menuItem mi_collapse_to_meshAni "塌陷到顶点动画"
	menuItem mi_create_ani_poxy "生成动画代理" --创建一组和原物体结构尽量相同的辅助物体,符合的框架大小,并且带有原版逐帧动画.
	
	on mi_set_Euler_Ctrl picked do
	(
		
	)
	on mi_set_trans_keys picked do
	(
		
	)

	on menu_setkeys_list open do
	(
		
	)
	
)