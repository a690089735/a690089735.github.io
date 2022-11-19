--自动保存可设置项
-- 1.自动保存数量
-- 2.自动保存间隔
-- 3.自动保存文件名
-- 4.开启或关闭自动清理,自动清理n天前的文件
-- 备用保存可设置项
-- 1. 仅保留一个备用保存文件

try(destroydialog BackUpRollout)catch()

rollout BackUpRollout "容灾工具" width:160 height:116
(
	local
	--功能
	_reset = false,
	_Cursor = (dotnetclass "System.Windows.Forms.Cursor"),
	_Offset = [0,0],
	_Pin = false,
	ToolTipObj = dotnetobject "System.Windows.Forms.ToolTip",
	_Current_File, --用于判断是否有切换文件,避免备份保存跨文件叠加计数
	--菜单
	AboutMenu,
	AutoSaveMenu,
	BackSaveMenu,
	--配置
	autosaveFolder = getdir #autoback,
	startFolder = getdir #userstartupScripts,
	iniFile = startFolder + @"\recoveryToolSetting.ini",
	_undoLevel,
	_autoSave_enabled, --bool
	_autoSave_Interval,
	_autoSave_number,
	_autoSave_doClear, --bool
	_autoSave_clearSpacing,
	_backSave_enabled, --bool
	_backSave_onlyOne, --bool
	_autoSaveFileName, --不保存
	--设置的UI[省略abk目录,和脚本启动目录两项]
	aTimeSld,
	aCountSld,
	aFileNameEdt,
	AClearCkb,
	AClearSpacingSld,
	bOnlyOneCkb

	--依赖函数
	fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y]
	--自动保存文件名依赖
	fn GenerateAutoSaveFileName =
	(
		fn len2 v u:2 =
		(
			for i = 1 to (u - v.count) do v = "0" + v
			return v
		)
		t = getLocalTime()
		t = for i in t collect i as string
		t[1] = len2 t[1] u:4;for i = 2 to 7 do t[i] = len2 t[i]
		d = t[1] + "_" + t[2] + "_" + t[4] + "_" + t[5] + t[6] + t[7] + "_" + ("周" + #("日","一","二","三","四","五","六")[t[3] as integer + 1]) + "_"
		return d
	)
	--创建菜单的依赖
	fn BuildMenuStrip Items:#() Images:#() Clicks:#() left:-32 ForeColor: BackColor: onOpening: = --精简版,完整来源在重影3中.
	(
		local CMS = dotNetObject "ContextMenuStrip",sepcount = 0,hasimg = false
		for i = 1 to Items.count do --菜单项
		(
			local
			currentItem = Items[i]
-- 			print(currentItem)
-- 			print (classOf currentItem == dotNetObject)
			if classOf currentItem == dotNetObject then CMS.items.add currentItem
			else
			(
				local iname = currentItem,item
				case of
				(
					(iname == "-") : (
						index = CMS.items.add(dotNetObject "ToolStripSeparator")
						item = CMS.items.item[index]
						item.name = ("sep" + (sepcount += 1) as string)
						item.Margin = (dotnetObject "Padding" 0 0 0 0)
					)
					default : (
						index = CMS.items.add(dotNetObject "ToolStripMenuItem" iname)
						item = CMS.items.item[index]
						item.name = iname
					)
				)
				
				img = try(Images[i])catch(0)
				if img as string == "dotNetObject:System.Drawing.Bitmap" do (item.image = img;hasimg = true)
				
				func = try(Clicks[i])catch(0)
				if classOf func == MAXScriptFunction do dotNet.addEventHandler item "Click" func
				
-- 				CMS.ShowCheckMargin = false --(dotnet.ValueToDotNetObject true (dotNetClass "System.Boolean"))
				CMS.ShowImageMargin = false
				dotNet.setLifetimeControl item #dotnet
			)
		)
		
		if BackColor != unsupplied do CMS.BackColor = BackColor
		if ForeColor != unsupplied do CMS.ForeColor = ForeColor
			
		if onOpening != unsupplied do dotNet.addEventHandler CMS "Opening" onOpening --在开启事件中获取和刷新数据
		dotNet.setLifetimeControl CMS #dotnet
		return CMS
	)
	--创建数值框的依赖
	fn buildNumberBox w h bColor: fColor: inc:1 dp:0 minV:-999 maxV:999 val:0 cutArrows:off changed: =
	(
		pnl = dotnetobject "panel"
		pnl.Size = dotNetObject "System.Drawing.Size" 80 60
		
		lbl = dotNetObject "label"
		lbl.text = "保存间隔"
-- 		lbl.AutoSize = true
		lbl.width = 64
-- 		lbl.Hide()
-- 		lbl.Refresh()
-- 		lbl.OnPaint()
-- 		lbl.width = 200
-- 		print lbl.width
		spn = dotNetObject "NumericUpDown"
		spn.Increment = inc
		spn.size.Width = (w-64)
		spn.size.Height = h
		spn.Location.x = 64
		spn.Region = dotNetObject "System.Drawing.Region" (dotNetObject "System.Drawing.Rectangle" 0 0 (spn.size.Width-20) h)
		spn.BackColor = bColor
		spn.ForeColor = fColor
		spn.BorderStyle = spn.BorderStyle.none
		
		
		
		pnl.Controls.AddRange #(lbl,spn)
		customItem = DotnetObject "System.Windows.Forms.ToolStripControlHost" pnl
		customItem.autoSize = false
		customItem.Size = dotNetObject "System.Drawing.Size" (w+40) (h+20)
		customItem
	)
	
	--事件
	fn _EventAnswer a b =
	try
	(
		tempFileName = maxfilepath + maxfilename
		if _Current_File != tempFileName then (_Current_File  = tempFileName;_EventCounter = 1) else
		(
			_EventCounter += 1
			if (mod _EventCounter 36) as integer < 1 do --目前是32步,改为在一些节点事件结束后+1,有些事件会被播放动画触发不能采用 --在这里设置步数,目前是100步自动保存,注意,这一百步包括了对象选择,对象改名,对象控制器变化,材质变化,撤销也算更改,也会增加次数.
			(
				_EventCounter = 0 --计数清零,避免操作步数太多.
				savepath = maxfilepath
				if doesDirectoryExist savepath then (saveMaxFile (_Current_File + ".autoSave") useNewFile:false;displayTempPrompt "备用保存完成,安心工作..." 5000) else (messagebox "已经积累了很多操作,请及时保存文件.";max file save)
			)
		)
		if _backSave_onlyOne do ()--如果记录存在,则按记录文件清理旧文件,并删除记录.
		()--记录刚保存的文件
-- 		print _EventCounter
	)catch(messagebox "备用保存发生异常,可能max处于不稳定状态,请及时备份文件.")
	
	dotNetControl 'lbl_Ico' "Label" pos:[0,0] width:20 height:20 align:#left
	dotNetControl 'lbl_Tit' "Label" pos:[20,0] width:120 height:20 align:#left 
	dotNetControl 'btn_Cls' "Button" pos:[140,0] width:20 height:20 align:#left
	
-- 	label lbl0 "" pos:[0,0] width:160 height:96
	
	label lbl1 "撤销级别" pos:[8,28] width:56 height:16
	spinner spn1 "" pos:[64,28] width:56 height:16 range:[1,500,256] type:#integer scale:1 --右键点击变为最小值而不一定是0
	dotnetcontrol btn_About "Button" pos:[128,26] width:24 height:24 toolTip:"其他功能" --打开Autoback目录,打开启动目录"提示:删除其中的xxx.mse即可停止自动启动并彻底卸载本工具",第一次拖动进max来自动安装和清理.
	
	checkbutton ckb1 "自动保存未开启" pos:[8,52] width:120 height:24 highlightColor:(color 90 170 30)
	dotnetcontrol btn_autoSaveSet "Button" pos:[128,52] width:24 height:24 toolTip:"设置自动保存" --删除备份目录多少天以上的max文件
	
	checkbutton ckb2 "备用保存未开启" pos:[8,84] width:120 height:24 highlightColor:(color 90 170 30)
	dotnetcontrol btn_backSaveSet "Button" pos:[128,84] width:24 height:24 toolTip:"设置备用保存" --删除
	
	--要加一个时钟,每秒获取自动保存的设置.发现设置不同,则刷新并保存.
	
	--加载数据
	fn loadData =
	try(
		--as booleanClass
		_undoLevel = (getINISetting iniFile "undo" "level") as integer
		
		_autoSave_enabled = (getINISetting iniFile "autoSave" "enabled") as booleanClass
		_autoSave_Interval = (getINISetting iniFile "autoSave" "spacing") as integer --n分钟
		_autoSave_number = (getINISetting iniFile "autoSave" "number") as integer
		_autoSave_doClear = (getINISetting iniFile "autoSave" "doClear") as booleanClass
		_autoSave_clearSpacing = (getINISetting iniFile "autoSave" "clearSpacing") --n天前
		
		_backSave_enabled = (getINISetting iniFile "backSave" "enabled") as booleanClass
		_backSave_onlyOne = (getINISetting iniFile "backSave" "onlyOne") as booleanClass
		
	)catch(messagebox "读配置文件错误,工具即将在重置后自动退出,请手动重启工具.";_reset = true;deletefile iniFile;destroydialog BackUpRollout) --如果出错,删除配置文件,然后重启脚本(有可能用户编辑了配置文件,写了个无法读取的变量)
	--保存数据
	fn saveData undoLevel: autoSave_enabled: autoSave_Interval: autoSave_number: autoSave_doClear: autoSave_clearSpacing: backSave_enabled: backSave_onlyOne: all: =
	(
		if all == true do 
		(
			undoLevel = _undoLevel
-- 			print 2
			
			autoSave_enabled = _autoSave_enabled
			autoSave_Interval = _autoSave_Interval
			autoSave_number = _autoSave_number
			autoSave_doClear = _autoSave_doClear
			autoSave_clearSpacing = _autoSave_clearSpacing
				
			backSave_enabled = _backSave_enabled
			backSave_onlyOne = _backSave_onlyOne
		)
		
		if undoLevel != Unsupplied do setINISetting iniFile "undo" "level" (undoLevel as string) --"256"
			
		if autoSave_enabled != Unsupplied do setINISetting iniFile "autoSave" "enabled" (autoSave_enabled as string) --"true"
		if autoSave_Interval != Unsupplied do setINISetting iniFile "autoSave" "spacing" (autoSave_Interval as string) --"3.0"
		if autoSave_number != Unsupplied do setINISetting iniFile "autoSave" "number" (autoSave_number as string) --"60"
		if autoSave_doClear != Unsupplied do setINISetting iniFile "autoSave" "doClear" (autoSave_doClear as string) --"true"
		if autoSave_clearSpacing != Unsupplied do setINISetting iniFile "autoSave" "clearSpacing" (autoSave_clearSpacing as string) --"7"
			
		if backSave_enabled != Unsupplied do setINISetting iniFile "backSave" "enabled" (backSave_enabled as string) --"true"
		if backSave_onlyOne != Unsupplied do setINISetting iniFile "backSave" "onlyOne" (backSave_onlyOne as string) --"true"
	)
	--读取数据
	fn getData =
	(
		_undoLevel = theHold.getMaxUndoLevels()
-- 		print #(1,_undoLevel) #nomap
		
		_autoSave_enabled = autosave.Enable
		_autoSave_Interval = autosave.Interval
		_autoSave_number = autosave.NumberOfFiles
		_autoSave_doClear = true --默认清理
		_autoSave_clearSpacing = 7 --默认清理autoback文件夹下,超过7天的max文件(移动到回收站)
		
		_backSave_enabled = true --默认开启
		_backSave_onlyOne = true --默认清理(只保留一个)
	)
	--设置数据
	fn setData =
	(
		theHold.setMaxUndoLevels _undoLevel
		
		autosave.Enable = _autoSave_enabled
		autosave.Interval = _autoSave_Interval
		autosave.NumberOfFiles = _autoSave_number
	)
	--更新选择按钮
	fn refreshDis = 
	(
		spn1.value = _undoLevel
		ckb1.caption = if (ckb1.checked = _autoSave_enabled) then "自动保存已开启" else "自动保存未开启"
		ckb2.caption = if (ckb2.checked = _backSave_enabled) then "备用保存已开启" else "备用保存未开启"
	)
	
	--注册事件
	fn regEvent = --这里设置为5秒中内的事件合并为一个,配合上面的36,最快为3.0分钟存一次,64为5.333分钟保存一次
	(
		_NodeEvent = NodeEventCallback mouseUp:true delay:5000 linkChanged:_EventAnswer nameChanged:_EventAnswer selectionChanged:_EventAnswer --不可以是callbackEnd:_EventAnswer,因为播放动画也会触发.
		displayTempPrompt "已开启备用保存!" 5000
	)
	--注销事件
	fn unregEvent = (_NodeEvent = undefined;gc light:true;displayTempPrompt "已关闭备用保存!" 5000)
	--初始化UI
	fn _UIInitialization =
	(
		
		fn StringToImage str = -- http://lonerobot.net/ --给UI初始化调用
		(
			local ConvertClass = dotNetClass "System.Convert"
			local ImageClass = dotNetClass "System.Drawing.Image"
			byteArr = ConvertClass.FromBase64String str
			memstream = dotnetobject "System.IO.MemoryStream" byteArr
			DecodedImg = ImageClass.fromstream memstream
			memstream.close() ; return DecodedImg
		)
		fn getColor colr val:32 asDotNet:true dir:false =  --文字色 背景色为反求 val:0-1
		(
			colr = copy colr
			if classOf colr == Color do colr = colr as point3
			if dir do return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3]
			for i = 1 to 3 do (colr[i] += val;if colr[i] > 255 do colr[i] -= 256;if colr[i] < 0 do colr[i] += 256)
			if asDotNet then return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3] else return (colr  as Color)
		)
		local
			TitleImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADBQTFRFAAAALi4uAQEBAAAA29vbDw8PODg4GRkZDQ0NDg4O3t7eEBAQ/zU+CgoKBwcHCAgI2JIlTAAAABB0Uk5TAP///////////////////8BQi0MAAABfSURBVHicY2AQUlJWUmAAAhMXF5dgMCMtxSXEACoS3gwWAQJPqMgSbxDD2MXFGMQwZjBxBhIgwGwApkA8sADzGQMgAjJszhy2OXMWzACC0yAGyMDTyCJ67x7/f/eIAQASoSHt3F9lwAAAAABJRU5ErkJggg==",
			BC = (colorMan.getColor #background)*255,
			BackColor = getColor BC dir:true,
			PanelColor = getColor BC val:32,
			ForeColor = getColor BC val:152,
			TitleColor = getColor BC val:-16,
			RedColor = getColor [232,17,35] dir:true,
			ForeColor = getColor BC val:152,
			BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,
	-- 		BorderSize = 0,
			Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat,
			MiddleLeft = (dotnetclass "System.Drawing.ContentAlignment").MiddleLeft,
			btnImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAlQTFRFAAAAAAAA////g93P0gAAAAN0Uk5TAP//RFDWIQAAABpJREFUeJxjYAABUdbQAAZJtlUTICwEIFkCAGRjCIZ/vKakAAAAAElFTkSuQmCC",
			arrowImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGNQTFRFAAAADw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8P52lg3QAAACF0Uk5TAAEaEwlVg1aH6Jph9Dzl/3UEU3Jt8/qQXJcLAqYWjyodWsqmoQAAAGxJREFUeJxtzssCgiAURdGtmVmhgCVZ+ej/v7IuiDDozPYaHfi7ooRDlfWxhlNTpT5f4Kp2aTstoJWxsQMEKaQ38NJLR9Dqxn3IwT2w45DAPV/wFgngO4iHrcEaJeCmOV61ZoEx9U9W+GSd7wuyNQgLW0e80gAAAABJRU5ErkJggg=="

		lbl_Ico.image = TitleImage;
		lbl_Ico.BackColor = TitleColor --图标栏
		lbl_Tit.BackColor = TitleColor;lbl_Tit.ForeColor = ForeColor;lbl_Tit.TextAlign = MiddleLeft --标题栏
		btn_Cls.BackColor = TitleColor;btn_Cls.ForeColor = ForeColor;btn_Cls.flatstyle = flat;btn_Cls.flatappearance.borderSize = 0;btn_Cls.FlatAppearance.MouseOverBackColor = RedColor --关闭按钮
		lbl_Tit.text = "容灾工具"
		btn_Cls.text = "X"
		
		for c in #(btn_About,btn_autoSaveSet,btn_backSaveSet) do (c.BackColor = BackColor;c.ForeColor = ForeColor;c.Flatstyle = Flat;c.Flatappearance.borderSize = 0;c.image = btnImage)

		ToolTipObj.AutoPopDelay = 20000 --持续显示的时间
		ToolTipObj.InitialDelay = 750 --停留后多长时间显示
		ToolTipObj.ReshowDelay = 750 --已经显示提示时,移动后显示另一个提示的最小间隔
		ToolTipObj.ShowAlways = ToolTipObj.UseAnimation = ToolTipObj.UseFading = true
		
		ToolTipObj.SetToolTip btn_About "关于和其他功能"
		ToolTipObj.SetToolTip btn_autoSaveSet "自动保存选项"
		ToolTipObj.SetToolTip btn_backSaveSet "备份保存选项"
		
		--创建按钮菜单和响应
		--关于
-- 		btn_About.ContextMenuStrip = 0
		AboutMenuItems = #(
			(
				local
					pnl = dotnetobject "panel",btn1 = dotnetobject "button",btn2 = dotnetobject "button",btnW = 100,btnH = 20
				pnl.Size = dotNetObject "System.Drawing.Size" 200 20 --设置板子尺寸
				btn1.text = "AutoBack目录";btn2.text = "工具启动目录" --设置按钮文本
				btn1.Size = dotNetObject "System.Drawing.Size" btnW btnH;btn2.Size = dotNetObject "System.Drawing.Size" btnW btnH--设置按钮尺寸
				btn1.Location = dotNetObject "System.Drawing.Point" 0 0;btn2.Location = dotNetObject "System.Drawing.Point" btnW 0 --设置按钮位置
				fn btn1pressed = shellLaunch "explorer.exe" autosaveFolder
				fn btn2pressed = shellLaunch "explorer.exe" startFolder
				dotnet.addEventHandler btn1 "Click" btn1pressed
				dotnet.addEventHandler btn2 "Click" btn2pressed
				for b in #(btn1,btn2) do (b.BackColor = BackColor;b.ForeColor = ForeColor;b.Flatstyle = Flat;b.Flatappearance.borderSize = 0;dotNet.setLifetimeControl b #dotnet;pnl.controls.add b)
				customItem = DotnetObject "System.Windows.Forms.ToolStripControlHost" pnl
				customItem.autoSize = false
				customItem.Size = dotNetObject "System.Drawing.Size" 200 100
				customItem
			),
			"-",
			"赞助"
		)
		fn AboutMenuOpening s e =
		(
			
		)
