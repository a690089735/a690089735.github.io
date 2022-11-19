/* 需要实现的功能 */
/* 1.保存导入配置 */
/* √2.双击打开文件,有可能的话可以加入菜单 */
/* √3.命令可以插入到选择项下方 */
/* √4.优化核心代码 */
/* √5.文件选择器,选择数量,过滤显示 */
/* √6.Esc强制终止 */
/* 7.点击指令盒可以更改参数,这个需要更改整体框架,将参数也作为数组的一部分 */
/* 8.重布UI,所有盒子变宽,将回显窗口放到下面,只显示4行高度,点击查看所有按钮,保存为txt文件,然后用记事本打开,或者直接用记事本打开文本 */
/* 9.重布UI,加长备选命令盒,移动参数框到其他更宽阔的位置,或者到指令盒附近,且点击指令盒可以直接更改参数 */
/* 10.启用进度条 */
/* 11.让参数框支持拖放,而且不会响应回车键等换行符,可采用dotnet控件*/
/* 研究2维文本数组的储存和加载 */


/* 20190118更新:优化界面动画的响应速度,现在界面动画对性能的影响可以忽略不计 */
/* 20190117更新:添加文件名过滤器功能,现在能更整洁方便的处理文件列表啦! */
/* 20190114更新:修复积累的小BUG们 */
/* 20190113更新:现在可以按住ESC键,强制停止执行过程 */
/* 20190112更新:重布UI,现在用与以前相同面积的界面尺寸,可以得到更大的操作空间 */
/* 20190111更新:现在可以把命令插入到指令盒选择项的下方 */
/* 20190109更新:重新优化并封装了核心代码 */
/* 20190107更新:取消了部分无用功能,修复BUG */
/* 20190105更新:更新回显命令盒,现在可以自动显示最新的信息 */
/* 20181222更新:修复了核心代码中的BUG */
/* 20181210更新:实现了按钮和状态栏的动画效果,更直观的给用户视觉提示 */
/* 20181206更新:优化UI,绑定响应程序到UI */
/* 20181205更新:第一个可用版本进入测试 */
/* 20181201设计:核心架构设计完毕 */
/* 20181130设计:UI设计完毕,但只能看,并没有什么用 */
/* 20181121规划:受杂项工作和善变的策划拖累,开始设计研发本工具 */



try(DestroyDialog creatorUIwindow)catch()

global fileList = #()
global itemList = #()
global filteredCommandIndex = #()
global fileName = ""--在运行时记录当前文件名

global Creator_command_Var = #()--这个可以用来记录变量结构为#(Var1,Var2,Var3),在运行时按顺序调用,以文本的形式储存加载.这样便于修改
-- 以后执行命令的格式为:exetud "for o in $* do o.name = substituteString (o.name as string)" + var1 + var2

global textTips = ""
global textTick = 0
global progress = 0

