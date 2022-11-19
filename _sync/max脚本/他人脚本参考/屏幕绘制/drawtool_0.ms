persistent global DTdrawArr
persistent global DTMousePos
persistent global DTShowPoints

global drawToolRoll
global DTcallbackRun

struct DT_paintOnScreen
(
	fn pointToScreen X Y viewX viewY returnDelta:false =
	(
		viewSize = getViewSize()
		if displaySafeFrames then factor = (renderWidth as float * viewSize.y) / renderHeight
			else factor = viewSize.x
		if factor < viewSize.x then
		(
			aspect = factor / viewX
			deltaX = (viewSize.x - factor) / 2.0
			deltaY = (viewSize.y - ((viewY * factor) / viewX)) / 2.0
		)
		else
		(
			aspect = viewSize.x / viewX
			deltaX = 0.0
			deltaY = (viewSize.y - ((viewY * viewSize.x) / viewX)) / 2.0
		)
		
		if returnDelta do return [deltaX, deltaY, aspect]
		
		X1 = (X * aspect) + deltaX
		Y1 = (Y * aspect) + deltaY
		
		return [X1 as integer, Y1 as integer]
	),
	
	fn printPoints =
	(
		try(
			if DTShowPoints == true do
			(
				viewSize = getViewSize()
				for i = 2 to DTdrawArr.count do
				(
					if DTdrawArr[i-1] != "stop" and DTdrawArr[i] != "stop" do
					(
						gw.setColor #line DTdrawArr[i-1][5]
						XY1 = DT_paintOnScreen.pointToScreen DTdrawArr[i-1][1] DTdrawArr[i-1][2] DTdrawArr[i-1][3] DTdrawArr[i-1][4]
						XY2 = DT_paintOnScreen.pointToScreen DTdrawArr[i][1] DTdrawArr[i][2] DTdrawArr[i][3] DTdrawArr[i][4]
						gw.wPolyline #([XY1.x, XY1.y, 0], [XY2.x, XY2.y, 0]) false
					)
				)
				if drawToolRoll.bErase.checked do
				(
					viewSize = getViewSize()
					pos = mouse.pos
					pntOnScreenXY = DT_paintOnScreen.pointToScreen pos.x pos.y viewSize.x viewSize.y
					if displaySafeFrames do
					(
						delta = DT_paintOnScreen.pointToScreen pos.x pos.y viewSize.x viewSize.y returnDelta:true
						pntOnScreenXY = [(pntOnScreenXY.x - delta.x) / delta.z, (pntOnScreenXY.y - delta.y) / delta.z]
					)
					sz = drawToolRoll.spEraserRad.value / 2
					pntArr = #([pntOnScreenXY.x - sz, pntOnScreenXY.y - sz, 0],
						[pntOnScreenXY.x - sz, pntOnScreenXY.y + sz, 0],
						[pntOnScreenXY.x + sz, pntOnScreenXY.y + sz, 0],
						[pntOnScreenXY.x + sz, pntOnScreenXY.y - sz, 0])
					gw.setColor #line red
					gw.wPolyline pntArr true
				)
				completeRedraw()
				gw.enlargeUpdateRect #whole
				gw.updateScreen()
			)
		)catch()
	),
	
	fn setMousePoint =
	(
		viewSize = getViewSize()
		pos = mouse.pos
		if DTMousePos != pos do
		(
			undoBuffer = #()
			delta = [0,0,1]
			if displaySafeFrames do delta = DT_paintOnScreen.pointToScreen pos.x pos.y viewSize.x viewSize.y returnDelta:true
			append DTdrawArr #((pos.x - delta.x) / delta.z, (pos.y - delta.y) / delta.z, viewSize.x, viewSize.y, drawToolRoll.bColor.color)
			if DTdrawArr.count > 2 do
			(
				--if DTdrawArr.count > 5000 do deleteItem DTdrawArr 1
				DTMousePos = pos
			)
		)
		DT_paintOnScreen.printPoints()
	),
	
	fn findPointsToErase =
	(
		viewSize = getViewSize()
		pos = mouse.pos
		pntOnScreenXY = DT_paintOnScreen.pointToScreen pos.x pos.y viewSize.x viewSize.y
		if displaySafeFrames do
		(
			delta = DT_paintOnScreen.pointToScreen pos.x pos.y viewSize.x viewSize.y returnDelta:true
			pntOnScreenXY = [(pntOnScreenXY.x - delta.x) / delta.z, (pntOnScreenXY.y - delta.y) / delta.z]
		)
		for p = DTdrawArr.count - 1 to 1 by -1 do
		(
			if p > DTdrawArr.count - 1 do continue
			if DTdrawArr[p] == "stop" do continue
			XY = DT_paintOnScreen.pointToScreen DTdrawArr[p][1] DTdrawArr[p][2] DTdrawArr[p][3] DTdrawArr[p][4]
			if abs(XY.x - pntOnScreenXY.x) < drawToolRoll.spEraserRad.value / 2 and abs(XY.y - pntOnScreenXY.y) < drawToolRoll.spEraserRad.value / 2 do
			(
					pntStart = p
					do pntStart -= 1 while (pntStart > 1 and DTdrawArr[pntStart] != "stop")
					pntEnd = p
					while (pntEnd <= DTdrawArr.count and DTdrawArr[pntEnd] != "stop") do pntEnd += 1
				if p > pntStart+1 and p < pntEnd-1 do (DTdrawArr[p] = "stop"; continue)
				deleteItem DTdrawArr p
					pntStart = p
					do pntStart -= 1 while (pntStart > 1 and DTdrawArr[pntStart] != "stop")
					pntEnd = p
					while (pntEnd <= DTdrawArr.count and DTdrawArr[pntEnd] != "stop") do pntEnd += 1
				if pntEnd - pntStart < 3 do
				(
					for i = pntEnd to pntStart+1 by -1 do deleteItem DTdrawArr i
					continue
				)
			)
		)
		if DTdrawArr.count < 3 do DTdrawArr = #()
		DT_paintOnScreen.printPoints()
	),

	fn PaintFn massege intRay obj faceNumber shift ctrl alt = 
	(
		returnValue = case massege of
		(
			#freeMove:
			(
				if drawToolRoll.bErase.checked then (DT_paintOnScreen.printPoints(); #continue)
				else
				(
					if DTdrawArr.count > 0 and DTdrawArr[DTdrawArr.count] != "stop" do append DTdrawArr "stop"
					if drawToolRoll.bDraw.checked == true then #continue else undefined
				)
			)
			#mouseAbort:
			(
				if DTdrawArr.count > 0 and DTdrawArr[DTdrawArr.count] != "stop" do append DTdrawArr "stop"
				drawToolRoll.tm.active = false
				drawToolRoll.bDraw.checked = false
				drawToolRoll.bErase.checked = false
				undefined
			)
			#mouseMove:
			(
				if drawToolRoll.bErase.checked then DT_paintOnScreen.findPointsToErase()
					else DT_paintOnScreen.setMousePoint()
				if DTShowPoints == true then #continue else undefined
			)
			#mousePoint:
			(
				if drawToolRoll.bErase.checked then DT_paintOnScreen.findPointsToErase()
					else DT_paintOnScreen.setMousePoint()
				if DTShowPoints == true then #continue else undefined
			)
		)
		returnValue
	),
	
	fn clearAllPaint =
	(
		DTdrawArr = #()
		completeRedraw()
	),
	
	fn hidePaint =
	(
		DTShowPoints = false
		gw.clearScreen (box2 [0,0] (getViewSize()))
		completeRedraw()
	),

	fn showPaint =
	(
		DTShowPoints = true
		completeRedraw()
	),

	fn startPaint =
	(
		DTShowPoints = true
		mousetrack trackCallback:DT_paintOnScreen.PaintFn
		completeRedraw()
	)
)

