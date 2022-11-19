macroScript ScrubbyDoo category:"Bobo_s Tools"
(

----------------------------------------------------------------------------------------
--   Script Name:	ScrubbyDoo
--	 Version:		v0.1.4
--	 Started:       2003/07/15
--	 Last Modified: 2003/07/18
--   Description:	Scrubbing of Background Animation in Viewport
--	 Documentation: Visit http://www.scriptspot.com/bobo/darkmoon/ScrubbyDoo
--	 Code by:		Borislav Petrov [Boboland]		bobo@email.archlab.tuwien.ac.at
----------------------------------------------------------------------------------------

global ScrubbyDoo_floater
local ScrubbyDoo_floater_width = 1000.0

local ScrubbyDoo_BgColor = (color 200 200 220)
getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "Background" 
if getINI != "" then ScrubbyDoo_BgColor = execute getINI

local ScrubbyDoo_LinesColor = (color 180 180 220)
getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "Lines" 
if getINI != "" then ScrubbyDoo_LinesColor = execute getINI


local ScrubbyDoo_FreeMarkerColor = (color 100 255 100)
getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "FreeMarker" 
if getINI != "" then ScrubbyDoo_FreeMarkerColor = execute getINI

local ScrubbyDoo_ScrubbingMarkerColor = (color 255 100 100)
getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "ScrubbingMarker" 
if getINI != "" then ScrubbyDoo_ScrubbingMarkerColor = execute getINI

local ScrubbyDoo_StaticMarkerColor = (color 100 100 255)
getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "StaticMarker" 
if getINI != "" then ScrubbyDoo_StaticMarkerColor = execute getINI

local ScrubbyDoo_freemarkerwidth = 3
getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "FreeMarkerWidth" 
if getINI != "" then ScrubbyDoo_freemarkerwidth = execute getINI

local ScrubbyDoo_staticmarkerwidth = 3
getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "StaticMarkerWidth" 
if getINI != "" then ScrubbyDoo_staticmarkerwidth = execute getINI



makedir ((getDir #preview)+"/ScrubbyDooCache")

fn restorePosition =
(
  getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "Position" 
  if getINI != "" then 
  	execute getINI
	else
	[1,100]
)	
fn restoreSize =
(
  getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "Width" 
  if getINI != "" then ScrubbyDoo_floater_width = execute getINI
)	

rollout about_scrubbydoo "About..."
(
label about01 "ScrubbyDoo"
label about02 "version 0.1.4"
label about03 "July 18, 2003"
label about04 "Code by Borislav Petrov"
label about05 "http://www.scriptspot.com/bobo"
label about06 "bobo@email.archlab.tuwien.ac.at"
)

restoreSize()

local scrubby_background
local scrubby_drawlines 
local scrubby_backplane
local scrubby_frontplane

local cache_size = 256	
local cache_extension = ".tga"
local LButtonPressed = false
local MButtonPressed = false
local RButtonPressed = false
local start_time = -1000
local old_start_time = -1000
local end_time = -1000
local old_end_time = -1000
local normal_segment = 1
local old_background = backgroundImageFileName
local scrub_array = #()


local freehand_mode_toggle = false

local oldpos = [0.0,0.0]
local ready_to_resize = false 





	
fn InitializeGraphicsWindow = 	
(
	scrubby_background = bitmap ScrubbyDoo_floater_width 40 
	scrubby_drawlines = bitmap ScrubbyDoo_floater_width 1 color:ScrubbyDoo_BgColor
	scrubby_backplane = bitmap ScrubbyDoo_floater_width 1 color:ScrubbyDoo_BgColor
	scrubby_frontplane = bitmap ScrubbyDoo_floater_width 1 color:ScrubbyDoo_BgColor
	copy scrubby_drawlines scrubby_background 
)	


rollout scrubbydoo_setup "ScrubbyDoo Preferences"
(
	colorpicker background_color "Background" align:#right color:ScrubbyDoo_BgColor modal:false fieldwidth:50
	colorpicker lines_color "Lines " align:#right color:ScrubbyDoo_LinesColor modal:false fieldwidth:50
	spinner freemarker_width "Width" align:#left across:2 fieldwidth:35 range:[1,20,ScrubbyDoo_freemarkerwidth] type:#integer 
	colorpicker free_color "Marker Free " align:#right color:ScrubbyDoo_FreeMarkerColor modal:false fieldwidth:50
	spinner staticmarker_width "Width" align:#left across:2 fieldwidth:35 range:[1,20,ScrubbyDoo_staticmarkerwidth] type:#integer
	colorpicker static_color "Marker Static " align:#right color:ScrubbyDoo_StaticMarkerColor modal:false fieldwidth:50
	colorpicker scrubbing_color "Marker Scrubbing " align:#right color:ScrubbyDoo_ScrubbingMarkerColor modal:false fieldwidth:50
	
	button reset_to_default "Reset To Factory Defaults" width:220
	fn dynamic_update =
	(
		InitializeGraphicsWindow()
		try
		(
			ScrubbyDoo_floater.update_background()
			ScrubbyDoo_floater.update_mouse_pointer oldpos
		)catch()
	)
	
	on reset_to_default pressed do
	(
		q = querybox "Are you sure you want to reset to defaults?"
		if q then
		(
			background_color.color = ScrubbyDoo_BgColor = (color 200 200 220)
			lines_color.color = ScrubbyDoo_LinesColor = (color 180 180 220)
			free_color.color = ScrubbyDoo_FreeMarkerColor = (color 100 255 100)
			scrubbing_color.color = ScrubbyDoo_ScrubbingMarkerColor = (color 255 100 100)
			static_color.color = ScrubbyDoo_StaticMarkerColor = (color 100 100 255)
			freemarker_width.value = ScrubbyDoo_freemarkerwidth = 3
			staticmarker_width.value = ScrubbyDoo_staticmarkerwidth = 3
			
			SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "Background" (ScrubbyDoo_BgColor as string)
			SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "Lines" (ScrubbyDoo_LinesColor as string)
			SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "FreeMarker" (ScrubbyDoo_FreeMarkerColor as string)
			SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "ScrubbingMarker" (ScrubbyDoo_ScrubbingMarkerColor as string)
			SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "StaticMarker" (ScrubbyDoo_StaticMarkerColor as string)
			SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "StaticMarkerWidth" (ScrubbyDoo_freemarkerwidth as string)
			SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "FreeMarkerWidth" (ScrubbyDoo_staticmarkerwidth as string)
			dynamic_update()
		)
	)
	
	on background_color changed val do
	(
		ScrubbyDoo_BgColor = val
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "Background" (val as string)
		dynamic_update()
	)
	
	on lines_color changed val do
	(
		ScrubbyDoo_LinesColor= val
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "Lines" (val as string)
		dynamic_update()		
	)
	
	on free_color changed val do
	(
		ScrubbyDoo_FreeMarkerColor = val
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "FreeMarker" (val as string)
		dynamic_update()		
	)	

	on scrubbing_color changed val do
	(
		ScrubbyDoo_ScrubbingMarkerColor = val
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "ScrubbingMarker" (val as string)
		dynamic_update()		
	)	
	
	on static_color changed val do
	(
		ScrubbyDoo_StaticMarkerColor = val
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Colors" "StaticMarker" (val as string)
		dynamic_update()		
	)	
		
	on staticmarker_width  changed val do
	(
		ScrubbyDoo_StaticMarkerWidth = val
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "StaticMarkerWidth" (val as string)
		dynamic_update()		
	)

	on freemarker_width  changed val do
	(
		ScrubbyDoo_FreeMarkerWidth = val
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "FreeMarkerWidth" (val as string)
		dynamic_update()		
	)
		
)

fn InitUtilityDialog =
(
	getINI = GetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Cache" "Resolution" 
	if getINI != "" then cache_size = execute getINI

	getINI = getINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Controls" "FreehandMode" 
	if getINI != "" then freehand_mode_toggle = execute getINI

	try(destroyDialog ScrubbyDoo_floater)catch()
 	InitializeGraphicsWindow()
	createDialog ScrubbyDoo_floater ScrubbyDoo_floater_width 60 pos:(restorePosition()) style:#(#style_titlebar, #style_toolwindow, #style_sysmenu, #style_minimizebox, #style_resizing) 
	ScrubbyDoo_floater.initializeBackground()
)


InitializeGraphicsWindow ()


rcMenu ScrubbyDoo_RCM 
(
	subMenu "Cache"
	(
		menuItem cache_update_128 "Cache 128x128"
		menuItem cache_update_256 "Cache 256x256"
		menuItem cache_update_512 "Cache 512x512"	
		
		separator cache_sep1	

		menuItem cache_rebuild_128 "Force Rebuild 128x128"
		menuItem cache_rebuild_256 "Force Rebuild 256x256"
		menuItem cache_rebuild_512 "Force Rebuild 512x512"			
		separator cache_sep2
		menuItem cache_clear "Clear Disk Caches"
	)
	
	subMenu "Setup"
	(
		menuItem open_dialog "Background Settings..."
		separator setup_sep1		
		menuItem toggle_freehandmode "Toggle Freehand Mode"
		separator setup_sep2
		menuItem scrubbydoo_prefs "Preferences..."
	)
	
	subMenu "About"
	(
		menuItem show_help "Help..."
		menuItem show_about "About ScrubbyDoo..."
--		separator setup_sep1		
	)	
	
	on scrubbydoo_prefs picked do
	(
	  try(destroyDialog scrubbydoo_setup)catch()
	  createDialog scrubbydoo_setup 240 160
	)
	
	on show_about picked do 
	(
		try(destroydialog about_scrubbydoo)catch()
		createDialog about_scrubbydoo 200 120
	)

	on toggle_freehandmode picked do 
	(
		freehand_mode_toggle = not freehand_mode_toggle
		ScrubbyDoo_floater.freehand_mode.checked = freehand_mode_toggle
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Controls" "FreehandMode" (freehand_mode_toggle as string)
	)


	on show_help picked do 
	(
		shellLaunch "http://www.scriptspot.com/bobo/darkmoon/ScrubbyDoo" ""
	)
	
	
	on open_dialog picked do 
	(
		LButtonPressed = false
		backgroundimagefilename = old_background
		max background
	)	

	
	on cache_rebuild_128 picked do
	(
		LButtonPressed = false
		backgroundimagefilename = old_background

		delete_files = getFiles ((getDir #preview)+"/ScrubbyDooCache/"+(getfilenamefile old_background)+"_128_*"+cache_extension)
		for i in delete_files do
			deleteFile i
		cache_size = 128	
		ScrubbyDoo_floater.initializeBackground()
	)	
	on cache_rebuild_256  picked do
	(
		LButtonPressed = false
		backgroundimagefilename = old_background
	
		delete_files = getFiles ((getDir #preview)+"/ScrubbyDooCache/"+(getfilenamefile old_background)+"_256_*"+cache_extension)
		for i in delete_files do
			deleteFile i
		cache_size = 256	
		ScrubbyDoo_floater.initializeBackground()
	)
	
	on cache_rebuild_512 picked do
	(
		LButtonPressed = false
		backgroundimagefilename = old_background

		delete_files = getFiles ((getDir #preview)+"/ScrubbyDooCache/"+(getfilenamefile old_background)+"_512_*"+cache_extension)
		for i in delete_files do
			deleteFile i
		cache_size = 512	
		ScrubbyDoo_floater.initializeBackground()
	)	
	

	on cache_update_128 picked do
	(
		LButtonPressed = false
		backgroundimagefilename = old_background

		cache_size = 128
		ScrubbyDoo_floater.initializeBackground()
	)
	on cache_update_256 picked do
	(
		LButtonPressed = false
		backgroundimagefilename = old_background
	
		cache_size = 256
		ScrubbyDoo_floater.initializeBackground()
	)
	on cache_update_512 picked do
	(
		LButtonPressed = false
		backgroundimagefilename = old_background
	
		cache_size =512
		ScrubbyDoo_floater.initializeBackground()
	)	
	on cache_clear picked do
	(
		LButtonPressed = false
		backgroundimagefilename = old_background
	
		delete_files = getFiles ((getDir #preview)+"/ScrubbyDooCache/"+(getfilenamefile old_background)+"_*"+cache_extension)
		for i in delete_files do deleteFile i
		scrub_array = #()
		ScrubbyDoo_floater.show_cache_lamp()
	)	
)

rollout ScrubbyDoo_floater "ScrubbyDoo"
(
	progressbar cache_128_lamp height:7 width:40 pos:[0,0] color:(color 150 0 0) value:100.0
	progressbar cache_256_lamp height:7 width:40 pos:[45,0] color:(color 150 150 0) value:100.0
 	progressbar cache_512_lamp height:7 width:40 pos:[90,0] color:(color 0 150 0) value:100.0
	checkbutton freehand_mode height:7 width:40 pos:[155,0] highlightcolor:(color 100 50 255) checked:freehand_mode_toggle tooltip:"Freehand Mode - Click To Toggle Scrubbing without Mouse Button holding!"
	bitmap scrubby_bitmap bitmap:scrubby_background height:40 width:ScrubbyDoo_floater_width pos:[0,6]
	label file_name_display "" pos:[5,47] align:#left 
	label scrubby_oldpos ""
	label scrubby_pos ""
	
	local initializeBackground 
	
	on freehand_mode changed state do 
	(
		freehand_mode_toggle = state
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Controls" "FreehandMode" (state as string)
	)	
	
	fn update_background =
	(
		copy scrubby_drawlines scrubby_backplane 
		for i = 0 to (ScrubbyDoo_floater_width - 1) by normal_segment do
			setpixels scrubby_backplane [i,0] #(ScrubbyDoo_LinesColor)
		old_start_time = start_time 
		old_end_time = end_time 		
	)
	
	fn update_mouse_pointer pos =
	(
		start_time = (animationRange.start).frame
		end_time = (animationRange.end).frame
		segment_length = (end_time-start_time)
		normal_segment = ScrubbyDoo_floater_width/segment_length
		if start_time != old_start_time or  end_time != old_end_time then 
			update_background()
		
		if LButtonPressed then 
			pointer_color = ScrubbyDoo_ScrubbingMarkerColor
		else 
			pointer_color = ScrubbyDoo_FreeMarkerColor
			
		copy scrubby_backplane scrubby_frontplane
		
		if not LButtonPressed then 
		(
			pixels_array = for i = 1 to ScrubbyDoo_staticmarkerwidth collect ScrubbyDoo_StaticMarkerColor
			setpixels scrubby_frontplane [oldpos.x-ScrubbyDoo_staticmarkerwidth/2,0] pixels_array
			normalized_position = (oldpos.x / normal_segment) 
			scrubby_oldpos.pos = [oldpos.x, 47]
			scrubby_oldpos.text = ((start_time + normalized_position) as integer) as string
		)

		pixels_array = for i = 1 to ScrubbyDoo_freemarkerwidth collect pointer_color
		setpixels scrubby_frontplane [pos.x-ScrubbyDoo_freemarkerwidth/2,0] pixels_array
		
		copy scrubby_frontplane scrubby_background 
		scrubby_bitmap.bitmap = scrubby_background 
		
		normalized_position = pos.x / normal_segment
		scrubby_pos.pos = [pos.x, 47]
		scrubby_pos.text = ((start_time + normalized_position) as integer) as string
		if LButtonPressed then 
		(
			oldpos = pos
			scrubby_oldpos.text = ""
			current_frame = ((start_time + normalized_position) as integer ) 
			sliderTime = current_frame 
			
			current_background_frame = GetBkgFrameNum current_frame 
			if current_background_frame >= 0 then 
			(
				if scrub_array[current_background_frame+1] == undefined then 
				(
					backgroundimagefilename = old_background
					initializeBackground()
				)	
				if scrub_array[current_background_frame+1] != undefined and (getFiles scrub_array[current_background_frame+1]).count == 1 then
					backgroundimagefilename = scrub_array[current_background_frame+1]
				else	
					backgroundimagefilename = old_background
			)	
			else
			(
				backgroundimagefilename = old_background
			)
		)	
	)

	fn show_cache_lamp =
	(
		test_128 = getfiles ((getDir #preview)+"/ScrubbyDooCache/"+(getfilenamefile old_background)+"_128_*"+cache_extension)
		if test_128.count == 0 then 
			cache_128_lamp.color = color 120 0 0
		else
			cache_128_lamp.color = color 0 120 0

		test_256 = getfiles ((getDir #preview)+"/ScrubbyDooCache/"+(getfilenamefile old_background)+"_256_*"+cache_extension)
		if test_256.count == 0 then 
			cache_256_lamp.color = color 120 0 0
		else
			cache_256_lamp.color = color 0 120 0
		test_512 = getfiles ((getDir #preview)+"/ScrubbyDooCache/"+(getfilenamefile old_background)+"_512_*"+cache_extension)
		if test_512.count == 0 then 
			cache_512_lamp.color = color 120 0 0
		else
			cache_512_lamp.color = color 0 120 0				
		case cache_size of
		(
			128: cache_128_lamp.color *= 2.0
			256: cache_256_lamp.color *= 2.0
			512: cache_512_lamp.color *= 2.0
		)				
	)
	
	fn initializeBackground = 
	(
		st = timestamp()
		case cache_size of
		(
			128: cache_128_lamp.color = color 220 220 0
			256: cache_256_lamp.color = color 220 220 0
			512: cache_512_lamp.color = color 220 220 0
		)	
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Cache" "Resolution" (cache_size as string)
		old_background = backgroundimagefilename
		if old_background.count > 4 then 
		(
			old_bg_anim = openbitmap old_background
			end_bg_frame = (getBkgRangeVal()).y 
			scrub_array = #()
			scrub_array[old_bg_anim.numframes+1] = undefined
			
			exist_array = getfiles ((getDir #preview)+"/ScrubbyDooCache/"+(getfilenamefile old_background)+"_"+cache_size as string+"_*"+cache_extension)
			file_exist_array = #()
			for i in exist_array do append file_exist_array (filenamefrompath i)
			with redraw off
			(
				for i = animationrange.start.frame to animationrange.end.frame do
				(
					current_background_frame = GetBkgFrameNum i
					if current_background_frame >= 0 then 
					(
						temp_file_name = ((getDir #preview)+"/ScrubbyDooCache/"+(getfilenamefile old_background)+"_"+cache_size as string+"_"+current_background_frame as string + cache_extension)
						if findItem file_exist_array (filenamefrompath temp_file_name) == 0 then
						(
							file_name_display.text = " CACHING ["+ cache_size as string +"]:"+temp_file_name +"  "
							temp_bmp = bitmap cache_size cache_size
							temp_bmp.filename=temp_file_name
							gotoframe old_bg_anim (current_background_frame)
							copy old_bg_anim temp_bmp
							save temp_bmp
							close temp_bmp
							append file_exist_array (filenamefrompath temp_file_name)
						)
						scrub_array[current_background_frame+1] = temp_file_name
					)	
				)--end i loop
			)	
			close old_bg_anim
			gc light:true
			file_name_display.text = ""
			show_cache_lamp()
		)--end if	
		et = timestamp()
		--format "%\n" ("Cache built in "+((et-st)/1000.0) as string +" secs.")
	)--end cache fn

	on ScrubbyDoo_floater rbuttondown pos do
	(
		RButtonPressed = true
		popUpMenu ScrubbyDoo_RCM pos:pos rollout:ScrubbyDoo_floater
	)
	
	on ScrubbyDoo_floater lbuttondown pos do
	(
		if pos.y < 47 then 
		(

			if not LButtonPressed and backgroundimagefilename != old_background then
				initializeBackground()
			
			if freehand_mode.checked then 
			(
				LButtonPressed = not LButtonPressed 
				update_mouse_pointer pos
				if not LButtonPressed then 
					backgroundimagefilename = old_background
			)
			else
			(
				LButtonPressed = true
				update_mouse_pointer pos
			)
		)		
	)	
	on ScrubbyDoo_floater lbuttonup pos do
	(
		if not freehand_mode.checked then 
		(
			LButtonPressed = false
			backgroundimagefilename = old_background
		)
	)	
	on ScrubbyDoo_floater mousemove pos do
	(
			update_mouse_pointer pos
			if ready_to_resize then
			(
				InitUtilityDialog()
				update_background()
				ready_to_resize = False
			)
	)

	on ScrubbyDoo_floater moved pos do 
	(
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "Position" (pos as string)
	)		
	
	on ScrubbyDoo_floater resized size do 
	(
		ScrubbyDoo_floater_width = size.x
		SetINISetting ((GetDir #plugcfg)+"/ScrubbyDoo.ini") "Appearance" "Width" (ScrubbyDoo_floater_width as string)
		ready_to_resize = true
	)	

)


InitUtilityDialog()

)