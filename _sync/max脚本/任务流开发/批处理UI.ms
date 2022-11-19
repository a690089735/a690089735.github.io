/* 需要实现的功能 */
/* 1.保存导入配置 */
/* 2.双击打开文件,有可能的话可以加入菜单 */
/* 3.命令可以插入到选择项下方 */
/* 4.优化核心代码 */


try(DestroyDialog creatorUIwindow)catch()

global fileList = #()
global fileName = ""--在运行时记录当前文件名
	
textTips = ""
textTick = 0
global progress = 0

DeMeshSmooth = (meshsmooth iterations:0 smoothness:0.0 useRenderIterations:true renderIterations:1 useRenderSmoothness:true renderSmoothness:1.0)
/* 全部命令 */ --allcommand[1] = #(显示名称,变量数量,#("执行字符串1","执行字符串2",...),"提示信息")#执行字符串:之后传给CreateCommandString即可,
global allCommand = #(
	#("    /---调试参数---/",0,#(),""),
	#("不报错",2,#("print("," + ",")"),"print(参数1+参数2)"),
	#("报错",0,#("print(bucunzai)"),"print(不存在)"),
	#("    /---文件操作---/",0,#(),"文件操作类程序"),
	#("保存选中文件",1,#(@"savemaxfile fileName saveAsVersion:"),"保存文件:参数1为保存的版本,如果输入的版本不支持,将保存为当前版本"),
	#("打开指定文件",1,#(@"loadmaxfile ", @" useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default"),"打开一个文件:参数1为文件路径"),
	#("打开选中文件",0,#(@"loadmaxfile fileName useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default"),"打开一个正在执行的文件,不需要参数"),
	#("合并指定文件",1,#(@"mergemaxfile ",@" useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default"),"合并一个文件:参数1为文件路径"),
	#("合并选中文件",0,#(@"mergemaxfile fileName useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default"),""),
	#("    /---全局操作---/",0,#(),"场景的全局操作"),
	#("仅显示Geometry",0,#(@"hideByCategory.all(); hideByCategory.geometry = off"),"设置按类型隐藏,仅在场景中显示Geometry"),
	#("    /---物体操作---/",0,#(),"物体操作类程序"),
	#("设置子父物体绑定",2,#(@"$",@".parent = $"),"参数1为子物体名,参数2为父物体名"),
	#("为指定物体添加网格平滑",1,#(@"temp = $",@"; if not(isProperty temp.MeshSmooth #renderIterations) do addModifier temp DeMeshSmooth"),"参数1为子物体名(默认的修改器迭代为0,开启视口迭代,级别为2),如果物体有网格平滑修改器,则不会再次添加."),
	#("设置定物体的网格平滑",1,#(@"$",@".meshsmooth.renderIterations = "),"必须输入2个参数:参数1为子物体名,参数2为渲染迭代级别"),
	#("    /---动画操作---/",0,#(),"动画操作类程序"),
	#("设置时间范围",0,#(@""),""),
	#("设置当前时间",1,#(@"slidertime = "),"参数1为第某帧"),
	#("启用记录动画",0,#(@"animate on"),"启用记录动画,开启后所做的操作可被记录关键帧"),
	#("关闭记录动画",0,#(@"animate off"),"关闭记录动画,关闭后所做的操作可被记录关键帧"),
	#("    /---定制功能---/",0,#(),"定制的功能集,每一项对应一组定制功能"),
	#("用box清理所有模型",0,#(@""),""),
	#("用box清理指定模型",1,#(@""),""),
	#("    /---使用反馈---/",0,#(),"使用反馈,bug提交邮箱:690089735@qq.com"),
	#("没有你需要的功能?",0,#(),"点击上方'关于'菜单告诉我")
)

/* 命令分类 */
global commandType = for i = 1 to allCommand.count where allCommand[i][1][4] == " " collect #(allCommand[i][1],i)--i+15

/* 指令列表 */
global commandList = #()

--b = deepcopy(a)
--append
--deleteItem <array> <number>


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
	creatorUIwindow.PrintBox.text = "--/* 运行日志 */--\n"
	creatorUIwindow.CtrlButton.caption = ">>"
	creatorUIwindow.CtrlButton.toolTip = "将备选命令加入到执行命令盒中."
	creatorUIwindow.State.text = "就绪."
	creatorUIwindow.Var1.enabled = creatorUIwindow.Var2.enabled = creatorUIwindow.Var3.enabled = False
	creatorUIwindow.Var1.text = creatorUIwindow.Var2.text = creatorUIwindow.Var3.text = ""
	
	creatorUIwindow.OrderBox.items = #("打开选中文件")
	commandList = #(@"loadmaxfile fileName useFileUnits:True quiet:true missingExtFilesAction:#default missingDLLsAction:#default")
	)