DeMeshSmooth = (meshsmooth iterations:0 smoothness:0.0 useRenderIterations:true renderIterations:1 useRenderSmoothness:true renderSmoothness:1.0)
/* 全部命令 */ --allcommand[1] = #(显示名称,变量数量,#("执行字符串1","执行字符串2",...),"提示信息")#执行字符串:之后传给CreateCommandString即可,
global allCommand = #(
	#("    /---调试参数---/",0,#(),""),
	#("不报错",2,#("print("," + ",")"),"print(参数1+参数2)"),
	#("报错",0,#("print(bucunzai)"),"print(不存在)"),
	#("    /---文件操作---/",0,#(),"文件操作类程序"),
	#("保存现行文件",1,#(@"savemaxfile fileName quiet:true saveAsVersion:"),"保存文件:参数1为保存的版本,如果输入的版本不支持,将保存为当前版本"),
	#("另存现行文件",2,#(@"savemaxfile fileName quiet:true saveAsVersion:"),""),
	#("打开指定文件",1,#("loadmaxfile \"", "\" useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default"),"打开一个文件,参数1为文件路径"),
	#("打开现行文件",0,#(@"loadmaxfile fileName useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default"),"打开正在执行的文件,不需要参数"),
	#("合并指定文件",1,#("mergemaxfile @\"","\" #skipDups  #useMergedMtlDups quiet:true missingExtFilesAction:#default missingDLLsAction:#default"),"合并一个文件,参数1为文件路径,注意,重名物体将不会被合并"),
	#("合并现行文件",0,#(@"mergemaxfile fileName #skipDups #useMergedMtlDups quiet:true missingExtFilesAction:#default missingDLLsAction:#default"),"合并正在执行的文件,注意:重名物体将不会被合并"),
	#("    /---全局操作---/",0,#(),"场景的全局操作"),
	#("仅显示Geometry",0,#(@"hideByCategory.all(); hideByCategory.geometry = off"),"设置按类型隐藏,仅在场景中显示Geometry"),
	#("    /---物体操作---/",0,#(),"物体操作类程序"),
	#("删除物体",1,#("delete $\'","\'"),"参数1为物体名(支持通配符)"),
	#("物体重命名",2,#(@"$", ".name = \"","\""),"参数1为原物体名,参数2为新物体名"),
	#("设置子父物体绑定",2,#("$\'","\'.parent = $\'","\'"),"参数1为子物体名,参数2为父物体名"),
	#("查找替换物体名",2,#("for o in $* do o.name = substituteString (o.name as string) \"","\" \"","\""),"参数1要查找的字符串,参数2要替换的字符串,所有包含查找字符串的物体都会替换名称"),
	#("    /---修改器操作---/",0,#(),"修改器操作类程序"),
	#("为指定物体添加网格平滑",1,#(@"temp = $",@"; if not(isProperty temp.MeshSmooth #renderIterations) do addModifier temp DeMeshSmooth"),"参数1为子物体名(默认的修改器迭代为0,开启视口迭代,级别为2),如果物体有网格平滑修改器,则不会再次添加."),
	#("设置定物体的网格平滑",2,#("$\'","\'.meshsmooth.renderIterations = "),"必须输入2个参数:参数1为子物体名,参数2为渲染迭代级别"),
	#("删除一个物体的网格平滑",1,#("o = $\'","\'; try(deleteModifier o o.modifiers[MeshSmooth])catch()"),"必须输入1个参数:参数1为子物体名"),
	#("删除所有物体的网格平滑",0,#(@"for o in Geometry do try(deleteModifier o o.modifiers[MeshSmooth])catch()"),"删除所有物体的网格平滑,不需要参数"),
	#("    /---动画操作---/",0,#(),"动画操作类程序"),
	#("设置时间范围",0,#(@""),""),
	#("设置当前时间",1,#(@"slidertime = "),"参数1为第某帧"),
	#("启用记录动画",0,#(@"animate on"),"启用记录动画,开启后所做的操作可被记录关键帧"),
	#("关闭记录动画",0,#(@"animate off"),"关闭记录动画,关闭后所做的操作可被记录关键帧"),
	#("    /---定制功能---/",0,#(),"定制的功能集,每一项对应一组定制功能"),
	#("用box清理所有模型",0,#(@""),""),
	#("用box清理指定模型",1,#(@""),""),
	#("清理头发骨骼",0,#(@"select $'Bip001 Head'...*;deselect $'Bip001 Head*';select (for i in selection where (classof i == BoneGeometry) collect i);max delete"),"删除Bip001 Head的所有Bone子骨骼,非通用命令"),
	#("    /---使用反馈---/",0,#(),"使用反馈,bug提交邮箱:690089735@qq.com"),
	#("没有你需要的功能?",0,#(),"点击上方'关于'菜单告诉我")
)

global filteredCommandIndex = #()

/* 命令分类 */
global commandType = for i = 1 to allCommand.count where allCommand[i][1][4] == " " collect #(allCommand[i][1],i)--i+15

/* 指令列表 */
global commandList = #()

--b = deepcopy(a)
--append
--deleteItem <array> <number>

/* 批处理单步 */
fn DoCommand CurrentFile CommandList orderBox printBox = --当前文件;命令集;指令盒;回显盒(回显盒必须是dotnet控件)
(
	tips = ""
	filenameStr = getFilenameFile CurrentFile
	if filenameStr == "" do filenameStr = "*文件为空*"
	
	printBox.appendtext ("\r\n/--- 文件 开始执行命令 ---/\r\n" + filenameStr +"\r\n")
	try
	(
		for i = 1 to CommandList.count do
		(	orderBox.selection = i
			printBox.appendtext ("第 " + i as string + " 行命令,结果: ")
			tips = try(execute CommandList[i] as string)catch()
			if tips == "undefined" then 
			(
				tips = "出错\r\n"
				printBox.appendtext (tips)
				if not ignoreERROR then 
				(
					printBox.appendtext ("/---终止.\r\n")
					throw""
				)
			)
			else printBox.appendtext  (tips + "\r\n")
		)
	)catch(printBox.appendtext  ( getCurrentException() + "\r\n/---命令执行终止---/\r\n"); throw())
)

