getThisScriptFilename()

getFilenamePath (getThisScriptFilename()) --结尾有斜杠
	
-- getFilenamePath(getFilenamePath (getThisScriptFilename())) --这样无法获取脚本上级目录
	
-- 	pathConfig.removePathLeaf <file or directory> --去除子目录,可以不断获取上级目录
	
	pathConfig.removePathLeaf(getThisScriptFilename()) --结尾无斜杠
	
	pathConfig.removePathLeaf(pathConfig.removePathLeaf(getThisScriptFilename())) --结尾无斜杠
		
-- 	pathConfig.convertPathToAbsolute <相对路径> --将相对路径转化为绝对路径