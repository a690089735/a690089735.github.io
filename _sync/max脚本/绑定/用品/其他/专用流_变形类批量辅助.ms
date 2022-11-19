--批量转换变形
--先选择变形器模型,再选择蒙皮包裹模型
--获取有用的通道编号
--在当前模型底部,从左至右输出,高度偏移为$.max-$.pos[3],水平偏移为$.max-$.pos[2]
--命名为通道名


--设置值
-- <boolean> WM3_MC_SetValue <Morpher_Class> Morpher <integer> channel_index <float> new_value
-- 获取名
-- <string> WM3_MC_GetName <Morpher_Class> Morpher <integer> channel_index

try(DestroyDialog morpherTool)catch()
rollout morpherTool "变形-批辅助" width:128 height:136
(
	button btn_SnapshotSelection "快照选中物体" pos:[16,16] width:96 height:24 toolTip:"快照选中物体并选择快照"
	button btn_AddMorpher "套用变形器" pos:[16,56] width:96 height:24 toolTip:"选择第一个物体为基础,其余的选择依次添加给变形器"
	button btn_ExportMorpher "导出变形器" pos:[16,96] width:96 height:24 toolTip:"选中变形器物体和包裹物体,按变形器通道逐个快照包裹物体"
	
	
	fn CreateMorpherNode = --创建变形器套路,选择1为要放置修改器的物体,其他选择按顺序放入1的变形器
	(
		max modify mode
		objs = selection as array

		mmdf = morpher()
		addmodifier objs[1] mmdf
		select objs[1]
		for i = 2 to objs.count do WM3_MC_BuildFromNode mmdf (i-1) objs[i]
	)

	fn CreateSnapshot = --快照所有选中物体,并选择快照
	(
		temp = for o in selection as array collect snapshot o;select temp
	)

	fn createMorpherOBJ = --批量导出变形(普通)选择1为变形器物体,选择2为包裹物体
	(
		max create mode --奇迹般地,变形器操作竟然在创建面板有效
		
		local morpherOBJ = selection[1]
		local wrapOBJ = selection[2]

		local modf = undefined

		for m in morpherOBJ.modifiers do if (classof m == Morpher) do (modf = m;exit)

		if modf != undefined do
		( 
			--获取有意义的变形序号
			local ChList = for i = 1 to 100 where WM3_MC_HasData modf i collect i
			--按序号创建变形集
			local newOBJList = for i in ChList collect
			(
				for j in ChList do (WM3_MC_SetValue modf j 0.0)--全部为零
				WM3_MC_SetValue modf i 100.0 --现行通道100
				newOBJ = snapshot wrapOBJ --复制实例
				converttopoly newOBJ
				newOBJ.name = WM3_MC_GetName modf i
				newOBJ
			)
			--物体排列位置
			pos = morpherOBJ.max-morpherOBJ.pos
			for i = 1 to newOBJList.count do
			(
				newOBJList[i].pos += [pos.x*(i-1),0,-pos.z]
			)
		)
		
		for j in ChList do (WM3_MC_SetValue modf j 0.0)--全部为零
	)
	-- createMorpherOBJ()

	on btn_SnapshotSelection pressed  do
	(
		CreateSnapshot()
		
	)
	on btn_AddMorpher pressed  do
	(
		CreateMorpherNode()
	)
	on btn_ExportMorpher pressed  do
	(
		createMorpherOBJ()
	)
)
CreateDialog morpherTool