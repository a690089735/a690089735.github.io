--完美,因为加进来的时transform,所以冻结变换也可以..

delete objects

Holder = dummy boxsize:[20,20,20] pos:[0,50,0]
CtrlA = Circle size:25 transform:(matrix3 [1,0,0] [0,1,0] [0,0,1] [-60,0,0]) wirecolor:yellow parent:Holder;CtrlA.objectOffsetRot = (quat 0 -0.707107 0 0.707107)
CtrlB = Circle size:25 transform:(matrix3 [1,0,0] [0,1,0] [0,0,1] [60,0,0]) wirecolor:yellow parent:Holder;CtrlB.objectOffsetRot = (quat 0 -0.707107 0 0.707107)
count = 4 --单数时效果最好,建议为5
HandleSize = 40
Points = for x = -60 to 60 by 30 collect 
(
	p = point size:20 pos:[x,0,0] wirecolor:orange centermarker:off axistripod:on cross:off Box:off parent:Holder
	ctrl = p[3].controller = transform_Script()
	ctrl.AddTarget "CATrans" CtrlA[3]
	ctrl.AddTarget "CBTrans" CtrlB[3]
	p
)

for i = 0.0 to count do
(
	local
	id = i as integer+1,
	p = Points[id],
	t = i / count,
	rt = 1 - t
	--全局位置控制器
	
	ctrl = p[3].controller

	if id <= count then
	(
		ctrl.AddTarget "Look" Points[id+1][3]
-- 		str = "pos = " + rt as string + "^3*CATrans.pos + 3*"+rt as string+"^2*"+t as string+"*(["+HandleSize as string+",0,0]*CATrans) + 3*"+rt as string+"*"+t as string+"^2*([-"+HandleSize as string+",0,0]*CBTrans) + "+t as string+"^3*CBTrans.pos"
		str = "pos = " + (rt^3) as string + "*CATrans.pos + "+(3*rt^2*t) as string+"*(["+HandleSize as string+",0,0]*CATrans) + "+(3*rt*t^2) as string+"*([-"+HandleSize as string+",0,0]*CBTrans) + "+(t^3) as string+"*CBTrans.pos"
		str += "\nx = normalize(Look.pos - pos);y = normalize(CATrans[2]*"+rt as string+" + CBTrans[2]*"+t as string+");z = cross x y"
		str += "\nscale (matrix3 x (normalize(cross z x)) z pos) (CATrans.scale * "+rt as string+" + CBTrans.scale * "+t as string+")"
		ctrl.script = str
	)else
		ctrl.script = "CBTrans"
)