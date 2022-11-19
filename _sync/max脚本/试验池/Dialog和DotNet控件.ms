rollout unnamedRollout "Untitled" width:162 height:300
(
	local 
		item=0,
		ckbAppearance = (dotNetClass "System.Windows.Forms.Appearance").Button,
		BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,
		BorderSize = 0,
		Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat,
		testcolor1 = (DotNetClass "System.Drawing.Color").fromARGB 0 0 0,
		testcolor2 = (DotNetClass "System.Drawing.Color").fromARGB 255 0 128,
		MiddleRight = (dotnetclass "System.Drawing.ContentAlignment").MiddleRight,
		MiddleLeft = (dotnetclass "System.Drawing.ContentAlignment").MiddleLeft,
		MiddleCenter = (dotnetclass "System.Drawing.ContentAlignment").MiddleCenter
	
	button btn1 "Button" pos:[10,8] width:56 height:16
	button btn2 "Button" pos:[72,8] width:88 height:32
	
	dotNetControl pnl "Panel" pos:[8,48] width:88 height:56
	dotNetControl btn3 "Button" pos:[104,48] width:50 height:20
	dotNetControl btn4 "Button" pos:[104,80] width:50 height:20 visible:false
	
	dotNetControl ckb1 "CheckBox" pos:[40,112] width:96 height:20
	
	on unnamedRollout open do
	(
		lbx = dotNetObject "ListBox"
		for i in #("ss","dd","mm") do lbx.Items.Add i
		fn SelectedIndexChanged s e =
		(
			print item
		)
		dotNet.addEventHandler lbx "SelectedIndexChanged" SelectedIndexChanged
		
		pnl.controls.add Lbx
		
		--设置选择框属性
		ckb1.Appearance = ckbAppearance
		ckb1.Flatstyle = Flat;
		ckb1.Flatappearance.borderSize = BorderSize
		ckb1.backcolor = testcolor1
-- 		ckb1.ForeColor = testcolor2
-- 		ckb1.text = "选择按钮"
-- 		ckb1.TextAlign = MiddleCenter
	-- 		showproperties pnl
	)
	on btn2 pressed do
	(
		print 1
	)
	on btn3 mouseDown do
		print "mouse down!"
	on btn3 mouseUp do
		print "mouse up!"
)
CreateDialog unnamedRollout

-- showproperties unnamedRollout.btn4
showproperties unnamedRollout.ckb1