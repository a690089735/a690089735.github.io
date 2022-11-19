--在#SelectionChanged和#subobjectSelectionChanged时刷新Skin数据和界面状态.--经测试,#subobjectSelectionChanged可在添加删除骨骼时触发,可在skin修改器添加删除时触发.特别完美...只是更改选择还是需要单独触发的
--在#modelOtherEvent时刷新权重数据

--列表的目的
--显示
--[当前skin的](如果当前是skin,且于权重模式下,且不是四元数权重模式(低版本可能获取会报错))
--[选中顶点的权重](可能是0,1,n个顶点,n个顶点取最小,一个bitarray(可自动归一化),一个currentVertex,如何得到得到:每次刷新,用新的bitarray去减旧的,可以得出新增的点,比如a-b,可以得出b里没有的数,如果有结果,则为加选,取结果的第一个,如果结果为#{},则取新bitarray的第一个)
--功能
--单击会选中对应的骨骼.
--双击可以切换骨骼的锁定状态.
--上方的标签会同步显示当前骨骼并可以双击切换锁定,以保证不在列表中的骨骼也可以被操作

--一些也许有用的字符
--" \x260C \x260D \x26EC \x26FC \x26F6 \x26FB \x1DF8 \x1DFB \x26DE "
--" \x26EC \x26FC \x26F6 \x26FB " --顶点,元素,顶点色,封套


try(destroydialog WeightToolPlusB)catch()
rollout WeightToolPlusB "WeightToolPlusB" width:180 height:370
(
	dotNetControl 'Lbx_Bones' "ListView" pos:[2,224] width:176 height:134
	
	local
	_align = dotNetClass "HorizontalAlignment"

	
	fn FillListView = --舍弃sk:sk
	(
		Lbx_Bones.items.clear()
		ll = for i = 1 to 3 collect
		(
			local
			listr = "tip",
			lival = "val"
			li = dotNetObject "System.Windows.Forms.ListViewItem" #(listr, lival)
			li.ToolTipText = listr
			li
		)
		Lbx_Bones.items.addrange ll
	)
	on WeightToolPlusB open do
	(
		for c in #(#("BoneName", 132, _align.Left), #("Weight",40, _align.Left)) do Lbx_Bones.Columns.add c[1] c[2] c[3]
		FillListView()
	)
	--标题栏响应
	on lbl_Ico mouseDown do(_Pin = true;_Offset = (GetDialogPos WeightToolPlusB) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Ico mouseUp do _Pin = false
	on lbl_Ico mouseMove do if _Pin do SetDialogPos WeightToolPlusB (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on lbl_Tit mouseDown do(_Pin = true;_Offset = (GetDialogPos WeightToolPlusB) - DotNetPoint2MaxPoint2(_Cursor.position))
	on lbl_Tit mouseUp do _Pin = false
	on lbl_Tit mouseMove do if _Pin do SetDialogPos WeightToolPlusB (DotNetPoint2MaxPoint2(_Cursor.position) + _Offset)
	on btn_Cls click do DestroyDialog WeightToolPlusB
)
createdialog WeightToolPlusB style:#()
setFocus WeightToolPlusB --不加这个会让工具提示无效