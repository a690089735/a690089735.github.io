@echo off

rem ���ݵ�ǰ���ڻ�ȡ�������մ�,
set ymd=%date:~0,4%-%date:~5,2%-%date:~8,2%

rem д���ļ�
(
echo ---
echo layout: post
echo title: ���±���
echo date: %ymd% %time% +08:00
echo tags: ��̸
echo ---
)>"%ymd%-��̸-��������.md"

rem ���ļ�
start "" "%ymd%-��̸-��������.md"