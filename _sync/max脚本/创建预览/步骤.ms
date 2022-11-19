1.最大化max窗口

/*  

windows.getMAXHWND()

SC_CLOSE = 0xF060
SC_MAXIMIZE = 0xF030
SC_MINIMIZE = 0xF020
SC_RESTORE = 0xF120
SC_HOTKEY = 0xF150

WM_SYSCOMMAND = 0x112

-- Run windows Notepad here...
-- get nodepad's window hwnd:
hwnd = windows.getchildhwnd 0 "Untitled - Notepad"

-- minimize
windows.SendMessage hwnd[1] WM_SYSCOMMAND SC_MINIMIZE 0
-- restore
windows.SendMessage hwnd[1] WM_SYSCOMMAND SC_RESTORE 0
-- maximize
windows.SendMessage hwnd[1] WM_SYSCOMMAND SC_MAXIMIZE 0

*/

windows.SendMessage (windows.getMAXHWND()) (0x112) (0xF030) 0 --最大化
windows.SendMessage (windows.getMAXHWND()) (0x112) (0xF120) 0 --还原
  
2.专家模式
cui.expertModeOn()
cui.expertModeOff()
3.截图为bmp序列,储存到临时目录

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
	
	--创建mp4文件,创建前先删除
	dosCommand  "\"C:\Users\LiSa\Desktop\temp\ffmpeg\" -framerate 30 -start_number 8 -i \"C:\Users\LiSa\AppData\Local\Autodesk\3dsMax\2020 - 64bit\ENU\temp\_preview_temp\_preview_temp_%05d.bmp\" -vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\" -vcodec libx264 -pix_fmt yuv420p -preset ultrafast \"C:\Users\LiSa\AppData\Local\Autodesk\3dsMax\2020 - 64bit\ENU\temp\output.mp4\""

	Dos_Command.run "\"C:\\Users\\LiSa\\Desktop\\temp\\ffmpeg\"" arg_array:#(
		"-framerate 30",
		"-start_number 8",
		"-i \"C:\\Users\\LiSa\\AppData\\Local\\Autodesk\\3dsMax\\2020 - 64bit\\ENU\\temp\\_preview_temp\\_preview_temp_%05d.bmp\"",
		"-vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\"",
		"-vcodec libx264",
		"-pix_fmt yuv420p",
		"-preset ultrafast",
		"\"C:\\Users\\LiSa\\AppData\\Local\\Autodesk\\3dsMax\\2020 - 64bit\\ENU\\temp\\output.mp4\""
		)
	--  bmp
)

-- "ffmpeg -framerate 30 -i input%05d.bmp -vcodec libx264 -pix_fmt yuv420p -preset ultrafast -codec copy output.mp4"
"ffmpeg -framerate 30 -start_number 8 -i _preview_temp_%%05d.bmp -vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\" -vcodec libx264 -pix_fmt yuv420p -preset ultrafast output.mp4"
"rd /S /Q preprocessed"
"C:\Users\LiSa\Desktop\temp\ffmpeg" -framerate 30 -start_number 8 -i "C:\Users\LiSa\AppData\Local\Autodesk\3dsMax\2020 - 64bit\ENU\temp\_preview_temp\_preview_temp_%%05d.bmp" -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -vcodec libx264 -pix_fmt yuv420p -preset ultrafast "C:\Users\LiSa\AppData\Local\Autodesk\3dsMax\2020 - 64bit\ENU\temp\output.mp4"

"C:\Users\LiSa\Desktop\temp\ffmpeg" -framerate 30 -start_number 8 -i "C:\Users\LiSa\AppData\Local\Autodesk\3dsMax\2020 - 64bit\ENU\temp\_preview_temp\_preview_temp_%05d.bmp" -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -frames:v 30 -vcodec libx264 -pix_fmt yuv420p -preset ultrafast "C:\Users\LiSa\AppData\Local\Autodesk\3dsMax\2020 - 64bit\ENU\temp\output.mp4"


4.图像组合为AVI
-- fn getViewportSafeframeDib2avi filename:((getDir #preview)+@"\quickpreview.avi") show:on =
-- (
--  local x = y = 0, v
--  local s = getViewSize()
--  local k = getRendImageAspect()
--  
--  if k < (s.x/s.y) then
--  (
--   v = [s.y*k,s.y]
--   x = (s.x-v.x)/2 + 1
--  )
--  else
--  (
--   v = [s.x, s.x/k]
--   y = (s.y-v.y)/2 + 1
--  )
--  _bmp = bitmap v.x v.y
--  pasteBitmap (gw.getViewportDib()) _bmp (box2 (x-1) y v.x v.y) [0,0]
 if show do display _bmp
 _bmp
-- )
5.ffmpeg转换视频为mp4
6.


obj = createOLEObject ("Shell.Application")
obj.minimizeAll()