--导出动画设置
for i in #(#("Animation", true), #("ASCII", false), #("BakeAnimation", true), #("BakeFrameStart", (animationrange.start.frame)as integer), #("BakeFrameEnd", (animationrange.end.frame)as integer), #("BakeFrameStep", 1), #("BakeResampleAnimation", true), #("Cameras", false), #("CAT2HIK", true), #("ColladaTriangulate", true), #("ColladaSingleMatrix", true), #("Convert2Tiff", false), #("EmbedTextures", false), #("FilterKeyReducer", false), #("GeomAsBone", true), #("GenerateLog", true), #("Lights", false), #("NormalsPerPoly", false), #("PointCache", false), #("Preserveinstances", false), #("Removesinglekeys", false), #("SelectionSetExport", false), #("Shape", true), #("Skin", true), #("ShowWarnings", false), #("SmoothingGroups", false), #("SmoothMeshExport", true), #("TangentSpaceExport", false), #("Triangulate", false), #("UseSceneName", false))
do FBXExporterSetParam i[1] i[2]
--导出蒙皮设置
for i in #(#("Animation", true), #("ASCII", false), #("BakeAnimation", false), #("BakeFrameStart", 0), #("BakeFrameEnd", 0), #("BakeFrameStep", 1), #("BakeResampleAnimation", false), #("Cameras", false), #("CAT2HIK", false), #("ColladaTriangulate", true), #("ColladaSingleMatrix", true), #("Convert2Tiff", false), #("EmbedTextures", false), #("FilterKeyReducer", false), #("GeomAsBone", true), #("GenerateLog", true), #("Lights", false), #("NormalsPerPoly", false), #("PointCache", false), #("Preserveinstances", false), #("Removesinglekeys", false), #("SelectionSetExport", false), #("Shape", true), #("Skin", true), #("ShowWarnings", false), #("SmoothingGroups", false), #("SmoothMeshExport", true), #("TangentSpaceExport", false), #("Triangulate", false), #("UseSceneName", false))
do FBXExporterSetParam i[1] i[2]
	
	
	
--导入参数
--FBXImporterGetParam "FBXProperties"??
Params = #( --https://help.autodesk.com/view/3DSMAX/2017/ENU/?guid=GUID-DCA4B1CB-58D0-4D73-8A28-27A87E1E1755
	"Animation",--	True or false. See Animation for an explanation of this setting.
	"AxisConversion",--	True or false. See Axis conversion for an explanation of this setting.
	"BakeAnimationLayers",--	True or false. See Bake Animation Layers for an explanation of this setting.
	"Cameras",--	True or false. See Cameras for an explanation of this setting.
	"ConvertUnit",--	"mm" or "cm" or "dm" or "m" or "km" or "in" or "ft" or "yd". See File Units Converted To for an explanation of this setting.
	"FillTimeline",--	True or false. See Fill Timeline for an explanation of this setting.
	"FilterKeyReducer",--	True or false.
	"FilterKeySync",--	True or false.
	"GenerateLog",--	True or False. See Generate Log Data for an explanation of this setting.
	"ImportBoneAsDummy",--	True or false. See Bone Creation for an explanation of this setting.
	"KeepFrameRate",--	True or false.
	"Lights",--	True or false. See Lights for an explanation of this setting.
	"LoadImportPresetFile",--	"x" where x is the location of the preset file. See Import presets for an explanation of this setting.
	"Markers",--	True or false. See Optical Markers for an explanation of this setting.
	"Mode",--	#create (Add) #exmerge (Update Animation) #merge (Add and Update animation). See File Content for an explanation of this setting.
	"PopSettings",--	This setting preserves the current state of the settings when you perform a One-Click operation. This setting loads all settings saved by FBXImporterSetParam "PushSettings".
	"PushSettings",--	This setting preserves the current state of the settings when you perform a One-Click operation. This setting saves all I/O settings
	"PointCache",--	True or false. See Point Cache Files for an explanation of this setting.
	"Resampling",--	Float.
	"ResetImport",--	Restores factory defaults. If ResetImport is called without argument for:
	--3DS Max: Loads the Autodesk Media & Entertainment import preset.
	--3DS Design: Loads the Autodesk Architectural (Revit) import preset
	--Using the file name only as the argument: If we pass "Autodesk Media & Entertainment.fbximportpreset" or "Autodesk Architectural (Revit) .fbximportpreset", it searches the factory preset directory to load the preset file.
	--Use this command to load a factory preset without knowing the directory.

	--Note: This command is used by the OneClick functionality.
	"ScaleConversion",--	True or false. See Units for an explanation of this setting.
	"ScaleFactor",--	Float. See Scale Factor for an explanation of this setting.
	"Shape",--	True or false. See Deformations for an explanation of this setting.
	"Skin",--	True or false. See Deformations for an explanation of this setting.
	"SmoothingGroups",--	True or false. See Smoothing Groups for an explanation of this setting.
	"TakeCount",--	This parameter is only available for the "get" function.
	"TakeIndex",--	An integer number from 1 to the number of takes in the FBX file. This parameter is only available for setting. When you specify the take, use 0 to indicate no animation. (This is the default value of this property.) Use 1 to specify the first take in the FBX file, 2 to indicate the second take, and so on. See Animation Take for an explanation of this setting.
	"UpAxis"
)
for param in params do print#(#(param,FBXImporterGetParam param))
FBXImporterGetParam #
--导入动画
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
-- units.formatValue 1
-- units.decodeValue "1cm"
for param in #(
	#("Animation", true),
-- 	#("AxisConversion", true),
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
-- 	#("LoadImportPresetFile", unsupplied),
	#("Markers", false),
	#("Mode", #exmerge),
-- 	#("PopSettings", unsupplied),
-- 	#("PushSettings", unsupplied),
	#("PointCache", true),
	#("Resampling", frameRate),
-- 	#("ResetImport", unsupplied),
	#("ScaleConversion", true),
	#("ScaleFactor", units.decodeValue "1cm"),
	#("Shape", false),
	#("Skin", false),
	#("SmoothingGroups", false)
-- 	#("TakeCount", unsupplied),
-- 	#("TakeIndex", unsupplied),
-- 	#("UpAxis", #z)
) do FBXImporterGetParam param[1] param[2]


