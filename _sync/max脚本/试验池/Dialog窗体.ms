DestroyDialog TestRollout
-- rollout TestRollout "TEST" width:160 height:96
-- (
-- 	button 'btn1' "Button" width:48 height:21 
-- 	label 'lbl1' "Label" width:117 height:36 
-- )

rollout TestRollout "TEST" width:160 height:96
(
	local pd = false,offset = [0,0]
	dotNetControl 'lbl_Title' "Label" text:"窗口标题" pos:[0,0] width:145
	dotNetControl 'Btn_Close' "Button" text:"X" pos:[146,0] width:14
	on lbl_Title MouseDown do (pd = true;offset = (GetDialogPos TestRollout)-mouse.screenpos)
	on lbl_Title MouseUp do pd = false
	on lbl_Title MouseMove do if pd do SetDialogPos TestRollout (mouse.screenpos + offset)
	
	button 'btn1' "Button" width:48 height:21 
	label 'lbl1' "Label" width:117 height:36
)
CreateDialog TestRollout style:#(#style_minimizebox) pos:[100,100]

-- CreateDialog TestRollout style:#(#style_titlebar, #style_border, #style_sysmenu) 
-- CreateDialog TestRollout style:#(#style_border, #style_sysmenu) 
-- for i in 
-- 	#(
-- 		#(#style_border),
-- 		#(#style_titlebar),
-- 		#(#style_toolwindow),
-- 		#(#style_resizing),
-- 		#(#style_minimizebox),
-- 		#(#style_maximizebox),
-- 		#(#style_symenu),
-- 		#(#style_sunkenedge)
-- 	)
-- 	do
-- 	(
-- 		rollout TestRollout "TEST" width:160 height:96
-- 		(
-- 			button 'btn1' "Button" width:48 height:21 
-- 			label 'lbl1' "Label" width:117 height:36 
-- 		)
-- 		CreateDialog TestRollout style:i pos:(random [0,0] [1000,1000])
-- 		TestRollout.lbl1.caption = i as string
-- 		TestRollout.name = i as string
-- 	)
-- k = -1
-- for i in 
-- 	#(
-- 		#(#style_border),
-- 		#(#style_titlebar),
-- 		#(#style_toolwindow),
-- 		#(#style_resizing),
-- 		#(#style_minimizebox),
-- 		#(#style_maximizebox),
-- 		#(#style_symenu),
-- 		#(#style_sunkenedge)
-- 	)
-- 	do
-- 	(
-- 		CreateDialog TestRollout style:i pos:[(k+=1)*160,100]
-- 		TestRollout.lbl_Title.caption = i[1] as string
-- 		TestRollout.name = i[1] as string
-- 	)
-- for i in 
-- 	#(
-- 		#(#style_border),
-- 		#(#style_titlebar),
-- 		#(#style_toolwindow),
-- 		#(#style_resizing),
-- 		#(#style_minimizebox),
-- 		#(#style_maximizebox),
-- 		#(#style_symenu),
-- 		#(#style_sunkenedge)
-- 	)
-- 	do
-- 	(
-- 		print i
-- 	)
	


-- TestRollout.name
-- TestRollout.open
-- TestRollout.title = "aaa"
-- TestRollout.controls
-- TestRollout.dialogBar --如果被用作dialogBar返回true,但是dialogBar是啥??

-- TestRollout.visible x
-- TestRollout.size x
-- TestRollout.pos x
-- TestRollout.caption = "aaa" x
-- 更多属性帮助--http://docs.autodesk.com/3DSMAX/16/ENU/MAXScript-Help/index.html?url=files/GUID-3880D745-8496-4DFB-8B31-4DEAC152DBB3.htm,topicNumber=d30e629538

-- #(#style_border)
-- #(#style_titlebar)
-- #(#style_toolwindow)
-- #(#style_resizing)
-- #(#style_minimizebox)
-- #(#style_maximizebox)
-- #(#style_symenu)
-- #(#style_sunkenedge)

-- 样式标志的数组，可以是以下一个或多个:
-- #style_border:创建一个带有双边框但没有标题的窗口。
-- #style_titlebar:创建带有标题栏的对话框。
-- #style_toolwindow:创建一个工具窗口，它有一个标题栏，用作浮动工具栏。工具窗口的标题栏比普通标题栏短，并且窗口标题用较小的字体绘制。
-- #style_resizing:创建一个厚框架的窗口，可以用来调整窗口的大小。
-- #style_minimizebox: 创建一个带有最小化按钮的窗口。
-- #style_maximizebox: 创建一个带有最大化按钮的窗口。
-- #style_symenu:创建一个在标题栏中有窗口菜单的窗口。
-- #style_sunkenedge:指定窗口具有3D外观，其形式为带凹边的边框。