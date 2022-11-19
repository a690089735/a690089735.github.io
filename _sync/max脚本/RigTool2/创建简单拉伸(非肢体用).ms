fn simple_stretch_ik bonelist =
(
	local
	b1 = bonelist[1],
	b2 = bonelist[2],
	b3 = bonelist[3],
	len = distance b1 b2 + distance b2 b3,
	size = len*.1,
	prt = Dummy transform:b1.transform boxsize:[size,size,size],
	etp = ExposeTm displayExposedVals:off size:size transform:b1.transform useParent:off parent:prt wirecolor:green centermarker:off axistripod:on cross:off Box:off
	
	prt.parent = b1.parent
	b1.parent = etp
	
	local
	solver = IKSys.ikChain b1 b3 "IKLimb",
	ik_prop = attributes ik_prop
	(
		Parameters ik_prop
		(	
			Lmt_Dis type:#float --限制控制器
		)
	)
	Custattributes.add etp ik_prop baseobject:false
	paramWire.connect etp.baseObject[17] etp.ik_prop[1] "Distance" --原距离
	
	etp.exposeNode = solver
	etp.localReferenceNode = prt
	solver[3].controller.goalSize = size
	
	local ctrl = etp.ik_prop[1].controller = float_limit() --经过软限制的距离
	ctrl.upper_limit = len
	ctrl.upper_smoothing = len*.382 --自己手动去改这个值
	ctrl.upper_limit_enabled = on
	ctrl.Enable = on
	ctrl.lower_limit = 0
	ctrl.lower_limit_enabled = off
	-- 	ctrl.upper_smoothing = 0 -- 	ctrl.lower_smoothing = 0
	
	local ctrl = b1[3][4][3].controller = Scale_Expression()
	ctrl.AddScalarConstant "len" len
	ctrl.AddScalarTarget "dis" etp.baseObject[17]
	ctrl.AddScalarTarget "ldis" etp.ik_prop[1]
	ctrl.SetExpression "[1,1,1] * ((dis - ldis)/len + 1)"
)
 simple_stretch_ik (getCurrentSelection())