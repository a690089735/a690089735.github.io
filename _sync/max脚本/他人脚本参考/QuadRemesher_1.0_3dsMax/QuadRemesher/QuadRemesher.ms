-- Copyright (c) 2012-2019, EXOSIDE SARL
-- Author: Maxime Rouca

global verbose = false
global verboseTime = false -- true
global verboseMat = false
global newsButtonUrl = ""

-- ------ File IO specific function --------------
function myOpenFileWithTimeOut filename mode timeoutMS =
(
	-- NB: timeStamps returns the number of milliseconds from Midnight
	-- NB: sleep : time is in seconds!
	local file = fopen filename mode
	local endTime = timeStamp() + timeoutMS
	while ((file==undefined) and (timeStamp() < endTime)) do
	(
		sleep 0.01
		file = fopen filename mode
	)
	file
)

function myOpenFile filename mode =
(
    local file = myOpenFileWithTimeOut filename mode 2000    -- 2 seconds timeout
    file
)


-- write a string into a file without the NULL car at the end !
function writeStringToFile file str =
(
    local size = str.count
    local asc = 0
	for i = 1 to size do
	(
		asc = (bit.charAsInt str[i])
	    WriteByte file asc
	)
	str
)



-- output is in readTextFileLines_Lines
function readTextFileLines filepath =
(
	Global readTextFileLines_Lines=#() --the array that will hold the paths
	local file = openFile filepath
	if (file != undefined) then (
		while not eof file do 
		(
			r = readLine file
			append readTextFileLines_Lines r --append the first line to paths array
			--line_cnt += 1 --add 1 to the counter
		)
		--seek file 0    -- reset position to beginning
		close file -- closes the file
	) else (
		--append readTextFileLines_Lines "New Version Available TEST!"
		--append readTextFileLines_Lines "www.exoside.com"
	)
)


Global FbxChangedKeys=#()
Global FbxChangedValues=#()
fn ChangeFbxExportOption key value =
(
	local curValue = FbxExporterGetParam key
	append FbxChangedKeys key
	append FbxChangedValues curValue
	FbxExporterSetParam key value
)
fn RestoreAllFbxExportOptions =
(
	for i = 1 to FbxChangedKeys.count do (
		FbxExporterSetParam FbxChangedKeys[i] FbxChangedValues[i]
	)
	FbxChangedKeys=#()
	FbxChangedValues=#()
)
	
fn CreateMultiMaterialForGroups maxMatId =
(
	if (maxMatId == -1) then (
		-- must create for all MatIds existing in the mesh
		maxMatId = 0
		if (classOf $ == editable_poly) then (
			if (verboseMat) do format "Editable poly case!!!\n"
			nf = polyop.getNumFaces($)
			for f = 1 to nf do (
				fm = polyop.getFaceMatID $ f
				if ((fm != undefined) and (fm > maxMatId)) then (
					maxMatId = fm
				)
			)
			if (verboseMat) do format "evaluate maxMatId (EditPoly) -> %\n" maxMatId
		) else (
			if (verboseMat) do format "NOT Editable poly case!!!\n"
			themesh = $.baseobject.mesh
			nf = getNumFaces themesh
			for f = 1 to nf do (
				fm = getFaceMatID themesh f
				if ((fm != undefined) and (fm > maxMatId)) then (
					maxMatId = fm
				)
			)
			if (verboseMat) do format "Evaluate maxMatId (not EditPoly) -> %\n" maxMatId
		)
	)
	if (verboseMat) do format "create MultiMat : maxMatId = %\n" maxMatId
	
	if (maxMatId == 0) then (
		if (verboseMat) do format "create MultiMat -> return undefined!!!!%\n" 
		return undefined
	)
	
	mm = multimaterial numsubs:maxMatId
	for i=1 to maxMatId do (
		sm = Standardmaterial()
		
		--mycolor = color 0 0 0
		--hue = random 0 255
		--mycolor.h = hue
		--mycolor.s = 128
		--mycolor.v = 128
		--sm.Diffuse = mycolor
		
		r = random 0 255
		g = random 0 255
		b = random 0 255
		sm.Diffuse = color r g b
		
		mm.materialList[i] = sm
		if (verboseMat) do format "        MultiMat[%] -> rgb= % % %\n" i r g b
	)
	mm
)

-- rollout user settings variables:
global gTargetQuadCount
global gAdaptiveQuadCount
global gCurvatureAdaptivness
--global gSymmetryEnabled
global gSymmetryX
global gSymmetryY
global gSymmetryZ
global gUseSmoothingGroups
global gUseIndexedNormals
global gUseMatIDs
global gAbortPressed

