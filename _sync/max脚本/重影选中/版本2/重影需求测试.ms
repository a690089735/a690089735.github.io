try(destroydialog  Grouptest)catch()

global GhostGroupLIst=#(#(),#())--#("???","????")

global temp_name = "?"
-- fn TextBox UITitle:"" UIText:"11" UIparent:undefined UIwidth:200 = 
-- (
-- 	try(destroydialog  TextWindow)catch()
-- 	rollout TextWindow "TextBox"
-- 	(
-- 		editText 'Text' "" height:22
-- 		
-- 	)
-- 	TextWindow.Text.caption = UIText
-- 	createdialog TextWindow title:UITitle width:UIwidth modal:true
-- 	
-- 	
-- )

fn SetName = 
(
	try(destroydialog  TextWindow)catch()
	rollout TextWindow "????" width:200
	(
		editText 'Text' "??:" text:temp_name width:180 height:22
		button 'okbtn' "??" align:#left offset:[20,0]
		button 'nobtn' "??" align:#right offset:[-20,-26]
		on okbtn pressed do (temp_name = text.text;destroydialog TextWindow)
		on nobtn pressed do destroydialog TextWindow
	)
	createdialog TextWindow modal:true
)

rollout Grouptest "test" width:162 height:300
(
	listBox 'lbx1_GroupList' "ObjectGroup" pos:[8,8] width:120 height:10 align:#left
	button 'btn_addGroup' "Add" pos:[8,176] width:56 height:32 align:#left
	button 'btn_DelGroup' "Delete" pos:[72,176] width:56 height:32 align:#left
	on btn_addGroup pressed do (temp_name = "?";SetName;GhostGroupLIst)
)
createdialog  Grouptest

--
-- destroydialog  TextWindow