try (destroydialog BipedEtrasTool)catch()

rollout BipedEtrasTool "BipedEtrasTool" width:176 height:56
(
	button 'btn_CreateCircle' "创建次级圆环" pos:[8,8] width:72 height:24 toolTip:"給选中的物体创建一个次级圆环" align:#left
	spinner 'spn_CircleR' "半径" pos:[88,12] width:52 height:16 range:[-100,100,2] type:#float scale:0.1 align:#left
	on btn_CreateCircle pressed do
	(
		undo on(
		for i in selection do
		(
			c = Circle radius:spn_CircleR.value pos:i.center name:(uniqueName (i.name + "_S")) wirecolor:brown
			c.parent = i
			c.rotation.controller.value = (quat 0 0.707107 0 0.707107)
		))
	)
	on spn_CircleR changed val do
	(
		for i in selection do
		if classof i == Circle do i.radius = val
	)
)

createdialog BipedEtrasTool

--end