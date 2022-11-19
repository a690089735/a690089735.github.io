
rollout testquatRollout "Untitled" width:232 height:56
(
	button 'btn2' "Ë¢ÐÂ" pos:[8,8] width:40 height:16 align:#left
	spinner 'spn1' "" pos:[8,32] width:48 height:16 enabled:true range:[-1,1,0] scale:0.001 align:#left
	spinner 'spn2' "" pos:[64,32] width:48 height:16 enabled:true range:[-1,1,0] scale:0.001 align:#left
	spinner 'spn3' "" pos:[120,32] width:48 height:16 enabled:true range:[-1,1,0] scale:0.001 align:#left
	spinner 'spn4' "" pos:[176,32] width:48 height:16 enabled:true range:[-1,1,0] scale:0.001 align:#left
	fn getqValue =
	(
		local q = selection[1][3][2].value
		spn1.value = q.x
		spn2.value = q.y
		spn3.value = q.z
		spn4.value = q.w
	)
	
	
	on testquatRollout open  do
	(
		getqValue()
	)
	on btn2 pressed do
	(
		getqValue()
	)
	on spn1 changed val do
	(
		local q = selection[1][3][2].value
		selection[1][3][2].value = (quat val q.y q.z q.w)
		getqValue()
	)
	on spn2 changed val do
	(
		local q = selection[1][3][2].value
		selection[1][3][2].value = (quat q.x val q.z q.w)
		getqValue()
	)
	on spn3 changed val do
	(
		local q = selection[1][3][2].value
		selection[1][3][2].value = (quat q.x q.y val q.w)
		getqValue()
	)
	on spn4 changed val do
	(
		local q = selection[1][3][2].value
		selection[1][3][2].value = (quat q.x q.y q.z val)
		getqValue()
	)
)
DestroyDialog testquatRollout
CreateDialog testquatRollout