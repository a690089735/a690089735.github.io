try(DestroyDialog CreatePreviewRollout)catch()
rollout CreatePreviewRollout "Untitled" width:184 height:216
(
	struct DOSCMD 
	(
		fn run exe_path arg_array:undefined as_string:false =
		(
			local process = dotNetObject "System.Diagnostics.Process"

			process.StartInfo.UseShellExecute = false
			process.StartInfo.RedirectStandardOutput = true
			process.StartInfo.RedirectStandardError = true
			process.StartInfo.FileName = exe_path
			process.StartInfo.Arguments = ""
			
			if arg_array != undefined then
			(
				for arg in arg_array do (process.StartInfo.Arguments += (" " + arg as string))
			)

			process.Start()
			process.WaitForExit()

			local _output = process.StandardOutput.ReadToEnd()
			local _error = process.StandardError.ReadToEnd()

			process.Close()
			process.Dispose()
			
			if _error == "" then
			(
				if as_string then return (trimRight _output "\r\n")
				else return (filterString _output "\r\n" splitEmptyTokens:false)
			)
			else
			(
				if as_string then return (trimRight _error "\r\n")
				else return (filterString _error "\r\n" splitEmptyTokens:false)
			)
		)
	)
	local
	Dos_Command = DOSCMD()
	
	button 'btn_run' "创建预览" pos:[8,176] width:168 height:32 align:#left
	edittext 'edt_outsrt' "" pos:[0,0] width:184 height:120 align:#left
	spinner 'spn_w' "宽" pos:[8,128] width:66 height:16 range:[1,1920,800] type:#integer scale:2 align:#left
	spinner 'spn_h' "高" pos:[88,128] width:66 height:16 range:[1,1920,600] type:#integer scale:2 align:#left
	button 'btn_set' "." pos:[168,128] width:8 height:16 align:#left
	editText 'edt_savepath' "" pos:[8,152] width:160 height:16 align:#left
	button 'btn_savepath' "." pos:[168,152] width:8 height:16 align:#left
	on CreatePreviewRollout open  do
	(
		edt_savepath.text = maxFilePath
	)
	on btn_run pressed do
	(
		
	)
	on spn_w changed val do
	(
		spn_w.value = val/2*2
	)
	on spn_h changed val do
	(
		spn_h.value = val/2*2
	)
	on btn_set pressed do
	(
		
	)
	on btn_savepath pressed do
	(
		
	)
)
CreateDialog CreatePreviewRollout


fn getViewportSafeframeDib filepath:@"C:\Users\LiSa\Desktop\temp" start:(animationRange.start) end:(animationRange.end) size:[800,600] =
(
	--在临时目录创建一个临时预览文件夹
	dosCommand ("rd /S /Q \"" + tempdir + "\"") --先清理
	tempdir = (getdir #temp)+@"\_preview_temp"
	makeDir tempdir
	
	--创建预览图像
	fn frame2numer f count:5 =
	(
		local n = (f.frame as integer) as string
		for i = 1 to count - n.count do n = "0"+n
		n
	)
	local
	x = y = 0, v,
	s = getViewSize(),
	k = 1.0 * size[1] / size[2]
	
	temppath = tempdir + "\\"

	if k < (s.x/s.y) then
	(
		v = [s.y*k,s.y]
		x = (s.x-v.x)/2 + 1
	)
	else
	(
		v = [s.x, s.x/k]
		y = (s.y-v.y)/2 + 1
	)

	animationRange.start = start
	animationRange.end = end
	for t = start to end do
	(
		slidertime = t
		
		_bmp = bitmap v.x v.y filename:(temppath + "_preview_temp_" + frame2numer t + ".bmp")
		pasteBitmap (gw.getViewportDib()) _bmp (box2 (x-1) y v.x v.y) [0,0]
		save _bmp
	)
	
	--创建mp4文件,创建前先删除;
	fn ffmpegCreatePreview Dos_Command:Dos_Command _ffmpeg:"\"C:\\Users\\LiSa\\Desktop\\temp\\ffmpeg\"" _framerate:frameRate _size:[800,600] _time1:animationRange.start _time2:animationRange.end _outfile:"\"C:\\Users\\LiSa\\AppData\\Local\\Autodesk\\3dsMax\\2020 - 64bit\\ENU\\temp\\output.mp4\"" _loop:1 =
-- 	print
	(
		deleteFile (substituteString _outfile "\"" "")
		Dos_Command.run _ffmpeg arg_array:#(
		"-framerate "+_framerate as string,
		"-start_number "+animationRange.start as string, --这是一个输入参数
		"-i \""+getdir #temp+"\\_preview_temp\\_preview_temp_%05d.bmp\"",
		"-vf \"scale="+_size[1] as string+":"+_size[2] as string+"\"",
		"-vcodec libx264",
		"-pix_fmt yuv420p",
		"-preset ultrafast",
		"-qp 0", --qp0无损,可去掉
		"-frames:v "+(((_time2-_time1+1).frame)as integer) as string, --这是一个输出参数,一定要在-i的后面
		_outfile
		)
	)
	ffmpegCreatePreview time1:8 time2:38
	--  bmp
)
-- getViewportSafeframeDib()