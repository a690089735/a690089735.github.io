/* 2019年3月6日09点53分,添加了骨骼Z轴矢量. */
/* 2020年4月23日10点00分,添加了定点减半. */
/* 2020年9月12日09点30分,添加按顶点输出比例的功能,为后续的样条线绑定做准备 */

try (destroydialog ToolF)catch()

sels = #()

fn creatBoneBySpline bonenum boneSize = ( -- side sideSize front frontSize back backSize = (
	spl = selection[1]
	if superclassof spl == shape do
	with animate off(
		
		--获得位置--
		DList = for val = 0 to 100 by (100.0/(bonenum+1)) collect
		(
			tempD = Dummy boxsize:[0,0,0]
			tempCtrl = tempD.pos.controller = Path_Constraint()
			tempCtrl.path = spl
			deleteKeys tempCtrl
			tempCtrl.percent = val
			tempD
		)
		(
			offset = DList[DList.count].pos - DList[DList.count-1].pos
			offset *= (bonesize /(length offset))
			append DList (Dummy boxsize:[0,0,0] pos:(DList[DList.count].pos+offset))
		)
		
		--创建骨骼--
		oldbone = undefined
		sels = for i = 1 to (DList.count-1) collect
		(
			pos1 = DList[i].pos
			pos2 = DList[i+1].pos
			newbone = BoneSys.createBone pos1 pos2 (if oldbone == undefined  then normalize(spl.center-((pos1 + pos2)/2)) else oldbone.dir)
			newbone.name = uniqueName "sp_bone_"
			newbone.width = newbone.height = boneSize
			newbone.parent = oldbone
			oldbone = newbone
			newbone
		)
		
		--清理场景--
		delete DList
	)
)

fn creatBoneBySplPoint boneSize posval side sideSize front frontSize back backSize = (
--获取所有点坐标,需要保证第一个选择是样条线
sels = #()
spl = selection[1]
for n in 1 to numSplines spl do --循环所有的线段序号
(
	list_point = #()
	for i in 1 to (numKnots spl n) do append list_point (getKnotPoint spl n i)
	--按点坐标列表循环创建骨骼和末端
	oldbone = spl
	cmax = list_point.count-1
	for i in 1 to cmax do
	(
		newbone = BoneSys.createBone list_point[i] list_point[i+1] (list_point[i]+(list_point[i+1]))
		newbone.name = uniqueName "sp_bone_"
		--设置鳍
		newbone.sidefins = side
		newbone.sidefinssize = sideSize
		newbone.frontfin = front
		newbone.frontfinsize = frontSize
		newbone.backfin = back
		newbone.backfinsize = backSize
		--设置鳍结束
		newbone.width = newbone.height = boneSize
		newbone.parent = oldbone
		oldbone = newbone
		append sels oldbone
		if i == cmax do
		(	i+=1
			newbone = BoneSys.createBone list_point[i] (list_point[i]+ posval) (list_point[i]+(list_point[i]+ posval))
			newbone.name = uniqueName "sp_bone_end_"
			newbone.width = newbone.height = boneSize
			newbone.parent = oldbone
			newbone.rotation.x_rotation = newbone.parent.rotation.x_rotation
			newbone.rotation.y_rotation = newbone.parent.rotation.y_rotation
			newbone.rotation.z_rotation = newbone.parent.rotation.z_rotation
			--设置鳍
			newbone.sidefins = side
			newbone.sidefinssize = sideSize
			newbone.frontfin = front
			newbone.frontfinsize = frontSize
			newbone.backfin = back
			newbone.backfinsize = backSize
			--设置鳍结束
			append sels newbone
		)
	)
)
)

fn Apply_Gradient endColor startColor =(
			local level     = #()
	      
			for i = 1 to selection.count do
			(
			  local node = selection[i]
			  local n    = 0
			  do
			  (
			    n    = n + 1
			    node = node.parent
			  ) while (node != undefined)
			  level[i] = n
			)

			local minLevel = level[1]
			local maxLevel = minLevel

			for i = 1 to selection.count do
			(
				if ( minLevel > level[i] ) do minLevel = level[i]
				if ( maxLevel < level[i] ) do maxLevel = level[i]
			)

			local span = maxLevel - minLevel
			if ( span < 1 ) do span = 1

			local colorDiff = endColor - startColor
			local colorDiffDistrib = colorDiff/span
			for i= 1 to selection.count do
			(
				selection[i].wirecolor = startColor + (level[i] - minLevel) * colorDiffDistrib 
			)
			--startColor 	= selection[1].wirecolor
			endColor		= startColor + (maxLevel - minLevel) * colorDiffDistrib
		)

fn DeleteKnotBy2 spl = --结点减半
(if classof spl == SplineShape do
	for i = 1 to numSplines spl do
	(
		dlist = for j = 2 to numKnots spl i by 2 collect j
		for k = dlist.count to 1 by -1 do deleteKnot spl i dlist[k]
	)
)

rollout ToolF "CBBS_0.99_UI" width:168 height:401
(
	button 'btn1' "CreatBoneBySpline" pos:[16,128] width:136 height:27 toolTip:"按样条线创建骨骼" align:#left
	spinner 'spn1' "bone_size" pos:[32,82] width:112 height:16 enabled:true range:[0,1000,2] type:#worldunits scale:0.01 align:#left
	button 'btn_del' "delete" pos:[56,160] width:40 height:24 toolTip:"删除骨骼" align:#left
	button 'btn_select' "select" pos:[104,160] width:48 height:24 toolTip:"选择骨骼" align:#left
	GroupBox 'grp2' "Bone Fin" pos:[8,200] width:152 height:88 align:#left
	GroupBox 'grp1' "Bone Object" pos:[8,64] width:152 height:128 align:#left
	spinner 'spn_taper' "bone_Taper" pos:[32,106] width:112 height:16 enabled:true range:[0,100,90] type:#float scale:1 align:#left
	checkbox 'chk_side' "Side" pos:[16,216] width:48 height:16 align:#left
	checkbox 'chk_front' "Front" pos:[16,240] width:48 height:16 align:#left
	checkbox 'chk_back' "Back" pos:[16,264] width:48 height:16 align:#left
	spinner 'spn_side' "" pos:[72,216] width:72 height:16 range:[0,100,2] scale:0.1 align:#left
	spinner 'spn_front' "" pos:[73,240] width:72 height:16 range:[0,100,2] scale:0.1 align:#left
	spinner 'spn_back' "" pos:[72,264] width:72 height:16 range:[0,100,2] scale:0.1 align:#left
	GroupBox 'grp_Color' "Bone Coloring" pos:[8,296] width:152 height:72 align:#left
	button 'btn_applyColor' "Apply" pos:[88,344] width:64 height:16 toolTip:"应用渐变颜色" align:#left
	colorPicker 'cp_Color1' "" pos:[16,320] width:56 height:16 enabled:true color:(color 57 8 136) align:#left
	colorPicker 'cp_Color2' "" pos:[16,344] width:56 height:16 color:(color 174 186 203) align:#left
	button 'btn_getColor' "Get" pos:[88,320] width:64 height:16 toolTip:"获取渐变颜色" align:#left
	GroupBox 'grp4' "Bone Pivot Position" pos:[8,8] width:152 height:48 align:#left
	checkbutton 'BoneEdit_btn' "Bone Edit Mode" pos:[16,24] width:136 height:24 align:#left
	Timer 'boneEditModeTimer' "" pos:[13,373] width:24 height:24 interval:100 active:true align:#left
	button 'btn6' "DB2" pos:[16,160] width:32 height:24 toolTip:"删除样条线上一半的结点" align:#left
	button 'btn_put' "testPut" pos:[80,373] width:80 height:24 toolTip:"按顶点输出比例" align:#left
	on ToolF open do
	(
		BoneEdit_btn.state = not maxops.affectchildren
	)
	on btn1 pressed do
	(
		undo on
		(
			spl = selection[1]
			if superclassof spl == shape and (tempint = numKnots spl 1) > 1 then creatBoneBySplPoint spn1.value (spn1.value/2) chk_side.checked spn_side.value chk_front.checked spn_front.value chk_back.checked spn_back.value else messagebox("no spline!")
		)
	)
	on spn1 changed val do
		for i in sels do (i.width = i.height = val if i.Children[1] == Undefined do i.length = val)
	on btn_del pressed do
	(
		undo on(try(delete sels)catch())
	)
	on btn_select pressed do
	(
		undo on(try(select sels)catch())
	)
	on spn_taper changed val do
		for i in sels do (if i.Children[1] != Undefined do i.Taper = val)
	on chk_side changed state do
		for i in 1 to sels.count-1 do (if sels[i].Children[1] != Undefined do sels[i].sidefins = state)
	on chk_front changed state do
		for i in 1 to sels.count-1 do (if sels[i].Children[1] != Undefined do sels[i].frontfin = state)
	on chk_back changed state do
		for i in 1 to sels.count-1 do (if sels[i].Children[1] != Undefined do sels[i].backfin = state)
	on spn_side changed val do
		for i in 1 to sels.count do (if sels[i].Children[1] != Undefined do sels[i].sidefinssize = val)
	on spn_front changed val do
		for i in 1 to sels.count do (if sels[i].Children[1] != Undefined do sels[i].frontfinsize = val)
	on spn_back changed val do
		for i in 1 to sels.count do (if sels[i].Children[1] != Undefined do sels[i].backfinsize = val)
	on btn_applyColor pressed do
		Apply_Gradient cp_color2.color cp_color1.color
	on btn_getColor pressed do
	(
		cp_color1.color = selection[1].wirecolor
		cp_color2.color = selection[selection.count].wirecolor
	)
	on BoneEdit_btn changed state do
	(
		if (BoneEdit_btn.state == true) then
		(
			boneEditModeTurnedOnByMe = true
			maxops.affectchildren = false
			if isCreatingObject Bones do 
			(
				StopCreating()
			)
		)
		else
		(
			boneEditModeTurnedOnByMe = false
			maxops.affectchildren = true
		)
	)
	on boneEditModeTimer tick do
	(
		if ( BoneEdit_btn.state == maxops.affectChildren ) do 
		(
			BoneEdit_btn.state = (not maxops.affectChildren)
		)
		if ( BoneEdit_btn.enabled == animButtonState ) do
		(
		  BoneEdit_btn.enabled = (not animButtonState)
		)
	)
	on btn6 pressed do
		undo on (DeleteKnotBy2 selection[1])
	on btn_put pressed  do
	(
		s = selection[1]
		if superclassof s == shape do 
		(
			List = getSegLengths s 1 byVertex:true cum:true
			PList = for i = 1 to (numKnots s 1) collect List[i] * 100
			print PList
		)
	)
)


createdialog ToolF