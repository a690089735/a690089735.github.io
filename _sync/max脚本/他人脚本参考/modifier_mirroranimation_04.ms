/*
Mirror Animation Modifier 0.4 [2010.9-2011.2] by Anubis
New in v.0.4:
	* deleting event added (restore orig. keys on deleting)
	* clone event added (disable transforms on clone as copy)
Keep in mind that this plugin is still beta and very limited ;-)
*/
plugin modifier MirrorAnimation name:"MirrorAnimation"
	classID:#(0x789fc233, 0x271c57f0) version:0.4
(
	local dep = #()
	local axisStates = #(#(1),#(1,2),#(1,3),#(2),#(2,3),#(1,2,3),#(3),#(0))
	
	fn mirrorAnim owner tm axis = ( -- axis <ArrayParameter>
		try (
			for a in axis do (
				local keys = #(), track = owner.transform.controller[tm].controller
				local cls = classOf track
				if cls == position_list or cls == rotation_list then
					keys = track[1][a].keys else keys = track[a].keys
				if keys.count > 0 do (for k in keys do k.value *= -1)
			)
		) catch (format "Exception:\n%\n" (getCurrentException()))
	)
	fn isEqualArrayParam ap1 ap2 = ( -- compare ArrayParameter
		a1 = ap1 as array ; a2 = ap2 as array
		a1 as string == a2 as string
	)
	
	parameters main rollout:params
	(
		posAxis type:#integer ui:rbPA default:8
		rotAxis type:#integer ui:rbRA default:8
		posIndex type:#intTab tabSize:1 tabSizeVariable:true
		rotIndex type:#intTab tabSize:1 tabSizeVariable:true
		
		on posAxis set idx do -- Position
		(
			if not isEqualArrayParam axisStates[idx] posIndex do (
				dep = (refs.dependentNodes this)
				if posIndex[1] != 0 do -- is there something to undo
					for i in dep do (mirrorAnim i 1 posIndex) -- restore old
				posIndex = axisStates[idx] -- set new
				if idx != 8 do (for i in dep do (mirrorAnim i 1 posIndex)) -- mirror new
			)
		)
		on rotAxis set idx do -- Rotation
		(
			if not isEqualArrayParam axisStates[idx] rotIndex do (
				dep = (refs.dependentNodes this)
				if rotIndex[1] != 0 do -- is there something to undo
					for i in dep do (mirrorAnim i 2 rotIndex) -- restore old
				rotIndex = axisStates[idx] -- set new
				if idx != 8 do (for i in dep do (mirrorAnim i 2 rotIndex)) -- mirror new
			)
		)
	)
	
	rollout params "Parameters"
	(
		group "Position Axis"
		(
			radiobuttons rbPA columns:3 labels:#("X","XY","XZ","Y","YZ","XYZ","Z","OFF") align:#left
		)
		group "Rotation Axis"
		(
			radiobuttons rbRA columns:3 labels:#("X","XY","XZ","Y","YZ","XYZ","Z","OFF") align:#left
		)
	)
	
	on clone orig do -- // TODO ...
	(
		this.posAxis = this.rotAxis = 8 -- atm just disable (but do nothing if clone as instance!)
	)
	--on deleted do () -- Useless (!) 'cause Max call it only on File New/Reset
	on postCreate do -- so, FiX Deleting-event in onCrete handle via callbacks
	(
		callbacks.removeScripts id:#MirrorAnimationModDeleted
		fn onDeleteMirrorAnimMod = (
			me = (callbacks.notificationParam())[2] -- #(node, modifier)
			if classOf me == MirrorAnimation do
				me.posAxis = me.rotAxis = 8
		)
		callbacks.addScript #preModifierDeleted "onDeleteMirrorAnimMod()" id:#MirrorAnimationModDeleted
	)
)
--// Last update: 2011.02.28
