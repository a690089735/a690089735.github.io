
--导入fbx
importFile @"" #noPrompt using:FBXIMP

--导出FBX_导出动画设置
for i in #(#("Animation", true), #("ASCII", false), #("BakeAnimation", true), #("BakeFrameStart", (animationrange.start.frame)as integer), #("BakeFrameEnd", (animationrange.end.frame)as integer), #("BakeFrameStep", 1), #("BakeResampleAnimation", true), #("Cameras", false), #("CAT2HIK", true), #("ColladaTriangulate", true), #("ColladaSingleMatrix", true), #("Convert2Tiff", false), #("EmbedTextures", false), #("FilterKeyReducer", false), #("GeomAsBone", true), #("GenerateLog", true), #("Lights", false), #("NormalsPerPoly", false), #("PointCache", false), #("Preserveinstances", false), #("Removesinglekeys", false), #("SelectionSetExport", false), #("Shape", true), #("Skin", true), #("ShowWarnings", false), #("SmoothingGroups", false), #("SmoothMeshExport", true), #("TangentSpaceExport", false), #("Triangulate", false), #("UseSceneName", false))
do FBXExporterSetParam i[1] i[2]
	
--导出FBX_导出蒙皮设置
for i in #(#("Animation", true), #("ASCII", false), #("BakeAnimation", false), #("BakeFrameStart", 0), #("BakeFrameEnd", 0), #("BakeFrameStep", 1), #("BakeResampleAnimation", false), #("Cameras", false), #("CAT2HIK", false), #("ColladaTriangulate", true), #("ColladaSingleMatrix", true), #("Convert2Tiff", false), #("EmbedTextures", false), #("FilterKeyReducer", false), #("GeomAsBone", true), #("GenerateLog", true), #("Lights", false), #("NormalsPerPoly", false), #("PointCache", false), #("Preserveinstances", false), #("Removesinglekeys", false), #("SelectionSetExport", false), #("Shape", true), #("Skin", true), #("ShowWarnings", false), #("SmoothingGroups", false), #("SmoothMeshExport", true), #("TangentSpaceExport", false), #("Triangulate", false), #("UseSceneName", false))
do FBXExporterSetParam i[1] i[2]
	
--导出FBX_仅选择
exportFile @"" #noPrompt selectedOnly:true using:FBXEXP
	
--导出FBX_全部
exportFile @"" #noPrompt selectedOnly:false using:FBXEXP
	
--列出FBX
getFiles @"C:\Users\Administrator\Desktop\Test\*.fbx"
	
--列出FBX_递归 (穿透,但缓慢)
getDirectories @"C:\Users\Administrator\Desktop\Test\*" --配合这句
	
--设置文件名{number}{filename}_其他内容[.FBX]