try(destroydialog RORollout)catch()
rollout RORollout "创建眼球绑定" width:96 height:88
(
	button btn_cc "创建IK" pos:[8,56] width:80 height:24 toolTip:"选中一把父骨骼,然后点创建,选择的第一个骨骼是眼睛骨骼"
	
	local obj 
	
	checkbox chk1 "创建总父级" pos:[8,8] width:80 height:16
	

	on btn_cc pressed do
	(
		BoneList = selection as array
		local p
		for B in BoneList.count do 
		(	
			if chk1.checked do 
			(
				p = point name:(b.name+"_p") centermarker:off axistripod:on cross:off Box:on
				p.parent = b.parent
				p.transform = b.transform
				b.parent = p
			)
			iik =IKSys.ikChain B B.children[1] "IKHISolver"
			iik.name = (b.name+"_IK")
			if chk1.checked do iik.parent = p
		)
		
	)
)

createdialog RORollout