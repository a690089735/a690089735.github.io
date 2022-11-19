/* 按顺序选中上骨骼,下骨骼,上模型,下模型 */

-- fn createYan13JointRig fname= 
-- (
-- 	undo on(
-- 		b1 = selection[1] --原骨骼1
-- 		b2 = selection[2] --原骨骼2
-- 		m1 = selection[3] --原模型1 轴心作为旋转点
-- 		m2 = selection[4] --原模型2
-- 		
-- 		dpos1 = dummy boxsize:[0.3,0.3,0.3] pos:b1.transform.pos
-- 		dpos2 = dummy boxsize:[0.3,0.3,0.3] pos:b2.transform.pos
-- 		dpos3 = dummy boxsize:[0.3,0.3,0.3] pos:b2.children[1].transform.pos
-- 		
-- 		pos1 = dpos1.pos
-- 		pos2 = dpos2.pos
-- 		pos3 = dpos3.pos
-- 		
-- 		--创建子对象虚拟体
-- 		d1 = dummy boxsize:[0.5,0.5,0.5] pos:(pos2 + (pos2 - pos1)) parent:b1 name:(uniquename(Fname+"Pole_"))
-- 		d2 = dummy boxsize:[0.5,0.5,0.5] pos:(pos2 + (pos2 - pos3)) parent:b2 name:(uniquename(Fname+"Pole_"))
-- 		--创建骨骼
-- 		p1 = dummy boxsize:[1,1,1] pos:pos1 name:(uniquename(Fname+"Prt_"))
-- 		p1.parent = b1
-- 		bone1 = BoneSys.createBone pos1 pos2 [-1,0,0]
-- 		bone2 = BoneSys.createBone pos2 pos3 [-1,0,0]
-- 		offset = normalize(pos3 - pos2)
-- 		bone3 = BoneSys.createBone pos3 (pos3+offset) [-1,0,0]
-- 		bone1.width = bone1.height = bone2.width = bone2.height = bone3.width = bone3.height = 1
-- 		bone1.sidefins = bone1.frontfin = bone1.backfin = bone2.sidefins = bone2.frontfin = bone2.backfin = bone3.sidefins = bone3.frontfin = bone3.backfin = false 
-- 		bone3.parent = bone2; bone2.parent = bone1; bone1.parent = p1
-- 		bone1.name = uniquename(Fname+"Bn1_");bone2.name = uniquename(Fname+"Bn2_");bone3.name = uniquename(Fname+"Bn3_")
-- 		--创建IK
-- 		BoneIK = IKSys.ikChain bone1 bone3 "IKHISolver"
-- 		BoneIk.name = uniquename(Fname + "IK_")
-- 		p2 = dummy boxsize:[0.5,0.5,0.5] pos:pos2 name:(uniquename(Fname+"Pole_"))
-- 		BoneIK.transform.controller.VHTarget = p2
-- 		BoneIK.transform.controller.goalSize = 1
-- 		BoneIK.parent = b2
-- 		--绑定IK极点
-- 		ctrl = p2.pos.controller = Position_Constraint ()
-- 		ctrl.appendTarget d1 50
-- 		ctrl.appendTarget d2 50
-- 		--绑定模型
-- 		m1.parent = bone1
-- 		m2.parent = bone2
-- 		--清理场景
-- 		delete #(dpos1,dpos2,dpos3)
-- 	)
-- )
-- createYan13JointRig ("Yan13_" + "AnkleR_")
try (destroydialog Yan13RigCreator)catch()
rollout Yan13RigCreator "Untitled" width:160 height:112
(
	button btn1 "创建虚拟体" pos:[8,32] width:144 height:32
	button btn2 "创建绑定" pos:[8,72] width:144 height:32
	edittext edt1 "" pos:[8,8] width:72 height:16
	edittext edt2 "" pos:[80,8] width:72 height:16
	
	local dpos1;local dpos2;local dpos3;local b1;local b2;local m1;local m2
	
	on Yan13RigCreator open  do
	(
		edt1.text = "Yan13_"
	)
	on btn1 pressed do
	(
		undo on
		(
			b1 = selection[1] --原骨骼1
			b2 = selection[2] --原骨骼2
			m1 = selection[3] --原模型1 轴心作为旋转点
			m2 = selection[4] --原模型2
			
			dpos1 = dummy boxsize:[0.3,0.3,0.3] pos:b1.transform.pos name:"dtemp1"
			dpos2 = dummy boxsize:[0.3,0.3,0.3] pos:b2.transform.pos name:"dtemp2"
			dpos3 = dummy boxsize:[0.3,0.3,0.3] pos:b2.children[1].transform.pos name:"dtemp3"
		)
	)
	on btn2 pressed do
	(
		undo on
		(
			fname = edt1.text + edt2.text
			pos1 = dpos1.pos
			pos2 = dpos2.pos
			pos3 = dpos3.pos
			--创建子对象虚拟体
			d1 = dummy boxsize:[0.5,0.5,0.5] pos:(pos2 + (pos2 - pos1)) parent:b1 name:(uniquename(Fname+"Pole_"))
			d2 = dummy boxsize:[0.5,0.5,0.5] pos:(pos2 + (pos2 - pos3)) parent:b2 name:(uniquename(Fname+"Pole_"))
			--创建骨骼
			p1 = dummy boxsize:[1,1,1] pos:pos1 name:(uniquename(Fname+"Prt_"))
			p1.parent = b1
			bone1 = BoneSys.createBone pos1 pos2 [-1,0,0]
			bone2 = BoneSys.createBone pos2 pos3 [-1,0,0]
			offset = normalize(pos3 - pos2)
			bone3 = BoneSys.createBone pos3 (pos3+offset) [-1,0,0]
			bone1.width = bone1.height = bone2.width = bone2.height = bone3.width = bone3.height = 1
			bone1.sidefins = bone1.frontfin = bone1.backfin = bone2.sidefins = bone2.frontfin = bone2.backfin = bone3.sidefins = bone3.frontfin = bone3.backfin = false 
			bone3.parent = bone2; bone2.parent = bone1; bone1.parent = p1
			bone1.name = uniquename(Fname+"Bn1_");bone2.name = uniquename(Fname+"Bn2_");bone3.name = uniquename(Fname+"Bn3_")
			--创建IK
			BoneIK = IKSys.ikChain bone1 bone3 "IKLimb" --"IKHISolver"
			BoneIk.name = uniquename(Fname + "IK_")
			p2 = dummy boxsize:[0.5,0.5,0.5] pos:pos2 name:(uniquename(Fname+"Pole_"))
			BoneIK.transform.controller.VHTarget = p2
			BoneIK.transform.controller.goalSize = 1
			BoneIK.parent = b2
			--绑定IK极点
			ctrl = p2.pos.controller = Position_Constraint ()
			ctrl.appendTarget d1 50
			ctrl.appendTarget d2 50
			--绑定模型
			m1.parent = bone1
			m2.parent = bone2
			--清理场景
			delete #(dpos1,dpos2,dpos3)
		)
	)
)
createdialog Yan13RigCreator 