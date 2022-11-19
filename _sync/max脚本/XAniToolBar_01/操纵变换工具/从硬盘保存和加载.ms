fn combine_array ary = --合并多维数组
(
	new_ary = #()
	for a in ary do new_ary += a
	new_ary
)
fn sort_by_hierarchy obj_list:(getcurrentselection()) combine:false = --按层级匹配物体,combine:true可以把返回值拼合成一个数组.
(
	local
	prt_list = for o in obj_list where (finditem obj_list o.parent) == 0 collect o, --收集父物体,不单独提取的话,会因为列表的不断删除而发生错过物体的问题
	all_list = for p in prt_list collect for n in #()+p where (fid = finditem obj_list n)>0 collect (deleteitem obj_list fid;n) --收集父物体和列表中的子物体
	if combine then combine_array all_list else all_list
)
-- select(sort_by_hierarchy combine:true)
fn GetKeys objs:(getcurrentselection()) clamp_range:false clamp_start:animationrange.start clamp_end:animationrange.end = --mapped在处理多物体时返回的是ok,实际上下面的mapkeys就能兼容但物体和多物体,clamp_range钳制范围
with undo off
(
	mapkeys objs (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
	if clamp_range then for t in sort(makeuniquearray keys) where t >= clamp_start and t <= clamp_end collect t else sort(makeuniquearray keys)
)

--重新设计一下,把一部分数据独立出来,对应给动画数据比如trans_ary_list_01.data transform_ary_list_01.meta
--单帧模式操作:1默认,复制单帧变换,记录名字,粘贴给名字对应的物体.2.按ctrl粘贴给选中物体 3.ctrl_alt粘贴给名称列表物体 4.shif:粘贴枢轴模式
--逐帧模式操作:1默认,复制逐帧变换,记录名字,粘贴给名字对应的物体.2.按ctrl粘贴给选中物体 3.ctrl_alt粘贴给名称列表物体 4.逐帧模式不支持粘贴枢轴
--保存和加载较为缓慢,一定要加个进度条来减少空等(有个进度条参考就不是空等了.)--可以将总数量保存到文件里,方便加载时计算进度.
fn save_transform obj_list:(getcurrentselection()) keys_range:#(animationrange.start, animationrange.end) buffer_file:(getdir #temp + @"\save_transform.txt") = --根据文件名,可能是Ani001,Ani002
with printAllElements true(
	obj_list = sort_by_hierarchy obj_list:obj_list combine:true
	total = obj_list.count
	progress = 0.0
	--创建文件
-- 	deleteFile buffer_file --反正不允许有重名,重名删了新建就好了
-- 	f = createFile buffer_file
	f = openFile buffer_file mode:"wt" encoding:#utf8 --存在会覆盖,不存在会新建,真的很方便...
	format "%\n" total to:f --记录总数
	for o in obj_list do
	(
		format "\"%\"\n%\n%\n%\n" o.name keys_range (GetKeys objs:o) (for t = keys_range[1] to keys_range[2] collect at time t o.transform) to:f --需要再多记录一个复制的物体的关键帧
		print((progress+=1)/total*100)
	)
	close f
	--将数据保存到文件--数据格式 文件名(拷贝信息) "物体名":(第一行第一个) [1,0,0] [0,1,0] [0,0,1] [0,0,0] 此12个是和matrix3 一一对应的 每12个一组.因为保存前已经重整结构,所以加载时直接读取会更简单?暂时先如此.
	
	--记录结果如下
	--"box001"
	--#(0f,10f)--时间范围
	--#(0f,1f,9f)--范围内的关键帧
	--#(matrix3,matrix3,matrix3,matrix3,matrix3,matrix3,matrix3,matrix3,matrix3,matrix3)--范围内的所有变换
)
-- save_transform()

fn load_transform obj_list:(getcurrentselection()) start_Key:animationrange.start buffer_file:(getdir #temp + @"\save_transform.txt") p:true r:true s:false = --根据文件名,可能是Ani001,Ani002
(
	total = obj_list.count
	progress = 0.0
	
	--临时关闭bone
	b_state = for o in obj_list collect o.boneEnable
	for o in obj_list do o.boneEnable = false
		
	--打开文件
	f = openFile buffer_file mode:"rt" encoding:#utf8
	total = readValue f --读取总数,很多情况下不要加载总数,比如按选择的物体粘贴,只需要判断文件是否读取完,计数是否大于总数即可--这时候就要取count和文件里计数的最小值
	while not eof f do
	with animate on (
		obj = getnodebyname(readValue f) --物体 --完整还原(未利用提供的obj_list(仅用来设置临时$.boneEnable=true),还应有一个直接粘贴给boj_list的方法)
		obj_keys_range = readValue f --时间范围
		obj_keys = readValue f --范围内的关键帧
		obj_trans = readValue f --范围内的所有变换
		if isvalidnode obj do --物体存在则运算
		(
			local i=0
			for t = obj_keys_range[1] to obj_keys_range[2] do
				at time t
				(
					trans = obj_trans[i+=1]
					if not s do trans = orthogonalize trans
					obj.transform = trans
				)
		)
		
		print((progress+=1)/total)
		windows.processPostedMessages() --临时
	)
	close f
	
	--还原bone
	for i = 1 to obj_list.count do obj_list[i].boneEnable = b_state[i]
)
-- load_transform()

fn save_names obj_list:(getcurrentselection()) keys:(for t = animationrange.start to animationrange.end collect t) buffer_file:(getdir #temp + @"\save_names.txt") =
with printAllElements true(
	obj_list = sort_by_hierarchy obj_list:obj_list combine:true
	--创建文件
	deleteFile buffer_file --反正不允许有重名,重名删了新建就好了
	f = createFile buffer_file
	format "%" (for o in obj_list collect o.name) to:f
	close f
)
-- save_names()

fn load_names buffer_file:(getdir #temp + @"\save_names.txt") to_nodes:false =
(
	f = openFile buffer_file
	names = readValue f
	close f
	if to_nodes then for n in names where isvalidnode (nd = getnodebyname n) collect nd else names
)
-- a = load_names()
-- select(load_names to_nodes:true)


--#plugcfg 插件配置,应向下创建一个目录作为缓存和配置文件
--复制粘贴变换
--复制(按名称记录选择的物体,排序后的)(提示前10个物体)(可添加新的选择到名称集合)
--粘贴(粘贴到物体)(可能遇到的异常,缺少粘贴物体,多余的粘贴物体,帧开始时间不一样,帧长度不一样)
--(可快速对选择的物体复制粘贴,基于选择顺序,自动排序)
--镜像,基于世界,基于目标

-- 复制粘贴动画

--首尾循环
--塌陷可见动画(塌陷控制器)
--删除位置,旋转,缩放动画
/*
for obj in selection do
(
	deleteKeys obj.scale.controller
)
*/
