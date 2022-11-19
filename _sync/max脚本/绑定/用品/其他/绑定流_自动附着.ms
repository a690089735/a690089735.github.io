--需求:自动附着约束到最近面
try(DestroyDialog AutoAttach)catch()

rollout AutoAttach "AutoAttach" width:128 height:168
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
	pickbutton btn_pick "拾取物体" pos:[8,8] width:112 height:32 message:"请选择一个物体" filter:mesh_filt autoDisplay:true
	button btn_execute "附着选中物体" pos:[8,128] width:112 height:32 toolTip:"如果未能正确计算,请将模型重置变换."
	checkbox chk1 "创建连接层级" pos:[8,56] width:104 height:16 checked:true
	spinner spn1 "A:" pos:[8,80] width:50 height:16 range:[-5,5,0.5]
	spinner spn2 "B:" pos:[70,80] width:50 height:16 range:[-5,5,0]
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
		local Dis
		for o in selection as array do
		(
			local so = o
			if chk1.checked do 
			(
				bb = nodeGetBoundingBox so so.transform
				bb = bb[2]-bb[1]
				size = ((bb[1]+bb[2]+bb[3])/3)
				o = point name:(so.name+"_AtP") transform:so.transform centermarker:on axistripod:off cross:off Box:off size:size wirecolor:green
			)
			opos = o.center
			dis = for i = 1 to PosSet.count collect distance opos posSet[i]--距离集合
			index = findItem dis (amin dis)--获得最近的面序号
			--绑定物体--
			o.pos.controller = position_list () 
			ctrl  = o.pos.controller[2].controller = Attachment ()
			o.parent = ctrl.node = btn_pick.object
			key1 = AttachCtrl.addNewKey ctrl  0f
			key1.face = (index - 1)
			key1.coord = [spn1.value,spn2.value]
			o.pos.controller.setActive 2
			if chk1.checked do (so.parent = o;setFreezeTransform #(so))
		)
	)
)
CreateDialog AutoAttach
