try(destroydialogToolbag)catch()
rollout Toolbag "动作组工具箱" width:136 height:192
(
	fn loadFiles fpath:@"//Desktop-s0ef9oi/工作中用到的脚本/asset" type:#(@"/*.ms", @"/*.mse") = 
	if classof fpath == String and DoesFileExist fpath do
	(
		local files = #()
		for f in type do files += getFiles(fpath + f)
		files
	)
	
	local files = #()
	listbox 'lbx1' "动作组工具箱" pos:[8,8] width:120 height:10 align:#left
	on Toolbag open do
	(
		files = loadFiles()
		lbx1.items = for f in files collect getFilenameFile(f)
	)
	on lbx1 doubleClicked sel do
	(
		filein files[sel]
	)
)
createdialog Toolbag

