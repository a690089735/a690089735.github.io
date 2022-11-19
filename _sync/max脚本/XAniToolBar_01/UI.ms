-- 计算可以隐藏控件的位置
fn hide_pos ctrl = [-ctrl.width,-ctrl.height]
--窗口布局响应
fn set_transform_toolstrip_layuout w h ctrl = --各工具的偏移锚点,其中ttool锚点始终为0(最高),创建预览和打开工具箱可能完全是菜单式界面,不需要锚点.
(--出现了一个问题,在高版本中,dotnet控件即使隐藏了,也会阻挡按钮获得鼠标,所以不光要隐藏,还要把位置重设
	local top = 5, side = 12, --顶边5,侧边10,底边6(可无视)-- 	nn = ctrl.pos
	main_anchor = [0, ttool_height + ktool_height + ptool_height],
	ptool_anchor = [0, ttool_height + ktool_height],
	ktool_anchor = [0, ttool_height]
	new_pos = case ctrl.name of --anchor_pos为偏移锚点,为了未来能做上下伸缩使用
	(
		-- 		变换工具组
		"trans_ddl_names":(ctrl.visible = ttool_height > 0 and w > 295 ;[side, top])
		"trans_btn_names_del":(if ttool_height > 0 and w > 295 then [side, top + 20] else hide_pos ctrl)
		"trans_btn_names_other":(if ttool_height > 0 and w > 295 then [side + 22, top + 20] else hide_pos ctrl)
		"trans_btn_names_save":(if ttool_height > 0 and w > 295 then [side + 44, top + 20] else hide_pos ctrl)
		"trans_btn_names_load":(if ttool_height > 0 and w > 295 then [side + 86, top + 20] else hide_pos ctrl)
		
		"trans_lbl_mirror_options":(ctrl.visible = ttool_height > 0 and w > 600 ;[w - side - 42 - 97 - 2 - 140 - 72 - 72 - 18, top + 2])
		"trans_chk_refObj":(ctrl.visible = ttool_height > 0 and w > 600 ;[w - side - 42 - 97 - 4 - 140 - 72 - 72 - 18 - 2, top + 20])
		"trans_btn_refObj":(ctrl.visible = ttool_height > 0 and w > 600 ;[w - side - 42 - 97 - 4 - 140 - 72 - 3 - 72 - 2, top + 18])
		
		"trans_chk_mirror_pos":(ctrl.visible = ttool_height > 0 and w > 510 ;[w - side - 42 - 97 - 4 - 140 - 72 - 3, top + 1])
		"trans_chk_mirror_rot":(ctrl.visible = ttool_height > 0 and w > 510 ;[w - side - 42 - 97 - 4 - 140 - 72 - 3, top + 20])
		
		"trans_lbl_mirror_axis":(ctrl.visible = ttool_height > 0 and w > 430 ;[w - side - 42 - 97 - 4 - 140 - 4, top+2])
		"trans_rdo_mirror_axis":(ctrl.visible = ttool_height > 0 and w > 430 ;[w - side - 97 - 4 - 140 - 4, top+2])
		"trans_lbl_flip_axis":(ctrl.visible = ttool_height > 0 and w > 430 ;[w - side - 42 - 97 - 4 - 140 - 4, top + 20 +2])
		"trans_rdo_flip_axis":(ctrl.visible = ttool_height > 0 and w > 430 ;[w - side - 97 - 4 - 140 - 4, top + 20 +2])
		
		"trans_ckb_change_mode":(if ttool_height > 0 then [w - 152 - 3 - 8, top ] else hide_pos ctrl) --:-side-140
		"trans_ddl_list":(ctrl.visible = ttool_height > 0 ;[w - side - 128, top])
		"trans_btn_del":(if ttool_height > 0 then [w - side - 128, top + 20] else hide_pos ctrl)
		"trans_btn_other":(if ttool_height > 0 then [w - side - 106, top + 20] else hide_pos ctrl)
		"trans_btn_save":(if ttool_height > 0 then [w - side - 84, top + 20] else hide_pos ctrl)
		"trans_btn_load":(if ttool_height > 0 then [w - side - 42, top + 20] else hide_pos ctrl)
		
		"trans_lbl_sep":(ctrl.width = w - 24; if ttool_height > 0 then [side, 50] else hide_pos ctrl)
		
		--        动画帧工具组
		"times_lbl_times":(if ktool_height > 0 then [side,top+2]+ktool_anchor else hide_pos ctrl)
		"times_edt_times":(ctrl.width = w - side - side - 128 - 64 - 3-42-42-22-22;if ktool_height > 0 then [side+64,top+3]+ktool_anchor else hide_pos ctrl)
		"times_ddl_list":(if ktool_height > 0 then [w-side-42-42-22-22-128,top]+ktool_anchor else hide_pos ctrl)
		
		"times_btn_del":(if ktool_height > 0 then [w-side-42-42-22-22,top]+ktool_anchor else hide_pos ctrl)
		"times_btn_other":(if ktool_height > 0 then [w-side-42-42-22,top]+ktool_anchor else hide_pos ctrl)
		"times_btn_save":(if ktool_height > 0 then [w-side-42-42,top]+ktool_anchor else hide_pos ctrl)
		"times_btn_select":(if ktool_height > 0 then [w-side-42,top]+ktool_anchor else hide_pos ctrl)
		
		"times_lbl_sep":(ctrl.width = w - 24; if ktool_height > 0 then [side, 30]+ktool_anchor  else hide_pos ctrl)
		
		--        主工具栏按钮组
		"btn_trans_tool":(ctrl.visible = w > 315 ;[side, top] + main_anchor)
		"btn_times_tool":(ctrl.visible = w > 325 ;[side + 75, top] + main_anchor)
		"btn_preview_tool":(ctrl.visible = w > 315 ;[side, top + 22] + main_anchor)
		"btn_other_tool":(ctrl.visible = w > 325 ;[side + 75, top + 22] + main_anchor)
		
		"lbl_logo":(ctrl.visible = w > 400 ;[(w - ctrl.width) / 2, top] + main_anchor)
		
		"lbl_play_speed":[w - side - ctrl.width - 124 - 14, top - 1 + 6] + main_anchor
		"sld_play_speed":[w - side - ctrl.width - 60 - 14, top + 6] + main_anchor
		
		"btn_set_key":[w - side - 60 - 14,top + 6] + main_anchor
		"spn_current_time":[w - side - 5 - 6, top + 6] + main_anchor
		
		"spn_start_time":[w - side - 22 - 60 - 6, top + 22 + 6] + main_anchor --spn获取不了宽度和高度属性
		"spn_end_time":[w - side - 5 - 6, top + 22 + 6] + main_anchor
		
		-- 		容错,不在列表中的东西设为自身位置,包括tmr和未知物体
		default:ctrl.pos 
	)
	ctrl.pos = new_pos
)
--设置窗口刷新标记(为了兼容不支持PySide的旧版max,不设置刷新标记,会导致无限循环),现在不需要了,更改了逻辑
-- fn set_older_refresh_tag dialog tag = setINISetting (dialog.cfg_dir + @"\XAniTool.ini") "TEMP" "need_refresh" (tag as string)
-- fn is_need_refresh dialog = "true" == getINISetting (dialog.cfg_dir + @"\XAniTool.ini") "TEMP" "need_refresh"
--设置窗口高度(需要上面的设置刷新标记.否则会在兼容旧版时无限循环)
fn change_window_height val need_refresh:false =
(
	try --支持py的话就不用重载了
	(
		local
		pySide2 = python.import "PySide2", --高版本需要特别调节高度
		tool_bar = pySide2.QtWidgets.QWidget.find (UIAccessor.GetParentWindow (UIAccessor.GetParentWindow XAniTools_UI.hwnd))
		tool_bar.setFixedHeight val
		--高版本有时候刷新会异常,调用一下布局方法
		XAniTools_UI.tmr_layout.tick()
	)
	catch
	(
-- 		if need_refresh do --因为旧版直接合并进去就可以,所以其实不需要刷新.
-- 		(
			-- 			set_older_refresh_tag dialog false
			try (
				cui.unRegisterDialogBar XAniTools_UI
				) catch()
			SetDialogPos XAniTools_UI sysInfo.desktopSize
-- 			try (destroydialog dialog) catch()
-- 			createdialog dialog wh[1] val pos:sysInfo.desktopSize style:#(#style_titlebar, #style_border) --写一个配置文件,不然会一直刷新 --在重载时设置新的高度
-- 			SetDialogSize XAniTools_UI [XAniTools_UI.width,val]
			XAniTools_UI.height = val
			cui.RegisterDialogBar XAniTools_UI style:#(#cui_dock_bottom) minSize:[0, 0] --parent:200132P --目前不需要了minSize:[_w_x,_w_y] maxSize:[_w_x,_w_y] --高版本必须指定style,高版本必须指定min和maxsize,不再必须指定
			cui.DockDialogBar XAniTools_UI #cui_dock_bottom
-- 		)
	)
)
--记录工具状态
fn save_tool_state =
(
	setINISetting cfg_file "ToolState" "ttool_height" (ttool_height as string)
	setINISetting cfg_file "ToolState" "ktool_height" (ktool_height as string)
	-- 	setINISetting (dialog.cfg_dir + @"\XAniTool.ini") "ToolState" "times_tool" (dialog.btn_times_tool.Checked as string)
)
--读取工具状态
fn load_tool_state =
(
	btn_trans_tool.Checked = (ttool_height = (getINISetting cfg_file "ToolState" "ttool_height") as integer) > 0
	btn_times_tool.Checked = (ktool_height = (getINISetting cfg_file "ToolState" "ktool_height") as integer) > 0
)

