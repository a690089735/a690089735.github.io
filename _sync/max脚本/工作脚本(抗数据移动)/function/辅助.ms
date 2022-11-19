try(destroydialog Rollout1)catch()
rollout Rollout1 "复制粘贴只能粘给同名物体" width:280 height:328
(
	local
		StransList = #(),
		MtransList = #(),
		AtransList = #(),
		objnames = #(),
		parentsname = #(),
		ini = (getdir #userStartupScripts + @"\辅助帧文本.ini")
	
	fn findIDbyName ary name =
	(
		r = for i = 1 to ary.count where ary[i][1] == name do exit with i
		if r == ok then return 0 else return r
	)
	fn GetKeys = with undo off
	(
		mapkeys (getcurrentselection()) (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
		sort(makeuniquearray keys)
	)
	fn CreateBoxByObj nodeB type:"Box" rescale:true = --holdAtt:false = 
	with animate off(with redraw off(
		trans = nodeB.transform
		
		bb = nodeGetBoundingBox nodeB (trans)
		size = (bb[2]-bb[1])
		size *= 0.9
		
		b = box width:size[3] length:size[2] height:size[1]
		b[3][2].controller.axisOrder = 5 --用来抵消世界级变换的欧拉死锁,目前这个值仅适用于biped的脚,且没有详细测试.
		
		b.transform = (matrix3 [0,0,-1] [0,1,0] [1,0,0] [0,0,0])*trans
		b.center = nodeB.center
		
		b.pivot = nodeB.transform.pos
		fn RotatePivotOnly obj rotation = 
		(
			local rotValInv=inverse (rotation as quat)
			animate off in coordsys local obj.rotation*=RotValInv
			obj.objectoffsetrot*=RotValInv
			obj.objectoffsetpos*=RotValInv
		)
		RotatePivotOnly b (EulerAngles 0 -90 0)
		
		b.name = nodeB.name + "_BBox"
-- 		d = dummy boxsize:[10,10,10] transform:trans
-- 		b.parent = d
		b.wirecolor = red

		select b
	))
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
	
	button btn1 "过滤选择为Biped" pos:[8,8] width:128 height:24
	
	button btn2 "复制单帧变换" pos:[8,40] width:128 height:24 toolTip:"仅支持Biped物体"
	button btn3 "粘贴" pos:[8,72] width:32 height:24 toolTip:"仅支持Biped物体"
	button btn15 "复制多帧变换" pos:[8,104] width:128 height:24 toolTip:"仅支持Biped物体"
	button btn16 "粘贴" pos:[8,136] width:32 height:24 toolTip:"仅支持Biped物体"
	button btn18 "粘贴到现有帧" pos:[48,136] width:88 height:24 toolTip:"仅支持Biped物体"
	button btn50 "复制全部变换" pos:[8,168] width:128 height:24 toolTip:"支持所有物体"
	button btn51 "粘贴" pos:[8,200] width:32 height:24 toolTip:"支持所有物体"
	button btn52 "粘贴到现有帧" pos:[48,200] width:88 height:24 toolTip:"支持所有物体"
	
	spinner spn1 "" pos:[144,168] width:56 height:16 range:[-1000,1000,0] scale:0.01
	button btn_GetH "Get" pos:[200,168] width:24 height:16
	button btn_LockH "锁高" pos:[232,168] width:40 height:16 toolTip:"锁定最低高度"
	button btn_sld "批量滑动" pos:[144,136] width:64 height:24
	button btn_fre "批量自由" pos:[208,136] width:64 height:24
	
	button btn10 "快照选择物体" pos:[8,264] width:128 height:24
	
	button btn_r "记录" pos:[144,200] width:32 height:24
	button btn_M "对比物体名" pos:[176,200] width:96 height:24 toolTip:"选中不存在的物体"
	
	button btn144 "记录" pos:[144,232] width:32 height:24
	button btn145 "对比层级关系" pos:[176,232] width:96 height:24 toolTip:"根据对象判断,层级不符合的物体将被选中,没有选中则层级一样."
	edittext edt1 "" pos:[144,8] width:128 height:88
	button btn_setkey "批量设置帧" pos:[200,104] width:72 height:24 toolTip:"用.,;-空格和换行来分隔,
左键在当前帧创建帧,
Alt+左键按照上方文本创建帧,
右键点击来获取当前时间轴上的帧位置."
	button btn20 "创建一个Box" pos:[16,232] width:112 height:24
	button btn21 "范围选择" pos:[144,104] width:48 height:24 toolTip:"选择范围内的帧[横线代表的帧];按住Alt排除范围帧本身."
	button btn22 "Bip添加缩放" pos:[200,264] width:72 height:24
	button btn41 "稳停" pos:[144,296] width:48 height:24
	button btn42 "缓动" pos:[192,296] width:32 height:24
	button btn43 "稳启" pos:[224,296] width:48 height:24
	
	--依赖,获取当前Bip帧
	fn getCurrentBipedKey ctrl = 
	(
		local _temp
		for i = 1 to ctrl.keys.count where (_temp = biped.getKey ctrl i;_temp.time == currenttime) do exit with _temp
	)
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

	on Rollout1 open do
	(
		local str = ""
		if doesFileExist ini do 
		(
			fs = openFile ini
			while not eof fs do(
				str += "\n"
				str += readline fs
			)
			close fs
			if str[1] == "\n" do str[1] = ""
		)
		edt1.text = str
	-- 		if (hasINISetting ini "辅助工具") do edt1.text = getINISetting ini "辅助工具" "帧文本"
	)
	on btn1 pressed do
		undo "reSelect Biped" on(select(for i in selection where classof i.baseobject == Biped_Object collect i))
	on btn2 pressed do
		StransList = for i in getcurrentselection() collect #(i.name,i.transform)
	on btn3 pressed do
	(
		undo "Paste Transform" on(
			for o in getcurrentselection() do
			(
				local id = (findIDbyName StransList o.name)
				if id > 0 do animate on(o.transform = StransList[id][2])
			)
		)
	)
	on btn15 pressed do --复制多帧
	(
		for o in getcurrentselection() do 
		(
			append MtransList #(o.name,for k in o.controller.keys collect #(k.time,at time k.time(o.transform)))
		)
	)
	on btn16 pressed do --粘贴多帧
	(
		undo "Paste Transform" on(
			local
				st = animationrange.start,
				et = animationrange.end
			for o in getcurrentselection() do
			(
				local id = findIDbyName MtransList o.name
				if id > 0 do 
					animate on(
					for i = 1 to MtransList[id][2].count do
						at time MtransList[id][2][i][1] (o.transform = MtransList[id][2][i][2])
					)
			)
		)
	)
	on btn18 pressed do --粘贴到现有帧
	(
		undo "Paste Transform" on(
			local
				st = animationrange.start,
				et = animationrange.end
			for o in getcurrentselection() do
			(
				local id = findIDbyName MtransList o.name
				if id > 0 do 
					animate on(
						times = for k in o.controller.keys collect k.time
						for t in times do
						(
	-- 							tid = finditem times t
							tid = findIDbyName MtransList[id][2] t
							if tid > 0 do
								at time t (o.transform = MtransList[id][2][tid][2])
						)
					)
			)
		)
	)
	on btn50 pressed do --复制全部变换
	(
		local
			st = animationrange.start,
			et = animationrange.end
		AtransList = for o in getcurrentselection() collect #(o.name,for t = st to et collect #(t,at time t(o.transform)))
	)
	on btn51 pressed do --粘贴全部变换
	undo "Paste Transform" on(
		for o in getcurrentselection() do
			(
				local id = findIDbyName AtransList o.name
				if id > 0 do 
					animate on(
					for i = 1 to AtransList[id][2].count do
						(slidertime = AtransList[id][2][i][1]; o.transform = AtransList[id][2][i][2])
					)
			)
	)
	on btn52 pressed do --粘贴全部变换到现有帧
	undo "Paste Transform" on(with redraw off(
		for o in getcurrentselection() do
		(
			local id = findIDbyName AtransList o.name
			if id > 0 do 
				with animate on(
				times = if classof o == Biped_Object then for k in o.controller.keys collect k.time else GetKeys()
					for t in times do
					(
						tid = findIDbyName AtransList[id][2] t
						if tid > 0 do
							(slidertime = t; o.transform = AtransList[id][2][tid][2])
					)
				)
		)
	))
	on btn_GetH pressed do --获取高度
	(
		spn1.value = (getcurrentselection())[1].transform.pos.z
	)
	on btn_LockH pressed do --为当前帧锁定最小高度
	undo "set Height" on(
		with animate on (
			local
				obj = (getcurrentselection())[1],
				val = spn1.value,
				st = animationrange.start,
				et = animationrange.end
				times = for k in obj.controller.keys collect k.time
			for t = st to et where finditem times t > 0 do at time t(
				local trans = obj.transform
				if trans[4][3] <　val do
				(
					trans.translation = [trans.translation[1],trans.translation[2],val]
					obj.transform = trans
				)
			)
		)
	)
	on btn_sld pressed do --批量滑动
	undo "set SlidingKey" on(with redraw on(
		local 
			st = animationrange.start,
			et = animationrange.end,
			t = slidertime
		for o in getcurrentselection() do
		(
			local 
				times = for k in o.controller.keys collect k.time--,
	-- 				transList = for t in times collect at time t(o.transform)
			for t = st to et do
			(
				id = finditem times t
	-- 				if id > 0 do at time t(biped.setslidingkey o) --Biped漏洞,用attime不刷新变换信息,导致K帧出错,调用重绘也不行,且不可以禁用重绘,推测是biped的K帧机制问题.
				if id > 0 do (slidertime = t;biped.setslidingkey o)
			)
	-- 			for i = 1 to times.count do animate on(at time times[i](o.transform = transList[i]))
		)
		slidertime = t
	))
	on btn_fre pressed do --批量自由
	undo "set FreeKey" on(with redraw on(
		local 
			st = animationrange.start,
			et = animationrange.end,
			t = slidertime
		for o in getcurrentselection() do
		(
			local 
				times = for k in o.controller.keys collect k.time--,
				--transList = for t in times collect at time t(o.transform)
			for t = st to et do
			(
				id = finditem times t
				--if id > 0 do at time t(biped.setfreekey o)
				if id > 0 do (slidertime = t;biped.setfreekey o)
			)
			--for i = 1 to times.count do animate on(at time times[i](o.transform = transList[i]))
		)
		slidertime = t
	))
	on btn10 pressed do
		undo "Quick Snapshot" on(snapshot $)
	on btn_r pressed do
	(
		list = getcurrentselection()
		if list.count == 0 do list = objects as array
		objnames = for o in list collect o.name
	)
	on btn_M pressed do
	(
	-- 		clearselection();
		list = getcurrentselection()
		if list.count == 0 do list = objects as array
		select(for o in list where finditem objnames o.name == 0 collect o)
	)
	on btn144 pressed do --记录层级关系
	(
		parentsname = for o in objects collect #(o.name,if o.parent != undefined then o.parent.name else undefined)
	)
	on btn145 pressed do --对比层级关系
	(
		if parentsname.count == objects.count then
		(
			clearselection()
			select(for o in objects where
				(
					parentname = parentsname[findidbyname parentsname o.name][2]
					if parentname == undefined then parentname != o.parent else parentname != o.parent.name
				)
				collect o)
			if selection.count > 0 then messagebox "有问题的物体已被选中."  else messagebox "没有发现有问题的物体." 
		)else messagebox "物体数量不同."
	)
	on edt1 entered txt do
	(
		deleteFile ini
		save_file = createfile ini
		format "%" txt to:save_file
		close save_file
	-- 		setINISetting ini "辅助工具" "帧文本" txt
	)
	on btn_setkey pressed do --批量设置帧
	(
			undo "Set Key" on(with animate on(
				sel = getcurrentselection()
				if keyboard.altPressed then
				(
					local 
						times = filterString edt1.text ".,; -\n",
						st = slidertime
				-- 		for t in times do (slidertime = t as integer;for o in sel do biped.setkey o true true true) --不选质心的轨迹也能K帧
					for t in times do (slidertime = t as integer;for o in sel do o.transform = o.transform) --同上,且兼容基本类型,记录 move $ [0,0,0]等命令可与Bip兼容,但变换不会生效...
					slidertime = st
				)else
				(
					for o in sel do o.transform = o.transform
				)
			))
		)
	on btn_setkey rightClick do --批量获取帧
	(
		fn getKeyFrameByBar asString:false = 
		(
			local temp
			result = makeUniqueArray(for t = animationRange.start+1 to animationRange.end+1 where (temp = at time t(trackbar.GetPreviousKeyTime()); temp != undefined) collect temp)--不用排序,到边缘会获取到边远之外的帧.需要排序,读取的顺序可能不稳定.比如0帧有时候会获取到最后一个关键帧,但有时候会获取到负帧
			if result.count > 0 and result[1] < animationRange.start do deleteitem result 1
			if asString then
			(
	-- 				print result
				if result.count > 0 then
				(
					local str = (result[1].frame as integer) as string
					for i = 2 to result.count do str += "-" + (result[i].frame as integer) as string
					return str
				)else return ""
			)
			else return result
		)
		edt1.entered(edt1.text = getKeyFrameByBar asString:true)
	)
	on btn20 pressed do --创建一个box
	(
		CreateBoxByObj selection[1]
	)
	on btn21 pressed do --选择范围内的帧,按住alt则不包括范围帧本身.
	(
		fn MySelectKeys objs:(getcurrentselection()) start:animationrange.start end:animationrange.end range: exclude:false = --biped竟然在有子动画控制器时(numsubs>0),控制器本身还有帧!!?COM还必须读前三个子控制器.看来只能识别控制器类型了.
		(
			--应当在调用前创建好range,也可以合并到函数中,暂时先弄个简单版作为测试
			type = classof range
			fn afilter ary start:start end:end = for t in sort(makeuniquearray ary) where t >= start and t <= end collect t --过滤内容在时间范围内
			range = case type of
			(
				unsuppliedclass : for t = start to end collect t --没提供范围,则生成一个全范围
				array : afilter range --过滤一下range内容在 时间范围内
				string : ( --处理选择情况
					rangeList = filterString range ".,; \n" --取出所有连续帧列表
					ranges = #()
					for i in rangeList do
					(
						stamps = filterString i "-"
						if stamps.count > 1 then for j = 1 to stamps.count-1 do ranges += (for k = (stamps[j] as integer + (if exclude then 1 else 0)) to (stamps[j+1] as integer - (if exclude then 1 else 0)) collect k) --添加连续帧
						else append ranges (i as integer) --添加单帧,单帧不会被排除
					)
					ranges
				)
			)
			for o in objs do selectCtrlrKeys o.controller range:range
		)
		MySelectKeys range:edt1.text exclude:keyboard.altPressed
	)
	on btn22 pressed do --添加缩放
	(
		for o in getcurrentselection() do if finditem #(BipSlave_Control,Vertical_Horizontal_Turn) (classof o.controller) > 0 do o.controller[1][1][1].controller = ScaleXYZ()
		
	)
	on btn41 pressed do
		for i in getcurrentselection() do setBipKeysVal i.controller 0 type:#bias
	on btn43 pressed do
		for i in getcurrentselection() do setBipKeysVal i.controller 50 type:#bias
	on btn42 pressed do
		for i in getcurrentselection() do setBipKeysVal i.controller 25 type:#bias
)
createdialog Rollout1 pos:[1510, 750]