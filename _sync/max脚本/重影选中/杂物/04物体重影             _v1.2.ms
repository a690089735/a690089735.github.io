try (destroydialog rollout1)catch()
global set1 = #() --四色重影全局变量

red1 = (color 242 70 70)
yellow1 = (color 255 214 128)
green1 = (color 126 227 126)
blue1 = (color 62 130 255)


fn creatobj color1 text1 = --四色重影函数
	(
	undo on(
		b = box wirecolor:color1
		ConverttoPoly b
		b.visibility = bezier_float()
		b.visibility.controller.value = 0.3
		b.showfrozeningray = b.renderable = b.castShadows = b.receiveshadows = b.applyAtmospherics = b.inheritVisibility = b.primaryVisibility = b.secondaryVisibility = off 
		freeze b
		b.name = text1
		try(
		for i in set1 do
		(
			if superclassof i == GeometryClass do
			(
				if classof i == Biped_Object then 
				(
					i.mat = undefined
					b.EditablePoly.attach i b
				)
				else 
				(j = instance i
				j.mat = undefined
				b.EditablePoly.attach j b)
			)
		)
		for j = 1 to 8 do 
		(
			polyop.deleteVerts b 1
		))catch(messagebox "失败!可能是你选择的物体已经被删除!"
				delete $redobj*
				delete $greenobj*
				delete $blueobj*
				delete $yellowobj*)
	)
	)
rollout rollout1 "四色重影" width:128 height:224
(
	button btn1 "拾取" pos:[8,8] width:72 height:24 toolTip:"拾取物体"
	button btn2 "重置" pos:[80,8] width:40 height:24 toolTip:"重置脚本"
	button btn3 "红色" pos:[48,48] width:72 height:24 toolTip:"创建红色重影"
	button btn4 "删除" pos:[8,48] width:40 height:24 toolTip:"删除红色重影"
	button btn5 "绿色" pos:[48,112] width:72 height:24 toolTip:"创建绿色重影"
	button btn6 "删除" pos:[8,112] width:40 height:24 toolTip:"删除绿色重影"
	button btn7 "蓝色" pos:[48,144] width:72 height:24 toolTip:"创建蓝色重影"
	button btn8 "删除" pos:[8,144] width:40 height:24 toolTip:"删除蓝色重影"
	checkbutton btn9 "显隐" pos:[8,184] width:72 height:24 toolTip:"显示隐藏重影"
	button btn10 "清除" pos:[80,184] width:40 height:24 toolTip:"清除所有重影"
	button btn11 "黄色" pos:[48,80] width:72 height:24 toolTip:"创建黄色重影"
	button btn12 "删除" pos:[8,80] width:40 height:24 toolTip:"删除黄色重影"
	GroupBox grp1 "" pos:[3,32] width:122 height:144


	on btn1 pressed do
	(
		set1 = selection as array
		btn1.caption = set1.count as string
	)
	on btn2 pressed do
	(
		set1 = #()
		btn1.caption = "拾取"
		delete $redobj*
		delete $greenobj*
		delete $greenobj*
	)
	on btn3 pressed do
	(
		delete $redobj*
		creatobj red1 "redobj"
	)
	on btn4 pressed do
		delete $redobj*
	on btn5 pressed do
	(
		delete $greenobj*
		creatobj green1 "greenobj"
	)
	on btn6 pressed do
		delete $greenobj*
	on btn7 pressed do
	(
		delete $blueobj*
		creatobj blue1 "blueobj"
	)
	on btn8 pressed do
		delete $blueobj*
	on btn9 changed state do
	(
		if state then
		(
			hide $redobj*
			hide $greenobj*
			hide $blueobj*
			hide $yellowobj*
		)else
		(
			unhide $redobj*
			unhide $greenobj*
			unhide $blueobj*
			unhide $yellowobj*
		)
	)
	on btn10 pressed do
	(
		delete $redobj*
		delete $greenobj*
		delete $blueobj*
		delete $yellowobj*
	)
	on btn11 pressed do
	(
		delete $yellowobj*
		creatobj yellow1 "yellowobj"
	)
	on btn12 pressed do
	(
		delete $yellowobj*
	)
)
createdialog rollout1