-- base64图片
fn StringToImage str = -- http://lonerobot.net/ --给UI初始化调用
(
	local ConvertClass = dotNetClass "System.Convert"
	local ImageClass = dotNetClass "System.Drawing.Image"
	byteArr = ConvertClass.FromBase64String str
	memstream = dotnetobject "System.IO.MemoryStream" byteArr
	DecodedImg = ImageClass.fromstream memstream
	memstream.close() ; return DecodedImg
)
--标签
fn set_lbl_play_speed_text lbl v:timeConfiguration.playbackSpeed =
	(
		lbl.text = case v of
		(
			1:"1/4X"
			2:"1/2X"
			4:"2X"
			5:"4X"
			default:"1X"
		)
		if isAnimPlaying() do (stopAnimation(); playAnimation immediateReturn:true) --不能在同一个函数中播放再停止,但是停止再播放时没关系的(因为播放动画是新线程,所以多次播放需要多次停止)
	)
--LOGO相关
fn build_html fcolor =
(
	html = stringstream ""
	format "<color=%,%,%><b>XAniToolStrip</b>\r\nby<i>无名玩家X</i>\r\n<u><size=10>a690089735.gitee.io</size></u></color>" (fcolor[1] as integer) (fcolor[2] as integer) (fcolor[3] as integer) to:html
	html as string
)
--设置外部刷新目标_names
fn set_send_message_names_target = --每次启动时获取
(
-- 	原理:
-- 	如果没有文件,则新建文件保存自身.
-- 	如果由文件,则读取文件验证一下句柄的text,保留合格的句柄和自身
	local
	target_file = data_folder + "names.targets",
	targets = #(trans_btn_names_refresh.hwnd)[1]
	if doesFileExist target_file do
	(
		local
		f = openfile target_file
		targets += (for hwnd in readValue f where UIAccessor.GetWindowText hwnd == "trans_btn_names_refresh" collect hwnd)
		close f
	)
	deleteFile target_file
	local
	f = createfile target_file
	format "%" targets to:f
	close f
)
--设置并获取外部刷新目标_trans
fn set_send_message_trans_target =
(
	local
	target_file = data_folder + "trans.targets",
	targets = #(trans_btn_refresh.hwnd)[1]
	if doesFileExist target_file do
	(
		local
		f = openfile target_file
		targets += (for hwnd in readValue f where UIAccessor.GetWindowText hwnd == "trans_btn_refresh" collect hwnd)
		close f
	)
	deleteFile target_file
	local
	f = createfile target_file
	format "%" targets to:f
	close f
)
--窗口关闭时清理
-- fn unreg_events = --必须把关闭的清理放在主函数里,不然会有异常循环导致无法关闭(2014中)
-- (
-- 	callbacks.removeScripts id:#XAniTools
-- 	unRegisterTimeCallback set_spn_current_time --顺序不可更改,改了就崩,原因不明
	
-- 	save_tool_state()
-- )
fn reg_events =
(
	callbacks.addScript #animationRangeChange "XAniTools_UI.set_animation_range_spinner()" id:#XAniTools --时间范围回调
	registerTimeCallback set_spn_current_time --时间回调(第一次运行时会有问题,以后放在一起就好了)
)
--窗口初始化
fn init_XAniTools_UI dialog =
(
	
	--获取色彩转为dotnet
	fn get_dotnet_color n = (colr = (colorMan.getColor n) * 255; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
	
	--dotnet组件合集
	local
	titles = #(trans_lbl_mirror_options,times_lbl_times),
	labels = #(lbl_play_speed),
	sliders = #(sld_play_speed),
	edits = #(times_edt_times),
	buttons = #(trans_btn_names_del, trans_btn_names_other, trans_btn_names_save, trans_btn_names_load, trans_ckb_change_mode, trans_btn_del, trans_btn_other, trans_btn_save, trans_btn_load)+
	#(times_btn_del,times_btn_other,times_btn_save,times_btn_select,btn_set_key),--,track_btn_obj_other,track_btn_obj_add,track_btn_obj_delete
	checkButtons = #(btn_trans_tool, btn_times_tool, btn_preview_tool, btn_other_tool), --,track_ckb_mode
	seplist = #(trans_lbl_sep,times_lbl_sep),
	
	-- 获取颜色到dotnet
	BackColor = get_dotnet_color #background, --暂时作为全局变量,后续合并进窗口中
	ForeColor = get_dotnet_color #text,
	PanelColor = if colorMan.getColor #button == [0,0,0] then get_dotnet_color #window else get_dotnet_color #button, --高低版本的颜色定义不同,获取不到button色时,获取旧版的window色,获取不到的色彩会是黑色[0,0,0].
	-- WindowTextColor = get_dotnet_color #windowtext
	SepBackColor = get_dotnet_color #trackbarBg,
	--设置dotnet风格
	BorderSize = 0,
	MiddleCenter = (dotnetclass "System.Drawing.ContentAlignment").MiddleCenter,
	TextRight = (dotnetclass "System.Windows.Forms.HorizontalAlignment").Right,
	BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,
	Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat,
	Appearance = (dotnetclass "System.Windows.Forms.Appearance").button

-- 			1:(dotnetclass "System.Drawing.ContentAlignment").MiddleLeft
-- 			2:(dotnetclass "System.Drawing.ContentAlignment").MiddleCenter
-- 			3:(dotnetclass "System.Drawing.ContentAlignment").MiddleRight

-- 	print "0000"
	
	-- 设置dotnet控件风格函数
	for c in dialog.controls do try (c.name = (FilterString (c as string) ":")[2]) catch() --设置控件名,dotnet控件name默认不是变量名,加try是因为max默认控件的name是只读的
	--设置标题标签风格
	for lbl in titles do (lbl.BackColor = BackColor; lbl.ForeColor = SepBackColor;lbl.font = dotNetObject "System.Drawing.Font" lbl.font.name 8 (dotNetClass "System.Drawing.FontStyle").bold) --单独设置标签)
	--设置文本标签风格
	for lbl in labels do (lbl.BackColor = BackColor; lbl.ForeColor = ForeColor)
	lbl_play_speed.TextAlign = (dotnetclass "System.Drawing.ContentAlignment").MiddleRight --单独设置标签
	set_lbl_play_speed_text lbl_play_speed 
	--设置编辑框风格
	for edt in edits do (edt.BackColor = PanelColor; edt.ForeColor = ForeColor;edt.BorderStyle = BorderStyle;edt.AutoSize = false)
	times_edt_times.TextAlign = TextRight --单独设置编辑框文本右对齐
-- 	--设置按钮风格
	for btn in buttons do (btn.BackColor = BackColor; btn.ForeColor = ForeColor; btn.Flatstyle = Flat; btn.Flatappearance.borderSize = BorderSize)
-- 	--设置单选按钮风格 
	for btn in checkButtons do (btn.BackColor = BackColor ; btn.ForeColor = ForeColor ; btn.Flatstyle = Flat ; btn.Appearance = Appearance ; btn.Flatappearance.borderSize = BorderSize ; btn.TextAlign = MiddleCenter)
	dialog.trans_ckb_change_mode.Flatappearance.borderSize = 1 ; dialog.trans_ckb_change_mode.Flatappearance.BorderColor = SepBackColor --额外设置模式按钮
	--设置滑块属性
	for sld in sliders do
	(
		sld.backcolor = BackColor ; sld.AutoSize = off
		sld.TickStyle = sld.TickStyle.None ; sld.Minimum = 0 ; sld.Maximum = 4
		sld.value = timeConfiguration.playbackSpeed - 1
		sld.LargeChange = 1 --点击一次移动的单位
	)
	--设置分割符
	for sep in seplist do (sep.backcolor = SepBackColor;sep.TextAlign = MiddleCenter)
	
	-- 	set_dotnet_label_properties dialog.lbl_logo aligntype:2 --设置logo
	-- 	dialog.lbl_logo.ForeColor = getColor ((colorMan.getColor #trackbarBg)*255) dir:true
	--设置logo
	lbl_logo.AllowHtmlString = true
	lbl_logo.Appearance.TextOptions.HAlignment = lbl_logo.Appearance.TextOptions.HAlignment.Center
	-- 	lbl.AutoSizeMode = lbl.AutoSizeMode.None
	-- 	lbl.Size = (dotNetObject "System.Drawing.Size" 200 51)
	lbl_logo.Appearance.TextOptions.WordWrap = lbl_logo.Appearance.TextOptions.WordWrap.Wrap
	-- 	lbl.Appearance.FontStyleDelta = false
	lbl_logo.Appearance.BackColor = BackColor
	lbl_logo.text = build_html ((colorMan.getColor #trackbarBg) * 255) --这不要dotnet颜色
	
	logo_tick = (bs = colorMan.getColor #trackbarBg; asin ((bs[1] + bs[2] + bs[3]) / 3)) as integer - 1
	
	--创建菜单
	include "Menus.ms"
		
	--注册事件
	reg_events()
	
	cui.RegisterDialogBar dialog style:#(#cui_dock_bottom) minSize:[0, 0] --parent:200132P --目前不需要了minSize:[_w_x,_w_y] maxSize:[_w_x,_w_y] --高版本必须指定style,高版本必须指定min和maxsize,不再必须指定
	cui.DockDialogBar dialog #cui_dock_bottom
	
	--设置窗口尺寸
	load_tool_state() --加载工具开启状态
	wh = [sysInfo.desktopSize[1],(52 + ttool_height + ktool_height)]
	change_window_height (dialog.main_height + dialog.ttool_height + dialog.ktool_height + dialog.ptool_height) need_refresh:false
	
	--设置数据文件夹
	makedir dialog.data_folder
	
	--更新names_data
	names_data_get()
	names_data_display()
	trans_ddl_names.selection = names_data_list.count --选择最后一个
	
	--更新trans_data
	trans_ckb_change_mode.text = case trans_mode of
	(
		0: "单\n帧"
		1: "逐\n帧"
		2: "相\n对"
	)
	trans_data_get()
	trans_data_display()
	trans_ddl_list.selection = trans_data_list.count
	
	--更新时间数据times_data
	times_data_get()
	times_data_display()
	times_ddl_list.selection = times_data_list.count
	times_data_load()
	
	--初始化镜像状态
	trans_tool_sate_load()
	trans_tool_set_enabled()
	
	--设置外部刷新目标
	set_send_message_names_target()
	set_send_message_trans_target()
) 
--改变播放速度显示
fn change_play_speed_text v sld lbl =
(
	timeConfiguration.playbackSpeed = v + 1
	set_lbl_play_speed_text lbl
)
--设置时间相关
fn set_animation_range start end = (animationrange = interval start end;if isAnimPlaying() do (stopAnimation(); playAnimation immediateReturn:true))
fn set_animation_range_spinner = (spn_start_time.value = animationrange.start;spn_end_time.value = animationrange.end)
fn set_currenttime val = 
(
	if val < animationrange.start do set_animation_range val animationrange.end
	if val > animationrange.end do set_animation_range animationrange.start val
	slidertime = val
)