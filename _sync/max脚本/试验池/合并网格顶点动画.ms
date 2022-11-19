fn MergeMeshAni objs = --虽然可以支持让生成后的模型合并,并且也是这么做的,但是为用户意外操作考虑,最好设定为操作前的选项.(万一选了个顶点不全的,或者轴心不在世界的.容易粘贴错)
undo "test" on(
	local
	baseobj = objs[1],
	vcount = baseobj.numverts 
	for i = 2 to objs.count do 
	(
		local
		k = 0,
		o = objs[i],
		vctrls = for j = 1 to o.numverts collect o[4][1][j].controller
		attach baseobj o
		animatevertex baseobj #all
		
		for l = vcount+1 to baseobj.numverts do
		(
			baseobj[4][1][l].controller = vctrls[k+=1]
		)
		
		vcount = baseobj.numverts
	)
	update baseobj
)
MergeMeshAni (getcurrentselection())