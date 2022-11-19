try(destroydialog files_)catch()

global path_list
global item_list

fn get_files path1 = --获取脚本列表,返回一个排列好的集合#()
(
	items = #()
	for temp in getfiles (path1+@"*.max") do append items temp
	return sort items
)

fn setvalue= 
(	result = #()
	try(
	file_path = getfilenamepath(getopenfilename caption:"filepath" types:"max(*.max)|*.max")--获取文件路径
	path_list = get_files file_path --所有文件路径列表
	item_list = #()
	for i in path_list do append item_list (getfilenamefile(i))--文件名列表
	result = item_list
	)catch()
	return result
)



rollout files_ "Untitled" width:176 height:336
(
	button path_btn "..." pos:[16,8] width:144 height:24
	listbox files_lbx "FileList" pos:[16,40] width:144 height:18 selection:0
	on files_ open do
	(
		files_lbx.items = setvalue()
	)
	on path_btn pressed do
	(
		files_lbx.items = setvalue()
	)
	on files_lbx doubleClicked sel do
	(
		try(loadmaxfile path_list[sel])catch()
	)
)

createdialog files_ pos:[15,90]