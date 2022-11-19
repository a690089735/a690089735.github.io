try(destroydialog unnamedRollout)catch()

rollout unnamedRollout "Untitled" width:200 height:40
(
	local
	copyedweights = #()

	fn getSelectVertices sk = (for i = 1 to skinops.getnumbervertices sk where (skinOps.isVertexSelected sk i) == 1 collect i) as bitarray

	fn copyWeights sk:$.skin =
	(
		--复制选择的顶点的权重,暂时只考虑单个
		local
		vid = for i in (getSelectVertices sk) do exit with i
		if try(vid > 0)catch(false) then
		(
			copyedweights = #(#(),#())
			for i = 1 to skinOps.GetVertexWeightCount sk vid do
			(
				append copyedweights[1] (skinOps.GetVertexWeightBoneID sk vid i)
				append copyedweights[2] (skinOps.GetVertexWeight sk vid i)
			)
-- 			print copyedweights #nomap
		)else
		(
			messagebox "复制顶点失败."
		)
	)

	fn pasteWeightsByVal sk:$.skin val:0.5 =
	undo "pasteWeightsByVal" on(
		--获取现有的顶点权重,按1-val来取值,暂时只考虑一个
		local
		vid = for i in (getSelectVertices sk) do exit with i,
		oval = 1 - val,
		currentWeights = #(#(),#()),
		newWeights = #(#(),#())
		for i = 1 to skinOps.GetVertexWeightCount sk vid do
		(
			append currentWeights[1] (skinOps.GetVertexWeightBoneID sk vid i)
			append currentWeights[2] ((skinOps.GetVertexWeight sk vid i)*oval)
		)
		
		--加上copyweights*val
		for i = 1 to copyedweights[1].count do 
		(
			local 
			bid = copyedweights[1][i],
			iid = finditem currentWeights[1] bid
			if iid > 0 then currentWeights[2][iid] += copyedWeights[2][i] * val
			else
			(
				append currentWeights[1] bid
				append currentWeights[2] (copyedWeights[2][i] * val)
			)
		)
		
		--赋给顶点
-- 		print currentWeights #nomap
		skinOps.bakeSelectedVerts sk --在任何不可撤销的skin操作前运行,将使其可撤销
		skinOps.ReplaceVertexWeights sk vID currentWeights[1] currentWeights[2]
		
	)
	
	button btn1 "Copy" pos:[8,8] width:64 height:24
	button btn2 "Paste" pos:[128,8] width:64 height:24
	spinner spn1 "" pos:[77,11] width:46 height:16 range:[0,1,0.5] type:#float scale:0.01
	on btn1 pressed  do
	(
		copyWeights()
	)
	on btn2 pressed  do
	(
		pasteWeightsByVal val:spn1.value
	)
)
createdialog unnamedRollout