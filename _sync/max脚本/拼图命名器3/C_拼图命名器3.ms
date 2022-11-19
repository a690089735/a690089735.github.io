--按前缀,名称1,名称2,后缀,序号,自动方向来命名,设置自动方向时,不同方向的序号不叠加.

/*
name = "limb,a" --拆分成两个
tag = "character,alpha,bn"
起始编号 = 11,1
编号位数 = 4,2 --不输入或输入有误默认为3
direction = "L,R,M"
阈值 = 0.001
例如:
{tag1}_{tag2}_{name1}_{name2}_{tag3}_{idx1}-{idx2}.{x} --x表示x轴正方向为左,-x表示,x轴负方向为左,
character_limb_a_bn_0011-01.L
{t1} = {t}

names可以删除,把tags改成可以插入的比如{t1:5}在第5个子字地方添加tag1 0是开头,-1是结尾,默认为-1 配合{o}可以有很多组合
原names的位置可以换成名称选择和重名选择
编号可以从idx改成Num 语法变为{n1:2} :后面的位数默认为2
把替换设计为 {s1:name} name 默认为"" 将s1 替换为name

把命令框做成可记录的(储存到硬盘),点击可以在命令框下面弹出一个有不重复的记录的菜单(每次执行时记录和整理) 最多保存32个不同的记录(位置放在各个版本都能找到的地方)
*/

