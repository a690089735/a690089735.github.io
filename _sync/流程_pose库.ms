try(DestroyDialog PoseLibRollout)catch()
rollout PoseLibRollout "MiniPoseLib" width:184 height:360 
(
	--图像处理
	fn ConvertImageToBase64String filename = --图片转base64
	(
		local ImageClass = dotNetClass "System.Drawing.Image"
		local ConvertClass = dotNetClass "System.Convert"
		memstream = dotnetobject "System.IO.MemoryStream"
		ImgLoaded = ImageClass.fromfile filename
		ImgLoaded.save memstream ImgLoaded.rawformat
		ImgLoaded.Dispose()
		Base64string = ConvertClass.ToBase64String (memstream.ToArray())
		memstream.close()
		return Base64String
	)
	fn ConvertBase64StringToImage str = --base64转图像
	(
		local ImageClass = dotNetClass "System.Drawing.Image"
		local ConvertClass = dotNetClass "System.Convert"
		bytearr = convertclass.FromBase64String str
		memstream = dotnetobject "System.IO.MemoryStream" bytearr
		DecodedImg = ImageClass.fromstream memstream
		memstream.close()
		return DecodedImg
	)
	fn viewShot256_base64 =(
		local
		ViewCubeState = ViewCubeOps.Visibility,sel = getCurrentSelection(),
		view_size = getViewSize(),side,
		img,imgFile = getdir #temp + @"\_temp.png",
		str

		ViewCubeOps.Visibility = false;clearSelection();forceCompleteRedraw doDisabled:true 
		
		side = if view_size.x < view_size.y then view_size.x - 62 else view_size.y - 62
		img = bitmap side side filename:imgFile
		pasteBitmap (gw.getviewportDib()) img (box2 ((view_size.x-side)*.5) ((view_size.y-side)*.5) side side) [0,0]
		
		save img
-- 	 	display img--没问题

		ViewCubeOps.Visibility = ViewCubeState;select sel

		str = ConvertImageToBase64String imgFile
		
		close img
		free img
		deleteFile imgFile
		
		str
	)
	
	--安全字符串
	fn filename_filter str =
	(
		for t in #( "?", "*", ":", "\"", "<", ">", "\\", "/", "|", "\n", "\t", "\r", "." ) do str = substituteString str t "" ; str --可以判断处理后的文本长度是不是变了,变了的话弹出一个气泡,提示不能有这些字符.当然,不提示也行.注意要排除点".",因为命名功能依赖于此
	)
	
	local --"\x0041\x0332"
	dataPath = getdir #userScripts + @"\_PlayerX\PoseLibrary",
	ini = dataPath + "\_PoseLibSetting.ini",
	filterStrRollout,
	filterStrRollout = rollout filterStrRollout "名称过滤" width:224 height:32
	(
		local parent = PoseLibRollout,cancel = true
		
		edittext 'edt_Str' "" pos:[8,6] width:160 height:20 align:#left
		button 'btn_ok' "确认" pos:[168,5] width:48 height:22 align:#left
		
		on filterStrRollout open do
		(
			edt_str.text = getINISetting parent.ini "Setting" "filterStr"
			setFocus edt_Str
		)
		on edt_Str changed t do
		(
			edt_Str.text = parent.filename_filter t
		)
		on btn_ok pressed do
		(
			setINISetting parent.ini "Setting" "filterStr" edt_str.text
			parent.filterStr = edt_str.text
			parent.reloadFilteredRoots edt_str.text
			parent.setState "名称过滤"
			cancel = false
			DestroyDialog filterStrRollout
		)
		on filterStrRollout close do
		(
			if cancel do parent.setState "取消编辑名称过滤"
		)
	),
	newTypeRollout,
	newTypeRollout = rollout newTypeRollout "新建分类" width:224 height:32
	(
		local parent = PoseLibRollout,cancel = true
		
		edittext 'edt_Str' "" pos:[8,6] width:160 height:20 align:#left
		button 'btn_ok' "确认" pos:[168,5] width:48 height:22 align:#left
		
		on newTypeRollout open do
		(
			setFocus edt_Str
		)
		on edt_Str changed t do
		(
			edt_Str.text = parent.filename_filter t
		)
		on btn_ok pressed do
		(
			if edt_Str.text.count > 0 then
			(
				local folderName = parent.dataPath + @"\" + edt_Str.text
				if doesDirectoryExist folderName then
				(
					messageBox "名称已存在." title:"提示"
				)else
				(
					makeDir folderName
					parent.reloadTypeFolders()
					parent.setState ("新建分类:"+edt_Str.text)
					cancel = false
					DestroyDialog newTypeRollout
				)
			)else
			(
				messageBox "名称不能为空." title:"提示"
			)
		)
		on newTypeRollout close do
		(
			if cancel do parent.setState "取消新建分类"
		)
	),
	newDataRollout,
	newDataRollout = rollout newDataRollout "新建pose数据" width:224 height:32
	(
		local parent = PoseLibRollout,cancel = true
		
		edittext 'edt_Str' "" pos:[8,6] width:160 height:20 align:#left
		button 'btn_ok' "确认" pos:[168,5] width:48 height:22 align:#left
		
		on newDataRollout open do
		(
			setFocus edt_Str
		)
		on edt_Str changed t do
		(
			edt_Str.text = parent.filename_filter t
		)
		on btn_ok pressed do
		(
			if edt_Str.text.count > 0 then
			(
				local dataName = parent.types[parent.ddl_types.selection] + edt_Str.text + ".data" --这个是有斜杠的
				if doesFileExist dataName then
				(
					messageBox "名称已存在." title:"提示"
				)else
				(
					if (sel = getCurrentSelection()).count > 0 then
					(
						local f = createFile dataName
						with printAllElements true format "%" #(for o in getCurrentSelection() collect #(o.name,if isValidNode (p = o.parent) then o.transform * Inverse p.transform else o.transform),parent.viewShot256_base64()) to:f
						close f
						parent.reloadDatas parent.types[parent.ddl_types.selection]
						parent.setState ("新建pose:"+edt_Str.text)
						cancel = false
						DestroyDialog newDataRollout
					)else
					(
						messageBox "没有选择任何物体." title:"提示"
					)
				)
			)else
			(
				messageBox "名称不能为空." title:"提示"
			)
		)
		on newDataRollout close do
		(
			if cancel do parent.setState "取消新建pose"
		)
	),
	imgPreviewRollout,
	imgPreviewRollout = rollout imgPreviewRollout "preview" width:256 height:256
	(
		dotNetControl 'img_preview' "PictureBox" pos:[0,0] width:256 height:256
		label 'over' "" pos:[0,0] width:256 height:256
		on imgPreviewRollout open do
		(
			img_preview.BackColor = (colr = (colorMan.getColor #background) * 255; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
			img_preview.SizeMode = (dotNetClass "System.Windows.Forms.PictureBoxSizeMode").StretchImage
		)
	),
	cursor = dotnetclass "System.Windows.Forms.Cursor",
	origin = 0.0,val = 0.0,

	filterStr = getINISetting ini "Setting" "filterStr",
	roots = #(),
	types = #(),
	datas = #(),
	nodes = #(),--临时记录的可操作节点,用于混合用(数据记录的节点可能和实际信息对不上,而且不论对不对的上都要转为节点,所以用这种方式记录一次.)(建议都是同一套东西记录的pose,不然可能会有意外问题.)
	stats = #(),--临时记录的当前相对变换,用于混合用.
	poses = #(),--临时记录的目标相对变换,用于混合用.
	preview = ""
	
	
	dropdownList 'ddl_roots' "" pos:[8,8] width:144 height:22 toolTip:"选择要应用pose的层次结构" align:#left
	button 'btn_filter_objects' "\x0041\x0346\x0332" pos:[152,7] width:24 height:24 toolTip:"设置层次结构的过滤名称" align:#left
	
	dropdownList 'ddl_types' "" pos:[8,40] width:144 height:22 toolTip:"选择分类pose数据的文件夹" align:#left
	button 'btn_types' "N" pos:[152,39] width:24 height:24 toolTip:"左键新建分类,右键重新加载数据列表" align:#left
	
	listbox 'lbx_datas' "" pos:[8,66] width:144 height:20 --toolTip:"pose数据列表" align:#left
	
	button 'btn_pose_apply' "A" pos:[152,72] width:24 height:24 align:#left toolTip:"加载并应用pose"
	dotNetControl 'btn_pose_set' "button" pos:[152,96] width:24 height:24 align:#left tooltip:"应用一定比例的pose"
	dotNetControl 'btn_pose_blend' "button" pos:[152,120] width:24 height:24 align:#left tooltip:"混合一定比例的pose"
	
	
	checkbutton 'btn_pose_preview' "P" pos:[152,192] width:24 height:24 align:#left toolTip:"打开pose预览窗口"
	
-- 	button 'btn_moveUp' "↑" pos:[152,200] width:24 height:24 toolTip:"上移选中的pose" align:#left
-- 	button 'btn_moveDown' "↓" pos:[152,224] width:24 height:24 toolTip:"下移选中的pose" align:#left
	button 'btn_pose_rename' "R" pos:[152,224] width:24 height:24 toolTip:"重命名选中的pose数据" align:#left enabled:false
	button 'btn_pose_change' "C" pos:[152,248] width:24 height:24 toolTip:"更改选中的pose数据" align:#left enabled:false
	button 'btn_pose_save' "+" pos:[152,280] width:24 height:24 toolTip:"添加新pose记录" align:#left
	button 'btn_pose_delete' "-" pos:[152,304] width:24 height:24 toolTip:"删除选中的pose" align:#left
	
	label 'lbl_state' "就绪." pos:[8,336] width:168 height:16 style_sunkenedge:true toolTip:"运行状态" align:#left
		
	Timer 'tmr_mouse' interval:20 active:false
	Timer 'tmr_state' interval:3250 active:false
	
	fn setState str =
	(
		tmr_state.active = false --不加这个也行,但保险起见,先关闭一下(清空上个操作)再打开
		lbl_state.text = str+"."
		tmr_state.active = true
	)
	fn reloadFilteredRoots str = --收集过滤的物体
	(
		local result = #()
		for s in filterString str "," do
			for obj in objects as array where (stricmp obj.name s) == 0 do append result obj
		roots = makeUniqueArray result
		ddl_roots.items = #("场景世界\x1F0A0") + (for root in roots collect root.name)
		if ddl_roots.selection < 1 do ddl_roots.selection = 1
-- 		print roots
	)
	fn reloadTypeFolders =
	(
		types = getDirectories (dataPath+@"\*")
		ddl_types.items = for type in types collect (local t = filterstring type @"/\";t[t.count])
	)
	fn setPreview id =
	(
		if imgPreviewRollout.open do
			if id > 0 then(
				
				local data = openfile datas[id],imgStr = (readValue data)[2]
				close data
				imgPreviewRollout.img_preview.image = ConvertBase64StringToImage imgStr
			)else
			(
				imgPreviewRollout.img_preview.image = undefined
			)
	)
	fn reloadDatas dir =
	try(
		datas = getFiles (dir + "*.data")
		lbx_datas.items = for d in datas collect getFilenameFile d
		setPreview lbx_datas.selection
	)catch(datas = lbx_datas.items = #())
		
	fn applyPoseData weight:1.0 =
	(
		--在父层级下搜寻名称,应用相对变换(可混合当前pose)
	)
	
	
	--过滤功能
	on ddl_roots selected id do
	(
		if id > 1 then select roots[id-1] else clearSelection()
	)
	on btn_filter_objects pressed do
	(
		CreateDialog filterStrRollout pos:(GetDialogPos PoseLibRollout + [-20,4]) modal:true style:#(#style_toolwindow,#style_sysmenu) parent:PoseLibRollout.hwnd
	)
	on btn_filter_objects rightclick do
	(
		if queryBox "确认刷新全部数据吗?" title:"提示" do
		(
			reloadFilteredRoots filterStr
			reloadTypeFolders()
			reloadDatas if (did = ddl_types.selection) > 0 then types[did] else ""
		)
	)
	
	--分类功能
	on ddl_types selected id do
	(
		reloadDatas types[id]
		setINISetting ini "Setting" "types_selection" (id as string)
	)
	on btn_types pressed do
	(
		CreateDialog newTypeRollout pos:(GetDialogPos PoseLibRollout + [-20,36]) modal:true style:#(#style_toolwindow,#style_sysmenu) parent:PoseLibRollout.hwnd
	)
	on btn_types rightclick do
	(
		if (did = ddl_types.selection) > 0 and queryBox "确认删除选中的分类吗?(此操作无法撤销)" title:"提示" do
		(
			HiddenDOSCommand ("rmdir \"" + types[did] + "\" /S /Q")
			setState ("删除分类:"+ddl_types.items[did])
			reloadTypeFolders()
			reloadDatas (if (did = ddl_types.selection) > 0 then types[did] else "")
		)
	)
	
	--数据功能
	on btn_pose_save pressed do
	(
		CreateDialog newDataRollout pos:(GetDialogPos PoseLibRollout + [-20,248]) modal:true style:#(#style_toolwindow,#style_sysmenu) parent:PoseLibRollout.hwnd
	)
	on btn_pose_delete pressed do
	(
		if (did = lbx_datas.selection) > 0 and queryBox "确认删除选中的pose吗?(此操作无法撤销)" title:"提示" do
		(
			deleteFile datas[did]
			setState ("删除pose数据:"+lbx_datas.items[did])
			reloadDatas types[ddl_types.selection]
		)
	)
	on lbx_datas doubleClicked id do
	(
		if (did = id) > 0 then
		(
			--收集资源
			nodes = #();poses = #()
			local f = openfile datas[did],
			data = readValue f
			close f
			if (rid = ddl_roots.selection) > 1 then
			(
				local range = join #() roots[rid-1]
				for i in data[1] do for n in range where n.name == i[1] do exit with (append nodes n;append poses i[2])
			)
			else
			(
				nodes = for i in data[1] collect (append poses i[2];getNodeByName i[1])
			)
			--应用变换
			local dostr ="应用pose:"+lbx_datas.items[did] as string
			undo dostr on (for i = 1 to nodes.count do nodes[i].transform = if isValidNode (p=nodes[i].parent) then poses[i] * p.transform else poses[i])
			setState dostr
		)else
		(
			messageBox "没有选择任何pose数据." title:"提示"
		)
	)
	on btn_pose_apply pressed do
	(
		if (did = ddl_types.selection) > 0 then
		(
			--收集资源
			nodes = #();poses = #()
			local f = openfile datas[did],
			data = readValue f
			close f
			if (rid = ddl_roots.selection) > 1 then
			(
				local range = join #() roots[rid-1]
				for i in data[1] do for n in range where n.name == i[1] do exit with (append nodes n;append poses i[2])
			)
			else
			(
				nodes = for i in data[1] collect (append poses i[2];getNodeByName i[1])
			)
			--应用变换
			local dostr ="应用pose:"+lbx_datas.items[did] as string
			undo dostr on (for i = 1 to nodes.count do nodes[i].transform = if isValidNode (p=nodes[i].parent) then poses[i] * p.transform else poses[i])
			setState dostr
		)else
		(
			messageBox "没有选择任何pose数据." title:"提示"
		)
	)
	
	--混合功能
	on btn_pose_blend MouseDown e do
	(
		origin = (cursor.Position).x
		val = 0.0
		tmr_mouse.active = true
	)
	on btn_pose_blend MouseUp e do
	(
		tmr_mouse.active = false
		tmr_state.active = true --setState "设置为x.x"
	)
	on tmr_mouse tick do
	(
		local offset = ((cursor.Position).x - origin)*0.01
		if offset > 1 do offset = 1.0
		if offset < 0 do offset = 0.0
		if val != offset do
		(
			val = offset
			lbl_state.text = (val as string + "正在开发中的功能")
		)
	)
	
	
	--预览
	on btn_pose_preview changed state do
	(
		if state then
		(
			CreateDialog imgPreviewRollout pos:(GetDialogPos PoseLibRollout + [-249,100]) style:#() parent:PoseLibRollout.hwnd
			setPreview lbx_datas.selection
		)else
		(
			DestroyDialog imgPreviewRollout
		)
	)
	on lbx_datas selected id do
	(
		setPreview id
	)
	on PoseLibRollout moved pos do
	(
		if imgPreviewRollout.open do SetDialogPos imgPreviewRollout (GetDialogPos PoseLibRollout + [-249,100])
	)
	
	--其他
	on tmr_state tick do
	(
		lbl_state.text = "就绪."
		tmr_state.active = false
	)
	on PoseLibRollout open do
	(
		makedir dataPath all:true
		--设置dotnet按钮
		btn_pose_set.BackColor = btn_pose_blend.BackColor = (colr = (colorMan.getColor #background) * 255; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
		btn_pose_set.ForeColor = btn_pose_blend.ForeColor = (colr = (colorMan.getColor #text) * 255; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
		btn_pose_set.Flatstyle = btn_pose_blend.Flatstyle = (dotnetclass "System.Windows.Forms.FlatStyle").Flat
		btn_pose_set.Flatappearance.borderSize = btn_pose_blend.Flatappearance.borderSize = 0
		btn_pose_set.text = "\x21D2\x033B"
		btn_pose_blend.text = "\x21D2\x030A\x033B"--"\x27FE"--"\x00BB"
		(dotnetobject "System.Windows.Forms.ToolTip").SetToolTip btn_pose_blend "按一定比例混合pose"
		--层次列表
		reloadFilteredRoots filterStr
		--分类列表
		reloadTypeFolders()
		--数据列表
		ddl_types.selection = (getINISetting ini "Setting" "types_selection") as integer
		if (did = ddl_types.selection) > 0 do reloadDatas types[did]
	)
	
)
CreateDialog PoseLibRollout