--隐藏功能,调试用,生成选中模型的序号:
-- fn createIndex size:2 offset:[0,0,0] =
-- (
-- 	undo on(
-- 		a = selection as array
-- 		textList = for i = 1 to a.count collect
-- 			(
-- 				trans = (matrix3 [1,0,0] [0,0,1] [0,-1,0] (a[i].pos+offset))
-- 				text size:size kerning:0 leading:0 transform:trans text:(i as string)
-- 			)
-- 		select textList
-- 	)
-- )

-- 按顺序选择模型,即可自动添加变形,自动绑定,自动布局.(事先命好名字哦,其实可以自动命名,)
--当前只有批量加变形的功能

try(destroydialog dedicatedMorpherRig)catch()

rollout dedicatedMorpherRig "专用变形绑定" width:144 height:408
(
	local R_Color = Green --Slider颜色
	local S_Color = Yellow --Button颜色
	local V_Color = blue--progress颜色 
	local mdf = Extrude amount:0 segs:1 capStart:off capType:0 output:1 smooth:off
	local maxwidth = 20
	local freezebool = True
	local fname = ""
	
	local MorpherPos = #( --预构位置
		[20.2214,-5.89388e-007,13.4836],
		[30.9769,-1.95268e-006,44.672],
		[42.1885,-2.1085e-006,48.2369],[40.593,-2.69796e-006,44.7008],[43.9542,-2.70306e-006,44.8176],[42.1065,-2.53621e-006,41.0004],
		[76.9624,-2.1085e-006,48.2369],[75.3566,-1.95268e-006,44.672],[78.7804,-1.95654e-006,44.7603],[76.9191,-1.78847e-006,40.9154],
		[32.0705,-1.42239e-006,32.5404],[33.8885,-1.27042e-006,29.0639],[32.0271,-1.10236e-006,25.219],
		[59.4857,0,33.5877],[58.2918,-1.26656e-006,28.9755],[61.228,-2.72763e-007,28.9512],[59.9029,1.86811e-007,25.0351],
		[90.7088,-1.42239e-006,32.5404],[89.103,-1.26656e-006,28.9755],[90.6654,-1.10236e-006,25.219],
		[44.0975,-5.83002e-007,13.3375],[42.4916,-4.27176e-007,9.77266],[44.0541,-2.62972e-007,6.0161],
		[77.0272,-6.05824e-007,13.8596],[78.8897,-4.49613e-007,10.2859],[76.8752,-2.68134e-007,6.13419],
		[30.7338,2.69393e-007,-6.163],[34.1041,2.69393e-007,-6.163],[59.8542,0,-2.06599],[58.2918,2.62939e-007,-6.01534],[61.7156,2.59078e-007,-5.927],[59.8976,4.21196e-007,-9.63584],[32.5884,9.65474e-007,-22.0875],
		[32.545,1.19055e-006,-27.2366],[43.4758,9.17926e-007,-20.9997],
		[41.87,1.07375e-006,-24.5646],[45.2938,1.06989e-006,-24.4762],[43.4324,1.23796e-006,-28.3211],[58.2918,1.03153e-006,-23.5986],
		[61.7156,1.02766e-006,-23.5102],[59.8713,0,-27.1905],[77.1669,-1.3513e-007,-20.7256],
		[75.4606,1.07375e-006,-24.5646],[78.8844,1.06989e-006,-24.4762],[77.0201,1.24029e-006,-28.3745],
		[89.9336,1.07375e-006,-24.5646],[93.3574,1.06989e-006,-24.4762]
		)

	local MorpherNames = #( --每块选择 左右上下的顺序 共45个,包括一个占位的"基础"
		"基础",
		"褶皱",
		"右眉抬(画左)","右眉外(画左)","右眉内(画左)","右眉降(画左)",
		"左眉抬(画右)","左眉内(画右)","左眉外(画右)","左眉降(画右)",
		"右上眼睑闭(画左)","右眼闭(画左)","右下眼睑闭(画左)",
		"鼻子上","鼻子右(画左)","鼻子左(画右)","鼻子下",
		"左上眼睑闭(画右)","左眼闭(画右)","左下眼睑闭(画右)",
		"右脸颊鼓(画左)","右脸颊抬(画左)","右脸颊缩(画左)",
		"左脸颊鼓(画右)","左脸颊抬(画右)","左脸颊缩(画右)",
		"右歪脸(画左)","左歪脸(画右)","嘴上","嘴右(画左)","嘴左(画右)","嘴下",
		"嘴型M","嘴型U",
		"右嘴角抬(画左)","右嘴角外(画左)","右嘴角内(画左)","右嘴角降(画左)",
		"缩嘴","咧嘴","张嘴",
		"左嘴角抬(画右)","左嘴角内(画右)","左嘴角外(画右)","左嘴角降(画右)",
		"下巴右偏(画左)","下巴左偏(画右)"
		)
		
	fn CreateWrapobj = --创建变形器套路,添加镜像修改器,创建包裹物体
	(
		max modify mode
		local objs = #(copy (getnodebyname "基础") pos:[20.2214,0,0] name:"基础镜像" wirecolor:red)
		local wrapOBJ = copy (getnodebyname "基础") pos:[20.2214,0,0] name:"基础包裹" wirecolor:yellow
		
		for n in MorpherNames do 
		(
			o = getnodebyname n
			if o.wirecolor == (color 0 249 56) or o.wirecolor == (color 15 76 232) do append objs o
		)
		mmdf = morpher()
		addmodifier objs[1] mmdf
		select objs[1]
		for i = 2 to objs.count do WM3_MC_BuildFromNode mmdf (i-1) objs[i]
		addmodifier objs[1] (mirror mirror_axis:0)
		
		wrap = Skin_Wrap distance:0.04 weightAllVerts:on
		addmodifier wrapOBJ (wrap)
		wrap.meshList = #(objs[1])
		select wrapOBJ
	)
	fn CreateMirroMorpher = 
	(
		max create mode --奇迹般地,变形器操作竟然在创建面板有效,这将加快不少的速度.
		
		local morpherOBJ = getnodebyname "基础镜像" 
		local wrapOBJ = getnodebyname "基础包裹"
		local modf = for m in morpherOBJ.modifiers do if (classof m == Morpher) do exit with m
		
		if modf != undefined do
		( 
			--获取有意义的变形序号
			local ChList = for i = 1 to 100 where WM3_MC_HasData modf i collect i
			
			--按序号创建变形集
			local newOBJList = for i in ChList collect
			(
				for j in ChList do (WM3_MC_SetValue modf j 0.0)--全部为零
				wc = (color 0 249 56)
				n = WM3_MC_GetName modf i
				if matchPattern n pattern:"*(画右)" then
					n = substituteString (substituteString n "左" "右") "(画右)" "(画左)"
				else 
					(n = substituteString (substituteString n "右" "左") "(画左)" "(画右)"; wc = (color 15 76 232))
				old = getnodebyname n
				pos = old.pos
				delete old
				WM3_MC_SetValue modf i 100.0 --现行通道100
				newOBJ = snapshot wrapOBJ name:n pos:pos wirecolor:wc--复制实例
				converttopoly newOBJ
				newOBJ
			)
			select newOBJList
		)
		for j in ChList do (WM3_MC_SetValue modf j 0.0)--全部为零
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
	
	fn setLink verList ctrlList =(
		for i = 1 to verList.count do paramWire.connect verList[i] ctrlList[i] "Length*50"
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
	V3 = Rectangle name:Vname length:2 width:10 cornerRadius:0 transform:(matrix3 [0,0,1] [-1,-1.62921e-07,0] [1.62921e-07,-1,0] [0,0,0]) wirecolor:V_Color
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

	button btn_execute "Execute" pos:[16,216] width:112 height:24 toolTip:"什么都不用选,按规则做好模型,上面的框里命名就行(不用加下划线)."
	edittext edt1 "前缀" pos:[16,192] width:112 height:16
	GroupBox grp1 "准备" pos:[8,8] width:128 height:72
	GroupBox grp2 "执行" pos:[8,176] width:128 height:72
	button btn_Create "预构/占位" pos:[16,24] width:112 height:24 toolTip:"选择一个模型,创建出所有预制变形"
	GroupBox grp3 "资源" pos:[8,88] width:128 height:80
	button btn_CreateM "做另一半" pos:[16,136] width:112 height:24 toolTip:"上一步做好,什么也不用选"
	button btn_Prepare "准备做另一半" pos:[16,104] width:112 height:24 toolTip:"配好已做好的左侧,或者右侧的颜色.按颜色识别,什么也不用选"
	GroupBox grp4 "其他" pos:[8,256] width:128 height:144
	button btn5 "绑定旋转到现有块" pos:[16,288] width:112 height:24 toolTip:"主要用于眼球的绑定,先选被控,再选块,垂直和水平是用来填写负号的."
	button btn6 "变形绑定到现有块" pos:[16,368] width:112 height:24 toolTip:"选中变形器模型,再选中块,以数量少的为准,逐个按顺序绑定."
	edittext edt3 "垂直" pos:[16,272] width:56 height:16
	edittext edt4 "水平" pos:[72,272] width:56 height:16
	button btn_rigJaw "绑定下巴到块" pos:[16,336] width:112 height:24 toolTip:"选中下巴旋转点,再选择下巴滑块(Y轴向上的下巴)"
	edittext edt11 "添加前缀" pos:[16,320] width:112 height:16
	button btn8 "画左" pos:[16,56] width:32 height:16
	button btn9 "画中" pos:[56,56] width:32 height:16
	button btn10 "画右" pos:[96,56] width:32 height:16

	on btn_execute pressed do
	(
		undo "ScriptCreateMorpherRIG" on(
			--主模型逐个添加变形
			mFname = fname = edt1.text
			objs = for n in MorpherNames collect (getnodebyname n) --获取命好名了的模型
			max modify mode
			mmdfname = (Fname+"_Morpher")
			mmdf = morpher name:mmdfname
			addmodifier objs[1] mmdf
			select objs[1]
			for i = 2 to objs.count do (WM3_MC_BuildFromNode mmdf (i-1) objs[i]) --创建变形器
			--逐个绑定
			fname = mFname + "_褶皱" --选择皱眉
			vl = Create_UI_A()
			cl = #(mmdf[1])
			setLink vl cl
			$'*_褶皱_UI_A1_R'.pos = [-60,0,40]
			rotate $'*_褶皱_UI_A1_R' (eulerangles 0 -90 0)
			----
			fname = mFname + "_右眉" --选择上,外,内,下
			vl = Create_UI_E()
			cl = #(mmdf[2],mmdf[3],mmdf[4],mmdf[5])
			setLink vl cl
			$'*_右眉_UI_E1_R'.pos = [-30,0,40]
			----
			fname = mFname + "_左眉" --选择上,内,外,下
			vl = Create_UI_E()
			cl = #(mmdf[6],mmdf[7],mmdf[8],mmdf[9])
			setLink vl cl
			$'*_左眉_UI_E1_R'.pos = [30,0,40]
			----
			fname = mFname + "_右眼皮" --选择上,闭,下
			vl = Create_UI_D()
			cl = #(mmdf[10],mmdf[11],mmdf[12])
			setLink vl cl
			$'*_右眼皮_UI_D1_R'.pos = [-60,0,10]
			rotate $'*_右眼皮_UI_D1_R' (eulerangles 0 90 0)
			----
			fname = mFname + "_右眼" --不选
			vl = Create_UI_E()
		-- 		cl = #(mmdf[13],mmdf[14],mmdf[15],mmdf[16])
		-- 		setLink vl cl
			$'*_右眼_UI_E1_R'.pos = [-30,0,10]
			----
			fname = mFname + "_鼻子" --选择上,画左,画右,下
			vl = Create_UI_E()
			cl = #(mmdf[13],mmdf[14],mmdf[15],mmdf[16])
			setLink vl cl
		-- 		$鼻子_UI_E1_R.pos = [0,0,0]
			----
			fname = mFname + "_左眼皮" --选择下,闭,上
			vl = Create_UI_D()
			cl = #(mmdf[19],mmdf[18],mmdf[17])
			setLink vl cl
			$'*_左眼皮_UI_D1_R'.pos = [60,0,10]
			rotate $'*_左眼皮_UI_D1_R' (eulerangles 0 -90 0)
			----
			fname = mFname + "_左眼" --不选
			vl = Create_UI_E()
		-- 		cl = #(mmdf[13],mmdf[14],mmdf[15],mmdf[16])
		-- 		setLink vl cl
			$'*_左眼_UI_E1_R'.pos = [30,0,10]
			----
			fname = mFname + "_右脸颊" --选择鼓,缩,抬
			vl = Create_UI_C()
			cl = #(mmdf[20],mmdf[22],mmdf[21])
			setLink vl cl
			$'*_右脸颊_UI_C1_R'.pos = [-30,0,-20]
			----
			fname = mFname + "_左脸颊" --选择缩,鼓,抬
			vl = Create_UI_C()
			cl = #(mmdf[25],mmdf[23],mmdf[24])
			setLink vl cl
			$'*_左脸颊_UI_C1_R'.pos = [30,0,-20]
			rotate $'*_左脸颊_UI_C1_R' (eulerangles 0 -90 0)
			rotate $'*_右脸颊_UI_C1_R' (eulerangles 0 90 0)
			----
			fname = mFname + "_歪脸" --选择画左,画右
			vl = Create_UI_B()
			cl = #(mmdf[26],mmdf[27])
			setLink vl cl
			$'*_歪脸_UI_B1_R'.pos = [-60,0,-20]
			----
			fname = mFname + "_嘴浮动" --选择上,画左,画右,下
			vl = Create_UI_E()
			cl = #(mmdf[28],mmdf[29],mmdf[30],mmdf[31])
			setLink vl cl
			$'*_嘴浮动_UI_E1_R'.pos = [0,0,-30]
			----
			fname = mFname + "_口型1" --选择M,U
			vl = Create_UI_B()
			cl = #(mmdf[33],mmdf[32])
			setLink vl cl
			$'*_口型1_UI_B1_R'.pos = [-60,0,-50]
			rotate $'*_口型1_UI_B1_R' (eulerangles 0 -90 0)
			----
			fname = mFname + "_右嘴角" --选择上,外,内,下
			vl = Create_UI_E()
			cl = #(mmdf[34],mmdf[35],mmdf[36],mmdf[37])
			setLink vl cl
			$'*_右嘴角_UI_E1_R'.pos = [-30,0,-50]
			----
			fname = mFname + "_嘴大动" --选择画左,画右,开
			vl = Create_UI_C()
			cl = #(mmdf[38],mmdf[39],mmdf[40])
			setLink vl cl
			$'*_嘴大动_UI_C1_R'.pos = [0,0,-55]
			----
			fname = mFname + "_左嘴角" --选择上,内,外,下
			vl = Create_UI_E()
			cl = #(mmdf[41],mmdf[42],mmdf[43],mmdf[44])
			setLink vl cl
			$'*_左嘴角_UI_E1_R'.pos = [30,0,-50]
			----
			fname = mFname + "_下巴平移" --选择左,右
			vl = Create_UI_B()
			cl = #(mmdf[45],mmdf[46])
			setLink vl cl
			$'*_下巴平移_UI_B1_R'.pos = [60,0,-60]
			
			--布局UI
			mergeMAXFile @"E:\福州天之谷\UI图形.max"
			
			us = $'_UI_shape'
			up = $'_UI_Prt'
			uc = $'_UI_Camera'
			rl = $'*_UI_*_R'
			
			rl.parent = us.parent = uc.parent = up
			up.scale = [0.04,0.04,0.04]
			up.pos = [7,-1.5,15]
			up.name = mfname + up.name
			us.name = mfname + us.name
			uc.name = mfname + uc.name
			
			freeze rl
			freeze us
			hide uc
		)
	)
	on btn_Create pressed do --创建占位模型
	with redraw off(animate off(undo on(
		at time 0
		if superclassof selection[1] == GeometryClass do
		(
			baseobj = selection[1];converttopoly baseobj;baseobj.pos = MorpherPos[1];baseobj.name = MorpherNames[1];baseobj.mat = undefined;baseobj.wirecolor = gray
			for i = 2 to 47 do n = copy baseobj name:MorpherNames[i] pos:MorpherPos[i] wirecolor:gray
		)
	)))
	on btn_CreateM pressed do
	(
		CreateMirroMorpher()
	)
	on btn_Prepare pressed do
	(
		CreateWrapobj()
	)
	on btn5 pressed do
	(
		--获取内容
		obj1 = selection[2];obj2 = selection[1]
		--绑定
		paramWire.connect obj1.pos.controller[2][2].controller[1] obj2.rotation.controller[2][3] ("Limited_Controller__Bezier_Float/"+edt3.text+"25")
		paramWire.connect obj1.pos.controller[2][1].controller[1] obj2.rotation.controller[2][2] ("Limited_Controller__Bezier_Float/"+edt3.text+"25")
	)
	on btn6 pressed do
		messagebox "功能开发中."
	on btn_rigJaw pressed do
	(
		undo on(
			if selection.count == 2 do(
				p = selection[1]
				s = selection[2]
				mergeMAXFile @"E:\福州天之谷\下巴控制器.max"
				jr = $_Jaw_Root
				jp = $_Jaw_Prt
				jc = $_Jaw_Ctrl
				for n in #(jr,jp,jc) do n.name = edt11.text + n.name
				jr.parent = p.parent.parent
				jr.transform = p.transform
				setFreezeTransform jr
				paramWire.connect s.pos.controller[2][2].controller[1] jp.rotation.controller[2][3] "Limited_Controller__Bezier_Float/25"
				jc.rotation.controller[2].controller = p.rotation.controller[2].controller
			)
		)
	)
	on btn8 pressed  do
		undo on (for o in selection do o.wirecolor = (color 0 249 56))
	on btn9 pressed  do
		undo on (for o in selection do o.wirecolor = (color 228 214 153))
	on btn10 pressed  do
		undo on (for o in selection do o.wirecolor = (color 15 76 232))
)

createdialog dedicatedMorpherRig

--