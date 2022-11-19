fn RotatePivotOnly obj rotation = 
(
	local rotValInv=inverse (rotation as quat)
	animate off in coordsys local obj.rotation*=RotValInv
	obj.objectoffsetrot*=RotValInv
	obj.objectoffsetpos*=RotValInv
)
fn Bone2Box nodeB = --holdAtt:false = 
(
	trans = nodeB.transform
	
	bb = nodeGetBoundingBox nodeB (trans)
	size = (bb[2]-bb[1])
	
	b = box width:size[3] length:size[2] height:size[1]

	b.transform = (matrix3 [0,0,-1] [0,1,0] [1,0,0] [0,0,0])*trans
	b.center = nodeB.center
	
	b.pivot = nodeB.pivot
	RotatePivotOnly b (EulerAngles 0 -90 0)

	nodeB.baseobject = b.baseobject
	nodeB.objectOffsetPos = b.objectOffsetPos
	nodeB.objectOffsetRot = b.objectOffsetRot
	nodeB.objectOffsetScale = b.objectOffsetScale

	delete b
)
-- Bone2Box $