fn text2range txt = --必备的依赖函数,将文本转为帧范围数组
(
	local
	rangeList = filterString txt ".,; \n", --取出所有连续帧列表
	ranges = #()
	for i in rangeList do
	(
		stamps = filterString i "-"
		if stamps.count > 1 then for j = 1 to stamps.count-1 do ranges += (for k = (stamps[j] as integer + (if exclude then 1 else 0)) to (stamps[j+1] as integer - (if exclude then 1 else 0)) collect k) --添加连续帧
		else append ranges (i as integer) --添加单帧,单帧不会被排除
	)
	return ranges
)
--批量逐帧k帧(兼容基本体,但未兼容bip子动画)
fn setCOMPerFrame objs:(getcurrentselection()) range:(for t = animationrange.start to animationrange.end collect t) = --批量设置逐帧
(
	for obj in objs do
	(
		ctrl = obj.controller
		case (classof ctrl) of
		(
			Vertical_Horizontal_Turn : for t in range do for i = 1 to 3 do biped.addNewKey ctrl[i].controller t
			BipSlave_Control : for t in range do biped.addNewKey ctrl t
			default : with animate on(for t in range do at time t(obj.transform = obj.transform))
		)
	)
)

--批量选择帧(兼容部分帧,兼容基本体,但未兼容bip子动画)
fn selectCtrlrKeys ctrlr range:#() = --必备的依赖函数,选择帧的递归 --注意因为提供了Range(整数帧列表),所以选择帧选择不到小数帧(请手动删除)
(
	type = classof ctrlr
	case type of --判断控制器类型
	(
		Vertical_Horizontal_Turn : (for i = 1 to 3 do selectCtrlrKeys ctrlr[i].controller range:range) --质心控制器,可以分解为bip从动控制器
		BipSlave_Control : (for i in ctrlr.keys do i.selected = (finditem range i.time)>0) --bip从动控制器,从动控制器的子动画数量始终为1,所以就先不获取了,以后兼容子动画控制器的问题.
		default : --默认情况(其他控制器)
		( 
			if ctrlr.numsubs > 0 then
				for i = 1 to ctrlr.numsubs do selectCtrlrKeys ctrlr[i].controller range:range
			else
				if ctrlr.keys.count > 0 do for i in ctrlr.keys do i.selected = (finditem range i.time)>0
		)
	)
)
fn MySelectKeys objs:(getcurrentselection()) start:animationrange.start end:animationrange.end range: exclude:false = --biped竟然在有子动画控制器时(numsubs>0),控制器本身还有帧!!?COM还必须读前三个子控制器.看来只能识别控制器类型了.
(
	--应当在调用前创建好range,也可以合并到函数中,暂时先弄个简单版作为测试
	type = classof range
	fn afilter ary start:start end:end = for t in sort(makeuniquearray ary) where t >= start and t <= end collect t --过滤内容在时间范围内
	range = case type of
	(
		unsuppliedclass : for t = start to end collect t --没提供范围,则生成一个全范围
		array : afilter range --过滤一下range内容在 时间范围内
		string : text2range range--处理选择情况
	)
	for o in objs do selectCtrlrKeys o.controller range:range
)

--依赖,获取当前Bip帧
fn getCurrentBipedKey ctrl = 
(
	local _temp
	for i = 1 to ctrl.keys.count where (_temp = biped.getKey ctrl i;_temp.time == currenttime) do exit with _temp
)
--设置bip切断连续
-- fn setContinuity ctrl val = --val:0平坦,默认25平滑,50膨胀
-- (
-- 	case (classof ctrl) of
-- 	(
-- 		Vertical_Horizontal_Turn : for i = 1 to 3 do setContinuity ctrl[i].controller val
-- 		BipSlave_Control : 
-- 		(
-- 			bipkey = getCurrentBipedKey ctrl
-- 			if classof bipkey == BipedKey do bipkey.continuity = val
-- 		)
-- 	)
-- )
--设置bip前偏,后偏
-- fn setBias ctrl val = --val:50后偏(前稳定),默认25平滑,0前偏(后稳定)
-- (
-- 	case (classof ctrl) of
-- 	(
-- 		Vertical_Horizontal_Turn : for i = 1 to 3 do setBias ctrl[i].controller val
-- 		BipSlave_Control : 
-- 		(
-- 			bipkey = getCurrentBipedKey ctrl
-- 			if classof bipkey == BipedKey do bipkey.bias = val
-- 		)
-- 	)
-- )
--通用的设置biped帧功能,依赖于上面的getCurrentBipedKey
fn setBipKeysVal ctrl val type:#bias = --val:50后偏(前稳定),默认25平滑,0前偏(后稳定)
(
	case (classof ctrl) of
	(
		Vertical_Horizontal_Turn : for i = 1 to 3 do setBipKeysVal ctrl[i].controller val
		BipSlave_Control : 
		(
			bipkey = getCurrentBipedKey ctrl
			if classof bipkey == BipedKey do case type of
			(
				#easeTo : bipkey.easeTo = val --0-50,0
				#easeFrom : bipkey.easeFrom = val --0-50,0
				#tension : bipkey.tension = val --0-50,25
				#continuity : bipkey.continuity = val --0-50,25
				#bias : bipkey.bias = val --0-50,25
			)
		)
	)
)