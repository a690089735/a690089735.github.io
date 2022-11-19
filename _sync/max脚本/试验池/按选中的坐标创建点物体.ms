--从选中点创建面,然后提取法线作为dir,提取面位置作为pos,支持mesh和poly.和多个物体
try(destroydialog OtherTools)catch()
rollout OtherTools "其他工具" width:160 height:296
(
	button btn1 "根据选中数据创建Point" pos:[8,8] width:144 height:24 toolTip:"选中一个物体时:支持读取Mesh,Poly的选中顶点;\n选中多个物体时,按选中物体计算."
	fn getCM posList = --至少要有三个点哦.因为在函数里调用,这里就不加判断了.
	(
		m = ConvertTo (mesh vertices:posList faces:#()) Editable_Poly
		polyOp.createPolygon m (for i = 1 to posList.count collect i)
		result = #(polyop.getFaceCenter m 1,polyop.getFaceNormal m 1,sqrt(polyop.getFaceArea m 1))
		delete m
		return result
	)
	fn CP arg = point pos:arg[1] dir:arg[2] size:arg[3] centermarker:off axistripod:on cross:off Box:off isSelected:on
	fn calc =
	(
		sel = (getVertSelection $) as array
		case sel.count of
		(
			0 :
				false
			1 :
			(
				CP #(getVert $ sel[1],getNormal $ sel[1],10)
				true
			)
			2 :
			(
				pos1 = getVert $ sel[1];pos2 = getVert $ sel[2]
				dir1 = getNormal $ sel[1];dir2 = getNormal $ sel[2]
				CP #((pos1+pos2)/2,normalize((dir1+dir2)/2),distance pos1 pos2)
				true
			)
			default :
			(
				CP(getCM(for i in sel collect getVert $ i))
				true
			)
		)
	)


	on btn1 pressed  do
	(	
		state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
		case classof $ of --不用判断0.因为0的时候是UndefinedClass
		(
			Editable_mesh :
			(
				calc()
			)
			Editable_Poly :
			(
				temp = $
				addmodifier temp (Edit_Mesh())
				calc()
				deletemodifier temp 1
			)
			ObjectSet :
			(
				if $.count > 2 then 
					CP(getCM(for i in selection collect i.pos))
				else
				(
					pos1 = $[1].pos;pos2 = $[2].pos
					dir1 = $[1].dir;dir2 = $[2].dir
					CP #((pos1+pos2)/2,normalize((dir1+dir2)/2),distance pos1 pos2)
					true
				)
			)
		)
		setCommandPanelTaskMode state
	)
)
createdialog OtherTools