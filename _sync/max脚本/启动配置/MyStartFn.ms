fn MyCustomFn val = 
try(
	case val of
	(
		--时间向前1帧 建议快捷键:, (加Alt可以靠拢maya,但由于中文输入法问题,建议将前后关键帧与Alt绑定,同理,建议maya中也采用此快捷键方案)
		1:(if slidertime == animationrange.start then slidertime = animationrange.end else slidertime -= 1;displayTempPrompt "Back Frame" 1500) 
		--时间向后1帧 建议快捷键:.(同上)
		2:(if slidertime == animationrange.end then slidertime = animationrange.start else slidertime += 1;displayTempPrompt "Next Frame" 1500)
		--跳到前一关键帧 建议快捷键:Alt+,(同上)
		3:(t = trackbar.GetPreviousKeyTime(); slidertime = if t < animationrange.start then at time (animationrange.end+1)(trackbar.GetPreviousKeyTime()) else t;displayTempPrompt "Back KeyFrame" 1500)
		--跳到后一关键帧 建议快捷键:Alt+.(同上)
		4:(t = trackbar.GetNextKeyTime(); slidertime = if t > animationrange.end then at time (animationrange.start - 1)(trackbar.GetNextKeyTime()) else t;displayTempPrompt "Next KeyFrame" 1500)
		--设置默认插值类型为Step(阶梯) 建议快捷键:
		5:(maxops.setDefaultTangentType #step #step;displayTempPrompt "Set default tangent type to step" 1500)
		--设置默认插值类型为Flat(默认自动) 建议快捷键:
		6:(maxops.setDefaultTangentType #flat #flat;displayTempPrompt "Set default tangent type to flat" 1500)
		--设置视口着色方式为Clay黏土 建议快捷键: Ctrl+F3(默认为空) 建议快捷键:
		7:((NitrousGraphicsManager.GetActiveViewportSetting()).VisualStyleMode = #Clay;displayTempPrompt "Set Visual Style Mode as Clay" 1500)
		--设置视口着色方式为Shaded着色 建议快捷键: Alt+F3(默认为切换吸附轴约束)
		8:((NitrousGraphicsManager.GetActiveViewportSetting()).VisualStyleMode = #Shaded;displayTempPrompt "Set Visual Style Mode as Shaded" 1500)
		--建议快捷键: Shift+B
		9:(local v = NitrousGraphicsManager.GetActiveViewportSetting(),s = v.ShowEdgedFacesEnabled;v.ShowEdgedFacesEnabled = not s;hideByCategory.bones = not hideByCategory.bones;windows.processPostedMessages();v.ShowEdgedFacesEnabled = s;displayTempPrompt "hide bones toggle" 1500)
		--切换选择物体的Box模式,优先全部勾选,建议快捷键 Ctrl+B
-- 		10:(sel = getcurrentselection(); state = sel[1].boxmode; for i in sel where i.boxmode != state do exit with state = false;sel.boxmode = not state)
		10:($.boxmode = (for i in getcurrentselection() where i.boxmode do exit with false) == ok)
		--跨场景复制物体,建议快捷键 Ctrl+Shift+C
		11:(local sel = getCurrentSelection(); if sel.count>0 do saveNodes sel (getdir #autoback + "\\copyNodesBuffer.max"))
		--跨场景复制物体,建议快捷键 Ctrl+Shift+V
		12:(mergemaxfile (getdir #autoback + "\\copyNodesBuffer.max") #select)
		--设置父物体,建议快捷键 Ctrl+P
		13:(local sel = getcurrentselection(),count = sel.count,prt = sel[count]; if findItem sel prt.parent > 0 do prt.parent = undefined; for i = 1 to count - 1 do sel[i].parent = prt)
		--顺次父物体,建议快捷键 Ctrl+Shift+P
		14:(local sel = getcurrentselection(),count = sel.count; for i in sel where findItem sel i.parent > 0 do i.parent = undefined; for i = 1 to count - 1 do sel[i].parent = sel[i+1])
		--断开父物体,建议快捷键 Alt+P
		15:($.parent = undefined)
		--材质着色和对象着色切换,建议快捷键 Ctrl+Q(底版本时,将 选择相似 设置为 Ctrl+Shift+A)
 		16:(displayColor.shaded = if displayColor.shaded == #object then #material else #object)
		--切换轨迹显示,建议快捷键:Alt+T
		17:($.showTrajectory = (for i in getcurrentselection() where i.showTrajectory do exit with false) == ok) --循环自动退出,则表示没有轨迹,全部显示,否则优先全部取消
	)
)catch(print (val as string+"异常"))
--设置快捷键
