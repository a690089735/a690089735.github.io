-- 布告
-- 1.轨迹工具不适合融入界面,因为某些刷新问题,和旧版调整高度时会反复刷新,并且会严重拖慢启动速度,所以作为独立工具,放在工具库->内置里面.为轨迹工具添加一个创建轨迹点的功能.轨迹功能可以做左右垂直停靠.
-- 待优化
-- √1.(使用重新浮动和停靠窗口实现了)旧版改高度是用重启实现的,因此需要在关闭时,把界面的一切都保存一下,以便打开时界面状态仍然一致.(对于参考物体,可以保存node.handle+node.name,然后根据此来获取节点btn.object = $xxx,如果获取失败则清空.)
-- 2.各个按钮需要添加工具提示,dotnet按钮是特定的工具提示.
-- 3.添加清除所有帧,清除所有范围外的帧
-- √4.添加切换euler 和 TCB
-- √5.添加上下文菜单,因为右键不好使,所有的右键变为dotnet菜单,重新启用之前的上下文菜单条生成器.
-- 6.所有的dotnet控件,都要加一个开启快捷键的功能,不然鼠标操作一下就会让快捷键失效,很难受.
-- trackbar.visible = false
-- timeSlider.setVisible false
-- trackbar.visible = true
-- timeSlider.setVisible true
--不论怎么样,时间栏都会自己到底下,不用试了,即使手动切换也是如此
--关闭了所有排序,即使层次排的很好,同级的子物体仍会有顺序错误,即使我们按名称排序,也无法满足所有要求,所以请让用户认真指定.

