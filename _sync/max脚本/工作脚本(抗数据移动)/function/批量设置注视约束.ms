rollout SetLookAtTool "SetLookAtTool" width:168 height:232
(
	groupBox 'grp_1' "Select LookAt Axis:" pos:[8,8] width:152 height:40 align:#left
	radioButtons 'rdo1' "" pos:[16,24] width:97 height:16 labels:#("X", "Y", "Z") default:1 columns:3 align:#left
	checkbox 'chk1' "Flip" pos:[120,24] width:32 height:16 align:#left
	groupBox 'grp_2' "Select Upnode:" pos:[8,56] width:152 height:40 align:#left
	pickButton 'btn9' "None" pos:[72,72] width:80 height:16 align:#left
	checkbox 'chk2' "World" pos:[16,72] width:64 height:16 align:#left
)


/* for i in selection do(
* i.rotation.controller.LookAt_Constraint.controller.upnode_world = off
* i.rotation.controller.LookAt_Constraint.controller.pickUpNode = $'Yao Head'
* i.rotation.controller.LookAt_Constraint.controller.upnode_ctrl = 0
* i.rotation.controller.LookAt_Constraint.controller.StoUP_axis = 1)*/

/* 更新更改了父级的冻结变换
* for i in selection do(
* i.position.controller.delete 2
* i.pos.controller.Available.controller = Position_XYZ ()
* i.position.controller.setActive 2
* )*/
