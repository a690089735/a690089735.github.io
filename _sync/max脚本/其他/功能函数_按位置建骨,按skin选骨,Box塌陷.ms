/* 按位置创建骨骼 */
fn createBoneByPos poslist:#() linked:true dir:[0,0,1] = 
(
	Bonelist = for i = 2 to poslist.count collect BoneSys.createBone poslist[i-1] poslist[i] dir
	if linked do for i = Bonelist.count to 2 by -1 do Bonelist[i].parent = Bonelist[i-1]
	BoneList
)
-- createBoneByPos poslist:(for i in selection collect i.pos) linked:true dir:[0,0,1]--示例,按选择的物体创建骨骼


/* Box塌陷物体 */
fn Boxingcollapse objs:(selection as array)
deletemodifiers:false --塌陷前删除修改器
keeptrans:false --保持原变换
keepparent:false --保持原父物体
clearIsoVerts:false --清除孤立顶点
keepmodifiers:false --保持原修改器(对editpoly支持不完整)
keepcontrollers:false --保持原控制器
changecolor:true --改变新物体的颜色
wirecolor:blue --新物体的线框颜色
passtip:false --跳过的物体被提示
passcolor:red --跳过的物体的提示颜色
allGeometry:true --执行所有Geometry对象
first:true state:#create =
undo "BoxingClearModel" on(
	if first do (state = getCommandPanelTaskMode();setCommandPanelTaskMode #create)
	if classof objs == array then for obj in objs do 
		Boxingcollapse objs:obj deletemodifiers:deletemodifiers keeptrans:keeptrans keepparent:keepparent clearIsoVerts:clearIsoVerts keepmodifiers:keepmodifiers keepcontrollers:keepcontrollers changecolor:changecolor wirecolor:wirecolor first:false passtip:passtip passcolor:passcolor allGeometry:allGeometry
	else
	(
		exe = if allGeometry and superclassof objs != GeometryClass then false else true
		if exe then
		(
			with redraw off(animate off(
				sname = objs.name;cbox = box wirecolor:(if changecolor then wirecolor else objs.wirecolor);ConverttoPoly cbox;polyop.deleteVerts cbox #{1..8}
				if keeptrans do (cbox.transform = objs.transform;cbox.scale = [1,1,1]);
				if keepparent do cbox.parent = objs.parent
				if keepmodifiers do for i = objs.modifiers.count to 1 by -1 do addmodifier cbox objs.modifiers[i]
				if keepcontrollers do cbox.transform.controller = objs.transform.controller
				if deletemodifiers do for i = 1 to objs.modifiers.count do deletemodifier objs 1
				polyop.attach cbox objs
				cbox.name = sname
				if clearIsoVerts do polyop.deleteIsoVerts cbox
			))
		)
		else
		(
			if passtip do objs.wirecolor = passcolor
		)
	)
	if first do setCommandPanelTaskMode state
)
-- Boxingcollapse objs:(selection as array) deletemodifiers:true keeptrans:true wirecolor:gray passtip:true --keepmodifiers:true -- 示例 maya导入用


/* 按Skin修改器选择骨骼 */
fn selectBoneBySkinModifier objs:selection[1] first:true state:(getCommandPanelTaskMode()) = 
(
	if first do (clearselection();setCommandPanelTaskMode #modify)
	if classof objs == array then for obj in objs do selectBoneBySkinModifier objs:obj first:false state:state
	else
	(
		modf = for m in objs.modifiers where classof m == skin do exit with m
		if classof modf == skin do
		(
			sel = selection as array
			select objs
			bonesList = for i = 1 to (skinOps.GetNumberBones modf) collect getnodebyname(skinOps.GetBoneName modf i 0)
			select (bonesList + sel)
		)
	)
	if first do setCommandPanelTaskMode state
)
-- selectBoneBySkinModifier()

/* 隐藏功能,记录图形的构建数组 */
fn getshapeBuild spl:selection[1] =
(
	if superclassof spl == shape then for i = 1 to numSplines spl collect 
	(for j = 1 to numKnots spl i collect (#((getKnotPoint $ i j),(getInVec $ i j),(getOutVec $ i j))))	
	else #()
)

/* 创建控制器图形 */
fn CtrlShape name:(uniquename"testCtrlShape") type:#cross transform:(matrix3 1) size:10 wirecolor:red parent:undefined = --创建控制器图形,类型
(
	size = size/2
	scalev = size / 5
	local s
	poslist = case type of
	(
		#cross:( --三叉十字
			#(#(#([0,0,5], [0,0,5], [0,0,1.66667]), #([0,0,-5], [0,0,-1.66667], [0,0,-5])), #(#([0,5,0], [0,5,0], [0,1.66667,0]), #([0,-5,0], [0,-1.66667,0], [0,-5,0])), #(#([5,0,0], [5,0,0], [1.66667,0,0]), #([-5,0,0], [-1.66667,0,0], [-5,0,0])))
		)
		#box:( --边框盒
			#(#(#([-5,-5,5], [-5,-5,5], [-5,-1.66667,5]), #([-5,5,5], [-5,1.66667,5], [-1.66667,5,5]), #([5,5,5], [1.66667,5,5], [5,1.66667,5]), #([5,-5,5], [5,-1.66667,5], [1.66667,-5,5]), #([-5,-5,5], [-1.66667,-5,5], [-5,-5,5])), #(#([-5,-5,-5], [-5,-5,-5], [-5,-1.66667,-5]), #([-5,5,-5], [-5,1.66667,-5], [-1.66667,5,-5]), #([5,5,-5], [1.66667,5,-5], [5,1.66667,-5]), #([5,-5,-5], [5,-1.66667,-5], [1.66667,-5,-5]), #([-5,-5,-5], [-1.66667,-5,-5], [-5,-5,-5])), #(#([-5,-5,-5], [-5,-5,-5], [-5,-5,-1.66667]), #([-5,-5,5], [-5,-5,1.66667], [-5,-5,5])), #(#([-5,5,-5], [-5,5,-5], [-5,5,-1.66667]), #([-5,5,5], [-5,5,1.66667], [-5,5,5])), #(#([5,5,-5], [5,5,-5], [5,5,-1.66667]), #([5,5,5], [5,5,1.66667], [5,5,5])), #(#([5,-5,-5], [5,-5,-5], [5,-5,-1.66667]), #([5,-5,5], [5,-5,1.66667], [5,-5,5])))
		)
		#ball:( --三叉球
			#(#(#([-2.18557e-007,0,5], [-1.11753e-006,2.75893,5], [6.80417e-007,-2.75893,5]), #([1.62921e-006,-5,-2.18557e-007], [1.50861e-006,-5,2.75893], [1.7498e-006,-5,-2.75893]), #([2.18557e-007,4.37114e-007,-5], [1.11753e-006,-2.75893,-5], [-6.80417e-007,2.75893,-5]), #([-1.62921e-006,5,0], [-1.50861e-006,5,-2.75893], [-1.7498e-006,5,2.75893])), #(#([5,0,0], [5,4.49487e-007,-2.75893], [5,-4.49487e-007,2.75893]), #([-2.18557e-007,-8.14603e-007,5], [2.75893,-8.14603e-007,5], [-2.75893,-8.14603e-007,5]), #([-5,0,-4.37114e-007], [-5,-4.49487e-007,2.75893], [-5,4.49487e-007,-2.75893]), #([0,8.14603e-007,-5], [-2.75893,8.14603e-007,-5], [2.75893,8.14603e-007,-5])), #(#([5,0,0], [5,2.75893,8.98974e-007], [5,-2.75893,-8.98974e-007]), #([-2.18557e-007,-5,-1.62921e-006], [2.75893,-5,-1.62921e-006], [-2.75893,-5,-1.62921e-006]), #([-5,4.37114e-007,0], [-5,-2.75893,-8.98974e-007], [-5,2.75893,8.98974e-007]), #([0,5,1.62921e-006], [-2.75893,5,1.62921e-006], [2.75893,5,1.62921e-006])))
		)
		#plane:( --三叉面
			#(#(#([-5,5,0], [-1.66667,5,0], [-5,1.66667,0]), #([-5,-5,0], [-5,-1.66667,0], [-1.66667,-5,0]), #([5,-5,0], [1.66667,-5,0], [5,-1.66667,0]), #([5,5,0], [5,1.66667,0], [1.66667,5,0])), #(#([-5,-2.18557e-007,-5], [-1.66667,-2.18557e-007,-5], [-5,0,-1.66667]), #([-5,2.18557e-007,5], [-5,0,1.66667], [-1.66667,2.18557e-007,5]), #([5,2.18557e-007,5], [1.66667,2.18557e-007,5], [5,0,1.66667]), #([5,-2.18557e-007,-5], [5,0,-1.66667], [1.66667,-2.18557e-007,-5])), #(#([4.37114e-007,-5,-5], [2.91409e-007,-1.66667,-5], [2.91409e-007,-5,-1.66667]), #([0,-5,5], [1.45705e-007,-5,1.66667], [-1.45705e-007,-1.66667,5]), #([-4.37114e-007,5,5], [-2.91409e-007,1.66667,5], [-2.91409e-007,5,1.66667]), #([0,5,-5], [-1.45705e-007,5,-1.66667], [1.45705e-007,1.66667,-5])))
		)
		#point:( --汇聚一点
			#(#(#([-5,5,5], [-5,5,5], [-1.66667,1.66667,1.66667]), #([5,-5,-5], [1.66667,-1.66667,-1.66667], [5,-5,-5])), #(#([5,5,5], [5,5,5], [1.66667,1.66667,1.66667]), #([-5,-5,-5], [-1.66667,-1.66667,-1.66667], [-5,-5,-5])), #(#([-5,-5,5], [-5,-5,5], [-1.66667,-1.66667,1.66667]), #([5,5,-5], [1.66667,1.66667,-1.66667], [5,5,-5])), #(#([-5,5,-5], [-5,5,-5], [-1.66667,1.66667,-1.66667]), #([5,-5,5], [1.66667,-1.66667,1.66667], [5,-5,5])))
		)
	)
	s = line name:name
	for i = 1 to poslist.count do
	(
		needclose = false
		spl = addNewSpline s
		for j = 1 to poslist[i].count do
			(addKnot s spl #bezierCorner #curve (poslist[i][j][1]*scalev) (poslist[i][j][2]*scalev) (poslist[i][j][3]*scalev);if j > 3 do needclose = true)
		if needclose do close s spl
	)
	updateShape s
	s.transform = transform
	s.wirecolor = wirecolor
	s.parent = parent
	return s
)
-- CtrlShape type:#ball

fn cleaneSkinBone = (
	local weightThresh = 0.0001
	
	local objs = selection as array
	for obj in objs do (
		select obj
		
		for m in obj.modifiers where classof m == Skin do (
			modPanel.setCurrentObject m
			
			local vertCount = skinOps.GetNumberVertices m
			local bonesCount = skinOps.GetNumberBones m
			local unusedBones = #{1..bonesCount}
			
			for v = 1 to vertCount do (
				local vertWeightCount = skinOps.GetVertexWeightCount m v
				
				for i = 1 to vertWeightCount do (
					local weight = skinOps.GetVertexWeight m v i
					if weight >= weightThresh then (
						local boneID = skinOps.GetVertexWeightBoneID m v i
						unusedBones[boneID] = false
					)
				)
			)
			
			for i = bonesCount to 1 by -1 where unusedBones[i] do (
				skinOps.SelectBone m i
				skinOps.RemoveBone m
			)
			
			format "% Bones where removed from %.%" unusedBones.numberSet obj.name m.name
		)
	)
)
cleanSkinBone()