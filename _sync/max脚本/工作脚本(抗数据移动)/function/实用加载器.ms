--实用的文件和脚本加载器

try(destroydialog FileLoderRollout)catch()

rollout FileLoderRollout "实用加载器" width:288 height:216
(
	fn CreateCusFolderBrower = (
	try(
		local compilerParams = dotNetObject "System.CodeDom.Compiler.CompilerParameters" #(
			getDir #maxRoot + "Autodesk.Max.dll",
			getDir #maxRoot + "ManagedServices.dll")
		compilerParams.GenerateInMemory = on

		local compilerResults = (dotNetObject "Microsoft.CSharp.CSharpCodeProvider").CompileAssemblyFromSource compilerParams #(
		"
			using System;
			using Autodesk.Max;
			using SDK = ManagedServices.AppSDK;

			public class Dialogs {
				private static readonly IGlobal Global = Autodesk.Max.GlobalInterface.Instance;

				public static string BrowseForFolder(string title) {
					string folder = string.Empty;
					Global.COREInterface9.DoMaxBrowseForFolder(SDK.GetMaxHWND(), title, ref folder);

					return folder;
				}
			}
		"
		)
		compilerResults.CompiledAssembly.CreateInstance "Dialogs"
	)catch(
		false
		)
	)
	
	dotNetControl 'lbl_Ico' "Label" pos:[0,0] width:20 height:20 align:#left
	dotNetControl 'lbl_Tit' "Label" pos:[20,0] width:248 height:20 align:#left 
	dotNetControl 'btn_Cls' "Button" pos:[268,0] width:20 height:20 align:#left 
	dotNetControl 'pnl' "Panel" pos:[0,20] width:288 height:22 align:#left
	local 
		tb = dotNetObject "TabControl",
		txtA = dotNetObject "TextBox",
		txtB = dotNetObject "TextBox"
--	A组件
	dotNetControl 'btnA1' "Button" pos:[4,46] width:88 height:20 align:#left
	dotNetControl 'btnA2' "Button" pos:[96,46] width:88 height:20 align:#left
	dotNetControl 'btnA3' "Button" pos:[196,46] width:88 height:20 align:#left
-- 	dotNetControl 'ckbA' "Checkbox" pos:[204,47] width:82 height:16 align:#left
	dotNetControl 'lbxA' "ListBox" pos:[2,70] width:284 height:144 align:#left
-- 	B组件
	dotNetControl 'btnB1' "Button" pos:[4,46] width:88 height:20 align:#left
	dotNetControl 'btnB2' "Button" pos:[96,46] width:88 height:20 align:#left
	dotNetControl 'btnB3' "Button" pos:[196,46] width:88 height:20 align:#left
	dotNetControl 'lbxB' "ListBox" pos:[2,70] width:284 height:144 align:#left
	
	local
		FilePath = "",
		FilesList = #(),
		CurrentFilesList = #(),
		ScriptPath = "",
		ScriptsList = #(),
		CurrentScriptsList = #()
	local 
		_Cursor = (dotnetclass "System.Windows.Forms.Cursor"),
		_Offset = [0,0],
		_Pin = false,
		_FolderBrower = CreateCusFolderBrower(),
		_Controls = #(#(txtA,btnA1,btnA2,btnA3,lbxA),#(txtB,btnB1,btnB2,btnB3,lbxB)),
		_inifile = (getdir #userScripts)+@"\CommonLoder.ini"

	fn Refreshlbx lbx:lbxB Asset:CurrentScriptsList = --刷新列表
	try(
		lbx.Items.Clear()
		for p in Asset do lbx.Items.Add (getFilenameFile p)
		if lbx.Items.count > 0 do lbx.SetSelected 0 true
	)catch()
	fn RefreshRol rolout:FileLoderRollout = 
	(
		rolout.width += 1; rolout.width -= 1 --这样才能刷新dotnet控件的显示,比如重设置可见性.
		--很意外,需要想办法重新绘制列表,在切换方法中实现了.
	) 
	fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y]
	
