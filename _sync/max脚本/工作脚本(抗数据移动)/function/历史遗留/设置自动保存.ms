try (destroydialog AutosaveSetting)catch()

rollout AutosaveSetting "设置自动保存" width:176 height:152
(
	checkbutton ckb1 "启用自动保存" pos:[8,8] width:160 height:24
	spinner spn1 "自动保存时间" pos:[8,40] width:160 height:16 range:[0.01,100,0.01] scale:1
	spinner spn2 "自动保存数量" pos:[10,63] width:160 height:16 range:[1,100,1] type:#integer scale:1
	edittext edt1 "" pos:[8,100] width:160 height:20
	label lbl1 "自动保存文件名" pos:[16,84] width:152 height:16
	button btn1 "Autoback目录" pos:[8,128] width:80 height:16
	button btn2 "脚本启动目录" pos:[88,128] width:80 height:16
	on AutosaveSetting open do
	(
		t = getLocalTime()
		d = t[1] as string + "_" + t[2] as string + "_" + t[4] as string + "_" + t[5] as string + t[6] as string + t[7] as string + "_"
		ckb1.checked = autosave.Enable
		spn1.value = autosave.Interval
		spn2.value = autosave.NumberOfFiles
		autosave.filename = edt1.text = d
	)
	on ckb1 changed state do
	(
	 autosave.Enable = state
	)
	on spn1 changed val do
	(
		autosave.Interval = val
	)
	on spn2 changed val do
	(
		autosave.NumberOfFiles = val
	)
	on edt1 changed text do
	(
		autosave.filename = edt1.text = substituteString text "\n" ""
	)
	on btn1 pressed  do
		shellLaunch "explorer.exe" (getdir #autoback)
	on btn2 pressed  do
		shellLaunch "explorer.exe" (getdir #startupScripts) -- or #userStartupScripts
)
createdialog AutosaveSetting

