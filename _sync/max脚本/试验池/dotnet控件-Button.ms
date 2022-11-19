try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:160 height:128
(
	dotnetcontrol 'btn1' "button" text:"&Test" pos:[10,10] width:48 height:24
	on btn1 click s e do 
	(
		s.text = case s.text of
		(
			"&Test":"&DoTest"
			default:"&Test"
		)
	)
	on unnamedRollout open do
	(
		--不显示下划线,要模拟按Alt才会显示
		local dnSendKeys = (dotNetClass "System.Windows.Forms.SendKeys")
		dnSendKeys.sendWait "%" --http://msdn.microsoft.com/en-us/library/system.windows.forms.sendkeys.send.aspx 参考
	)
)
createdialog unnamedRollout