@echo off
Set /p Name=英雄名(提莫网站内): 
Set /p count=最大页面数量(网站内):
Set i=-1
:a
Set /a i=%i%+1
rem Echo "https://teemo.gg/model-viewer?game=league-of-legends&type=champions&object=%Name%&skinid=%Name%-%i%"
start "" "https://teemo.gg/model-viewer?game=league-of-legends&type=champions&object=%Name%&skinid=%Name%-%i%"
If %i% LSS %count% goto a
:b
Echo 网页已打开
pause


