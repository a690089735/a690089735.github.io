--扩大显示范围
fn view_expansion =
(
-- 	windows.SendMessage (windows.getMAXHWND()) (0x112) (0xF030) 0 --最大化
	--扩大视口
-- 	cui.expertModeOn()
)
--还原显示
fn view_revivification =
(
-- 	windows.SendMessage (windows.getMAXHWND()) (0x112) (0xF120) 0 --还原
		--扩大视口
-- 	cui.expertModeOff()
)
--不扩大和还原,用户来选择,这里仅还原截图大小(比例不变),开启安全框时获取安全框内容,没开启时直接获取视口内容.
-- 步骤:
-- 1.检测是否开启安全框
-- 2.获取渲染尺寸
-- 3.输出图片到文件夹
-- 4.按照选项生成视频.

--加前缀0占位依赖,d=位数,返回文本
fn covering_str num d:2 =
(
	num = num as string
	for i = 1 to d - num.count do num = "0" + num
	num
)

local
desktop_folder = (DotNetClass "System.Environment").GetFolderPath ((DotnetClass "Environment+SpecialFolder").DesktopDirectory) + "\\",
data_folder = (DotNetClass "System.Environment").GetFolderPath ((DotnetClass "Environment+SpecialFolder").ApplicationData) + "\\XAniTools\\"

fn clear_folder imgs_folder:(data_folder+"temp_capture_bmps\\") =
(
	HiddenDOSCommand ("rmdir " + imgs_folder + "/S /Q")
	makeDir imgs_folder
)

--分割视频段,格式为 0,5;10,100 这样
fn make_segment_data str clamp:false = --用空格或者分号隔开,不允许换行和tab,注意,允许反向生成(倒放),这是个很优秀的特性,兼容一般错误(需配合一下输入过滤,不能有\r\n\t,dotNet的textbox在单行时默认屏蔽换行和tab,tab是全选),注意,允许交叠输出,比如1-60是某,1-100是完整
(
	local
	ranges = #(),
	data = if clamp then
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
	)else
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
-- 	ranges = sort ranges
	
	#((interval ranges[1] ranges[2]),data) --返回时间范围和文本数据,时间范围会自动变为从小到大
)--要有一个按钮,自动生成 animationrange.start,animationrange.end:视口预览 到窗口,左键快速创建一个完整预览(默认将范围限制在时间范围内,默认输出到配置目录,没有支持的配置则以默认方式输出[视口预览_时间戳.MP4,输出到桌面]) 右键打开设置窗口(其实是个菜单). 按Ctrl解除范围限制 按alt将预览强制输出到桌面 按Shift按配置快速生成视频(默认将范围限制在时间范围内,默认输出到配置目录)
--菜单里要添加一个使用缓存重新生成预览,以便有问题时可以免截图更新动画.--添加一个清除缓存的按钮 --这两个功能会让整体略微复杂,且不常用,要么去掉,要么藏到一些菜单里.
fn make_segment_txt datas imgs_folder:(data_folder+"temp_capture_bmps\\") = --利用数据创建文件列表文本文件
(
	local
	ranges = datas[1],
	data = datas[2],
	d = ((ranges.end - ranges.start + 1)as string).count as integer
	for dt in data collect
	(
		--分析数据,创建文件
		local
		fname = imgs_folder+dt[3]+".txt",
		f = openfile fname mode:"wt" --文件不存在则创建,存在则覆盖(删除内容)
-- 		print f
		for t = dt[1] to dt[2] by (if dt[1] > dt[2] then -1 else 1) do
		(
-- 			print (t - ranges.start)
			format "file 'temp_%.bmp'\n" (covering_str (t - ranges.start) d:d) to:f --这里的用整数去减帧得到的是整数
		)
		close f
		fname
	)
)


--截图
fn capture_bmps imgs_folder:(data_folder+"temp_capture_bmps\\") range:animationRange =
(
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
			x = (view_size.x - bmps_size.x)/2 + 1
		)
		else
		(
			bmps_size = [view_size.x, view_size.x/k]
			y = (view_size.y - bmps_size.y)/2 + 1
		)
	)
	else
	(
		bmps_size = view_size
	)
	local
	f = openfile (imgs_folder+"FullPreView.txt") mode:"wt", --文件不存在则创建,存在则覆盖(删除内容)
	img = bitmap bmps_size.x bmps_size.y,
	d = ((animationRange.end - animationRange.start) as string).count as integer, --这里是 0f 所以结果会多个0,也还不错
	i = -1
	
	for t = animationRange.start to animationRange.end do
	(
		slidertime = t
		pasteBitmap (gw.getviewportDib()) img (box2 x y bmps_size.x bmps_size.y) [0,0]
		local sname = "temp_" + covering_str (i+=1) d:d + ".bmp"
		img.filename = imgs_folder + sname --指定文件名,
		format "%" sname to:f --顺便记录到文件
		save img
	)
	close f
	
	animationRange = oldRange
	slidertime = st
)
fn create_color_pnl pnl_path:(data_folder+"temp_capture_bmps\\"+"temp_pnl.png") =
(
	
)
fn make_video savepath:desktop_folder datas:#(data_folder+"temp_capture_bmps\\"+"FullPreView.txt") type:".mp4" ffmpeg:@"C:/Users/windows/Downloads/ffmpeg-20140608.exe" =
(
	for dt in datas do
	(
-- 		print dt
		command = stringstream ""
-- 		format "% -f concat -i % -vf \"crop=trunc(iw/2)*2:trunc(ih/2)*2, fps=30\" -pix_fmt yuv420p % -y" (ffmpeg) (dt) (savepath + getfilenamefile dt + ".mp4") to:command
		format "% -f image2 -framerate 30 -i %  % -y" (ffmpeg) (dt) (savepath + getfilenamefile dt + ".gif") to:command
		HiddenDOSCommand(substituteString (command as string) "\\" "/")
		print (substituteString (command as string) "\\" "/")
	)
)