-- 按顺序选择模型,即可自动添加变形,自动绑定,自动布局.(事先命好名字哦,其实可以自动命名,)
--当前只有批量加变形的功能

try(destroydialog dedicatedMorpherRig)catch()

rollout dedicatedMorpherRig "专用变形绑定" width:144 height:64
(
	local R_Color = Green --Slider颜色
	local S_Color = Yellow --Button颜色
	local V_Color = blue--progress颜色 
	local mdf = Extrude amount:0 segs:1 capStart:off capType:0 output:1 smooth:off
	local maxwidth = 20
	local freezebool = true
	local fname = ""
	
	-- 冻结变换
	fn  setFreezeTransform objs = 
	(
		for obj in objs do 
		(
			obj.pos.controller = bezier_position ()
			obj.pos.controller = position_list ()
			obj.pos.controller.Available.controller = Position_XYZ ()
			obj.pos.controller.Active = 2
			obj.rotation.controller = rotation_list ()
			obj.rotation.controller.Available.controller = Euler_XYZ ()
			obj.rotation.controller.Active = 2
		)
	)
	fn offGray objs = 
	(
		for o in objs do 
			o.showFrozenInGray = o.renderable = o.castShadows = o.receiveshadows = o.ApplyAtmospherics = o.inheritVisibility = o.primaryVisibility = o.secondaryVisibility = off
	)
	fn setPropertie objs = 
	(
		if freezebool do freeze objs
		for o in objs do setTransformLockFlags o #{1..9}
	)
	
	fn setLink verList ctrlList =(
		for i = 1 to verList.cout do paramWire.connect verList[i] ctrlList[i] "Length*50"
	)
	--创建A类型正一位UI 水平1个控制
	fn Create_UI_A = 
	(
		local index
		UIname = (fname + "_UI_A")
		--创建范围(父物体)
		index = execute ("($'" + UIname +"*_R'.count + 1) as string")
		Rname = (UIname + index + "_R" )
		R = Rectangle name:Rname length:2 width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
		--创建滑块
		Sname = (UIname + index + "_S" )
		S = Ngon name:Sname radius:2.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [-10,0,0]) wirecolor:S_Color
		addmodifier S mdf
		--创建进度值
		Vname = uniqueName (UIname + index + "_V" )
		V1 = Rectangle name:Vname length:2 width:maxwidth cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:V_Color
		--绑定父子,设置禁止移动
		V1.parent = S.parent = R
		setTransformLockFlags S #{2..9} --锁定位置,旋转,缩放,仅x轴pos可动
		--冻结变换,设置限制
		 setFreezeTransform #(S)
		S.pos.controller[2].X_Position.controller = float_limit ()
		S.pos.controller[2].X_Position.controller.upper_limit = 20
		S.pos.controller[2].X_Position.controller.lower_limit = 0
		--绑定控制脚本
			--V1
		V1.length.controller = (float_script ())
		ctrl = V1.length.controller
		ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
		ctrl.script = "val = cursor_x.value; if val > 0 then (abs(val)/10) else 0"
		--冻结物体
		 setPropertie #(V1)
		offGray #(V1,S,R)
		return #(V1.baseobject[#Length])
	)

	--创建B类型正二位UI 水平两个控制
	fn Create_UI_B = 
	(
		local index
		UIname = (fname + "_UI_B")
		--创建范围(父物体)
		index = execute ("($'" + UIname +"*_R'.count + 1) as string")
		Rname = (UIname + index + "_R" )
		R = Rectangle name:Rname length:2 width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
		--创建滑块
		Sname = (UIname + index + "_S" )
		S = Ngon name:Sname radius:2.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:S_Color
		addmodifier S mdf
		--创建进度值
		Vname = uniqueName (UIname + index + "_V" )
		V1 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [-5,0,0]) wirecolor:V_Color
		Vname = uniqueName (UIname + index + "_V" )
		V2 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [5,0,0]) wirecolor:V_Color
		--绑定父子,设置禁止移动
		V1.parent = V2.parent = S.parent = R
		setTransformLockFlags S #{2..9} --锁定位置,旋转,缩放,仅x轴pos可动
		--冻结变换,设置限制
		 setFreezeTransform #(S)
		S.pos.controller[2].X_Position.controller = float_limit ()
		S.pos.controller[2].X_Position.controller.upper_limit = 10
		S.pos.controller[2].X_Position.controller.lower_limit = -10
		--绑定控制脚本
			--V1
		V1.length.controller = (float_script ())
		ctrl = V1.length.controller
		ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
		ctrl.script = "val = cursor_x.value; if val < 0 then (abs(val)/5) else 0"
			--V2
		V2.length.controller = (float_script ())
		ctrl = V2.length.controller
		ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
		ctrl.script = "val = cursor_x.value; if val > 0 then (val/5) else 0"
		--冻结物体
		 setPropertie #(V1,V2)
		offGray #(V1,V2,S,R)
		return #(V1.baseobject[#Length],V2.baseobject[#Length])
	)

	button 'btn_Execute' "Execute" pos:[16,32] width:112 height:24 toolTip:"按顺序选择,选择的第一个是主模型." align:#left
	editText 'edt1' "前缀" pos:[16,8] width:112 height:16 align:#left
	on btn_Execute pressed do
	with undo on(
		--主模型逐个添加变形
		Fname = edt1.text
		objs = selection as array
		max modify mode
		mmdfname = (Fname+"_Morpher")
		mmdf = morpher name:mmdfname
		addmodifier objs[1] mmdf
		select objs[1]
		for i = 2 to objs.count do WM3_MC_BuildFromNode mmdf (i-1) objs[i]
-- 		--逐个绑定
-- 		vl = Create_UI_B()
-- 		cl = #(mmdf[1],mmdf[2])
-- 		setLink vl cl
-- 		--布局UI
	)
)

createdialog dedicatedMorpherRig

--