--限定开始结束范围
fn setRange objs:objects = --mapped在处理多物体时返回的是ok,实际上下面的mapkeys就能兼容单物体和多物体,clamp_range钳制范围
with undo off
(
	mapkeys objs (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
	animationRange = (interval 0f (amax keys))
)


files = getFiles @"C:\Users\Administrator\Desktop\Test\*.fbx"
out_path = (GetDir #export + "\\")
--导入FBX_导入动画设置
for i in #(#("Animation", true), #("AxisConversion", true), #("BakeAnimationLayers", true), #("Cameras", true), #("FillTimeline", false), #("FilterKeyReducer", false), #("FilterKeySync", false), #("GenerateLog", false), #("ImportBoneAsDummy", false), #("KeepFrameRate", false), #("Lights", true), #("Markers", false), #("PointCache", true), #("ScaleConversion", true), #("Shape", true), #("Skin", true), #("SmoothingGroups", false))
do FBXImporterSetParam i[1] i[2]


for f in files do 
(
	delete objects
	importFile f #noPrompt using:FBXIMP
	print #(getFilenameFile f,#("---物体数量",objects.count))
	
	delete $'不输出*'
	
	--限定帧范围
	setRange()
	--删除负帧
	selectKeys objects (interval -13421700f 0f)
	deselectKeys objects 0f
	deleteKeys objects #selection
	--导出FBX_导出动画设置
	for i in #(#("Animation", true), #("ASCII", false), #("BakeAnimation", true), #("BakeFrameStart", (animationrange.start.frame)as integer), #("BakeFrameEnd", (animationrange.end.frame)as integer), #("BakeFrameStep", 1), #("BakeResampleAnimation", true), #("Cameras", true), #("CAT2HIK", true), #("ColladaTriangulate", true), #("ColladaSingleMatrix", true), #("Convert2Tiff", false), #("EmbedTextures", false), #("FileVersion", #FBX201400), #("FilterKeyReducer", false), #("GeomAsBone", true), #("GenerateLog", true), #("Lights", false), #("NormalsPerPoly", false), #("PointCache", false), #("Preserveinstances", false), #("Removesinglekeys", false), #("SelectionSetExport", false), #("Shape", true), #("Skin", true), #("ShowWarnings", false), #("SmoothingGroups", false), #("SmoothMeshExport", true), #("TangentSpaceExport", false), #("Triangulate", false), #("UseSceneName", false))
	do FBXExporterSetParam i[1] i[2]
	
	exportFile (out_path+getFilenameFile f+getFilenameType f) #noPrompt selectedOnly:false using:FBXEXP
	print #(#("---删除后",objects.count))
)
ShellLaunch "explorer.exe" out_path