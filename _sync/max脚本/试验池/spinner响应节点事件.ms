try(destroydialog testRollout)catch()
rollout testRollout "Untitled" width:162 height:300
(
	local temp
	local EventList = #()
	fn parg a b = 
	(
		
		format "a : % \nb : % \n" a b
		if finditem EventList a == 0 do append EventList a
		print EventList
	)
	spinner spn1 "" pos:[31,30] width:100 height:16
	on testRollout open  do
	(
		temp = NodeEventCallback mouseUp:true delay:750 all:parg
	)
	on testRollout close  do
	(
		temp = undefined
		gc light:true
	)
)
createdialog testRollout

--在wt中有用的项目 #selectionChanged  
