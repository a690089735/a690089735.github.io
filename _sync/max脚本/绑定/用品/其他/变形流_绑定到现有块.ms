try(destroydialog rig2epart)catch()

rollout rig2epart "rig2epart" width:104 height:88
(
	label lbl1 "选中变形器模型\n然后选中控制圆" pos:[8,8] width:88 height:32
	button btn_rig "绑定" pos:[8,46] width:88 height:32 toolTip:"绑定变形到现有块"
	
	fn setLink verList chList =(
		count = if chList.count < verList.count then chList.count else verList.count
		for i = 1 to count do paramWire.connect verList[i] chList[i] "Length*50"
	)
	fn returnV S =
	(
		Fname = S.name
		Fname[Fname.count] = "";Fname[Fname.count] = ""
		return (for i = 1 to 8 where (temp = execute ("$'" + Fname + "_V00" + i as string + "'")) != undefined collect temp.baseobject[#Length])
		
	)

	on btn_rig pressed do
	(
		
		modf = undefined
		for m in selection[1].modifiers do if (classof m == Morpher) do (modf = m;exit)
		chList = for i = 1 to 100 where WM3_MC_HasData modf i collect modf[i]
		Vlist = #()
		for i = 2 to selection.count do Vlist += (returnV selection[i])
		setLink Vlist chList
	)
)
createdialog rig2epart
--