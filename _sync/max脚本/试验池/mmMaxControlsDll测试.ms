dotnet.loadAssembly @"C:\Users\许铮\Desktop\mmMaxControls.dll"
try(destroyDialog mmMaxControls)catch()
rollout mmMaxControls "mmMaxControls" width:235
(
	groupBox grpBtn "Button" width:225 height:55 pos:[5,5]
	dotNetControl mmBtn1 "mmMaxControls.Button" width:62 height:25 pos:[15,25]
	dotNetControl mmBtn2 "mmMaxControls.Button" width:60 height:25 pos:[80,25]
	dotNetControl mmBtn3 "mmMaxControls.Button" width:25 height:25 pos:[143,25]
	dotNetControl mmBtn4 "mmMaxControls.Button" width:50 height:25 pos:[171,25]
	
	groupBox grpChk "CheckButton" width:225 height:55 pos:[5,65]
	dotNetControl mmChk1 "mmMaxControls.CheckButton" width:25 height:25 pos:[15,85]
	dotNetControl mmChk2 "mmMaxControls.CheckButton" width:70 height:25 pos:[45,85]
	dotNetControl mmChk3 "mmMaxControls.CheckButton" width:72 height:25 pos:[120,85]
	dotNetControl mmChk4 "mmMaxControls.CheckButton" width:25 height:25 pos:[195,85]
	
	groupBox grpFlyBtn "FlyoutButton" width:110 height:60 pos:[5,125]
	dotNetControl mmFlyBtn "mmMaxControls.FlyoutButton" width:32 height:32 pos:[43,145]
	
	groupBox grpFlyChk "FlyoutCheckButton" width:110 height:60 pos:[120,125]
	dotNetControl mmFlyChk "mmMaxControls.FlyoutCheckButton" width:32 height:32 pos:[157,145]
	
	groupBox grpDrop "DropDownList" width:225 height:50 pos:[5,190]
	dotNetControl mmDrop "mmMaxControls.DropDownList" width:200 height:21 pos:[15,210]
	
	groupBox grpTxt "TextBox" width:225 height:120 pos:[5,245]
	dotNetControl mmText1 "mmMaxControls.TextBox" width:200 height:21 pos:[15,265]
	dotNetControl mmText2 "mmMaxControls.TextBox" width:200 height:63 pos:[15,290]
		
	groupBox grpSpn "Spinner" width:225 height:65 pos:[5,370]
	label mmSpn1Lab "That's draggable" pos:[15,390]
	dotNetControl mmSpn1 "mmMaxControls.Spinner" width:80 height:16 pos:[140,390]
	label mmSpn2Lab "And screen-wrapping" pos:[15,412]
	dotNetControl mmSpn2 "mmMaxControls.Spinner" width:80 height:16 pos:[140,412]
		
	on mmMaxControls open do
	(
		local logoImg = dotnetObject "System.Drawing.Bitmap" @"E:\我的坚果云\max脚本\容灾工具\容灾图标.png"
		local blueImg = dotnetObject "System.Drawing.Bitmap" @"E:\我的坚果云\max脚本\容灾工具\选项图标.png"
		local flyoutStrip = dotnetObject "System.Drawing.Bitmap" @"E:\我的坚果云\max脚本\容灾工具\选项图标16.png"
		
		mmBtn1.text = "DotNet"
		mmBtn1.image = logoImg
		mmBtn1.imageAlign = mmBtn1.imageAlign.MiddleLeft
		mmBtn1.TextAlign = mmBtn1.textAlign.MiddleRight
		
		mmBtn2.text = "Controls"
		
		mmBtn3.image = logoImg
		mmBtn3.ShowFocusFrame = off
						
		mmBtn4.text = "With"
		mmBtn4.FrameOnMouseOverOnly = on
		
		mmChk1.text = "A"
			
		mmChk2.text = "3dsmax"
		mmChk2.image = blueImg
		mmChk2.imageAlign = mmChk1.imageAlign.MiddleLeft
		mmChk2.TextAlign = mmChk1.textAlign.MiddleRight
		mmChk2.ShowFocusFrame = off
		
		mmChk3.text = "Look"
		mmChk3.ShowFocusFrame = off
		mmChk3.FrameOnMouseOverOnly = on
		
		mmChk4.image = blueImg
		mmChk4.ShowFocusFrame = off
		mmChk4.FrameOnMouseOverOnly = on
		
		mmText2.multiLine = on
			
		mmSpn1.minimum = 0.1
		mmSpn1.maximum = 1
		mmSpn1.increment = .001
		mmspn1.value = mmspn1.defaultValue = 0.5
		mmSpn1.decimalPlaces = 3
		
		mmSpn2.increment = 1
		mmSpn2.maximum = 10000
		mmSpn2.value = mmSpn2.defaultValue = 100
		mmSpn2.decimalPlaces = 0
			
		mmDrop.items.addRange #("A", "DropDownList", "control", "that", "inherits", "from", "Combobox")
		mmDrop.selectedIndex = 0
		
		mmFlyBtn.setImageStrip flyoutStrip 4
		mmFlyBtn.toolTips = #("Easily", "Set", "Button", "Tooltips")
		
		mmFlyChk.setImageStrip flyoutStrip 4
		mmFlyChk.toolTips = #("Same", "Thing", "But", "Checkable")
		mmFlyChk.flyoutTime = 100
	)
)
createDialog mmMaxControls