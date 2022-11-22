--由include引入主函数,可直接使用主函数的局部变量

fn names_data_get = --获取名称集合数据
(
	names_data_list = sort(getFiles(data_folder + "*.名称集合数据"))
)

fn names_data_display = --显示名称集合数据
(
	trans_ddl_names.items = for i in names_data_list collect (fl = filterString (filenameFromPath i) "." ; fl[1] + "." + fl[2])
)

fn names_data_clear = --清除名称集合数据
(
	for f in getFiles(data_folder + "*.名称集合数据") do deletefile f
	names_data_list = #()
	trans_ddl_names.items = #()
	displayTempPrompt "提示:清除全部名称集合." 1500
)

fn names_rename_all d:2 =
(
	local k = 0
	names_data_list = for f in names_data_list collect
	(
		local
		fname = filenameFromPath f,
		fl = filterString fname "."
		newname = covering_str (k+=1) d:d
		for i = 2 to fl.count do newname += "." + fl[i]
		newname = data_folder + newname
		renameFile f newname
		newname
	)
)

fn names_data_delete =
(
	if (local id = trans_ddl_names.selection) > 0 then
	(
-- 		deletefile names_data_list[id]
		HiddenDOSCommand("DEL "+ names_data_list[id] +" /F") --强制删除,上边那句可能权限不够
		deleteitem names_data_list id
		deleteitem trans_ddl_names.items id
		names_data_list = names_rename_all d:(names_data_list.count as string).count
	)else displayTempPrompt "提示:没有选择的名称集合!" 1500
)

--保存名称数据
fn names_data_save =
if (local obj_list = getCurrentSelection()).count > 0 then(
	local
	old_num = names_data_list.count,
	new_num = names_data_list.count+1,
	name_num_str = new_num as string,
	d = name_num_str.count
	
	if need_carry new_num old_num do names_rename_all d:d --需要进位,用更高位重命名所有数据,直接更新原数据列表
	--创建新数据
	local data_name = data_folder + name_num_str + ".名称集合数据"
	with printAllElements true (
		--创建文件
		deleteFile data_name --反正不允许有重名,重名删了新建就好了
		local
		f = createFile data_name
-- 		obj_list = sort_by_hierarchy obj_list:obj_list
		format "%" ( for o in obj_list collect o.name ) to:f
		close f
	)
	--更新
	append names_data_list data_name
)else displayTempPrompt "提示:没有选择的物体!" 1500

--读取名称数据(默认返回物体,可选返回物体名)
fn names_data_load id:trans_ddl_names.selection return_nodes:true = 
(
	if id > 0 then
	(
		local
		f = openFile names_data_list[id]
		names = readValue f
		close f
		if return_nodes then for n in names where isvalidnode (nd = getnodebyname n) collect nd else for n in names where isvalidnode (nd = getnodebyname n) collect n
	)else #()
)
fn names_data_select ctrl:false alt:false shift:false =
(
	case of
	(
		shift : select (for s in getCurrentSelection() where findItem (names_data_load return_nodes:false) s.name > 0 collect s) --从选中中选择
		ctrl : selectmore (names_data_load()) --加选
		alt : deselect (names_data_load()) --减选
		default : select (names_data_load()) --选
	)
)


-- local menu_names_list =
-- rcmenu menu_names_list
-- (
-- 	menuItem mi_rename "重命名集合"
-- 	separator sep1
-- 	menuItem mi_reload "重加载集合"
-- 	menuItem mi_clear "清除所有集合"
-- 	
-- 	on mi_rename picked do
-- 	(
-- 		--在列表位置弹出一个工具窗口,菜单状态
-- 		rename_dialog names_data_list[trans_ddl_names.selection] trans_btn_names_other
-- 	)
-- 	on mi_reload picked do
-- 	(
-- 		names_data_get()
-- 		names_data_display()
-- 		trans_ddl_names.selection = names_data_list.count
-- 	)
-- 	on mi_clear picked do
-- 	(
-- 		names_data_clear()
-- 	)
-- 	on menu_names_list open do
-- 	(
-- 		mi_clear.enabled = mi_rename.enabled = trans_ddl_names.selection > 0
-- 	)
-- 	
-- )