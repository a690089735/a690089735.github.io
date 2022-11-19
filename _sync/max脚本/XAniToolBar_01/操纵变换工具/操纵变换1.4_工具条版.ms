try(cui.unRegisterDialogBar transform_toolstrip;destroydialog transform_toolstrip)catch()

filein "操纵变换1.4_工具条版_杂项函数.ms"
filein "操纵变换1.4_工具条版_复制粘贴函数.ms"
filein "操纵变换1.4_工具条版_菜单窗口.ms"

rollout transform_toolstrip "Untitled" width:sysInfo.desktopSize[1] height:52
(
	local
	data_path = sysInfo.tempdir+"transform_tool_strip",
	wh = [sysInfo.desktopSize[1],52]
	
	--因为窗口改变尺寸不常发生,且大多集中发生,这里添加一个时钟,将集中的频繁改变合并到一次进行计算,减少闪烁,等待为50ms,过大的值体验不好,默认设为true则自动在加载后刷新一次
	timer tmr1 interval:50 active:true --50ms和即时刷新的效果几乎一样,但是减少了大量计算.
-- 	groupBox _grp1 "" width:500 height:58--加了group的话,会导致2017中的刷新产生残影,要想个别的办法,目前考虑换成自绘背景图吧
	
	--收集物体名(按名称)
	dropdownList _names_ddl "" width:120 height:22 items:#("名称集合 01", "名称集合 02", "名称集合 99") tooltip:"名称集合列表[开发中]" enabled:false
	dotnetcontrol _names_btn1 "Button" text:"X" width:20 height:20 tooltip:"删除当前集合"
	dotnetcontrol _names_btn2 "Button" text:"O" width:20 height:20 tooltip:"其他操作"
	dotnetcontrol _names_btn3 "Button" text:"记录" width:40 height:20 tooltip:"记录名称集合" --刷新可以绑定到ddl被单击的信号上
	dotnetcontrol _names_btn4 "Button" text:"选择" width:40 height:20 tooltip:"按名称选择"
	
	--粘贴选项
	
	--收集变换数据
	dropdownList _trans_ddl "" width:120 height:22 items:#("变换数据01", "变换数据02", "变换数据99") align:#right offset:[-120,-25] tooltip:"变换数据列表[开发中]" enabled:false
	dotnetcontrol _trans_btn1 "Button" text:"X" width:20 height:20 tooltip:"删除当前变换数据" --刷新可以绑定到ddl被单击的信号上
	dotnetcontrol _trans_btn2 "Button" text:"O" width:20 height:20 tooltip:"其他操作"
	dotnetcontrol _trans_btn3 "Button" text:"复制" width:40 height:20 tooltip:"新建变换数据记录"
	dotnetcontrol _trans_btn4 "Button" text:"粘贴" width:40 height:20 tooltip:"粘贴当前变换数据"
	
	on _names_btn3 click do save_names() --暂时先用这个
-- 		save_names obj_list:(getcurrentselection()) buffer_file:(data_path + @"\save_names.txt")
	on _names_btn4 click do select(load_names to_nodes:true) --暂时先用这个
	
	on _trans_btn3 click do save_transform() --暂时先用这个
	on _trans_btn4 click do load_transform() --暂时先用这个
	
	--浮窗功能
	on transform_toolstrip open do init_set_transform_toolstrip transform_toolstrip
	on tmr1 tick do (for c in transform_toolstrip.controls do set_transform_toolstrip_layuout wh[1] wh[2] c;tmr1.active=false)
	on transform_toolstrip resized current_wh do (wh = current_wh;tmr1.active=true)
-- 	on transform_toolstrip mousemove xy do print xy --不适合作为数据刷新响应,难以实现逻辑
	--使用时钟和鼠标位置来控制刷新,可以让鼠标在一个范围内刷新,比进入刷新还要优秀(即将进入则提前刷新)
)
createdialog transform_toolstrip pos:[sysInfo.desktopSize[1],sysInfo.desktopSize[2]]--宽度取桌面最大值,窗口关闭时会先跳出来一下,设置pos可以在桌面外创建窗口,这样关闭时就不会看见跳出来一下的闪动.

cui.RegisterDialogBar transform_toolstrip style:#()
cui.DockDialogBar transform_toolstrip #cui_dock_bottom

/*
GetDialogPos
GetDialogSize <rollout>
SetDialogBitmap <rollout> <bitmap> 
*/