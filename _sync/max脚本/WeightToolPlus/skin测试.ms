sk = skin()
addmodifier $ sk

sel = selection as array

for i in sel do skinOps.addbone sk i 0
	
skinOps.GetBoneIDByListID sk 2

skinOps.GetBoneName sk 1 0 --由此可见,先加入的会是1

sk.shadeweights = true --顶点色显示,但 关闭时,无论如何都是实体显示,开启时,如果顶点色也开启,则显示权重,定点色未开启则显示空白
sk.shadeweights = false

