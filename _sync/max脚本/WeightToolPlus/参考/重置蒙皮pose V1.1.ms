try (destroydialog Reset_tpose) catch()
rollout Reset_tpose "重置蒙皮pose V1.1" width:200
(	
	
	button but "一键重置" width:100 height:32  align:#center offset:[0,8]
	hyperLink lianjie "作者:子墨" address:"" color:(color 7 254 254) hoverColor:(color 0 255 255) visitedColor:(color 7 254 254) width:110 height:16 align:#center offset:[27,5]
	hyperLink lianjie2 "QQ交流群:330875128" address:"https://jq.qq.com/?_wv=1027&k=0yXAQJqA" color:(color 7 254 254) hoverColor:(color 0 255 255) visitedColor:(color 7 254 254)  width:110 height:16 align:#center offset:[2,0]
	
	fn Getpatent nodes =
	(
	local _parent=nodes
	local _parentf=nodes
	while true do (
		_parent=_parent.parent
		if _parent!=undefined do(
			_parentf=_parent
			)
		if _parent ==undefined  do(
			exit 
			)
		)
		_parentf
	)
	
	fn GetallChildren nodes =
    (
    	local nodeArray = #()
    	for i in nodes do append nodeArray i
		nodeArray
    )
	fn Re_Tpose _Model _node=
	(
		max modify mode
		local tpose_name=#()
		local tpose_pose=#()
		local root_pose=#()
		local root_node=#()
		local allChildren=#()
		local bip_bool=false
		local complete_pose=#()
		unfreeze objects
		for i=1 to _Model.count do(
			_skin=_Model[i].modifiers[#Skin]
			modPanel.setCurrentObject _skin
			skinbone_count=skinops.getnumberbones _skin
			for ii=1 to skinbone_count do(
				a=skinOps.GetBoneName  _skin ii 0
				index=finditem tpose_name a
				if index==0 do(
					append tpose_name a
					append tpose_pose (skinUtils.GetBoneBindTM _Model[i] (getNodeByName a))
					if (matchpattern a pattern:"*Bip*Pelvis*") do (
						bip_bool=true
						append root_pose (skinUtils.GetBoneBindTM _Model[i] (getNodeByName a))
						try (
							append root_node (getNodeByName a).parent
							)catch (
							messagebox "bip骨架缺少根骨骼"
							)
						)
				)
			)
		)
		if bip_bool then(
			if root_node.count!=0 do(
				animate on
				at time 0(
					for i=1 to root_node.count do(
						root_node[i].transform=root_pose[i]
						in coordsys local rotate root_node[i] (eulerangles 0 0 90)
						in coordsys local	rotate root_node[i] (eulerangles 90 0 0)
						allChildren= GetallChildren root_node[i] 
						for ii=1 to allChildren.count do (
							index=finditem tpose_name allChildren[ii].name
							if index!=0 do(
								allChildren[ii].transform=tpose_pose[index]
								append complete_pose allChildren[ii].name
							)
						)
					)
				)
			)
			for i=1 to tpose_name.count do (
					index=finditem complete_pose tpose_name[i]
					if index==0 do( 
						re_parent=Getpatent (getNodeByName(tpose_name[i]))
						re_all= GetallChildren re_parent
						for ii=1 to re_all.count do(
							index2= finditem tpose_name  re_all[ii].name
							if index2 !=0 do(
								animate on
								at time 0(
								re_all[ii].transform=tpose_pose[index2]
								)
							)
						)
						exit
					)
				)
		)else(
			for i=1 to _node.count do (
				index=finditem tpose_name _node[i].name
				if index!=0 do(
					animate on
					at time 0(
					_node[i].transform=tpose_pose[index]
					)
				)
			)
		)
	)
	on lianjie2 rightClick do(
	setClipBoardText "330875128"
	)
	on but pressed do(
	_model=#()
	_node=#()
	for i in objects where (classof i==Editable_mesh or classof i==PolyMeshObject or classof i==Editable_Poly) and (i.modifiers[#Skin]!=undefined) do append  _model i
	for i in objects where (classof i==Dummy or classof i==BoneGeometry) do append  _node i

	try (
		Re_Tpose _model _node
		sliderTime = 0f
		)catch( messagebox "重置失败")
	)
)
createDialog Reset_tpose