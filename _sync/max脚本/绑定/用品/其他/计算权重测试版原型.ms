try(destroydialog calculateWeightTest)catch()
rollout calculateWeightTest "计算权重测试版" width:160 height:216
(
	fn roundFloat val dp = ( --四舍五入保留小数点后几位
		x = (((((val * (10^(dp+1))) as integer + 5) as float / 10) as integer) as float / (10^dp)) as string
		for i = 1 to (5 - x.count) do x += "0"
		return x
	)
	
	button btn_Get "获取" pos:[8,8] width:144 height:32
	spinner spn_Val "" pos:[8,152] width:64 height:16 range:[0,1,0] scale:0.01
	button btn_set "设置" pos:[80,152] width:72 height:24
	listbox lbx_List "ListBox" pos:[8,40] width:144 height:6
	button btn_apply "应用" pos:[8,184] width:144 height:24
	
	local WeightList
	local boneIDList
	local bonenames
	local lockList = #()
	
	on btn_Get pressed do
	try(
	
		--获取权重--
		obj = selection[1] --记录物体
		modf = for m in obj.modifiers where classof m == skin do exit with m --获取修改器
		vID = for i in 1 to (skinOps.GetNumberVertices modf) where (skinOps.IsVertexSelected modf i == 1) do exit with i --获取序号靠前的被选中的点
		WeightList = for i = 1 to (skinOps.GetVertexWeightCount modf vID) collect (skinOps.GetVertexWeight modf vID i)  --获取权重列表
		boneIDList = for i = 1 to (skinOps.GetVertexWeightCount modf vID) collect (skinOps.GetVertexWeightBoneID modf vID i)  --获取骨骼ID列表
		bonenames = for i in boneIDList collect skinOps.GetBoneName modf i 1 --按ID获取骨骼名--获取骨骼名
		
		lockList = for i in WeightList collect ("free")--设置锁定
		lbx_List.items = for i = 1 to bonenames.count collect ((roundFloat WeightList[i] 3) + " : " + bonenames[i] + " -" + (lockList[i] as string))--显示列表
		spn_val.range.y = 1.0
		spn_Val.value = WeightList[lbx_List.selection]--更新显示
		
	)catch()
	on btn_set pressed  do
	try(
		--设置选择的权重,自动计算其他权重--
		--1.此功能作为临时需求,假设仅计算列表中的权重
		sel = lbx_List.selection
		itemslist = for i = 1 to lockList.count where lockList[i] == "free" collect i
		try (deleteItem itemslist (findItem itemslist sel))catch()
		if lockList[sel] == "free" and itemslist.count > 0 do 
		(
			x = WeightList[sel] - spn_Val.value --记录差值
			WeightList[sel] = spn_Val.value --先应用
			v = 0;for i in itemslist do v += WeightList[i]--求出其余权重的和
			for i in itemslist do WeightList[i] = WeightList[i]+(WeightList[i]/v*x)
		)
		lbx_List.items = for i = 1 to bonenames.count collect ((roundFloat WeightList[i] 3) + " : " + bonenames[i] + " -" + (lockList[i] as string))--显示列表
	)catch()
	on lbx_List selected sel do
	try(
		--读取权重,更新到spn_Val.value--
		spn_Val.value = WeightList[sel]
	)catch()
	on lbx_List doubleClicked sel do
	try(
		--锁定或者解锁列表项目--
		lockList[sel] = if lockList[sel] == "lock" then "free" else "lock"
		spn_val.range.y = (n = 0;for i in (for i = 1 to lockList.count where lockList[i] == "free" collect i) do n+=WeightList[i] ;n)
		lbx_List.items = for i = 1 to bonenames.count collect ((roundFloat WeightList[i] 3) + " : " + bonenames[i] + " -" + (lockList[i] as string))--显示列表
	)catch()
	on btn_apply pressed do
	try(
		--应用所有权重--
		obj = selection[1] --记录物体
		modf = for m in obj.modifiers where classof m == skin do exit with m --获取修改器
		vIDs = for i in 1 to (skinOps.GetNumberVertices modf) where (skinOps.IsVertexSelected modf i == 1) collect i --获取所有选择的顶点
		for id in vIDs do skinOps.SetVertexWeights modf id boneIDList WeightList
	)catch()
)
createdialog calculateWeightTest