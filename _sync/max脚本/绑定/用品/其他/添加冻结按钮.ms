

try(destroydialog addCATool)catch()

fn select2ArrayStr =
(
	ArrayStr = "#("
	for o in selection as array do ArrayStr += ("\"" + o.name + "\", ")
	index = ArrayStr.count
	ArrayStr[index] = "";ArrayStr[index-1] = ")"
-- 	print ArrayStr
	return ArrayStr
)

ca3_1 = "attributes FreezeUI--声明自定义属性
(
	rollout FMBN \"功能\" width:160 height:67
	(
		fn freezeMeshByName bool=
		(
			namearray = "
			
ca3_2 = "
			if bool then for n in namearray do  freeze (getNodeByName n) else for n in namearray do  unfreeze (getNodeByName n) 
		)
		button btn_freeze \"冻结模型\" pos:[16,16] width:56 height:32 toolTip:\"切换显示\"
		button btn_unfreeze \"解冻模型\" pos:[88,16] width:56 height:32 toolTip:\"切换显示\"
		label lbl1 \"\" pos:[32,50] width:98 height:13
		on btn_freeze pressed  do
		(
			freezeMeshByName true
		)
		on btn_unfreeze pressed  do
		(
			freezeMeshByName false
		)
	)
)"

rollout addCATool "添加按钮工具" width:112 height:88
(
	button btn_add3 "添加一键冻结" pos:[8,48] width:96 height:24
	edittext edt_Array "" pos:[8,16] width:64 height:16
	button btn_GetArray "Get" pos:[80,16] width:22 height:16

	on btn_add3 pressed do --一键冻结
	(
		ca3 = (execute (ca3_1 + edt_Array.text + ca3_2))
		mdf = (EmptyModifier ());custAttributes.add mdf ca3 #unique BaseObject:false
		for o in selection as array do if classof o.modifiers[1] != EmptyModifier then addmodifier o mdf else custAttributes.add o.modifiers[1] ca3 #unique BaseObject:false
	)
	on btn_GetArray pressed do --获取数组文本
		edt_Array.text = select2ArrayStr()
)

createdialog addCATool