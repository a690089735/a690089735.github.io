try(destroydialog dialog) catch()

rollout dialog "Tabs"
(
	dotnetcontrol tb "TabControl" width:200 height:24 pos:[0,0] 
	group "A Section: "
	(
		button a_bt "Create" width:100
		radiobuttons a_rb "Radio:" labels:#("1","2","3")
	)
	label emp offset:[0,-105] visiblie:on
	group "B Section: "
	(
		button b_bt "Delete" width:100
		radiobuttons b_rb "Radio:" labels:#("4","5","6")
	)
	fn visibleFromGroup name state = 
	(
		setstate = off
		out = off
		for c in dialog.controls while not out do
		(
			if iskindof c GroupStartControl and c.text == name do setstate = on
			if setstate do c.visible = state 
			if iskindof c GroupEndControl and c.text == name do out = on
		)
	)
	fn visiblePage page:0 = 
	(
		for c in dialog.controls where c != tb do c.visible = off
		case page of
		(
			0: visibleFromGroup "A Section: " on
			1: visibleFromGroup "B Section: " on
		)
	)
	on tb selected s e do
	(
		visiblePage page:e.TabPageIndex
	)

	on dialog open do
	(
		tb.itemSize = dotNetObject "System.Drawing.Size" 40 20
		tb.TabPages.add "A"
		tb.TabPages.add "B"
		visiblePage page:0
		showMethods tb
	)
)
createdialog dialog