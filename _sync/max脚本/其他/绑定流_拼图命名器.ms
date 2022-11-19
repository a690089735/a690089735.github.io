try(destroydialog RNRollout)catch()
rollout RNRollout "拼图命名器" width:200 height:312
(
	button btn_cc "执行" pos:[104,274] width:80 height:24 toolTip:""
	label lbl1 "自动匹配序号基于选择顺序" pos:[16,272] width:80 height:32
	checkbox chk1 "实时显示名称" pos:[8,16] width:96 height:16
	edittext edt_fornt "" pos:[64,72] width:128 height:16 enabled:true
	edittext edt_middle "" pos:[64,96] width:128 height:16 enabled:true
	edittext edt_Back "" pos:[64,120] width:128 height:16 enabled:true
	checkbox chk_RenameAll "命名时,重命名所有相关对象." pos:[8,192] width:176 height:16 enabled:true checked:false
	checkbox chk_index "匹配序号(在名字后添加序号)" pos:[8,216] width:176 height:16 enabled:true checked:true
	checkbox chk3 "匹配左右(添加后缀.L或者.R)" pos:[8,240] width:184 height:16
	edittext edt_source "" pos:[64,144] width:128 height:16 enabled:true
	checkbox chk7 "替换" pos:[8,144] width:48 height:16
	edittext edt_target "" pos:[64,160] width:128 height:16 enabled:true
	checkbox chk4 "前缀名" pos:[8,72] width:56 height:16
	checkbox chk5 "中间名" pos:[8,96] width:56 height:16
	checkbox chk6 "后缀名" pos:[8,120] width:56 height:16
	label lbl8 "为" pos:[48,160] width:16 height:16
	GroupBox grp1 "" pos:[0,0] width:200 height:64
	GroupBox grp3 "" pos:[0,56] width:200 height:128
	GroupBox grp4 "" pos:[0,176] width:200 height:88
	editText edt6 "按名称选择" pos:[8,38] width:136 height:16
	button btn_select "选择" pos:[152,36] width:40 height:20
	
	
	
	local obj
	local offset = 0.01
	
	fn GW_displayGHOSTNames =
	(
	  gw.setTransform (matrix3 1)
	  for o in objects as array where not o.isHiddenInVpt do
		if o.isSelected then gw.text o.center o.name color:white else gw.text o.center o.name color:Yellow
	--  gw.enlargeUpdateRect #whole 
	)

	on RNRollout open do
	(
	unregisterRedrawViewsCallback GW_displayGHOSTNames 
	)
	on RNRollout close do
	(
	unregisterRedrawViewsCallback GW_displayGHOSTNames 
	)
	on btn_cc pressed do
	with undo on(
		objs = selection as Array
		name1 = if chk4.checked then edt_fornt.text else "" --前缀名
		name3 = if chk6.checked then edt_Back.text else ""--后缀名
	-- 		index = 0
		for obj in objs do
		(	
			if chk3.checked do --如果勾选匹配左右,则加后缀
			(
				name3 = if chk6.checked then edt_Back.text else ""
				name3 += if obj.center.x > offset then ".L" else if obj.center.x < -offset then ".R" else ".M"
			)
			oldname = obj.name ---记录原名
			name2 = if chk5.checked then edt_middle.text else oldname --如果未选择中间名,则中间名为原名
	-- 			index = (if chk_index.checked then (execute ("$'"+name1+name2+"*"+name3+"'.count"))+1 else "")as string--如果勾选匹配序号,则对中间名加后缀序号
	-- 			if chk_index.checked then index += 1 else index = "" --如果勾选匹配序号,则对中间名加后缀序号
	-- 			newname = name1+name2+(index as string)+name3 --新的名字文本
			newname = name1+name2+name3 
			if chk_index.checked then newname = uniquename  newname--如果勾选匹配序号,则对中间名加后缀序号
	-- 			if chk3.checked do --如果勾选匹配左右,则加后缀,智能删除原后缀
	-- 			(
	-- 				fl = filterString nametext ".";fl = fl[fl.count]
	-- 				if (fl == "M" or fl == "L" or fl == "R") do (nametext[nametext.count] = "";nametext[nametext.count] = "")
	-- 				nametext += if obj.center.x > offset then ".L" else IF obj.center.x < -offset then ".R" else ".M"
	-- 			)
	-- 			newname = if chk_index.checked then uniqueName(nametext) else nametext --如果勾选匹配序号,则加后缀序号,否则不变,这里nametext还要提供给后面,所以多加一个newname的变量
			obj.name = newname --完成更名
			if chk_RenameAll.checked do --如果勾选命名时,替换所有相关对象,则替换所有与原名相关的对象名.
			( 
				order = stringStream ""
				format "for o in $'*%*' do o.name = substituteString o.name \"%\" \"%\"" oldname oldname newname to:order --优先级原因,没有采用nametext,直接使用了结果.
	-- 				print order
				execute (order as string)
			)
		)
		if chk7.checked do for obj in objs do(obj.name = substituteString obj.name edt_source.text edt_target.text ) --如果勾选替换,则执行内容替换
	)
	on chk1 changed state do
	(
		if state then registerRedrawViewsCallback GW_displayGHOSTNames else unregisterRedrawViewsCallback GW_displayGHOSTNames 
	)
	on btn_select pressed  do
		execute ("select $*" + edt6.text + "*")
)

createdialog RNRollout
--