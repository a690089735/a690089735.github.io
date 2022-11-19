rollout grin "Grin Control"
(
slider happy "Happy" orient:#vertical across:5
slider sad "Sad" orient:#vertical
slider oo "OO" orient:#vertical
slider ee "EE" orient:#vertical
slider oh "OH" orient:#vertical
/*
on happy changed val do object.xform1.center = ...
on sad changed val do object.xform2.gizmo.rotation = ...
...
*/
	on grin moved pos do
	(	
		print (pos as string)
	)
)
theNewFloater = newRolloutFloater "Grinning" 300 220
addRollout grin theNewFloater