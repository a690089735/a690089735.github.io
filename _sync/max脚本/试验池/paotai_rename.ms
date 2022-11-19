try(destroydialog paotai_Rename)catch()
rollout paotai_Rename "paotai_Rename" width:160 height:32
(
	editText 'edt1' "±àºÅ" pos:[8,8] width:104 height:16 align:#left
	button 'btn1' "Do!" pos:[120,8] width:32 height:16 align:#left
	on btn1 pressed  do
	(
		for i in objects do i.name = uniquename(edt1.text+"_")
	)
)
createdialog paotai_Rename