	
	label 'lbl_names' "&Names" pos:[8,32] width:32 height:16 align:#left
	edittext 'edt_names' "" pos:[48,32] width:216 height:16 align:#left
	label 'lbl_tags' "&Tags" pos:[8,52] width:32 height:16 align:#left
	edittext 'edt_tags' "" pos:[48,52] width:216 height:16 align:#left
	label 'lbl_basenum' "&Idxs" pos:[8,72] width:32 height:16 toolTip:"tes" align:#left
	edittext 'edt_basenum' "" pos:[48,72] width:104 height:16 align:#left
	label 'lbl_digit' "Dig" pos:[168,72] width:16 height:16 align:#left
	edittext 'edt_digit' "" pos:[184,72] width:80 height:16 align:#left
	label 'lbl_direction' "Dirs" pos:[8,92] width:32 height:16 align:#left
	edittext 'edt_direction' "" pos:[48,92] width:104 height:16 align:#left
	label 'lbl_threshold' "Thr" pos:[168,92] width:16 height:16 align:#left
	spinner 'spn_threshold' "" pos:[184,92] width:82 height:16 range:[0.001,1,0.001] type:#worldunits scale:0.001 toolTip:"用于判断方位的精度,超过这个距离则为一侧."  align:#left
	edittext 'edt_rename' "" pos:[8,112] width:248 height:16 align:#left text:"{t1}_{t2}_{n1}_{n2}_{n3}_{i1}-{i2}.{x}"
	button 'btn_load' ".." pos:[256,112] width:12 height:16 align:#left
	button 'btn_rename' "ReName" pos:[184,132] width:72 height:22 align:#left
	
	button 'tip_names' "?" pos:[40,32] width:12 height:16 toolTip:"按照如下格式填写名称:名称1,名称2,名称3..." align:#left
	button 'tip_tags' "?" pos:[40,52] width:12 height:16 toolTip:"按照如下格式写入标记:标记1,标记2,标记3..." align:#left
	button 'tip_basenum' "?" pos:[40,72] width:12 height:16 toolTip:"按照如下格式写入名称:起始序号1,起始序号2,起始序号3..." align:#left
	button 'tip_direction' "?" pos:[40,92] width:12 height:16 toolTip:"按如下格式填写方向字符:左侧,右侧,中间" align:#left
	button 'tip_rename' "?" pos:[256,133] width:12 height:20 toolTip:"名称占位符:{n},多个时可用{n1},{n2}区分\n标记占位符:{t},多个时可用{t1},{t2}区分\n序号占位符:{i},多个时可用{i1},{i2}区分\n方向占位符{x|y|z|-x|-y|-z},用于自动识别方向" align:#left
	
	local
	num_list = #("0","1","2","3","4","5","6","7","8","9",",")
	
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
	
	fn rename names:(filterString edt_names.text ",")
	tags:(filterString edt_tags.text ",")
	basenums:(for i in (filterString edt_basenum.text ",") collect i as integer)
	digs:(for i in (filterString edt_digit.text ",") collect i as integer)
	dirs:(filterString edt_direction.text ",")
	thr:spn_threshold.value
	str:edt_rename.text 
	objs:(getCurrentSelection()) =
	(
		--兼容性预处理
		if dirs[1] == undefined do dirs[1] = "L"
		if dirs[2] == undefined do dirs[2] = "R"
		if dirs[3] == undefined do dirs[3] = "M"
		str = substituteString str "{N" "{n"
		str = substituteString str "{n}" "{n1}"
		str = substituteString str "{T" "{t"
		str = substituteString str "{t}" "{t1}"
		str = substituteString str "{I" "{i"
		str = substituteString str "{i}" "{i1}"
		str = substituteString str "X}" "x}"
		str = substituteString str "Y}" "y}"
		str = substituteString str "Z}" "z}"
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
					(pos.x > thr) : dirs[1]
					(pos.x < -thr) : dirs[2]
					default : dirs[3]
				)
				o_name = substituteString o_name "{x}" dir
			)
			if dirs_bool[2] do
			(
				dir = case of
				(
					(pos.x > thr) : dirs[2]
					(pos.x < -thr) : dirs[1]
					default : dirs[3]
				)
				o_name = substituteString o_name "{-x}" dir
			)
			if dirs_bool[3] do
			(
				dir = case of
				(
					(pos.y > thr) : dirs[1]
					(pos.y < -thr) : dirs[2]
					default : dirs[3]
				)
				o_name = substituteString o_name "{y}" dir
			)
			if dirs_bool[4] do
			(
				dir = case of
				(
					(pos.y > thr) : dirs[2]
					(pos.y < -thr) : dirs[1]
					default : dirs[3]
				)
				o_name = substituteString o_name "{-y}" dir
			)
			if dirs_bool[5] do
			(
				dir = case of
				(
					(pos.z > thr) : dirs[1]
					(pos.z < -thr) : dirs[2]
					default : dirs[3]
				)
				o_name = substituteString o_name "{z}" dir
			)
			if dirs_bool[6] do
			(
				dir = case of
				(
					(pos.z > thr) : dirs[2]
					(pos.z < -thr) : dirs[1]
					default : dirs[3]
				)
				o_name = substituteString o_name "{-z}" dir
			)
			
			--添加编号,不同方向的物体不占用,
			local id = if (i = findItem collects o_name) > 0 then counts[i] += 1 else (append counts 0;append collects o_name;0) --try(counts[findItem collects o_name] += 1)catch(append counts 0;append collects o_name;0)
			for i = 1 to basenums.count do o_name = substituteString o_name ("{i"+i as string+"}") (covering_str (basenums[i]+id) d:digs[i])
-- 			print o_name
		)
	)
	
	on edt_basenum changed str do
	(
		edt_basenum.text = only_num str
	)
	on edt_digit changed str do --entered
	(
		edt_digit.text = only_num str
	)
	on btn_rename pressed do
		rename()

	on edt_names entered do save_arguments id:1
	on edt_tags entered do save_arguments id:2
	on edt_basenum entered do save_arguments id:3
	on edt_digit entered do save_arguments id:4
	on edt_direction entered do save_arguments id:5
	on spn_threshold entered do save_arguments id:6
	on edt_rename entered do save_arguments id:10
	