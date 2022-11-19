--贝塞尔测试

delete 

--公式 
--B(t) = (1-t)^3*P0 + 3(1-t)^2t*P1 + 3(1-t)*t^2*P2 + t^3 * P3 , 0 <= t <= 1

P0 = $P0.pos; P1 = $P1.pos; P2 = $P2.pos; P3 = $P3.pos

-- t = 0.5

-- (1-t)^3*P0 + 3*(1-t)^2*t*P1 + 3*(1-t)*t^2*P2 + t^3 * P3

-- for t = 0 to 1 by 0.1 do
-- (
-- 	point pos:((1-t)^3*P0 + 3*(1-t)^2*t*P1 + 3*(1-t)*t^2*P2 + t^3 * P3)
-- )

oldp = undefined
undo on(
	plist = for t = 1 to 0 by -0.1 collect
	(
		rt = 1-t
		p = point pos:(rt^3*P0 + 3*rt^2*t*P1 + 3*rt*t^2*P2 + t^3*P3) parent:$P1
		ctrl = p[3][1].controller = position_script()
		ctrl.AddNode "P0" $P0; ctrl.AddNode "P1" $P1; ctrl.AddNode "P2" $P2; ctrl.AddNode "P3" $P3
		ctrl.script = "(" + rt as string + "^3*P0.pos + 3*"+rt as string+"^2*"+t as string+"*P1.pos + 3*"+rt as string+"*"+t as string+"^2*P2.pos + "+t as string+"^3*P3.pos) * inverse P1.transform"
		ctrl = p[3][2].controller = rotation_list()
		ctrl[1].controller = rotation_script()
		ctrl[2].controller = euler_xyz()
		p
	)
	for i = 2 to plist.count - 1 do
	(
-- 		ctrl = plist[i][3][2][1].controller --rotation_script()
-- 		ctrl.AddNode "Self" plist[i]
-- 		ctrl.AddNode "Look" plist[i+1]
-- 		ctrl.AddNode "Parent" plist[i-1]
-- 		ctrl.AddTarget "RotX" plist[i-1][3][2][2][1] --euler_xyz().x
-- 		ctrl.script = "
-- 		vector = Look.pos - Self.pos
-- 		axis = normalize(cross vector [1,0,0])
-- 		angle = acos (normalize vector).x
-- 		(quat RotX [1,0,0]) * (quat angle axis) * Parent.transform.rotation
-- 	"
		ctrl = plist[i][3][2][1].controller --rotation_script()
		ctrl.AddObject "posThisCtrl" plist[i][3][1].controller --euler_xyz().x
		ctrl.AddObject "posTargetCtrl" plist[i+1][3][1].controller
-- 		ctrl.AddNode "Self" plist[i]
-- 		ctrl.AddNode "Look" plist[i+1]
		ctrl.AddNode "nodeParent" plist[i-1]
		ctrl.AddTarget "RotX" plist[i-1][3][2][2][1] --euler_xyz().x
		ctrl.script = "
		posThis=posThisCtrl.value*inverse nodeParent.transform
		posTarget=posTargetCtrl.value*inverse nodeParent.transform
		vector = posTarget - posThis
		axis = normalize(cross vector [1,0,0])
		angle = acos (normalize vector).x
		(quat RotX [1,0,0]) * (quat angle axis) * nodeParent.transform.rotation
	"
	)
)

--创建对照组,路径约束的方式,效率更低,实验组1000组绑定,每秒3-5,平均4帧,对照组100组,每秒1帧,最大不超过1.029,造成缓慢的原因,推测是场景多一个样条线物体,且路径约束有更多功能和选项.
-- L = $
-- for t = 0 to 1 by 0.1 do
-- (
-- 	p = point pos:(lengthInterp L t)
-- 	ctrl = p[3][1].controller = Path_Constraint()
-- 	ctrl.appendTarget L 50
-- 	ctrl.percent = (t*100)
-- 	deleteKeys ctrl.percent.keys #allKeys
-- )