/* 文件名过滤器 */
fn flieNameFliter keyString fileNameList =
(
	currentFileIndex = for i = 1 to fileNameList.count where findstring fileNameList[i] keyString != udefined collect i
	return currentFileIndex
)

/* 遍历目录下所有的max文件 */
fn walkDir fullpath = 
(	
	if fullpath[fullpath.count] != @"*" do if fullpath[fullpath.count] == @"\" then fullpath+=@"*" else fullpath+=@"\*"
	--items = #("↓↓found files...")
	items = #()
	paths = #()

	for i in getFiles(fullpath+@".max") do 
	(append items (getfilenamefile i)
	append paths i)
	
	for i in getDirectories(fullpath) do
	(
		result = walkDir i
		items += result[1]
		paths += result[2]
	)
	return #(items,paths)
)

/* 生成命令 */
fn CreateCommandString varCount commandString = -- varCount:传入变量数量 commandString:传入命令字符串的数组
(
	results = ""
	i = 0
	
	for s in commandString do
	(	i += 1
		results += s
		if i <= varCount do results += execute("creatorUIwindow.Var"+ i as string + ".text" )
		)
	return results
)

--> CreateCommandString 1 #("print(",")")
--> "print(1)"


/* 菜单变量,决定是否忽略错误 */
global ignoreERROR = true
menuIgnoreERROR = true

/* 声明菜单 */
rcMenu MainMenu 
(
	subMenu	"功能"
	(
		menuItem	MI_ignoreERROR	"是否忽略错误"	enabled:true  checked:menuIgnoreERROR
		menuItem	MI_RefreshModulesDrop	"保存流程配置"	enabled:true
		menuItem	MI_OpenModulesDir 		"加载流程配置"	enabled:true
	)
	on MI_ignoreERROR picked	do 
	(
		ignoreERROR = not ignoreERROR
		menuIgnoreERROR = not menuIgnoreERROR
	)
	
	subMenu	"关于"
	(
		
		menuItem	MI_Help 		"说明帮助"	enabled:true
		menuItem	MI_About 		"联系作者"	enabled:true
	)
	on MI_Help picked	do (print("MI_Help"))
	on MI_About  picked	do (print("MI_About"))
	subMenu	"快速指南"
	(
		menuItem	MI_Tip1		"1.第一大栏是所有命令,他的上方是过滤器,点击跳转;"
		menuItem	MI_Tip2 	"2.第二大栏是执行命令,这里的命令会按顺序执行;"
		menuItem	MI_Tip3 	"3.第三大栏是文件窗口,显示文件夹及子文件夹的文件,上方可以按名称过滤;"
		menuItem	MI_Tip4 	"4.可以选择指令盒里的命令来修改命令参数,参数会实时显示在下方属性框;"
		menuItem	MI_reDraw 	"重置视口绘制(如果发现执行后界面重画未还原,点此还原,此前出现此BUG但原因不明,尝试排除后留此按钮,以防万一)"	enabled:true
	)
	on MI_reDraw picked	do
		(enableSceneRedraw() 
		resumeEditing())
	
	on MainMenu open do ignoreERROR =true
)

/* 初始化 */
fn resetUI  creatorUIwindow=
(
	commandList = #()
	
	creatorUIwindow.TypeBox.items = #()
	creatorUIwindow.TypeBox.items = for c in commandType collect c[1]
	creatorUIwindow.TypeBox.selection = 1 
-- 	CommandItems = #()
-- 	for n in allCommand do append CommandItems n[1]
-- 	creatorUIwindow.CommandBox.items = CommandItems
	creatorUIwindow.CommandBox.items = for c in allCommand collect c[1]
	creatorUIwindow.CommandBox.selection = 1
	
	creatorUIwindow.OrderBox.items = creatorUIwindow.FilesBox.items = #()
	creatorUIwindow.PrintBox.text = "--/* 运行日志 */--\r\n"
	creatorUIwindow.CtrlButton.caption = ">>"
	creatorUIwindow.CtrlButton.toolTip = "将备选命令加入到执行命令盒中."
	creatorUIwindow.State.text = "就绪."
	creatorUIwindow.Var1.enabled = creatorUIwindow.Var2.enabled = creatorUIwindow.Var3.enabled = False
	creatorUIwindow.Var1.text = creatorUIwindow.Var2.text = creatorUIwindow.Var3.text = creatorUIwindow.filefilter.text = ""
	
	creatorUIwindow.OrderBox.items = #("打开现行文件")
	commandList = #(@"loadmaxfile fileName useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default")
	)
	
