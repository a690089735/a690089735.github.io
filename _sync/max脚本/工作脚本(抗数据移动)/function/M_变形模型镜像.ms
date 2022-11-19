try(destroydialog morpherMirror)catch()

--欲更新
--先对所有顶点做一次Z轴排序,然后按左右区分开来
--重新匹配左右

rollout morpherMirror "镜像变形模型" width:160 height:384
(
	pickbutton btn_PickBase "点击拾取基础物体" pos:[40,80] width:105 height:24 toolTip:"物体太小的话可能会无法计算,可以做一个放大版的基础物体,重置变换后用来创建顶点序列,还是不行的话,可以将物体嘴部点手动分开,然后加一级松弛试试.(顶点越多,计算时间越长.)"
	spinner spn1 "模糊值" pos:[16,56] width:90 height:16 enabled:true range:[0.001,1,0.005] scale:0.001
	button btn_L2R ">>" pos:[17,136] width:55 height:24 toolTip:"画左向画右镜像"
	button btn_R2L "<<" pos:[89,136] width:56 height:24 toolTip:"画右向画左镜像"
	button btn_Flip ">><<" pos:[17,168] width:128 height:24 toolTip:"翻转"
	label lbl1 "基于前视图/世界X轴!" pos:[8,8] width:112 height:16
	GroupBox grp1 "创建顶点序列" pos:[8,32] width:144 height:80
	GroupBox grp2 "各种镜像" pos:[8,112] width:144 height:88
	button btn13 "?" pos:[112,56] width:18 height:16 toolTip:"模糊值,用于处理有微妙的不对称的模型.0为完全精确,最大1,默认0.01,表示±0.01以内的点都会匹配"
	button btn_Save "写" pos:[136,8] width:16 height:16
	button btn_Load "读" pos:[120,8] width:16 height:16
	GroupBox grp9 "复制粘贴选择顶点位置" pos:[8,208] width:144 height:56
	button btn37 "复制" pos:[16,232] width:56 height:24
	button btn38 "粘贴" pos:[88,232] width:56 height:24
	button btn10 "复制" pos:[16,288] width:56 height:24
	button btn11 "粘贴" pos:[88,288] width:56 height:24
	GroupBox grp4 "复制粘贴选择的面" pos:[8,272] width:144 height:48
	
	local Vs
	local VsPos
	
	local zeroval = 0.005
	
	local MV = #()--中间
	local LV = #()--画左
	local RV = #()--画右
	
	local EV = #()
	
	fn ASort P L a:1 = --轴向比较排序,1为x,2y3z,p是位置列表,L是点列表
	(
		
		for i = L.count - 1 to 1 by -1 do for j = 1 to i do
			if P[j][a] > P[j+1][a] then (t = L[j]; L[j]=L[j+1]; L[j+1]=t; t = P[j]; P[j]=P[j+1]; P[j+1]=t) --1大于2,表示1应该在2的后面,需要换位置,否则不管(false跳过)
			else continue
		
	)
	
-- 	fn matchLR2 obj = --另一种匹配顶点,先对左右两边的点进行排序,然后判断排序后大于阈值外的点并选中.效率极低.弃用
-- 	with redraw off(undo off(animate off(
-- 		MV = #()--中间
-- 		LV = #()--画左
-- 		RV = #()--画右
-- 		
-- 		EV = #()
-- 		
-- 		local LVpos = #()
-- 		local RVpos = #()
-- 		for i = 1 to polyop.getNumVerts obj do --先区分左右和中间的顶点
-- 		(
-- 			pos = in coordsys obj polyop.getVert obj i
-- 			if pos.x > zeroval then (append RV i;append RVpos pos) --大于模糊,加到右组
-- 			else if pos.x < -zeroval then (append LV i;append LVpos (pos*[-1,1,1])) --小于模糊,加到左组,注意,加入的pos是反向pos,一是方便直接计算距离,二是可以让后面的排序结果更接近右组
-- 			else append MV i --其他,加到中
-- 		)
-- 		if LV.count != RV.count then messagebox "左右顶点数量不匹配."--其实这时候可以启用方法1再算一遍.
-- 		else
-- 		(
-- 			--对左右顶点排序
-- 			ASort LVpos LV a:1; ASort LVpos LV a:2; ASort LVpos LV a:3
-- 			ASort RVpos RV a:1; ASort RVpos RV a:2; ASort RVpos RV a:3
-- 			--检查不匹配的点
-- 			
-- 		)
-- 	)))
	
	fn matchLR obj = --匹配顶点
	with redraw off(undo off(animate off(
		MV = #()--中间
		LV = #()--画左
		RV = #()--画右
		
		EV = #()
		
		local LVpos = #()
		local RVpos = #()
		for i = 1 to polyop.getNumVerts obj do --先区分左右和中间的顶点
		(
			pos = in coordsys obj polyop.getVert obj i
			if pos.x > zeroval then (append RV i;append RVpos pos) --大于模糊,加到右
			else if pos.x < -zeroval then (append LV i;append LVpos pos) --小于模糊,加到左
			else append MV i --其他,加到中组
		)
		k = 1
		for i = 1 to LV.count do --用左顶点逐个匹配右顶点的距离
		(
-- 			方案2,考虑其他相近顶点
-- 			ds
-- 			dvl = for j = k to RV.count where (ds = distance (LVpos[i]*[-1,1,1]) RVpos[j];ds < zeroval) collect #(ds,j)--一个临时的列表,记录符合距离的点#(距离,点编号)
-- 			if dvl.count == 0 then append EV LV[i] --与0个点匹配,加入异常点组
-- 			else --与至少一个点匹配,取其中最近的点
-- 			(
-- 				tx = dvl[1]
-- 				for dv in dvl do if dv[1]<tx[1] do tx = dv
-- 				tv = RV[tx[2]];deleteitem RV tx[2];insertitem tv RV i --更新RV列表
-- 				k+=1 --增加一位K
-- 			)
-- 			方案1,只考虑第一个匹配的点
			b = true
			for j = k to RV.count do if distance (LVpos[i]*[-1,1,1]) RVpos[j] < zeroval then (tv = RV[j];deleteitem RV j;insertitem tv RV i;k+=1;b=false;exit)
			if b do append EV LV[i] --与0个点匹配,加入异常点组
		)
		for i = k to RV.count do append EV RV[i] --剩余的右点都加进异常点组
	)))
	
	
	fn mirrorVertex targetOBJ sourceVList targetVList = 
	(
	-- 	posList = sourceVList.pos
	-- 	CurrentVLIst.pos = posList
		local posList = for i in sourceVList collect in coordsys targetOBJ polyop.getVert targetOBJ i
		targetOBJ;sourceVList;targetVList
		try(
			for i = 1 to posList.count do (pos = poslist[i]*[-1,1,1];in coordsys targetOBJ polyop.setVert targetOBJ targetVList[i] pos)
		)catch(MESSAGEbOX "未知异常.")
	)

	fn middleVertexToZero targetOBJ middleList = 
	(
		 for i in middleList do
		 (
			pos = in coordsys targetOBJ polyop.getVert targetOBJ i
			pos.x = 0
			in coordsys targetOBJ polyop.setVert targetOBJ i pos
		 )
	)
	
	button btn34 "选择点x居中" pos:[16,344] width:72 height:24
	GroupBox grp13 "其他" pos:[8,328] width:144 height:48
	on morpherMirror open do
	(
		spn1.value = zeroval
		FaceList = #{}
	)
	on btn_PickBase picked obj do
	(	btn_PickBase.enabled = false
		btn_PickBase.caption = "顶点序列匹配中..."
		windows.processPostedMessages()
		with redraw off(undo off(animate off(
		--记录
		matchLR obj
		if EV.count > 0 then (messagebox"这些顶点未能匹配,请手动匹配后再调整";select obj;max modify mode;subobjectLevel = 1;polyop.setVertSelection obj EV)
		)))
		btn_PickBase.enabled = true
		btn_PickBase.caption = "顶点序列匹配结束"
	)
	on spn1 changed val do
	(
		zeroval = val
	)
	on btn_L2R pressed do
		undo on (mirrorVertex (selection[1]) (LV+MV) (RV+MV);middleVertexToZero (selection[1]) MV)--画左到画右粘贴
	on btn_R2L pressed do
		undo on (mirrorVertex (selection[1]) (RV+MV) (LV+MV);middleVertexToZero (selection[1]) MV)--画右到画左粘贴
	on btn_Flip pressed do
		undo on (mirrorVertex (selection[1]) (RV+LV+MV) (LV+RV+MV))--整体翻转
	on btn_Save pressed do
	( 
		filename = getsavefilename caption:"保存顶点变量" types:"txt(*.txt)|*.txt" historyCategory:"Vtxt"
		if filename != undefined do
		(save_file = createfile filename
		for v in LV do format ",%" v to:save_file
		format "\r\n" to:save_file
		for v in RV do format ",%" v to:save_file
		format "\r\n" to:save_file
		for v in MV do format ",%" v to:save_file
		close save_file)
	)
	on btn_Load pressed do
	(
		filename = getopenfilename caption:"加载顶点变量" types:"txt(*.txt)|*.txt" historyCategory:"Vtxt"
		if filename != undefined do load_file = openFile filename 
		if load_file != undefined then
		(
			LV = for s in (filterString (readLine load_file) ",") collect s as number
			RV = for s in (filterString (readLine load_file) ",") collect s as number
			MV = for s in (filterString (readLine load_file) ",") collect s as number
			close load_file
		)
		btn_PickBase.caption = "顶点序列读取结束"
	)
	on btn37 pressed do
	(
		obj = selection[1]
		Vs = polyop.getVertSelection obj
		Vspos = for i in Vs collect in coordsys obj polyop.getVert obj i
	)
	on btn38 pressed do
	(
		for obj in selection as array do in coordsys obj polyop.setVert obj Vs Vspos
	)
	on btn10 pressed do
		FaceList = polyop.getFaceSelection selection[1]
	on btn11 pressed do
		polyop.setFaceSelection selection[1] FaceList
	on btn34 pressed do
	(
		--选择点x轴居中
		obj = selection[1]
		Vs = polyop.getVertSelection obj
		Vspos = for i in Vs collect in coordsys obj polyop.getVert obj i
		in coordsys obj polyop.setVert obj Vs (for pos in Vspos collect pos*[0,1,1])
	)
)
createdialog morpherMirror

--