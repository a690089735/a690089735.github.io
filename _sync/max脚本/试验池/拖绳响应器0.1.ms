try(destroydialog RopeToolRollout)catch()
rollout RopeToolRollout "RopeTool" width:160 height:248
(
	local
	nodes = #(),
	distance_list = #(),--比nodes少1哦
	select_range = #(0,0),
	_node_changed_event,
	_node_movent_event,
	_reset1 = dotnetobject "Timer",
	_reset2 = dotnetobject "Timer"
	
	checkbutton ckb_run "开始响应" pos:[88,8] width:64 height:24
	multilistbox lbx_list "" pos:[8,38] width:144 height:15
	button btn_set "记录列表" pos:[8,8] width:64 height:24
-- 	timer tmr_move interval:100 active:false --其他方案都不好,使用计时器了.
-- 	dotNetControl tmr_move interval
	
	fn Comparing a1 a2 = --对比数组,数量不一样直接返回,如果数量一样,就判断一下内容是不是也一样.但凡有一个不一样的,咱们就返回.(采用了优化的算法,可能会更快?)
	(
-- 		if a1.count == a2.count then 
-- 		(
-- 			result = true
-- 			for i = 1 to a1.count do
-- 			(
-- 				if a1[i] != a2[i] do exit with result = false
-- 			)
-- 			result
-- 		)else false
		if a1.count == a2.count then (makeuniquearray(a1+a2)).count == a1.count else false
	)
	fn reSelection ev nd nodes:nodes  = --选择的响应. select_range:select_range lbx_list:lbx_list
	if lbx_list.items.count > 0 do(
		select_nodes = getcurrentselection()
		select_range = #(0,0)
		if select_nodes.count > 0 then
		(
			select_ids = for n in select_nodes collect finditem nodes n
			select_range = #(amin select_ids,amax select_ids)
-- 			print #(select_nodes,select_ids,select_range) #nomap
			if select_range[1] + select_range[2] > 0 then
			(
				--这个直接选择会触发选择,造成无限循环,并且各种方案都无解,需要判断一下已选择的列表和要选择的列表是否一样,一样就不选了,不一样就再改选一下,最多触发一次循环.
				to_select_nodes = for i in #{select_range[1]..select_range[2]} collect nodes[i]
				if not Comparing select_nodes to_select_nodes do (select to_select_nodes;redrawViews())--不一样就选择
				lbx_list.selection = #{select_range[1]..select_range[2]} --只计算这个范围外的,这个范围内的都统一移动.
			)
			else lbx_list.selection = #{}
		)else lbx_list.selection = #{}
	)
-- 	fn calculate currnet_pos source_pos dis = --需要传入全局坐标和距离
-- 	(
-- 		(normalize (currnet_pos - source_pos)) * dis + source_pos
-- 	)
	fn calculate currnet source dis = --需要传入两个节点和距离
	(
		ctrans = currnet.transform
		strans = source.transform
		matrix3 ctrans[1] ctrans[2] ctrans[3] ((normalize (ctrans.pos - strans.pos)) * dis + strans.pos)
	)
	fn doMotion ev nd nodes:nodes = -- select_range:select_range
	(
-- 		print select_range[1]
		if select_range[1] > 1 and select_range[1] <= nodes.count do --前半部分,要大于1
		(
			for i = select_range[1]-1 to 1 by -1 do
			(
				n = nodes[i]
				pn = nodes[i+1]
				print #(n,pn,n.transform.pos,distance_list[i]) #nomap
-- 				n.transform.pos = calculate pn.transform.pos n.transform.pos distance_list[i]
				translate n.transform [0,0,10]
-- 				print n.transform.pos
			)
		)
-- 		if select_range[2] < nodes.count --后半部分,要小于最大点
	)
	
	on RopeToolRollout open do
	(
		_node_changed_event = NodeEventCallback mouseUp:true delay:250 selectionChanged:reSelection
		--计时器初始化
		tmr_move.Interval = 200
		fn tik s e = --后面可能需要配合撤销堆栈,根据鼠标按下进行一次记录,
		try(
			--判断,范围是否小于全部范围,--判断,鼠标是否按下
			
			if select_range[1] > 0 and #{select_range[1]..select_range[2]}.numberset < nodes.count and mouse.buttonStates[1] do
			(
				print "计算"
				if select_range[1] > 1 and select_range[1] <= nodes.count do --前半部分,要大于1,小于全部
				(
					for i = select_range[1]-1 to 1 by -1 do
					(
						n = nodes[i]
						pn = nodes[i+1]
-- 						print #(n.pos,pn.pos,distance_list[i],distance n pn) #nomap
-- 						n.transform = calculate n pn distance_list[i]
-- 						translate n.transform [0,0,10]
						n.transform += n.transform
-- 						redrawViews()
-- 						n.transform = matrix3 1 --设置transform.pos不行,只能设置transform
-- 						print n.transform.pos
					)
				)
			)
			
		)catch(print "出错!!";tmr_move.Stop())
		dotnet.addEventHandler tmr_move "Tick" tik
		dotNet.setLifetimeControl tmr_move #dotnet
-- 		showmethods tmr_move
		tmr_move.Start()
	)
	on RopeToolRollout close  do
	(
		deleteAllChangeHandlers id:#drag
		_node_changed_event = _node_movent_event = undefined;gc light:true
		tmr_move.Stop()
	)
	on ckb_run changed state do
	(
-- 		print state
-- 		if state then _node_movent_event = NodeEventCallback delay:250 controllerOtherEvent:doMotion else (_node_movent_event = undefined;gc light:true)
		if state then (when transform nodes changes id:#drag do print nodes)
		else deleteAllChangeHandlers id:#drag
	)
	on lbx_list selectionEnd do
	(
		sels = lbx_list.selection
		select(for sel in sels where isvalidnode nodes[sel] collect nodes[sel])
	)
	on btn_set pressed do
	(
		nodes = getcurrentselection()
		distance_list = for i = 1 to nodes.count - 1 collect distance nodes[i] nodes[i+1] --距离,比nodes少1
		lbx_list.items = for n in nodes collect n.name
		lbx_list.selection = #{1..nodes.count}
		select_range = #(1,nodes.count)
	)
)


createdialog RopeToolRollout