--从选中点创建面,然后提取法线作为dir,提取面位置作为pos,支持mesh和poly.和多个物体
try(destroydialog OtherTools)catch()
rollout OtherTools "其他工具" width:160 height:296
(
	button btn1 "根据选中数据创建Point" pos:[24,8] width:128 height:24 toolTip:"选中一个物体时:支持读取Mesh,Poly的选中顶点;选中多个物体时,按选中物体计算."
	checkbutton btn1_1 "S" pos:[8,8] width:16 height:24
	fn getCM posList = --至少要有三个点哦.因为在函数里调用,这里就不加判断了.
	(
		m = ConvertTo (mesh vertices:posList faces:#()) Editable_Poly
		polyOp.createPolygon m (for i = 1 to posList.count collect i)
		result = #(polyop.getFaceCenter m 1,polyop.getFaceNormal m 1,sqrt(polyop.getFaceArea m 1))
		delete m
		return result
	)
	fn CP arg s:true trans:undefined = (p = point pos:arg[1] dir:arg[2] size:arg[3] centermarker:off axistripod:on cross:off Box:off;if trans != undefined do p.transform = trans;if s do select p)
	fn calc s:true =
	(
		sel = (getVertSelection $) as array
		case sel.count of
		(
			0 :
			(
				CP #($.pos,$.dir,(size = distance $.max $.min;if size < 10 then 10 else size)) s:s trans:$.transform
				true
			)
			1 :
			(
				CP #(getVert $ sel[1],getNormal $ sel[1],10) s:s
				true
			)
			2 :
			(
				pos1 = getVert $ sel[1];pos2 = getVert $ sel[2]
				dir1 = getNormal $ sel[1];dir2 = getNormal $ sel[2]
				CP #((pos1+pos2)/2,normalize((dir1+dir2)/2),distance pos1 pos2) s:s
				true
			)
			default :
			(
				CP(getCM(for i in sel collect getVert $ i)) s:s
				true
			)
		)
	)
	
	
	button btn2 "选中物体1朝向选中物体2" pos:[8,40] width:144 height:24 toolTip:"选中物体1朝向选中物体2,默认是X轴朝向,固定Z轴.函数为可调参数."
	fn PointTo node1 node2 Axis:0 HoldAxis:2 = --node1指向node2,注意,Axis和Hold不能一样:0:x,1:y,2:z
	(
		tm = ExposeTm displayExposedVals:off useParent:off --露出变换
		lp = point transform:node1.transform
		ctrl = lp[3][2].controller = LookAt_Constraint() --这没加node2
		ctrl.appendTarget node2 50.0
		ctrl.target_axis = Axis
		ctrl.upnode_axis = HoldAxis
		ctrl.StoUP_axis = HoldAxis
		
		tm.exposeNode = lp
		tm.localReferenceNode = node1
-- 		maxOps.affectChildren  = off --引发偏移问题
		case HoldAxis of
		(
			0 : node1.transform = (rotateXmatrix tm[4][HoldAxis + 2].value) * node1.transform
			1 : node1.transform = (rotateYmatrix tm[4][HoldAxis + 2].value) * node1.transform
			2 : node1.transform = (rotateZmatrix tm[4][HoldAxis + 2].value) * node1.transform
		)
-- 		maxOps.affectChildren  = on
		delete #(tm,lp)
	)
	
	button btn3_1 "复制变换" pos:[8,72] width:72 height:24
	button btn3_2 "粘贴变换" pos:[80,72] width:72 height:24 toolTip:"右键可选择复制的物体."
	local transformArray = #()
	local nodes = #()
	
	button btn4 "对所有的IK目标做一些事" pos:[8,104] width:144 height:24
	
	
	fn pickF obj = superclassof obj == GeometryClass
	pickbutton btn_PickTag "拾取目标" pos:[8,136] width:88 height:32 filter:pickF toolTip:"拾取一个目标,以便让选中物体接近"
	button btn_Near "接近" pos:[96,152] width:56 height:16 toolTip:"将选中物体的选中顶点尽量接近目标的最近顶点"
	local VList = #()
-- 	local VListX = #()
-- 	local VListO = #()
	spinner spn_NearVal "" pos:[96,136] width:56 height:16 range:[0,100,0.01] type:#worldunits scale:0.001
	
	--判断[选中物体]是否和[拾取物体]的顶点数量和位置都一样.
	pickbutton btn8 "拾取物体" pos:[8,176] width:88 height:24 toolTip:"拾取一个目标物体,以便判断两个物体顶点是否一致.
判断标准:
1.顶点数量一样
2顶点顺序一样
3相对顶点位置相差不大于0.0001"
	local vl1=#()
-- 	on btn8 picked obj do 
-- 	in coordsys obj (
-- 		btn8.tooltip = btn8.caption = obj.name as string
-- 		local m1 = snapshotasmesh obj
-- 		vl1 = for i = 1 to getNumVerts m1 collect getVert m1 i
-- 	)
	button btn9 "判断" pos:[96,176] width:56 height:24
-- 	on btn9 pressed do 
-- 	(
-- 		if vl1.count > 0 do
-- 		(
-- 			d = 0.0001
-- 			for s in selection as array do --匹配的标准,1.顶点数量一样,2顶点顺序一样,3顶点位置相差不大于0.0001,在
-- 			in coordsys s (
-- 				local m2 = snapshotasmesh s
-- 				count = getNumVerts m2
-- 				mx = if count < vl1.count then count else vl1.count
-- 				nVL = for i = 1 to mx where (distance (getVert m2 i) vl1[i] > d) collect i --不匹配的顶点列表
-- 				print(format "% 与目标相差 % 个顶点;此外,还有 % 个顶点与目标不匹配.\n" s.name (abs(vl1.count - count)) nVL.count)
-- 			)
-- 		)
-- 	)

	on btn1 pressed do
	undo "CreatePoint" on(with redraw off(animate off(
		case classof $ of --不用判断0.因为0的时候是UndefinedClass
		(
			Editable_mesh :
			(
				calc s:btn1_1.checked
			)
			Editable_Poly :
			(
				sl = subobjectLevel
				if try(sl > 0)catch(false) then
				(
					temp = $
					$.ConvertSelection #CurrentLevel #Vertex
					addmodifier temp (Edit_Mesh())
					calc s:btn1_1.checked
					deletemodifier temp 1
					subobjectLevel = sl
				)
				else
				(
					CP #($.pos,$.dir,(size = distance $.max $.min;if size < 10 then 10 else size)) s:btn1_1.checked trans:$.transform
					true
				)
				
			)
			ObjectSet :
			(
				if $.count > 2 then 
					CP(getCM(for i in selection collect i.pos)) s:btn1_1.checked
				else
				(
					pos1 = $[1].pos;pos2 = $[2].pos
					dir1 = $[1].dir;dir2 = $[2].dir
					CP #((pos1+pos2)/2,normalize((dir1+dir2)/2),distance pos1 pos2) s:btn1_1.checked
					true
				)
			)
			default :
			(
				CP #($.pos,$.dir,(size = distance $.max $.min;if size < 10 then 10 else size)) s:btn1_1.checked trans:$.transform
				true
			)
		)
	)))
	on btn2 pressed do
	(
		undo "Point To" on(
			try(PointTo selection[1] selection[2])catch()
		)
	)
	on btn3_1 pressed do
	(
		transformArray = #(); nodes = #()
		for o in selection do (append transformArray o.transform; append nodes o)
	)
	on btn3_2 pressed do
	(
		for i = 1 to selection.count do 
		try(
				selection[i].transform = transformArray[i]
		)catch(exit)
	)
	on btn3_2 rightClick do
	(
		select (for n in nodes where IsValidNode n collect n)
		if selection.count != nodes.count do messagebox "之前选中的物体,可能有一部分已经失效."
	)
	on btn4 rightClick do
	(
		for o in objects where Classof o == IK_Chain_Object do
		(
	-- 			o[3].controller.dispGoal = on --开启显示
	-- 			o[3].controller.dispGoal = off --关闭显示
		)
	)
	on btn_PickTag picked obj do
	(
	-- 		VListX = #();VListO = #()
		btn_PickTag.caption = obj.name
		local m = snapshotasmesh obj
		VList = for i = 1 to getNumVerts m collect
		(
			pos = getVert m i
	-- 			if pos.x > 0 then append VListX pos else append VListO pos --左右分块导致了如果最近点在相反方向则无法靠近
		)
	)
	on btn_Near pressed do
	undo "move vertex" on(
		obj = $
		if superclassof obj == GeometryClass do --目前仅假设目标物体为Edit_Mesh,且不支持有修改器,poly会转成mesh然后操作完再回poly
		(
	-- 		try(
				for v in obj.selectedVerts do
				(
					vpos = v.pos
					dis = spn_NearVal.value --这句导致了极端情况下,附近点刚好在距离边缘时会被跳过,不过也因此只能取到小于距离的位置,挺好的.
					npos = vpos
	-- 					for p in (if vpos.x > 0 then VListX else VListO) do --配合左右分块的
					for p in VList do --不分块的
					(
						ndis = distance vpos p
						if ndis < dis do 
						(
							dis = ndis
							npos = p
						)
					)
					v.pos = npos
				)
				update $
	-- 		)catch()
		)
	)
	on btn8 picked obj do
	(
		btn8.tooltip = btn8.caption = obj.name as string
		local tobj = copy obj
		tobj.transform = matrix3 1
		local m1 = snapshotasmesh tobj;delete tobj
		vl1 = for i = 1 to getNumVerts m1 collect getVert m1 i
	)
	on btn9 pressed do
	(
		if vl1.count > 0 do
		(
			d = 0.0001
			for s in selection as array do --匹配的标准,1.顶点数量一样,2顶点顺序一样,3顶点位置相差不大于0.0001,在
			(
				local tobj = copy s
				tobj.transform = matrix3 1
				local m2 = snapshotasmesh tobj;delete tobj
				count = getNumVerts m2
				mx = if count < vl1.count then count else vl1.count
				nVL = for i = 1 to mx where (distance (getVert m2 i) vl1[i] > d) collect i --不匹配的顶点列表
				print(format "% 与目标相差 % 个顶点;此外,还有 % 个顶点与目标不匹配.\n" s.name (abs(vl1.count - count)) nVL.count)
			)
		)
	)
	
	button btn10 "检查缩放" pos:[8,208] width:144 height:24
	on btn10 pressed  do
	(
		try(select(for i in selection where distance i.scale [1,1,1] > 0.00001 collect i))catch()
	)
)
createdialog OtherTools