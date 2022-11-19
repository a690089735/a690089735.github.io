fn setABCDParent objs:(getcurrentselection()) =
(
	for i = 2 to objs.count do objs[i].parent = objs[i-1]
)
setABCDParent()