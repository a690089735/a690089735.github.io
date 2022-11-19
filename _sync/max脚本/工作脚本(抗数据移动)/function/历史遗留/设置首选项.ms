try (destroydialog SetPreferences)catch()

rollout SetPreferences "设置用户首选项" width:176 height:212
(
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
createdialog SetPreferences

