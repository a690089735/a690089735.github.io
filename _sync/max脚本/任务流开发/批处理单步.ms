/* 批处理单步 */
fn DoCommand CurrentFile Commands orderBox printBox = --当前文件;命令集;指令盒;回显盒
(
	tips = ""
	printBox.text += ("/--- 文件 " + CurrentFile + " 开始执行命令 ---/\n")
	try
	(
		for i in 1 to commands.count do
			orderBox.selection = i
			printBox.text += ("第 " + i as string + " 行命令,结果: ")
			tips = try(execute commands[i] as string)catch()
			if tips == "undefined" then 
			(
				tips = "ERROR"
				printBox.text += (tips + "\n")
				if not ignoreERROR then throw "" 
			)
			else printBox.text +=  (tips + "\n")
	)catch(printBox.text +=  ("ERROR\n" + getCurrentException() + "\n/---命令执行中止---/\n");  throw())
)

