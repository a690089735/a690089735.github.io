try(cui.unRegisterDialogBar test_r) catch()
try(DestroyDialog test_r)catch()
rollout test_r "无标题" width:180 height:48
(
	button 'btn1' "Button1" pos:[8,8] width:34 height:29 align:#left
	dotnetcontrol 'btn2' "Button" text:"Button2" pos:[48,8] width:34 height:29 align:#left
	button 'btn1_H' "Button1_H" pos:[88,8] width:34 height:29 align:#left visible:false
	dotnetcontrol 'btn2_H' "Button" text:"Button2_H" pos:[128,8] width:34 height:29 align:#left visible:false
	button 'btn3' "Button3" pos:[8,48] width:34 height:29 align:#left
	dotnetcontrol 'btn4' "Button" text:"Button4" pos:[48,48] width:34 height:29 align:#left
	
	on btn1 pressed do print "btn1_点击"
	on btn2 click s e do print "btn2_点击"
	on btn1_H pressed do print "btn1_H_点击"
	on btn2_H click s e do print "btn2_H_点击"
	on btn3 pressed do print "btn3_点击"
	on btn4 click s e do print "btn4_点击"
		
	on test_r open do print #(btn1.hwnd,btn2.hwnd,btn1_h.hwnd,btn2_h.hwnd,btn3.hwnd,btn4.hwnd)
)
CreateDialog test_r

cui.RegisterDialogBar test_r style:#(#cui_dock_bottom) minSize:[0, 0] --目前不需要了minSize:[_w_x,_w_y] maxSize:[_w_x,_w_y] --高版本必须指定style,高版本必须指定min和maxsize
cui.DockDialogBar test_r #cui_dock_bottom