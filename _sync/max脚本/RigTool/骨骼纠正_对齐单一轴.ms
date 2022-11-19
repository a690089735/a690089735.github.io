-- fn alignBoneZ =
-- (
-- 	local
-- 	sel = getcurrentselection(),
-- 	count = sel.count,
-- 	stand = sel[count],
-- 	strans = stand.transform
-- 	
-- 	if count > 1 do
-- 	(
-- 		for i = 1 to count-1 do
-- 		(
-- 			local 
-- 			obj = sel[i],
-- 			otrans = obj.transform,
-- 			ntrans = Translate (matrix3 1) otrans.pos,
-- 			parent = obj.parent,
-- 			children = obj.children
-- 			
-- 			obj.parent = undefined
-- 			for c in children do c.parent = undefined
-- 			
-- 			ntrans[1] = otrans[1]
-- 			ntrans[2] = normalize(cross strans[3] otrans[1])
-- 			ntrans[3] = normalize(cross ntrans[1] ntrans[2])
-- 			
-- 			obj.transform = ntrans
-- 			
-- 			obj.parent = parent
-- 			for c in children do c.parent = obj
-- 		)
-- 	)
-- )
-- alignBoneZ()

-- fn alignBoneZ2 = --quat处理参考矩阵,但是正偏移和负偏移怎么处理?
-- (
-- 	local
-- 	sel = getcurrentselection(),
-- 	count = sel.count,
-- 	stand = sel[count],
-- 	strans = stand.transform --要参考的基本变换矩阵
-- 	
-- 	if count > 1 do
-- 	(
-- 		for i = 1 to count-1 do
-- 		(
-- 			local 
-- 			obj = sel[i],
-- 			otrans = obj.transform, --物体原变换矩阵
-- 			rtrans = rotate (matrix3 1) (otrans as quat), --无偏移的参考变换矩阵(x轴对齐的参考变换矩阵),这一步中仅消除了位置.
-- 			ntrans = matrix3 1, --新变换矩阵
-- 			parent = obj.parent,
-- 			children = obj.children
-- 			
-- 			
-- 			obj.parent = undefined
-- 			for c in children do c.parent = undefined
-- 			
-- 			--生成无偏移的参考矩阵
-- 			local a = acos(dot otrans[3] strans[3])
-- 			rotate ntrans <quat>
-- 			Translate ntrans otrans.pos
-- 			
-- 			--根据参考矩阵生成新矩阵
-- 			
-- 			obj.transform = ntrans
-- 			
-- 			obj.parent = parent
-- 			for c in children do c.parent = obj
-- 		)
-- 	)
-- )
-- alignBoneZ()

fn alignBoneRoll = --其实只要用四元数纠正x轴就能得到正确的方向了.
undo "alignBoneRoll" on(
	local
	sel = getcurrentselection(),
	count = sel.count,
	stand = sel[count],
	strans = stand.transform --要参考的基本变换矩阵
	
	if count > 1 do
	(
		for i = 1 to count-1 do
		(
			local 
			obj = sel[i],
			otrans = obj.transform, --物体原变换矩阵
			ntrans = matrix3 1 --新变换矩阵
			
			quatAngle = acos (dot otrans[1] strans[1]) --结果无论如何都是正的,不过轴向会自动翻转.所以直接使用就好.
			quatAxis = normalize(cross otrans[1] strans[1])
			
			rotate ntrans strans.rotationpart --注意,现在是旋转基本矩阵到可以对齐x的方向
			rotate ntrans (quat quatAngle quatAxis)
			translate ntrans otrans.position
			
			
			--应用变换
			local
			parent = obj.parent,
			children = for c in obj.children collect c
			
			obj.parent = undefined
			for c in children do c.parent = undefined
			
			obj.transform = ntrans
			
			obj.parent = parent
			for c in children do c.parent = obj
		)
	)
	
)
alignBoneRoll()

-- fn alignAxisToLastNode alignAxis:2 holdeAxis:1 = --1=x,2=y
-- (
-- 	local
-- 	sel = getcurrentselection(),
-- 	count = sel.count,
-- 	stand = sel[count],
-- 	strans = stand.transform,
-- 	freeAxis = (t = "123";for i in #(alignAxis,holdeAxis) do substituteString t (i as string) "";t as integer)
-- 	
-- 	if count > 1 do
-- 	(
-- 		for i = 1 to count-1 do
-- 		(
-- 			local 
-- 			obj = sel[i],
-- 			otrans = obj.transform,
-- 			ntrans = Translate (matrix3 1) otrans.pos
-- 			
-- 			ntrans[freeAxis] = cross otrans[holdeAxis] strans[alignAxis] --这里的顺序可能有问题,后面使用要加判断,不然可能会出现相反轴
-- 		)
-- 		
-- 	)
-- )
