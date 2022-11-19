( -- by:Ace
	Script_dir = getDir #userStartupScripts 
	msefile = Script_dir + "\vrdematcleanbeta.mse"
	msexfile = Script_dir + "\vrdematcleanbeta.msex"
	if doesfileexist msefile or doesfileexist msexfile then (
		deletefile msefile ; 
		deletefile msexfile
	)
	callBacks.RemoveScripts()
	delete $¡¡* ; delete $¡¡*
	actionMan.executeAction 0 "40006"
)