/* 全部命令 */ --allcommand[1] = #(显示名称,变量数量,"命令var1var2","提示信息") n-2 = 序号
global BC_allCommand = #(
	#(@"    /---调试参数---/",0,"",@"调试类程序"),
	#(@"不报错",2,#("print("," + ",")"),@"print(参数1+参数2)"),
	#(@"报错",0,#("print(bucunzai)"),@"print(不存在)"),
	#(@"    /---文件操作---/",0,"",@"文件操作类程序"),
	#(@"打开指定文件",1,"loadmaxfile @\"var1\" useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default",@"打开一个文件,参数1为文件路径."),
	#(@"打开现行文件",0,"loadmaxfile BC_fileName useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default",@"打开正在执行的文件,不需要参数."),
	#(@"保存现行文件",1,"savemaxfile BC_fileName quiet:true saveAsVersion:var1",@"保存文件:参数1为保存的版本,如果输入的版本不支持,将保存为当前MAX版本."),
	#(@"另存现行文件",2,"makeDir @\"var2\" all:true; savemaxfile (var2 + \"\\\\\" + BC_fileName) quiet:true saveAsVersion:var1",@"另存文件:参数1为保存的版本,参数2为另存的目标文件夹,如果目录不存在,则会自动创建."),
	#(@"合并指定文件",1,"mergemaxfile @\"var1\" #skipDups  #useMergedMtlDups quiet:true missingExtFilesAction:#default missingDLLsAction:#default",@"合并一个文件,参数1为文件路径,注意,重名物体将不会被合并."),
	#(@"合并现行文件",0,"mergemaxfile BC_fileName #skipDups #useMergedMtlDups quiet:true missingExtFilesAction:#default missingDLLsAction:#default",@"合并正在执行的文件,注意:重名物体将不会被合并."),
	#(@"    /---全局操作---/",0,"","场景的全局操作"),
	#(@"仅显示Geometry",0,"not(hideByCategory.all(); hideByCategory.geometry = off)",@"设置按类型隐藏,仅在场景中显示Geometry."),
	#(@"    /---物体操作---/",0,"",@"物体操作类程序"),
	#(@"删除物体",1,"delete $'var1'",@"参数1为物体名(支持 * ? 等通配符)."),
	#(@"物体重命名",2,"$'var1'.name = \"var2\"",@"参数1为原物体名,参数2为新物体名."),
	#(@"设置子父物体绑定",2,"not ($'var1'.parent = $'var2') == undefined",@"参数1为子物体名,参数2为父物体名"),
	#(@"查找替换物体名",2,"for o in $'*var1*' do o.name = substituteString (o.name as string) \"var1\" \"var2\"",@"参数1要查找的字符串,参数2要替换的字符串,所有包含查找字符串的物体都会替换名称"),
	#(@"Biped设为体型模式",1,"$'var1'.controller.figureMode = true",@"参数1为物体名,必须是Biped骨骼,否则报错."),
	#(@"Biped关闭体型模式",1,"not $'var1'.controller.figureMode = false",@"参数1为物体名,必须是Biped骨骼,否则报错."),
	#(@"    /---修改器操作---/",0,"",@"修改器操作类程序"),
	#(@"为指定物体添加网格平滑",1,"temp = $'var1'; if temp.modifiers[meshsmooth] == undefined do addModifier temp BC_MeshSmooth",@"参数1为子物体名(默认的修改器迭代为0,开启视口迭代,级别为2),如果物体有网格平滑修改器,则不会再次添加."),
	#(@"设置指定物体的网格平滑:渲染迭代",2,"$'var1'.modifiers[meshsmooth].renderIterations = var2",@"必须输入2个参数:参数1为子物体名,参数2为渲染迭代级别"),
	#(@"删除一个物体的网格平滑",1,#("o = $'var1'; try(deleteModifier o o.modifiers[MeshSmooth])catch()"),@"必须输入1个参数:参数1为子物体名"),
	#(@"删除所有物体的网格平滑",0,"for o in Geometry do try(deleteModifier o o.modifiers[MeshSmooth])catch()",@"删除所有物体的网格平滑,不需要参数"),
	#(@"    /---动画操作---/",0,"",@"动画操作类程序"),
	#(@"设置时间范围",0,"",@""),
	#(@"设置当前时间",1,"slidertime = var1",@"参数1为第某帧"),
	#(@"启用记录动画",0,"animate on",@"启用记录动画,开启后所做的操作可被记录关键帧"),
	#(@"关闭记录动画",0,"animate off",@"关闭记录动画,关闭后所做的操作可被记录关键帧"),
	#(@"    /---定制功能---/",0,"",@"定制的功能集,每一项对应一组定制功能"),
	#(@"用box清理所有模型",0,"",@""),
	#(@"用box清理指定模型",1,"",@""),
	#(@"清理头发骨骼",0,"select $'Bip001 Head'...*;deselect $'Bip001 Head*';select (for i in selection where (classof i == BoneGeometry) collect i);max delete",@"删除Bip001 Head的所有Bone子骨骼,非通用命令,慎用"),
	#(@"    /---使用反馈---/",0,"",@"使用反馈,bug提交邮箱:690089735@qq.com"),
	#(@"没有你需要的功能?",0,"",@"点击上方'关于'菜单告诉我")
)


