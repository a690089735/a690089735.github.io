/* 
		获取选择面			隐藏指定面
mesh	getFaceSelection $	meshop.setHiddenFaces $.baseobject (#{}+meshop.getHiddenFaces $.baseobject)
poly	getFaceSelection $	polyop.setHiddenFaces $.baseobject (#{}+polyop.getHiddenFaces $.baseobject)
*/

fn ShowPreView = 
(
	try(destroydialog preViewRollout)catch()
	
	local buttons = "rollout preView \"\" width:162\n(\n"
	for i = 1 to CheckButtonProps.count do
	(
		buttons += 
		"\tbutton ckb"+i as string+" \""+CheckButtonProps[i][1] as string+"\" width:"+CheckButtonProps[i][2] as string+" height:"+CheckButtonProps[i][3] as string+" align:"+#("#Left","#Center","#Right")[CheckButtonProps[i][4]]+" offset:"+CheckButtonProps[i][5] as string+"\n" + "tooltip:\"左键显示,右键隐藏.\""
	)
	buttons += ")"
	preViewRollout = execute buttons
	local pos = GetDialogPos PartHiderRollout
	pos[1] += 176;pos[2] += 31
	createdialog preViewRollout width:162 pos:pos style:#() parent:PartHiderRollout.hwnd
)

fn get_properties =
if sel > 0 do(
	edt_bname.text = CheckButtonProps[sel][1]
	spn_bwidth.value = CheckButtonProps[sel][2]
	spn_bheight.value = CheckButtonProps[sel][3]
	rdo_align.state = CheckButtonProps[sel][4]
	spn_offset_x.value = CheckButtonProps[sel][5][1]
	spn_offset_y.value = CheckButtonProps[sel][5][2]
)
fn set_properties = 
(
	CheckButtonProps[sel] = #(edt_bname.text, spn_bwidth.value, spn_bheight.value, rdo_align.state, [spn_offset_x.value, spn_offset_y.value])
	if ckb_preview.checked do ShowPreView()
)

fn new_col = 
(
	append node_list #()
	append mesh_list #()
	append mesh_types #()
	append face_List #()
	append CheckButtonProps  #("按钮", 60, 24, 2, [0, 0])
	lbx_list.items = lbx_list.items+#("0个物体,0组面.")
	sel = lbx_list.selection = lbx_list.items.count
	get_properties()
	if ckb_preview.checked do ShowPreView()
)
fn up_col =
if sel > 1 do(
	local
	tag = sel - 1,temp
	
	for a in #(node_list,mesh_list,mesh_types,face_List,CheckButtonProps,lbx_list.items) do
	(
		temp = a[tag]
		a[tag] = a[sel]
		a[sel] = temp
	)
	lbx_list.items = lbx_list.items
	sel = lbx_list.selection = tag
	if ckb_preview.checked do ShowPreView()
)
fn down_col =
if sel > 0 and sel < lbx_list.items.count do(
	local
	tag = sel + 1,temp
	
	for a in #(node_list,mesh_list,mesh_types,face_List,CheckButtonProps,lbx_list.items) do
	(
		temp = a[tag]
		a[tag] = a[sel]
		a[sel] = temp
	)
	lbx_list.items = lbx_list.items
	sel = lbx_list.selection = tag
	if ckb_preview.checked do ShowPreView()
)
fn del_col =
if sel > 0 do(
	deleteItem node_list sel
	deleteItem mesh_list sel
	deleteItem mesh_types sel
	deleteItem face_List sel
	deleteItem CheckButtonProps sel
	lbx_list.items = deleteItem lbx_list.items sel
	lbx_list.selection = if sel > lbx_list.items.count then sel-=1 else sel
	if ckb_preview.checked do ShowPreView()
)

