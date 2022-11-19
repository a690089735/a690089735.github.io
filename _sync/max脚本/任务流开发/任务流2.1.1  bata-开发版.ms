/* 全部命令 */ global BC_allCommand = #(--allcommand[1] = #(显示名称,变量数量,"命令var1var2","提示信息") n-1 = 序号
	#(@"    /---调试参数---/",0,"",@"调试类程序"),
	#(@"不报错",2,#("print("," + ",")"),@"print(参数1+参数2)"),
	#(@"报错",0,#("print(bucunzai)"),@"print(不存在)"),
	#(@"    /---文件操作---/",0,"",@"文件操作类程序"),
	#(@"现行文件:打开",0,"loadmaxfile BC_fileName useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default unsupportedRenderEffectAction:#default",@"打开正在执行的文件,不需要参数."),
	#(@"现行文件:合并",0,"mergemaxfile BC_fileName #skipDups #useMergedMtlDups quiet:true missingExtFilesAction:#default missingDLLsAction:#default",@"合并正在执行的文件,注意:重名物体将不会被合并."),
	#(@"现行文件:保存",1,"savemaxfile BC_fileName quiet:true saveAsVersion:var1",@"保存文件:参数1为保存的版本,如果输入的版本不支持,将保存为当前MAX版本."),
	#(@"现行文件:另存",2,"makeDir @\"var2\" all:true; savemaxfile (@\"var2\" + \"\\\\\" + maxfilename) quiet:true saveAsVersion:var1",@"另存文件:参数1为保存的版本,参数2为另存的目标文件夹,如果目录不存在,则会自动创建."),
	#(@"指定文件:打开",1,"loadmaxfile @\"var1\" useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default",@"打开一个文件,参数1为文件路径."),
	#(@"指定文件:补充合并",1,"mergemaxfile @\"var1\" #skipDups  #useMergedMtlDups #neverReparent  quiet:true missingExtFilesAction:#default missingDLLsAction:#default",@"合并一个文件,参数1为文件路径,注意,跳过重名物体不合并,合并的物体使用合并的材质."),
	#(@"指定文件:添加合并",1,"mergemaxfile @\"var1\" #AutoRenameDups  #renameMtlDups  #neverReparent  quiet:true missingExtFilesAction:#default missingDLLsAction:#default",@"合并一个文件,参数1为文件路径,注意,自动重命名重名物体,自动重命名重名材质."),
	#(@"    /---物体操作---/",0,"",@"物体操作类程序"),
	#(@"物体:选择全部物体",0,"select objects",@"选择任何类型的全部物体."),
	#(@"物体:删除",1,"delete $'var1'",@"参数1为物体名(支持 * ? 等通配符)."),
	#(@"物体:重命名",2,"$'var1'.name = \"var2\"",@"参数1为原物体名,参数2为新物体名."),
	#(@"物体:查找替换物体名",2,"for o in $'*var1*' do o.name = substituteString (o.name as string) \"var1\" \"var2\"",@"参数1要查找的字符串,参数2要替换的字符串,所有包含查找字符串的物体都会替换名称"),
	#(@"绑定:子父物体",2,"not ($'var1'.parent = $'var2') == undefined",@"参数1为子物体名,参数2为父物体名"),
	#(@"Biped:开启体型模式",1,"$'var1'.controller.figureMode = true",@"参数1为物体名,必须是Biped骨骼,否则报错."),
	#(@"Biped:关闭体型模式",1,"not ($'var1'.controller.figureMode = false)",@"参数1为物体名,必须是Biped骨骼,否则报错."),
	#(@"Biped:导入Bip动作文件",2,"biped.loadBipFile $'var1'.controller @\"var2\"  #matchFileStruct #loadMaxObjects",@"参数1为Bip物体名,建议使用质心的物体名,参数2为Bip动作文件路径."),
	#(@"    /---修改器操作---/",0,"",@"修改器操作类程序"),
	#(@"网格平滑:为指定物体添加",1,"temp = $'var1'; if temp.modifiers[meshsmooth] == undefined do addModifier temp BC_MeshSmooth",@"参数1为子物体名(默认的修改器迭代为0,开启视口迭代,级别为2),如果物体有网格平滑修改器,则不会再次添加."),
	#(@"网格平滑:设置渲染迭代",2,"m = $'var1'.modifiers[meshsmooth]; if m != undefined do m.renderIterations = var2",@"必须输入2个参数:参数1为子物体名,参数2为渲染迭代级别"),
	#(@"网格平滑:从指定物体移除",1,#("o = $'var1'; try(deleteModifier o o.modifiers[MeshSmooth])catch()"),@"参数1为子物体名,移除指定物体的网格平滑"),
	#(@"网格平滑:从所有物体顶级移除",0,"for o in Geometry do if classof o.modifiers[1] == MeshSmooth do deleteModifier o o.modifiers[1] ",@"删除所有物体的顶级网格平滑,不需要参数,只删除顶级修改器."),
	#(@"网格平滑:从所有物体全部移除",0,"for o in Geometry do for i = o.modifiers.count to 1 by -1 do if classof o.modifiers[i] == MeshSmooth do deleteModifier o o.modifiers[i]",@"删除所有物体的所有网格平滑,不需要参数"),
	#(@"蒙皮:导入权重",1,#(""),@""),--参数1为权重文件路径,只有相同模型及骨骼架构才有意义
