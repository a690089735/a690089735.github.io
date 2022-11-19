--添加自定义属性:功能可以识别合并的物体,可以在再次打开后仍然能识别,可以在删除与撤销发生后继续识别
fn set_property obj state:true =
(
	setUserProp obj "XAniToolTrackEnable" state
)
--getUserProp $ "XAniToolTrackEnable"
local 
keys_list = #()
trans_list = #()
range_list = #()
-- line_list = #()
-- tick_list = #()
-- block_list = #()
objs_list = #()

--在添加时更新,在动画控制器其他事件改时更新(主要更新变换值和关键帧,将其记录到内存来加快读取时间,并且在改变时间时免于更新)
fn up_trans_list obj = 
(
	local id = findItem objs_list obj
	if id == 0 then
	(
		set_property obj
		append objs_list obj
		local keys = GetKeys obj
		append keys_list keys
		append trans_list for t = keys[1] to keys[keys.count] collect at time t obj.transform.pos
	)else
	(
		keys_list[id] = keys
		trans_list[id] = for t = keys[1] to keys[keys.count] collect at time t obj.transform.pos
	)
)

--在范围改变,当前帧改变时更新(播放动画时不更新)
fn up_range_list id = --直接传入检测后的id
(
	local
	count = trans_list.count, --变换数据列表的数量即是关键帧数量
	keys = keys_list[id],
	keys_start = keys[1],
	start = animationrange.start,
	end = animationrange.end,
	lines = #(#(),#(),#(),#()),--一共四段线
	ticks = #(#(),#()),--两段点(范围外是灰的)
	blocks = #(#(),#(),#()), --三段方块
	j = 1
	
	for i in #{1..count} do
	(
		local 
		t = i + keys_start - 1, --此id所代表的时间,后期可以试试把-1优化掉
		trans = trans_list[id][i]
		case of
		(
			(t<currentTime and t<start): --之前超出
			(
				
				append lines trans
				
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
-- 			default: --等于当前帧,现在不需要了,因为当前帧只是一个绿色的圆
-- 			(
-- 			)
		)
	)
	
)

--在节点删除时检查
fn del_obj_in_list obj =
(
	local id = findItem objs_list obj
	if id > 0 do
	(
		deleteItem keys_list id
		deleteItem trans_list id
		deleteItem range_list id
		deleteItem objs_list id
	)
)

