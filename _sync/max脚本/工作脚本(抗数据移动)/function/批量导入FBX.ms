
try(destroydialog FBXImpoter)catch()
--自己手动设置一下FBX导入参数FbxImporterSetParam <String>arg <Value>val,或者采取呼出对话框的方式来设置

rollout FBXImpoter "FBXImpoter" width:208 height:304
(
	multiListBox lbx1 "文件列表" pos:[7,8] width:192 height:18
	button btn1 "浏览" pos:[8,264] width:40 height:32
	button btn2 "导入选中项" pos:[56,264] width:144 height:32
	label lbl1 "0/0文件" pos:[130,8] width:150 height:16
	
	local filesList = #()
	
	fn importFBXFile files X MaxNum = 
	(
		local i = 0
		local offset = [1,0,0]
		
		suspendEditing()
		with redraw off(undo off(animate off(
			for f in files where doesfileexist f do 
			(
				importFile f #noPrompt using:FBXIMP
				max select invert
				move (for o in selection as array where o.parent == undefined collect o) (x*offset)
				i+=1
				max select all
				if (mod i 5) < 1 do delete (for i in objects as array where isKindOf i BoneGeometry OR isKindOf i Biped_Object collect i)
				if i > MaxNum do 
				(
					move (for o in selection as array where o.parent == undefined collect o) [0,0,x]
					i = 0
					offset = [-1,0,0]
				)
			)
		)))
		delete (for i in objects as array where isKindOf i BoneGeometry OR isKindOf i Biped_Object collect i)
		resumeEditing()
		messagebox "操作结束.\t\t"
		completeRedraw()
	)
	fn getFBXfiles lastpath: =
	(
		local folderpath = if lastpath == unsupplied then (getSavePath caption:"选择一个文件夹.") else lastpath
		if folderpath == undefined do return #()
		local files = getFiles (folderpath + "\*.FBX")
		local Directories = getDirectories (folderpath + "\*")
		if Directories.count == 0 then return files else for p in Directories do files += getFBXfiles lastpath:p
		return files
	)
	fn getItemName files = 
	(
		return for f in files collect getfilenamefile f
	)
	
	on btn1 pressed do
	(
		filesList = getFBXfiles()
		lbx1.items = getItemName filesList
		lbl1.caption = ((lbx1.selection as array).count as string + "/" + lbx1.items.count as string + "文件")
	)
	on btn2 pressed do
	(
		importFBXFile (for i in lbx1.selection collect filesList[i]) 10 50
	)
-- 	on lbx1 selected val do format "selected: % - %\n" val lbx1.selection[val]
	on  lbx1 selectionEnd do lbl1.caption = ((lbx1.selection as array).count as string + "/" + lbx1.items.count as string + "文件")
)

createdialog FBXImpoter
