fn combine_array ary = --合并多维数组
(
	new_ary = #( )
	for a in ary do new_ary += a
	new_ary
)
fn sort_by_hierarchy obj_list:( getcurrentselection()) combine:false = --按层级匹配物体,combine:true可以把返回值拼合成一个数组.
(
	local
	prt_list = for o in obj_list where ( finditem obj_list o.parent ) == 0 collect o, --收集父物体,不单独提取的话,会因为列表的不断删除而发生错过物体的问题
	all_list = for p in prt_list collect for n in #( ) + p where ( fid = finditem obj_list n ) > 0 collect ( deleteitem obj_list fid ; n ) --收集父物体和列表中的子物体
	if combine then combine_array all_list else all_list
)
-- 	data文件内容,不需要额外判断,执行时有错误的自动跳过并提示,用户可以自己删除.
-- 	names
-- 	1 #("obj_001","obj_002")
-- 	s_trans
-- 	1 #(name,transform)
-- 	2 #(name,transform)
-- 	p_trans
-- 	1 #(name, #keyFrames, interval, #transformList)
-- 	2 #(name, #keyFrames, interval, #transformList)
-- 	r_trans
-- 	1 #(name, rel_transform)
-- 	2 #(name, rel_transform)
-- fn sort_file_by_nameid files = --保守起见,按名称排序文件--sort能直接对字符串进行排序,根据我的名称定义,其可以直接应用.
-- (
-- 	
-- )
--sort#("001","020","002","011","025","000","003","035")
-- #("000", "001", "002", "003", "011", "020", "025", "035")
-- sort \
-- #(
-- "001.打开的发生.名称集合数据",
-- "004.路i已经i娶回家.名称集合数据",
-- "007.432让非法手段机器舞i娶回家.名称集合数据",
-- "009.打开阿松大i娶回家.名称集合数据",
-- "010.十大i娶回家.名称集合数据",
-- "001. 啊实打实回家.名称集合数据",
-- "011.打开的家.名称集合数据",
-- "000.打开的机器舞i娶回家.名称集合数据",
-- "001.打阿松大娶回家.名称集合数据"
-- )
-- #("000.打开的机器舞i娶回家.名称集合数据", "001. 啊实打实回家.名称集合数据", "001.打开的发生.名称集合数据", "001.打阿松大娶回家.名称集合数据", "004.路i已经i娶回家.名称集合数据", "007.432让非法手段机器舞i娶回家.名称集合数据", "009.打开阿松大i娶回家.名称集合数据", "010.十大i娶回家.名称集合数据", "011.打开的家.名称集合数据")

--命名改成中文,这样的话:filterString "001..名称集合数据" ".")[2] = 名称集合数据;filterString "001.导出物体.名称集合数据" ".")[2] = 导出物体,甚至可以把前边的序号一起合并进来
--不考虑用户强行手工改名,只考虑在程序内的增删改操作.不加查的功能,这样东西多了用户自己就知道删了,且不对当前选择的序号进行记录,增加一键删除功能,这样用户更愿意清空目录.通过程序命名时,现在可以有空格.
-- #("?", "*", ":", "\"", "<", ">", "\\", "/", "|")--文件名不能有的字符
fn filename_filter str = --删除文件名中不允许的字符
(
	for t in #( "?", "*", ":", "\"", "<", ">", "\\", "/", "|", "\n", "\t", "\r", "." ) do str = substituteString str t "" ; str --可以判断处理后的文本长度是不是变了,变了的话弹出一个气泡,提示不能有这些字符.当然,不提示也行.注意要排除点".",因为命名功能依赖于此
)
-- fn filename_filter_2 str = trimLeft str "?*:\"<>\\/|\r\n\t "--删除文件名中不允许的字符,不行,只能删除左侧

fn get_data_list dialog mode:"n" = --获取数据文件,返回排序过的文件列表,模式为"n""s""p""r",对应:名称,单帧,逐帧,相对
(
	ddl = trans_ddl_list
	date_name = case mode of
	(
		"n":"*.名称集合数据"
		"s":"*.单帧变换数据"
		"p":"*.逐帧变换数据"
		"r":"*.相对变换数据"
	)
	files = sort ( getFiles ( dialog.data_folder + date_name ) ) --返回
)
fn covering_str num d:2 = --加前缀00占位依赖,d=位数,返回文本
(
	num = num as string
	for i = 1 to d - num.count do num = "0" + num
	num
)
fn data_rename_all dialog data_files d: = --重命名传入的所有文件;涉及进位时;按顺序重命名;结果可保留自定义名称;返回命名后的列表
(	
	local
	files_path = dialog.data_folder,
	i = 0
	
	for f in data_files collect
	(
		local 
		fname = filenameFromPath f,
		fl = filterString fname "."
		newname = covering_str ( i += 1 ) d:d
		for i = 2 to fl.count do newname += "." + fl[i]
-- 		if not matchPattern newname pattern:"*.*.*" do newname = substituteString newname "." ".." --其实不用空点效果也是一样的.
		newname = files_path + newname
		-- print(renameFile f newname)
		-- print#(f, newname)
		newname
	)
)
fn settle_folder dialog mode:"n" = --整理文件,如果没有可用文件,则返回undefined;模式为"n""s""p""r",对应:名称,单帧,逐帧,相对,仅在删除时重新整理,不考虑用户的手动更改.
(
	--获取目录下所有的文件,并重新排序和命名
	rename_file ( get_data_list dialog mode:mode ) mode:mode --不返回最新序号了,直接用这个返回.count+1即可
)

