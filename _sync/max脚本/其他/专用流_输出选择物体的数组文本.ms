fn select2ArrayStr =
(
	ArrayStr = "#("
	for o in selection as array do ArrayStr += ("\"" + o.name + "\", ")
	index = ArrayStr.count
	ArrayStr[index] = "";ArrayStr[index-1] = ")"
-- 	print ArrayStr
	return ArrayStr
)
format "%\n" (select2ArrayStr())
-- select2ArrayStr()