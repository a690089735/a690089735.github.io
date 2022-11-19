try(DestroyDialog moveToTool)catch()
rollout moveToTool "移动到" width:160 height:120
(	
	--以后可以加一个计算法线的功能
	--以后拾取器加一个过滤功能
	fn GeoFilt o = (superClassOf o == GeometryClass)
	
	--垂直对齐功能
	fn moveToAxis dir =
	(
		local
		m = pickObject message:"选择目标物体" filter:GeoFilt --有时候选择不到,看看左上角是不是开启了选择过滤
		if isValidNode m then
		(
			local
			tm = snapshot m --对于一些物体,面起始索引可能有问题,转换一下可以兼容(比如球体和box的起始索引不同,具体原因不明,但是确实发生了这些问题.)
			
			for i in getCurrentSelection() do --使用move也可以支持动画
			(
				local
				opos = i.transform.pos,
				testRay = ray opos dir,
				rpoint = intersectRay tm testRay
				if rpoint != undefined do move i (rpoint.pos - opos)
			)
			--释放内存
			delete tm
			gc light:true
		)else
		(
			messageBox "无效的目标物体."
		)
	)
	
	button 'btn_toV' "移动到点" pos:[8,8] width:144 height:32 toolTip:"移动选择物体到模型顶点" align:#left
	button 'btn_toM' "移动到面" pos:[8,48] width:144 height:32 toolTip:"移动选择物体到模型" align:#left
	button 'btn_X' "X" pos:[8,88] width:24 height:24 align:#left
	button 'btn_Y' "Y" pos:[32,88] width:24 height:24 align:#left
	button 'btn_Z' "Z" pos:[56,88] width:24 height:24 align:#left
	button 'btn_FX' "-X" pos:[80,88] width:24 height:24 align:#left
	button 'btn_FY' "-Y" pos:[104,88] width:24 height:24 align:#left
	button 'btn_FZ' "-Z" pos:[128,88] width:24 height:24 align:#left
	
	
	on btn_toV pressed do
	undo "move to vert" on(
		local
		m = pickObject message:"选择目标物体" filter:GeoFilt --有时候选择不到,看看左上角是不是开启了选择过滤
		if isValidNode m then
		(
			local
			tm = snapshot m, --对于一些物体,面起始索引可能有问题,转换一下可以兼容(比如球体和box的起始索引不同,具体原因不明,但是确实发生了这些问题.)
			IPM = MeshProjIntersect()
			IPM.SetNode tm
			IPM.Build()
-- 			IPM.IntersectRay()
			for i in getCurrentSelection() do --使用move也可以支持动画
			(
				local opos = i.transform.pos
				IPM.ClosestFace opos
				
				local 
				face = IPM.GetHitFace() + 1, --获取面id,从0开始
				coor = IPM.GetHitBary(), --获取重心坐标
				vid = 1
				for i = 2 to 3 where coor[vid] < coor[i] do vid = i
					
				local tpos = in coordsys world (getVert tm (getFace tm face)[vid])
				move i (tpos - opos)
				print #(face,getFace tm face)
			)
			
			--释放内存
			IPM.free()
			delete tm
			gc light:true
		)else
		(
			messageBox "无效的目标物体."
		)
	)
	on btn_toM pressed do
	undo "move to mesh" on(
		local
		m = pickObject message:"选择目标物体" filter:GeoFilt --有时候选择不到,看看左上角是不是开启了选择过滤
		if isValidNode m then
		(
			local
			tm = snapshot m, --对于一些物体,面起始索引可能有问题,转换一下可以兼容(比如球体和box的起始索引不同,具体原因不明,但是确实发生了这些问题.)
			IPM = MeshProjIntersect()
			IPM.SetNode tm
			IPM.Build()
-- 			IPM.IntersectRay()
			for i in getCurrentSelection() do --使用move也可以支持动画
			(
				local opos = i.transform.pos
				IPM.ClosestFace opos
				
				local tpos = IPM.GetHitPos()
				move i (tpos - opos)
			)
			
			--释放内存
			IPM.free()
			delete tm
			gc light:true
		)else
		(
			messageBox "无效的目标物体."
		)
	)
	on btn_X pressed  do
	undo "move to mesh by X" on(
		moveToAxis [1,0,0]
	)
	on btn_Y pressed  do --向正Y方向移动到表面
	undo "move to mesh by Y" on(
		moveToAxis [0,1,0]
	)
	on btn_Z pressed  do
	undo "move to mesh by Z" on(
		moveToAxis [0,0,1]
	)
	on btn_FX pressed  do
	undo "move to mesh by FX" on(
		moveToAxis [-1,0,0]
	)
	on btn_FY pressed  do
	undo "move to mesh by FY" on(
		moveToAxis [0,-1,0]
	)
	on btn_FZ pressed do
	undo "move to mesh by FZ" on(
		moveToAxis [0,0,-1]
	)
)
CreateDialog moveToTool 