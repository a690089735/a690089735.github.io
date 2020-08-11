chcp 65001

setlocal enableextensions disabledelayedexpansion

set "search=F:\GitHub\a690089735.github.io\assets\img\"
set "replace={{site.pimg}}"

for %%i in (%*) do (
	del "%%i.txt"
	for /f "delims=" %%j in ('type "%%i" ^| find /v /n "" ^& break ^> "%%i"') do (
		set "line=%%j"
		setlocal enabledelayedexpansion
		set "line=!line:*]=!"
		if defined line set "line=!line:%%search%%=%%replace%%!"
		>>"%%i.txt" echo(!line!
		endlocal
	)
)

pause