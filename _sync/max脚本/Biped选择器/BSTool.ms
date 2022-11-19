/* 数据方法 */
fn GetBipCOM =  --获取Bip根节点(质心)
(
	Ctrls = (getClassInstances Vertical_Horizontal_Turn)
	for c in Ctrls collect c.rootnode
)
-- COMs = GetBipCOM()

fn GetBipBonesByCOM root = --根据根节点获取Bip的所有骨骼,节点本身已在此提供(root)
(
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
		larm = for i = 1 to 3 collect biped.getNode root 1 link:i --收集左臂
		rarm = for i = 1 to 3 collect biped.getNode root 2 link:i --收集右臂
		
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
	
	--检测
	return #(larm, rarm, lfingers, rfingers, lleg, rleg, ltoes, rtoes, spine, tail, head, pelvis, neck, pony1, pony2, prop1, prop2, prop3)

)
-- print (GetBipBonesByCOM COMs[1])

/* 界面方法 */
-- 生成按钮图片
fn generateBimg type:0 size:[64,64] color:(color 255 0 128) = --为了视觉效果,按钮最小应该不小于3像素,所有的阴影大于高光来增强视觉效果
(
	local
	bitm = DotnetObject "System.Drawing.Bitmap" size.x size.y,
	Graphics = (dotNetClass "System.Drawing.Graphics").FromImage bitm,
	dColor = DotnetObject "System.Drawing.SolidBrush" ((DotNetClass "System.Drawing.Color").fromARGB 255 color.r color.g color.b), -- A R G B 底色
	hColor = DotnetObject "System.Drawing.Pen" ((DotNetClass "System.Drawing.Color").fromARGB 255 255 255 255), --高亮颜色 白
	sColor = DotnetObject "System.Drawing.Pen" ((DotNetClass "System.Drawing.Color").fromARGB 255 0 0 0), --阴影颜色 黑
	hpath = dotNetObject "System.Drawing.Drawing2D.GraphicsPath", --高光路径
	spath = dotNetObject "System.Drawing.Drawing2D.GraphicsPath", --阴影路径
	maxx = size.x-1,maxy = size.y-1

	Graphics.FillRectangle dColor 1 1 (maxx-1) (maxy-1) --画底色,向内缩小一圈

	if type == 0 then --突起效果
	(
		hpath.AddLine 0 (maxy-1) 0 0
		hpath.AddLine 0 0 (maxx-1) 0
		spath.AddLine maxx 0 maxx maxy
		spath.AddLine maxx maxy 0 maxy
	)
	else --凹陷效果
	(
		spath.AddLine 0 maxy 0 0
		spath.AddLine 0 0 maxx 0
		hpath.AddLine maxx 1 maxx maxy
		hpath.AddLine maxx maxy 1 maxy
	)
	
	Graphics.DrawPath hColor hpath --画白色
	Graphics.DrawPath sColor spath --画黑色
	
	return bitm
)
--生成可选标签(需利用生成按钮图片)--如果作为商业脚本出售,应当对按钮做圆角处理,现在的样样都好,唯一缺点是不好看.(有时间的话,要把鼠标进入和离开做一个高亮提示.不过估计得不偿失.)
fn lableDown s e = --按下事件
(
	hold = true;last = s
	id = s.name as integer
	s.BackgroundImage = ImgList[id][if (boolList[id] = not boolList[id]) then 2 else 1]
	s.DoDragDrop false ((dotNetClass "System.Windows.Forms.DragDropEffects").All)
)
fn lableUp s e = --释放事件
(
	hold = false
)
fn lableEnter s e = --获得拖放事件
(
	if hold and last != s do 
	(
		last = s
		id = s.name as integer
		s.BackgroundImage = ImgList[id][if (boolList[id] = not boolList[id]) then 2 else 1]
	)
)
fn generateCheckLabel pos:[0,0] size:[48,24] name:"" text:"Label"  bimg: lableDown: lableUp: lableEnter: = --创建时设置name,后面使用时可以用name as integer来调取相关数组
(
	local cl = DotnetObject "System.Windows.Forms.Label"
	cl.location.x = pos[1];cl.location.y = pos[2]
	cl.Width = size.x;cl.Height = size.y
	cl.Name = name;cl.text = text
	cl.BackgroundImage = if bimg == unsupplied then generateBimg size:size else bimg
	cl.AllowDrop = true
	cl.BackgroundImageLayout = (dotNetClass "System.Windows.Forms.ImageLayout").Stretch
	
	if lableDown != unsupplied do dotnet.addEventHandler cl "MouseDown" lableDown --点击时应该启用select,获得拖放的部分使用selecrmore.
	--		up释放可以不要,但是双击应该可以选择子物体
	-- 		on <control_name> MouseDoubleClick <System.Windows.Forms.MouseEventArgs>e do ( ... )
	if lableUp != unsupplied do dotnet.addEventHandler cl "MouseUp" lableUp
	if lableEnter != unsupplied do dotnet.addEventHandler cl "DragEnter" lableEnter
	dotNet.setLifetimeControl cl #dotnet
	
-- 	deselect
-- 	selectmore
	return cl
)
--布局方法.高度优先的算法,结果要填满高度,需要1宽高作为范围,2宽度分配比例,3高度权重作为高度分配比例,4高度间隔;返回左上角位置和宽高, 虽然手指应该用添加的方式,但是这样可以更有效的利用空间.
fn layoutor areaWH spacing = --不好,算法太复杂,应当多分几个panle,不用动态计算宽高,只要配合间距来填满即可.
(
	
)
