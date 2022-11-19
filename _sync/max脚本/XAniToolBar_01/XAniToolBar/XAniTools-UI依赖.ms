--窗口布局响应
fn set_transform_toolstrip_layuout w h ctrl main_height:52 ttool_height:0 ktool_height:0 ptool_height:0 = --各工具的偏移锚点,其中ttool锚点始终为0(最高),创建预览和打开工具箱可能完全是菜单式界面,不需要锚点.
(
	local top = 5, side = 12, --顶边5,侧边10,底边6(可无视)-- 	nn = ctrl.pos
	main_anchor = [0, ttool_height + ktool_height + ptool_height],
	ptool_anchor = [0, ttool_height + ktool_height],
	ktool_anchor = [0, ttool_height]
	new_pos = case ctrl.name of --anchor_pos为偏移锚点,为了未来能做上下伸缩使用
	(
		-- 		变换工具组
		"trans_ddl_names":( ctrl.visible = ttool_height > 0 and w > 295 ;[side, top] )
		"trans_btn_names_del":( ctrl.visible = ttool_height > 0 and w > 295 ;[side, top + 20] )
		"trans_btn_names_other":( ctrl.visible = ttool_height > 0 and w > 295 ;[side + 22, top + 20] )
		"trans_btn_names_save":( ctrl.visible = ttool_height > 0 and w > 295 ;[side + 44, top + 20] )
		"trans_btn_names_load":( ctrl.visible = ttool_height > 0 and w > 295 ;[side + 86, top + 20] )
		
		"trans_lbl_mirror_options":( ctrl.visible = ttool_height > 0 and w > 600 ;[w - side - 42 - 97 - 4 - 140 - 72 - 72, top + 2] )
		"trans_chk_refObj":( ctrl.visible = ttool_height > 0 and w > 600 ;[w - side - 42 - 97 - 4 - 140 - 72 - 3 - 72 - 18, top + 22] )
		"trans_btn_refObj":( ctrl.visible = ttool_height > 0 and w > 600 ;[w - side - 42 - 97 - 4 - 140 - 72 - 3 - 72 - 2, top + 20] )
		
		"trans_chk_mirror_pos":( ctrl.visible = ttool_height > 0 and w > 510 ;[w - side - 42 - 97 - 4 - 140 - 72 - 3, top + 2] )
		"trans_chk_mirror_rot":( ctrl.visible = ttool_height > 0 and w > 510 ;[w - side - 42 - 97 - 4 - 140 - 72 - 3, top + 22] )
		
		"trans_lbl_mirror_xis":( ctrl.visible = ttool_height > 0 and w > 430 ;[w - side - 42 - 97 - 4 - 140 - 4, top + 2] )
		"trans_rdo_mirror_axis":( ctrl.visible = ttool_height > 0 and w > 430 ;[w - side - 97 - 4 - 140 - 4, top + 2] )
		"trans_lbl_flip_axis":( ctrl.visible = ttool_height > 0 and w > 430 ;[w - side - 42 - 97 - 4 - 140 - 4, top + 22] )
		"trans_rdo2_flip_axis":( ctrl.visible = ttool_height > 0 and w > 430 ;[w - side - 97 - 4 - 140 - 4, top + 22] )
		
		"trans_ckb_change_mode":( ctrl.visible = ttool_height > 0 ;[w - 152 - 3 - 8, top] ) --:-side-140
		"trans_ddl_list":( ctrl.visible = ttool_height > 0 ;[w - side - 128, top] )
		"trans_btn_del":( ctrl.visible = ttool_height > 0 ;[w - side - 128, top + 20] )
		"trans_btn_other":( ctrl.visible = ttool_height > 0 ;[w - side - 106, top + 20] )
		"trans_btnsave":( ctrl.visible = ttool_height > 0 ;[w - side - 84, top + 20] )
		"trans_btn_load":( ctrl.visible = ttool_height > 0 ;[w - side - 42, top + 20] )
		
		"trans_lbl_sep":( ctrl.visible = ttool_height > 0 ; ctrl.width = w - 24 ;[side, 50] )
		
		--        主工具栏按钮组
		"btn_trans_tool":( ctrl.visible = w > 315 ;[side, top] + main_anchor )
		"btn_keys_tool":( ctrl.visible = w > 325 ;[side + 75, top] + main_anchor )
		"btn_preview_tool":( ctrl.visible = w > 315 ;[side, top + 22] + main_anchor )
		"btn_other_tool":( ctrl.visible = w > 325 ;[side + 75, top + 22] + main_anchor )
		
		"lbl_logo":( ctrl.visible = w > 400 ;[( w - ctrl.width ) / 2, top] + main_anchor )
		
		"lbl_play_speed":[w - side - ctrl.width - 124 - 6, top - 1] + main_anchor
		"sld_play_speed":[w - side - ctrl.width - 60 - 6, top] + main_anchor
		"spn_start_time":[w - side - 22 - 60 - 6, top + 22] + main_anchor --spn获取不了宽度和高度属性
		"spn_current_time":[w - side - 5 - 6, top] + main_anchor
		"spn_end_time":[w - side - 5 - 6, top + 22] + main_anchor
		
		-- 		容错,不在列表中的东西设为自身位置,包括tmr和未知物体
		default:ctrl.pos 
	)
	ctrl.pos = new_pos
)
--设置窗口刷新标记(为了兼容不支持PySide的旧版max,不设置刷新标记,会导致无限循环),现在不需要了,更改了逻辑
-- fn set_older_refresh_tag dialog tag = setINISetting (dialog.cfg_dir + @"\XAniTool.ini") "TEMP" "need_refresh" (tag as string)
-- fn is_need_refresh dialog = "true" == getINISetting (dialog.cfg_dir + @"\XAniTool.ini") "TEMP" "need_refresh"
--设置窗口高度(需要上面的设置刷新标记.否则会在兼容旧版时无限循环)
fn change_window_height dialog val need_refresh:false =
(
	try --支持py的话就不用重载了
	(
		local
		pySide2 = python.import "PySide2", --高版本需要特别调节高度
		tool_bar = pySide2.QtWidgets.QWidget.find ( UIAccessor.GetParentWindow ( UIAccessor.GetParentWindow dialog.hwnd ) )
		tool_bar.setFixedHeight val
		--高版本有时候刷新会异常
		dialog.tmr1.tick()
	)
	catch
	(
		if need_refresh do --因为旧版直接合并进去就可以,所以其实不需要刷新.
		(
			-- 			set_older_refresh_tag dialog false
			try ( cui.unRegisterDialogBar dialog ) catch()
			try ( destroydialog dialog ) catch()
			createdialog dialog _w_x val pos:[_d_size[1], _d_size[2]] style:#( #style_titlebar, #style_border ) --写一个配置文件,不然会一直刷新 --在重载时设置新的高度
		)
		
	)
)
--记录工具状态
fn save_tool_state dialog =
(
	setINISetting dialog.cfg_file "ToolState" "ttool_height" ( dialog.ttool_height as string )
	setINISetting dialog.cfg_file "ToolState" "ktool_height" ( dialog.ktool_height as string )
	-- 	setINISetting (dialog.cfg_dir + @"\XAniTool.ini") "ToolState" "keys_tool" (dialog.btn_keys_tool.Checked as string)
)
--读取工具状态
fn load_tool_state dialog =
(
	dialog.btn_trans_tool.Checked = ( dialog.ttool_height = ( getINISetting dialog.cfg_file "ToolState" "ttool_height" ) as integer ) > 0
	dialog.btn_keys_tool.Checked = ( dialog.ktool_height = ( getINISetting dialog.cfg_file "ToolState" "ktool_height" ) as integer ) > 0
)
-- 获取颜色到dotnet
fn get_dotnet_color n = ( colr = ( colorMan.getColor n ) * 255 ; ( DotNetClass "System.Drawing.Color" ).fromARGB colr[1] colr[2] colr[3] )
::BackColor = get_dotnet_color #background --暂时作为全局变量,后续合并进窗口中
::ForeColor = get_dotnet_color #text
::PanelColor = get_dotnet_color #button
-- ::WindowTextColor = get_dotnet_color #windowtext
::SepBackColor = get_dotnet_color #trackbarBg
::BorderSize = 0
::MiddleCenter = ( dotnetclass "System.Drawing.ContentAlignment" ).MiddleCenter
::BorderStyle = ( dotNetClass "System.Windows.Forms.BorderStyle" ).None
::Flat = ( dotnetclass "System.Windows.Forms.FlatStyle" ).Flat
::Appearance = ( dotnetclass "System.Windows.Forms.Appearance" ).button
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
-- 设置dotnet控件风格
fn set_dotnet_buttons_properties btns = 
(
	for btn in btns do ( btn.BackColor = BackColor ; btn.ForeColor = ForeColor ; btn.Flatstyle = Flat ; btn.Flatappearance.borderSize = BorderSize )
)
fn set_dotnet_checkButtons_properties btns = 
(
	for btn in btns do ( btn.BackColor = BackColor ; btn.ForeColor = ForeColor ; btn.Flatstyle = Flat ; btn.Appearance = Appearance ; btn.Flatappearance.borderSize = BorderSize ; btn.TextAlign = MiddleCenter )
)
fn set_dotnet_label_properties lbl aligntype:1 =
(
	local
	_align = case aligntype of
	(
		1:( dotnetclass "System.Drawing.ContentAlignment" ).MiddleLeft
		2:( dotnetclass "System.Drawing.ContentAlignment" ).MiddleCenter
		3:( dotnetclass "System.Drawing.ContentAlignment" ).MiddleRight
	)
	lbl.backcolor = BackColor
	lbl.ForeColor = ForeColor
	lbl.TextAlign = _align
)
fn set_sep_properties sep =
(
	sep.backcolor = SepBackColor
	sep.TextAlign = MiddleCenter
)
fn set_sld_play_speed_properties sld =
(
	sld.backcolor = BackColor ; sld.AutoSize = off
	sld.TickStyle = sld.TickStyle.None ; sld.Minimum = 0 ; sld.Maximum = 4
	sld.value = timeConfiguration.playbackSpeed - 1
	sld.LargeChange = 1 --点击一次移动的单位
)
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
	if isAnimPlaying() do ( stopAnimation(); playAnimation immediateReturn:true ) --不能在同一个函数中播放再停止,但是停止再播放时没关系的(因为播放动画是新线程,所以多次播放需要多次停止)
)
fn set_lbl_play_speed_properties lbl =
(
	set_dotnet_label_properties lbl aligntype:3
	set_lbl_play_speed_text lbl
)
--LOGO相关
fn build_html fcolor =
(
	html = stringstream ""
	format "<color=%,%,%><b>XAniToolStrip</b>\r\nby<i>无名玩家X</i>\r\n<u><size=10>a690089735.gitee.io</size></u></color>" ( fcolor[1] as integer ) ( fcolor[2] as integer ) ( fcolor[3] as integer ) to:html
	html as string
)
fn set_LOGO_properties dialog =
(
	local
	LogoTextColor = ( colorMan.getColor #trackbarBg ) * 255
	lbl = dialog.lbl_logo
	lbl.AllowHtmlString = true
	lbl.Appearance.TextOptions.HAlignment = lbl.Appearance.TextOptions.HAlignment.Center
	-- 	lbl.AutoSizeMode = lbl.AutoSizeMode.None
	-- 	lbl.Size = (dotNetObject "System.Drawing.Size" 200 51)
	lbl.Appearance.TextOptions.WordWrap = lbl.Appearance.TextOptions.WordWrap.Wrap
	-- 	lbl.Appearance.FontStyleDelta = false
	lbl.Appearance.BackColor = BackColor
	
	lbl.text = build_html LogoTextColor --这不要dotnet颜色
	
	logo_tick = ( bs = LogoTextColor / 255 ; asin ( ( bs[1] + bs[2] + bs[3] ) / 3 ) ) as integer - 1
)
--窗口初始化
fn init_XAniTools_UI dialog =
(
	for c in dialog.controls do try (c.name = (FilterString (c as string) ":")[2]) catch() --设置控件名,dotnet控件name默认不是变量名,加try是因为max默认控件的name是只读的
	set_dotnet_buttons_properties dialog.buttons --设置按钮风格
	dialog.trans_ckb_change_mode.Flatappearance.borderSize = 1 ; dialog.trans_ckb_change_mode.Flatappearance.BorderColor = SepBackColor --额外设置模式按钮
	set_dotnet_checkButtons_properties dialog.checkButtons --设置单选按钮风格
	
	set_sld_play_speed_properties dialog.sld_play_speed --设置滑块属性
	set_lbl_play_speed_properties dialog.lbl_play_speed
	
	-- 	set_dotnet_label_properties dialog.lbl_logo aligntype:2 --设置logo
	-- 	dialog.lbl_logo.ForeColor = getColor ((colorMan.getColor #trackbarBg)*255) dir:true
	set_LOGO_properties dialog --设置logo
	
	for sep in dialog.seplist do set_sep_properties sep
	
	callbacks.addScript #animationRangeChange "XAniTools_UI.set_spn_animationrange_time()" id:#XAniTools --时间范围回调
	registerTimeCallback dialog.set_spn_current_time --时间回调(第一次运行时会有问题,以后放在一起就好了)
	
	cui.RegisterDialogBar dialog style:#( #cui_dock_bottom ) minSize:[0, 0] --目前不需要了minSize:[_w_x,_w_y] maxSize:[_w_x,_w_y] --高版本必须指定style,高版本必须指定min和maxsize
	cui.DockDialogBar dialog #cui_dock_bottom
	
	load_tool_state dialog --加载工具开启状态
	-- 	set_older_refresh_tag dialog false --设置旧版的刷新标记[false不需要],首次开启时不需要加载,但在新版max的情况下,仍需要运行下方代码.这里设为false避免重启的无限循环
	change_window_height dialog ( dialog.main_height + dialog.ttool_height + dialog.ktool_height + dialog.ptool_height ) need_refresh:false
	-- 	ttool_height:dialog.ttool_height ktool_height:dialog.ktool_height ptool_height:dialog.ptool_height
	
	dialog.desktop_folder = ( DotNetClass "System.Environment" ).GetFolderPath ( ( DotnetClass "Environment+SpecialFolder" ).DesktopDirectory ) + "\\"
	dialog.data_folder = ( DotNetClass "System.Environment" ).GetFolderPath ( ( DotnetClass "Environment+SpecialFolder" ).ApplicationData ) + "\\XAniTools\\"
	makedir dialog.data_folder
	
	--更新names_data
	names_data_get XAniTools_UI
	names_data_display XAniTools_UI
	dialog.trans_ddl_names.selection = dialog.names_data_list.count --选择最后一个
) 
--窗口关闭时清理
fn clean_XAniTools_UI dialog =
(
	callbacks.removeScripts id:#XAniTools
	unRegisterTimeCallback dialog.set_spn_current_time
	save_tool_state dialog
)
--改变播放速度显示
fn change_play_speed_text v sld lbl =
(
	timeConfiguration.playbackSpeed = v + 1
	set_lbl_play_speed_text lbl
)
--设置时间相关
fn set_animation_range start end = animationrange = interval start end
fn set_currenttime val = 
(
	if val < animationrange.start do set_animation_range val animationrange.end
	if val > animationrange.end do set_animation_range animationrange.start val
	slidertime = val
)

