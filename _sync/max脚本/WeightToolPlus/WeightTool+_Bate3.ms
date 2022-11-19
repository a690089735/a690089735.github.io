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

-- 时间原因暂未实现
-- Btn_Paste_PosWeight的取值和取值响应 --按位置粘贴
-- 移除权重的功能菜单在骨骼信息标签里,需要响应值,需要扩展菜单支持panel
-- 四个选择按钮,看看能不能实现那个基于拓扑的选择功能
-- 现在在绘制权重时刷新很卡,可以考虑绘制权重时只更新选择顶点的权重(仅处理列表的权重).

-- 不要对按钮加边框,可以模糊按钮和标签的区别

-- 考虑要不要将下半部分的布局改为 列表块-状态栏块-复制粘贴块-因为复制粘贴是绝对的,不支持锁定
--↑↑已经在photopea中验证过,不太适合,可以对复制粘贴部分的功能画一个框.想着加个提示,但提示多了反而麻烦,大家用的多了自然就理解了.不过这样的话,用赞助模式应该会更好.

-- 调试用,custAttributes.delete $.skin 1 baseObject:false--删除自定义属性

--已知问题,
-- [已经修复]会导致新调用的skin关闭子级别一次-这是由于添加自定义属性的原因,
-- 注册完节点事件后,如果什么都没做就关闭了,可能会导致节点事件清理不及时,可能导致报错一次,然后正常.



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
	Spinner 'Spn_SetWeight' ""  pos:[74,78] width:50 height:24 range:[0,1,0.05] type:#float scale:0.005
	dotNetControl 'Btn_AddWeight' "Button" text:"+" pos:[126,74] width:25 height:24
	dotNetControl 'Btn_MinusWeight' "Button" text:"-" pos:[153,74] width:25 height:24
	--缩放权重栏
	dotNetControl 'Btn_ScaleWeight' "Button" text:"SetWeight" pos:[2,100] width:70 height:24
	Spinner 'Spn_ScaleWeight' ""  pos:[74,104] width:50 height:24 range:[0,5,0.1] type:#float scale:0.005
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
	Label 'lbl_CopyBuffer' "Buffer 0" pos:[91,180] width:87 height:18 align:#left style_sunkenedge:true
	--骨骼信息栏
	dotNetControl 'lbl_BoneInfo_Ico' "Label" text:"" pos:[2,204] width:16 height:16
	dotNetControl 'lbl_BoneInfo' "Label" text:"SelectBoneInfo" pos:[18,206] width:108 height:16
	Spinner 'Spn_BoneWeight' "" pos:[128,204] width:50 height:24 range:[0,1,0] type:#float scale:0.001 --0.001的手感最好,虽然0.005最合理
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
	_SelectedVertices = #{},
	_lastVertex = 1,
	_CurrentBonesID = #(),
	_SelectedBoneID = 0,
	_lastVertexWeigths = #(),
	_DQpaintmode = false,
	_DQsupport = false,
	
	--其他数据
	_WeightLayout = #(),
	_DQWeights = #(),
	
	--响应事件
	_upToolState,--在#SelectionChanged和#subobjectSelectionChanged
	_upListView --在#modelOtherEvent时刷新权重数据
	
	--设置按钮风格[被各个窗口依赖]
	mapped fn setButtonStyle btn image: = --borderSize:0
	(
		btn.BackColor = BackColor;btn.ForeColor = ForeColor;btn.Flatstyle = Flat;btn.Padding = Padding;btn.Flatappearance.borderSize = 0
		if image != unsupplied do for i = 1 to image.count do btn.image = image
	)
	--创建菜单依赖
	fn BuildMenuStrip Items:#() Clicks:#() = --精简版,完整来源在重影3中
	(
		local CMS = dotNetObject "ContextMenuStrip"
		for i = 1 to Items.count do --菜单项
		(
			local iname = Items[i],item
			index = CMS.items.add(dotNetObject "ToolStripMenuItem" iname)
			item = CMS.items.item[index]
			
			func = try(Clicks[i])catch(0)
			if classOf func == MAXScriptFunction do dotNet.addEventHandler item "Click" func
			
			dotNet.setLifetimeControl item #dotnet
		)
		
		CMS.BackColor = BackColor
		CMS.ForeColor = ForeColor
		
		CMS.ShowImageMargin = false
		dotNet.setLifetimeControl CMS #dotnet
		return CMS
	)
	--保留3位小数的依赖
	fn Float3 val  = (val * 1000 + 0.5) as integer / 1000.0 --四舍五入保留小数点后几位,直接把10^dp(3)换成了1000来加快计算

	--主函数,设置权重的依赖,本来放在最顶上的
	fn clampValue val minv:0 maxv:1 = (if val > maxv then val = maxv else if val < minv then val = minv;val)
	fn addItem2ListView id val =
	(
		local index = lbx_bones.items.count-1
		if index > -1 and lbx_bones.items.item[index].tag.value != id do --当值反复更改时,由于0会导致骨骼排除,所以可能会出现重复添加项目的情况.这里将其排除
		(
			listr = skinOps.GetBoneName sk id 0
			li = dotNetObject "System.Windows.Forms.ListViewItem" #(listr, (Float3 val) as string) "false"
			li.tag = dotnetmxsvalue id
			li.ToolTipText = listr
			Lbx_Bones.items.add li
			li.Selected = true
		)
	)
	
	fn uniformShowIcon bool =
	(
		local k = bool as string
		for i = 0 to lbx_bones.items.count - 1 do lbx_bones.items.item[i].ImageKey = k
		lbl_BoneInfo_Ico.image = if bool then lockimg else unlockimg
	)
	fn reShowWeight wList = --让结果看起来和刷新过差不多,用于在调整权重时实时刷新权重(关闭回调)
	(
		local i = 0
		for w in wList do
		(
			lbx_bones.items.item[i].SubItems.item[1].text = (Float3 w) as string
			i+=1
		)
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
	fn GetBoneNodes = for i in refs.dependson sk where isvalidnode i collect i
	--更新锁定数据[依赖]
	fn UpSkinData =
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
	fn addSkinData = 
	(
		local l = subObjectLevel
		custAttributes.add sk (
			attributes WeightPlusData
			(
				parameters WeightPlusData
				(
					WeightLocking type:#boolTab animatable:false invisibleInTV:false tabSizeVariable:true
					WeightBones type:#nodeTab animatable:false invisibleInTV:false tabSizeVariable:true
				)
			)
		) BaseObject:false
		sk.WeightLocking = for i = 1 to skinOps.GetNumberBones sk collect false
		sk.WeightBones = GetBoneNodes()
		subObjectLevel = l
	)
	
	--检查并 获取 Skin上保存的数据,有问题的就直接更新了[依赖](类似于正常化数据)
	fn getSelectVertices = (for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i) as bitarray
	fn getSkinData = --舍弃sk:sk
	(
		if isproperty sk #WeightPlusData then UpSkinData()
		else addSkinData()
		_LockList = sk.WeightLocking
		_BoneList = sk.WeightBones
		local temps = getSelectVertices(),temp = temps - _SelectedVertices
		
		_lastVertex = if temp.numberSet > 0 then (temp as array)[1] else (temps as array)[1]
		-- print #(temps,temp,temp.numberset,_lastVertex) #nomap
		_SelectedVertices = temps
		_CurrentBonesID = if _lastVertex != undefined then --啥也没有的时候上面会返回undefined
		(
			for i = 1 to (skinOps.GetVertexWeightCount sk _lastVertex) collect (skinOps.GetVertexWeightBoneID sk _lastVertex i)
		)else #()
		_DQsupport = isproperty sk #enableDQ
		_DQpaintmode = (_CurrentBonesID[1] == 0)--在DQpaint模式下,_CurrentBonesID为#(0)
		_SelectedBoneID = skinOps.GetSelectedBone sk
	)--可以用a = sk.WeightLocking,改变a则会改变sk.WeightLocking
	--刷新列表(外部调节权重也能实时更新)
	
	fn FillListView = --舍弃sk:sk
	(--DQ模式下,骨骼选择为0
-- 		print 3
-- 		print Lbx_Bones
-- 		print 3.5
-- 		
-- 		showproperties Lbx_Bones
-- 		print Lbx_Bones.Items
		Lbx_Bones.Items.clear()
		local id
		ll = for i = 1 to _CurrentBonesID.count where (id = _CurrentBonesID[i];id > 0) collect
		(
			local
			listr = (skinOps.GetBoneName sk id 0) as string,
			lival = (Float3 (skinOps.GetVertexWeight sk _lastVertex i)) as string
			li = dotNetObject "System.Windows.Forms.ListViewItem" #(listr, lival) (_LockList[id] as string)
			li.tag = dotnetmxsvalue id
			li.ToolTipText = listr
			li
		)
		Lbx_Bones.items.addRange ll --这个可以用来一次添加多 行 (减少刷新次数)
		--处理选择的骨骼
		local selectID = finditem _CurrentBonesID _SelectedBoneID
		if selectID > 0 do Lbx_Bones.Items.item[selectID-1].Selected = true
	)
	
	fn FillBoneInfo =
	(
-- 		print #(4,_LockList[_SelectedBoneID])
		if _DQpaintmode and _SelectedBoneID == 0 then --skin里没有骨骼的情况,这里会获取到0,在前一步,已经对skin的骨骼数量做了判断.
		(			
			lbl_BoneInfo_Ico.image = undefined
			lbl_BoneInfo.text = "No Bone Selected."
		)else
		(
-- 			print _SelectedBoneID
			local bname = (skinOps.GetBoneName sk _SelectedBoneID 0) as string
			lbl_BoneInfo_Ico.image = if _LockList[_SelectedBoneID] then lockimg else unlockimg
			lbl_BoneInfo.text = bname
			ToolTipObj.SetToolTip lbl_BoneInfo bname
		)
	)
	fn FillLblDis =
	(
		lbl_VSelected.text = "Selected " + _SelectedVertices.numberset as string
	)
-- 	fn upListView s e = --更新骨骼功能,包括列表和骨骼信息标签
-- 	if _FunctionState do(
-- 		print 1
-- 		FillListView()
-- 		FillBoneInfo()
-- 	)
	
	fn FillSpn =
	(
		local wid = finditem _CurrentBonesID _SelectedBoneID
		Spn_BoneWeight.value = if wid > 0 then skinOps.GetVertexWeight sk _lastVertex wid else 0.0
-- 		print #("Spn_BoneWeight.value",Spn_BoneWeight.value)
	)
	
	fn refreshUI = 
	(
-- 		print 2
		--解冻UI并刷新
		if not _FunctionState do
		(
			_FunctionState = true
			for c in (btns+subbtns+#(Spn_SetWeight,Spn_ScaleWeight,Spn_Paste_Pos_Tolerance,Spn_BoneWeight,lbl_VSelected,lbl_CopyBuffer,lbl_BoneInfo)) do c.Enabled = true
		)
		FillListView()
		FillBoneInfo()
		FillSpn()
		FillLblDis()
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
		lbl_CopyBuffer.text = "Buffer 0"
		lbl_BoneInfo.text = "No Bone Selected"
		lbl_BoneInfo_Ico.Image = undefined
		Spn_BoneWeight.value = 0
	)
	
	fn upUIbyLevel bool = --是否显示和刷新UI
	(
		if bool then --未在编辑权重模式
		(
			--解冻UI
			getSkinData() --检查,没有就添加,有则:比对数据,在此处内部刷新UI
			if _LockList.count > 0 then refreshUI() else frostUI()--没添加骨骼不刷新,清空显示并冻结.
		)else --在编辑权重模式
		(
			frostUI()--清空部分显示并冻结UI
		)
	)
	--各种刷新事件(各种选择操作时更新数据),播动画时不执行
	fn upUI s e = 
	if s == 1 or not isAnimPlaying() do(
-- 		print "!!!"
		local m = modPanel.getCurrentObject()
		if m != sk then --和正在处理的skin不一样
		(
			if classof m == skin then
			(
				sk = m
				upUIbyLevel (subObjectLevel == 1) --这里自动判断了是否显示和刷新UI,=1则刷新
			)else
			(
				upUIbyLevel false --清空部分显示并冻结UI
			)
		)
		else --和正在处理的skin一样,去检测数据
		(
			upUIbyLevel (subObjectLevel == 1) --这里自动判断了是否显示和刷新UI,=1则刷新 
		)
	)
	
	--注册回调
	fn regUpUI =
	(
		_upToolState = NodeEventCallback mouseUp:true delay:500 callbackEnd:upUI --在#SelectionChanged和#subobjectSelectionChanged
	)
	
	--注销回调
	fn unregUpUI =
	(
		_upToolState = undefined
		gc light:true
-- 		print _upToolState
	)
	
		--计算并赋值权重,设置上限,这是每个都会单独算的,效率会比较慢.1有空加一个判断,如果自由数量和骨骼数量一样,直接用skinOps.SetVertexWeights $.skin 220 1 0.75 设置权重提升速度.2把各个变量直接调用.提升速度.3没改过的原版在配套资源里"Skin锁定设置权重函数.ms"
	fn calcWeight vIDs:#() val:0.5 = 
	(
		unregUpUI()
		if not _LockList[_SelectedBoneID] do --如果选中的骨骼是锁定的,则什么都不发生
		(
			if vIDs == unsupplied do vIDs = for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i--所有的选中的顶点,加入判断是因为此参数可被提供.(比如在pasteWeightLayout中调用)
			
			for vID in vIDs do
			(
				gc light:true --clear chache, is slow but need it with run.
				local
				weightcount = skinops.getvertexweightcount sk vID,
				_SelectedBoneIDs = #(), --某顶点的骨骼列表的ID集合
				weights = #() --权重列表
				
				for i = 1 to weightcount do
				(
					append _SelectedBoneIDs (skinops.getvertexweightboneid sk vID i)
					append weights (skinops.getvertexweight sk vID i)
				)
				
				local wID = finditem _SelectedBoneIDs _SelectedBoneID --看看骨骼在点的骨骼列表中的第几个,也就是权重列表的ID
				
				if wID == 0 then --如果不在列表中,需要添加
				(
					local
					freeWeight = 0.0, --自由权重的总和,暂且为0,后面在设置它
					FwIDs = for i = 1 to _SelectedBoneIDs.count where not _LockList[_SelectedBoneIDs[i]] collect (freeWeight += weights[i];i), --算出自由权重和,顺便记录自由的权重IDs
					maxv = freeWeight,
					cval = clampValue val minv:(if FwIDs.count>0 then 0 else maxv) maxv:maxv, --实际可用的值
					offset = -cval --差值(需要0-val,即各自由权重需要减去的总值,不会大于自由权重)
					
					for i in FwIDs do (weights[i] += weights[i]/freeWeight*offset;if weights[i] < 0.00001 do weights[i] = 0)
					append _SelectedBoneIDs _SelectedBoneID --记录新骨骼
					append weights cval --记录新值--val在减去后,可能比原数值小.比如val是0.6,自由权重是0.5,那自由权重最多只能到0.5
					
					--更新可以放到最下方,对列表添加一个新项,骨骼名和cval,并选择,并更新列表权重(避免重填充的刷新,这里仅更新权重)
					--按列表外的骨骼添加不存在的列表项目
					addItem2ListView _SelectedBoneID cval
					
	-- 				print #("freeWeight:",freeWeight,"cval:",cval,"offset:",offset,"_SelectedBoneIDs:",_SelectedBoneIDs,"weights:",weights)--调试
				)
				else --在列表中,更改原列表即可
				(
					local
					freeWeight = 0.0, --自由权重的总和(不包括自身),暂且为0,后面再设置它
					FwIDs = for i = 1 to _SelectedBoneIDs.count where not _LockList[_SelectedBoneIDs[i]] and i != wID collect (freeWeight += weights[i];i), --算出自由权重和,顺便记录自由的权重IDs
					maxv = freeWeight+weights[wID],
					cval = clampValue val minv:(if FwIDs.count>0 then 0 else maxv) maxv:maxv, --实际可用的值
					offset = weights[wID] - cval --差值(需要(原权重-val),即各自由权重需要减去的总值,val不会大于自由权重(包括自身))
					if freeWeight < 0.00001 then for i in FwIDs do (weights[i] += (offset/FwIDs.count);if weights[i] < 0.00001 do weights[i] = 0)--自由权重总和是0时处理权重(平均分配)
					else for i in FwIDs do (weights[i] += weights[i]/freeWeight*offset;if weights[i] < 0.00001 do weights[i] = 0) --处理权重,只更改需要改的权重
					weights[wID] = cval --记录新值
					--更新可以放到最下方,更新列表权重(避免重填充的刷新,这里仅更新权重,要考虑上一个判断刚添加的新项目(原本不在列表中的骨骼,现在在了))
	-- 				print #("oldweights:",weights,"freeWeight:",freeWeight,"weights[wID]:",weights[wID],"cval:",cval,"offset:",offset,"_SelectedBoneIDs:",_SelectedBoneIDs,"weights:",weights)--调试
				)
				skinOps.bakeSelectedVerts sk --在任何不可撤销的skin操作前运行,将使其可撤销
				skinOps.ReplaceVertexWeights sk vID _SelectedBoneIDs weights
				
				--其实完全可以在这里更新列表权重显示,没添加的只要添加一下就行.权重顺序和项目顺序都是对应的.
				if vID == _lastVertex do reShowWeight weights
-- 				print #(vID,weights,weights[2] < 0.0001) #nomap
			)
		)
		regUpUI()
	)
	
	--标题栏[依赖]
	fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y]
		
	--添加菜单到按钮
	fn _BtnMenu_Initialization =
	(
		local p1,p2
		--骨骼信息栏
		p1 = #("解锁全部骨骼", "锁定全部骨骼")
		p2 = #(fn unlockall = (for i = 1 to _LockList.count do _LockList[i] = false;uniformShowIcon false),fn locakall = (for i = 1 to _LockList.count do _LockList[i] = true;uniformShowIcon true))
		'lbl_BoneInfo_Ico'.contextmenustrip = BuildMenuStrip Items:p1 Clicks:p2
		--(GetBoneNodes()))
		p1 = #("选择骨骼物体", "清理权重骨骼[n.m]微调器[panel]", "排除无用骨骼")--还得把构建菜单扩展一下,这里要用到panel
		fn cleaneSkinBones = 
		(
			local
			weightThresh = 0.00001,
			vertCount = skinOps.GetNumberVertices sk,
			bonesCount = skinOps.GetNumberBones sk,
			unusedBones = #{1..bonesCount}
			
			for v = 1 to vertCount do (
				local vertWeightCount = skinOps.GetVertexWeightCount sk v
				
				for i = 1 to vertWeightCount do (
					local weight = skinOps.GetVertexWeight sk v i
					if weight >= weightThresh then (
						local boneID = skinOps.GetVertexWeightBoneID sk v i
						unusedBones[boneID] = false
					)
				)
			)
			
			for i = bonesCount to 1 by -1 where unusedBones[i] do (
				skinOps.SelectBone sk i
				skinOps.RemoveBone sk
			)
		)
		p2 = #(fn selectBoneBySkin = select (_BoneList as array),(fn removezero = ()),cleaneSkinBones)
		'lbl_BoneInfo'.contextmenustrip = BuildMenuStrip Items:p1 Clicks:p2
-- 		--选择栏
-- 		'Btn_Shrink'.contextmenustrip
-- 		'Btn_Grow'.contextmenustrip
-- 		'Btn_Ring'.contextmenustrip
-- 		'Btn_Loop'.contextmenustrip
		
-- 		--快速权重栏
-- 		'Btn_000'.contextmenustrip
-- 		'Btn_010'.contextmenustrip
-- 		'Btn_025'.contextmenustrip
-- 		'Btn_050'.contextmenustrip
-- 		'Btn_075'.contextmenustrip
-- 		'Btn_090'.contextmenustrip
-- 		'Btn_100'.contextmenustrip
		
-- 		--设置权重栏
-- 		'Btn_SetWeight'.contextmenustrip
-- 		'Btn_AddWeight'.contextmenustrip
-- 		'Btn_MinusWeight'.contextmenustrip
		
-- 		--设置权重栏
-- 		'Btn_ScaleWeight'.contextmenustrip
-- 		'Btn_AddScaleWeight'.contextmenustrip
-- 		'Btn_MinusScaleWeight'.contextmenustrip

		--复制粘贴栏
		fn copyWeigthLayout =
		(
		-- 	print #(sk,bID)
			unregUpUI()
			--记录排除阈值--排除0.0的点
			skinOps.selectVerticesByBone sk
			vIDs = #()
			bWeights = #()
			for vID = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk vID) == 1 do (append vIDs vID;append bWeights (for i = 1 to (skinops.getvertexweightcount sk vID) where (skinops.getvertexweightboneid sk vID i) == _SelectedBoneID do exit with (skinops.getvertexweight sk vID i)))--所有的选中的顶点
			_WeightLayout = #(vIDs,bWeights)
			--重设置排除阈值
			regUpUI()
			upUI 1 0
		)
		p1 = #("复制权重", "复制权重布局", "复制软选择权重", "复制DQ权重")
		fn copyDQw = (_DQWeights = for i = 1 to skinops.getnumbervertices sk collect skinOps.getVertexDQWeight sk i)
		p2 = #((fn 'CW' = print 1), copyWeigthLayout, (fn 'CWS' = print 3), copyDQw)
		'Btn_CopyWeight'.contextmenustrip = BuildMenuStrip Items:p1 Clicks:p2
		
		p1 = #("粘贴权重", "粘贴权重布局", "粘贴软选择权重", "粘贴DQ权重")
		fn pasteWeightLayout =
		with redraw off(
		try(
			unregUpUI()
			vIDs = _WeightLayout[1]
			bWeights = _WeightLayout[2]
			for i = 1 to vIDs.count do calcWeight vIDs:#(vIDs[i]) val:bWeights[i]
			skinOps.SelectVertices sk vIDs
			regUpUI()
			upUI 1 0
		)catch(messagebox "粘贴失败.")
		)
		fn pasteDQw = try(for i = 1 to skinops.getnumbervertices sk do skinOps.setVertexDQWeight sk i _DQWeights[i];sk.enableDQ = sk.enableDQ)catch(messagebox "粘贴失败.")
		p2 = #((fn 'CW' = print 1), pasteWeightLayout, (fn 'CWS' = print 3), pasteDQw)
		'Btn_PasteWeight'.contextmenustrip = BuildMenuStrip Items:p1 Clicks:p2
