-- (
--关闭
try(theFrm.close())catch()--和destroydialog一样需要用try包起来

--创建窗体
-- theFrm = (dotNetObject "System.Windows.Forms.Form") --据说下边的方法更好,属于扩展,带有.net功能和max窗体的基本性质
theFrm  = (dotNetObject "MaxCustomControls.MaxForm")

--设置父窗口,如果不设置,会出现互相遮挡等问题
thePtr = DotNetObject "System.IntPtr" (windows.getMAXHWND())
-- theHwnd = (dotNetObject "System.Windows.Forms.NativeWindow").FromHandle thePtr --这两句可以达到相似的效果,具体区别不明,但这句的窗口不会跟着MAX窗口最小化,故下边的更好
-- theHwnd = DotNetObject "MaxCustomControls.Win32HandleWrapper" thePtr --这句在max2015及以后被移除,使用了下面的
theHwnd = (dotNetObject "System.Windows.Forms.NativeWindow").FromHandle thePtr

--显示
theFrm.Show(theHwnd)
-- theFrm.Show(windows.getMAXHWND())
--透明
theFrm.Opacity = .75
-- theFrm.BackColor=(dotNetClass "system.drawing.color").fromArgb 0 0 255 --我没试成功
-- theFrm.TransparencyKey=(dotNetClass "system.drawing.color").fromArgb 0 0 255 --据说用这个可以把部分颜色变透明,如果背景色全是这个颜色则全透明,但是我没试成功
	
--设置窗体
-- theFrm.ControlBox = false --去掉三个按钮
theFrm.FormBorderStyle  = (dotnetclass "System.Windows.Forms.FormBorderStyle").FixedToolWindow  --固定窗口大小,默认为可调整
theFrm.text = ".net 窗体测试"
dotnet.addeventhandler theFrm "Activated" (fn 'tmp' = print "Activated")
-- dotnet.addeventhandler theFrm "Closing" (fn 'tmp' = print "Closing")--已过时,建议不使用
-- dotnet.addeventhandler theFrm "Closed" (fn 'tmp' = print "Closed")--已过时,建议不使用
dotnet.addeventhandler theFrm "FormClosing" (fn 'tmp' = print "Closing")
dotnet.addeventhandler theFrm "FormClosed" (fn 'tmp' = print "Closed")
-- dotnet.addeventhandler theFrm "Invalidated" (fn 'tmp' = print "Invalidated")
-- dotnet.addeventhandler theFrm "Paint" (fn 'tmp' = print "Paint") --重绘时发生
dotnet.addeventhandler theFrm "Shown" (fn 'tmp' = print "Shown") --第一次显示窗体时发生 Load 在第一次显示之前发生.

dotNet.setLifetimeControl theFrm #dotnet
	
--添加组件
theEtb = dotNetObject "System.Windows.Forms.TextBox"
theFrm.controls.add theEtb
theBtn = dotNetObject "System.Windows.Forms.Button"
theFrm.controls.add theBtn
theBtn2 = dotNetObject "Button" --可以简写
theFrm.controls.add theBtn2
thesld = dotNetObject "system.windows.forms.trackbar"
theFrm.controls.add thesld

thePanel = dotNetObject "Panel"
theFrm.controls.add thePanel
thePanel.location.x = 100;thePanel.location.y = 50
thePanel.width = 30;thePanel.height = 50
theBtn3 = dotNetObject "Button" --可以简写
thePanel.controls.add theBtn3

--设置组件参数
maxBackColor = colorMan.getColor #background
theEtb.BackColor = ((DotNetClass "System.Drawing.Color").fromARGB (maxBackColor[1] * 255.0f) (maxBackColor[2] * 255.0f) (maxBackColor[3] * 255.0f))
-- theBtn.location = dotNetObject "System.Drawing.Point" 15 20 --这样可以直接设置xy
theBtn.location.x = 50;theBtn.location.y = 30
theBtn.FlatStyle = (dotNetClass "System.Windows.Forms.FlatStyle").Flat 
theBtn.FlatAppearance.Bordersize = 0

theBtn2.location.x = 100;theBtn2.location.y = 80

thesld.location.x = 100;thesld.location.y = 180
thesld.Minimum = 0;thesld.Maximum = 100

--为组件添加事件
fn BtnClick = print "Pressed!"
dotnet.addeventhandler theBtn "click" BtnClick
dotNet.setLifetimeControl theBtn #dotnet --这句将组件生命周期切换到dotnet,必须要加,因为默认的mxs生命周期会导致组件的事件函数被删除(因为mxs垃圾回收会删除掉未使用的程序)

--注意,.net窗体不能添加max控件
-- theTest = (editText edt_str "" bold:true pos:[0,7] width:88 height:20)
-- theFrm.controls.add theTest

--由上可见,窗体可以在显示后继续更改.
	
--显示属性
-- showproperties theFrm
-- showproperties theBtn
-- )

-- 备注
-- System.Windows.Forms.Timer