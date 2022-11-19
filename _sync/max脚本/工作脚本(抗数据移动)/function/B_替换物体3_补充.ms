--开立方根 65.0^(0.333333) 使用65^(0.333333) 可以开出近似的整数

-- 获取盒状体积的方法
-- bb = nodeGetBoundingBox $ $.transform
-- size = (bb[2]-bb[1])
-- (size[1] + size[2] + size[3])*0.333333

-- 设置和获取point物体尺寸的大小
-- $.size = (88.1801*2) --point物体获取大小永远是0.2,0.2,0.2,只能获取size,获取的size是半径,要乘以2

-- 对于不均匀的体积
-- 获取
-- $.objectOffsetScale * $.size / 2
-- 设置
-- length1 = 172.022
-- width1 = 58.1322
-- height1 = 58.1322
-- base = (length1 + width1 + height1)*0.333333
-- $.size = base*2
-- $.objectOffsetScale = [length1/base,width1/base,width1/base] --设置对象缩放

fn createBoxNode n:selection[1] type:3 noScale:true =--0:box;1:wire;2.dummy;3:point_box
(
	fn RotatePivotOnly obj rotation = 
	(
		local rotValInv=inverse (rotation as quat)
		animate off in coordsys local obj.rotation*=RotValInv
		obj.objectoffsetrot*=RotValInv
		obj.objectoffsetpos*=RotValInv
	)
	--初始化各项数据,size为长宽高
	local
	trans = n.transform,
	nn,
	size =
	if classof n == point then
	(
		size = n.objectOffsetScale * n.size / 2
	)else
	(
		bb = nodeGetBoundingBox n trans
		size = (bb[2]-bb[1])
	)
	--创建物体
	case type of
	(
		0:(
		)
		1:(
		)
		2:(
		)
		3:(
		print size
		psize = (size[1] + size[2] + size[3])*0.333333*2
		nn = point transform:trans size:psize
		base = psize*0.5
		nn.objectOffsetScale = [size[1]/base,size[2]/base,size[3]/base]
		nn.center = n.center
		nn.pivot = n.pivot
-- 		nn.objectOffsetRot = n.objectOffsetRot
		--创建浮点表达式0给三个属性和屏幕常大
		--创建浮点表达式1给box
		)
	)
	--返回
	nn
)
createBoxNode ()