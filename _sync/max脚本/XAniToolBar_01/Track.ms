local
Callback_up_trans_list,
Callback_add_and_delete,
keys_list = #(), --关键帧列表
trans_list = #(), --变换数据列表
ranges_list = #(), --线段范围列表
blocks_list = #(), --关键帧列表
objs_list = #(), --物体列表
tags_list = #(), --前后标记列表
-- line_list = #()
-- tick_list = #()
-- block_list = #()
color1,
color2,
color0,
color1_1,
color2_1,
color_0_1,
text_color = (colorMan.getColor #text) * 255
-- c_red = color 255 25 25,
-- c_green = color 25 255 25,
-- c_blue = color 25 25 255
-- c_yellow = color 255 230 90
-- c_gray = color 200 200 200
-- c_white = white

fn Get_Keys obj = --可以直接引入obj[3],仅获取变换帧来加速获取帧列表,以及跳过无用的可见性帧之类的帧
(
	local result = #()
	for i = 1 to obj.numSubs do 
	(
		local
		SubAni = getSubAnim obj i,
		keys = SubAni.keys
		if SubAni.numSubs == 0 then
			result += if keys != undefined then for k in keys collect k.time else #()
		else
			result += Get_Keys SubAni
	)
	makeUniqueArray(result)
)
fn set_color = 
(
	local
	v_bkg =(GetUIColor 41)*255,
	inc = 0.5
	color1 = cp1.color
	color2 = cp2.color
	color0 = color2-color1
	color1_1 = (v_bkg-color1)*inc+color1 --(背景色-颜色)*0.5+颜色数值越高越偏向背景色(GetUIColor 41)*255获得背景色
	color2_1 = (v_bkg-color2)*inc+color2
	color_0_1 = color2_1-color1_1
	
	upgrade_ranges_list = for id = 1 to objs_list.count collect id
	tmr_track_up_ranges.active = true
)

--添加自定义属性:功能可以识别合并的物体,可以在再次打开后仍然能识别,可以在删除与撤销发生后继续识别
-- fn set_property obj state:true =
-- (
-- 	setUserProp obj "XAniToolTrackEnable" state
-- )

fn build_lines ranges trans =
(
	local 
	range = ranges - #{ranges.count,ranges.count},--去掉最后一个和倒数第二个(去掉一个点,然后再从0开始)
	inc = 1.0/range.numberSet,
	i = -1
	for id in range collect
	(
		#(color0*(i+=1)*inc+color1,#(trans[id],trans[id+1]))
	)
)
--在范围改变时更新,(播放动画时不更新)(还要记录中间那段线的分段和过渡色)
fn up_ranges_list id = --直接传入检测后的id
(
	local
	keys = keys_list[id]
	if keys.count > 0 then --首先得有关键帧,才有绘制的余地
	(
		local
		count = trans_list[id].count, --变换数据列表的数量即是关键帧数量
		keys_min = keys[1],
		keys_max = keys[keys.count],
		start = animationrange.start,
		end = animationrange.end,
		trans = trans_list[id],
	-- 	lines = #(#(),#(),#()),--一共三段线之前,当前,之后
		range_start = if keys_min < start then start else keys_min,
		range_end = if keys_max > end then end else keys_max,
		before = if keys_min < start then #{1..start-keys_min+1} else #{}, --#{1..start-keys_min}只计算之前点的话这里要少一个点,则不+1;画折线时,这里加上current列表的第一个点.
		current = #{if keys_min < start then start-keys_min+1 else 1..if keys_max < end then count else end - keys_min + 1},
		after = if keys_max > end then #{end-keys_min+1..count} else #{}, --不包括最后一个点需要+2,画折线时要加上current列表的最后一个点.
		blocks_inc = 1.0/(range_end - range_start).frame
-- 		ranges_list[id] = #(for i in before collect trans[i],for i in current collect trans[i],for i in after collect trans[i])--旧式测试
		ranges_list[id] = #(for i in before collect trans[i],for i in current collect trans[i],for i in after collect trans[i],build_lines current trans)
		blocks_list[id] = for k in keys collect (local kid = (k-keys_min).frame+1;block_id = (k - range_start).frame;#(if k < start or k > end then gray else color0*block_id*blocks_inc+color1,trans[kid],k as string))
		tags_list[id] = #(if keys_min < start then trans[(start-keys_min+1).frame] else trans[1],if keys_max > end then trans[(end-keys_min+1).frame] else trans[trans.count])
-- 		ranges_list[id] = #(before,current,after)
-- 		print #(before,current,after)
-- 		print pt
	)else
	(
		local obj = objs_list[id]
		ranges_list[id] = #(#(),#(),#(),#())
		blocks_list[id] = #()
		tags_list[id] = #(obj.transform.pos,obj.transform.pos)--没有帧的时候,就是原地不动的
	)
-- 	gw.enlargeUpdateRect #whole
-- 	gw.updateScreen() 
	redrawViews()
)

--在添加时更新,在动画控制器其他事件改时(主要更新变换值和关键帧,将其记录到内存来加快读取时间,并且在改变时间时免于更新)
fn up_trans_list obj = 
(
	local
	id = findItem objs_list obj
	if id == 0 then
	(
		local 
		keys = Get_Keys obj[3]
-- 		set_property obj
		setUserProp obj "XAniToolTrackEnable" true
		append objs_list obj
		append keys_list keys
		append trans_list (if keys.count > 0 then for t = keys[1] to keys[keys.count] collect at time t obj.transform.pos else #()) --首先得有关键帧,才有绘制的余地

			
		--先随便加点东西进去,缓解时钟造成的延时更新
		local id = objs_list.count
		ranges_list[id] = #(#(),#(),#(),#())
		blocks_list[id] = #()
		tags_list[id] = #(obj.transform.pos,obj.transform.pos)
			
		--预约时钟更新
-- 		up_ranges_list objs_list.count
		appendIfUnique upgrade_ranges_list objs_list.count
		tmr_track_up_ranges.active = true
	)else
	(
		local 
		keys = Get_Keys obj[3]
		keys_list[id] = keys
		trans_list[id] = if keys.count > 0 then for t = keys[1] to keys[keys.count] collect at time t obj.transform.pos else #()
-- 		up_ranges_list id
		appendIfUnique upgrade_ranges_list id
		tmr_track_up_ranges.active = true
	)
)

fn viewport_draw_data =
(
-- 	o.isHiddenInVpt
-- 	o.isSelected
-- 	print 3
	gw.setTransform (matrix3 1)
	gw.setRndLimits #(#flat)
	if isAnimPlaying() then --并且勾选了播放时简略显示
	(
		for id = 1 to objs_list.count do
		(
			local obj = objs_list[id]
			if isValidNode obj and  not obj.isHiddenInVpt do -- and isValidNode obj
			(
				local trans = trans_list[id],tags = tags_list[id]
				for pos in trans do gw.Marker pos #point color:black
				gw.setColor #line gray
				gw.Polyline trans false
				gw.Marker obj.transform.pos #circle color:green
				gw.hMarker ((gw.hTransPoint tags[1])+[0,6,0]) #triangle color:color1
				gw.hMarker ((gw.hTransPoint tags[2])+[0,6,0]) #triangle color:color2
			)
		)
	)
	else
	(
		for id = 1 to objs_list.count do
		(
			local obj = objs_list[id]
			if isValidNode obj and not obj.isHiddenInVpt do -- and isValidNode obj
			if obj.isSelected then
			(
				local
				col1 = color1,--如果不是选中的物体,颜色要偏向背景色一半
				col2 = color1,
				col0 = color2-color1,
				trans = trans_list[id],
				keys = keys_list[id],
				ranges = ranges_list[id],
				blocks = blocks_list[id],
				tags = tags_list[id]
-- 				画点
-- 				for pos in trans do gw.Marker pos #point color:white
				for pos in ranges[1] do gw.Marker pos #point color:black
				for pos in ranges[3] do gw.Marker pos #point color:black
				for pos in ranges[2] do gw.Marker pos #point color:white
				
-- 				测试
-- 				gw.setColor #line red
-- 				gw.Polyline ranges[1] false
-- 				gw.setColor #line green
-- 				gw.Polyline ranges[2] false
-- 				gw.setColor #line blue
-- 				gw.Polyline ranges[3] false
				
-- 				画灰色线
				gw.setColor #line gray
				gw.Polyline ranges[1] false
				gw.Polyline ranges[3] false
-- 				画彩色线
				for data in ranges[4] do
				(
					gw.setColor #line data[1]
					gw.Polyline data[2] false
				)
-- 				画关键帧
				for data in blocks do
				(
					gw.Marker data[2] #bigBox color:data[1]
				)
-- 				画关键帧编号
				
				for data in blocks do
				(
					gw.hText ((gw.hTransPoint data[2])+[10,10,0]) data[3] color:text_color
				)
-- 				画当前帧
				local current_pos = obj.transform.pos
				gw.Marker current_pos #circle color:yellow
				gw.hText ((gw.hTransPoint current_pos)+[10,10,0]) (currentTime as string) color:yellow
-- 				画时间范围三角
				gw.hMarker ((gw.hTransPoint tags[1])+[0,6,0]) #triangle color:color1
				gw.hMarker ((gw.hTransPoint tags[2])+[0,6,0]) #triangle color:color2
				
			)else
			(
				local trans = trans_list[id],tags = tags_list[id]
				for pos in trans do gw.Marker pos #point color:black
				gw.setColor #line gray
				gw.Polyline trans false
				gw.Marker obj.transform.pos #circle color:green
				gw.hMarker ((gw.hTransPoint tags[1])+[0,6,0]) #triangle color:color1
				gw.hMarker ((gw.hTransPoint tags[2])+[0,6,0]) #triangle color:color2
			)
		)
	)
)

--在节点添加删除时检查
fn ev_add_node ev nd_list =
(
	for nd in nd_list where (obj = GetAnimByHandle nd;getUserProp obj "XAniToolTrackEnable" == true) do up_trans_list obj
)
fn ev_delete_node ev nd_list reset_property:false = --节点事件模式
(
	for nd in nd_list where (obj = GetAnimByHandle nd;id = findItem objs_list obj;print id;id>0) do
	(
		if reset_property do setUserProp obj "XAniToolTrackEnable" false
		deleteItem objs_list id
		deleteItem keys_list id
		deleteItem trans_list id
		deleteItem ranges_list id
		deleteItem blocks_list id
		deleteItem tags_list id
	)
)

fn get_objs_list =
(
	for obj in objects where getUserProp obj "XAniToolTrackEnable" == true do up_trans_list obj --必须用==来判断,因为有可能获得undefined
)

fn ev_up_trans_list ev nd_list =
(
-- 	print -9
	for nd in nd_list do
	(
		local obj = GetAnimByHandle nd
		if (id = findItem objs_list obj) > 0 do
		(
			local keys = Get_Keys obj[3]
			keys_list[id] = keys
			trans_list[id] = if keys.count > 0 then for t = keys[1] to keys[keys.count] collect at time t obj.transform.pos else #()
			appendIfUnique upgrade_ranges_list id
			tmr_track_up_ranges.active = true
		)
	)
)
fn ev_up_ranges_list =
(
	for id = 1 to objs_list.count do appendIfUnique upgrade_ranges_list id
	tmr_track_up_ranges.active = true
)

fn unregister_callback =
(
	unregisterRedrawViewsCallback viewport_draw_data
	callbacks.removeScripts id:#XAniToolTrack
	Callback_add_and_delete = Callback_up_trans_list = undefined
	gc light:true
)

fn register_callback =
(
	registerRedrawViewsCallback viewport_draw_data --因为只获取,所以就这个不卡...内存没有涨的很厉害,略微极端点的正常情况下:300M以内吧,完全可以接受,现在只是更新的时候会很卡
	callbacks.addScript #animationRangeChange "draw_track.ev_up_ranges_list()" id:#XAniToolTrack --这个可能会特别卡,做个时钟,多个合并一个,并且搞成多线程的.
-- 	callbacks.addScript #nodePreDelete "draw_track.ev_delete_node()" id:#XAniToolTrack
	Callback_up_trans_list = NodeEventCallback mouseUp:false delay:50 controllerOtherEvent:ev_up_trans_list --只要涉及重新计算范围的,都会很卡,做个时钟..多个合并为一个,并且进行多线程计算.
-- 	加上计时器并没有展现出多线程的效果,改卡还是卡,但是可以作为一个减少更新的缓冲器,就不改回去了
	Callback_add_and_delete = NodeEventCallback mouseUp:true delay:50 added:ev_add_node deleted:ev_delete_node --添加和撤销时的操作,兼容合并和撤销之类的情况
)


