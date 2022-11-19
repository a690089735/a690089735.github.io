--2018/6/8 修改Bug
--2018/6/8 增加功能,自动识别加载的Bip的帧数,并设置下方时间线的时间范围
--2019/4/11 现在获取项目列表可以自动判断长度,避免了移动数据位置对工具的影响
--2019/5/13 绕过了bip骨骼命名后面可能有001的情况。


global global_data_path  = workscript_global_path+ @"\data\Item"
global bpsel = #()
global mssel = #()
global swsel = #()

fn get_Items = --获取项目列表,返回一个排列好的集合#()
(
	x = ((filterstring global_data_path @"\").count + 1)
	items = #()
	for temp in getDirectories (global_data_path + @"\*") do append items (filterstring temp @"\")[x]
	return sort items
)

fn get_Content sex item_name = --获取bip列表,返回一个排列好的集合#()
(
	contents = #()
	fullpath = (global_data_path+@"\")
	if sex==1 then fullpath+=(item_name + @"\男\*.bip") else fullpath+=(item_name + @"\女\*.bip")
	for temp in getFiles (fullpath) do append contents (getfilenamefile temp)
	return sort contents
)

fn get_Script = --获取脚本列表,返回一个排列好的集合#(),第一组元素是名字,第二组元素是对应的路径
(
	Scripts = #()
	paths = #()
	fullpath1 = workscript_global_path+ @"\function\*.ms"
	fullpath2 = workscript_global_path+ @"\function\*.mse"
	for temp in getFiles (fullpath1) do 
	(
		append Scripts (getfilenamefile temp)
		append paths temp
	)
	for temp in getFiles (fullpath2) do 
	(
		append Scripts (getfilenamefile temp)
		append paths temp
	)
	return #(Scripts,paths)
)

fn run_Script script scripts paths = --运行脚本,需要提供1.脚本名字2.脚本列表3.路径列表
(
	filein paths[findItem scripts script]
)

fn import_Bip item_name sex bip_name bool= --直接导入bip 1项目列表名之一 2为性别选择项 3为bip列表名之一
(	
	bip = $Bip*[1]
	if isValidNode bip do
	(
		if sex==1 then item_name+=@"\男\" else item_name+=@"\女\"
		fullpath = global_data_path + @"\" + item_name + bip_name + @".bip"
		Bip.controller.figureMode = false
		if bool then biped.loadBipFile Bip.controller fullpath  #matchFileStruct #loadMaxObjects else biped.loadBipFile Bip.controller fullpath  #loadMaxObjects
	)
)

fn get_Ride item_name = --获取坐骑列表,返回一个排列好的集合#()
(
	contents = #()
	fullpath = (global_data_path+@"\"+item_name)
	fullpath+=@"\ride\*.max"
	for temp in getFiles (fullpath) do append contents (getfilenamefile temp)
	return sort contents
)

fn import_Ride	item_name ride_name = --直接合并坐骑 1为项目名 2为坐骑文件名
(	
	fullpath = (global_data_path + @"\" +item_name + @"\ride\" + ride_name + ".max")
	mergeMAXFile fullpath
)

fn get_Scripts = --获取脚本列表,返回一个排列好的集合#()
(
	items = #()
	for temp in getfiles (workscript_global_path+ @"\function\*") do append items (getfilenamefile temp)
	return sort items
)

fn import_script script_name = --导入脚本来运行
(	
	filein (workscript_global_path+ @"\function\" + script_name + @".ms")
)

--创建界面 项目列表内容 = get_Items ()
--创建界面 bip列表内容 = get_Content 性别 项目名
--创建界面 ride列表内容 = get_Ride 项目名

--切换项目 bip列表内容 = get_Content 性别 项目名

--导入bip import_Bip 项目名 性别 bip名
--导入坐骑 import_Ride	项目名 坐骑名

--项目名 = ddl_item.items[ddl_item.selection]
--性别 = rdo_sex.state
--bip名 = ddl_bip.items[ddl_bip.selection]
--坐骑文件名 = ddl_ride.items[ddl_ride.selection]




fn selterobj =(
bpsel= #()
mssel= #()
swsel = #()
for i in geometry do(
	for j in i.Modifiers do(
		case classof(j) of(
			BonesPro : (
				append bpsel i
			)
			MeshSmooth : (
				append mssel i
			)
			Skin_Wrap : ( 
				append swsel i
			)
		)
	)
)

select bpsel
messagebox ("本次检查发现:\n带有BonesPro的模型 "+bpsel.count as string+"个.\n带有MeshSmooth的模型 "+mssel.count as string+"个.\n带有siknWrap的模型 "+swsel.count as string+"个.\n已选中带有BP修改器的模型,请处理后再次执行检查.")
--select mssel
--select swsel
)

fn getAndSetBipMaxKey = --获取并设置最大帧范围
	(
		maxIndex = 1f
		
		bip = $Bip*[1].transform.controller
		
		list = #($Bip*Hand*[1].transform.controller,$Bip*Hand*[2].transform.controller,$Bip*Foot*[1].transform.controller,$Bip*Foot*[2].transform.controller,$Bip*Head*[1].transform.controller)
	
		vertCont = bip.vertical.controller
		horzCont = bip.horizontal.controller
		--turnCont = bip.turning.controller
		
		n = 1
		try(
			while true do
			(
				n += 1
				vk = (biped.getKey vertCont n).time
				hk = (biped.getKey horzCont n).time
				--tk = (biped.getKey turnCont n).time
				
				if vk > maxIndex do maxIndex = vk
				if hk > maxIndex do maxIndex = hk
				--if tk > maxIndex do maxIndex = tk
			)
		)catch()
		
		for bip in list do
		(
			n = 1
			try(
				while true do
				(
					n += 1
					x = (biped.getKey bip n).time	
					if x>maxIndex do maxIndex = x
				)
			)catch()
		)
		
		animationRange = interval 0 maxIndex
	)

