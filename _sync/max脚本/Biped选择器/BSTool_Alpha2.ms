--对于响应,要避免频繁刷新.不能用户新建了个box都刷新一下界面.biped.getNode $ 13的结果与当前bip相同,则刷新.刷新功能很重要,可以让选择时不需要容错.
--对于响应,当新建bip时应当刷新.
--应当有停靠选项,可以选择左或者右

--数据列表应该对应体块来分组,这样在刷新时可以只更新一部分UI(大量物体时全部重新布局很缓慢),并且更容易实现双击选择功能.(可以将panel也命上名,按钮事件发生时获取按钮父panel的名字来读数组和判断刷新)
--no!不用体块分组了,现在的效率基本够用,利用一个时钟,添加或删除的时候先判断物体是不是与当前bip相关,如果相关,禁用面板.开启刷新时钟,2秒内无新操作则刷新,时钟执行完后自行关闭
--重新构建函数,直接按bip层级获取.添加二级寻找函数和数组对比函数.仍然采用局部动态刷新.像neck和脊柱,同时响应刷新,但布局使用的列表是#()+#()或#(#(),#())


--可以将节点值绑定到按钮上,使用 control.tag = dotnetmxsvalue selection[1];select control.tag.value
--每次添加或删除时,如果节点属于当前bip,都会重新获取当前bip,会得到一些列表(在一个列表中),找到不一致的列表,刷新即可.(首次刷新也应当可以利用)
--添加可以用node:added,检测删除需要用predelete(在节点删除前,构建一个需要检测刷新的列表)和postdelete(删除后,刷新并清除检测列表)

--右键点击,可以将此物体回归为skinpose

--不设计自动刷新功能,在bip列表的左侧添加一个手动刷新按钮.因为复制粘贴等操作即使在自动刷新后仍可能出错.但是检测到为当前bip添加节点,或某些操作涉及deletenode都会提示用户刷新.
--但bip列表应该一直可以动态刷新
--复制粘贴变换的功能只对hand和foot启用,同时
--不行,还是得设计自动刷新功能,这样删除和添加bip的时候会有比较好的体验.因为bip根节点列表是必须要动态响应的.

--清理场景内的复制粘贴集功能,点击清理时,会检测保留集选项.提示此功能的勾选状态会导致集合不断累加.询问是否关闭此功能.

--1.可以将一些依赖代码分离,发布时再合并
--2.现在有了更好的判断添加删除物体时的影响的代码,请见 获取bip.ms
--3.为了流畅选择,可以使用禁用面板,而不是现在的切换到创建面板

--已实现
--选择时应当自动跳转到创建面板,来让选择更高效.


