--创建脊柱绑定,无需末端骨骼
(
-- 	delete $_spl
-- 	delete helpers
-- 	delete shapes
)
fn RigSpine BList SpineName:"" rootCtrl:undefined = 
(
	--初始设定
	local 
		fkColor = red,ikColor = yellow,
		aSize = 0,
		mbone = BList[(BList.count-1)/2+1],
		fcmtransform = mbone.transform
	for b in BList do aSize += b.length
	aSize = aSize / 4
	if mod BList.count 2 == 0 do fcmtransform.translation = mbone.center --第二个fk控制器的变换,骨骼数量是双数,则腰部骨骼是单数,则把控制器放在中心
	--复制骨骼
	local rigBones
	maxOps.cloneNodes BList newnodes:&rigBones --在下边顺便命了名
	--创建控制器
	fkCtrls = #( 
		fca = Ngon name:(SpineName + "_FKCtrlA") radius:aSize rotation:rigBones[1].rotation pos:rigBones[1].center wirecolor:fkColor, 
		fcm = Ngon name:(SpineName + "_FKCtrlM") radius:(aSize*0.9) transform:fcmtransform wirecolor:fkColor parent:fca,
		Ngon name:(SpineName + "_FKCtrlB") radius:aSize transform:rigBones[rigBones.count].transform wirecolor:fkColor parent:fcm
	)
	if isValidNode rootCtrl do fkCtrls[1].parent = rootCtrl
	ikCtrls = #(
		circle name:(SpineName + "_IKCtrlA") radius:(aSize*0.9) rotation:rigBones[1].rotation pos:rigBones[1].center wirecolor:ikColor parent:fkCtrls[1], 
		circle name:(SpineName + "_IKCtrlB") radius:(aSize*0.9) transform:rigBones[rigBones.count].transform wirecolor:ikColor parent:fkCtrls[3]
	)
	for c in ikCtrls + fkCtrls do c.objectOffsetRot = (quat 0 -0.707107 0 0.707107) --更新方向
	
	--创建线条并控制
-- 	L = line transform:rigBones[1].transform name:(SpineName + "_Spl") parent:fkCtrls[1]
-- 	addNewSpline L
-- 	addKnot L 1 #corner #curve rigBones[1].pos
-- 	addKnot L 1 #corner #curve rigBones[rigBones.count].pos
-- 	updateShape L --必须放在这里,先刷新,不然下面的手柄会位置不对
-- 	setKnotType L 1 1 #bezier
-- 	setKnotType L 1 2 #bezier
	BXoffset = (distance rigBones[1] rigBones[rigBones.count])/2
	CXoffset = distance rigBones[1].center rigBones[1].pos
-- 	print rigBones[rigBones.count].center
-- 	print rigBones[rigBones.count].transform.pos
-- 	print CXoffset
-- 	setOutVec L 1 1 ([Xoffset, 0, 0] * rigBones[1].transform)
-- 	setInVec L 1 2 ([-Xoffset, 0, 0] * rigBones[rigBones.count].transform)
-- 	updateShape L
	--旧的使用样条线的方法
-- 	animateVertex L #all
-- 	base = L.baseobject[L.baseobject.numSubs]
-- 	for i = 1 to 6 do
-- 	(
-- 		ctrl = base[i].controller = point3_script()
-- 		ctrl.AddNode "Ctrl" (if i < 4 then ikCtrls[1] else ikCtrls[2])
-- 		ctrl.AddNode "Owner" L
-- 		ctrl.script = case of --回头记得把1和2,5和6的控制器实例化
-- 		(
-- 			(i < 3) : "[-"+CXoffset as string+", 0, 0] * (Ctrl.transform * inverse Owner.transform)"
-- 			(i == 3) : "["+(BXoffset-CXoffset) as string+", 0, 0] * (Ctrl.transform * inverse Owner.transform)"
-- 			(i == 4) : "[-"+BXoffset as string+", 0, 0] * (Ctrl.transform * inverse Owner.transform)"
-- 			default : "Ctrl.transform.pos * inverse Owner.transform"
-- 		)
-- 		ctrl.ThrowOnError = false
-- 	)
-- 	
-- 	for i = 1 to 6 do
-- 	(
-- 		ctrl = base[i].controller = point3_script()
-- 		ctrl.AddNode "Ctrl" (if i < 4 then ikCtrls[1] else ikCtrls[2])
-- 		ctrl.AddNode "Owner" L
-- 		ctrl.script = case of --回头记得把1和2,5和6的控制器实例化
-- 		(
-- 			(i < 3) : "[-"+CXoffset as string+", 0, 0] * (Ctrl.transform * inverse Owner.transform)"
-- 			(i == 3) : "["+(BXoffset-CXoffset) as string+", 0, 0] * (Ctrl.transform * inverse Owner.transform)"
-- 			(i == 4) : "[-"+BXoffset as string+", 0, 0] * (Ctrl.transform * inverse Owner.transform)"
-- 			default : "Ctrl.transform.pos * inverse Owner.transform"
-- 		)
-- 		ctrl.ThrowOnError = false
-- 	)
-- 	
-- 	updateShape L
	
