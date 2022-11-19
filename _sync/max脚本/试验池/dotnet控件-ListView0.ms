try(destroyDialog listview_rollout) catch()
rollout listview_rollout "List View"
(
	local align = dotNetClass "HorizontalAlignment"
	
	dotNetControl lv "ListView" width:340 height:200 pos:[0,0]
	 
	local headers = #(#("Node", 140, align.Left), #("Comments",65, align.Right)) --第二项为宽度
	fn initLV =
	(
		lv.view = lv.view.Details --设置显示为细节,其他还有  .Details : <System.Windows.Forms.View>, read-only, static--.LargeIcon : <System.Windows.Forms.View>, read-only, static--.List : <System.Windows.Forms.View>, read-only, static-- .SmallIcon : <System.Windows.Forms.View>, read-only, static-- .Tile : <System.Windows.Forms.View>, read-only, static-- .value__ : <System.Int32>
-- 		lv.HeaderStyle = lv.HeaderStyle.none --隐藏表头,如果同时保证表头只有一项,则和ListBox差不多
		lv.HideSelection = off
		lv.FullRowSelect = on --控制同时选中一行中的所有项目
-- 		lv.MultiSelect = on --控制多选
		for c in headers do lv.Columns.add c[1] c[2] c[3]
	)
	fn fillLV =
	(
		lv.items.clear()
		for node in objects as array do 
		(
-- 			直接添加到第一项
-- 			item = lv.items.add node.name
-- 			item.tag = dotnetmxsvalue node
			
-- 			一次添加多 项
			li = dotNetObject "System.Windows.Forms.ListViewItem" #(node.name,(node.handle as string))
			li.tag = dotnetmxsvalue node
			lv.items.addRange #(li) --这个可以用来一次添加多 行 (减少刷新次数)
		)
	)
	
	on lv ItemSelectionChanged s a do
	(
		format "item:% selected:% node:%" a.item.text a.isSelected a.item.tag.value 
	)
	on lv SelectedIndexChanged s a do
	(
		with undo off 
		(
			nodes = for k=0 to s.selectedItems.count-1 where isvalidnode (node = s.selectedItems.item[k].tag.value) collect node
			if nodes.count == 0 then clearselection() else select nodes
		)
	)
	
	on listview_rollout open do
	(	
		initLV()
		fillLV()
		ok
	)
)
createDialog listview_rollout 340 200

/* execute to populate the scene:
with undo off
(
	delete objects
	for k=1 to 20 do box width:10 pos:[k*12,0,0]
)
*/