-- 1.关键帧列表 keys_list (初次设置时获取,添加删除关键帧时获取)
-- 2.keys_list 到 animationrange.start 是范围外,淡蓝色; animationrange.start 到 currenttime 是过去帧 淡红色; currenttime 到 animationrange.end 是 未来帧,淡黄色  currenttime是绿色的点或者绿色的方
-- 3.过渡帧是点,关键帧是方
-- [enabled:<bool>]

-- 轨迹功能可以直接加进keys_tool里,也由此彻底更名为动画帧工具

--获取关键帧
fn Get_Keys objs:(getcurrentselection()) = --mapped在处理多物体时返回的是ok,实际上下面的mapkeys就能兼容但物体和多物体;显示轨迹的特用版:取消了钳制功能
(
	mapkeys objs (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
	sort(makeuniquearray keys)
)
-- fn Get_Range

keys_list = #()
trans_list = #()
range_list = #()
-- line_list = #()
-- tick_list = #()
-- block_list = #()
objs_list = #()

c_red = color 180 30 90
c_green = color 80 240 20
c_blue = color 10 60 140
c_yellow = color 255 230 90
c_gray = color 200 200 200
c_white = white


fn upata_list obj = --添加物体到物体集合
(
	if findItem objs_list obj == 0 do
	(
		append objs_list obj
		local keys = GetKeys obj
		append keys_list keys
		append trans_list for t = keys[1] to keys[keys.count] collect at time t obj.transform.pos
	)
)

fn rangeCallback_updata_draw_list = --时间范围改变时,更新绘制范围
(
	line_list = #()
	tick_list = #()
	block_list = #()
	local
	start = animationrange.start,
	end = animationrange.end
	for i = 1 to keys_list.count do
	(
		local
		keys = keys_list[i]
		keys_min = keys[1],
		keys_max = keys[keys.count],
		count = keys_max - keys_min + 1 --全部帧总数量,不是keys的数量
		
		
		
		print #(before,current,after)
		
-- 		append tick_list 
-- 		append line_list (for j in before collect)
	)
-- 	trans_l = trans_list[i]
-- 	for i = 1 to trans_l.count do
-- 	(
-- 		local
-- 		trans = trans_l[i]
-- 		
-- 	)
)

fn get_obj_draw_data obj =
(
	local
	id = findItem objs_list obj,
	start = animationRange.start,
	end = animationRange.end,
	
	trans = #(),--播放动画时显示灰色线条
	keys = #(),
	lines = #(#(),#(),#(),#()),--一共四段线
	ticks = #(),--两段点(范围外是灰的)
	blocks = #()
	
	if id == 0 do --如果不存在则添加
	(
		append objs_list obj
		id = objs_list.count
	)
	
	keys = GetKeys obj --记得更新给keys_list[id]
	for t in keys[1] to keys[keys.count] do
	(
		local tran = at time t obj.transform.pos
		case of
		(
			(t<currentTime and t<start): --之前超出
			(
				
			)
			(t<currentTime): --之前未超出
			(
			)
			(t>currentTime and t>end): --之后超出
			(
			)
			(t>currentTime): --之后未超出
			(
			)
			default: --等于当前帧
			(
			)
		)
	)
	
	
)--关于绿点和绿框,直接在当前位置画绿点,如果寻找当前帧在帧列表中,则在当前位置画绿框(不知道能不能覆盖住啊..)!!!!直接画圆不久可以了啊!!!

fn NodeEv_updata_keys_list ev nd_list = --动画改变时更新关键帧列表
(
	for nd in nd_list do
	(
		local obj = GetAnimByHandle nd
		if (id = findItem objs_list obj) > 0 do (local keys = keys_list[id] = Get_Keys objs:obj; keys[id] = for t = keys[1] to keys[keys.count] collect at time t obj.transform.pos)
	)
	print 1
)

Callback_Refresh_List = NodeEventCallback mouseUp:false delay:50 controllerOtherEvent:NodeEv_updata_keys_list
-- Callback_Refresh_List = undefined
gc light:true
-- linkChanged:NodeEventCallback_get_keys_list controllerStructured:NodeEventCallback_get_keys_list delay:10

-- 可选,暂时不显示; 可选:是否仅显示选择物体,可选,是否仅显示可见物体,可选,显示帧编号,可选,绘制轴向 添加到集合,从集合中移除

-- 画线,画点,画方
fn Callback_Draw_Track =
(
	
)