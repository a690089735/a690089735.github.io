try(DestroyDialog draw_track)catch()
rollout draw_track "无标题" width:376 height:40
(
	colorPicker 'cp1' "" pos:[240,8] width:24 height:24 color:(color 255 0 0) title:"选择起始颜色" align:#left
	colorPicker 'cp2' "" pos:[272,8] width:24 height:24 color:(color 128 255 128) align:#left
	checkButton 'ckb1' "显示" pos:[8,8] width:32 height:24 align:#left
	checkButton 'ckb2' "仅选择" pos:[40,8] width:40 height:24 align:#left
	checkButton 'ckb3' "仅可见" pos:[80,8] width:40 height:24 align:#left
	checkButton 'ckb4' "显示方向" pos:[120,8] width:56 height:24 align:#left
	checkButton 'ckb5' "显示时间" pos:[176,8] width:56 height:24 align:#left
	button 'btn1' "+" pos:[304,8] width:24 height:24 align:#left
	button 'btn2' "-" pos:[336,8] width:24 height:24 align:#left
	
	timer 'tmr_track_up_ranges' "" interval:100 active:false
	local upgrade_trans_list = #()
	local upgrade_ranges_list = #()
	
	include "轨迹-核心3.ms"
	
	on draw_track open do
	(
		try(unregister_callback())catch()
		set_color()
		get_objs_list()
		for id = 1 to objs_list.count do up_ranges_list id --此处不可优化,因为时钟延时,会导致第一次绘制时读取到undefined
			
		register_callback()
	)
	on draw_track close do
	(
		unregister_callback()
	)
	
	on btn1 pressed do for obj in getCurrentSelection() do up_trans_list obj
	on btn2 pressed do (ev_delete_node 0 (for obj in getCurrentSelection() collect GetHandleByAnim obj) reset_property:true;redrawViews())
	
	on cp1 changed col do set_color()
	on cp2 changed col do set_color()
	
	on tmr_track_up_ranges tick do
	(
		while upgrade_ranges_list.count > 0 do
		(
			up_ranges_list upgrade_ranges_list[1]
			deleteItem upgrade_ranges_list 1
		)
		tmr_track_up_ranges.active = false
	)
	
)
CreateDialog draw_track