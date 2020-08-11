@echo off

rem 根据当前日期获取，年月日串,
set ymd=%date:~0,4%-%date:~5,2%-%date:~8,2%

rem 写入文件
(
echo ---
echo layout: post
echo title: 文章标题
echo date: %ymd% %time% +08:00
echo tags: 杂谈
echo ---
)>"%ymd%-杂谈-博客文章.md"

rem 打开文件
start "" "%ymd%-杂谈-博客文章.md"