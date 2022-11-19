try(destroydialog GhostRollout)catch()
--在open时注册打开文件刷新列表,close时取消注册刷新,取消注册显示
fn clearAllGhost =
(
	delete $'GHOST2:*GHOST*'
)
unregisterRedrawViewsCallback GW_displayGHOSTNames 
fn GW_displayGHOSTNames =
(
  gw.setTransform (matrix3 1)
  for o in $'GHOST2:*GHOST*f' as array where not o.isHiddenInVpt do
    gw.text o.center (filterString (o.name as string) "_")[2] color:o.wirecolor
--  gw.enlargeUpdateRect #whole 
)
registerRedrawViewsCallback GW_displayGHOSTNames

SettingFilePath = (getdir #userStartupScripts + @"\GhostSetting.ini")
(global Ghost_GLayer

global Ghost_Tagobj

if GhostGroupList == undefined then persistent global GhostGroupList=#(#(),#()) else persistent global GhostGroupList
global GhostGroup_Set = #()
global temp_name = "未命名"
global GhostGroup_name = ""
global List_sel = #()
global Ghodt_color_text = "RED"

global Ghost_showTips = true
global renamecancel = true
global Ghost_showText = true
global ReItem = false
maxBackColor = colorMan.getColor #background
global bgcolor =((DotNetClass "System.Drawing.Color").fromARGB (maxBackColor[1] * 255.0f) (maxBackColor[2] * 255.0f) (maxBackColor[3] * 255.0f))
global textcolor = ((DotNetClass "System.Drawing.Color").fromARGB 255 255 255)
global rColor=((DotNetClass "System.Drawing.Color").fromARGB 242 70 70)
global gColor=((DotNetClass "System.Drawing.Color").fromARGB 126 227 126)
global bColor=((DotNetClass "System.Drawing.Color").fromARGB 62 130 255)
global yColor=((DotNetClass "System.Drawing.Color").fromARGB 255 214 128)
global CTColor=((DotNetClass "System.Drawing.Color").fromARGB 144 0 185)
global grayColor=((DotNetClass "System.Drawing.Color").fromARGB 128 128 128)
global deleteColor=((DotNetClass "System.Drawing.Color").fromARGB 15 15 15)
global dnKeys = dotnetclass "System.Windows.Forms.Keys"
global ToolTipObj = dotnetobject "System.Windows.Forms.ToolTip"
ToolTipObj.Active = true

	)

fn creatobj Ghost_set1 text1 onlyOne= --四色重影函数,text1 = RED,GREEN,BLUE,YELLOW,PURPLE
(
	pass = 1
	for o in Ghost_set1 do if not isValidNode o do (pass = 0; exit)
	if pass == 0 do ( messagebox "呀.当前选中的组集里好像有什么奇怪的东西!还是某个东西被你删除过?                   ";return "创建失败")
	if (Ghost_GLayer = LayerManager.getLayerFromName "Ghost_layer") == undefined do Ghost_GLayer = LayerManager.newLayerFromName "Ghost_layer"
	Ghost_GLayer.on = Ghost_GLayer.lock = (LayerManager.getLayer 0).current = true
	color1 = case text1 of
	(
		"RED":(color 242 70 70)
		"YELLOW":(color 255 214 128)
		"GREEN":(color 126 227 126)
		"BLUE":(color 62 130 255)
		"PURPLE":(color 144 0 185)
	)
	undo on(
		with redraw off(animate off(
			b = box wirecolor:color1
			if onlyOne then (bname = ("GHOST2:"+text1+"GHOST_"+GhostGroup_name);b.wirecolor = (color1 * 0.6)) else bname = ("GHOST2:"+text1+"GHOST_"+GhostGroup_name+(slidertime as string))
			u = getnodebyname(bname);if isValidNode u do delete u ; b.name = bname
			converttopoly b
			polyop.deleteVerts b #{1..8}
			b.visibility = bezier_float(); b.visibility.controller.value = 0.3
			b.showfrozeningray = b.renderable = b.castShadows = b.receiveshadows = b.applyAtmospherics = b.inheritVisibility = b.primaryVisibility = b.secondaryVisibility = off
			b.boneEnable=true
			Ghost_GLayer.addnode b
			try
			(
				for i in Ghost_set1 do
				(
					if superclassof i == GeometryClass do
					(
						type = classof (i.baseobject)
						if type == Biped_Object or type == HubObject or type == CATBone then
						(
							b.EditablePoly.attach i b
							b.mat = undefined
						)
						else 
						(	k = instance i
							b.EditablePoly.attach k b
							b.mat = undefined 
						)
					)
				)
				Ghost_Tagobj = b
			)catch
			(
				messagebox "呀.竟然出错了?你是不是删除了组集中的物体?或者对组集添加了什么奇怪的东西?"
				delete b
			)--catch
		)--with animate off
	))--undo on

)

fn findFrame colortext bool= 
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
rcMenu MainMenu 
(
	subMenu	"关于"
	(
		menuItem	MI_showTips 		"开启按钮提示"	enabled:true  checked:Ghost_showTips
		menuItem	MI_showText 		"开启名称提示"	enabled:true  checked:Ghost_showText
		separator sep1
		menuItem	MI_Help 		"说明帮助"	enabled:true
		menuItem	MI_About 		"联系作者"	enabled:true
		menuItem	MI_Version	"2019/07/01 更新"	enabled:true
	)
	on MI_Help picked	do (ShellLaunch "https://www.cgjoy.com/forum.php?mod=viewthread&tid=217614" "")
	on MI_About  picked	do (ShellLaunch "http://tk.v5cg.com/tools/1754.html" "")
	on MI_showTips picked	do 
	(
		ToolTipObj.Active = Ghost_showTips = not MI_showTips.checked
		setINISetting SettingFilePath "MainMenu" "Ghost_showTips" (Ghost_showTips as string)
	)
	on MI_showText picked	do 
	(
		Ghost_showText = not MI_showText.checked
		setINISetting SettingFilePath "MainMenu" "Ghost_showText" (Ghost_showText as string)
		if Ghost_showText then registerRedrawViewsCallback GW_displayGHOSTNames else unregisterRedrawViewsCallback GW_displayGHOSTNames 
	)
	on MainMenu open do 
	(
		if getINISetting SettingFilePath "MainMenu" "Ghost_showTips" == "false" then ToolTipObj.Active = Ghost_showTips = false
		if getINISetting SettingFilePath "MainMenu" "Ghost_showText" == "false" then (Ghost_showText = false;unregisterRedrawViewsCallback GW_displayGHOSTNames)
	)	
)


fn SetName = 
(
	try(destroydialog  TextWindow)catch()
	rollout TextWindow "确认命名" width:200
	(
		editText 'Text' "名称:" text:temp_name width:180 height:22
		button 'okbtn' "确认" align:#left offset:[20,0]
		button 'nobtn' "取消" align:#right offset:[-20,-26]
		on okbtn pressed do (renamecancel = true; temp_name = text.text;destroydialog TextWindow)
		on nobtn pressed do (renamecancel = false; destroydialog TextWindow)
	)
	createdialog TextWindow modal:true
)

fn ReloadItem Listbox = 
(
	Listbox.items = ::GhostGroupList[1]
)

fn ReloadSetAndName Listbox = 
(
	::List_sel = (Listbox.selection as array)
	::GhostGroup_name = ""
	for i in List_sel do (::GhostGroup_name += ::GhostGroupList[1][i])
	::GhostGroup_Set = #()
	for i in List_sel do ::GhostGroup_Set += ::GhostGroupList[2][i]
	::GhostGroup_Set = makeUniqueArray ::GhostGroup_Set
)

fn CallbackReload Listbox =
(
	Listbox.items = ::GhostGroupList[1]
	::List_sel = (Listbox.selection as array)
	::GhostGroup_name = ""
	for i in List_sel do (::GhostGroup_name += ::GhostGroupList[1][i])
	::GhostGroup_Set = #()
	for i in List_sel do ::GhostGroup_Set += ::GhostGroupList[2][i]
	::GhostGroup_Set = makeUniqueArray ::GhostGroup_Set
)	

rollout GhostRollout "Ghost 2" width:117 height:306
(
	dotNetControl btn_p "Button" text: "组集管理" pos:[10,6] width:96 height:26
	multiListBox groupList "" pos:[10,34] width:96 height:7 
	timer reLoadTimer interval:460 active:true
	dotNetControl btn_r "Button" text: "红色重影" pos:[10,140] width:96 height:26
	dotNetControl btn_g "Button" text: "绿色重影" pos:[10,192] width:96 height:26
	dotNetControl btn_b "Button" text: "蓝色重影" pos:[10,218] width:96 height:26
	dotNetControl btn_y "Button" text: "黄色重影" pos:[10,166] width:96 height:26
	dotNetControl btn_CT "Button" text: "紫色标记" pos:[10,244] width:96 height:26
	dotNetControl btn_gc "Button" text: "全局操作" pos:[47,276] width:62 height:26
	dotNetControl btn_t "Button" text: "轨迹" pos:[8,276] width:38 height:26
	
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
	
	on GhostRollout open do
	(
		callbacks.removescripts id:#my_postload
		callbacks.addscript #filePostOpenProcess "CallbackReload GhostRollout.groupList" id:#my_postload
		--定义工具提示
		ToolTipObj.tooltipicon = (dotnetclass "System.Windows.Forms.ToolTipIcon").Info
		ToolTipObj.AutoPopDelay = 15000
		ToolTipObj.InitialDelay = 300
		ToolTipObj.ReshowDelay = 300
		ToolTipObj.ShowAlways = true
	--设置按钮风格
		btn_gc.flatstyle = btn_t.flatstyle = btn_p.flatstyle = btn_r.flatstyle = btn_g.flatstyle = btn_b.flatstyle = btn_y.flatstyle = btn_CT.flatstyle = btn_p.flatstyle.flat
		btn_gc.flatappearance.borderSize = btn_t.flatappearance.borderSize = btn_p.flatappearance.borderSize = btn_r.flatappearance.borderSize = btn_g.flatappearance.borderSize = btn_b.flatappearance.borderSize = btn_y.flatappearance.borderSize = btn_CT.flatappearance.borderSize = 0
	--添加工具提示
		ToolTipObj.SetToolTip btn_p "左键将选中的物体添加进组集列表;\n右键选中的组集中的物体;\n中键删除选中的组集;\n双击组集可以重命名."  
		ToolTipObj.SetToolTip btn_r "鼠标点击时:\n左键创建独立重影;\n右键创建单帧重影;\n中键删除重影,位于帧上时,删除相对的单帧重影.\n\n鼠标在按钮上时:\n','键跳到上一个帧重影;'.'键跳到下一个帧重影;\n滚动滚轮滑动时间轴时间;\nCtrl+滚轮滑动时间轴上的关键帧."
		ToolTipObj.SetToolTip btn_g "鼠标点击时:\n左键创建独立重影;\n右键创建单帧重影;\n中键删除重影,位于帧上时,删除相对的单帧重影.\n\n鼠标在按钮上时:\n','键跳到上一个帧重影;'.'键跳到下一个帧重影;\n滚动滚轮滑动时间轴时间;\nCtrl+滚轮滑动时间轴上的关键帧."
		ToolTipObj.SetToolTip btn_b "鼠标点击时:\n左键创建独立重影;\n右键创建单帧重影;\n中键删除重影,位于帧上时,删除相对的单帧重影.\n\n鼠标在按钮上时:\n','键跳到上一个帧重影;'.'键跳到下一个帧重影;\n滚动滚轮滑动时间轴时间;\nCtrl+滚轮滑动时间轴上的关键帧."
		ToolTipObj.SetToolTip btn_y "鼠标点击时:\n左键创建独立重影;\n右键创建单帧重影;\n中键删除重影,位于帧上时,删除相对的单帧重影.\n\n鼠标在按钮上时:\n','键跳到上一个帧重影;'.'键跳到下一个帧重影;\n滚动滚轮滑动时间轴时间;\nCtrl+滚轮滑动时间轴上的关键帧."
		ToolTipObj.SetToolTip btn_CT "鼠标点击时:\n左键创建独立标记(标记会将选择的第一个物体作为父物体);\n中键删除标记.\n\n鼠标在按钮上时:\n滚动滚轮滑动时间轴时间;\nCtrl+滚轮滑动时间轴上的关键帧."
		ToolTipObj.SetToolTip btn_gc "左键隐藏所有重影;\n右键显示所有重影;\n中键删除所有重影."
		ToolTipObj.SetToolTip btn_t "左键显示选中物体的运动轨迹;\n右键隐藏选中物体的运动轨迹"  
		
	--设置按钮颜色和字体颜色
		btn_t.BackColor=btn_gc.BackColor=btn_p.BackColor=bgcolor
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
	--更新提示
		if getINISetting SettingFilePath "updata" "2019/7/1" != "1" do (
			messageBox "2019年7月1日更新:\n\n\t1.完全重写了用户界面,功能更紧凑,显示更友好;\n\t2.添加了一个列表,现在可以将选中的物体加入列表中;\n\t3.下次打开max时,列表仍然有效\n\t4.采用了新的操作习惯,添加了很多隐藏功能\n\t5.新老用户都请仔细阅读按钮提示\n\n此版本已经过多日的设计,测试和调整,但仍可能存在未考察到的问题.\n如果发现BUG请通过'关于'菜单告诉我                                                                            "
			setINISetting SettingFilePath "updata" "2019/7/1" "1"
			)
		ReloadItem groupList
		groupList.selection = #{1}
		ReloadSetAndName groupList
	)
	on GhostRollout close do
	(
		unregisterRedrawViewsCallback GW_displayGHOSTNames
		callbacks.removescripts id:#my_postload
	)
	on groupList selected sel do 
	(
		List_sel = (groupList.selection as array)
		GhostGroup_Set = #()
		for i in List_sel do GhostGroup_Set += GhostGroupList[2][i]
		GhostGroup_Set = makeUniqueArray GhostGroup_Set
	)
	on groupList doubleClicked arg do if List_sel.count > 0 do (temp_name = groupList.items[List_sel[1]]; SetName(); GhostGroupList[1][List_sel[1]] = temp_name; ReloadItem groupList;ReloadSetAndName groupList)
	on btn_p mouseDown e do
	(
		Case e.button of 
		(
			(btn_p.mousebuttons.Left):
				if selection.count > 0 do 
					(
					temp_name = "未命名";SetName(); if renamecancel do(append GhostGroupList[1] temp_name;append GhostGroupList[2] (selection as array))
					ReloadItem groupList
					ReloadSetAndName groupList
					)
			(btn_p.mousebuttons.middle):
				if (List_sel).count > 0 do 
					(execute ("delete $'GHOST2:*GHOST_" + GhostGroup_name + "*'")
					for i = List_sel.count to 1 by -1 do (
						j = List_sel[i]
						deleteItem GhostGroupList[1] j; deleteItem GhostGroupList[2] j; ReloadItem groupList;ReloadSetAndName groupList
					))
			(btn_p.mousebuttons.right):
				try(select GhostGroup_Set)catch(messagebox "错误")
		)
	)
	
	
	on btn_r MouseMove e do (Ghodt_color_text = "RED";setFocus btn_r)
	on btn_r MouseWheel e do
	(	if keyboard.controlPressed
		then if e.Delta > 0 then slidingKeys true else slidingKeys false
		else if e.Delta > 0 then slidingTime true else slidingTime false
	)
	on btn_r KeyDown e do 
	(
		case e.keycode of
		(
			(dnKeys.Oemcomma) : findFrame Ghodt_color_text true
			(dnKeys.OemPeriod) : findFrame Ghodt_color_text false
		) 
	)
	on btn_r mouseDown e do
	(
		Case e.button of 
		(
			(btn_p.mousebuttons.Right):
				btn_r.FlatAppearance.MouseoverBackColor = rColor
			(btn_p.mousebuttons.middle):
				btn_r.FlatAppearance.MouseoverBackColor = deleteColor
		)
		if List_sel.count > 0 do 
		Case e.button of 
		(
			(btn_p.mousebuttons.Left):
				(creatobj GhostGroup_Set Ghodt_color_text true)
			(btn_p.mousebuttons.Middle):
				(
					name1 = ("GHOST2:"+Ghodt_color_text+"GHOST_"+GhostGroup_name);name2 = name1+(slidertime as string)
					ghost = getnodebyname name1
					if isValidNode ghost do delete ghost
					ghost = getnodebyname name2
					if isValidNode ghost do delete ghost
				)
			(btn_p.mousebuttons.Right):
				(creatobj GhostGroup_Set Ghodt_color_text false)
		)
	)
	on btn_r mouseup e do
	(
		btn_r.FlatAppearance.MouseoverBackColor = graycolor
	)
	
	on btn_g MouseMove e do (Ghodt_color_text = "GREEN";setFocus btn_g)
	on btn_g MouseWheel e do
	(	if keyboard.controlPressed
		then if e.Delta > 0 then slidingKeys true else slidingKeys false
		else if e.Delta > 0 then slidingTime true else slidingTime false
	)
	on btn_g KeyDown e do 
	(
		case e.keycode of
		(
			(dnKeys.Oemcomma) : findFrame Ghodt_color_text true
			(dnKeys.OemPeriod) : findFrame Ghodt_color_text false
		) 
	)
	on btn_g mouseDown e do
	(
		Case e.button of 
		(
			(btn_p.mousebuttons.Right):
				btn_g.FlatAppearance.MouseoverBackColor = gColor
			(btn_p.mousebuttons.middle):
				btn_g.FlatAppearance.MouseoverBackColor = deleteColor
		)
		if List_sel.count > 0 do 
		Case e.button of 
		(
			(btn_p.mousebuttons.Left):
				(creatobj GhostGroup_Set Ghodt_color_text true)
			(btn_p.mousebuttons.Middle):
				(
					name1 = ("GHOST2:"+Ghodt_color_text+"GHOST_"+GhostGroup_name);name2 = name1+(slidertime as string)
					ghost = getnodebyname name1
					if isValidNode ghost do delete ghost
					ghost = getnodebyname name2
					if isValidNode ghost do delete ghost
				)
			(btn_p.mousebuttons.Right):
				(creatobj GhostGroup_Set Ghodt_color_text false)
		)
	)
	on btn_g mouseup e do
	(
		btn_g.FlatAppearance.MouseoverBackColor = graycolor
	)
	
	on btn_b MouseMove e do (Ghodt_color_text = "BLUE";setFocus btn_b)
	on btn_b MouseWheel e do
	(	if keyboard.controlPressed
		then if e.Delta > 0 then slidingKeys true else slidingKeys false
		else if e.Delta > 0 then slidingTime true else slidingTime false
	)
	on btn_b KeyDown e do 
	(
		case e.keycode of
		(
			(dnKeys.Oemcomma) : findFrame Ghodt_color_text true
			(dnKeys.OemPeriod) : findFrame Ghodt_color_text false
		) 
	)
	on btn_b mouseDown e do
	(
		Case e.button of 
		(
			(btn_p.mousebuttons.Right):
				btn_b.FlatAppearance.MouseoverBackColor = bColor
			(btn_p.mousebuttons.middle):
				btn_b.FlatAppearance.MouseoverBackColor = deleteColor
		)
		if List_sel.count > 0 do 
		Case e.button of 
		(
			(btn_p.mousebuttons.Left):
				(creatobj GhostGroup_Set Ghodt_color_text true)
			(btn_p.mousebuttons.Middle):
				(
					name1 = ("GHOST2:"+Ghodt_color_text+"GHOST_"+GhostGroup_name);name2 = name1+(slidertime as string)
					ghost = getnodebyname name1
					if isValidNode ghost do delete ghost
					ghost = getnodebyname name2
					if isValidNode ghost do delete ghost
				)
			(btn_p.mousebuttons.Right):
				(creatobj GhostGroup_Set Ghodt_color_text false)
		)
	)
	on btn_b mouseup e do
	(
		btn_b.FlatAppearance.MouseoverBackColor = graycolor
	)
	
	on btn_y MouseMove e do (Ghodt_color_text = "YELLOW";setFocus btn_y)
	on btn_y MouseWheel e do
	(	if keyboard.controlPressed
		then if e.Delta > 0 then slidingKeys true else slidingKeys false
		else if e.Delta > 0 then slidingTime true else slidingTime false
	)
	on btn_y KeyDown e do 
	(
		case e.keycode of
		(
			(dnKeys.Oemcomma) : findFrame Ghodt_color_text true
			(dnKeys.OemPeriod) : findFrame Ghodt_color_text false
		) 
	)
	on btn_y mouseDown e do
	(
		Case e.button of 
		(
			(btn_p.mousebuttons.Right):
				btn_y.FlatAppearance.MouseoverBackColor = yColor
			(btn_p.mousebuttons.middle):
				btn_y.FlatAppearance.MouseoverBackColor = deleteColor
		)
		if List_sel.count > 0 do 
		Case e.button of 
		(
			(btn_p.mousebuttons.Left):
				(creatobj GhostGroup_Set Ghodt_color_text true)
			(btn_p.mousebuttons.Middle):
				(
					name1 = ("GHOST2:"+Ghodt_color_text+"GHOST_"+GhostGroup_name);name2 = name1+(slidertime as string)
					ghost = getnodebyname name1
					if isValidNode ghost do delete ghost
					ghost = getnodebyname name2
					if isValidNode ghost do delete ghost
				)
			(btn_p.mousebuttons.Right):
				(creatobj GhostGroup_Set Ghodt_color_text false)
		)
	)
	on btn_y mouseup e do
	(
		btn_y.FlatAppearance.MouseoverBackColor = graycolor
	)
	
	on btn_CT MouseMove e do (Ghodt_color_text = "PURPLE";setFocus btn_CT)
	on btn_CT MouseWheel e do
	(	if keyboard.controlPressed
		then if e.Delta > 0 then slidingKeys true else slidingKeys false
		else if e.Delta > 0 then slidingTime true else slidingTime false
	)
	on btn_CT mouseDown e do
	(
		Case e.button of 
		(
			(btn_p.mousebuttons.Right):
				btn_CT.FlatAppearance.MouseoverBackColor = CTColor
			(btn_p.mousebuttons.middle):
				btn_CT.FlatAppearance.MouseoverBackColor = deleteColor
		)
		if List_sel.count > 0 do 
		Case e.button of 
		(
			(btn_p.mousebuttons.Left):
				(creatobj GhostGroup_Set Ghodt_color_text true)
			(btn_p.mousebuttons.Middle):
				(
					name1 = ("GHOST2:"+Ghodt_color_text+"GHOST_"+GhostGroup_name)
					ghost = getnodebyname name1
					if isValidNode ghost do delete ghost
				)
		)
	)
	on btn_CT mouseup e do
	(
		btn_CT.FlatAppearance.MouseoverBackColor = graycolor
	)
	
	
	on btn_gc mouseDown e do
	(
		Case e.button of 
		(
			(btn_p.mousebuttons.Left):
				(hide $'GHOST2:*GHOST*')
			(btn_p.mousebuttons.Right):
				(unhide $'GHOST2:*GHOST*')
			(btn_p.mousebuttons.middle):
				if keyboard.controlPressed then (clearAllGhost();LayerManager.deleteLayerByName "Ghost_layer";persistents.remove #GhostGroupList) else (clearAllGhost();LayerManager.deleteLayerByName "Ghost_layer")
		)
	)
	on btn_t mouseDown e do
	(
		Case e.button of 
		(
			(btn_p.mousebuttons.Left):
				try($.showTrajectory = on)catch()
			(btn_p.mousebuttons.Right):
				try($.showTrajectory = off)catch()
		)
	)
)
createdialog GhostRollout menu:MainMenu  --bgcolor:(color 68 68 68)
