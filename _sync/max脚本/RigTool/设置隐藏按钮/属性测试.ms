att = attributes HiderCA
(
	parameters HiderCA rollout:HiderRL
	(
		node_list_1 type:#nodeTab tabsize:0 tabSizeVariable:true animatable:false invisibleInTV:true 
		mesh_list_1 type:#nodeTab tabsize:0 tabSizeVariable:true animatable:false invisibleInTV:true
		mesh_types_1 type:#string tabsize:0 tabSizeVariable:true animatable:false invisibleInTV:true
		face_List_1 type:#string tabsize:0 tabSizeVariable:true animatable:false invisibleInTV:true
	)
	rollout HiderRL "部分隐藏"
	(
		fn HidePart all_list bool =
		(
			local
				node_list = all_list[1],
				mesh_list = all_list[2],
				mesh_types = execute all_list[3],
				face_List = execute all_list[4],
				count = mesh_list.count
			
			if bool then 
			(
				for n in node_list where isValidNode n do unhide n
				for i = 1 to count where isValidNode(msh = mesh_list[i]) do
				(
					if (type = classOf msh.baseobject) == mesh_types[i] then
					(
						if type == Editable_mesh then meshop.setHiddenFaces msh.baseobject (meshop.getHiddenFaces msh.baseobject - face_List[i])
						else 
						(
							local flist = polyop.getHiddenFaces msh.baseobject - face_List[i];polyop.unHideAllFaces msh.baseobject;polyop.setHiddenFaces msh.baseobject flist
						)
						update msh
					)else messageBox ("物体 "+mesh_list[i].name as string+" 的基本类型("+type as string+"),与记录的类型("+mesh_types[i] as string+")不一致.\t") title:"跳过执行"
				)
			)else
			(
				for n in node_list where isValidNode n do hide n
				for i = 1 to count where isValidNode(msh = mesh_list[i]) do
				(
					if (type = classOf msh.baseobject) == mesh_types[i] then
					(
						if type == Editable_mesh then meshop.setHiddenFaces msh.baseobject (meshop.getHiddenFaces msh.baseobject + face_List[i])
						else polyop.setHiddenFaces msh.baseobject (polyop.getHiddenFaces msh.baseobject + face_List[i])
						update msh
					)else messageBox ("物体 "+mesh_list[i].name as string+" 的基本类型("+type as string+"),与记录的类型("+mesh_types[i] as string+")不一致.\t") title:"跳过执行"
				)
			)
		)
		button 'btn_1' "按钮" width:60 height:20 Align:#Center offset:[0,0] tooltip:"左键显示,右键隐藏."
		on btn_1 pressed do HidePart #(node_list_1,mesh_list_1,mesh_types_1,face_List_1) true
		on btn_1 rightclick do HidePart #(node_list_1,mesh_list_1,mesh_types_1,face_List_1) false
	)
)
obj = Dummy isSelected:on
::_holder = EmptyModifier()
addModifier obj _holder
custAttributes.add _holder att baseobject:false
-- execute "_holder.node_list_1 = #($Sphere001,$Sphere002)"
execute "_holder.mesh_list_1 = #($Sphere001,$Sphere002)"
execute "_holder.mesh_types_1 = with printAllElements on #(Editable_Poly,Editable_mesh) as string"
execute "_holder.face_List_1 = with printAllElements on #(#{101..102, 165..166},#{66, 98}) as string"