global progressTime_RemeshStart = 3.0
global progressTime_RemeshPart = 94.0
global progressTime_LoadStart = progressTime_RemeshStart + progressTime_RemeshPart
global progressTime_LoadPart = 100 - progressTime_LoadStart

	
fn importObjFile filename &theRollout =
(
	local theIniName = undefined
	local storeUseLogging = undefined
	local storePreset = undefined
	local storeResetScene = undefined
	local storeSingleMesh = undefined
	local storeAsEditablePoly = undefined
	local storeRetriangulate = undefined
	local storeFlipZyAxis = undefined
	local storeTextureCoords = undefined
	local storeSmoothingGroups = undefined
	local storeFlipNormals = undefined
	local storeNormalsType = undefined
	local storeSmoothAngle = undefined
	local storeConvert = undefined
	local storeObjScale = undefined
	local storeImportMaterials = undefined
	
	local ver = getVersion()
	if (ver >= 12000) then ( -- from Max 2009
		theIniName = objImp.getIniName()

		storeUseLogging = getIniSetting theIniName "General" "UseLogging"
		storePreset = getIniSetting theIniName "General" "Preset"
		storeFlipZyAxis = getIniSetting theIniName "Geometry" "FlipZyAxis"
		storeTextureCoords = getIniSetting theIniName "Geometry" "TextureCoords"
		storeSmoothingGroups = getIniSetting theIniName "Geometry" "SmoothingGroups"
		storeFlipNormals = getIniSetting theIniName "Geometry" "FlipNormals"
		storeNormalsType = getIniSetting theIniName "Geometry" "NormalsType"
		storeSmoothAngle = getIniSetting theIniName "Geometry" "SmoothAngle"
		storeResetScene = getIniSetting theIniName "Objects" "ResetScene"
		storeSingleMesh = getIniSetting theIniName "Objects" "SingleMesh"
		storeAsEditablePoly = getIniSetting theIniName "Objects" "AsEditablePoly"
		storeRetriangulate = getIniSetting theIniName "Objects" "Retriangulate"
		storeConvert = getIniSetting theIniName "Units/Scale" "Convert"
		storeObjScale = getIniSetting theIniName "Units/Scale" "ObjScale"
		storeImportMaterials = getIniSetting theIniName "Material" "ImportMaterials"

		setIniSetting theIniName "General" "UseLogging" "0"
		setIniSetting theIniName "General" "Preset" ""
		setIniSetting theIniName "Geometry" "FlipZyAxis" "1" 
		setIniSetting theIniName "Geometry" "TextureCoords" "1" 
		setIniSetting theIniName "Geometry" "SmoothingGroups" "1" 
		setIniSetting theIniName "Geometry" "FlipNormals" "0" 
		setIniSetting theIniName "Geometry" "NormalsType" "2" 
		setIniSetting theIniName "Geometry" "SmoothAngle" "60" 
		setIniSetting theIniName "Objects" "ResetScene" "0"
		setIniSetting theIniName "Objects" "SingleMesh" "1"
		setIniSetting theIniName "Objects" "AsEditablePoly" "1"
		setIniSetting theIniName "Objects" "Retriangulate" "0"
		setIniSetting theIniName "Units/Scale" "Convert" "0" 
		setIniSetting theIniName "Units/Scale" "ObjScale" "1.0" 
		--setIniSetting theIniName "Material" "UniqueWireColor" "1"
		setIniSetting theIniName "Material" "ImportMaterials" "1" 
		--setIniSetting theIniName "Geometry" "Shapes" "0"
		--setIniSetting theIniName "Geometry" "CenterPivots" "0"
	)
		
	importFile filename #noPrompt

	if (ver >= 12000) then ( -- (from Max 2009)
		setIniSetting theIniName "General" "UseLogging" storeUseLogging
		setIniSetting theIniName "Objects" "ResetScene" storeResetScene
		setIniSetting theIniName "General" "Preset" storePreset
		setIniSetting theIniName "Geometry" "FlipZyAxis" storeFlipZyAxis
		setIniSetting theIniName "Geometry" "TextureCoords" storeTextureCoords 
		setIniSetting theIniName "Geometry" "SmoothingGroups" storeSmoothingGroups
		setIniSetting theIniName "Geometry" "FlipNormals" storeFlipNormals
		setIniSetting theIniName "Geometry" "NormalsType" storeNormalsType 
		setIniSetting theIniName "Geometry" "SmoothAngle" storeSmoothAngle
		setIniSetting theIniName "Objects" "SingleMesh" storeSingleMesh
		setIniSetting theIniName "Objects" "AsEditablePoly" storeAsEditablePoly
		setIniSetting theIniName "Objects" "Retriangulate" storeRetriangulate
		setIniSetting theIniName "Units/Scale" "Convert" storeConvert 
		setIniSetting theIniName "Units/Scale" "ObjScale" storeObjScale
		setIniSetting theIniName "Material" "ImportMaterials" storeImportMaterials
	)
)

