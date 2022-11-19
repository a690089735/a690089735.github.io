-- 线与平面的交点
fn planelineintersect c n a v= --planelineintersect <plane_point> <plane_normal> <line_point> <line_vector>
(
	b=a+v
	r=a+(dot (c-a) n) / (dot (b-a) n)*(b-a)
)
--点C到线的投影
fn pointLineProj pA pB pC = ( --求点C在直线AB上的投影
	local vAB=pB-pA
	local vAC=pC-pA
	local d=dot (normalize vAB) (normalize vAC)
	(pA+(vAB*(d*(length vAC/length vAB))))
)
--点到射线的距离
fn pointRayDist2 thePos theRay = (
	length (cross theRay.dir (theRay.pos - thePos))
)
--点平滑
-- fn PointsSmooth Points iteration:3 =
-- (
-- 	result = #(points[1]) + 
-- 	(for i = 2 to points.count-1 collect (local ipos = points[i];((pointLineProj points[i-1] points[i+1] ipos) + ipos)*.5)) + 
-- 	#(points[points.count])
-- 	for i = 2 to iteration do result = PointsSmooth result iteration:1
-- 	result
-- )
--点平滑
fn PointsSmooth Points iteration:3 = --更简单,更快,更均匀
(
	result = #(points[1]) + (for i = 2 to points.count-1 collect (points[i-1]+points[i+1])*.25 + points[i]*.5) + #(points[points.count])
	for i = 2 to iteration do result = PointsSmooth result iteration:1
	result
)

