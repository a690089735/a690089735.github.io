with printAllElements true(
print(
for n in
	#(
	"Animation",--True or False.

	"ASCII",--True or False.

	"AxisConversionMethod",--"None", "Animation", or "Fbx_Root".

	"BakeAnimation",--True or False.

	"BakeFrameStart",--Integer value.

	"BakeFrameEnd",--Integer value.

	"BakeFrameStep",--Integer value.

	"BakeResampleAnimation",--True or False.

	"Cameras",--True or False.

	"CAT2HIK",--True or False.

	"ColladaTriangulate",--True or False.

	"ColladaSingleMatrix",--True or False.

	"ColladaFrameRate",	--Float (in frames).

	"Convert2Tiff",--This converts non-TIFF-formatted texture images into TIFF format which makes them readable in other applications that do not support other image types.

	"ConvertUnit",--"mm" or "cm" or "dm" or "m" or "km" or "in" or "ft" or "mi" or "yd".

	"EmbedTextures",--True or False.

	"FileVersion",--"FBX201400" or "FBX201300" or "FBX201200" or FBX201100" or "FBX201000" or "FBX200900" or "FBX200611".

	"FilterKeyReducer",--True or False.

	"GeomAsBone",--True or False.

	"GenerateLog",--True or False.

	"Lights",--True or False.

	"LoadExportPresetFile",--The file name of the preset file.

	"NormalsPerPoly",--True or False.

	"PointCache",--True or False.

	"PopSettings",--This setting preserves the current state of the settings when you perform a One-Click operation.--FBXExporterSetParam "PopSettings" loads all I / OSettings.

	"Preserveinstances",--True or False.

	"PushSettings",--This setting preserves the current state of the settings when you perform a One-Click operation.--FBXExporterSetParam "PushSettings" saves all I / OSettings.

	"Removesinglekeys",--True or False.

	"Resampling",--Float.

	"ResetExport",--Loads the Autodesk Media & Entertainment export preset.

	"ScaleFactor",--Float.

	"SelectionSet",--Name of the selection set to use.

	"SelectionSetExport",--True or False.

	"Shape",--True or False.

	"Skin",--True or False.

	"ShowWarnings",--True or False.

	"SmoothingGroups",--True or False.

	"SmoothMeshExport",--True or False.

	"SplitAnimationIntoTakes",--"takename" which is the name of the take to use, followed by "frameStart", "frameEnd" to define the interval.--Use "-c|-clear" to clear the accumulator.--NOTE:Take001 exists regardless of how many splits are defined. Do not set a "frameEnd" < "frameStart". If "frameStart" and "frameEnd" do not define an interval with keys the split function will not validate it. If no animation keys are in the range, a take is created with no keys.

	"TangentSpaceExport",--True or False.

	"Triangulate",--True or False.

	"UpAxis",--"Y" or "Z".

	"UseSceneName"--True or False.
	) 
	where 
	(
		v = FbxExporterGetParam n
		finditem #(Integer,BooleanClass,String,Name) (classof v) > 0
	)
	collect 
	#(n,v)
-- 	(print (n+"::"+(FbxExporterGetParam n)as string))
) #nomap)

with printAllElements true(
print(
for n in
	#(
	"Animation", --True or false. See Animation for an explanation of this setting.
	"AxisConversion", --True or false. See Axis conversion for an explanation of this setting.
	"BakeAnimationLayers", --True or false. See Bake Animation Layers for an explanation of this setting.
	"Cameras", --True or false. See Cameras for an explanation of this setting.
	"ConvertUnit", --"mm" or "cm" or "dm" or "m" or "km" or "in" or "ft" or "yd". See File Units Converted To for an explanation of this setting.
	"FillTimeline", --True or false. See Fill Timeline for an explanation of this setting.
	"FilterKeyReducer", --True or false.
	"FilterKeySync", --True or false.
	"GenerateLog", --True or False. See Generate Log Data for an explanation of this setting.
	"ImportBoneAsDummy", --True or false. See Bone Creation for an explanation of this setting.
	"KeepFrameRate", --True or false.
	"Lights", --True or false. See Lights for an explanation of this setting.
	"LoadImportPresetFile", --"x" where x is the location of the preset file. See Import presets for an explanation of this setting.
	"Markers", --True or false. See Optical Markers for an explanation of this setting.
	"Mode", --#create (Add) #exmerge (Update Animation) #merge (Add and Update animation). See File Content for an explanation of this setting.
	"PopSettings", --This setting preserves the current state of the settings when you perform a One-Click operation. This setting loads all settings saved by FBXImporterSetParam "PushSettings".
	"PushSettings", --This setting preserves the current state of the settings when you perform a One-Click operation. This setting saves all I/O settings
	"PointCache", --True or false. See Point Cache Files for an explanation of this setting.
	"Resampling", --Float.
	"ResetImport", --Restores factory defaults. If ResetImport is called without argument for:
					--3DS Max: Loads the Autodesk Media & Entertainment import preset.
					--3DS Design: Loads the Autodesk Architectural (Revit) import preset
					--Using the file name only as the argument: If we pass "Autodesk Media & Entertainment.fbximportpreset" or "Autodesk Architectural (Revit) .fbximportpreset", it searches the factory preset directory to load the preset file.
					--Use this command to load a factory preset without knowing the directory.
					--Note: This command is used by the OneClick functionality.
	"ScaleConversion", --True or false. See Units for an explanation of this setting.
	"ScaleFactor", --Float. See Scale Factor for an explanation of this setting.
	"Shape", --True or false. See Deformations for an explanation of this setting.
	"Skin", --True or false. See Deformations for an explanation of this setting.
	"SmoothingGroups", --True or false. See Smoothing Groups for an explanation of this setting.
	"TakeCount", --This parameter is only available for the "get" function.
	"TakeIndex", --An integer number from 1 to the number of takes in the FBX file. This parameter is only available for setting. When you specify the take, use 0 to indicate no animation. (This is the default value of this property.) Use 1 to specify the first take in the FBX file, 2 to indicate the second take, and so on. See Animation Take for an explanation of this setting.
	"UpAxis" --"Y" or "Z". See Axis Conversion for an explanation of this setting.
	) 
	where 
	(
		v = FBXImporterGetParam n
		finditem #(Integer,BooleanClass,String,Name) (classof v) > 0
	)
	collect 
	#(n,v)
-- 	(print (n+"::"+(FbxExporterGetParam n)as string))
) #nomap)