fn importExoMesh filename &theRollout =
(
	file = fopen filename "rb"
	
	if verboseTime do startTime = timeStamp()

	verifCode = ReadLong file
	blocCount = ReadLong file
	vtxCount = ReadLong file
	faceCount = ReadLong file
	cornerCount = ReadLong file
	uvCount = ReadLong file
	
	if (verbose) do (
		format "----- HEADER ---- \n" blocCount
		format "blocCount = %\n" blocCount
		format "vtxCount = %\n" vtxCount
		format "faceCount = %\n" faceCount
		format "cornerCount = %\n" cornerCount
		format "uvCount = %\n" uvCount
	)
	
	verticesArray = #()
	faceIndicesArray = #()
	faceBlocsArray = #()
	trianglesArray = #()
	smoothingGroupsArray = #()
	materialIdsArray = #()
	
	hasMaterialIds = false
	hasSmoothingGroups = false
	
	-- NB: in maxscript, arrays are 1-based!
	-- cannot declare array size (reserve space...) -> only append right now...
	
	for b = 1 to blocCount do (
		-- read bloc header
		blocId = ReadLong file
		blocMemSize = ReadLong file
		blocItemCount = ReadLong file
		blocOption = ReadLong file
		
		-- read bloc data
		if (blocId == 100) do ( -- vertices
			if (verbose) do format "Vertices Array : % points\n" blocItemCount
			verticesArray[blocItemCount] = point3 0 0 0    -- prealloc full size!
			for j=1 to blocItemCount do (
				x = ReadFloat file
				y = ReadFloat file
				z = ReadFloat file
				--p = point3 x y z
				--append verticesArray p
				verticesArray[j] = point3 x y z
			)
			continue;
		) 
		if (blocId == 101) do ( -- FaceIndices
			if (verbose) do format "FaceIndices Array : size = %\n" blocItemCount
			faceIndicesArray[blocItemCount] = 0    -- prealloc full size!
			for j=1 to blocItemCount do (
				i = ReadLong file
				--append faceIndicesArray i
				faceIndicesArray[j] = i
			)
			continue;
		) 
		if (blocId == 102) do ( -- FaceBlocs
			if (verbose) do format "FaceBlocs Array : size = %\n" blocItemCount
			faceBlocsArray[blocItemCount] = 0    -- prealloc full size!
			for j=1 to blocItemCount do (
				i = ReadLong file
				--append faceBlocsArray i
				faceBlocsArray[j] = i
			)
			continue;
		)
		
		--) else if (blocId == 103) do ( -- UVIndices
		--) else if (blocId == 104) do ( -- UVs
		--) else if (blocId == 105) do ( -- PolygonGroups

		if (blocId == 106) do ( -- MaterialIds
			if (verbose) do format "MaterialIds Array : size = %\n" blocItemCount
			materialIdsArray[blocItemCount] = 0
			for j=1 to blocItemCount do (
				i = ReadLong file
				--format "    matId[%] = % \n" j i
				--append materialIdsArray i
				materialIdsArray[j] = i
			)
			hasMaterialIds = true
			continue;
		)
		if (blocId == 107) do ( -- SmoothingGroups
			if (verbose) do format "SmoothingGroups Array : size = %\n" blocItemCount
			smoothingGroupsArray[blocItemCount] = 0
			for j=1 to blocItemCount do (
				i = ReadLong file #unsigned
				--format "    smoothGroup[%] = % \n" j i
				--append smoothingGroupsArray i
				smoothingGroupsArray[j] = i
			)
			hasSmoothingGroups = true
			continue;
		)
		
		-- Bloc not handled: skip bloc datas
		seekmov = blocMemSize - 16
		fseek file seekmov #seek_cur
	)
	FClose file
	
	theRollout.ProgressBar.value = progressTime_LoadStart + progressTime_LoadPart * 0.33
	
	-- 	faceBlocsArray = #()
	if verboseTime do fileReadTime = timeStamp()

	
	-- create the mesh and editable_poly
	m = mesh vertices:verticesArray faces:#()
	convertTo m Editable_Poly
	
	if verboseTime do createMeshVerticesTime = timeStamp()

	for f=1 to faceCount do (   -- f is a 1-based index in 'faceBlocsArray'
		facArray = #()
		for j=faceBlocsArray[f] to faceBlocsArray[f+1]-1 do (   -- 'j' is a 0-based index in faceIndicesArray
			append facArray (faceIndicesArray[j+1]+1)
		)
		
		polyop.createPolygon m facArray 
	)

	theRollout.ProgressBar.value = progressTime_LoadStart + progressTime_LoadPart * 0.66
	
	if verboseTime do createPolygonsTime = timeStamp()

	if (hasMaterialIds) do (
		polyop.setFaceMatID m faceCount (materialIdsArray[faceCount]+1)
		for f=1 to faceCount do (
			polyop.setFaceMatID m f (materialIdsArray[f]+1)
		)
	)
	if (hasSmoothingGroups ) do (
		polyop.setFaceSmoothGroup m faceCount smoothingGroupsArray[faceCount] -- reserve ?
		for f=1 to faceCount do (
			polyop.setFaceSmoothGroup m f smoothingGroupsArray[f]
		)
	)

	select m
	
	theRollout.ProgressBar.value = 100.0
	
	-- copy: 
	-- essayer : m2 = copy m
	-- ou : maxOps.cloneNodes (selection as array) cloneType:#instance newNodes:&nnl #nodialog

	if verboseTime do (
		endTime = timeStamp()
		format "importRetopo (exomesh) : TOTAL_LoadTime: % ms    LoadArrays: % ms   CreateMeshVertices: % ms   CreatePolygons: % ms   Material+SmGroups+Select: % ms\n" (entTime-startTime) (fileReadTime-startTime) (createMeshVerticesTime-fileReadTime) (createPolygonsTime-createMeshVerticesTime) (endTime-createPolygonsTime)
		-- theHold(undo) ON  (> 12 000 quad) : LoadArrays: 274 ms   CreateMeshVertices: 3 ms   CreatePolygons: 106664 ms (TRES TRES LONG)    MAterial+SmGroups+Select: 8107 ms  (TRES LONG AUSSI)
		-- theHold(undo) COMMENTED (5000 vtx,  SG+MatIds Off) : importRetopo : LoadArrays: 53 ms   CreateMeshVertices: 3 ms   CreatePolygons: 660 ms   MAterial+SmGroups+Select: 5 ms
		--										SG+MatIds On :                 LoadArrays: 61 ms   CreateMeshVertices: 2 ms   CreatePolygons: 637 ms   Material+SmGroups+Select: 638 ms
		--										SG+MatIds On + Set LastOne For Reserve: LoadArrays: 60 ms   CreateMeshVertices: 2 ms   CreatePolygons: 623 ms   Material+SmGroups+Select: 1034 ms
		--																				LoadArrays: 66 ms   CreateMeshVertices: 2 ms   CreatePolygons: 628 ms   Material+SmGroups+Select: 2770 ms
		--																				LoadArrays: 50 ms   CreateMeshVertices: 2 ms   CreatePolygons: 610 ms   Material+SmGroups+Select: 44 ms (2nd attempt)
		--    du coup l'undo ne s'applique pas au RetopoMesh, mais fonctionne bien sur le reste...
		-- theHold(undo) ON (5000 vtx,  SG+MatIds Off) : LoadArrays: 53 ms   CreateMeshVertices: 3 ms   CreatePolygons: 8213 ms   Material+SmGroups+Select: 8 ms
		-- theHold(undo) ON (5000 vtx,  SG+MatIds On) : LoadArrays: 100 ms   CreateMeshVertices: 2 ms   CreatePolygons: 8431 ms   Material+SmGroups+Select: 2916 ms
		--												LoadArrays: 64 ms   CreateMeshVertices: 2 ms   CreatePolygons: 8540 ms   Material+SmGroups+Select: 913 ms
	)
)	


fn EnableDisableUIItems &theRollout enabledValue =
(
	theRollout.TargetQuadCount.enabled = enabledValue
	theRollout.QuadCountSlider.enabled = enabledValue
	
	theRollout.CurvatureAdaptivness.enabled = enabledValue
	theRollout.AdaptiveQuadCount.enabled = enabledValue
	theRollout.UseVertexColor.enabled = enabledValue
	theRollout.PaintedQuadDensity.enabled = enabledValue
	theRollout.PaintButton.enabled = enabledValue

	--theRollout.SymmetryEnabled.enabled = enabledValue
	theRollout.SymmetryX.enabled = enabledValue
	theRollout.SymmetryY.enabled = enabledValue
	theRollout.SymmetryZ.enabled = enabledValue
	theRollout.UseSmoothingGroups.enabled = enabledValue
	theRollout.UseIndexedNormals.enabled = enabledValue
	theRollout.UseMatIDs.enabled = enabledValue
	theRollout.AutoDetectHardEdges.enabled = enabledValue
	
	theRollout.LicenseMgrButton.enabled = enabledValue
	theRollout.CreateMultiMaterialButton.enabled = enabledValue
	theRollout.NewsButton.enabled = enabledValue

	theRollout.RemeshButton.enabled = enabledValue
	theRollout.RemeshButton.visible = theRollout.RemeshButton.enabled; 
	
	theRollout.StopButton.enabled = not enabledValue
	theRollout.StopButton.visible = theRollout.StopButton.enabled
	theRollout.progressBar.enabled = not enabledValue
	theRollout.progressBar.visible = theRollout.progressBar.enabled
)

