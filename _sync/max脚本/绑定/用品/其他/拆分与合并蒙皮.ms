fn separate obj:(getcurrentselection()) del:false next:false = --快速简版
(
	if obj.count == 1 then
	(
		undo off(--因为只有新加的东西,所以可以关闭撤销
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
-- 						select A
						modPanel.setCurrentObject AMod
						subObjectLevel = 5
					)
				)else messagebox "需要选择一个 EditPoly 修改器,或者 EditablePoly 物体级别.\t"
			)
		)
	)
)
separate del:true next:true
-- fn combine =
-- undo off(--因为只有新加的东西,所以可以关闭撤销
-- 	at time 0(
-- 	-- 按顺序获取所有物体顶点的权重,将骨骼ID转换为骨骼名,记录到权重列表A,顺便集合到唯一的骨骼列表B,
-- 	-- 复制所有模型,转为editmesh,将所有模型合并到最后一个模型,固定材质合并方式为多维材质.
-- 	-- B作为新skin的骨骼,按顺序设置顶点权重A,A从骨骼名获取骨骼ID
-- 	)
-- )

-- $.getselection #face

-- subObjectLevel