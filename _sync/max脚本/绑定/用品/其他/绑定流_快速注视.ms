try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:128 height:40
(
	pickbutton 'ptn1' "PickButton" pos:[8,8] width:32 height:24 autoDisplay:true align:#left
	button 'btn1' "Do Look" pos:[48,8] width:72 height:24 align:#left
	
	on btn1 pressed do
(
		undo "quick look" on(
			upnode = ptn1.object
			ctrl = selection[1][3][2].controller = LookAt_Constraint()
			ctrl.appendTarget selection[2] 50.0
			ctrl.lookat_vector_length = 0.0
			ctrl.upnode_world = off
			ctrl.pickUpNode = upnode
			ctrl.target_axis = 1 --y
			ctrl.StoUP_axis = 0 --x
			ctrl.upnode_axis = 0
			ctrl.StoUP_axisFlip = off
		)
	)
)
createdialog unnamedRollout
