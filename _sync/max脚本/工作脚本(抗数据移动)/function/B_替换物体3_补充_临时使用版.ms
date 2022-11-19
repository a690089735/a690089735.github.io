
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
		nn = point transform:trans size:psize box:true
		base = psize*0.5
		nn.objectOffsetScale = [size[3]/base,size[2]/base,size[1]/base]
		nn.center = n.center
		nn.pivot = n.pivot
-- 		nn.objectOffsetRot = n.objectOffsetRot
		--创建浮点表达式0给三个属性和屏幕常大
		nn.centermarker.controller = nn.axistripod.controller = nn.cross.controller = nn.constantscreensize.controller = ctrl = float_Expression()
		ctrl.SetExpression "0"
		--创建浮点表达式1给box
		
		)
	)
	--返回
	n.baseobject = nn.baseobject --临时使用一下
	n.objectOffsetScale = nn.objectOffsetScale
	delete nn
)
for i in selection do createBoxNode n:i