/* ----------------- do the retopo ----------------- */
fn DoRetopo &theRollout =
(
	if (theRollout == undefined) then (
		format "ERROR : theRollout is undefined!\n"
		return 0
	)
	
	if ($ == undefined) then (
		messagebox "One object must be selected !"
		return 0
	)
		
	gAbortPressed = false
	theRollout.ProgressBar.value = 0.0

	gTargetQuadCount = theRollout.TargetQuadCount.value
	gCurvatureAdaptivness = theRollout.CurvatureAdaptivness.value
	gAdaptiveQuadCount = theRollout.AdaptiveQuadCount.checked
	--gSymmetryEnabled = theRollout.SymmetryEnabled.checked
	gSymmetryX = theRollout.SymmetryX.checked
	gSymmetryY = theRollout.SymmetryY.checked
	gSymmetryZ = theRollout.SymmetryZ.checked
	gUseSmoothingGroups = theRollout.UseSmoothingGroups.checked
	gUseIndexedNormals = theRollout.UseIndexedNormals.checked
	gUseMatIDs = theRollout.UseMatIDs.checked
	gUseVertexColors = theRollout.UseVertexColor.checked
	gAutoDetectHE = theRollout.AutoDetectHardEdges.checked
	
	gRetopoUseExoMesh = false -- true   -- false: FBX (UNDO problem)     true:use internal format
	gRetopoUseObj = false

	-- defines some paths:
	try (
	thisScript = getThisScriptFilename()
	folder = getFilenamePath thisScript   -- NB: has an \ at the end!
	enginePath = folder
	tempFilesPath = systemTools.getEnvVariable("TEMP") + "\\Exoside\\QuadRemesher\\3dsMax\\";
	--format "tempFilesPath = %\n" tempFilesPath
	makeDir tempFilesPath -- create the folder if needed
	remesherPath = enginePath + "xremesh.exe"
	settingsPath = tempFilesPath + "remeshSettings.txt"
	inputMeshPath = tempFilesPath + "inputMesh.fbx"
	if (gRetopoUseExoMesh == true) then (
		outputMeshPath = tempFilesPath + "retopoMesh.exm"
	) else ( 
		if (gRetopoUseObj == true) then (
			outputMeshPath = tempFilesPath + "retopoMesh.obj"
		) else (
			outputMeshPath = tempFilesPath + "retopoMesh.fbx"
		)
	)
	ProgressFilePath = tempFilesPath + "progress.txt"
	--format "thisScriptFileName = %\n" thisScript
	--format "inputMeshPath = %\n" inputMeshPath
	) catch ( 
	messagebox "Error: Cannot set paths..." 
	return 0
	)
	
	-- Get InputObject and keep ref on it
	try (
	inputSelObj = undefined
	for obj in getCurrentSelection() do (
		if (inputSelObj == undefined) then (
			--format "obj = %\n" (obj as string)
			if (IsKindOf obj GeometryClass) then
				inputSelObj = obj
		)
	)
	if (inputSelObj == undefined) then (
		messagebox "One object must be selected !"
		return 0
	)
	--format "inputSelObj = %\n" ($inputSelObj as string)
	) catch ( 
	messagebox "Error: Cannot get input object..." 
	return 0
	)
	
	-- retrieve symetry info from SymmetryModifier:
	--symAxis = "Off"
	--if (gSymmetryEnabled) then (
	--	CurrentMod = modpanel.getCurrentObject()
	--	--format "curModClass = %\n" ((ClassOf CurrentMod) as string)
	--	if ((ClassOf CurrentMod) == Symmetry) then (
	--		symAxis = (CurrentMod.axis) as string
	--	)
	--)
	symAxis = ""
	if (gSymmetryX) then ( symAxis += "X" )
	if (gSymmetryY) then ( symAxis += "Y" )
	if (gSymmetryZ) then ( symAxis += "Z" )
	
	-- auto assign multi-material if needed (see notes in docx)
	try (
	MultiMaterialCreated = false
	prevMaterial = undefined
	if (gUseMatIDs) then (
		if ((inputSelObj.material == undefined) or ((IsKindOf inputSelObj.material 'MultiMaterial') == false)) then (
			newmat = CreateMultiMaterialForGroups -1
			if (newmat != undefined) then (
				newmat.name = "newQuadRemesherMat"
				prevMaterial = inputSelObj.material
				inputSelObj.material = newmat
				MultiMaterialCreated = true
				if (verboseMat) do format "assign MultiMaterial !\n"
			)
		)
	)
	) catch ( 
	format "Warning: cannot create multimaterial\n"
	)

	-- write settings file 
	try (
	file = myOpenFile settingsPath "wt"
	writeStringToFile file ("HostApp=3dsMax\n")
	writeStringToFile file ("FileIn="+inputMeshPath+"\n")
	writeStringToFile file ("FileOut="+outputMeshPath+"\n")
	writeStringToFile file ("ProgressFile="+ProgressFilePath+"\n")
	writeStringToFile file ("TargetQuadCount="+(gTargetQuadCount as string)+"\n")
	writeStringToFile file ("CurvatureAdaptivness="+(gCurvatureAdaptivness as string)+"\n")
	writeStringToFile file ("ExactQuadCount="+((not gAdaptiveQuadCount) as string)+"\n")
	writeStringToFile file ("SymAxis="+symAxis+"\n")
	writeStringToFile file ("SymLocal=1\n") -- always use local Sym as it's not a public options...
	writeStringToFile file ("UseSmoothingGroups="+(gUseSmoothingGroups as string)+"\n")
	writeStringToFile file ("UseIndexedNormals="+(gUseIndexedNormals as string)+"\n")
	writeStringToFile file ("UseMaterialIds="+(gUseMatIDs as string)+"\n")
	writeStringToFile file ("UseVertexColorMap="+(gUseVertexColors as string)+"\n")
	writeStringToFile file ("AutoDetectHardEdges="+(gAutoDetectHE as string)+"\n")

	fclose file
	) catch ( 
	  messagebox "Error: Cannot write settings..." 
	  return 0
	)
	
	EnableDisableUIItems theRollout false
	
	-- export	
	try (
	FbxChangedKeys=#()
	FbxChangedValues=#()
	ChangeFbxExportOption "Animation" False
	ChangeFbxExportOption "ASCII" False
	ChangeFbxExportOption "FileVersion" "FBX201300"
	ChangeFbxExportOption "Cameras" False
	ChangeFbxExportOption "EmbedTextures" False
	ChangeFbxExportOption "Lights" False
	ChangeFbxExportOption "NormalsPerPoly" False
	ChangeFbxExportOption "PointCache" False
	ChangeFbxExportOption "NormalsPerPoly" False
	ChangeFbxExportOption "SelectionSetExport" False
	if (gUseSmoothingGroups == true) then (
		ChangeFbxExportOption "SmoothingGroups" True
	) else (
		ChangeFbxExportOption "SmoothingGroups" False
	)
	ChangeFbxExportOption "TangentSpaceExport" False
	ChangeFbxExportOption "Triangulate" False
	ChangeFbxExportOption "UpAxis" "Z"   -- in Max: Z is Up !
	ChangeFbxExportOption "ScaleFactor" 1  -- fix Scaling issue
	-- NB: no available option for MaterialIds...
	) catch ( 
	  format "Warning: cannot change FbxOptions\n"
	)
	
	try (
	deleteFile outputMeshPath
	deleteFile ProgressFilePath
	exportFile inputMeshPath #noPrompt selectedOnly:true
	) catch ( 
	  format "Warning: during fbx export...\n"
	)
	
	-- Restore options
	RestoreAllFbxExportOptions()
	
	theRollout.ProgressBar.value = 1.0

	-- Restore Material if modified
	if (MultiMaterialCreated) then (
		inputSelObj.material = prevMaterial
	)
	
	-- Launch xremesher engine
	local shellOptions = "-s \"" + settingsPath + "\""
	--format "launching: % %\n" remesherPath shellOptions
    ShellLaunch remesherPath shellOptions
	
	theRollout.ProgressBar.value = 2.0

	sleep 0.1 -- time in seconds
	
	local stayInLoop = true
	local sleepTime = 0.1   -- starts with 0.1 s, updated after... check progress every 'sleepTime'
	local ratio = 0
	local safetyCount=0
	do (
		sleep sleepTime
		safetyCount = safetyCount + 1
		
		-- read progress:
		readTextFileLines ProgressFilePath
		--readTextFileLines_Lines = undefined -- test abort system!!!
		if ((readTextFileLines_Lines != undefined) and (readTextFileLines_Lines.count >= 1)) then (
			local ratio = readTextFileLines_Lines[1] as float;
			if (ratio == undefined) then ( 
				format "WARNING :noratio,  line[1] = '%'" readTextFileLines_Lines[1]
			)
			if (ratio != undefined) then (
				if (ratio < 0) then ( -- error or need activation
					stayInLoop=false
					if (readTextFileLines_Lines.count >= 2) then (
						msg = readTextFileLines_Lines[2]
						if (msg != "") then (
							messagebox msg
						)
					)
				)
				
				if (ratio >= 0) then (
					if (ratio == 2) then (   -- succeded
						--format "success!!!!\n"
						stayInLoop=false
					) else (
						pbarValue = progressTime_RemeshPart * ratio + progressTime_RemeshStart
						theRollout.ProgressBar.value = pbarValue
						--windows.processPostedMessages() -- il faudrait aussi passer la dialog/rollout en modal : la fermer et la rouvrir en modal....
						--format "set progress = %\n" pbarValue
						
						-- update sleepTime
						if ((safetyCount >= 3) and (ratio < 0.6)) then    -- in middle of long process...check less often
							sleepTime = 0.4
						if ((ratio > 0.7) and (safetyCount < 10)) then		-- approaching end of Progress... check more often
							sleepTime = 0.1
					)
				)
			)
		)
		windows.processPostedMessages() -- il faudrait aussi passer la dialog/rollout en modal : la fermer et la rouvrir en modal....
		
		-- since the user can abort by pressing the button, no need to quit after 30s!
		--if ((readTextFileLines_Lines == undefined or readTextFileLines_Lines.count == 0) and (safetyCount * sleepTime > 30)) then (   -- after 30 seconds without progress file ->  auto Abort!
		--	messagebox "Remeshing failed (no progress after 30 seconds)"
		--	stayInLoop=false
		--)
		
		if (gAbortPressed) then ( 
			stayInLoop=false
		)

	) while (stayInLoop)

	if ((ratio >= 1.0) and (gAbortPressed == false) and (inputSelObj != undefined)) then ( -- success !
		--undo off ( --- sur la partie import, l'undo ne peut pas marcher donc theHold.Begin() ne sert a rien!

		-- import retopo
		if (gRetopoUseExoMesh == true) then ( -- exomesh format
			importExoMesh outputMeshPath theRollOut
			
		) else ( -- fbx or obj
			if (verboseTime) do startTime = timeStamp()

			if (gRetopoUseObj) then (
				importObjFile outputMeshPath theRollOut

			) else ( -- FBX format
				try (
				FBXImporterSetParam "PushSettings"
				pushOK = true
				) catch (pushOK = false)
				FbxImporterSetParam "SmoothingGroups" true
				FbxImporterSetParam "Animation" false
				FbxImporterSetParam "AxisConversion" false
				FbxImporterSetParam "Cameras" false
				FbxImporterSetParam "GenerateLog" false
				FbxImporterSetParam "FillTimeline" false
				FbxImporterSetParam "ScaleConversion" false
				FbxImporterSetParam "ScaleFactor" 1  -- fix Scaling issue
				
				importFile outputMeshPath #noPrompt

				if (pushOK) do FBXImporterSetParam "PopSettings"
			)
			
			if (verboseTime) do (
				endTime = timeStamp()
				if (gRetopoUseObj) then (
					formatTxt = "OBJ"
				) else (
					formatTxt = "FBX"
				)
				format "importRetopo (%) : TOTAL_LoadTime = % ms  \n" formatTxt (endTime-startTime)
			)
		)
		--) -- undo off

--		theHold.Begin()
		--undo off (
		-- SHOULD TRY A COPY with UNDO !!!!
		
		retopoSel = $

		if (retopoSel != undefined) then (
			-- set retopoMesh name
			retopoSel.name = inputSelObj.name + "_Retopo"
			
			-- If, MultiMaterialAuto Created -> remove it
			-- If, InputMesh had already a material -> assign it to the Retopo as well
			
			if (MultiMaterialCreated) then (
				-- what to do ?
				-- also assign same material than input...
				retopoSel.material = inputSelObj.material
			) else (
				retopoSel.material = inputSelObj.material
			)
		)
		
		-- make source invisible
		inputSelObj.isNodeHidden = true 
		
--		theHold.Accept "Remeshing"
		--) -- undo off
	)

	theRollout.ProgressBar.value = 0
	EnableDisableUIItems theRollout true	
)


