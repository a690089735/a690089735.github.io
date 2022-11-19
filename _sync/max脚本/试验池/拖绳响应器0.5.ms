-- 0.5之前的版本均为实验版,0.4是第一个正常使用的版本,0.5版增加了"开始响应"按钮的相关代码,并清理了一些无用的print

-- 已知问题,要在时间轴改变时更新trans_list,不然换了帧位置列表还没变.但最好不要在播放时触发,会影响性能.

-- 已知问题,现在CtrlZ撤销和右键撤销不会让已经更新的_temp_trans1_list = #()和_temp_trans2_list = #()回退.
-- 要注册一个Undo System Notifications,比如
/*但是这也无法撤销在when事件里更改的部分.或让这部分有一致的感觉.
callbacks.removeScripts id:#test
callbacks.addScript #sceneRedo "format \"Redo: %\\n\" (callbacks.notificationParam())" id:#test
callbacks.addScript #sceneUndo "format \"Undo: %\\n\" (callbacks.notificationParam())" id:#test
*/
-- 关于撤销,可能需要实现一个自己的撤销缓存功能,记录每次操作结束时的位置(在现有的时钟内实现即可-在某情况下记录一个缓存)
-- 经测试,Ctrl+Z撤销可以返回原状态,但是变量不会更新,并且由于没有关闭响应,所以又触发了when事件,所以撤销结果不符合直觉.

-- 其他知识
-- https://forums.cgsociety.org/t/right-click-event-handler/1247971/7
-- mouseTrack() 函数
-- 嗨，丹尼斯，
-- 我一直在使用 mouseTrack()，它可以完成这项工作（请参阅 IC.PolySplitRing）。到目前为止，我更喜欢PainterInterface，但它无法检测到右键单击，这是唯一真正的大问题。（实际上它可以，但它没有暴露给 MaxScript :sad: ）
-- 那么，mouseTrack() 有什么问题？它仅适用于网格。如果你想让它在可编辑的网格上工作，你必须制作快照，隐藏它，在工作完成后删除它。非常干净，除非您想撤消不止一次或几次。如果你很幸运并且可以做到这一点，你最终会得到一个损坏的可编辑多边形，一个或多个被遗忘的隐藏网格，并且撤销堆栈被刷新。

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
	
	checkbutton 'ckb_run' "开始响应" pos:[88,8] width:64 height:24 align:#left
	multiListBox 'lbx_list' "" pos:[8,38] width:144 height:15 align:#left
	button 'btn_set' "记录列表" pos:[8,8] width:56 height:24 align:#left
	button 'btn2' "R" pos:[64,8] width:16 height:24 toolTip:"更新位置记录" align:#left
	
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
		for i in select_range[1] - 1 to 1 by -1 do
		(
			
			j += 1
			if j == 1 then
			_temp_trans1_list[j] = calculate _temp_trans1_list[j] obj.transform distance_list[i]
			else
			_temp_trans1_list[j] = calculate _temp_trans1_list[j] _temp_trans1_list[j-1] distance_list[i]
			
			nodes[i].transform = _temp_trans1_list[j]
		)
	)
	fn do_move2 obj =
	(
		j = 0
		for i in select_range[2] + 1 to nodes.count do
		(
			
			j += 1
			if j == 1 then
			_temp_trans2_list[j] = calculate _temp_trans2_list[j] obj.transform distance_list[i-1]
			else
			_temp_trans2_list[j] = calculate _temp_trans2_list[j] _temp_trans2_list[j-1] distance_list[i-1]
			
			nodes[i].transform = _temp_trans2_list[j]
		)
	)
	fn build_responder nodes:nodes =
	(
		--先清理
		deleteAllChangeHandlers id:#rope_responder
		--首尾时同一个时,会做两次事件,以让前后都参与响应
		id = select_range[1]
		if id > 1 do 
		when transform nodes[id] change id:#rope_responder currentobj do
		(
			_reset_int1.stop()
			_reset_int1.start()--于此同时,开始撤销标记
			_int1+=1
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
			if (mod _int2 2)as integer > 0 do --正常的when在transform change会触发两次,一次返回当前位置,一次返回起始位置.按右键会多返回一次.
			(
				do_move2 currentobj
			)
		)
		
	)
	fn reSelection ev nd nodes:nodes  = --选择的响应. select_range:select_range lbx_list:lbx_list
	(
		select_nodes = for n in getcurrentselection() where finditem nodes n > 0 collect n --只收集在列表内的物体.
		select_range = #(0,0)
		int1 = int2 = 0
		deleteAllChangeHandlers id:#rope_responder
		if lbx_list.items.count > 0 and select_nodes.count > 0 then
		(
			local select_ids = makeUniqueArray(for n in select_nodes collect finditem nodes n)
			select_range = #(amin select_ids,amax select_ids)
-- 			if select_range[1] == 0 do select_range[1] = select_range[2] --当
			if select_range[1] + select_range[2] > 0 and #{select_range[1]..select_range[2]}.numberset <= nodes.count then
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
				if ckb_run.checked and #{select_range[1]..select_range[2]}.numberset < nodes.count do build_responder() --这个函数要在开始响应被按下时执行一次.
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
			if not mouse.buttonStates[1] do (_int1 = 0;s.Stop())--在这里加上撤销标记结束.
		)catch(print "出错!!";s.Stop())
		dotnet.addEventHandler _reset_int1 "Tick" tik
		fn tik s e = --后面可能需要配合撤销堆栈,根据鼠标按下进行一次记录,
		try(
			if not mouse.buttonStates[1] do (_int2 = 0;s.Stop())--在这里加上撤销标记结束.
		)catch(print "出错!!";s.Stop())
		dotnet.addEventHandler _reset_int2 "Tick" tik
	)
	on Rope_Responser_Rollout close do
	(
		deleteAllChangeHandlers id:#drag
		_node_changed_event = _node_movent_event = undefined;gc light:true
		_reset_int1.Stop()
		_reset_int2.Stop()
	)
	on ckb_run changed state do
	(
		if state then build_responder()
		else deleteAllChangeHandlers id:#rope_responder
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
-- 	on btn2 pressed do --懒得单独写一个更新位置记录的东西了.
-- 	(
-- 		reSelection 0 0
-- 	)
)


createdialog Rope_Responser_Rollout