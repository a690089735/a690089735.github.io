-- 检查数组里某个元素出现的次数	
fn countOccurrences arr n x = 
(	res = 0
	for i=1 to n  do 
	(if x==arr[i] then 
	(res += 1))
	return res	
)
--判断并修复权重点儿
fn yunSkinFixOne vertOne = 
(
	
-- 	vertOne = 1199
	----------------------------------一轮扩选----------------------------------
		sk = modpanel.getcurrentobject() 
		skinOps.SelectVertices sk vertOne
		sk.effect = 0
		skinOps.growSelection sk
	vertsSecond = #()---阔选一圈后的权重点儿
	for i = 1 to skinops.getnumbervertices sk do
	(
		if (skinOps.IsVertexSelected sk i) == 1 then append vertsSecond i
	)
	---------------------------选择点骨骼列表与其他点骨骼列表对比------------------	
	weightCount = skinOps.GetVertexWeightCount sk vertOne
	boneEffect 	= #()  --一圈点儿里所有相关的骨骼
	for vb in vertsSecond do ---所有点循环
	( 
		weightCountAll = skinOps.GetVertexWeightCount sk vb
		for i = 1 to weightCountAll do	(append  boneEffect (skinOps.GetVertexWeightBoneID sk vb i)	)				
	)			
	boneEffectUniquet = makeUniqueArray  boneEffect	
	
	boneEffectOne = #() -- 获取选择点对应的权重骨骼
	for i = 1 to weightCount do
		(append  boneEffectOne (skinOps.GetVertexWeightBoneID sk vertOne i)	)			
	-- 单点里骨骼次数
	boneEffectUniquetNum = #()
	for i in boneEffectOne do
	(append  boneEffectUniquetNum (countOccurrences boneEffect boneEffect.count i))
	boneEffectCheckBone = sort boneEffectUniquetNum
		
-- 判断单点骨骼里是否有只影响   *  3  *  个以下点的骨骼，有怎判断未权重错误
	checkErrorState = false
	for i in boneEffectUniquetNum do
	(if i <= 3 then (checkErrorState = true))		
	
------===============================修复权重if开始============================
if checkErrorState then
(
		-- 九点里所有骨骼次数
		boneEffectUniquetNum_Nine = #()		
		for i in boneEffectUniquet do
		(append  boneEffectUniquetNum_Nine (countOccurrences boneEffect boneEffect.count i)	)
		
		-- 合并的数组，前是骨骼变号，后是骨骼出现次数
		boneEffectCombine_Nine = #()
		boneEffectCheckBone_Nine = #()		
		for i=1 to boneEffectUniquet.count do
			(
			ele = #(boneEffectUniquet[i],boneEffectUniquetNum_Nine[i])
			append  boneEffectCombine_Nine ele	
			append boneEffectCheckBone_Nine	boneEffectUniquetNum_Nine[i]
			)
		boneEffectCheckBone_Nine = sort boneEffectUniquetNum_Nine
			
-------------------修复权重取最多的四个骨骼，把当前骨骼在这四个骨骼上blend----------------			
	-- 冒泡排序
	for i=1 to boneEffectCombine_Nine.count do 
	(
		for j = 1 to boneEffectCombine_Nine.count-i do
		(
			if boneEffectCombine_Nine[j][2]<boneEffectCombine_Nine[j+1][2] then
			(
			vartemp = boneEffectCombine_Nine[j+1]
			boneEffectCombine_Nine[j+1] = boneEffectCombine_Nine[j]
			boneEffectCombine_Nine[j] = vartemp 
	-- 		print vartemp
			)
			
		)	
	)
	-----获取前2多出现的骨骼
	boneChoosen = #()
	for i=1 to 4 do 
	(
		append boneChoosen boneEffectCombine_Nine[i][1]
	)

	boneChoosen = makeUniqueArray boneChoosen
	skinOps.SelectVertices sk #{vertOne}	
	skinOps.SelectBone sk boneChoosen[1] 
	skinOps.setWeight sk 1
	skinOps.RemoveZeroWeights sk
	sk.effect = 0
-- 	先给第一个骨骼1权重在移除所有0权重为下边做准备
	for i in boneChoosen do
		(
		skinOps.SelectBone sk i
		skinOps.setWeight sk 0.5		
		)
		
	choosenWeight = #()----算出平均权重备料
	for b=1 to boneChoosen.count do --每根骨骼
	( 
		append choosenWeight #(#(boneChoosen[b]),#())
		for vb in vertsSecond do  ---每个点
		(		
			weightCountAll = skinOps.GetVertexWeightCount sk  vb
				
			for i = 1 to weightCountAll do  --骨骼列表
			(
				BoneandweightCC = #() --单元素
				if (skinOps.GetVertexWeightBoneID sk vb i)==boneChoosen[b] then 	 --是当前骨骼号	
				(	
					append 	choosenWeight[b][2] (skinOps.GetVertexWeight  sk vb i)						
				)
			)	
		)
	)
  
	for i=1 to choosenWeight.count do
	(
		-- 	求平均权重
		sumVal = 0; for val in choosenWeight[i][2] do ( sumVal += val )
		weightAverage = sumVal/choosenWeight[i][2].count
		skinOps.SelectBone sk choosenWeight[i][1][1]
		skinOps.setWeight sk weightAverage			
	)
)--修复权重if的结尾不能删除
	
return checkErrorState

) ---fn 的结尾


