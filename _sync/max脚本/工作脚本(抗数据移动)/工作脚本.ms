
--"添加文件浏览盒"
--"添加匹配模式和输入模式切换的按钮"

--"0.96更新说明 在代码中添加了执行中文设置的功能 优化了界面,更简洁更实用 加入了检查bonespro修改器功能,升级了覆盖为2012的功能 现在可以在文件目录先行创建一个old.bak的备份文件"
--"0.99更新说明 重构了部分代码,现在列表的项目根据文件夹中的数据自动适配,免去了手动升级,默认选择带有修改器塌陷模型"
--"0.99-1更新说明 现在可以匹配坐骑文件"
--"1.0更新说明 重构了部分代码,现在整体架构更加健壮,且更加容易升级和维护"
--"2018/04/03 现在创建飘带脚本会先尝试一个有效的关闭,不会像之前一样,在已经打开飘带脚本时只会创建一个新的空窗口,添加了一些撤销功能,但导入bip的撤销还是不是很好用"
--待加入功能,跨场景拷贝,按样条线创建骨骼,创建变形器动画(全部已加入--2019/01)

--"2018/04/21 加入了跨场景拷贝,"
--"2018/05/01 新增跨场景复制蒙皮数据的功能,加入到了跨场景拷贝里.."
--"2018/05/13 添加按样条线创建骨骼"
--"2018/05/21 更新按样条线创建骨骼"
--"2018/05/30 部分代码重构,方便日后更新工具集"
--"2018/05/31 应单显示器的工作人员要求,添加一个收展按钮,以节省显示空间'
--"2018/06/08 增强导入bip的功能,现在可以自动识别帧数并设置时间线的时间范围"

--"2019/01/05 将脚本移植到公司服务器,并添加维护工具按钮,方便打开数据目录"
--"2019/04/11 转移到新的服务器,添加全局变量workscript_global_path到呼出方法,以免数据位置各种变化时不便修改"
--"2019/05/27 更新了塌陷模型的逻辑,现在更快一点,而且会自动去除游离点(孤立顶点)
--"2019/06/02 整体UI变动,现在使用按钮分页/分栏"
--"2019/06/02 修改了一处说明"
--"2019/06/02 现在时间速率可以和max速率实时同步"
--"2019/06/02 更改以2012存文件按钮为以最低版本保存"
--"2019/09/24 更改塌陷模型模式1的方法,现在方向也会对齐"

tip1 = "690089735@qq.com"

filein (workscript_global_path+@"\function.ms")

global scriptsAndPaths

try(destroydialog script_work)catch()

rcMenu MainMenu 
(
	subMenu	"功能"
	(
		menuItem	MI_UpData	"维护项目数据"	enabled:true
		menuItem	MI_UpTool	"维护本工具"	enabled:true
		separator sep0
		menuItem	MI_ETool	"文件浏览盒"	enabled:true
		separator sep1
		menuItem	MI_OpenDOC	"打开通用项目需求"	enabled:true
		menuItem	MI_Client	"打开项目备份目录"	enabled:true
		menuItem	MI_ArtDir	"打开传奇美需目录"	enabled:true
	)
	on MI_ETool picked do 
	(
		messagebox"文件浏览盒开发中."
	)
	on MI_UpData picked do
	(
		ShellLaunch "explorer.exe" (workscript_global_path+@"\data\Item")
	)
	on MI_UpTool picked do 
	(
		ShellLaunch "explorer.exe" workscript_global_path
	)
	on MI_Client picked	do 
	(
		ShellLaunch "explorer.exe" @"\\192.168.1.241\work\项目备份"
	)
	on MI_ArtDir picked	do
	(
		ShellLaunch "explorer.exe" @"\\Animation\传奇怪物美需序列图"
	)
		on MI_OpenDOC picked	do
	(
		shellLaunch "notepad.exe" (workscript_global_path+@"\data\项目通用文档.txt")
	)
)

