-- fn 按内容递归搜索ms文件 根目录: stext:"try" filesArray:#() =
-- (
-- 	for fname in GetFiles (根目录 + @"\*.ms") do
-- 	(
-- 		f = openFile fname mode:"r"
-- 		r = skipToString f stext
-- 		if r != undefined do append filesArray fname
-- 		close f
-- 	)

-- 	for dir in GetDirectories (根目录 + @"\*") do
-- 	(
-- 		按内容递归搜索ms文件 根目录:dir stext:stext filesArray:filesArray
-- 	)
-- 	
-- 	return filesArray
-- )

-- 按内容递归搜索ms文件 根目录:@"F:\我的坚果云\max脚本\工作中用到的脚本" 

try(destroydialog SearchMsRollout)catch()
rollout SearchMsRollout "SearchMsContent" width:168 height:200
(
	fn 按内容递归搜索ms文件 根目录: stext:"try" filesArray:#() =
	(
		for fname in GetFiles (根目录 + @"\*.ms") do
		(
			f = openFile fname mode:"r"
			r = skipToString f stext
			if r != undefined do append filesArray fname
			close f
		)

		for dir in GetDirectories (根目录 + @"\*") do
		(
			按内容递归搜索ms文件 根目录:dir stext:stext filesArray:filesArray
		)
		
-- 		return filesArray
	)
	fn getColor colr val:32 asDotNet:true dir:false =  --文字色 背景色为反求 val:0-1
	(
		colr = copy colr
		if classOf colr == Color do colr = colr as point3
		if dir do return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3]
		for i = 1 to 3 do (colr[i] += val;if colr[i] > 255 do colr[i] -= 256;if colr[i] < 0 do colr[i] += 256)
		if asDotNet then return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3] else return (colr  as Color)
	)
	
	local filesArray
	
	edittext edt_path "Path" pos:[8,8] width:112 height:16 --text:@"F:\我的坚果云\max脚本\工作中用到的脚本"
	button btn_path ".." pos:[128,8] width:32 height:16 toolTip:"确定文件目录,可以粘贴."
-- 	listbox lbx_filelist "" pos:[8,56] width:152 height:10
	dotNetControl 'lbl_BoneInfo_Ico' "Label" pos:[0,0] width:1 height:1 --莫名其妙,加了个Lable,就可以不显示虚线了.尺寸为0还不行,在屏幕外还不行.笑哭.
	dotNetControl 'lbx_filelist' "ListView" pos:[8,56] width:152 height:140 align:#left
	edittext edt_text "Text" pos:[8,32] width:96 height:16 --text:"try"
	button btn_Search "Search" pos:[112,32] width:48 height:16 toolTip:"区分大小写"
	
	on btn_path pressed do
	(
		getpath = getSavePath caption:"ScearchPath" initialDir:"scearchPath"
		if try(doesFileExist getpath)catch(false) do edt_path.text = getpath
	)
	on btn_Search pressed do
	(
		scearchPath = edt_path.text
		if doesFileExist scearchPath do
		(
			filesArray = #()
			按内容递归搜索ms文件 根目录:scearchPath stext:edt_text.text filesArray:filesArray
-- 			lbx_filelist.items = filesArray
			lbx_filelist.Items.Clear()
			
			lbx_filelist.items.addrange (for i in filesArray collect
			(
				li = dotNetObject "System.Windows.Forms.ListViewItem" (getFilenameFile i)
				li.ToolTipText = i
				li.UseItemStyleForSubItems = false
				li
			))
		) 
	)
	on SearchMsRollout open do
	(
		local
		align = dotNetClass "HorizontalAlignment",
		BC = (colorMan.getColor #background)*255,
		BackColor = getColor BC dir:true,
		PanelColor = getColor BC val:32,
		ForeColor = getColor BC val:152
		
		lbx_filelist.Columns.add "filename" 124 align.left
-- 		lbx_filelist.SmallImageList = imgList
		lbx_filelist.view = (dotNetClass "system.windows.forms.view").Details--lbx_filelist.view.Details .List
		lbx_filelist.HeaderStyle = lbx_filelist.HeaderStyle.none --隐藏表头,如果同时保证表头只有一项,则和ListBox差不多
		lbx_filelist.BackColor = BackColor
		lbx_filelist.ForeColor = ForeColor
-- 		lbx_filelist.BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None
		lbx_filelist.AutoSize = false
		lbx_filelist.HideSelection = off
		lbx_filelist.ShowItemToolTips = on
		lbx_filelist.FullRowSelect = on
		lbx_filelist.MultiSelect = off
	)
	on lbx_filelist DoubleClick e do 
	(
		filename = filesArray[lbx_filelist.SelectedIndices.item[0]+1]
		if keyboard.controlPressed then edit filename else filein filename
	)
)
createdialog SearchMsRollout