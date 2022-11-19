--绘制工具
-- 需求:
-- 按帧储存绘制点,按帧绘制
-- 现有技术不适合基于世界空间 --点位置应该基于世界3d空间,这样不会因为视口变化而乱变.
-- 当前帧没有数据时,使用较小侧最近的数据.
-- 目前按绘制按钮绘制,绘制期间按Ctrl擦除,右键退出绘制模式 --按住D键绘制,按住CtrlD擦除
-- registerTimeCallback <fn> 时间回调
-- try(DestroyDialog AniLineTool)catch()
/* 记录
√1.核心屏幕绘制功能完成 2022年6月21日
√2.简单重影功能完成 2022年6月22日
√3.现在,线条可以保存在场景中. 2022年6月22日
√4.技术变革,采用3D空间绘制.(投射射线为法线,在0,0创建一个平面,获取投影坐标)效果很好,但是极远和极近处,因为max的视口距离限制和浮点数精度问题,可能出现绘制抖动. 2022年6月23日
√5.更新擦除方式为点线距离,并且根据视口距离倍增(近处缩小擦除范围,远处放大擦除单位).但倍增在极远和极近处有一定限制,所以极远和极近仍会有部分范围异常. 2022年6月23日
√6. 时间改变时,如果state为undifined则再按下绘制.播放动画时关闭绘制并设为undefined. 2022年6月23日
√7.设置重影显示数量,并更新相关的绘制操作. 2022年6月24日
√8.修复正交视图的采样点偏移.2022年6月24日
√9.修复拖动时间轴的绘制状态问题.2022年6月24日
 */
/*  待做
创建摄影机平面
保存基本设置(重影数量)
可换颜色(仅黄,棕,蓝,青,紫,黑,白即可),需要更改数据结构.
可映射到物体(可用于模型参考结构)
可简单雕刻的笔迹(仅3D空间衰减平移)
*/
 