/* 	播放状态栏动画 */
	fn playStateAnimation TipsString window= --两个全局变量 textTips textTick
(
	window.state.text = ""
	textTips = TipsString
	if textTips.count == 0 do textTips = "功能未完善,暂不可用."
	textTick = 0
	window.TextAnimation.interval = (350/textTips.count)
	window.TextAnimation.active = true
)

/* 声明界面 */
rollout creatorUIwindow "批处理生成器v1.42.7" width:664 height:505
(
	Timer ButtonAnimation "ButtonAnimation" pos:[13,7] width:24 height:24 interval:85 active:false
	Timer TextAnimation "TextAnimation" pos:[13,26] width:24 height:24 interval:50 active:false
	listbox orderBox "执行命令盒" pos:[208,0] width:176 height:24
	button CtrlButton ">>" pos:[184,64] width:24 height:160 toolTip:"将备选命令加入到执行命令盒中."
	listbox CommandBox "" pos:[8,40] width:176 height:22
	edittext Var1 "参数1" pos:[14,356] width:360 height:21 enabled:false
	edittext Var2 "参数2" pos:[14,383] width:360 height:21 enabled:false
	edittext Var3 "参数3" pos:[14,410] width:360 height:21 enabled:false
	multiListBox FilesBox "" pos:[408,30] width:232 height:23
	dotNetControl printBox "System.Windows.Forms.Textbox" pos:[408,344] width:232 height:96
	button GoButton "GO!" pos:[640,64] width:24 height:160
	button ResetButton "<<" pos:[640,416] width:24 height:24 toolTip:"重置工具"
	button FilesButton "..." pos:[384,56] width:24 height:160 toolTip:"浏览文件夹"
	dropdownList TypeBox "备选命令盒" pos:[8,0] width:168 height:41
	edittext state "" pos:[0,464] width:656 height:20 enabled:true readOnly:true
	progressBar pb1 "进度:" pos:[8,446] width:648 height:16 enabled:true orient:#horizontal
	button saveLog ">>" pos:[640,344] width:24 height:72 toolTip:"保存日志"
	label lbl1 "?许铮" pos:[8,488] width:81 height:13
	edittext filefilter "文件浏览盒" pos:[408,8] width:224 height:20
	GroupBox grp1 "参数栏" pos:[8,337] width:379 height:99
	
	on creatorUIwindow open do --窗口创建完毕
	(
		PrintBox.Font = dotNetObject "System.Drawing.Font" "MS Sans Serif" 8 ((dotNetClass "System.Drawing.FontStyle").Regular)
		PrintBox.BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").FixedSingle
		PrintBox.BackColor = (dotNetClass "System.Drawing.Color").fromARGB (((colorMan.getColor #background) * 255)[1] as integer) (((colorMan.getColor #background) * 255)[2] as integer) (((colorMan.getColor #background) * 255)[3] as integer)
		PrintBox.ForeColor = (dotNetClass "System.Drawing.Color").fromARGB (((colorMan.getColor #text) * 255)[1] as integer) (((colorMan.getColor #text) * 255)[2] as integer) (((colorMan.getColor #text) * 255)[3] as integer)
		PrintBox.MultiLine = true
		PrintBox.WordWrap = true
		PrintBox.ReadOnly  = true
		PrintBox.ScrollBars = (dotNetClass "System.Windows.Forms.ScrollBars").Vertical
		
		resetUI creatorUIwindow
	)
	on ButtonAnimation tick do --按钮动画
	(
		if CtrlButton.caption == ">>" or CtrlButton.caption == "<<" then
		(
			ButtonAnimation.active = false
		)
		
		else
		(
			CtrlButton.caption += CtrlButton.caption
		)
	)
	on TextAnimation tick do --动态提示动画
	(
		textTick += 1
		if (textTick > textTips.count) then
		(
			textTips = ""
			TextAnimation.active = false
			)
		else
			(state.text += textTips[textTick])
	)
	on orderBox selected sel do --指令盒改变选择
	(
		CtrlButton.caption = "<"
		ButtonAnimation.active = true
		CtrlButton.toolTip = "将执行命令盒中的选中项移除."
	)
	on CtrlButton pressed do --控制按钮被按下
	(
		if CtrlButton.caption == ">>" then
		(
			if CommandBox.selection != 0 do(
				global pass = true
				index = CommandBox.selection
				count = allCommand[index][2]
			
				for i = 1 to count do execute ("if creatorUIwindow.Var"+i as string +".text == \"\" do pass = false")
			
				if pass then
				(
					x = OrderBox.selection+1
					tempitems = OrderBox.items
					insertItem allCommand[index][1] tempitems x
					OrderBox.items = tempitems
					insertItem (CreateCommandString count allCommand[index][3]) commandList x
					OrderBox.selection = x
				)
				else messagebox "必须补全参数!" beep:true
			)
		)
		else
		(
			if OrderBox.selection != 0 then
			(
				deleteItem commandList OrderBox.selection
				OrderBox.items = deleteItem OrderBox.items OrderBox.selection
				if OrderBox.selection == 0 do OrderBox.selection = OrderBox.items.count
			)
		)
	)
	on CommandBox selected sel do --备选命令盒改变选择
	(
		CtrlButton.caption = ">"
		ButtonAnimation.active = true
		CtrlButton.toolTip = "将备选命令加入到执行命令盒中."
		Var1.text = Var2.text = Var3.text = ""
		playStateAnimation allCommand[creatorUIwindow.CommandBox.selection][4] creatorUIwindow
		case allCommand[creatorUIwindow.CommandBox.selection][2] of
		(
			1:(
				creatorUIwindow.Var2.enabled = creatorUIwindow.Var3.enabled = False
				creatorUIwindow.Var1.enabled = true
				)
			2:(
				creatorUIwindow.Var3.enabled = False
				creatorUIwindow.Var1.enabled = creatorUIwindow.Var2.enabled = true
				)
			3:(
				
				creatorUIwindow.Var1.enabled = creatorUIwindow.Var2.enabled = creatorUIwindow.Var3.enabled = true
				)
			default: creatorUIwindow.Var1.enabled = creatorUIwindow.Var2.enabled = creatorUIwindow.Var3.enabled = False
			)
	)
	on Var1 changed text do --参数1被输入
		if text[text.count] =="\n" do Var1.text = substituteString text "\n" ""
	on Var2 changed text do --参数2被输入
		if text[text.count] =="\n" do Var2.text = substituteString text "\n" ""
	on Var3 changed text do --参数3被输入
		if text[text.count] =="\n" do Var3.text = substituteString text "\n" ""
	on FilesBox doubleClicked sel do  --文件盒被双击
	(
		if filefilter.text == "" then file = fileList[sel] else file = fileList[filteredCommandIndex[sel]] 
		playStateAnimation ("打开文件:"+ file) creatorUIwindow 
		loadMaxFile file
	)
	on FilesBox selected sel do --文件盒改变选择
		playStateAnimation ("共有 "+ FilesBox.items.count as string +" 个文件,选中了 " + ((FilesBox.selection as array).count as string) + " 个文件.") creatorUIwindow 
	on GoButton pressed do --执行按钮被按下
	(
		suspendEditing()
		disableSceneRedraw() 	
		if creatorUIwindow.FilesBox.selection.count > 0 then --有选中的文件
		(
			if filefilter.text == "" then
			(
				for index in FilesBox.selection do
				(
					if (keyboard.escPressed) do (printBox.appendtext  ("\r\n/---用户停止---/\r\n") exit )
					fileName = fileList[index]
					state.text = ("当前文件:" + fileName)
					try(DoCommand  fileName commandList creatorUIwindow.orderBox creatorUIwindow.printBox)catch()
				)
			)
			else
			(
				for index in FilesBox.selection do
				(
					if (keyboard.escPressed) do (printBox.appendtext  ("\r\n/---用户停止---/\r\n") exit )
					fileName = fileList[filteredCommandIndex[index]]
					state.text = ("当前文件:" + fileName)
					try(DoCommand  fileName commandList creatorUIwindow.orderBox creatorUIwindow.printBox)catch()
				)
			)
		)
		else
		(
			fileName = (maxfilepath + maxfilename)
			state.text = ("当前文件:" + fileName)
	-- 	playStateAnimation ("当前文件:" + fileName) creatorUIwindow 
			try(DoCommand  fileName commandList creatorUIwindow.orderBox creatorUIwindow.printBox)catch()
		)
		playStateAnimation "完成." creatorUIwindow
		enableSceneRedraw() 
		resumeEditing()
	)
	on ResetButton pressed do --重置按钮被按下
	(
		resetUI  creatorUIwindow
	)
	on FilesButton pressed do --文件按钮被按下
	(
		filepath = getSavePath caption:"资源目录"
		if filepath != undefined then
		(
			temp = walkDir filepath
			itemList = temp[1]
			fileList = temp[2]
			filefilter.text = ""
			FilesBox.items = itemList
			playStateAnimation ("共有 "+ FilesBox.items.count as string +" 个文件,选中了 " + ((FilesBox.selection as array).count as string) + " 个文件.") creatorUIwindow 
		)
	)
	on TypeBox selected sel do --命令分类盒被选中
	(
		index = commandType[sel][2]
		CommandBox.selection = CommandBox.items.count
		CommandBox.selection = index
	)
	on filefilter changed text do --文件过滤器被输入
	(
		if text == "" then FilesBox.items = itemList else
		(
			if text[text.count] =="\n" do text = filefilter.text = substituteString text "\n" ""
			filteredCommandIndex = flieNameFliter text itemList
			FilesBox.items = for i in filteredCommandIndex collect itemList[i]
			playStateAnimation ("共有 "+ FilesBox.items.count as string +" 个文件,选中了 " + ((FilesBox.selection as array).count as string) + " 个文件.") creatorUIwindow 
		)
	)
)
createdialog creatorUIwindow menu:MainMenu





/* 以下为笔记 */

--execute()

-- list1 = #()
-- i = 1
-- tips = "第" + i as string + "行:"
-- try(append list1 (tips + execute "1<2" as string))catch(append list1 (tips + " ERROR! " + "1<2"))
-- i = 2
-- try(append list1 (tips + execute "select a" as string))catch(append list1 (tips + " ERROR! " + "select a"))



-- fn runExecute index results ignoreERROR= --index:序号;results:接受结果的数组;stopERROR:遇到错误是否停止,true为停止
-- (
-- 	command = commandList[index]
-- 	tips = "第 " + index as string + " 行:"
-- 	try(
-- 		append results (tips + execute command as string)
-- 		)catch(
-- 		append results (tips + " ERROR! " + command)
-- 		if not ignoreERROR do break()
-- 		)
-- )



-- (
-- if (keyboard.escPressed) do ( throw "ESCAPE PRESSED" ) --插入这段代码以达到esc停止
-- 	
-- getCurrentException()  --在catch()中获取当前错误文本,在别的地方是undefined
-- try(1/0)catch(getCurrentException())
-- "-- 未知的系统异常"
-- 	
-- a = try(for i = 1 to 10 do  --throw的主要作用是触发容错捕获
-- for j = 1 to 10 do
-- (print(1)
-- throw("错误")))catch(getCurrentException())
-- a = "-- 运行时错误: 错误"
-- 	
-- try(for i = 1 to 10 do --适用我的情况的用法,用try包裹所有迭代,然后触发catch(),可以返回一个文本,注意throw在catch里不能加参数
-- for j = 1 to 10 do
-- try(print(1/0))catch(throw()))catch(getCurrentException())
-- )

-- rollout test "Test" --有自动换行功能的编辑框
--  (
--  	dotNetControl tb "system.windows.forms.textBox" height:80
--  	
--  	on test open do
--  	(
--  		tb.multiLine=true
--  		sb=dotNetClass "System.Windows.Forms.ScrollBars"
--  		tb.scrollBars=sb.vertical
--  		tb.acceptsReturn=true
--  		tb.acceptsTab=true
--  		tb.wordWrap=true
--  		tb.focus()
--  	)
--  )
--  createDialog test