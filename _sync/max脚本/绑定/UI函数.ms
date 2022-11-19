

-- delete objects

R_Color = Green --Slider颜色
S_Color = Yellow --Button颜色
V_Color = blue--progress颜色 
mdf = Extrude amount:0 segs:1 capStart:off capType:0 output:1 smooth:off

maxwidth = 20

freezebool = true

fname = ""

-- 冻结变换
fn  setFreezeTransform objs = 
(
	for obj in objs do 
	(
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
	for o in objs do o.showFrozenInGray = off
)
fn setPropertie objs = 
(
	if freezebool do freeze objs
	for o in objs do setTransformLockFlags o #{1..9}
)

--创建A类型正一位UI 水平1个控制
fn CreateUI_A = 
(
	UIname = (fname + "UI_A")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:2 width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:1.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [-10,0,0]) wirecolor:S_Color
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
)
CreateUI_A()

--创建B类型正二位UI 水平两个控制
fn CreateUI_B = 
(
	UIname = (fname + "UI_B")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:2 width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:1.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:S_Color
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
)
-- CreateUI_B()

--创建C类型正三位UI 水平两个控制,下方一个 
fn CreateUI_C = 
(
	UIname = (fname + "UI_C")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:(maxwidth/2) width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:1.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,5]) wirecolor:S_Color
	addmodifier S mdf
	--创建进度值
	Vname = uniqueName (UIname + index + "_V" )
	V1 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [-5,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V2 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [5,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V3 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [0,0,1] [-1,-1.62921e-07,0] [1.62921e-07,-1,0] [0,-5,0]) wirecolor:V_Color
	--绑定父子,设置禁止移动
	V1.parent = V2.parent = V3.parent = S.parent = R
	setTransformLockFlags S #{3..9} --锁定位置,旋转,缩放,仅x轴pos可动
	--冻结变换,设置限制
	 setFreezeTransform #(S)
	S.pos.controller[2].X_Position.controller = float_limit ()
	S.pos.controller[2].X_Position.controller.upper_limit = 10
	S.pos.controller[2].X_Position.controller.lower_limit = -10
	S.pos.controller[2].Y_Position.controller = float_limit ()
	S.pos.controller[2].Y_Position.controller.upper_limit = 0
	S.pos.controller[2].Y_Position.controller.lower_limit = -10
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
		--V3
	V3.length.controller = (float_script ())
	ctrl = V3.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].Y_Position.controller
	ctrl.script = "val = cursor_x.value; if val < 0 then (abs(val)/5) else 0"
		--冻结物体
	 setPropertie #(V1,V2,V3)
	offGray #(V1,V2,V3,S,R)
)

-- CreateUI_C()

--创建D类型角三位UI 下方三个
fn CreateUI_D = 
(
	UIname = (fname + "UI_D")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:(maxwidth/2) width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:1.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,5]) wirecolor:S_Color
	addmodifier S mdf
	--创建进度值
	Vname = uniqueName (UIname + index + "_V" )
	V1 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,0.707107] [-0.707107,-1.62921e-07,0.707107] [0,-1,0]  [-5,0,0]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V2 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [0,0,1] [-1,-1.62921e-07,0] [1.62921e-07,-1,0] [0,0,0]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V3 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,-0.707107] [0.707107,-1.62921e-07,0.707107] [0,-1,0] [5,0,0]) wirecolor:V_Color
	--绑定父子,设置禁止移动
	V1.parent = V2.parent = V3.parent = S.parent = R
	setTransformLockFlags S #{3..9} --锁定位置,旋转,缩放,仅x轴pos可动
	--冻结变换,设置限制
	 setFreezeTransform #(S)
	S.pos.controller[2].X_Position.controller = float_limit ()
	S.pos.controller[2].X_Position.controller.upper_limit = 10
	S.pos.controller[2].X_Position.controller.lower_limit = -10
	S.pos.controller[2].Y_Position.controller = float_limit ()
	S.pos.controller[2].Y_Position.controller.upper_limit = 0
	S.pos.controller[2].Y_Position.controller.lower_limit = -10
	--绑定控制脚本
		--V1
	V1.length.controller = (float_script ())
	ctrl = V1.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; if v1 < 0 then (abs(v1*v2)/50) else 0"
		--V2
	V2.length.controller = (float_script ())
	ctrl = V2.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val =  ((abs(v2)-abs(v1))/5); if v2 < 0 and val > 0 then val else 0"
		--V3
	V3.length.controller = (float_script ())
	ctrl = V3.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; if v1 > 0 then (abs(v1*v2)/50) else 0"
		--冻结物体
	 setPropertie #(V1,V2,V3)
	offGray #(V1,V2,V3,S,R)
)
-- CreateUI_D()

