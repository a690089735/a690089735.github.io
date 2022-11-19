/****************************************************************************************
	Set Objects' Animation Range v1.2
	
	By Ofer Zelichover (c) 3/2002 
	ofer_z@hotmail.com  www.tdp.nu/ofer
----------------------------------------------------------------------------------------	

This script comes with no waranty!
Although I tried ths script and couldn't find any problems with it, I can in no way be 
held responsible for any kind of loss or damage, whether direct or indirect, due  to the 
use of this script.

----------------------------------------------------------------------------------------

Description:
-------------
 Changes the animation range of all wired controllers in the scene to the active time
 range.

*****************************************************************************************/

try(destroyDialog setWireRanges) catch()

rollout setWireRanges "Set Objects Animation Range 1.2"
(
-- Local Variables Declerations
--------------------------------
	local objs = objects
	local range = animationRange
	local contCounter = 0


-- GUI
--------
	group "Objects to process: " (
		radiobuttons objsToProc "" labels:#("All Objects                  ","Selected Objects  ")
	)
	group "Controllers to process: " (
		checkbox doWireCont "Wire Controllers." checked:true
		checkbox doScriptCont "Script Controllers." checked:true
		checkbox doExpCont "Expression Controllers." checked:true
	)
	group "Animation Range: " (
		radiobuttons animRange "" labels:#("Active time segment   ","Custom range        ")
		spinner startTime "Start frame: " fieldWidth:60 range:[-1e9,1e9,animationRange.start] type:#integer enabled:false across:2
		spinner endTime "End frame: " fieldWidth:60 range:[-1e9,1e9,animationRange.end] type:#integer enabled:false
	)
	group "Progress: " (
		label processed "Objects processed:" align:#left
		label contCount "Controllers changed:" align:#left
		progressBar progBar offset:[0,5]
	)
	button go "Set Objects Animation Range" width:190 pos:[5,290] across:2
	button close "Close" width:80 pos:[215,290]
	
-- Functions
-------------
	fn isWireController cont = 	findString (classOf cont as string) "wire" != undefined
	fn isScriptController cont = findString (classOf cont as string) "script" != undefined
	fn isExpressionController cont = findString (classOf cont as string) "expression" != undefined

	fn recursControllers cont = (
		if cont == undefined then return undefined
		local i = 1
		while (recursControllers cont[i]==OK) do (
			local doSetRanges = false
			case of (
				(isWireController cont[i].controller): doSetRanges = doWireCont.state
				(isScriptController cont[i].controller): doSetRanges = doScriptCont.state
				(isExpressionController cont[i].controller): doSetRanges = doExpCont.state
			)
			if doSetRanges then (
				setTimeRange cont[i].controller range
				contCounter += 1
				contCount.text =  ("Controllers changed: " + contCounter as string)
			)
			i += 1
		)
		return OK
	)
	
	fn enableGoBtn = (
		local enbl = false
		enbl = enbl OR doWireCont.state
		enbl = enbl OR doScriptCont.state
		go.enabled = enbl
	)

-- Event Handlers
-------------------
	on objsToProc changed state do (
		case state of (
			1: objs = objects
			2: objs = selection
		)
	)
	
	on doWireCont changed state do enableGoBtn()
	on doScriptCont changed state do enableGoBtn()

	on animRange changed state do (
		case state of (
			1: (startTime.enabled=false; endTime.enabled=false; range = animationRange)
			2: (startTime.enabled=true; endTime.enabled=true; range = interval startTime.value endTime.value)
		)
	)

	on startTime changed value do (
		if value>=endTime.value then 
			endTime.value=value+1
		if animRange.state==2 then 
			range = interval startTime.value endTime.value
	)
	
	on endTime changed value do (
		if value<=startTime.value then 
			startTime.value=value-1
		if animRange.state==2 then 
			range = interval startTime.value endTime.value
	)

	on go pressed do (
		n = 0
		contCounter = 0
		progBar.value = 0
		contCount.text =  ("Controllers changed: " + contCounter as string)
		for o in objs do (
			n+=1
			processed.text = ("Objects processed: "+n as string+" / "+objs.count as string)
			progBar.value = (100.*n/objs.count as float) as integer
			recursControllers o
		)
	)
	
	on close pressed do (destroyDialog setWireRanges; gc())
) -- end setWireRanges rollout

createDialog setWireRanges 300 310 style:#(#style_border, #style_sysmenu, #style_titlebar, #style_minimizebox)

