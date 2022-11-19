try(DestroyDialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:160 height:296
(
	fn GetKeys objs:(getcurrentselection()) clamp_range:false clamp_start:animationrange.start clamp_end:animationrange.end = --mapped在处理多物体时返回的是ok,实际上下面的mapkeys就能兼容单物体和多物体,clamp_range钳制范围
	with undo off
	(
		mapkeys objs (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
		if clamp_range then for t in sort(makeuniquearray keys) where t >= clamp_start and t <= clamp_end collect t else sort(makeuniquearray keys)
	)
	
	--按住shift匹配外框
	button 'btn_QPaste' "快速复制自.." pos:[8,40] width:144 height:24 toolTip:"快速复制变换到选择的物体,依次指定粘贴目标,默认复制动画,按住Alt仅关键帧,按住Ctrl复制单帧" align:#left
	button 'btn_HoldAni' "创建占位动画" pos:[8,72] width:144 height:24 toolTip:"创建一个带有逐帧动画的占位物体,按住alt仅带有关键帧.按住Ctrl保持层级" align:#left
	button 'btn_RelAni' "创建相对动画" pos:[8,104] width:144 height:24 toolTip:"创建相对某参照物体的逐帧动画.按住Alt仅取参照物体的关键帧." align:#left
	button 'btn_LookAni' "创建注视动画" pos:[8,136] width:144 height:24 toolTip:"创建注视动画,默认相对注视,按住Ctrl可选择XYZ轴(弹出菜单)" align:#left
	button 'btn_Holder' "创建占位物体" pos:[8,168] width:144 height:24 toolTip:"创建一个占位物体.按住Ctrl保留层级,按住Shift将占位物体作为虚拟父物体." align:#left
	button 'btn_TrackPoint' "创建轨迹点" pos:[8,200] width:144 height:24 toolTip:"创建一个附着在模型上的轨迹点,按Ctrl可约束到点" align:#left
	button 'btn_matchTrans' "到首尾帧" pos:[8,8] width:144 height:24 toolTip:"首尾帧一样" align:#left
	
	button 'btn_BackupController' "备份控制器实例" pos:[8,232] width:144 height:24 toolTip:"备份控制器实例到自定义属性,以便各种操作和处理后还原." align:#left
	button 'btn_TempConstraint' "强制约束到.." pos:[8,264] width:144 height:24 toolTip:"创建一个临时的链接约束,默认完全对齐目标,按住Ctrl保持相对变换." align:#left
	
	on btn_QPaste pressed do --快速粘贴
	undo "Quick Copy Transform" on(
		local
		single = keyboard.controlPressed,sources = getCurrentSelection(),count = sources.count
		
		for i = 1 to count do --改成这样的循环逻辑,可以有更好的体验(点击即实时生效,)
		(
			local
			target = pickObject message:"选择对应的粘贴目标" rubberBand:sources[i].pos rubberBandColor:white
			--默认,粘贴动画--ctrl粘贴一帧 节点无效则跳过
			if isValidNode target do if single then sources[i].transform = tag.transform else with animate on(for t = animationRange.start to animationRange.end do at time t (sources[i].transform = target.transform))
		)
	)
	on btn_HoldAni pressed do --创建占位动画
	undo "Create Animation Holder" on(with animate on(
		local
		keep_prt = keyboard.controlPressed,
		only_keyFrame = keyboard.altPressed,
		sources = getCurrentSelection(),
		nodes = if only_keyFrame then for obj in sources collect
			(
				local nd = point name:(uniqueName(obj.name+"_holder")) size:20 centermarker:off axistripod:on cross:off Box:on constantscreensize:on drawontop:on wirecolor:yellow transform:obj.transform parent:(if keep_prt and isValidNode (prt = obj.parent) then prt else unsupplied)
				for t in GetKeys objs:obj do at time t (nd.transform = obj.transform)
				nd
			)
			else for obj in sources collect
			(
				local nd = point name:(uniqueName(obj.name+"_holder")) size:20 centermarker:off axistripod:on cross:off Box:on constantscreensize:on drawontop:on wirecolor:yellow transform:obj.transform parent:(if keep_prt and isValidNode (prt = obj.parent) then prt else unsupplied)
				for t = animationRange.start to animationRange.end do at time t (nd.transform = obj.transform)
				nd
			)
		select nodes
	))
	on btn_RelAni pressed do --创建相对动画
	(
			undo "Create Relatively Animation" on(with animate on(
				local
			 	over_range = keyboard.controlPressed, --超出钳制的范围,取所有帧(仅在按alt时有效),按住ctrl不钳制范围,目前在时间比帧长的时候,钳制会显得没有效果.应当自动钳制最短的部分.
				referrer_keys = keyboard.altPressed, --仅参考物体已有的帧
				sources = getCurrentSelection(),
				center = selection.center,
				count = sources.count,
				target = pickObject message:"选择相对目标" rubberBand:center rubberBandColor:white
				if isValidNode target do(
					local
					relTMs = for i in sources collect i.transform * Inverse target.transform,
					keys = if referrer_keys then GetKeys objs:target clamp_range:(not over_range) else for t = animationRange.start to animationRange.end collect t
					for t in keys do at time t (for i = 1 to count do sources[i].transform = relTMs[i] * target.transform)
				)
			))
		)
	on btn_LookAni pressed do --创建注视动画
		(
	)
	on btn_Holder pressed do --创建占位物体
	(
		undo "Create Holder" on(
			local
			keep_prt = keyboard.controlPressed,
			link_Prt = keyboard.shiftPressed,
			sources = getCurrentSelection()
			select( for i in sources collect (
				local nd = point name:(uniqueName(i.name+"_holder")) size:20 centermarker:off axistripod:on cross:off Box:on constantscreensize:on drawontop:on wirecolor:yellow transform:i.transform parent:(if keep_prt and isValidNode (prt = i.parent) then prt else unsupplied)
				if link_Prt do i.parent = nd
				nd
			))
		)
	)
	on btn_TrackPoint pressed do --创建轨迹点
	(
	
	)
	on btn_matchTrans pressed do --匹配首尾帧为当前帧(比起复制的帧,这样的匹配不会更改取曲线手柄)
	undo "Match Both Ends Transform" on(with animate on(
		local
	-- 		keep_prt = keyboard.controlPressed,
	-- 		link_Prt = keyboard.shiftPressed,
		sources = getCurrentSelection(),
		start = animationRange.start,end = animationRange.end
		for i in sources do 
		(
			local trans = i.transform
			at time start (i.transform = trans)
			at time end (i.transform = trans)
		)
	))
	on btn_BackupController pressed do --备份控制器实例
	undo "Backup Controller" on(
		--单独的一个创建控制器实例备份的功能配合下面的
		--创建自定义属性和修改器,保存原变换控制器,
		for obj in getCurrentSelection() do
		(
			local
			prop_holder = EmptyModifier name:"Controller Backup",
			
			prop = attributes prop
			(
				Parameters Properties rollout:PropRollout
				(	
					ControllerInstance type:#maxobject
					ControllerTips type:#string default:""
				)
				rollout PropRollout "Function"
				(
					group "Transform Controller"
					(
						button btn_restore "应用备份控制器" Align:#Center tooltip:"使用备份控制器替换现有变换控制器,默认替换并保留动画.\n按住Alt仅保留关键帧,\n按住ctrl仅替换不保留动画.\n若要清理,删除此修改器即可."
						label lbl_tips ControllerTips Align:#Center
						on btn_restore pressed do
						undo "Reback Controller Instance" on(
							local
							only_replace = keyboard.controlPressed,
							only_Keyframe = keyboard.altPressed,
							objs = getCurrentSelection()
							for obj in objs do
							(
								if only_replace then --仅替换
								(
									obj[3].controller = ControllerInstance
								)else
								(
									--only_Keyframe--使用这个变量,开关是否仅保留关键帧
									local
									i = 0
									trans_list = for t = animationRange.start to animationRange.end collect at time t obj.transform
									obj[3].controller = ControllerInstance
									with animate on (for t = animationRange.start to animationRange.end do at time t obj.transform = trans_list[i+=1])
								)
							)
						)
					)
				)
			)
			Custattributes.add prop_holder prop baseobject:false
			addmodifier obj prop_holder
			prop_holder.ControllerInstance = obj[3].controller
			prop_holder.PropRollout.lbl_tips.caption = prop_holder.ControllerTips = (FilterString (obj[3].controller as string) ":")[2]	
		)
		messageBox "备份完成,请查看修改面板."
	) 
	on btn_TempConstraint pressed do --创建临时约束
	undo "Create Temp Constraint" on(
		--设置一个连接约束控制器,替换原控制器,粘贴原变换
		local
		align = not keyboard.controlPressed,
		sources = getCurrentSelection(),count = sources.count
		
		for i = 1 to count do --改成这样的循环逻辑,可以有更好的体验(点击即实时生效,)
		(
			local
			target = pickObject message:"选择对应的粘贴目标" rubberBand:sources[i].pos rubberBandColor:white
			if isValidNode target do
			at time 0(
				local
				nd = sources[i],
				trans = if align then target.transform else nd.transform,
				ctrl = nd[3].controller = Link_Constraint()
				ctrl.addTarget target 0
				nd[3][1].controller = transform_script()
				nd[3][1].controller = prs()
				nd[3][1][1].controller = position_list()
				nd[3][1][1][1].controller = bezier_position()
				nd[3][1][1][2].controller = Position_XYZ()
				nd[3][1][1].controller.active = 2
				nd[3][1][2].controller = rotation_list()
				nd[3][1][2][1].controller = tcb_rotation()
				nd[3][1][2][2].controller = Euler_XYZ()
				nd[3][1][2].controller.active = 2
				nd.transform = trans
			)
		)
		
	)
)

CreateDialog unnamedRollout

-- fn Filt o = (selectmore o;true) --不行,会在运行时一下全选中
-- fn Filt o = (superClassOf o == Shape)
-- x = 
-- pickObject \
-- message:"message!!!" \ --状态栏提示信息
--prompt:"prompt!!!" \ --侦听器的提示信息
-- count:#multiple	\ --filter: \ 
-- count:3	\ --count可以直接指定数量,但不够自由,一般我会在外面加个循环收集.不指定时只返回一个物体,指定时返回一个array
-- select:false \ --如果改成true,就只能选择两个物体.应该是个bug
-- pickFrozen:false \ --是否是选择冻结物体,为true只选择冻结物体
-- filter:Filt \
-- rubberBand:<point3>] [	rubberBandColor:<color> ] \ 
-- forceListenerFocus:true--默认为true ,按理说改成false可以不让侦听器跳出来,但是没用.应该是bug