--创建E类型正四位UI 水平边两个控制,垂直边两个控制
fn CreateUI_E = 
(
	UIname = (fname + "UI_E")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:maxwidth width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:1.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:S_Color
	addmodifier S mdf
	--创建进度值
	Vname = uniqueName (UIname + index + "_V" )
	V1 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [0,0,-1] [1,-1.62921e-007,0] [-1.62921e-007,-1,0] [0,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V2 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [-5,0,0]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V3 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [5,0,0]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V4 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [0,0,-1] [1,-1.62921e-007,0] [-1.62921e-007,-1,0] [0,0,-5]) wirecolor:V_Color
	--绑定父子,设置禁止移动
	V1.parent = V2.parent = V3.parent = V4.parent = S.parent = R
	setTransformLockFlags S #{3..9} --锁定位置,旋转,缩放,仅x轴pos可动
	--冻结变换,设置限制
	 setFreezeTransform #(S)
	S.pos.controller[2].X_Position.controller = float_limit ()
	S.pos.controller[2].X_Position.controller.upper_limit = 10
	S.pos.controller[2].X_Position.controller.lower_limit = -10
	S.pos.controller[2].Y_Position.controller = float_limit ()
	S.pos.controller[2].Y_Position.controller.upper_limit = 10
	S.pos.controller[2].Y_Position.controller.lower_limit = -10
	--绑定控制脚本
		--V1
	V1.length.controller = (float_script ())
	ctrl = V1.length.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "val = cursor_y.value; if val > 0 then (val/5) else 0"
		--V2
	V2.length.controller = (float_script ())
	ctrl = V2.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.script = "val = cursor_x.value; if val < 0 then (abs(val)/5) else 0"
		--V3
	V3.length.controller = (float_script ())
	ctrl = V3.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.script = "val = cursor_x.value; if val > 0 then (val/5) else 0"
		--V4
	V4.length.controller = (float_script ())
	ctrl = V4.length.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "val = cursor_y.value; if val < 0 then (abs(val)/5) else 0"
	--冻结物体
	setPropertie #(V1,V2,V3,V4)
	offGray #(V1,V2,V3,V4,S,R)
)
-- CreateUI_E()

