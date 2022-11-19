try(DestroyDialog quick_script)catch()
rollout quick_script "Quick Script" width:352 height:224
(
	--1添加时在某一目录创建文件.
	--1删除时删除文件.
	--1点击列表时刷新名称框和脚本框,2双击可直接执行
	--多选执行可按顺序执行多个
	--上下按钮可调整列表顺序
	
	edittext 'edt_script' "" pos:[8,8] width:336 height:112 align:#left
	listBox 'lbx_list' "" pos:[104,152] width:240 height:5 align:#left
	editText 'edt_name' "" pos:[96,128] width:224 height:20 align:#left
	button 'btn_rename' "R" pos:[320,128] width:28 height:20 align:#left
	
	button 'btn_add' "+" pos:[16,128] width:32 height:24 align:#left
	button 'btn_del' "-" pos:[56,128] width:32 height:24 align:#left
	
	button 'btn_moveup' "Λ" pos:[16,160] width:32 height:24 align:#left
	button 'btn_movedown' "V" pos:[56,160] width:32 height:24 align:#left
	button 'btn_exe' "执行" pos:[16,192] width:72 height:24 align:#left Tooltip:"点击执行,ctrl逐帧执行,alt逐关键帧执行."
	
	local data_folder = (DotNetClass "System.Environment").GetFolderPath ((DotnetClass "Environment+SpecialFolder").ApplicationData) + "\\XAniTools\\"
	--获取关键帧 --这个很快很简单很好用,但是会在每次运行时导致轨迹工具发生刷新.因为mapkeys相当于对每个关键帧进行了一次操作.
	fn GetKeys objs:(getcurrentselection()) clamp_range:false clamp_start:animationrange.start clamp_end:animationrange.end = --mapped在处理多物体时返回的是ok,实际上下面的mapkeys就能兼容单物体和多物体,clamp_range钳制范围
	with undo off
	(
		mapkeys objs (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
		if clamp_range then for t in sort(makeuniquearray keys) where t >= clamp_start and t <= clamp_end collect t else sort(makeuniquearray keys)
	)
	
	on btn_exe pressed do
	undo "Execute Script" on(
		case of
		(
			(keyboard.altPressed) : for t in GetKeys clamp_range:true do at time t execute edt_script.text
			(keyboard.controlPressed) : for t = animationRange.start to animationRange.end do at time t execute edt_script.text
			default : execute edt_script.text
		)
	)
	on btn_add pressed do
	(--创建脚本文件
		
	)
)
CreateDialog quick_script