/* ----------------- LicenseManager button ----------------- */
fn DoLicenseMgr &theRollout =
(
	-- defines some paths:
	thisScript = getThisScriptFilename()
	folder = getFilenamePath thisScript   -- NB: has an \ at the end!
	enginePath = folder
	licManagerPath = enginePath + "xrLicenseManager.exe"
	
	-- Launch xrLicenseMgr
	local shellOptions = "-hostApp 3dsMax"
	--format "Launch : % % \n" licManagerPath shellOptions
    ShellLaunch licManagerPath shellOptions
)

/* ----------------- MultiMaterial button ----------------- */
fn DoCreateMultiMaterial &theRollout =
(
	newmat = CreateMultiMaterialForGroups -1
	if (newmat != undefined) then (
		newmat.name = "MultiMat"
		$.material = newmat
	)
)

/* ----------------- Debug/Test button ----------------- */
fn DoTestSelection &theRollout =
(
	local node = $
	local modifier = modPanel.getCurrentObject()
	
	format "========================= Test selection ====================\n"
	--format "modPanel.getCurrentObject() isKindOf GeometryClass == %" (isKindOf modifier GeometryClass)
		
	format "class of node : % \n" (classof node)
	format "class of node.baseObject : '%' \n" (classof node.baseObject)
	format "class of node.mesh : '%' \n" (classof node.mesh)
	format "class of modifier : '%' \n" (classof modifier)
	-- pas de format modifier.mesh.... "class of modifier.mesh : '%' \n" (classof modifier.mesh) -- -> TriMesh sur le baseObject
	format "\n"

	-- Node Properties and Methods
	try (
	format " -- Node Properties \n"
	showProperties node
	format " -- Node Methods \n"
	showMethods node
	) catch ()
	format "\n"

	-- modifier Properties and Methods
	try (
	if (modifier != undefined) then (
		format " -- Modifier Properties \n"
		format "classof modPanel.getCurrentObject() = % \n" (classof modifier)
		showProperties modifier
		format " -- Modifier Methods \n"
		--showMethods modifier
	) else (
		format " modifier == undefined!\n"
	)
	) catch ()
	format "\n"

	-- node.baseObject Properties and Methods
	try (
	if (node.baseObject != undefined) then (
		format " -- BaseObject Properties \n"
		format "classof node.baseObject = %" (classof node.baseObject)
		showProperties node.baseObject
		format " -- BaseObject Methods \n"
		showMethods node.baseObject
	) else (
		format " node.baseObject == undefined!\n"
	)
	) catch ()
	format "\n"
	
	-- node.mesh Properties and Methods
	try (
	if (node.mesh != undefined) then (
		format " -- node.mesh Properties \n"
		format "classof node.mesh = % \n" (classof node.mesh)
		showProperties node.mesh
		format " -- node.mesh Methods \n"
		showMethods node.mesh
	) else (
		format " node.mesh == undefined!\n"
	)
	) catch ()
	format "\n"
)


