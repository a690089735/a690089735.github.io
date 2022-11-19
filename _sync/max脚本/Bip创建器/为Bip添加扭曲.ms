fn align_X_transfrom t tt:(matrix3 1) =
(
	local
	deg = amax #(acos (dot t[1] tt[1]), 0),
	axis = normalize (cross tt[1] t[1])
	translate (rotate (Matrix3 t[1] t[2] t[3] [0,0,0]) (quat deg axis)) t[4]
)

fn add_twist_to_Clavicle_UpperArm Clavicle UpperArm links:2 =
undo "add_twist_to_Clavicle_UpperArm" on(
	local
-- 	len1 = distance Clavicle UpperArm,
	len2 = distance UpperArm UpperArm.children[1],
-- 	d1 = dummy boxsize:([len1,len1,len1]*.1) transform:Clavicle.transform parent:Clavicle,
	d1 = dummy name:(UpperArm.name + " t1") boxsize:([len2,len2,len2]*.1) transform:(align_X_transfrom UpperArm.transform tt:Clavicle.transform) parent:UpperArm,
	d2 = dummy name:(UpperArm.name + " t2") boxsize:([len2,len2,len2]*.1) pos:UpperArm.children[1].transform.pos transform:UpperArm.transform parent:UpperArm,
	len = len2 / links,
	seg = 100.0 / links,
	width = len2*.5,
	twist_bone_1 = BoneSys.createBone UpperArm.transform.pos ([len,0,0]*UpperArm.transform) UpperArm.dir
	
	twist_bone_1.name = UpperArm.name + " b1"
	twist_bone_1.width = twist_bone_1.height = width
	twist_bone_1.parent = UpperArm

	d1[3][2].controller = Orientation_Constraint relative:true
	d1[3][2].controller.appendTarget Clavicle 100

	local
	tctrl = twist_bone_1[3].controller = transform_script()
	tctrl.AddNode "d1" d1
	tctrl.AddNode "d2" d2
	tctrl.AddNode "d0" UpperArm
	tctrl.script = "
Matrix3 1
t1 = d1.transform
t2 = d2.transform
tm = Matrix3 t1[1] t1[2] t1[3] [0,0,0]
deg = amax #(acos (dot t2[1] t1[1]), 0)
axis = normalize (cross t2[1] t1[1])
(translate (rotate tm (quat deg axis)) t1[4]) * inverse d0.transform
"
	
	if links > 1 do
	(
		local
		twist_bone_e = point name:(UpperArm.name + " be") wirecolor:twist_bone_1.wirecolor pos:((d1.transform.pos + d2.transform.pos) * .5) parent:UpperArm,
		pc = twist_bone_e[3][1].controller = Position_Constraint(),
		rc = twist_bone_e[3][2].controller = Orientation_Constraint()
		
		pc.appendTarget d1 (100-seg)
		pc.appendTarget d2 seg
		rc.appendTarget d2 50
		twist_bone_e.baseobject = twist_bone_1.baseobject
		
		
	)

)
add_twist_to_Clavicle_UpperArm $[1] $[2]