fn show_title =
(
	lbx_list.items[sel] = node_list[sel].count as string + "个物体," + mesh_list[sel].count as string + "组面."
	lbx_list.items = lbx_list.items
)
fn add_node =
if sel > 0 do(
	node_list[sel] = makeUniqueArray(node_list[sel] + getCurrentSelection())
	show_title()
)
fn del_node =
if sel > 0 do(
	for n in getCurrentSelection() where (i = findItem node_list[sel] n) > 0 do deleteItem node_list[sel] i
	show_title()
)
fn add_face = 
if sel > 0 do(
	for i in getCurrentSelection() where (t = classof i.baseobject;if t == Editable_mesh or t == Editable_Poly then true else (messageBox ("物体 "+i.name as string+" 必须是Editable_mesh(可编辑网格)或者Editable_Poly(可编辑多边形).\t") title:"跳过执行";false)) do
	(
		--如果已经有了,则相加,没有则添加
		local flist = if t == Editable_mesh then getFaceSelection i.baseobject.mesh else polyop.getFaceSelection i.baseobject
		if (id = findItem mesh_list[sel] i) > 0 then
		(
			face_List[sel][id] += flist
		)else
		(
			append mesh_list[sel] i
			append mesh_types[sel] t
			append face_List[sel] flist
		)
	)
	show_title()
)
fn del_face = 
if sel > 0 do(
	for i in getCurrentSelection() where (t = classof i.baseobject;if t == Editable_mesh or t == Editable_Poly then true else (messageBox ("物体 "+i.name as string+" 必须是Editable_mesh(可编辑网格)或者Editable_Poly(可编辑多边形).\t") title:"跳过执行";false)) do
	(
		--不存在跳过,存在则相减,相减至空则清除
		local flist = if t == Editable_mesh then getFaceSelection i.baseobject.mesh else polyop.getFaceSelection i.baseobject
		if (id = findItem mesh_list[sel] i) > 0 do
		(
			face_List[sel][id] -= flist
			if face_List[sel][id].isEmpty do
			(
				deleteItem mesh_list[sel] id
				deleteItem mesh_types[sel] id
				deleteItem face_List[sel] id
			)
		)
	)
	show_title()
)

fn buildCustomAttToDummy =
(
	local
		part1 = "attributes HiderCA
(
	parameters HiderCA rollout:HiderRL
	(",
		part2 = "\n	)
	rollout HiderRL \"切换部分显示\"
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
					)else messageBox (\"物体 \"+mesh_list[i].name as string+\" 的基本类型(\"+type as string+\"),与记录的类型(\"+mesh_types[i] as string+\")不一致.\\t\") title:\"跳过执行\"
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
					)else messageBox (\"物体 \"+mesh_list[i].name as string+\" 的基本类型(\"+type as string+\"),与记录的类型(\"+mesh_types[i] as string+\")不一致.\\t\") title:\"跳过执行\"
				)
			)
		)",
		part3 = "\n	)
)",
	fill1 = "",
	fill2 = ""
	for i = 1 to CheckButtonProps.count do
	(
		local istr = i as string
		fill1 += 
		"\n\t\tnode_list_"+istr+" type:#nodeTab tabsize:0 tabSizeVariable:true animatable:false invisibleInTV:true" +\
		"\n\t\tmesh_list_"+istr+" type:#nodeTab tabsize:0 tabSizeVariable:true animatable:false invisibleInTV:true" +\
		"\n\t\tmesh_types_"+istr+" type:#string tabsize:0 tabSizeVariable:true animatable:false invisibleInTV:true" +\
		"\n\t\tface_List_"+istr+" type:#string tabsize:0 tabSizeVariable:true animatable:false invisibleInTV:true"
		fill2 += 
		"\n\t\tbutton 'btn_"+istr+"' \""+CheckButtonProps[i][1] as string+"\" width:"+CheckButtonProps[i][2] as string+" height:"+CheckButtonProps[i][3] as string+" Align:"+#("#Left","#Center","#Right")[CheckButtonProps[i][4]]+" offset:"+CheckButtonProps[i][5] as string+" tooltip:\"左键显示,右键隐藏.\"" +\
		"\n\t\ton btn_"+istr+" pressed do HidePart #(node_list_"+istr+",mesh_list_"+istr+",mesh_types_"+istr+",face_List_"+istr+") true" +\
		"\n\t\ton btn_"+istr+" rightclick do HidePart #(node_list_"+istr+",mesh_list_"+istr+",mesh_types_"+istr+",face_List_"+istr+") false"
	)
	
-- 	print(part1+fill1+part2+fill2+part3)
	local att = execute (part1+fill1+part2+fill2+part3),d = dummy isSelected:on
	global __modf = EmptyModifier()
	custAttributes.add __modf att baseobject:false
	
	for i = 1 to CheckButtonProps.count do
	(
		local istr = i as string
		execute ("__modf.node_list_"+istr+" = PartHiderRollout.node_list["+istr+"]")
		execute ("__modf.mesh_list_"+istr+" = PartHiderRollout.mesh_list["+istr+"]")
		execute ("__modf.mesh_types_"+istr+" = with printAllElements on PartHiderRollout.mesh_types["+istr+"] as string")
		execute ("__modf.face_List_"+istr+" = with printAllElements on PartHiderRollout.face_list["+istr+"] as string")
	)
	
	addModifier d __modf
	__modf = undefined
)