::XAniTools_UI
(
try(cui.unRegisterDialogBar XAniTools_UI)catch()
try(destroydialog XAniTools_UI)catch()

-- _d_size = 
-- _w_x = _d_size[1]
-- _w_y = 52

XAniTools_UI=rollout XAniTools_UI "XAniToolStrip" width:1920 height:52
(
	include "Depends.ms"
	include "Other.ms"
	
	local
	tool_tip = dotnetobject "System.Windows.Forms.ToolTip",
	wh = sysInfo.desktopSize,
	--数据变量
	cfg_file = (GetDir #plugcfg) + @"\XAniTool.ini", --配置目录,各个配置独立,其中还包括高度刷新数据(异常或没有也可以容错的).这个不能写在初始化里,因为初次启动时也要使用.
	desktop_folder = (DotNetClass "System.Environment").GetFolderPath ((DotnetClass "Environment+SpecialFolder").DesktopDirectory) + "\\",
	data_folder = (DotNetClass "System.Environment").GetFolderPath ((DotnetClass "Environment+SpecialFolder").ApplicationData) + "\\XAniTools\\",
-- 	local
	--UI变量
-- 	wh = [_w_x, _w_y],
	-- 	anchor_pos = #(),--不同组件有不同的锚点位置(变换工具最高,关键帧第二,创建预览第三,主界面最低)
	main_height = 52, --锚点
	ttool_height = (getINISetting cfg_file "ToolState" "ttool_height") as integer, --等于0则不显示
	ktool_height = (getINISetting cfg_file "ToolState" "ktool_height") as integer,
	ptool_height = 0,
	logo_tick = 0,
	names_data_list = #(),
	trans_data_list = #(),
	trans_copy_list = #(),
	trans_paste_list = #(),
	trans_temp_data = #(),
	trans_mode = (getINISetting cfg_file "ToolState" "trans_mode") as integer, --0.单帧,1.逐帧,2.相对,读取失败时自动默认是0:"" as integer 为 0
	times_data_list = #()
	
	label lb "" pos:[0, 256] width:0 height:0 --用于旧版兼容的阻挡占位,这样在刷新高度的时候会让所有图标隐藏一下,不会看到默认的排列.
	
	-- 	变换工具组
	dropDownList trans_ddl_names "" width:128 height:22
	dotNetControl trans_btn_names_del "Button" text:"X" width:22 height:22
	dotNetControl trans_btn_names_other "Button" text:"O" width:22 height:22
	dotNetControl trans_btn_names_save "Button" text:"记录" width:42 height:22
	dotNetControl trans_btn_names_load "Button" text:"选择" width:42 height:22
	button trans_btn_names_refresh "trans_btn_names_refresh" width:10 height:10 pos:[0,0] visible:false --用于响应外部刷新的隐藏按钮.
	
-- 	dotNetControl trans_lbl_mirror_options "label" text:"  粘贴选项: " width:86 height:16
	dotNetControl trans_btn_copySet "Button" text:"C" width:30 height:16
	dotNetControl trans_btn_arrow "Button" text:"\x2192" width:22 height:16 --←"\x2190",→"\x2192"
	dotNetControl trans_btn_pasteSet "Button" text:"P" width:30 height:16
	
	checkbox trans_chk_refObj "" width:14 height:16 toolTip:"勾选来参考物体坐标,不勾选则保持参考世界坐标."
	pickbutton trans_btn_refObj "参考物体" width:70 height:20 enabled:false message:"选择一个用于镜像变换数据的参考物体" autoDisplay:true toolTip:"拾取参考物体."
	
	checkbox trans_chk_mirror_pos "镜像位置" width:72 height:16
	checkbox trans_chk_mirror_rot "镜像旋转" width:72 height:16
	
	label trans_lbl_mirror_axis "镜像轴:" width:42 height:16
	radiobuttons trans_rdo_mirror_axis "" width:97 height:16 labels:#("X", "Y", "Z") default:1 columns:3

	label trans_lbl_flip_axis "翻转轴:" width:42 height:16
	radiobuttons trans_rdo_flip_axis "" width:97 height:16 labels:#("X", "Y", "Z") default:1 columns:3
	
	dotNetControl trans_ckb_change_mode "Button" text:"单\n帧" width:22 height:42
	
	dropDownList trans_ddl_list "" width:128 height:22
	dotNetControl trans_btn_del "Button" text:"X" width:22 height:22
	dotNetControl trans_btn_other "Button" text:"O" width:22 height:22
	dotNetControl trans_btn_save "Button" text:"记录" width:42 height:22
	dotNetControl trans_btn_load "Button" text:"粘贴" width:42 height:22
	button trans_btn_refresh "trans_btn_refresh" width:10 height:10 pos:[0,0] visible:false --用于响应外部刷新的隐藏按钮.
	
	dotNetControl trans_lbl_sep "label" text:" " width:(wh[1]-12) height:1
	
	--动画帧工具组
	dotNetControl times_lbl_times "label" text:"时间列表:" width:64 height:14
	dotNetControl times_edt_times "TextBox" width:64 height:14
	
	dropDownList times_ddl_list "" width:128 height:22
	dotNetControl times_btn_del "Button" text:"X" width:22 height:22
	dotNetControl times_btn_other "Button" text:"O" width:22 height:22
	dotNetControl times_btn_save "Button" text:"记录" width:42 height:22
	dotNetControl times_btn_select "Button" text:"选择" width:42 height:22
	
	dotNetControl times_lbl_sep "label" text:" " width:(wh[1]-12) height:1
	
	-- 	主工具栏按钮组
	dotNetControl btn_trans_tool "CheckBox" text:"变换工具" width:75 height:22
	dotNetControl btn_times_tool "CheckBox" text:"时间帧工具" width:75 height:22
	dotNetControl btn_preview_tool "CheckBox" text:"创建预览" width:75 height:22
	dotNetControl btn_other_tool "CheckBox" text:"打开工具库" width:75 height:22
	
	-- 	商标
	dotNetControl lbl_logo "DevExpress.XtraEditors.LabelControl" --换成富文本,颜色取时间滑块背景色(colorMan.getColor #trackbarBg)*255 --LabelControl.HyperlinkClick
	timer tmr_logo interval:20 active:false --logo渐变动画
	
	-- 	时间
	dotNetControl lbl_play_speed "label" text:"1X" width:28 height:18 --1/4X;1/2X;1X;2X;4X
	dotNetControl sld_play_speed "system.windows.forms.trackbar" width:64 height:16
	
	dotNetControl btn_set_key "Button" text:"K" width:16 height:16
	spinner spn_current_time "" width:60 height:16 range:[-13421700, 13421700, currenttime.frame] type:#integer scale:1
	
	spinner spn_start_time "|<" width:60 height:16 range:[-13421700, animationrange.end.frame - 1, animationrange.start.frame] type:#integer scale:1 --大于或小于13421772会导致max崩溃,max2014,但是直接输入会四舍五入为13421800,这里取舍一下
	spinner spn_end_time ">|" width:60 height:16 range:[animationrange.start.frame + 1, 13421772, animationrange.end.frame] type:#integer scale:1
	
	timer tmr_layout interval:50 active:true --50ms和即时刷新的效果几乎一样,但是减少了大量计算.
	
	--测试
-- 	dotNetControl "DevExpress.XtraEditors.XtraOpenFileDialog"
-- getSavePath caption:"指定工具库目录" initialDir:"XAniToolStrip_script_library" --选择文件夹
	
	--获取色彩转为dotnet
-- 	fn get_dotnet_color n = (colr = (colorMan.getColor n) * 255 ; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
	
-- 	include "Variable.ms"
	fn set_spn_current_time = spn_current_time.value = currenttime.frame --需要在UI引入之前
	
	include "Tools_Depends.ms"
	
	include "Names.ms"
	include "Trans.ms"
	include "Times.ms"
	include "Track.ms"
	include "UI.ms" --UI需要以上模块中的刷新功能,在其中的启动时创建菜单
	
	--组件功能_names
	on trans_btn_names_del click s e do
	(
		names_data_delete()
		names_data_display()
		if trans_ddl_names.selection == 0 do trans_ddl_names.selection = names_data_list.count
		enableAccelerators = true
	)
	on trans_btn_names_other click s e do --刷新和菜单(右键上下文)
	(
		names_data_get()
		names_data_display()
		trans_ddl_names.selection = names_data_list.count
		enableAccelerators = true
	)
	on trans_btn_names_save click s e do --记录名称列表
	(
		names_data_save()
		names_data_display()
		trans_ddl_names.selection = names_data_list.count
		enableAccelerators = true
	)
	on trans_btn_names_load click s e do
	undo "Select" on(
		names_data_select ctrl:keyboard.controlPressed alt:keyboard.altPressed shift:keyboard.shiftPressed
		enableAccelerators = true
	)
	on trans_ddl_names selected sel do
	undo "Select" on(
		select(names_data_load id:sel) --我切换就是为了选择嘛,直接选择就好了呀..
		enableAccelerators = true
	)
	
	--组件功能_trans
	on trans_btn_copySet click s e do --复制集
	(
		trans_copy_list = getCurrentSelection()
		trans_btn_copySet.text = if trans_copy_list.count > 0 then "C*" else "C"
		enableAccelerators = true
	)
	on trans_btn_arrow click s e do
	(
		case of
		(
			(keyboard.altPressed) :( --删除镜像偏移
				local all_list = trans_copy_list+trans_paste_list
				for o in all_list do setUserProp o "Mirrored_relative_transformation" (Matrix3 1)
				if all_list.count > 0 do messagebox "重置初始关联完成." --按alt清理
			)
			(keyboard.controlPressed) :try( --创建镜像偏移
				local
				mAxis = #("x","y","z")[trans_rdo_mirror_axis.state],
				fAxis = #("x","y","z")[trans_rdo_flip_axis.state]
				for i = 1 to trans_copy_list.count do
				(
					local
					sel = trans_copy_list[i],sTrans = sel.transform,
					tag = trans_paste_list[i],tTrans = tag.transform
					setUserProp sel "Mirrored_relative_transformation" (sTrans * Inverse (buildTransform axis:mAxis flip:fAxis tm:tTrans))
					setUserProp tag "Mirrored_relative_transformation" (tTrans * Inverse (buildTransform axis:mAxis flip:fAxis tm:sTrans))
				)
				if trans_copy_list.count > 0 do messagebox "设置初始关联完成." --按alt清理
			)catch(messagebox "设置初始关联失败.\n请检查复制集和粘贴集.\t")
			default :(
				trans_btn_arrow.text = if trans_btn_arrow.text == "\x2192" then "\x2190" else "\x2192"
				temp_list = trans_paste_list
				trans_paste_list = trans_copy_list
				trans_copy_list = temp_list
			)
		)
		enableAccelerators = true
	)
	on trans_btn_pasteSet click s e do --粘贴集
	(
		trans_paste_list = getCurrentSelection()
		trans_btn_pasteSet.text = if trans_paste_list.count > 0 then "P*" else "P"
		enableAccelerators = true
	)
	on trans_ckb_change_mode click s e do  --切换变换工具
	(
		trans_change_state s e
		enableAccelerators = true
	)
	on trans_btn_del click s e do
	(
		trans_data_delete()
		trans_data_display()
		if trans_ddl_list.selection == 0 do trans_ddl_list.selection = trans_data_list.count
		enableAccelerators = true
	)
	on trans_btn_other click s e do --刷新和菜单(右键上下文)
	(
		trans_data_get()
		trans_data_display()
		trans_ddl_list.selection = trans_data_list.count
		enableAccelerators = true
	)
	on trans_btn_save click s e do --记录名称列表
	(
		trans_data_save()
		trans_data_display()
		trans_ddl_list.selection = trans_data_list.count
		enableAccelerators = true
	)
	on trans_btn_load click s e do
	(
-- 		print "load"
		trans_data_load()
		enableAccelerators = true
	)
	
	on trans_chk_refObj changed state do trans_btn_refObj.enabled = state
	on trans_chk_mirror_pos changed state do (trans_tool_set_enabled();trans_tool_sate_save())
	on trans_chk_mirror_rot changed state do (trans_tool_set_enabled();trans_tool_sate_save())
	on trans_rdo_mirror_axis changed state do trans_tool_sate_save()
	on trans_rdo_flip_axis changed state do trans_tool_sate_save()
		
	-- 时间帧工具-组件功能
	on times_btn_save click s e do --记录名称列表
	(
		times_data_save()
		times_data_display()
		times_ddl_list.selection = times_data_list.count
		times_data_load()
		enableAccelerators = true
	)
	on times_btn_del click s e do
	(
		times_data_delete()
		times_data_display()
		if times_ddl_list.selection == 0 do times_ddl_list.selection = times_data_list.count
		times_data_load()
		enableAccelerators = true
	)
	on times_btn_other click s e do --刷新和菜单(右键上下文)
	(
		times_data_get()
		times_data_display()
		times_ddl_list.selection = times_data_list.count
		times_data_load()
		enableAccelerators = true
	)
	on times_ddl_list selected sel do
	(
		times_data_load id:sel
		enableAccelerators = true
	)
	on times_btn_select click do
	(
		times_data_select()
		enableAccelerators = true
	)

	-- 主窗口-组件功能
	on sld_play_speed ValueChanged s e do (change_play_speed_text sld_play_speed.value s lbl_play_speed ; enableAccelerators = true) --setfocus没有使快捷键重新可用的起作用
	on btn_set_key click s e do undo "Set Keys" on(with animate on(for obj in getCurrentSelection() do obj.transform = obj.transform))
	on spn_current_time changed val do set_currenttime val
	on spn_start_time changed val do (spn_end_time.range = [val + 1, 13421700, animationrange.end]; set_animation_range val animationrange.end)
	on spn_end_time changed val do (spn_start_time.range = [-13421700, val - 1, animationrange.start]; set_animation_range animationrange.start val)
	
	--主窗口功能
	fn set_spn_animationrange_time = (spn_start_time.value = animationrange.start.frame ; spn_end_time.value = animationrange.end.frame)
	on XAniTools_UI open do init_XAniTools_UI XAniTools_UI
	on tmr_layout tick do --布局_时钟事件
	-- 	try
	(
-- 		print 1
		for c in XAniTools_UI.controls do set_transform_toolstrip_layuout wh[1] wh[2] c ttool_height:ttool_height ktool_height:ktool_height ptool_height:ptool_height
		tmr_layout.active = false
	)
	-- 	catch(tmr_layout.active=false;messagebox "布局异常")
	on XAniTools_UI resized current_wh do (wh = current_wh; tmr_layout.active = true)
	on XAniTools_UI close do --(unreg_event();print 100) --必须把关闭的清理放在这里,不然会有异常循环导致无法关闭(2014中)
	(
		callbacks.removeScripts id:#XAniTools
		unRegisterTimeCallback set_spn_current_time 
	)
	
	--LOGO功能
	on lbl_logo MouseEnter s e do (tmr_logo.active = true)
	on lbl_logo MouseLeave s e do (tmr_logo.active = false; lbl_logo.text = build_html ((colorMan.getColor #trackbarBg) * 255); logo_tick = (mod logo_tick 360) as integer - 1)
	on tmr_logo tick do lbl_logo.text = build_html ([255, 255, 255] * (sin (logo_tick += 1) * 0.5 + 0.5))
	
	--切换工具
	on btn_trans_tool Click s e do --不要用CheckedChanged,这样自动加载状态时会无限循环
	(
		ttool_height =  if s.Checked then 51 else 0
		save_tool_state()
		change_window_height (main_height + ttool_height + ktool_height) --更新高度
		enableAccelerators = true
	)
	on btn_times_tool Click s e do --不要用CheckedChanged,这样自动加载状态时会无限循环
	(
		ktool_height = if s.Checked then 31 else 0
		save_tool_state()
		change_window_height (main_height + ttool_height + ktool_height) --更新高度
		enableAccelerators = true
	)
)
-- get_h = 
createdialog XAniTools_UI pos:sysInfo.desktopSize style:#(#style_titlebar, #style_border, #style_sysmenu) --在创建完毕的响应中注册停靠
GC light:true --保险起见,使用light:true
-- timeSlider.setVisible false
-- trackbar.visible = false
-- timeSlider.setVisible true
-- trackbar.visible = true
)