--是否需要进位
fn need_carry new_num old_num = --num1是新的数量,num2是旧的数量
(
	-- 	print (new_num as string).count > (old_num as string).count
	( new_num as string ).count > ( old_num as string ).count
)
--名称
fn names_data_get dialog =
(
	dialog.names_data_list = sort ( getFiles ( dialog.data_folder + "*.名称集合数据" ) )
)
fn names_data_display dialog =
(
	dialog.trans_ddl_names.items = for i in dialog.names_data_list collect ( fl = filterString ( filenameFromPath i ) "." ; fl[1] + "." + fl[2] )
)
fn names_data_clear dialog =
(
	for f in getFiles(dialog.data_folder + "*.名称集合数据") do deletefile f
)
-- fn names_data_save dialog =
-- if (local obj_list = getcurrentselection(); obj_list.count>0) do(
-- 	local
-- 	new_num = dialog.names_data_list.count+1,
-- 	old_num = dialog.names_data_list.count
-- 	local data_name = dialog.data_folder+(covering_str new_num d:(new_num as string).count + "..名称集合数据") --构成文件名
-- 	--创建新数据
-- 	with printAllElements true(
-- 		obj_list = sort_by_hierarchy obj_list:obj_list combine:true
-- 		--创建文件
-- 		deleteFile data_name --反正不允许有重名,重名删了新建就好了
-- 		f = createFile data_name
-- 		format "%" (for o in obj_list collect o.name) to:f
-- 		close f
-- 	)
-- 	--添加新数据文件到窗口的资源库
-- 	append dialog.names_data_list data_name
-- 	--刷新列表
-- 	if need_carry new_num old_num do dialog.names_data_list = data_rename_all dialog dialog.names_data_list --用更高的位数重命名之前的文件
-- 	names_data_display dialog
-- 	dialog.trans_ddl_names.selection = dialog.names_data_list.count
-- )
fn names_data_save dialog = --简化,牺牲极少的性能
if ( local obj_list = getcurrentselection(); obj_list.count > 0 ) do (
	local
	new_num = dialog.names_data_list.count + 1,
	old_num = dialog.names_data_list.count
	print #(new_num,old_num,need_carry new_num old_num) 
	if need_carry new_num old_num do dialog.names_data_list = data_rename_all dialog dialog.names_data_list d:( new_num as string ).count --用更高的位数重命名之前的文件
	local data_name = dialog.data_folder + ( covering_str new_num d:( new_num as string ).count + ".名称集合数据" ) --构成文件名,这里去掉了一个点,其实只有一个点效果也是一样的,一个点可以免去一次替换
	--创建新数据
	with printAllElements true (
		--创建文件
		deleteFile data_name --反正不允许有重名,重名删了新建就好了
		local
		f = createFile data_name,
		obj_list = sort_by_hierarchy obj_list:obj_list combine:true
		format "%" ( for o in obj_list collect o.name ) to:f
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
	for n in names where isvalidnode ( nd = getnodebyname n ) collect nd --只收集有效的部分,可能返回空集
)
fn names_data_delete dialog id = --删除文件.选择性手动刷新,因为比如批量删除,只在最后刷新一次.
(
	-- 	print id
	deletefile dialog.names_data_list[id]
	deleteitem dialog.names_data_list id
	
)
--变换
fn save_trans_data dialog mode:"p" = --保存变换的缓存文件,模式为"s""p""r",对应:单帧,逐帧,相对
(
	case mode of
	(
		"s":
		(
			
		)
		"p":
		(
			
		)
		"r":
		(
			
		)
	)	
)
fn load_trans_data dialog mode:"p" = --加载变换的缓存文件,模式为"s""p""r",对应:单帧,逐帧,相对
(
	case mode of
	(
		"s":
		(
			
		)
		"p":
		(
			
		)
		"r":
		(
			
		)
	)	
)
fn change_ttool_state dialog s e =
(
	s.text = case s.text of
	(
		"单\n帧":
		(
			
			"逐\n帧"
		)
		"逐\n帧":
		(
			
			"相\n对"
		)
		"相\n对":
		(
			
			"单\n帧"
		)
	)
)