try(destroydialog BSTRollout)catch()
rollout BSTRollout "BSTool 0.2" width:232 height:628
(
	dotNetControl pnl_root "Panel" pos:[88,356] width:56 height:56

	dotNetControl pnl_head "Panel" pos:[88,60] width:56 height:56
	dotNetControl pnl_spine "Panel" pos:[88,122] width:56 height:226
	
	dotNetControl pnl_rarm "Panel" pos:[40,116] width:40 height:192
	dotNetControl pnl_rfingers "Panel" pos:[36,312] width:46 height:40
	dotNetControl pnl_rfinger "Panel" pos:[22,300] width:10 height:40
	
	dotNetControl pnl_larm "Panel" pos:[152,116] width:40 height:192
	dotNetControl pnl_lfingers "Panel" pos:[150,312] width:46 height:40
	dotNetControl pnl_lfinger "Panel" pos:[200,300] width:10 height:40
	
	dotNetControl pnl_rarmCtrl "Panel" pos:[8,250] width:16 height:40
	dotNetControl pnl_larmCtrl "Panel" pos:[208,250] width:16 height:40
	
	dotNetControl pnl_lleg "Panel" pos:[152,372] width:40 height:162
	dotNetControl pnl_lfoot "Panel" pos:[152,538] width:56 height:34
	dotNetControl pnl_ltoes "Panel" pos:[152,576] width:56 height:32
	
	dotNetControl pnl_rleg "Panel" pos:[40,372] width:40 height:162
	dotNetControl pnl_rfoot "Panel" pos:[24,538] width:56 height:34
	dotNetControl pnl_rtoes "Panel" pos:[24,576] width:56 height:32
	
	dotNetControl pnl_rlegCtrl "Panel" pos:[8,484] width:16 height:40
	dotNetControl pnl_llegCtrl "Panel" pos:[208,484] width:16 height:40
	
	dotNetControl pnl_tail "Panel" pos:[96,420] width:40 height:164
	dotNetControl pnl_pony "Panel" pos:[8,28] width:216 height:24
	dotNetControl pnl_prop "Panel" pos:[8,60] width:72 height:50
	
	dotNetControl pnl_selCtrl "Panel" pos:[152,60] width:72 height:50 --选择控制器
	
	dotNetControl 'lbl_Ico' "Label" pos:[0,0] width:20 height:20 --可点击出现菜单
	dotNetControl 'lbl_Tit' "Label" pos:[20,0] width:176 height:20
	
	label lbl1 "" pos:[0,0] width:232 height:628 --不知道原因,但其他控件刷新后它就跑后边去了,但保险起见还是把他隐藏一下.

	local
	--功能
	_Cursor = (dotnetclass "System.Windows.Forms.Cursor"),
	_Cursors = (dotnetclass "System.Windows.Forms.Cursors"),
	_Offset = [0,0],
	_Pin = false,
	tooltip = dotnetobject "System.Windows.Forms.ToolTip",
	--数据
	DragDropEffects = (dotNetClass "System.Windows.Forms.DragDropEffects").none, --以前为all,设置成none也没啥影响
	DotNetStretch = (dotNetClass "System.Windows.Forms.ImageLayout").Stretch,
	_nodeEvent,
	panels = #(pnl_root,pnl_head,pnl_spine,pnl_rarm,pnl_rfingers,pnl_rfinger,pnl_larm,pnl_lfingers,pnl_lfinger,pnl_rarmCtrl,pnl_larmCtrl,pnl_lleg,pnl_lfoot,pnl_ltoes,pnl_rleg,pnl_rfoot,pnl_rtoes,pnl_rlegCtrl,pnl_llegCtrl,pnl_tail,pnl_pony,pnl_prop,pnl_selCtrl),
	BipList,
	currentBip,
	lastBips,
	bipbones = #(),
	buttons = #(),
	hold = false,
	last = undefined,
	currentState = false,
	panelState,
	btncount = 0
	
	fn _Node_SelectionChanged ev nd = --选择的动态响应
	(
		for n in nd do
		(
			tn = GetAnimByHandle(n)
			id = findItem bipbones tn
			if id > 0 do
			(
				btn = buttons[id]
				btn.BackgroundImage = btn.tag.value[2][if btn.tag.value[1] = tn.isSelected then 2 else 1]
			)
		)
	)
	fn _Node_Added ev nd =
	(
		for n in nd do
		(
			tn = GetAnimByHandle(n)
			print tn
		)
	)
	
	--标题栏依赖
	fn DotNetPoint2MaxPoint2 dp = return [dp.x,dp.y]
	fn BuildMenuStrip Items:#() Images:#() Clicks:#() left:-32 ForeColor: BackColor: = --!为标题,-为分隔符,其他均直接创建,subitem的首部应为数字,数字是父项目的索引.注意,
	(
		local CMS = dotNetObject "ContextMenuStrip",Padding = dotnetclass "Padding",hasimg = false
		for i = 1 to Items.count do --菜单项
		(
			local iname = Items[i],item
			index = CMS.items.add(dotNetObject "ToolStripMenuItem" iname)
			item = CMS.items.item[index]
			
			img = try(Images[i])catch(0)
			if img as string == "dotNetObject:System.Drawing.Bitmap" do (item.image = img;hasimg = true)
			
			func = try(Clicks[i])catch(0)
			if classOf func == MAXScriptFunction do dotNet.addEventHandler item "Click" func
			
			dotNet.setLifetimeControl item #dotnet
		)
		
		if BackColor != unsupplied do CMS.BackColor = BackColor
		if ForeColor != unsupplied do CMS.ForeColor = ForeColor

-- 		BSTRollout.lbl_Ico.ContextMenuStrip.ShowCheckMargin = false
		CMS.ShowImageMargin = hasimg
		CMS.Margin = Padding.Empty
		CMS.Padding = Padding.Empty
		dotNet.setLifetimeControl CMS #dotnet
		return CMS
	)
		
	fn GetBipCOM =  --获取Bip根节点(质心)
	(
		Ctrls = (getClassInstances Vertical_Horizontal_Turn)
		for c in Ctrls collect c.rootnode
	)
	fn GetBipBonesByCOM root = --根据根节点获取Bip的所有骨骼,节点本身已在此提供(root)
	(--if isValidnode root do
		local
		ctrl = root.controller, -- 控制器对象
		larm,rarm, -- 1 2 数组
		lfingers,rfingers, -- 3 4 二维数组
		lleg,rleg, -- 5 6 数组
		ltoes,rtoes, -- 7 8 二维数组
		spine, -- 9 数组
		tail, -- 10 数组
		head, -- 11 节点
		pelvis, -- 12 节点
		neck, -- 17 数组
		pony1,pony2, -- 18 19 数组
		prop1,prop2,prop3 -- 20 21 22 节点
		
		--获取上肢节点
		if ctrl.arms then
		(
			larm = for i = 1 to 4 collect biped.getNode root 1 link:i --收集左臂
			rarm = for i = 1 to 4 collect biped.getNode root 2 link:i --收集右臂
			
			fingerLinks = ctrl.fingerLinks
			lfingers = for i = 1 to ctrl.fingers collect --收集左手指
			(
				cfl = (i-1)*fingerLinks
				if ctrl.shortThumb and fingerLinks > 1 then --短手指情况的收集
				(
					if i > 1 then for j = 1 to fingerLinks collect biped.getNode root 3 link:(cfl + j) --其他手指的收集,原层次中会将短拇指最后一节变为udefined,所以不用减一
					else for j = 1 to fingerLinks-1 collect biped.getNode root 3 link:(cfl + j) --手指1的收集
				)
				else for j = 1 to fingerLinks collect biped.getNode root 3 link:(cfl + j) --普通的收集
			)
			rfingers = for i = 1 to ctrl.fingers collect --收集右手指
			(
				cfl = (i-1)*fingerLinks
				if ctrl.shortThumb and fingerLinks > 1 then --短手指情况的收集
				(
					if i > 1 then for j = 1 to fingerLinks collect biped.getNode root 4 link:(cfl + j) --其他手指的收集,原层次中会将短拇指最后一节变为udefined,所以不用减一
					else for j = 1 to fingerLinks-1 collect biped.getNode root 4 link:(cfl + j) --手指1的收集
				)
				else for j = 1 to fingerLinks collect biped.getNode root 4 link:(cfl + j) --普通的收集
			)
		)
		else larm = rarm = lfingers = rfingers = #()
		
		--获取下肢节点
		lleg = for i = 1 to ctrl.legLinks collect biped.getNode root 5 link:i
		rleg = for i = 1 to ctrl.legLinks collect biped.getNode root 6 link:i
			
		ltoes = for i = 1 to ctrl.toes collect for j = 1 to ctrl.toeLinks collect biped.getNode root 7 link:((i-1)*ctrl.toeLinks + j)
		rtoes = for i = 1 to ctrl.toes collect for j = 1 to ctrl.toeLinks collect biped.getNode root 8 link:((i-1)*ctrl.toeLinks + j)
		
		--获取躯干节点
		spine = for i = 1 to ctrl.spineLinks collect biped.getNode root 9 link:i
		tail = for i = 1 to ctrl.tailLinks collect biped.getNode root 10 link:i
		head = biped.getNode root 11
		pelvis = biped.getNode root 12
		neck = for i = 1 to ctrl.neckLinks collect biped.getNode root 17 link:i
			
		--获取其他节点
		pony1 = for i = 1 to ctrl.ponytail1Links collect biped.getNode root 18 link:i
		pony2 = for i = 1 to ctrl.ponytail2Links collect biped.getNode root 19 link:i
			
		prop1 = biped.getNode root 20 --这三个可能获取为undefined
		prop2 = biped.getNode root 21
		prop3 = biped.getNode root 22
-- 		
-- 		props = for i = 20 to 22 collect biped.getNode root i --用这个后面还得循环判断一次
		
		props = for p in #(biped.getNode root 20, biped.getNode root 21, biped.getNode root 22) where isvalidnode p collect p
		
		--检测
-- 		print(larm + rarm + lfingers + rfingers + lleg + rleg + ltoes + rtoes + spine + tail + #(head) + #(pelvis) + neck + pony1 + pony2 + #(prop1,prop2,prop3))
		return #(#(pelvis, Root), #(head), for i = neck.count to 1 by -1 collect neck[i], for i = spine.count to 1 by -1 collect spine[i], larm, lfingers, rarm, rfingers, lleg, ltoes, rleg, rtoes, tail, #(pony1, pony2), for p in #(prop1,prop2,prop3) where isvalidnode p collect #(p))
	)
	
	fn clearAllBtn = --清除所有按钮
	(
		hList = #(56, 56, 226, 191, 40, 40, 191, 40, 40, 40, 40, 162, 34, 32, 162, 34, 32, 40, 40, 164, 24, 50, 50)
		for i = 1 to panels.count do
		(
			p = panels[i]
			p.controls.clear()
			p.height = hList[i]
		)
	)
	--创建按钮图像
	fn generateBtm type:0 size:[64,64] color:(color 255 0 128) Radius:6 = --为了视觉效果,按钮最小应该不小于3像素,所有的阴影大于高光来增强视觉效果,独立出来,单独执行绘制,
	(
		local
		dbitm = DotnetObject "System.Drawing.Bitmap" size.x size.y,
		hbitm = DotnetObject "System.Drawing.Bitmap" size.x size.y,
		dGraphics = (dotNetClass "System.Drawing.Graphics").FromImage dbitm,
		hGraphics = (dotNetClass "System.Drawing.Graphics").FromImage hbitm,
		dColor = DotnetObject "System.Drawing.SolidBrush" ((DotNetClass "System.Drawing.Color").fromARGB 255 color.r color.g color.b), -- A R G B 底色
		hColor = DotnetObject "System.Drawing.Pen" ((DotNetClass "System.Drawing.Color").fromARGB 255 255 255 255), --高亮颜色 白
		sColor = DotnetObject "System.Drawing.Pen" ((DotNetClass "System.Drawing.Color").fromARGB 255 0 0 0), --阴影颜色 黑
		hpath = dotNetObject "System.Drawing.Drawing2D.GraphicsPath", --高光路径
		spath = dotNetObject "System.Drawing.Drawing2D.GraphicsPath", --阴影路径
		maxx = size.x-1,maxy = size.y-1
		
		dGraphics.SmoothingMode = dGraphics.SmoothingMode.AntiAlias --设置抗锯齿绘制--AntiAlias or HighQuality --用高质量会很慢很慢.
		hGraphics.SmoothingMode = hGraphics.SmoothingMode.AntiAlias --设置抗锯齿绘制--AntiAlias or HighQuality
 		
		spath.AddArc (dotNetObject "System.Drawing.RectangleF" 0 0 Radius Radius) 180 90 --Radius为10的结果是一个10*10的方形,一个边有5的圆角,
		spath.AddArc (dotNetObject "System.Drawing.RectangleF" (maxx-Radius) 0 Radius Radius) 270 90
		spath.AddArc (dotNetObject "System.Drawing.RectangleF" (maxx-Radius) (maxy-Radius) Radius Radius) 0 90
		spath.AddArc (dotNetObject "System.Drawing.RectangleF" 0 (maxy-Radius) Radius Radius) 90 90
		spath.CloseFigure()

		dGraphics.FillPath dColor spath
		
		hGraphics.FillPath dColor spath
		hGraphics.DrawPath hColor spath
		
		return #(dbitm,hbitm)
	)
	--按钮响应们
	fn lableDown s e =
	(
		local
		date = s.tag.value
		
		hold = true;last = s
		panelState = GetCommandPanelTaskMode();setCommandPanelTaskMode #create
		
		s.BackgroundImage = date[2][if currentState = date[1] = not date[1] then 2 else 1]
		if currentState then selectmore date[3] else deselect date[3]
			
		s.DoDragDrop currentState DragDropEffects
		_Cursor
	)
	
	fn lableUp s e =
	(
		hold = false
	)
	
-- 	fn lableOver s e =
-- 	(
-- 		hold = false
-- 	)
	
	fn lableEnter s e =
	(
		e.Effect = DragDropEffects
		if hold and last != s do 
		(
			last = s
			local
			data = s.tag.value
			
			s.BackgroundImage = data[2][if data[1] = currentState then 2 else 1]
			if currentState then selectmore data[3] else deselect data[3]
-- 			windows.processPostedMessages() --开启会有实时选择的效果,但会让滑动选择变的卡顿,容易跳过选择
		)
	)
	
	fn lableQuery s e =
	(
		if e.Action.value__ == 1 do (hold = false;setCommandPanelTaskMode panelState)
	)
	--美化箭头
	fn lableGiveFeedback s e =
	(
		e.UseDefaultCursors = false
		s.Cursor.Current = _Cursors.arrow
	)

	fn generateCheckLabel obj pos:[0,0] size:[48,24] name:"" text:"" bcolor: finger:false = --创建时设置name,后面使用时可以用name as integer来调取相关数组
	try(
		local 
		cl = DotnetObject "System.Windows.Forms.Label"
		
		append bipbones obj
		append buttons cl
		cl.tag = dotnetmxsvalue #(obj.isSelected,(generateBtm size:size color:obj.wirecolor),obj)
		cl.location.x = pos[1];cl.location.y = pos[2]
		cl.Width = if finger then 20 else size.x;cl.Height = size.y
		cl.Name = name;cl.text = text
		cl.BackgroundImage = cl.tag.value[2][if obj.isSelected then 2 else 1]
		cl.AllowDrop = true
		cl.BackgroundImageLayout = DotNetStretch
		
		dotnet.addEventHandler cl "MouseDown" lableDown
		dotnet.addEventHandler cl "MouseUp" lableUp
		dotnet.addEventHandler cl "DragEnter" lableEnter
		dotnet.addEventHandler cl "QueryContinueDrag" lableQuery
		dotnet.addEventHandler cl "GiveFeedback" lableGiveFeedback
		
		dotNet.setLifetimeControl cl #dotnet
		
		tooltip.InitialDelay = 50
		tooltip.SetToolTip cl (obj.name as string) --不这样会有一定概率出错
		
		return cl
	)catch(messagebox "生成标签按钮出错";print tooltip;print cl;print obj;print obj.name)
	
	fn mapadd list = (r = 0; for i in list do r += i; return r as float) --列表求和
	fn perint f = (return (f+0.5) as integer) --四舍五入
	
	fn layoutor1 pnl objList weights spacing:0 eoffset: wscale: align:#left = --在pnl中按ObjList和spacing(间距)来创建并排布按钮.返回物体列表和按钮列表.响应时靠finditem来找到对应物体.,eoffset是额外偏移 --垂直排列 reserve:2是预留值,用于容纳四舍五入的误差.
	(
		local 
		count = objList.count--分布数量
		
		if eoffset == unsupplied do eoffset = for i = 1 to count collect 0
		if wscale == unsupplied do wscale = for i = 1 to count collect 1
		
		local
		w = pnl.width,--宽度
		h = pnl.height,--高度
		ch = h - spacing * (count-1) - mapadd eoffset,--实际高度
		allweight = mapadd weights,
		yList = for w in weights collect perint (ch * w / allweight), --高度列表
-- 		y = ch / count, --实际平均高度
		offset = 0
		
		for i = 1 to count do
		(
			btncount += 1
			local
			y = yList[i],
			cw = perint (w*wscale[i]),
			x = case align of(#left : 0; #right : w - cw; default : perint((w - cw)*0.5))
			pnl.controls.add (generateCheckLabel objList[i] pos:[x,offset+spacing*(i-1)+eoffset[i]] size:[cw, y] name:(btncount as string)) --text:"Lable")
			offset += (y + eoffset[i])--自加当前高度
-- 			windows.processPostedMessages()
		)
		
		pnl.height = offset
	)
	fn layoutor2 pnl objList2 = --多行排列
	(
		local
		ycount = (for i in objList2 where i.count > 0 collect i).count,
		pw = pnl.width,
		ph = pnl.height,
-- 		allx = #(),
		sy = if ycount>0 do ph / ycount
		
		for i = 1 to ycount do
		(
			local
			objs = objList2[i],
			xcount = objs.count,
			sx = (pw - mod pw xcount) / xcount
-- 			append allx (sx*xcount)
			y = sy*(i-1)
			for j = 1 to objs.count do
			(
				btncount += 1
				pnl.controls.add(generateCheckLabel objs[j] pos:[sx*(j-1),y] size:[sx, sy] name:(btncount as string)) --text:"Lable"
			)
		)
-- 		pnl.width = amax allx + 1
	)
	fn layoutor3 pnl objList2 w:10 autoscale:true toe:false = --多列排列,宽度固定 必须传入二维数组objList2 固定宽度w 高度间隔固定为0 宽度间隔按数组自动. 建议取1,2,3,4的最小公倍数12来平分间隔以免宽度乱变
	if objList2.count > 0 do(
		local
		xcount = objList2.count,
		pw = pnl.width,
		ph = pnl.height,
		scl = if autoscale then perint((((if toe then 5 else 4) - xcount) * w)*0.5) else 0,
		xoffset = if autoscale then perint(scl * 0.5) else 0,
		cw = pw-w-scl, --当前宽度
		xseg = xcount - 1,
		sx,
		xlist,
		links = objlist2[1].count,
		sy = ph / links
		
		if xseg == 0 then 
		(
			sx = cw/2
			xList = #(sx)
		)
		else 
		(
			sx = cw / xseg
			xlist = for i = 0 to xseg collect i * sx
		)
		
		for i = 1 to xList.count do
		(
			for j = 1 to objList2[i].count do
			(
				btncount += 1
				pnl.controls.add (generateCheckLabel objList2[i][j] pos:[xlist[i]+xoffset,sy*(j-1)] size:[w, sy] name:(btncount as string)) --text:"Lable")
			)
		)
		
-- 		print #(xcount,pw,ph,sx,xlist)
	)
-- 	fn collectAllData =
-- 	(
-- 		bipbones = #()
-- 		buttons = #()
-- 		for p in panels do 
-- 		(
-- 			local
-- 			bb = #(),
-- 			bt = #()
-- 			for c in p.controls do (append bb p.tag.value[3]; append bt c)
-- 		)
-- 	)
	fn biplayoutor root = --提供一个root,利用上面的功能自动获取bip并进行排布
	(
		--变量初始化
		bipbones = #()
		buttons = #()
		hold = false
		last = undefined
		btncount = 0
		local
		Bips = GetBipBonesByCOM root
		--过程
-- 		#(#(pelvis,Root), #(head), neck, spine, larm, lfingers, rarm, rfingers, lleg, ltoes, rleg, rtoes, tail, #(pony1, pony2), #(#(prop1),#(prop2),#(prop3)))
		--root&pelvis
		layoutor1 pnl_root bips[1] #(0.2,1)
		--head
		layoutor1 pnl_head bips[2] #(1)
		--neck&spine
		neckcount = bips[3].count
		spinecount = bips[4].count
		layoutor1 pnl_spine (bips[3]+bips[4]) ((for i = 1 to neckcount collect 0.5) + (for i = 1 to spinecount collect 1)) reserve:6 eoffset:((for i = 1 to neckcount collect 0) + #(6) + (for i = 2 to spinecount collect 0)) wscale:((for i = 1 to neckcount collect 0.6) + (for i = 1 to spinecount collect 1)) align:#center
		--RArm
		layoutor1 pnl_rarm bips[7] #(0.4,1,1,0.6) eoffset:#(0,1,0,1) wscale:#(1, 0.9, 0.9, 0.9) align:#left
		if bips[8].count == 1 then --只一根手指
		(
			count = bips[8][1].count
			layoutor1 pnl_rfingers bips[8][1] (for i = 1 to count collect 1) wscale:(for i = 1 to count collect 0.25) align:#center
		)
		else --多根手指 需要多列分布功能
		(
			if bips[8].count > 0 do(--手指可能是0
				count = bips[8][1].count
				layoutor1 pnl_rfinger bips[8][1] (for i = 1 to count collect 1)
				
				rfingers = (for i = 2 to bips[8].count collect bips[8][i])
				layoutor3 pnl_rfingers rfingers
			)
		)
		
		--LArm
		layoutor1 pnl_larm bips[5] #(0.4,1,1,0.6) eoffset:#(0,1,0,1) wscale:#(1, 0.9, 0.9, 0.9) align:#right
		if bips[6].count == 1 then --只一根手指
		(
			count = bips[6][1].count
			layoutor1 pnl_lfingers bips[6][1] (for i = 1 to count collect 1) wscale:(for i = 1 to count collect 0.25) align:#center
		)
		else --多根手指 需要多列分布功能
		(
			if bips[6].count > 0 do(
				count = bips[6][1].count
				layoutor1 pnl_lfinger bips[6][1] (for i = 1 to count collect 1)
				
				rfingers = (for i = bips[6].count to 2 by -1 collect bips[6][i])
				layoutor3 pnl_lfingers rfingers
			)
		)
		
		--RLeg
		count = bips[11].count
		rlegs = (for i = 1 to count-1 collect bips[11][i])
		layoutor1 pnl_Rleg rlegs (if count > 3 then #(1,1,0.8) else #(1,1))
		layoutor1 pnl_Rfoot #(bips[11][count]) #(1)
			
		layoutor3 pnl_rtoes bips[12] toe:true
		
		--LLeg
		count = bips[9].count
		rlegs = (for i = 1 to count-1 collect bips[9][i])
		layoutor1 pnl_Lleg rlegs (if count > 3 then #(1,1,0.8) else #(1,1))
		layoutor1 pnl_Lfoot #(bips[9][count]) #(1)
			
		ltoes = for i = bips[10].count to 1 by -1 collect bips[10][i]
		layoutor3 pnl_ltoes ltoes toe:true
			
		--Tail
		layoutor1 pnl_tail bips[13] (for b = 1 to bips[13].count collect 1)
	
		--Pony
		layoutor2 pnl_pony bips[14]
		
		--Prop
		layoutor3 pnl_prop bips[15] w:18
		
		lastbips = bips
		--最后再加一个右键点击第一个按钮选择盆骨的功能 不加了
		
	)
	--UI初始化
	fn _UIInitialization =
	(
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
			colr = copy colr --忘了因为啥了,必须得有,好像是会导致反复更改同一个值啥的.
			if classOf colr == Color do colr = colr as point3
			if dir do return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3]
			for i = 1 to 3 do (colr[i] += val;if colr[i] > 255 do colr[i] -= 256;if colr[i] < 0 do colr[i] += 256)
			if asDotNet then return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3] else return (colr  as Color)
		)
		local
			TitleImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADBQTFRFAAAALi4uAQEBAAAA29vbDw8PODg4GRkZDQ0NDg4O3t7eEBAQ/zU+CgoKBwcHCAgI2JIlTAAAABB0Uk5TAP///////////////////8BQi0MAAABfSURBVHicY2AQUlJWUmAAAhMXF5dgMCMtxSXEACoS3gwWAQJPqMgSbxDD2MXFGMQwZjBxBhIgwGwApkA8sADzGQMgAjJszhy2OXMWzACC0yAGyMDTyCJ67x7/f/eIAQASoSHt3F9lwAAAAABJRU5ErkJggg==",
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
			MiddleLeft = (dotnetclass "System.Drawing.ContentAlignment").MiddleLeft,
			btnImage = StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAlQTFRFAAAAAAAA////g93P0gAAAAN0Uk5TAP//RFDWIQAAABpJREFUeJxjYAABUdbQAAZJtlUTICwEIFkCAGRjCIZ/vKakAAAAAElFTkSuQmCC"

		
-- 		print lbl_Ico.BackColor
		
-- 		for c in #(btn_About,btn_autoSaveSet,btn_backSaveSet) do (c.BackColor = BackColor;c.ForeColor = ForeColor;c.Flatstyle = Flat;c.Flatappearance.borderSize = 0;c.image = btnImage)
		
		for c in panels do c.BackColor = BackColor --面板背景色
		
		lbl_Ico.image = TitleImage
		lbl_Ico.BackColor = TitleColor --图标栏
		lbl_Tit.BackColor = TitleColor;lbl_Tit.ForeColor = ForeColor;lbl_Tit.TextAlign = MiddleLeft --标题栏
		lbl_Tit.text = "BSTool 0.2"
		tooltip.SetToolTip lbl_Ico "BSTool 0.2"
		lbl_Ico.ContextMenuStrip = BuildMenuStrip Items:#("向左停靠", "向右停靠", "退出BSTool") Clicks:#() ForeColor:ForeColor BackColor:BackColor
		
		lbl1.visible = false --隐藏遮挡
	)

	on BSTRollout open do
	(
		--数据初始化
		BipList = GetBipCOM()
		currnetBip = BipList[1]
		
		--UI初始化
		_UIInitialization()
	
		--首次加载Bip
		BipList = GetBipCOM()
		if BipList.count > 0 do
		(
			currentBip = BipList[1]
			biplayoutor currentBip
		)
		
		--注册节点事件
		_nodeEvent = NodeEventCallback mouseUp:true delay:1000 selectionChanged:_Node_SelectionChanged added:_Node_Added --deleted:_Node_Added
	)
	on BSTRollout oktoclose do queryBox "确定退出?" title:"提示"
	on BSTRollout close do
	(
		_nodeEvent = undefined
		gc light:true
	)
	--标题栏响应
	on lbl_Ico mouseDown do (_Pin = true;_Offset = (GetDialogPos BSTRollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico mouseUp do (_Pin = false)
	on lbl_Ico mouseMove do if _Pin do SetDialogPos BSTRollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit mouseDown do (_Pin = true;_Offset = (GetDialogPos BSTRollout) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit mouseUp do _Pin = false
	on lbl_Tit mouseMove do if _Pin do SetDialogPos BSTRollout (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
)
createdialog BSTRollout style:#()