try(DestroyDialog CreatePreviewRollout)catch()
rollout CreatePreviewRollout "创建预览0.3" width:208 height:88
(
	
	dotNetControl 'edt_path' "TextBox" pos:[8,11] width:168 height:16 align:#left
	dotNetControl 'btn_path' "Button" text:"\x2026" pos:[176,10] width:18 height:18 align:#left
	
	dotNetControl 'edt_segment' "TextBox" pos:[9,37] width:168 height:16 align:#left
	dotNetControl 'btn_segment' "Button" text:"\x27FC" pos:[176,36] width:18 height:18 align:#left
	
	spinner 'spn_rate' "帧率" pos:[8,63] width:44 height:16 enabled:true range:[1,100,30] type:#integer align:#left
	dropdownList 'ddl_type' "" pos:[76,61] width:56 height:22 items:#("AVI", "MP4", "MOV", "GIF") align:#left
	dotNetControl 'btn_build' "Button" text:"创建预览" pos:[138,60] width:62 height:24 align:#left
	
	include "create_Preview3.ms"
	
	on CreatePreviewRollout open do
	(
		--初始化样式
		fn get_dotnet_color n = (colr = (colorMan.getColor n) * 255; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
		local
		BackColor = get_dotnet_color #background, --暂时作为全局变量,后续合并进窗口中
		ForeColor = get_dotnet_color #text,
		PanelColor = if colorMan.getColor #button == [0,0,0] then get_dotnet_color #window else get_dotnet_color #button, --高低版本的颜色定义不同,获取不到button色时,获取旧版的window色,获取不到的色彩会是黑色[0,0,0].
		-- WindowTextColor = get_dotnet_color #windowtext
		SepBackColor = get_dotnet_color #trackbarBg,
		--设置dotnet风格
		BorderSize = 0,
		BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,
		Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat
		for edt in #(edt_path,edt_segment) do (edt.BackColor = PanelColor; edt.ForeColor = ForeColor;edt.BorderStyle = BorderStyle;edt.AutoSize = false)
		for btn in #(btn_path,btn_segment,btn_build) do (btn.BackColor = BackColor; btn.ForeColor = ForeColor; btn.Flatstyle = Flat; btn.Flatappearance.borderSize = BorderSize)
		
		--初始化数据
		edt_path.text = desktop_folder
		edt_segment.text = (animationRange.start.frame as integer) as string + "," + (animationRange.end.frame as integer) as string + ":视口预览"
	)
	on btn_build click s e do make_preview()
	on btn_path click s e do
	(
		edt_path.text = if try(local p = getSavePath(); doesFileExist p)catch(false) then p + "\\" else desktop_folder
	)
	
	on btn_segment click s e do
	(
		edt_segment.text = (animationRange.start.frame as integer) as string + "," + (animationRange.end.frame as integer) as string + ":视口预览"
	)
)
CreateDialog CreatePreviewRollout