try(destroydialog springCtrlPanel)catch()
rollout springCtrlPanel "跟随属性" width:160 height:184
(

	spinner spn_Spring "弹力:" pos:[32,16] width:72 height:16 range:[0,3,0.5]
	slider sld_spring "" pos:[8,32] width:144 height:25 range:[0,3,0.5] type:#float orient:#horizontal ticks:4
 --50到1500 默认340  val*500+50
	button btn_Spring "重置" pos:[112,16] width:32 height:16 toolTip:"(不能设置帧)偏右则更有弹力,弹动更明显."
	
	spinner spn_damp "回归:" pos:[32,72] width:72 height:16 range:[0,2.5,0.4]
	slider sld_damp "" pos:[8,88] width:144 height:25 range:[0,2.5,0.4] type:#float orient:#horizontal ticks:4
 --0.6到3.1 默认1  0.0-2.5 + 0.6  val + 0.6
	button btn_damp "重置" pos:[112,72] width:32 height:16 toolTip:"(不能设置帧)偏右则回归性更强,停止时更不易抖动."

	spinner spn_Zero "效果:" pos:[24,128] width:72 height:16 range:[0,200,100] Controller:(Linear_Float())
	slider sld_Zero "" pos:[8,144] width:136 height:25 range:[0,200,100] type:#float orient:#horizontal ticks:4 Controller:(Linear_Float())
 --0到200,默认100 val
	button btn_Zero "重置" pos:[112,128] width:32 height:16 toolTip:"(能设置帧)偏右则弹动效果增强,偏左则弹动效果减少,完全居左则无弹动效果."
		
	fn setspnCaption = 
	(
		spn_Spring.value = sld_Spring.value
		spn_damp.value = sld_damp.value
	)
	fn setsldCaption = 
	(
		sld_Spring.value = spn_Spring.value
		sld_damp.value = spn_damp.value
	)
		
	on springCtrlPanel open do
	(
		sld_Spring.value = ($.children[1].pos.controller.getMass()-50)/500
		sld_damp.value = $.children[1].pos.controller.getDrag()-0.6
		sld_Zero.controller = spn_Zero.controller = $.children[1].pos.controller.x_effect.controller
		setspnCaption()
	)
	on spn_Spring changed val do
	(
		setsldCaption()
		for o in $.children do o.pos.controller.SetMass (val*500+50)
	)
	on sld_spring changed val do
	(
		setspnCaption()
		for o in $.children do o.pos.controller.SetMass (val*500+50)
	)
	on btn_Spring pressed  do
	(
		spn_Spring.value = sld_Spring.value = 0.5
		for o in $.children do o.pos.controller.SetMass (300)
	)
	on spn_damp changed val do
	(
		setsldCaption()
		for o in $.children do o.pos.controller.SetDrag(val + 0.6)
	)
	on sld_damp changed val do
	(
		setspnCaption()
		for o in $.children do o.pos.controller.SetDrag(val + 0.6)
	)
	on btn_damp pressed  do
	(
		spn_damp.value = sld_damp.value = 0.4
		for o in $.children do o.pos.controller.SetMass (1.0)	
	)
	on btn_Zero pressed  do
	(
		spn_damp.value = sld_damp.value = 100
	)
)
createdialog springCtrlPanel

