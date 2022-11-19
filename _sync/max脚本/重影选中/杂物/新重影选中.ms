try(destroydialog rollout1)catch()

set1 = #()

fn creatobj color1 text1 = 
	(
		b = box wirecolor:color1
		ConverttoPoly b
		b.visibility = bezier_float()
		b.visibility.controller.value = 0.3
		b.showfrozeningray = b.renderable = b.castShadows = b.receiveshadows = b.applyAtmospherics = b.inheritVisibility = b.primaryVisibility = b.secondaryVisibility = off 
		freeze b
		b.name = text1
		
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
				(j = snapshot i
				j.mat = undefined
				b.EditablePoly.attach j b)
			)
		)
		for j = 1 to 8 do 
		(
			polyop.deleteVerts b 1
		)
	)
	

rollout rollout1 "重影选中" width:168 height:236
(
	button 'btn1' "拾取" pos:[16,16] width:80 height:28 toolTip:"拾取物体" align:#left
	button 'btn2' "重置" pos:[112,16] width:40 height:28 toolTip:"重置脚本" align:#left
	button 'btn3' "红色" pos:[16,80] width:80 height:28 toolTip:"创建红色重影" align:#left
	button 'btn4' "删除" pos:[112,80] width:40 height:28 toolTip:"删除红色重影" align:#left
	button 'btn5' "绿色" pos:[16,112] width:80 height:28 toolTip:"创建绿色重影" align:#left
	button 'btn6' "删除" pos:[112,112] width:40 height:28 toolTip:"删除绿色重影" align:#left
	button 'btn7' "蓝色" pos:[16,144] width:80 height:28 toolTip:"创建蓝色重影" align:#left
	button 'btn8' "删除" pos:[112,144] width:40 height:28 toolTip:"删除蓝色重影" align:#left
	checkbutton 'btn9' "显隐" pos:[16,176] width:80 height:28 toolTip:"显示隐藏重影" align:#left
	button 'btn10' "清除" pos:[112,176] width:40 height:28 toolTip:"清除所有重影" align:#left
	on btn1 pressed do
	(
		set1 = selection as array
		btn1.caption = set1.count as string
	)
	on btn2 pressed do
	(
		set1 = #()
		btn1.caption = "拾取"
		delete $redobj_*
		delete $greenobj_*
		delete $greenobj_*
	)
	on btn3 pressed do
	(
		delete $redobj_*
		creatobj red "redobj_"
	)
	on btn4 pressed do
		delete $redobj_*
	on btn5 pressed do
	(
		delete $greenobj_*
		creatobj green "greenobj_"
	)
	on btn6 pressed do
		delete $greenobj_*
	on btn7 pressed do
	(
		delete $blueobj_*
		creatobj blue "blueobj_"
	)
	on btn8 pressed do
		delete $blueobj_*
	on btn9 changed state do
	(
		if state then
		(
			hide $redobj_*
			hide $greenobj_*
			hide $blueobj_*
		)else
		(
			unhide $redobj_*
			unhide $greenobj_*
			unhide $blueobj_*
		)
	)
	on btn10 pressed do
	(
		delete $redobj_*
		delete $greenobj_*
		delete $blueobj_*
	)
)

--try(CloseRolloutFloater theNewFloater) catch()
--theNewFloater = newRolloutFloater "脚本" 183 207
--addRollout rollout1 theNewFloater
createdialog rollout1