-- 	#(@"添加修改器:从内存粘贴到物体",1,"",@"参数1为物体名,将内存中的修改器粘贴到物体(在上方菜单中将修改器复制到内存中)"),
	#(@"    /---动画操作---/",0,"",@"动画操作类程序"),
	#(@"时间:重缩放时间",3,"select objects; scaleTime selection var1 var2 (abs(var3/(var2-var1) as float))",@"参数1是原起始时间,参数2是原结束时间,参数3是想要达到的新结束时间."),
	#(@"时间:设置时间范围",0,"",@""),
	#(@"时间:设置时间滑块",1,"slidertime = var1",@"参数1为时间滑块所在帧数"),
	#(@"关键帧:开启自动关键帧",0,"animate on",@"启用记录动画,开启后所做的操作可被记录关键帧"),
	#(@"关键帧:关闭自动关键帧",0,"animate off",@"关闭记录动画,关闭后所做的操作不会记录关键帧"),
	#(@"    /---全局操作---/",0,"","场景的全局操作"),
	#(@"隐藏:仅显示Geometry",0,"not(hideByCategory.all(); hideByCategory.geometry = off)",@"设置按类型隐藏,仅在场景中显示Geometry."),
	#(@"命令:执行maxscript命令",1,"var1",@"参数1 为需要执行的maxscript命令文本"),
-- 	#(@"vray沉默",0,"try(setVRaySilentMode())catch()",@"如果运行任务流时总被vray警告打断,请在所有命令的最上方添加此行."),
	#(@"    /---定制功能---/",0,"",@"定制的功能集,每一项对应一组定制功能"),
	#(@"用box清理所有模型",0,"",@""),
	#(@"用box清理指定模型",1,"",@""),
	#(@"选中head下的所有子物体",0,"hideByCategory.helpers = on; select $'Bip001 Head'...*;deselect $'Bip001 Head*';",@"选中Bip001 Head的所有子对象,非通用命令,慎用"),
	#(@"过滤选中物体,只保留骨骼",0,"select (for i in selection where (classof i == BoneGeometry) collect i)",@"过滤选中物体,只保留骨骼"),
	#(@"删除选中物体",0,"max delete",@"删除选中物体"),
	#(@"删除第二个左臂",0,"delete $'Bip*1 L Forearm*'[2]",@"删除第二个左臂,用于清理多余的重名biped,慎用"),
	#(@"    /---使用反馈---/",0,"",@"使用反馈,bug提交邮箱:690089735@qq.com"),
	#(@"没有你需要的功能?",0,"",@"打开上方 '关于' 菜单,点击 '联系作者' ,留言告诉我.")
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

/* 体验优化,在菜单中增加了一个设置文件盒切换自动保存的选项,设置开启后用文件盒打开任意文件会自动保存现有文件,默认开启 */
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

