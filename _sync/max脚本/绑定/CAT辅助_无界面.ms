--CAT辅助1,手指命名
fn ReNameDigit=(--选中手掌
	nameset1 = #("拇指","食指","中指","无名指","小指")--五只手指
	nameset2 = #("拇指","食指","中指","小指")--四只手指

	obj = selection[1]
	nameset = nameset2
	for i = 1 to obj.DigitData.Digits.count do obj.DigitData.Digits[i].name = nameset[i]
)
		
	
--CAT需求:按钮_创建带手臂绑定的层
fn CreateCATLayerAndLinkController =(
	--1创建层,动画模式
	local CATP = getNodeByName "XRK_Rig_"
	local index = CATP.AppendLayer "NewLayer" #absolute
	local CATL = CATP.layers.controller[index]
	CATP.CATMode = 1
	--2绑定控制器
	index+=1
	local set1 = #("XRK_Rig_左臂B11","XRK_Rig_左臂A11")
	local set2 = #("XRK_Rig_右臂B11","XRK_Rig_右臂A11")
	fn setRig sets index= ( --关联层控制器函数
		obj1 = getNodeByName sets[1]
		obj2 = getNodeByName sets[2]
		obj1.transform.controller[2][index].position.controller = obj2.transform.controller[2][index].position.controller
		
		obj1.transform.controller[2][index].rotation.controller = Euler_XYZ ()
		obj2.transform.controller[2][index].rotation.controller = Euler_XYZ ()
		obj1.transform.controller[2][index].rotation.controller = rotation_list ()
		obj2.transform.controller[2][index].rotation.controller = rotation_list ()
		obj2.transform.controller[2][index].rotation.controller.Available.controller = obj1.transform.controller[2][index].rotation.controller.Available.controller = Euler_XYZ ()
		obj2.transform.controller[2][index].rotation.controller.Active = obj1.transform.controller[2][index].rotation.controller.Active = 2
	)
	--执行
	setRig set1 index
	setRig set2 index
	--跳到运动面板
	max motion mode
)