--创建F类型角四位UI 水平对角线两个控制,垂直对角线两个控制
fn CreateUI_F = 
(
	UIname = (fname + "UI_F")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:maxwidth width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:1.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:S_Color
	addmodifier S mdf
	--创建进度值
	Vname = uniqueName (UIname + index + "_V" )
	V1 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,-0.707107] [0.707107,-1.62921e-07,0.707107] [0,-1,0] [-5,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V2 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,0.707107] [-0.707107,-1.62921e-07,0.707107] [0,-1,0]  [5,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V3 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,0.707107] [-0.707107,-1.62921e-07,0.707107] [0,-1,0]  [-5,0,-5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V4 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,-0.707107] [0.707107,-1.62921e-07,0.707107] [0,-1,0] [5,0,-5]) wirecolor:V_Color
	--绑定父子,设置禁止移动
	V1.parent = V2.parent = V3.parent = V4.parent = S.parent = R
	setTransformLockFlags S #{3..9} --锁定位置,旋转,缩放,仅x轴pos可动
	--冻结变换,设置限制
	 setFreezeTransform #(S)
	S.pos.controller[2].X_Position.controller = float_limit ()
	S.pos.controller[2].X_Position.controller.upper_limit = 10
	S.pos.controller[2].X_Position.controller.lower_limit = -10
	S.pos.controller[2].Y_Position.controller = float_limit ()
	S.pos.controller[2].Y_Position.controller.upper_limit = 10
	S.pos.controller[2].Y_Position.controller.lower_limit = -10
	--绑定控制脚本
		--V1
	V1.length.controller = (float_script ())
	ctrl = V1.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; val = ((v2-v1)/10) ;if v1 > 0 and v2 < 0 or val <= 0 then 0 else val"
		--V2
	V2.length.controller = (float_script ())
	ctrl = V2.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val = ((v2+v1)/10); if v1 < 0 and v2 < 0 or val <= 0 then 0 else val"
		--V3
	V3.length.controller = (float_script ())
	ctrl = V3.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val = (-(v2+v1)/10); if v1 > 0 and v2 > 0 or val <= 0 then 0 else val"
		--V4
	V4.length.controller = (float_script ())
	ctrl = V4.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; val = (-(v2-v1)/10) ;if v1 < 0 and v2 > 0 or val <= 0 then 0 else val"
		--冻结物体
	setPropertie #(V1,V2,V3,V4)
	offGray #(V1,V2,V3,V4,S,R)
)
-- CreateUI_F()

--创建G类型角三位UI 左右两个 下方三个
fn CreateUI_G = 
(
	UIname = (fname + "UI_G")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:(maxwidth/2) width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:1.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,5]) wirecolor:S_Color
	addmodifier S mdf
	--创建进度值
	Vname = uniqueName (UIname + index + "_V" )
	V1 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [-5,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V2 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [5,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V3 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,0.707107] [-0.707107,-1.62921e-07,0.707107] [0,-1,0]  [-5,0,0]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V4 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [0,0,1] [-1,-1.62921e-07,0] [1.62921e-07,-1,0] [0,0,0]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V5 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,-0.707107] [0.707107,-1.62921e-07,0.707107] [0,-1,0] [5,0,0]) wirecolor:V_Color
	--绑定父子,设置禁止移动
	V1.parent = V2.parent = V3.parent = V4.parent = V5.parent = S.parent = R
	setTransformLockFlags S #{3..9} --锁定位置,旋转,缩放,仅x轴pos可动
	--冻结变换,设置限制
	 setFreezeTransform #(S)
	S.pos.controller[2].X_Position.controller = float_limit ()
	S.pos.controller[2].X_Position.controller.upper_limit = 10
	S.pos.controller[2].X_Position.controller.lower_limit = -10
	S.pos.controller[2].Y_Position.controller = float_limit ()
	S.pos.controller[2].Y_Position.controller.upper_limit = 0
	S.pos.controller[2].Y_Position.controller.lower_limit = -10
	--绑定控制脚本
		--V1
	V1.length.controller = (float_script ())
	ctrl = V1.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val = ((-v1+v2)/5); if v1 < 0 and val >0 then val else 0"
		--V2
	V2.length.controller = (float_script ())
	ctrl = V2.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val = ((v1+v2)/5); if v1 > 0 and val >0 then val else 0"
		--V3
	V3.length.controller = (float_script ())
	ctrl = V3.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; if v1 < 0 then (abs(v1*v2)/50) else 0"
		--V4
	V4.length.controller = (float_script ())
	ctrl = V4.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val =  ((abs(v2)-abs(v1))/5); if v2 < 0 and val > 0 then val else 0"
		--V5
	V5.length.controller = (float_script ())
	ctrl = V5.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; if v1 > 0 then (abs(v1*v2)/50) else 0"
		--冻结物体
	setPropertie #(V1,V2,V3,V4,V5)
	offGray #(V1,V2,V3,V4,V5,S,R)
)
-- CreateUI_G()

