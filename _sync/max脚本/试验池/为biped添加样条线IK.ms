--为bip添加样条线IK
fn BipedSpine2SplineIK COMobj:selection[1] = 
(
	--传入一个bipcom
	--运行前自己手动拉直一下Bip
	--获取BipSpine和neck+head
	local temp
-- 	SpineBones = for i = 1 to 20 where (temp = biped.getNode COMobj #spine link:i;temp != undefined) collect temp
	SpineBones = for i = 1 to COMobj.controller.spineLinks collect biped.getNode COMobj #spine link:i
	NeckBones = for i = 1 to COMobj.controller.neckLinks collect biped.getNode COMobj #neck link:i
	HeadBone = biped.getNode COMobj #head
-- 	Headnub = for c in HeadBone.children where classof c.controller == BipSlave_Control do exit with c
	
	--创建骨骼
	local prt,objs = (#(COMobj)+SpineBones+NeckBones+#(HeadBone)),
	DummyList = for o in objs collect
	(
		d = dummy transform:o.transform boxsize:[1,1,1] name:(o.name+"_DBox")
		d.parent = prt
		prt = d
		d
	)
	--创建末端骨骼
	--创建样条线
	local sD = DummyList[1],eD = DummyList[DummyList.count],pos1 = sD.transform.pos, pos3 = eD.transform.pos, pos2 = (pos1 + pos3)/2
	l = line wirecolor:red name:(uniqueName("SPIK_Spl")) transform:COMobj.transform
	addnewSpline l
	addKnot l 1 #corner #curve pos1
	addKnot l 1 #corner #curve pos2
	addKnot l 1 #corner #curve pos3
	updateShape l
	for i = 1 to 3 do setKnotType l 1 i #bezier
	updateShape l
	--骨骼设置样条线IK
	
	IKModifier = Spline_IK_Control linktypes:2 helper_centermarker:false helper_axistripod:false helper_cross:false box:true helper_size:10
	addModifier l IKModifier
	IKModifier.createHelper (numknots l)
	IKModifier.helper_size = (distance sD eD)*0.33
	sIK	= IKSys.ikChain sD eD "SplineIKSolver"
	sIK.transform.controller.pickShape = l
	ctrl = sD[3][4][1].controller = position_list()
	ctrl = ctrl.Available.controller = Path_Constraint()
	deleteKeys ctrl.percent.keys #allKeys
	ctrl.appendTarget l 50.0
	ctrl.percent = 0
	--Bip约束到新建骨骼
	ctrl = COMobj.controller[2][1][1][1].controller = Position_Constraint()
	ctrl.appendTarget sD 50.0
	ctrl = COMobj.controller[3][1][1][1].controller = Orientation_Constraint()
	ctrl.appendTarget sD 50.0
	
	ctrl = eD[3][4][2].controller = Orientation_Constraint()
	ctrl.appendTarget IKModifier.helper_list[IKModifier.helper_list.count] 50.0
	ctrl.relative = on
	for i = 2 to objs.count do
	(
		o = objs[i]
		ctrl = o.controller[1][2][1].controller = Orientation_Constraint()
		ctrl.appendTarget DummyList[i] 50.0
	)
	
	--测试
	#(SpineBones,NeckBones,HeadBone)--,Headnub)
)
print(BipedSpine2SplineIK())
	
	--.shortThumb
	--$.controller.bendLinksMode --没用??
	--<biped_ctrl>.enableSubAnims Boolean Default: True 
	--<biped_ctrl>.manipSubAnims Boolean Default: False 
	--$.controller.bendLinksMode
	--$.controller.twistLinksMode
	--$.controller.twistIndMode
	--$.controller.smoothtwistMode
	
	
	