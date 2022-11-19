 try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:160 height:232
(
	local MyHandle
	
	fn setWindowPlacement Handle state = --1是最大化,2最大化,其他:还原
	(
		local
		WM_SYSCOMMAND = 0x112,
		SC_MINIMIZE = 0xf020,
		SC_MAXIMIZE = 0xf030,
		SC_RESTORE = 0xf120
		case state of
		(
			1 : windows.sendMessage Handle WM_SYSCOMMAND SC_MINIMIZE 0
			2 : windows.sendMessage Handle WM_SYSCOMMAND SC_MAXIMIZE 0
			default : windows.sendMessage Handle WM_SYSCOMMAND SC_RESTORE 0
		)			
	)
	
	fn RequireWindowRedraw Handle =
	(
		local
		WM_PAINT = 0x000F
		windows.sendMessage Handle WM_PAINT 0 0
	)
	
	fn GetCusFnClass = 
	(
		source = 
		"
		using System;
		using System.Runtime.InteropServices;
		
		public class CusFn
		{
			[DllImport(\"User32\")]
			public static extern void SetCursorPos(int x, int y);

			[DllImport(\"user32.dll\", CharSet = CharSet.Auto)]
			public static extern int SetClassLong(IntPtr hwnd, int nIndex, int dwNewLong);
			[DllImport(\"user32.dll\", CharSet = CharSet.Auto)]
			public static extern int GetClassLong(IntPtr hwnd, int nIndex);
			public void SetWindowShadowByHandle(int hWnd)
			{
				const int CS_DropSHADOW = 0x20000;
				const int GCL_STYLE = (-26);
				
				SetClassLong((IntPtr)hWnd, GCL_STYLE, GetClassLong((IntPtr)hWnd, GCL_STYLE) | CS_DropSHADOW);
			}
		}
		"
		csharpProvider = dotnetobject "Microsoft.CSharp.CSharpCodeProvider"
		compilerParams = dotnetobject "System.CodeDom.Compiler.CompilerParameters"
		compilerParams.GenerateInMemory = on
		compilerResults = csharpProvider.CompileAssemblyFromSource compilerParams #(source)
		compilerResults.CompiledAssembly.CreateInstance "CusFn"
	)
	fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y] --标题栏依赖
	local
	--标题栏功能
	_Cursor = (dotnetclass "System.Windows.Forms.Cursor"),
	_Offset = [0,0],
	_Pin = false
	--标题栏
	dotNetControl 'lbl_Ico' "Label" pos:[0,0] width:20 height:20
	dotNetControl 'lbl_Tit' "Label" pos:[20,0] width:120 height:20 
	dotNetControl 'btn_Cls' "Button" pos:[140,0] width:20 height:20
	
	local _CusClass = GetCusFnClass()
	button 'btn1' "Button" pos:[8,8] width:56 height:24 align:#left
	
	fn RefreshRol rolout:unnamedRollout = 
	(
		rolout.width += 1; rolout.width -= 1 --这样才能刷新dotnet控件的显示,比如重设置可见性.
		setWindowPlacement unnamedRollout.hwnd 1
		windows.processPostedMessages()
		setWindowPlacement unnamedRollout.hwnd 0
		--很意外,需要想办法重新绘制列表,在切换方法中实现了.
	) 
	fn _UIInitialization =
	(
		--生成数据
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
			colr = copy colr
			if classOf colr == Color do colr = colr as point3
			if dir do return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3]
			for i = 1 to 3 do (colr[i] += val;if colr[i] > 255 do colr[i] -= 256;if colr[i] < 0 do colr[i] += 256)
			if asDotNet then return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3] else return (colr  as Color)
		)
		local
			TitleImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAJBQTFRFAAAAAF//AF//AF//AF//AAAAAmX4Amj1Amj1BnXpB3nlA2rz////F7anIuB8Ju5uJeh0J/JqMvdgavRFlPIydfRAn/Et2u0Rzu4X7uwI8ewH/esB/usB/9EA/7sA/7MA/6gA/5IA/4IA/4MA/nsA+WYF6jQT/nYB918H7UAQ6jQT918H8EgN7kAP6C4V5CIYaIby8QAAADB0Uk5T//b/63oA/+t6/bYq/4+/gfzcg3Rlff5U//9CaEhf8Hj/94H/8HN6wrDr66iJ///2Y3/S2gAAAJZJREFUeJxNj20XQkAQhW9YxEYiIhGxRdH//3eN9bLNh5lzn3PPnRlgp+kG2FakTcteAAAGzdw7LhbNCemWc/B8ScA5EcN2vWMAbA4qPziFEdYMOcJznKzBskXxJc2gAEOSXnNAAYYsvxUlFKCg4l7V04rt5LJ6NK0Q82LprZvnq+sxncfnuPb9GUblYBDdMH7/Hxc96R/+dwoZhFwK/QAAAABJRU5ErkJggg==",
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
-- 			btnImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAlQTFRFAAAAAAAA////g93P0gAAAAN0Uk5TAP//RFDWIQAAABpJREFUeJxjYAABUdbQAAZJtlUTICwEIFkCAGRjCIZ/vKakAAAAAElFTkSuQmCC"
		--设置标题栏
		lbl_Ico.image = TitleImage;
		lbl_Ico.BackColor = TitleColor --图标栏
		lbl_Tit.BackColor = TitleColor;lbl_Tit.ForeColor = ForeColor;lbl_Tit.TextAlign = MiddleLeft --标题栏
		btn_Cls.BackColor = TitleColor;btn_Cls.ForeColor = ForeColor;btn_Cls.flatstyle = flat;btn_Cls.flatappearance.borderSize = 0;btn_Cls.FlatAppearance.MouseOverBackColor = RedColor --关闭按钮
		lbl_Tit.text = "-------"
		btn_Cls.text = "X"
	)
	on unnamedRollout open do
	(
		_UIInitialization()
		_CusClass.SetWindowShadowByHandle (unnamedRollout.hwnd as integer)
		RefreshRol()
	)
	on btn1 pressed  do
	(
		_CusClass.SetWindowShadowByHandle (unnamedRollout.hwnd as integer)
	)
	
	--标题栏响应
	on lbl_Ico mouseDown do
	(_Pin = true;_Offset = (GetDialogPos unnamedRollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico mouseUp do
	(_Pin = false)
	on lbl_Ico mouseMove do
	if _Pin do SetDialogPos unnamedRollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit mouseDown do
	(_Pin = true;_Offset = (GetDialogPos unnamedRollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit mouseUp do
	_Pin = false
	on lbl_Tit mouseMove do
	if _Pin do SetDialogPos unnamedRollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on btn_Cls click do
	DestroyDialog unnamedRollout
)
createdialog unnamedRollout style:#() pos:[-1000,-1000]
try(destroydialog unnamedRollout)catch() --必须创建再重启一次才能刷新.
createdialog unnamedRollout style:#()