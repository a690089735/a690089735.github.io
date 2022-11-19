fn GetAttachDatatest m ns = --n附着到m的数据
(
	--准备数据
	local IPM = MeshProjIntersect()
	IPM.SetNode m
	IPM.Build()
	
	for n in ns do
	(
		IPM.ClosestFace n.pos
		print #(IPM.GetHitFace(),IPM.GetHitBary()) #nomap
	
	)
	--释放内存
	IPM.free()
)

GetAttachDatatest $Sphere001 (getcurrentselection())