fn update_lines_dispaly =
(
	lines_now = if lines_all.count < 1 then
	(
		--重影线
		lines_left = #()--重影左,向左找
		lines_right = #()--重影右,向右找
		
		--返回
		#()
	)
	else  --当前线,和keys_id不一定是一条线,最大可能是id的上一条线.(没有线就空,有线向前找,前边没有找后边)
	if keys_id > 0 then
	(
		--重影线
		lines_left = if spn_onionSkinCount.value < 1 then #() else for i = 1 to spn_onionSkinCount.value collect if (oid = keys_id - i)>0 then lines_all[oid] else #()--重影左,向左找
		lines_right = if spn_onionSkinCount.value < 1 then #() else for i = 1 to spn_onionSkinCount.value collect if (oid = keys_id + i)<=lines_all.count then lines_all[oid] else #() --重影右,向右找
		
		--返回
		lines_all[keys_id]
	)
	else
	(
		local
		find_id = findItem (sort(makeUniqueArray(keys_all+#(keys_now)))) keys_now,
		pre_id = find_id - 1,
		show_id = if pre_id > 0 then pre_id else find_id --前边没有找后边,上面已经排除了空结果,这里至少有一个,放心取
		
		--重影线
		lines_left = if spn_onionSkinCount.value < 1 then #() else for i = 1 to spn_onionSkinCount.value collect if (oid = show_id - i)>0 then lines_all[oid] else #()--重影左,向左找
		lines_right = if spn_onionSkinCount.value < 1 then #() else for i = 1 to spn_onionSkinCount.value collect if (oid = show_id + i)<=lines_all.count then lines_all[oid] else #() --重影右,向右找
		
		--返回
		lines_all[show_id]
	)
)

fn get_scene_data =
(
	if ::__RefAniKeys_All != undefined and ::__RefAniLines_All != undefined do 
	(
		keys_all = deepCopy __RefAniKeys_All --全部帧
		lines_all = deepCopy __RefAniLines_All --全部线
		keys_id = findItem keys_all keys_now
		update_lines_dispaly()--读取后刷新
	)--否则不变(不替换已有的,并且启动时默认为空)
)
fn set_scene_data =
(
-- 	print 1
	persistent global __RefAniKeys_All = deepCopy keys_all
	persistent global __RefAniLines_All = deepCopy lines_all
)
fn reset_data =
(
-- 	print 1
	::__RefAniKeys_All = undefined
	::__RefAniLines_All = undefined
	last_state = toolMode.commandMode
	keys_all = #() --全部帧
	keys_now = currentTime --当前时间
	keys_id = findItem keys_all keys_now --列表id
	lines_all = #() --全部线
	lines_now = if keys_id > 0 then lines_all[keys_id] else #() --当前线
	points_buffer = #() --点位置缓存
	
	lines_left = #()--重影左
	lines_right = #()--重影右
)

fn add_frame ctrl = --Ctrl为擦除状态
(
	local
	find_id = findItem (sort(makeUniqueArray(keys_all+#(keys_now)))) keys_now
	
	insertItem keys_now keys_all (keys_id = find_id) --指定并添加帧到列表
	insertItem (lines_now = if ctrl then deepCopy lines_now else #()) lines_all find_id --指定并添加线到列表,擦除时使用当前帧的副本,绘制时使用新帧
		
	--重影线
	lines_left = if spn_onionSkinCount.value < 1 then #() else for i = 1 to spn_onionSkinCount.value collect if (oid = find_id - i)>0 then lines_all[oid] else #()--重影左,向左找
	lines_right = if spn_onionSkinCount.value < 1 then #() else for i = 1 to spn_onionSkinCount.value collect if (oid = find_id + i)<=lines_all.count then lines_all[oid] else #() --重影右,向右找
)

fn PaintFn msg intRay obj faceNumber shift ctrl alt =
(
	local
-- 	mpos = (local p = mouse.Pos;[p[1],p[2],0]), --鼠标位置,转为屏幕空间的point3数据
	result = case msg of
	(
		#freeMove:--悬停移动(未按下)
		(
-- 			print 3
			--显示笔刷(可不做)
			#continue
		)
		#mouseMove:--鼠标按住移动
		(
-- 			print 4
			--添加帧
			if keys_id == 0 do (add_frame ctrl) --添加空帧
			
			--更新视图方向和视图距离
			if view_TM == undefined do view_TM = inverseHighPrecision (viewport.getTM()) --在第一次点击时(每次Point和Abort完成都会将其更新为undefined)
			if threshold == undefined do threshold = (pointRayDist2 [0,0,0] (ray view_TM[4] view_TM[3]))*.05 --已经根据视图添加了距离限制,但仍然不要特别近和特别远
			local
			mousepos = mouse.pos,
			mray = mapScreenToWorldRay mousepos, --视图射线
-- 			ppos = (gw.mapCPToWorld (gw.getPointOnCP mousepos)), --平面投影点
-- 			mpos = planelineintersect [0,0,0] view_TM[3] mray.pos mray.dir
-- 			mpos = planelineintersect [0,0,0] view_TM[3] mray.pos (normalize(ppos-mray.pos))
-- 			mpos = pointLineProj mray.pos ppos [0,0,0]
			mpos = if viewport.IsPerspView() then planelineintersect [0,0,0] view_TM[3] mray.pos mray.dir else pointLineProj mray.pos (gw.mapCPToWorld (gw.getPointOnCP mousepos)) [0,0,0]
				
				
			--绘制
			if ctrl then --擦除 3D版擦除:应当距离越近的时候,阈值越小 距离越大的时候,阈值越大 有的人可能绘画距离远 有的人可能绘画距离近
			(
				if points_buffer.count > 1 do (append lines_now (PointsSmooth points_buffer);points_buffer = #()) --先把缓存里的线加进去
-- 				--在全部列表中搜索,消除距离小于10的点,如果消除的位置一个都不是末端(有一个末端则说明不用截断),则将数组截断成两个(后半部分的数组,插入到线缓存中原数组位置后.)
				--从擦除的点进行截断,添加到线缓存,排除空集
				for i = lines_now.count to 1 by -1 do --倒序方便删除和插入;为了代码简单,目前没有优化(没有被擦除的点时,应当不刷新.现在没有这样做)
				(
					local
					points = lines_now[i], --print (pointRayDist2 points[j] mray);
					wipes = with printAllElements on ((for j = 1 to points.count where (pointRayDist2 points[j] mray < threshold) collect j) as bitarray) as string, --要擦除的序列,文本化
					serial = for item in (#("0") + filterString (substituteString (substituteString wipes "#{" "") "}" "") "," + #((points.count+1) as string)) collect filterString item ".", --要擦除的序列分段,文本化
					points_new = for j = 2 to serial.count where (col = for k = (amax serial[j-1])as integer + 1 to (amin serial[j])as integer - 1 collect points[k]).count > 0 collect col --收集新序列
					deleteitem lines_now i
					for item in points_new where item.count > 1 do insertitem item lines_now i
				)
				
			)
			else append points_buffer mpos --绘制
			#continue
		)
		#mousePoint:--鼠标点击(按下到抬起结束,可视为一套绘制的结尾)
		(
-- 			print 2
			if points_buffer.count > 1 do (append lines_now (PointsSmooth points_buffer);points_buffer = #())
			lines_all[keys_id] = lines_now
			view_TM = undefined--清理视图方向
			threshold = undefined
			#continue
		)
		#mouseAbort:--取消(右键点击)
		(
-- 			print 1
			if points_buffer.count > 1 do (append lines_now (PointsSmooth points_buffer);points_buffer = #())
			if keys_id > 0 do lines_all[keys_id] = lines_now --不加判断会在未绘制时退出导致崩溃.
			if lines_now.count == 0 do
			(
				if keys_id > 0 do--不加判断会在未绘制时退出导致崩溃.
				(
					deleteItem keys_all keys_id
					deleteItem lines_all keys_id
					keys_id = 0
				)
				update_lines_dispaly() --退出时清理
			)
			set_scene_data() --保存数据到场景
			draw_state = false --手动退出
			view_TM = undefined--清理视图方向
			threshold = undefined
			undefined
		)
	)
	redrawViews()
	result 
)

fn ShowFn =
(
	gw.setRndLimits #(#flat)
	
	--先画重影
	if not isAnimPlaying() do
	(
		for i = 1 to lines_left.count do
		(
			gw.setColor #line color_left[i]
			for li in lines_left[i] do gw.Polyline li false
		)
		for i = 1 to lines_right.count do
		(
			gw.setColor #line color_right[i]
			for li in lines_right[i] do gw.Polyline li false
		)
	)
	
	--再画线条
	gw.setColor #line yellow
	for li in lines_now+#(points_buffer) do gw.Polyline li false
)

fn TimeFn =
(
-- 	print toolMode.commandMode
	
	
	keys_now = currentTime --当前时间
	keys_id = findItem keys_all keys_now --列表id
	
	update_lines_dispaly()
	
	tmr_Drawing.active = false;tmr_Drawing.active = true --设置变量和状态都在这里
	
	redrawViews()
)


fn CreateCamera lock:(not keyboard.controlPressed) =
(
	fn predefinedToIso = case viewport.getType() of
	(
		#view_top: viewport.setType #view_iso_user
		#view_bottom: viewport.setType #view_iso_user
		#view_front: viewport.setType #view_iso_user
		#view_back: viewport.setType #view_iso_user
		#view_left: viewport.setType #view_iso_user
		#view_right: viewport.setType #view_iso_user
	)
	fn makeCameraFromView =
	(
		fn getOrthoFOV =
		(
			local size = getViewSize()
			local viewWidth = gw.getVPWorldWidth [0,0,0] * amax 1.0 (size.x / size.y)
			2 * atan (viewWidth / (2 * viewport.getFocalDistance()))
		)
		local
		isOrthoView = viewport.getType() == #view_iso_user,
		isCurrentlyMatching = isKindOf Perspective_Match MAXWrapper and Perspective_Match.isMatching(),
		cameraClass = if viewport.getType() == #view_persp_user then Physical_Camera else TargetCamera,

		viewCam = cameraClass targetDistance:(gw.getFocalDist()) \
			transform:(inverseHighPrecision (viewport.getTM())) \
			type:(if isCurrentlyMatching then #free else #target) \
			targeted:(not isCurrentlyMatching) wireColor:(color 5 54 179) \
			fov:(if isOrthoView then getOrthoFOV() else getViewFOV()) \
			specify_fov:on isSelected:on orthoProjection:isOrthoView \
			name:(uniquename "FixedCamera")
		viewport.setCamera viewCam
		viewCam
	)
	
	fn set_lock obj state = 
	(
		setTransformLockFlags obj state
		if try(isValidNode obj.target)catch(false) do setTransformLockFlags obj.target state
	)
-- 	fn trans_property obj1 obj2 =
-- 	(
-- 		obj1.targetDistance = obj2.targetDistance
-- 		obj1.type = obj2.type
-- 		obj1.targeted = obj2.targeted
-- 		obj1.fov = obj2.fov
-- 		obj1.specify_fov = obj2.specify_fov
-- 		obj1.orthoProjection = obj2.orthoProjection
-- 		obj1.transform = obj2.transform
-- 		delete obj2
-- 	)
	
	local cam = viewport.getCamera(),sel = selection[1],state = if lock then #all else #none
	
	if isValidNode cam then set_lock cam state \ --是相机视图
	else --不是相机视图
	(
		predefinedToIso()
-- 		if isKindOf selection[1] Camera then --选择的是相机,对齐,设置,锁定
-- 		(
-- 			if viewport.getFocalDistance() < 1e-4 do with redraw off
-- 			(viewport.setType #view_persp_user; viewport.setType #view_iso_user)
-- 			newcam = makeCameraFromView()
-- 			trans_property sel newcam --传递属性并删除
-- 		)else --选择的不是相机,创建
-- 		(
			if viewport.getFocalDistance() < 1e-4 do with redraw off
			(viewport.setType #view_persp_user; viewport.setType #view_iso_user)
			cam = makeCameraFromView()
-- 		)
		set_lock cam state --设置锁定
	)

)