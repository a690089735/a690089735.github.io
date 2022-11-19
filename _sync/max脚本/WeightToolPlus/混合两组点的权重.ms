--混合两组点的权重.
--步骤
--记录A组,记录B组(可省略,但暂时启用)
--设置粘贴比例,1为全是B,0为全是A(当省略B组时,数值应该反过来)
--点击粘贴,按设置的比例粘贴

--步骤方案2
--记录A组/A模型(一个完整的权重池,也可以直接是PoolNode,计算时获取权重来节省内存(略牺牲效率))
--选择B模型上的顶点,从A模型获取对应权重,按比例粘贴.

--基本原理:混合A和B两个目标模型的顶点权重(基于顶点序号),以选择的顶点为过滤标记

try(DestroyDialog pasteWeightsRollout)catch() --已知问题,目前还不支持在蒙皮中不存在的骨骼,请务必先将其都添加进去
rollout pasteWeightsRollout "有限粘贴一组参考权重" width:160 height:72
(
-- 	local
-- 	obj
	
	pickbutton 'btn_RecordObject' "RecordObject" pos:[8,8] width:144 height:24 align:#left
	button 'btn_PasteToSelection' "PasteToSelection" pos:[64,40] width:88 height:24 align:#left
	spinner 'spn1' "" pos:[8,44] width:56 height:16 range:[0,1,0.5] scale:0.001 align:#left
	
	fn blend_weights n1 sk1 d1 n2 sk2 d2 val:0.5 = --d1和d2的格式:#(#(1,2,3), #(0.1,0.2,0.7)) d2是当前权重 d1是复制源上的权重 1则全是d1,,注意,二者可能有不同骨骼,也可能有相同骨骼但骨骼添加顺序不一样.[故,这里都做了处理(存在的骨骼对正顺序,不存在的骨骼添加进来)]
	(
		local
		--第一组数据及预处理
		bones_nodes_List1 = for i in refs.dependson sk1 where isvalidnode i collect i, --实际的骨骼节点(全部),要根据这个取在sk2中的实际骨骼ID --才发现在2015以上版本可以直接用skinOps.GetBoneNodes来获取,较低版本也可以用skinOps.GetBoneNode来获取
		bones_id_List1 = d1[1],
		bones_List1 = for bid in bones_id_List1 collect bones_nodes_List1[bid], --顶点相关的骨骼节点
		weights_List1 = for i in d1[2] collect i * val,
		--第二组数据及预处理
		dval = 1 - val,
		bones_nodes_List2 = for i in refs.dependson sk2 where isvalidnode i collect i, --实际的骨骼节点(全部),要根据这个取在sk2中的实际骨骼ID
		bones_id_List2 = d2[1],
		bones_List2 = for bid in bones_id_List2 collect bones_nodes_List1[bid], --顶点相关的骨骼节点
		weights_List2 = for i in d2[2] collect i * dval,
		--返回数据
		bones_id_List = #(),
		weights_List = #()
		
-- 		print #(weights_List1,weights_List2)
		--用1号数据填充列表(已考虑到不存在的骨骼,和存在但顺序不同的骨骼)
-- 		select n1
		for i = 1 to bones_List1.count do
		(
			n = bones_List1[i] --1号数据里的骨骼节点
			bid = findItem bones_nodes_List2 n --查找其在2号节点的位置来获取相对于2号数据的骨骼ID
			if bid > 0 then
			(
				append bones_id_List bid
			)else
			(
				skinOps.AddBone sk2 n 1
				append bones_id_List (skinOps.GetNumberBones sk2)
			)
			append weights_List weights_List1[i] --其实可以省略,但是在这里做一遍的话,以后再来看会比较好理解
		)
-- 		print "----------"
-- 		print #(bones_id_List1,weights_List1) #nomap
-- 		print #(bones_id_List2,weights_List2) #nomap
-- 		print #(bones_id_List,weights_List) #nomap
		--用2号数据再次对列表补充
-- 		select n2
		for i = 1 to bones_List2.count do
		(
			local
			bid = bones_id_List2[i],
			aid = finditem bones_id_List bid
			if aid > 0 then 
			(
				weights_List[aid] += weights_List2[i]
			)else
			(
				append bones_id_List bid
				append weights_List weights_List2[i]
			)
		)
		#(bones_id_List,weights_List)
	)		

	on btn_RecordObject picked obj do
	(
		if isvalidnode obj do btn_RecordObject.caption = obj.name
	)
	on btn_PasteToSelection pressed do
	(
		
		local
		level = subobjectLevel,
		obj = btn_RecordObject.object
		if isvalidnode $ and isValidNode obj do
		(
			--获取数据和选择的顶点序号
			local
			sk2 = $.skin,
			vids = (for i = 1 to skinops.getnumbervertices sk2 where (skinOps.isVertexSelected sk2 i) == 1 collect i) as bitarray,
			--按顶点id处理每个顶点的权重
			sk1 = obj.skin
			undo "weights equalization" on (skinOps.bakeSelectedVerts sk2)
			 
			local
			n = $
			select obj--必须选择一下不然无法使用下面的功能
			local d1_all = for vid in vids collect --在一次切换选择中收集所有数据,减少切换选择对性能的严重影响.
			(
				local cd = #(#(),#()) --current_data
				for wid = 1 to skinOps.GetVertexWeightCount sk1 vid do
				(
					append cd[1] (skinOps.GetVertexWeightBoneID sk1 vid wid)
					append cd[2] (skinOps.GetVertexWeight sk1 vid wid)
				)
				cd
			)
			
			select n
			local vdata_id = 0
			for vid in vids do
			(
				local
-- 				d1 = #(#(),#()),
				d1 = d1_all[vdata_id+=1],
				d2 = #(#(),#()),
				data,
				n = $
-- 				select obj --必须选择一下不然无法使用下面的功能
-- 				for wid = 1 to skinOps.GetVertexWeightCount sk1 vid do
-- 				(
-- 					append d1[1] (skinOps.GetVertexWeightBoneID sk1 vid wid)
-- 					append d1[2] (skinOps.GetVertexWeight sk1 vid wid)
-- 				)
-- 				select n
				for wid = 1 to skinOps.GetVertexWeightCount sk2 vid do
				(
					append d2[1] (skinOps.GetVertexWeightBoneID sk2 vid wid)
					append d2[2] (skinOps.GetVertexWeight sk2 vid wid)
				)
				data = blend_weights obj sk1 d1 n sk2 d2 val:spn1.value
-- 				print data #nomap
				skinOps.ReplaceVertexWeights sk2 vid data[1] data[2]
			)
		)
		subobjectLevel = level
	)
)
CreateDialog pasteWeightsRollout