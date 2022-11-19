-- 2021/4/28 max的保存实在是不靠谱,自动保存竟然还能临时失灵,这里加入节点事件回调机制,每操作N次自动触发保存一次,在目录里保存为"文件名.autosave".

-- 0应当整体优化设置选项
-- 1美化界面(将设置选项折叠起来)
-- 2可记录配置文件
-- 3制作说明文档和演示


try (destroydialog SetPreferences)catch()

rollout SetPreferences "设置用户首选项" width:176 height:232
(
	local _Current_File = maxfilepath + maxfilename, _NodeEvent, _EventCounter = 0 --事件计数器
	fn len2 v u:2 =
	(
		for i = 1 to (u - v.count) do v = "0" + v
		return v
	)
	fn week2 n =
	(
		list = #("日","一","二","三","四","五","六")
		return ("周" + list[n as integer + 1])
	)
	fn _EventAnswer a b =
	try
	(
		tempFileName = maxfilepath + maxfilename
		if _Current_File != tempFileName then (_Current_File  = tempFileName;_EventCounter = 1) else
		(
			_EventCounter += 1
			if (mod _EventCounter 63) as integer < 1 do --目前是32步,改为在一些节点事件结束后+1,有些事件会被播放动画触发不能采用 --在这里设置步数,目前是100步自动保存,注意,这一百步包括了对象选择,对象改名,对象控制器变化,材质变化,撤销也算更改,也会增加次数.
			(
				_EventCounter = 0 --计数清零,避免操作步数太多.
				savepath = maxfilepath
				if doesDirectoryExist savepath then (saveMaxFile (_Current_File + ".autoSave") useNewFile:false;displayTempPrompt "备用保存完成,安心工作..." 3000) else (messagebox "已经积累了很多操作,请及时保存文件.";max file save)
			)
		)
-- 		print _EventCounter
	)
	catch(messagebox "备用保存发生异常,可能max处于不稳定状态,请及时备份文件.")
	checkbutton ckb_SwitchAutoSave "启用自动保存" pos:[7,64] width:160 height:24
	spinner spn_AutoSaveTime "自动保存时间" pos:[7,96] width:160 height:16 range:[0.01,100,0.01] scale:1
	spinner spn_AutoSaveNum "自动保存数量" pos:[9,119] width:160 height:16 range:[1,100,1] type:#integer scale:1
	edittext edt_AutoSaveFileName "" pos:[7,156] width:160 height:20
	label lbl_AutoSaveFileName "自动保存文件名" pos:[15,140] width:152 height:16
	button btn_AutoBackDir "Autoback目录" pos:[7,184] width:80 height:16
	button btn_StartUpDir "脚本启动目录" pos:[87,184] width:80 height:16
	GroupBox grp_AutoSave "自动保存" pos:[0,48] width:174 height:160
	GroupBox grp_General "通用选项" pos:[0,8] width:176 height:40
	spinner spn_UndoNum "撤销次数" pos:[16,25] width:144 height:16 range:[1,500,128] type:#integer scale:1
	label lbl2 "备用保存已启用,安心工作.." pos:[8,212] width:160 height:16
	on SetPreferences open do
	(
		t = getLocalTime()
		t = for i in t collect i as string
		t[1] = len2 t[1] u:4;for i = 2 to 7 do t[i] = len2 t[i]
		d = t[1] + "_" + t[2] + "_" + t[4] + "_" + t[5] + t[6] + t[7] + "_" + week2 t[3] + "_"
		ckb_SwitchAutoSave.checked = autosave.Enable
		spn_AutoSaveTime.value = autosave.Interval
		spn_AutoSaveNum.value = autosave.NumberOfFiles
		autosave.filename = edt_AutoSaveFileName.text = d
		spn_UndoNum.value = theHold.getMaxUndoLevels()
		_NodeEvent = NodeEventCallback mouseUp:true delay:1500 added:_EventAnswer deleted:_EventAnswer linkChanged:_EventAnswer nameChanged:_EventAnswer selectionChanged:_EventAnswer --不可以是callbackEnd:_EventAnswer,因为播放动画也会触发.
		--displayTempPrompt "备用保存已启用,安心工作..." 1500 --上面的事件设为1500可以把1500内的事件合并为1个
	)
	on SetPreferences close do
	(
		_NodeEvent = undefined;gc light:true
	)
	on ckb_SwitchAutoSave changed state do
	(
		autosave.Enable = state
	)
	on spn_AutoSaveTime changed val do
	(
		autosave.Interval = val
	)
	on spn_AutoSaveNum changed val do
	(
		autosave.NumberOfFiles = val
	)
	on edt_AutoSaveFileName changed text do
	(
		autosave.filename = edt_AutoSaveFileName.text = substituteString text "\n" ""
	)
	on btn_AutoBackDir pressed do
		shellLaunch "explorer.exe" (getdir #autoback)
	on btn_StartUpDir pressed do
		shellLaunch "explorer.exe" (getdir #startupScripts) -- or #userStartupScripts
	on spn_UndoNum changed val do
	(
		theHold.setMaxUndoLevels val
	)
)
createdialog SetPreferences pos:[0,0]

