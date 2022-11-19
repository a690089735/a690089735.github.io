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

	include "core3.ms"
	
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