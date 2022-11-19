imglist = dotnetobject "ImageList"
-- showproperties imgList.images
-- showmethods imgList.images

fn StringToImage str = -- http://lonerobot.net/ --给UI初始化调用
(
	local ConvertClass = dotNetClass "System.Convert"
	local ImageClass = dotNetClass "System.Drawing.Image"
	byteArr = ConvertClass.FromBase64String str
	memstream = dotnetobject "System.IO.MemoryStream" byteArr
	DecodedImg = ImageClass.fromstream memstream
	memstream.close() ; return DecodedImg
)

-- imgList.images.Add <System.String>key <System.Drawing.Image>image
preStr = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAAAAAA"
imgList.images.Add "Lock"	(StringToImage (preStr+"9qxL0ZaNXwAAAAN0Uk5TAP//RFDWIQAAADVJREFUeJxjYAAD1gAgERrKwMAYwOrAwOjAiEyIhoaGMIitWjWFQWpp1BIosTILmQDLgtQBAATfEisXeQIkAAAAAElFTkSuQmCC"))
imgList.images.Add "UnLock" (StringToImage (preStr+"e2xvz4I2EwAAAAN0Uk5TAP//RFDWIQAAADhJREFUeJxjYGANYGBgCA1lYGAMYHVgYHRghBJAASghGhoawiC2atUUBqmlUUugxMosZAIsC1IHABKfEiumTxoVAAAAAElFTkSuQmCC"))

--可响应的事件
	
try(destroyDialog listview_rollout) catch()
rollout listview_rollout "List View"
(
	fn getColor colr val:32 asDotNet:true dir:false =  --文字色 背景色为反求 val:0-1
	(
		colr = copy colr
		if classOf colr == Color do colr = colr as point3
		if dir do return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3]
		for i = 1 to 3 do (colr[i] += val;if colr[i] > 255 do colr[i] -= 256;if colr[i] < 0 do colr[i] += 256)
		if asDotNet then return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3] else return (colr  as Color)
	)
	
	local align = dotNetClass "HorizontalAlignment"
	
	dotNetControl lv "ListView" width:340 height:200 pos:[0,0]
	 
	local headers = #(#("Node", 140, align.Left), #("Comments",65, align.Right)) --第二项为宽度
	fn initLV =
	(
		lv.view = lv.view.Details --设置显示为细节,其他还有  .Details : <System.Windows.Forms.View>, read-only, static--.LargeIcon : <System.Windows.Forms.View>, read-only, static--.List : <System.Windows.Forms.View>, read-only, static-- .SmallIcon : <System.Windows.Forms.View>, read-only, static-- .Tile : <System.Windows.Forms.View>, read-only, static-- .value__ : <System.Int32>
		lv.HeaderStyle = lv.HeaderStyle.none --隐藏表头,如果同时保证表头只有一项,则和ListBox差不多
		lv.HideSelection = off
		lv.FullRowSelect = on --控制同时选中一行中的所有项目
-- 		lv.HotTracking = true --添加下划线
-- 		lv.MultiSelect = on --控制多选
		lv.SmallImageList = imgList
		
		--可设置的属性
		--改变lv背景色
		lv.BackColor = getColor [86,86,86]
		--字体色
		lv.ForeColor = getColor [86,86,86] val:152
		--添加表头(只添加一次,所以放在这里)
		for c in headers do lv.Columns.add c[1] c[2] c[3]
	)
	fn fillLV =
	(
		lv.items.clear()
		for node in objects as array do 
		(
			
-- 			一次添加多 项
			li = dotNetObject "System.Windows.Forms.ListViewItem" #(node.name,(node.handle as string)) ("UnLock")
			li.tag = dotnetmxsvalue node
			lv.items.addRange #(li) --这个可以用来一次添加多 行 (减少刷新次数)
		)
	)
	
-- 	on lv ItemSelectionChanged s a do --有改变就会触发,比如更改选择后,被选中的a和被取消选择的b都会触发
-- 	(
-- 		format "item:% selected:% node:%" a.item.text a.isSelected a.item.tag.value
-- 	)
-- 	on lv SelectedIndexChanged s a do
-- 	(
-- 		if s.SelectedIndices.count > 0 do print s.SelectedIndices.item[0] --因为选择前的取消选择也会将其触发,所以要加个判断.注意序号也是从0开始的.
-- 		with undo off 
-- 		(
-- 			nodes = for k=0 to s.selectedItems.count-1 where isvalidnode (node = s.selectedItems.item[k].tag.value) collect node
-- 			if nodes.count == 0 then clearselection() else select nodes
-- 		)
-- 	)
	on lv MouseClick s e do
	(
		print s.SelectedIndices.item[0] --序号
	)
	on lv MouseDoubleClick s e do
	(

		k = s.selectedItems.item[0].ImageKey
		s.selectedItems.item[0].ImageKey = if k == "Lock" then "UnLock" else "Lock"

	)
	
	on listview_rollout open do
	(	
		initLV()
		fillLV()
		ok
	)
)
createDialog listview_rollout 340 200
