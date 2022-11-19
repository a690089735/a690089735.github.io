lines_now = #() --当前帧 线 缓存

points_buffer = #() --当前帧 点 缓存, 绘制当前帧的时候,lines_now和points_buffer一起进行绘制.这样有实时绘制效果.
fn PaintFn msg intRay obj faceNumber shift ctrl alt =
(
	local
	mpos = (local p = mouse.Pos;[p[1],p[2],0]), --鼠标位置,转为屏幕空间的point3数据
	result = case msg of
	(
		#freeMove:--悬停移动(未按下)
		(
-- 			print 1
			--显示笔刷(可不做)
			#continue
		)
		#mouseMove:--鼠标按住移动
		(
-- 			print 2
-- 			print mpos
			--显示笔刷(可不做)
			if ctrl then --擦除
			(
-- 				print"5"
				if points_buffer.count > 1 do (append lines_now points_buffer;points_buffer = #()) --先把缓存里的线加进去
-- 				--在全部列表中搜索,消除距离小于5的点,如果消除的位置一个都不是末端(有一个末端则说明不用截断),则将数组截断成两个(后半部分的数组,插入到线缓存中原数组位置后.)
				--从擦除的点进行截断,添加到线缓存,排除空集
				for i = lines_now.count to 1 by -1 do --倒序方便删除和插入;为了代码简单,目前没有优化(没有被擦除的点时,应当不刷新.现在没有这样做)
				(
-- 					print"6"
					local
					points = lines_now[i],
					wipes = with printAllElements on ((for j = 1 to points.count where distance points[j] mpos < 10 collect j) as bitarray) as string, --要擦除的序列,文本化
					serial = for item in (#("0") + filterString (substituteString (substituteString wipes "#{" "") "}" "") "," + #((points.count+1) as string)) collect filterString item ".", --要擦除的序列分段,文本化
					points_new = for j = 2 to serial.count where (col = for k = (amax serial[j-1])as integer + 1 to (amin serial[j])as integer - 1 collect points[k]).count > 0 collect col --收集新序列
					deleteitem lines_now i
					for item in points_new where item.count > 1 do insertitem item lines_now i
					
-- 					with printAllElements on print #(points_new)
				)
				
			)
			else append points_buffer mpos --绘制
			#continue
		)
		#mousePoint:--鼠标点击(按下到抬起结束,可视为一套绘制的结尾)
		(
-- 			print 3
			if not ctrl do( --非擦除
				if points_buffer.count > 1 do (append lines_now points_buffer;points_buffer = #())
-- 				with printAllElements on print lines_now
			)
			#continue
		)
		#mouseAbort:--取消(右键点击)
		(
-- 			print 4
			if points_buffer.count > 1 do (append lines_now points_buffer;points_buffer = #())
			undefined
		)
	)
-- 	print (lines_now+points_buffer)
	redrawViews()
	result 
)
-- with printAllElements on print lines_now
points_buffer = #();clearlistener()
mousetrack trackCallback:PaintFn --会阻断后续的东西.

-- with printAllElements on print lines_now

