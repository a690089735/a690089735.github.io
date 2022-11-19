/*
BuildBoxMod

Version 0.4
Author:	许铮
blog:	https://a690089735.gitee.io/
email:	690089735@qq.com

传播请保留以上信息,请不要将相关代码放在加密脚本中传播和出售.

2021.05.11 添加按网格切割的功能
2021.04.28 把镜像做成可批量的,基于选择顺序
2021.04.01 添加重设对象级别位移旋转功能
2021.04.01 将修改器重设为关联模式,方便全选手动删除V0.3
2021.03.01 添加一个删除多余BoxEM的功能(只保留最上边的一个).
2018.10.22 一个临时可用的复制粘贴功能,和一个临时可用的进度条.V0.2
2018.10.21 第一个可用版本V0.1


特性:
	为物体创建方形包裹盒,并作为名为"--BoxEM--"的editpoly修改器添加给原物体.
	复制和镜像粘贴只基于世界X轴.
	对修改器改名将不会被自动删除.
提示:
	此工具还属于测试阶段,功能并不完善,仅作为临时使用,性能也未特别优化,且过多的修改器可能影响视口性能.请谨慎使用.

*/


try (destroydialog CB_Rollout)catch()
rollout CB_Rollout "创建外框盒v0.3" width:152 height:120
(
	button btn1 ">>创建方块<<" pos:[32,8] width:112 height:24 toolTip:"选中物体点击此处,快速创建方块构造."
	button btn2 "删除方块" pos:[32,40] width:112 height:24 toolTip:"删除选中物体的所有方块修改器."
	button btn_copy "复制" pos:[8,80] width:64 height:24 toolTip:"复制选中物体形状.按住Ctrl直接创建一个镜像物体."
	button btn_paste "镜粘贴" pos:[80,80] width:64 height:24 toolTip:"镜像粘贴物体形状."
	progressBar pb1 "1" pos:[8,108] width:136 height:8 color:(color 7 166 41)
	button btn6 "D" pos:[8,40] width:16 height:16 enabled:true toolTip:"删除选中物体 多余的 方块修改器.(保留最上边的一个)"
	button btn7 "r" pos:[8,56] width:16 height:8 toolTip:"重置选中物体的对象旋转和位移."
	pickbutton btn_SplitMeshByBone "M" pos:[8,8] width:16 height:24 toolTip:"按网格拆分,选中骨骼,然后点击按钮拾取一个物体."
	button btn8 "----" pos:[8,72] width:64 height:8 toolTip:"记录选中物体并复制修改器"
	
	fn setprocess cval mval =
	(
		pb1.value = 100*cval/mval
		windows.processPostedMessages()
	)
	
	local
	CB_SOURCE_OBJ_List,
	BoxEM = Edit_poly name:"--BoxEM--",
	_copynames,
	_coptMeshes,
	_copyEM

	fn makeBoundingBox nodeB = --取外框盒,来自网络
	(
		bb = nodeGetBoundingBox nodeB nodeB.transform
		size = (bb[2]-bb[1])
		b = box width:size[1] length:size[2] height:size[3]
		CenterPivot b
		b.transform = nodeB.transform
		b.pivot = nodeB.transform.pos
		b.pos = nodeB.center
		return b
	)

	fn addBoxEM obj = 
	(
		for i = obj.modifiers.count to 1 by -1 do if obj.modifiers[i].name == "--BoxEM--" do deleteModifier obj i
		addModifier obj BoxEM
		select obj --删除操作也必须选择物体...
		BoxEM.SetSelection #Vertex #{1..obj.numverts} node:obj
		BoxEM.ButtonOp #DeleteVertex
-- 		setSelectionLevel op #object
		BoxEM
	)
	
	fn SplitMeshByBone obj:$Box001 boneList:#($Point001, $Point002) attachTo:false = 
	(
		setCommandPanelTaskMode #modify 
		
		setprocess 1 5
		
		local
		m = copy obj.mesh,
		trans = obj.transform,
		poly = converttopoly(mesh mesh:m tansform:trans),
		facecount = polyop.getNumFaces poly,
		facePosList = for i = 1 to facecount collect polyop.getFaceCenter poly i, --获得某面的位置
		faceList = for b in boneList collect #(),
		bPosList = for b in boneList collect b.center * inverse obj.transform,
		maxobjcount = objects.count
		
		setprocess 2 5
		for i = 1 to facecount do 
		(
			local 
			p = facePosList[i],
			disList = for bpos in bPosList collect distance bpos p
			append faceList[finditem disList (amin disList)] i
		)
		
		setprocess 4 5
		local addnode = #()
		for i = 1 to faceList.count do 
		(
			f = faceList[i]
			if f.count > 0 do
				if polyop.detachFaces poly f delete:false asNode:true name:(uniquename("test_")) do append addnode i
		)

		select(
			for i = 1 to addnode.count collect
			(
				if attachTo then
				(
					local o = objects[maxobjcount+1],
					cb = boneList[addnode[i]],
					op = addBoxEM cb  
					o.transform = trans
					op.attach o
					cb
				) 
				else
				(
					local o = objects[maxobjcount+i]
					o.transform = trans
					o.wirecolor = random white black
					o
				)
			)
		)
		
		free m
		delete poly
		setprocess 5 5
	)
	
	button btn9 "++++" pos:[80,72] width:64 height:8 toolTip:"选中记录的物体,并粘贴复制的修改器."
	on CB_Rollout open do
		enableSceneRedraw()
	on CB_Rollout close do
		enableSceneRedraw()
	on btn1 pressed do
	with redraw off(undo off(
		btn1.enabled = btn2.enabled = btn_copy.enabled = btn_paste.enabled = false
		windows.processPostedMessages()
	-- 		ST = timeStamp()
		cui.commandPanelOpen = false
		DisableSceneRedraw()
		setCommandPanelTaskMode #modify 
		list = getcurrentselection(); count = list.count
	
		for i = 1 to count do
		(
			setprocess i count
			local o = list[i]; B = makeBoundingBox o; op = addBoxEM o
-- 			select o 在add里选择了一次,可以省略一次
			op.attach B --他必须要在修改面板执行,执行前必须选择物体
		)
		select list
		pb1.value = 0
		btn1.enabled = btn2.enabled = btn_copy.enabled = btn_paste.enabled = True
		
		enableSceneRedraw()
		cui.commandPanelOpen = True
	-- 		ST = timeStamp() - ST; print ST
	))
	on btn2 pressed do
		undo on (for i in getcurrentselection() do for j = i.modifiers.count to 1 by -1 do if i.modifiers[j].name == "--BoxEM--" do deleteModifier i j)
	on btn_copy pressed do
	(
		CB_SOURCE_OBJ_List = getcurrentselection()
		if keyboard.controlPressed do
		for i = 1 to CB_SOURCE_OBJ_List.count do(
			local mirrormesh = mesh mesh:(snapshotasmesh CB_SOURCE_OBJ_List[i])
			scale mirrormesh [-1,1,1]
-- 			addmodifier mirrormesh (Normalmodifier flip:true)
-- 			print 1
		)
	)
	on btn_paste pressed do
	(
		currentOBJ_List = getcurrentselection()
		
		for i = 1 to CB_SOURCE_OBJ_List.count do --数量必须一样,不一样会出错哦!
		(
			CB_SOURCE_OBJ = CB_SOURCE_OBJ_List[i]
			sourceM = CB_SOURCE_OBJ.modifiers[#'--BoxEM--']
			currentOBJ = currentOBJ_List[i]
			
			if isValidNode CB_SOURCE_OBJ and isValidNode currentOBJ and sourceM != undefined and currentOBJ.modifiers[1].name == "--BoxEM--" do
			(
				btn1.enabled = btn2.enabled = btn_copy.enabled = btn_paste.enabled = false
				windows.processPostedMessages()
		
				with redraw off(animate off(undo on(
					max modify mode
					
					--原物体复制分离一个[可以替换成snapshotasmesh]
-- 					select CB_SOURCE_OBJ
-- 					local tmodf = Edit_poly()
-- 					addModifier CB_SOURCE_OBJ tmodf
-- 					tmodf.SetSelection #Face #{1..currentOBJ.numfaces}
-- 					tmodf.DetachToObject "TEMP_Mirror_Object"
-- 					deleteModifier CB_SOURCE_OBJ 1
					
		
					--创建镜像
					local mirrormesh = mesh mesh:(snapshotasmesh CB_SOURCE_OBJ)
					scale mirrormesh [-1,1,1]
					addmodifier mirrormesh (Normalmodifier flip:true)
		
					--现物体删光
					select currentOBJ
					currentM = currentOBJ.modifiers[#'--BoxEM--']
					currentM.SetSelection #Vertex #{1..currentOBJ.numverts} node:currentOBJ
					currentM.ButtonOp #DeleteVertex
		
					--现物体附加
					currentM.Attach mirrormesh editPolyNode:o
				)))
				btn1.enabled = btn2.enabled = btn_copy.enabled = btn_paste.enabled = true		
			)
		)
	
	)
	on btn6 pressed do
		undo on (for i in getcurrentselection() do for j = i.modifiers.count to 2 by -1 do if i.modifiers[j].name == "--BoxEM--" do deleteModifier i j)
	on btn7 pressed do
		undo on (for i in getcurrentselection() do (i.objectOffsetRot = (quat 0 0 0 1);i.objectOffsetPos = [0,0,0]))
	on btn_SplitMeshByBone picked obj do
		undo off(with redraw off(if isvalidnode obj do SplitMeshByBone obj:obj boneList:(getcurrentselection()) attachTo:true))
	on btn8 pressed  do
	(
		local sel = getcurrentselection()
		_copynames = for o in sel collect o.name
		_coptMeshes = for o in sel collect snapshotasmesh o
-- 		_copyEM = sel[1].'--BoxEM--'
	)
	on btn9 pressed  do
	(
		local sel = for n in _copynames collect getnodebyname n
		setCommandPanelTaskMode #modify	
		for i = 1 to sel.count do
		(
			local 
			o = sel[i],
			m = mesh mesh:_coptMeshes[i], --transform:o.transform
			op = addBoxEM o --这里包括选则物体了,所以下面可以省略
			op.Attach m
-- 			addmodifier o _copyEM
-- 			select o --必须选择,不然无法附加
-- 			currentM = currentOBJ.modifiers[#'--BoxEM--']
-- 			_copyEM.SetSelection #Vertex #{1..o.numverts} node:o
-- 			_copyEM.ButtonOp #DeleteVertex
-- 			_copyEM.SetOperation #DeleteVertex
-- 			_copyEM.Attach m --attach必须在修改面板执行
		)
		select sel
	)
)

createdialog CB_Rollout

