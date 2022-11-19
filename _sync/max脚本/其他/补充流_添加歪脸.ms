
--选择变形器的模型

fn Create_UI prename= --创建歪脸UI
(
	local R_Color = Green --Slider颜色
	local S_Color = Yellow --Button颜色
	local V_Color = blue--progress颜色 
	local mdf = Extrude amount:0 segs:1 capStart:off capType:0 output:1 smooth:off
	local maxwidth = 20
	local index
	
	fn setLink verList ctrlList =(
		for i = 1 to verList.count do paramWire.connect verList[i] ctrlList[i] "Length*50"
	)
	fn offGray objs = 
	(
		for o in objs do 
			o.showFrozenInGray = o.renderable = o.castShadows = o.receiveshadows = o.ApplyAtmospherics = o.inheritVisibility = o.primaryVisibility = o.secondaryVisibility = off
	)
	fn setPropertie objs = 
	(
		freeze objs
		for o in objs do setTransformLockFlags o #{1..9}
	)
	fn setFreezeTransform objs = 
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
	
	obj = selection[1]
	modf = for m in obj.modifiers do if (classof m == Morpher) do exit with m
	cl = for i = 1 to 100 where ((WM3_MC_GetName modf i) == "左歪脸(画右)" or (WM3_MC_GetName modf i) == "右歪脸(画左)") collect modf[i]

	fname = prename + "_歪脸" --名称
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
	setPropertie #(V1,V2,R)
	offGray #(V1,V2,S,R)
	
	prt = $'*_UI_Prt'[1]
	R.pos = ([-2.39944,-0.00048995,-0.801691] + prt.pos)
	r.scale = [0.04,0.04,0.04]
	r.parent = prt
		
	vl = #(V1.baseobject[#Length],V2.baseobject[#Length])
	setLink vl cl
	
)
	
Create_UI "adou"
	
	
	