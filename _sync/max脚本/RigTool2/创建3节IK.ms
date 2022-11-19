fn s3_IK bones_list_4 test:true = --构建三段IK,输入四节骨骼列表(包括末端).返回一个父接点和一次子接点.
(
	--准备创建IK骨骼
	local
	--IK骨骼点
	p1 = bones_list_4[1].transform.pos,p2,p3 = bones_list_4[4].transform.pos,
	--IK相对坐标
	rp3 = p3-p1,
	--长度
	d1 = (distance bones_list_4[1] bones_list_4[2]) + (distance bones_list_4[3] bones_list_4[4]), --p1对边长度,第二段骨骼的长度
	d2 = length rp3, --p2对边,ik长度
	d3 = length (bones_list_4[3].transform.pos - bones_list_4[2].transform.pos), --p3对边,第一段骨骼的长度
	--计算p2
	p2 = ((normalize rp3) * d3) * (quat (acos((d2^2+d3^2-d1^2)/(2*d2*d3))) (normalize(cross rp3 (bones_list_4[2].transform.pos-p1)))) + p1
	if test then for p in #(p1,p2,p3) do point pos:p size:1 name:(uniquename("ttt_"))
		
	--创建IK骨骼
-- 	local
-- 	size = (d1+d2+d3)/6,--宽度
-- 	ik_main_bn1 = BoneSys.createBone p1 p2 
	
	
)
s3_IK(getcurrentselection())


/* 1 原版从四节骨骼创建三段IK的推导流程 */
-- fn s3_IK bones_list_4 = --构建三段IK,输入四节骨骼列表(包括末端).返回一个父接点和一次子接点.
-- (
-- 	--创建IK骨骼
-- 	local
-- 	--IK骨骼点
-- 	p1 = bones_list_4[1].transform.pos,
-- 	p2,
-- 	p3 = bones_list_4[4].transform.pos,
-- 	--IK相对坐标
-- 	rp1 = [0,0,0],
-- 	rp2,
-- 	rp3 = p3-p1,
-- 	--长度
-- 	d1 = (distance bones_list_4[1] bones_list_4[2]) + (distance bones_list_4[3] bones_list_4[4]), --p1对边长度,第二段骨骼的长度
-- 	d2 = length rp3, --p2对边,ik长度
-- 	d3 = length (bones_list_4[3].transform.pos - bones_list_4[2].transform.pos), --p3对边,第一段骨骼的长度
-- 	size = (d1+d2)/5,--宽度
-- 	--计算p2
-- 	a1 = acos((d2^2+d3^2-d1^2)/(2*d2*d3)),--p1的三角形内角
-- 	axis = normalize(cross rp3 (bones_list_4[2].transform.pos-p1))
-- 	--p2 = (rotate (matrixfromnormal rp3) (quat a1 axis)).row3 + p1
-- 	p2 = ((normalize rp3) * d3) * (quat a1 axis) + p1 --第一个括号的意思是,用rp3的方向,d3的长度

-- 	for p in #(p1,p2,p3) do point pos:p size:1 name:(uniquename("ttt_"))
-- 	point pos:rp3 size:1 name:"ttt_000"
-- 	
-- 	
-- )
-- s3_IK(getcurrentselection())