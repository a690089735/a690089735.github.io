global BaseObject
global items
global paths
global names

fn copyBaseObject =(if selection[1] != undefined do BaseObject = selection[1].BaseObject)
fn pastBaseObject =(if BaseObject != Undefined do for i in selection as array do selection[1].BaseObject = BaseObject)
fn walkDir fullpath = --遍历目录下所有的max文件
(	
	if fullpath[fullpath.count] != @"*" do if fullpath[fullpath.count] == @"\" then fullpath+=@"*" else fullpath+=@"\*"
	--items = #("↓↓found files...")
	items = #()
	paths = #()

	for i in getFiles(fullpath+@".max") do 
	(append items (getfilenamefile i)
	append paths i)

)

fn setNames =(names = filterstring HR.edt1.text @";")
fn whileSetBaseObject =(
	for nowName in names do 
	(	
		i = getNodeByName nowName 
		i.BaseObject = BaseObject
	)
)

try(destroydialog HR)catch()
rollout HR "HRR" width:160 height:360
(
	button btn1 "Copy" pos:[8,16] width:64 height:32
	button btn2 "Paste" pos:[88,16] width:64 height:32
	GroupBox grp1 "Batching" pos:[8,56] width:144 height:296
	multiListBox files_lbx "FileList:" pos:[16,80] width:130 height:16
	button btn9 "Browse" pos:[96,72] width:48 height:16
	button btn10 "Run!" pos:[80,320] width:64 height:24 toolTip:""
	edittext edt1 "" pos:[16,320] width:56 height:24 toolTip:"objectName \";\""
	
	on btn1 pressed do
	(
		copyBaseObject()
		btn1.caption = (if BaseObject != undefined do BaseObject as string)
	)
	on btn2 pressed do
	(
		undo on(pastBaseObject())
	)
	on btn9 pressed do
	(
		walkDir (getSavePath caption:"AssetDirectory" initialDir:@"E:\")
		files_lbx.items = items
	)
	on btn10 pressed  do
	(	
		if edt1.text == "" or BaseObject == undefined then 
			(messagebox "data is None!!")
		else
			(
				for i in files_lbx.selection do
				(
					loadmaxfile paths[i]
					setNames()
					whileSetBaseObject()
					savemaxfile (maxFilePath+maxFileName)
				)
			)
		messagebox "Finished！"
	)
)

createdialog HR
