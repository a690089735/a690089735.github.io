try(destroydialog CPRollout)catch()
rollout CPRollout "ANIT0.5" width:104 height:72
(
	
	local
	times = #(),
	selt = #(),
	frames = #(),
	selft = #()

	fn copy_selTransform = --同理,需要对biped物体做slidertime兼容,更改后不要变更版本号.(好像attime可以复制bip变换,只是不能粘贴,遇到了再改吧)
	(
		--Process selected object
		sel =  getcurrentselection()
		times = for time1 in animationRange.start to animationRange.end collect time1
		--Frame by frame to copy
		selt = #()
		for i = 1 to sel.count do (
			append selt #() 
			for time1 in times do(
				at time time1
				(
					append selt[i] sel[i].transform
				)
			)
		)
		--Keyframe copy
		selft = #()
		frames = #()
		for time1 in times do
		(
			local f = (at time time1(trackbar.GetPreviousKeyTime()))
			if f != undefined and f <= animationRange.end and f >= animationRange.start do append frames f --临时解决超限问题,这样会略微影响效率
		)
		frames = sort(makeUniqueArray frames)
		for i = 1 to sel.count do (
			append selft #() 
			for time1 in frames do(
				at time time1
				(
					append selft[i] sel[i].transform
				)
			)
		)
	)

	fn paste_TransformPerKey kf:false = 
	(
		local 
		sel = getcurrentselection(),
		st = slidertime,
		undostr,
		tList,
		seltList
		
		if kf then(undostr = "PasteKeyFrame";tList = frames;seltList = selft)else (undostr = "PasteKey";tList = times;seltList = selt)
		
		undo undostr on(
			animate on (
				for i = 1 to (if kf then selft else selt).count do
				(
					o = sel[i]
					isbip = try(biped.getNode o 1;true)catch(false) --如果是bip的话,必须用slidertime而不能用at time,且不可以关闭重画-- classof o.baseobject == biped_object --这个对被塌陷成其他物体的bip骨骼不管用.
					with redraw isbip 
					(
						if isbip then for j = 1 to tList.count do (slidertime = tList[j];o.transform = seltList[i][j])
						else for j = 1 to tList.count do at time tList[j] o.transform = seltList[i][j]
					)
				)
			)
		slidertime = st
		) 
	)

	fn SetDefaultControler =
	undo "ClearController" on(for o in getcurrentselection() do (o.Transform.controller = transform_script();o.Transform.controller = prs()))
	
	button btn_CP "Copy/PasteKey" pos:[8,8] width:88 height:24 toolTip:"按住Ctrl复制动画,点击逐帧粘贴变换.按住Alt点击只在关键帧粘贴变换."
	button btn_DCtrl "PRSController" pos:[8,40] width:88 height:24 toolTip:"将选中物体控制器重新设为移动旋转缩放控制器.(同时具有清理动画帧的功能)"
	button btn_Tip "?" pos:[96,0] width:8 height:12 toolTip:"操作基于选择顺序和时间范围.\nOperations are based on selection order and time range."
	on btn_CP pressed do
	(
		if keyboard.controlPressed then copy_selTransform() else paste_TransformPerKey kf:keyboard.altPressed
		
	)
	on btn_DCtrl pressed do
	(
		SetDefaultControler()
	)
)

createdialog CPRollout