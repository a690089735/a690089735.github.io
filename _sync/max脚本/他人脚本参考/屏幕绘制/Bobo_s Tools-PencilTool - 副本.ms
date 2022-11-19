(
	global PencilTool_Dialog
	try(destroyDialog PencilTool_Dialog)catch()
	local theIniFile = getDir #plugcfg + "\\pencilTool.ini"
	persistent global PencilTool_theLinesArray 
	persistent global PencilTool_theColorsArray 
	
	local allObjects
	local frozenMode 
	local showAsGrey 

	if heapsize < 64*1024*1024 do heapsize += 64*1024*1024 --increase memory
	
	fn clearAllFrames =
	(
		PencilTool_theLinesArray = #()
		PencilTool_theColorsArray = #()
		for t = animationrange.start to animationrange.end do
		(
			append PencilTool_theLinesArray #()
			append PencilTool_theColorsArray #()
		)	
	)
	
	if PencilTool_theLinesArray == undefined do clearAllFrames()
	if PencilTool_theColorsArray == undefined do 
	(
		PencilTool_theColorsArray = #()
		for t = animationrange.start to animationrange.end do
			append PencilTool_theColorsArray #()
	)	
	
	global theTime = 1 --current time
	
	rollout PencilTool_Dialog "Screen Pencil Tool"
	(
		
		local isDrawing = false
		timer tmr_timer active:true interval:20
		
		group "Time And Onion Skinning"
		(
			spinner spn_timeOffset "Time Offset" range:[-1000,1000,0] type:#integer fieldwidth:50
			checkbutton chk_onionSkin "Onion Skin" width:80 checked:false across:3 align:#left
			spinner spn_OnionSkinSteps "#" range:[1,5,1] type:#integer fieldwidth:35 align:#right
			spinner spn_OnionSkinIntensity "Dim" range:[0,10,0.5] scale:0.01 fieldwidth:35 align:#right
		)	
		
		group "Color Controls"
		(
			colorpicker clr_pencilcolor "Pencil Color" color:red modal:false  fieldwidth:148
		
			button btn_black width:20 height:20 images:#((bitmap 20 20 color:black), undefined , 1,1,1,1,1 ) align:#right across:8
			button btn_red width:20 height:20 images:#((bitmap 20 20 color:red),  undefined , 1,1,1,1,1 ) align:#right
			button btn_green width:20 height:20 images:#((bitmap 20 20 color:green),  undefined , 1,1,1,1,1 ) align:#right
			button btn_blue width:20 height:20 images:#((bitmap 20 20 color:blue),  undefined , 1,1,1,1,1 ) align:#right
			button btn_cyan width:20 height:20 images:#((bitmap 20 20 color:(color 0 255 255)),  undefined , 1,1,1,1,1 ) align:#right
			button btn_yellow width:20 height:20 images:#((bitmap 20 20 color:yellow ),  undefined, 1,1,1,1,1 ) align:#right
			button btn_magenta width:20 height:20 images:#((bitmap 20 20 color:(color 255 0 255)),  undefined, 1,1,1,1,1 ) align:#right
			button btn_white width:20 height:20 images:#((bitmap 20 20 color:white),  (bitmap 20 20 bgcolor:white) , 1,1,1,1,1 ) align:#right
		)	
		
		group "Stroke and Frame Management"
		(
			button btn_clearAllFrames "Clear All Frames" width:105 align:#left across:2
			button btn_clearFrame "Clear Frame" width:105  align:#right

			button btn_instancePrevious "Instance Prev.Frame" width:105 align:#left across:2
			button btn_copyPrevious "Copy Prev.Frame" width:105 align:#right
			
			button btn_clearStroke "Clear Stroke"  width:105 align:#left across:2
			spinner spn_strokeNumber "Stroke #:" fieldwidth:30 type:#integer range:[0,10000,0] offset:[0,2] align:#right
			button btn_clearLast "Clear Last Stroke"  width:105 align:#left across:2
			button btn_copyStroke "Copy Str. Next Frm."  width:105 align:#right
		)
		
		button btn_frameBack "<< Frame Back" width:105 across:2 align:#left 
		button btn_frameForward "Frame Forward >>" width:105 align:#right
		

		fn updateTime =
		(
			theTime = currentTime.frame as integer + 1 - (animationRange.start.frame as integer) - spn_timeOffset.value
			if theTime > PencilTool_theLinesArray.count do theTime = PencilTool_theLinesArray.count 
			if theTime < 1 do theTime = 1
			if PencilTool_theLinesArray[theTime] == undefined do
			(
				PencilTool_theLinesArray[theTime] = #()
				PencilTool_theColorsArray[theTime] = #()
			)
		)
		
		fn updateLine =
		(
			updateTime()
			gw.setTransform (viewport.getTM())
			if chk_onionSkin.checked do
			(
				for t = 1 to spn_OnionSkinSteps.value do
				(
					if theTime-t > 0 do
					(
						for i = 1 to PencilTool_theLinesArray[theTime-t].count do
						(
							try
							(
								gw.setColor #line (PencilTool_theColorsArray[theTime-t][i]*spn_OnionSkinIntensity.value/t)
								gw.wpolyline PencilTool_theLinesArray[theTime-t][i] false 
							)catch()	
						)	
					)	
				)	
			)
			theCount = PencilTool_theLinesArray[theTime].count
			spn_strokeNumber.range = [0, theCount,spn_strokeNumber.value]
			for i = 1 to theCount do
			(
				
				if i == spn_strokeNumber.value then
					try(gw.setColor #line (PencilTool_theColorsArray[theTime][i] *spn_OnionSkinIntensity.value))catch()
				else
					try(gw.setColor #line PencilTool_theColorsArray[theTime][i])catch()
					
				try(gw.wpolyline PencilTool_theLinesArray[theTime][i] false)catch()
			)	
			gw.enlargeUpdateRect #whole
			gw.updateScreen()	
		)
		
		fn redrawView =
		(
			local lastTime = theTime
			updateTime()
			if lastTime != theTime do max views redraw--gw.clearScreen (Box2 0 0 (getViewSize()).x (getViewSize()).y)
			updateLine()
		)		

		fn updateStrokeColor clr =
		(
			updateTime()
			if spn_strokeNumber.value > 0 then
			(
				PencilTool_theColorsArray[theTime][spn_strokeNumber.value] = clr
				max views redraw
				updateLine()			
			)	
			clr
		)


		on btn_clearAllFrames pressed do 
		(
			clearAllFrames()
			max views redraw
		)	
		
		on btn_clearStroke pressed do
		(
			updateTime()
			if PencilTool_theLinesArray[theTime].count > 0 and  spn_strokeNumber.value > 0 and spn_strokeNumber.value <= PencilTool_theLinesArray[theTime].count do
			(
				deleteItem PencilTool_theLinesArray[theTime] spn_strokeNumber.value
				deleteItem PencilTool_theColorsArray[theTime] spn_strokeNumber.value
			)	
			max views redraw
			updateLine()			
		)
		
		on btn_copyPrevious pressed do
		(
			updateTime()
			if theTime > 1 then
			(
				PencilTool_theLinesArray[theTime] = for i in PencilTool_theLinesArray[theTime-1] collect i
				PencilTool_theColorsArray[theTime] = for i in PencilTool_theColorsArray[theTime-1] collect i
			)
			max views redraw
			updateLine()				
		)
		
		on btn_instancePrevious pressed do
		(
			updateTime()
			if theTime > 1 then
			(
				PencilTool_theLinesArray[theTime] = PencilTool_theLinesArray[theTime-1] 
				PencilTool_theColorsArray[theTime] = PencilTool_theColorsArray[theTime-1] 
			)
			max views redraw
			updateLine()				
		)	
		
		
	
		on btn_copyStroke pressed do
		(	
			updateTime()
			if spn_strokeNumber.value > 0 then
			(
				if PencilTool_theLinesArray[theTime+1] == undefined do
				(
					PencilTool_theLinesArray[theTime+1] = #()
					PencilTool_theColorsArray[theTime+1]  = #()
				)
				PencilTool_theLinesArray[theTime+1][spn_strokeNumber.value] = PencilTool_theLinesArray[theTime][spn_strokeNumber.value] 
				PencilTool_theColorsArray[theTime+1][spn_strokeNumber.value] = PencilTool_theColorsArray[theTime][spn_strokeNumber.value] 
				max views redraw
				updateLine()			
			)	
		)		

		on  btn_black pressed do clr_pencilcolor.color = (updateStrokeColor  black)
		on  btn_red pressed do clr_pencilcolor.color = (updateStrokeColor red )
		on  btn_green pressed do clr_pencilcolor.color = (updateStrokeColor green)
		on  btn_blue pressed do clr_pencilcolor.color = (updateStrokeColor blue)
		on  btn_cyan pressed do clr_pencilcolor.color = (updateStrokeColor (color 0 255 255))
		on  btn_yellow pressed do clr_pencilcolor.color = (updateStrokeColor yellow )
		on  btn_magenta pressed do clr_pencilcolor.color = (updateStrokeColor (color 255 0 255))
		on  btn_white pressed do clr_pencilcolor.color = (updateStrokeColor white )
		
		on clr_pencilcolor changed clr do updateStrokeColor clr
		
		
		on btn_frameBack pressed do 
		(
			if keyboard.ShiftPressed then sliderTime = animationrange.start else sliderTime -=1
			max views redraw
		)	
		on btn_frameForward pressed do 
		(
			if keyboard.ShiftPressed then sliderTime = animationrange.end else sliderTime +=1
			max views redraw
		)	
		
		on chk_onionSkin changed state do updateLine()
		on spn_OnionSkinIntensity changed val do updateLine()
		on spn_OnionSkinSteps changed val do (max views redraw ; updateLine() )
		
		on btn_clearLast pressed do
		(
			updateTime()
			if PencilTool_theLinesArray[theTime].count > 0 then
			(
				deleteItem PencilTool_theLinesArray[theTime] PencilTool_theLinesArray[theTime].count
				deleteItem PencilTool_theColorsArray[theTime] PencilTool_theColorsArray[theTime].count
			)	
			max views redraw
			updateLine()
		)
		
		on btn_clearFrame pressed do
		(
			updateTime()
			PencilTool_theLinesArray[theTime] = #()
			PencilTool_theColorsArray[theTime] = #()
			updateLine()
			max views redraw
		)	
		on tmr_timer tick do
		(
			if (mouse.buttonstates)[1] then
			(
				updateTime()
				if not isDrawing do 
				(
					append PencilTool_theLinesArray[theTime] #()
					append PencilTool_theColorsArray[theTime] clr_pencilcolor.color
				)	
				isDrawing = true
				thePos = mouse.pos
				append PencilTool_theLinesArray[theTime][PencilTool_theLinesArray[theTime].count] [thePos.x, thePos.y, 0]
				updateLine()
			)	
			else
			(
				isDrawing = false
			)
		)
		on PencilTool_Dialog moved pos do
			setIniSetting theIniFile "Dialog" "Position" (pos as string)
			
		on PencilTool_Dialog open do
		(
			allObjects = objects as array
			frozenMode = for o in allObjects collect o.isFrozen
			showAsGrey = for o in allObjects collect o.showFrozenInGray
			objects.showFrozenInGray = false
			objects.isFrozen = true
			
			toolmode.commandmode = #select
			maxops.paintSelBrushSize = 5
			registerRedrawViewsCallback redrawView 
			updateLine()
		)	
	
		on PencilTool_Dialog close do
		(
			for o = 1 to allObjects.count do allObjects[o].isFrozen = frozenMode[o]
			for o = 1 to allObjects.count do allObjects[o].showFrozenInGray= showAsGrey [o]
			unregisterRedrawViewsCallback redrawView 
			max views redraw 
		)	
	)
	
	thePos = execute (getIniSetting theIniFile "Dialog" "Position")
	if thePos == OK then thePos = [100,100]
	createDialog PencilTool_Dialog 240 310 thePos.x thePos.y
)
