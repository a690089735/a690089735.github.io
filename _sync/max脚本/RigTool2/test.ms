filein "杂项函数.ms"
filein "创建控制图形.ms"
filein "颜色定义.ms"
clearlistener()

fn rig_4seg_leg tags rigname:"tst" partname:"_leg" rigparent: rigroot: = --tags共9个标记点
(
-- 	setInheritanceFlags <node> (#all|#none| <bitarray>) keepPos:<boolean>-- mapped 
-- 	setTransformLockFlags <node> (#all|#none| <bitarray>) -- mapped 
	layerManager.newLayerFromName (rigname+"_Rigs")
	layerManager.newLayerFromName (rigname+"_Ctrls")
	layerManager.newLayerFromName (rigname+"_Bones")
	local
	rig_list = #(),ctrl_list = #(),bone_list = #(),
	layer_Rigs = LayerManager.getLayerFromName (rigname+"_Rigs"),
	layer_Ctrls = LayerManager.getLayerFromName (rigname+"_Ctrls"),
	layer_Bones = LayerManager.getLayerFromName (rigname+"_Bones"),
	/* 一些必要参数 */
	fullname = rigname + partname, --拆分的绑定名和块名,绑定名有很多用处,比如建层啥的
	parent_bn = tags[1].parent,
	tagsT = for tag in tags collect tag.transform,
	tip_point = normalize(tagsT[7].pos - tagsT[8].pos),--脚尖-脚根
	chain_point = normalize(tagsT[1].pos - tagsT[5].pos),--大腿根-脚踝,与前者非正交
	foot_point =normalize(tagsT[9].pos - tagsT[10].pos),--足弓-足弦(可得出足弓方向,足弓方向可能与ik法向相反甚至可能完全不同)
	ankle_dir = (cross foot_point tip_point),
	plane_dir = normalize(cross (normalize(tagsT[3].pos-tagsT[2].pos)) (normalize(tagsT[5].pos-tagsT[1].pos))),--IK平面的法线方向
-- 	plane_dir = cross tip_point chain_point, --这个是整体的平均方向...其实不需要他,还有一个脚的dir方向可能也需要重算,现在是直接采用的foot_point,但是正确的取法应该是取足部和脚趾的夹角,不过如果提示恰当的话,
	right = not (dot ankle_dir chain_point < 0), --判断足弦和足弓的相对关系,用于一部分绑定方式的变化
	all_length = distance tags[1] tags[6],
	hsize1 = all_length*.1,hsize2 = all_length*.15,
	hsize3 = all_length*.2,hsize4 = all_length*.3,
	ik_foot_PT = (local y = if right then ankle_dir else -ankle_dir;(Matrix3 tip_point y (cross tip_point y) [0,0,0])),
		
	/* 蒙皮骨骼 */
	sk_leg1 = BoneSys.createBone tagsT[1].pos tagsT[2].pos plane_dir,
	sk_leg2 = BoneSys.createBone tagsT[2].pos tagsT[3].pos plane_dir,
	sk_leg3 = BoneSys.createBone tagsT[3].pos tagsT[4].pos plane_dir,
	sk_leg4 = BoneSys.createBone tagsT[4].pos tagsT[5].pos plane_dir,
	sk_foot = BoneSys.createBone tagsT[5].pos tagsT[6].pos ik_foot_PT[3],
	sk_toe = BoneSys.createBone tagsT[6].pos tagsT[7].pos ik_foot_PT[3],
	sk_tip = BoneSys.createBone tagsT[7].pos ([distance tags[6] tags[7] + hsize1,0,0] * sk_toe.transform) ik_foot_PT[3]
		
	/* 整理蒙皮SK骨骼 */
	for b in #(sk_leg1,sk_leg2,sk_leg3,sk_leg4,sk_foot,sk_toe,sk_tip) do
	(
		b.width = b.height = hsize1
		b.parent = parent_bn;parent_bn = b
	)
	sk_leg1.parent = if isValidNode rigparent then rigparent
	sk_leg1.name = fullname+"_sk_leg1"; sk_leg2.name = fullname+"_sk_leg2"; sk_leg3.name = fullname+"_sk_leg3"; sk_leg4.name = fullname+"_sk_leg4"; sk_foot.name = fullname+"_sk_foot"; sk_toe.name = fullname+"_sk_toe"; sk_tip.name = fullname+"_sk_tip"

	local
	/* 脚部控制器 */
	ik_foot_T = (local z = if right then ankle_dir else -ankle_dir;(matrix3 tip_point (cross z tip_point) z [0,0,0])),ik_foot_length = distance tags[9] tags[10],ik_foot_width = distance tags[7] tags[8],corrad = (ik_foot_length+ik_foot_width)*0.05,
	ik_foot_ctrl = Rectangle name:(fullname+"_ik_plat") length:ik_foot_length width:ik_foot_width cornerRadius:0 wirecolor:red transform:(translate (copy ik_foot_T) ((tagsT[7].pos+tagsT[8].pos+tagsT[9].pos+tagsT[10].pos)*0.25)) parent:rigroot,
	ik_foot_sub_ctrl =  Rectangle name:(fullname+"_ik_plat_sub") length:(ik_foot_length+corrad) width:(ik_foot_width+corrad) cornerRadius:corrad wirecolor:orange transform:ik_foot_ctrl.transform pos:([0,0,corrad]*ik_foot_ctrl.transform) parent:ik_foot_ctrl,
		
	/* 脚部IK点 */
	ik_heel = point name:(fullname+"_ik_heel") size:hsize1 centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off wirecolor:red transform:(translate (copy ik_foot_PT) tagsT[8].pos) parent:ik_foot_ctrl,
	ik_tip = point name:(fullname+"_ik_tip") size:hsize1 centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off wirecolor:red transform:(translate (copy ik_foot_PT) tagsT[7].pos) parent:ik_heel,
	ik_arch = point name:(fullname+"_ik_arch") size:hsize1 centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off wirecolor:red transform:(translate (copy ik_foot_PT) tagsT[10].pos) parent:ik_tip, --可表达为弓
	ik_string = point name:(fullname+"_ik_string") size:hsize1 centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off wirecolor:red transform:(translate (copy ik_foot_PT) tagsT[9].pos) parent:ik_arch,--可表达为弦
	ik_sole = point name:(fullname+"_ik_sole") size:hsize1 centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off wirecolor:red \
	transform:(translate (copy ik_foot_PT) (local pA = tagsT[7].pos,pB = tagsT[8].pos,pC = tagsT[6].pos,vAB=pB-pA,vAC=pC-pA,d=dot (normalize vAB) (normalize vAC);(pA+(vAB*(d*(length vAC/length vAB)))))) parent:ik_string,
	ik_foot = ctrl_shape name:(fullname+"_ik_foot") type:"HalfCylinder" pos1:tagsT[6].pos pos2:tagsT[5].pos dir:sk_foot.transform[2] transform:sk_foot.transform pos:sk_toe.transform.pos size:hsize3 parent:ik_sole wirecolor:orange,
	ik_toe = ctrl_shape name:(fullname+"_ik_toe") type:"HalfCylinder" pos1:tagsT[6].pos pos2:tagsT[7].pos dir:sk_toe.transform[2] transform:sk_toe.transform size:hsize3 parent:ik_sole wirecolor:orange

	/* 绑定足部IK控制器 */
	--绑定各级旋转和脚底位移
	setZeroTrans #(ik_heel,ik_tip,ik_arch,ik_string,ik_foot,ik_toe) pos:false
	setZeroTrans #(ik_sole,ik_foot_ctrl,ik_foot_sub_ctrl)
	ik_foot_ctrl[3][2][2].axisOrder = 2
	paramWire.connect ik_foot_sub_ctrl[3][2][2][2] ik_heel[3][2][2][3] "-Y_Rotation" --脚跟旋转,使用连线参数容易处理正负问题
	ik_tip[3][2][2][3].controller = ik_heel[3][2][2][3].controller --脚尖复用
	local ctrl = ik_heel[3][2][2][3].controller = float_limit() --限制脚跟
	ctrl.upper_limit = ctrl.lower_limit = 0;ctrl.upper_limit_enabled = off
	local ctrl = ik_tip[3][2][2][3].controller = float_limit() --限制脚尖
	ctrl.upper_limit = ctrl.lower_limit = 0;ctrl.lower_limit_enabled = off
	paramWire.connect ik_foot_sub_ctrl[3][2][2][1] ik_arch[3][2][2][1] "X_Rotation" --足弓旋转,使用连线参数容易处理正负问题
	ik_string[3][2][2][1].controller = ik_arch[3][2][2][1].controller --足弦复用
	local ctrl = ik_arch[3][2][2][1].controller = float_limit() --限制足弓
	ctrl.upper_limit = ctrl.lower_limit = 0;if right then ctrl.lower_limit_enabled = off else ctrl.upper_limit_enabled = off
	local ctrl = ik_string[3][2][2][1].controller = float_limit() --限制足弦
	ctrl.upper_limit = ctrl.lower_limit = 0;if right then ctrl.upper_limit_enabled = off else ctrl.lower_limit_enabled = off
	paramWire.connect ik_foot_sub_ctrl[3][2][2][3] ik_sole[3][2][2][2] "Z_Rotation" --足弓旋转,使用连线参数容易处理正负问题
	ik_foot_sub_ctrl[3][2][2].axisOrder = 5--ZXY旋转顺序,冻结的控制器是0值,所以更改不会出问题
	paramWire.connect ik_foot_sub_ctrl[3][1][2][2] ik_sole[3][1][2][3] "-Y_Position" --足底位移
	paramWire.connect ik_foot_sub_ctrl[3][1][2][1] ik_sole[3][1][2][1] "X_Position" --足底位移
	local ik_foot_sub_ctrl_pos = point name:(fullname+"_ik_sub_pos") size:hsize1 centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off wirecolor:green transform:ik_foot_sub_ctrl.transform parent:ik_sole, --绑定偏移
	ctrl = ik_foot_sub_ctrl[3][1][3].controller = Position_Constraint ()
	ctrl.appendTarget ik_foot_sub_ctrl_pos 50
	--锁定部分旋转和位移
	setTransformLockFlags #(ik_heel,ik_tip,ik_arch,ik_string,ik_sole) #all
	setTransformLockFlags #(ik_foot,ik_toe) #{1..3,7..9}
	setTransformLockFlags ik_foot_sub_ctrl #{3,7..9}
		
	local
	/* 待绑定参数 */
	FKIK_subs = #(),
	Soft_subs = #(),
	Stretch_subs = #(),
	
	/* IK骨骼点 */
	l1 = distance tags[1] tags[2], l2 = distance tags[2] tags[3], l3 = distance tags[3] tags[4],l4 = distance tags[4] tags[5], --计算四节骨骼的长度
	l5 = distance tags[5] tags[6], l6 = distance tags[6] tags[7], --脚,脚趾长度
	t1 = sk_leg1.transform,t2 = sk_leg2.transform,t3 = sk_leg3.transform,t4 = sk_leg4.transform,t5 = sk_foot.transform,t6 = sk_toe.transform,t7 = sk_tip.transform,
	p1 = tagsT[1].pos,p2,p3 = tagsT[5].pos,
	rp3 = p3-p1,
	dir = plane_dir,--normalize(cross rp3 (tagsT[2].pos-p1)),
	d1 = l2+l4, --p1对边长度,第二段骨骼的长度
	d2 = length rp3, --p2对边,ik长度
	d3 = l1+l3, --p3对边,第一段骨骼的长度
	p2 = ((normalize rp3) * d3) * (quat (acos((d2^2+d3^2-d1^2)/(2*d2*d3))) -dir) + p1,
		
	/* 创建主IK链 */
	ik_bn1 = BoneSys.createBone p1 p2 dir,
	ik_bn2 = BoneSys.createBone p2 p3 dir,
	ik_end = BoneSys.createBone p3 ([l2+l4+hsize1,0,0]*ik_bn2.transform) dir,

	ik_length = l1+l2+l3+l4, 
	prt_trans = (local x = normalize(t5.pos-t1.pos),z = dir,y= normalize(cross z x);(matrix3 x y z t1.pos)),
	part_prt = ctrl_shape name:(fullname+"_Prt") type:"IKParent" pos1:tagsT[1].pos pos2:tagsT[5].pos dir:prt_trans[2] size:(ik_length*0.5) transform:prt_trans wirecolor:yellow parent:rigparent
		
	/* 整理IK骨骼 */
	for b in #(ik_bn1,ik_bn2,ik_end) do
	(
		b.width = b.height = hsize1
		b.parent = parent_bn;parent_bn = b
	)
	ik_bn1.name = fullname+"_ik_bn1"; ik_bn2.name = fullname+"_ik_bn2"; ik_end.name = fullname+"_ik_end"
	
	setInheritanceFlags #(ik_bn1) #{1..6} keepPos:false

	/* 创建第一段IK */
	local
	ik_prt = part_prt,
	fk_prt = ik_prt,--后面的FKprt也用同一个
	ik_exp = ExposeTm displayExposedVals:off size:hsize1 transform:ik_prt.transform useParent:off name:(fullname+"_IKExp") parent:ik_prt wirecolor:green centermarker:on axistripod:on cross:off Box:on constantscreensize:off drawontop:off
-- 	rik_prt = dummy boxsize:[hsize1,hsize1,hsize1] transform:ik_end.transform parent:ik_end name:(fullname+"_rIKPrt") wirecolor:green
-- 	setInheritanceFlags rik_prt #{1..6} keepPos:false
	ik_bn1.parent = ik_prt
	setZeroTrans ik_prt;ik_prt[3][2][2].axisOrder = 6 --ZYX旋转顺序,冻结的控制器是0值,所以更改不会出问题
	local
	ik_solver = IKSys.ikChain ik_bn1 ik_end "IKLimb",
	ik_ctrl = Point name:(fullname+"_IKCtrl") size:hsize1 pos:ik_solver.transform.pos wirecolor:green centermarker:off axistripod:off cross:on Box:on constantscreensize:off drawontop:off parent:ik_foot
	ik_solver.name = (fullname+"_IKTag");ik_solver[3].goalSize = hsize1--;ik_solver[3].SAParent = 0
	setInheritanceFlags ik_prt #{1..6} keepPos:false
	--设置露出变换
	ik_exp.exposeNode = ik_ctrl
	ik_exp.localReferenceNode = ik_prt
	local ik_prop = attributes ik_prop
	(
		Parameters ik_prop
		(	
			Lmt_Dis type:#float --限制控制器
			Soft_val type:#float --IK软化值
			Stretch_val type:#float --拉伸值
		)
	)
	Custattributes.add ik_exp ik_prop baseobject:false
	paramWire.connect ik_exp.baseObject[17] ik_exp.ik_prop[1] "Distance" --原距离
	local ctrl = ik_exp.ik_prop[1].controller = float_limit() --经过软限制的距离
	ctrl.upper_limit = ik_length
	ctrl.lower_limit = 0 -- 	ctrl.upper_smoothing = 0 -- 	ctrl.lower_smoothing = 0
	paramWire.connect ik_exp.ik_prop[2] ctrl[2][3] ("Soft_val*"+(ik_length/10)as string)
	--设置IK解算器限制
	local ctrl = ik_exp[3][2].controller = LookAt_Constraint()
	ctrl.lookat_vector_length = 0
	ctrl.target_axis = 0
	ctrl.pickUpNode = ik_prt
	ctrl.upnode_world = false
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.appendTarget ik_ctrl 50
	ik_solver.transform = Translate (Rotate (matrix3 1) ik_exp.transform.rotation) ik_solver.transform.position --(local trans = ik_exp.transform;(Matrix3 trans[1] trans[2] trans[3] ik_solver.transform[4]))
	ik_solver.parent = ik_exp
	paramWire.connect ik_exp.baseObject[17] ik_solver[3][2][1][1] "Distance" --原距离
	local ctrl = ik_solver[3][2][1][1].controller = float_limit() --IK距离硬限制
	ctrl.upper_limit = ik_length
	ctrl.lower_limit = 0 -- 	ctrl.upper_smoothing = 0 -- 	ctrl.lower_smoothing = 0
	local ctrl = ctrl[2][1].controller = Float_Expression()
	ctrl.AddScalarConstant "len" ik_length
	ctrl.AddScalarTarget "dis" ik_exp.baseObject[17]
	ctrl.AddScalarTarget "stretch" ik_exp.ik_prop[3]
	ctrl.SetExpression "if((dis > len), (dis-len)*stretch+len, len)"
	--绑定各项数值和效果
	local ctrl = ik_bn1[3][4][3].controller = Scale_Expression()
	ctrl.AddScalarConstant "len" ik_length
	ctrl.AddScalarTarget "dis" ik_exp.baseObject[17]
	ctrl.AddScalarTarget "ldis" ik_exp.ik_prop[1]
	ctrl.AddScalarTarget "soft" ik_exp.ik_prop[2]
	ctrl.AddScalarTarget "stretch" ik_exp.ik_prop[3]
	ctrl.SetExpression "vif((dis > len), [1,1,1] * (((len - ldis) + (dis - len)*stretch)/len + 1), [1,1,1] * ((dis - ldis)/len + 1))"
	--记录需要绑定的参数
-- 	append FKIK_subs
	append Soft_subs ik_exp.ik_prop[2]
	append Stretch_subs ik_exp.ik_prop[3]
	
	/* 创建子IK */
	local
	sik_bn1 = BoneSys.createBone t1.pos t2.pos dir, --leg1注视
	sik_end = BoneSys.createBone t2.pos ([l1+hsize1,0,0]*sik_bn1.transform) dir,
	
	rik_bn1 = BoneSys.createBone t2.pos t3.pos dir, --leg2,leg3 IK
	rik_bn2 = BoneSys.createBone t3.pos t4.pos dir,
	rik_end = BoneSys.createBone t4.pos ([l3+hsize1,0,0]*rik_bn2.transform) dir,
		
	dik_bn1 = BoneSys.createBone t4.pos t5.pos dir, --leg4注视
	dik_end = BoneSys.createBone t5.pos ([l4+hsize1,0,0]*dik_bn1.transform) dir,
		
	sik_length1 = l1,
	sik_length2 = l2+l3,
	sik_length3 = l4,
	
	sik_ctrl1 = ctrl_shape type:"HalfCylinder" pos1:tagsT[1].pos pos2:tagsT[2].pos dir:sik_bn1.transform[2] transform:t1 size:hsize3 parent:ik_bn1 name:(fullname+"_sIKCtrl1") wirecolor:orange,
	sik_ctrl2_trans = (Matrix3 -t4[1] -t4[2] t4[3] t5[4]),
	sik_ctrl2 = ctrl_shape type:"HalfCylinder" pos1:tagsT[5].pos pos2:tagsT[4].pos dir:t4[2] transform:sik_ctrl2_trans size:hsize3 parent:ik_bn2 name:(fullname+"_sIKCtrl1") wirecolor:orange,
	rik_prt = dummy boxsize:[hsize1,hsize1,hsize1] transform:sik_end.transform parent:sik_ctrl1 name:(fullname+"_rIKPrt") wirecolor:green,
	rik_exp = ExposeTm displayExposedVals:off size:hsize1 transform:rik_prt.transform useParent:off name:(fullname+"_dIKExp") parent:rik_prt wirecolor:green centermarker:on axistripod:on cross:off Box:on constantscreensize:off drawontop:off
	dik_prt = dummy boxsize:[hsize1,hsize1,hsize1] transform:rik_end.transform parent:sik_ctrl2 name:(fullname+"_dIKPrt") wirecolor:green
	setZeroTrans #(sik_ctrl1,sik_ctrl2)
	sik_ctrl1[3][2][1].value = quat 0 0 0 1; sik_ctrl1.transform = t1
	sik_ctrl2[3][2][1].value = quat 0 0 1 0; sik_ctrl2.transform = sik_ctrl2_trans
	setInheritanceFlags #(rik_prt, dik_prt) #{1..6} keepPos:false
	
	sik_bn1.parent = ik_bn1
	sik_end.parent = sik_bn1
	sik_bn1.name = fullname+"_sik_bn1"; sik_end.name = fullname+"_sik_end"
	
	rik_exp.exposeNode = rik_prt
	rik_exp.localReferenceNode = dik_prt
	local ik_prop = attributes ik_prop
	(
		Parameters ik_prop
		(	
			Lmt_Dis type:#float --限制控制器
			Soft_val type:#float --IK软化值
			Stretch_val type:#float --拉伸值
		)
	)
	Custattributes.add rik_exp ik_prop baseobject:false
	rik_exp.ik_prop[3].value = 1
	local ctrl = rik_exp.ik_prop[1].controller = Float_Expression()
	ctrl.AddScalarConstant "prelen" ik_length
	ctrl.AddScalarTarget "predis" ik_exp.baseObject[17]
	ctrl.AddScalarTarget "dis" rik_exp.baseObject[17]
	ctrl.SetExpression ("if((predis > prelen),dis + (predis - prelen) * " + ((l2+l3)/ ik_length)as string + ",dis)")
	local ctrl = rik_exp.ik_prop[1].controller = float_limit() --经过软限制的距离
	ctrl.upper_limit = l2+l3
	ctrl.lower_limit = 0 -- 	ctrl.upper_smoothing = 0 -- 	ctrl.lower_smoothing = 0
	paramWire.connect rik_exp.ik_prop[2] ctrl[2][3] ("Soft_val*"+((l2+l3)/10)as string)
	local ctrl = rik_exp[3][2].controller = LookAt_Constraint()
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = rik_prt;ctrl.upnode_world = false
	ctrl.appendTarget dik_prt 50
	rik_bn1.parent = rik_exp
	rik_bn2.parent = rik_bn1
	rik_end.parent = rik_bn2
	rik_bn1.name = fullname+"_rik_bn1"; rik_bn2.name = fullname+"_rik_bn2"; rik_end.name = fullname+"_rik_end"
	
	dik_bn1.parent = dik_prt
	dik_end.parent = dik_bn1
	dik_bn1.name = fullname+"_dik_bn1"; dik_end.name = fullname+"_dik_end"
	
/* 绑定反ikrik */
	local ctrl = sik_end[3][1].controller = Position_Constraint() --sik 注视位置
	ctrl.appendTarget rik_prt 50
	ctrl = sik_bn1[3][2].controller = LookAt_Constraint() --dik 旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = ik_bn1;ctrl.upnode_world = false
	ctrl.appendTarget rik_prt 50
	local ctrl = dik_end[3][1].controller = Position_Constraint() --dik 注视位置
	ctrl.appendTarget ik_solver 50
	ctrl = dik_bn1[3][2].controller = LookAt_Constraint() --dik 旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = ik_bn1;ctrl.upnode_world = false
	ctrl.appendTarget ik_solver 50
	local
	rik_solver = IKSys.ikChain rik_bn1 rik_end "IKLimb"
	rik_solver.name = rigname+"_sIKTag"
	rik_solver.parent = dik_prt
	local ctrl = rik_bn1[3][4][3].controller = Scale_Expression()
	ctrl.AddScalarConstant "len" (l2+l3)
	ctrl.AddScalarTarget "dis" rik_exp.baseObject[17]
	ctrl.AddScalarTarget "ldis" rik_exp.ik_prop[1]
	ctrl.AddScalarTarget "soft" rik_exp.ik_prop[2]
	ctrl.AddScalarTarget "stretch" rik_exp.ik_prop[3]
	ctrl.SetExpression "[1,1,1] * ((dis - ldis)/len + 1)"

	append Soft_subs rik_exp.ik_prop[2]
-- 	append Stretch_subs ik_exp.ik_prop[3]

/* 整理到层 */
	for b in #(sk_leg1,sk_leg2,sk_leg3,sk_leg4,sk_foot,sk_toe) do layer_Bones.addnode b
	for r in #(ik_heel,ik_tip,ik_arch,ik_string,ik_sole,ik_foot_sub_ctrl_pos) +#(sk_tip,ik_bn1,ik_bn2,ik_end,sik_bn1,sik_end,rik_bn1,rik_bn2,rik_end,dik_bn1,dik_end)+#(ik_exp,ik_solver,ik_ctrl)+#(rik_prt,rik_exp,rik_solver,dik_prt) do layer_Rigs.addnode r
	for c in #(ik_foot_ctrl,ik_foot_sub_ctrl)+#(ik_foot,ik_toe)+#(ik_prt,sik_ctrl1,sik_ctrl2) do layer_Ctrls.addnode c
	--添加颜色
	(#(ik_foot_ctrl,ik_foot_sub_ctrl)+#(ik_foot,ik_toe)+#(sik_ctrl1,sik_ctrl2)).wirecolor = if right then RampGreen[3] else RampBlue[3]
	fk_prt.wirecolor = if right then RampGreen[1] else RampBlue[1]
	--蒙皮姿态
	for c in #(ik_foot_ctrl,ik_foot_sub_ctrl)+#(ik_foot,ik_toe)+#(sik_ctrl1,sik_ctrl2) do c.setSkinPose()


/* 添加属性控制 */
	local
	prop_ctrl = ctrl_shape type:"Property" pos1:tagsT[5].pos pos2:tagsT[6].pos dir:sk_foot.transform[2] transform:sk_foot.transform pos:((tagsT[5].pos+tagsT[6].pos)*.5) name:(fullname+"Prop_Ctrl") offset:[0,0,hsize1*.5] wirecolor:orange parent:sk_foot,
	prop_holder = EmptyModifier(),
	prop = attributes prop
	(
		Parameters Properties rollout:PropRollout
		(	
			Follow type:#float UI:spn_Follow Default:0.0
			FKIK type:#float UI:spn_FKIK --限制控制器
			Soft type:#float UI:spn_Soft --IK软化值
			Stretch type:#float UI:spn_Stretch --拉伸值
			
			FKCtrls type:#maxObjectTab tabsize:6 --tabSizeVariable:true
			IKPlatRel type:#matrix3
			
			IKTags type:#maxObjectTab tabsize:6 --tabSizeVariable:true
			IKCtrls type:#maxObjectTab tabsize:6 --tabSizeVariable:true
			
			secondCtrls type:#maxObjectTab tabsize:7--tabSizeVariable:true
			fineCtrls type:#maxObjectTab tabsize:6 --tabSizeVariable:true
		)
		rollout PropRollout "FK/IK Properties" 
		(
			group "Switch"
			(
				spinner spn_FKIK "FK/IK:" width:80 range:[0, 1, 0] type:#float scale:0.1 align:#right
				button btn_toIK "FK ->IK" Align:#Left tooltip:"Match FK to IK."
				button btn_toFK "IK ->FK" Align:#Right offset:[0,-25] tooltip:"Match IK to FK."
-- 				prop_holder.Prop.FKCtrls = for i in #(fk_leg1_ctrl,fk_leg2_ctrl,fk_leg3_ctrl,fk_leg4_ctrl,fk_foot_ctrl,fk_toe_ctrl) collect nodeTransformMonitor node:i --6
-- 				prop_holder.Prop.IKTags = for i in #(ik_exp1,ik_exp2,ik_exp3,ik_exp4,ik_foot,ik_toe) collect nodeTransformMonitor node:i --6
-- 				prop_holder.Prop.IKCtrls = for i in #(ik_foot_ctrl,ik_foot_sub_ctrl,ik_foot,ik_toe,sik_ctrl1,sik_ctrl2) collect nodeTransformMonitor node:i --6
				on btn_toIK pressed do
				(
					local iks = for i in IKTags collect i.node,fks = for i in FKctrls collect i.node,other = IKCtrls[6].node
					undo "FK ->IK" on(
						for i in #{1..4} do fks[i].transform = iks[i].transform
						fks[5].transform = (Matrix3 iks[5].transform[1] iks[5].transform[2] iks[5].transform[3] other.transform[4])
						fks[6].transform = iks[6].transform
					)
				)
				on btn_toFK pressed do
				(
					local iks = for i in IKCtrls collect i.node,fks = for i in FKctrls collect i.node
					undo "FK ->IK" on( 
						iks[1].transform = IKPlatRel * fks[6].transform --ik平面
						iks[2][3][1][2].value = [0,0,0];iks[2][3][2][2].value = (quat 0 0 0 1) --平面sub
						iks[3].transform = (Matrix3 fks[5].transform[1] fks[5].transform[2] fks[5].transform[3] fks[6].transform[4]) --脚背
						iks[4].transform = orthogonalize fks[6].transform --消除缩放,脚趾
						iks[5].transform = fks[1].transform --脚腕
						iks[6].transform = (matrix3 [-1,0,0] [0,-1,0] [0,0,1] [0,0,0]) * (Matrix3 fks[4].transform[1] fks[4].transform[2] fks[4].transform[3] fks[5].transform[4]) --脚腕
					)
				)
			)
			group "FK"
			(
				spinner spn_Follow "Rotation Follow:" width:80 range:[0, 1, 0] type:#float scale:0.1 align:#right enabled:false tooltip:"暂未开发,需要一个约束旋转的根物体\t\n(虽然可以替代实现,但是考虑到现阶段需求已经满足,而且需要考虑整个绑定系统的协调性,暂时先不实现.)"
			)
			group "IK"
			(
				spinner spn_Soft "Soft:" width:80 range:[0, 1, 0] type:#float scale:0.1 align:#right
				spinner spn_Stretch "Stretch:" width:80 range:[0, 1, 0] type:#float scale:0.1 align:#right
			)
			group"Display"
			(
				button 'FK' "FK" Align:#Left width:32 tooltip:"Show/Hide FK controller.\nClick mouse:Left or Right."
				button 'IK' "IK" Align:#Left width:32 offset:[34,-25] tooltip:"Show/Hide IK controller.\nClick mouse:Left or Right."
				button 'second' "sec" Align:#right width:32 offset:[-34,-25] tooltip:"Show/Hide sec controller.\nClick mouse:Left or Right."
				button 'fine' "fine" Align:#right width:32 offset:[0,-25] tooltip:"Show/Hide fine controller.\nClick mouse:Left or Right."
				
				on FK pressed do undo "Show FK Ctrls" on unhide(for i in FKctrls collect i.node)
				on FK rightClick do undo "Hide FK Ctrls" on hide(for i in FKctrls collect i.node)
				on IK pressed do  undo "Show IK Ctrls" on unhide(for i in IKCtrls collect i.node)
				on IK rightClick do undo "Hide IK Ctrls" on hide(for i in IKCtrls collect i.node)
				on second pressed do undo "Show Second Ctrls" on unhide(for i in secondCtrls collect i.node)
				on second rightClick do undo "Hide Second Ctrls" on hide(for i in secondCtrls collect i.node)
				on fine pressed do undo "Show Fine Ctrls" on unhide(for i in fineCtrls collect i.node)
				on fine rightClick do undo "Hide Fine Ctrls" on hide(for i in fineCtrls collect i.node)
			)
		)
	)
	Custattributes.add prop_holder prop baseobject:false
	prop_holder.Prop.FKIK.controller = bezier_float ()
	prop_holder.Prop.Soft.controller = bezier_float ()
	prop_holder.Prop.Stretch.controller = bezier_float ()
	addmodifier prop_ctrl prop_holder
	
	for sub in Soft_subs do paramWire.connect prop_holder.Prop[3] sub "Soft"
	for sub in Stretch_subs do paramWire.connect prop_holder.Prop[4] sub "Stretch"
		
/* 创建FKIK约束 */
-- 	point transform:t1 size:10 --测试
	local
	ik_exp1 = ExposeTm exposeNode:sik_end localReferenceNode:sik_bn1 size:hsize3 transform:t1 name:(fullname+"_IKExp1") parent:sik_bn1 wirecolor:green centermarker:off axistripod:on cross:off Box:off useParent:off displayExposedVals:off constantscreensize:off drawontop:off,
	ik_exp2 = ExposeTm exposeNode:rik_bn2 localReferenceNode:rik_bn1 size:hsize3 transform:t2 name:(fullname+"_IKExp2") parent:rik_bn1 wirecolor:green centermarker:off axistripod:on cross:off Box:off useParent:off displayExposedVals:off constantscreensize:off drawontop:off,
	ik_exp3 = ExposeTm exposeNode:rik_end localReferenceNode:rik_bn2 size:hsize3 transform:t3 name:(fullname+"_IKExp3") parent:rik_bn2 wirecolor:green centermarker:off axistripod:on cross:off Box:off useParent:off displayExposedVals:off constantscreensize:off drawontop:off,
	ik_exp4 = ExposeTm exposeNode:dik_end localReferenceNode:dik_bn1 size:hsize3 transform:t4 name:(fullname+"_IKExp4") parent:dik_bn1 wirecolor:green centermarker:off axistripod:on cross:off Box:off useParent:off displayExposedVals:off constantscreensize:off drawontop:off,
	fk_leg1_ctrl = ctrl_shape type:"CenterCircle" pos1:tagsT[1].pos pos2:tagsT[2].pos dir:t1[2] transform:t1 size:hsize4 parent:fk_prt name:(fullname+"_FK_Leg1_Ctrl") wirecolor:yellow boneenable:true boneFreezeLength:false,
	fk_leg2_ctrl = ctrl_shape type:"CenterCircle" pos1:tagsT[2].pos pos2:tagsT[3].pos dir:t2[2] transform:t2 size:hsize4 parent:fk_leg1_ctrl name:(fullname+"_FK_Leg2_Ctrl") wirecolor:yellow boneenable:true boneFreezeLength:false,
	fk_leg3_ctrl = ctrl_shape type:"CenterCircle" pos1:tagsT[3].pos pos2:tagsT[4].pos dir:t3[2] transform:t3 size:hsize4 parent:fk_leg2_ctrl name:(fullname+"_FK_Leg3_Ctrl") wirecolor:yellow boneenable:true boneFreezeLength:false,
	fk_leg4_ctrl = ctrl_shape type:"CenterCircle" pos1:tagsT[4].pos pos2:tagsT[5].pos dir:t4[2] transform:t4 size:hsize4 parent:fk_leg3_ctrl name:(fullname+"_FK_Leg4_Ctrl") wirecolor:yellow boneenable:true boneFreezeLength:false,
	fk_foot_ctrl = ctrl_shape type:"Semiarc" pos1:tagsT[5].pos pos2:tagsT[6].pos dir:t5[2] transform:t5 size:hsize3 parent:fk_leg4_ctrl name:(fullname+"_FK_Foot_Ctrl") wirecolor:yellow boneenable:true boneFreezeLength:false,
	fk_toe_ctrl = ctrl_shape type:"Semiarc" pos1:tagsT[6].pos pos2:tagsT[7].pos dir:t6[2] transform:t6 size:hsize3 parent:fk_foot_ctrl name:(fullname+"_FK_Toe_Ctrl") wirecolor:yellow boneenable:true boneFreezeLength:false
	setZeroTrans #(fk_leg1_ctrl,fk_leg2_ctrl,fk_leg3_ctrl,fk_leg4_ctrl,fk_foot_ctrl,fk_toe_ctrl)
	
	local ctrl = sk_leg1[3][1].controller = Position_Constraint() --leg1
	ctrl.appendTarget fk_leg1_ctrl 1
	ctrl.appendTarget sik_bn1 0
	paramWire.connect prop_holder.prop[2] ctrl[1] "1-FKIK"
	paramWire.connect prop_holder.prop[2] ctrl[2] "FKIK"
	local weight1 = ctrl[1].controller,weight2 = ctrl[2].controller
	local ctrl = sk_leg1[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget fk_leg1_ctrl 1
	ctrl.appendTarget sik_bn1 0
	
	ctrl[1].controller = weight1;ctrl[2].controller = weight2
	local ctrl = sk_leg2[3][1].controller = Position_Expression() --leg2
	ctrl.AddScalarTarget "val" prop_holder.prop[2]
	ctrl.AddScalarTarget "fk" fk_leg2_ctrl[3][1][2][1]
	ctrl.AddScalarTarget "ik" ik_exp1.baseobject[17]
	ctrl.SetExpression ("[("+l1 as string+"+fk)*(1-val)+ik*val,0,0]")
	local ctrl = sk_leg2[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget fk_leg2_ctrl 1
	ctrl.appendTarget rik_bn1 0
	ctrl[1].controller = weight1;ctrl[2].controller = weight2
	
	local ctrl = sk_leg3[3][1].controller = Position_Expression() --leg3
	ctrl.AddScalarTarget "val" prop_holder.prop[2]
	ctrl.AddScalarTarget "fk" fk_leg3_ctrl[3][1][2][1]
	ctrl.AddScalarTarget "ik" ik_exp2.baseobject[17]
	ctrl.SetExpression ("[("+l2 as string+"+fk)*(1-val)+ik*val,0,0]")
	local ctrl = sk_leg3[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget fk_leg3_ctrl 1
	ctrl.appendTarget rik_bn2 0
	ctrl[1].controller = weight1;ctrl[2].controller = weight2
	
	local ctrl = sk_leg4[3][1].controller = Position_Expression() --leg4
	ctrl.AddScalarTarget "val" prop_holder.prop[2]
	ctrl.AddScalarTarget "fk" fk_leg4_ctrl[3][1][2][1]
	ctrl.AddScalarTarget "ik" ik_exp3.baseobject[17]
	ctrl.SetExpression ("[("+l3 as string+"+fk)*(1-val)+ik*val,0,0]")
	local ctrl = sk_leg4[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget fk_leg4_ctrl 1
	ctrl.appendTarget dik_bn1 0
	ctrl[1].controller = weight1;ctrl[2].controller = weight2
	
	local ctrl = sk_foot[3][1].controller = Position_Expression() --foot
	ctrl.AddScalarTarget "val" prop_holder.prop[2]
	ctrl.AddScalarTarget "fk" fk_foot_ctrl[3][1][2][1]
	ctrl.AddScalarTarget "ik" ik_exp4.baseobject[17]
	ctrl.SetExpression ("[("+l4 as string+"+fk)*(1-val)+ik*val,0,0]")
	local ctrl = sk_foot[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget fk_foot_ctrl 1
	ctrl.appendTarget ik_foot 0
	ctrl[1].controller = weight1;ctrl[2].controller = weight2
	
	local ctrl = sk_toe[3][1].controller = Position_Expression() --toe
	ctrl.AddScalarTarget "val" prop_holder.prop[2]
	ctrl.AddScalarTarget "fk" fk_toe_ctrl[3][1][2][1]
	ctrl.AddScalarConstant "ik" l5
	ctrl.SetExpression ("[("+l5 as string+"+fk)*(1-val)+ik*val,0,0]")
	local ctrl = sk_toe[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget fk_toe_ctrl 1
	ctrl.appendTarget ik_toe 0
	ctrl[1].controller = weight1;ctrl[2].controller = weight2
	
/* 添加腿部次级控制 */
	local --创建父级点和控制点
	subT_leg1 = point name:(fullname+"_subT_leg1") size:hsize1 transform:t1 parent:sk_leg1 wirecolor:gray centermarker:off axistripod:off cross:on Box:off constantscreensize:off drawontop:off,
	subT_leg2 = point name:(fullname+"_subT_leg2") size:hsize1 transform:t2 parent:sk_leg2 wirecolor:gray centermarker:off axistripod:off cross:on Box:off constantscreensize:off drawontop:off,
	subT_leg3 = point name:(fullname+"_subT_leg3") size:hsize1 transform:t3 parent:sk_leg3 wirecolor:gray centermarker:off axistripod:off cross:on Box:off constantscreensize:off drawontop:off,
	subT_leg4 = point name:(fullname+"_subT_leg4") size:hsize1 transform:t4 parent:sk_leg4 wirecolor:gray centermarker:off axistripod:off cross:on Box:off constantscreensize:off drawontop:off,
	subT_foot = point name:(fullname+"_subT_foot") size:hsize1 transform:t5 parent:sk_foot wirecolor:gray centermarker:off axistripod:off cross:on Box:off constantscreensize:off drawontop:off,
	subT_toe = point name:(fullname+"_subT_toe") size:hsize1 transform:t6 parent:sk_toe wirecolor:gray centermarker:off axistripod:off cross:on Box:off constantscreensize:off drawontop:off,
	subT_tip = point name:(fullname+"_subT_tip") size:hsize1 transform:t7 parent:sk_tip wirecolor:gray centermarker:off axistripod:off cross:on Box:off constantscreensize:off drawontop:off,
	
	subN_leg1 = point name:(fullname+"_subN_leg1") size:hsize1 transform:t1 parent:subT_leg1 wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_leg2 = point name:(fullname+"_subN_leg2") size:hsize1 transform:t2 parent:subT_leg2 wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_leg3 = point name:(fullname+"_subN_leg3") size:hsize1 transform:t3 parent:subT_leg3 wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_leg4 = point name:(fullname+"_subN_leg4") size:hsize1 transform:t4 parent:subT_leg4 wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_foot = point name:(fullname+"_subN_foot") size:hsize1 transform:t5 parent:subT_foot wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_toe = point name:(fullname+"_subN_toe") size:hsize1 transform:t6 parent:subT_toe wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_tip = point name:(fullname+"_subN_tip") size:hsize1 transform:t7 parent:subT_tip wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off
	
	--绑定次级主控
	local ctrl = subT_leg2[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget sk_leg1 50
	ctrl.appendTarget sk_leg2 50
	local ctrl = subT_leg3[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget sk_leg2 50
	ctrl.appendTarget sk_leg3 50
	local ctrl = subT_leg4[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget sk_leg3 50
	ctrl.appendTarget sk_leg4 50
	local ctrl = subT_foot[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget sk_leg4 50
	ctrl.appendTarget sk_foot 50
	local ctrl = subT_toe[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget sk_foot 50
	ctrl.appendTarget sk_toe 50
	setZeroTrans #(subN_leg1,subN_leg2,subN_leg3,subN_leg4,subN_foot,subN_toe,subN_toe)
	
	local --创建样条线,使用样条线是为了以后方便扩展为可多段的绑定
	subS_leg1 = p2pline name:(fullname+"_subS_leg1") transform:t1 pos1:t1.pos pos2:t2.pos wirecolor:brown parent:subN_leg1 boneenable:true,
	subS_leg2 = p2pline name:(fullname+"_subS_leg2") transform:t2 pos1:t2.pos pos2:t3.pos wirecolor:brown parent:subS_leg1 boneenable:true,
	subS_leg3 = p2pline name:(fullname+"_subS_leg3") transform:t3 pos1:t3.pos pos2:t4.pos wirecolor:brown parent:subS_leg2 boneenable:true,
	subS_leg4 = p2pline name:(fullname+"_subS_leg4") transform:t4 pos1:t4.pos pos2:t5.pos wirecolor:brown parent:subS_leg3 boneenable:true,
	subS_foot = p2pline name:(fullname+"_subS_foot") transform:t5 pos1:t5.pos pos2:t6.pos wirecolor:brown parent:subS_leg4 boneenable:true,
	subS_toe = p2pline name:(fullname+"_subS_toe") transform:t6 pos1:t6.pos pos2:t7.pos wirecolor:brown parent:subS_foot boneenable:true,
	subS_tip = point name:(fullname+"_subS_tip") size:hsize1 transform:t7 parent:subS_toe wirecolor:yellow centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off
	subS_tip.boneenable = true
	--绑定样条线
	local ctrl = subS_leg1[3][2].controller = LookAt_Constraint() --leg1旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = sk_leg1;ctrl.upnode_world = false
	ctrl.appendTarget subN_leg2 50
	local ctrl = subS_leg2[3][1].controller = Position_Constraint() --leg2位置
	ctrl.appendTarget subN_leg2 50
	ctrl = subS_leg2[3][2].controller = LookAt_Constraint() --leg2旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = sk_leg2;ctrl.upnode_world = false
	ctrl.appendTarget subN_leg3 50
	local ctrl = subS_leg3[3][1].controller = Position_Constraint() --leg3位置
	ctrl.appendTarget subN_leg3 50
	ctrl = subS_leg3[3][2].controller = LookAt_Constraint() --leg3旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = sk_leg3;ctrl.upnode_world = false
	ctrl.appendTarget sk_leg4 50
	local ctrl = subS_leg4[3][1].controller = Position_Constraint() --leg4位置
	ctrl.appendTarget subN_leg4 50
	ctrl = subS_leg4[3][2].controller = LookAt_Constraint() --leg3旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = sk_leg4;ctrl.upnode_world = false
	ctrl.appendTarget subN_foot 50
	local ctrl = subS_foot[3][1].controller = Position_Constraint() --foot位置
	ctrl.appendTarget subN_foot 50
	ctrl = subS_foot[3][2].controller = LookAt_Constraint() --foot旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = sk_foot;ctrl.upnode_world = false
	ctrl.appendTarget subN_toe 50
	local ctrl = subS_toe[3][1].controller = Position_Constraint() --toe位置
	ctrl.appendTarget subN_toe 50
	ctrl = subS_toe[3][2].controller = LookAt_Constraint() --toe旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = sk_toe;ctrl.upnode_world = false
	ctrl.appendTarget subN_tip 50
	local ctrl = subS_tip[3][1].controller = Position_Constraint() --tip位置
	ctrl.appendTarget subN_tip 50
	
/* 暂时使用的一节分段翻滚控制,以后可以直接用上边的线段来创建多段,1段不加点,2段加1个点等等 */
	local
	subB_leg1 = BoneSys.createBone tagsT[1].pos tagsT[2].pos plane_dir,
	subB_leg2 = BoneSys.createBone tagsT[2].pos tagsT[3].pos plane_dir,
	subB_leg3 = BoneSys.createBone tagsT[3].pos tagsT[4].pos plane_dir,
	subB_leg4 = BoneSys.createBone tagsT[4].pos tagsT[5].pos plane_dir,
	subB_foot = BoneSys.createBone tagsT[5].pos tagsT[6].pos ik_foot_PT[3],
	subB_toe = BoneSys.createBone tagsT[6].pos tagsT[7].pos ik_foot_PT[3],
	subB_tip = BoneSys.createBone tagsT[7].pos ([distance tags[6] tags[7] + hsize1,0,0] * subB_toe.transform) ik_foot_PT[3],
	--处理父子关系
	parent_bn = subN_leg1
	for b in #(subB_leg1,subB_leg2,subB_leg3,subB_leg4,subB_foot,subB_toe,subB_tip) do
	(
		b.width = b.height = hsize1
		b.parent = parent_bn;parent_bn = b
	)
	subB_leg1.name = fullname+"_subB_leg1"; subB_leg2.name = fullname+"_subB_leg2"; subB_leg3.name = fullname+"_subB_leg3"; subB_leg4.name = fullname+"_subB_leg4"; subB_foot.name = fullname+"_subB_foot"; subB_toe.name = fullname+"_subB_toe"; subB_tip.name = fullname+"_subB_tip"
	--创建控制
	local
	subB_leg1_p = Point name:(fullname+"_subB_leg1_p") size:hsize1 transform:subS_leg1.transform wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off parent:subS_leg1, --临时父物体,应该给到fk_prt,然后注视下一个点
	subB_leg2_p = Point name:(fullname+"_subB_leg2_p") size:hsize1 transform:subS_leg2.transform wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off parent:subS_leg2,
	subB_leg3_p = Point name:(fullname+"_subB_leg3_p") size:hsize1 transform:subS_leg3.transform wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off parent:subS_leg3,
	subB_leg4_p = Point name:(fullname+"_subB_leg4_p") size:hsize1 transform:subS_leg4.transform wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off parent:subS_leg4,
	subB_foot_p = Point name:(fullname+"_subB_foot_p") size:hsize1 transform:subS_foot.transform wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off parent:subS_foot,
	subB_toe_p = Point name:(fullname+"_subB_toe_p") size:hsize1 transform:subS_toe.transform wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off parent:subS_toe,
	subR_leg1 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_leg1") size:hsize3 transform:subB_leg1_p.transform wirecolor:yellow parent:subB_leg1_p,
	subR_leg2 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_leg2") size:hsize3 transform:subB_leg2_p.transform wirecolor:yellow parent:subB_leg2_p,
	subR_leg3 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_leg3") size:hsize3 transform:subB_leg3_p.transform wirecolor:yellow parent:subB_leg3_p,
	subR_leg4 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_leg4") size:hsize3 transform:subB_leg4_p.transform wirecolor:yellow parent:subB_leg4_p,
	subR_foot = ctrl_shape type:"Rectangle" name:(fullname+"_subR_foot") size:hsize3 transform:subB_foot_p.transform wirecolor:yellow parent:subB_foot_p,
	subR_toe = ctrl_shape type:"Rectangle" name:(fullname+"_subR_toe") size:hsize3 transform:subB_toe_p.transform wirecolor:yellow parent:subB_toe_p
	--添加控制器绑定
	local ctrl = subB_leg1_p[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_leg1 50
	ctrl.appendTarget subN_leg2 50
	local ctrl = subB_leg2_p[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_leg2 50
	ctrl.appendTarget subN_leg3 50
	local ctrl = subB_leg3_p[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_leg3 50
	ctrl.appendTarget subN_leg4 50
	local ctrl = subB_leg4_p[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_leg4 50
	ctrl.appendTarget subN_foot 50
	local ctrl = subB_foot_p[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_foot 50
	ctrl.appendTarget subN_toe 50
	local ctrl = subB_toe_p[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_toe 50
	ctrl.appendTarget subN_tip 50
	--添加骨骼绑定
	local ctrl = subB_leg1[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_leg1;ctrl.upnode_world = false
	ctrl.appendTarget subN_leg2 50
	local ctrl = subB_leg2[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_leg2 50
	ctrl = subB_leg2[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_leg2;ctrl.upnode_world = false
	ctrl.appendTarget subN_leg3 50
	local ctrl = subB_leg3[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_leg3 50
	ctrl = subB_leg3[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_leg3;ctrl.upnode_world = false
	ctrl.appendTarget subN_leg4 50
	local ctrl = subB_leg4[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_leg4 50
	ctrl = subB_leg4[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_leg4;ctrl.upnode_world = false
	ctrl.appendTarget subN_foot 50
	local ctrl = subB_foot[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_foot 50
	ctrl = subB_foot[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_foot;ctrl.upnode_world = false
	ctrl.appendTarget subN_toe 50
	local ctrl = subB_toe[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_toe 50
	ctrl = subB_toe[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_toe;ctrl.upnode_world = false
	ctrl.appendTarget subN_tip 50
	local ctrl = subB_tip[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_tip 50
	--锁定部分旋转和位移
	setTransformLockFlags fk_leg1_ctrl #{1..3}
	setTransformLockFlags #(subT_leg1,subT_leg2,subT_leg3,subT_leg4,subT_foot,subT_toe,subT_tip) #all
	setTransformLockFlags #(subN_leg1,subN_leg2,subN_leg3,subN_leg4,subN_foot,subN_toe,subN_tip) #{4..9}
	setTransformLockFlags #(subR_leg1,subR_leg2,subR_leg3,subR_leg4,subR_foot,subR_toe) #{1..3,5..9}
	
/* 整理到层 */
	for b in #(subB_leg1,subB_leg2,subB_leg3,subB_leg4,subB_foot,subB_toe) do layer_Bones.addnode b
	for r in #(ik_exp1,ik_exp2,ik_exp3,ik_exp4) + #(subT_leg1,subT_leg2,subT_leg3,subT_leg4,subT_foot,subT_toe,subT_tip) + #(subs_leg1,subS_leg2,subS_leg3,subS_leg4,subS_foot,subS_toe,subS_tip) + #(subB_leg1_p,subB_leg2_p,subB_leg3_p,subB_leg4_p,subB_foot_p,subB_toe_p) + #(subB_tip) do layer_Rigs.addnode r
	for c in #(prop_ctrl)+#(fk_leg1_ctrl,fk_leg2_ctrl,fk_leg3_ctrl,fk_leg4_ctrl,fk_foot_ctrl,fk_toe_ctrl) + #(subN_leg1,subN_leg2,subN_leg3,subN_leg4,subN_foot,subN_toe,subN_tip) + #(subR_leg1,subR_leg2,subR_leg3,subR_leg4,subR_foot,subR_toe) do layer_Ctrls.addnode c
	--蒙皮姿态
	for c in #(prop_ctrl)+#(fk_leg1_ctrl,fk_leg2_ctrl,fk_leg3_ctrl,fk_leg4_ctrl,fk_foot_ctrl,fk_toe_ctrl) + #(subN_leg1,subN_leg2,subN_leg3,subN_leg4,subN_foot,subN_toe,subN_tip) + #(subR_leg1,subR_leg2,subR_leg3,subR_leg4,subR_foot,subR_toe) do c.setSkinPose()
	--添加颜色
	#(fk_leg1_ctrl,fk_leg2_ctrl,fk_leg3_ctrl,fk_leg4_ctrl,fk_foot_ctrl,fk_toe_ctrl).wirecolor = if right then RampGreen[4] else RampBlue[4]
	(#(subN_leg1,subN_leg2,subN_leg3,subN_leg4,subN_foot,subN_toe,subN_tip) + #(subR_leg1,subR_leg2,subR_leg3,subR_leg4,subR_foot,subR_toe)).wirecolor = RampYellow[3]
/* 整理层 */
	layer_Rigs.on = false;layer_Rigs.lock = true
	layer_Bones.lock = true
		
/* holder功能 */--储存节点用nodeTransformMonitor可避免大量依赖循环问题,虽然这里前三个数据都可以直接用nodetab
	prop_holder.Prop.FKCtrls = for i in #(fk_leg1_ctrl,fk_leg2_ctrl,fk_leg3_ctrl,fk_leg4_ctrl,fk_foot_ctrl,fk_toe_ctrl) collect nodeTransformMonitor node:i --6
	prop_holder.Prop.IKTags = for i in #(ik_exp1,ik_exp2,ik_exp3,ik_exp4,ik_foot,ik_toe) collect nodeTransformMonitor node:i --6
	prop_holder.Prop.IKCtrls = for i in #(ik_foot_ctrl,ik_foot_sub_ctrl,ik_foot,ik_toe,sik_ctrl1,sik_ctrl2) collect nodeTransformMonitor node:i --6
	prop_holder.Prop.secondCtrls = for i in #(subN_leg1,subN_leg2,subN_leg3,subN_leg4,subN_foot,subN_toe,subN_tip) collect nodeTransformMonitor node:i --7
	prop_holder.Prop.fineCtrls = for i in #(subR_leg1,subR_leg2,subR_leg3,subR_leg4,subR_foot,subR_toe) collect nodeTransformMonitor node:i --6
	hide #(subN_leg1,subN_leg2,subN_leg3,subN_leg4,subN_foot,subN_toe,subN_tip)
	hide #(subR_leg1,subR_leg2,subR_leg3,subR_leg4,subR_foot,subR_toe)
	prop_holder.Prop.IKPlatRel = ik_foot_ctrl.transform * Inverse fk_toe_ctrl.transform
	
/* return */
	ok
	
)
rig_4seg_leg (getCurrentSelection())