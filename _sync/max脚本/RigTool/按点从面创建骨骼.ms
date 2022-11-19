
--根据选择顶点从面创建骨骼
fn CreteBonesByPaF m n = --n附着到m,createPrt表示使用父物体附着,p2m:是否将附着物体链接给m物体,CreteBonesByPointAndFace
(
	--准备数据
	local
	tm = snapshot m, --对于一些物体,面起始索引可能有问题,转换一下可以兼容(比如球体和box的起始索引不同,具体原因不明,但是确实发生了这些问题.)
	vertList = n.selectedVerts
	IPM = MeshProjIntersect()
	IPM.SetNode tm
	IPM.Build()
	
	for v in vertList do
	(
		IPM.ClosestFace v.pos
		
		--获取数据
		local
		pos = IPM.GetHitPos(), --获取最近的坐标
		face = IPM.GetHitFace(), --获取面id,从0开始
		dir = (getFaceNormal tm (face+1)) * (matrix3 [1,0,0] [0,0,-1] [0,1,0] [0,0,0])
		--创建骨骼
		BoneSys.createBone pos v.pos dir
	)
	--释放内存
	IPM.free()
	delete tm
)
 CreteBonesByPaF $[2] $[1] --先选刺,再选附着面