for i in selection do
(
	prt = i.parent
	i.parent = undefined
	cl = for c in i.children collect c
	for c in cl do c.parent = undefined 
	p = point transform:i.transform size:0.2
	(i.pos.controller = Position_Constraint ()).appendTarget p 50.0
	if prt != undefined do
	(
		lc = prt.rotation.controller = LookAt_Constraint ()
		lc.appendTarget p 50.0
		lc.target_axis=0
		lc.upnode_world=false
		lc.pickUpNode=p
		lc.StoUP_axis=1
		lc.upnode_axis=1
		lc.lookat_vector_length = 0
	)
	for c in cl do c.parent = i
	i.parent = prt
)

t = $
for i in selection do
(
	(i.rotation.controller = Orientation_Constraint ()).appendTarget t 50.0
)


ctrl = $.rotation.controller
for i in selection do 
(
	cl = for c in i.children collect c
	for c in cl do c.parent = undefined 
	i.rotation.controller = ctrl
	for c in cl do c.parent = i
)