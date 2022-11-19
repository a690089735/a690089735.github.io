try(destroydialog bipaxisRollout)catch()
rollout bipaxisRollout "bipaxis" width:120 height:40
(
	fn GetBipCOM =  --获取Bip根节点(质心)
	(
		Ctrls = (getClassInstances Vertical_Horizontal_Turn)
		for c in Ctrls collect c.rootnode
	)
	local bips = GetBipCOM()
)
 CreateDialog bipaxisRollout