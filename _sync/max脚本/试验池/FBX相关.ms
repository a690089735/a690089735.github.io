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
		finditem #(Integer,BooleanClass,String) (classof v) > 0
	)
	collect 
	#(n,v)
-- 	(print (n+"::"+(FbxExporterGetParam n)as string))
) #nomap)
