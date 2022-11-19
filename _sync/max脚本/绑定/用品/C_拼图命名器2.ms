try(destroydialog RNRollout)catch()
rollout RNRollout "拼图命名器" width:200 height:368
(
	local offset = 0.005
	local separator = "."
	local showNames = false
	local showAxis = false
	
	GroupBox grp1 "" pos:[0,0] width:200 height:40
	GroupBox grp3 "" pos:[0,88] width:200 height:151
	GroupBox grp4 "" pos:[0,232] width:200 height:88
	
	checkbox chk1 "物体名" pos:[72,16] width:68 height:16
	edittext edt6 "" pos:[67,49] width:84 height:16
	
	edittext edt_fornt "" pos:[64,127] width:128 height:16 enabled:true
	edittext edt_middle "" pos:[64,151] width:128 height:16 enabled:true
	edittext edt_Back "" pos:[64,175] width:128 height:16 enabled:true
	edittext edt_source "" pos:[64,199] width:128 height:16 enabled:true
	edittext edt_target "" pos:[64,215] width:128 height:16 enableds:true
	
	checkbox chk_index "自动编号" pos:[8,247] width:176 height:16 enabled:true checked:true
	checkbox chk3_matchLR "区分左右" pos:[8,271] width:184 height:16
	checkbox chk_RenameAll "重命名相关对象" pos:[8,295] width:176 height:16 enabled:true checked:false
	
	button btn_cc "执行" pos:[88,327] width:104 height:32 toolTip:""
	
	checkbox chk7 "替换" pos:[8,199] width:59 height:16
	label lbl8 "为" pos:[47,215] width:19 height:16
	
	checkbox chk4 "前缀名" pos:[8,127] width:59 height:16
	checkbox chk5 "中间名" pos:[8,151] width:59 height:16
	checkbox chk6 "后缀名" pos:[8,175] width:59 height:16
	
	button btn_select "选择" pos:[154,48] width:40 height:20
	label lbl4 "分隔符:" pos:[24,103] width:40 height:16
-- 	radiobuttons rdo1 "" pos:[67,103] width:125 height:16 labels:#("", "", "", "", "") default:1 columns:5 offsets:#([-1,0],[-2,0],[-3,0],[-2,0],[-3,0])
	radiobuttons rdo1 "" pos:[67,103] width:125 height:16 labels:#(".", "-", "_", "") default:1 columns:5 offsets:#([-1,0],[-2,0],[-2,0],[-1,0])
	edittext edt_sep "" pos:[168,103] width:24 height:16 enabled:false
	
	button btn5 "?" pos:[8,327] width:14 height:16 --toolTip:"实时显示名称对选择的物体生效;\n匹配序号基于选择顺序;\n且只有同名的物体才会匹配序号;\n执行操作对选择的物体生效;\n匹配左右以正视图为参照;"--\n最后一次使用的分隔符会被记住

	button btn9 "?" pos:[6,102] width:14 height:16 toolTip:"1.点;2.减号横杠;3.下划线;4.冒号;5.无分隔符"
	button btn_ReSet "R" pos:[8,346] width:14 height:16 toolTip:"重置"
	
	fn saveset val inif:(getdir #userStartupScripts + @"\Renametool.ini") = --这么设计的目的是为了能在操纵控件时及时保存,但由于时间原因,下方未作实现.
	(
		case val of
		(
			1:(setINISetting inif "renameToolsetting" "name0" edt6.text)						--按名称选1
			2:(setINISetting inif "renameToolsetting" "symbolState" (rdo1.state as string))	--分隔符2
			3:(setINISetting inif "renameToolsetting" "symbolStr" (edt_sep.text))				--分隔符内容3
			3:(setINISetting inif "renameToolsetting" "name1s" (chk4.checked as string))		--前缀选4
			4:(setINISetting inif "renameToolsetting" "name1" edt_fornt.text)					--前缀5
			5:(setINISetting inif "renameToolsetting" "name2s" (chk5.checked as string))		--中间选6
			6:(setINISetting inif "renameToolsetting" "name2" edt_middle.text)					--中间7
			7:(setINISetting inif "renameToolsetting" "name3s" (chk6.checked as string))		--后缀选8
			8:(setINISetting inif "renameToolsetting" "name3" edt_Back.text)					--后缀9
			9:(setINISetting inif "renameToolsetting" "name4" edt_source.text)					--替换源10
			10:(setINISetting inif "renameToolsetting" "name5" edt_target.text)					--替换为11
			11:(setINISetting inif "renameToolsetting" "check1" (chk_index.checked as string)) --添加序号12
			12:(setINISetting inif "renameToolsetting" "check2" (chk3_matchLR.checked as string)) --匹配左右13
			13:(setINISetting inif "renameToolsetting" "check3" (chk_RenameAll.checked as string)) --重命名相关14
			(-1):(for i = 1 to 14 do (saveset i inif:inif)) --全部
		)
	)
	fn loadset = 
	(
		inif = (getdir #userStartupScripts + @"\Renametool.ini")
		edt6.text = getINISetting inif "renameToolsetting" "name0"						--按名称选1
		rdo1.state = (getINISetting inif "renameToolsetting" "symbolState") as integer --分隔符2
		edt_sep.text = getINISetting inif "renameToolsetting" "symbolStr"				--分隔符内容3
		if rdo1.state == 0 do rdo1.state = 1;rdo1.changed(rdo1.state)					--重载分隔符
		chk4.checked = ((getINISetting inif "renameToolsetting" "name1s") == "true") 	--前缀选4
		edt_fornt.text = getINISetting inif "renameToolsetting" "name1"					--前缀5
		chk5.checked = ((getINISetting inif "renameToolsetting" "name2s") == "true")	--前缀选6
		edt_middle.text = getINISetting inif "renameToolsetting" "name2"				--中间7
		chk6.checked = ((getINISetting inif "renameToolsetting" "name3s") == "true") 	--后缀选8
		edt_Back.text = getINISetting inif "renameToolsetting" "name3"					--后缀9
		edt_source.text = getINISetting inif "renameToolsetting" "name4"				--替换源10
		edt_target.text = getINISetting inif "renameToolsetting" "name5"				--替换为11
		chk_index.checked = ((getINISetting inif "renameToolsetting" "check1") == "true")--添加序号12
		chk3_matchLR.checked = ((getINISetting inif "renameToolsetting" "check2") == "true") --匹配左右13
		chk_RenameAll.checked = ((getINISetting inif "renameToolsetting" "check3") == "true") --重命名相关14
	)
	
	fn GW_displayGHOSTNames =
	(
		gw.setTransform (matrix3 1)
		sel = for o in objects where not o.isHiddenInVpt collect o
		if showNames do 
			for o in sel do 
				gw.text o.center o.name color:white
		if showAxis do 
			for o in sel do 
			(
				local m = o.transform
				local t = m.translation
				
				local len = (viewport.GetScreenScaleFactor t)*0.075
				
				local dx = [len,0,0] * m
				local dy = [0,len,0] * m
				local dz = [0,0,len] * m
				
				if o.isSelected then  color = White else color = Yellow
					
				gw.setColor #line red
				gw.Polyline #(t,dx) false
				gw.text dx "x" color:red
				
				gw.setColor #line green
				gw.Polyline #(t,dy) false
				gw.text dy "y" color:green
				
				gw.setColor #line blue
				gw.Polyline #(t,dz) false
				gw.text dz "z" color:blue
			)
		gw.enlargeUpdateRect #whole
	)
	fn filterSelection a minus =
	(
		sel = selection as array
		clearselection()
		if minus 
		then select(for s in sel where s.transform.pos[a] < -0.0001 collect s)
		else select(for s in sel where s.transform.pos[a] > 0.0001 collect s)
	)
	fn replaceUILanguage window =
	(
-- 		if ((sysinfo.GetMaxLanguage())[3] == "ENU") do
		if GetINISetting (GetMAXIniFile()) "File Language Options" "LanguageToUseForFileIO" != "2052" do
		(
			local chinese = #("额外渲染:","物体名","轴架",		"按名称选择","选择","过滤选择:",				"自动编号",	"区分左右",			"替换","为",	"分隔符:",	"执行","")
			local english = #("ExtraShow:","ObjName","Axis",	"SelectName:","Select","Condition:",	"AutoNumbered","Match .L .R",	"Replace","To",	"Symbol:",	"Execute","")
			for c in window.controls do try(c.caption = english[finditem chinese c.caption])catch()
		)
	)
	
	checkbox chk2 "轴架" pos:[144,16] width:51 height:16
	label lbl2 "按名称选择" pos:[8,50] width:62 height:16
	label lbl1 "额外渲染:" pos:[7,16] width:62 height:16
	label lbl3 "过滤选择:" pos:[9,74] width:55 height:16
	radiobuttons rdo2 "" pos:[65,74] width:60 height:16 labels:#("-", "+") columns:2  offsets:#([-1,0],[-2,0]) 
	button btn6 "X" pos:[129,74] width:16 height:16
	button btn7 "Y" pos:[153,74] width:16 height:16
	button btn8 "Z" pos:[177,74] width:16 height:16
	GroupBox grp2 "" pos:[0,32] width:200 height:64
	
	on RNRollout open do
	(
		replaceUILanguage RNRollout
		unregisterRedrawViewsCallback GW_displayGHOSTNames
		registerRedrawViewsCallback GW_displayGHOSTNames
		loadset()
	)
	on RNRollout close do
	(
		unregisterRedrawViewsCallback GW_displayGHOSTNames
		saveset(-1)
	)
	on chk1 changed state do
	(
		showNames = state;redrawviews()
	)
	on btn_cc pressed do
	undo "reName" on( --请不要优化这部分,这么写的目的是为了方便阅读且方便执行,并非不能将其混为一块,大道至简.
		objs = selection as Array
		oldnames = if chk_RenameAll.checked then for obj in objs collect obj.name --如果勾选命名时,替换所有相关对象,则事先记录原始名.
		if chk5.checked do for obj in objs do obj.name = edt_middle.text --中间名
		if chk4.checked do for obj in objs do obj.name = edt_fornt.text + separator + obj.name --前缀名
		if chk6.checked do for obj in objs do obj.name = obj.name + separator + edt_Back.text --后缀名
		if chk3_matchLR.checked do for obj in objs do obj.name += if obj.center.x > offset then separator + "L" else if obj.center.x < -offset then separator + "R" else separator + "M" --如果勾选匹配左右,则加后缀
		if chk7.checked and edt_source.text != "" do for obj in objs do(obj.name = substituteString obj.name edt_source.text edt_target.text) --如果勾选替换,则执行内容替换
		if chk_index.checked do for obj in objs do obj.name = uniquename (obj.name + separator) --如果勾选匹配序号,则对中间名加后缀序号
		if chk_RenameAll.checked do --如果勾选命名时,替换所有相关对象,则替换所有与原名相关的对象名.
			for i = 1 to objs.count do
			( 
				order = stringStream ""
				oldname = oldnames[i];newname = objs[i].name
				format "for o in $'*%*' do o.name = substituteString o.name \"%\" \"%\"" oldname oldname newname to:order --生成命令.
				execute (order as string)
			)
	)
	on btn_select pressed do
		(clearselection();execute ("select $'*" + edt6.text + "*'"))
	on rdo1 changed stat do
	(
		edt_sep.enabled = false
		separator = case stat of
		(
			1 : "."
			2 : "-"
			3 : "_"
			4 : (edt_sep.enabled = true; edt_sep.text)
		)
	)
	on btn_ReSet pressed do
	(
		chk4.checked = chk5.checked = chk6.checked = chk1.checked = chk3_matchLR.checked = chk_RenameAll.checked = false
		chk_index.checked = true
		unregisterRedrawViewsCallback GW_displayGHOSTNames
		rdo1.changed(rdo1.state = 1)
		edt6.text = edt_fornt.text = edt_middle.text = edt_Back.text = edt_source.text = edt_target.text = ""
		saveset (-1)
	)
	on chk2 changed state do
	(
		showAxis = state;redrawviews()
	)
	on btn6 pressed do
		filterSelection 1 (rdo2.state == 1)
	on btn7 pressed do
		filterSelection 2 (rdo2.state == 1)
	on btn8 pressed do
		filterSelection 3 (rdo2.state == 1)
)

createdialog RNRollout
--