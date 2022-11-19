fn selectCtrlrKeys ctrlr range:#() = --选择帧的递归
(
	type = classof ctrlr
	case type of --判断控制器类型
	(
		Vertical_Horizontal_Turn : (for i = 1 to 3 do selectCtrlrKeys ctrlr[i].controller range:range) --质心控制器,可以分解为bip从动控制器
		BipSlave_Control : (for i in ctrlr.keys do i.selected = (finditem range i.time)>0) --bip从动控制器,从动控制器的子动画数量始终为1,所以就先不获取了,以后兼容子动画控制器的问题.
		default : --默认情况(其他控制器)
		if isValidObj ctrlr do( 
			if ctrlr.numsubs > 0 then
				for i = 1 to ctrlr.numsubs do selectCtrlrKeys ctrlr[i].controller range:range
			else
				if ctrlr.keys.count > 0 do for i in ctrlr.keys do i.selected = (finditem range i.time)>0
		)
	)
)
fn get_step_time obj:$ tolerance:0.001 lift:true ctrl:$[3][1] = --0为起步,1为落步
(
	--获取时间轴关键帧
	fn getKeyFrameByBar = 
	(
		local temp
		result = makeUniqueArray(for t = animationRange.start+1 to animationRange.end+1 where (temp = at time t(trackbar.GetPreviousKeyTime()); temp != undefined) collect temp)--不用排序,到边缘会获取到边远之外的帧.需要排序,读取的顺序可能不稳定.比如0帧有时候会获取到最后一个关键帧,但有时候会获取到负帧
		if result.count > 0 and result[1] < animationRange.start do deleteitem result 1
		result
	)
	local bar_keys = sort (getKeyFrameByBar()),
	--收集位置
	pos_list = for t in bar_keys collect #(t, at time t(obj.pos))
-- 	print #(bar_keys,pos_list)
		
	--开始过滤
	collect_keys = if lift then --0,起步帧的特性为前一帧和本帧位置数值接近,下一帧有较大变化,如果是第0帧,则只判断下一帧是否有变化,如果是最后一帧,则只判断上一帧是否有变化
	(
		count = pos_list.count
		lift_keys = if distance pos_list[1][2] pos_list[2][2] > tolerance then #(pos_list[1][1]) else #()
		lift_keys += for i = 2 to count - 1 where (distance pos_list[i][2] pos_list[i-1][2] <= tolerance) and (distance pos_list[i][2] pos_list[i+1][2] > tolerance) collect pos_list[i][1]
		lift_keys += if distance pos_list[count][2] pos_list[count-1][2] <= tolerance then #(pos_list[count][1]) else #()
	)else --1,落步帧的特性为前一帧和本帧位置数值变化较大,和下一帧比较接近
	(
		count = pos_list.count
		lay_keys = if distance pos_list[1][2] pos_list[2][2] <= tolerance then #(pos_list[1][1]) else #()
		lay_keys += for i = 2 to count - 1 where (distance pos_list[i][2] pos_list[i-1][2] > tolerance) and (distance pos_list[i][2] pos_list[i+1][2] <= tolerance) collect pos_list[i][1]
		lay_keys += if distance pos_list[count][2] pos_list[count-1][2] > tolerance then #(pos_list[count][1]) else #()
	)
-- 	print collect_keys
	
	--选择
	if isvalidobj ctrl then
	(
		selectCtrlrKeys ctrl range:collect_keys
	)else collect_keys
)
-- get_step_time obj:selection[1] tolerance:0.001 lift:true ctrl:selection[1][3][1][2][3]
-- get_step_time obj:selection[1] tolerance:0.001 lift:false ctrl:selection[1][3][1][2][3]