try(destroydialog relMirrorAniRollout)catch()
--支持bezier float,linear float,superclassof  == FloatController
rollout relMirrorAniRollout "相对镜像动画" width:152 height:88
(
	--UI
	label lbl1 "Position:" pos:[8,8] width:40 height:16
	checkbox chk1 "X" pos:[56,8] width:24 height:16
	checkbox chk2 "Y" pos:[88,8] width:24 height:16
	checkbox chk3 "Z" pos:[120,8] width:24 height:16
	label lbl2 "Rotation:" pos:[8,28] width:48 height:16
	checkbox chk4 "X" pos:[56,28] width:24 height:16
	checkbox chk5 "Y" pos:[88,28] width:24 height:16
	checkbox chk6 "Z" pos:[120,28] width:24 height:16
	button btn1 "Execute" pos:[48,48] width:96 height:32 toolTip:"基于当前时间轴第一帧的值来镜像;\n默认仅支持默认控制器结构\n勾选左侧代理模式可兼容任意控制器."
	checkbutton ckb1 "Poxy" pos:[8,48] width:32 height:32 toolTip:"代理模式用于处理各种兼容问题;\n(父空间,非默认控制器等)\n代理模式会破环非均匀关键帧."
	--函数
	fn mAni ctrl =( --必须是一个浮点控制器(加一些限制,以忽略复杂情况)
		local
			tmin = animationrange.start,
			tmax = animationrange.end,
			keys = for i in ctrl.keys where i.time >= tmin and i.time <= tmax collect i
		if keys.count > 0 do
		(
			local
				k1 = keys[1].value,
				base = k1 * 2
			for k in keys do k.value = base - k.value
		)
	)
	fn GetAllKeys objs:(getcurrentselection()) = with undo off --在时间轴范围内
	(
		mapkeys objs (fn CollectKeys t k tmin:animationrange.start tmax:animationrange.end= (if t >= tmin and t <= tmax do append k t; t)) (keys=#()) #allkeys
		return sort(makeuniquearray keys)
	)
	--响应
	on btn1 pressed do
	undo "Rel Mirror Animation" on(with redraw off(
		local
		sel = getcurrentselection(),
		clist = for cs in #(#(chk1,chk2,chk3),#(chk4,chk5,chk6)) collect for c in cs where c.checked collect finditem cs c,
		currentslidertime = slidertime
		slidertime = animationrange.start
		for i = 1 to 2 do
		(
			for j in clist[i] do
			(
				for o in sel do
				(
					if ckb1.checked then --以代理模式镜像,代理模式:用于在首帧创建一个有父物体的代理物体,镜像代理物体后将变换拷贝回原物体,此方法会扰乱非均匀关键帧.
					(
						local
							timelist = GetAllKeys objs:o,
							translist = for t in timelist collect at time t(o.transform),
							bsize = [0,0,0], --调试用,调试错误时将其设为10或更高值
							_p = dummy boxsize:bsize transform:translist[1],
							_o = dummy boxsize:bsize transform:translist[1]
						_p.parent = o.parent;_o.parent = _p
						with animate on (for t in timelist do at time t(_o.transform = o.transform))
						mAni _o[3][i][j].controller
						with animate on (for t in timelist do at time t(o.transform = _o.transform))
						delete _p; delete _o --清理
					)
					else --直接镜像
					(
						ctrl = o[3][i][j].controller 
						if superclassof ctrl == FloatController do mAni ctrl
					)
				)
			)
		)
		slidertime = currentslidertime
	))
)
createdialog relMirrorAniRollout