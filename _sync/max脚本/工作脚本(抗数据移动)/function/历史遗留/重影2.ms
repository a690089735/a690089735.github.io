try (destroydialog GhostRollout)catch()
	
fn clearAllGhost =
(
	delete $redGhostobj*
	delete $greenGhostobj*
	delete $blueGhostobj*
	delete $yellowGhostobj*
)

SettingFilePath = (getdir #userStartupScripts + @"\GhostSetting.ini")
global Ghost_set1 = #() --四色重影全局变量
global Ghost_GLayer
global Ghost_isOnlyOne = true

global Ghost_Tagobj

red1 = (color 242 70 70)
yellow1 = (color 255 214 128)
green1 = (color 126 227 126)
blue1 = (color 62 130 255)
purple1 = (color 144 0 185)
	
-- rollout TipsRollout "提示:" width:200 height:64
-- (
-- 	label lbl4 "要做重影,先失去物体再创建;\n轨迹操作只对选中的物体有用;\n我的QQ是690089735,不过这个工具只接受bug提交;" pos:[8,8] width:184 height:48
-- )

-- fn trajectory obj = --创建轨迹
-- (
-- 		temp = Point  axistripod:off cross:off box:off centermarker:on wirecolor:white showTrajectory:on name:(uniqueName "ghost_trajectory_")
-- 		temp.parent = obj
-- )

fn creatobj color1 text1 = --四色重影函数
	(
		if (Ghost_GLayer = LayerManager.getLayerFromName "Ghost_layer") == undefined do Ghost_GLayer = LayerManager.newLayerFromName "Ghost_layer"
		Ghost_GLayer.on = Ghost_GLayer.lock = (LayerManager.getLayer 0).current = true
		undo on(
			with animate off(
				b = box wirecolor:color1
				if Ghost_isOnlyOne then b.name =  (uniqueName text1) else b.name = (text1 + slidertime as string)
				ConverttoPoly b
				for j = 1 to 8 do polyop.deleteVerts b 1
				b.visibility = bezier_float()
				b.visibility.controller.value = 0.3
				b.showfrozeningray = b.renderable = b.castShadows = b.receiveshadows = b.applyAtmospherics = b.inheritVisibility = b.primaryVisibility = b.secondaryVisibility = off
				b.boneEnable=true
				Ghost_GLayer.addnode b
				try
				(
					for i in Ghost_set1 do
					(
						if superclassof i == GeometryClass do
						(
							type = classof (i.baseobject)
							if type == Biped_Object or type == HubObject or type == CATBone then
							(
								b.EditablePoly.attach i b
								b.mat = undefined
							)
							else 
							(	k = instance i
								b.EditablePoly.attach k b
								b.mat = undefined 
							)
						)
					)
					Ghost_Tagobj = b
				)catch
				(
					messagebox "失败!可能是你选择的物体已经被删除!"
					clearAllGhost()
				)--catch
			)--undo on
		)--with animate off

	)
	
	onlyOne = true
	rcMenu MainMenu 
(
	subMenu	"功能"
	(
		menuItem	MI_onlyOne	"每种色彩只保留一个重影"	enabled:true  checked:onlyOne
		separator sep1
		menuItem	MI_PlayBy1	"1/4x速率"	enabled:true 
		menuItem	MI_PlayBy2	"1/2x速率"	enabled:true 
		menuItem	MI_PlayBy3	"1x   速率"	enabled:true 
		menuItem	MI_PlayBy4	"2x   速率"	enabled:true 
		menuItem	MI_PlayBy5	"4x   速率"	enabled:true 
	)
	on MI_onlyOne picked	do 
	(
		onlyOne = not onlyOne
		Ghost_isOnlyOne = not Ghost_isOnlyOne
		if hasINISetting SettingFilePath "MainMenu" do 
		(
			SettingFile = createFile SettingFilePath
			close SettingFile
		)
		setINISetting SettingFilePath "MainMenu" "Ghost_isOnlyOne" (Ghost_isOnlyOne as string)
	)
	
	on MI_PlayBy1 picked	do 
	(
		timeConfiguration.playbackSpeed = 1
	)
	on MI_PlayBy2 picked	do 
	(
		timeConfiguration.playbackSpeed = 2
	)
	on MI_PlayBy3 picked	do 
	(
		timeConfiguration.playbackSpeed = 3
	)
	on MI_PlayBy4 picked	do 
	(
		timeConfiguration.playbackSpeed = 4
	)
	on MI_PlayBy5 picked	do 
	(
		timeConfiguration.playbackSpeed = 5
	)
	
	subMenu	"关于"
	(
		menuItem	MI_Help 		"说明帮助"	enabled:true
		menuItem	MI_About 		"联系作者"	enabled:true
		menuItem	MI_Version	"2019/4/20更新"	enabled:true
	)
	on MI_Help picked	do (ShellLaunch "https://www.cgjoy.com/forum.php?mod=viewthread&tid=217614" "")
	on MI_About  picked	do (ShellLaunch "http://tk.v5cg.com/tools/1754.html" "")
	
	on MainMenu open do if getINISetting SettingFilePath "MainMenu" "Ghost_isOnlyOne" == "false" do onlyOne = Ghost_isOnlyOne = false
)
	
rollout GhostRollout "Ghost 2" width:128 height:304
(
	button btn_p "拾取" pos:[16,8] width:96 height:24 toolTip:"左键点击:拾取物体/右键点击:重置工具"
	button btn_r "红色" pos:[16,56] width:96 height:24 toolTip:"左键点击:创建红色重影/右键点击:删除红色重影"
	button btn_g "绿色" pos:[16,118] width:96 height:24 toolTip:"左键点击:创建绿色重影/右键点击:删除绿色重影"
	button btn_b "蓝色" pos:[16,150] width:96 height:24 toolTip:"左键点击:创建蓝色重影/右键点击:删除蓝色重影"
	button btn_y "黄色" pos:[16,88] width:96 height:24 toolTip:"左键点击:创建黄色重影/右键点击:删除黄色重影"
	checkbutton btn9 "显隐" pos:[16,185] width:48 height:24 toolTip:"切换显示隐藏重影"
	button btn_p0 "清除" pos:[72,185] width:40 height:24 toolTip:"清除所有重影"
	GroupBox grp1 "创建重影" pos:[8,36] width:112 height:144
	button btn_p3 "切换轨迹" pos:[16,232] width:96 height:24 toolTip:"左键点击:显示选中物体的轨迹/右键点击:关闭选中物体的轨迹"
-- 	button btn_p5 "解除冻结" pos:[8,184] width:56 height:24 toolTip:"显示隐藏重影"
	GroupBox grp2 "轨迹" pos:[8,216] width:112 height:48
	button btn_CT "紫色重影标记" pos:[16,272] width:96 height:24 toolTip:"左键点击:创建一组跟随选中物体的紫色重影(选中物体的子物体)/右键点击:删除所有紫色重影"
		
	on GhostRollout open do
	(	
		if (Ghost_GLayer = LayerManager.getLayerFromName "Ghost_layer") == undefined do Ghost_GLayer = LayerManager.newLayerFromName "Ghost_layer"
		Ghost_GLayer.on = Ghost_GLayer.lock = (LayerManager.getLayer 0).current = true
		if getINISetting SettingFilePath "updata" "2019/4/18" == "0" do (
			messageBox "2019/4/19更新:\n\r2019年4月19日更新:考虑到接下来的破坏操作习惯的更新,加入了更新提示.                                   "
			setINISetting SettingFilePath "updata" "2019/4/18" "1"
			)
		if getINISetting SettingFilePath "updata" "2019/4/19" == "" do (
			messageBox "2019/4/19更新:\n\r更新多重重影模式的体验.                                                                 \n\r现在,在创建重影时,如果当前帧上有同色重影,会自动删除旧的重影(类似于更新重影,相当于每帧只有一个同色重影).\n在多重影模式下,点击删除只会删除当前帧的重影,(清除仍会删除所有的,或者把仅一个重影勾选上再点删除.)"
			setINISetting SettingFilePath "updata" "2019/4/19" "1"
			)
		if getINISetting SettingFilePath "updata" "2019/4/20" == "" do (
			messageBox "2019/4/20更新:修复一处BUG,优化显隐代码. 一处体验优化                   "
			setINISetting SettingFilePath "updata" "2019/4/20" "1"
		)
		if getINISetting SettingFilePath "updata" "2019/4/21" == "" do (
			messageBox "2019/4/20更新:简化操作界面,更新按钮提示.                                           \n左键点击拾取按钮为拾取,右键点击为重置.\n左键点击颜色按钮为创建,右键点击为删除.\n还是不懂的,把鼠标放在按钮上查看提示."
			setINISetting SettingFilePath "updata" "2019/4/21" "1")
		if getINISetting SettingFilePath "updata" "2019/4/22" == "" do (
			messageBox "2019/4/22更新:现在,按Shift+G按类型隐藏网格时,不会影响重影.              "
			setINISetting SettingFilePath "updata" "2019/4/22" "1"
			)
	)
	on GhostRollout close do
	(
		Delete $purpleGhostobj*
		clearAllGhost()
		LayerManager.deleteLayerByName "Ghost_layer"
	)
	on btn_p pressed do
	(
		Ghost_set1 = selection as array
		btn_p.caption = Ghost_set1.count as string
	)
	on btn_p rightClick do
	(
		Ghost_set1 = #()
		btn_p.caption = "拾取"
		clearAllGhost()
	)
	on btn_r pressed do
	(
		if Ghost_isOnlyOne then delete $redGhostobj* else  try(delete (getNodeByName("redGhostobj" + slidertime as string)))catch()
		creatobj red1 "redGhostobj"
	)
	on btn_r rightClick do
	(
		if Ghost_isOnlyOne then delete $redGhostobj* else  try(delete (getNodeByName("redGhostobj" + slidertime as string)))catch()
	)
	on btn_g pressed do
	(
		if Ghost_isOnlyOne then delete $greenGhostobj*  else  try(delete (getNodeByName("greenGhostobj" + slidertime as string)))catch()
		creatobj green1 "greenGhostobj"
	)
	on btn_g rightClick do
	(
		if Ghost_isOnlyOne then delete $greenGhostobj*  else  try(delete (getNodeByName("greenGhostobj" + slidertime as string)))catch()
	)
	on btn_b pressed do
	(
		if Ghost_isOnlyOne then delete $blueGhostobj* else  try(delete (getNodeByName("blueGhostobj" + slidertime as string)))catch()
		creatobj blue1 "blueGhostobj"
	)
	on btn_b rightClick do
	(
		if Ghost_isOnlyOne then delete $blueGhostobj* else  try(delete (getNodeByName("blueGhostobj" + slidertime as string)))catch()
	)
	on btn_y pressed do
	(
		if Ghost_isOnlyOne then delete $yellowGhostobj* else  try(delete (getNodeByName("yellowGhostobj" + slidertime as string)))catch()
		creatobj yellow1 "yellowGhostobj"
	)
	on btn_y rightClick do
	(
		if Ghost_isOnlyOne then delete $yellowGhostobj*  else  try(delete (getNodeByName("yellowGhostobj" + slidertime as string)))catch()
	)
	
	on btn9 changed state do if state then hide $'*e*Ghostobj*' else unhide $'*e*Ghostobj*'

	on btn_p0 pressed do clearAllGhost()

	on btn_p3 pressed do
		try($.showTrajectory = on)catch()
	on btn_p3 rightClick do
		try($.showTrajectory = off)catch()
	on btn_CT pressed do
	(
		if selection.count >= 1 do(
			if Ghost_isOnlyOne do delete $purpleGhostobj*
			creatobj purple1 "purpleGhostobj"
			Ghost_Tagobj.parent = selection[1]
		)
	)
	on btn_CT rightClick do
		Delete $purpleGhostobj*
)
createdialog GhostRollout menu:MainMenu
