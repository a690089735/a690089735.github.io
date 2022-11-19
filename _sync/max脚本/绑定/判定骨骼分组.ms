--骨骼分组算法:
-- 如果列表数量不为0,则找第一个物体的父物体,如果父物体是undefiend或者父物体不在列表中,则这个物体是顶级,他和他的所有子物体作为一组,否则找列表第二个物体(下一个物体),然后从原列表中搜索并删除这一组中的每一个项目.

fn BonesArray2Group BonesArray =
(
	BonesArray = (BonesArray as array)
	local Bgroup =#()
	while BonesArray.count > 0 do--列表中有东西就继续,直到没东西
	(
		tempBones = #()
		for b in BonesArray do
		if (finditem BonesArray b.parent) == 0 do --循环找父物体,找不到就跳过,找到向下执行(找不到,说明他在集合中是顶级,把他和他的子物体收入集合)
		(
			append tempBones b--将骨骼加入集合
			for c in b.children where (finditem BonesArray c) > 0 do append tempBones c--收入子物体到集合,判断一下子物体是不是在骨骼列表中,在列表中才收集
			for cb in tempBones do deleteItem BonesArray (finditem BonesArray cb)--在原集合中删除收集过的内容
			append Bgroup tempBones
			exit
		)
	)
	return Bgroup
)