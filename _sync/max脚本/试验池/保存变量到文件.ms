-- f = createFile @"C:/test.ini" encoding:#Chinese writeBOM:true 
-- readValue f --[ ignoreStringEscapes:<boolean> ]
-- close f
-- free f
--无法简单保存


--下面使用ini文件记录物体名列表,和变换值列表s
-- ini_file = @"c:/test.ini" 

-- Name_List = stringstream ""
-- with printAllElements on (Format "%" (for i in getcurrentselection() collect i.name) to:Name_List)

-- setINISetting ini_file "Value_Buffer" "Name_List" (Name_List as string) --[ forceUTF16:<boolean> ]
-- getINISetting ini_file "Value_Buffer" "Name_List"

-- 很难直接记录到ini,因为包括各种符号.



--下面直接记录到文本文件
temp_dir = getdir #temp
buffer_dir = temp_dir+"\copy_buffer"
makeDir buffer_dir

name_list_file = createFile (buffer_dir+"\name_list") encoding:#Chinese

