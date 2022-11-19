try(destroydialog attachmentRollout)catch()
rollout attachmentRollout "快捷附着" width:176 height:56
(
	fn rotate2 obj rot_q = --可用于注视约束的旋转功能,当.set_orientation 为真,且.relative为假时.可以交互式的设置旋转偏移.
	(
		rotate obj (quatToEuler2(rot_q - obj.transform.rotation)) --注意,$.rotation和$.transform.rotation的结果并不一定一样.
	)
	--核心附着函数
	fn attachP2M m ns createPrt:true t:-1f align:true p2m:false = --n附着到m,createPrt表示使用父物体附着,p2m:是否将附着物体链接给m物体
	(
		--准备数据
		local
		tm = snapshot m, --对于一些物体,面起始索引可能有问题,转换一下可以兼容(比如球体和box的起始索引不同,具体原因不明,但是确实发生了这些问题.)
		IPM = MeshProjIntersect()
		IPM.SetNode tm
		IPM.Build()
		
		for n in ns do
		(
			IPM.ClosestFace n.pos
			
			--获取数据
			local
			pos = IPM.GetHitPos(), --获取最近的坐标
			dis = IPM.GetHitDist(), --获取距离
			face = IPM.GetHitFace(), --获取面id,从0开始
			coor = IPM.GetHitBary() --获取重心坐标,取其1和2即可
			
			--准备控制器
			local ctrl = Attachment()
			ctrl.node = m
			ctrl.align = align
			local key1 = AttachCtrl.addNewKey ctrl t
			key1.face = face
			key1.coord = [coor[1],coor[2]]
			
			local
			rq = n.transform.rotation
			
			if createPrt then 
			(
				local p = point name:(n.name+"_Atp") pos:pos centermarker:on axistripod:off cross:off Box:off size:(dis*0.5) wirecolor:green
				p.parent = if p2m then m else n.parent
				p[3][1].controller = ctrl
-- 				if align do if isvalidnode p.parent then p.rotation = p.parent.rotation else p.rotation = (quat 0 0 0 1)--纠正旋转,不好用
				n.parent = p
			)else
			(
				if p2m do n.parent = m
				n.pos = pos
				n[3][1].controller = ctrl
-- 				if align do if isvalidnode n.parent then n.rotation = n.parent.rotation else n.rotation = (quat 0 0 0 1)--纠正旋转,不好用
			)
			rotate2 n rq --纠正旋转
		)
		--释放内存
		IPM.free()
		delete tm
	)
	
	checkbox chk_a "对齐到表面" pos:[8,8] width:80 height:16 checked:true
	checkbox chk_c "创建父物体" pos:[88,8] width:80 height:16 checked:true
	spinner spn_k "附着帧" pos:[24,30] width:72 height:16 range:[-100,100,-1] type:#integer scale:1
	pickbutton btn3_r "附着到.." pos:[104,28] width:64 height:20
	
	on btn3_r picked obj do
	(
		undo "attach to mesh" on attachP2M obj (getcurrentselection()) createPrt:chk_c.checked t:spn_k.value align:chk_a.checked
	)
)
createdialog attachmentRollout