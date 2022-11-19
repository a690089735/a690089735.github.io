try(destroydialog UICreator)catch()

rollout UICreator "UI创建器0.3-连线控制器" width:552 height:288
(
	listbox lbx_morpher "变形器列表" pos:[352,16] width:192 height:13 selection:1
	button btn_Load "读取选中模型" pos:[432,224] width:104 height:24
	dropdownList ddl_Type "UI面板类型" pos:[16,16] width:128 height:41 items:#("A:正一位", "B:正二位", "C:正三位", "D:角三位", "E:正四位", "E_B:正四位+角补偿", "F:角四位", "G:半五位", "H:全八位")
	checkbutton btn_LU "左上" pos:[16,80] width:32 height:20 enabled:false
	checkbutton btn_L "左" pos:[16,128] width:32 height:20 enabled:false
	checkbutton btn_LD "左下" pos:[16,176] width:32 height:20 enabled:false
	checkbutton btn_U "上" pos:[64,80] width:32 height:20 enabled:false
	checkbutton btn_C "中" pos:[64,128] width:32 height:20 enabled:false
	checkbutton btn_D "下" pos:[64,176] width:32 height:20 enabled:false
	checkbutton btn_RU "右上" pos:[112,80] width:32 height:20 enabled:false
	checkbutton btn_R "右" pos:[112,128] width:32 height:20
	checkbutton btn_RD "右下" pos:[112,176] width:32 height:20 enabled:false
	edittext edt_name "名称" pos:[16,224] width:128 height:18
	button btn_create "创建UI" pos:[16,256] width:128 height:24
	button btn_FreezeV "冻结块" pos:[432,256] width:48 height:24 toolTip:"右键解冻"
	button btn_HideV "隐藏块" pos:[488,256] width:48 height:24 toolTip:"右键显示"
	button btn_Clear "清除绑定列表" pos:[232,256] width:104 height:24
	listbox lbx_rigList "绑定列表" pos:[152,16] width:192 height:13
	button btn_del "删除选定项" pos:[232,224] width:104 height:24
	label lbl_index "0" pos:[208,16] width:16 height:16
	
	local Bn_Chl = #(#(), #(), #(), #(), #(), #(), #(), #())
	local Bn_index = #(5)
	local index = 0
	local Ch_List = #()
	
	local R_Color = Green --Slider颜色
	local S_Color = Yellow --Button颜色
	local V_Color = blue--progress颜色 
	local mdf = Extrude amount:0 segs:1 capStart:off capType:0 output:1 smooth:off

	local maxwidth = 20

	local freezebool = true

	local fname = ""

	fn disableButton buttons1 buttons2= 
	(for b in buttons1 do b.enabled = false;for b in buttons2 do b.enabled = true)
	fn checkedButton button state =
	(
		for b in #(btn_LU, btn_U, btn_RU, btn_L, btn_R, btn_LD, btn_D, btn_RD) do b.checked = false; button.checked = state
		if state then (index = findItem #(btn_LU, btn_U, btn_RU, btn_L, btn_R, btn_LD, btn_D, btn_RD) button;lbx_rigList.items = for c in Bn_Chl[index] collect c[1]) else (lbx_rigList.items = #();index = 0)
		lbl_index.caption = index as string
	)

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

--创建C类型正三位UI 水平两个控制,下方一个 
fn Create_UI_C = 
(
	local index
	UIname = (fname + "_UI_C")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:(maxwidth/2) width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:2.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,5]) wirecolor:S_Color
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
	return #(V1.baseobject[#Length],V2.baseobject[#Length],V3.baseobject[#Length])
)

--创建D类型角三位UI 下方三个
fn Create_UI_D = 
(
	local index
	UIname = (fname + "_UI_D")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:(maxwidth/2) width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:2.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,5]) wirecolor:S_Color
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
	return #(V1.baseobject[#Length],V2.baseobject[#Length],V3.baseobject[#Length])
)

--创建E类型正四位UI 水平边两个控制,垂直边两个控制
fn Create_UI_E = 
(
	local index
	UIname = (fname + "_UI_E")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:maxwidth width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:2.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:S_Color
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
	return #(V1.baseobject[#Length],V2.baseobject[#Length],V3.baseobject[#Length],V4.baseobject[#Length])
)

--创建E类型正四位+角补偿 UI 水平边两个控制,垂直边两个控制,四角过度
fn Create_UI_E_B = 
(
	local index
	UIname = (fname + "_UI_E")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:maxwidth width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:2.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:S_Color
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
	return #(V1.baseobject[#Length],V2.baseobject[#Length],V3.baseobject[#Length],V4.baseobject[#Length])
)

--创建F类型角四位UI 水平对角线两个控制,垂直对角线两个控制
fn Create_UI_F = 
(
	local index
	UIname = (fname + "_UI_F")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:maxwidth width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:2.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:S_Color
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
	return #(V1.baseobject[#Length],V2.baseobject[#Length],V3.baseobject[#Length],V4.baseobject[#Length])
)

--创建G类型半五位UI 左右两个 下方三个
fn Create_UI_G = 
(
	local index
	UIname = (fname + "_UI_G")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:(maxwidth/2) width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:2.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,5]) wirecolor:S_Color
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
	return #(V1.baseobject[#Length],V2.baseobject[#Length],V3.baseobject[#Length],V4.baseobject[#Length],V5.baseobject[#Length])
)

