try(destroydialog WeigthFnRollout)catch()
rollout WeigthFnRollout "Untitled" width:184 height:280
(
	
-- 	button btn1 "复制选中顶点当前骨骼的权重" pos:[8,8] width:168 height:24
-- 	button btn2 "粘贴同名骨骼权重到最近顶点" pos:[7,40] width:168 height:24
-- 	--考虑锁定骨骼
-- 	local boneName,vList,wList
-- 	on btn1 pressed do
-- 	(
-- 		
-- 	)
-- 	on btn2 pressed do
-- 	(
-- 		
-- 	)
	
	button btn_Savesoft "记录软选择权重" pos:[8,8] width:168 height:24
	button btn_LoadSoft "粘贴权重到骨骼" pos:[72,32] width:103 height:24
	spinner spn1 "乘" pos:[8,36] width:56 height:16 range:[0,2,1] scale:0.01
	
	local softV,softW
	--以后考虑锁定骨骼
	
	button btn_BuildBP "构建BonesPro修改器" pos:[8,72] width:168 height:24 toolTip:"将选中的物体都作为最后一个物体的骨骼,添加BonesPro修改器."
	button btn_ConvertBP "转换BonesPro到Skin" pos:[8,96] width:168 height:24
	button btn_ClearBP "清除BonesPro修改器" pos:[8,120] width:168 height:24
	button btn_BuildSW "构建SkinWrap修改器" pos:[8,144] width:160 height:24 toolTip:"将选中的物体都作为最后一个物体的包裹,添加SkinWrap修改器."
	button btn_BuildSWS "" pos:[168,144] width:8 height:24 toolTip:"用最后一个物体,包裹选中的其他物体."
	button btn_ConvertSW "转换SkinWrap到Skin" pos:[8,168] width:168 height:24
	button btn_ClearSW "清除SkinWrap修改器" pos:[8,192] width:168 height:24
	
	on WeigthFnRollout open do
	(
		
	)
	on btn_Savesoft pressed do
	(
		softV = #()
		softW = #()
		
		obj = selection[1]
		
		poly = try(meshop.getVDataValue obj 1 1;false)catch(try(polyop.getVDataValue obj 1 1;true)catch(return messagebox "获取软选择数据失败."))
		
		if poly then
			for i = 1 to obj.numVerts do 
			(
				w = polyop.getVDataValue obj 1 i
				if w > 0 do
				(
					append softV i
					append softW w
				)
			)
		else
			for i = 1 to obj.numVerts do 
			(
				w = meshop.getVDataValue obj 1 i
				if w > 0 do
				(
					append softV i
					append softW w
				)
			)
	)
	on btn_LoadSoft pressed do
	(
		undo "Set Weights" on(
			try(
				modf = for m in selection[1].modifiers where classof m == skin do exit with m
				bid = (skinOps.GetSelectedBone modf)
				for i = 1 to softV.count do skinOps.SetVertexWeights modf softV[i] bid (softW[i] * spn1.value)
		-- 			CurrentVertexIDs = for i in 1 to (skinOps.GetNumberVertices modf) where (skinOps.IsVertexSelected modf i == 1) collect i
		-- 			for i in 1 to (skinOps.GetNumberVertices modf) do (skinOps.IsVertexSelected modf i = 0)
		-- 			for i = 1 to softV.count do
		-- 			(
		-- 				skinOps.IsVertexSelected modf softV[i] = 1
		-- 				skinOps.SetWeight modf softW[i]
		-- 				skinOps.IsVertexSelected modf softV[i] = 0
		-- 			)
		-- 			for i in 1 to CurrentVertexIDs do (skinOps.IsVertexSelected modf i = 1)
			)catch(messagebox "出错")
		)
	)
	on btn_BuildBP pressed do
	(
		fn AssignBonesPro list = --将列表中的物体都作为最后一个物体的骨骼,添加BonesPro修改器
		(
			local modf = BonesPro()
			addmodifier list[list.count] modf
			select list[list.count]
			completeRedraw() --解决未知异常,推断应该是必须重绘才能让修改器定点数更新,像下面的skin一样
			modf.assign_bones (deleteitem list list.count)
		)
		AssignBonesPro (selection as array)
	)
	on btn_ConvertBP pressed do
	(
		btn_ConvertBP.caption = "运行中...时间会比较长"
		fn BonesPro2Skin obj delBP:false = --骨骼不能有重名
		(
			local bpmodf = for m in obj.modifiers where iskindof m BonesPro do exit with m,
			bcount = bpmodf.num_bones(), boneList = for i = 1 to bcount collect getnodebyname(bpmodf.get_bone_name i),
			vcount = getNumVerts(snapshotasmesh obj)
			if bpmodf != ok then
			(
				local weights = (for i = 1 to vcount collect (for j = 1 to bcount collect bpmodf.get_weight j i))
				select obj;addmodifier obj (skin())
				local skinmodf = obj.modifiers[1]
				for i in boneList do skinOps.addbone skinmodf i 0
				bidlist = for i = 1 to bcount collect i
				completeRedraw() --必须刷新才能让顶点数更新,否则修改器的顶点数一直是0
				for i = 1 to vcount do skinOps.SetVertexWeights skinmodf i bidlist weights[i]
				if delBP then deletemodifier obj bpmodf else bpmodf.enabled = false
			)else messagebox "物体未发现BP修改器."
		)
	-- 		 BonesPro.get_dq_weight <vert>--以后用于读取四元数设置的
		setCommandPanelTaskMode mode:#modify
		sels = (selection as array)
		for o in sels do BonesPro2Skin o
		select sels
		btn_ConvertBP.caption = "转换BonesPro到Skin"
	)
	on btn_ClearBP pressed do
	(
		fn deleteBonesPro obj = for i = obj.modifiers.count to 1 by -1 where iskindof obj.modifiers[i] BonesPro do deletemodifier obj i --删除物体的所有BonesPro修改器
		for o in (selection as array) do deleteBonesPro o	
	)
	on btn_BuildSW pressed do
	(
		btn_BuildSW.caption = "运行中...时间会比较长"
		fn AssignSkinWrap list = --将列表中的物体都作为最后一个物体的驱动模型,添加SkinWrap修改器
		(
			modf = Skin_Wrap()
			addmodifier list[list.count] modf
			completeRedraw()
			modf.engine = 0
			modf.distance = modf.falloff = 0.001
			modf.weightAllVerts = on
			modf.meshList = (deleteitem list list.count)
		)
		AssignSkinWrap(selection as array)
		btn_BuildSW.caption = "构建SkinWrap修改器"
	)
	on btn_BuildSWS pressed do
	(
		btn_BuildSW.caption = "运行中...时间会比较长"
		fn AssignSkinWrap list = --所有选择的物体以最后一个物体为包裹,添加SkinWrap修改器
		(
			ml = #(list[list.count])
			for o in (deleteitem list list.count) do 
			(
				modf = Skin_Wrap()
				addmodifier o modf
				completeRedraw()
				modf.engine = 1
				modf.distance = modf.falloff = 0.001
				modf.weightAllVerts = on
				modf.meshList = ml
			)
		)
		AssignSkinWrap(selection as array)
		btn_BuildSW.caption = "构建SkinWrap修改器"
	)
	on btn_ConvertSW pressed do
	undo "ConvertToSkin" on(
		sels = selection as array
		for i in sels do (select i;i.modifiers[1].ConvertToSkin true)
		select sels
	)
	on btn_ClearSW pressed do
	(
		fn deleteSkinWrap obj = for i = obj.modifiers.count to 1 by -1 where iskindof obj.modifiers[i] Skin_Wrap do deletemodifier obj i --删除物体的所有BonesPro修改器
		for o in (selection as array) do deleteSkinWrap o	
	)
	
	
	button btn10 "拆分Skin" pos:[8,224] width:168 height:24
	button btn11 "合并Skin" pos:[8,248] width:168 height:24
	on btn10 pressed do
	(
		fn separate obj:(getcurrentselection()) del:false next:false = --快速简版
		(
			if obj.count == 1 then
			(
				with redraw off(animate off(--因为只有新加的东西,所以可以关闭撤销
					at time 0(
						obj = obj[1]
						--复制两个物体加入集合 一个将当前选中的面删掉,一个将当前未选中的面删掉,分别命名为A和B 选中A和B,这种方式虽然很笨拙,而且不好扩展,但是兼容性很好,即使只选择一部分面或点,也可以分离
						--记录当前选择级别和操作类型
						setCommandPanelTaskMode mode:#modify
						CurrentMod = modpanel.getCurrentObject()
						Mclass = classof CurrentMod
						if Mclass == Editable_Poly or Mclass == Edit_Poly then
						(
							local mID = try(modPanel.getModifierIndex obj CurrentMod)catch(0)
							if subObjectLevel > 0 do CurrentMod.ConvertSelection #CurrentLevel #Face
							subObjectLevel = 0
							disableRefMsgs()
							local A = copy obj,
								B = copy obj
							enableRefMsgs()
							
							local AMod = if mID == 0 then A.baseobject else A.modifiers[mID],
								BMod = if mID == 0 then B.baseobject else B.modifiers[mID]
								
							case Mclass of
							(
								Editable_Poly :
								(
									polyop.deleteFaces AMod (polyOp.getFaceSelection AMod)
									polyop.deleteFaces BMod -(polyOp.getFaceSelection BMod)
								)
								Edit_Poly :
								(
									select A
									AMod.ButtonOp #DeleteFace
									select B
									BMod.setSelection #Face -(BMod.getSelection #face)
									BMod.ButtonOp #DeleteFace
									select obj
								)
							)
							
							try(modPanel.setCurrentObject A.modifiers[1])catch()
							try(modPanel.setCurrentObject B.modifiers[1])catch()
							
							completeRedraw()
							if del do delete obj
							if next do 
							(
								select A
								modPanel.setCurrentObject AMod
								subObjectLevel = 5
							)
						)else messagebox "需要选择一个 EditPoly 修改器,或者 EditablePoly 物体级别.\t"
					)
				))
			)
		)
		if true then undo "Skin" on (separate del:true next:true) else undo off (separate())
	)
	on btn11 pressed do
	(
	
	)
)
createdialog WeigthFnRollout