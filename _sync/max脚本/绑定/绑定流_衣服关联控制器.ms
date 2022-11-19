--方案:3模型,一个包裹,一个skin边缘,一个双重变形;制作一个试验文件,一个身体,一件衣服,一组身体骨骼,一组衣服骨骼(干脆就直接做一个衣服的简模吧!)
--以下需求,针对单一骨骼链,以后可以研发一个在多根骨骼中自动分类多条骨骼链的功能.
	--骨骼分组算法:如果列表数量不为0,则找第一个物体的父物体,如果父物体是undefiend或者父物体不在列表中,则这个物体是顶级,他和他的所有子物体作为一组,否则找列表第二个物体(下一个物体),然后从原列表中搜索并删除这一组中的每一个项目.
--需求:选中一条骨骼链,为所有骨骼创建对齐的父级,父级不可移动和旋转,然后冻结骨骼的变换(蒙皮用)(保持父级)
--需求:复制上面的骨骼链,关联骨骼的冻结变换控制器.(顶父级为空,空不空都行.)
--需求:附着新的骨骼链的父物体到网格.
--问题:新骨骼链的位置,旧骨骼链的位置.--在蒙皮骨骼位置直接生成,预留选择按钮,选择的新生成的骨骼链手动移动,
--测试:1.morpher的参照是否正常;2.skinwrap的参照是否正常
--需求:自动附着约束到最近面
try(DestroyDialog AutoBoneRef)catch()

rollout AutoBoneRef "AutoBoneRef" width:128 height:88
(
	fn setFreezeTransform objs = 
	(
		for obj in objs do 
		(
			obj.pos.controller = bezier_position ()
			obj.pos.controller = position_list ()
			obj.pos.controller.Available.controller =  Position_XYZ ()
			obj.pos.controller.Active = 2
			obj.rotation.controller = Euler_XYZ ()
			obj.rotation.controller = rotation_list ()
			obj.rotation.controller.Available.controller = Euler_XYZ ()
			obj.rotation.controller.Active = 2
		)
	)
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
	fn createClothBoneControl BoneChain =
	(
		size = (BoneChain[1].width+BoneChain[1].height)/2
		newBoneChain = for b in BoneChain collect 
		(
			p = point name:(b.name+"_Prt") transform:b.transform centermarker:on axistripod:off cross:off Box:on size:size wirecolor:green
			p.parent = b.parent
			b.parent = p
			setTransformLockFlags p #{1..9}
			nb = instance b;nb.name = b.name+"_Ref";nb.wirecolor = b.wirecolor
			np = instance p;np.name = p.name+"_Ref";np.wirecolor = p.wirecolor
			nb.parent = np
			np.parent = undefined
			b.name = b.name+"_Src"
			nb--返回新骨骼
		)
		--冻结变换
		setFreezeTransform BoneChain
		setFreezeTransform newBoneChain
		--设置关联
		for i = 1 to BoneChain.count do 
		(
			newBoneChain[i].position.controller[2].controller = BoneChain[i].position.controller[2].controller
			newBoneChain[i].rotation.controller[2].controller = BoneChain[i].rotation.controller[2].controller
		)
		--选择物体
		selectmore newBoneChain
		selectMore (for b in newBoneChain collect b.parent)
	)
	
	button 'btn1' "创建绑定" pos:[8,8] width:112 height:32 align:#left
	button 'btn2' "选择控制" pos:[8,48] width:112 height:32 align:#left
	
	local ss
	on btn1 pressed  do
	(
		with undo on(sel = BonesArray2Group selection;clearSelection();for s in sel do createClothBoneControl s;ss = (selection as array))
	)
	on btn2 pressed  do
	(
		try(select ss)catch()
	)
)
CreateDialog AutoBoneRef
