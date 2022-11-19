-- fn collectElementFirstVerts node = if iskindof node Editable_Poly do
--  (
--  	getelement = polyop.getelementsusingface 
--  	geteverts = polyop.getfaceverts
--  
--  	faces = #{1..node.numfaces}
--  	firstverts = #{} 
--  	while not faces.isEmpty do for f in faces while
--  	(
--  		ee = getelement node f
--  		faces -= ee
--  		append firstverts (geteverts node f)[1]
-- 		print (geteverts node f)
--  		off
--  	)
--  	do()
--  	firstverts
--  )
--  $.selectedverts = (collectElementFirstVerts $)
--  
 
 fn SplitVerticesByElements n = --按元素分割顶点,下面试了试按开方边分割,但是发现好像元素可能没有开放边...而且这个分割跳过了孤立点.
 (
	if iskindof n GeometryClass do
	(
		local 
		m = snapshotasmesh n,
		getelement = meshop.getElementsUsingFace, --<Mesh mesh> <facelist> fence:<facelist=unsupplied>
		geteverts = meshop.getVertsUsingFace, --<Mesh mesh> <facelist>
		faces = #{1..m.numfaces},
		elements = #()
		while not faces.isEmpty do
		(
			local f
			for i in faces do exit with f = i
			print f
			ee = getelement m f
			append elements (geteverts m ee)
			faces -= ee
			if keyboard.escPressed do exit
		)
		elements 
	)
 )
 
--  meshop.getOpenEdges <Mesh mesh> 
--  meshop.getOpenEdges
  --还是得有个按开放边分配权重的功能,没有开放边或者有多个开放边可能会有问题
 fn SplitVerticesByElementsWithOpen n = 
 (
	if iskindof n GeometryClass do
	(
		local 
		m = snapshotasmesh n,
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
		for element in elements do
		(
-- 			print #("element:",element) #nomap
			local openvert = element * openverts
-- 			print #("openvert:",openvert) #nomap
		)
	)
 )
 
--按开放边设置元素权重,仅在完美情况下有用,没有开放边的元素无法被识别,有多个开放边的元素也会平均开放边的权重赋给整体.
fn setElementseightsByOpenEdges n sk:$.skin = 
(
	if iskindof n GeometryClass and classof sk == skin do
	undo "Weights Elementalization By Open Edges" on(
		skinOps.bakeSelectedVerts sk --为了可以撤销
		local
		m = snapshotasmesh n,
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
		for element in elements do
		(
			--每个元素计算时,都要清空骨骼和权重列表.
			local
			e_Bones = #(),
			e_Weigths = #(),
			openvert = element * openverts, --相当于从总的开放点中取出此元素的开放点.
			divisor = openvert.numberset as float
			--用openvert计算权重,赋值给element即可
			--一个骨骼列表,一个顶点列表,逐个顶点处理
			--如果骨骼id不在列表中,则添加,值为权重*(1.0/openvert.numberset);骨骼ID在列表中,则原权重值自加权重*(1.0/openvert.numberset)
			for vid in openvert do
			(
-- 				print vid
				for i = 1 to skinOps.GetVertexWeightCount sk vid do 
				(
					local
					bid = skinOps.GetVertexWeightBoneID sk vid i,
					wt = skinOps.GetVertexWeight sk vid i,
					wid = finditem e_Bones bid
-- 					print #(bid,wt,wid) #nomap
					if wid > 0 then --骨骼在列表中
					(
						e_Weigths[wid] += (wt/divisor)
						
					)else --骨骼不在列表中
					(
						append e_Bones bid
						append e_Weigths (wt/divisor)
					)
-- 					print #(divisor,e_Bones,e_Weigths , "-----") #nomap
				)
			)
			--用 骨骼列表, 顶点列表 来赋值整体权重
-- 			print #(divisor,e_Bones,e_Weigths) #nomap --已经可以初步运行,权重值大于一的问题已解决,因为忘记清空数组了.
			for vid in element do skinOps.ReplaceVertexWeights sk vid e_Bones e_Weigths
-- 			print #("openvert:",openvert) #nomap
		)
	)
)

 
 --获取开放边列表
 --分割元素[数组点]
 --按元素[数组点]获取边.取其和开放边列表共有的边.#{} * #{}
 --取共有边的顶点(要计算权重的点)
 --利用本循环的元素点(要被设置权重的点)
 
--下面的不行,因为获取的开放边是所有边
 --根据开放边获取点(用于计算权重的点),根据点获取面,根据面获取元素,根据元素获取点(需要被赋予权重的点),
 --根据获取的点获取边,从开放边列表中减去获取的边,继续花去开放边.