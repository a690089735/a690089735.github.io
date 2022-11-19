names = #()
theCopyPasteDir = getdir #autoback -- CHANGE THIS TO ANY FOLDER YOU WANT
pasteObjectFile = "\pastefile.max" --this is the filename to save as...
pastObjectPath = theCopyPasteDir + pasteObjectFile --this is the complete string
pastEnvFile = "\pasteenv.env" --this is the filename to save Env...
pastEnvPath = thecopypastedir + pastenvfile --this is the complete string

fn CopyObject = 
	(
	if $ != undefined do 
		saveNodes $ pastObjectPath --this saves ("copies") the objects as a file
	)
fn PasteObject = 
	(
	mergemaxfile (pastObjectPath) #select --this merges ("pastes") and selects objects from file
	)

fn CopyEnv = 
	(
	m = selection[1].modifiers[skin]
	if classof(m) == Skin do 
		(modPanel.setCurrentObject selection[1].modifiers[#Skin]
		UIAccessor.PressDefaultButton()
		skinOps.saveEnvelope m pastenvpath)
	)
fn ANoon_EnvelopeCallbackFunction =
(
	WindowHandle = DialogMonitorOPS.GetWindowHandle()
	theDialogName = UIAccessor.GetWindowText WindowHandle
	if theDialogName != undefined and matchpattern theDialogName pattern:"*Load Envelopes*" do
		(UIAccessor.PressButtonByName WindowHandle "Match by Name"
		UIAccessor.PressButtonByName WindowHandle "OK")
	true
)
fn PasteEnv = 
(
	DialogMonitorOPS.RegisterNotification ANoon_EnvelopeCallbackFunction ID:#ANoon_Envelopes
	DialogMonitorOPS.Enabled = true
	m = selection[1].modifiers[skin]
	if classof(m) == Skin do 
		(modPanel.setCurrentObject selection[1].modifiers[#Skin]
		UIAccessor.PressDefaultButton()
		skinOps.loadEnvelope m pastenvpath)
	DialogMonitorOPS.Enabled = false
)

try (destroydialog CopyPasteObjects)catch()
rollout CopyPasteObjects "SuperCopy" width:168 height:272
(
	button btn_copyenv "CopyEnv" pos:[16,112] width:136 height:29
	button btn_pasteenv "PasteEnv" pos:[16,144] width:136 height:29
	button btn_copyobj "CopyObject" pos:[16,24] width:137 height:29
	button btn_pasteobj "PasteObject" pos:[16,56] width:137 height:29
	GroupBox grp_obj "物体" pos:[8,8] width:152 height:80
	GroupBox grp_env "蒙皮权重" pos:[8,96] width:152 height:80
	button btn19 "RecordSet" pos:[16,200] width:136 height:29
	button btn20 "SelectSet" pos:[16,232] width:136 height:29
	GroupBox grp5 "选择内容" pos:[8,184] width:152 height:80
	on btn_copyenv pressed do
	(
		CopyEnv()
	)
	on btn_pasteenv pressed do
	(
		PasteEnv()
	)
	on btn_copyobj pressed do
		CopyObject()
	on btn_pasteobj pressed do
		PasteObject()
	on btn19 pressed do
	(
		names = #()
		names = for i in selection as array collect i.name
	)
	on btn20 pressed do
	(
		objs = for i in names collect getnodebyname i
		try(select objs)catch()
	)
)

createdialog CopyPasteObjects