fn SetColorFromDensitySlider &theRollout =
(
	vertexColorSliderValue = theRollout.PaintedQuadDensity.value
	
	--Mapping2: Slider in [0.25, 4] like in ZBrush
	maxSliderValue = 4
	minSliderValue = 0.25
	normalizedValue = 0.0
	if (vertexColorSliderValue > 1.0) then normalizedValue = (vertexColorSliderValue - 1.0) / (maxSliderValue - 1.0)
	if vertexColorSliderValue < 1.0 then normalizedValue =  - ((1.0/vertexColorSliderValue) - 1.0) / ((1.0/minSliderValue) - 1.0)

	if (normalizedValue > 1) then normalizedValue = 1
	if (normalizedValue < -1) then normalizedValue = -1

	-- normalizedValue to color
	r = 1.0
	g = 1.0
	b = 1.0
	if normalizedValue > 0.0 then (
		r = 1
		g = 1-normalizedValue
		b = 1-normalizedValue
	) else (
		r = 1+normalizedValue
		g = 1
		b = 1
	)
	r = r*255
	g = g*255
	b = b*255
	
	-- assign color:
	vpt = VertexPaintTool()
	if (vpt != undefined) then (
		vpt.paintColor = color r g b
	)	
)





/* ----------------- The rollout ----------------- */
--qrBETA=" Beta 8"
qrBETA="" -- Candidate Release
--posRemeshButton=17
--posTargetQuadCount=84
posTargetQuadCount=17
posGrp1=posTargetQuadCount+48
Grp1LineH=23
Grp1H = 5*Grp1LineH + 4
posGrp2 = posGrp1 + Grp1H + 16
Grp2LineH = 23
Grp2H = 4*Grp2LineH + 30
posGrp3 = posGrp2 + Grp2H + 16
Grp3LineH = 23
Grp3H = 3*Grp3LineH + 37
BottomStartY = posGrp3 + Grp3H + 10 -- starting after Misc options 
posRemeshButton=BottomStartY
LineX1 = 14   -- align options lines
LineX2 = 24   -- inside groups
WinW = 260
GrpW = WinW-2*LineX1
GroupedButtonWidth = (WinW-2*26)
RemeshButtonWidth = GrpW
RemeshButtonHeight = 42
AbortButtonWidth = 40
WebDocWidth = 56
WinH = BottomStartY+RemeshButtonHeight+6
symItemW = (WinW - 50) / 3

