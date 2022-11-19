--基本功能已经完备,主要处理显示创建和删除重影时的状态栏提示(可以设置个判断,只有状态栏文本和堆栈文本一致时,才清空堆栈准备后面的响应.)
--还差添加标记的点击响应
--还差各个按钮的点击功能优化,
--还差功能菜单的功能实现
--还差重生成重影的实现.(可以先做快速重做,以后再响应自动重做)
--按当前关键帧批量创建重影,按间隔帧批量创建重影

--更兼容的重影创建方法.获取和生成.效率略低,但避开了一些情况下attach mesh可能带来的Bug.
--开启重影的骨骼属性,减少控制器.如果在隐藏几何体的情况,则自动重新隐藏.
--保存前hold场景,清除重影和层,然后保存;保存后取回场景,注意不要留下撤销记录.

--创建集合时,应该可以选中最新的集合(不一定,要考虑设计)
--应该可以重新指定集合内的物体(更新集合)

--当清理全局变量时,如果有重影物体受到影响,则考虑清理戳记后重新生成,或者删除.

--所有重影相关操作均不加入撤销系统,来方便启用保存时自动清理功能.
--保存时自动清理(不保存重影),在保存前,记录所有重影的全部信息(物体名,线框色,trimesh,自定义属性,材质),删除重影,处理并删除层,保存后重新创建层并重新创建重影.不能计入撤销缓存,否则将会拖慢系统,并可能会导致撤销时意外的崩溃.
--重影精简功能,使用修改器精简顶点并返回最终结果,开启精简功能时会隐藏所有线,来避免凌乱的线面显示.

--删除时,不再以名称识别,而以集合唯一ID(可能一个ID列表)和自定义属性的"帧"来识别(Ghost_Created_Time),只在阵列中寻找(_Ghost_Objects),会极大的加快速度.

--现在的重影作为bone物体,与其一起隐藏,但应该按类型将其一起隐藏(不过由于可以混合创建,类型可能会很难统一...暂时先不管了.或者扩展成dummy也行(没有扩展类就创建一个扩展类,dummy可以不显示背面的线,十分合适).不知道会不会提升性能.)

--已实现:创建重影时,被隐藏的面应该也被隐藏

