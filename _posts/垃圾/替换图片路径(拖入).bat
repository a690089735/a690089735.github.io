rem @echo off

rem 加了这句可以正确处理一些字符
chcp 65001

rem 设置本地延时扩展,可以让变量正确赋值
setlocal EnableDelayedExpansion

set oldstr = F:\GitHub\a690089735.github.io\assets\img\
set newstr = {{site.pimg}}

rem	逐个文件,逐行替换,输出到"文件名.txt"的文件中
for %%i in (%*) do ( 
	del %%i.txt
	for /f "delims=" %%j in (%%i) do (
		set var=%%j
		set var=!var:%%oldstr%%=%%newstr%%!
		echo !var!>>%%i.txt
	)
)

pause