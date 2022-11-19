try(destroydialog nodes2morpherRollout)catch()

--根据模型的变换,逐帧生成对应的面模型,用于附着

--记录所有选中物体

--到时间范围最前帧

--逐物体记录点面信息,创建网格,并绑定原物体

-- 0.四舍五入,为了加快效率,取用了近似值,不需要四舍五入了.
-- fn round val n = if n >= 0 do return (val * (10^n) + 0.5) as integer / ((if n == 0 then 10 else 10.0)^n)
-- 1.通过范围,获取尺寸
fn GetSize size:(selection.max-selection.min) = return (size[1]+size[2]+size[3])*0.02
-- 2.计算某变换的附着面,输出面上的点的位置,某变换必须是Z轴朝前,即法线方向.(其实也没事....只是生成的模型看起来比较乱)
fn Trans2Face trans size =
(
	tri = #([-0.866025,-0.5,0],[0.866025,-0.5,0],[0,1,0]) --先构建一个单位为1的等边三角形
	return for p in tri collect (p*size)*trans --算出三角面坐标
)	
-- 3. 从物体列表生成网格
fn Nodes2Mesh nodes:(selection as array) name:(currenttime as string) vList:#() size:(GetSize()) =
(
	for n in nodes do join vList (Trans2Face n.transform size)  --填充顶点列表
	fList = for i = 1 to nodes.count collect (v=3*i;[v-2,v-1,v]) --填充面列表

	mesh vertices:vList faces:fList name:name --创建网格
)
-- 4. 主函数,根据选中的物体和时间范围来生成变形模型,每一帧可以设置一个名字
fn CreateNodesMorpher nodes:(selection as array) o:animationrange.start e:animationrange.end title:"" names:(for i = o to e collect i as string) = --请设置好时间范围,时间范围里应该是逐帧的动画,第一帧应该是初始pose
(
	if title == "" then title = "test"
	size = getsize()
	local prt,base
	at time o (prt = point size:size pos:selection.center name:(title+"_Prt");base = Nodes2Mesh name:names[1])
	
	i = 1
	tgts = for f = (o+1) to e collect at time f (i+=1;Nodes2Mesh name:names[i])
	
	mdf = Morpher()
	addmodifier base mdf
	select base;for i = 1 to tgts.count do WM3_MC_BuildFromNode mdf i tgts[i]
	
	at time o (
		slidertime = o
		deleteKeys nodes #allKeys
		for i in 1 to nodes.count do
		(
			n = nodes[i]
			d = dummy boxsize:[size,size,size] parent:prt name:(n.name+"_Atp")
			ctrl = d.pos.controller = Attachment()
			ctrl.node = base
			key1 = AttachCtrl.addNewKey ctrl o
			key1.face = i-1 --必须减1
			key1.coord = [0.3333,0.3333]
			n.parent = d
		)
	)
	delete tgts
)
-- CreateNodesMorpher()


rollout nodes2morpherRollout "n2mTool" width:152 height:280
(
	button btn_get "??刷新时间列表" pos:[8,6] width:136 height:24
	listbox lbx "" pos:[8,34] width:136 height:14 items:#()
	edittext edt1 "前缀名" pos:[8,230] width:136 height:16
	button btn_create "选中物体创建绑定" pos:[8,250] width:136 height:24
	
	local times=#(),names=#()
	
	fn reList =
	(
		lbx.items = for i = 1 to times.count collect (times[i]+":"+names[i])
	)
	
	on btn_get pressed  do
	(
		times = for i = animationrange.start to animationrange.end collect i as string
		names = join #() times
		names[1] = "base"
		reList()
	)
	on lbx doubleClicked sel do
	(
		try(destroydialog renameWindow)catch()
		rollout renameWindow "新名称" width:136 height:48
		(
			edittext edt_name "命名" pos:[6,6] width:120 height:16
			button btn_ok "确认" pos:[24,28] width:32 height:16
			button btn_no "取消" pos:[88,28] width:32 height:16
			
			local parent = nodes2morpherRollout
			
			on renameWindow open  do
			(
				edt_name.text = parent.names[parent.lbx.selection]
			)
			on btn_ok pressed do
			(
				parent.names[parent.lbx.selection] = edt_name.text
				parent.reList()
				destroydialog renameWindow
			)
			on btn_no pressed do
			(
				destroydialog renameWindow
			)
		)
		createdialog renameWindow parent:nodes2morpherRollout.hwnd style:#(#style_border) modal:false pos:(GetDialogPos nodes2morpherRollout + [8,131])
	)
	on btn_create pressed  do
	(
		undo "Create Rig" on(CreateNodesMorpher nodes:(selection as array) o:animationrange.start e:animationrange.end title:edt1.text names:names)
	)
)
createdialog nodes2morpherRollout