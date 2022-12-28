try(DestroyDialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:400 height:56
(
	editText 'edt1' "maxFile" pos:[8,8] width:288 height:16 align:#left
	button 'btn1' ".." pos:[296,8] width:32 height:16 align:#left
	editText 'edt2' "fbxPath" pos:[8,32] width:288 height:16 align:#left
	button 'btn2' ".." pos:[296,32] width:32 height:16 align:#left
	button 'btnDo' "fbx2max" pos:[336,8] width:56 height:40 align:#left
	
	local
		maxfile = "",
		fbxpath = ""
	
	fn setFBXImporter =(
		fn getUnit =
		case units.SystemType of
		(
			#Inches: "in"
			#Feet: "ft"
			#Miles: "mi"
			#Millimeters: "mm"
			#Centimeters: "cm"
			#Meters: "m"
			#Kilometers: "km"
		)

		for param in #(
			#("Animation", true),
			#("BakeAnimationLayers", true),
			#("Cameras", false),
			#("ConvertUnit", getUnit()),
			#("FillTimeline", false),
			#("FilterKeyReducer", false),
			#("FilterKeySync", false),
			#("GenerateLog", false),
			#("ImportBoneAsDummy", false),
			#("KeepFrameRate", false),
			#("Lights", false),
			#("Markers", false),
			#("Mode", #exmerge),
			#("PointCache", true),
			#("Resampling", frameRate),
			#("ScaleConversion", true),
			#("ScaleFactor", units.decodeValue "1cm"),
			#("Shape", false),
			#("Skin", false),
			#("SmoothingGroups", false)
		) do FBXImporterGetParam param[1] param[2]
	)

	on btn1 pressed  do
	(
		edt1.text = maxfile = getOpenFileName caption:"select max file" types:"Max(*.max)|*.max"
	)
	on btn2 pressed  do
	(
		edt2.text = fbxpath = getSavePath caption:"select fbx path"
	)
	on btnDo pressed  do
	(
		local fbx_list = getFiles (fbxpath+@"\*.fbx")
		--导入动画
		checkForSave()--保护当前场景
		setFBXImporter()
		for fbx in fbx_list do
		(
			loadMaxFile maxfile useFileUnits:true quiet:true allowPrompts:false
			importfile fbx #noPrompt using:FBXIMP
			local newfile = fbx
			for i = 1 to 4 do newfile[newfile.count] = ""
			saveMaxFile (newfile+".max") saveAsVersion:((maxversion())[1]/1000+1995) clearNeedSaveFlag:true useNewFile:false quiet:true
		)
	)
)
CreateDialog unnamedRollout
