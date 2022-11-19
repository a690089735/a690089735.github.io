try(destroydialog WTPRollout)catch()
rollout WTPRollout "WeightToolPro" width:172 height:296
(
	GroupBox grp_sel "Select" pos:[0,0] width:172 height:48
	button btn_Shrink "Shrink" pos:[8,16] width:36 height:24
	button btn_Grow "Grow" pos:[48,16] width:36 height:24
	button btn_Ring "Ring" pos:[88,16] width:36 height:24
	button btn_Loop "Loop" pos:[128,16] width:36 height:24
	
	GroupBox grp_Weight "Weight" pos:[0,48] width:172 height:136
	edittext edt_WeihtVal "" pos:[4,64] width:52 height:17 --只有17和以下,才能是单行
	listbox lbx_WeightVal "" pos:[8,83] width:48 height:7 items:#("0.00", "0.10", "0.25", "0.50", "0.75", "0.90", "1.00")
	/* 权重值命令盒 */
	local strList = #(".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
	on edt_WeihtVal entered text do --确认输入
	(
		if matchPattern text pattern:"*.*.*" then 
		(
			str = edt_WeihtVal.text =  "0.00"
			lbx_WeightVal.selection = finditem (for i in lbx_WeightVal.items collect i as float) (str as float)
		)
		else
		(
			
			fstr = filterString ((((text as float * 100 + 0.5) as integer) / 100.0) as string) "." --预先四舍五入,只保留两位
			
			print fstr[2]
		)
	)
	on edt_WeihtVal changed text do --限制数字输入
	(
		str = ""
		for i = 1 to text.count where finditem strList text[i] > 0 do str+=text[i]
		edt_WeihtVal.text = str
		lbx_WeightVal.selection = finditem (for i in lbx_WeightVal.items collect i as float) (str as float)
	)
	on lbx_WeightVal selected sel do
	(
		edt_WeihtVal.text = lbx_WeightVal.selected
	)
	on lbx_WeightVal doubleClicked sel do --设置权重值
	(
	
	)
)
createdialog WTPRollout