temptrans = copy $Dummy001.transform

a = 0

--组合一个timer,在鼠标释放时将a设为0
tmr = dotnetobject "Timer"
tmr.Interval = 10
fn tik s e = 
(
	if not mouse.buttonStates[1] do (a = 0;s.Stop())--在这里加上撤销标记结束.
)
dotnet.addEventHandler tmr "Tick" tik

deleteAllChangeHandlers id:#test
when transform $Dummy002 change id:#test currentobj do
(
	tmr.start()--于此同时,开始撤销标记
	a+=1;print a
-- 	p = point transform:(copy temptrans) wirecolor:red;
-- 	temptrans =(matrix3 $Dummy001.transform[1] $Dummy001.transform[2] $Dummy001.transform[3] ((normalize(temptrans.pos - currentobj.transform.pos)*15)+currentobj.transform.pos))
-- 	translate (temptrans) ((normalize(temptrans.pos - currentobj.transform.pos)*0.06667)+currentobj.transform.pos)
	if (mod a 2)as integer > 0 do --正常的when在transform change会触发两次,一次返回当前位置,一次返回起始位置.按右键会多返回一次.
	(
	print $Dummy002.transform
	temptrans = translate ($Dummy002.transform as matrix3) (normalize(temptrans.pos - currentobj.transform.pos)*15)
	$Dummy001.transform = temptrans
	)
-- 	point transform:temptrans wirecolor:blue
-- 	p.wirecolor = blue
)


-- [ <object_parameter> ] 

-- ::temptrans