-- 		'Btn_Paste_PosWeight'.contextmenustrip
		p1 = #("权重元素化")
		p2 = #((fn 'WeightsElementalization' = print 1))
		'Btn_BlendWeight'.contextmenustrip
	)
	
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
		
		--初始化各个按钮的菜单--可能要加进一个时钟里,启动窗口后运行时钟事件,这样可以提升窗口的加载速度.也就是先显示按钮,再为其添加菜单,而这段时间是用户的反应时间.
		_BtnMenu_Initialization()
		
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
		upUI 1 0
		--测试
-- 		frostUI() --冻结UI
	)
	on WeightToolPlusB open do
	(
		_UIInitialization()
		regUpUI()
	)
	on WeightToolPlusB close do
	(
		unregUpUI()
	)
	--关键响应,设置权重响应
	on Spn_BoneWeight buttondown  do
	(
		unregUpUI()
	)
	on Spn_BoneWeight buttonup  do
	(
		regUpUI()
		upUI 1 0
	)
	on Spn_BoneWeight changed val do
	(
		if not thehold.holding() do thehold.Begin() --抄来的,配合下面的响应,它可以使spn在一定区间内撤销,
		--nei
		calcWeight sk:sk lockList:_LockList bID:_SelectedBoneID vIDs:_SelectedVertices val:val
	)
	on Spn_BoneWeight entered arg can do --抄来的,它可以使spn在一定区间内撤销,按下右键取消,can是返回是否取消的返回值.on <spinner> entered [<inSpin_arg>] [<inCancel_arg>] do <expr> 
	(
		if thehold.holding() do
		(
			if can then thehold.Cancel() 
			else thehold.Accept "Change Weights"
		)
   )
	--列表项响应
	on Lbx_Bones MouseClick s e do
	(
-- 		print s.SelectedIndices.item[0] --序号
		local item = s.selectedItems.item[0],newID = item.tag.value
		if _SelectedBoneID != newID do skinOps.SelectBone sk newID --这样可以减少刷新
	)
	on Lbx_Bones MouseDoubleClick s e do
	(
		local item = s.selectedItems.item[0],id = item.tag.value
		item.ImageKey = (_LockList[id] = not _LockList[id]) as string--下边的可能会有隐含的刷新问题.这里直接更新.
		
		
		--双击之前必定触发单击选择,所以可以直接用_SelectedBoneID,但由于刷新问题,这里要多加一次选择来让boneinfo及时刷新.
		
-- 		_LockList[_SelectedBoneID] = not _LockList[_SelectedBoneID]
-- 		skinOps.SelectBone sk item.tag.value --用于触发刷新,可让状态自动更新
-- 		item.ImageKey = () as string --估计有上面那句就会导致它自动刷新了.后面要加一个限制更新的方法,不然会总是闪烁
	)
	on lbl_BoneInfo MouseDoubleClick s e do
	(
		skinOps.SelectBone sk _SelectedBoneID--有这个才可以出发回调,上面也是因为单击出触发了回调
		lbl_BoneInfo_Ico.image = if (_LockList[_SelectedBoneID] = not _LockList[_SelectedBoneID]) then lockimg else unlockimg
	)
	on lbl_BoneInfo MouseDoubleClick s e do
	(
-- 		skinOps.SelectBone sk _SelectedBoneID--有这个才可以出发回调,上面也是因为单击出触发了回调
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
		
	--其他功能
	on 'Btn_Shrink' click do undo "Skin Shrink" on(skinOps.shrinkSelection sk)
	on 'Btn_Grow' click do undo "Skin Grow" on(skinOps.growSelection sk)
	on 'Btn_Ring' click do undo "Skin Ring" on(skinOps.ringSelection sk)
	on 'Btn_Loop' click do undo "Skin Loop" on(skinOps.loopSelection sk)

	on 'Btn_000' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:0)--设置单个权重skinOps.SetWeight modf 0.0
	on 'Btn_010' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:0.1)--设置单个权重
	on 'Btn_025' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:0.25)--设置单个权重
	on 'Btn_050' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:0.5)--设置单个权重
	on 'Btn_075' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:0.75)--设置单个权重
	on 'Btn_090' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:0.9)--设置单个权重
	on 'Btn_100' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:1)--设置单个权重
	
	on 'Btn_SetWeight' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:Spn_SetWeight.value)--设置单个权重
	on 'Btn_AddWeight' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value + Spn_SetWeight.value))--设置单个权重
	on 'Btn_MinusWeight' click do undo "Set Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value - Spn_SetWeight.value))--设置单个权重
		
	on 'Btn_ScaleWeight' click do undo "Scale Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value * Spn_ScaleWeight.value) )--缩放单个权重
	on 'Btn_AddScaleWeight' click do undo "Scale Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value *(1 + Spn_ScaleWeight.value)))--缩放单个权重
	on 'Btn_MinusScaleWeight' click do undo "Scale Weights" on(calcWeight vIDs:_SelectedVertices val:(Spn_BoneWeight.value *(1 - Spn_ScaleWeight.value)))--缩放单个权重
	
	on 'Btn_CopyWeight' click do undo "Copy Weights" on(skinOps.copyWeights sk;lbl_CopyBuffer.text = "Buffer " + _SelectedVertices.numberset as string)
	on 'Btn_PasteWeight' click do undo "Paste Weights" on(skinOps.pasteWeights sk)
	on 'Btn_BlendWeight' click do undo "Blend Weights" on(skinOps.blendSelected sk)
	on 'Btn_Paste_PosWeight' click do undo "Blend PosWeights" on(skinOps.pasteWeightsByPos sk)--注意按照数值
	
	--copy
	--复制顶点权重,复制软选择权重,复制权重布局
	--粘贴顶点权重,粘贴软选择权重,粘贴权重布局
)
createdialog WeightToolPlusB style:#()
setFocus WeightToolPlusB --不加这个会让工具提示无效