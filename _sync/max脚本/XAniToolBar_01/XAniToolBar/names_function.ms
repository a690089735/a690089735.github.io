fn names_data_get dialog =
(
	dialog.names_data_list = sort(getFiles(dialog.data_folder + "*.名称集合数据"))
)

fn names_data_display dialog =
(
	dialog.trans_ddl_names.items = for i in dialog.names_data_list collect (fl = filterString (filenameFromPath i) "." ; fl[1] + "." + fl[2])
)

fn names_data_clear dialog =
(
	for f in getFiles(dialog.data_folder + "*.名称集合数据") do deletefile f
)

fn names_data_save dialog = --简化,牺牲极少的性能
if (local obj_list = getcurrentselection(); obj_list.count > 0) do 
(
	local
	new_num = dialog.names_data_list.count + 1,
	old_num = dialog.names_data_list.count
	print #(new_num,old_num,need_carry new_num old_num) 
	if need_carry new_num old_num do dialog.names_data_list = data_rename_all dialog dialog.names_data_list d:(new_num as string).count --用更高的位数重命名之前的文件
	local data_name = dialog.data_folder + (covering_str new_num d:(new_num as string).count + ".名称集合数据") --构成文件名,这里去掉了一个点,其实只有一个点效果也是一样的,一个点可以免去一次替换
	--创建新数据
	with printAllElements true(
		--创建文件
		deleteFile data_name --反正不允许有重名,重名删了新建就好了
		local
		f = createFile data_name,
		obj_list = sort_by_hierarchy obj_list:obj_list
		format "%" (for o in obj_list collect o.name) to:f
		close f
	)
	--刷新列表
	names_data_get dialog
	names_data_display dialog
	dialog.trans_ddl_names.selection = dialog.names_data_list.count
)
fn names_data_load dialog =
(
	local
	f = openfile dialog.names_data_list[dialog.trans_ddl_names.selection],
	names = readValue f
	close f
	for n in names where isvalidnode (nd = getnodebyname n) collect nd --只收集有效的部分,可能返回空集
)
fn names_data_delete dialog id = --删除文件.选择性手动刷新,因为比如批量删除,只在最后刷新一次.
(
	-- 	print id
	deletefile dialog.names_data_list[id]
	deleteitem dialog.names_data_list id
	
)