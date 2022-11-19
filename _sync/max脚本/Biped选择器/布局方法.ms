--布局方法.高度优先的算法,结果要填满高度,需要1宽高作为范围,2宽度分配比例,3高度权重作为高度分配比例,4高度间隔;返回左上角位置和宽高, 虽然手指应该用添加的方式,但是这样可以更有效的利用空间.
-- fn layoutor areaWH Wweights Hweights Hspacing = --不好,算法太复杂,应当多分几个panle,不用动态计算宽高,只要配合间距来填满即可.
-- (
-- 	--test
-- 	delete objects

-- 	Rectangle width:areaWH.x length:areaWH.y cornerRadius:0 pos:[areaWH.x/2, -areaWH.y/2, 0] wirecolor:red --模拟panle
-- 	count = Wweights.count --需要计算的数量
-- 	allHweight = 0 --全部高度权重值,用于取相对于整体的比例
-- 	for hw in Hweights do allHweight += hw --再赋值
-- 		
-- 	currentH = areaWH.y - Hspacing*(count-1) --实际的可用高度=设定高度减去总间距,然后除了第一个,所有的位置都多加一组间距,最好所有的数都是双数甚至2的倍数,方便后面计算,注意除以2和乘以0.5结果是不一样的.
-- 	
-- 	for i = 1 to count do 
-- 	(
-- 		w = areaWH.x * Wweights[i]
-- 		h = currentH * Hweights[i] / allHweight--areaWH.y * Wweights[1] / allHweight
-- 		
-- 		Rectangle width:w length:h cornerRadius:3 pos:([0, -currentH * (i-1) / count, 0] + [0, -Hspacing*(i-1), 0] + [areaWH.x/2, -h/2 ,0]) wirecolor:yellow --
-- 	)
-- )
-- layoutor [10,60] #(0.8,1,1,1) #(1,1,1,1) 2


--上面的方法不好,算法太复杂,应当多分几个panle,不用动态计算宽高,只要配合间距来填满即可.
-- 接下来直接用panle测试吧
try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:232 height:576
(
	local
	nodes = #(),
	buttons = #()
	
	
	dotNetControl pnl_head "Panel" pos:[88,40] width:56 height:56
	dotNetControl pnl_spine "Panel" pos:[88,104] width:56 height:184
	dotNetControl pnl_root "Panel" pos:[88,296] width:56 height:56 --右键点击选择
	
	dotNetControl pnl_rleg "Panel" pos:[40,320] width:40 height:144
	dotNetControl pnl_rfoot "Panel" pos:[24,472] width:56 height:40
	dotNetControl pnl_rtoes "Panel" pos:[24,520] width:56 height:40
	
	dotNetControl pnl_lleg "Panel" pos:[152,320] width:40 height:144
	dotNetControl pnl_lfoot "Panel" pos:[152,472] width:56 height:40
	dotNetControl pnl_ltoes "Panel" pos:[152,520] width:56 height:40
	
	dotNetControl pnl_rarm "Panel" pos:[40,88] width:40 height:168
	dotNetControl pnl_rfingers "Panel" pos:[40,264] width:40 height:40
	dotNetControl pnl_rfinger "Panel" pos:[16,248] width:16 height:40
	dotNetControl pnl_larm "Panel" pos:[152,88] width:40 height:168
	dotNetControl pnl_lfingers "Panel" pos:[152,264] width:40 height:40
	dotNetControl pnl_lfinger "Panel" pos:[200,248] width:16 height:40
	dotNetControl pnl_rlegCtrl "Panel" pos:[8,376] width:16 height:40
	dotNetControl pnl_llegCtrl "Panel" pos:[208,376] width:16 height:40
	dotNetControl pnl_tail "Panel" pos:[96,384] width:40 height:176
	dotNetControl pnl_pony "Panel" pos:[8,8] width:216 height:24
	dotNetControl pnl_prop "Panel" pos:[8,40] width:72 height:24
	dotNetControl pnl_rarmCtrl "Panel" pos:[8,144] width:16 height:40
	dotNetControl pnl_larmCtrl "Panel" pos:[208,144] width:16 height:40
	dotNetControl pnl_selCtrl "Panel" pos:[152,40] width:72 height:24
	
-- 	fn createPanel WH pos =
-- 	(
-- 		local
-- 		w = WH.x,
-- 		h = WH.y
-- 		
-- 		
-- 	)
	fn layoutor pnl objList spacing = --在pnl中按ObjList和spacing(间距)来创建并排布按钮.返回物体列表和按钮列表.响应时靠finditem来找到对应物体.
	(
		
	)

	on unnamedRollout open  do
	(
		fn getColor colr val:32 asDotNet:true dir:false =  --文字色 背景色为反求 val:0-1
		(
			--假如背景色 68 68 68 面板色100 100 100 字体色 220 220 220
			--要从68 获取到另外两者,但不能大于255 或小于0,且三个颜色要互相配合满足对比度
			colr = copy colr
			if classOf colr == Color do colr = colr as point3
			if dir do return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3]
			for i = 1 to 3 do (colr[i] += val;if colr[i] > 255 do colr[i] -= 255;if colr[i] < 0 do colr[i] += 255)
			if asDotNet then return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3] else return (colr  as Color)
		)
		local
		BC = (colorMan.getColor #background)*255,
		BGColor = getColor BC dir:true
		--设置panel属性
		for c in unnamedRollout.controls do
		(
-- 			c.BackColor = BGColor--背景色
		)
	)
)
createdialog unnamedRollout --style:#()