CurvatureAdaptivnessToolTip="Allows to control how quad's size locally adapts to curvatures.\nThe higher it is, the smaller the quads will be on high curvature areas.\nSet it at 0, to get uniform quads size."
AdaptiveQuadCountToolTip="Adaptive Quad Count:\nOn: Creates more polygons than asked to fit high curvatures area. \nOff(default): Respect the Target-Quad-Count more exactly.\nIt's advised to let it at 'Off' to better respect the Target-Quad-Count. see the doc for more explanations. "
UseVertexColorToolTip="Use 'Vertex Colors Map' to control locally Quads size density.\n (default=Off)"
PaintedDensitySliderToolTip="Defines the Color to paint to control locally the desired Quad Density variations.\n . from -4 => 'divide density by 4'  =  Big Quads  =  Cyan colors \n . to +4  => 'multiply density by 4'  =  Small Quads  =  Red color"
UseSmoothingGroupsToolTip="If On, QuadRemesher will use the existing 'Smoothing Groups' borders to guide the quad remeshing.\nand 'SmoothingGroups' will be maintained after remeshing"
UseNormalsToolTip="If On, QuadRemesher will use the existing 'Normals' to guide the quad remeshing where the Normals are defining hard edges."
UseMaterialsIdToolTip="If On, QuadRemesher will use the existing 'MaterialIds' to guide the quad remeshing on Materials borders.\nand 'MaterialIds' will be maintained after remeshing."
DetectHardEdgesToolTip="If On, QuadRemesher will detect/compute Hard-Edges automatically based on the geometry (using a mix of edge's angles and other geometrical considerations).\nOn smooth organic shapes, it's advises to uncheck it."
symToolTip="These options allows to perform symmetrical quad remeshing. It's possible to combine all 3 symmetry axis.\nTAKE CARE: The axis are Local Coordinates axis! It's advised to set the Gizmo in 'Local' mode to better see the Local Coordinates axis."
LicenseMgrButtonToolTip="Launch License Manager if you want to 'Deactivate' your license of QuadRemesher on this computer. \nDo this if you want to move your license from this computer to another one."


rollout MXRemesherRollout ("Quad Remesher 1.0"+qrBETA) width:WinW	height:WinH
--rollout MXRemesherRollout "Quad Remesher 1.0" width:260	height:424  -- with Test buttons
(
	spinner 'TargetQuadCount' "预期四边形数量    " pos:[LineX1,posTargetQuadCount] width:(WinW-28) height:16 range:[4,600000,5000] type:#integer align:#left tooltip:"Set the desired number of Quads."
	slider 'QuadCountSlider' ""                       pos:[LineX1,posTargetQuadCount+20] width:(WinW-15) height:20 range:[4,10000,5000] type:#integer ticks:0 align:#left tooltip:"Set the desired number of Quads."
	
	groupBox 'grp1' "四边形尺寸设置..."            pos:[LineX1,posGrp1] width:GrpW height:Grp1H align:#left 
	spinner 'CurvatureAdaptivness' "适应尺寸  "    pos:[LineX2,posGrp1+1*Grp1LineH] width:126 height:16 range:[0,100,50] type:#integer align:#left tooltip:CurvatureAdaptivnessToolTip
	checkbox 'AdaptiveQuadCount' "自适应四边形数量" pos:[LineX2,posGrp1+2*Grp1LineH] width:162 height:21 checked:false align:#left tooltip:AdaptiveQuadCountToolTip
	checkbox 'UseVertexColor' "使用顶点颜色作为四边形密度"       pos:[LineX2,posGrp1+3*Grp1LineH] width:210 height:21 checked:false align:#left tooltip:UseVertexColorToolTip
	spinner 'PaintedQuadDensity' "绘制四边形密度" pos:[LineX2,posGrp1+4*Grp1LineH] width:135 height:21 range:[0.25, 4.0, 2.0] type:#float align:#left tooltip:PaintedDensitySliderToolTip
	button 'PaintButton' "P"                           pos:[LineX2+135+53,posGrp1+4*Grp1LineH-2] width:27 height:21 align:#left tooltip:"This button allows to add a VertexPaint modifier if needed and set its options."
	
	groupBox 'grp2' "边循环控制..."               pos:[LineX1,posGrp2] width:GrpW height:Grp2H align:#left
	checkbox 'UseSmoothingGroups' "使用光滑组"   pos:[LineX2,posGrp2+1*Grp2LineH] width:162 height:21 align:#left tooltip:UseSmoothingGroupsToolTip
	checkbox 'UseIndexedNormals' "使用法线折痕"   pos:[LineX2,posGrp2+2*Grp2LineH] width:162 height:21 align:#left tooltip:UseNormalsToolTip
	checkbox 'UseMatIDs' "使用材质ID"                pos:[LineX2,posGrp2+3*Grp2LineH] width:162 height:21 align:#left tooltip:UseMaterialsIdToolTip
	checkbox 'AutoDetectHardEdges' "按角度检测硬边" pos:[LineX2,posGrp2+4*Grp2LineH] width:162 height:21 align:#left checked:true tooltip:DetectHardEdgesToolTip
	-- misc options:
	groupBox 'grp3' "杂项..."               pos:[LineX1,posGrp3] width:GrpW height:Grp3H align:#left
	--checkbox 'SymmetryEnabled' "使用对称修改器(Symmetry)"	pos:[LineX2, posGrp3+1*Grp3LineH] width:162 height:21 checked:true align:#left tooltip:"If Enabled and if there is a Symmetry modifier, QuadRemesher will use the symmetry modifier settings (Symmetry On/Off + Axis) to perform a symmetrical quad remeshing."
	checkbox 'SymmetryX' "对称 X"	pos:[LineX2, posGrp3+1*Grp3LineH] width:symItemW height:21 checked:false align:#left tooltip:symToolTip
	checkbox 'SymmetryY' "对称 Y"	pos:[LineX2+symItemW+5, posGrp3+1*Grp3LineH] width:symItemW height:21 checked:false align:#left tooltip:symToolTip
	checkbox 'SymmetryZ' "对称 Z"	pos:[LineX2+2*(symItemW+5), posGrp3+1*Grp3LineH] width:symItemW height:21 checked:false align:#left tooltip:symToolTip
	button 'CreateMultiMaterialButton' "创建多维材质" pos:[26, posGrp3+2*Grp3LineH+3] width:GroupedButtonWidth height:21 align:#left tooltip:"Create and assign MultiMaterial to visualize MaterialIds."
	button 'LicenseMgrButton' "许可证管理"			pos:[26, posGrp3+3*Grp3LineH+3+2] width:(GroupedButtonWidth-WebDocWidth-5) height:21 align:#left tooltip:LicenseMgrButtonToolTip
	button 'WebDocButton' "在线文档"			pos:[26+GroupedButtonWidth-WebDocWidth, posGrp3+3*Grp3LineH+3+2] width:WebDocWidth height:21 align:#left tooltip:"Link to QuadRemesher's documentation and tutorials."

	-- bottom	
	button 'RemeshButton' "<<   REMESH IT    >>"           pos:[LineX1,posRemeshButton] width:RemeshButtonWidth height:RemeshButtonHeight align:#left tooltip:"Click to remesh the selected object."
	progressBar 'progressBar' "ProgressBar"				pos:[LineX1, posRemeshButton+10] width:(RemeshButtonWidth-AbortButtonWidth-4) height:6 align:#left tooltip:"progress bar..."
	button 'StopButton' "Abort"							pos:[LineX1+(RemeshButtonWidth-AbortButtonWidth), posRemeshButton+6] width:AbortButtonWidth height:16 align:#left tooltip:"Abort current remeshing..." enabled:false
	
	button 'NewsButton' ""								pos:[LineX1, 600] width:RemeshButtonWidth height:20 align:#center tooltip:"Click to visit the WebPage" visible:false
	hyperLink 'NewsLink' "New Version Available" pos:[30,380] visible:false
	-- debugging buttons:
	--button 'TestSelectionButton' "TestSelection" pos:[66,388] width:113 height:24 align:#left tooltip:"."

	
	on RemeshButton pressed do
	(
		DoRetopo MXRemesherRollout
	)
	
	on NewsButton pressed do
	(
		-- defines some paths:
		thisScript = getThisScriptFilename()
		folder = getFilenamePath thisScript   -- NB: has an \ at the end!
		licManagerPath = folder + "xrLicenseManager.exe"
		
		-- Launch xrLicenseMgr
		local shellOptions = "-cn -hostApp 3dsMax"
		ShellLaunch licManagerPath shellOptions

		-- delete the news on the disk
		--newsPath = systemTools.getEnvVariable("LOCALAPPDATA") + "\\Exoside\\QuadRemesher\\Datas_3dsMax\\ServerNews.txt";
		--deletefile newsPath
		
		-- open web browser:
		--ShellLaunch newsButtonUrl ""
	)
	
	on StopButton pressed do
	(
		-- Kill running process:  (NB: killtask ne supporte pas le FullPath en input...)
		killCmd = "taskkill /F /IM xremesh.exe"
		--format "Kill Cmd = '%'\n" killCmd
		HiddenDOSCommand killCmd exitCode:&exitcode
		--format "   exitcode = %\n" exitcode
		
		-- Set as Aborted
		gAbortPressed = true
		
		EnableDisableUIItems MXRemesherRollout true
	)
	on LicenseMgrButton pressed do
	(
		DoLicenseMgr MXRemesherRollout
	)
	on WebDocButton pressed do
	(
		ShellLaunch "https://exoside.com/quadremesherdata/plugins_webdoc_link.php?App=3dsMax" ""
	)
	on CreateMultiMaterialButton pressed do
	(
		DoCreateMultiMaterial MXRemesherRollout
	)
	on TargetQuadCount changed val do
	(
		QuadCountSlider.value = TargetQuadCount.value
	)
	on QuadCountSlider changed val do
	(
		if (QuadCountSlider.value != TargetQuadCount.value) then (
			TargetQuadCount.value = QuadCountSlider.value
		)
	)

	-- VertexColor :	
	on PaintedQuadDensity changed val do
	(
		SetColorFromDensitySlider MXRemesherRollout
	)
	on PaintButton pressed do
	(
		-- find the VertexPaint modifier, if not create it 
		if (ClassOf (modPanel.getCurrentObject()) != 'VertexPaint') then (
			vp = VertexPaint()
			modPanel.addModToSelection (vp) ui:on
		) else (
			vp = (modPanel.getCurrentObject())
		)
		
		-- set the good display mode
		setCVertMode $ true
		setShadeCVerts $ true
		
		-- set in BrushPaint mode
		vpt = VertexPaintTool()
		vpt.curPaintMode = 1   -- 1=Paint 2=Eraser 0=None
		
		SetColorFromDensitySlider MXRemesherRollout
	)

	
	-- DEBUG : 
	on TestSelectionButton pressed do
	(
		DoTestSelection MXRemesherRollout
	)
	
)

