try(destroydialog  ToMeshAniARollout)catch()
rollout ToMeshAniARollout "TMA" width:120 height:48
(
	local ac,cc,af --注释此行可增加性能
	button btn_Execute "塌陷为网格动画" pos:[8,8] width:104 height:32
	fn ToMeshAni o s e = with redraw off(with undo off(
		at time s (n = mesh mesh:(snapshotasmesh o) name:(o.name+"_AniMesh"))
		animatevertex n #all
		count = n.numverts
		masterCtrl = n[4][1]
		for t = s to e do at time t
		(
			for i = 1 to count do
			(
				tm = snapshotasmesh o
				k = addNewKey masterCtrl[i].controller t
				k.value = getVert tm i
			)
-- 			with animate on (for i = 1 to count do meshop.setvert n i (getVert tm i))
			btn_Execute.caption = (cc as string +"/"+ac+";"+t as string+"f/"+af+"f");windows.processPostedMessages() --注释此行可增加性能
		)
		n
	))
	on btn_Execute pressed do
	(
		setCommandPanelTaskMode #create; maxops.getDefaultTangentType &inTangent &outTangent; maxops.setDefaultTangentType #step #step
		st = (animationRange.start.frame as integer);et = (animationRange.end.frame as integer)
		ac = selection.count as string; cc = 0; af = (et-st) as string --注释此行可增加性能
		select (for o in getcurrentselection() collect 
		(
			cc+=1 --注释此行可增加性能
			ToMeshAni o st et
		))
		btn_Execute.caption = "塌陷为网格动画"
		maxops.setDefaultTangentType inTangent outTangent
	)
)
createdialog ToMeshAniARollout