--创建G类型半五位UI 左右两个 下方三个
fn CreateUI_H = 
(
	UIname = (fname + "UI_H")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:maxwidth width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:1.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:S_Color
	addmodifier S mdf
	--创建进度值
	Vname = uniqueName (UIname + index + "_V" )
	V1 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,-0.707107] [0.707107,-1.62921e-07,0.707107] [0,-1,0] [-5,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V2 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [0,0,-1] [1,-1.62921e-007,0] [-1.62921e-007,-1,0] [0,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V3 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,0.707107] [-0.707107,-1.62921e-07,0.707107] [0,-1,0]  [5,0,5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V4 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [-5,0,0]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V5 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [5,0,0]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V6 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,0.707107] [-0.707107,-1.62921e-07,0.707107] [0,-1,0]  [-5,0,-5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V7 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [0,0,-1] [1,-1.62921e-007,0] [-1.62921e-007,-1,0] [0,0,-5]) wirecolor:V_Color
	Vname = uniqueName (UIname + index + "_V" )
	V8 = Rectangle name:Vname length:2 width:14.1421 cornerRadius:0 transform:(matrix3 [0.707107,0,-0.707107] [0.707107,-1.62921e-07,0.707107] [0,-1,0] [5,0,-5]) wirecolor:V_Color
	
	--绑定父子,设置禁止移动
	V1.parent = V2.parent = V3.parent = V4.parent = V5.parent = V6.parent = V7.parent = V8.parent = S.parent = R
	setTransformLockFlags S #{3..9} --锁定位置,旋转,缩放,仅x轴pos可动
	--冻结变换,设置限制
	 setFreezeTransform #(S)
	S.pos.controller[2].X_Position.controller = float_limit ()
	S.pos.controller[2].X_Position.controller.upper_limit = 10
	S.pos.controller[2].X_Position.controller.lower_limit = -10
	S.pos.controller[2].Y_Position.controller = float_limit ()
	S.pos.controller[2].Y_Position.controller.upper_limit = 10
	S.pos.controller[2].Y_Position.controller.lower_limit = -10
	--绑定控制脚本
		--V1
	V1.length.controller = (float_script ())
	ctrl = V1.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; if v1 < 0 and v2 > 0 then (abs(v1*v2)/50) else 0"
		--V2
	V2.length.controller = (float_script ())
	ctrl = V2.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val =  ((abs(v2)-abs(v1))/5); if v2 > 0 and val > 0 then val else 0"
		--V3
	V3.length.controller = (float_script ())
	ctrl = V3.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; if v1 > 0 and v2 > 0 then (abs(v1*v2)/50) else 0"
		--V4
	V4.length.controller = (float_script ())
	ctrl = V4.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val =  ((abs(v1)-abs(v2))/5); if v1 < 0 and val > 0 then val else 0"
		--V5
	V5.length.controller = (float_script ())
	ctrl = V5.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val =  ((abs(v1)-abs(v2))/5); if v1 > 0 and val > 0 then val else 0"
	
		--V6
	V6.length.controller = (float_script ())
	ctrl = V6.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; if v1 < 0 and v2 < 0 then (abs(v1*v2)/50) else 0"
		--V7
	V7.length.controller = (float_script ())
	ctrl = V7.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value;val =  ((abs(v2)-abs(v1))/5); if v2 < 0 and val > 0 then val else 0"
		--V8
	V8.length.controller = (float_script ())
	ctrl = V8.length.controller
	ctrl.AddObject "cursor_x" S.pos.controller[2].X_Position.controller
	ctrl.AddObject "cursor_y" S.pos.controller[2].Y_Position.controller
	ctrl.script = "v1 = cursor_x.value;v2 = cursor_y.value; if v1 > 0 and v2 < 0 then (abs(v1*v2)/50) else 0"
		--冻结物体
	setPropertie #(V1,V2,V3,V4,V5,V6,V7,V8)
	offGray #(V1,V2,V3,V4,V5,V6,V7,V8,S,R)
)
-- CreateUI_H()
---