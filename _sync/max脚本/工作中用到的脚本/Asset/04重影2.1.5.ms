try(destroydialog GhostRollout)catch()

--在open时注册打开文件刷新列表,close时取消注册刷新,取消注册显示

fn CallbackPostReload GhostRollout =
(
	list = ::GhostGroupList
	GhostRollout.groupList.items = list[1]
	GhostRollout.groupList.selection = #{1}
	GhostRollout.List_sel = (GhostRollout.groupList.selection as array)
	GhostRollout.GhostGroup_name = ""
	for i in GhostRollout.List_sel do (GhostRollout.GhostGroup_name += list[1][i]) --获取整体命名(当前选择)
	GhostRollout.GhostGroup_Set = for i in GhostRollout.List_sel collect list[2][i] --获取集合(当前选择)
	GhostRollout.GhostGroup_Set = makeUniqueArray GhostRollout.GhostGroup_Set
	
)
fn CallbackPreReload GhostRollout = (::GhostGroupList = #(#(),#())) --Callback预清除变量

rollout GhostRollout "Ghost 2" width:224 height:196 --184
(
	local Ghost_GLayer
	local GhostGroup_Set = #()
	local temp_name = "未命名"
	local GhostGroup_name = ""
	local List_sel = #()
	local Ghost_color_text = "RED"
	local cColor = red
	local renamecancel = true
	local ReItem = false
	local maxBackColor = colorMan.getColor #background
	local bgcolor =((DotNetClass "System.Drawing.Color").fromARGB (maxBackColor[1] * 255.0f) (maxBackColor[2] * 255.0f) (maxBackColor[3] * 255.0f))
	local textcolor = ((DotNetClass "System.Drawing.Color").fromARGB 255 255 255)
	local rColor=((DotNetClass "System.Drawing.Color").fromARGB 242 70 70)
	local gColor=((DotNetClass "System.Drawing.Color").fromARGB 126 227 126)
	local bColor=((DotNetClass "System.Drawing.Color").fromARGB 62 130 255)
	local yColor=((DotNetClass "System.Drawing.Color").fromARGB 255 214 128)
	local CTColor=((DotNetClass "System.Drawing.Color").fromARGB 144 0 185)
	local grayColor=((DotNetClass "System.Drawing.Color").fromARGB 128 128 128)
	local deleteColor=((DotNetClass "System.Drawing.Color").fromARGB 15 15 15)
	local dnKeys = dotnetclass "System.Windows.Forms.Keys"
	local ToolTipObj = dotnetobject "System.Windows.Forms.ToolTip"
	local autoScale = false
	
	fn clearAllGhost = (delete $'GHOST2:*GHOST*')

	fn creatobj Ghost_set1 text1 onlyOne CT:false state:(getCommandPanelTaskMode())  = --四色重影函数,text1 = RED,GREEN,BLUE,YELLOW,PURPLE
	undo "GhostCreate" on(
		setCommandPanelTaskMode #create
		color1 = case text1 of
		(
			"RED":(color 242 70 70)
			"YELLOW":(color 255 214 128)
			"GREEN":(color 126 227 126)
			"BLUE":(color 62 130 255)
			"PURPLE":(color 144 0 185)
		)
		if (Ghost_GLayer = LayerManager.getLayerFromName "Ghost_layer") == undefined do Ghost_GLayer = LayerManager.newLayerFromName "Ghost_layer"
		Ghost_GLayer.on = Ghost_GLayer.lock = (LayerManager.getLayer 0).current = true
		
		with redraw off(animate off(
				b = box wirecolor:color1
				if onlyOne then (bname = ("GHOST2:"+text1+"GHOST_"+GhostGroup_name);b.wirecolor = (color1 * 0.6)) else bname = ("GHOST2:"+text1+"GHOST_"+GhostGroup_name+(slidertime as string))
				u = getnodebyname(bname);if isValidNode u do delete u; b.name = bname
				converttopoly b
				polyop.deleteVerts b #{1..8}
				b.visibility = bezier_float(); b.visibility.controller.value = 0.3
				b.showfrozeningray = b.renderable = b.castShadows = b.receiveshadows = b.applyAtmospherics = b.inheritVisibility = b.primaryVisibility = b.secondaryVisibility = off
				b.boneEnable=true
				Ghost_GLayer.addnode b
				try
				(
					for i in Ghost_set1 where superclassof i == GeometryClass do --如果是合格的节点,则创建并附加
					(
						type = classof (i.baseobject)
						if (finditem #(Biped_Object,HubObject,CATBone) type) > 0 then 
							b.EditablePoly.attach i b
						else 
							(k = converttomesh(instance i);b.EditablePoly.attach k b)
					)
					b.mat = undefined
					if CT then b.parent = selection[1]
				)catch
				(
					messagebox "出错."
					delete b
				)--catch
			)--with animate off
		)--with redraw off
		setCommandPanelTaskMode state
	)--undo on
	fn findFrame colortext bool = --寻找帧重影
	(
		Ghostname = ("GHOST2:"+colortext+"GHOST_"+GhostGroup_name)
		
		if bool 
		then
			for i = (slidertime-1) to animationrange.start by -1 do
			(
				n = getnodebyname (Ghostname + ((i as time) as string))
				if isValidNode n do (slidertime = i; exit)--(select n; slidertime = i; exit)
			)
		else
			for i = (slidertime+1) to animationrange.end by 1 do
			(
				n = getnodebyname (Ghostname + ((i as time) as string))
				if isValidNode n do (slidertime = i; exit)--(select n; slidertime = i; exit)
			)
	)
	fn slidingTime back = 
	(
		if back 
			then (if slidertime == animationrange.start then slidertime = animationrange.end else slidertime -= 1) 
			else (if slidertime == animationrange.end then slidertime = animationrange.start else slidertime += 1) 
	)
	fn slidingKeys back = 
	(
		try(
		if back
		then slidertime = trackbar.GetPreviousKeyTime()
		else slidertime = trackbar.GetNextKeyTime()
		)catch()
	)
	fn SetName = 
	(
		--暂停收回
		try(destroydialog  TextWindow)catch()
		rollout TextWindow "确认命名" width:200
		(
			editText 'Text' "名称:" text:temp_name width:180 height:22
			button 'okbtn' "确认" align:#left offset:[20,0]
			button 'nobtn' "取消" align:#right offset:[-20,-26]
			on okbtn pressed do (renamecancel = true; temp_name = text.text;destroydialog TextWindow)
			on nobtn pressed do (renamecancel = false; destroydialog TextWindow)
			on TextWindow close do ()--恢复收回
		)
		createdialog TextWindow modal:true
	)
	fn ReloadItem Listbox = --重载列表项目
	(
		Listbox.items = ::GhostGroupList[1]
	)
	fn ReloadSetAndName Listbox = --重载集和名
	(
		List_sel = (Listbox.selection as array)
		GhostGroup_name = ""
		for i in List_sel do (GhostGroup_name += GhostGroupList[1][i])
		GhostGroup_Set = #()
		for i in List_sel do GhostGroup_Set += GhostGroupList[2][i]
		GhostGroup_Set = makeUniqueArray GhostGroup_Set
	)
	fn Btn_Press btn e CT:false = --按下按钮执行
	(
		if List_sel.count > 0 do 
		Case e.button of
		(
			(btn.mousebuttons.Left):
				(creatobj GhostGroup_Set Ghost_color_text true CT:CT)
			(btn.mousebuttons.Middle):
				(
					btn.FlatAppearance.MouseoverBackColor = deleteColor
					name1 = ("GHOST2:"+Ghost_color_text+"GHOST_"+GhostGroup_name);name2 = name1+(slidertime as string)
					ghost = getnodebyname name1
					if isValidNode ghost do delete ghost
					ghost = getnodebyname name2
					if isValidNode ghost do delete ghost
				)
			(btn.mousebuttons.Right):
				(
					btn.FlatAppearance.MouseoverBackColor = cColor
					creatobj GhostGroup_Set Ghost_color_text false
				)
		)
	)
	fn mouseWheel e = --鼠标滚轮功能
	(
		if keyboard.controlPressed then if e.Delta > 0 then findFrame Ghost_color_text true else findFrame Ghost_color_text false
		else if keyboard.altPressed then if e.Delta > 0 then slidingTime true else slidingTime false
		else if e.Delta > 0 then slidingKeys true else slidingKeys false
	)
	
	dotNetControl btn_p "Button" text:"列表管理" pos:[117,6] width:96 height:26
	multiListBox groupList "" pos:[117,34] width:96 height:11
	dotNetControl btn_gc "Button" text:"重影操作" pos:[47,6] width:62 height:26
	dotNetControl btn_t "Button" text:"轨迹" pos:[8,6] width:38 height:26
	dotNetControl btn_r "Button" text:"红色重影" pos:[10,34] width:96 height:26
	dotNetControl btn_y "Button" text:"黄色重影" pos:[10,62] width:96 height:26
	dotNetControl btn_g "Button" text:"绿色重影" pos:[10,90] width:96 height:26
	dotNetControl btn_b "Button" text:"蓝色重影" pos:[10,118] width:96 height:26
	dotNetControl btn_CT "Button" text:"紫色标记" pos:[10,152] width:86 height:26
	dotNetControl btn_scale "Button" text:"<\n<" pos:[100,152] width:14 height:26
	editText edt_status "" pos:[8,179] width:106 height:16
	timer tmr1 "Timer" pos:[10,160] width:24 height:24 interval:1000 active:autoScale
	
	on btn_t mouseMove e do if autoScale do tmr1.active = true --处理自动缩放
	on btn_p mouseMove e do if autoScale do tmr1.active = true --处理自动缩放
	on btn_gc mouseMove e do if autoScale do tmr1.active = true --处理自动缩放
	on GhostRollout mousemove pos do if autoScale do (setfocus GhostRollout;tmr1.active = true) --处理自动缩放

	on tmr1 tick  do
	(
		lt = GetDialogPos GhostRollout--左上角XY
		rd = lt + GetDialogSize GhostRollout + [4,47] --右下角XY
		mp = mouse.screenpos
		if mp.x < lt[1] or mp.x > rd[1] or mp.y < lt[2]  or mp.y > rd[2] do (GhostRollout.width = 116;btn_scale.text = ">\n>";ToolTipObj.SetToolTip btn_scale "显示列表")
		tmr1.active = false
	)
	
	on btn_scale mouseDown e do --列表栏收放
	(
		if btn_scale.text == "<\n<" then (btn_scale.text = ">\n>";ToolTipObj.SetToolTip btn_scale "显示列表";GhostRollout.width = 116) 
		else (btn_scale.text = "<\n<";ToolTipObj.SetToolTip btn_scale "收起列表";GhostRollout.width = 224)
-- 		GhostRollout.width += offset
	)
	on btn_scale mouseMove e do --列表栏收放(移动响应)
	(
		if autoScale do if btn_scale.text == ">\n>" then (btn_scale.text = "<\n<";ToolTipObj.SetToolTip btn_scale "收起列表";GhostRollout.width = 224)
	)
	
	on btn_p mouseDown e do (Case e.button of --列表按钮
	(
		(btn_p.mousebuttons.Left): if selection.count > 0 do
		(
			temp_name = "未命名";SetName(); if renamecancel do(append GhostGroupList[1] temp_name;append GhostGroupList[2] (selection as array))
			ReloadItem groupList
			ReloadSetAndName groupList
		)
		(btn_p.mousebuttons.middle):if (List_sel).count > 0 do
		(
			if queryBox "删除列表选中项目?\t" do
			(
				execute ("delete $'GHOST2:*GHOST_" + GhostGroup_name + "*'")
				for i = List_sel.count to 1 by -1 do
				(
					j = List_sel[i]
					deleteItem GhostGroupList[1] j; deleteItem GhostGroupList[2] j; ReloadItem groupList;ReloadSetAndName groupList
				)
			)
		)
		(btn_p.mousebuttons.right):
			if List_sel.count > 0 do (temp_name = groupList.items[List_sel[1]]; SetName(); GhostGroupList[1][List_sel[1]] = temp_name; ReloadItem groupList;ReloadSetAndName groupList)
	)
		persistent global GhostGroupList
	)
	on groupList selected sel do
	(
		ReloadItem groupList
		ReloadSetAndName groupList
	)
	on groupList doubleClicked arg do try(select GhostGroup_Set)catch(messagebox "错误") --列表双击
	on reLoadTimer tick do
	(
		if GhostGroupList[1].count > 0 do
		(
			for i = GhostGroupList[2].count to 1 by -1 do
				if GhostGroupList[2][i].count == 0
				then (deleteItem GhostGroupList[1] i; deleteItem GhostGroupList[2] i;ReItem = true)
				else for j = GhostGroupList[2][i].count to 1 by -1 do if not isValidNode GhostGroupList[2][i][j] do deleteItem GhostGroupList[2][i] j
		)
		if ReItem do (ReloadItem groupList;ReloadSetAndName groupList;ReItem = false)
	)
	/* 	红色按钮 */
	on btn_r mouseMove e do (Ghost_color_text = "RED"; cColor = rColor;if autoScale do tmr1.active = true;setFocus btn_r)	--红色按钮移动
	on btn_r MouseWheel e do (MouseWheel e)													--红色按钮滚轮
	on btn_r mouseDown e do (Btn_Press btn_r e)												--红色按钮按下
	on btn_r mouseUp e do btn_r.FlatAppearance.MouseoverBackColor = graycolor				--红色按钮松开
	/* 	绿色按钮 */
	on btn_g mouseMove e do (Ghost_color_text = "GREEN"; cColor = gColor;if autoScale do tmr1.active = true;setFocus btn_g)	--绿色按钮移动
	on btn_g MouseWheel e do (MouseWheel e)													--绿色按钮滚轮
	on btn_g mouseDown e do (Btn_Press btn_g e)												--绿色按钮按下
	on btn_g mouseUp e do btn_g.FlatAppearance.MouseoverBackColor = graycolor				--绿色按钮松开
-- 	on btn_g keyDown e do (PressKey e)														--绿色按钮某键
	/* 	蓝色按钮 */
	on btn_b mouseMove e do (Ghost_color_text = "BLUE"; cColor = bColor;if autoScale do tmr1.active = true;setFocus btn_b)	--蓝色按钮移动
	on btn_b MouseWheel e do (MouseWheel e)													--蓝色按钮滚轮
	on btn_b mouseDown e do (Btn_Press btn_b e)												--蓝色按钮按下
	on btn_b mouseUp e do btn_b.FlatAppearance.MouseoverBackColor = graycolor				--蓝色按钮松开
-- 	on btn_b keyDown e do (PressKey e)														--蓝色按钮某键
	/* 黄色按钮 */
	on btn_y mouseMove e do (Ghost_color_text = "YELLOW"; cColor = yColor;if autoScale do tmr1.active = true;setFocus btn_y)--黄色按钮移动
	on btn_y MouseWheel e do (MouseWheel e)													--黄色按钮滚轮
	on btn_y mouseDown e do (Btn_Press btn_y e)												--黄色按钮按下
	on btn_y mouseUp e do btn_y.FlatAppearance.MouseoverBackColor = graycolor				--黄色按钮松开
-- 	on btn_y keyDown e do (PressKey e)														--黄色按钮某键
	/* 紫色按钮 */
	on btn_CT mouseMove e do (Ghost_color_text = "PURPLE"; cColor = CTColor;if autoScale do tmr1.active = true;setFocus btn_CT)--紫色按钮移动
	on btn_CT MouseWheel e do (MouseWheel e)												--紫色按钮滚轮
	on btn_CT mouseDown e do (Btn_Press btn_CT e CT:true)									--紫色按钮按下
	on btn_CT mouseUp e do btn_CT.FlatAppearance.MouseoverBackColor = graycolor				--紫色按钮松开

	on btn_gc mouseDown e do Case e.button of --重影操作按钮
	(
		(btn_p.mousebuttons.Left):
			undo "GhostUnhide" on(unhide $'GHOST2:*GHOST*')
		(btn_p.mousebuttons.Right):
			undo "GhostHide" on(hide $'GHOST2:*GHOST*')
		(btn_p.mousebuttons.middle):
			undo "GhostClear" on (if keyboard.controlPressed then (clearAllGhost();LayerManager.deleteLayerByName "Ghost_layer";persistents.remove #GhostGroupList) else (clearAllGhost();LayerManager.deleteLayerByName "Ghost_layer"))
	)
	on btn_t mouseDown e do Case e.button of --轨迹按钮
	(
		(btn_p.mousebuttons.Left):
			try(selection.showTrajectory = on)catch()
		(btn_p.mousebuttons.middle):
			try(objects.showTrajectory = off)catch()
		(btn_p.mousebuttons.Right):
			try(selection.showTrajectory = off)catch()
	)
	on GhostRollout open do --窗口初始化
	(	
		if GhostGroupList == undefined then (persistent global GhostGroupList=#(#(),#())) else (persistent global GhostGroupList)
		autoScale = tmr1.active = (getINISetting (getdir #userStartupScripts + @"\GhostSetting.ini") "GhostToolMainMenu" "Ghost_autoScale" == "true")
		callbacks.removescripts id:#myGhost_load
		callbacks.addscript #filePreOpenProcess "CallbackPreReload GhostRollout" id:#myGhost_load
		callbacks.addscript #filePreMerge "CallbackPreReload GhostRollout" id:#myGhost_load
		callbacks.addscript #filePostOpenProcess "CallbackPostReload GhostRollout" id:#myGhost_load
		callbacks.addscript #filePostMerge "CallbackPostReload GhostRollout" id:#myGhost_load
		
		--定义工具提示
		ToolTipObj.tooltipicon = (dotnetclass "System.Windows.Forms.ToolTipIcon").Info
		ToolTipObj.ToolTipTitle = "帮助提示"
		ToolTipObj.AutoPopDelay = 10000
		ToolTipObj.InitialDelay = 750
		ToolTipObj.ReshowDelay = 300
		ToolTipObj.ShowAlways = true
		ToolTipObj.UseAnimation = true
		ToolTipObj.UseFading = true
	--设置按钮风格
		btn_scale.flatstyle = btn_gc.flatstyle = btn_t.flatstyle = btn_p.flatstyle = btn_r.flatstyle = btn_g.flatstyle = btn_b.flatstyle = btn_y.flatstyle = btn_CT.flatstyle = btn_p.flatstyle.flat
		btn_scale.flatappearance.borderSize = btn_gc.flatappearance.borderSize = btn_t.flatappearance.borderSize = btn_p.flatappearance.borderSize = btn_r.flatappearance.borderSize = btn_g.flatappearance.borderSize = btn_b.flatappearance.borderSize = btn_y.flatappearance.borderSize = btn_CT.flatappearance.borderSize = 0
	--添加工具提示
		ToolTipObj.SetToolTip btn_CT "(第一个选中的物体，会作为标记的父物体)\n左键: 创建独立标记；\n中键: 删除标记。\n滚动滚轮: 滑动时间轴时间；\nCtrl+滚轮: 滑动时间轴上的关键帧。"
		ToolTipObj.SetToolTip btn_gc "左键: 显示所有重影；\n右键: 隐藏所有重影；\n中键: 删除所有重影。"
		ToolTipObj.SetToolTip btn_t "左键: 显示选中物体的运动轨迹；\n右键: 关闭选中物体的运动轨迹；\n中键: 关闭所有物体的运动轨迹。"
		ToolTipObj.SetToolTip btn_scale "收起列表"
		tips1 = "左键: 创建重影；\n右键: 创建单帧重影；\n中键: 删除重影和当前帧单帧重影。\n滚动滚轮: 跳到上下关键帧；\nAlt+滚轮: 跳到上下帧；\nCtrl+滚轮: 跳到上下帧重影。"
		ToolTipObj.SetToolTip btn_p "左键: 添加项目；\n右键: 重命名项目；\n中键: 删除选中的组集。\n双击列表项目: 选中物体。"  
		ToolTipObj.SetToolTip btn_r tips1
		ToolTipObj.SetToolTip btn_g tips1
		ToolTipObj.SetToolTip btn_b tips1
		ToolTipObj.SetToolTip btn_y tips1
		
	--设置按钮颜色和字体颜色
		btn_scale.BackColor=btn_t.BackColor=btn_gc.BackColor=btn_p.BackColor=bgcolor
		btn_r.BackColor=rColor
		btn_g.BackColor=gColor
		btn_b.BackColor=bColor
		btn_y.BackColor=yColor
		btn_CT.BackColor=CTColor
		btn_t.ForeColor=btn_gc.ForeColor=btn_p.ForeColor=btn_r.ForeColor=btn_g.ForeColor=btn_b.ForeColor=btn_y.ForeColor=btn_CT.ForeColor=textcolor
		
		if (Ghost_GLayer = LayerManager.getLayerFromName "Ghost_layer") == undefined do Ghost_GLayer = LayerManager.newLayerFromName "Ghost_layer"
		Ghost_GLayer.on = Ghost_GLayer.lock = (LayerManager.getLayer 0).current = true
	--统一按钮响应颜色
		GhostRollout.btn_t.FlatAppearance.MouseoverBackColor = GhostRollout.btn_gc.FlatAppearance.MouseoverBackColor = GhostRollout.btn_p.FlatAppearance.MouseoverBackColor = GhostRollout.btn_r.FlatAppearance.MouseoverBackColor = GhostRollout.btn_g.FlatAppearance.MouseoverBackColor = GhostRollout.btn_b.FlatAppearance.MouseoverBackColor = GhostRollout.btn_y.FlatAppearance.MouseoverBackColor = GhostRollout.btn_ct.FlatAppearance.MouseoverBackColor = graycolor
	-- 		GhostRollout.btn_r.FlatAppearance.MousedownBackColor = ((DotNetClass "System.Drawing.Color").fromARGB 0 0 0)

		ReloadItem groupList
		groupList.selection = #{1}
		ReloadSetAndName groupList
	)
	on GhostRollout close do
	(
		unregisterRedrawViewsCallback GW_displayGHOSTNames
		callbacks.removescripts id:#myGhost_load
		try(LayerManager.deleteLayerByName "Ghost_layer")catch()
	)
)

rcMenu GhostToolMainMenu
(
	local SettingFilePath = (getdir #userStartupScripts + @"\GhostSetting.ini")
	local Ghost_showTips = true
	local Ghost_showText = true

	fn GW_displayGHOSTNames = --显示物体名
	(
		gw.setTransform (matrix3 1) --(scale (matrix3 1) [2,2,2] true)
		for o in ($'GHOST2:*GHOST*f' as array) where not o.isHiddenInVpt do
			gw.text o.center (filterString (o.name as string) "_")[2] color:o.wirecolor
		gw.enlargeUpdateRect #whole 
	)
	
	subMenu	"关于"
	(
		menuItem	MI_showTips 		"显示按钮说明"	enabled:true  checked:Ghost_showTips
		menuItem	MI_showText 		"开启名称提示"	enabled:true  checked:Ghost_showText
		menuItem	MI_autoScale 		"自动收回列表"	enabled:true  checked:GhostRollout.autoScale
		separator sep1
		menuItem	MI_Help 		"说明帮助"	enabled:true
		menuItem	MI_About 		"联系作者"	enabled:true
		menuItem	MI_Version	"2019/07/01 更新"	enabled:true
	)
	on MI_Help picked	do (ShellLaunch "https://www.cgjoy.com/forum.php?mod=viewthread&tid=217614" "")
	on MI_About  picked	do (ShellLaunch "http://tk.v5cg.com/tools/1754.html" "")
	on MI_showTips picked	do 
	(
		GhostRollout.ToolTipObj.Active = Ghost_showTips = not MI_showTips.checked
		setINISetting SettingFilePath "GhostToolMainMenu" "Ghost_showTips" (Ghost_showTips as string)
	)
	on MI_showText picked do 
	(
		Ghost_showText = not MI_showText.checked
		setINISetting SettingFilePath "GhostToolMainMenu" "Ghost_showText" (Ghost_showText as string)
		if Ghost_showText then registerRedrawViewsCallback GW_displayGHOSTNames else unregisterRedrawViewsCallback GW_displayGHOSTNames 
	)
	on MI_autoScale picked do 
	(
		GhostRollout.tmr1.active = GhostRollout.autoScale = not MI_autoScale.checked
		setINISetting SettingFilePath "GhostToolMainMenu" "Ghost_autoScale" (GhostRollout.autoScale as string)
	)
	on GhostToolMainMenu open do 
	(
		unregisterRedrawViewsCallback GW_displayGHOSTNames
		registerRedrawViewsCallback GW_displayGHOSTNames
		if getINISetting SettingFilePath "GhostToolMainMenu" "Ghost_showText" == "false" then (Ghost_showText = false;unregisterRedrawViewsCallback GW_displayGHOSTNames)
		if getINISetting SettingFilePath "GhostToolMainMenu" "Ghost_showTips" == "false" then GhostRollout.ToolTipObj.Active = MI_showTips.checked = GhostToolMainMenu.Ghost_showTips = false
		if getINISetting SettingFilePath "GhostToolMainMenu" "Ghost_autoScale" == "false" then GhostRollout.tmr1.active = MI_autoScale.checked = GhostRollout.autoScale = false else GhostRollout.tmr1.active = MI_autoScale.checked = GhostRollout.autoScale = true 
		--更新提示
		if getINISetting SettingFilePath "updata" "2019/7/1" != "1" do 
		(
			messageBox "2019年7月1日更新:\n\n\t1.完全重写了用户界面,功能更紧凑,显示更友好;\n\t2.添加了一个列表,现在可以将选中的物体加入列表中;\n\t3.下次打开max时,列表仍然有效\n\t4.采用了新的操作习惯,添加了很多隐藏功能\n\t5.新老用户都请仔细阅读按钮提示\n\n此版本已经过多日的设计,测试和调整,但仍可能存在未考察到的问题.\n如果发现BUG请通过'关于'菜单告诉我                                                                            "
			setINISetting SettingFilePath "updata" "2019/7/1" "1"
		)
		if getINISetting SettingFilePath "updata" "2020/2/15" != "1" do 
		(
			messageBox "2020年2月15日更新:\n\n\t1.重新优化了整体代码,提升了稳定性和速度.\n\t2.修复了新版本长时间开启会拖慢max的Bug.                                                                            "
			setINISetting SettingFilePath "updata" "2020/2/15" "1"
		)
		if getINISetting SettingFilePath "updata" "2020/4/24" != "1" do 
		(
			messageBox "2020年4月24日更新:\n\n\t1.优化体验,修复Bug.                                                                            "
			setINISetting SettingFilePath "updata" "2020/4/24" "1"
		)
		if getINISetting SettingFilePath "updata" "2020/6/1" != "1" do 
		(
			messageBox "2020年6月1日更新:\n\n\t1.完成了全部测试,发布新版,并将旧版使用新逻辑优化后,保留在菜单中.可从菜单启动旧版.                                                                            "
			setINISetting SettingFilePath "updata" "2020/6/1" "1"
		)
	)
)

createdialog GhostRollout menu:GhostToolMainMenu  --bgcolor:(color 68 68 68)
