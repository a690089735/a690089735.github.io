-- testTimer = dotnetobject "Timer"
-- testTimer.Interval = 2000
-- dotNet.setLifetimeControl OTimer #dotnet --设置为dotnet生命周期,使用时会导致异常
-- fn tik s e = 
-- (
-- 	print s
-- 	print e
-- )
-- dotnet.addEventHandler tstTimer "Tick" tik


-- theFrm  = (dotNetObject "MaxCustomControls.MaxForm")

-- theFrm.controls.add testTimer --不能添加到窗体哦.


--这样会报错的哦!
-- try(destroydialog unnamedRollout)catch()
-- rollout unnamedRollout "Untitled" width:152 height:264
-- (
-- 	dotNetControl tmr_move "Timer" interval:100
-- )
-- createdialog unnamedRollout

--测试拖拉
temptrans = ($Dummy001.transform) as Matrix3
testTimer = dotnetobject "Timer"
testTimer.Interval = 1000
-- dotNet.setLifetimeControl testTimer #dotnet --设置为dotnet生命周期,使用时会导致异常
fn tik s e = 
(
	print "tick!"
-- 	trans = ($Dummy002.transform) as Matrix3
-- 	temptrans = translate trans (normalize(temptrans.pos - trans.pos)*30)
-- 	$Dummy001.transform = temptrans
-- 	redrawviews() --计算正确,但即使刷新视图,也还是会一跳一跳的
)
dotnet.addEventHandler testTimer "Tick" tik

try(DestroyDialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:163 height:140
(
	button 'btn1' "Start" pos:[15,45] width:50 height:37 align:#left
	button 'btn2' "Stop" pos:[96,47] width:50 height:37 align:#left
	on btn1 pressed  do
	(
		testTimer.stop()
		testTimer.start()
	)
	on btn2 pressed  do
	(
		testTimer.stop()
	)
)
CreateDialog unnamedRollout
