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
-- 重新设计,这里应当能够选择基准帧,和目标帧,和曲线
--时间问题,这里仅对齐旋转
fn force_loop obj_list:(getcurrentselection()) keys:(for t = animationrange.start to animationrange.end collect t) = --后期要做成可选按关键帧批复的
(
	--1分组
	obj_list = sort_by_hierarchy obj_list:obj_list combine:true
	--0计算进度
	total = keys.count * obj_list.count
	progress = 0
	--计算每帧时间差
	end_time = keys[keys.count]
	start_time = keys[1]
	time_len = (end_time - start_time).frame
	inc = 1 / time_len  --计算时包括首和尾,粘贴时跳过首和尾,因为首和尾分别时0.0 和 1.0
	--2循环:1取旋转差值(注意,父物体被改变时,子物体旋转差值需要更新.)2逐帧分配到时间轴
	for o in obj_list do
	(
		local
		--计算位置属性
		end_pos = at time end_time(o.transform.position), start_pos = at time start_time(o.transform.position),
		offset_pos = start_pos - end_pos,
		--计算旋转属性
		end_rot = at time end_time(o.transform.rotation), start_rot = at time start_time(o.transform.rotation),
		offset_rot = start_rot - end_rot,  --1.0 目标是start_rot,所以用start去减 10帧的话分别是0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
		r = quatToEuler2(offset_rot)
		for t in keys do 
		with animate on(
			at time t(
				mi = (t-start_time).frame/time_len
				--添加位移
				move o (offset_pos*mi)
				--添加旋转
				rotate o (eulerAngles (r.x*mi) (r.y*mi) (r.z*mi))
			)
		)
	)
)

force_loop() --处理完会有少量抖动是正常现象,即使加层也会有,只不过加层的抖动幅度相同方向不同



-- fn BoneLoopStart objectArray =
-- (
-- 	objectArray = sort_by_hierarchy obj_list:objectArray combine:false
-- 	firstbonerot = #()
-- 	lastbonerot = #()
-- 	bonesub = #()
-- 	bonelistsub = #()
-- 	
-- 	startFrame=animationrange.start.frame as integer
-- 	endFrame=animationrange.end.frame as integer
-- 	-- cycleFrame=30
-- 	-- if (endFrame-startframe)<30 then 
-- 	cycleFrame=(endFrame-startframe)
-- 	
-- 	for i = 1 to objectArray.count do
-- 	(
-- 		slidertime=animationrange.start
-- 		for j = 1 to objectArray[i].count do
-- 		(
-- 			append firstbonerot objectArray[i][j].transform.rotation
-- 		)
-- 		slidertime=animationrange.end
-- 		for j = 1 to objectArray[i].count do
-- 		(
-- 			append lastbonerot objectArray[i][j].transform.rotation
-- 		)
-- 		for j = 1 to objectArray[i].count do
-- 		(
-- 		append bonesub (quattoeuler (firstbonerot[j]-lastbonerot[j]))
-- 		)
-- 		append bonelistsub bonesub
-- 		firstbonerot = #()
-- 		lastbonerot = #()
-- 		bonesub = #()
-- 	)	
-- 	set animate on
-- 	for f = 0 to cycleframe do
-- 	(
-- 		slidertime = endFrame - f;
-- 		per=(float)(cycleFrame-f)/cycleFrame
-- 		
-- 		for a = 1 to objectArray.count do
-- 		(
-- 			for b = 1 to objectArray[a].count do
-- 			(
-- 				r = bonelistsub[a][b];
-- 				if b > 1 then(r=quattoeuler  (bonelistsub[a][b] as quat - bonelistsub[a][b-1] as quat))
-- 				rot = (eulerangles (r.x*per) (r.y*per) (r.z*per))
-- 				rotate objectArray[a][b] rot
-- 			)
-- 		)
-- 	)
-- 	set animate off
-- 	slidertime=startframe
-- )
-- BoneLoopStart (getcurrentselection())