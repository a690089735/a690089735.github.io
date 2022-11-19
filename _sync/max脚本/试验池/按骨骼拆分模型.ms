--将模型按骨骼拆分为块,并添加给骨骼的edit_mesh修改器
-- sel = selection[1]
-- m = copy sel.mesh
-- facecount = getNumFaces m
-- facePosList = for i = 1 to facecount collect getFace m i --获得某面的位置

-- meshop.cloneFaces m #{1..50} --复制面

-- m1 = meshop.detachFaces m #{1..50} delete:true asMesh:true --分离面

-- mesh mesh:m1 transform:sel.transform

-- BoxEM里已经更新成了实例修改器,这里也应该一起更新成实例修改器,这样才能更容易的将其删除.

try(destroydialog SplitMeshByBonedialog)catch() 


-- SplitMeshByBone()
rollout SplitMeshByBonedialog "SplitMesh" width:152 height:96
(
	local 
	BoxEM =Edit_poly name:"--BoxEM--"
	
	fn SplitMeshByBone obj:$Box001 boneList:#($Point001, $Point002) attachTo:false = 
	(
		max modify mode
		fn addBoxEM obj = 
		(
		-- 	setCommandPanelTaskMode #modify
			addModifier obj (BoxEM)
			select obj; op = obj.modifiers[1]
			setSelectionLevel op #vertex
			max select all
			op.ButtonOp #DeleteVertex
			setSelectionLevel op #object
			
			op
		)
		
		local
		m = copy obj.mesh,
		trans = obj.transform,
		poly = converttopoly(mesh mesh:m tansform:trans),
		facecount = polyop.getNumFaces poly,
		facePosList = for i = 1 to facecount collect polyop.getFaceCenter poly i, --获得某面的位置
		faceList = for b in boneList collect #(),
		bPosList = for b in boneList collect b.center * inverse obj.transform,
		maxobjcount = objects.count
		
		for i = 1 to facecount do 
		(
			local 
			p = facePosList[i],
			disList = for bpos in bPosList collect distance bpos p
			append faceList[finditem disList (amin disList)] i
		)
		
		local addnode = #()
		for i = 1 to faceList.count do 
		(
			f = faceList[i]
			if f.count > 0 do
				if polyop.detachFaces poly f delete:false asNode:true name:(uniquename("test_")) do append addnode i
		)

		select(
			for i = 1 to addnode.count collect
			(
				if attachTo then
				(
					local o = objects[maxobjcount+1],
					cb = boneList[addnode[i]],
					op = addBoxEM cb
					o.transform = trans
					op.attach o
					cb
				) 
				else
				(
					local o = objects[maxobjcount+i]
					o.transform = trans
					o.wirecolor = random white black;o
				)
			)
		)
		
		free m
		delete poly
	)
	pickbutton btn1 "拾取物体" pos:[8,8] width:136 height:24 autoDisplay:true
	button btn2 "按选中物体拆分" pos:[8,64] width:136 height:24
	checkButton ckb1 "附加到" pos:[8,40] width:64 height:16 checked:true
	
	on btn1 picked obj do
	(
	)
	on btn2 pressed do
	(
		undo off(
			local obj = btn1.object
			if isvalidnode obj do SplitMeshByBone obj:obj boneList:(getcurrentselection()) attachTo:ckb1.checked
		)
	)
)
createdialog SplitMeshByBonedialog

-- for i in getcurrentselection() do i.wirecolor = random white black 