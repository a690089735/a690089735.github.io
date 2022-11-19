try(destroydialog  ToMeshAniARollout)catch()
rollout ToMeshAniARollout "TMA" width:144 height:48
(
	local ac,cc,af --注释此行可增加性能
	button 'btn_Execute' "塌陷为网格动画" pos:[32,8] width:104 height:32 align:#left
	checkButton 'ckb1' "1" pos:[8,8] width:24 height:32 toolTip:"合并为一个" align:#left --虽然可以支持让生成后的模型合并,并且也是这么做的,但是为用户意外操作考虑,最好设定为操作前的选项.
	fn ToMeshAni o s e = with redraw off(with undo off(
		at time s (n = converttomesh (snapshot o);n.parent = undefined;n.name = n.name+"_MA")
		animatevertex n #all
		count = n.numverts
		for t = s to e do at time t
		(
			tm = snapshotasmesh o
			with animate on (for i = 1 to count do meshop.setvert n i (getVert tm i))
			btn_Execute.caption = (cc as string +"/"+ac+";"+t as string+"f/"+af+"f");windows.processPostedMessages() --注释此行可增加性能
		)
		n
	))
	
	fn MergeMeshAni objs = --虽然可以支持让生成后的模型合并,并且也是这么做的,但是为用户意外操作考虑,最好设定为操作前的选项.(万一选了个顶点不全的,或者轴心不在世界的.容易粘贴错)
	undo off(
		local
		baseobj = objs[1],
		vcount = baseobj.numverts 
		for i = 2 to objs.count do 
		(
			local
			k = 0,
			o = objs[i],
			vctrls = for j = 1 to o.numverts collect o[4][1][j].controller
			attach baseobj o
			animatevertex baseobj #all
			
			for l = vcount+1 to baseobj.numverts do
			(
				baseobj[4][1][l].controller = vctrls[k+=1]
			)
			
			vcount = baseobj.numverts
		)
		baseobj.name = uniquename "All_Mesh_Ani"
		update baseobj
	)

	on btn_Execute pressed do
	(
		setCommandPanelTaskMode #create; maxops.getDefaultTangentType &inTangent &outTangent; maxops.setDefaultTangentType #step #step
		st = (animationRange.start.frame as integer);et = (animationRange.end.frame as integer)
		ac = selection.count as string; cc = 0; af = (et-st) as string --注释此行可增加性能
		animeshes = for o in getcurrentselection() collect 
		(
			cc+=1 --注释此行可增加性能
			ToMeshAni o st et
		)
		btn_Execute.caption = "塌陷为网格动画"
		maxops.setDefaultTangentType inTangent outTangent
		
		select animeshes
		if ckb1.checked do MergeMeshAni animeshes
	)
)
createdialog ToMeshAniARollout