try(DestroyDialog rename3Rollout)catch()
rollout rename3Rollout "名称拼图3.15" width:272 height:160
(
	checkbutton 'ckb_showname_sel' "Selected" pos:[157,0] width:48 height:20 highlightColor:(color 0 180 80) align:#left toolTip:"仅启用选择的物体"
	checkbutton 'ckb_showname' "ShowNames" pos:[205,0] width:66 height:20 highlightColor:(color 0 180 80)  align:#left toolTip:"渲染名称"
	
	dotnetcontrol 'tb' "TabControl" pos:[0,0] width:272 height:24
		
	label 'lbl_names' "&Names" pos:[8,32] width:32 height:16 align:#left
	edittext 'edt_names' "" pos:[48,30] width:216 height:16 align:#left
	label 'lbl_tags' "&Tags" pos:[8,52] width:32 height:16 align:#left
	edittext 'edt_tags' "" pos:[48,50] width:216 height:16 align:#left
	label 'lbl_basenum' "&Idxs" pos:[8,72] width:32 height:16 align:#left toolTip:"tes"
	edittext 'edt_basenum' "" pos:[48,70] width:104 height:16 align:#left
	label 'lbl_digit' "Dig" pos:[168,72] width:16 height:16 align:#left
	edittext 'edt_digit' "" pos:[184,70] width:80 height:16 align:#left
	label 'lbl_direction' "Dirs" pos:[8,92] width:18 height:16 align:#left
	dotNetControl 'btn_xyz' "button" text:"X" pos:[26,89] width:14 height:20 align:#left
	edittext 'edt_direction' "" pos:[48,90] width:104 height:16 align:#left
	label 'lbl_threshold' "Thr" pos:[168,92] width:16 height:16 align:#left
	spinner 'spn_threshold' "" pos:[184,91] width:82 height:16 range:[0.001,1,0.001] type:#worldunits scale:0.001 toolTip:"用于判断方位的精度,超过这个距离则为一侧."  align:#left
	edittext 'edt_rename' "" pos:[8,112] width:248 height:16 align:#left --text:"{t1}_{t2}_{n1}_{n2}_{n3}_{i1}-{i2}.{x}"
	button 'btn_rename' "ReName" pos:[184,133] width:72 height:22 align:#left
	
	button 'tip_names' "?" pos:[40,31] width:12 height:16 toolTip:"{o}代表原名称\n名称格式(例):名称1,名称2,名称3...\n(点击写入{n})" align:#left
	button 'tip_tags' "?" pos:[40,51] width:12 height:16 toolTip:"标记格式(例):标记1,标记2,标记3...\n(点击写入{t})" align:#left
	button 'tip_basenum' "?" pos:[40,71] width:12 height:16 toolTip:"计数起始序号(例):起始序号1,起始序号2,起始序号3...\n按照digit(数位)补齐,不填写默认为3\n(点击写入{i})" align:#left
	button 'tip_direction' "?" pos:[40,91] width:12 height:16 toolTip:"方向符号(例):正侧,负侧,其他\n方向不填写默认为L,R,M\n(点击写入{x})" align:#left
	button 'tip_rename' "?" pos:[256,113] width:12 height:16 align:#left toolTip:"{o}代表原名称\n名称占位符:{n},多个时可用{n1},{n2}区分.\n标记占位符:{t},多个时可用{t1},{t2}区分\n序号占位符:{i},多个时可用{i1},{i2}区分\n方向占位符{x|y|z|-x|-y|-z},用于自动识别方向\n(点击写入简单表达式)" 
	button 'tip_rename_btn' "?" pos:[256,134] width:12 height:20 toolTip:"按照表达式来创建命名,有方向占位符时,计数只按方向增加.\n(点击创建样板参数)" align:#left
		
	edittext 'edt_select' "" pos:[114,32] width:100 height:16 align:#left
	button 'btn_select' "Select" pos:[216,30] width:48 height:20 align:#left toolTip:"按字符和通配符*?选择物体,比如bip*可选择所有bip开头的物体.\n按住Ctrl则只在可见的物体中选择." 
	
	edittext 'edt_replace_source' "" pos:[8,56] width:100 height:16 align:#left
	edittext 'edt_replace_target' "" pos:[114,56] width:100 height:16 align:#left
	label 'lbl_replace' ">" pos:[109,57] width:8 height:16 align:#left
	button 'btn_replace' "Replace" pos:[216,54] width:48 height:20 align:#left

	checkbutton 'ckb_showname_sel_dis' "Selected" pos:[157,0] width:48 height:20 highlightColor:(color 0 180 80) align:#left
	checkbutton 'ckb_showname_dis' "ShowNames" pos:[205,0] width:66 height:20 highlightColor:(color 0 180 80)  align:#left
	
	local
	cfgFile = getdir #plugcfg + "/ReName3.ini",
	num_list = #("0","1","2","3","4","5","6","7","8","9",","),
	controls = #(
	#(lbl_names,edt_names,lbl_tags,edt_tags,lbl_basenum,edt_basenum,lbl_digit,edt_digit,lbl_direction,btn_xyz,edt_direction,lbl_threshold,spn_threshold,edt_rename,btn_rename,tip_names,tip_tags,tip_basenum,tip_direction,tip_rename,tip_rename_btn),
	#(edt_select,btn_select,edt_replace_source,edt_replace_target,lbl_replace,btn_replace)
	),
	xyz = #(),
	selected = false
	
	fn only_num str = --保持数字和逗号输入
	(
		local
		n_str = "",s = ""
		for i = 1 to str.count where (s = str[i];findItem num_list s > 0) do n_str+=s
		n_str
	)
	--加前缀0占位依赖,d=位数,返回文本
	fn covering_str num d:2 =
	(
		if classOf d != integer do d = 3 --输入有误时,默认为3
		local numstr = num as string
		for i = 1 to d - numstr.count do numstr = "0" + numstr
		numstr
	)
	fn load_arguments id:0 =
	(
		if classof id == BitArray then for i in id do load_arguments id:i
		else case id of
		(
			1 : edt_names.text = getINISetting cfgFile "rename" "names" --加载名称
			2 : edt_tags.text = getINISetting cfgFile "rename" "tags" --加载标记
			3 : edt_basenum.text = getINISetting cfgFile "rename" "basenum" --加载序号
			4 : edt_digit.text = getINISetting cfgFile "rename" "digit" --加载序号位数
			5 : (xyz = if (s = filterString (getINISetting cfgFile "rename" "xyz") ":").count < 3 then #("L,R,M","F,B,I","T,D,C") else s; edt_direction.text = xyz[1]) --加载方向
			6 : spn_threshold.value = if (s = getINISetting cfgFile "rename" "threshold") == "" then 0.001 else s as float --加载精度
			
			7 : edt_select.text = getINISetting cfgFile "rename" "select"
			8 : edt_replace_source.text = getINISetting cfgFile "rename" "source" 
			9 : edt_replace_target.text = getINISetting cfgFile "rename" "target" 
			
			10 : edt_rename.text = if (s = getINISetting cfgFile "rename" "rename") == "" then "{t}_{n}_{i}_{x}" else s --加载表达式
		)
	)
	fn save_arguments id:0 =
	(
		if classof id == BitArray then for i in id do save_arguments id:i
		else case id of
		(
			1 : setINISetting cfgFile "rename" "names" edt_names.text --保存名称
			2 : setINISetting cfgFile "rename" "tags" edt_tags.text --保存标记
			3 : setINISetting cfgFile "rename" "basenum" edt_basenum.text --保存序号
			4 : setINISetting cfgFile "rename" "digit" edt_digit.text --保存序号位数
			5 : (xyz[findItem #("X","Y","Z") btn_xyz.text] = edt_direction.text;setINISetting cfgFile "rename" "xyz" (xyz[1]+":"+xyz[2]+":"+xyz[3])) --保存方向
			6 : setINISetting cfgFile "rename" "threshold" (spn_threshold.value as string) --保存精度
			
			7 : setINISetting cfgFile "rename" "select" edt_select.text
			8 : setINISetting cfgFile "rename" "source" edt_replace_source.text
			9 : setINISetting cfgFile "rename" "target" edt_replace_target.text
			
			10 : setINISetting cfgFile "rename" "rename" edt_rename.text --保存表达式
		)
	)
	fn rename names:(filterString edt_names.text ",")
	tags:(filterString edt_tags.text ",")
	basenums:(for i in (filterString edt_basenum.text ",") collect i as integer)
	digs:(for i in (filterString edt_digit.text ",") collect i as integer)
	dirs:(for s in xyz collect filterString s ",")
	thr:spn_threshold.value
	str:edt_rename.text 
	objs:(getCurrentSelection()) =
	undo "Rename Selection" on(
		--兼容性预处理
		if dirs[1] == undefined do dirs[1] = #("","","")
		if dirs[2] == undefined do dirs[2] = #("","","")
		if dirs[3] == undefined do dirs[3] = #("","","")
		str = substituteString str "{N" "{n"
		str = substituteString str "{n}" "{n1}"
		str = substituteString str "{T" "{t"
		str = substituteString str "{t}" "{t1}"
		str = substituteString str "{I" "{i"
		str = substituteString str "{i}" "{i1}"
		str = substituteString str "X}" "x}"
		str = substituteString str "Y}" "y}"
		str = substituteString str "Z}" "z}"
		str = substituteString str "{O}" "{o}"
		
		--处理
		for i = 1 to names.count do str = substituteString str ("{n"+i as string+"}") names[i]
		for i = 1 to tags.count do str = substituteString str ("{t"+i as string+"}") tags[i]
		--命名
		local
-- 		count = for i in basenums collect 0,
		dirs_bool = #(matchPattern str pattern:"*{x}*",matchPattern str pattern:"*{-x}*",matchPattern str pattern:"*{y}*",matchPattern str pattern:"*{-y}*",matchPattern str pattern:"*{z}*",matchPattern str pattern:"*{-z}*"),
		counts = #(),collects = #()
		for o in objs do
		(
			--添加方向
			local o_name = str,pos = o.transform.pos,dir
			if dirs_bool[1] do
			(
				dir = case of
				(
					(pos.x > thr) : dirs[1][1]
					(pos.x < -thr) : dirs[1][2]
					default : dirs[1][3]
				)
				o_name = substituteString o_name "{x}" dir
			)
			if dirs_bool[2] do
			(
				dir = case of
				(
					(pos.x > thr) : dirs[1][2]
					(pos.x < -thr) : dirs[1][1]
					default : dirs[1][3]
				)
				o_name = substituteString o_name "{-x}" dir
			)
			if dirs_bool[3] do
			(
				dir = case of
				(
					(pos.y > thr) : dirs[2][1]
					(pos.y < -thr) : dirs[2][2]
					default : dirs[2][3]
				)
				o_name = substituteString o_name "{y}" dir
			)
			if dirs_bool[4] do
			(
				dir = case of
				(
					(pos.y > thr) : dirs[2][2]
					(pos.y < -thr) : dirs[2][1]
					default : dirs[2][3]
				)
				o_name = substituteString o_name "{-y}" dir
			)
			if dirs_bool[5] do
			(
				dir = case of
				(
					(pos.z > thr) : dirs[3][1]
					(pos.z < -thr) : dirs[3][2]
					default : dirs[3][3]
				)
				o_name = substituteString o_name "{z}" dir
			)
			if dirs_bool[6] do
			(
				dir = case of
				(
					(pos.z > thr) : dirs[3][2]
					(pos.z < -thr) : dirs[3][1]
					default : dirs[3][3]
				)
				o_name = substituteString o_name "{-z}" dir
			)
			
			--添加编号,不同方向的物体不占用,
			local id = if (i = findItem collects o_name) > 0 then counts[i] += 1 else (append counts 0;append collects o_name;0) --try(counts[findItem collects o_name] += 1)catch(append counts 0;append collects o_name;0)
			for i = 1 to basenums.count do o_name = substituteString o_name ("{i"+i as string+"}") (covering_str (basenums[i]+id) d:digs[i])
-- 			print o_name
			
			--添加原名
			o_name = substituteString o_name "{o}" o.name
			
			--应用
			o.name = o_name
		)
	)
	fn GW_DrawNames =
	(
		gw.setTransform (matrix3 1)
		for o in (for i in if selected then getcurrentselection() else objects where not i.isHiddenInVpt collect i) do gw.text o.center o.name color:white
	)
-- 	gw.clearScreen (box2 0 0 200 200)
		
-- 	gw.resetUpdateRect () 
-- 	gw.enlargeUpdateRect (box2 0 0 200 200)
-- 	gw.updateScreen()
	
	on tb selected s e do
	(
		for id in #{1..2} - #{e.TabPageIndex + 1} do for i in controls[id] do i.visible = false
		for i in controls[e.TabPageIndex + 1] do i.visible = true
		rename3Rollout.width += 1; rename3Rollout.width -= 1 --用于刷新dotnet控件重绘
	)
	on ckb_showname_sel changed state do
	(
		selected = state; redrawViews()
	)
	on ckb_showname changed state do
	(
		if state then registerRedrawViewsCallback GW_DrawNames else unregisterRedrawViewsCallback GW_DrawNames; redrawViews()
	)
	on btn_xyz click s e do
	(
		s.text = case s.text of
		(
			"X":"Y"
			"Y":"Z"
			default:"X"
		)
		edt_direction.text = xyz[findItem #("X","Y","Z") s.text]
	)
	on edt_basenum changed str do
	(
		edt_basenum.text = only_num str
	)
	on edt_digit changed str do --entered
	(
		edt_digit.text = only_num str
	)
	on btn_rename pressed do rename()

	on edt_names entered str do save_arguments id:1
	on edt_tags entered str do save_arguments id:2
	on edt_basenum entered str do save_arguments id:3
	on edt_digit entered str do save_arguments id:4
	on edt_direction entered str do save_arguments id:5
	on spn_threshold entered do save_arguments id:6
	on edt_select entered str do save_arguments id:7
	on edt_replace_source entered str do save_arguments id:8
	on edt_replace_target entered str do save_arguments id:9
	on edt_rename entered str do save_arguments id:10
		
	on tip_names pressed do edt_rename.text += "{n}"
	on tip_tags pressed do edt_rename.text += "{t}"
	on tip_basenum pressed do edt_rename.text += "{i}"
	on tip_direction pressed do edt_rename.text += "{x}"
	on tip_rename pressed do edt_rename.text = "{t}_{n}_{i}_{x}"
	on tip_rename_btn pressed do 
	(
		edt_names.text = "nameA,nameB,nameC"
		edt_tags.text = "tagA,tagB,tagC"
		edt_basenum.text = "5,1"
		edt_digit.text = "2,4"
		
		xyz = #("L,R,M","F,B,I","T,D,C")
		btn_xyz.text = "X"
		edt_direction.text = "L,R,M"
		
		spn_threshold.value = 0.001
		edt_rename.text = "{t1}_{t2}_{n1}_{n2}_{n3}_{t3}_{i1}-{i2}.{x}"
	)
	
	on btn_select pressed do
	(
		local mstr = edt_select.text
		clearSelection()
		if keyboard.controlPressed then select(for i in objects where not i.isHiddenInVpt and matchPattern i.name pattern:mstr collect i)
		else select(for i in objects where matchPattern i.name pattern:mstr collect i)
	)
	on btn_replace pressed do (local source = edt_replace_source.text,target = edt_replace_target.text; for i in getCurrentSelection() do i.name = substituteString i.name source target)
		
	on rename3Rollout open do
	(
		tb.itemSize = dotNetObject "System.Drawing.Size" 50 20
		tb.TabPages.add "ReName"
		tb.TabPages.add "ChName"
		tb.SelectTab 1
		tb.SelectTab 0
		unregisterRedrawViewsCallback GW_DrawNames
		load_arguments id:#{1..10}
		(
			fn get_dotnet_color n = (colr = (colorMan.getColor n) * 255; (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
			local
			BackColor = get_dotnet_color #background, --暂时作为全局变量,后续合并进窗口中
			ForeColor = get_dotnet_color #text,
			PanelColor = if colorMan.getColor #button == [0,0,0] then get_dotnet_color #window else get_dotnet_color #button, --高低版本的颜色定义不同,获取不到button色时,获取旧版的window色,获取不到的色彩会是黑色[0,0,0].
			BorderSize = 0,
			BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,
			Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat
			for btn in #(btn_xyz) do (btn.BackColor = BackColor; btn.ForeColor = ForeColor; btn.Flatstyle = Flat; btn.Flatappearance.borderSize = BorderSize)
			btn_xyz.font = dotnetObject "System.Drawing.Font" btn_xyz.font (dotnetclass "System.Drawing.FontStyle").Underline
		)
	)
	on rename3Rollout close do
	(
		unregisterRedrawViewsCallback GW_DrawNames
		save_arguments id:#{1..10}
	)
)

CreateDialog rename3Rollout