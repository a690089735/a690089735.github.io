--批量导入表情OBJ并命名
--功能: --要求OBJ和贴图在同一文件夹下
-- 		导入,处理名称,偏移,命名,检查有Face导入Face,检查有贴图则指定,保存到Temp目录,temp文件记录到数组
--		如果勾选了向上旋转,则将脸连接给height,然后旋转height
--		合并所有Temp文件

try(destroydialog ObjImportTool)catch()

rollout ObjImportTool "提取资源导入" width:328 height:384
(
	local allList = #()
	local objFilesList = #()
	local tempFilesList = #()
	local tempPath = (getdir #temp)+@"\"
	
	local AutoRotate = true
	local AutoImport = true
	
-- 	FN
	fn getObjFiles filespath:(getopenfilename caption:"filepath" types:"obj(*.obj)|*.obj") = --浏览OBJ并提供选择函数
	(
		if filespath != undefined then
		(
			allList = objFilesList = getfiles(getfilenamepath(filespath) + @"*.obj")
			return (for f in allList collect getfilenamefile f)
		)else 
		(
			allList = objFilesList = #()
			return #()
		)
	)
	fn calculatingLength n = --按总数计算一个接近4:3的分布
	(
		x = (sqrt(n*4/3.0)+0.5) as integer --列数,每行个数,每次计算时加一,超过最大值则换行并设置为1然后计算
		y = (n/x) as integer
		if mod n x > 0 do y+=1
		return [x,y]
	)
	fn getOffset n	= --计算偏移需求量
	(
		bb = nodeGetBoundingBox n n.transform
		size = (bb[2]-bb[1])
		return (size[1]+size[2]+size[3])
	)
	fn createPosArray a offset = --计算位置阵列,a时上边的行列,offset是第一个模型的长宽高之和,水平方向减去X总长的一半,垂直方向减去Z总长(这里是y)
	(
		xOffset = ((a[1]-1)*offset)/2
		yOffset = ((a[2]-1)*offset)
		result = #()
		PosArray = for j = 1 to a[2] do for i = 1 to a[1] do append result ([(i-1)*offset,0,(j-1)*-offset]+[-xOffset,0,yOffset])
		return result
	)
	fn ImportFileAndSaveToTempFolder f pos size:1 rot:false extra:true = --请事先重置tempFilesList
	(
		delete objects
		filename = getfilenamefile f
		filePath = getFilenamePath f
		importFile f #noPrompt
		
		newmat = StandardMaterial()
		newmat.name = ("MAT_" + filename)
		
		flname = filterString filename "_"
		index = flname[1] --编号
		cName = flname[2] --角色名
		tList = for n in #("*_D_*.png","*_N_*.png") collect (getfiles(filePath+index+"_"+cName+n))[1]
		m
		if tList[1] != undefined do newmat.diffuseMap = Bitmaptexture fileName:tList[1]
		if tList[2] != undefined do (newmat.bumpMap = Normal_Bump ();newmat.bumpMap.normal_map = Bitmaptexture fileName:tList[2])
		showTextureMap newmat on
		
		for o in objects do (o.name = uniqueName(filename);o.mat = newmat)
		
		if extra do
		(
			--获取所有此编号的OBJ
			extraList = getFiles (filePath + index + "_*_*.obj")
			index = findItem extraList f
			if index > 0 do deleteItem extraList index
			for ef in extraList do
			(
				importFile ef #noPrompt
				for o in (selection as array) do o.name = uniqueName(getfilenamefile ef)
			)
		)
		
		all = objects as array
		prt = point name:filename size:size centermarker:off axistripod:off cross:on Box:on
		all.parent = prt
		prt.pos = pos
		if rot do rotate prt -90 [1,0,0]
		tempFileName = tempPath + "_importTooltemp_" + filename + @".max"
		if savemaxfile tempFileName useNewFile:false do append tempFilesList tempFileName
	)
	fn flieNameFliter keyString fileNameList =	--文件名过滤器
	(
		currentFileIndex = for i = 1 to fileNameList.count where findstring fileNameList[i] keyString != udefined collect i
		return currentFileIndex
	)
-- 	UI
	edittext edt_filter "搜索名称" pos:[9,8] width:214 height:18
	multiListBox lbx_FileList "OBJ文件列表" pos:[8,32] width:312 height:23
	button btn_Execute "导入选定项" pos:[232,356] width:88 height:22
	button btn3 "全选" pos:[78,356] width:56 height:22
	button btn4 "反选" pos:[8,356] width:56 height:22
	
-- 	on btn_BrowseDir pressed do --浏览OBJ并提供选择UI
-- 	(
-- 		lbx_FileList.items = getObjFiles()
-- 	)

	on ObjImportTool open  do for f in getfiles (tempPath + "_importTooltemp_*.max") do deletefile f
	on ObjImportTool close  do for f in getfiles (tempPath + "_importTooltemp_*.max") do deletefile f
	
	on edt_filter changed text do --文件过滤器被输入
	(
		if text[text.count] =="\n" do text = filefilter.text = substituteString text "\n" ""
		lbx_FileList.selection = #{}
		if text == "" then objFilesList = allList else
		(
			filteredIndex = flieNameFliter text allList
			objFilesList = for i in filteredIndex collect allList[i]
		)
		lbx_FileList.items = for i in objFilesList collect getfilenamefile i
	)
	on btn_Execute pressed do
	(
		with redraw off(undo off(animate off(suspendEditing()
		-- 		先导入一个,取宽度+高度+长度,作为上下的偏移,然后2toCount继续运算
			startT = timestamp()
			max create mode
			delete objects
			tempFilesList = #()
			ImportList = for i in lbx_FileList.selection collect objFilesList[i]
			importFile ObjFilesList[(lbx_FileList.selection as array)[1]] #noPrompt
			offsetSize = getOffset selection[1]
			posArray = createPosArray (calculatingLength (lbx_FileList.selection as array).count) (offsetSize)
			size = (offsetSize/5)
			j = 0
			for i = 1 to ImportList.count do 
			(
				try(
					ImportFileAndSaveToTempFolder ImportList[i] posArray[i] size:size rot:AutoRotate extra:AutoImport
					)catch(j+=1)
			)
			
			delete objects
			for f in tempFilesList do (mergeMAXFile f #noRedraw #AutoRenameDups #renameMtlDups;deleteFile f)
			
			
			viewport.ResetAllViews() 
			actionMan.executeAction 0 "331"
			macros.run "Medit Tools" "clear_medit_slots" --清理材质编辑器
			
			resumeEditing()
			endT = timestamp()
			endM = (endT - startT)/60000
			endS = (mod (endT - startT) 60000)/1000
			
			messageBox ("执行结束,共" + ImportList.count as string + "个文件,失败" + j as string + "个.\t\n用时" + endM as string  + "分" + endS as string + "秒.")
		)))
		redrawViews()
	)
	on btn3 pressed do
	(
		lbx_FileList.selection = #{}
		lbx_FileList.selection = -(lbx_FileList.selection)
	)
	on btn4 pressed do
		lbx_FileList.selection = -(lbx_FileList.selection)
)
rcMenu MainMenu 
(
	subMenu	"菜单"
	(
		menuItem	LoadFiles "打开文件夹"	enabled:true
		separator sep1
		menuItem	AutoImport "自动导入相关"	enabled:true checked:ObjImportTool.AutoImport
		menuItem	AutoRotate "自动旋转90°"	enabled:true checked:ObjImportTool.AutoRotate
	)
	on AutoImport  picked do --自动相关
	(
		ObjImportTool.AutoImport = not ObjImportTool.AutoImport
	)
	on AutoRotate  picked do --自动旋转
	(
		ObjImportTool.AutoRotate = not ObjImportTool.AutoRotate
	)
	on LoadFiles  picked do --浏览OBJ并提供选择UI
	(
		ObjImportTool.edt_filter.text = ""
		ObjImportTool.lbx_FileList.items = ObjImportTool.getObjFiles()
	)
)
createdialog ObjImportTool menu:MainMenu