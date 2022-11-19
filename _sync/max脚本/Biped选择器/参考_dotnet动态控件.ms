try(destroydialog testRollout)catch()
rollout testRollout "Untitled" width:168 height:152
(
	dotNetControl pnl1 "panel" pos:[13,7] width:142 height:137
	
	local ImgList = #(),boolList = #(),hold = false,last = undefined
	
-- 	fn generateCBtn pos:[0,0] size:[48,24] name:"" text:"" =
-- 	(
-- 		local cBtn = DotnetObject "System.Windows.Forms.CheckBox"
-- 		cBtn.Appearance = (dotNetClass "System.Windows.Forms.Appearance").Button

-- 		cBtn.Flatstyle = (dotnetclass "System.Windows.Forms.FlatStyle").Popup
-- 		cBtn.backcolor = (DotNetClass "System.Drawing.Color").fromARGB 255 0 128
-- 		cBtn.TextAlign = (dotnetclass "System.Drawing.ContentAlignment").MiddleCenter

-- 		cBtn.Flatappearance.Bordersize = 0
-- 		cBtn.location.x = pos[1];cBtn.location.y = pos[2]
-- 		cBtn.Width = size[1];cBtn.height = size[2]
-- 		cBtn.Name = name;cBtn.text = text
-- 		return cBtn
-- 	)
	fn generateBimg type:0 size:[64,64] color:(color 255 0 128) = --为了视觉效果,按钮最小应该不小于3像素,所有的阴影大于高光来增强视觉效果
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

		Graphics.FillRectangle dColor 1 1 (maxx-1) (maxy-1) --画底色,向内缩小一圈

		if type == 0 then --突起效果
		(
			hpath.AddLine 0 (maxy-1) 0 0
			hpath.AddLine 0 0 (maxx-1) 0
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
	fn lableDown s e =
	(
		hold = true;last = s
		id = s.name as integer
		s.BackgroundImage = ImgList[id][if (boolList[id] = not boolList[id]) then 2 else 1]
		s.DoDragDrop false ((dotNetClass "System.Windows.Forms.DragDropEffects").All)
	)
	fn lableUp s e =
	(
		hold = false
	)
	fn lableEnter s e =
	(
		if hold and last != s do 
		(
			last = s
			id = s.name as integer
			s.BackgroundImage = ImgList[id][if (boolList[id] = not boolList[id]) then 2 else 1]
		)
	)
-- 	fn lableClick s e =
-- 	(
-- 		id = s.name as integer
-- 		boolList[id] = not boolList[id]
-- 		s.BackgroundImage = ImgList[id][if boolList[id] then 2 else 1]
-- 	)
	fn generateCheckLabel pos:[0,0] size:[48,24] name:"" text:"Label"  bimg:(generateBimg size:[48,24]) = --创建时设置name,后面使用时可以用name as integer来调取相关数组
	(
		local cl = DotnetObject "System.Windows.Forms.Label"
		cl.location.x = pos[1];cl.location.y = pos[2]
		cl.Width = size.x;cl.Height = size.y
		cl.Name = name;cl.text = text
		cl.BackgroundImage = bimg
		cl.AllowDrop = true
		cl.BackgroundImageLayout = (dotNetClass "System.Windows.Forms.ImageLayout").Stretch
		
-- 		可选事件参考
-- 		on <control_name> MouseClick <System.Windows.Forms.MouseEventArgs>e do ( ... )
-- 		on <control_name> MouseDoubleClick <System.Windows.Forms.MouseEventArgs>e do ( ... )
-- 		on <control_name> MouseDown <System.Windows.Forms.MouseEventArgs>e do ( ... )
-- 		on <control_name> MouseEnter <System.EventArgs>e do ( ... )
-- 		on <control_name> MouseHover <System.EventArgs>e do ( ... )
-- 		on <control_name> MouseLeave <System.EventArgs>e do ( ... )
-- 		on <control_name> MouseMove <System.Windows.Forms.MouseEventArgs>e do ( ... )
-- 		on <control_name> MouseUp <System.Windows.Forms.MouseEventArgs>e do ( ... )
		
-- 		on <control_name> DragDrop <System.Windows.Forms.DragEventArgs>e do ( ... )
-- 		on <control_name> DragEnter <System.Windows.Forms.DragEventArgs>e do ( ... )
-- 		on <control_name> DragLeave <System.EventArgs>e do ( ... )
-- 		on <control_name> DragOver <System.Windows.Forms.DragEventArgs>e do ( ... )
		
		dotnet.addEventHandler cl "MouseDown" lableDown
		dotnet.addEventHandler cl "MouseUp" lableUp
		dotnet.addEventHandler cl "DragEnter" lableEnter
		dotNet.setLifetimeControl cl #dotnet
		
-- 		deselect
-- 		selectmore
		return cl
	)
	
	on testRollout open  do
	(
-- 		pnl1.controls.add (generateCBtn ())
-- 		pnl1.controls.add (generateCBtn pos:[0,26])
		ImgList[1] = #(generateBimg size:[48,24],generateBimg type:1 size:[48,24])
		boolList[1] = false
		pnl1.controls.add (generateCheckLabel name:(1 as string) bimg:ImgList[1][1])
			
		ImgList[2] = #(generateBimg size:[48,24],generateBimg type:1 size:[48,24])
		boolList[2] = false
		pnl1.controls.add (generateCheckLabel name:(2 as string) pos:[0,26])
	)
)
createdialog testRollout