/* 需要实现的功能 */
/* √1.保存导入配置 */
/* √2.双击打开文件,有可能的话可以加入菜单 */
/* √3.命令可以插入到选择项下方 */
/* √4.优化核心代码 */
/* √5.文件选择器,选择数量,过滤显示 */
/* √6.Esc强制终止 */
/* √7.点击指令盒可以更改参数,这个需要更改整体框架,将参数也作为数组的一部分 */
/* √8.重布UI,所有盒子变宽,将回显窗口放到下面,只显示4行高度,点击查看所有按钮,保存为txt文件,然后用记事本打开,或者直接用记事本打开文本 */
/* √9.重布UI,加长备选命令盒,移动参数框到其他更宽阔的位置,或者到指令盒附近 */
/* 10.启用进度条 */
/* √11.让参数框支持拖放,而且不会响应回车键等换行符,可采用dotnet控件*/--加入到了printbox

/* 命令盒需求 */
/* 文件名加前缀*/
/* 文件名加后缀 */
/* 文件名替换 */
/* 文件批量命名 */
/* 设置渲染储存文件夹,按文件名创建子文件夹 */
/* 渲染序列 */
/* 追回贴图路径 */
/* 归档到文件夹 */
/* 统一归档贴图路径,根据MD5校验贴图文件是否相同 */

/* 解决保存加载问题,因为转移符导致的问题 */
-- a = substituteString "makeDir @\"var2\" all:true; savemaxfile (var2 + \"\\\\\" + BC_fileName) quiet:true saveAsVersion:var1" "\"" "\\\""
-- "makeDir @\"var2\" all:true; savemaxfile (var2 + \"\\\" + BC_fileName) quiet:true saveAsVersion:var1"
-- "makeDir @"var2" all:true; savemaxfile (var2 + "\\\\" + BC_fileName) quiet:true saveAsVersion:var1"
-- "makeDir @"var2" all:true; savemaxfile (var2 + "GGGG" + BC_fileName) quiet:true saveAsVersion:var1"
/* 难点研究 */
/* √研究2维文本数组的储存和加载 */

/* 体验优化,现在点击日志盒右边的按钮可以打开日志文本 */
/* 终于可以保存和加载配置了!!加载过来的配置还可以在选中指令盒的时候进行修改哦! */
/* 惊喜!经过运行测试,发现所有指令几乎都是瞬间完成,只有max文件的打开和保存耗时最长. */
/* 20190119更新:修复由于采用新核心导致的BUG */
/* 体验优化,现在可以通过双击文件浏览盒中的项目,来快速打开文件,以便检查. */
/* 重写核心代码,达到了更高的灵活度,现在可以通过选中,在实时更新的参数栏修改添加好的指令. */
/* 20190119更新:现在可以拖放文件或文件夹到回显窗口,回显窗口可以显示文件路径 */
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



try(DestroyDialog BatchCreatorUI)catch()

global BC_fileList = #()
global BC_itemList = #()
global BC_filteredCommandIndex = #()
global BC_fileName = ""--在运行时记录当前文件名

global Creator_command_Var = #()--这个可以用来记录变量结构为#(Var1,Var2,Var3),在运行时按顺序调用,以文本的形式储存加载.这样便于修改
-- 以后执行命令的格式为:exetud "for o in $* do o.name = substituteString (o.name as string)" + var1 + var2