--创建H类型全八位UI 周围八个
fn Create_UI_H = 
(
	local index
	UIname = (fname + "_UI_H")
	--创建范围(父物体)
	index = execute ("($'" + UIname +"*_R'.count + 1) as string")
	Rname = (UIname + index + "_R" )
	R = Rectangle name:Rname length:maxwidth width:maxwidth cornerRadius:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:R_Color
	--创建滑块
	Sname = (UIname + index + "_S" )
	S = Ngon name:Sname radius:2.5 cornerRadius:0 nsides:3 circular:on scribe:1 transform:(matrix3 [1,0,0] [0,0,1] [0,-1,0] [0,0,0]) wirecolor:S_Color
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
	return #(V1.baseobject[#Length],V2.baseobject[#Length],V3.baseobject[#Length],V4.baseobject[#Length],V5.baseobject[#Length],V6.baseobject[#Length],V7.baseobject[#Length],V8.baseobject[#Length])
)
	
	
	on lbx_morpher doubleClicked sel do
		if index > 0 do (append Bn_Chl[index] Ch_List[sel];lbx_rigList.items = for c in Bn_Chl[index] collect c[1])
	on btn_Load pressed do
	(
		try(
			Ch_List = for i = 1 to 100 where WM3_MC_HasData selection[1].morpher i collect (#((substituteString (WM3_MC_GetName selection[1].morpher i) " " "_"),selection[1].morpher[i]))
			lbx_morpher.items = for i = 1 to Ch_List.count collect Ch_List[i][1]
		)catch()
	)
	on ddl_Type selected sel do
	(
		btn_LU.checked = btn_U.checked = btn_RU.checked = btn_L.checked = btn_LD.checked = btn_D.checked = btn_R.checked = btn_RD.checked = false
		Bn_Chl = #(#(), #(), #(), #(), #(), #(), #(), #())
		lbx_rigList.items = #()
		case sel of
		(
			(1):(disableButton #(btn_LU, btn_U, btn_RU, btn_L, btn_LD, btn_D, btn_RD) #(btn_R);Bn_index = #(5))
			(2):(disableButton #(btn_LU, btn_U, btn_RU, btn_LD, btn_D, btn_RD) #(btn_L, btn_R);Bn_index = #(4,5))
			(3):(disableButton #(btn_LU, btn_U, btn_RU, btn_LD, btn_RD) #(btn_L, btn_R, btn_D);Bn_index = #(4,5,7))
			(4):(disableButton #(btn_LU, btn_U, btn_RU, btn_L, btn_R) #(btn_LD, btn_RD, btn_D);Bn_index = #(6,7,8))
			(5):(disableButton #(btn_LU, btn_RU, btn_LD, btn_RD) #(btn_U, btn_L, btn_R, btn_D);Bn_index = #(2,4,5,7))
			(6):(disableButton #(btn_LU, btn_RU, btn_LD, btn_RD) #(btn_U, btn_L, btn_R, btn_D);Bn_index = #(2,4,5,7))
			(7):(disableButton #(btn_U, btn_R, btn_L, btn_D)  #(btn_LU, btn_RU, btn_LD, btn_RD);Bn_index = #(1,3,6,8))
			(8):(disableButton #(btn_LU, btn_U, btn_RU) #(btn_R, btn_L, btn_LD, btn_D, btn_RD);Bn_index = #(4,5,6,7,8))
			(9):(disableButton #() #(btn_LU, btn_U, btn_RU, btn_L, btn_LD, btn_D, btn_RD, btn_R);Bn_index = #(1,2,3,4,5,6,7,8))
		)
	)
	on btn_LU changed state do
		checkedButton btn_LU state
	on btn_L changed state do
		checkedButton btn_L state
	on btn_LD changed state do
		checkedButton btn_LD state
	on btn_U changed state do
		checkedButton btn_U state
	on btn_C changed state do
		checkedButton btn_C state
	on btn_D changed state do
		checkedButton btn_D state
	on btn_RU changed state do
		checkedButton btn_RU state
	on btn_R changed state do
		checkedButton btn_R state
	on btn_RD changed state do
		checkedButton btn_RD state
	on btn_create pressed do
	(
		fname = edt_name.text
		vars = Case ddl_Type.selection of --输出的是变量,要加.controller
		(
			(1):(Create_UI_A())
			(2):(Create_UI_B())
			(3):(Create_UI_C())
			(4):(Create_UI_D())
			(5):(Create_UI_E())
			(6):(Create_UI_F())
			(7):(Create_UI_G())
			(8):(Create_UI_H())
		)
		wirelink = false
		for c in Bn_Chl where c.count > 0 do wirelink = true --如果通道有东西,那么连接参数
		if wirelink do
		(
			for i = 1 to vars.count do
			(
				v = vars[i]
				for c in Bn_Chl[Bn_index[i]] do
				(
					paramWire.connect v c[2] "Length*50"
				)
			)
		)
	)
	on btn_FreezeV pressed do
		freeze $'*_UI_*_V*'
	on btn_FreezeV rightClick do
		unfreeze $'*_UI_*_V*'
	on btn_HideV pressed do
		hide $'*_UI_*_V*'
	on btn_HideV rightClick do
		unhide $'*_UI_*_V*'
	on btn_Clear pressed do
	(
		Bn_Chl[index] = #()
		lbx_rigList.items = #()
	)
	on btn_del pressed do
	(
		if lbx_rigList.selection > 0 do deleteitem Bn_Chl[index] lbx_rigList.selection
		lbx_rigList.items = for c in Bn_Chl[index] collect c[1]
	)
)
createdialog UICreator

--end
--提交时:附带绑定的演示视频,说明文档

--测试限制为100的物体,在不同单位下是否有影响

--coordsys parent 