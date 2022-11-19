try(destroydialog roll)catch()

rollout roll "Folder" width:144 height:280
(
	listbox 'lbx1' "MaxFolderList" pos:[8,8] width:128 height:20 align:#left
	local
	names = #(#animations,
	#archives,
	#autoback,
	#autodeskCloud,
	#defaults,
	#downloads,
	#drivers,
	#export,
	#font,
	#help,
	#image,
	#import,
	#matlib,
	#maxData,
	#maxroot,
	#maxstart,
	#pageFile,
	#photometric,
	#plugcfg,
	#preview,
	#proxies,
	#renderassets,
	#renderPresets,
	#renderoutput,
	#scene,
	#scripts,
	#sound,
	#startupScripts,
	#temp,
	#ui,
	#userMacros,
	#userScripts,
	#userStartupScripts,
	#userIcons,
	#vpost) --count:35

-- 	button 'btn1' "1.#animations" pos:[8,8] width:120 height:24 align:#left
-- 	on btn1 pressed do
-- 	(
-- 		doscommand ("explorer " + getdir names[id])
-- 		id+=1
-- 		if id > count then id = 1
-- 		btn1.caption = id as string + "." + names[id]
-- 	)
	
	on roll open  do
	(
		lbx1.items = for i in names collect i as string
	)
	on lbx1 doubleClicked sel do
	(
		doscommand ("explorer " + getdir names[sel])
	)
)
createdialog roll

