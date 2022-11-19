try(DestroyDialog t1Rollout)catch()
rollout t1Rollout "Untitled" width:720 height:350
(
	local
	curve,
	ui_style = #(#drawgrid,#upperToolbar,#showReset,#scrollBars,#autoScroll,#ruler,#lowerToolbar),
	btn_h = 24,
	btn_w = 96,
	up = -29
	CurveControl 'CurveEditor' pos:[13,7] numCurves:1 y_range:[0,99999] uiFlags:ui_style height:300
	
	CheckButton 'ckb_applyWidth' "Apply Bone Width" align:#left height:btn_h width:btn_w
	CheckButton 'ckb_applyHeight' "Apply Bone Height" align:#left height:btn_h width:btn_w offset:[100,up]
	
	CheckButton 'ckb_applySideFins' "Apply Side Fins" align:#right height:btn_h width:btn_w offset:[-200,up]
	CheckButton 'ckb_applyFrontFins' "Apply Front Fins" align:#right height:btn_h width:btn_w offset:[-100,up]
	CheckButton 'ckb_applyBackFins' "Apply Back Fins" align:#right height:btn_h width:btn_w offset:[0,up]
	
	--辅助功能
	fn getBones = for i in getCurrentSelection() where classof i.baseobject == BoneGeometry collect i
	fn setVal objs:(getBones()) w:false h:false sf:false ff:false bf:false = 
	(
		print objs
		local
		count = objs.count
		if count > 1 do
		(
			local
			mean = 1.0 / (count-1),
			offset = -mean
			for i = 1 to count do
			(
				offset += mean
				local
				obj = objs[i].baseobject,
				val = (getValue curve 0 offset)
				
				if w do obj.width = val
				if h do obj.height = val
					
				if sf do obj.sidefinssize = val
				if ff do obj.frontfinsize = val
				if bf do obj.backfinsize = val
			)
		)
	)
	
	--启动响应,应在启动时获取第一个骨骼和最后一个骨骼的值,添加给曲线(此功能可绑定到重置按钮上)
	on t1Rollout open do
	(
		curve = CurveEditor.curves[1]
		curve.color = red
		curve.animatable = false
	)
	
	--曲线响应
	on CurveEditor reset curve_index do --点击重置按钮,默认简写ci
		print curveIndex
	on CurveEditor ptChanged ci val do --点改变,返回 顶点索引,值
		setVal w:ckb_applyWidth.checked h:ckb_applyHeight.checked sf:ckb_applySideFins.checked ff:ckb_applyFrontFins.checked bf:ckb_applyBackFins.checked
-- 		print #("点改变",ci,val) #nomap
	on CurveEditor tangentChanged ci val type do --切线改变,返回 顶点索引,值,切线类型(in或out)
		setVal w:ckb_applyWidth.checked h:ckb_applyHeight.checked sf:ckb_applySideFins.checked ff:ckb_applyFrontFins.checked bf:ckb_applyBackFins.checked
-- 		print #("切线改变",ci,val,type) #nomap
	
	--按钮响应
	on btn_applyWidth pressed do
		print (getValue curve 0 0.5) --[lookup:<false>]  --因为支持动画,可提供一个时间,这里是0.
	
	--切换响应
	
	on ckb_applyWidth changed state do if state do setVal w:ckb_applyWidth.checked
	on ckb_applyHeight changed state do if state do setVal h:ckb_applyHeight.checked
	
	on ckb_applySideFins changed state do if state do setVal sf:ckb_applySideFins.checked
	on ckb_applyFrontFins changed state do if state do setVal ff:ckb_applyFrontFins.checked
	on ckb_applyBackFins changed state do if state do setVal bf:ckb_applyBackFins.checked
)
createdialog t1Rollout