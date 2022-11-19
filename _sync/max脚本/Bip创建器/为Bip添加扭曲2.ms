fn align_X_transfrom t tt:(matrix3 1) pos:[0,0,0] =
(
	local
	deg = amax #(acos (dot t[1] tt[1]), 0),
	axis = normalize (cross tt[1] t[1])
	translate (rotate (Matrix3 t[1] t[2] t[3] [0,0,0]) (quat deg axis)) pos
)

fn add_twist_to_Clavicle_UpperArm Clavicle UpperArm links:1 =
undo "add_twist_to_Clavicle_UpperArm" on(
	local
-- 	len1 = distance Clavicle UpperArm,
	len2 = distance UpperArm UpperArm.children[1],
-- 	d1 = dummy boxsize:([len1,len1,len1]*.1) transform:Clavicle.transform parent:Clavicle,
	d1 = dummy name:(UpperArm.name + " t1") boxsize:([len2,len2,len2]*.1) transform:(align_X_transfrom UpperArm.transform tt:Clavicle.transform pos:UpperArm.transform.pos) parent:UpperArm,
	d2 = dummy name:(UpperArm.name + " t2") boxsize:([len2,len2,len2]*.1) pos:UpperArm.children[1].transform.pos transform:UpperArm.transform parent:UpperArm,
	len = len2 / (links+1),
	width = len2*.5,
	twist_bone_1 = BoneSys.createBone UpperArm.transform.pos ([len,0,0]*UpperArm.transform) UpperArm.dir
	
	twist_bone_1.width = twist_bone_1.height = width
	twist_bone_1.parent = UpperArm

-- 	octrl = Orientation_Constraint relative:on
-- 	octrl.appendTarget Clavicle 100
-- 	d1[3][2].controller = octrl
-- 	d1[3][2].controller = Orientation_Constraint()
-- 	d1[3][2].controller.relative = on
-- 	d1[3][2].controller.appendTarget Clavicle 100
	--这一部分始终有问题,需要手动设置方向约束,在最后选择此物体

	local
	tctrl = twist_bone_1[3].controller = transform_script()
-- 	tctrl.AddNode "d0" d0
-- 	tctrl.AddNode "d1" d1
	tctrl.AddTarget "t1" d1[3]
	tctrl.AddTarget "t2" d2[3]
	tctrl.script = "
deg = amax #(acos (dot t1[1] t2[1]), 0)
axis = normalize (cross t1[1] t2[1])
rotate t1 (quat deg axis)
"
-- t0 = d0.transform
-- t1 = d1.transform
-- tn = Matrix3 t0[1] t0[2] t0[3] [0,0,0]
-- deg = amax #(acos (dot t1[1] t0[1]), 0)
-- axis = normalize (cross t1[1] t0[1])
-- tm = translate (rotate tn (quat deg axis)) t0[4]

-- 	pctrl = twist_bone_1[3][1].controller = Position_Constraint(),
-- 	rctrl = twist_bone_1[3][2].controller = rotation_script()
-- 	
-- 	pctrl.appendTarget d0 100
-- 	
-- 	rctrl.AddNode "d0" d0 
-- 	rctrl.AddNode "d1" d1 
-- 	rctrl.script = "quat 0 0 0 1"
)
add_twist_to_Clavicle_UpperArm $[1] $[2]