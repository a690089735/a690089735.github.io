try(destroydialog PartHiderRollout)catch()

rollout PartHiderRollout "设置部分隐藏工具" width:168 height:304
(
	local
		FaceList = #(),AttachNodes = #(),CheckButtonProp = #(),
		sel = 0,preViewRollout,
		Script = ""
	
	button btn1 "新建集合" pos:[8,8] width:64 height:24 toolTip:"要先选中Mesh物体,然后选中面."
	button btn2 "附加物体" pos:[80,8] width:56 height:24 toolTip:"为集合添加与面一同隐藏的物体,比如与面相关的控制器."
	
	button btn3 "删除" pos:[136,8] width:32 height:24
	button btn4 "上移" pos:[136,40] width:32 height:24
	button btn5 "下移" pos:[136,72] width:32 height:24
	
	listbox lbx1 "" pos:[8,32] width:128 height:10

	checkbutton ckb1 "预览" pos:[136,144] width:32 height:24 toolTip:"预览按钮布局"
	edittext edt1 "按钮名" pos:[8,176] width:152 height:16
	spinner spn1 "宽" pos:[16,200] width:64 height:16 range:[16,200,60] type:#integer scale:1
	spinner spn2 "高" pos:[96,200] width:64 height:16 range:[16,200,20] type:#integer scale:1
	radiobuttons rdo1 "" pos:[16,222] width:159 height:16 labels:#("靠左", "居中", "靠右") default:2 columns:3
	spinner spn3 "" pos:[40,244] width:56 height:16 range:[-100,100,0] type:#integer scale:1
	spinner spn4 "" pos:[104,244] width:56 height:16 range:[-100,100,0] type:#integer scale:1
	label lbl1 "偏移" pos:[8,244] width:24 height:16
	button btn8 "添加所有按钮到修改器" pos:[8,268] width:152 height:24
	
	fn ShowPreView =
	(
		try(destroydialog preViewRollout)catch()
		buttons = "rollout preView \"\" width:162\n(\n"
		for i = 1 to CheckButtonProp.count do
		(
			buttons += 
			"\tbutton ckb"+i as string+" \""+CheckButtonProp[i][1] as string+"\" width:"+CheckButtonProp[i][2] as string+" height:"+CheckButtonProp[i][3] as string+" align:"+#("#Left","#Center","#Right")[CheckButtonProp[i][4]]+" offset:"+CheckButtonProp[i][5] as string+"\n"
		)
		buttons += ")"
		preViewRollout = execute buttons
		pos = GetDialogPos PartHiderRollout
		pos[1] += 168;pos[2] += 30
		createdialog preViewRollout width:162 pos:pos style:#()
	)
	fn setProperties = 
	(
		CheckButtonProp[sel] = #(edt1.text, spn1.value, spn2.value, rdo1.state, [spn3.value, spn4.value])
		if ckb1.checked do ShowPreView()
	)
	fn getProperties = 
	(
		edt1.text = CheckButtonProp[sel][1]
		spn1.value = CheckButtonProp[sel][2]
		spn2.value = CheckButtonProp[sel][3]
		rdo1.state = CheckButtonProp[sel][4]
		spn3.value = CheckButtonProp[sel][5][1]
		spn4.value = CheckButtonProp[sel][5][2]
	)
	
	fn refresh m:0 =
	(
		lbx1.items = for i = 1 to FaceList.count collect
		(
			n = "空"
			if (FaceList[i].numberSet + AttachNodes[i].count) > 0 do n = FaceList[i].numberSet as string + " 个三角面, " + AttachNodes[i].count as string + " 个物体."
			n
		)
		sel = lbx1.selection += m
		getProperties()
	)
	
	fn buildCustomAtt =
	(
		local
			att = "attributes HiderCA\n(\n",
			prt = "\tparameters HiderCA rollout:HiderRL\n(\n\t\tstatetab type:#boolTab tabSizeVariable:true animatable:false invisibleInTV:true\n",
			rll = 	"\trollout HiderRL \"部分隐藏\"\n\t(\n\t\tfn ChangeHide =\n\t\t(\n\t\t\towner = custattributes.getowner this\n\t\t\tnd = (refs.dependentnodes owner)[1]\n\t\t\townerS =exprForMAXObject(owner)\n\t\t\thidefaces = #()\n\t\t\thidenodes = #()\n\t\t\tunhidenodes = #()\n\t\t\tfor i = 1 to HiderRL.controls.count do\n\t\t\tif statetab[i] then\n\t\t\t(\n\t\t\t\thidefaces += execute(ownerS + \".hide\" + i as string)\n\t\t\t\thidenodes += execute(ownerS + \".nodes\" + i as string)\n\t\t\t)else unhidenodes += execute(ownerS + \".nodes\" + i as string)\n\t\t\tmeshop.setHiddenFaces nd.baseobject (hidefaces as bitarray) --没指定的会被显示\n\t\t\tupdate nd\n\t\t\tunhide unhidenodes\n\t\t\thide hidenodes\n\t\t)\n\t\ton HiderRL open do\n\t\t(\n\t\t\ti = 0\n\t\t\tfor c in HiderRL.controls do \n\t\t\t(\n\t\t\t\ti += 1\n\t\t\t\tc.checked = statetab[i]\n\t\t\t)\n\t\t)\n"
		for i = 1 to CheckButtonProp.count do
		(
			istr = i as string
			prt += "\t\thide"+istr+" type:#intTab tabSizeVariable:true animatable:false invisibleInTV:true\n"
			prt += "\t\tnodes"+istr+" type:#nodeTab tabSizeVariable:true animatable:false invisibleInTV:true\n"
			rll += "\t\tcheckbutton ckb"+istr+" \""+CheckButtonProp[i][1] as string+"\" width:"+CheckButtonProp[i][2] as string+" height:"+CheckButtonProp[i][3] as string+" align:"+#("#Left","#Center","#Right")[CheckButtonProp[i][4]]+" offset:"+CheckButtonProp[i][5] as string+"\n"
			rll += "\t\ton ckb"+istr+" changed state do (statetab[finditem HiderRL.controls ckb"+istr+"] = state;ChangeHide())\n"
		)
		prt += "\t)\n"
		rll += "\t)\n"
		
		att += prt
		att += rll
		att += ")"
		
		execute(att)
	)
	fn nodes2handle ary = for i in ary collect i.handle
	fn Baseobject2Mesh obj =
	with redraw off(
		if superclassof obj.baseobject == GeometryClass then
		(
			m = editable_mesh()
			m.baseobject = obj.BASEOBJECT
			bobj = (converttomesh m).baseobject
			delete m
			obj.baseobject = bobj
			gc light:true
			obj
		)
	)
	fn assignCustomAtt att =
	(
		sels = getcurrentselection()
		if sels.count == 1 then
		(			--and classof sels[1].baseobject == Editable_mesh then
			state = getCommandPanelTaskMode()
			setCommandPanelTaskMode mode:#create
		with printAllElements on( --完整输出String
			local
				obj = Baseobject2Mesh sels[1],
				holder = for m in obj.modifiers where classof m == EmptyModifier do exit with m
			if isValidnode obj then
			(
				if classof holder != EmptyModifier do
				(
					holder = EmptyModifier()
					addmodifier obj holder
				)
				clearselection()
				custAttributes.add holder att
				mstr = exprForMAXObject(holder)
				holder.statetab = for i = 1 to CheckButtonProp.count collect
				(
					istr = i as string
					execute(mstr + ".hide" + istr + " = " + (FaceList[i] as array) as string)
					execute(mstr + ".nodes" + istr + " = for i in " + (nodes2handle AttachNodes[i]) as string + " collect maxOps.getNodeByHandle i")
					false
				)
				select obj
			)else messagebox "不支持的物体类型."
			setCommandPanelTaskMode mode:state
		)
		)else messagebox "选择了太多物体."
	)
	
	on PartHiderRollout close do --关闭窗口
		try(destroydialog preViewRollout)catch()
	on PartHiderRollout moved pos do --移动窗口
	(
		pos[1] += 168;pos[2] += 30
		try(SetDialogPos preViewRollout pos)catch()
	)
	on btn2 pressed do --附加节点
	if sel > 0 do(
		AttachNodes[sel] = getcurrentselection()
		refresh()
	)
	on btn2 rightclick do --清除节点
	if sel > 0 do(
		AttachNodes[sel] = #()
		refresh()
	)
	on btn1 pressed do --新建集合
	(
		s = selection[1]
		if classof s.baseobject == Editable_mesh then
		(
			append FaceList (getFaceSelection s.baseobject.mesh)
			append AttachNodes #()
			append CheckButtonProp #("", 60, 20, 2, [0,0])
			refresh()
		)else messagebox "需要 Editable_mesh ."
	)
	on btn3 pressed do --删除集合
	(
		deleteitem FaceList sel
		deleteitem AttachNodes sel
		deleteitem CheckButtonProp sel
		refresh()
	)
	on btn4 pressed do --上移集合
	(
		if sel > 1 do
		(
			insertitem FaceList[sel] FaceList (sel-1)
			deleteitem FaceList (sel+1)
			insertitem AttachNodes[sel] AttachNodes (sel-1)
			deleteitem AttachNodes (sel+1)
			insertitem CheckButtonProp[sel] CheckButtonProp (sel-1)
			deleteitem CheckButtonProp (sel+1)
			refresh m:-1
		)
	)
	on btn5 pressed do --下移集合
	(
		if sel < lbx1.items.count do
		(
			insertitem FaceList[sel] FaceList (sel+2)
			deleteitem FaceList sel
			insertitem AttachNodes[sel] AttachNodes (sel+2)
			deleteitem AttachNodes sel
			insertitem CheckButtonProp[sel] CheckButtonProp (sel+2)
			deleteitem CheckButtonProp sel
			refresh m:1
		)
	)
	on lbx1 selected id do --列表项改变选择
	(
		sel = id
		getProperties()
	)
	on lbx1 doubleClicked sel do --双击列表项
	(
		if keyboard.controlPressed then
		(
			clearselection();select AttachNodes[sel]
		)else
		(
			if selection.count == 1 do
			(
				s = selection[1]
				if classof s.baseobject == Editable_mesh then
				(
					setFaceSelection s.baseobject.mesh FaceList[sel]
					update s
				)else messagebox "需要 Editable_mesh ."
			)
		)
	)
	on ckb1 changed state do --预览按钮
	(
		--width:162
		if state then ShowPreView() else try(destroydialog preViewRollout)catch()
	)
	on edt1 entered text do
		setProperties()
	on spn1 changed val do
		setProperties()
	on spn2 changed val do
		setProperties()
	on rdo1 changed stat do
		setProperties()
	on spn3 changed val do
		setProperties()
	on spn4 changed val do
		setProperties()
	on btn8 pressed do
		assignCustomAtt(buildCustomAtt()) --生成自定义按钮属性添加到空修改器,如果没有空修改器,则新建一个空修改器.
)
createdialog PartHiderRollout
