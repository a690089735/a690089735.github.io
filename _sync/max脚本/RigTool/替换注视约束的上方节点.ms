try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:80 height:72
(
	button btn24 "Collect1" pos:[8,8] width:64 height:24 toolTip:"收集控制器"
	button btn25 "Pick && Do" pos:[8,40] width:64 height:24 toolTip:"设置控制器的上方节点为选择的控制器的上方节点"
	
	local
	ctrls
	
	on btn24 pressed  do
	(
		ctrls = for i in selection collect i[3][2].controller
	)
	on btn25 pressed  do
	(
		local dir = selection[1][3][2].pickupnode
		for c in ctrls do c.pickupnode = dir
	)
)
createdialog unnamedRollout