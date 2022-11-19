
--bip转黑色线框.此功能要放在工具库菜单里,作为一个隐藏的辅助功能(1是使用场景较少,2是点一下就完事,3是操作不当的话.可能带来一些意外影响)

fn GetBipCOM =  --获取Bip根节点(质心)
(
	Ctrls = (getClassInstances Vertical_Horizontal_Turn)
	for c in Ctrls collect c.rootnode
)
COMs = GetBipCOM()

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
	result = (larm + rarm + lleg + rleg + spine + tail + #(head) + #(pelvis) + neck + pony1 + pony2 + #(prop1,prop2,prop3))
	for a in lfingers + rfingers+ ltoes + rtoes do for i in a do result+=i
	result
)
-- GetBipBonesByCOM COMs[1]
fn set_wirecolor_black =
(
	--1获取所有Bip物体
	bip_bones = for i in COMs + GetBipBonesByCOM COMs[1] where isvalidnode i collect i
	--2.根据线框颜色分类bip物体
	col = #()
	objs = #()
	for b in bip_bones do
	(
		if (fid = finditem col b.wirecolor) > 0 then append objs[fid] b else (append col b.wirecolor;append objs #(b))
	)
	--3.根据颜色创建材质并指定给bip物体
	for i = 1 to col.count do
	(
		c = col[i]
		mat = standardMaterial diffuse:c ambient:c showInViewport:true glossiness:0
		for b in objs[i] where b.mat == undefined do (b.wirecolor = black; b.mat = mat) --加了个判断,只有没材质的才可以自动更改,免得点了两次全黑了.
	)
	-- col
	-- objs
)
--set_wirecolor_black()
--还原线框颜色=材质颜色,材质=undefined
fn reset_wirecolor =
(
	for i in COMs + GetBipBonesByCOM COMs[1] where isvalidnode i and i.mat != undefined do (i.wirecolor = i.mat.diffuse; i.mat = undefined) --虽然可能会留下垃圾材质球,但只要没把他吸到材质编辑器.,一般没什么问题,
)
--reset_wirecolor()