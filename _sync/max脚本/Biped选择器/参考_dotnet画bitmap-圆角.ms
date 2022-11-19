--这个极快
fn generateBtm type:0 size:[64,64] color:(color 255 0 128) Radius:10 = --为了视觉效果,按钮最小应该不小于3像素,所有的阴影大于高光来增强视觉效果
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
	
	spath.AddArc (dotNetObject "System.Drawing.RectangleF" 0 0 Radius Radius) 180 90 --Radius为10的结果是一个10*10的方形,一个边有5的圆角,
	spath.AddArc (dotNetObject "System.Drawing.RectangleF" (maxx-Radius) 0 Radius Radius) 270 90
	spath.AddArc (dotNetObject "System.Drawing.RectangleF" (maxx-Radius) (maxy-Radius) Radius Radius) 0 90
	spath.AddArc (dotNetObject "System.Drawing.RectangleF" 0 (maxy-Radius) Radius Radius) 90 90
	
	spath.CloseFigure()

	Graphics.FillPath dColor spath
	Graphics.DrawPath hColor spath
	
	
	return bitm
)
(generateBtm type:0).save @"d:\test.bmp" --速度极快
