--批量导入表情OBJ并命名
try(destroydialog ObjImportTool)catch()

rollout ObjImportTool "Untitled" width:184 height:384
(
	edittext edt_DirPath "" pos:[8,8] width:136 height:16
	button btn_BrowseDir "..." pos:[152,8] width:24 height:16
	listbox lbx_FileList "OBJ文件列表" pos:[8,32] width:168 height:16
	button btn_Execute "全部导入" pos:[24,272] width:136 height:24
	GroupBox grp1 "附加选项" pos:[8,304] width:168 height:72
	checkbutton ckb_x "X" pos:[104,352] width:16 height:16 checked:true
	checkbutton ckb_y "Y" pos:[128,352] width:16 height:16
	checkbutton ckb_z "Z" pos:[152,352] width:16 height:16
	spinner spn_offset "偏移" pos:[24,352] width:72 height:16 range:[-100,100,5]
	radioButtons rdo2 "" pos:[16,324] width:106 height:16 enabled:false labels:#("定距偏移", "智能偏移") default:1 columns:2
	
	local ObjFilesList
	
	on btn_BrowseDir pressed do
	(
		filespath = getopenfilename caption:"filepath" types:"obj(*.obj)|*.obj"
		if filespath != undefined then
		(
			edt_DirPath.text = getfilenamepath(filespath)
			ObjFilesList = getfiles(edt_DirPath.text + @"*.obj")
			lbx_FileList.items = for f in ObjFilesList collect getfilenamefile f 
		)
	)
	on btn_Execute pressed do
	(
		max create mode
		for i = 1 to ObjFilesList.count do
		(
			if doesFileExist ObjFilesList[i] then 
			(
				offset = (spn_offset.value * (i-1))
				trans = [0,0,0]
				if ckb_x.checked do trans.x += offset
				if ckb_y.checked do trans.y += offset
				if ckb_z.checked do trans.z += offset
	-- 				select objects
				importFile ObjFilesList[i] #noPrompt
	-- 				max select invert
				if selection.count > 1 then 
				for o in (selection as array) do (o.name = uniqueName(lbx_FileList.items[i]);o.pos+=trans)
				else (selection[1].name = lbx_FileList.items[i];selection[1].pos+=trans)
			)
		)
	)
)


createdialog ObjImportTool