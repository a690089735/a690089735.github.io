try(destroydialog CPRollout)catch()



rollout CPRollout "ANITwin0.3" width:120 height:192
(
	
local times = #()
local selt = #()

local frames = #()
local selft = #()

fn copy_selTransform = 
(
	--Process selected object
	sel =  (selection as array)
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
	if trackbar.GetPreviousKeyTime() != undefined do(
	for time1 in times do
	(
		at time time1(append frames (trackbar.GetPreviousKeyTime()))
		frames = sort (makeUniqueArray frames)
	)
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
)

fn paste_selTransform = 
(
	sel = selection as array
	with redraw off(
		undo on(
			animate on (
				for i = 1 to selt.count do
				(
					o = sel[i]
					for j = 1 to times.count do
						at time times[j]
							o.transform = selt[i][j]
				)
			) 
		)
	)
)

fn paste_selfTransform = 
(
	sel = selection as array
	with redraw off(
		undo on(
			animate on (
				for i = 1 to selft.count do
				(
					o = sel[i]
					for j = 1 to frames.count do
						at time frames[j]
							o.transform = selft[i][j]
				)
			)
		) 
	)
)

fn SetDefaultControler =
(
	for o in selection as array do 
	(
		o.Transform.controller = prs ()
		o.pos.controller = Position_XYZ ()
		o.rotation.controller = Euler_XYZ ()
	)
)
	
	button btn_Copy "CopyKey" pos:[16,64] width:88 height:24 toolTip:"复制动画."
	button btn_Paste1 "PasteKey" pos:[16,128] width:88 height:24 toolTip:"按逐帧粘贴."
	button btn_Paste2 "PasteKeyFrame" pos:[16,160] width:88 height:24 toolTip:"按关键帧粘贴."
	button btn_DCtrl "DefaultController" pos:[16,96] width:88 height:24 toolTip:"设置选中物体为默认变换控制器."
	label lbl2 "Operations are based on selection order and time range." pos:[16,6] width:88 height:52
	button btn_Tip "?" pos:[104,5] width:13 height:12 toolTip:"操作基于选择顺序和时间范围."
	on btn_Copy pressed do
	(
		copy_selTransform()
	)
	on btn_Paste1 pressed do
	(
		paste_selTransform()
	)
	on btn_Paste2 pressed do
	(
		paste_selfTransform()
	)
	on btn_DCtrl pressed do
	(
		SetDefaultControler ()
	)
)

createdialog CPRollout