--扁平化IK链,纠正翻滚,可选Z或Y朝向对齐IK法线作为翻滚锁定,只匹配骨骼链的第一根和最后一根,当最后一根有子物体时,不对齐方向
--必须按顺序,所以最好把排序功能拉进来.
fn correct_IK_chain bones_list = --仅对齐法向旋转(更简单,删除了之前可以选择对齐方向的功能,只要这边对齐好了,有个基础,统一手动旋转任意度数是很简单的.)
with animate off(
	--纠正位置
	local
	count = bones_list.count,
	mode = maxops.affectchildren,
	pA = bones_list[1].transform.pos,
	pB = (local temp=[0,0,0];for i in #{2..count-1} do temp += bones_list[i].transform.pos;temp/=count-2),
	pC = bones_list[count].transform.pos,
	nABC = normalize(cross (pA-pB) (pC-pB)),
	end = bones_list[count].transform
	in coordsys world(
		maxops.affectchildren = false
		for i in #{2..count-1} do
		(
			local pD = bones_list[i].transform.pos,b = bones_list[i];b.pivot = pD+(dot (pA-pD) nABC)*nABC
			--非骨骼物体时,可能会偏移轴心,用以下功能纠正,不过不论如何,对于开启了bone模式的物体,都有可能出现影响到子物体的意外
			if b.boneenable then (b.realignBoneToChild();b.resetBoneStretch()) else b.objectOffsetPos = [0,0,0]b.objectOffsetRot = (quat 0 0 0 1);b.objectOffsetScale = [1,1,1]
		)
		bones_list[count].pos = end.pos
		maxops.affectchildren = mode
	)
	
-- 	--纠正旋转(取巧的方法,必须是纠正过位置的[骨骼]链才有效,即:X轴已经和Z轴垂直)
-- 	for b in bones_list do (b.realignBoneToChild();b.resetBoneStretch())
-- 	local
-- 	bones_new_trans = for b in bones_list collect (Matrix3 b.transform[1] (cross nABC b.transform[1]) nABC b.transform[4])
-- 	for i = 1 to count-1 do bones_list[i].transform = bones_new_trans[i]
-- 	bones_list[count].transform = if bones_list[count].children.count == 0 then Translate (Rotate (Matrix3 1) bones_list[count-1].transform.rotation) bones_list[count].transform.pos else end --有子物体时不要动,动了会影响所有子物体,很麻烦的.
	
	
	--不仅纠正,还返回一个平面法线,别浪费
	nABC 
)
correct_IK_chain (getcurrentselection())

fn Correct_Foot_Panel bones_list = 
with animate off(
	fn lineLineIntersect pA pB pC pD = ( --线段1的起点,线段1的终点,线段2的起点,线段2的终点,里面再求相对矢量
		local
		a=pB-pA,
		b=pD-pC,
		c=pC-pA,
		cross1 = cross a b,
		cross2 = cross c b
		pA + (a*((dot cross2 cross1)/((length cross1)^2)))
	)
	local
	heel = bones_list[2].transform.pos,
	toe = bones_list[1].transform.pos,
	cord = bones_list[3].transform.pos,--可表达为弦
	arch = bones_list[4].transform.pos,
	offset = lineLineIntersect toe heel cord arch - lineLineIntersect cord arch toe heel
	in coordsys world(
		move bones_list[3] offset
		move bones_list[4] offset
	)
)
-- Correct_Foot_Panel (getcurrentselection())