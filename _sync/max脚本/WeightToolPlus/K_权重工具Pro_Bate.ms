/*  	权利:任何人在任何时间以任何方式 使用,复制,修改,传播 本工具,请附带下方的原作者信息,本工具已申请版权,请勿私自出售牟利.
*	原作者:青年大叔[690089735@qq.com]
*  	时间:2020/8/30
*  	版本:0.1[第一个功能健全的稳定版](历史版本数:5)
*  	提示:本篇代码是经过多次迭代的重构,考虑了很多实际问题,由于逻辑复杂,为了便于阅读加了大量注释,而且不可优化的地方也多加了说明,欲优化代码请先仔细阅读注释!!
* 	说明:
* 		本工具是对3dmax中的WeightTool做的功能扩展,基本可以完全替代原工具.
* 		最开始的设计初衷,只是为了给自己加一个权重锁定功能.但在后期实现了核心功能之后,发现其完全可以增强并替代max自带的权重工具.就多花了两天时间多实现了一些效果.
* 		功能:
* 			0. 高级核心功能:可在调整权重时锁定部分权重,下方的滑条可以快速的设置权重并动态预览.
* 			1. 基本的WeightTool功能:设置0-0.1-0.25-0.5-0.75-0.9-1的权重
* 			2. 增强的WeightTool功能:设置权重和缩放权重,以及二者右边的加减号,现在按中间的滑块来取值,而不是默认工具中的固定值.
* 			3. 几个快捷选择按钮:快速设置选择顶点,选择元素,不显示封套
* 			4. 附加的小功能:按骨骼选择顶点(可以用来检查有没有意外影响的点),也可以用来快速设置DQ权重.
* 	已经有思路可以继续加强实现的一些功能:
* 		1. 现在的锁定信息是存储在变量中的,会因为刷新选择而丢失.可以把他做成储存进skin修改器.这样即使重启了Max,下次打开也还是有锁定信息.
* 		2. 按骨骼选择顶点的功能,可以拓展为自动检查顶点是否相连的功能,可用于检查权重.(因为骨骼权重一般都是影响一个连续的区域)
*/
-- 已知限制:
-- 	1. 添加 <Skin>.enableDQ     BooleanClass    default: true   --  boolean 来判断并兼容双四元数的权重设置--这个必须要做,才能完美替代WeightTool,DQ模式下,骨骼和权重列表应该为空.
-- 	X已解决	2. 设置权重的部分和最下面的修改锁定权重部分是独立的两个功能,上方的功能全部可以撤销,下面的不行.且即使锁定了,也还是可以通过按钮赋值 --这个改不了,Max自身问题
-- 	?有思路	3. 下面的修改锁定权重部分,在修改权重时偶尔会出现从列表中移除了0权重的骨骼的问题.--这个改不了,Max自身问题. 思路:将0权重的骨骼,用不会移除权重的方法在最后再添加一遍.
-- 未解决的小概率BUG:
--	1.偶然情况会发生权重列表出现了两个相同骨骼的问题.不能稳定重现这个错误.临时方案:可以通过将其中一个权重设置为0,然后移除0权重解决.
--	2.严重bug:某次添加骨骼后,再打开skin发生崩溃,确认添加骨骼会导致崩溃,尤其是使用新版的反馈方案时.(以为通过对新旧两组的判断添加ith printAllElements on解决,实际并没有解决.这句代码可以让之后的部分完整输出.即阵列不再输出省略号.)
--	3.当选择多个物体操作Skin时,列表无法读取
-- 更新记录:
-- 	v0.01-0.08	20200830之前	仅锁定权重的功能可用,选定骨骼必须在列表内才能被支持.
-- 	v0.1.0		20200830		第一个功能健全的稳定版本.
--	v0.1.1		20200901		绕开了一个问题,此问题会导致列表中偶尔出现两个相同的骨骼.优化了镜像的响应逻辑.解决了一些问题.
--	v0.1.2		20200904		更改了reshow函数,修改了错误刷新的问题.修改了Val框的缩放比例,优化了手感(之前太快了.);修复了列表中其他点权重和为0时无法正确计算的问题.修复了一个上下限锁定的问题.添加了移除0权重和顶点通道显示切换功能.重整理了UI.
--	v0.1.3		20200912		添加了一个提示标签,现在超长的名称也能看到是否锁定
--	v0.1.4		20201114		优化了响应效率,移除了无意义的响应
--	v0.1.10		20201014		现在,浮动数值可以撤销了,接住了thehold
--	v0.1.11		20201206		将标签变为按钮,可以在列表框以外解锁和锁定骨骼了.顺便修复了骨骼列表更改会崩溃的问题.