-- 		print AboutMenuItems
		AboutMenu = BuildMenuStrip Items:AboutMenuItems Images:#() Clicks:#() left:-32 ForeColor:ForeColor BackColor:BackColor onOpening:AboutMenuOpening
		--自动保存
		fn AutoSaveMenuOpening s e =
		(
			
		)
		AutoSaveItems = #(buildNumberBox 80 14 bColor:PanelColor fColor:ForeColor)
		AutoSaveMenu = BuildMenuStrip Items:AutoSaveItems Images:#() Clicks:#() left:-32 ForeColor:ForeColor BackColor:BackColor onOpening:AutoSaveMenuOpening
		--备用保存
		fn BackSaveMenuOpening s e =
		(
			
		)
		BackSaveMenu = BuildMenuStrip Items:#("1") Images:#() Clicks:#() left:-32 ForeColor:ForeColor BackColor:BackColor onOpening:BackSaveMenuOpening
		--读配置文件
-- 			local test = (print #(iniFile, doesFileExist iniFile) #nomap)
		if doesFileExist iniFile then (loadData();if not _reset do setData()) else (getData();saveData all:true)
		--设置选择钮
		refreshDis()
	)
	--UI控制类
	on ckb1 changed state do
	(
		if _autoSave_enabled = autoSave.enable = state then displayTempPrompt "已开启自动保存!" 5000 else displayTempPrompt "已关闭备用保存!" 5000
		saveData autoSave_enabled:_autoSave_enabled
	)
	on ckb2 changed state do
	(
		if _backSave_enabled = state then regEvent() else unregEvent()
		saveData backSave_enabled:_backSave_enabled
	)
	on btn_About click do AboutMenu.show _Cursor.Position
	on btn_autoSaveSet click do AutoSaveMenu.show _Cursor.Position
	on btn_backSaveSet click do BackSaveMenu.show _Cursor.Position		
	--窗口事件
	on BackUpRollout open do
	(
		_autoSaveFileName = GenerateAutoSaveFileName()
		_UIInitialization()--初始化UI
	)
	on BackUpRollout oktoclose do if not _reset do queryBox "退出后将关闭 备用保存功能.\t\n其他功能不受影响." title:"确定退出?"
-- 	on BackUpRollout close do
-- 	(
-- 		_NodeEvent = undefined;gc light:true
-- 		if _reset then (getData();saveData all:true) else saveData all:true
-- 	)
	--标题栏响应
	on lbl_Ico mouseDown do (_Pin = true;_Offset = (GetDialogPos BackUpRollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico mouseUp do (_Pin = false)
	on lbl_Ico mouseMove do if _Pin do SetDialogPos BackUpRollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit mouseDown do (_Pin = true;_Offset = (GetDialogPos BackUpRollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit mouseUp do _Pin = false
	on lbl_Tit mouseMove do if _Pin do SetDialogPos BackUpRollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on btn_Cls click do DestroyDialog BackUpRollout
)
createdialog BackUpRollout style:#()