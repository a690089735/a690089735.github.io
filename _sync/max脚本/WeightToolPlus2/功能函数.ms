fn roundFloat val dp:3 = (val * (10^dp) + 0.5) as integer / (1.0*(10^dp)) --四舍五入保留小数点后几位
--保留3位小数的依赖
fn Float3 val  = (val * 1000 + 0.5) as integer / 1000.0 --四舍五入保留小数点后几位,直接把10^dp(3)换成了1000来加快计算
--标题栏[依赖]
fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y]

-- fn setLockWeights =
-- (
-- 	
-- )

-- fn setLockProp =
-- (
-- 	
-- )

-- fn upSkinData =
-- (
-- 	
-- )
--创建菜单依赖
fn BuildMenuStrip Items:#() Clicks:#() = --精简版,完整来源在重影3中
(
	local
	CMS = dotNetObject "ContextMenuStrip"
	for i = 1 to Items.count do --菜单项
	(
		local iname = Items[i],item
		index = CMS.items.add(dotNetObject "ToolStripMenuItem" iname)
		item = CMS.items.item[index]
		
		func = try(Clicks[i])catch(0)
		if classOf func == MAXScriptFunction do dotNet.addEventHandler item "Click" func
		
		dotNet.setLifetimeControl item #dotnet
	)
	
	CMS.BackColor = (colr = (colorMan.getColor #background) * 255; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
	CMS.ForeColor = (colr = (colorMan.getColor #text) * 255; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
	
	CMS.ShowImageMargin = false
	dotNet.setLifetimeControl CMS #dotnet
	return CMS
)

--设置按钮风格[被各个窗口依赖]
mapped fn setButtonStyle btn image: = --borderSize:0
(
	btn.BackColor = BackColor;btn.ForeColor = ForeColor;btn.Flatstyle = Flat;btn.Padding = Padding;btn.Flatappearance.borderSize = 0
	if image != unsupplied do for i = 1 to image.count do btn.image = image
)



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
	
	_lastVertex = if temp.numberSet > 0 then for i in temp do exit with i else for i in temps do exit with i
	-- print #(temps,temp,temp.numberset,_lastVertex) #nomap
	_SelectedVertices = temps
	_CurrentBonesID = if try(_lastVertex > 0)catch(false) then --啥也没有的时候上面会返回undefined,有时返回ok,导致了报错,用try解决一下.
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
-- 		classof Lbx_Bones.Items --不加这个可能导致莫名其妙获取不到items属性
-- 		print Lbx_Bones
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
-- 			ToolTipObj.SetToolTip lbl_BoneInfo bname
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
		for c in (btns+#(Spn_SetWeight,Spn_ScaleWeight,Spn_BoneWeight,lbl_VSelected,lbl_CopyBuffer,lbl_BoneInfo)) do c.Enabled = true --,Spn_Paste_Pos_Tolerance+subbtns
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
		for c in (btns+#(Spn_SetWeight,Spn_ScaleWeight,Spn_BoneWeight,lbl_VSelected,lbl_CopyBuffer,lbl_BoneInfo)) do c.Enabled = false --,Spn_Paste_Pos_Tolerance+subbtns
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
-- 	print 1
	if bool then --未在编辑权重模式
	(
		--解冻UI
		getSkinData() --检查,没有就添加,有则:比对数据,在此处内部刷新UI
		if _LockList.count > 0 then 
			refreshUI() 
		else frostUI()--没添加骨骼不刷新,清空显示并冻结.
	)else --在编辑权重模式
	(
		frostUI()--清空部分显示并冻结UI
	)
)
--各种刷新事件(各种选择操作时更新数据),播动画时不执行
fn upUI s e = 
if s == 1 or not isAnimPlaying() do(
-- 		classof Lbx_Bones.Items --不加这个可能导致莫名其妙获取不到items属性
-- 		print "!!!" --异常在打印前出现...且只有换了点时才出现,加选不出现
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
-- 	unregUpUI()
	if not _LockList[_SelectedBoneID] do --如果选中的骨骼是锁定的,则什么都不发生
	(
		if vIDs == unsupplied do vIDs = for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i--所有的选中的顶点,加入判断是因为此参数可被提供.(比如在pasteWeightLayout中调用)
		
		local --basuoyou bianliang shengming fangzai zheli ,keyi rang
		weightcount,
		_SelectedBoneIDs = #(), --某顶点的骨骼列表的ID集合
		weights = #(), --权重列表
		wID,
		freeWeight, --自由权重的总和,暂且为0,后面在设置它
		FwIDs, --算出自由权重和,顺便记录自由的权重IDs
		maxv,
		cval, --实际可用的值
		offset --差值(需要0-val,即各自由权重需要减去的总值,不会大于自由权重)
		
		for vID in vIDs do
		(
-- 			gc light:true --clear chache, is slow but need it with run.
-- 				local
			weightcount = skinops.getvertexweightcount sk vID
			_SelectedBoneIDs = #() --某顶点的骨骼列表的ID集合
			weights = #() --权重列表
			
			for i = 1 to weightcount do
			(
				append _SelectedBoneIDs (skinops.getvertexweightboneid sk vID i)
				append weights (skinops.getvertexweight sk vID i)
			)
			
-- 				local
			wID = finditem _SelectedBoneIDs _SelectedBoneID --看看骨骼在点的骨骼列表中的第几个,也就是权重列表的ID
			
			if wID == 0 then --如果不在列表中,需要添加
			(
-- 					local
				freeWeight = 0.0 --自由权重的总和,暂且为0,后面在设置它
				FwIDs = for i = 1 to _SelectedBoneIDs.count where not _LockList[_SelectedBoneIDs[i]] collect (freeWeight += weights[i];i) --算出自由权重和,顺便记录自由的权重IDs
				maxv = freeWeight
				cval = clampValue val minv:(if FwIDs.count>0 then 0 else maxv) maxv:maxv --实际可用的值
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
-- 					local
				freeWeight = 0.0 --自由权重的总和(不包括自身),暂且为0,后面再设置它
				FwIDs = for i = 1 to _SelectedBoneIDs.count where not _LockList[_SelectedBoneIDs[i]] and i != wID collect (freeWeight += weights[i];i) --算出自由权重和,顺便记录自由的权重IDs
				maxv = freeWeight+weights[wID]
				cval = clampValue val minv:(if FwIDs.count>0 then 0 else maxv) maxv:maxv --实际可用的值
				offset = weights[wID] - cval --差值(需要(原权重-val),即各自由权重需要减去的总值,val不会大于自由权重(包括自身))
				if freeWeight < 0.00001 then for i in FwIDs do (weights[i] += (offset/FwIDs.count);if weights[i] < 0.00001 do weights[i] = 0)--自由权重总和是0时处理权重(平均分配)
				else for i in FwIDs do (weights[i] += weights[i]/freeWeight*offset;if weights[i] < 0.00001 do weights[i] = 0) --处理权重,只更改需要改的权重
				weights[wID] = cval --记录新值
				--更新可以放到最下方,更新列表权重(避免重填充的刷新,这里仅更新权重,要考虑上一个判断刚添加的新项目(原本不在列表中的骨骼,现在在了))
-- 				print #("oldweights:",weights,"freeWeight:",freeWeight,"weights[wID]:",weights[wID],"cval:",cval,"offset:",offset,"_SelectedBoneIDs:",_SelectedBoneIDs,"weights:",weights)--调试
			)
-- 				skinOps.bakeSelectedVerts sk --在任何不可撤销的skin操作前运行,将使其可撤销
			skinOps.ReplaceVertexWeights sk vID _SelectedBoneIDs weights
			
			--其实完全可以在这里更新列表权重显示,没添加的只要添加一下就行.权重顺序和项目顺序都是对应的.
			if vID == _lastVertex do reShowWeight weights
-- 				print #(vID,weights,weights[2] < 0.0001) #nomap
		)
	)
-- 	regUpUI()
)


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
	/* 	设置外观 */
	--准备图像
	fn StringToImage str = -- http://lonerobot.net/ --base64转图片,给UI初始化调用
	(
		local ConvertClass = dotNetClass "System.Convert"
		local ImageClass = dotNetClass "System.Drawing.Image"
		byteArr = ConvertClass.FromBase64String str
		memstream = dotnetobject "System.IO.MemoryStream" byteArr
		DecodedImg = ImageClass.fromstream memstream
		memstream.close() ; return DecodedImg
	)
	--获取色彩转为dotnet
	fn get_dotnet_color n = (colr = (colorMan.getColor n) * 255; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])

	local
	--颜色
	BackColor = get_dotnet_color #background, --暂时作为全局变量,后续合并进窗口中
	ForeColor = get_dotnet_color #text,
	PanelColor = if colorMan.getColor #button == [0,0,0] then get_dotnet_color #window else get_dotnet_color #button, --高低版本的颜色定义不同,获取不到button色时,获取旧版的window色,获取不到的色彩会是黑色[0,0,0].
	SepBackColor = get_dotnet_color #trackbarBg,

	--图像
	imglist = dotnetobject "ImageList",

	--UI风格数据
	BorderSize = 0,
	-- 	MiddleCenter = (dotnetclass "System.Drawing.ContentAlignment").MiddleCenter,
	-- 	TextRight = (dotnetclass "System.Windows.Forms.HorizontalAlignment").Right,
	BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,
	Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat,
	Appearance = (dotnetclass "System.Windows.Forms.Appearance").button,
	ItemAlign = dotNetClass "HorizontalAlignment" --listview的风格

	imgList.images.Add "true" (lockimg = StringToImage ("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAAAAAA/59CU/BrRAAAAAN0Uk5TAP//RFDWIQAAADRJREFUeJxjYAAD1gAgERrKwMAYwOrAwOjAiEywhoYGMLCuWhXAwLY0agKUWJmFTIBlQeoA4TwQkd5jHkIAAAAASUVORK5CYII=")) --"Lock"
	imgList.images.Add "false" (unlockimg = StringToImage ("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAAAAApWe5zwAAAAJ0Uk5TAP9bkSK1AAAAKUlEQVR4nGNgPsDA/4FBxoJBQgKEGMDI/g+DAQ+D8hEQUmyBIqCI/R8AyO0JUtoqJAcAAAAASUVORK5CYII="))--"Unlock"
		
	--设置按钮风格
	for btn in btns do (btn.BackColor = BackColor;btn.ForeColor = ForeColor;btn.Flatstyle = Flat;btn.Flatappearance.borderSize = BorderSize)

	--设置标签风格
	for l in #(lbl_BoneInfo_Ico,lbl_BoneInfo) do (l.BackColor = BackColor;l.ForeColor = ForeColor)
	lbl_BoneInfo_Ico.image = undefined

	--设置listView样式和布局
	Lbx_Bones.view = Lbx_Bones.view.Details --设置显示为细节,其他还有  .Details : <System.Windows.Forms.View>, read-only, static--.LargeIcon : <System.Windows.Forms.View>, read-only, static--.List : <System.Windows.Forms.View>, read-only, static-- .SmallIcon : <System.Windows.Forms.View>, read-only, static-- .Tile : <System.Windows.Forms.View>, read-only, static-- .value__ : <System.Int32>
	Lbx_Bones.HeaderStyle = Lbx_Bones.HeaderStyle.none --隐藏表头,如果同时保证表头只有一项,则和ListBox差不多
	Lbx_Bones.HideSelection = off
	Lbx_Bones.ShowItemToolTips = on
	Lbx_Bones.FullRowSelect = on --控制同时选中一行中的所有项目
	Lbx_Bones.MultiSelect = off --控制多选1
	Lbx_Bones.SmallImageList = imgList
	Lbx_Bones.BackColor = BackColor
	Lbx_Bones.ForeColor = ForeColor
	for c in #(#("BoneName", 132, ItemAlign.Left), #("Weight",42, ItemAlign.Left)) do Lbx_Bones.Columns.add c[1] c[2] c[3]
	Lbx_Bones.Items.clear()
		
	-- 	--初始化各个按钮的菜单--可能要加进一个时钟里,启动窗口后运行时钟事件,这样可以提升窗口的加载速度.也就是先显示按钮,再为其添加菜单,而这段时间是用户的反应时间.
	_BtnMenu_Initialization()
		
		
	--初始化工具提示样式
	-- 	ToolTipObj.AutoPopDelay = 20000 --持续显示的时间
	-- 	ToolTipObj.InitialDelay = 100 --停留后多长时间显示
	-- 	ToolTipObj.ReshowDelay = 100 --已经显示提示时,移动后显示另一个提示的最小间隔
	-- 	ToolTipObj.ShowAlways = ToolTipObj.UseAnimation = ToolTipObj.UseFading = true
		
			
	--开始响应
	upUI 1 0
	--测试
	-- 		frostUI() --冻结UI
)   