try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:160 height:128
(
	dotnetcontrol 'ckb1' "CheckBox"
	dotnetcontrol 'ckb2' "CheckBox"
	dotnetcontrol 'ckb3' "CheckBox"
	on unnamedRollout open do
	(
-- 		平面风格
-- 		ckb3.flatstyle =  (dotNetclass "System.Windows.Forms.FlatStyle").flat --平常平面,指针三维.
-- 		ckb3.Appearance = ckb3.Appearance.Button
-- 		ckb3.Flatappearance.borderSize = 0
-- 		ckb3.Flatappearance.CheckedBackColor = (DotNetClass "System.Drawing.Color").fromARGB 0 255 0
-- 		ckb3.Flatappearance.MouseDownBackColor = (DotNetClass "System.Drawing.Color").fromARGB 0 0 255
-- 		ckb3.Flatappearance.MouseOverBackColor = (DotNetClass "System.Drawing.Color").fromARGB 255 0 0
-- 		弹出风格
-- 		ckb3.flatstyle = (dotNetclass "System.Windows.Forms.FlatStyle").Popup --平常平面,指针三维.
		ckb3.flatstyle = (dotNetclass "System.Windows.Forms.FlatStyle").Standard --标准三维
		ckb3.Appearance = ckb3.Appearance.Button
		ckb3.Flatappearance.borderSize = 0
		ckb3.backcolor = (DotNetClass "System.Drawing.Color").fromARGB 255 0 0
	)
	on ckb3 CheckStateChanged s e do
	(
		print s
		show s
		print s.Checked
	)
)
createdialog unnamedRollout