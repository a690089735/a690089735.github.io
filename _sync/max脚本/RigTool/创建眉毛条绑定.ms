fn BrowChainRig spl bonenum rigname:"" = --提供一个只有两个点的样条线,按其创建骨骼.
(
	--变换插值
	
	fn blendMatrix m1: m2: weight:0.5 =
	(
		fn dotQuat q q_prev =
		( 
		   (q.w * q_prev.w + q.x * q_prev.x + q.y * q_prev.y + q.z * q_prev.z) < 0 
		)
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
	
	--获取4个位置 起点 起点末端 终点首端 终点,用于计算控制器位置和方向.
	local
	len = curveLength spl 1,
	size = len/bonenum,
	sk = (skin()),
	sik = (Spline_IK_Control box:off helper_axistripod:off helper_centermarker:on helper_cross:off linkTypes:2 helper_size:size),
	
	p1 = in coordsys world getKnotPoint spl 1 1,
	p2 = in coordsys world getOutVec spl 1 1,
	p3 = in coordsys world getInVec spl 1 2,
	p4 = in coordsys world getKnotPoint spl 1 2,
		
	--创建两个控制点
	--1 位置:起点位置,方向:z:起点 起点末端 终点首端 x:起点-起点末端
	--2 位置:终点 ,方向:z:起点末端 终点首端 终点x:终点-终点首端
	t1 = p2m p1 p2 p3,
	t2 = p2m p4 p3 p2 flipx:true,
	ctrl1 = point name:(rigname+"_CtrlA") transform:t1 size:size box:on axistripod:off centermarker:off cross:off wirecolor:blue,
	ctrl2 = point name:(rigname+"_CtrlB") transform:t2 size:size box:on axistripod:off centermarker:off cross:off wirecolor:blue,
	prt = dummy name:(rigname+"_Prt") boxsize:[size,size,size] transform:(blendMatrix m1:t1 m2:t2)
	spl.parent = ctrl1.parent = ctrl2.parent = prt
	--为spl添加修改器
	-- 两个控制点控制 .helper_list中的点,记得命名helper_list,
	--样条线IK会有多重变换的问题
-- 	addmodifier spl sik
-- 	sik.createHelper 2
-- 	for h in sik.helper_list do (h.wirecolor = yellow;h.name = rigname+"_SplP"+i as string)
-- 	sik.helper_list[1].parent = ctrl1
-- 	sik.helper_list[2].parent = ctrl2
	--skin的效率比较低
	setCommandPanelTaskMode #modify
	addmodifier spl sk
	skinOps.addbone sk ctrl1 0
	skinOps.addbone sk ctrl2 0
	classof spl --更新sk的骨骼
	for i = 1 to 3 do (skinOps.SetVertexWeights sk i 1 1)
	for i = 4 to 6 do (skinOps.SetVertexWeights sk i 2 1)
	
	--按样条线和骨骼数量+1,创建路径点.
	--约束路径点,路径约束和方向约束.
	for i = 1 to bonenum+1 do
	(
		local p = point name:(rigname+"_Bn"+i as string) size:size box:off axistripod:on centermarker:off cross:off wirecolor:blue parent:prt,
		ctrl = p[3][1].controller = path_constraint()
		ctrl.path = spl
		ctrl.percent = ((i-1.0)/bonenum)*100
		deleteKeys ctrl.percent.keys #allKeys
-- 		ctrl.follow = true
		
	)
	
	--创建骨骼,约束骨骼到路径点(注视约束到下一个,本一个为upnode,注视x,方向z或y,首选z,因为在控制点创建时z轴是计算过的.)
)

--测试
-- test_modf = (Spline_IK_Control box:off helper_axistripod:off helper_centermarker:off helper_cross:on linkTypes:2 helper_size:1)
-- addmodifier $ test_modf
-- test_modf.helper_list = #($point001,$point002,$point003)
--添加进去的物体,无论如何都是与世界对齐的.
--如果添加的是点辅助对象,可以无损操作,如果是
BrowChainRig $ 3 rigname:""