fn getVertexNormal vert = ----法线
(
	sel = selection[1]
	vertFaces = polyOp.getFacesUsingVert sel vert
	tNormal = [0,0,0]; for i in vertFaces do tNormal += polyOp.getFaceNormal sel i
-- 	t01 = tNormal / vertFaces.numberSet
	return normalize (tNormal / vertFaces.numberSet)
)

fn getFourDirVert vert =  ---依次返回右左上下的最近点儿，相对视图
(
		obj = selection[1] --get selected object
		PVAll_left = #()
		PVAll_right= #()
		PVAll_up = #()
		PVAll_down = #()
		combinedArray = #()  --点和度数
	
		polyVertexOne = vert	
		Ori_Pos = polyOp.getVert obj polyVertexOne 	
		normalVec = getVertexNormal polyVertexOne --法向量	

		
-- 		obj.EditablePoly.SetSelection #Vertex (#(polyVertexOne) as BitArray)
-- 		edgeSel = obj.EditablePoly.ConvertSelection #Vertex #Edge
-- 		vertsSelMore = obj.EditablePoly.ConvertSelection #Edge #Vertex 
-- 		polyVertexFive = polyop.getVertSelection obj  --五点 可能多
-- 		polyVertexFour = deleteItem  polyVertexFive  polyVertexOne --四点 可能多	
	
	
		edges_A = polyop.getEdgesUsingVert obj (#(polyVertexOne) as BitArray)
		polyVertexFive = polyop.getVertsUsingEdge obj edges_A
		polyVertexFour = deleteItem  polyVertexFive  polyVertexOne --四点 可能多	
		
		-- 	角度算法	获取相对   垂直于点法线的平面的 单位 角度
		for pt in (polyVertexFour as array) do 
		(
	-- 		视图上方向
			CurrentViewMatrix = inverse(viewport.getTM()) 
			upVec = CurrentViewMatrix.row2	
				
			PV_Pos = polyOp.getVert obj pt  ---点位置向量		
			PV_Pos = PV_Pos - Ori_Pos  ----计算角度物料			
				
			--法线垂直平面上的投影		
			finalNormal = PV_Pos - normalVec * dot (normalize  PV_Pos) (normalize normalVec) / dot(normalize normalVec) (normalize normalVec)
			
			upVecPP = upVec - normalVec * dot (normalize  upVec) (normalize normalVec) / dot(normalize normalVec) (normalize normalVec)
				/* How to rotate a vector around another vector x degrees?  */			
			upVecPP = normalize (upVecPP)
				
	-----旋转得到z单位向量					
			XVecPP =  upVecPP*cos(-90)+	(cross normalVec upVecPP)*sin(-90)
			XVecPP = normalize(XVecPP)		
	
		ZZZ = (dot finalNormal upVecPP)/length(upVecPP) ----在向量上的投影 
		XXX = (dot finalNormal XVecPP)/length(XVecPP) ----在向量上的投影
		angleCal = atan2 XXX ZZZ	
		append combinedArray #(pt,angleCal)
		)
			
	-- 右边	
		angleGoalR = 90
		currR = combinedArray[1][2]	 --第一个ied度数
		currvertR = combinedArray[1][1]	--第一个的点序号
		for i in combinedArray do
			(
			if 	abs(angleGoalR - i[2])<abs(angleGoalR - currR) then
				(
				currR =i[2]
				currvertR = i[1]			
				)
			)
		append PVAll_right currvertR
	-- 左边		
		angleGoalL = -90
		currL = combinedArray[1][2]	
		currvertL =  combinedArray[1][1]		
		for i in combinedArray do
			(
			if 	abs(angleGoalL - i[2])<abs(angleGoalL - currL) then
				(
				currL =i[2]
				currvertL = i[1]			
				)
			)
		append PVAll_left currvertL
	-- 上边		
		angleGoalUp = 0
		currUp = combinedArray[1][2]	
		currvertUp =  combinedArray[1][1]	
		
		for i in combinedArray do
			(
			if 	abs(angleGoalUp - i[2])<abs(angleGoalUp - currUp) then
				(
				currUp =i[2]
				currvertUp = i[1]		
				)
				
			)
		append PVAll_up currvertUp
-- 下边		
	angleGoalDown = 180  
	currDown = combinedArray[1][2]	
	currvertDown =  combinedArray[1][1]	
	
-- 		i = combinedArray[3]
	for i in combinedArray do
		(
		if angleGoalDown<=-90 and angleGoalDown>=-180 then
		(
		if  abs( i[2] + angleGoalDown)<abs(currDown - angleGoalDown ) then
			(
			currDown =i[2]
			currvertDown = i[1]	
-- 		    print "下边"
-- 			print (angleGoalDown - i[2])
-- 			print currvertDown
			)	
			
		)
		else if 	abs(angleGoalDown - i[2])<abs(angleGoalDown - currDown) then
			(
			currDown =i[2]
			currvertDown = i[1]	
-- 		    print "下边"
-- 			print (angleGoalDown - i[2])
-- 			print currvertDown
			)
		)
	append PVAll_down currvertDown	
-- 		obj.EditablePoly.SetSelection #Vertex (#(polyVertexOne) as BitArray)			
		return #(PVAll_right[1],PVAll_left[1],PVAll_up[1],PVAll_down[1])	
	
)


fn setFourDirVert selDirection =   ---移动选择点儿
(
		
	sk = modpanel.getcurrentobject() 
	if sk as string == "Skin:Skin" then
	(
		-- 蒙皮点模式
		obj = selection[1] --get selected object
		PVselvert = #()
			for i = 1 to skinops.getnumbervertices sk do
			(
				if (skinOps.IsVertexSelected sk i) == 1 then append PVselvert i
			)----获取选择的蒙皮点id
		-- print PVselvert
		selVertexsArray = #{}
		for vert in (PVselvert as array) do
		(
			if selDirection =="right" then (append selVertexsArray (getFourDirVert vert)[1])
			if selDirection =="left" then (append selVertexsArray (getFourDirVert vert)[2])
			if selDirection =="up" then (append selVertexsArray (getFourDirVert vert)[3])
			if selDirection =="down" then (append selVertexsArray (getFourDirVert vert)[4])
			
-- 			append selVertexsArray vert  ---加选用
		)
		skinOps.SelectVertices sk selVertexsArray;	sk.effect = 0
	)	
	
	else if sk as string == "Editable Poly" then
	(
		-- poly模式
		obj = selection[1] --get selected object
		PVselvert = polyop.getVertSelection obj
		selVertexsArray = #{}
		-- 所选点循环

		for vert in (PVselvert as array) do
		(
			if selDirection =="right" then (append selVertexsArray (getFourDirVert vert)[1])
			if selDirection =="left" then (append selVertexsArray (getFourDirVert vert)[2])
			if selDirection =="up" then (append selVertexsArray (getFourDirVert vert)[3])
			if selDirection =="down" then (append selVertexsArray (getFourDirVert vert)[4])			
-- 			append selVertexsArray vert  ---加选用
		)
		
		
		obj.EditablePoly.SetSelection #Vertex selVertexsArray
	)
	else (messageBox "不是Poly或Skin")
)







fn setFourDirVert_add selDirection =   --加选点儿
(
	sk = modpanel.getcurrentobject() 
	if sk as string == "Skin:Skin" then
	(
		-- 蒙皮点模式
		obj = selection[1] --get selected object
		PVselvert = #()
			for i = 1 to skinops.getnumbervertices sk do
			(
				if (skinOps.IsVertexSelected sk i) == 1 then append PVselvert i
			)----获取选择的蒙皮点id
		-- print PVselvert
		selVertexsArray = #{}
		for vert in (PVselvert as array) do
		(
			if selDirection =="right" then (append selVertexsArray (getFourDirVert vert)[1])
			if selDirection =="left" then (append selVertexsArray (getFourDirVert vert)[2])
			if selDirection =="up" then (append selVertexsArray (getFourDirVert vert)[3])
			if selDirection =="down" then (append selVertexsArray (getFourDirVert vert)[4])
			
			append selVertexsArray vert  ---加选用
		)
		skinOps.SelectVertices sk selVertexsArray;	sk.effect = 0
	)	
	
	else if sk as string == "Editable Poly" then
	(
		-- poly模式
		obj = selection[1] --get selected object
		PVselvert = polyop.getVertSelection obj
		selVertexsArray = #{}
		-- 所选点循环

		for vert in (PVselvert as array) do
		(
			if selDirection =="right" then (append selVertexsArray (getFourDirVert vert)[1])
			if selDirection =="left" then (append selVertexsArray (getFourDirVert vert)[2])
			if selDirection =="up" then (append selVertexsArray (getFourDirVert vert)[3])
			if selDirection =="down" then (append selVertexsArray (getFourDirVert vert)[4])
			
			append selVertexsArray vert  ---加选用
		)
		obj.EditablePoly.SetSelection #Vertex selVertexsArray
	)
	else (messageBox "不是Poly或Skin")
)


global yunSkinTools_mode 
yunSkinTools_mode  = 1
-- setFourDirVert "down" 
-- setFourDirVert_add "down" 
rollout yunSkinToolWin "yunSkinTool" width:372 height:336
(
	button 'yunSkinFix_btn' "粗修" pos:[82,30] width:74 height:39 align:#left
	button 'yunSkinTool_up_btn' "up" pos:[153,136] width:70 height:43 align:#left
	button 'yunSkinTool_down_btn' "down" pos:[153,246] width:70 height:43 align:#left
	button 'yunSkinTool_left_btn' "left" pos:[63,192] width:70 height:43 align:#left
	button 'yunSkinTool_right_btn' "right" pos:[243,192] width:70 height:43 align:#left
	button 'yunSkinTool_selfBlend_btn' "自混合权重" pos:[225,27] width:70 height:43 align:#left
	groupBox 'grp1' "粗粗修" pos:[37,3] width:300 height:86 align:#left
	groupBox 'grp3' "粗修" pos:[36,102] width:300 height:196 align:#left
	checkbox 'yunSkinTool_moveVertSMode' "移动选择" pos:[66,149] width:75 height:21 align:#left checked:true 
	checkbox 'yunSkinTool_copyVertWeightMode' "权重copy" pos:[242,262] width:81 height:26 align:#left checked:false 
	checkbox 'yunSkinTool_addVertSMode' "加选选择" pos:[243,149] width:75 height:21 align:#left checked:false 
	button 'yunSkinTool_selWeightVerts_btn' "选权重点" pos:[153,192] width:70 height:43 align:#left 

	on yunSkinTool_selWeightVerts_btn pressed do
		(
			  skinMod = $.modifiers[#Skin]
	  	  -- get the vertices influenced by the selected bone
	  skinOps.selectVerticesByBone skinMod	

		)
	
	on yunSkinTool_selfBlend_btn pressed do
		(
			sk = modpanel.getcurrentobject() 
			verts = #()
				for i = 1 to skinops.getnumbervertices sk do
				(
					if (skinOps.IsVertexSelected sk i) == 1 then append verts i
				)----获取选择的蒙皮点id
			boneSel = skinOps.GetSelectedBone sk
				
			undo on 
			(	
			if verts.count ==1 then 
			(
				weightCount = skinOps.GetVertexWeightCount sk  verts[1]
				-- 	获取骨骼列表个数
				for vb = 1 to weightCount do
				(
				boneId = skinOps.GetVertexWeightBoneID sk verts[1] vb
				skinOps.SelectBone sk boneId	
				skinOps.blendSelected sk
				)
				for vb = 1 to weightCount do
				(
				boneId = skinOps.GetVertexWeightBoneID sk verts[1] vb
				skinOps.SelectBone sk boneId	
				skinOps.blendSelected sk
				)
				for vb = 1 to weightCount do
				(
				boneId = skinOps.GetVertexWeightBoneID sk verts[1] vb
				skinOps.SelectBone sk boneId	
				skinOps.blendSelected sk
				)
			)
			else
			(messageBox  "只能选择一个点~~哦~~")
			skinOps.SelectVertices sk verts
			skinOps.SelectBone sk boneSel
			)

		)
	on yunSkinFix_btn pressed do
		(
		-- ---=======================运行部分=========
		sk = modpanel.getcurrentobject() 
		vertsSel = #()
		for i = 1 to skinops.getnumbervertices sk do
		(
			if (skinOps.IsVertexSelected sk i) == 1 then append vertsSel i
		)----获取选择的蒙皮点id
		for i in vertsSel do
		(
		yunSkinFixOne i
		)
		skinOps.SelectVertices sk vertsSel
		sk.effect = 0			
		)
	

	on yunSkinTool_moveVertSMode changed yunSkinTool_moveVertSMode_State do
		(
			if yunSkinTool_moveVertSMode_State == true then				 
			(
				yunSkinTools_mode = 1 --移动选择				
				yunSkinTool_addVertSMode.checked = false
				yunSkinToolWin.yunSkinTool_addVertSMode.checked  =false
				yunSkinTool_copyVertWeightMode.checked = false
			)
		)
	on yunSkinTool_copyVertWeightMode changed yunSkinTool_copyVertWeightMode_State do
		(
			if yunSkinTool_copyVertWeightMode_State == true then				 
			(
				yunSkinTools_mode = 2 --权重copy				
				yunSkinTool_moveVertSMode.checked = false
				yunSkinTool_addVertSMode.checked = false
			)
		)
	on yunSkinTool_addVertSMode changed yunSkinTool_addVertSMode_State do
		(
			if yunSkinTool_addVertSMode_State == true then				 
			(
				yunSkinTools_mode = 3 --加选选择				
				yunSkinTool_moveVertSMode.checked = false
				yunSkinTool_copyVertWeightMode.checked = false
			)
		)

	on yunSkinTool_right_btn pressed  do
		(
			case yunSkinTools_mode of --模式判断  1是移动选择；2是复制蒙皮；3是加选；
			(	
			1: (setFourDirVert "right" 	)	
			2: (

				sk = modpanel.getcurrentobject() 
				verts = #()
					for i = 1 to skinops.getnumbervertices sk do
					(
						if (skinOps.IsVertexSelected sk i) == 1 then append verts i
					)----获取选择的蒙皮点id
				if verts.count == 1 then
				(	
				skinOps.SelectVertices sk #{(getFourDirVert verts[1] )[1]}	  ---方向
				skinOps.copyWeights sk 
				skinOps.copyWeights sk
				skinOps.SelectVertices sk #{verts[1]}
				skinOps.pasteWeights sk
				sk.effect = 0
				)
				else( messageBox "请只选一个点~~儿")

				)
			3: ( setFourDirVert_add "right" 	)
			)
		
		)
			
	on yunSkinTool_left_btn pressed  do
		(
			case yunSkinTools_mode of --模式判断  1是移动选择；2是复制蒙皮；3是加选；
			(	
			1: (setFourDirVert "left" 	)	
			2: 
			(

				sk = modpanel.getcurrentobject() 
				verts = #()
					for i = 1 to skinops.getnumbervertices sk do
					(
						if (skinOps.IsVertexSelected sk i) == 1 then append verts i
					)----获取选择的蒙皮点id
				if verts.count == 1 then
				(	
				skinOps.SelectVertices sk #{(getFourDirVert verts[1] )[2]}	  ---方向
				skinOps.copyWeights sk 
				skinOps.copyWeights sk
				skinOps.SelectVertices sk #{verts[1]}
				skinOps.pasteWeights sk
				sk.effect = 0
				)
				else( messageBox "请只选一个点~~儿")
			)
			
			3: (setFourDirVert_add "left" 	)
			)
			
		)
	on yunSkinTool_up_btn pressed  do
		(
			case yunSkinTools_mode of --模式判断  1是移动选择；2是复制蒙皮；3是加选；
			(	
			1: (setFourDirVert "up" 	)	
			2: 
			(

				sk = modpanel.getcurrentobject() 
				verts = #()
					for i = 1 to skinops.getnumbervertices sk do
					(
						if (skinOps.IsVertexSelected sk i) == 1 then append verts i
					)----获取选择的蒙皮点id
				if verts.count == 1 then
				(	
				skinOps.SelectVertices sk #{(getFourDirVert verts[1] )[3]}	  ---方向
				skinOps.copyWeights sk 
				skinOps.copyWeights sk
				skinOps.SelectVertices sk #{verts[1]}
				skinOps.pasteWeights sk
				sk.effect = 0
				)
				else( messageBox "请只选一个点~~儿")
			)
			3: (setFourDirVert_add "up" 	)
			)			
		
		)
	on yunSkinTool_down_btn pressed  do
		(
			case yunSkinTools_mode of --模式判断  1是移动选择；2是复制蒙皮；3是加选；
			(	
			1: (setFourDirVert "down" 	)	
			2: 
			(

				sk = modpanel.getcurrentobject() 
				verts = #()
					for i = 1 to skinops.getnumbervertices sk do
					(
						if (skinOps.IsVertexSelected sk i) == 1 then append verts i
					)----获取选择的蒙皮点id
				if verts.count == 1 then
				(	
				skinOps.SelectVertices sk #{(getFourDirVert verts[1] )[4]}	  ---方向
				skinOps.copyWeights sk 
				skinOps.copyWeights sk
				skinOps.SelectVertices sk #{verts[1]}
				skinOps.pasteWeights sk
				sk.effect = 0
				)
				else( messageBox "请只选一个点~~儿")
			)
			3: (setFourDirVert_add "down" 	)
			)		
		
		)		
	
		
		
)






createdialog yunSkinToolWin 