/* 指令集加码 */
fn markup C = 
(
	tempC = deepcopy C
	for i = 1 to tempC.count do
		(--print tempC[i]
			tempC[i] = substituteString tempC[i] ("\"") "\\\""
 			tempC[i] = substituteString tempC[i] ("\\") "\\\\\\"
			tempC[i] = substituteString tempC[i] ("\\\\\\\\") "\\\\\\\\\\"
		)
	return tempC
)

/* 指令集减码 */
fn markdownC C = 
(
	tempC = C
	for i = 1 to tempC.count do
		(print tempC[i]
			tempC[i] = substituteString tempC[i] ("\\\"") "\""
		)
	return tempC
)

/* 保存文件 */
fn save2file filename C V P= --保存文件,命令,变量,项目
(
	deleteFile filename
-- 	format "%" C;format "%" V;format "%" P
-- 	print "kaishi"
	tempfile = (getdir #autoback + @"\tempSAVE.temp")
	deleteFile tempfile
	
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
/* 加载文件 */
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

rollout commandUI "命令面板" width:313 height:496
(
	button CtrlButton ">>" pos:[286,64] width:24 height:160 toolTip:"将命令盒中选中的命令加入到指令盒中."
	listbox CommandBox "" pos:[8,44] width:273 height:25
	dotNetControl Var1 "System.Windows.Forms.Textbox" pos:[51,415] width:226 height:20
	dotNetControl Var2 "System.Windows.Forms.Textbox" pos:[51,439] width:226 height:20
	dotNetControl Var3 "System.Windows.Forms.Textbox" pos:[51,463] width:226 height:20
	dropdownList TypeBox "命令盒过滤器" pos:[8,2] width:275 height:41
	GroupBox grp1 "参数栏" pos:[8,396] width:275 height:94
	label VarTitle1 "参数1" pos:[16,415] width:32 height:16
	label VarTitle2 "参数2" pos:[16,440] width:32 height:16
	label VarTitle3 "参数3" pos:[16,464] width:32 height:16


	on commandUI open do --窗口创建完毕
	(
		PrintBox.Font = dotNetObject "System.Drawing.Font" "MS Sans Serif" 8 ((dotNetClass "System.Drawing.FontStyle").Regular)
		PrintBox.BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").FixedSingle
		PrintBox.BackColor = (dotNetClass "System.Drawing.Color").fromARGB (((colorMan.getColor #background) * 255)[1] as integer) (((colorMan.getColor #background) * 255)[2] as integer) (((colorMan.getColor #background) * 255)[3] as integer)
		PrintBox.ForeColor = (dotNetClass "System.Drawing.Color").fromARGB (((colorMan.getColor #text) * 255)[1] as integer) (((colorMan.getColor #text) * 255)[2] as integer) (((colorMan.getColor #text) * 255)[3] as integer)
		PrintBox.WordWrap = PrintBox.ReadOnly  = PrintBox.MultiLine = true
		PrintBox.ScrollBars = (dotNetClass "System.Windows.Forms.ScrollBars").Vertical
		
		Var1.allowDrop = Var2.allowDrop = Var3.allowDrop = true
			
		TypeBox.items = #()
		TypeBox.items = for c in BC_commandType collect c[1]
		TypeBox.selection = 1 
		CommandBox.items = for c in BC_allCommand collect c[1]
		CommandBox.selection = 1
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
	on TypeBox selected sel do --命令分类盒被选中
	(
		index = BC_commandType[sel][2]
		CommandBox.selection = CommandBox.items.count
		CommandBox.selection = index
	)
)

rollout filesboxUI "目录面板" width:324 height:496
(
	multiListBox FilesBox "目录:" pos:[7,30] width:310 height:23
	button FilesButton "..." pos:[6,3] width:24 height:22 toolTip:"浏览目录"

	on FilesBox selected sel do --文件盒改变选择
	(
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
			playStateAnimation ("共有 "+ FilesBox.items.count as string +" 个文件,选中了 " + ((FilesBox.selection as array).count as string) + " 个文件.双击文件盒中的文件可快速打开检查.") BatchCreatorUI
		)
	)
)

/* 菜单变量,决定是否忽略错误 */
global BC_ignoreERROR = true
BC_menuIgnoreERROR = true
global BC_AutoSave = true
BC_menuAutoSave = true
/* 声明菜单 */
rcMenu MainMenu 
(
	subMenu	"功能"
	(
		menuItem	MI_ignoreERROR "忽略运行时错误"	enabled:true  checked:BC_menuIgnoreERROR
		menuItem	MI_AutoSave "文件盒切换自动保存"	enabled:true  checked:BC_menuAutoSave
		menuItem	MI_SaveFile "保存任务流配置"	enabled:true
		menuItem	MI_LoadFile "加载任务流配置"	enabled:true
	)
	on MI_ignoreERROR picked	do 
	(
		BC_ignoreERROR = not BC_ignoreERROR
		BC_menuIgnoreERROR = not BC_menuIgnoreERROR
	)
	on MI_AutoSave picked	do 
	(
		BC_AutoSave = not BC_AutoSave
		BC_menuAutoSave = not BC_menuAutoSave
	)
	on MI_SaveFile picked do
	(
		filename = getsavefilename caption:"保存任务流配置" types:"mbf(*.mbf)|*.mbf" historyCategory:"mPresets"
		if filename != undefined do save2file filename (markup BC_commandList) BC_variableList BatchCreatorUI.OrderBox.items
	)
		on MI_LoadFile picked do
	(
		filename = getopenfilename caption:"加载任务流配置" types:"mbf(*.mbf)|*.mbf" historyCategory:"mPresets"
		if filename != undefined do 
		(
			tl = BC_commandList
			tv = BC_variableList
			ti = BatchCreatorUI.OrderBox.items
			try(
				temp = loadfile2 filename
				BC_commandList = markdownC temp[1]
				BC_variableList = temp[2]
				BatchCreatorUI.OrderBox.items = temp[3]
				)
			catch(
				messageBox "加载出错,mbf文件可能损坏.\n如果确认操作没有问题,请提交mbf文件到690089735@qq.com,我会检查文件格式是否存在BUG."
				BC_commandList = tl
				BC_variableList = tv
				BatchCreatorUI.OrderBox.items = ti
				)
		)
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
		menuItem	MI_Tip1	"1.点击左上角按钮,打开命令盒,查看所有命令;"
		menuItem	MI_Tip2	"2.任务流执行的任务,取决于指令盒中的指令顺序;"
		menuItem	MI_Tip3	"3.点击右上角按钮,打开目录浏览器;"--文件窗口,显示文件夹及子文件夹的文件,上方可以按名称过滤;
		menuItem	MI_Tip4	"4.可以选择指令盒里的命令来修改命令参数,参数修改后自动提交;"
		menuItem	MI_Tip5	"5.\"现行文件\"指运行任务流时处理的文件,一般是文件盒中的某一项;"
		menuItem	MI_reDraw	"重置视口绘制(点击以排除不明BUG)"	enabled:true
	)
	on MI_reDraw picked	do
		(enableSceneRedraw() 
		resumeEditing())
	
	on MainMenu open do BC_ignoreERROR =true
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

/* 初始化 */
fn resetUI  BatchCreatorUI=
(
	BC_commandList = #()
	
	BatchCreatorUI.OrderBox.items = BatchCreatorUI.FilesBox.items = #()
	BatchCreatorUI.PrintBox.text = "--/* 运行日志 */--\r\n"
	playStateAnimation "就绪. \t\t\t\t\t\t\t\t        \xa9 许铮 2019" BatchCreatorUI
	BatchCreatorUI.VarTitle1.enabled = BatchCreatorUI.VarTitle2.enabled = BatchCreatorUI.VarTitle3.enabled = BatchCreatorUI.Var1.enabled = BatchCreatorUI.Var2.enabled = BatchCreatorUI.Var3.enabled = False
	BatchCreatorUI.Var1.text = BatchCreatorUI.Var2.text = BatchCreatorUI.Var3.text = BatchCreatorUI.filefilter.text = ""
	
	BatchCreatorUI.OrderBox.items = #("现行文件:打开")
	BC_commandList = #("loadmaxfile BC_fileName useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default")
	BC_variableList = #(#())
		
	try(setVRaySilentMode())catch()
	clearlistener()
	)
	
/* 声明界面 */
rollout BatchCreatorUI "任务流 v2.1.1 Bata" width:574 height:496
(
	Timer TextAnimation "TextAnimation" pos:[356,166] width:24 height:24 interval:50 active:false
	listbox orderBox "指令盒" pos:[5,24] width:278 height:24
	dotNetControl Var1 "System.Windows.Forms.Textbox" pos:[51,413] width:226 height:20
	dotNetControl Var2 "System.Windows.Forms.Textbox" pos:[51,437] width:226 height:20
	dotNetControl Var3 "System.Windows.Forms.Textbox" pos:[51,461] width:226 height:20
	multiListBox FilesBox "" pos:[288,52] width:280 height:23
	dotNetControl printBox "System.Windows.Forms.Textbox" pos:[290,399] width:246 height:89
	button GoButton "开始运行任务流!" pos:[293,365] width:272 height:27
	button ClearButton "清除" pos:[540,454] width:28 height:32 toolTip:"清空日志"
	edittext state "" pos:[31,3] width:507 height:20 enabled:true readOnly:true
	button saveLog "查看" pos:[540,408] width:28 height:39 enabled:true toolTip:"保存并打开日志"
	edittext filefilter "文件盒" pos:[288,28] width:281 height:20
	GroupBox grp1 "参数栏" pos:[8,396] width:275 height:92
	label VarTitle1 "参数1" pos:[16,417] width:32 height:16
	label VarTitle2 "参数2" pos:[16,439] width:32 height:16
	label VarTitle3 "参数3" pos:[16,463] width:32 height:16
	pickbutton DirPanelSwitcher ">>" pos:[541,2] width:28 height:21
	
-- 	on Var1 changed text do --参数1被输入
-- 		if text[text.count] =="\n" do Var1.text = substituteString text "\n" ""
-- 	on Var2 changed text do --参数2被输入
-- 		if text[text.count] =="\n" do Var2.text = substituteString text "\n" ""
-- 	on Var3 changed text do --参数3被输入
-- 		if text[text.count] =="\n" do Var3.text = substituteString text "\n" ""

	pickbutton CmdPanelSwitcher "<<" pos:[2,2] width:28 height:21
	button resetBtn "重置" pos:[6,365] width:49 height:27
	button btn69 "移除指令盒选中项" pos:[64,365] width:214 height:27
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
		osel = for o in selection collect o.name
		if BC_AutoSave do savemaxfile (maxfilepath + maxfilename) quiet:true
		loadmaxfile file useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default unsupportedRenderEffectAction:#default
		nsel = for n in osel collect getNodeByName n
		try(select nsel)catch()
	)
	on FilesBox selected sel do --文件盒改变选择
		playStateAnimation ("共有 "+ FilesBox.items.count as string +" 个文件,选中了 " + ((FilesBox.selection as array).count as string) + " 个文件.双击文件盒中的文件可快速打开检查.") BatchCreatorUI
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
		playStateAnimation "完成. \t\t\t\t\t\t\t\t        \xa9 许铮 2019" BatchCreatorUI
		enableSceneRedraw() 
		resumeEditing()
	)
	on ClearButton pressed do --重置按钮被按下
	(
		PrintBox.text = "--/* 运行日志 */--\r\n"
	)
	on saveLog pressed do --保存日志并打开
	(
		LogFilePath = getdir #autoback + @"/TaskLog.txt"
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
			playStateAnimation ("共有 "+ FilesBox.items.count as string +" 个文件,选中了 " + ((FilesBox.selection as array).count as string) + " 个文件.双击文件盒中的文件可快速打开检查.") BatchCreatorUI 
		)
	)
	on resetBtn pressed do --执行按钮被按下
		(resetUI  BatchCreatorUI)
	on btn69 pressed do --执行按钮被按下
	(
		
		)
)
createdialog BatchCreatorUI menu:MainMenu style:#(#style_titlebar, #style_border, #style_sysmenu,#style_minimizebox) 


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