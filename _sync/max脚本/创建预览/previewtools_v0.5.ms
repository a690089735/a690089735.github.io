flagCustomPT = 0
flagmp4 = 1
flagtime = 1
flagcheck = 1
if maxfilepath != "" then previewname = getFilenameFile maxFileName else previewname = "UnTitled"
	
Zeros = "0"
ffmpeg = "c:\workbench\ffmpeg.exe -i " -- Your MP4 Encoder Path

outpath = undefined


fn addzeros nr =  -- Decimal Padding
(
	if selection.count <10 then digits = ((selection.count as string).count) else digits = ((selection.count as string).count)- 1
	
	case of (
		(nr < 10): ((substring zeros 1 (digits)) + nr as string)
-- 		(nr > 9 and nr < 100): ((substring zeros 1 (digits-1)) + nr as string)
-- 		(nr > 99 and nr < 10000): ((substring zeros 1 (digits-2)) + nr as string)
		(nr > 9 ): (nr as string)
	)
)	

fn previewcopy = (
					timetag = getLocalTime()
					day = addzeros (timetag[4] as integer)
					month =  addzeros (timetag[2] as integer) 
					hour =  addzeros (horalocal[2] as integer)
					min =  addzeros (horalocal[3] as integer)
-- 					hour =  addzeros (timetag[5] as integer )
-- 					min =  addzeros (timetag[6] as integer )
-- 					sec =  addzeros (timetag[7] as integer)
				    ampm = horalocal[5]

					videoin = userPath + "Documents\3dsMax\previews\_scene.avi "
-- 					videoout = outpath +previewname+"_"+horalocal
											
					if flagtime == 1 then videoout = outpath +previewname+"_"+month+day+"_"+hour+"H"+min+ampm else videoout = outpath +previewname
						
											
					if flagmp4 == 0 then (
							copyFile videoin (videoout+".avi") 
						if flagcheck == 1 do actionMan.executeAction 0 "40170"
					)else
						(
							convertout = ffmpeg + videoin +"-pix_fmt yuv420p " + (videoout+".mp4")
-- 							cmd = "cmdjob.exe " + ((convertout as string)+".mp4")
							DOSCommand convertout
							if flagcheck == 1 do actionMan.executeAction 0 "40170"
							)
)

pt_uwidth = 250
pt_uheight = 115

try(DestroyDialog PreviewTool)catch()
 rollout PreviewTool "PreviewTool v0.5"
 (
	 group "Naming" (
		editText pt_edt1 "" text:" Custom Preview Name..." width:220 height:18 tooltip:"Custom Preview Name" enabled:false
		checkbox pt_ckbx1 "JobName" checked:true enabled:true  pos:[18,48]
		checkbox pt_ckbx2 "Mp4" checked:false enabled:false  pos:[87,48] tooltip:"YOU NEED FFMPEG.EXE copied on folder C:\workbench to have this function working."
		button pt_Copy "Copy" tooltip:"Copy Preview from Max Default Preview Folder to the same folder and name of your project file Adding Date/hour. To Enable MP4 Compress Put ffmpeg.exe inside c:\workbench." pos:[140,46] width:70 height:18
		button pt_play "PlayLast" tooltip:"Play the latest _scene.avi created" pos:[140,67] width:70 height:18
		button pt_bt2 "S" tooltip:"Settings. (Make Preview Dialog)." pos:[212,46] height:18
		button pt_bt3 "M" tooltip:"Instant Make Preview and Copy/Encode using Last Prevew Settings. But Turn Grid/Cameras Off and Force ShowFrames." pos:[211,67] height:18
		checkbox pt_time "TimeTag" checked:true enabled:true  pos:[18,70]
		checkbox pt_check "Check" checked:true enabled:true tooltip:"Check the Preview (_scene.avi) after Creation"  pos:[87,70]
		 	 ) 

	 label lab1 "?Kumodot tools - Marcelo Souza - 2016" -- Registry

on PreviewTool open do (
				pt_edt1.text = previewname
				if doesFileExist ("c:\workbench\ffmpeg.exe") == false then
							(
							pt_ckbx2.triState = 0
								pt_ckbx2.checked = false
							flagmp4 = 0
							) else 
							(
							pt_ckbx2.enabled = true
							pt_ckbx2.triState = 1
							flagmp4 = 1
							)
			)
			 
on pt_ckbx1 changed pt_state1 do
					(
						if pt_state1 == false then
								(
								pt_edt1.enabled = true -- Enable Custom Preview Name
									flagCustomPT = 1
									pt_edt1.text = "Custom Preview Name..."
								)
								else  (
										if maxfilepath != "" then previewname = getFilenameFile maxFileName else previewname = "UnTitled"
											pt_edt1.enabled = false -- Use Scene Preview Name
												flagCustomPT = 0
												pt_edt1.text = previewname
											)
						)
on pt_ckbx2 changed pt_state2 do
					(
						 if pt_state2 == false then flagmp4= 0 else  flagmp4 = 1
						)
						
on pt_time changed pt_timestate do
					(
						 if pt_timestate == false then flagtime = 0 else  flagtime = 1
						)
on pt_check changed pt_checkstate do
					(
						 if pt_checkstate == false then flagcheck = 0 else  flagcheck = 1
						)
		 
  on pt_copy pressed do
			(
					::horalocal = FilterString localTime "\\:/ "
					::tempPath=sysInfo.tempdir 
					::userPath= substituteString tempPath "AppData\\Local\\Temp\\" ""
						
		if maxfilepath != "" then (
					if flagCustomPT == 0 then previewname = getFilenameFile maxFileName else previewname = pt_edt1.text
							outpath = maxfilepath
									) else ( if flagCustomPT == 0 then previewname = "UnTitled" else previewname = pt_edt1.text
												outpath = userPath + "Desktop\\"
											)
			previewcopy()
			  )--end on
	  on pt_bt2 pressed do (max preview)
		on pt_bt3 pressed do (
					::horalocal = FilterString localTime "\\:/ "
					::tempPath=sysInfo.tempdir 
					::userPath= substituteString tempPath "AppData\\Local\\Temp\\" ""
				createPreview dspFrameNums:true dspGrid:false dspCameras:false
							if maxfilepath != "" then (
					if flagCustomPT == 0 then previewname = getFilenameFile maxFileName else previewname = pt_edt1.text
							outpath = maxfilepath
									) else ( if flagCustomPT == 0 then previewname = "UnTitled" else previewname = pt_edt1.text
												outpath = userPath + "Desktop\\"
											)
				previewcopy()
				)
			on pt_play pressed do actionMan.executeAction 0 "40170"
 )--end rollout
createDialog PreviewTool pt_uwidth pt_uheight fgcolor:yellow
  