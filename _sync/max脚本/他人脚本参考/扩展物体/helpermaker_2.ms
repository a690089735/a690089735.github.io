---------------------------------------------------------------------
---------------------------------------------------------------------
--  Helper Maker                                                   --
--  version 1.1                                                    --
---------------------------------------------------------------------
--  Creates a helper plugin file.                                  --
--  Helper's name and category.                                    --
--  Location folder.                                               --
--  A single parameter: Size.                                      --
--  Uses from template:                                            --
--    object vertices and faces,                                   --
--    edge visibility.                                             --
---------------------------------------------------------------------
--  GARP - 2011                                                    --
---------------------------------------------------------------------
---------------------------------------------------------------------

undo off
(
	global rltHelperMaker
	try destroyDialog rltHelperMaker catch()
	
	------------------------------------------------------------
	--  CUSTOMIZE HERE  ----------------------------------------
	------------------------------------------------------------
	--default folder:
	local theDefaultPath = "$max\\plugins\\Custom Plugins"
	--characters for Name and Category, NEVER USE \/:*?"<>|
	local theChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 _-."
	--default state for 'Sub-Folder from Category'
	local subFolderChecked = true
	--default state for 'Use Helper Default Wirecolor'
	local useHelperWCChecked = true
	------------------------------------------------------------
	------------------------------------------------------------
	
	--needed to write the plugin file
	local theCategory
	local theName
	local theObject
	
	--discard leading/trailing whitespaces and characters not in theChars
	fn cleanString st =
	(
		st = trimLeft (trimRight st)
		local cnt = st.count
		if cnt != 0 do for i = cnt to 1 by -1 do
			if findString theChars st[i] == undefined do
				st = replace st i 1 ""
		st
	)
	
	fn buildPlugin =
	(
		--object size non zero
		local theExtent = theObject.max - theObject.min
		local theMaxSize = amax #(theExtent.x, theExtent.y, theExtent.z)
		if theMaxSize == 0 do
		(
			messageBox "Template Object has no Dimension." title:"Warning" beep:false
			return()
		)
		
		--plugin class name
		local theClassName = theName
		for i = 1 to theClassName.count do if theClassName[i] == " " do theClassName[i] = "_"
		local isUsed = execute ("classOf " + theClassName) != undefinedClass
		if isUsed do
			if not queryBox "Plugin Name already used.\nDo you want to continue?" \
				title:"Helper Maker" do return()
		
		--path/name for plugin file
		local theSavePath = getSavePath caption:"Helper Maker - Output Folder" initialDir:theDefaultPath
		if theSavePath == undefined do
		(
			messageBox "Cancelled." title:"Helper Maker" beep:false
			return()
		)
		if subFolderChecked do
		(
			theSavePath = pathConfig.appendPath theSavePath theCategory
			makeDir theSavePath
		)
		theSavePath = pathConfig.appendPath theSavePath (theName + "_" + theCategory + ".ms")
		
		--preexisting files
		local isFile = doesFileExist theSavePath
		if isUsed and not isFile do
		(
			messageBox ("Could not find corresponding Plugin File .\n" +
				"in Current Folder. Operation cancelled.") title:"Helper Maker"
			return()
		)
		if not isUsed and isFile do
			if not (queryBox ("Plugin File already exist.\n" +
				" Do you want to overwrite it?")  title:"Helper Maker") do
			(
				messageBox "Operation Cancelled." title:"Helper Maker" beep:false
				return()
			)
		
		--plugin file content
		local theClassIDLine = stringStream ""
		if isUsed do
		(
			local theTempFile = openFile theSavePath
			if theTempFile == undefined do
			(
				messageBox "Could not access Plugin File.\n Operation cancelled." title:"Warning"
				return()
			)
			while not eof theTempFile and not matchPattern theClassIDLine pattern:"classID*" do
			theClassIDLine = readLine theTempFile
			close theTempFile
		)
		local thePluginFile = createFile theSavePath
		if thePluginFile == undefined do return()
		format "plugin helper %\n" theClassName to:thePluginFile
		format "name:\"%\"\n" theName to:thePluginFile
		if isUsed then
			format "%" theClassIDLine to:thePluginFile
		else
		(
			local theClassID = genClassId returnValue:true
			format "classID:#(0x%, 0x%)\n" (bit.intAsHex theClassID[1]) (bit.intAsHex theClassID[2]) to:thePluginFile
		)
		format "category:\"%\"\n" theCategory to:thePluginFile
		format "extends:dummy\n" theCategory to:thePluginFile
		format "(\n" to:thePluginFile
		format "\tlocal theTriMesh = triMesh()\n" to:thePluginFile
		format "\tlocal theMesh\n" to:thePluginFile
		format "\tlocal lastSize\n" to:thePluginFile
		format "\tlocal originalSize = %\n" theMaxSize to:thePluginFile
		format "\tfunction buildTriMesh =\n" to:thePluginFile
		format "\t(\n" to:thePluginFile
		local theMesh = snapShotAsMesh theObject
		move theMesh -theObject.pos
		local theOldOption = options.printAllElements
		options.printAllElements = true
		format "\t\tv_arr =  %\n" (for i = 1 to getNumVerts theMesh collect getVert theMesh i) to:thePluginFile
		format "\t\tf_arr =  %\n" (for i = 1 to getNumFaces theMesh collect getFace theMesh i) to:thePluginFile
		format "\t\tsetMesh theTriMesh verts:v_arr faces:f_arr\n" to:thePluginFile
		local theEdgeVis = for f = 1 to getNumFaces theMesh where not (ba = (for i = 1 to 3 \
			where not getEdgeVis theMesh f i collect i) as bitArray).isEmpty collect #(f, ba)
		format "\t\ttheEdgeVis = %\n" theEdgeVis to:thePluginFile
		options.printAllElements = theOldOption
		format "\t\tfor f in theEdgeVis do for i in f[2] do\n" to:thePluginFile
		format "\t\t\tsetEdgeVis theTriMesh f[1] i false\n" to:thePluginFile
		format "\t)\n" to:thePluginFile
		format "\tparameters main rollout:params\n" to:thePluginFile
		format "\t(\n" to:thePluginFile
		format "\t\tsize type:#worldUnits ui:size default:%\n" theMaxSize to:thePluginFile
		format "\t)\n" to:thePluginFile
		format "\trollout params \"Parameters\"\n" to:thePluginFile
		format "\t(\n" to:thePluginFile
		format "\t\tfn showLocation =\n" to:thePluginFile
		format "\t\t(\n" to:thePluginFile
		format "\t\t\trollout rltLoc \"\"\n" to:thePluginFile
		format "\t\t\t(\n" to:thePluginFile
		format "\t\t\t\tlocal theLoc = getSourceFileName()\n" to:thePluginFile
		format "\t\t\t\tlocal w = (getTextExtent theLoc).x + 26\n" to:thePluginFile
		format "\t\t\t\tbutton done \"\" align:#left offset:[-8,0]\n" to:thePluginFile
		format "\t\t\t\ton rltLoc open do\n" to:thePluginFile
		format "\t\t\t\t(\n" to:thePluginFile
		format "\t\t\t\t\trltLoc.width = w\n" to:thePluginFile
		format "\t\t\t\t\tdone.caption = theLoc\n" to:thePluginFile
		format "\t\t\t\t)\n" to:thePluginFile
		format "\t\t\t\ton done pressed do destroyDialog rltLoc\n" to:thePluginFile
		format "\t\t\t)\n" to:thePluginFile
		format "\t\t\tcreateDialog rltLoc modal:true style:#(#style_border)\n" to:thePluginFile
		format "\t\t)\n" to:thePluginFile
		format "\t\tspinner size \"Size:\" type:#worldUnits range:[0,10000,0] align:#center\n" to:thePluginFile
		format "\t\tbutton orSz \"Original Size\" width:94\n" to:thePluginFile
		format "\t\tbutton shLoc \"Show Location\" toolTip:\"plugin's file\"width:94\n" to:thePluginFile
		format "\t\ton orSz pressed do size.value = originalSize\n" to:thePluginFile
		format "\t\ton shLoc pressed do showLocation()\n" to:thePluginFile
		format "\t)\n" to:thePluginFile
		format "\ton create do buildTriMesh()\n" to:thePluginFile
		format "\ton load do buildTriMesh()\n" to:thePluginFile
		format "\ton clone orig do buildTriMesh()\n" to:thePluginFile
		format "\ton useWireColor do %\n" (not useHelperWCChecked) to:thePluginFile
		format "\ton getDisplayMesh do\n" to:thePluginFile
		format "\t(\n" to:thePluginFile
		format "\t\tif theMesh == undefined or lastSize != size do\n" to:thePluginFile
		format "\t\t(\n" to:thePluginFile
		format "\t\t\ttheMesh = copy theTriMesh\n" to:thePluginFile
		format "\t\t\tlocal theScale = size / originalSize\n" to:thePluginFile
		format "\t\t\tscale theMesh [theScale, theScale, theScale]\n" to:thePluginFile
		format "\t\t\tlastSize = size\n" to:thePluginFile
		format "\t\t)\n" to:thePluginFile
		format "\t\ttheMesh\n" to:thePluginFile
		format "\t)\n" to:thePluginFile
		
		
		format "\ttool create\n" to:thePluginFile
		format "\t(\n" to:thePluginFile
		format "\t\ton mousePoint click do\n" to:thePluginFile
		format "\t\tcase click of\n" to:thePluginFile
		format "\t\t(\n" to:thePluginFile
		format "\t\t\t1: (size = 0; coordSys grid (nodeTM.translation = gridPoint))\n" to:thePluginFile
		format "\t\t\t2: #stop\n" to:thePluginFile
		format "\t\t)\n" to:thePluginFile
		format "\t\ton mouseMove click do\n" to:thePluginFile
		format "\t\tcase click of\n" to:thePluginFile
		format "\t\t(\n" to:thePluginFile
		format "\t\t\t2: size = 2 * length gridDist\n" to:thePluginFile
		format "\t\t)\n" to:thePluginFile
		format "\t)\n" to:thePluginFile
		format ")\n" to:thePluginFile
		
		close thePluginFile
		
		--register new helper plugin
		fileIn theSavePath
		try temp = execute (theClassName + " isHidden:true")
		catch
		(
			messageBox "Helper Creation failed!" title:"Helper Maker" beep:false
			return()
		)
		delete temp
		messageBox "New Helper Created Successfully." title:"Helper Maker" beep:false
		
		--get ready for the next one
		theObject = theName = undefined
		rltHelperMaker.pickObj.caption = "Pick Template Object"
		rltHelperMaker.editName.text = ""
		
	)--end fn buidPlugin
	
	rollout rltHelperMaker "Helper Maker" width:162 height:112
	(
		editText editName "Name:"
		editText editCat "Cat.:"
		fn isGeom obj = superClassOf obj == geometryClass or superClassOf obj == shape
		pickButton pickObj "Pick Template Object" filter:isGeom width:140
		button doIt "Make Helper Plugin" width:140
		checkButton showMore "" toolTip:"options" height:6 width:140
		checkBox subFolder "Sub-Folder from Category" checked:subFolderChecked
		checkBox useHelperWC "Use Helper def Wirecolor" checked:useHelperWCChecked
		on editName entered txt do
		(
			theName = editName.text = cleanString txt
		)
		on editCat entered txt do
		(
			theCategory = editCat.text = cleanString txt
		)
		on pickObj picked obj do
		(
			theObject = obj
			pickObj.caption = obj.name
		)
		on doIt pressed do
		case of
		(
			(theObject == undefined or isDeleted theObject):
				messageBox "Please pick an Object." title:"Helper Maker" beep:false
			(theName == undefined or theName.count == 0):
				messageBox "Please enter a Name." title:"Helper Maker" beep:false
			(theCategory == undefined or theCategory.count == 0):
				messageBox "Please enter a Category." title:"Helper Maker" beep:false
			default: buildPlugin()
		)
		on showMore changed val do
		(
			if val then rltHelperMaker.height = 152
			else rltHelperMaker.height = 112
		)
		on subFolder changed val do
		(
			subFolderChecked = val
		)
		on useHelperWC changed val do
		(
			useHelperWCChecked = val
		)
		
	)--end rollout rltHelperMaker
	
	createDialog rltHelperMaker pos:[900,100]
	
)--end undo off/script
