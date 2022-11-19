rollout unnamedRollout "Untitled" width:168 height:296
(
	button 'btn1' "Button" pos:[8,8] width:120 height:40 align:#left
	on btn1 pressed  do
	(
		saveMaxFile (maxfilepath+maxfilename) saveAsVersion:2014 useNewFile:false quiet:true
	)
)
createdialog unnamedRollout