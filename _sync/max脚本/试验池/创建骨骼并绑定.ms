-- 临时,按选中的虚拟体创建骨骼并绑定
-- 1 到 count - 1 做 [1]的位置 [1+1]的位置 [1] 位置约束 , [1+1] 注视约束 [1]上方向. x注视,y上方向
sel = getcurrentselection()
oldbone = undefined
for i = 1 to sel.count - 1 do
(
	local
	p1 = sel[i],
	p2 = sel[i+1],
	bn = BoneSys.createBone p1.transform.pos p2.transform.pos p1.dir
	
	bn.parent = oldbone
	oldbone = bn
	
	ctrl = bn[3][1].controller = Position_Constraint()
	ctrl.appendTarget p1 50.0
	
	ctrl = bn[3][2].controller = LookAt_Constraint()
	ctrl.lookat_vector_length = 0
	ctrl.appendTarget p2 50.0
	ctrl.target_axis = 0
	ctrl.pickUpNode = p1
	ctrl.StoUP_axis = ctrl.upnode_axis = 1
	ctrl.upnode_world = false
)
(
	local
	p = sel[sel.count],
	bn = BoneSys.createBone oldbone.transform.pos ([10,0,0]*oldbone.transform) oldbone.dir
	bn.parent = oldbone
	ctrl = bn[3][1].controller = Position_Constraint()
	ctrl.appendTarget p 50.0
)
-- $.length = 50 --调整骨骼长度
