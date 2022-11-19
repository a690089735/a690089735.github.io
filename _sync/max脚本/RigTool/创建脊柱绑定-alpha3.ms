fn RigSpine BList SpineName:"" rootCtrl: rootBone: = --传入一组骨骼,不要末端,最后一节骨骼为胸骨,一定要是骨骼,才有length的属性,这部分可以考虑用首尾距离来取代更好,或用贝塞尔长度.
	--必须传入RootBone,需要用其储存实例控制器
(
	--依赖
	fn getpos t P0 P1 P2 P3 = (rt = 1-t;rt^3*P0 + 3*rt^2*t*P1 + 3*rt*t^2*P2 + t^3*P3) --3次贝塞尔公式
	fn getlen points = (r = 0; for i = 1 to points.count-1 do r+= distance points[i] points[i+1])
	--初始设定
	local 
		fkColor = red,ikColor = yellow,
		aSize = 0, --大控制器尺寸
		bSize = 0, --骨骼尺寸
		cSize = 0, --小控制器尺寸
		dSize = 0, --辅助点尺寸
		mbone = BList[(BList.count-1)/2+1],
		fcmtransform = mbone.transform,
		rigPrt = rootCtrl, --绑定的父物体
		rigBones = #(), --绑定用到的骨骼
		oldbone = undefined
	for b in BList do aSize += b.length --一定要是骨骼,才有length的属性,这部分可以考虑用首尾距离来取代更好,或用贝塞尔长度.
	aSize = aSize * 0.25 --由全长得出
	bSize = aSize * 0.5
	cSize = aSize * 0.9
	dsize = aSize * 0.1
	if mod BList.count 2 == 0 do fcmtransform.translation = mbone.center --第二个fk控制器的变换,骨骼数量是双数,则腰部骨骼是单数,则把控制器放在中心
	--复制骨骼--应该新建骨骼链而不是复制骨骼
	rigBones = for i = 1 to BList.count collect
	(
		local 
		lb = BList[i],
		b =
		if i < BList.count then
		(
			BoneSys.createBone lb.pos BList[i+1].pos lb.dir
			
		)else 
		(
			local
			pos2 = [lb.length,0,0]*lb.transform,
			tb = BoneSys.createBone lb.pos pos2 lb.dir,
			endbone = BoneSys.createBone pos2 ([(lb.width+lb.height)*0.5,0,0]*lb.transform) lb.dir --创建末端骨骼
			endbone.name = SpineName + "_Bn_end"
			endbone.width = lb.width
			endbone.height = lb.height
			endbone.parent = tb
			Bone2Box endbone
			tb
		)
		b.name = SpineName + "_Bn_"+ i as string
		b.width = lb.width
		b.height = lb.height
		b.parent = oldbone
		Bone2Box b
		oldbone = b
	)
	-- 	rigbones[1].parent = --还没设置父物体,以后再说
	--创建控制器
	fkCtrls = #( 
		fca = Ngon name:(SpineName + "_FKCtrlA") radius:aSize rotation:rigBones[1].rotation pos:rigBones[1].center wirecolor:fkColor, --他的父级还没指定
		fcm = Ngon name:(SpineName + "_FKCtrlM") radius:cSize transform:fcmtransform wirecolor:fkColor parent:fca,
		Ngon name:(SpineName + "_FKCtrlB") radius:aSize transform:rigBones[rigBones.count].transform wirecolor:fkColor parent:fcm
	)
	if isValidNode rigPrt then fkCtrls[1].parent = rigPrt else rigPrt = fkCtrls[1]--设置主要父级
	ikCtrls = #(
		circle name:(SpineName + "_IKCtrlA") radius:cSize rotation:rigBones[1].rotation pos:rigBones[1].center wirecolor:ikColor parent:fkCtrls[1], 
		circle name:(SpineName + "_IKCtrlB") radius:cSize transform:rigBones[rigBones.count].transform wirecolor:ikColor parent:fkCtrls[3]
	)
	for c in ikCtrls + fkCtrls do c.objectOffsetRot = (quat 0 -0.707107 0 0.707107) --更新方向
	
	local
		BXoffset = (distance rigBones[1] rigBones[rigBones.count]) * 0.3333, --三分之一是最好的,一半会有中段挤压效果
		CXoffset = distance rigBones[1].center rigBones[1].pos,
		P0 = rigBones[1].pos,P1 = [BXoffset,0,0] * rigBones[1].transform,
		P2 = [-BXoffset,0,0] * rigBones[rigBones.count].transform,P3 = rigBones[rigBones.count].pos,
		points = for t = 0 to 1 by 0.01 collect getpos t P0 P1 P2 P3, --算首尾,一共101个点
		pathPoints = #(point name:(SpineName + "_PP"+ rigBones.count as string) transform:fkCtrls[fkCtrls.count].transform parent:ikCtrls[ikCtrls.count] wirecolor:gray),--需要设置尺寸和样式,现在为了方便测试,没有设置,还要记得把变换控制器变成0脚本,以免误移动并略微提高性能
-- 		for p in points do point pos:p wirecolor:red --测试用,批量创建点
		oldp = pathPoints[1]
	pathPoints += 
	for i = rigBones.count-1 to 2 by -1 collect
	(
		local 
		b = rigBones[i],
		pos = b.pos,
		tpl = for p in points collect distance pos p,
		id = finditem tpl (amin tpl), --找最近的id
		p = point name:(SpineName + "_PP" + i as string) pos:points[id] parent:fkCtrls[1] wirecolor:gray
		ctrl = p[3][1].controller = position_script()
		ctrl.AddNode "N0" ikCtrls[1]; ctrl.AddNode "N1" ikCtrls[2];ctrl.AddNode "Prt" fkCtrls[1]
		scriptstr = stringstream ""
		t = (id-1)/100.0
		rt = 1 - t
	--	演变过程在Alpha1中
		format "(%*([%,0,0]*N0.transform)+%*([%,0,0]*N0.transform)+%*([%,0,0]*N1.transform)+%*N1.pos)*inverse Prt.transform" (rt^3) (-CXoffset) (3*rt^2*t) (BXoffset-CXoffset) (3*rt*t^2) (-BXoffset) (t^3) to:scriptstr --添加父级
		ctrl.script = scriptstr as string
		p
	)
	append pathPoints (pp = point name:(SpineName + "_PP1") rotation:ikCtrls[1].rotation pos:([-CXoffset,0,0]*fkCtrls[1].transform) wirecolor:gray)


--创建约束
	
)
