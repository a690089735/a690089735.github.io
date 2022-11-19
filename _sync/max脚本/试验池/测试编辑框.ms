(
try(destroydialog test)catch()
rollout test "test" width:162 height:300
(
	dotNetControl testBox "System.Windows.Forms.Textbox" pos:[13,7] width:136 height:24 
	
		
	on test open  do
	(
	testBox.allowDrop=true
	)
-- 	on testBox DragDrop e do
-- 		print(getPropNames e)
-- 		print(showProperties e)
-- 		print(getPropNames e)
	on testBox DragEnter e do
		if e.data.ContainsFileDropList() do print((e.data.GetFileDropList()).item[0])
-- 		print(e.data.ContainsFileDropList())
-- 	print (e.data.GetFileDropList())
-- 		print(showMethods e.data)
-- 		print(showProperties e)
-- 		print(getPropNames e)
-- 	on testBox DragLeave e do
-- 		print(getPropNames e)
-- 	on testBox DragOver e do
-- 		print(getPropNames e)
-- 	on testBox Click e do print "Click"
-- 	on testBox DragDrop e do print "DragDrop" --在带拖拽的鼠标进入的时候发生,携带data等东西
-- 	on testBox DragEnter e do print "DragDrop" --在带拖拽的鼠标进入的时候发生,携带data等东西
-- 	on testBox DragLeave e do print "DragLeave" --在释放鼠标或者鼠标离开的时候发生
-- 	on testBox DragOver e do print "DragOver" --在释放鼠标前一直发生
	
	
)
createdialog test
)



