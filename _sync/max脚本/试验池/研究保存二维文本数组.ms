--以下全部作废啦,一般能用文本表示的变量,都可以用完整输出直接写到文件,再用readvalue读回来.


cmds = #(#("print"),#("print var1 + var2"))
vals = #(#(),#("1","2"))
	
substituteString "boneBonebone" "bone" "Cloth" --替换文本



	
/* 新生成器结构 */
fn generate command var =
(
	for i = 1 to var.count	do command = substituteString command ("var"+i as string) var[i]
	command
)

c1 = generate "print var1" #("1")
c2 = generate "print var1" #()


fn VBL2Str p_variableList = --变量转文本 VBL2Str #(#("1","2","3"),#("4","5"))
(
	result = ""
	for vars in p_variableList do 
	(
		for str in vars do result += (str + "|")
		result = replace result result.count 1 "~"
	)
	result = replace result result.count 1 ""
)
fn Str2VBL p_string = --文本转变量
(
	result = for s in filterString p_string "~" collect filterString s "|"
)



fn CDL2Str p_commandList = --命令转文本 CDL2Str #("print","do sth")
(
	result = ""
	for str in p_commandList do result += (str + "|")
	result = replace result result.count 1 ""
)
fn Str2CDL p_string = --文本转命令
(
	result = for s in filterString p_string "|" collect s
)


/* 指令集加码 */
fn markup C = 
(
	tempC = C
	for i = 1 to tempC.count do
		(--print tempC[i]
			tempC[i] = substituteString tempC[i] ("\"") "\\\""
 			tempC[i] = substituteString tempC[i] ("\\") "\\\\\\"
			tempC[i] = substituteString tempC[i] ("\\\\\\\\") "\\\\\\\\\\"
		)
	return tempC
)
re1 = processorC #("for o in $'*var1*' do o.name = substituteString (o.name as string) \"var1\" \"var2\"")
re2 = processorC #("makeDir @\"var2\" all:true; savemaxfile (var2 + \"\\\\\" + BC_fileName) quiet:true saveAsVersion:var1")

/* 加载和保存文件 */
fn save2file filename C V = --保存文件
(
	tempfile = (getdir #temp + @"\tempSAVE.txt")
	deleteFile tempfile
	
	try(
		save_file = createfile tempfile
		format "%\n%" C V to:save_file
		close save_file
		encryptFile tempfile filename 690089735
		return true
	)catch(return false)
)
filename = @"C:\Users\Administrator\Desktop\新建文本文档 (5).txt"
C = processorC #("for o in $'*var1*' do o.name = substituteString (o.name as string) \"var1\" \"var2\"")
V = #("2")
save2file filename C V

fn loadfile2 filename = --加载文件
(
-- 	a = openEncryptedFile "C:\Users\Administrator\Desktop\新建文本文档 (5).txt" 5476557
	load_file = openEncryptedFile filename 690089735
	if load_file != undefined then
	(
-- 		result = #(readline load_file, readline load_file)
		result = #(readValue load_file, readValue load_file)
		close load_file
		return result
	)
)
ra = loadfile2 @"C:\Users\Administrator\Desktop\新建文本文档 (5).txt"

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



