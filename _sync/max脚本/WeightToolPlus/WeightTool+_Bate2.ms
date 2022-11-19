--在#SelectionChanged和#subobjectSelectionChanged时刷新Skin数据和界面状态.--经测试,#subobjectSelectionChanged可在添加删除骨骼时触发,可在skin修改器添加删除时触发.特别完美...只是更改选择还是需要单独触发的
--在#modelOtherEvent时刷新权重数据

--列表的目的
--显示
--[当前skin的](如果当前是skin,且于权重模式下,且不是四元数权重模式(低版本可能获取会报错))
--[选中顶点的权重](可能是0,1,n个顶点,n个顶点取最小,一个bitarray(可自动归一化),一个currentVertex,如何得到得到:每次刷新,用新的bitarray去减旧的,可以得出新增的点,比如a-b,可以得出b里没有的数,如果有结果,则为加选,取结果的第一个,如果结果为#{},则取新bitarray的第一个)
--功能
--单击会选中对应的骨骼.
--双击可以切换骨骼的锁定状态.
--上方的标签会同步显示当前骨骼并可以双击切换锁定,以保证不在列表中的骨骼也可以被操作

--一些也许有用的字符
--" \x260C \x260D \x26EC \x26FC \x26F6 \x26FB \x1DF8 \x1DFB \x26DE "
--" \x26EC \x26FC \x26F6 \x26FB " --顶点,元素,顶点色,封套


try(destroydialog WeightToolPlusB)catch()
rollout WeightToolPlusB "WeightToolPlusB" width:180 height:370
(
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
	dotNetControl 'Btn_Paste_PosWeight' "Button" text:"Paste-Pos" pos:[4,152] width:68 height:24
	Spinner 'Spn_Paste_Pos_Tolerance' "Tolerance"  pos:[79,156] width:82 height:24 range:[0,10,0.1] type:#worldunits scale:0.1 align:#left
	--状态栏
	Label 'lbl_VSelected' "Selected 0" pos:[2,180] width:87 height:18 align:#left style_sunkenedge:true
	Label 'lbl_CopyBuffer' "Copy Buffer 0" pos:[91,180] width:87 height:18 align:#left style_sunkenedge:true
	--骨骼信息栏
	dotNetControl 'lbl_BoneInfo_Ico' "Label" text:"" pos:[2,204] width:16 height:16
	dotNetControl 'lbl_BoneInfo' "Label" text:"SelectBoneInfo" pos:[18,206] width:108 height:16
	Spinner 'Spn_BoneWeight' ""  pos:[128,204] width:50 height:24 range:[0,1,0] type:#float scale:0.005
	dotNetControl 'Lbx_Bones' "ListView" pos:[2,224] width:176 height:134
	
	local
	_FunctionState = true, --用于确认当前各个功能是否可用
	--UI风格数据
	ToolTipObj = dotnetobject "System.Windows.Forms.ToolTip",
	ckbAppearance = (dotNetClass "System.Windows.Forms.Appearance").Button,
	Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat,
	BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,
	Padding = dotNetObject "System.Windows.Forms.Padding" 0 -10 0 -10,
	ContentAlignment = dotnetclass "System.Drawing.ContentAlignment",
	_align = dotNetClass "HorizontalAlignment",
	imglist = dotnetobject "ImageList",
	BackColor,
	PanelColor,
	ForeColor,
	TitleColor,
	RedColor,
	ForeColor,
	--标题栏功能
	_Cursor = (dotnetclass "System.Windows.Forms.Cursor"),
	_Offset = [0,0],
	_Pin = false,
	--锁头图标
	lockimg,
	unlockimg,
	--UI数据
	btns,
	rolloutSize = 20,
	subbtns,
-- 	btn_SelectVertices,
-- 	btn_SelectElement,
-- 	btn_VertexColor,
	--必要数据
	sk = 0,--当前正在处理的skin修改器,初始值不可以是undefined,因为modPanel.getCurrentObject()可能获取到未定义
	_LockList,--关联的sk的锁定列表(记录在skin中)
	_BoneList,--关联的第一次收集到sk的骨骼列表(记录在skin中),用于对照skin修改器的骨骼是否发生变化,包括顺序变化也会让其更新哦.
	_lastVertex = 1,
	_SelectedVertices = #{},
	_CurrentBonesID = #(),
	_SelectedBoneID = 0,
	--响应事件
	_upToolState,--在#SelectionChanged和#subobjectSelectionChanged
	_upListView --在#modelOtherEvent时刷新权重数据
	
	--设置按钮风格[被各个窗口依赖]
	mapped fn setButtonStyle btn image: = --borderSize:0
	(
		btn.BackColor = BackColor;btn.ForeColor = ForeColor;btn.Flatstyle = Flat;btn.Padding = Padding;btn.Flatappearance.borderSize = 0
		if image != unsupplied do for i = 1 to image.count do btn.image = image
	)
	
	--子窗口
	fn setbtn btn tip:"" =
	(
		setButtonStyle btn
		btn.Appearance = ckbAppearance
		ToolTipObj.SetToolTip btn tip
	)
	rollout Rollout_SelectVertices "SelectVertices"
	(
		dotnetControl btn_SelectVertices "CheckBox" text:"\x26EC" pos:[0,0] width:rolloutSize height:rolloutSize
		on Rollout_SelectVertices open do setbtn btn_SelectVertices tip:"选择顶点"
		on btn_SelectVertices click do
		(
			setFocus WeightToolPlusB --不加这个会让工具提示无效
		)
	)
	rollout Rollout_SelectElement "SelectElement"
	(
		dotnetControl btn_SelectElement "CheckBox" text:"\x26FC" pos:[0,0] width:rolloutSize height:rolloutSize
		on Rollout_SelectElement open do setbtn btn_SelectElement tip:"选择元素"
		on btn_SelectElement click do
		(
			setFocus WeightToolPlusB --不加这个会让工具提示无效
		)
	)
	rollout Rollout_VertexColor "VertexColor"
	(
		dotnetControl btn_VertexColor "CheckBox" text:"\x26F6" pos:[0,0] width:rolloutSize height:rolloutSize
		on Rollout_VertexColor open do setbtn btn_VertexColor tip:"顶点色显示"
		on btn_VertexColor click do
		(
			setFocus WeightToolPlusB --不加这个会让工具提示无效
		)
	)
	rollout Rollout_NoEnvelopes "NoEnvelopes"
	(
		dotnetControl btn_NoEnvelopes "CheckBox" text:"\x26FB" pos:[0,0] width:rolloutSize height:rolloutSize
		on Rollout_NoEnvelopes open do setbtn btn_NoEnvelopes tip:"关闭封套"
		on btn_NoEnvelopes click do
		(
			setFocus WeightToolPlusB --不加这个会让工具提示无效
		)
	)
		--浮动按钮跟随
	fn SetAllDialogPos pos = --可以在这里搞个位置列表,省去计算,也兼容不等距的偏移.
-- 	try
	(
		cpos = pos + [-rolloutSize,20]
		for r in #(Rollout_SelectVertices,Rollout_SelectElement,Rollout_VertexColor,Rollout_NoEnvelopes) do (SetDialogPos r cpos;cpos.y += rolloutSize)
	)
-- 	catch(CreateAllDialog())--避免有老哥用骚操作把窗口干掉了
	--创建浮动按钮
	fn CreateAllDialog =
	(
		for r in #(Rollout_SelectVertices,Rollout_SelectElement,Rollout_VertexColor,Rollout_NoEnvelopes) do
		(
			try(destroydialog r)catch()
			createdialog r style:#() parent:WeightToolPlusB.hwnd width:rolloutSize height:rolloutSize
		)
		SetAllDialogPos (Getdialogpos WeightToolPlusB)
		subbtns = #(Rollout_SelectVertices.btn_SelectVertices,
		Rollout_SelectElement.btn_SelectElement,
		Rollout_VertexColor.btn_VertexColor,
		Rollout_NoEnvelopes.btn_NoEnvelopes)
	)
	
	--获取蒙皮骨骼列表[依赖]
	fn GetBoneNodes sk:sk = for i in refs.dependson sk where isvalidnode i collect i
	--更新锁定数据[依赖]
	fn UpSkinData sk:sk =
	(
		local
		oData = sk.WeightLocking,
		oNodes = sk.WeightBones,
		nNodes = GetBoneNodes(),
		-- 从原物体抽取,搜索为0的设为false,不为0的设为原值
		-- 查看nodes完全一样的话,直接返回原数据
		redo = false
		--数量一样继续判断
		if oNodes.count == nNodes.count then
			for i = 1 to oNodes.count do if oNodes[i] != nNodes[i] do exit with redo = true
		else redo = true --数量不一样,直接重做(原物体删除,数组数量不会改变,但新的物体列表会变短(因为有有效节点的判断))
		--有限更新
		if redo then
		(
			nData = #()
			for n in nNodes do
			(
				id = finditem oNodes n
				append nData (if id > 0 then oData[id] else false)
			)
			sk.WeightLocking = nData
			sk.WeightBones = nNodes
		)
		--此处重新填充listview
		()
	)
	--添加锁定数据依赖
	fn addSkinData sk:sk = 
	(
		custAttributes.add sk (
			attributes WeightPlusData
			(
				parameters WeightPlusData
				(
					WeightLocking type:#boolTab tabsizeVariable:true
					WeightBones type:#nodeTab ta_bsizeVariable:true
				)
			)
		)
		sk.WeightLocking = for i = 1 to skinOps.GetNumberBones sk collect false
		sk.WeightBones = GetBoneNodes()
	)
	--检查并 获取 Skin上保存的数据,有问题的就直接更新了[依赖](类似于正常化数据)
	fn getSelectVertices sk:sk = (for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i) as bitarray
	fn getSkinData = --舍弃sk:sk
	(
		if isproperty sk #WeightPlusData then UpSkinData()
		else addSkinData()
		_LockList = sk.WeightLocking
		_BoneList = sk.WeightBones
		local temps = getSelectVertices(),temp = temps - _SelectedVertices
		_lastVertex = if temp.numberSet  == 0 then (temps as array)[1] else (temps as array)[1]
		_SelectedVertices = temps
		_CurrentBonesID =  if _lastVertex != undefined then --啥也没有的时候上面会返回undefined
		(
			for i = 1 to (skinOps.GetVertexWeightCount sk _lastVertex) collect (skinOps.GetVertexWeightBoneID sk _lastVertex i)
			
		)else #()
		_SelectedBoneID = skinOps.GetSelectedBone sk
	)--可以用a = sk.WeightLocking,改变a则会改变sk.WeightLocking
	--刷新列表(外部调节权重也能实时更新)
	fn Float3 val  = (val * 1000 + 0.5) as integer / 1000.0 --四舍五入保留小数点后几位,直接把10^dp(3)换成了1000来加快计算
	fn FillListView = --舍弃sk:sk
	(
		print 2
		Lbx_Bones.items.clear()
		ll = for i = 1 to _CurrentBonesID.count collect
		(
			local
			id = _CurrentBonesID[i],
			listr = (skinOps.GetBoneName sk id 0) as string,
			lival = (Float3 (skinOps.GetVertexWeight sk _lastVertex i)) as string
-- 			print #((skinOps.GetBoneName sk id 0) as string, (skinOps.GetVertexWeight sk _lastVertex i) as string,sk.WeightLocking[id] as string) #nomap
			li = dotNetObject "System.Windows.Forms.ListViewItem" #(listr, lival) (_LockList[id] as string)
			li.tag = dotnetmxsvalue id
-- 			ToolTipObj.SetToolTip li "123"
			li.ToolTipText = listr
			li
		)
		Lbx_Bones.items.addRange ll --这个可以用来一次添加多 行 (减少刷新次数)
		--处理选择的骨骼
		_SelectedBoneID = skinOps.GetSelectedBone sk
		local selectID = finditem _CurrentBonesID _SelectedBoneID
		if selectID > 0 do Lbx_Bones.Items.item[selectID-1].Selected = true
	)
	fn FillBoneInfo =
	(
		print #(3,_LockList[_SelectedBoneID])
		local bname = (skinOps.GetBoneName sk _SelectedBoneID 0) as string
		lbl_BoneInfo_Ico.image = if _LockList[_SelectedBoneID] then lockimg else unlockimg
		lbl_BoneInfo.text = bname
		ToolTipObj.SetToolTip lbl_BoneInfo bname
	)
	fn upListView s e = --更新骨骼功能,包括列表和骨骼信息标签
	if _FunctionState do(
		print 1
		FillListView()
		FillBoneInfo()
	)

	fn refreshUI = 
	(
		--解冻UI并刷新
		if not _FunctionState do
		(
			_FunctionState = true
			for c in (btns+subbtns+#(Spn_SetWeight,Spn_ScaleWeight,Spn_Paste_Pos_Tolerance,Spn_BoneWeight,lbl_VSelected,lbl_CopyBuffer,lbl_BoneInfo)) do c.Enabled = true
		)
		FillListView()
		FillBoneInfo()
	)
	fn frostUI = --冻结UI
	(
		if _FunctionState do
		(
			_FunctionState = false
			for c in (btns+subbtns+#(Spn_SetWeight,Spn_ScaleWeight,Spn_Paste_Pos_Tolerance,Spn_BoneWeight,lbl_VSelected,lbl_CopyBuffer,lbl_BoneInfo)) do c.Enabled = false
		)
		Lbx_Bones.items.clear()
		lbl_VSelected.text = "Selected 0"
		lbl_CopyBuffer.text = "Copy Buffer 0"
		lbl_BoneInfo.text = "No Bone Selected"
	)
	fn upUI bool = --是否显示和刷新UI
	(
		if bool then --未在编辑权重模式
		(
			--解冻UI
			getSkinData() --检查,没有就添加,有则:比对数据,在此处内部刷新UI
			refreshUI()
		)else --在编辑权重模式
		(
			frostUI()--清空部分显示并冻结UI
		)
	)
	--各种刷新事件(各种选择操作时更新数据)
	fn upToolState s e = 
	(
		local m = modPanel.getCurrentObject()
		if m != sk then --和正在处理的skin不一样
		(
			if classof m == skin then
			(
				sk = m
				upUI (subObjectLevel == 1)--这里自动判断了是否显示和刷新UI,=1则刷新
			)else
			(
				upUI false --清空部分显示并冻结UI
			)
		)
		else --和正在处理的skin一样,去检测数据
		(
			upUI (subObjectLevel == 1)--这里自动判断了是否显示和刷新UI,=1则刷新
		)
	)
	--注册回调
	fn regUpToolState =
	(
		_upToolState = NodeEventCallback SelectionChanged:upToolState subobjectSelectionChanged:upToolState --在#SelectionChanged和#subobjectSelectionChanged
	)
	fn regUpListView =
	(
		_upListView = NodeEventCallback modelOtherEvent:upListView ----在#modelOtherEvent时刷新权重数据
	)
	--注销回调
	fn unregUpToolState =
	(
		_upToolState = undefined;gc light:true 
	)
	fn unregUpListView =
	(
		_upListView = undefined;gc light:true
	)
	--标题栏[依赖]
	fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y]
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
			if asDotNet then return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3] else return (colr as Color)
		)
		local
			TitleImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFAAAA////h4eHg4ODP0oNoAAAAAR0Uk5TAP84HXmSglUAAAAcSURBVHicY2CAA9HQ0BAGNAAWwy8xFUQcgIkDAO1vB7NCxCNZAAAAAElFTkSuQmCC",
			BC = (colorMan.getColor #background)*255,
			ImageBeforeText = (dotnetclass "System.Windows.Forms.TextImageRelation").ImageBeforeText
-- 			preStr = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAAAAAA"
		
		BackColor = getColor BC dir:true
		PanelColor = getColor BC val:32
		ForeColor = getColor BC val:152
		TitleColor = getColor BC val:-16
		RedColor = getColor [232,17,35] dir:true
		ForeColor = getColor BC val:152
-- 			btnImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAlQTFRFAAAAAAAA////g93P0gAAAAN0Uk5TAP//RFDWIQAAABpJREFUeJxjYAABUdbQAAZJtlUTICwEIFkCAGRjCIZ/vKakAAAAAElFTkSuQmCC"
		--创建图像
		imgList.images.Add "true" (lockimg = StringToImage ("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAAAAAA/59CU/BrRAAAAAN0Uk5TAP//RFDWIQAAADRJREFUeJxjYAAD1gAgERrKwMAYwOrAwOjAiEywhoYGMLCuWhXAwLY0agKUWJmFTIBlQeoA4TwQkd5jHkIAAAAASUVORK5CYII=")) --"Lock"
		imgList.images.Add "false" (unlockimg = StringToImage ("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAAAAApWe5zwAAAAJ0Uk5TAP9bkSK1AAAAKUlEQVR4nGNgPsDA/4FBxoJBQgKEGMDI/g+DAQ+D8hEQUmyBIqCI/R8AyO0JUtoqJAcAAAAASUVORK5CYII="))--"Unlock"
-- 		iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAAAAAA
		
		--设置标题栏
		lbl_Ico.image = TitleImage;
		lbl_Ico.BackColor = TitleColor --图标栏
		lbl_Tit.BackColor = TitleColor;lbl_Tit.ForeColor = ForeColor;lbl_Tit.TextAlign = ContentAlignment.MiddleLeft --标题栏
		btn_Cls.BackColor = TitleColor;btn_Cls.ForeColor = ForeColor;btn_Cls.flatstyle = flat;btn_Cls.flatappearance.borderSize = 0;btn_Cls.FlatAppearance.MouseOverBackColor = RedColor --关闭按钮
		lbl_Tit.text = "WeightTool+(Bate2)"
		btn_Cls.text = "X"
		--设置按钮风格
		btns = 
		#(
		--选择栏
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
		'Btn_Paste_PosWeight',
		'Btn_BlendWeight'
		)
		setButtonStyle btns
		--初始化标签
		for l in #(lbl_BoneInfo_Ico,lbl_BoneInfo) do (l.BackColor = BackColor;l.ForeColor = ForeColor)
		lbl_BoneInfo_Ico.image = undefined 
		--初始化listView
		Lbx_Bones.view = Lbx_Bones.view.Details --设置显示为细节,其他还有  .Details : <System.Windows.Forms.View>, read-only, static--.LargeIcon : <System.Windows.Forms.View>, read-only, static--.List : <System.Windows.Forms.View>, read-only, static-- .SmallIcon : <System.Windows.Forms.View>, read-only, static-- .Tile : <System.Windows.Forms.View>, read-only, static-- .value__ : <System.Int32>
		Lbx_Bones.HeaderStyle = Lbx_Bones.HeaderStyle.none --隐藏表头,如果同时保证表头只有一项,则和ListBox差不多
		Lbx_Bones.HideSelection = off
		Lbx_Bones.ShowItemToolTips = on
		Lbx_Bones.FullRowSelect = on --控制同时选中一行中的所有项目
		Lbx_Bones.MultiSelect = off --控制多选1
		Lbx_Bones.SmallImageList = imgList
		Lbx_Bones.BackColor = BackColor
		Lbx_Bones.ForeColor = ForeColor
		for c in #(#("BoneName", 132, _align.Left), #("Weight",40, _align.Left)) do Lbx_Bones.Columns.add c[1] c[2] c[3]
			
		--初始化工具提示样式
		ToolTipObj.AutoPopDelay = 20000 --持续显示的时间
		ToolTipObj.InitialDelay = 100 --停留后多长时间显示
		ToolTipObj.ReshowDelay = 100 --已经显示提示时,移动后显示另一个提示的最小间隔
