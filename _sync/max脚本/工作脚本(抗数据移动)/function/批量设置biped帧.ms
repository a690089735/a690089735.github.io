
try (destroydialog SetBipKeysTool)catch()
-- fn setSlidingKeys =
-- (
-- 	nt = slidertime
-- 	with redraw on(animate off(undo on(
-- 	for o in selection do 
-- 		for f in o.transform.controller.keys do 
-- 			(slidertime = f.time; biped.setSlidingKey o)
-- 	)))
-- 	slidertime = nt
-- )

-- fn setFreeKeys =
-- (
-- 	nt = slidertime
-- 	with redraw on(animate on(undo on(
-- 	for o in selection do 
-- 		for f in o.transform.controller.keys do 
-- 			(slidertime = f.time; biped.setFreeKey o)
-- 	)))
-- 	slidertime = nt
-- )

-- fn setKeys type = --biped.setFreeKey,biped.setSlidingKey
-- (
-- 	nt = slidertime
-- 	with redraw on(animate on(undo on(
-- 	for o in selection do 
-- 		for f in o.transform.controller.keys do 
-- 			try(slidertime = f.time; type o)catch()
-- 	)))
-- 	slidertime = nt
-- )
-- setKeys biped.setFreeKey
-- setKeys biped.setSlidingKey

fn setKeys type = --"Free","Sliding"
(
	val = 1
	if type == "Free" then val = 0
		
	bips = for o in selection where classof o.baseobject == Biped_Object collect o
	for b in bips do 
		for i  = 1 to b.transform.controller.keys.count do 
			(biped.getKey b.transform.controller i).ikBlend = (biped.getKey b.transform.controller i).ikSpace = val
	
	nt = slidertime
	slidertime = (biped.getKey bips[1].transform.controller 1).time
	biped.setkey bips[1] true true true
	slidertime = nt
)
-- setKeys "Free"
-- setKeys "Sliding" or ""

fn SetContinuity val = 
(
	bips = for o in selection where classof o.baseobject == Biped_Object collect o
	for b in bips do 
		for i  = 1 to b.transform.controller.keys.count do 
			(biped.getKey b.transform.controller i).continuity = val
)

rollout SetBipKeysTool "SetBipKeys" width:216 height:104
(
	button btn1 "SetSliding" pos:[8,8] width:96 height:32
	button btn2 "SetFree" pos:[112,8] width:96 height:32
	button btn5 "=0.0" pos:[16,64] width:88 height:24
	button btn6 "=25.0" pos:[112,64] width:88 height:24
	groupBox grp1 "Continuity" pos:[8,48] width:200 height:48
	on btn1 pressed do
	(
	setKeys "Sliding"
	)
	on btn2 pressed do
	(
	setKeys "Free"
	)
	on btn5 pressed  do
	(
		SetContinuity 0.0
	)
	on btn6 pressed  do
	(
		SetContinuity 25.0
	)
)

createdialog SetBipKeysTool