rollout script_work "工作脚本2.0A     (左下角关闭)" width:168
(
	checkbutton ckb_01 "流程检查" pos:[0,0] width:56 height:26 checked:false
	checkbutton ckb_02 "项目数据" pos:[56,0] width:56 height:26 checked:true
	checkbutton ckb_03 "附加工具" pos:[112,0] width:56 height:26 checked:false

	Group "流程检查"(
	radiobuttons rdo_playspeed "" height:18 labels:#("/4", "/2","1","2","4") columns:5 toolTip:"选择播放速率" offset:[5,2]
	button btn_clearSelSet "清选择集" width:60 height:26 across:2
	button btn_Alayer "合并层" width:60 height:26
	radiobuttons rdo2 "" width:30 height:32 labels:#("0", "1") columns:1 toolTip:"选择0，轴心塌陷在0点；选择1，轴心塌陷在原位置。"across:3
	checkbutton ckb1 "堆栈" width:32 height:32 toolTip:"当不选堆栈时,会将修改器一起塌陷。" checked:true
	button btn10 "塌陷模型" width:56 height:32 toolTip:"直接点按,删除所有修改器后塌陷模型。"
	button btn11 "MS" width:26 height:30  align:#left across:3 offset:[2,0]
	button btn12 "SW" width:26 height:30 align:#left offset:[-10,0]
	button btn23 "检查修改器" width:73 height:30 toolTip:"检查场景中的bonespro,meshsmooth,skinwarp修改器,会自动选择到模型." offset:[-12,0]
	button btn40 "显示" width:36 height:28 across:2 offset:[-15,0]
	button btn8 "隐藏其他对象" width:96 height:28 offset:[-18,0]
	button btn21 "以最低版本保存文件" width:138 height:28 toolTip:"自动将文件覆盖为当前max能保存的最低版本.\n生成的.bak重命名为.max可以恢复原文件.\n目前可以识别2014/1017的最低文件版本."
	)
	label emp1 offset:[0,-237] visiblie:on
	Group "项目数据"(
	dropdownList ddl_item "角色" width:143 height:41
	checkbutton ckb_matching "-匹配模式-" width:70 height:18 toolTip:"取消勾选时,不自动匹配bip体积." checked:true offset:[36,-45]
	radiobuttons rdo_sex "" width:112 height:16 labels:#("男       ", "女  ") columns:2 offset:[-10,20]
	dropdownList ddl_bip "" width:143 height:22
	button btn1 "设置标准体位" width:143 height:26
	dropdownList ddl_ride "坐骑" width:143 height:41 toolTip:"如果项目有坐骑文件,将会导入.没有会跳过."
	button btn7 "删除坐骑"width:143 height:26
	)
	label emp2 offset:[0,-242] visiblie:on
	Group "附加工具"(
	listbox lbx_scripts "" width:152 height:12  offset:[-5,0]
	button btn_Tcb "选择 转 TCB" width:66 height:24 toolTip:"转换旋转控制器为TCB控制器,可解决乱转问题。" across:2 offset:[2,0]
	button btn_Euler "选择 转 Euler" width:66 height:24 toolTip:"转换旋转控制器为Euler控制器,可以直观控制曲线。" offset:[12,0]
	)
	timer SPT interval:777
	button btnX "X" width:20 height:15 toolTip:"690089735@qq.com" across:2  offset:[-25,2]
	label lbl_about "2019/06/02于石家庄" width:104 height:16 enabled:false  offset:[-10,2]
	
	fn visibleFromGroup name state = 
	(
		for c in script_work.controls where (c != ckb_01 and c != ckb_02 and c != ckb_03 and c != btnX and c != lbl_about) do c.visible = off
		setstate = off
		out = off
		for c in script_work.controls while not out do
		(
			if iskindof c GroupStartControl and c.text == name do setstate = on
			if setstate do c.visible = state 
			if iskindof c GroupEndControl and c.text == name do out = on
		)
		if state then script_work.height = 275 else script_work.height = 28
	)
	on ckb_01 changed state do
	(
		ckb_02.checked = ckb_03.checked = false
		if state then(print state) 
		else(print state)
		visibleFromGroup "流程检查" state
	)
		on ckb_02 changed state do
	(
		ckb_01.checked = ckb_03.checked = false
		if state then(print state) 
		else(print state)
		visibleFromGroup "项目数据" state
	)
	on ckb_03 changed state do
	(
		ckb_01.checked = ckb_02.checked = false
		if state then(print state) 
		else(print state)
		visibleFromGroup "附加工具" state
	)
	on SPT tick do
  (rdo_playspeed.state = timeConfiguration.playbackSpeed)
	
	on script_work open do --界面启动
	(
		ddl_item.items = get_Items ()
		script_work.ddl_bip.items = get_Content rdo_sex.state ddl_item.items[ddl_item.selection]
		ddl_ride.items = get_Ride ddl_item.items[ddl_item.selection]
		scriptsAndPaths = get_Script()
		lbx_scripts.items = scriptsAndPaths[1]
		visibleFromGroup "项目数据" on
	)
	
	 on rdo_playspeed changed stat do
	 (timeConfiguration.playbackSpeed = case stat of
		(
			1: 1
			2: 2
			4: 4
			5: 5
			default: 3
		)
	)
	
	on rdo_sex changed stat do --性别改变
	(
		script_work.ddl_bip.items = get_Content stat ddl_item.items[ddl_item.selection]
	)
	on ddl_bip selected sel do --导入Bip
	(import_Bip ddl_item.items[ddl_item.selection] rdo_sex.state ddl_bip.items[sel] ckb_matching.checked
		getAndSetBipMaxKey())
	on btn1 pressed do --设置体位
	undo on
	(
		max motion mode
		bip = $Bip*[1]
		bip.controller.figureMode = true
		collection = biped.createCopyCollection bip.controller "sCol01"
		pose = biped.copyBipPose bip.controller collection #snapAuto
		bip.controller.figureMode = false
		with animate on
		(
			sliderTime = 0
			biped.pasteBipPose bip.controller pose false #pstdefault True True True False
			if ddl_item.items[ddl_item.selection] == "项目7" do
			(
				pos1 = biped.getTransform bip #pos
				pos1.x = pos1.y = 0
				biped.setTransform bip #pos pos1 on
			)
		)
	)
	on btn7 pressed do --删除坐骑
	undo on
	(
		--删除层中物体和层
		if LayerManager.getLayerFromName "ride" != undefined do
		(
		layer = LayerManager.getLayerFromName "ride"
		max select none
		layer.select on
		delete selection
		LayerManager.deleteLayerByName "ride"
		)
	)
	on btn8 pressed do --隐藏物体
	(
		hideByCategory.Shapes = hideByCategory.Lights = hideByCategory.Cameras = hideByCategory.shapes = hideByCategory.helpers = hideByCategory.bones = on
	)
	on btn10 pressed do --塌陷模型
	undo on
	(
		iss = selection as array
		for i in iss do
		(
			if ckb1.checked == false do for j = 1 to i.modifiers.count do Deletemodifier i i.modifiers[j]
			if classof i != BoneGeometry and classof i != Biped_Object do
			(
				sname = i.name
				cbox = box wirecolor:black
				if rdo2.state == 2 do (cbox.transform = i.transform;cbox.scale = [1,1,1])
				ConverttoPoly cbox
				for j = 1 to 8 do 
				(
					polyop.deleteVerts cbox 1
				)
				polyop.attach cbox i
				polyop.deleteIsoVerts cbox
				cbox.name = sname
			)
		)
		messagebox "处理完成" 
	)
	on btn_Tcb pressed do --转TCB
	(
			undo on
			(
				for i in selection do i.rotation.controller = TCB_rotation ()
			)
		)
	on btn_Euler pressed do --转Euler
	(
			undo on
			(
				for i in selection do i.rotation.controller = Euler_XYZ ()
			)
		)
	on ddl_item selected sel do --选择项目
	(
		script_work.ddl_bip.items = get_Content rdo_sex.state ddl_item.items[sel]
		ddl_ride.items = get_Ride ddl_item.items[sel]
	)
	on btn21 pressed do --低存文件
	(
		--判断max版本
		v = case (maxVersion())[1] of
		(
			16000: 2011
			19000: 2014
			default: 2010
		)
		--将当前文件保存复制一个,并重命名为max.bak--然后覆盖保存
		nowFilename = maxFilePath + maxFileName
		oldFilename = maxFilePath + "old.bak"
		saveMaxFile (nowFilename)
		deletefile oldFilename
		copyFile (nowFilename) (oldFilename)
		try(saveMaxFile (nowFilename) saveAsVersion:v quiet:False)catch(messagebox "覆盖失败,请检查文件是否存在." )
	)
	on ddl_ride selected sel do --合并坐骑
	(
			undo on
			(	
				import_Ride	ddl_item.items[ddl_item.selection] ddl_ride.items[sel]
			)
		)
	on btn23 pressed do --检查是否存在bonespro
		selterobj()
	on btn40 pressed do --显示物体
	(
		hideByCategory.Shapes = hideByCategory.Lights = hideByCategory.Cameras = hideByCategory.shapes = hideByCategory.helpers = hideByCategory.bones = off
	)
	on btnX pressed do
	(
		destroydialog script_work
	)
	on btn11 pressed do --选择meshsmooth模型
		select mssel
	on btn12 pressed do --选择skinwrap模型
		select swsel
	on lbx_scripts doubleClicked sel do
	(
		run_Script lbx_scripts.items[sel] scriptsAndPaths[1] scriptsAndPaths[2] 
	)
	on ckb_matching changed state do
		if state then ckb_matching.caption = "-匹配模式-" else ckb_matching.caption = "-输入模式-"
	on btn_clearSelSet pressed do
		for i = selectionsets.count to 1 by -1 do deleteItem selectionSets selectionSets[i]
	on btn_Alayer pressed do
		messagebox "开发中."
)

createdialog script_work pos:[50,150] style: #(#style_toolwindow) menu:MainMenu