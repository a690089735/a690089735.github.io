@echo off
cd /d %~dp0

for %%i in (%*) do (
	PyInstaller -F -w -i icon.ico %%i
	del /F /S /Q %%~ni.spec
)

xcopy dist %~dp0 /s /f

RD /S /Q build
RD /S /Q dist

pause