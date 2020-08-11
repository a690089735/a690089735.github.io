goto start
= 这里是注释
= 下面可支持批量
= echo后面改成要执行的命令即可
= 中文运行乱码可以以ANSI编码保存,这里真是蛋疼,bat里utf8乱码,githubDesktop里ANSI乱码.....
= 用git强制push实现一下一键批量提交博客文章,在上传器处附带了一个移动版的git
= git push --force origin :github强制推,
= 哎....看不懂git....咋个push嘛,木有文件参数,你是把整个库都push了啊?
= 把移动版git先删了,200+M受不了
:start

@echo off
for %%i in (%*) do ( 
	echo 文件全路径：	%%i
	echo 文件全路径：	%1
	echo 短路径名：	%~s1
	echo 盘符+路径： 	%~dp1
	echo 盘符： 		%~d1
	echo 路径： 		%~p1
	echo 文件+后缀名：	%~nx1
	echo 文件名：	%~n1
	echo 后缀名：	%~x1
	echo 文件属性：	%~a1
	echo 日期/时间：	%~t1
	echo 文件大小：	%~z1
)
%~dp0PortableGit-2.28.0-64-bit\bin\git.exe --version
pause