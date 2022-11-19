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
	print(larm + rarm + lfingers + rfingers + lleg + rleg + ltoes + rtoes + spine + tail + #(head) + #(pelvis) + neck + pony1 + pony2 + #(prop1,prop2,prop3))
-- 	larm + rarm + lfingers + rfingers + lleg + rleg + ltoes + rtoes + spine + tail + #(head) + #(pelvis) + neck + pony1 + pony2 + #(prop1,prop2,prop3)	
-- 	.arms : boolean --为true则有手指,肩膀大臂小臂手掌共4节
-- 	.neckLinks : integer
-- 	.spineLinks : integer
-- 	.legLinks : integer
-- 	.tailLinks : integer
-- 	.ponytail1Links : integer
-- 	.ponytail2Links : integer
-- 	.fingers : integer
-- 	.fingerLinks : integer
-- 	.toes : integer
-- 	.toeLinks : integer
-- 	
-- 	.shortThumb : boolean --为true则连接大于等于2时拇指-1,最少为0,只有启用下面的真实手掌才能启用这个.故先判断下面?
--   .knuckles : boolean --true时,手指最少为1节(这一节相当于增强版的手掌,但是手掌仍然存在)
-- 	.prop1Exists : boolean
-- 	.prop2Exists : boolean
-- 	.prop3Exists : boolean
)
GetBipBonesByCOM COMs[1]

--   .bendLinksMode : boolean
--   .twistLinksMode : boolean
--   .twistIndMode : boolean
--   .smoothTwistMode : boolean

--   .foreFeet : boolean 启用时将手指作为前脚(IK帧不动手指)


--一种高效的检测bip更改的方法--把这个依赖检测放到添加删除节点事件里,检测其控制器是不是依赖于当前的biproot就好了,不过要保证删除添加多个物体,只刷新一次
-- for c in (refs.dependsOn $) do i isvalidobj (refs.dependsOn $)[3]
influenced = if (c = (refs.dependsOn $)[1];finditem #(Vertical_Horizontal_Turn, BipSlave_Control) (classof c) > 0 and c.rootnode == $Bip001) then true else false
--目前认为第一项永远是控制器,先这么写了,大概率没啥问题.日后如果遇到异常,再采用for方式,但是for的方式可能会带来性能以及其他问题,会不会可能一个莫名其妙的物体意外的引用了bip的控制器?