/* 声明界面 */
rollout creatorUIwindow "批处理生成器v1.42.7" width:704 height:392
(
	Timer ButtonAnimation "ButtonAnimation" pos:[13,7] width:24 height:24 interval:85 active:false
	Timer TextAnimation "TextAnimation" pos:[13,26] width:24 height:24 interval:50 active:false
	listbox OrderBox "执行命令盒" pos:[176,8] width:144 height:23
	button CtrlButton ">>" pos:[152,64] width:24 height:160 toolTip:"将备选命令加入到执行命令盒中."
	listbox CommandBox "备选命令盒" pos:[8,40] width:144 height:16
	edittext Var1 "参数1" pos:[8,276] width:144 height:16 enabled:false
	edittext Var2 "参数2" pos:[8,294] width:144 height:16 enabled:false
	edittext Var3 "参数3" pos:[8,312] width:144 height:16 enabled:false
	multiListBox FilesBox "文件选择器" pos:[344,8] width:144 height:23
	dotNetControl PrintBox "System.Windows.Forms.Textbox" pos:[512,6] width:168 height:324
	button GoButton "GO!" pos:[488,64] width:24 height:160
	button ResetButton "<<" pos:[680,296] width:24 height:32 toolTip:"重置工具"
	button FilesButton "..." pos:[320,56] width:24 height:160
	dropdownList TypeBox "命令分类" pos:[8,0] width:136 height:41
	edittext state "" pos:[0,336] width:704 height:20 enabled:true readOnly:true
	progressBar pb1 "进度:" pos:[0,358] width:704 height:16 enabled:true orient:#horizontal
	button saveLog ">>" pos:[680,64] width:24 height:160 toolTip:"重置工具"
	label lbl1 "?许铮" pos:[6,377] width:81 height:13
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
			CtrlButton.caption = CtrlButton.caption += CtrlButton.caption
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
			(state.text = state.text + textTips[textTick])
	)
	on OrderBox selected sel do --执行命令盒改变选择
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
					OrderBox.items = append OrderBox.items allCommand[index][1]
					append commandList (CreateCommandString count allCommand[index][3])
					OrderBox.selection = OrderBox.items.count
					state.text = "就绪."
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
		State.text = ""
		textTips = allCommand[creatorUIwindow.CommandBox.selection][4]
		if textTips.count == 0 do textTips = "功能未完善,暂不可用."
		textTick = 0
		TextAnimation.interval = (350/textTips.count)
		TextAnimation.active = true
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
	on GoButton pressed do --执行按钮被按下,虽然这样写代码臃肿,但是可以少几次判断,虽然还能优化一半,但是不搞了
	(--禁用视口重画
		tips = ""
		if ignoreERROR then
		(
			if FilesBox.selection.count > 0 then
			(
				progress = 100/FilesBox.selection.count/fileList.count
				for index in FilesBox.selection do
				(
					fileName = fileList[index]
					printBox.text +=  ("/--- 文件 " + fileName + " 开始执行命令 ---/\n")
						for i in 1 to commandList.count do
							try
							(
								orderBox.selection = i
								printBox.text +=  ("第 " + i as string + " 行命令,结果: ")
								tips = try(execute commandList[i] as string)catch()
								if tips == "undefined" then 
										(
									tips = "ERROR"
									printBox.text +=  (tips + "\n")
									--throw "" 
								)
								else printBox.text +=  (tips + "\n")
							)catch(printBox.text +=  ("ERROR\n" + getCurrentException() + "\n---------------\n"))
				)
				printBox.text +=  "自动批处理,全部完成!\n---------------\n"
			)
			else
			(
				try
				(
					printBox.text += ("/--- 文件 " + maxfilepath + maxfileName + " 开始执行命令 ---/\n")
					
					for i in 1 to commandList.count do 
					(
						orderBox.selection = i
						printBox.text += ("第 " + i as string + " 行命令,结果: ")
						tips = try(execute commandList[i] as string)catch()
						if tips == "undefined" then 
						(
							tips = "ERROR"
							printBox.text += (tips + "\n")
							--throw "" 
						)
						else printBox.text += (tips + "\n")
					)
						printBox.text += "自动批处理,全部完成!\n---------------\n"
					
				)catch(printBox.text += ("ERROR\n" + getCurrentException() + "\n---------------\n"))
			)
		)
		else
		(
			if FilesBox.selection.count > 0 then
			(
				for index in FilesBox.selection do
				(
					fileName = fileList[index]
					printBox.text += ("/--- 文件 " + fileName + " 开始执行命令 ---/\n")
					try
					(
						for i in 1 to commandList.count do 
					(
						orderBox.selection = i
						printBox.text += ("第 " + i as string + " 行命令,结果: ")
						tips = try(execute commandList[i] as string)catch()
						if tips == "undefined" then 
						(
							tips = "ERROR"
							printBox.text += (tips + "\n")
							throw "" 
						)
						else printBox.text += (tips + "\n")
					)
						printBox.text += "自动批处理,全部完成!\n---------------\n"
					)catch(printBox.text += "运行时错误,已停止运行!")
				)
			)
			else
			(
				try
				(
					printBox.text += ("/--- 文件 " + maxfilepath + maxfileName + " 开始执行命令 ---/\n")
					
					for i in 1 to commandList.count do 
					(
						orderBox.selection = i
						printBox.text += ("第 " + i as string + " 行命令,结果: ")
						tips = try(execute commandList[i] as string)catch()
						if tips == "undefined" then 
						(
							tips = "ERROR"
							printBox.text += (tips + "\n")
							throw "" 
						)
						else printBox.text += (tips + "\n")
					)
						printBox.text += "自动批处理,全部完成!\n---------------\n"
					
				)catch(printBox.text += "运行时错误,已停止运行!\n---------------\n")
			)
		)
		
	--启用视口重画
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
			FilesBox.items = temp[1]
			fileList = temp[2]
		)
	)
	on TypeBox selected sel do
	(
		index = commandType[sel][2]
		CommandBox.selection = CommandBox.items.count
		CommandBox.selection = index
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