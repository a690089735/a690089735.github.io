try(destroydialog index)catch()
rollout index "脚本启动器" width:280 height:362
(
	local scriptlist = #()
	local scriptpath = @"E:\我的坚果云\max脚本\绑定\用品"
	
	listbox lbx1 "脚本列表" pos:[8,10] width:264 height:25
	button btn2 "刷新" pos:[240,8] width:32 height:16
	button btn4 "OpenFolder" pos:[170,8] width:66 height:16
	
	fn getscripts = (scriptlist = getFiles (scriptpath+@"\*.ms");lbx1.items = for n in scriptlist collect getfilenamefile n)
	
	on index open do getscripts()
	on lbx1 doubleClicked sel do filein scriptlist[sel]
	on btn2 pressed do getscripts()
	on btn4 pressed do shellLaunch "explorer.exe" scriptpath
)
createdialog index pos:[60,350]