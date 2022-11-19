fn getSize obj =
(
	bb = nodeGetBoundingBox obj obj.transform
	size = (bb[2]-bb[1])
	size = (size[1]+size[2]+size[3])/6
	return size
)

fn CreateObjTip = 
(
	objs = selection as array
	select for o in objs collect text font:"ºÚÌå" text:o.name size:(getSize o) kerning:0 leading:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] (o.max)) wirecolor:yellow
)

CreateObjTip()