global BC_textTips = ""
global BC_textTick = 0
global BC_progress = 0

/* 命令分类 */
global BC_commandType = for i = 1 to BC_allCommand.count where BC_allCommand[i][1][4] == " " collect #(BC_allCommand[i][1],i)--i+15

/* 指令列表 */
global BC_commandList = #()
global BC_variableList = #()

--b = deepcopy(a)
--append
--deleteItem <array> <number>

/* 批处理单步 */
fn DoCommand CurrentFile BC_commandList orderBox printBox = --当前文件;命令集;指令盒;回显盒(回显盒必须是dotnet控件)
(
	tips = ""
	filenameStr = getFilenameFile CurrentFile
	if filenameStr == "" do filenameStr = "*文件为空*"
	printBox.appendtext ("\r\n"+localTime)
	printBox.appendtext ("\r\n/--- 文件 开始执行命令 ---/\r\n" + filenameStr +"\r\n")
	try
	(
		for i = 1 to BC_commandList.count do
		(	orderBox.selection = i
			printBox.appendtext ("第 " + i as string + " 行命令,结果: ")
			tips = (try(execute BC_commandList[i])catch()) as string
			if tips == "undefined" then 
			(
				printBox.appendtext ("出错\r\n错误文件:" + CurrentFile + "\r\n")
				if not BC_ignoreERROR then
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

-- /* 生成命令 */
-- fn CreateCommandString varCount commandString = -- varCount:传入变量数量 commandString:传入命令字符串的数组
-- (
-- 	results = ""
-- 	i = 0
-- 	
-- 	for s in commandString do
-- 	(	i += 1
-- 		results += s
-- 		if i <= varCount do results += execute("BatchCreatorUI.Var"+ i as string + ".text" )
-- 		)
-- 	return results
-- )

/* 新生成器结构 */ --运行时调用一次
fn generateOrderList commands vars = --需要传入所有命令和所有变量,结构如右:generate #("print var1","print var1 + var2","print 'ok'") #(#("1"),#("1","2"),#(""))
(
	if vars.count == 0 then for cmd in commands collect cmd
	else
	(
		for i = 1 to commands.count collect
		(
			cmd = commands[i]
			var = vars[i]
			if var.count > 0 do for j = 1 to var.count do (cmd = substituteString cmd ("var" + j as string) var[j])
			cmd
		)
	)
)

--> CreateCommandString 1 #("print(",")")
--> "print(1)"
/* 加载和保存文件 */
fn save2file filename C V P= --保存文件,命令,变量,项目
(
	c;v;p
	tempfile = (getdir #temp + @"\tempSAVE.txt")
-- 	deleteFile tempfile
	
	try(
		save_file = createfile tempfile
-- 		format "%\r\n%\r\n%" C V P to:save_file
		format "%" C to:save_file
		format "%" V to:save_file
		format "%" P to:save_file
		close save_file
		encryptFile tempfile filename 6900897356
		return true
	)catch(return false)
)
/* 加载和保存文件 */
fn loadfile2 filename = --加载文件
(
-- 	a = openEncryptedFile "C:\Users\Administrator\Desktop\新建文本文档 (6).txt" 5476557
	load_file = openEncryptedFile filename 6900897356
	if load_file != undefined then
	(
-- 		result = #(readline load_file, readline load_file)
		result = #(readValue load_file, readValue load_file,readValue load_file)
		close load_file
		return result
	)
)

/* 菜单变量,决定是否忽略错误 */
global BC_ignoreERROR = true
BC_menuIgnoreERROR = true

/* 声明菜单 */
rcMenu MainMenu 
(
	subMenu	"功能"
	(
		menuItem	MI_ignoreERROR "是否忽略错误"	enabled:true  checked:BC_menuIgnoreERROR
		menuItem	MI_SaveFile "保存流程配置"	enabled:true
		menuItem	MI_LoadFile "加载流程配置"	enabled:true
	)
	on MI_ignoreERROR picked	do 
	(
		BC_ignoreERROR = not BC_ignoreERROR
		BC_menuIgnoreERROR = not BC_menuIgnoreERROR
	)
	on MI_SaveFile picked do
	(
		filename = getsavefilename caption:"filename" types:"mbf(*.mbf)|*.mbf"
		if filename != undefined do save2file filename BC_commandList BC_variableList BatchCreatorUI.OrderBox.items
	)
		on MI_LoadFile picked do
	(
		filename = getopenfilename caption:"filename" types:"mbf(*.mbf)|*.mbf"
		if filename != undefined do temp = loadfile2 filename
		BC_commandList = temp[1]
		BC_variableList = temp[2]
		BatchCreatorUI.OrderBox.items = temp[3]
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
	
	on MainMenu open do BC_ignoreERROR =true
)

/* 初始化 */
fn resetUI  BatchCreatorUI=
(
	BC_commandList = #()
	
	BatchCreatorUI.TypeBox.items = #()
	BatchCreatorUI.TypeBox.items = for c in BC_commandType collect c[1]
	BatchCreatorUI.TypeBox.selection = 1 
-- 	CommandItems = #()
-- 	for n in BC_allCommand do append CommandItems n[1]
-- 	BatchCreatorUI.CommandBox.items = CommandItems
	BatchCreatorUI.CommandBox.items = for c in BC_allCommand collect c[1]
	BatchCreatorUI.CommandBox.selection = 1
	
	BatchCreatorUI.OrderBox.items = BatchCreatorUI.FilesBox.items = #()
	BatchCreatorUI.PrintBox.text = "--/* 运行日志 */--\r\n"
	BatchCreatorUI.CtrlButton.caption = ">>"
	BatchCreatorUI.CtrlButton.toolTip = "将备选命令加入到执行命令盒中."
	BatchCreatorUI.State.text = "就绪."
	BatchCreatorUI.UpVar.enabled = BatchCreatorUI.VarTitle1.enabled = BatchCreatorUI.VarTitle2.enabled = BatchCreatorUI.VarTitle3.enabled = BatchCreatorUI.Var1.enabled = BatchCreatorUI.Var2.enabled = BatchCreatorUI.Var3.enabled = False
	BatchCreatorUI.Var1.text = BatchCreatorUI.Var2.text = BatchCreatorUI.Var3.text = BatchCreatorUI.filefilter.text = ""
	
	BatchCreatorUI.OrderBox.items = #("打开现行文件")
	BC_commandList = #("loadmaxfile BC_fileName useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default")
	BC_variableList = #(#())
	)
	
/* 	播放状态栏动画 */
	fn playStateAnimation TipsString window= --两个全局变量 BC_textTips BC_textTick
(
	window.state.text = ""
	BC_textTips = TipsString
	if BC_textTips.count == 0 do BC_textTips = "功能未完善,暂不可用."
	BC_textTick = 0
	window.TextAnimation.interval = (350/BC_textTips.count)
	window.TextAnimation.active = true
)

/* 声明界面 */
rollout BatchCreatorUI "批处理引擎v1.42.5 Bata" width:664 height:505
(
	Timer ButtonAnimation "ButtonAnimation" pos:[13,7] width:24 height:24 interval:85 active:false
	Timer TextAnimation "TextAnimation" pos:[13,26] width:24 height:24 interval:50 active:false
	listbox orderBox "指令盒" pos:[208,0] width:176 height:24
	button CtrlButton ">>" pos:[184,64] width:24 height:160 toolTip:"将命令盒中选中的命令加入到指令盒中."
	listbox CommandBox "" pos:[8,40] width:176 height:22
	dotNetControl Var1 "System.Windows.Forms.Textbox" pos:[51,356] width:304 height:24
	dotNetControl Var2 "System.Windows.Forms.Textbox" pos:[51,384] width:304 height:24
	dotNetControl Var3 "System.Windows.Forms.Textbox" pos:[51,410] width:304 height:24
	multiListBox FilesBox "" pos:[408,30] width:232 height:23
	dotNetControl printBox "System.Windows.Forms.Textbox" pos:[408,344] width:232 height:96
	button GoButton "GO!" pos:[640,64] width:24 height:160
	button ClearButton "<<" pos:[640,416] width:24 height:24 toolTip:"清空日志"
	button FilesButton "..." pos:[384,56] width:24 height:160 toolTip:"浏览文件夹"
	dropdownList TypeBox "命令盒" pos:[8,0] width:168 height:41
	edittext state "" pos:[0,464] width:656 height:20 enabled:true readOnly:true
	progressBar pb1 "进度:" pos:[8,446] width:648 height:16 enabled:true orient:#horizontal
	button saveLog ">>" pos:[640,344] width:24 height:72 toolTip:"保存并打开日志"
	label lbl1 "?许铮" pos:[8,488] width:81 height:13
	edittext filefilter "文件盒" pos:[408,8] width:224 height:20
	GroupBox grp1 "参数栏" pos:[8,337] width:379 height:99
	button UpVar "↑" pos:[362,352] width:20 height:80 enabled:false toolTip:"更新指令参数"
	label VarTitle1 "参数1" pos:[16,360] width:32 height:16
	
	label VarTitle2 "参数2" pos:[16,386] width:32 height:16
	label VarTitle3 "参数3" pos:[16,412] width:32 height:16
	
-- 	on Var1 changed text do --参数1被输入
-- 		if text[text.count] =="\n" do Var1.text = substituteString text "\n" ""
-- 	on Var2 changed text do --参数2被输入
-- 		if text[text.count] =="\n" do Var2.text = substituteString text "\n" ""
-- 	on Var3 changed text do --参数3被输入
-- 		if text[text.count] =="\n" do Var3.text = substituteString text "\n" ""

	on BatchCreatorUI open do --窗口创建完毕
	(
		PrintBox.Font = dotNetObject "System.Drawing.Font" "MS Sans Serif" 8 ((dotNetClass "System.Drawing.FontStyle").Regular)
		PrintBox.BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").FixedSingle
		PrintBox.BackColor = (dotNetClass "System.Drawing.Color").fromARGB (((colorMan.getColor #background) * 255)[1] as integer) (((colorMan.getColor #background) * 255)[2] as integer) (((colorMan.getColor #background) * 255)[3] as integer)
		PrintBox.ForeColor = (dotNetClass "System.Drawing.Color").fromARGB (((colorMan.getColor #text) * 255)[1] as integer) (((colorMan.getColor #text) * 255)[2] as integer) (((colorMan.getColor #text) * 255)[3] as integer)
		PrintBox.WordWrap = PrintBox.ReadOnly  = PrintBox.MultiLine = true
		PrintBox.ScrollBars = (dotNetClass "System.Windows.Forms.ScrollBars").Vertical
		
		Var1.allowDrop = Var2.allowDrop = Var3.allowDrop = true
		
		resetUI BatchCreatorUI
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
		BC_textTick += 1
		if (BC_textTick > BC_textTips.count) then
		(
			BC_textTips = ""
			TextAnimation.active = false
		)
		else
			(state.text += BC_textTips[BC_textTick])
	)
	on orderBox selected sel do --指令盒改变选择
	(
		Var1.text = Var2.text = Var3.text = ""
		CtrlButton.caption = "<"
		ButtonAnimation.active = true
		CtrlButton.toolTip = "移除指令盒中的选中项."
		upvar.enabled = true
		x = orderBox.selection
		count = BC_variableList[x].count
		case BC_variableList[x].count of
		(
			1:(
				VarTitle2.enabled = Var2.enabled = VarTitle3.enabled = Var3.enabled = False
				VarTitle1.enabled = Var1.enabled = true
				)
			2:(
				VarTitle3.enabled = Var3.enabled = False
				VarTitle1.enabled = VarTitle2.enabled = Var1.enabled = Var2.enabled = true
				)
			3:(
				VarTitle1.enabled = VarTitle2.enabled = VarTitle3.enabled = Var1.enabled =Var2.enabled = Var3.enabled = true
				)
			default: VarTitle1.enabled = VarTitle2.enabled = VarTitle3.enabled = Var1.enabled = Var2.enabled = Var3.enabled = False
		)
		for i = 1 to count do execute ("BatchCreatorUI.Var" + i as string +".text = BC_variableList["+ x as string +"][" + i as string + "]")
	)
	on CtrlButton pressed do --控制按钮被按下
	(
		if CtrlButton.caption == ">>" then
		(
			if CommandBox.selection != 0 do(
				s = 0
				pass = true
				index = CommandBox.selection
				count = BC_allCommand[index][2]
				temp = for i in #(var1.text,var2.text,var3.text) where i != "" collect i
				if temp.count >= count then
				(
					x = OrderBox.selection+1
					insertItem temp BC_variableList  x
					tempitems = OrderBox.items
					insertItem BC_allCommand[index][1] tempitems x
					OrderBox.items = tempitems
					insertItem BC_allCommand[index][3] BC_commandList x
					OrderBox.selection = x
				)
				else messagebox "必须补全参数!" beep:true
			)
		)
		else
		(
			if OrderBox.selection != 0 then
			(
				x = OrderBox.selection
				deleteItem BC_commandList x
				deleteItem BC_variableList x
				OrderBox.items = deleteItem OrderBox.items x
				OrderBox.selection = x-1
				if OrderBox.selection == 0 and OrderBox.items.count > 0 do OrderBox.selection = 1
			)
		)
	)
	on CommandBox selected sel do --备选命令盒改变选择
	(
		CtrlButton.caption = ">"
		ButtonAnimation.active = true
		CtrlButton.toolTip = "将命令盒中选中的命令加入到指令盒中."
		Var1.text = Var2.text = Var3.text = ""
		upvar.enabled = false
		playStateAnimation BC_allCommand[BatchCreatorUI.CommandBox.selection][4] BatchCreatorUI
		case BC_allCommand[BatchCreatorUI.CommandBox.selection][2] of
		(
			1:(
				VarTitle2.enabled = Var2.enabled = VarTitle3.enabled = Var3.enabled = False
				VarTitle1.enabled = Var1.enabled = true
				)
			2:(
				VarTitle3.enabled = Var3.enabled = False
				VarTitle1.enabled = VarTitle2.enabled = Var1.enabled = Var2.enabled = true
				)
			3:(
				VarTitle1.enabled = VarTitle2.enabled = VarTitle3.enabled = Var1.enabled =Var2.enabled = Var3.enabled = true
				)
			default: VarTitle1.enabled = VarTitle2.enabled = VarTitle3.enabled = Var1.enabled = Var2.enabled = Var3.enabled = False
			)
	)
	on Var1 DragOver s e do
	(
		e.Effect = if e.data.ContainsFileDropList() then e.Effect.Move else e.Effect.None
	)
	on Var1 DragDrop s e do
	(
		if e.data.ContainsFileDropList() do Var1.text = (e.data.GetFileDropList()).item[0]
	)
	on Var2 DragOver s e do
	(
		e.Effect = if e.data.ContainsFileDropList() then e.Effect.Move else e.Effect.None
	)
	on Var2 DragDrop s e do
	(
		if e.data.ContainsFileDropList() do Var2.text = (e.data.GetFileDropList()).item[0]
	)
	on Var3 DragOver s e do
	(
		e.Effect = if e.data.ContainsFileDropList() then e.Effect.Move else e.Effect.None
	)
	on Var3 DragDrop s e do
	(
		if e.data.ContainsFileDropList() do Var3.text = (e.data.GetFileDropList()).item[0]
	)
	on FilesBox doubleClicked sel do  --文件盒被双击
	(
		if filefilter.text == "" then file = BC_fileList[sel] else file = BC_fileList[BC_filteredCommandIndex[sel]] 
		playStateAnimation ("打开文件:"+ file) BatchCreatorUI 
		loadMaxFile file
	)
	on FilesBox selected sel do --文件盒改变选择
		playStateAnimation ("共有 "+ FilesBox.items.count as string +" 个文件,选中了 " + ((FilesBox.selection as array).count as string) + " 个文件.") BatchCreatorUI
	on GoButton pressed do --执行按钮被按下
	(
		suspendEditing()
		disableSceneRedraw() 
	-- 		创建需要的变量
		global BC_MeshSmooth = (meshsmooth iterations:0 smoothness:0.0 useRenderIterations:true renderIterations:1 useRenderSmoothness:true renderSmoothness:1.0)
		
		PrintBox.text = "--/* 运行日志 */--\r\n"
		OrderList = generateOrderList BC_commandList BC_variableList
		try(
			if ((BatchCreatorUI.FilesBox.selection)as Array).count > 0 then --有选中的文件
			(
				if filefilter.text == "" then
				(
					for index in FilesBox.selection do
					(
						if (keyboard.escPressed) do (printBox.appendtext ("\r\n/---用户停止---/\r\n") exit )
						BC_fileName = BC_fileList[index]
						state.text = ("当前文件:" + BC_fileName)
						DoCommand  BC_fileName OrderList BatchCreatorUI.orderBox BatchCreatorUI.printBox
					)
				)
				else
				(
					for index in FilesBox.selection do
					(
						if (keyboard.escPressed) do (printBox.appendtext  ("\r\n/---用户停止---/\r\n") exit )
						BC_fileName = BC_fileList[BC_filteredCommandIndex[index]]
						state.text = ("当前文件:" + BC_fileName)
						DoCommand  BC_fileName OrderList BatchCreatorUI.orderBox BatchCreatorUI.printBox
					)
				)
			)
			else
			(
				BC_fileName = (maxfilepath + maxfilename)
				state.text = ("当前文件:" + BC_fileName)
		-- 	playStateAnimation ("当前文件:" + fileName) BatchCreatorUI 
				DoCommand  BC_fileName OrderList BatchCreatorUI.orderBox BatchCreatorUI.printBox
			)
		)catch()
		printbox.appendtext "\r\n\r\n完成."
		playStateAnimation "完成." BatchCreatorUI
		enableSceneRedraw() 
		resumeEditing()
	)
	on ClearButton pressed do --重置按钮被按下
	(
		PrintBox.text = "--/* 运行日志 */--\r\n"
	)
	on FilesButton pressed do --文件按钮被按下
	(
		filepath = getSavePath caption:"资源目录"
		if filepath != undefined then
		(
			temp = walkDir filepath
			BC_itemList = temp[1]
			BC_fileList = temp[2]
			filefilter.text = ""
			FilesBox.items = BC_itemList
			playStateAnimation ("共有 "+ FilesBox.items.count as string +" 个文件,选中了 " + ((FilesBox.selection as array).count as string) + " 个文件.") BatchCreatorUI 
		)
	)
	on TypeBox selected sel do --命令分类盒被选中
	(
		index = BC_commandType[sel][2]
		CommandBox.selection = CommandBox.items.count
		CommandBox.selection = index
	)
	on saveLog pressed do --保存日志并打开
	(
		LogFilePath = @"D:/TaskLog.txt"
		deleteFile LogFilePath
		logFile = createFile LogFilePath
		close logFile
		setINISetting LogFilePath "任务日志" "内容" printbox.text
		ShellLaunch "notepad.exe" LogFilePath
	)
	on filefilter changed text do --文件过滤器被输入
	(
		FilesBox.selection = #{}
		if text == "" then FilesBox.items = BC_itemList else
		(
			if text[text.count] =="\n" do text = filefilter.text = substituteString text "\n" ""
			BC_filteredCommandIndex = flieNameFliter text BC_itemList
			FilesBox.items = for i in BC_filteredCommandIndex collect BC_itemList[i]
			playStateAnimation ("共有 "+ FilesBox.items.count as string +" 个文件,选中了 " + ((FilesBox.selection as array).count as string) + " 个文件.") BatchCreatorUI 
		)
	)
	on UpVar pressed do
	(
			index = OrderBox.selection
					count = BC_allCommand[index][2]
					for i = 1 to count do execute ("BatchCreatorUI.Var"+i as string +".text = BC_variableList[index][" + i as string + "]")
		)(
			index = OrderBox.selection
			count = BC_variableList[index].count
			for i = 1 to count do execute (" BC_variableList[index][" + i as string + "] = BatchCreatorUI.Var" + i as string +".text")
	)
)
createdialog BatchCreatorUI menu:MainMenu
clearlistener()



/* 以下为笔记 */

--execute()

-- list1 = #()
-- i = 1
-- tips = "第" + i as string + "行:"
-- try(append list1 (tips + execute "1<2" as string))catch(append list1 (tips + " ERROR! " + "1<2"))
-- i = 2
-- try(append list1 (tips + execute "select a" as string))catch(append list1 (tips + " ERROR! " + "select a"))



-- fn runExecute index results BC_ignoreERROR= --index:序号;results:接受结果的数组;stopERROR:遇到错误是否停止,true为停止
-- (
-- 	command = BC_commandList[index]
-- 	tips = "第 " + index as string + " 行:"
-- 	try(
-- 		append results (tips + execute command as string)
-- 		)catch(
-- 		append results (tips + " ERROR! " + command)
-- 		if not BC_ignoreERROR do break()
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