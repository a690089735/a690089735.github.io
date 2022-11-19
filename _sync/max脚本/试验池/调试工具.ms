--调试工具,用来显示顶点序号
try(destroydialog ShowRollout)catch()

rollout ShowRollout "显示选择物体" width:160 height:72
(
	checkbox chk_vID "顶点序号" pos:[7,6] width:76 height:19
	
	fn GW_ShowSelectionInfo =
	(
		sel = for o in getcurrentselection() where not o.isHiddenInVpt collect o
		for o in sel do
		(
			if chk_vID.checked do --显示顶点序号
			(
				for i = 1 to o.numVerts do
				(
					pos = o.verts[i].pos
					gw.text pos (i as string + " : " + pos as string) color:white
				)
			)
		)
	)

	on ShowRollout open do
	(
		unregisterRedrawViewsCallback GW_ShowSelectionInfo
		gc light:true
		registerRedrawViewsCallback GW_ShowSelectionInfo
	)
	on ShowRollout close do
	(
		unregisterRedrawViewsCallback GW_ShowSelectionInfo
		gc light:true
	)
)

createdialog ShowRollout