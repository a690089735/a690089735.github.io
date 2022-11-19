fn 重设骨骼端点 sk type:1 axis:1 = --仅按x轴重设,type 123对应xyz
(
	fn GetBoneNodes sk = for i in refs.dependson sk where isvalidnode i collect i
	local
	skbones = GetBoneNodes sk,
	i = 0
	for b in skbones do
	(
		i += 1
		local 
		bb = (nodeGetBoundingBox b b.transform),
		len = bb[2][type] - bb[1][type],
		pos2 = [0,0,0]
		pos2[axis] = len
		skinOps.SetStartPoint sk i pos2
		skinOps.SetEndPoint sk i [0,0,0]
	)
)
重设骨骼端点 $.skin type:1 axis:3