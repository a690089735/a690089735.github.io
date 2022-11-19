filein "XAniTools-工具菜单.ms"
-- filein "XAniTools-变换工具核心.ms"
filein "XAniTools-UI依赖.ms"
filein "变换工具-杂项函数.ms"
filein "names_function.ms"




try(cui.unRegisterDialogBar XAniTools_UI) catch()
try(destroydialog XAniTools_UI) catch()

_d_size = sysInfo.desktopSize
_w_x = _d_size[1]
_w_y = 52

rollout XAniTools_UI "XAniTools" width:_w_x height:_w_y
(
	label lb "" pos:[0, _d_size[2]] width:0 height:0 --用于旧版兼容的阻挡占位,这样在刷新高度的时候会让所有图标隐藏一下,不会看到默认的排列.
	
	-- 	变换工具组
	dropDownList trans_ddl_names "" width:128 height:22
	dotNetControl trans_btn_names_del "Button" text:"X" width:22 height:22
	dotNetControl trans_btn_names_other "Button" text:"O" width:22 height:22
	dotNetControl trans_btn_names_save "Button" text:"记录" width:42 height:22
	dotNetControl trans_btn_names_load "Button" text:"选择" width:42 height:22
	
	label trans_lbl_mirror_options "粘贴选项" width:64 height:16 enabled:false
	checkbox trans_chk_refObj "" width:18 height:16 toolTip:"勾选来参考物体坐标,不勾选则保持参考世界坐标."
	pickbutton trans_btn_refObj "参考物体" width:70 height:20 enabled:false message:"选择一个用于镜像变换数据的参考物体" autoDisplay:true toolTip:"拾取参考物体."
	
	checkbox trans_chk_mirror_pos "镜像位置" width:72 height:16
	checkbox trans_chk_mirror_rot "镜像旋转" width:72 height:16
	
	label trans_lbl_mirror_xis "镜像轴:" width:42 height:16
	radiobuttons trans_rdo_mirror_axis "" width:97 height:16 labels:#("X", "Y", "Z") default:1 columns:3

	label trans_lbl_flip_axis "翻转轴:" width:42 height:16
	radiobuttons trans_rdo2_flip_axis "" width:97 height:16 labels:#("X", "Y", "Z") default:1 columns:3
	
	dotNetControl trans_ckb_change_mode "Button" text:"单\n帧" width:22 height:42
	dropDownList trans_ddl_list "" width:128 height:22
	dotNetControl trans_btn_del "Button" text:"X" width:22 height:22
	dotNetControl trans_btn_other "Button" text:"O" width:22 height:22
	dotNetControl trans_btnsave "Button" text:"记录" width:42 height:22
	dotNetControl trans_btn_load "Button" text:"粘贴" width:42 height:22
	
	dotNetControl trans_lbl_sep "label" text:" " width:(_w_x - 12) height:1
	
	-- 	主工具栏按钮组
	dotNetControl btn_trans_tool "CheckBox" text:"变换工具" width:75 height:22
	dotNetControl btn_keys_tool "CheckBox" text:"关键帧工具" width:75 height:22
	dotNetControl btn_preview_tool "CheckBox" text:"创建预览" width:75 height:22
	dotNetControl btn_other_tool "CheckBox" text:"打开工具箱" width:75 height:22
	
	-- 	商标
	dotNetControl lbl_logo "DevExpress.XtraEditors.LabelControl" --换成富文本,颜色取时间滑块背景色(colorMan.getColor #trackbarBg)*255 --LabelControl.HyperlinkClick
	timer tmr_logo interval:20 active:false --logo渐变动画
	
	-- 	时间
	dotNetControl lbl_play_speed "label" text:"1X" width:28 height:18 --1/4X;1/2X;1X;2X;4X
	dotNetControl sld_play_speed "system.windows.forms.trackbar" width:64 height:16
	spinner spn_start_time "|<" width:60 height:16 range:[-13421700, animationrange.end.frame - 1, animationrange.start.frame] type:#integer scale:1 --大于或小于13421772会导致max崩溃,max2014,但是直接输入会四舍五入为13421800,这里取舍一下
	spinner spn_current_time "" width:60 height:16 range:[-13421700, 13421700, currenttime.frame] type:#integer scale:1
	spinner spn_end_time ">|" width:60 height:16 range:[animationrange.start.frame + 1, 13421772, animationrange.end.frame] type:#integer scale:1
	
	timer tmr1 interval:50 active:true --50ms和即时刷新的效果几乎一样,但是减少了大量计算.
	
	local
	cfg_file = (GetDir #plugcfg) + @"\XAniTool.ini", --配置目录,各个配置独立,其中还包括高度刷新数据(异常或没有也可以容错的).这个不能写在初始化里,因为初次启动时也要使用.
	desktop_folder = "",
	data_folder = "",
	wh = [_w_x, _w_y],
	-- 	anchor_pos = #(),--不同组件有不同的锚点位置(变换工具最高,关键帧第二,创建预览第三,主界面最低)
	buttons = #(trans_btn_names_del, trans_btn_names_other, trans_btn_names_save, trans_btn_names_load, trans_ckb_change_mode, trans_btn_del, trans_btn_other, trans_btnsave, trans_btn_load),
	checkButtons = #(btn_trans_tool, btn_keys_tool, btn_preview_tool, btn_other_tool),
	seplist = #(trans_lbl_sep),
	main_height = 52, --锚点
	ttool_height = (getINISetting cfg_file "ToolState" "ttool_height") as integer, --等于0则不显示
	ktool_height = (getINISetting cfg_file "ToolState" "ktool_height") as integer,
	ptool_height = 0,
	logo_tick = 0,
	edt_menu_displayer = undefined,
	names_data_list = #(),
	trans_data_list = #()
	
	--变换工具-组件功能
	on trans_ckb_change_mode click s e do change_ttool_state XAniTools_UI s e --切换变换工具
	on trans_btn_names_other click s e do --测试名称列表刷新
	(
		popUpMenu menu_names_list pos:(s.pos) rollout:XAniTools_UI
		-- 		names_data_get XAniTools_UI 
		-- 		names_data_display XAniTools_UI
	)
	on trans_btn_names_save click s e do --记录名称列表
	(
		names_data_save XAniTools_UI
		names_data_display XAniTools_UI
	)
	on trans_btn_names_del click s e do
	(
		names_data_delete XAniTools_UI trans_ddl_names.selection
		names_data_list = data_rename_all XAniTools_UI names_data_list d:(names_data_list.count as string).count
		names_data_get XAniTools_UI
		names_data_display XAniTools_UI
		if trans_ddl_names.selection == 0 do trans_ddl_names.selection = names_data_list.count
	)

	on trans_btn_names_load click s e do
	(
		select (names_data_load XAniTools_UI)
	)
	
	
	-- 关键帧工具-组件功能 

	
	-- 主窗口-组件功能
	on sld_play_speed ValueChanged s e do (change_play_speed_text sld_play_speed.value s lbl_play_speed ; enableAccelerators = true) --setfocus没有使快捷键重新可用的起作用
	on spn_current_time changed val do set_currenttime val
	on spn_start_time changed val do (spn_end_time.range = [val + 1, 13421700, animationrange.end] ; set_animation_range val animationrange.end)
	on spn_end_time changed val do (spn_start_time.range = [-13421700, val - 1, animationrange.start] ; set_animation_range animationrange.start val)
	
	--主窗口功能
	fn set_spn_current_time = spn_current_time.value = currenttime.frame
	fn set_spn_animationrange_time = (spn_start_time.value = animationrange.start.frame ; spn_end_time.value = animationrange.end.frame)
	on XAniTools_UI open do init_XAniTools_UI XAniTools_UI
	on tmr1 tick do --布局_时钟事件
	-- 	try
	(
		for c in XAniTools_UI.controls do set_transform_toolstrip_layuout wh[1] wh[2] c ttool_height:ttool_height ktool_height:ktool_height ptool_height:ptool_height
		tmr1.active = false
	)
	-- 	catch(tmr1.active=false;messagebox "布局异常")
	on XAniTools_UI resized current_wh do (wh = current_wh ; tmr1.active = true)
	on XAniTools_UI close do clean_XAniTools_UI XAniTools_UI
	
	--LOGO功能
	on lbl_logo MouseEnter s e do (tmr_logo.active = true)
	on lbl_logo MouseLeave s e do (tmr_logo.active = false ; lbl_logo.text = build_html ((colorMan.getColor #trackbarBg) * 255) ; logo_tick = (mod logo_tick 360) as integer - 1)
	on tmr_logo tick do lbl_logo.text = build_html ([255, 255, 255] * (sin (logo_tick += 1) * 0.5 + 0.5))
	
	--切换工具
	on btn_trans_tool Click s e do --不要用CheckedChanged,这样自动加载状态时会无限循环
	(
		if s.Checked then
		(
			ttool_height = 51
		) else
		(
			ttool_height = 0
		)
		save_tool_state XAniTools_UI
		change_window_height XAniTools_UI (main_height + ttool_height + ktool_height) need_refresh:true --更新高度
	)
	on btn_keys_tool Click s e do --不要用CheckedChanged,这样自动加载状态时会无限循环
	(
		if s.Checked then
		(
			ktool_height = 20
		) else
		(
			ktool_height = 0
		)
		save_tool_state XAniTools_UI
		change_window_height XAniTools_UI (main_height + ttool_height + ktool_height) need_refresh:true --更新高度
	)
)
get_h = 52 + (getINISetting XAniTools_UI.cfg_file "ToolState" "ttool_height") as integer + (getINISetting XAniTools_UI.cfg_file "ToolState" "ktool_height") as integer
createdialog XAniTools_UI _d_size[1] get_h pos:[_d_size[1], _d_size[2]] style:#(#style_titlebar, #style_border)

-- SetDialogSize 
-- windows.setWindowPos 1052412P 0  836 1920 52 true --即使设置了,在2020中也不能刷新
-- windows.setWindowPos XAniTools_UI.hwnd 0  0 1911 52 true --即使设置了,在2020中也不能刷新,黑块,并一动就回去
-- windows.setWindowPos <int HWND> <int x> <int y> <int width> <int height> <bool repaint>
-- registerTimeCallback <fn>
-- unRegisterTimeCallback <fn>
-- #animationRangeChange: undefined 
-- callbacks.addScript #animationRangeChange "XAniTools_UI.set_current_time()" id:XAniTools
-- callbacks.removeScripts [<callback_type_name>] [id:<name>] 


--一个用来创建瀑布流文字的可视化sin颜色
-- 		print (sin(logo_tick+=1)*0.5+0.5)
-- 		c = ([255,255,255]*(sin(logo_tick+=1)*0.5+0.5))
-- 		point pos:c wirecolor:c
-- 		if objects.count > 10 do delete objects[1]