-- 	v0.3						加入了双四元数的兼容
-- 添加快速切换定点色显示,添加移除零权重

-- [重要]数据保存到skin修改器
-- [重要]各个按钮的行为应该一致(即设置时考虑到锁定值,最后再将0值的权重用不会排除的方式重新赋予)
-- [重要]批量修改时,应当对每个顶点实施单独的限制(即考虑到每个顶点不同的限制值)
-- 权重换成replace
-- 支持2017以上
-- 设置双四元数权重
-- AB混合粘贴


try(destroydialog WeightToolPro)catch()
rollout WeightToolPro "Weight Tool Pro 0.1.11" width:232
(
	fn roundFloat val dp:3 = (val * (10^dp) + 0.5) as integer / (1.0*(10^dp)) --四舍五入保留小数点后几位

	checkbox 'chk_Hide_Envelopes' "HideEnvelopes" pos:[120,8] width:88 height:16 align:#left
	checkbox 'chk_Vertex_Channel' "VertexCannel Display" pos:[8,8] width:90 height:16 align:#left
	checkbox 'chk_Select_Vertices' "Select Vertices" pos:[8,32] width:88 height:16 align:#left
	checkbox 'chk_Select_Element' "SelectElement" pos:[120,32] width:88 height:16 align:#left
	
	button 'btn_SVBB' "B" pos:[8,56] width:24 height:24 align:#left toolTip:"selectVerticesByBone"
	button 'btn_Shrink' "Shrink" pos:[40,56] width:40 height:24 align:#left toolTip:"Shrink selected vertices"
	button 'btn_Grow' "Grow" pos:[88,56] width:40 height:24 align:#left toolTip:"Grow selected vertices"
	button 'btn_Ring' "Ring" pos:[136,56] width:40 height:24 align:#left toolTip:"Ring selected vertices"
	button 'btn_Loop' "Loop" pos:[184,56] width:40 height:24 align:#left toolTip:"Loop by selected vertices"
	
	button 'btn_00' "0" pos:[8,88] width:24 height:24 align:#left toolTip:"set Weights by selectedBone with 0.0"
	button 'btn_01' "0.1" pos:[40,88] width:24 height:24 align:#left toolTip:"set Weights by selectedBone with 0.1"
	button 'btn_025' "0.25" pos:[72,88] width:24 height:24 align:#left toolTip:"set Weights by selectedBone with 0.25"
	button 'btn_05' "0.5" pos:[104,88] width:24 height:24 align:#left toolTip:"set Weights by selectedBone with 0.5"
	button 'btn_075' "0.75" pos:[136,88] width:24 height:24 align:#left toolTip:"set Weights by selectedBone with 0.75"
	button 'btn_09' "0.9" pos:[168,88] width:24 height:24 align:#left toolTip:"set Weights by selectedBone with 0.9"
	button 'btn_10' "1" pos:[200,88] width:24 height:24 align:#left toolTip:"set Weights by selectedBone with 1.0"
	
	button 'btn_Set_Weight' "Set Weight" pos:[8,120] width:88 height:24 align:#left
	spinner 'spn_SetVal' "" pos:[104,124] width:56 height:16 enabled:true range:[0,1,0.05] scale:0.05 align:#left
	button 'btn_addWeight' "+" pos:[168,120] width:24 height:24 align:#left
	button 'btn_subWeight' "-" pos:[200,120] width:24 height:24 align:#left
	button 'btnScale_Weight' "Scale Weight" pos:[8,152] width:88 height:24 align:#left
	spinner 'spn_ScaleVal' "" pos:[104,156] width:56 height:16 range:[0,2,0.1] scale:0.05 align:#left
	button 'btn_ampWeight' "+" pos:[168,152] width:24 height:24 align:#left
	button 'btn_redWeight' "-" pos:[200,152] width:24 height:24 align:#left
	
	button 'btn_Mirror_Selected' "Mirror Selected" pos:[8,184] width:80 height:24 align:#left
	button 'btn_Copy' "Copy" pos:[88,184] width:40 height:24 align:#left
	button 'btn_Paste' "Paste" pos:[136,184] width:40 height:24 align:#left
	button 'btn_Blend' "Blend" pos:[184,184] width:40 height:24 align:#left
	
	button 'btn_Paste_pos' "Paste_pos" pos:[160,216] width:64 height:24 align:#left
	spinner 'spn_Paste_pos' "By" pos:[104,224] width:42 height:16 range:[0,1,0.1] align:#left
	
	button 'btn_RemoveWeights' "RemoveWeights" pos:[136,248] width:88 height:24 align:#left
	spinner 'spn_RemoveWeights' "By" pos:[64,256] width:58 height:16 range:[0,1,0.009] scale:0.0001 align:#left

	listbox 'lbx_List' "0 Vertices Selected" width:224 height:9 align:#center
	spinner 'spn_Val' "Set Weight:" width:104 height:16 range:[0,1,0] scale:0.001 align:#right
	
	button 'btn_tips' "Unkonw" align:#left offset:[0,-24]
	
	local callbackItem = undefined --注册事件的变量,用于清理事件
	
	local modf --skin修改器
	local AllBones = #() --修改器中所有骨骼名称,其序号对应骨骼系统ID(用于调用的ID,而非ListID)
	local AllLocks = #() --所有骨骼的锁定状态,仅在新获取的AllBones和原来的不同的时候更新,所有新添加的骨骼都会在新加的骨骼处插入一个false(非锁定),所有移除的骨骼都会在其索引删除状态
	
	local CurrentVertexIDs = #() --所有选择的顶点的ID
	local FirstVertexID = 0 --最小序号的顶点ID,0表示没有选择
	local SelectBoneID --当前选择的骨骼ID
	
	local ListBoneIDs = #() --最后选择的顶点里的所有骨骼ID,这是列表中的骨骼ID,由于AllBones是按ID排序的,所以可以直接作为索引.
	local ListBoneWeights = #() --这是列表中的骨骼的权重,仅最后一个顶点
		
	local index = 0 --理应的列表选中项
	
	local s1
	
	fn reshow clr:false dis:false = --里面的代码都是需要在刷新显示时使用的(比如改变选择,权重滑动)
	with redraw off(animate off(undo off
	(
		if dis then 
		(
			for c in WeightToolPro.controls do c.enabled = false --冻结UI
		)
		else for c in WeightToolPro.controls do c.enabled = true --解冻UI
		if clr then 
		(
			lbx_List.items = #()--清除为真
			lbx_List.caption = "0 Vertices Selected"
			spn_Val.range.y = 1.0
		)
		else 
		(
			lbx_List.items = for i = 1 to ListBoneIDs.count collect 
			(
				id = ListBoneIDs[i]
				wstr = roundFloat(ListBoneWeights[i]) as string
				for j = 1 to 5-wstr.count do wstr += "0"
				wstr + " : " + AllBones[id] + (if AllLocks[id] then " - Lock" else " - Free")
			) --返回一个可供查看的列表,刷新给列表框
			lbx_List.caption = (CurrentVertexIDs.count as string + " Vertices Selected") --设置列表标题(选择的顶点的计数)
			
			spn_Val.range.x = 0;spn_Val.range.y = 1 --先设置一下下上限,方便设置值
			
			if AllLocks[SelectBoneID] then --如果选择的骨骼是锁定骨骼(因为是全局锁定,所以可以直接获取),不可更改
			(
				if index == 0 then --选中骨骼是锁定的,又不在列表中(不可调整,值为0)
				(
					spn_Val.range.y = spn_Val.value = 0 --设置值为0 --又因为是锁定的,所以上限也只能是0
				)
				else --选中骨骼是锁定的,又在列表中(不可调整,但是有值)
				(
					spn_Val.range.x = spn_Val.range.y = spn_Val.value = ListBoneWeights[index] --设置值为选中骨骼的权重
				)
			)
			else --如果选择的骨骼不是锁定骨骼(因为是全局锁定,所以可以直接获取),可以更改,但要考虑列表的其他项是不是全部锁定了,全部锁定的话,还是不能改(即,其他的值无法加减)
			(
				  --列表中每有一个锁定,则减少一部分上限,顺便收集序号,作为下方的数量评判标准(前提是列表和是1,如果以后有莫名其妙的问题,可以作为线索)
				if index == 0 then --选中骨骼是自由的,且不在列表中(可以调整,最小为0,最大为自由总值)
				(
					spn_Val.value = 0 --设置值为0
					for i in ListBoneIDs where AllLocks[i] collect (spn_Val.range.y -= ListBoneWeights[findItem ListBoneIDs i];i)
				)
				else --选中骨骼是自由的,且在列表中(可以调整,但要看除此骨骼之外的其他的列表骨骼是否有自由的.上限已在上方设置好了)
				(
					spn_Val.value = ListBoneWeights[index] --设置值为选中骨骼的权重
					local Listlocks = for i in ListBoneIDs where AllLocks[i] and i != ListBoneIDs[index] collect (spn_Val.range.y -= ListBoneWeights[findItem ListBoneIDs i];i)
					if lbx_List.items.count - Listlocks.count - 1 <= 0 do spn_Val.range.x = spn_Val.range.y --没有更多的自由骨骼了
				)
			)
		)
		lbx_List.selection = index = findItem ListBoneIDs SelectBoneID --设置选中项(取决于当前选中骨骼)
		cap = if btn_tips.enabled then if AllLocks[SelectBoneID] then "Lock" else "Free" else "Unkonw";if btn_tips.caption != cap do btn_tips.caption = cap --不这样做,每次回调都会闪一下(标签禁用时),这样就只在有所更改的时候会闪一下.

	)))
	
	fn updateList arg1 arg2 = --每次发生事件执行(鼠标抬起时),后面的两个变量,是用于CallBack的,虽然是空,但必须要有.
	(
		s1 = selection[1]
		--检测是否可用
		try(modf = for m in s1.modifiers where classof m == skin do exit with m)catch(return (reshow clr:true dis:true))--获取修改器(最高优先),出错跳过.
		if modPanel.getCurrentObject() != modf or subobjectLevel != 1 do return (reshow clr:true dis:true)
		--读取有关设置	
		chk_Select_Vertices.checked = modf.filter_vertices
		chk_Select_Element.checked = modf.selectElement
		chk_Hide_Envelopes.checked = modf.showNoEnvelopes
		chk_Vertex_Channel.checked = s1.showVertexColors
		spn_RemoveWeights.value = modf.clearZeroLimit
		--核心数据刷新
		local newAllBones = for i = 1 to (skinOps.GetNumberBones modf) collect skinOps.GetBoneName modf i 0 --重新获取一遍新的骨骼列表
		if (with printAllElements on AllBones as string) != (with printAllElements on newAllBones as string) do --如果旧的列表和新的列表不一样,因为这里直接使用了as array,但阵列过长后面都是...省略号,所以更改骨骼后可能识别不出来,添加了with相关功能之后则可以完整输出
		(
			local newAllLocks = for i in newAllBones collect false --新建设置集,全是false
			for i = 1 to AllBones.count do 
			(
				j = findItem newAllBones AllBones[i]
				if j > 0 do newAllLocks[j] = AllLocks[i] --采用同名骨骼的原有设置
			)
			AllBones = newAllBones;AllLocks = newAllLocks --更换进去
		)
		SelectBoneID = skinOps.GetSelectedBone modf --当前选择的骨骼ID
		CurrentVertexIDs = for i in 1 to (skinOps.GetNumberVertices modf) where (skinOps.IsVertexSelected modf i == 1) collect i --获取所有选择的顶点
		if CurrentVertexIDs.count > 0 then --判断当前是不是至少有一个选择的顶点
		(
			if findItem CurrentVertexIDs FirstVertexID == 0 do FirstVertexID = CurrentVertexIDs[1] --显示点不在列表中,则按序号最小的点执行刷新.如果这个点已经在列表中,则按原点刷新列表,这样可以控制第一批选中的里面,序号最小的被显示,且以其为基准控制权重.不可以不刷新,不刷新的话,发生外部更改无法实时显示.
			ListBoneIDs = for i = 1 to (skinOps.GetVertexWeightCount modf FirstVertexID) collect (skinOps.GetVertexWeightBoneID modf FirstVertexID i)  --获取骨骼ID列表
			ListBoneWeights = for i = 1 to (skinOps.GetVertexWeightCount modf FirstVertexID) collect skinOps.GetVertexWeight modf FirstVertexID i --获取权重列表
			index = findItem ListBoneIDs SelectBoneID --获得列表选中项
			reshow() --更新显示
		)else --没有选择的顶点
		(
			FirstVertexID = 0 --表示没有选择
			ListBoneIDs = #()
			ListBoneWeights = #() --获取权重列表
			index = 0 --列表选中项为0(注意,0表示选择的骨骼在列表外,但选择的骨骼在空列表之外也是合理的)
			reshow clr:true
		)
	)
	fn calcWeight val:0.0 = --计算并赋值权重,设置上限
	(
		if not AllLocks[SelectBoneID] do --如果选中的骨骼是锁定的,则什么都不发生
		(
			if index == 0 then --选中骨骼不在列表中
			(
				local offset = -val --求出差值(原权重0-val)
				local freeWeight = 0.0 --自由权重之和
				local freeList = for i = 1 to ListBoneIDs.count where not AllLocks[ListBoneIDs[i]] collect (freeWeight += ListBoneWeights[i];i) --算出自由权重和,顺便记录自由权重列表
				for i in freeList do ListBoneWeights[i] += (ListBoneWeights[i]/freeWeight*offset) --处理权重,只更改需要改的权重
				append ListBoneIDs SelectBoneID --记录新骨骼
				append ListBoneWeights val --记录新值
				
-- 				callbackItem = undefined --先关闭自动响应 --如果没有,就会被下面的清空权重导致权重赋值错乱因为清空权重的赋值会导致刷新.
-- 				gc light:true
				
-- 				for vID in CurrentVertexIDs do
-- 				(
-- 					skinOps.ReplaceVertexWeights modf vID #() #() --删除所有权重,目前必须得有这一句,否则会偶尔出现列表中出现多个相同骨骼的问题.(可能是刷新过快导致的)
-- 					skinOps.ReplaceVertexWeights modf vID ListBoneIDs ListBoneWeights --设置权重
-- 				)
				
-- 				callbackItem = NodeEventCallback mouseUp:true delay:750 all:updateList --再打开自动响应
			)
			else --选中骨骼在列表中
			(
				local offset = ListBoneWeights[index] - val --求出差值(原权重-val)
				local freeWeight = 0.0 --自由权重之和
				local freeList = for i = 1 to ListBoneIDs.count where not AllLocks[ListBoneIDs[i]] and i != index collect (freeWeight += ListBoneWeights[i];i) --算出自由权重和,顺便记录自由权重列表
				if freeWeight < 0.0001 then for i in freeList do ListBoneWeights[i] += (offset/freeList.count) --自由权重总和是0时处理权重(平均分配)
				else for i in freeList do ListBoneWeights[i] += (ListBoneWeights[i]/freeWeight*offset) --处理权重,只更改需要改的权重
				ListBoneWeights[index] = val --记录新值
				
-- 				for vID in CurrentVertexIDs do skinOps.ReplaceVertexWeights modf vID ListBoneIDs ListBoneWeights --设置权重
			)
			skinOps.bakeSelectedVerts modf
			for vID in CurrentVertexIDs do skinOps.ReplaceVertexWeights modf vID ListBoneIDs ListBoneWeights --设置权重
			reshow() --必须有这个,因为骨骼不在列表中时,新添加的骨骼要靠他更新
-- 			updateList 0 0 --必须有这个,因为骨骼不在列表中时,新添加的骨骼要靠他更新
		)
	)
		
	on WeightToolPro open do --打开窗口
	(
		updateList 0 0
-- 		callbackItem = NodeEventCallback mouseUp:true delay:750 all:updateList --虽然all会在每次响应时刷新多次,但使用时,确实几乎涵盖了一半以上的响应...
-- 		callbackItem = NodeEventCallback mouseUp:true delay:750 modelOtherEvent:updateList selectionChanged:updateList subobjectSelectionChanged:updateList --多次测试后,好像只有这几1个响应是最重要的
		callbackItem = NodeEventCallback mouseUp:true delay:750 modelOtherEvent:updateList callbackEnd:updateList --mouseUp做成了false,不知道为什么做成true会卡,其他信号是动态的,end可以代替上边的另外信号,并且可以低成本响应所有其他信号,把delay调小,响应就不会延迟那么高了,但是测试了意义不大,范围会因为节奏问题显得卡
	)
	on WeightToolPro close do --关闭窗口
	(
		callbackItem = undefined
		gc light:true
	)
	on lbx_List selected sel do --列表选择
	undo "Skin Select Bone" on(
		skinOps.SelectBone modf ListBoneIDs[sel] --更新选择骨骼
	)
	on spn_Val changed val do
	(
		if not thehold.holding() do thehold.Begin() --抄来的,配合下面的响应,它可以使spn在一定区间内撤销
		calcWeight val:val
	)
	on spn_Val entered arg can do --抄来的,它可以使spn在一定区间内撤销
	(
		if thehold.holding() do
		(
			if can then thehold.Cancel() 
			else thehold.Accept "Change Weight"
		)
   )
	on lbx_List doubleClicked sel do 
	(
		--锁定或者解锁列表项目--
		local i = ListBoneIDs[sel]
		AllLocks[i] = not AllLocks[i]
		reshow() --更新显示
	)
	on btn_tips pressed do
	(
		--锁定或者解锁当前选中骨骼--
		AllLocks[SelectBoneID] = not AllLocks[SelectBoneID]
		reshow()
	)
	
	--其他功能响应
	on 'chk_Vertex_Channel' changed state do undo "Change VertexColor Dispaly" on(s1.showVertexColors = state)--缩放单个权重
	on 'chk_Select_Vertices' changed state do undo "Change filter_vertices" on(modf.filter_vertices = state)
	on 'chk_Select_Element' changed state do undo "Change selectElement" on(modf.selectElement = state)
	on 'chk_Hide_Envelopes' changed state do undo "ShowNoEnvelopes" on(modf.showNoEnvelopes = state)
	
	on  'btn_SVBB' pressed do undo "Select Vertex By Selected Bone" on(skinOps.selectVerticesByBone modf)
	
	on  'btn_Shrink' pressed do undo "Skin Shrink" on(skinOps.shrinkSelection modf)
	on  'btn_Grow' pressed do undo "Skin Grow" on(skinOps.growSelection modf)
	on  'btn_Ring' pressed do undo "Skin Ring" on(skinOps.ringSelection modf)
	on  'btn_Loop' pressed do undo "Skin Loop" on(skinOps.loopSelection modf)
	
	on  'btn_00' pressed do undo "Set Weights" on(skinOps.SetWeight modf 0.0)--设置单个权重
	on  'btn_01' pressed do undo "Set Weights" on(skinOps.SetWeight modf 0.1)--设置单个权重
	on  'btn_025' pressed do undo "Set Weights" on(skinOps.SetWeight modf 0.25)--设置单个权重
	on  'btn_05' pressed do undo "Set Weights" on(skinOps.SetWeight modf 0.5)--设置单个权重
	on  'btn_075' pressed do undo "Set Weights" on(skinOps.SetWeight modf 0.75)--设置单个权重
	on  'btn_09' pressed do undo "Set Weights" on(skinOps.SetWeight modf 0.9)--设置单个权重
	on  'btn_10' pressed do undo "Set Weights" on(skinOps.SetWeight modf 1.0)--设置单个权重
	
	on  'btn_Set_Weight' pressed do undo "Set Weights" on(skinOps.SetWeight modf spn_SetVal.value)--设置单个权重
	on  'btn_addWeight' pressed do undo "Set Weights" on(skinOps.addWeight modf spn_SetVal.value)--设置单个权重
	on  'btn_subWeight' pressed do undo "Set Weights" on(skinOps.addWeight modf -spn_SetVal.value)--设置单个权重
		
	on  'btnScale_Weight' pressed do undo "Scale Weights" on(skinOps.scaleWeight modf spn_ScaleVal.value)--缩放单个权重
	on  'btn_ampWeight' pressed do undo "Scale Weights" on(skinOps.scaleWeight modf (1+spn_ScaleVal.value))--缩放单个权重
	on  'btn_redWeight' pressed do undo "Scale Weights" on(skinOps.scaleWeight modf (1-spn_ScaleVal.value))--缩放单个权重
	
	on  'btn_Copy' pressed do undo "Copy Weights" on(skinOps.copyWeights modf)
	on  'btn_Paste' pressed do undo "Paste Weights" on(skinOps.pasteWeights modf)
	on  'btn_Blend' pressed do undo "Blend Weights" on(skinOps.blendSelected modf)
	
	on  'btn_Mirror_Selected' pressed do undo "Mirror Selected" on(modf.mirrorEnabled = on;skinOps.mirrorPaste modf;skinOps.updateMirror modf)
		
	on 'spn_RemoveWeights' changed val do modf.clearZeroLimit = val
	on  'btn_RemoveWeights' pressed do undo "Remove Zero Weights" on(skinOps.RemoveZeroWeights modf)
	
	on  'btn_Paste_pos' pressed do undo "Paste_pos Weights" on(skinOps.pasteWeightsByPos modf 'spn_Paste_pos'.value)--被识别成减号啦
)
createdialog WeightToolPro