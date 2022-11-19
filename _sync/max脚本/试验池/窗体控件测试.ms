try(destroydialog TestRollout)catch()
rollout TestRollout "Untitled" width:162 height:300
(
	Timer tmr1 "Timer" pos:[1,0] width:24 height:24 interval:2000
	Timer tmr2 "Timer2" pos:[24,0] width:24 height:24 interval:100
	button btn1 "ShowHandle" pos:[8,24] width:88 height:24
	on tmr1 tick do
		print 1
	on tmr2 tick do
-- 		print tmr1.ticks --每次执行tick,都会多一个ticks
-- 		tmr1.interval = 2000 --每次新指定周期,都会停止计时重置
	on btn1 pressed  do
	(
		print (format "OpsGet:%;Maxhwnd:%; dialoghwnd:%; btnhwnd:%" (dialogMonitorOps.getWindowHandle()) (windows.getMAXHWND()) TestRollout.hwnd btn1.hwnd)
	)
)
createdialog TestRollout

