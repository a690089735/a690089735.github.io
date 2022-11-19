--需求:自动附着约束到最近面
try(DestroyDialog replaceAttach)catch()

rollout replaceAttach "替换附着" width:128 height:168
(
	local posSet = #()
	
	fn  setFreezeTransform objs = 
	(
		for obj in objs do 
		(
			obj.pos.controller = bezier_position ()
			obj.pos.controller = position_list ()
			obj.pos.controller.Available.controller =  Position_XYZ ()
			obj.pos.controller.Active = 2
			obj.rotation.controller = Euler_XYZ ()
			obj.rotation.controller = rotation_list ()
			obj.rotation.controller.Available.controller = Euler_XYZ ()
			obj.rotation.controller.Active = 2
		)
	)
	
	fn mesh_filt obj = superclassof obj == GeometryClass
	pickbutton btn_pick "拾取新附着物体" pos:[8,64] width:112 height:32 message:"请选择一个物体" filter:mesh_filt autoDisplay:true
	button btn_execute "附着选中物体" pos:[8,128] width:112 height:32 toolTip:"如果未能正确计算,请将模型重置变换."
	checkbox chk1 "清除父级" pos:[8,104] width:104 height:16 checked:false enabled:false
	button btn_select "按物体选中附着点" pos:[8,8] width:112 height:32
	
	on btn_pick picked obj do
	(
		vposList = for i = 1 to obj.mesh.numverts collect (getVert obj.mesh i)*obj.objecttransform --获取所有顶点坐标
		posSet  = for i = 1 to obj.mesh.numFaces collect 
		(
			vID =getFace obj.mesh i--获取顶点位置列表(按顶点序号排序)
			(vposList[vID[1]]+vposList[vID[2]]+vposList[vID[3]])/3
		)
	)
	on btn_execute pressed do
	with undo on
	(
		max create mode
		local Dis
		sel = selection as array
		--读取子物体--断开连接
		children = for o in sel collect if o.children.count > 0 then cdn = for c in o.children collect (c.parent = undefined;c) else #()
		n = 0
		for o in sel do
		( 
			n+=1
			o.pos.controller = position_XYZ () 
			if children[n][1] != undefined do o.transform = children[n][1].transform --重对齐位置
			opos = o.center
			dis = for i = 1 to PosSet.count collect distance opos posSet[i]--距离集合
			index = findItem dis (amin dis)--获得最近的面序号
			--绑定物体--
			o.pos.controller = position_list () 
			ctrl  = o.pos.controller[2].controller = Attachment ()
			o.parent = ctrl.node = btn_pick.object
			key1 = AttachCtrl.addNewKey ctrl  0f
			key1.face = (index - 1)
			key1.coord = [0.5,0]
			o.pos.controller.setActive 2
		)
		--连接父子
		for i = 1 to sel.count do ( for o in children[i] do o.parent = sel[i];setFreezeTransform children[i])
		
	)
	on btn_select pressed do
	(
		s = selection[1]
		AtPs = for o in objects where (try(o.pos.controller[2].controller.node == s)catch(false)) collect o
		select AtPs
	)
)
CreateDialog replaceAttach

--end
