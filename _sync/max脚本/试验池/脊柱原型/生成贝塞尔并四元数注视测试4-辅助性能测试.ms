delete objects
importcount = 500
-- for i = 1 to importcount do --这个无比缓慢
-- (
-- 	mergemaxfile (maxfilepath + maxfilename) #autoRenameDups queit:true 
-- 	move (for i = objects.count-7 to objects.count collect objects[i]) [0,0,60*i]
-- )
with redraw off(with animate off(with undo off(
for i = 1 to importcount do
(
	zpos = (i-1)*60
	
	Points = for x = -60 to 60 by 30 collect point size:20 pos:[x,0,zpos] wirecolor:orange centermarker:off axistripod:on cross:off Box:off
	Holder = dummy boxsize:[20,20,20] pos:[0,60,zpos]
	Holder[3].controller = transform_script()
	CtrlA = Circle size:25 transform:(matrix3 [1,0,0] [0,1,0] [0,0,1] [-60,0,zpos]) wirecolor:yellow;CtrlA.objectOffsetRot = (quat 0 -0.707107 0 0.707107)
	CtrlB = Circle size:25 transform:(matrix3 [1,0,0] [0,1,0] [0,0,1] [60,0,zpos]) wirecolor:yellow;CtrlB.objectOffsetRot = (quat 0 -0.707107 0 0.707107)
	PointsCA = attributes PointsCA
	(
		Parameters PointArray
		(	
			GlobalPoints type:#maxObjectTab tabsize:0 tabSizeVariable:true
		)
	)
	Custattributes.add Holder PointsCA

	HandleSize = 40 --CtrlAB距离的三分之一 --实际测试的最正常的位置,如果为一半,中间的部位会在初始情况自带缩放
	count = Points.count-1
	for i = 0.0 to count do
	(
		--全局位置控制器
		t = i / count;rt = 1 - t
		ctrl = position_script() --输出的是世界位置
		ctrl.AddNode "CA" CtrlA; ctrl.AddNode "CB" CtrlB
		ctrl.script = rt as string + "^3*CA.pos + 3*"+rt as string+"^2*"+t as string+"*(["+HandleSize as string+",0,0]*CA.transform) + 3*"+rt as string+"*"+t as string+"^2*([-"+HandleSize as string+",0,0]*CB.transform) + "+t as string+"^3*CB.pos"
		append Holder.GlobalPoints ctrl
		
		--单个点的变换控制器,仅包含位置绑定
		id = i as integer + 1
		p = Points[id]
		ctrl = p[3].controller = transform_Script()
		ctrl.AddObject "GP" Holder.GlobalPoints[id]
		ctrl.script = "matrix3 [1,0,0] [0,1,0] [0,0,1] GP.value"
	)
	ctrl = float_script()
	ctrl.AddNode "CA" CtrlA; ctrl.AddNode "CB" CtrlB

	PP = CtrlA
	for i = 1 to count do --四元数模式,目前无法控制翻滚,应当使用全局翻滚插值作为过渡.
	(
		p = Points[i]
		ctrl = p[3].controller 
		ctrl.AddObject "TG" Holder.GlobalPoints[i+1] --添加目标
		ctrl.AddNode "PP" PP
		ctrl.script = "
		OriginVec = GP.value * inverse PP.transform
		TagetVec = normalize((TG.value* inverse PP.transform) - OriginVec)
		RotAxis = normalize(cross TagetVec [1,0,0])
		RotAngle = acos(dot TagetVec [1,0,0])
		q = quat RotAngle RotAxis
		q *= PP.transform.rotation
		translate (rotate (matrix3 1) q) GP.value
		"
		PP = p
	)
)
)))
gc()