-- 		ToolTipObj.ShowAlways = ToolTipObj.UseAnimation = ToolTipObj.UseFading = true
			
		--创建悬浮按钮(或改成在任意部分右击,可以调出菜单,或着一个悬浮按钮,用来切换功能)
		CreateAllDialog()
			
		--开始响应
		upToolState 0 0
		--测试
-- 		frostUI() --冻结UI
	)
	on WeightToolPlusB open do
	(
		_UIInitialization()
		regUpToolState()
		regUpListView()
	)
	on WeightToolPlusB close do
	(
		unregUpToolState()
		unregUpListView()
	)
	--列表项响应
	on Lbx_Bones MouseClick s e do
	(
-- 		print s.SelectedIndices.item[0] --序号
		unregUpToolState()
		local item = s.selectedItems.item[0],newID = item.tag.value
		if _SelectedBoneID != newID do skinOps.SelectBone sk newID --这样可以减少刷新
		regUpToolState()
	)
	on Lbx_Bones MouseDoubleClick s e do
	(
		local item = s.selectedItems.item[0]
		--双击之前必定触发单击选择,所以可以直接用_SelectedBoneID,但由于刷新问题,这里要多加一次选择来让boneinfo及时刷新.
		_LockList[_SelectedBoneID] = not _LockList[_SelectedBoneID]
		skinOps.SelectBone sk item.tag.value --用于触发刷新,可让状态自动更新
-- 		item.ImageKey = () as string --估计有上面那句就会导致它自动刷新了.后面要加一个限制更新的方法,不然会总是闪烁
	)
	on lbl_BoneInfo MouseDoubleClick s e do
	(
		skinOps.SelectBone sk _SelectedBoneID--有这个才可以出发回调,上面也是因为单击出触发了回调
		lbl_BoneInfo_Ico.image = if (_LockList[_SelectedBoneID] = not _LockList[_SelectedBoneID]) then lockimg else unlockimg
	)
	on lbl_BoneInfo MouseDoubleClick s e do
	(
		skinOps.SelectBone sk _SelectedBoneID--有这个才可以出发回调,上面也是因为单击出触发了回调
		lbl_BoneInfo_Ico.image = if (_LockList[_SelectedBoneID] = not _LockList[_SelectedBoneID]) then lockimg else unlockimg
	)
	--标题栏响应
	on lbl_Ico mouseDown do(_Pin = true;_Offset = (GetDialogPos WeightToolPlusB) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico mouseUp do _Pin = false
	on lbl_Ico mouseMove do if _Pin do SetDialogPos WeightToolPlusB (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit mouseDown do(_Pin = true;_Offset = (GetDialogPos WeightToolPlusB) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit mouseUp do _Pin = false
	on lbl_Tit mouseMove do if _Pin do SetDialogPos WeightToolPlusB (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on btn_Cls click do DestroyDialog WeightToolPlusB
	--悬浮按钮对位
	on WeightToolPlusB moved e do SetAllDialogPos e
)
createdialog WeightToolPlusB style:#()
setFocus WeightToolPlusB --不加这个会让工具提示无效