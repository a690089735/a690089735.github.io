try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:104 height:80
(
	spinner spn1 "宽度" pos:[8,8] width:88 height:16 range:[-1000,10000,1] type:#float scale:0.01
	spinner spn2 "高度" pos:[8,32] width:88 height:16 range:[-1000,10000,1] type:#float scale:0.01
	spinner spn3 "长度" pos:[8,56] width:88 height:16 range:[-1000,10000,1] type:#float scale:0.01
	on spn1 changed val do
	(
		for i in selection do try(i.width = val)catch()
	)
	on spn2 changed val do
	(
		for i in selection do try(i.height = val)catch()
	)
	on spn3 changed val do
	(
		for i in selection do try(i.length = val)catch()
	)
)
createdialog unnamedRollout

-- for i in selection do i.width = i.height = 0.2
-- for i in selection do if i.children.count == 0 then i.length = 0.2 else i.length = distance i i.children[1]
-- for i in selection where i.children.count > 0 do i.width = i.height = 0.2

sel = getcurrentselection() 
dir = cross (normalize(sel[3].transform.pos - sel[2].transform.pos)) (normalize(sel[1].transform.pos - sel[2].transform.pos))
ob = undefined
for i = 1 to sel.count-1 do 
(
	b = BoneSys.createBone sel[i].transform.pos sel[i+1].transform.pos dir
	b.parent = ob
	ob = b
)

-- 普通42

fn cul_angle_a a b c = --求边A的对角角度,
(
	acos((b^2+c^2-a^2)/(2*b*c))
)
-- cul_angle_a 1.06341 0.950862 0.258189 --在求IK时,a是IK到顶点的距离,b是第一节链的长度,c是第二节链的长度
fn cul_ik_offset bone1_vec ik_vec = --根据IK矢量求首骨骼偏移.
(
	v1 = normalize bone1_vec
	v2 = normalize ik_vec
	print (acos(dot v1 v2))
	print (normalize(cross v1 v2))
	quat (acos(dot v1 v2)) (normalize(cross v1 v2))
)
cul_ik_offset $[1].transform[1] $[2].transform[1]