-- for hot reload purpose: destroy and reload!
-- NB: called each time the "QuadRemesh" button is pressed.
try ( destroyDialog MXRemesherRollout ) catch ();
try (
    createDialog MXRemesherRollout
    
    EnableDisableUIItems MXRemesherRollout true
    
    -- Read news:
    newsPath = systemTools.getEnvVariable("LOCALAPPDATA") + "\\Exoside\\QuadRemesher\\Datas_3dsMax\\ServerNews.txt";
	readTextFileLines newsPath
	if ((readTextFileLines_Lines != undefined) and (readTextFileLines_Lines.count >= 2)) then (
		local text = readTextFileLines_Lines[1];
		local url = readTextFileLines_Lines[2];
	    
	    --format "reading news : text=%  url=%\n" text url
	    
	    MXRemesherRollout.height = MXRemesherRollout.height + 39
	    
	    if (true) then (
			MXRemesherRollout.NewsButton.visible = true
			MXRemesherRollout.NewsButton.caption = text
			MXRemesherRollout.NewsButton.pos.y = MXRemesherRollout.height - 28
			MXRemesherRollout.NewsButton.color = color 255 0 0 
			--MXRemesherRollout.NewsButton.width = MXRemesherRollout.width - 2 * MXRemesherRollout.NewsButton.pos.x
			--MXRemesherRollout.NewsButton.width = 230
			newsButtonUrl = url
		) else (
			MXRemesherRollout.NewsLink.visible = true
			MXRemesherRollout.NewsLink.pos.y = MXRemesherRollout.height - 28
			MXRemesherRollout.NewsLink.caption = text
			MXRemesherRollout.NewsLink.address = url
			MXRemesherRollout.NewsLink.color = color 255 0 0 -- Red!
		)
		
	) else (
		MXRemesherRollout.NewsLink.visible = false
		MXRemesherRollout.NewsButton.visible = false
	    --format "no news!\n"
	)
    
    
) catch ();

