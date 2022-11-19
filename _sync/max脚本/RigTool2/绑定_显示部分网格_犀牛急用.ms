prop_holder = EmptyModifier()
prop = attributes prop
(
	Parameters Properties rollout:PropRollout
	(	
		mods type:#maxObjectTab tabsize:2 --tabSizeVariable:true
	)
	rollout PropRollout "Mesh Properties" 
	(
		group"Display"
		(
			button 'LegMesh' "Leg Mesh" Align:#Center tooltip:"Show/Hide Leg Mesh.\nClick mouse:Left or Right."
			
			on LegMesh pressed do undo "Show Leg Mesh" on (for i in mods do i.enabled = false)
			on LegMesh rightClick do undo "Hide Leg Mesh" on (for i in mods do i.enabled = true)
		)
	)
)
Custattributes.add prop_holder prop baseobject:false
prop_holder.mods = #($Cargorhino_Mesh_H_1.modifiers[2], $Cargorhino_Mesh_L_1.modifiers[2])
addModifier selection[1] prop_holder