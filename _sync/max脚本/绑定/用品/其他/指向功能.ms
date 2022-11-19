--可能有一些情况不能正确计算

fn PointTo node1 node2 Axis:0 HoldAxis:2 = --node1指向node2,注意,Axis和Hold不能一样:0:x,1:y,2:z
(
	tm = ExposeTm displayExposedVals:off useParent:off --露出变换
	lp = point transform:node1.transform
	ctrl = lp[3][2].controller = LookAt_Constraint() --这没加node2
	ctrl.appendTarget node2 50.0
	ctrl.target_axis = Axis
	ctrl.upnode_axis = HoldAxis
	ctrl.StoUP_axis = HoldAxis
	
	tm.exposeNode = lp
	tm.localReferenceNode = node1
	
	case HoldAxis of
	(
		0 : node1.transform = (rotateXmatrix tm[4][HoldAxis + 2].value) * node1.transform
		1 : node1.transform = (rotateYmatrix tm[4][HoldAxis + 2].value) * node1.transform
		2 : node1.transform = (rotateZmatrix tm[4][HoldAxis + 2].value) * node1.transform
	)
	
	delete #(tm,lp)

)
	
PointTo $[1] $[2] Axis:0 HoldAxis:1

