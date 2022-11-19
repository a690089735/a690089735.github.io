-- 1.基本对象
-- 基本对象必须是editpoly或者mesh,否则提示无效,选择是否继续(继续则跳过此部分)
-- 2.物体节点
-- 任意物体
-- 3.修改器
-- 任意修改器,设置是否要取反,默认取反.(反操作)

--创建新物体和添加到..

-- 示例
attributes HideParts
(
	Parameters HideParts rollout:HidePartsRollout
	(	
		checked_1 type:#boolean animatable:false ui:Leg_Mesh --可以改成可动画化
		
		modifiers_1 type:#maxObjectTab tabsize:2 --tabSizeVariable:true
		bools_1 type:#boolTab tabsize:2 --修改器可能取反 true为取反
		
		nodes_1 type:#maxObjectTab tabsize:2 --tabSizeVariable:true 使用nodeTransformMonitor node:i来储存,避免意外的循环依赖
		
		geometrys_1 type:#maxObjectTab tabsize:2
		faces_1 type:#stringTab tabsize:2 --tabSizeVariable:true 储存的是bitarray 例如:#("#{1..3}","#{3,5..7}")
		
	)
	rollout HidePartsRollout "DisplayParts" 
	(
		checkbutton 'Leg Mesh' "Leg Mesh" Align:#Center tooltip:"Show/Hide Leg Mesh.\nClick mouse:Left or Right."
		
		on LegMesh checked state do
			undo (if state then "Show Leg Mesh" else "Hide Leg Mesh") on (
				local xstate = not state 
				for i = 1 to modifiers_1.count do modifiers_1[i].enabled = if bools_1[i] then xstate else state 
				for n in nodes_1 do n.node.ishidden = xstate
				for i = 1 to geometrys_1.count do
					--没指定的会被显示,所以要获取一下
					meshop.setHiddenFaces geometrys_1[i] ((faces_1[i] as bitarray)+meshop.getHiddenFaces geometrys_1[i])
				)
	)
)

-- 需要设置各个Parameters,填充下划线后面的序号.构建为文本,执行为属性,最后选择添加到哪里.


-- 界面自动响应选择,分别收集物体,面,修改器.随时加入右侧列表.已经加入的不再在左侧显示,最右侧可以上下移动列表和删除项目.