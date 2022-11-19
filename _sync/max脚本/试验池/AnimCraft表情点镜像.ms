try(DestroyDialog mirrorToTool)catch()
rollout mirrorToTool "镜像到" width:120 height:48
(
	button 'btn_mirrorTo' "选择 镜像到.." pos:[8,8] width:104 height:32 toolTip:"AnimCraft专用的缩放式镜像,\n按选择顺序逐一选择镜像物体.\n按住Alt不镜像粘贴.\n按住Ctrl创建镜像标记.\n可以组合\t" align:#left
	on btn_mirrorTo pressed  do
	undo "Mirror To.." on(
		local
		noMirror = keyboard.altPressed,
		doTag = keyboard.controlPressed
		for i in getCurrentSelection() do 
		(
			local
			otrans = i.transform,
			tag = if doTag then Point axistripod:on centermarker:off cross:off size:10 constantscreensize:on transform:otrans wirecolor:red name:(i.name+"_Tag") else pickObject message:"选择目标物体" rubberBand:otrans.pos
			if isValidNode tag do
			(
				local ttrans = if noMirror then otrans else Matrix3 (otrans[1]*[-1,1,1]) (otrans[2]*[-1,1,1]) (otrans[3]*[-1,1,1]) (otrans[4]*[-1,1,1])
				tag.transform = ttrans
			)
		)
	)
)
CreateDialog mirrorToTool