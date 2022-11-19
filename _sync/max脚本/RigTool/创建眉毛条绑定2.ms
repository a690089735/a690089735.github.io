undo "brow rig" on(
	fn BrowChainRig spl bonenum rigname:"" limit:true = --提供一个只有两个点的样条线,按其创建骨骼和绑定.时间原因,用limit来临时规避矩阵过90度翻转的问题.
	(
		--四元数点乘
		fn dotQuat q q_prev = --false返回相向,true返回相反则需要计算
		( 
		   (q.w * q_prev.w + q.x * q_prev.x + q.y * q_prev.y + q.z * q_prev.z) < 0 
		)
		
		--变换插值
		fn blendMatrix m1: m2: weight:0.5 dotQuat:dotQuat =
		(
			r1 = m1.rotationpart
			r2 = m2.rotationpart
			if (dotQuat r1 r2) do r1 *=-1
			
			r = slerp (normalize r1) (normalize r2) weight
			t = m1.translationpart + (m2.translationpart - m1.translationpart) * weight
			s = m1.scalepart
			translate (rotate (scale (matrix3 1) s true) r) t  -- ignores scale
		)
		
		--根据3个位置,求一个变换矩阵
		fn p2m v1 v2 v3 flipx:false = 
		(
			local
			x = normalize(if flipx then v1 - v2 else v2 - v1), y = normalize(v3 - v1),z = if abs(dot x y) < 1 then normalize(cross x y) else [0,0,1]
			y = cross z x
			(matrix3 x y z v1)
		)
		
		--矩阵对齐
		fn tempAlignM ma mb dotQuat:dotQuat = --将ma与mb对齐(仅局部对齐)
		(
			local 
			q = ma as quat,
			q_prev = mb as quat,
			pos = ma[4]
			if (dotQuat q q_prev) do
			(
				rotate ma (quat 180 ma[1])
				ma.pos = pos
			)
			ma
		)
		
		--矩阵y轴对齐
		fn alignM_Y ma mb = --将ma与mb对齐
		(
			local
			tz = cross ma[1] mb[2],
			ny = cross tz ma[1],
			nz = cross ma[1] ny
			(matrix3 ma[1] (normalize(ny)) (normalize(nz)) ma[4])
		)

		
		--字符占位
		fn cstr str num:3 = 
		(
			local str = str as string
			for i = 1 to num - str.count do str = "0" + str
			str
		)
		
	-- 	冻结变换
		mapped fn freezePosRot objs = 
		(
			for obj in objs do 
			(
				obj.pos.controller = bezier_position ()
				obj.pos.controller = position_list ()
				obj.pos.controller.Available.controller =  Position_XYZ ()
				obj.pos.controller.Active = 2
				
				obj.rotation.controller = Euler_XYZ ()
				obj.rotation.controller = rotation_list ()
				obj.rotation.controller.Available.controller = Euler_XYZ ()
				obj.rotation.controller.Active = 2
			)
		)
	-- 	添加子变换
		mapped fn setSubPosRot objs = 
		(
			for obj in objs do 
			(
				obj[3][1].controller = position_list ()
				obj[3][1][2].controller =  Position_XYZ ()
				obj[3][1].controller.Active = 2
				
				obj[3][2].controller = rotation_list ()
				obj[3][2][2].controller = Euler_XYZ ()
				obj[3][2].controller.Active = 2
			)
		)
		
		--必要数据
		local
		len = curveLength spl 1,
		size = len/bonenum,
		p1 = in coordsys world getKnotPoint spl 1 1,
		p2 = in coordsys world getOutVec spl 1 1,
		p3 = in coordsys world getInVec spl 1 2,
		p4 = in coordsys world getKnotPoint spl 1 2,
		handle1 = distance p2 p1,
		handle2 = distance p3 p4,
		t1 = p2m p1 p2 p3,
	-- 	t2 = p2m p4 p3 p2 flipx:true,
		t2 = tempAlignM (p2m p4 p3 p2 flipx:true) t1,
		prt = dummy name:(rigname+"_Prt") boxsize:[size,size,size] transform:(blendMatrix m1:t1 m2:t2),
		ctrla = point name:(rigname+"_CtrlA") transform:t1 size:size box:on axistripod:off centermarker:off cross:off wirecolor:Yellow parent:prt,
		ctrlb = point name:(rigname+"_CtrlB") transform:t2 size:size box:on axistripod:off centermarker:off cross:off wirecolor:Yellow parent:prt,
		--创建点
		points = for i = 1 to bonenum+1 collect 
		(
			p = point name:(rigname+"_P"+cstr i) size:size wirecolor:orange centermarker:off axistripod:on cross:off Box:off parent:prt
			ctrl = p[3].controller = transform_Script()
			ctrl.AddTarget "CATrans" ctrla[3]
			ctrl.AddTarget "CBTrans" ctrlb[3]
			p
		)
		
		--控制器绑定
		freezePosRot #(ctrla,ctrlb)
-- 		if limit do --无法进行限制,因为必须是二者相对90度才会有问题,这是两个变量,很麻烦.
-- 		(
-- 			for o in #(ctrla,ctrlb) do
-- 			(
-- 				
-- 			)
-- 		)
		
		--创建绑定
		local count = bonenum---1
		for i = 0.0 to bonenum do
		(
			local
			id = i as integer+1,
			p = points[id],
			t = i / bonenum,
			rt = 1 - t
			--全局位置控制器
			
			ctrl = p[3].controller

			if id <= bonenum then
			(
				ctrl.AddTarget "Look" Points[id+1][3]
		-- 		str = "pos = " + rt as string + "^3*CATrans.pos + 3*"+rt as string+"^2*"+t as string+"*(["+HandleSize as string+",0,0]*CATrans) + 3*"+rt as string+"*"+t as string+"^2*([-"+HandleSize as string+",0,0]*CBTrans) + "+t as string+"^3*CBTrans.pos"
				str = "pos = " + (rt^3) as string + "*CATrans.pos + "+(3*rt^2*t) as string+"*(["+handle1 as string+",0,0]*CATrans) + "+(3*rt*t^2) as string+"*([-"+handle2 as string+",0,0]*CBTrans) + "+(t^3) as string+"*CBTrans.pos"
				str += "\nx = normalize(Look.pos - pos);y = normalize(CATrans[2]*"+rt as string+" + CBTrans[2]*"+t as string+");z = cross x y"
				str += "\nscale (matrix3 x (normalize(cross z x)) z pos) (CATrans.scale * "+rt as string+" + CBTrans.scale * "+t as string+")"
				ctrl.script = str
			)else
				ctrl.script = "CBTrans"
		)
		
		--添加可视化参考
		
		--创建骨骼
		local
		oldprt = prt,
		bsize = (size/bonenum)*2,
		cctrl
		for i = 1 to bonenum do
		(
			local 
			sp = points[i],
			ep = points[i+1],
			b = BoneSys.createBone sp.transform.pos ep.transform.pos sp.dir
			
			b.name = rigname+"_b"+cstr i
			b.width = b.height = bsize
			b.sidefins = b.frontfin = b.backfin = off
			
			b.parent = oldprt
			oldprt = b
			
			cctrl = b[3][1].controller = Position_Constraint()
			cctrl.appendTarget sp 50.0
			cctrl = b[3][2].controller = Orientation_Constraint()
			cctrl.appendTarget sp 50.0
			setSubPosRot b
		)
		local
		eid = bonenum+1,
		sp = points[eid],
		ep = [bsize,0,0] * points[eid].transform,
		b = BoneSys.createBone sp.transform.pos ep sp.dir
		
		b.name = rigname+"_bEnd"
		b.width = b.height = bsize
		b.sidefins = b.frontfin = b.backfin = off
		b.parent = oldprt
		
		cctrl = b[3][1].controller = Position_Constraint()
		cctrl.appendTarget sp 50.0
	)
BrowChainRig $ 5 rigname:"LLian_Brow_R"
)