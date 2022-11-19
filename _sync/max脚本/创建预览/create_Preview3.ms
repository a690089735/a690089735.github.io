--不扩大和还原,用户来选择,这里仅还原截图大小(比例不变),开启安全框时获取安全框内容,没开启时直接获取视口内容.
-- 步骤:
-- 1.检测是否开启安全框
-- 2.获取渲染尺寸
-- 3.输出图片到文件夹
-- 4.按照选项生成视频.

local
desktop_folder = (DotNetClass "System.Environment").GetFolderPath ((DotnetClass "Environment+SpecialFolder").DesktopDirectory) + "\\",
data_folder = (DotNetClass "System.Environment").GetFolderPath ((DotnetClass "Environment+SpecialFolder").ApplicationData) + "\\XAniTools\\",
temp_folder = data_folder+"temp_capture_bmps\\"

--加前缀0占位依赖,d=位数,返回文本
fn covering_str num d:2 =
(
	num = num as string
	for i = 1 to d - num.count do num = "0" + num
	num
)
--清理文件夹
-- fn clear_folder imgs_folder:temp_folder =
-- (
-- 	HiddenDOSCommand ("rmdir " + imgs_folder + "/S /Q")
-- 	makeDir imgs_folder
-- )

fn make_preview str:edt_segment.text clamp:false imgs_folder:temp_folder savepath:edt_path.text fps:spn_rate.value type:ddl_type.selection ffmpeg:@"C:\Users\windows\Desktop\ffmpeg.exe" =
(
progressEnd()
progressStart "解析分段信息.."

	HiddenDOSCommand ("rmdir " + imgs_folder + "/S /Q")
	makeDir imgs_folder
-- 	progressStart "开始渲染"
-- 	setProgressCancel false
-- 	progressUpdate (100.0*3/20) --把100.0放在前面(update可以返回值,返回false则是用户点击了取消.true则是用户点击了否,不取消.)
-- 	progressEnd()
	--解析分段数据 --分割视频段,格式为 0,5:待机;10,100:攻击 这样
progressUpdate 30
	if str == "" do str = (animationRange.start.frame as integer) as string + "," + (animationRange.end.frame as integer) as string + ":视口预览;"
	local
	ranges = #(),
	data = if clamp then --钳制ranges范围
	(
		local
		start = animationRange.start,
		end = animationRange.end
		for s in filterString str " ;" where
			(
			try(
				local
				d = filterString s ":",
				t = filterString d[1] ",",
				k = #(t[1] as integer, t[2] as integer)
				(amin k < end and amax k > start)
				)catch(false) 
		)
		collect (ranges += k;k+#(d[2])) --#(1,10,"待机")
	)else --按文本范围
	(
		for s in filterString str " ;" where
			(
			try(
				local
				d = filterString s ":",
				t = filterString d[1] ",",
				k = #(t[1] as integer, t[2] as integer)
				true
				)catch(false)
		)
		collect (ranges += k;k+#(d[2])) --注意,允许反向生成(倒放)[]]]]]]
	)
progressUpdate 60
	local
	range = (interval (amin ranges) (amax ranges))
	
	--生成分段文本
	local
	d = ((range.end - range.start + 1)as string).count as integer,
	datas = for dt in data collect
	(
		--分析数据,创建文件
		local
		fname = imgs_folder+dt[3]+".txt",
		f = openfile fname mode:"wt" --文件不存在则创建,存在则覆盖(删除内容)
-- 		print f
		for t = dt[1] to dt[2] by (if dt[1] > dt[2] then -1 else 1) do
		(
-- 			print (t - ranges.start)
			format "file 'temp_%.bmp'\n" (covering_str (t - range.start) d:d) to:f --这里的用整数去减帧得到的是整数
		)
		close f
		fname
	)
progressUpdate 100
	
	--创建截图
	local
	oldRange = animationRange,
	st = currentTime,
	view_size = getViewSize(),
	x = y = 0,
	bmps_size
	
	animationRange = range
	
	if displaySafeFrames then
	(
		local k = getRendImageAspect()
		if k < (view_size.x/view_size.y) then
		(
			bmps_size = [view_size.y*k,view_size.y]
			x = (view_size.x - bmps_size.x)/2
		)
		else
		(
			bmps_size = [view_size.x, view_size.x/k]
			y = (view_size.y - bmps_size.y)/2
		)
	)
	else
	(
		bmps_size = view_size
	)
progressEnd()
windows.processPostedMessages()
	
	local
-- 	f = openfile (imgs_folder+"FullPreView.txt") mode:"wt", --文件不存在则创建,存在则覆盖(删除内容)
	img = bitmap bmps_size.x bmps_size.y,
-- 	d = ((Range.end - Range.start) as string).count as integer, --这里是 0f 所以结果会多个0,也还不错,上边有了
	i = -1,
	tcount = animationRange.end - animationRange.start,
	start = animationRange.start
	
progressStart "创建序列.."


	for t = animationRange.start to animationRange.end do
	(
progressUpdate (100.0*(t-start)/tcount)
		slidertime = t
		pasteBitmap (gw.getviewportDib()) img (box2 x y bmps_size.x bmps_size.y) [0,0] --viewport.getViewportDib()gw.getviewportDib()
		local sname = "temp_" + covering_str (i+=1) d:d + ".bmp"
		img.filename = imgs_folder + sname --指定文件名,
-- 		format "%" sname to:f --顺便记录到文件
		save img
	)
-- 	close f
	
	animationRange = oldRange
	slidertime = st
progressEnd()
	--创建预览
progressStart "创建预览.."
-- windows.processPostedMessages()
	local
	tcount = datas.count,
	ci = -1,
	cstr,
	suffix
	case type of
	(
		1 : (cstr = "\"%\" -vsync passthrough -hwaccel auto -safe 0 -r % -f concat -i \"%\" -c:v mpeg4 -vtag xvid -pix_fmt yuv420p -vf \"crop=trunc(iw/2)*2:trunc(ih/2)*2\" -f avi -y \"%\" -y";suffix = ".avi")
		2 : (cstr = "\"%\" -vsync passthrough -hwaccel auto -safe 0 -r % -f concat -i \"%\" -c:v libx264 -preset fast -pix_fmt yuv420p -vf \"crop=trunc(iw/2)*2:trunc(ih/2)*2\" -f mp4 -y \"%\" -y";suffix = ".mp4")
		3 : (cstr = "\"%\" -vsync passthrough -hwaccel auto -safe 0 -r % -f concat -i \"%\" -c:v libx264 -preset fast -pix_fmt yuv420p -vf \"crop=trunc(iw/2)*2:trunc(ih/2)*2\" -f mov -y \"%\" -y";suffix = ".mov")
		4 : (cstr = "\"%\" -vsync passthrough -hwaccel auto -safe 0 -r % -f concat -i \"%\" -lavfi palettegen=stats_mode=diff[pal],[0:v][pal]paletteuse=new=1:dither=sierra2_4a:diff_mode=rectangle -f gif -y \"%\" -y";suffix = ".gif")
	)
	for dt in datas do--ffmpeg 帧率 输入文件 输出文件(MP4)
	(
progressUpdate (100.0*(ci+=1)/tcount)
		local command = StringStream ""
		format cstr ffmpeg fps dt (savepath + getFilenameFile dt + suffix) to:command
		HiddenDOSCommand(substituteString (command as string) "\\" "/")
		print (substituteString (command as string) "\\" "/")
	)
	
progressEnd()
displayTempPrompt "视口预览创建完成." 2000
)


--要有一个按钮,自动生成 animationrange.start,animationrange.end:视口预览 到窗口,左键快速创建一个完整预览(默认将范围限制在时间范围内,默认输出到配置目录,没有支持的配置则以默认方式输出[视口预览_时间戳.MP4,输出到桌面]) 右键打开设置窗口(其实是个菜单). 按Ctrl解除范围限制 按alt将预览强制输出到桌面 按Shift按配置快速生成视频(默认将范围限制在时间范围内,默认输出到配置目录)
--菜单里要添加一个使用缓存重新生成预览,以便有问题时可以免截图更新动画.--添加一个清除缓存的按钮 --这两个功能会让整体略微复杂,且不常用,要么去掉,要么藏到一些菜单里.
