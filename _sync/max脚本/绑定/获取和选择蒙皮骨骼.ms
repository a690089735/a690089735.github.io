fn getSkinBoneNames = (
	obj = selection[1] --记录物体
	modf = for m in obj.modifiers where classof m == skin do exit with m --获取修改器
	return (for i = 1 to (skinOps.GetNumberBones modf) collect skinOps.GetBoneName modf i 1)
)
fn selectByNames nameArray = (
	select (for n in nameArray collect getnodebyname n)
)