-- 	fn loadFiles fpath:(if not _FolderBrower then getSavePath caption:"选择文件夹" historyCategory:(if tb.selectedindex == 0 then FilePath else ScriptPath) else _FolderBrower.BrowseForFolder "选择文件夹") type:#(@"\*.ms", @"\*.mse") =  --#(@"\*.max") --读取文件
	fn loadFiles fpath:(getSavePath caption:"选择文件夹" historyCategory:(if tb.selectedindex == 0 then FilePath else ScriptPath)) type:#(@"\*.ms", @"\*.mse") =  --#(@"\*.max") --读取文件
	if classof fpath == String and DoesFileExist fpath do
	(
		local files = #()
		for f in type do files += getFiles(fpath + f)
		if type[1] == @"\*.max" then 
		(
			FilePath = fpath
			txtA.text = "" 
			setINISetting _inifile "DirPath" "FilePath" FilePath
		)
		else 
		(
			ScriptPath = fpath
			txtB.text = ""
			setINISetting _inifile "DirPath" "ScriptPath" ScriptPath
		)
		files
	)
	
	on btnA1 click do  --加载当前文件目录
	(
		lbxA.text = ""
		CurrentFilesList = FilesList = loadFiles fpath:maxfilepath type:#(@"\*.max")
		Refreshlbx lbx:lbxA Asset:CurrentFilesList
	)
	on btnA2 click do  --加载指定文件目录
	(
		lbxA.text = ""
		CurrentFilesList = FilesList = loadFiles type:#(@"\*.max")
		Refreshlbx lbx:lbxA Asset:CurrentFilesList
	)
	on btnA3 click do  --打开指定文件目录
	(
		shellLaunch "explorer.exe" FilePath
	)
	on btnB1 click do  --加载工具所在目录
	(
		lbxA.text = ""
		CurrentScriptsList = ScriptsList = loadFiles fpath:(getFilenamePath(getThisScriptFilename()))
		Refreshlbx lbx:lbxB Asset:CurrentScriptsList
	)
	on btnB2 click do  --加载指定脚本目录
	(
		lbxA.text = ""
		CurrentScriptsList = ScriptsList = loadFiles()
		Refreshlbx lbx:lbxB Asset:CurrentScriptsList
	)
	on btnB3 click do  --打开脚本目录
	(
		shellLaunch "explorer.exe" ScriptPath
	)
	
	--加载响应
	on lbxA DoubleClick e do 
	(
		checkForSave()
		--当按下Ctrl,抑制所有参与的对话框.
		if keyboard.controlPressed then loadMaxFile CurrentFilesList[lbxA.SelectedIndex+1] useFileUnits:true quiet:true else loadMaxFile CurrentFilesList[lbxA.SelectedIndex+1]
	)
	on lbxB DoubleClick e do 
	(
		filein CurrentScriptsList[lbxB.SelectedIndex+1]
	)

	--杂项
	on tb selected s e do Switch2Function page:(e.TabPageIndex+1)
	on lbl_Ico mouseDown do (_Pin = true;_Offset = (GetDialogPos FileLoderRollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico mouseUp do (_Pin = false)
	on lbl_Ico mouseMove do if _Pin do SetDialogPos FileLoderRollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit mouseDown do (_Pin = true;_Offset = (GetDialogPos FileLoderRollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit mouseUp do _Pin = false
	on lbl_Tit mouseMove do if _Pin do SetDialogPos FileLoderRollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on btn_Cls click do DestroyDialog FileLoderRollout
		
	on FileLoderRollout open do
	(
		fn StringToImage str = -- http://lonerobot.net/ --给UI初始化调用
		(
			local ConvertClass = dotNetClass "System.Convert"
			local ImageClass = dotNetClass "System.Drawing.Image"
			byteArr = ConvertClass.FromBase64String str
			memstream = dotnetobject "System.IO.MemoryStream" byteArr
			DecodedImg = ImageClass.fromstream memstream
			memstream.close() ; return DecodedImg
		)
		fn getColor colr val:32 asDotNet:true dir:false =  --文字色 背景色为反求 val:0-1
		(
			--假如背景色 68 68 68 面板色100 100 100 字体色 220 220 220
			--要从68 获取到另外两者,但不能大于255 或小于0,且三个颜色要互相配合满足对比度
			colr = copy colr
			if classOf colr == Color do colr = colr as point3
			if dir do return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3]
			for i = 1 to 3 do (colr[i] += val;if colr[i] > 255 do colr[i] -= 256;if colr[i] < 0 do colr[i] += 256)
			if asDotNet then return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3] else return (colr  as Color)
		)
		
		local
			TitleImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAALpQTFRFAAAAlH0AmIIA5MoE5cwCe2QA/ucMf2cA07kA/ucM1LgAWkEA/eUKXkUAw6gAxakAs4oAz7IA4ccE9N0K/ucM/ucMtYsAf1kA98MQ+MQQg14AWzMA67kO/uIM7LoOXjsAKQ4A2qoI26sIMBMAdmEAeWMApo0AqJMAz7cA/MwP0rgA8twF/tcP3akLXzoAXDgA3KgI9N0KUToA/uIM9sEQmnMAmXEAV0EAj2kAyZoFOBgANBMAyJgAkm4ATHwRvAAAAD50Uk5TADk5qqog+yCO/44O8Q5ycleOrMnm/Vcm2NgmELr/uhAElJQEHR1WVo/oj8j9mhERmsgI+dQ7OwgwegUFejDJ7uP3AAAAjUlEQVR4nFXN1xKCMBAF0LWhqyjdjgo2QKxg1///LRM3mUnuS3JPZjcAlEoV9NTqem8YRlODFmJb7R0T0ewq0EMWi+6243p+wCHwPdfpw2CISkZjgMk0lDWczfnQIpIQL2nNSsJa/LGRsBWQsOk0ZZsyATvM94fjKccz9UtRXvl5K4v7Hx7PF728P1+AH53iCw2ZVIZiAAAAAElFTkSuQmCC",
			BC = (colorMan.getColor #background)*255,
			BackColor = getColor BC dir:true,
			PanelColor = getColor BC val:32,
			ForeColor = getColor BC val:152,
			TitleColor = getColor BC val:-16,
			RedColor = getColor [232,17,35] dir:true,
			ForeColor = getColor BC val:152,
			BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,
	-- 		BorderSize = 0,
			Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat,
			MiddleLeft = (dotnetclass "System.Drawing.ContentAlignment").MiddleLeft
		lbl_Ico.image = TitleImage;
		lbl_Ico.BackColor = TitleColor --图标栏
		lbl_Tit.BackColor = TitleColor;lbl_Tit.ForeColor = ForeColor;lbl_Tit.TextAlign = MiddleLeft --标题栏
		btn_Cls.BackColor = TitleColor;btn_Cls.ForeColor = ForeColor;btn_Cls.flatstyle = flat;btn_Cls.flatappearance.borderSize = 0;btn_Cls.FlatAppearance.MouseOverBackColor = RedColor --关闭按钮
		lbl_Tit.text = "实用加载器"
		btn_Cls.text = "X"
		
		tb.TabPages.add "文件"
		tb.TabPages.add "脚本"
		tb.width = 288
		pnl.controls.add tb
		
		fn Switch2Function s e page: =
		(
			if page == unsupplied then page = tb.selectedindex + 1 else tb.selectedindex = page - 1
			for c in (_Controls[1] + _Controls[2]) do
			(
				c.visible = false; c.Width = c.Height = 1
			)
			for c in _Controls[page] do 
			(
				c.visible = true
				case c.name of
				(
					"选框" : (c.Width = 82;c.Height = 16) --选框
					"文本" : (c.Width = 125;c.Height = 14) --文本框
					"按钮" : (c.Width = 88;c.Height = 20) --按钮
					"列表" : (c.Width = c.Width = 284;c.Height = c.Height = 144) --列表
				)
			)
			setINISetting _inifile "PageState" "State" (page as string)
			RefreshRol()
		)
		dotnet.addEventHandler tb "click" Switch2Function
		dotNet.setLifetimeControl tb #dotnet
		for c in #(txtA,txtB) do
		(
			c.location.x = 160
			c.location.y = 3
			c.width = 125
			c.BackColor = PanelColor
			c.ForeColor = ForeColor
			c.BorderStyle = BorderStyle
			dotnet.addEventHandler c "GotFocus" (fn 'SetInFocus' = enableAccelerators=false) --panel中的文本框需要在激活时关闭快捷键. print 1)--
			dotnet.addEventHandler c "LostFocus" (fn 'SetOutFocus' = enableAccelerators=true) --panel中的文本框需要在激活时关闭快捷键 print 2)--
			dotNet.setLifetimeControl c #dotnet
			pnl.controls.add c
			c.BringToFront()
			c.name = "文本"
		)
		for c in #(lbxA, lbxB) do (c.BackColor = PanelColor;c.ForeColor = ForeColor;c.BorderStyle = BorderStyle;c.AutoSize = false;c.name = "列表") --设置过滤器颜色
		for c in #(btnA1,btnA2,btnA3,btnB1,btnB2,btnB3) do 
		(c.BackColor = BackColor;c.ForeColor = ForeColor;c.Flatstyle = Flat;c.Flatappearance.borderSize = 0;c.name = "按钮") --设置按钮风格
		btnA1.text = "当前文件目录"
		btnA2.text = "指定文件目录"
		btnA3.text = "打开文件目录"
		btnB1.text = "工具所在目录"
		btnB2.text = "指定脚本目录"
		btnB3.text = "打开脚本目录"
		
		fn FilterFilesList s e = 
		(
			CurrentFilesList = for i in FilesList where matchPattern (getFilenameFile(i)) pattern:("*"+s.text+"*") collect i
			Refreshlbx lbx:lbxA Asset:CurrentFilesList
		)
		fn FilterScriptsList s e = 
		(
			CurrentScriptsList = for i in ScriptsList where matchPattern (getFilenameFile(i)) pattern:("*"+s.text+"*") collect i
			Refreshlbx lbx:lbxB Asset:CurrentScriptsList
		)
		
		dotnet.addEventHandler txtA "TextChanged" FilterFilesList
		dotNet.setLifetimeControl txtA #dotnet
		dotnet.addEventHandler txtB "TextChanged" FilterScriptsList
		dotNet.setLifetimeControl txtB #dotnet
		
		--加载配置
		ls = getINISetting _inifile "PageState" "State"
		if ls != "" then Switch2Function 0 0 page:(ls as integer) else Switch2Function 0 0 page:1
		
		FilePath = getINISetting _inifile "DirPath" "FilePath"
		ScriptPath = getINISetting _inifile "DirPath" "ScriptPath"
		
		if FilePath != "" do 
		(
			CurrentFilesList = FilesList = loadFiles fpath:FilePath type:#(@"\*.max")
			Refreshlbx lbx:lbxA Asset:CurrentFilesList
		)
		if ScriptPath != "" do 
		(
			CurrentScriptsList = ScriptsList = loadFiles fpath:ScriptPath
			Refreshlbx lbx:lbxB Asset:CurrentScriptsList
		)
-- 		try(
-- 		)catch()--如果出错,就简单初始化(毕竟有可能储存了会导致崩溃的配置...)
		
-- 		for c in _Controls[1] do c.Left += 288
	)
-- 	on FileLoderRollout close do
-- 	(
-- 		--保存配置
-- 	)

)

createdialog FileLoderRollout style:#()