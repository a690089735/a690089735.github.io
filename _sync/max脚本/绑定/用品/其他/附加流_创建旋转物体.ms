try(destroydialog Rollout_2to1)catch()


fn makeBoundingBox nodeB=
(
	bb = nodeGetBoundingBox nodeB nodeB.transform
	size = (bb[2]-bb[1])
	--in coordsys nodeB (
	b = box width:(size[1]/2) length:(size[2]*1.5) height:(size[3]*1.5) wirecolor:nodeB.wirecolor
	CenterPivot b
	b.transform = nodeB.transform
	b.pivot = nodeB.transform.pos
	b.pos = nodeB.center
-- 	b.name = nodeB.name + "_box"
-- 	b.pivot = nodeB.transform.pos
	convertToPoly(b)
-- 	b.name = uniqueName "skinBox_"
	return b
)

rollout Rollout_2to1 "旋转过渡" width:176 height:152
(
	button btn1 "连续创建过渡旋转" pos:[16,16] width:144 height:24 toolTip:"两两成对,先父后子(A,B;A,B;A,B....)\n连续成对,每两个物体为一组"
	button btn2 "顺序创建过渡旋转" pos:[16,48] width:144 height:24 toolTip:"顺序成对,先父后子(A,B,C,D,E...)\n顺序成对,每个物体和下一个物体为一组."
	button btn3 "分支创建过渡旋转" pos:[16,80] width:144 height:24 toolTip:"逐个成对,先父后子(A,B,B,B....)\n逐个成对,第一个物体与后面的物体逐个为一组"
	button btn4 "创建父级(修复腿轴)" pos:[16,112] width:144 height:24
	on btn1 pressed do--连续成对,每两个物体为一组
	(
		max create mode
		for i = 1 to (selection.count-1) by 2 do
		(
			node1 = selection[i]
			node2 = selection[i+1]
			b = makeBoundingBox node1
			b.parent = node1
			b.transform = node2.transform
			b.rotation.controller = rotation_list ()
			b.rotation.controller.Available.controller = Orientation_Constraint ()
			b.rotation.controller[2].appendTarget node1 50
			b.rotation.controller[2].appendTarget node2 50
			b.name = uniqueName (node2.name+"_rot")
		)
	)
	on btn2 pressed do--顺序成对,每个物体和下一个物体为一组.
	(
		max create mode
		for i = 1 to (selection.count-1) do
		(
			node1 = selection[i]
			node2 = selection[i+1]
			b = makeBoundingBox node1
			b.parent = node1
			b.transform = node2.transform
			b.rotation.controller = rotation_list ()
			b.rotation.controller.Available.controller = Orientation_Constraint ()
			b.rotation.controller[2].appendTarget node1 50
			b.rotation.controller[2].appendTarget node2 50
			b.name = uniqueName (node2.name+"_rot")
		)
	)
	on btn3 pressed do--逐个成对,第一个物体与后面的物体逐个为一组
	(
		max create mode
		node1 = selection[1]
		for i = 2 to selection.count do
		(
			node2 = selection[i]
			b = makeBoundingBox node1
			b.parent = node1
			b.transform = node2.transform
			b.rotation.controller = rotation_list ()
			b.rotation.controller.Available.controller = Orientation_Constraint ()
			b.rotation.controller[2].appendTarget node1 50
			b.rotation.controller[2].appendTarget node2 50
			b.name = uniqueName (node2.name+"_rot")
		)
	)
	on btn4 pressed do
	(

	)
)

createdialog Rollout_2to1 

