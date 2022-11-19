try(destroydialog rig2currentRollout)catch()

-- R1 = #(
-- $nan_hiddenNodes_280,
-- $nan_hiddenNodes_281,
-- $nan_hiddenNodes_282
-- )
-- R2 = #(
-- $nan_hiddenNodes_296,
-- $nan_hiddenNodes_297,
-- $nan_hiddenNodes_298,
-- $nan_hiddenNodes_299
-- )

-- L1 = #(
-- $nan_hiddenNodes_208,
-- $nan_hiddenNodes_209,
-- $nan_hiddenNodes_210
-- )
-- L2 = #(
-- $nan_hiddenNodes_224,
-- $nan_hiddenNodes_225,
-- $nan_hiddenNodes_226,
-- $nan_hiddenNodes_227
-- )

-- select L2



rollout rig2currentRollout "Untitled" width:160 height:72
(
	fn rig2node_lookchain bone_list point_List Dir side:1 = --side 0,1,2 主要用于寻找骨骼链的侧面(辅助注视用),一般不可能是0(X),用侧面会很难处理上方向,一般用前后,即1
	(
		for i = 1 to bone_list.count - 1 do
		(
			local
			ctrl,
			b = bone_list[i],
			p1 = point_List[i],
			p2 = point_List[i+1]
			
			ctrl = b[3][1].controller = Position_Constraint()
			ctrl.appendTarget p1 50.0
			
			ctrl = b[3][2].controller = LookAt_Constraint ()
			ctrl.appendTarget p2 50.0
			ctrl.lookat_vector_length = 0.0
			ctrl.upnode_world = off
			ctrl.pickUpNode = dir
			ctrl.StoUP_axis = side
			ctrl.upnode_axis = side
		)
		(
			local
			ctrl,
			count = bone_list.count,
			b = bone_list[count]
			ctrl = b[3][1].controller = Position_Constraint()
			ctrl.appendTarget point_List[count] 50.0
		)
	)
	
	button btn1 "Pick1" pos:[8,8] width:64 height:24 toolTip:"拾取骨骼"
	button btn2 "Pick2" pos:[88,8] width:64 height:24 toolTip:"拾取点"
	button btn3 "Pick3 && Do" pos:[8,40] width:144 height:24 toolTip:"拾取上方向,并执行绑定"
	
	local
	blist,
	plist,
	dir
	
	on btn1 pressed do
	(
		blist = getcurrentselection()
	)
	on btn2 pressed do
	(
		plist = getcurrentselection()
	)
	on btn3 pressed do
	undo "rig2current" on(
		rig2node_lookchain blist plist selection[1] side:1
	)
)
createdialog rig2currentRollout