fn DTsetZero =
(
	if (persistents.isPersistent #DTShowPoints) == false or DTShowPoints == undefined do persistent global DTShowPoints = true
	if (persistents.isPersistent #DTdrawArr) == false or DTdrawArr == undefined do persistent global DTdrawArr = #()
	DT_paintOnScreen.printPoints()
	if DTdrawArr.count > 1 do drawToolRoll.bColor.color = DTdrawArr[DTdrawArr.count-1][5]
	drawToolRoll.bShow.checked = DTShowPoints
)

fn DTresetVals =
(
	persistent global DTShowPoints = true
	persistent global DTdrawArr = #()
	DT_paintOnScreen.printPoints()
	if DTdrawArr.count > 1 do drawToolRoll.bColor.color = DTdrawArr[DTdrawArr.count-1][5]
	drawToolRoll.bShow.checked = DTShowPoints
)

try(destroyDialog drawToolRoll)catch()

rollout drawToolRoll "Draw tool 1.0" width:176 height:96
(
	checkbutton bDraw "Draw" pos:[8,8] width:80 height:16
	colorPicker bColor "" pos:[88,8] width:80 height:16 color:(color 0 255 0)
	checkbutton bErase "Erase" pos:[8,24] width:80 height:16
	spinner spEraserRad "size:" pos:[104,26] width:64 height:16 range:[1,10000,40] type:#integer
	button bUndo "Undo" pos:[8,48] width:80 height:16
	button bRedo "Redo" pos:[88,48] width:80 height:16
	checkbutton bShow "Show" pos:[8,72] width:80 height:16 toolTip:"Select camera and target from list"
	button bClear "Clear all" pos:[88,72] width:80 height:16 toolTip:"Select camera and target from list"
	Timer tm "" pos:[152,0] width:24 height:24 interval:100 active:false

	local undoBuffer = #()
	local drawBuffer = #()

	on drawToolRoll open do
	(
		unregisterRedrawViewsCallback DT_paintOnScreen.printPoints
		registerRedrawViewsCallback DT_paintOnScreen.printPoints
		callbacks.addscript #systemPostNew "DTsetZero()" id:#Draw_tool
		callbacks.addscript #systemPostReset "DTsetZero()" id:#Draw_tool
		callbacks.addscript #filePostOpen "DTsetZero()" id:#Draw_tool
		callbacks.addscript #filePreOpen "DTresetVals()" id:#Draw_tool
		DTsetZero()
		if DTdrawArr.count > 1 do bColor.color = DTdrawArr[DTdrawArr.count-1][5]
		bShow.checked = DTShowPoints
	)
	
	on bDraw changed arg do
	(
		if arg do
		(
			tm.active = true
			DT_paintOnScreen.startPaint()
			if bDraw.checked do bErase.checked = false
		)
	)
	
	on bErase changed arg do
	(
		if arg do
		(
			tm.active = true
			DT_paintOnScreen.startPaint()
			if bErase.checked do bDraw.checked = false
		)
	)
	
	on bUndo pressed do
	(
		try(
			if DTdrawArr.count > 0 do
			(
				append undoBuffer "stop"
				deleteItem DTdrawArr DTdrawArr.count
				for i = DTdrawArr.count to 1 by -1 do
				(
					if DTdrawArr[i] != "stop" then
					(
						append undoBuffer DTdrawArr[i]
						deleteItem DTdrawArr i
					)
					else exit
				)
				completeRedraw()
			)
		)catch()
	)

	on bRedo pressed do
	(
		if undoBuffer.count > 1 do
		(
			for i = undoBuffer.count to 1 by -1 do
			(
				if undoBuffer[i] != "stop" then
				(
					append DTdrawArr undoBuffer[i]
					deleteItem undoBuffer i
				)
				else exit
			)
			deleteItem undoBuffer undoBuffer.count
			append DTdrawArr "stop"
			completeRedraw()
		)
	)
	
	on bClear pressed do
	(
		DT_paintOnScreen.clearAllPaint()
	)
	
	on tm tick do
	(
		if bDraw.checked or bErase.checked do DT_paintOnScreen.startPaint()
	)
	
	on bShow changed arg do
	(
		if arg then DT_paintOnScreen.showPaint()
			else DT_paintOnScreen.hidePaint()
	)
)

createDialog drawToolRoll

-- if DTcallbackRun != true do
-- (
-- 	registerRedrawViewsCallback DT_paintOnScreen.printPoints
-- 	DTcallbackRun = true
-- )

fn claerCallback = --清除影响播放动画的回调,暂时不知道是哪个出了问题,清除后再不能绘制了
(
	unregisterRedrawViewsCallback DT_paintOnScreen.printPoints
	callbacks.removeScripts id:#Draw_tool
)--claerCallback()