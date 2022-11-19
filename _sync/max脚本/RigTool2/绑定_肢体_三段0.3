filein "杂项函数.ms"

filein "复制骨骼链.ms"
filein "纠正IK骨骼链.ms"

clearlistener()

fn rig_limb_seg3 bone4_list parent_name:"tt" part_name:"" = --必须输入4根骨骼链,包括一根末端
(
/* 待绑定参数 */
	local
	FKIK_subs = #(),
	Soft_subs = #(),
	Stretch_subs = #()
/* 创建基本面 */
	local
	rname = parent_name + part_name,
	--IK骨骼点
	l1 = distance bone4_list[1] bone4_list[2],l2 = distance bone4_list[2] bone4_list[3], l3 = distance bone4_list[3] bone4_list[4], --计算三节骨骼的长度
	t1 = bone4_list[1].transform,t2 = bone4_list[2].transform,t3 = bone4_list[3].transform,t4 = bone4_list[4].transform,
	p1 = t1.pos,p2,p3 = bone4_list[4].transform.pos,
	rp3 = p3-p1,
	dir = normalize(cross rp3 (bone4_list[2].transform.pos-p1)),
	d1 = l1+l3, --p1对边长度,第二段骨骼的长度
	d2 = length rp3, --p2对边,ik长度
	d3 = l2, --p3对边,第一段骨骼的长度length (bone4_list[3].transform.pos - bone4_list[2].transform.pos)
	p2 = ((normalize rp3) * d3) * (quat (acos((d2^2+d3^2-d1^2)/(2*d2*d3))) dir) + p1,
	--创建回型绑定链
	ik_bn1 = BoneSys.createBone p1 p2 dir,
	ik_bn2 = BoneSys.createBone p2 p3 dir,
	end_bn = BoneSys.createBone t4.pos t3.pos dir,
	rik_bn1 = BoneSys.createBone t3.pos t2.pos dir,
	rik_bn2 = BoneSys.createBone t2.pos t1.pos dir,
	ik_length = distance ik_bn1 ik_bn2 + distance ik_bn2 end_bn, 
	rik_length = distance rik_bn1 rik_bn2 + distance rik_bn2 ik_bn1,
	hsize = ik_length/6,
	bsize = ik_length/9, o_bn = bone4_list[1].parent,
	rik_bn3 = BoneSys.createBone ([rik_bn2.length,0,0] * rik_bn2.transform) ([rik_bn2.length+bsize,0,0] * rik_bn2.transform) dir
	--整理骨骼
	for b in #(ik_bn1,ik_bn2,end_bn,rik_bn1,rik_bn2,rik_bn3) do
	(
		b.width = b.height = bsize
		b.parent = o_bn;o_bn = b
	)
	ik_bn1.name = rname+"_ik_bn1"; ik_bn2.name = rname+"_ik_bn2"; end_bn.name = rname+"_end_bn"; rik_bn1.name = rname+"_rik_bn1"; rik_bn2.name = rname+"_rik_bn2"; rik_bn3.name = rname+"_rik_bn3"
	
/* 创建第一段IK */
	local
	ik_prt = dummy boxsize:[hsize,hsize,hsize] transform:ik_bn1.transform name:(rname+"_IKPrt") wirecolor:green,
	ik_exp = ExposeTm displayExposedVals:off size:hsize transform:ik_prt.transform useParent:off name:(rname+"_IKExp") parent:ik_prt wirecolor:green centermarker:on axistripod:off cross:off Box:off
	ik_bn1.parent = ik_prt
	local
	ik_solver = IKSys.ikChain ik_bn1 end_bn "IKLimb",
	ik_ctrl = point size:hsize pos:ik_solver.transform.pos name:(rname+"_IKCtrl") wirecolor:green centermarker:off axistripod:off cross:on Box:on
	ik_solver.name = (rname+"_IKTag");ik_solver[3].goalSize = hsize
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
	local ctrl = ik_solver[3][2][1][1].controller = float_limit()
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
	
/* 绑定尾端控制器 */
	local
	end_ctrl_prt = ExposeTm displayExposedVals:off size:hsize transform:(matrix3 ik_bn2.transform[1] ik_bn2.transform[2] ik_bn2.transform[3] end_bn.transform[4]) useParent:off name:(rname+"_eprt") parent:ik_bn2 wirecolor:green centermarker:on axistripod:off cross:off Box:off,
	sdata = #(#(#([0,-0.0289333,-0.0957409], [0,-0.0135347,-0.100397], [0,-0.0700298,-0.0833155]), #([0,-0.1,0], [0,-0.1,-0.0451205], [0,-0.1,0.0451205]), #([0,-0.0289333,0.0957409], [0,-0.0700297,0.0833155], [0,-0.0135347,0.100397]), #([0.0286328,0,0.1], [0.0127098,0,0.1], [0.103825,0,0.1]), #([0.25421,0,0.1], [0.179018,0,0.1], [0.270133,0,0.1]), #([0.282843,-0.0289333,0.0957409], [0.282843,-0.0135348,0.100397], [0.282843,-0.0700298,0.0833155]), #([0.282843,-0.1,0], [0.282843,-0.1,0.0451205], [0.282843,-0.1,-0.0451205]), #([0.282843,-0.0289334,-0.0957409], [0.282843,-0.0700298,-0.0833154], [0.282843,-0.0135348,-0.100397]), #([0.25421,0,-0.1], [0.270133,0,-0.1], [0.179018,0,-0.1]), #([0.0286328,0,-0.1], [0.103825,0,-0.1], [0.0127098,0,-0.1]), true)),
	end_ctrl = createShape sdata transform:end_bn.transform size:(hsize*5) parent:end_ctrl_prt name:(rname+"_eIKCtrl") wirecolor:orange,
	--eIK骨骼点
-- 	l1 = distance bone4_list[1] bone4_list[2],l2 = distance bone4_list[2] bone4_list[3], l3 = distance bone4_list[3] bone4_list[4], --计算三节骨骼的长度
-- 	t1 = bone4_list[1].transform,t2 = bone4_list[2].transform,t3 = bone4_list[3].transform,t4 = bone4_list[4].transform,
-- 	p1 = t1.pos,p2,p3 = bone4_list[4].transform.pos,
-- 	rp3 = p3-p1,
	eik_dir = dir * -1,
	eik_d1 = l3, --p1对边长度,第二段骨骼的长度
	eik_d2 = d2, --p2对边,ik长度
	eik_d3 = l1+l2, --p3对边,第一段骨骼的长度
	eik_p2 = ((normalize rp3) * eik_d3) * (quat (acos((eik_d2^2+eik_d3^2-eik_d1^2)/(2*eik_d2*eik_d3))) eik_dir) + p1,
	eik_bn1 = BoneSys.createBone p1 eik_p2  dir,
	eik_bn2 = BoneSys.createBone eik_p2 p3 dir,
	eik_bn3 = BoneSys.createBone p3 ([eik_bn2.length+bsize,0,0] * eik_bn2.transform) dir
	eik_bn3.name = rname+"_eik_bn3";eik_bn2.name = rname+"_eik_bn2";eik_bn1.name = rname+"_eik_bn1"
	eik_bn3.parent = eik_bn2;eik_bn2.parent = eik_bn1;eik_bn1.parent = ik_exp
	eik_bn1.width = eik_bn1.height = eik_bn2.width = eik_bn2.height = eik_bn3.width = eik_bn3.height = bsize
	local
	eik_exp1 = ExposeTm displayExposedVals:off size:hsize transform:eik_bn2.transform useParent:off name:(rname+"_eIKexp1") parent:eik_bn2 wirecolor:green centermarker:on axistripod:off cross:off Box:off,
	eik_exp2 = ExposeTm displayExposedVals:off size:hsize transform:ik_bn2.transform useParent:off name:(rname+"_eIKexp2") parent:ik_bn2 wirecolor:green centermarker:on axistripod:off cross:off Box:off,
	eik_solver = IKSys.ikChain eik_bn1 eik_bn3 "IKLimb"
	eik_solver.name = (rname+"_eIKTag");eik_solver[3].goalSize = hsize
	eik_solver.transform = ik_solver.transform;eik_solver.parent = ik_exp
	--复用IK绑定
	eik_solver[3][2][1][1].controller = ik_solver[3][2][1][1].controller
	eik_bn1[3][4][3].controller = ik_bn1[3][4][3].controller
	--露出eIK参数
	eik_exp1.exposeNode = eik_bn2
	eik_exp2.exposeNode = ik_bn2
	eik_exp1.localReferenceNode = eik_exp2.localReferenceNode = ik_exp
-- 	point size:hsize transform:end_bn.transform name:(rname+"_eIKCtrl") parent:end_ctrl_prt wirecolor:orange centermarker:off axistripod:on cross:off Box:off
	setInheritanceFlags end_ctrl_prt #{1..6} keepPos:false
	setZeroTrans end_ctrl
	end_ctrl[3][2][2][3].value = acos(dot end_ctrl.transform[1] (ik_bn2.transform[1]*-1)) * (if dot (normalize (cross (ik_bn2.transform[1]*-1) end_ctrl.transform[1])) dir < 0 then -1 else 1) --活动控制器以增量对齐骨骼,可以用旋转到零来对齐到正IK.再用蒙皮姿态回到pose姿态.
	end_ctrl[3][2][1].value = (quat 0 0 1 0) --z轴反朝向
	end_ctrl_prt.exposeNode = ik_bn2
	end_ctrl_prt.localReferenceNode = ik_bn1
	local ctrl = end_ctrl[3][2][2][3].controller = float_limit()
	local subctrl = ctrl[2][1].controller = Float_Expression() --两组三角形的底角(两组三角形边长不等哦!)
	subctrl.AddScalarTarget "eDeg" eik_exp1[4][4]
	subctrl.AddScalarTarget "rDeg" eik_exp2[4][4]
	subctrl.SetExpression "-eDeg-rDeg"
	local subctrl = ctrl[2][2].controller = Float_Expression() --两组三角形的底角(两组三角形边长不等哦!)
	subctrl.AddScalarTarget "eDeg" eik_exp1[4][4]
	subctrl.AddScalarTarget "rDeg" eik_exp2[4][4]
	subctrl.SetExpression "eDeg-rDeg"
	end_bn[3][4][2].controller = end_ctrl[3][2].controller --应用以上准备好的控制器
		
/* 创建第二段反IK */
	--预先利用部分IK信息;并创建反IK结构
	local
	ik_ctrl = ik_prt,
	ik_prt = dummy boxsize:[hsize,hsize,hsize] pos:rik_bn1.transform.pos parent:end_bn name:(rname+"_rIKPrt") wirecolor:green,
	ctrl  = Float_Expression() --添加了主IK距离增量的原距离,绑定到ik_exp.ik_prop[1].controller
	ctrl.AddScalarConstant "prelen" ik_length
	ctrl.AddScalarTarget "predis" ik_exp.baseObject[17]
	rik_bn1.parent = ik_prt
	local
	ik_solver = IKSys.ikChain rik_bn1 rik_bn3 "IKLimb",
	ik_exp = ExposeTm displayExposedVals:off size:hsize transform:ik_prt.transform useParent:off name:(rname+"_rIKExp") parent:ik_prt wirecolor:green centermarker:on axistripod:off cross:off Box:off
	ik_solver.name = (rname+"_rIKTag");ik_solver[3].goalSize = hsize
	setInheritanceFlags ik_prt #{1..6} keepPos:false
	ik_prt.parent = end_bn
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
-- 	paramWire.connect ik_exp.baseObject[17] ik_exp.ik_prop[1] "Distance" --原距离
	ctrl.AddScalarTarget "dis" ik_exp.baseObject[17]
	ctrl.SetExpression ("if((predis > prelen),dis + (predis - prelen) * " + ((l1+l2)/ ik_length)as string + ",dis)") --添加了主IK距离增量的原距离,乘以相对于完整链长的比例.
	ik_exp.ik_prop[1].controller = ctrl --应用控制器
	local ctrl = ik_exp.ik_prop[1].controller = float_limit() --经过软限制的距离
	ctrl.upper_limit = rik_length
	ctrl.lower_limit = 0 -- 	ctrl.upper_smoothing = 0 -- 	ctrl.lower_smoothing = 0
	paramWire.connect ik_exp.ik_prop[2] ctrl[2][3] ("Soft_val*"+(rik_length/10)as string)
	--设置IK解算器限制
	local ctrl = ik_exp[3][2].controller = LookAt_Constraint()
	ctrl.lookat_vector_length = 0
	ctrl.target_axis = 0
	ctrl.pickUpNode = ik_prt
	ctrl.upnode_world = false
	ctrl.StoUP_axis = ctrl.upnode_axis = 1
	ctrl.appendTarget ik_ctrl 50
	ik_solver.transform = Translate (Rotate (matrix3 1) ik_exp.transform.rotation) ik_solver.transform.position --(local trans = ik_exp.transform;(Matrix3 trans[1] trans[2] trans[3] ik_solver.transform[4]))
	ik_solver.parent = ik_exp
	paramWire.connect ik_exp.baseObject[17] ik_solver[3][2][1][1] "Distance" --原距离
	local ctrl = ik_solver[3][2][1][1].controller = float_limit()
	ctrl.upper_limit = rik_length
	ctrl.lower_limit = 0 -- 	ctrl.upper_smoothing = 0 -- 	ctrl.lower_smoothing = 0
	local ctrl = ctrl[2][1].controller = Float_Expression()
	ctrl.AddScalarConstant "len" rik_length
	ctrl.AddScalarTarget "dis" ik_exp.baseObject[17]
	ctrl.AddScalarTarget "stretch" ik_exp.ik_prop[3]
	ctrl.SetExpression "if((dis > len), (dis-len)*stretch+len, len)"
	--绑定各项数值和效果
	local ctrl = rik_bn1[3][4][3].controller = Scale_Expression()
	ctrl.AddScalarConstant "len" rik_length
	ctrl.AddScalarTarget "dis" ik_exp.baseObject[17]
	ctrl.AddScalarTarget "ldis" ik_exp.ik_prop[1]
	ctrl.AddScalarTarget "soft" ik_exp.ik_prop[2]
	ctrl.AddScalarTarget "stretch" ik_exp.ik_prop[3]
	ctrl.SetExpression "vif((dis > len), [1,1,1] * (((len - ldis) + (dis - len)*stretch)/len + 1), [1,1,1] * ((dis - ldis)/len + 1))"
	--记录需要绑定的参数
-- 	append FKIK_subs 
	append Soft_subs ik_exp.ik_prop[2]
	append Stretch_subs ik_exp.ik_prop[3]
	
/* 创建测试用属性控制器 */
	local
	prop_ctrl = dummy boxsize:[hsize,hsize,hsize] pos:ik_bn1.transform.pos name:(rname+"_PropCtrl") wirecolor:yellow,
	prop_holder = EmptyModifier(),
	prop = attributes prop
	(
		rollout PropRollout "Properties Controller" 
		(
			spinner spn_FKIK "FK/IK:" width:80 range:[0, 1, 0] type:#float scale:0.1 align:#right
			spinner spn_Soft "Soft:" width:80 range:[0, 1, 0] type:#float scale:0.1 align:#right
			spinner spn_Stretch "Stretch:" width:80 range:[0, 1, 0] type:#float scale:0.1 align:#right
		)
		Parameters Properties rollout:PropRollout
		(	
			FKIK type:#float UI:spn_FKIK --限制控制器
			Soft type:#float UI:spn_Soft --IK软化值
			Stretch type:#float UI:spn_Stretch --拉伸值
		)
	)
	Custattributes.add prop_holder prop baseobject:false
	prop_holder.Prop.FKIK.controller = bezier_float ()
	prop_holder.Prop.Soft.controller = bezier_float ()
	prop_holder.Prop.Stretch.controller = bezier_float ()
	addmodifier prop_ctrl prop_holder
	
	for sub in Soft_subs do paramWire.connect prop_holder.Prop[2] sub "Soft"
	for sub in Stretch_subs do paramWire.connect prop_holder.Prop[3] sub "Stretch"
)

(
setCommandPanelTaskMode #create
bones_list = copy_bones_list (getcurrentselection()) --复制需要创建的骨骼
correct_IK_chain bones_list type:0 --扁平骨骼链,并纠正旋转
with animate off(rig_limb_seg3 bones_list)
)