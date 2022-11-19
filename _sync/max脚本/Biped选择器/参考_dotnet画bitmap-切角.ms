--这个极快
fn generateBtm type:0 size:[64,64] color:(color 255 0 128) = --为了视觉效果,按钮最小应该不小于3像素,所有的阴影大于高光来增强视觉效果
(
	local
	bitm = DotnetObject "System.Drawing.Bitmap" size.x size.y,
	Graphics = (dotNetClass "System.Drawing.Graphics").FromImage bitm,
	dColor = DotnetObject "System.Drawing.SolidBrush" ((DotNetClass "System.Drawing.Color").fromARGB 255 color.r color.g color.b), -- A R G B 底色
	hColor = DotnetObject "System.Drawing.Pen" ((DotNetClass "System.Drawing.Color").fromARGB 255 255 255 255), --高亮颜色 白
	sColor = DotnetObject "System.Drawing.Pen" ((DotNetClass "System.Drawing.Color").fromARGB 255 0 0 0), --阴影颜色 黑
	hpath = dotNetObject "System.Drawing.Drawing2D.GraphicsPath", --高光路径
	spath = dotNetObject "System.Drawing.Drawing2D.GraphicsPath", --阴影路径
	maxx = size.x-1,maxy = size.y-1
	
	Graphics.SmoothingMode = Graphics.SmoothingMode.HighQuality --设置抗锯齿绘制--AntiAlias or HighQuality
	
	Graphics.FillRectangle dColor 1 1 (maxx-1) (maxy-1) --画底色,向内缩小一圈
	
-- 	用FillPolygon(dColor, Point[])替换填充矩形,下方是在屏幕浮点绘制的示例:
-- 	这样转换成可支持的dotnet数组
-- 	type = dotNetClass "System.Drawing.Point[]"
-- 	res = dotnet.ValueToDotNetObject #(11,12,23) type
-- Unable to convert: 11 to type: System.Drawing.Point
-- 	public void FillPolygonPointF(PaintEventArgs e)
-- 	{

-- 		// Create solid brush.
-- 		SolidBrush blueBrush = new SolidBrush(Color.Blue);

-- 		// Create points that define polygon.
-- 		PointF point1 = new PointF(50.0F, 50.0F);
-- 		PointF point2 = new PointF(100.0F, 25.0F);
-- 		PointF point3 = new PointF(200.0F, 5.0F);
-- 		PointF point4 = new PointF(250.0F, 50.0F);
-- 		PointF point5 = new PointF(300.0F, 100.0F);
-- 		PointF point6 = new PointF(350.0F, 200.0F);
-- 		PointF point7 = new PointF(250.0F, 250.0F);
-- 		PointF[] curvePoints = {point1, point2, point3, point4, point5, point6, point7};

-- 		// Fill polygon to screen.
-- 		e.Graphics.FillPolygon(blueBrush, curvePoints);
-- 	}

	if type == 0 then --突起效果
	(
		hpath.AddLine 0 (maxy-10) 0 9
		hpath.AddLine 0 9 9 0
		hpath.AddLine 9 0 (maxx-10) 0
		spath.AddLine maxx 0 maxx maxy
		spath.AddLine maxx maxy 0 maxy
	)
	else --凹陷效果
	(
		spath.AddLine 0 maxy 0 0
		spath.AddLine 0 0 maxx 0
		hpath.AddLine maxx 1 maxx maxy
		hpath.AddLine maxx maxy 1 maxy
	)
	
	Graphics.DrawPath hColor hpath --画白色
	Graphics.DrawPath sColor spath --画黑色
	
	return bitm
)
(generateBtm type:0).save @"d:\test.bmp" --速度极快


--这个极慢,仅留作日后参考
-- fn generateBtm type:"凹" size:[64,64] color:(color 255 0 128) =
-- (
-- 	local
-- 		bitm = DotnetObject "System.Drawing.Bitmap" size.x size.y,
-- 		dColor = (DotNetClass "System.Drawing.Color").fromARGB 255 color.r color.g color.b, -- A R G B 底色
-- 		hColor = (DotNetClass "System.Drawing.Color").fromARGB 255 255 255 255, --高亮颜色 白
-- 		sColor = (DotNetClass "System.Drawing.Color").fromARGB 255 0 0 0, --阴影颜色 黑
-- 		gColor = (DotNetClass "System.Drawing.Color").fromARGB 255 127 127 127, --接缝颜色 灰
-- 		maxx = (size.x-1),maxy = (size.y-1)
-- 	for x = 1 to (maxx-1) do --从0开始,收缩一个像素
-- 		for y = 1 to (maxy-1) do
-- 			bitm.SetPixel x y dColor
-- 	--画外框
-- 	if type == "凹" then -- 按下效果 --相反的绘制顺序来更好的遮挡
-- 	(
-- 		for x = 0 to maxx do
-- 		(
-- 			bitm.SetPixel x maxy hColor -- 白
-- 			bitm.SetPixel x 0 sColor -- 黑
-- 		)
-- 		for y = 0 to maxy do
-- 		(
-- 			bitm.SetPixel maxx y hColor -- 白
-- 			bitm.SetPixel 0 y sColor -- 黑
-- 		)
-- 	)
-- 	else --突起效果
-- 	(
-- 		for y = 0 to maxy do
-- 		(
-- 			bitm.SetPixel 0 y hColor -- 白
-- 			bitm.SetPixel maxx y sColor -- 黑
-- 		)
-- 		for x = 0 to maxx do
-- 		(
-- 			bitm.SetPixel x 0 hColor -- 白
-- 			bitm.SetPixel x maxy sColor -- 黑
-- 		)
-- 	)
-- 	bitm.SetPixel maxx 0 gColor -- 灰
-- 	bitm.SetPixel 0 maxy gColor -- 灰
-- 	return bitm
-- )
-- tb = generateBtm size:[512,512] --缓慢
-- tb.save @"c:\test.bmp" 



