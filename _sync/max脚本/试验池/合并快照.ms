--拼接模型,用于取代快照+attach,主要是attach可能存在意外问题
fn SnapShotMeshes Geos wirecolor:gray name:"" = 
(
	fList = #()
	fSmoothGroup = #() --面所属的光滑组,32位整数,很有趣.(二进制0和1代表未选中和选中,转为10禁止的结果.)
	eHideSet = #() --网格总是三角面,四边面只是隐藏了边
	vList = #()
	for g in geos do
	(
		m = snapshotasmesh g
		
		vCount = vList.count
		fList += for i = 1 to m.numfaces collect (append fSmoothGroup (getFaceSmoothGroup m i);append eHideSet (for j = 1 to 3 where not(getEdgeVis m i j) collect j);(getFace m i) + vCount)--先取面列表,因为其需要加vList的数量getNumFaces 
		vList += for i = 1 to m.numverts collect getVert m i --getNumFaces
	)
	result = mesh vertices:vList faces:fList wirecolor:wirecolor name:name
	
	for i = 1 to fSmoothGroup.count do
	(
		setFaceSmoothGroup result i fSmoothGroup[i]
		for j in eHideSet[i] do setEdgeVis result i j false
	)
	
	result
)
-- SnapShotMeshes (getcurrentselection())