try(DestroyDialog AniLineTool)catch()
rollout AniLineTool "动画参考工具" width:208 height:96
(
	Timer 'tmr_Drawing' "Timer" interval:100 active:false --有退不出或自动进入绘制模式时,问题就在这里
	
	button 'btn_show' "显示" pos:[66,8] width:30 height:24 enabled:false align:#left
	button 'btn_save' "导出" pos:[8,8] width:30 height:24 enabled:false align:#left
	button 'btn_load' "加载" pos:[37,8] width:30 height:24 enabled:false align:#left
	
	button 'btn_Camera' "固定机位" pos:[96,8] width:56 height:24 align:#left tooltip:"创建固定摄像机,按住Ctrl取消固定."
	button 'btn_Plane' "参考平面" pos:[152,8] width:48 height:24 enabled:false align:#left
	
-- 	button 'btn_ClearAll' "清理所有" pos:[-8,-8] width:16 height:24 enabled:true align:#left
	button 'btn_Clear' "清除线条" pos:[8,38] width:64 height:24 enabled:true align:#left tooltip:"清除线条,按住Ctrl清除所有."
	button 'btn_DuplicateFrame' "复制前一帧" pos:[8,62] width:64 height:24 enabled:false align:#left
	
	spinner 'spn_onionSkinCount' "重影" pos:[76,43] width:38 height:16 enabled:true range:[0,9,0] type:#integer scale:1 align:#left
	button 'btn_Left' "<" pos:[76,62] width:24 height:24 align:#left
	button 'btn_Right' ">" pos:[106,62] width:24 height:24 align:#left
	
	checkbutton 'btn_Draw' "绘制线条" pos:[136,38] width:64 height:48 highlightColor:(color 200 80 10) align:#left
	
	local --这些变量以后要记录到场景保留变量中跟随文件保存,目前仅是急用将其简化,关闭就没了
	last_state = toolMode.commandMode,
	draw_state = false,
	view_TM = undefined,
	threshold = undefined,
	keys_all = #(), --全部帧
	keys_now = currentTime, --当前时间
	keys_id = findItem keys_all keys_now, --列表id
	lines_all = #(), --全部线
	lines_now = if keys_id > 0 then lines_all[keys_id] else #(), --当前线
	points_buffer = #(), --点位置缓存
	
	lines_left = #(),--重影左
	lines_right = #(),--重影右
	
	color_left = for i = 9 to 1 by -1 collect color 0 (255*(.01 + pow (i*.11) 3)) 0,--重影左
	color_right = for i = 9 to 1 by -1 collect color (255*(.01 + pow (i*.11) 3)) 0 0--重影右

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
	
	on AniLineTool open do
	(
		get_scene_data()--从场景读取数据
		callbacks.addscript #filePreOpen "AniLineTool.reset_data()" id:#XAniLineTool --打开新文件前重置数据
		callbacks.addscript #filePostOpen "AniLineTool.get_scene_data()" id:#XAniLineTool --打开新文件后重新获取数据
		callbacks.addscript #systemPostReset "AniLineTool.reset_data()" id:#XAniLineTool --重置文件后重置数据
		callbacks.addscript #systemPostNew "AniLineTool.reset_data()" id:#XAniLineTool --新建文件后重置数据
		
		registerTimeCallback TimeFn
		registerRedrawViewsCallback ShowFn
		
		redrawViews()
	)
	on AniLineTool close do
	(
		toolMode.commandMode = last_state
		callbacks.removeScripts id:#XAniLineTool
		
		unregisterTimeCallback TimeFn
		unregisterRedrawViewsCallback ShowFn
		
		redrawViews()
	)
	on btn_Draw changed state do
	(
-- 		if state do --不加也行,加了提高鲁棒性,减少莫名其妙的意外.
-- 		(
			draw_state = true --手动进入
			lase_state = toolMode.commandMode --记录工具状态
			mousetrack trackCallback:PaintFn
			btn_Draw.state = false --会在上面那句执行完再执行(上面那句有阻塞效果)
-- 		)
	)
	
	on btn_Left pressed do --向前一帧,(按住Ctrl向前移动一帧)
	(
		if keys_all.count > 0 do
		(
			local find_id = findItem (sort(makeUniqueArray(keys_all + #(keys_now)))) keys_now
			t = if find_id - 1 > 0 then keys_all[find_id - 1] else keys_all[keys_all.count] --左边还有往左边,左边没有去最后
			if t < animationRange.start then animationRange = (interval t animationRange.end) else if t > animationRange.end do animationRange = (interval animationRange.start t)
			sliderTime = t
		)
		update_lines_dispaly()
	)
	on btn_Right pressed do --向后一帧,(按住Ctrl向后移动一帧)
	(
		if keys_all.count > 0 do
		(
			local find_id = findItem (sort(makeUniqueArray(keys_all + #(keys_now)))) keys_now
			t = if find_id < keys_all.count then keys_all[find_id+1] else keys_all[1] --右边还有往左边,右边没有去最前
			if t < animationRange.start then animationRange = (interval t animationRange.end) else if t > animationRange.end do animationRange = (interval animationRange.start t)
			sliderTime = t
		)
		update_lines_dispaly()
	)
	on btn_Clear pressed do
	(
		if keyboard.controlPressed then --清理全部
		(
			toolMode.commandMode = last_state
			keys_all = #() --全部帧
			keys_now = currentTime --当前时间
			keys_id = 0 --列表id
			lines_all = #() --全部线
			lines_now = #() --当前线
			points_buffer = #() --点位置缓存
			
			lines_left = #()--重影左
			lines_right = #()--重影右
			
			draw_state = false
		)else --清除此帧
		(
			if btn_Draw.checked then
			(
				lines_now = #()
				if keys_id > 0 then lines_all[keys_id] = lines_now else add_frame false
			)else
			(
				if lines_all.count > 0 do
				(
					if keys_id > 0 then --是显示当前帧
					(
						deleteItem keys_all keys_id
						deleteItem lines_all keys_id
						keys_id = 0
						lines_now = #()
					)else --是显示的其他帧
					(
						--找到显示帧(不改成公用储存show_id了,因为会出现意外的不好处理的复杂度.)
						local
						find_id = findItem (sort(makeUniqueArray(keys_all+#(keys_now)))) keys_now,
						pre_id = find_id - 1,
						show_id = if pre_id > 0 then pre_id else find_id
						deleteItem keys_all show_id 
						deleteItem lines_all show_id
						keys_id = 0
					)
				)
				
			)
			update_lines_dispaly()
		)
		redrawViews()
	)
-- 	on btn_ClearAll pressed do
-- 	(
		--print toolMode.commandMode
		
-- 	)
	on btn_Camera pressed do
	undo "Create Camera By Viewport" on(
		CreateCamera() --alt取消锁定
	)
	on spn_onionSkinCount entered do
	(
		update_lines_dispaly()
	)
	on tmr_Drawing tick do
	(
-- 		print 1
		if isAnimPlaying() then (draw_state = false;tmr_Drawing.active = false) --播放动画清理状态
		else if draw_state and toolMode.commandMode != #animation do (btn_Draw.checked = true;btn_Draw.changed true;tmr_Drawing.active = false) --停止时钟)--没在播放动画,并且绘制模式没有手动退出,重新调用绘制
		view_TM = undefined;threshold = undefined --清理变量
	)
)
CreateDialog AniLineTool