fn 按元素绑定到模型 子模型 父模型 o1 o2 name:"test_" =
(
	--拆分成元素点依赖
	fn SplitVerticesByElements m = --按元素分割顶点,下面试了试按开方边分割,但是发现好像元素可能没有开放边...而且这个分割跳过了孤立点.
	(
		local
		getelement = meshop.getElementsUsingFace, --<Mesh mesh> <facelist> fence:<facelist=unsupplied>
		geteverts = meshop.getVertsUsingFace, --<Mesh mesh> <facelist>
		faces = #{1..m.numfaces},
		openverts = meshop.getVertsUsingEdge m (meshop.getOpenEdges m),
		elements = #()
		while not faces.isEmpty do
		(
			local f
			for i in faces do exit with f = i
			ee = getelement m f
			append elements (geteverts m ee)
			faces -= ee
			if keyboard.escPressed do exit
		)
		elements
	)
	
	--获取元素点,按元素点的边界点坐标创建物体,获取数据[准备绑定]
	local
	index = 0,
	cm = snapshotasmesh 子模型,
	elements = SplitVerticesByElements cm,
	openverts = meshop.getVertsUsingEdge cm (meshop.getOpenEdges cm),
	bb = nodeGetBoundingBox 子模型 子模型.transform,
	size = (bb = bb[2]-bb[1];(bb[1]+bb[2]+bb[3])/elements.count),
	points = 
	for element in elements collect
	(
		index += 1
		local
		openvert = element * openverts, --相当于从总的开放点中取出此元素的开放点.
		pos = [0,0,0]
		for i in openvert do pos += getvert cm i
		pos /= openvert.numberset
		point pos:pos name:(name+index as string) size:size wirecolor:yellow
		
	)
	datas = 
	(
		local
		IPM = MeshProjIntersect(),
		tm = snapshot 父模型
		IPM.SetNode tm
		IPM.Build()
		
		col = for p in points collect
		(
			IPM.ClosestFace p.pos
			#(IPM.GetHitFace(),IPM.GetHitBary())
		)
		
		IPM.free()
		delete tm
		
		col
	)

	--附着物体
	setCommandPanelTaskMode #create
	for i = 1 to points.count do
	(
		local
		p = points[i],
		ctrl = Attachment(),
		data = datas[i]
		
		ctrl.node = 父模型
		ctrl.align = true
		local key1 = AttachCtrl.addNewKey ctrl 0f
		key1.face = data[1]
		key1.coord = [data[2][1],data[2][2]]
		
		p[3][1].controller = ctrl
		p.parent = 父模型
		
		ctrl = p[3][2].controller = Orientation_Constraint()
		ctrl.appendTarget o1 50.0
		ctrl.appendTarget o2 50.0
		ctrl.relative = true
	)
	
	--添加蒙皮
	local sk = skin()
	addmodifier 子模型 sk
	select 子模型
	setCommandPanelTaskMode #modify
	for i in points do skinOps.addbone sk i 0
	completeRedraw() --必须刷新才能让顶点数更新,否则修改器的顶点数一直是0
	for i = 1 to elements.count do
	(
		local
		el = elements[i]
		for vid in el do skinOps.SetVertexWeights sk vid i 1
	)
	
)
按元素绑定到模型 $[1] $[2] $LLian_hub_spine_head $LLian_hub_spine name:"LLian_Thorn03_Bn_"