try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:162 height:300
(
	button btn1 "Button" pos:[35,22] width:54 height:18
	dotNetControl test "RichTextBox" text:"测试文本" width:54 height:75 --不好用,需要在进入和离开时关闭和开启快捷键
	
	dotNetControl test2 "RichTextBox" width:54 height:75
	
	on unnamedRollout open do
	(
		test.ReadOnly = true
		test.BorderStyle = (dotnetclass "System.Windows.Forms.BorderStyle").None
-- 		ReadOnly
-- 		BackColor
-- 		ForeColor
-- 		BorderStyle
		
-- 		Fixed3D	2	
-- 		A three-dimensional border.

-- 		FixedSingle	1	
-- 		A single-line border.

-- 		None	0	
-- 		No border.
-- 		test.enabled = false
-- 		http://www.pinvoke.net/default.aspx/user32/HideCaret.html --隐藏光标
-- 		https://stackoverflow.com/a/42391380 --禁用选择(看起来没选择)
	)
	on test SelectionChanged s e do s.SelectionLength = 0 --用着莫名的不爽,不过很有效,--或者s.DeselectAll()
-- 	on test click s e do print 1 --禁用就不能点击啦
)
createdialog unnamedRollout