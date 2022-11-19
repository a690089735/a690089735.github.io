/*//////////   SCRIPT:   IneractiveLabels v1.0   //////////*/	
/*//////////   WRITTEN BY:   Branko Zivkovic   //////////*/
/*//////////   EMAIL:   barigazy@hotmail.com   //////////*/	
if (maxversion())[1] > 13000 do
(
global RandomLetters
try(destroydialog RandomLetters) catch() 
rollout RandomLetters " IneractiveLabels" width:300 height:120
(
	local lbl1, tb1, lbl2, tb2, cb, dnClock
	dotNetControl mxsPnl "MaxCustomControls.MaxUserControl" pos:[0,0]
	
	fn DisableAccel = (enableAccelerators = false) ; fn EnableAccel = (enableAccelerators = true)
	fn dxCalcGF = (DisableAccel()) ; fn dxCalcLF = (EnableAccel())	
	fn defPoint x y = (dotNetObject "System.Drawing.Point" x y)
	fn defSize x y = (dotNetObject "System.Drawing.Size" x y)
	fn defColor r g b = ((dotNetClass "System.Drawing.Color").FromArgb r g b)
	fn defFont fName fSize = (dotNetObject "System.Drawing.Font" fName fSize ((dotNetClass "System.Drawing.FontStyle").bold))
	local clr1 = (defColor 40 40 40), clr2 = (defColor 0 0 0), clr3 = (defColor 240 150 40), clr4 = (defColor 100 100 100)
	local font1 = (defFont "Swis721 Cn BT" 12), font2 = (defFont "Swis721 Cn BT" 10)
	local GM = (dotNetClass "System.Drawing.Drawing2D.LinearGradientMode").Vertical
	local BS = (dotNetClass "BorderStyle").None
	
	fn defLabel dxLbl w h locX locY txt = 
	(
		dxLbl.Location = defPoint locX locY ; dxLbl.AllowHtmlString = true ; dxLbl.Appearance.Font = font1
		dxLbl.Appearance.BackColor = clr1 ; dxLbl.Appearance.BackColor2 = clr2 ; dxLbl.Size = defSize w h
		dxLbl.Appearance.GradientMode = GM ; dxLbl.AutoSizeMode = dxLbl.AutoSizeMode.None ; dxLbl.Text = txt
		dxLbl.Appearance.TextOptions.HAlignment = dxLbl.Appearance.TextOptions.HAlignment.Center
	)
	fn textboxDef dnTB w h locX locY txt =
	(
		dnTB.Width = w ; dnTB.Height = h ; dnTB.Location = defPoint locX locY
		dnTB.Font = font1 ; dnTB.Text = txt ; dnTB.BackColor = clr3 ; dnTB.ForeColor = clr2 ; dnTB.BorderStyle = BS
		dnTB.Multiline = dnTB.AutoSize = false ; dnTB.AcceptsReturn = true ; dnTB.TextAlign = dnTB.TextAlign.Center
		dotnet.AddEventHandler dnTB "GotFocus" DisableAccel
		dotnet.AddEventHandler dnTB "LostFocus" EnableAccel
	)
	fn defCheckbox dxCB w h locX locY =
	(
		dxCB.Location = defPoint locX locY ; dxCB.Size = defSize w h ; dxCB.Text = "A c t i v a t e | D e a c t i v a t e  A u t o   M o d e"
		dxCB.BorderStyle = dxCB.BorderStyle.NoBorder ; dxCB.BackColor = clr2 ; dxCB.ForeColor = clr3 ; dxCB.Font = font2
	)
	fn randomChars str =
	(
		local rndCharStr = ""
		for c in 1 to str.count do
		(
			local rndSize = ((random 12 16) as string), rndColor = (#((random 80 255),(random 80 255), (random 80 255)) as string)
			append rndCharStr ("<size="+rndSize+"><color="+(substring rndColor 3 (rndColor.count-3))+">"+str[c]+"</color></size>")
		) ; rndCharStr
	)
	fn randomNumbers str =
	(
		local rndNumStr = "", nums = "0123456789"
		for c in 1 to str.count do
		(
			local charSize = "12", numSize = "14" ; rndColor = #((random 80 255),(random 80 255), (random 80 255)) as string
			if (findstring nums str[c]) == undefined then (append rndNumStr ("<size="+charSize+"><color=240,150,40>"+str[c]+"</color></size>"))
			else (append rndNumStr ("<size="+numSize+"><color=250,250,250>"+str[c]+"</color></size>"))
		) ; rndNumStr
	)		
	fn pressEnter s e = 
	(
		if e.KeyCode == e.KeyCode.Return do 
		(
			if s == tb1 then (lbl1.Text = randomChars s.Text) 
			else if s == tb2 do (lbl2.Text = randomNumbers s.Text)
		)
	)
	fn cbCC s e = (if s.Checked == true then dnClock.Start() else dnClock.Stop())
	fn clockTick s e =
	(
		lbl1.Text = (randomChars tb1.Text) ; tb2.Text =  ("Local Time: "+localtime) ; lbl2.Text = (randomNumbers tb2.Text)
	)
	on RandomLetters open do
	(
		mxsPnl.Width = RandomLetters.width ; mxsPnl.Height = RandomLetters.height ; mxsPnl.backcolor = clr1
		tb1 = dotNetObject "TextBox" ; textboxDef tb1 300 20 0 30 "Enter Your Text Here"
		lbl1 = dotNetObject "DevExpress.XtraEditors.LabelControl" ; defLabel lbl1 300 30 0 0 (randomChars tb1.Text)
		tb2 = dotNetObject "TextBox" ; textboxDef tb2 300 20 0 80 ("Local Time: "+localtime)
		lbl2 = dotNetObject "DevExpress.XtraEditors.LabelControl" ; defLabel lbl2 300 30 0 50 (randomNumbers tb2.Text)
		cb = dotNetObject "DevExpress.XtraEditors.CheckEdit" ; defCheckbox cb 300 20 0 100
		dnClock = dotNetObject "Timer" ; dnClock.Interval = 1000
		dotNet.AddEventHandler tb1 "KeyUp" pressEnter ; dotNet.AddEventHandler tb2 "KeyUp" pressEnter
		dotNet.AddEventHandler cb "CheckedChanged" cbCC ; dotNet.addEventHandler dnClock "Tick" clockTick
		mxsPnl.Controls.AddRange #(lbl1, tb1, lbl2, tb2, cb)
	)

)
createDialog RandomLetters style:#(#style_titlebar, #style_sysmenu, #style_toolwindow)	
)