try(destroydialog __Ghost3Roll)catch()
rollout __Ghost3Roll "重影3" width:216 height:246
(
/* 	功能扩展 */
	fn GetCusFnClass = --注意,透明度取值范围为0-255,获得的窗口范围为 左 上 右 下
	(
		source = 
		"
		using System;
		using System.Runtime.InteropServices;
		
		public class CusFn
		{
			[DllImport(\"user32.dll\")]
			public static extern long GetWindowLong(IntPtr hWnd, int nIndex);
			[DllImport(\"user32.dll\")]
			public static extern long SetWindowLong(IntPtr hWnd, int nIndex, long dwNewLong);
			[DllImport(\"user32.dll\")]
			public static extern int SetLayeredWindowAttributes(IntPtr hwnd, int crKey, byte bAlpha, int dwFlags);

			public void SetOpacityByHandle(int hWnd, int val)
			{
				const int GWL_EXSTYLE = -20;
				const int WS_EX_TRANSPARENT = 0x20;
				const int WS_EX_LAYERED = 0x80000;
				const int LWA_ALPHA = 0x2;

				SetWindowLong((IntPtr)hWnd, GWL_EXSTYLE, GetWindowLong((IntPtr)hWnd, GWL_EXSTYLE) | WS_EX_LAYERED);
				SetLayeredWindowAttributes((IntPtr)hWnd, 0, (byte)val, LWA_ALPHA);
			}
			
			[DllImport(\"user32.dll\")]
			static extern bool GetWindowRect(int hWnd, out POS rect);
			public struct POS
			{
				public int Left;
				public int Top;
				public int Right;
				public int Bottom;
			}
			public int[] GetWindowPosAndSize(int hWnd)
			{
				POS rect;
				if (GetWindowRect(hWnd, out rect))
				{
					return new int[] { rect.Left, rect.Top, rect.Right, rect.Bottom };
				}
				return null;
			}
		}
		"
		csharpProvider = dotnetobject "Microsoft.CSharp.CSharpCodeProvider"
		compilerParams = dotnetobject "System.CodeDom.Compiler.CompilerParameters"
		compilerParams.GenerateInMemory = on
		compilerResults = csharpProvider.CompileAssemblyFromSource compilerParams #(source)
		compilerResults.CompiledAssembly.CreateInstance "CusFn"
	)
	
/* 	必要变量 */
	local
	_CusClass = GetCusFnClass(),
	_Pin = false,
	_Offset = [0,0],
	_Cursor = (dotnetclass "System.Windows.Forms.Cursor"),
	_Ghost_Ini = (getdir #userScripts + @"\Ghost3Setting.ini"),
	_Ghost_Mode = (getINISetting _Ghost_Ini "Ghost3Options" "mode") == "true", --如果获取失败,返回""空字符串,则是false
	_Ghost_Objects = #(),
	_Ghost_Name = "",
	_Ghost_Color = "RED",
	_Ghost_Countermark = #(),
	_Ghost_Timing = 60,
	_Ghost_Group = #(),
	_oldIDs = #(),
	_BarStack = "",
	_TipStr,
	_TipTik,
	_Temp_Ghost_Set,
	_Temp_Ghost_Set_IDs,
	_Temp_Ghost_ItemSel,
	_Temp_Count,
	_Btns,
	_NodeEvent,
	_noSave = true,
	_tempFile = (getdir #temp) + @"\GhostNodes.tmp", --注意一下,可能会与某些杀毒保护的禁止写入功能冲突
	_recordFileName = "",
	_GhostCA = attributes GhostAtt attribID:#(1030507090L, 2949698909L)
	(
		parameters GhostParameters
		(
			Ghost_Type type:#string animatable:false invisibleInTV:true
			Ghost_Color type:#string animatable:false invisibleInTV:true
			Ghost_Created_Time type:#time animatable:false invisibleInTV:true --subAnim:true
			Ghost_Timing type:#integer animatable:false invisibleInTV:true default:0
			Ghost_Countermark type:#point4Tab tabSizeVariable:true animatable:false invisibleInTV:true
		)
	)
	
/* 	界面UI */
	local _OpacityTimer = (dotnetobject "Timer")
	local _ShowStateTimer = (dotnetobject "Timer")
	local lbx_Lib,lb,tb
	
	dotNetControl 'lbl_Ico' "Label" pos:[0,0] width:20 height:20
	dotNetControl 'lbl_Tit' "Label" text:"重影3" pos:[20,0] width:176 height:20
	dotNetControl 'btn_Cls' "Button" text:"X" pos:[196,0] width:20 height:20

	dotNetControl 'edt_Str' "TextBox" pos:[4,24] width:90 height:20
	dotNetControl 'btn_Set' "Button" text:"..." pos:[94,24] width:30 height:14
	
	dotNetControl 'pnl_Lib' "Panel" pos:[4,42] width:120 height:182
	
	dotNetControl 'edt_Bar' "TextBox" pos:[4,228] width:120 height:20
	
	dotNetControl 'btn_Fnc' "Button" text:"重影功能" pos:[126,20] width:90 height:30
	dotNetControl 'btn_Clr' "Button" text:"清理重影" pos:[126,50] width:90 height:30
	
	dotNetControl 'btn_Red' "Button" text:"红色重影" pos:[126,88] width:90 height:30
	dotNetControl 'btn_Ylw' "Button" text:"黄色重影" pos:[126,118] width:90 height:30
	dotNetControl 'btn_Grn' "Button" text:"绿色重影" pos:[126,148] width:90 height:30
	dotNetControl 'btn_Blu' "Button" text:"蓝色重影" pos:[126,178] width:90 height:30
	
	dotNetControl 'btn_Tag' "Button" text:"标记物体" pos:[126,215] width:90 height:30
	
	local ToolTipObj = dotnetobject "System.Windows.Forms.ToolTip"
	
/* 	依赖函数 */
	fn _GenID ref:::__Global_Ghost_Set_IDs = --这是用来生成随机ID的
	(
		local nID = (random [-9999, -9999, -9999, -9999] [9999, 9999, 9999, 9999])
		while (finditem ref nID) > 0 do nID = (random [-9999, -9999, -9999, -9999] [9999, 9999, 9999, 9999])
		nID
	)
	fn isGhostAtt Att = return((custAttributes.getDef Att).attribID[1] == 1030507090L and (custAttributes.getDef Att).attribID[2] == 2949698909L) --判断ID是否一致,一致则是GhostAtt
	fn _GetGhostObjects = _Ghost_Objects = for o in geometry where (isvalidNode o and isProperty o #GhostAtt) collect o --收集重影物体
	fn _UpItem = --更新列表,由于必须删除再添加,所以需要指定一下选择项,要排除创建重影导致的节点事件导致的更新.如果排除不了,或者不好排除,就用其他办法覆盖掉ShowBarText
	(
-- 		local upitm = false --没啥用,更改选择就会发生
-- 		try(for i = 1 to ::__Global_Ghost_Set.count do if _oldIDs[i] != ::__Global_Ghost_Set_IDs[i] do exit with upitm = true)catch(upitm = true) --ID列表有一个不一样就会需要刷新
-- 		if upitm do
-- 		(
			lbx_Lib.Items.Clear()
			
			if ::__Global_Ghost_Set == undefined then global __Global_Ghost_Set = #() else for i in ::__Global_Ghost_Set do lbx_Lib.Items.Add i[1] -- 读取全局变量
			persistent Global __Global_Ghost_Set
			
			if ::__Global_Ghost_Set_IDs == undefined then global __Global_Ghost_Set_IDs = #() -- 读取全局变量
			persistent Global __Global_Ghost_Set_IDs
				
			if ::__Global_Ghost_ItemSel == undefined then global __Global_Ghost_ItemSel = #() -- 读取全局变量
			persistent Global __Global_Ghost_ItemSel
			
			maxIndex = __Global_Ghost_ItemSel.count--容错
			if maxIndex > 0 and (__Global_Ghost_ItemSel[maxIndex] + 1) > __Global_Ghost_Set.count do __Global_Ghost_ItemSel = #()--容错,排除最大值可能为0的情况(即列表下标为0)
			
			for s in ::__Global_Ghost_ItemSel do lbx_Lib.SetSelected s true --更新列表会丢失选择,这样来选择之前选择的东西
			
			if lbx_Lib.items.count > 0 and lbx_Lib.SelectedIndices.count < 1 do lbx_Lib.SetSelected 0 true --有东西的时候,至少选中第一个
-- 		)
	)
	fn _CleanGlobal a b = --清理全局变量,包括集合物体被删除时
	(
-- 		_oldIDs = ::__Global_Ghost_Set_IDs as Array
		for i = ::__Global_Ghost_Set.count to 1 by -1 do
		(
			for j = ::__Global_Ghost_Set[i][2].count to 1 by -1 where not isValidNode ::__Global_Ghost_Set[i][2][j] do deleteItem ::__Global_Ghost_Set[i][2] j
			if ::__Global_Ghost_Set[i][2].count == 0 do 
			(
				deleteItem ::__Global_Ghost_Set i;deleteItem ::__Global_Ghost_Set_IDs i;
				index = findItem ::__Global_Ghost_ItemSel (i-1)
				if index > 0 do deleteItem ::__Global_Ghost_ItemSel index
			)
		)
		_UpItem()
		_GetGhostObjects()
	)
	fn ShowBarText str:"工具已就绪." = --显示提示文本
	(
		if _BarStack == "" then _TipStr = str else (_TipStr = _BarStack;_BarStack = "") --如果堆栈有内容,则优先显示堆栈并将其清空,用于排除一部分显示.
		_TipTik = 0;edt_Bar.text = "" --初始化
		_ShowStateTimer.Interval = (350/str.count)
		_ShowStateTimer.start()
	)
	fn SnapShotMeshes Geos wirecolor:gray name:"" hideAllEdge:false = --自定义的快照函数,因为默认的快照+附加功能,会在某些情况下卡死.增加隐藏已隐藏的面功能,注意,geos提供的是一个节点时,会将在层次结构中运算.
	(
		local
		fList = #(),
		fSmoothGroup = #(),
		eHideSet = #(),
		vList = #(),
		hiddenFaces = #()
		for g in geos do
		(
			m = snapshotasmesh g
			
			vCount = vList.count
			fCount = fList.count
			fList += for i = 1 to m.numfaces collect (append fSmoothGroup (getFaceSmoothGroup m i);append eHideSet (for j = 1 to 3 where not(getEdgeVis m i j) collect j);(getFace m i) + vCount)--先取面列表,因为其需要加vList的数量getNumFaces 
			vList += for i = 1 to m.numverts collect getVert m i --getNumFaces
			hiddenFaces += for i in meshop.getHiddenFaces m collect i + fCount
		)
		local result = mesh vertices:vList faces:fList wirecolor:wirecolor name:name
		
		for i = 1 to fSmoothGroup.count do
		(
			setFaceSmoothGroup result i fSmoothGroup[i]
			for j in (if hideAllEdge then #(1,2,3) else eHideSet[i]) do setEdgeVis result i j false --现在只是为了测试完全无线框是否有利,发布时清理一下这里和上边的收集功能,可以提高不少效率.
		)
		meshop.setHiddenFaces result hiddenFaces
		
		result
	)
	fn CreateGhost col:_Ghost_Color nam:_Ghost_Name mode:_Ghost_Mode marks:_Ghost_Countermark sels:(for i = 0 to lbx_Lib.SelectedIndices.count-1 collect lbx_Lib.SelectedIndices.item[i]+1) tag:false = --四色重影函数,col = RED,GREEN,BLUE,YELLOW,PURPLE,改成了专用函数,需要依赖全局变量 state:(getCommandPanelTaskMode()) mode true则创建单一重影
	(undotext = "Create " + col + " Ghost"
	undo undotext on(
		if sels.count > 0 then(
			local GEOstate = hideByCategory.geometry
	-- 			suspendEditing()
			tint = case col of
			(
				"RED":(color 255 75 75)
				"YELLOW":(color 255 255 75)
				"GREEN":(color 75 255 75)
				"BLUE":(color 75 75 255)
				"PURPLE":(tag = true;(color 255 75 255))
			)
			if (Ghost_GLayer = LayerManager.getLayerFromName "GHOST3:LAYER") == undefined do (Ghost_GLayer = LayerManager.newLayerFromName "GHOST3:LAYER";Ghost_GLayer.on = Ghost_GLayer.lock = true)
			with redraw off(with animate off(
				bname = ("GHOST3:" + nam + col + (if tag then "t" else if mode then "s" else slidertime as string)) --区分颜色的部分删除掉了,区分名字
				try(delete (getnodebyname bname))catch() --删除旧物体
-- 				b = mesh vertices:#() faces:#() wirecolor:tint name:bname --editable_mesh wirecolor:tint name:bname
-- 				meshop.attach b (mesh vertices:#() faces:#())
-- 				update b
				try
				(
					Ghost_set = #();for i in sels do Ghost_set += ::__Global_Ghost_Set[i][2]
					b = SnapShotMeshes (makeUniqueArray Ghost_set) wirecolor:tint name:bname
-- 					for i in makeUniqueArray Ghost_set do 
-- 						meshop.attach b (snapshotasmesh i) -- (snapshot i) --卡死问题是因为physx病毒--如果是合格的节点,则创建并附加,之前的where判断被删除了,因为全局变量清理函数对删除之类的变化都有响应,----这个where判断必须有,因为用户有可能中途删除对象
-- 						attach b (snapshot i)
-- 					update b
					b.boneEnable = on
					b.showfrozeningray = b.renderable = b.castShadows = b.receiveshadows = b.applyAtmospherics = b.inheritVisibility = b.primaryVisibility = b.secondaryVisibility = off
					CustAttributes.add b _GhostCA BaseObject:false
					b.Ghost_Color = col;b.Ghost_Created_Time = slidertime;b.Ghost_Timing = _Ghost_Timing;b.Ghost_Countermark = marks;b.Ghost_Type = if mode then "s" else "f" --添加并设置自定义属性
					b.visibility = Bezier_Float()
					if tag then 
					(
						b.visibility.controller.value = 0.75
						b.parent = selection[1];b.Ghost_Type = "t"
					)
					else
					(
						mat = InkNPaint();mat.shade_amt_on = mat.ink_on = mat.two_side_on = off
						b.mat = mat;mat.name = b.name
						ctrl = b.visibility.controller = float_script()
						ctrl.addnode "N" b
--		 				ctrl.script = "N.mat.paint_color = if N.Ghost_Created_Time < F then "+tint_gray as string+" else "+tint as string+";0.75 - (abs(F - N.Ghost_Created_Time)/20)" --最大值是0.75
						ctrl.script = "value = if N.Ghost_Timing == 0 then 0.5 else 0.5 - abs(F - N.Ghost_Created_Time) / N.Ghost_Timing; if N.Ghost_Created_Time == F then 0.5 else (value + abs(value))*0.5" --最大值是0.5,以前是0.75
-- 						ctrl = b.Visibility.controller = float_limit ()
-- 						ctrl.lower_limit = 0;ctrl.upper_limit = 0.7
-- 						ctrl.lower_smoothing = 0.05;ctrl.upper_smoothing = 0.05
						tint_gray = copy tint
						tint_gray.s = 215
						tint_gray.v = if mode then 150 else tint_gray.v = 100
						ctrl = b.mat.paint_color.controller = Point3_script()
						ctrl.addnode "N" b
						ctrl.script = "if N.Ghost_Created_Time < F then "+substituteString ((tint_gray/255) as string) " 1)" ")"+" else "+substituteString ((tint/255) as string) " 1)" ")"
					)
					Ghost_GLayer.addnode b --整理层
					append _Ghost_Objects b --添加到重影物体列表,以便于集合变更需要改名时的检测
					ShowBarText str:"创建1个重影."
					hideByCategory.geometry = GEOstate
				)catch
				(
					messagebox ("创建重影时出现异常:\n"+getCurrentException()) --捕获异常
					if isvalidnode b do delete b
				)--catch
			))--with animate off--with redraw off
	-- 			resumeEditing()
		)
		else ShowBarText str:"没有选中的集合."
	)--undo on
	)
	fn DeleteGhost col:_Ghost_Color GName:_Ghost_Name t:(slidertime as string) = -- _Ghost_Mode true 即 单一模式
	undo "Delete Ghost" on 
	(
		if _Ghost_Mode do t = "s"
		_BarStack = ("删除" + delete(execute(" $'GHOST3:" + GName + col + t + "*'")) as string + "个重影.")
	) --以后看看,删除后如果撤销,能不能恢复_Ghost_Objs的变量

	fn matchNameNum str:"" = --用于对名称的集合编号,返回最新的名字,为空会自动为"未命名"
	(
		if str == "" do str = "未命名"
		num = (for i in ::__Global_Ghost_Set where matchPattern i[1] pattern:(str+"*") collect (replace i[1] 1 str.count "") as integer) --所有计数
		if num.count == 0 then str else str + (amax num + 1) as string
	)
	fn matchName str:"" = --用于查找是否有重名,有重名则进入计数,这个只在创建时使用.
	(
		if findItem (for i in ::__Global_Ghost_Set collect i[1]) str > 0 do str = matchNameNum str:str
		str
	)
	fn qSortID v1 v2 = 
	(
		local i1 = finditem ::__Global_Ghost_Set_IDs v1
		local i2 = finditem ::__Global_Ghost_Set_IDs v2
		if i2 < i1 then 1 else -1
	)
	fn reNameGhostObj obj = --qSortID:qSortID
	(
		--标记排序
		ary = obj.Ghost_Countermark as Array
		qSort ary qSortID
		obj.Ghost_Countermark = ary
		mname = "";for mark in obj.Ghost_Countermark do mname += (::__Global_Ghost_Set[findItem ::__Global_Ghost_Set_IDs mark][1] + "|")
		tname = if obj.Ghost_Type == "f" then obj.Ghost_Created_Time as string else obj.Ghost_Type
		
		obj.name = "GHOST3:" + mname + obj.Ghost_Color + tname
		if obj.mat != undefined do obj.mat.name = obj.name
	)
	fn renameAllGhostobj = for obj in _Ghost_Objects do reNameGhostObj obj -- reNameGhostObj:reNameGhostObj 重命名所有重影物体
	fn findGhostMarkItem ary tag = --查找集合ID标记,在一系列戳记之中寻找一组戳记.
	(
		exist = false
		for itm in ary do 
			if itm.count == tag.count and (bool = true;for j = 1 to itm.count do;if itm[j] != tag[j] do exit with bool = false;bool) do exit with exist = true
		return exist
	)
	fn clearGhostobjMarks obj = --清理重影物体上的集合ID标记
	(
		obj.Ghost_Countermark = for id in obj.Ghost_Countermark where (findItem ::__Global_Ghost_Set_IDs id) > 0 collect id
		if obj.Ghost_Countermark.count == 0 do delete obj
	)
	fn reCreateGhostObj obj = --重创建重影物体
	(
		--只对受到影响的物体执行
		--先清理
		--然后根据物体自定义属性,重新创建,可能需要调用CreateGhost,所以要将其放在上面
	)
	fn setTooltip = 
	(
		ToolTipObj.SetToolTip _Btns[1] "集合库操作"
		local GhostButtonTips
		if _Ghost_Mode 
		then
		(
			lbl_Tit.text = "重影3 - " + "单一模式"
			ToolTipObj.SetToolTip _Btns[2] "左键:\t\t开启/关闭物体轨迹;\nAlt+左键:\t切换到多帧重影模式;\n右键:\t\t工具扩展菜单;\n滚轮:\t\t跳到前后关键帧;\nAlt+滚轮:\t跳到前后帧."
			ToolTipObj.SetToolTip _Btns[3] "左键:\t\t删除所有单一重影;\n右键:\t\t重影清理菜单."
			GhostButtonTips = "左键:\t\t创建单一重影[按集合];\nAlt+左键:\t删除单一重影[按集合];\n中键:\t\t更新所有单一重影.(未实现)\n滚轮:\t\t跳到前后关键帧;\nAlt+滚轮:\t跳到前后帧."
		)
		else
		(
			lbl_Tit.text = "重影3 - " + "多帧模式"
			ToolTipObj.SetToolTip _Btns[2] "左键:\t\t开启/关闭物体轨迹;\nAlt+左键:\t切换到单一重影模式;\n右键:\t\t工具扩展菜单;\n滚轮:\t\t跳到前后关键帧;\nAlt+滚轮:\t跳到前后帧."
			ToolTipObj.SetToolTip _Btns[3] "左键:\t删除所有多帧重影;\n右键:\t重影清理菜单."
			GhostButtonTips = "左键:\t\t创建当前帧重影[按集合];\nAlt+左键:\t删除当前帧重影[按集合];\n中键:\t\t更新前后帧重影;(未实现)\n滚轮:\t\t跳到前后关键帧;\nAlt+滚轮:\t跳到前后帧;\nCtrl+滚轮:\t选中前后帧重影."
		)
		for i = 4 to 7 do ToolTipObj.SetToolTip _Btns[i] GhostButtonTips
		
		ToolTipObj.SetToolTip _Btns[8] "左键:\t\t创建标记;\nAlt+左键:\t删除标记."
	)
	fn savemode = (setToolTip();setINISetting _Ghost_Ini "Ghost3Options" "mode" (_Ghost_Mode as string))
	
/* 	回调函数 */
	fn Call_PreMerage =
	(
		_Temp_Ghost_Set = ::__Global_Ghost_Set --处理合并的临时变量
		_Temp_Ghost_Set_IDs = ::__Global_Ghost_Set_IDs --处理合并的临时变量
		_Temp_Ghost_ItemSel = ::__Global_Ghost_ItemSel
		_Temp_Count = geometry.count
		persistents.remove #__Global_Ghost_Set --被移除的变量会被合并进来的覆盖
		persistents.remove #__Global_Ghost_Set_IDs
		persistents.remove #__Global_Ghost_ItemSel
	)
	fn Call_PostMerage =
	(
		::__Global_Ghost_Set = _Temp_Ghost_Set + ::__Global_Ghost_Set
		for i = 1 to ::__Global_Ghost_Set.count do --处理重名的集合
		(
			str = ::__Global_Ghost_Set[i][1]
			num = for j = 1 to i-1 where matchPattern ::__Global_Ghost_Set[j][1] pattern:(str+"*") collect (replace ::__Global_Ghost_Set[j][1] 1 str.count "") as integer
			::__Global_Ghost_Set[i][1] = if num.count == 0 then str else str + (amax num + 1) as string
		)
		
		--检查合并进来的集合ID是否有重复,有重复则重指定,并且重指定给相关物体,重指定的范围为for i = (_Temp_Ghost_ObjCount+1) to objects.count do ()
		mObjs = for i = (_Temp_Count+1) to geometry.count where isproperty geometry[i] #Ghost_Countermark collect geometry[i] 
		efObjs = #()
		for i = 1 to ::__Global_Ghost_Set_IDs.count do
		(
			id = ::__Global_Ghost_Set_IDs[i]
			if findItem _Temp_Ghost_Set_IDs id > 0 do 
			(
				::__Global_Ghost_Set_IDs[i] = (_GenID ref:_Temp_Ghost_Set_IDs)
				for o in mObjs do
				(
					temp = o.Ghost_Countermark as Array
					index = findItem temp id
					if index > 0 do 
					(
						o.Ghost_Countermark[index] = ::__Global_Ghost_Set_IDs[i]
						append efObjs o
					)
				)
			)
		)
		::__Global_Ghost_Set_IDs = _Temp_Ghost_Set_IDs + ::__Global_Ghost_Set_IDs
		for o in (makeUniqueArray efObjs) do --重命名受到影响的模型(在合并进来的模型范围内寻找的),重新指定材质,不论哪种方式合并的材质,都可以被以下方法更新.
		(
			reNameGhostObj o
			o.mat = copy o.mat
			o.mat.paint_color.controller.SetNode "N" o
		)
		
		_Ghost_Objects = _Ghost_Objects + mObjs --更新重影物体
		
		::__Global_Ghost_ItemSel = _Temp_Ghost_ItemSel + (count = _Temp_Ghost_Set.count;for s in ::__Global_Ghost_ItemSel collect (s + count)) --更新集合列表选择
		
		_CleanGlobal 0 0 --因为有可能没有完全合并,所以先清理一下,清理函数带有更新功能
	)
	fn Call_PreDelete = --以后看看,删除后如果撤销,能不能恢复_Ghost_Objs的变量--撤销可以除法节点添加事件,自动重新获取了.
	(
		index = findItem _Ghost_Objects (callbacks.notificationParam())
		if index > 0 do deleteItem _Ghost_Objects index
	)
	fn Call_PostSave = --用脚本调用保存也会触发,即使是savenodes也会触发
	undo off(
-- 		print(theHold.getCurrentUndoLevels())
		 --移除自身,以免在savenodes里触发
		callbacks.removeScripts #filePostSave id:#__MyGhost3
		--保存重影物体
-- 		savenodes _Ghost_Objects _tempFile
		--清理重影
		delete _Ghost_Objects
		
		lname = "GHOST3:LAYER"
		Ghost_GLayer = LayerManager.getLayerFromName lname
		if Ghost_GLayer != undefined  do
		(
			Layer0 = LayerManager.getLayer 0
			Ghost_GLayer.nodes &LayerNodes
			if LayerNodes.count > 0 do for o in LayerNodes do Layer0.addnode o
			if Ghost_GLayer.current do Layer0.current = true
			LayerManager.deleteLayerByName lname
		)
-- 		print(theHold.getCurrentUndoLevels())
		--重新保存一下清空过的文件
		saveMaxFile _recordFileName useNewFile:false
		--把重影物体合并进来
-- 		print(theHold.getCurrentUndoLevels())
		mergeMAXFile _tempFile quiet:true #mergeDups --如果刚刚创建过,会导致"create RED ghost"撤销崩溃.
-- 		max undo
-- 		print(theHold.getCurrentUndoLevels()) --撤销缓存在这里消失,已关闭节点事件和合并回调,问题可能出在合并本身,经测试,合并本身会稳定触发清空撤销缓存
		deleteFile _tempFile --过河拆桥,合并完就删掉
		--恢复合并回调
		callbacks.addscript #filePreMerge "__Ghost3Roll.Call_PreMerage()" id:#__MyGhost3
		callbacks.addscript #filePostMerge "__Ghost3Roll.Call_PostMerage()" id:#__MyGhost3
		--恢复节点事件
		_NodeEvent = NodeEventCallback mouseUp:true delay:750 added:_CleanGlobal deleted:_CleanGlobal
		--恢复保存前的回调
		callbacks.addscript #filePreSave "__Ghost3Roll.Call_PreSave()" id:#__MyGhost3
-- 		print(theHold.getCurrentUndoLevels())
	)
	fn Call_PreSave = 
	(
-- 		print(theHold.getCurrentUndoLevels())
		--移除自身,以免重复调用
		callbacks.removeScripts #filePreSave id:#__MyGhost3
		--移除合并回调,以免合并时调用
		callbacks.removeScripts #filePreMerge id:#__MyGhost3
		callbacks.removeScripts #filePostMerge id:#__MyGhost3
		--移除节点事件,以免合并时调用
		_NodeEvent = undefined;gc light:true
		--记录保存的文件名
		_recordFileName = callbacks.notificationParam()
		--启动保存后的回调
		callbacks.addscript #filePostSave "__Ghost3Roll.Call_PostSave()" id:#__MyGhost3
-- 		print(theHold.getCurrentUndoLevels())
	)
	-- 		holdMaxFile(),savenodes() 这些命令在保存类回调中会导致崩溃,及时先关闭回调再调用,也会导致崩溃.
	fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y]
		
/* 	功能 */
	
	--标题栏功能
	on lbl_Ico MouseDown do (_Pin = true;_Offset = (GetDialogPos __Ghost3Roll) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico MouseUp do (_Pin = false)
	on lbl_Ico MouseMove do if _Pin do SetDialogPos __Ghost3Roll (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit MouseDown do (_Pin = true;_Offset = (GetDialogPos __Ghost3Roll) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit MouseUp do (_Pin = false)
	on lbl_Tit MouseMove do if _Pin do SetDialogPos __Ghost3Roll (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on btn_Cls Click do DestroyDialog __Ghost3Roll
	
	-- 集合库按钮
	on btn_Set click arg do btn_Set.contextmenustrip.show btn_Set arg.Location
	
	-- 集合列表盒--在启动窗口初始化里
	
	
	--右侧按钮依赖,
	fn findFrame back totime:false = --寻找帧重影
	if not _Ghost_Mode do
	(
		Ghostname = "GHOST3:" + _Ghost_Name + _Ghost_Color
		if totime then
		(
			ctime = currenttime
		)
		else
		(
			local 
				ctime = if selection.count == 1 and finditem (execute("$'"+Ghostname+"*f' as array")) selection[1] > 0 then selection[1].Ghost_Created_Time else currenttime,
				times = if back then
				(for i = (ctime-1) to animationrange.start by -1 collect i) + (for i = animationrange.end to ctime by -1 collect i)
			else
				(for i = (ctime+1) to animationrange.end collect i) + (for i = animationrange.start to ctime collect i)
			for t in times do
			(
				sf = (t as string)
				n = getnodebyname (Ghostname + sf)
				if isValidNode n do (select n;ShowBarText str:(sf +" 的重影.");exit)--(slidertime = i; exit)
			)
		) 
	)
	fn slidingTime back = 
	(
		if back 
			then (if slidertime == animationrange.start then slidertime = animationrange.end else slidertime -= 1) 
			else (if slidertime == animationrange.end then slidertime = animationrange.start else slidertime += 1) 
	)
	fn slidingKeys back = 
	(
		try(
		if back
			then slidertime = trackbar.GetPreviousKeyTime()
			else slidertime = trackbar.GetNextKeyTime()
		)catch()
	)
	
	-- 重影功能按钮.
	on btn_Fnc Click arg do --点击
	(
		case of
		(
			(keyboard.altPressed) : (_Ghost_Mode = not _Ghost_Mode;savemode()) 
			(keyboard.controlPressed) : (hideByCategory.bones = not hideByCategory.bones)
			default : (try(state = true;for i in (selection as array) where i.showTrajectory do exit with state = false;$.showTrajectory = state)catch()) --很慢,但是可以考虑到优先关闭所有轨迹
		)
	)
	on btn_Fnc MouseWheel s e do --滚轮
	(
		back = e.Delta > 0
		case of
		(
			(keyboard.altPressed): slidingTime back
			default: slidingKeys back
		)
	)
	
	-- 重影清理按钮
	on btn_Clr Click do
	(
		if _Ghost_Mode then DeleteGhost col:"*" GName:"*" t:"s"
		else DeleteGhost col:"*" mode:false GName:"*" t:"*f"
	)
	
	-- 重影按钮
		--响应点击
	fn Answer s e = --按钮响应点击函数
	(
		_Ghost_Color = s.name
		if keyboard.altPressed then (if s.name == "PURPLE" then DeleteGhost t:"t" else DeleteGhost()) else (if s.name == "PURPLE" then CreateGhost tag:true else CreateGhost()) --关于mode的判断,已经加入到了函数中.
	)
	on btn_Red Click s e do Answer s e
	on btn_Ylw Click s e do Answer s e
	on btn_Grn Click s e do Answer s e
	on btn_Blu Click s e do Answer s e
	on btn_Tag Click s e do Answer s e
		--响应滚轮
	fn mouseWheel s e = --鼠标滚轮功能
	(
		_Ghost_Color = s.name
		back = e.Delta > 0
		case of
		(
			(keyboard.controlPressed):findFrame back 
			(keyboard.altPressed): slidingTime back
-- 			(keyboard.shiftPressed) : 
			default: slidingKeys back
		)
	)
	on btn_Red MouseWheel s e do mouseWheel s e
	on btn_Ylw MouseWheel s e do mouseWheel s e
	on btn_Grn MouseWheel s e do mouseWheel s e
	on btn_Blu MouseWheel s e do mouseWheel s e
	
	--标记按钮
	on btn_Tag Click s e do Answer s e
	
	--透明响应
	fn _StartOpacity_Timer =
	(
		arg = _CusClass.GetWindowPosAndSize __Ghost3Roll.hwnd --左上右下
		p = _Cursor.Position
		if p.x >= arg[1] and p.y >= arg[2] and p.x <= arg[3] and p.y <= arg[4] do
		(
			_CusClass.SetOpacityByHandle (__Ghost3Roll.hwnd as integer) 255
			_OpacityTimer.start()
		)
	)
	on __Ghost3Roll MouseMove arg do _StartOpacity_Timer()
	on lbl_Tit MouseEnter do _StartOpacity_Timer()
	on btn_Cls MouseEnter do _StartOpacity_Timer()
	on edt_Str MouseEnter do _StartOpacity_Timer()
	on btn_Set MouseEnter do _StartOpacity_Timer()
	on edt_Bar MouseEnter do _StartOpacity_Timer()
	on btn_Fnc MouseEnter do _StartOpacity_Timer()
	on btn_Clr MouseEnter do _StartOpacity_Timer()
	on btn_Red MouseEnter do _StartOpacity_Timer()
	on btn_Ylw MouseEnter do _StartOpacity_Timer()
	on btn_Grn MouseEnter do _StartOpacity_Timer()
	on btn_Blu MouseEnter do _StartOpacity_Timer()
	on btn_Tag MouseEnter do _StartOpacity_Timer()
	--启动初始化
	on __Ghost3Roll open do 
	(
		--读取配置,先读场景,读不到读配置,读不到则设置为60
		
		--设置计时器
		_OpacityTimer.Interval = 500
		fn _OpacityTimer_Tick s e =
		(
			arg = _CusClass.GetWindowPosAndSize __Ghost3Roll.hwnd --左上右下
			p = _Cursor.Position
			if p.x < arg[1] or p.y < arg[2] or p.x > arg[3] or p.y > arg[4] do
			(
				_CusClass.SetOpacityByHandle (__Ghost3Roll.hwnd as integer) 128
				s.stop()
			)
		)
		_OpacityTimer.start()
		dotnet.addEventHandler _OpacityTimer "Tick" _OpacityTimer_Tick
		fn _ShowStateTimer_Tick s e =
		(
			_TipTik += 1
			if _TipTik > _TipStr.count then _ShowStateTimer.stop() else edt_Bar.text += _TipStr[_TipTik]
		)
		dotnet.addEventHandler _ShowStateTimer "Tick" _ShowStateTimer_Tick
		
		--添加列表组件
		lbx = dotNetObject "ListBox"
		lbx.name = "lbx_Lib"
		lbx.width=137;lbx.height=188 --原宽度为137,减少四点到133,为了显示较窄的滚动条,但是由于滚动条上下的按钮,所以显示并不好
		lbx.SelectionMode = (dotNetClass "System.Windows.Forms.SelectionMode").MultiExtended
		for i = 1 to 20 do lbx.Items.Add (i as string)
		fn SelectedIndexChanged s e =
		(
			_Ghost_Name = "";_Ghost_Countermark = #();::__Global_Ghost_ItemSel = #()
			sels = for i = 0 to s.SelectedIndices.count-1 collect (append ::__Global_Ghost_ItemSel s.SelectedIndices.item[i];s.SelectedIndices.item[i]+1)
			for i in sels do (_Ghost_Name += (::__Global_Ghost_Set[i][1]+"|");append _Ghost_Countermark ::__Global_Ghost_Set_IDs[i]) --万一列表项目有没有刷新成功的时候,所以直接用数据中的名 --添加|
			persistent Global __Global_Ghost_ItemSel	
			ShowBarText str:("选中"+sels.count as string+"个集合.")
		)
		dotNet.addEventHandler lbx "SelectedIndexChanged" SelectedIndexChanged
		fn DoubleClick s e = 
		(
			clearSelection()
			select ::__Global_Ghost_Set[s.SelectedIndex+1][2]
-- 			_BarStack = "选择集合对象."	
			ShowBarText str:("选择集合对象.")
		)
		dotNet.addEventHandler lbx "DoubleClick" DoubleClick
		dotNet.addEventHandler lbx  "MouseEnter" _StartOpacity_Timer
		dotNet.setLifetimeControl lbx #dotnet
		pnl_lib.controls.add Lbx
		lbx_Lib = Lbx --反馈给窗口的内部变量
		
		--设置组件样式
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
		fn StringToImage str = -- http://lonerobot.net/ --给UI初始化调用
		(
			local ConvertClass = dotNetClass "System.Convert"
			local ImageClass = dotNetClass "System.Drawing.Image"
			byteArr = ConvertClass.FromBase64String str
			memstream = dotnetobject "System.IO.MemoryStream" byteArr
			DecodedImg = ImageClass.fromstream memstream
			memstream.close() ; return DecodedImg
		)
		_Btns = #(btn_Set, btn_Fnc, btn_Clr, btn_Red, btn_Ylw, btn_Grn, btn_Blu, btn_Tag)
		local BC = (colorMan.getColor #background)*255,BackColor = getColor BC dir:true,PanelColor = getColor BC val:32,ForeColor = getColor BC val:152,
		BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,BorderSize = 0,Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat,
		TitleColor = getColor BC val:-16,RedColor = getColor [232,17,35] dir:true,
		TitleImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVQ4jbVSQQ7AIAij+/+fWYhhqTAMCVsvIpZSUZkCRb0W+cR/EqqrBoB6nMiA8eCx4ZpeYRM4dXeXxikFItymhLgt0MG/AjyPajZjBzyZ4wtsRWug+NRBu3t0kRzYwdv7V/+AYRbYBu95jbwBROQG6QApGebqFYgAAAAASUVORK5CYII=",
		ImageBeforeText = (dotnetclass "System.Windows.Forms.TextImageRelation").ImageBeforeText,
		MiddleRight = (dotnetclass "System.Drawing.ContentAlignment").MiddleRight,MiddleLeft = (dotnetclass "System.Drawing.ContentAlignment").MiddleLeft,
		pre = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVQ4j",
		imageList = #(
			(StringToImage (pre+"b1TiwrAIAi0/Xj25Q5d9tbFiB1UJnZ3UgVYg4z8VF8SiKgraTyC84gY2vrLUNpGR+CpQ3XQtec6aMks4rMtHCf43ALGKGMH7cOQG5DDKVWiHC+chcnBeIDjNydK4N6/4YBmB1mxPGtWD0+XOwLMSEQkswzd188lOeez/Q0AuAFzXEt9RUycqwAAAABJRU5ErkJggg==")),
			(StringToImage (pre+"cVSQQ6AIAwbvsCn+oQ+wR9jSATLoIsxJPYyWErXAsnmyKI/8FsDQK25rj1KH0Bi/iYmvUYnEE23x0EXL3TAYkp4bYTlAp8iHI7o9x78MdoLlEMn0KpwlmSE6LCK0L0/O5jh5mZ5B7tzQrZDFEX+Zbzn6nl/wswue0tB7ErpQH8AAAAASUVORK5CYII=")),
			(StringToImage (pre+"cVSQQ7AIAjDfc/38j4WYlgqCiFxy3oRa4UGaLSHBPyifwjpfRDMYvEiZlZds1hxBZXKmBJk1c2lapBLHZhNH5cTVPBtAuxH1JtjB7gY6QSmT6Oh7VUH5erexeJAH3bzj/YAoRuGW4Z3PL3uTxDRDdoXLrnAbXyKAAAAAElFTkSuQmCC")),
			(StringToImage (pre+"cVSQQrAMAjTfW/v7fscUhypVhG2sVxq01SDyrSHJHzQ34TIOQkeYnEQ81AdW6w4kkptLAmq6uZSNciVDsymj9sJOvg2AfYj681jB7gY5QSWT7Oh/KqDdnXvIjjQh938sz1A6IbhluEdT6/7E0R0AZgCK+mTxW3DAAAAAElFTkSuQmCC")),
			(StringToImage (pre+"cVSQQrAMAjTfa/v9X0dljoyW0XYxnKx1aBBw7RHD/IL/0q03kYUlm5vD2FRHk/eqB7BpDJuDbLpplI5mEsVmEz/Ljeo4NsGuI9oN48VoDHSCyDmQvlVBeXpBlOxKNDC7v6RDxDqMHQZ/jF63p8gohPc5y65qSUw4QAAAABJRU5ErkJggg==")),
			(StringToImage (pre+"cWSYQ6AIAiFoet5Xs5no6S9UBhbtd4fFZ/wDWRaqwfxyX8FWjvfiHC3vZcIq4+H77jdgkpl3RJk1Y1SPRhLCQzT78sJKvo2AfYj6s1jAuxMOgHUaCi/SlCubjKKiUAvVvOP/gFKERADz7h6358ioh3fty65dGnCaQAAAABJRU5ErkJggg==")),
			(StringToImage (pre+"cWSYQrAIAiFddfbeTufQ8Lx0hRhG3t/Mnvph8W0lyT54L8Tcs47PFgsDubB6mOLVUfSqa2lQNXdKNWDuZLAMH3cLtDRtwVwHtlsHhPgZMoXWC7NgfKrBO3uniIQ6MHu/bN/gFIExMA9rt73p4joAprSK+nMGf4iAAAAAElFTkSuQmCC"))
		)
		for c in _Btns do (c.BackColor = BackColor;c.ForeColor = ForeColor;c.Flatstyle = Flat;c.Flatappearance.borderSize = 0) --设置按钮风格
		for i = 1 to 7 do (local btn = _Btns[i+1];btn.image = imageList[i];btn.TextImageRelation = ImageBeforeText;btn.TextAlign = MiddleRight) --设置按钮图标
		for c in #(edt_Str, edt_Bar, lbx) do (c.BackColor = PanelColor;c.ForeColor = ForeColor;c.BorderStyle = BorderStyle) --设置组件风格
		btn_Red.name = "RED";btn_Ylw.name = "YELLOW";btn_Grn.name = "GREEN";btn_Blu.name = "BLUE";btn_Tag.name = "PURPLE"
		--设置组件样式
		edt_Bar.ReadOnly = true
		--设置标题栏
		lbl_Ico.image = TitleImage;lbl_Ico.BackColor = TitleColor --图标栏
		lbl_Tit.BackColor = TitleColor;lbl_Tit.ForeColor = ForeColor;lbl_Tit.TextAlign = MiddleLeft --标题栏
		btn_Cls.BackColor = TitleColor;btn_Cls.ForeColor = ForeColor;btn_Cls.Flatstyle = Flat;btn_Cls.Flatappearance.borderSize = 0;btn_Cls.FlatAppearance.MouseOverBackColor = RedColor --关闭按钮
		
		--为组件添加菜单
		fn BuildMenuStrip Items:#() Images:#() Clicks:#() subItem:#() subImages:#() subClicks:#() left:-32 ForeColor: BackColor: Closing:_OpacityTimer.start onOpening:_OpacityTimer.stop onOpened: = --!为标题,-为分隔符,其他均直接创建,subitem的首部应为数字,数字是父项目的索引.注意,
		(
			local CMS = dotNetObject "ContextMenuStrip",sepcount = 0
			for i = 1 to Items.count do --菜单项
			(
				if classOf Items[i] == dotNetObject then CMS.items.add Items[i]
				else
				(
					local iname = Items[i],item
					case of
					(
						(iname == "-") : (
							index = CMS.items.add(dotNetObject "ToolStripSeparator")
							item = CMS.items.item[index]
							item.name = ("sep" + (sepcount += 1) as string)
							item.Margin = (dotnetObject "Padding" 0 0 0 0)
						)
						(iname[1] == "!") : (
							iname = (substituteString iname "!" "")
							index = CMS.items.add (dotNetObject "ToolStripLabel" iname)
							item = CMS.items.item[index]
							item.name = iname
							item.font = dotNetObject "System.Drawing.Font" CMS.items.item[index].font (dotNetClass "System.Drawing.FontStyle").bold
			-- 				item.font = dotnetobject "System.Drawing.Font" item.font.FontFamily (item.font.size+1) ((dotNetClass "System.Drawing.FontStyle").bold)
							item.Margin = (dotnetObject "Padding" left 3 0 -1) --默认(dotnetObject "Padding" 0 1 0 2) 左 上 右 下
						)
						default : (
							index = CMS.items.add(dotNetObject "ToolStripMenuItem" iname)
							item = CMS.items.item[index]
							item.name = iname
						)
					)
					
					img = try(Images[i])catch(0)
					if img as string == "dotNetObject:System.Drawing.Bitmap" do item.image = img
					
					func = try(Clicks[i])catch(0)
					if classOf func == MAXScriptFunction do dotNet.addEventHandler item "Click" func
					
					dotNet.setLifetimeControl item #dotnet
				)
			)
			for i = 1 to subItem.count do --下拉菜单项
			(
				local iname = subItem[i],index = ""
				for j = 1 to iname.count do if (findString "1234567890" iname[1] != undefined) then (index += iname[1];iname[1] = "") else exit
				index = index as integer - 1
				prtItem = CMS.items.item[index] 
				if prtItem as string == "dotNetObject:System.Windows.Forms.ToolStripMenuItem" do
				(
					index = prtItem.DropDownItems.add(dotNetObject "ToolStripMenuItem" iname)
					item = prtItem.DropDownItems.item[index]
					item.name = iname
					prtItem.DropDown.BackColor = BackColor
					item.ForeColor = ForeColor
					
					img = try(subImages[i])catch(0)
					if img as string == "dotNetObject:System.Drawing.Bitmap" do item.image = img
						
					func = try(subClicks[i])catch(0)
					if classOf func == MAXScriptFunction do dotNet.addEventHandler item "Click" func
						
					dotNet.setLifetimeControl item #dotnet
				)
			)
			
			if BackColor != unsupplied do CMS.BackColor = BackColor
			if ForeColor != unsupplied do CMS.ForeColor = ForeColor
		-- 	if classof MouseMove == MAXScriptFunction do dotNet.addEventHandler CMS "MouseMove" MouseMove
			if Closing != unsupplied do dotNet.addEventHandler CMS "Closing" Closing
			if onOpening != unsupplied do dotNet.addEventHandler CMS "Opening" onOpening
			if onOpened != unsupplied do dotNet.addEventHandler CMS "Opened" onOpened
			dotNet.setLifetimeControl CMS #dotnet
			return CMS
		)
		
		--集合库菜单
		fn AddCols s e = --添加集合
		(
			local _set = for i in selection as Array where superclassof i == GeometryClass collect i --获取可设定的物体列表
			if _set.count > 0 then
			(
				n = edt_Str.text
				if n == "" then n = matchNameNum() else n = matchName str:n
				append ::__Global_Ghost_Set #(n,_set)
				append ::__Global_Ghost_Set_IDs (_GenID())
				_UpItem()
				ShowBarText str:("新集合:"+n+".")
			)
			else 
			(
				ShowBarText str:("没有选择几何体.")
			)
		)
		fn DelCols s e = --删除集合
		(
			sels = for i = 0 to lbx_Lib.SelectedIndices.count-1 collect lbx_Lib.SelectedIndices.item[i]+1
			for i in sels.count to 1 by -1 do (deleteitem ::__Global_Ghost_Set sels[i];deleteitem ::__Global_Ghost_Set_IDs sels[i])
			::__Global_Ghost_ItemSel = #()
			ShowBarText str:("删除"+sels.count as string+"个集合.");_UpItem()
			for obj in _Ghost_Objects do clearGhostobjMarks obj --清理物体ID
	-- 		_GetGhostObjects()--这里已经用节点事件响应替换了
			renameAllGhostobj()
		)
		fn ReNameCols s e = --重命名集合
		(
			sels = for i = 0 to lbx_Lib.SelectedIndices.count-1 collect lbx_Lib.SelectedIndices.item[i]+1
			sln = for i in sels collect (::__Global_Ghost_Set[i][1] = matchNameNum str:edt_Str.text;i-1)
			ShowBarText str:("命名"+sels.count as string+"个集合.");_UpItem sel:sln
			renameAllGhostobj()
		)
		fn MoveUpCols s e = --向上移动集合
		(
			sels = for i = 0 to lbx_Lib.SelectedIndices.count-1 collect lbx_Lib.SelectedIndices.item[i]+1
			maxIndex = 1 --最顶端序号
			::__Global_Ghost_ItemSel = for i in sels collect
			(
				if i > maxIndex then
				(
					insertItem ::__Global_Ghost_Set[i] ::__Global_Ghost_Set (i-1);insertItem ::__Global_Ghost_Set_IDs[i] ::__Global_Ghost_Set_IDs (i-1)
					deleteitem ::__Global_Ghost_Set (i+1);deleteitem ::__Global_Ghost_Set_IDs (i+1)
					maxIndex = i-2
				)else
				(
					maxIndex = i+1
					i-1
				)
			)
			ShowBarText str:("移动"+sels.count as string+"个集合.");_UpItem sel:sln
			renameAllGhostobj()
		)
		fn MoveDnCols s e = --向下移动集合
		(
			sels = for i = 0 to lbx_Lib.SelectedIndices.count-1 collect lbx_Lib.SelectedIndices.item[i]+1
			maxIndex = ::__Global_Ghost_Set.count --最底端序号
			::__Global_Ghost_ItemSel = for j = sels.count to 1 by -1 collect
			(
				i = sels[j]
				if i < maxIndex then
				(
					insertItem ::__Global_Ghost_Set[i] ::__Global_Ghost_Set (i+2);insertItem ::__Global_Ghost_Set_IDs[i] ::__Global_Ghost_Set_IDs (i+2)
					deleteitem ::__Global_Ghost_Set i;deleteitem ::__Global_Ghost_Set_IDs i
					maxIndex = i
				)else 
				(
					maxIndex = i-1
					i-1
				)
			)
			ShowBarText str:("移动"+sels.count as string+"个集合.");_UpItem sel:sln
			renameAllGhostobj()
		)
		fn 'menu_Set_Opened' s e = 
		(
			s.location.x -= 36
			s.location.y -= 10
			cpos = _Cursor.Position
			cpos.x += 1;cpos.y += 1
			_Cursor.Position = cpos
			_Ghost_Group = #()
			_GetGhostObjects()
			for o in _Ghost_Objects do
			(
				clearGhostobjMarks o --有可能因为意外,导致存在ID列表中没有的ID(主要时开发时,但是加了这句鲁棒性会更改,可以留着)
				local Countermark = o.Ghost_Countermark
				if not findGhostMarkItem _Ghost_Group Countermark do append _Ghost_Group Countermark
			)
			MI = s.items.item["快速选择"]
			MI.DropDownItems.clear()
			if _Ghost_Group.count > 0 then
				for GroupIndex = 1 to _Ghost_Group.count do
				(
					gp = _Ghost_Group[GroupIndex]
					indexList = for itm in gp collect finditem ::__Global_Ghost_Set_IDs itm --转化为序号
					str = "";for i in indexList do str += ::__Global_Ghost_Set[i][1]
					index = MI.DropDownItems.add(dotNetObject "ToolStripMenuItem" str)
					item = MI.DropDownItems.item[index]
					item.name = GroupIndex as string
					dotNet.addEventHandler item "Click" (fn 'tmp' s e = (lbx_Lib.ClearSelected();for id in _Ghost_Group[s.name as integer] do lbx_Lib.SetSelected ((findItem ::__Global_Ghost_Set_IDs id)-1) true))
					dotNet.setLifetimeControl item #dotnet
				)
			else
				(
					index = s.items.item["快速选择"].DropDownItems.add(dotNetObject "ToolStripMenuItem" "空")
					s.items.item["快速选择"].DropDownItems.item[index].enabled = false
				)
			_OpacityTimer.stop()
			--更新现有集合组,加入到菜单
		)
		p1 = #("按名称创建集合", "重命名选中集合", "上移选中集合", "下移选中集合", "删除选中集合", "-", "快速选择")
		p2 = #(AddCols,ReNameCols,MoveUpCols,MoveDnCols,DelCols)
		menu_Set = BuildMenuStrip Items:p1 Clicks:p2 onOpened:menu_Set_Opened ForeColor:ForeColor BackColor:BackColor
		DD = menu_Set.items.item["快速选择"].DropDown
		DD.BackColor = BackColor
		DD.ForeColor = ForeColor
		menu_Set.ShowCheckMargin = false
		menu_Set.ShowImageMargin = false
		btn_Set.ContextMenuStrip = menu_Set
		
		--重影功能菜单
		fn CreatePoint s e =
		(
			fn pickVert obj =
			(
				local 
					closestVert = 1,
					closestPos,
					theRay = mapscreenToWorldRay mouse.pos,
					theInt = intersectRay obj theRay
				
				if theInt != undefined do
				(
					local
						pt = theInt.pos,
						msh = snapshotAsMesh obj,
						closestDist = distance pt (getVert msh 1)
					closestPos = getVert msh 1
					
					for i = 2 to msh.numVerts do (
						local vPos = (getVert msh i)
						local dist = distance pt vPos
						if dist < closestDist do (closestDist = dist ; closestVert = i; closestPos = vPos)
					)
				)
				#(closestVert, closestPos)
			)
			fn geometryFilt o = (SuperclassOf o == geometryClass)
			local obj = pickObject message:"提示:点击物体上需要创建跟随点的位置." count:1 pickFrozen:keyboard.controlPressed filter:geometryFilt rubberBand:[0,0,0] rubberBandColor:red
			if try(isValidNode obj)catch(false) do
			(
				local res = pickVert obj
				local vert = res[1]
				local pos = res[2]
				
				if vert != undefined do
				with animate off(undo "create follow point" on(
					p = point size:10 wirecolor:obj.wirecolor axistripod:off centermarker:off cross:on Box:off name:(uniquename "FollowPoint") isSelected:on
					p.showTrajectory = on
					--仅能跟随到点,且不可自由位移,因为二级位移很难以顶点为参照.
					--X现在是最简单适用的,不要更改,忽略用户可能添加父级的可能性,添加父级可能出现的错误也会使用户减少意外操作.X使用变换脚本X要除去自身父级,但不能用变换脚本,因为需要控制位移.去除自身父级比想象的麻烦,因为要涉及二级位移.
					local sc = "if isValidNode R then meshop.getVert R.mesh I node:R else [0,0,0]" 
					
					ctrl = p.position.controller = position_script()
					ctrl.addNode "R" obj
					ctrl.addConstant "I" (vert as integer)
					ctrl.script = (sc as stringstream)
				))
			)
		)
		pn = dotnetobject "panel"
		pn.Size = dotNetObject "System.Drawing.Size" 100 28
		lbt = dotnetobject "label"
		lbt.Size = dotNetObject "System.Drawing.Size" 64 14
		lbt.text = "消隐间隔:"
		lb = dotnetobject "label"
		lb.Size = dotNetObject "System.Drawing.Size" 36 14
		lb.text = (_Ghost_Timing as string + "f")
		lb.TextAlign = MiddleRight
		tb = dotnetobject "trackbar"
		-- tb.text = "设置数值"
		tb.TickStyle = tb.TickStyle.None
		tb.autosize = false --关闭自动尺寸
		tb.Minimum = 0
		tb.Maximum = 480
		tb.Size = dotNetObject "System.Drawing.Size" 132 16
		fn tbScroll s e = 
		(
			lb.text = (s.value as string + "f")
			_Ghost_Timing = s.value
		)
		fn tbMouseUp s e =
		(
			for o in _Ghost_Objects do o.Ghost_Timing = _Ghost_Timing
		)
		dotnet.addEventHandler tb "Scroll" tbScroll
		dotnet.addEventHandler tb "MouseUp" tbMouseUp
		dotNet.setLifetimeControl tb #dotnet
		pn.controls.add lbt
		pn.controls.add lb
		pn.controls.add tb
		lb.Location = dotNetObject "System.Drawing.Point" 64 0
		tb.Location = dotNetObject "System.Drawing.Point" 0 16
		customItem = DotnetObject "System.Windows.Forms.ToolStripControlHost" pn --p
		customItem.autoSize = false
		customItem.Size = dotNetObject "System.Drawing.Size" 126 32
		
		p1 = #("单一重影模式", "多帧重影模式", "-", "不保存重影", "-", customItem, "显示重影名","-", "扩展工具","-","使用旧版(不再支持)","帮助&关于") --Items
		fn 'SetMode' s e = 
		(
			_Ghost_Mode = (s.text == "单一重影模式") --单一重影模式是true
			setToolTip()
			savemode()
-- 			setINISetting _Ghost_Ini "Ghost3Options" "mode" (_Ghost_Mode as string)
		)
		fn 'SetSave' s e =
		(
			_noSave = not _noSave
			if _noSave then
			(
				callbacks.addscript #filePreSave "__Ghost3Roll.Call_PreSave()" id:#__MyGhost3
				callbacks.addscript #filePostSave "__Ghost3Roll.Call_PostSave()" id:#__MyGhost3
			)
			else
			(
				callbacks.removeScripts #filePreSave id:#__MyGhost3
				callbacks.removeScripts #filePostSave id:#__MyGhost3
			)
			setINISetting _Ghost_Ini "Ghost3Options" "noSave" (_noSave as string)
		)
		p2 = #(SetMode, SetMode, 0, SetSave, 0, 0, 0, 0, 0, 0, 0, 0) --Clicks
		p3 = #("9创建顶点轨迹")
		p4 = #(CreatePoint)
		fn Menu_Fnc_Opening s e =
		(
			s.items.item["多帧重影模式"].checked = not(s.items.item["单一重影模式"].checked = _Ghost_Mode)
			s.items.item["不保存重影"].checked = _noSave
			s.items.item["显示重影名"].enabled = s.items.item["使用旧版(不再支持)"].enabled = s.items.item["帮助&关于"].enabled = false
			tb.value = _Ghost_Timing
			_OpacityTimer.stop()
		)
		menu_Fnc = BuildMenuStrip Items:p1 Clicks:p2 subItem:p3 subClicks:p4 onOpening:Menu_Fnc_Opening ForeColor:ForeColor BackColor:BackColor
		btn_Fnc.ContextMenuStrip = menu_Fnc
		
		--重影清理菜单
		p1 = #("!单一重影", "-", "删除所有单一重影[按集合]", "删除所有单一重影", "!多帧重影", "-", "删除所有当前帧重影[按集合]", "删除所有多帧重影[按集合]", "删除所有当前帧重影", "删除所有多帧重影", "!其他", "-", "删除所有标记重影", "删除所有重影")
		p2 = #(0, 0, (fn 'd' = DeleteGhost col:"*" t:"s"), (fn 'd' = DeleteGhost col:"*" GName:"*" t:"s"), 
			0, 0, (fn 'd' = DeleteGhost col:"*"), (fn 'd' = DeleteGhost col:"*" t:"*f"), (fn 'd' = DeleteGhost col:"*" GName:"*"), (fn 'd' = DeleteGhost col:"*" GName:"*" t:"*f"),
			0, 0, (fn 'd' = DeleteGhost col:"*" GName:"*" t:"t"), (fn 'd' = DeleteGhost col:"*" GName:"*" t:"*"))
		menu_Clr = BuildMenuStrip Items:p1 Clicks:p2 ForeColor:ForeColor BackColor:BackColor left:-8
		menu_Clr.ShowCheckMargin = false
		menu_Clr.ShowImageMargin = false
		btn_Clr.ContextMenuStrip = menu_Clr
			
		--重影菜单
		p1 = #("!单一重影", "-", "创建单一重影[按集合]", "删除此颜色单一重影[按集合]", "删除此颜色所有单一重影", "!多帧重影", "-", "创建当前帧重影[按集合]", "删除此颜色当前帧重影[按集合]", "删除此颜色所有帧重影[按集合]","删除此颜色所有帧重影")
		p2 = #(0, 0, fn 'CS' = CreateGhost mode:true, fn 'DS' = DeleteGhost t:"s", fn 'DSA' = DeleteGhost GName:"*" t:"s",
			0, 0, fn 'CF' = CreateGhost mode:false, fn 'DCF' = DeleteGhost(), fn 'DAF' = DeleteGhost t:"*f", fn 'DFA' = DeleteGhost GName:"*" t:"*f")
		fn 'Menu_Ght_Opening' s e = (_Ghost_Color = s.SourceControl.name;_OpacityTimer.stop())
		menu_Ght = BuildMenuStrip Items:p1 Clicks:p2 onOpening:Menu_Ght_Opening ForeColor:ForeColor BackColor:BackColor left:-8
		menu_Ght.ShowCheckMargin = false
		menu_Ght.ShowImageMargin = false
		for i = 4 to 7 do (_Btns[i].contextmenustrip = menu_Ght)
			
		---标记重影菜单
		p1 = #("!标记重影", "创建标记重影[按集合]", "删除标记重影[按集合]", "删除所有标记重影")
		p2 = #(0, (fn 'CT' = CreateGhost tag:true), (fn 'DTA' = DeleteGhost t:"t"), (fn 'DTA' = DeleteGhost GName:"*" t:"t"))
		menu_Tag = BuildMenuStrip Items:p1 Clicks:p2 onOpening:Menu_Ght_Opening ForeColor:ForeColor BackColor:BackColor left:-8
		menu_Tag.ShowCheckMargin = false
		menu_Tag.ShowImageMargin = false
		_Btns[8].contextmenustrip = menu_Tag
			
		--工具提示
		ToolTipObj.tooltipicon = (dotnetclass "System.Windows.Forms.ToolTipIcon").Info
		ToolTipObj.ToolTipTitle = "帮助信息"
		ToolTipObj.AutoPopDelay = 20000 --持续显示的时间
		ToolTipObj.InitialDelay = 750 --停留后多长时间显示
		ToolTipObj.ReshowDelay = 750 --已经显示提示时,移动后显示另一个提示的最小间隔
		ToolTipObj.ShowAlways = ToolTipObj.UseAnimation = ToolTipObj.UseFading = true
		setTooltip() --设置工具提示
		
		--注册回调
		callbacks.removescripts id:#__MyGhost3
		callbacks.addscript #filePreMerge "__Ghost3Roll.Call_PreMerage()" id:#__MyGhost3
		callbacks.addscript #filePostMerge "__Ghost3Roll.Call_PostMerage()" id:#__MyGhost3
		callbacks.addscript #nodePreDelete "__Ghost3Roll.Call_PreDelete()" id:#__MyGhost3
		_noSave = (getINISetting _Ghost_Ini "Ghost3Options" "noSave") == "true"
		if _noSave do
		(
			callbacks.addscript #filePreSave "__Ghost3Roll.Call_PreSave()" id:#__MyGhost3
			callbacks.addscript #filePostSave "__Ghost3Roll.Call_PostSave()" id:#__MyGhost3
		)
		_NodeEvent = undefined;gc light:true
-- 		fn test a b = print(format "% a:% b:%\n" "controllerOtherEvent" a b)
		_NodeEvent = NodeEventCallback mouseUp:true delay:750 added:_CleanGlobal deleted:_CleanGlobal --controllerOtherEvent:test,可以通过这个来实现刷新 --这里的added,有处理撤销后除法added,恢复ghost_objects变量的功能 callbackEnd:_CleanGlobal() added:_CleanGlobal() deleted:_CleanGlobal() controllerOtherEvent:(print("controllerOtherEvent"))
		
		_GetGhostObjects() --获取场景中的重影物体,主要用于加速回调重命名
		_UpItem()--更新集合项目变量,并显示
		_CleanGlobal 0 0 --放到下面,因为_up里加了未定义容错, 两个参数没啥用,兼容回调用的
		
		ShowBarText()
	)
	on __Ghost3Roll close do --关闭时清理
	(
		_OpacityTimer.stop()
		_ShowStateTimer.stop()
		callbacks.removescripts id:#__MyGhost3
		_NodeEvent = undefined;gc light:true
		--清理层,最小限度删除.只在删除时更改当前层
		lname = "GHOST3:LAYER"
		Ghost_GLayer = LayerManager.getLayerFromName lname
		if Ghost_GLayer != undefined and (Ghost_GLayer.nodes &LayerNodes;LayerNodes.count == 0) do
		(
			if Ghost_GLayer.current do (LayerManager.getLayer 0).current = true
			LayerManager.deleteLayerByName lname
		)
		
	)
	on __Ghost3Roll help do print "打开帮助"
)
CreateDialog __Ghost3Roll style:#() --style:#()
