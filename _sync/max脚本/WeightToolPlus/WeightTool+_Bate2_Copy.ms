try(destroydialog WeightToolPlusB)catch()
-- fn GetCusFnClass = 
-- (
-- 	source = 
-- 	"
-- 	using System;
-- 	using System.Runtime.InteropServices;
-- 	
-- 	public class CusFn
-- 	{
-- 		[DllImport(\"User32\")]
-- 		public static extern void SetCursorPos(int x, int y);

-- 		[DllImport(\"user32.dll\", CharSet = CharSet.Auto)]
-- 		public static extern int SetClassLong(IntPtr hwnd, int nIndex, int dwNewLong);
-- 		[DllImport(\"user32.dll\", CharSet = CharSet.Auto)]
-- 		public static extern int GetClassLong(IntPtr hwnd, int nIndex);
-- 		public void SetWindowShadowByHandle(int hWnd)
-- 		{
-- 			const int CS_DropSHADOW = 0x20000;
-- 			const int GCL_STYLE = (-26);
-- 			
-- 			SetClassLong((IntPtr)hWnd, GCL_STYLE, GetClassLong((IntPtr)hWnd, GCL_STYLE) | CS_DropSHADOW);
-- 		}
-- 	}
-- 	"
-- 	csharpProvider = dotnetobject "Microsoft.CSharp.CSharpCodeProvider"
-- 	compilerParams = dotnetobject "System.CodeDom.Compiler.CompilerParameters"
-- 	compilerParams.GenerateInMemory = on
-- 	compilerResults = csharpProvider.CompileAssemblyFromSource compilerParams #(source)
-- 	compilerResults.CompiledAssembly.CreateInstance "CusFn"
-- )
-- _CusClass = GetCusFnClass()
-- rollout ReFreshingRollout "Untitled" width:0 height:0
-- (
-- 	on ReFreshingRollout open do _CusClass.SetWindowShadowByHandle (ReFreshingRollout.hwnd as integer)
-- )
-- createdialog ReFreshingRollout pos:[-10,-10] style:#()
-- destroydialog ReFreshingRollout --关闭掉即可应用阴影,而且一个有,所有的都会有
rollout WeightToolPlusB "Untitled" width:180 height:370
(
	--依赖函数
	fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y] --标题栏依赖
	local
	--标题栏功能
	_Cursor = (dotnetclass "System.Windows.Forms.Cursor"),
	_Offset = [0,0],
	_Pin = false,
	--列表项对齐
	_align = dotNetClass "HorizontalAlignment"
	--标题栏
	dotNetControl 'lbl_Ico' "Label" pos:[0,0] width:20 height:20
	dotNetControl 'lbl_Tit' "Label" pos:[20,0] width:140 height:20 
	dotNetControl 'btn_Cls' "Button" pos:[160,0] width:20 height:20
	--选择栏
	dotNetControl 'Btn_Shrink' "Button" text:"Shrink" pos:[2,22] width:44 height:24
	dotNetControl 'Btn_Grow' "Button" text:"Grow" pos:[46,22] width:44 height:24
	dotNetControl 'Btn_Ring' "Button" text:"Ring" pos:[90,22] width:44 height:24
	dotNetControl 'Btn_Loop' "Button" text:"Loop" pos:[134,22] width:44 height:24
	--快速权重栏
	dotNetControl 'Btn_000' "Button" text:"0" pos:[2,48] width:25 height:24
	dotNetControl 'Btn_010' "Button" text:".1" pos:[27,48] width:25 height:24
	dotNetControl 'Btn_025' "Button" text:".25" pos:[52,48] width:25 height:24
	dotNetControl 'Btn_050' "Button" text:".5" pos:[77,48] width:25 height:24
	dotNetControl 'Btn_075' "Button" text:".75" pos:[102,48] width:25 height:24
	dotNetControl 'Btn_090' "Button" text:".9" pos:[127,48] width:25 height:24
	dotNetControl 'Btn_100' "Button" text:"1" pos:[152,48] width:25 height:24
	--设置权重栏
	dotNetControl 'Btn_SetWeight' "Button" text:"SetWeight" pos:[2,74] width:70 height:24
	Spinner 'Spn_SetWeight' ""  pos:[74,78] width:50 height:24 range:[0,1,0] type:#float scale:0.005
	dotNetControl 'Btn_AddWeight' "Button" text:"+" pos:[126,74] width:25 height:24
	dotNetControl 'Btn_MinusWeight' "Button" text:"-" pos:[153,74] width:25 height:24
	--缩放权重栏
	dotNetControl 'Btn_ScaleWeight' "Button" text:"SetWeight" pos:[2,100] width:70 height:24
	Spinner 'Spn_ScaleWeight' ""  pos:[74,104] width:50 height:24 range:[0,1,0] type:#float scale:0.005
	dotNetControl 'Btn_AddScaleWeight' "Button" text:"+" pos:[126,100] width:25 height:24
	dotNetControl 'Btn_MinusScaleWeight' "Button" text:"-" pos:[153,100] width:25 height:24
	--复制粘贴栏
	dotNetControl 'Btn_CopyWeight' "Button" text:"Copy" pos:[2,126] width:48 height:24
	dotNetControl 'Btn_PasteWeight' "Button" text:"Paste" pos:[52,126] width:48 height:24
	dotNetControl 'Btn_BlendWeight' "Button" text:"Blend" pos:[130,126] width:48 height:24
	dotNetControl 'Btn_Paste-PosWeight' "Button" text:"Paste-Pos" pos:[4,152] width:68 height:24
	Spinner 'Spn_Paste-Pos-Tolerance' "Tolerance"  pos:[79,156] width:82 height:24 range:[0,10,0.1] type:#worldunits scale:0.1 align:#left
	--状态栏
	Label 'lbl_VSelected' "Selected 0" pos:[2,180] width:87 height:18 align:#left style_sunkenedge:true
	Label 'lbl_CopyBuffer' "Copy Buffer 0" pos:[91,180] width:87 height:18 align:#left style_sunkenedge:true
	--骨骼信息栏
	dotNetControl 'lbl_BoneInfo' "Label" text:"SelectBoneInfo" pos:[2,206] width:124 height:16
	Spinner 'Spn_BoneWeight' ""  pos:[128,204] width:50 height:24 range:[0,1,0] type:#float scale:0.005
	dotNetControl 'Lbx_Bones' "ListView" pos:[2,224] width:176 height:134
	--初始化UI
	fn _UIInitialization =
	(
		--设置阴影
-- 		_CusClass.SetWindowShadowByHandle (WeightToolPlusB.hwnd as integer)
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
			Padding = dotNetObject "System.Windows.Forms.Padding" 0 -10 0 -10,
	-- 		BorderSize = 0,
			Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat,
			MiddleLeft = (dotnetclass "System.Drawing.ContentAlignment").MiddleLeft
-- 			btnImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAlQTFRFAAAAAAAA////g93P0gAAAAN0Uk5TAP//RFDWIQAAABpJREFUeJxjYAABUdbQAAZJtlUTICwEIFkCAGRjCIZ/vKakAAAAAElFTkSuQmCC"
		--设置标题栏
		lbl_Ico.image = TitleImage;
		lbl_Ico.BackColor = TitleColor --图标栏
		lbl_Tit.BackColor = TitleColor;lbl_Tit.ForeColor = ForeColor;lbl_Tit.TextAlign = MiddleLeft --标题栏
		btn_Cls.BackColor = TitleColor;btn_Cls.ForeColor = ForeColor;btn_Cls.flatstyle = flat;btn_Cls.flatappearance.borderSize = 0;btn_Cls.FlatAppearance.MouseOverBackColor = RedColor --关闭按钮
		lbl_Tit.text = "WeightTool+(Bate2)"
		btn_Cls.text = "X"
		--设置按钮风格
		for c in 
		#(--选择栏
		'Btn_Shrink',
		'Btn_Grow',
		'Btn_Ring',
		'Btn_Loop',
		--快速权重栏
		'Btn_000',
		'Btn_010',
		'Btn_025',
		'Btn_050',
		'Btn_075',
		'Btn_090',
		'Btn_100',
		--设置权重栏
		'Btn_SetWeight',
		'Btn_AddWeight',
		'Btn_MinusWeight',
		--设置权重栏
		'Btn_ScaleWeight',
		'Btn_AddScaleWeight',
		'Btn_MinusScaleWeight',
		--复制粘贴栏
		'Btn_CopyWeight',
		'Btn_PasteWeight',
		'Btn_Paste-PosWeight',
		'Btn_BlendWeight'
		)
		do (c.BackColor = BackColor;c.ForeColor = ForeColor;c.Flatstyle = Flat;c.Padding = Padding;c.Flatappearance.borderSize = 0;c.image = btnImage)
		--初始化标签
		lbl_BoneInfo.BackColor = BackColor;lbl_BoneInfo.ForeColor = ForeColor
		--初始化listView
		Lbx_Bones.view = Lbx_Bones.view.Details --设置显示为细节,其他还有  .Details : <System.Windows.Forms.View>, read-only, static--.LargeIcon : <System.Windows.Forms.View>, read-only, static--.List : <System.Windows.Forms.View>, read-only, static-- .SmallIcon : <System.Windows.Forms.View>, read-only, static-- .Tile : <System.Windows.Forms.View>, read-only, static-- .value__ : <System.Int32>
		Lbx_Bones.HeaderStyle = Lbx_Bones.HeaderStyle.none --隐藏表头,如果同时保证表头只有一项,则和ListBox差不多
		Lbx_Bones.HideSelection = off
		Lbx_Bones.FullRowSelect = on --控制同时选中一行中的所有项目
		Lbx_Bones.MultiSelect = off --控制多选
		Lbx_Bones.SmallImageList = imgList
		Lbx_Bones.BackColor = BackColor
		Lbx_Bones.ForeColor = ForeColor
		for c in #(#("BoneName", 140, _align.Left), #("Weight",65, _align.Right)) do Lbx_Bones.Columns.add c[1] c[2] c[3]
		--创建悬浮按钮(或改成在任意部分右击,可以调出菜单,或着一个悬浮按钮,用来切换功能)
	)
	on WeightToolPlusB open do
	(
		_UIInitialization()
	)
	--标题栏响应
	on lbl_Ico mouseDown do(_Pin = true;_Offset = (GetDialogPos WeightToolPlusB) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico mouseUp do _Pin = false
	on lbl_Ico mouseMove do if _Pin do SetDialogPos WeightToolPlusB (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit mouseDown do(_Pin = true;_Offset = (GetDialogPos WeightToolPlusB) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit mouseUp do _Pin = false
	on lbl_Tit mouseMove do if _Pin do SetDialogPos WeightToolPlusB (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on btn_Cls click do DestroyDialog WeightToolPlusB
)
createdialog WeightToolPlusB style:#()