--下面是Sskin方案,但是Skin方式有很多不足,比如效率问题,刷新问题,重开文件的兼容问题.
-- 	sk = skin()
-- 	select L
-- 	addmodifier L sk
-- 	setCommandPanelTaskMode #modify
-- 	td = dummy()
-- 	tbase = ikCtrls[1].baseobject;ikCtrls[1].baseobject = td;skinOps.addbone sk ikCtrls[1] 0;ikCtrls[1].baseobject = tbase
-- 	tbase = ikCtrls[2].baseobject;ikCtrls[2].baseobject = td;skinOps.addbone sk ikCtrls[2] 0;ikCtrls[2].baseobject = tbase
-- 	classof L --要有这句才能正常刷新
-- 	for i = 1 to 3 do (skinOps.SetVertexWeights sk i 1 1)
-- 	for i = 4 to 6 do (skinOps.SetVertexWeights sk i 2 1)
	
	--animateVertex <shape> <vertex_spec> or #all
	--$Line001.baseobject[$Line001.baseobject.numSubs][1].controller
--	新的创建路径约束点
	P0 = rigBones[1].pos;P1 = [BXoffset,0,0] * rigBones[1].transform
	P2 = [-BXoffset,0,0] * rigBones[rigBones.count].transform;P3 = rigBones[rigBones.count].pos
-- 	P0=[-CXoffset,0,0]*ikCtrls[1].transform;P1=[BXoffset-CXoffset,0,0]*ikCtrls[1].transform;P2=[-BXoffset,0,0]*ikCtrls[2].transform;P3=ikCtrls[2].pos
-- 	point pos:p0
-- 	point pos:p1
-- 	point pos:p2
-- 	point pos:p3
	fn getpos t = (rt = 1-t;rt^3*P0 + 3*rt^2*t*P1 + 3*rt*t^2*P2 + t^3*P3)
	
	points = for t = 0 to 1 by 0.01 collect getpos t --算首尾,一共101个点
-- 	for p in points do point pos:p wirecolor:red --测试用,批量创建点
	for i = 2 to rigBones.count-1 do
	(
		prt = if rootCtrl == undefined then fkCtrls[1] else rootCtrl
		pos = rigBones[i].pos
		tpl = for p in points collect distance pos p
		id = finditem tpl (amin tpl) --找最近的id
		p = point pos:points[id] parent:prt
		ctrl = p[3][1].controller = position_script()
		ctrl.AddNode "N0" ikCtrls[1]; ctrl.AddNode "N1" ikCtrls[2];ctrl.AddNode "Prt" prt
		scriptstr = stringstream ""
		t = (id-1)/100.0
		rt = 1 - t
-- 		format "P0=[%,0,0]*N0.transform;P1=[%,0,0]*N0.transform;P2=[%,0,0]*N1.transform;P3=N1.pos\n%^3*P0 + 3*%^2*%*P1 + 3*%*%^2*P2 + %^3*P3" (-CXoffset) (BXoffset-CXoffset) (-BXoffset) rt rt t rt t t to:scriptstr
-- 		format "P0=[%,0,0]*N0.transform;P1=[%,0,0]*N0.transform;P2=[%,0,0]*N1.transform;P3=N1.pos\n%*P0 + %*P1 + %*P2 + %*P3" (-CXoffset) (BXoffset-CXoffset) (-BXoffset) (rt^3) (3*rt^2*t) (3*rt*t^2) (t^3) to:scriptstr --进一步优化
-- 		format "%*([%,0,0]*N0.transform) + %*([%,0,0]*N0.transform) + %*([%,0,0]*N1.transform) + %*N1.pos" (rt^3) (-CXoffset) (3*rt^2*t) (BXoffset-CXoffset) (3*rt*t^2) (-BXoffset) (t^3) to:scriptstr --更进一步优化
		format "(%*([%,0,0]*N0.transform)+%*([%,0,0]*N0.transform)+%*([%,0,0]*N1.transform)+%*N1.pos)*inverse Prt.transform" (rt^3) (-CXoffset) (3*rt^2*t) (BXoffset-CXoffset) (3*rt*t^2) (-BXoffset) (t^3) to:scriptstr --添加父级
		ctrl.script = scriptstr as string
	)
-- 	创建路径约束点
-- 	points = for i = 0.01 to 0.99 by 0.01 collect lengthInterp L i --取出样条线上99个点,看看哪个最近
-- 	for i = 2 to rigBones.count-1 do
-- 	(
-- 		pos = rigBones[i].pos
-- 		tpl = for p in points collect distance pos p
-- 		point pos:points[finditem tpl (amin tpl)]
-- 	)
--	创建骨骼点
-- 	i = 0
-- 	BPoints = for b in rigBones collect
-- 	(
-- 		i += 1
-- 		rigBones[i].name = (SpineName + "Bn_"+ i as string) --顺便命个名
-- 		dsize = aSize*0.1
-- 		dummy name:(SpineName + "Pt_"+ i as string) boxsize:[dsize,dsize,dsize] transform:b.transform
-- 	)
--	创建末端骨骼

--创建约束
	
)
RigSpine (getcurrentselection())
	
	
