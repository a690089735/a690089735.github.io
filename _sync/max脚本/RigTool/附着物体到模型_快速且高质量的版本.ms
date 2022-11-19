try(destroydialog attachmentRollout)catch()
rollout attachmentRollout "快捷附着" width:176 height:56
(
	--核心附着函数
	fn attachP2M m n createPrt:true t:-1f align:true p2m:false = --n附着到m,createPrt表示使用父物体附着,p2m:是否将附着物体链接给m物体
	(
		--准备数据
		local
		tm = snapshot m,
		IPM = MeshProjIntersect()
		IPM.SetNode tm --对于一些物体,面起始索引可能有问题,转换一下可以兼容(比如球体和box的起始索引不同,具体原因不明,但是确实发生了这些问题.)
		IPM.Build()
		IPM.ClosestFace n.pos
		
		--获取数据
		local
		pos = IPM.GetHitPos(), --获取最近的坐标
		dis = IPM.GetHitDist(), --获取距离
		face = IPM.GetHitFace(), --获取面id,从0开始
		coor = IPM.GetHitBary() --获取重心坐标,取其1和2即可
		
		--释放内存
		IPM.free()
		delete tm
		
		--准备控制器
		local ctrl = Attachment()
		ctrl.node = m
		ctrl.align = align
		local key1 = AttachCtrl.addNewKey ctrl t
		key1.face = face
		key1.coord = [coor[1],coor[2]]
		
		if createPrt then 
		(
			local p = point name:(n.name+"_Atp") pos:pos centermarker:on axistripod:off cross:off Box:off size:(dis*0.5) wirecolor:green
			p.parent = if p2m then m else n.parent
			p[3][1].controller = ctrl
			n.parent = p
		)else
		(
			if p2m do n.parent = m
			n.pos = pos
			n[3][1].controller = ctrl
		)
	)
	
	pickbutton btn3_r "附着到.." pos:[104,28] width:64 height:20
	checkbox chk_a "对齐到表面" pos:[8,8] width:80 height:16 checked:true
	spinner spn_k "附着帧" pos:[24,30] width:72 height:16 range:[-100,100,-1] type:#integer scale:1
	
	local m
	
	checkbox chk_c "创建父物体" pos:[88,8] width:80 height:16 checked:true
	on btn3_r picked obj do
	(
		for n in (getcurrentselection()) do attachP2M obj n createPrt:chk_c.checked t:spn_k.value align:chk_a.checked
	)
)
createdialog attachmentRollout