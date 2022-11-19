try(destroydialog nodes2morpherRollout)catch()

--根据模型的变换,逐帧生成对应的面模型,用于附着

--记录所有选中物体

--到时间范围最前帧

--逐物体记录点面信息,创建网格,并绑定原物体

rollout nodes2morpherRollout "n2mTool" width:160 height:272
(

	
	button btn_get "\x21bb" pos:[136,6] width:16 height:16 toolTip:"重新读取时间列表"
	edittext edt_nam "名称" pos:[32,6] width:104 height:16
	
	listbox lbx "" pos:[8,26] width:144 height:16
	
	edittext edt_pre "前缀" pos:[8,248] width:88 height:16
	button btn_create "创建绑定" pos:[96,244] width:56 height:24
	
	
	local times=#(),names=#()
	
	fn reList = --按数据刷新列表
	(
		times = for i = animationrange.start to animationrange.end collect i as string
		names = join #() times
		names[1] = "base"
		lbx.items = for i = 1 to times.count collect (times[i]+"\t:\t"+names[i])
		edt_nam.text = names[lbx.selection]
	)

	on nodes2morpherRollout open do reList()
	on btn_get pressed do reList()
	on edt_nam entered t do
	(
		sel = lbx.selection
		names[sel] = t
		lbx.items[sel] = (times[sel]+"\t:\t"+names[sel])
		
		lbx.items = lbx.items as array
	)
	on lbx selected sel do
	(
		edt_nam.text = names[sel]
	)
	on btn_create pressed do
	(
		undo "Create Rig" on(CreateNodesMorpher nodes:(selection as array) o:animationrange.start e:animationrange.end title:edt1.text names:names)
	)
)
createdialog nodes2morpherRollout