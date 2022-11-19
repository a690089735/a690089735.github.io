/* 动画毁成变形器 */ --从2017以后,可以只用一个修改器,2017以后支持超过100个通道
fn cObj obj =
(
	cbox = box wirecolor:black name:obj.name
	ConverttoPoly cbox
	for j = 1 to 8 do 
	(
		polyop.deleteVerts cbox 1
	)
	polyop.attach cbox obj
	cbox
)
fn MorpherAnimationCreator objs:(selection as array) starttime:animationrange.start endtime:animationrange.end trans:false = 
with redraw off(undo off(animate off(
	for o in objs where superclassof o != GeometryClass do exit with return messagebox "指定的物体中,含有不支持的物体."
	local objs1 = #()
	if trans do at time starttime (objs1 = for o in objs collect cobj(copy o))
	local count = objs.count
	local len = ((animationrange.end - animationrange.start).frame) as integer + 1 --时间总长度
	local seg = ((len-1) / 100) + 1 --计算需要几个变形器
	local morpherMeshList = 
	if not trans then 
		for f in starttime to endtime collect at time f(for o in objs collect snapshot o) --记录morpherMesh列表#(#(obj1,obj2...),#(obj1,obj2...),...)
	else 
		for f in starttime to endtime collect at time f(for o in objs collect cObj (snapshot o))
	local modifierList = 
	if not trans then 
		for o in objs collect (for i = 1 to seg collect (addmodifier o (morpher());o.modifiers[1]))
	else 
		for o in objs1 collect (for i = 1 to seg collect (addmodifier o (morpher());o.modifiers[1])) --物体变形器列表#(#(obj1m1,obj1m2...),#(obj2m1,obj2m2...)...)
		
	local nowtime = (starttime.frame as integer) --当前时间,偏移也使用此,因为是从0帧K帧偏移

	for i = 1 to len do --按时间长度循环,因为从1开始,也可以用于计次
	(
		m = (i-1) / 100 + 1 --修改器位置
		n = ((mod (i-1) 100) as integer + 1)--修改器通道位置
		for j = 1 to count do --遍历物体
		(
			WM3_MC_GetName modifierList[j][m] n --不加这个,会有失效问题
			WM3_MC_BuildFromNode modifierList[j][m] n morpherMeshList[i][j] --添加变形目标
			WM3_MC_SetName modifierList[j][m] n (nowtime as string + "f")
			--设置目标的帧
			addNewKey modifierList[j][m][n] -1 
			addNewKey modifierList[j][m][n] 0
			addNewKey modifierList[j][m][n] 1
			--设置目标的帧的值
			modifierList[j][m][n].keys[1].value = 0
			modifierList[j][m][n].keys[2].value = 100
			modifierList[j][m][n].keys[3].value = 0
			--移动帧
			moveKeys modifierList[j][m][n] nowtime
		)
		nowtime += 1
		delete morpherMeshList[i]
	)
	free morpherMeshList
	free modifierList
	select objs
)))

MorpherAnimationCreator trans:false --trans代表是否是变换动画,处理变换动画的时间会长很多.