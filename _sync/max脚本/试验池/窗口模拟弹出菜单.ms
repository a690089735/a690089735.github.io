try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:144 height:104
(
	rollout r2 "Untitled" width:160 height:112
	(
		spinner spn2 "" pos:[8,8] width:88 height:16
		button btn5 "Button" pos:[8,32] width:64 height:24
		on r2 LostFocus e do print 1
	)
	button btn3 "¿ªÆô" pos:[24,16] width:56 height:24
	button btn9 "¹Ø±Õ" pos:[32,56] width:56 height:24
	on btn3 pressed do
	(
		try(destroydialog r2)catch()
		createdialog r2 style:#() pos:mouse.screenpos
		setFocus r2
	)
	on btn9 pressed do
	(
		try(destroydialog r2)catch()
	)
	on unnamedRollout close do (try(destroydialog r2)catch())
)

createdialog unnamedRollout