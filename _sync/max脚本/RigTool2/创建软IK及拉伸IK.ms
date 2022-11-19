fn IK_build_limb_with_soft_stretch bones_list:(getcurrentselection()) name:"IK_build_limb_soft_stretch" = --必须是3节骨骼,创建一个可以软拉直和拉伸的LimbIK
(
	local
	ik_bn1 = bones_list[1],ik_bn2 = bones_list[2],ik_bn3 = bones_list[3],
	ik_length = distance ik_bn1 ik_bn2 + distance ik_bn2 ik_bn3,
	ik_prt = dummy boxsize:([ik_length,ik_length,ik_length]/15) pos:ik_bn1.transform.pos wirecolor:green,
	ik_solver = IKSys.ikChain bones_list[1] bones_list[bones_list.count] "IKLimb",
	ik_ctrl = point size:(ik_length/15) pos:ik_solver.transform.pos name:(name+"_IKCtrl") wirecolor:green centermarker:off axistripod:off cross:on Box:on,
	ik_exp = ExposeTm displayExposedVals:off size:(ik_length/15) transform:ik_prt.transform useParent:off name:(name+"_IKExp") parent:ik_prt wirecolor:green centermarker:on axistripod:off cross:off Box:off
	ik_solver.name = (name+"_IKTag")
	
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
	ctrl.StoUP_axis = ctrl.upnode_axis = 1
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
	--核心 缩放 = (软距离*软权值 + 硬距离*拉伸权值 + 长度)/长度 = (软距离*软权值 + 硬距离*拉伸权值)/长度 + 1 = [(长度-Lmt_Dis)*软权值 + ((distanec-长度)+abs(distanec-长度))*0.5*拉伸权值]/长度 + 1
	local ctrl = ik_bn1[3][4][3].controller = Scale_Expression()
	ctrl.AddScalarConstant "len" ik_length
	ctrl.AddScalarTarget "dis" ik_exp.baseObject[17]
	ctrl.AddScalarTarget "ldis" ik_exp.ik_prop[1]
	ctrl.AddScalarTarget "soft" ik_exp.ik_prop[2]
	ctrl.AddScalarTarget "stretch" ik_exp.ik_prop[3]
	ctrl.SetExpression "vif((dis > len), [1,1,1] * (((len - ldis) + (dis - len)*stretch)/len + 1), [1,1,1] * ((dis - ldis)/len + 1))"
-- 	if dis > len then (((len - ldis)*soft + (dis - len)*stretch)/len + 1) else (((dis - ldis)*soft)/len + 1)
	
	
)
IK_build_limb_with_soft_stretch()