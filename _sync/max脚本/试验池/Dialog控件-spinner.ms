delete objects

d1 = Dummy pos:[-2.68989,0.517042,0] boxsize:[0.5,0.5,0.5]
d2 = Dummy pos:[-3.29735,0.804047,0] boxsize:[0.5,0.5,0.5]
b1 = Box pos:[-2.97383,0.703006,0] isSelected:on width:0.434692 length:0.358403 height:0.212384
	
max modify mode

sk = skin()
addModifier b1 sk

skinOps.addbone sk d1 0
skinOps.addbone sk d2 -1

sk.filter_vertices = on
	
try(DestroyDialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:162 height:300
(
	spinner 'spn1' "" pos:[39,56] width:84 height:16 range:[0,1,0] type:#float scale:0.01 align:#left
	on spn1 changed val do
	(
		bid = skinOps.GetSelectedBone sk
		for i = 1 to b1.numverts where skinOps.isVertexSelected sk i do skinOps.SetVertexWeights sk i bid val
	)
	on spn1 entered val do
	(
		print val
	)
	on spn1 buttondown do
	(
		undo "set weights" on skinOps.bakeSelectedVerts sk --Ò»´Î³·Ïú
	)
)
CreateDialog unnamedRollout