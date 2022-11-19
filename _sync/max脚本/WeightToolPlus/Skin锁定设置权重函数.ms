fn clampValue val minv:0 maxv:1 = (if val > maxv then val = maxv else if val < minv then val = minv;val)
fn calcWeight sk:(modPanel.GetcurrentObject()) lockList: bID: vIDs:#() val:0.5 = --计算并赋值权重,设置上限,这是每个都会单独算的,效率会比较慢.
if classof sk == skin do(
	--规范化val(实际使用时可以视情况去掉)
	val = clampValue val
	--规范化参数
	if lockList == unsupplied do lockList = sk.WeightProLocking
	if bID == unsupplied do bID = skinOps.GetSelectedBone sk
	if not lockList[bID] do --如果选中的骨骼是锁定的,则什么都不发生
	(
		if vIDs == unsupplied do vIDs = for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i--所有的选中的顶点,加入判断是因为此参数可被提供.(比如在pasteWeightLayout中调用)
		
		for vID in vIDs do
		(
			local
			weightcount = skinops.getvertexweightcount sk vID,
			bIDs = #(), --某顶点的骨骼列表的ID集合
			weights = #() --权重列表
			
			for i = 1 to weightcount do
			(
				append bIDs (skinops.getvertexweightboneid sk vID i)
				append weights (skinops.getvertexweight sk vID i)
			)
			
			local wID = finditem bIDs bID --看看骨骼在点的骨骼列表中的第几个,也就是权重列表的ID
			
			if wID == 0 then --如果不在列表中,需要添加
			(
				local
				freeWeight = 0.0, --自由权重的总和,暂且为0,后面在设置它
				FwIDs = for i = 1 to bIDs.count where not lockList[bIDs[i]] collect (freeWeight += weights[i];i), --算出自由权重和,顺便记录自由的权重IDs
				cval = clampValue val maxv:freeWeight, --实际可用的值
				offset = -cval --差值(需要0-val,即各自由权重需要减去的总值,不会大于自由权重)
				
				for i in FwIDs do weights[i] += weights[i]/freeWeight*offset
				append bIDs bID --记录新骨骼
				append weights cval --记录新值--val在减去后,可能比原数值小.比如val是0.6,自由权重是0.5,那自由权重最多只能到0.5
				
-- 				print #("freeWeight:",freeWeight,"cval:",cval,"offset:",offset,"bIDs:",bIDs,"weights:",weights)--调试
			)
			else --在列表中,更改原列表即可
			(
				local
				freeWeight = 0.0, --自由权重的总和(不包括自身),暂且为0,后面再设置它
				FwIDs = for i = 1 to bIDs.count where not lockList[bIDs[i]] and i != wID collect (freeWeight += weights[i];i), --算出自由权重和,顺便记录自由的权重IDs
				cval = clampValue val maxv:(freeWeight+weights[wID]), --实际可用的值
				offset = weights[wID] - cval --差值(需要(原权重-val),即各自由权重需要减去的总值,val不会大于自由权重(包括自身))
				if freeWeight < 0.0001 then for i in FwIDs do weights[i] += (offset/FwIDs.count)--自由权重总和是0时处理权重(平均分配)
				else for i in FwIDs do weights[i] += weights[i]/freeWeight*offset --处理权重,只更改需要改的权重
				weights[wID] = cval --记录新值
				
-- 				print #("oldweights:",weights,"freeWeight:",freeWeight,"weights[wID]:",weights[wID],"cval:",cval,"offset:",offset,"bIDs:",bIDs,"weights:",weights)--调试
			)
			skinOps.bakeSelectedVerts sk --在任何不可撤销的skin操作前运行,将使其可撤销
			skinOps.ReplaceVertexWeights sk vID bIDs weights
		)
	)
)
-- modPanel.GetcurrentObject() --获取当前skin
-- 为Skin添加锁定参数
-- sk = $.skin
-- if not(isproperty sk #WeightProLocking) do (custAttributes.add sk (attributes WeightProData
-- (
-- 	parameters WeightProData
-- 	(
-- 		WeightProLocking type:#boolTab tabSizeVariable:true
-- 	)
-- ))
-- sk.WeightProLocking = for i = 1 to skinOps.GetNumberBones sk collect false
-- sk.WeightProLocking
-- 可以用a = sk.WeightProLocking,改变a则会改变sk.WeightProLocking

fn copyWeigthLayout sk:(modPanel.GetcurrentObject()) bID: = --bid不对,这个应该是相对于顶点权重列表的ID,之前测试的时候因为骨骼少,正好序号匹配了...
(
	if bID == unsupplied do bID = skinOps.GetSelectedBone sk
-- 	print #(sk,bID)
	skinOps.selectVerticesByBone sk
	vIDs = #()
	bWeights = #()
	for vID = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk vID) == 1 do 
	(
		append vIDs vID
		append bWeights (for i = 1 to (skinops.getvertexweightcount sk vID) where (skinops.getvertexweightboneid sk vID i) == bID do exit with (skinops.getvertexweight sk vID i))
	)--所有的选中的顶点
	#(vIDs,bWeights)
)
--依赖于计算锁定权重
fn pasteWeightLayout sk:(modPanel.GetcurrentObject()) bID: WeightLayout:#() calcLock:false =
with redraw off(
	if bID == unsupplied do bID = skinOps.GetSelectedBone sk
	vIDs = WeightLayout[1]
	bWeights = WeightLayout[2]
	if calcLock then
	(
		local bID = skinOps.GetSelectedBone sk
		for i = 1 to vIDs.count do
		(
			calcWeight sk:sk lockList:sk.WeightProLocking bID:bID vIDs:#(vIDs[i]) val:bWeights[i]
		)
	)
	else
	(
		for i = 1 to vIDs.count do
		(
			skinOps.SelectVertices sk vIDs[i]
			skinOps.SetWeight sk bWeights[i]
		)
	)
	skinOps.SelectVertices sk vIDs
)