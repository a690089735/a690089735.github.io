try(destroydialog Rope_Responser_Rollout)catch()
rollout Rope_Responser_Rollout "Rope_Responser_" width:160 height:248
(
	local
	nodes = #(),
	distance_list = #(),--比nodes少1哦
	select_range = #(0,0), --列表中选择的首尾id
	_node_changed_event,
	_node_movent_event,
	_int1 = 0,
	_int2 = 0,
	_temp_trans1_list = #(),
	_temp_trans2_list = #(),
	_reset_int1 = dotnetobject "Timer",
	_reset_int2 = dotnetobject "Timer"
	
	checkbutton ckb_run "开始响应" pos:[88,8] width:64 height:24
	multilistbox lbx_list "" pos:[8,38] width:144 height:15
	button btn_set "记录列表" pos:[8,8] width:64 height:24
	
	fn Comparing a1 a2 = --对比数组,数量不一样直接返回,如果数量一样,就判断一下内容是不是也一样.但凡有一个不一样的,咱们就返回.(采用了优化的算法,可能会更快?)
	(
		--这样很好,很快,很简单,但是无法确定顺序是正确的.不过这里只有一开始指定的顺序是固定的(nodes),并且只取搜索到的首尾id,所以后期选择的顺序不是很重要
		if a1.count == a2.count then (makeuniquearray(a1+a2)).count == a1.count else false
	)
	fn calculate current source dis = --需要传入两个节点和距离
	(
		matrix3 current[1] current[2] current[3] ((normalize (current.pos - source.pos)) * dis + source.pos)
	)
	fn do_move1 obj = 
	(
		j = 0
-- 		print #("range:",select_range[1]) #nomap
		for i in select_range[1] - 1 to 1 by -1 do
		(
			
			j += 1
-- 			print #("i:",i,"j:",j) #nomap
			if j == 1 then
			_temp_trans1_list[j] = calculate _temp_trans1_list[j] obj.transform distance_list[i]
			else
			_temp_trans1_list[j] = calculate _temp_trans1_list[j] _temp_trans1_list[j-1] distance_list[i]
			
			nodes[i].transform = _temp_trans1_list[j]
-- 			print nodes[i]
		)
	)
	fn do_move2 obj =
	(
		j = 0
		for i in select_range[2] + 1 to nodes.count do
		(
			
			j += 1
-- 			print #("i:",i,"j:",j) #nomap
-- 			print nodes[i]
			if j == 1 then
			_temp_trans2_list[j] = calculate _temp_trans2_list[j] obj.transform distance_list[i-1]
			else
			_temp_trans2_list[j] = calculate _temp_trans2_list[j] _temp_trans2_list[j-1] distance_list[i-1]
			
			nodes[i].transform = _temp_trans2_list[j]
		)
	)
	fn build_responder nodes:nodes =
	(
		--首尾时同一个时,会做两次事件,以让前后都参与响应
		id = select_range[1]
		if id > 1 do 
		when transform nodes[id] change id:#rope_responder currentobj do
		(
			_reset_int1.stop()
			_reset_int1.start()--于此同时,开始撤销标记
			_int1+=1
-- 			print _int1
			if (mod _int1 2)as integer > 0 do --正常的when在transform change会触发两次,一次返回当前位置,一次返回起始位置.按右键会多返回一次.
			(
				do_move1 currentobj
			)
		)
		id = select_range[2]
		if id > 0 and id < nodes.count do
		when transform nodes[id] change id:#rope_responder currentobj do
		(
			_reset_int2.stop()
			_reset_int2.start()--于此同时,开始撤销标记
			_int2+=1
-- 			print _int2
			if (mod _int2 2)as integer > 0 do --正常的when在transform change会触发两次,一次返回当前位置,一次返回起始位置.按右键会多返回一次.
			(
				do_move2 currentobj
			)
		)
		
	)
	fn reSelection ev nd nodes:nodes  = --选择的响应. select_range:select_range lbx_list:lbx_list
	(
		select_nodes = getcurrentselection()
		select_range = #(0,0)
		int1 = int2 = 0
		deleteAllChangeHandlers id:#rope_responder
-- 		print 0
		if lbx_list.items.count > 0 and select_nodes.count > 0 then
		(
			local select_ids = makeUniqueArray(for n in select_nodes collect finditem nodes n)
			select_range = #(amin select_ids,amax select_ids)
-- 			print select_range #nomap
-- 			print #(select_nodes,select_ids,select_range) #nomap
			if select_range[1] + select_range[2] > 0 and #{select_range[1]..select_range[2]}.numberset < nodes.count then
			(
				--记录范围外的变换列表,以供后续计算(因为node.transform不能实时更新,但变量可以...)
				_temp_trans1_list = if select_range[1] > 1 then for i in select_range[1] - 1 to 1 by -1 collect nodes[i].transform else #()
				_temp_trans2_list = if select_range[2] < nodes.count then for i in select_range[2] + 1 to nodes.count collect nodes[i].transform else #()
				--这个直接选择会触发选择,造成无限循环,并且各种方案都无解,需要判断一下已选择的列表和要选择的列表是否一样,一样就不选了,不一样就再改选一下,最多多触发一次循环.
				to_select_nodes = for i in #{select_range[1]..select_range[2]} collect nodes[i]
				if not Comparing select_nodes to_select_nodes do (select to_select_nodes;redrawViews())--不一样就再选择一下,这里没有匹配顺序,因为顺序是以nodes为准的.
				lbx_list.selection = #{select_range[1]..select_range[2]} --只计算这个范围外的,这个范围内的都统一移动.
				--为首尾两个id的物体创建响应事件
-- 				if 开始响应 被按下.
				build_responder() --这个函数要在开始响应被按下时执行一次.
			)
			else lbx_list.selection = #{}
		)
	)
	
	on Rope_Responser_Rollout open do
	(
		_node_changed_event = NodeEventCallback mouseUp:true delay:250 selectionChanged:reSelection
		--计时器初始化
		_reset_int1.Interval = _reset_int2.Interval = 200
		fn tik s e = --后面可能需要配合撤销堆栈,根据鼠标按下进行一次记录,
		try(
-- 			print ("reset1_event_"+(not mouse.buttonStates[1]) as string)
			if not mouse.buttonStates[1] do (_int1 = 0;s.Stop())--在这里加上撤销标记结束.
		)catch(print "出错!!";s.Stop())
		dotnet.addEventHandler _reset_int1 "Tick" tik
		fn tik s e = --后面可能需要配合撤销堆栈,根据鼠标按下进行一次记录,
		try(
-- 			print ("reset2_event_"+(not mouse.buttonStates[1]) as string)
			if not mouse.buttonStates[1] do (_int2 = 0;s.Stop())--在这里加上撤销标记结束.
		)catch(print "出错!!";s.Stop())
		dotnet.addEventHandler _reset_int2 "Tick" tik
-- 		showmethods tmr_move
-- 		tmr_move.Start()
	)
	on Rope_Responser_Rollout close  do
	(
		deleteAllChangeHandlers id:#drag
		_node_changed_event = _node_movent_event = undefined;gc light:true
		_reset_int1.Stop()
		_reset_int2.Stop()
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


createdialog Rope_Responser_Rollout