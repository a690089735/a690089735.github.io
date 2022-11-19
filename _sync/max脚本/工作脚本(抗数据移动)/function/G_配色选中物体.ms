try(destroydialog SetColorTool)catch()

rollout SetColorTool "设置颜色" width:176 height:192
(
	fn reColorLayer = (
		for i = 1 to (LayerManager.count-1) do
		(
			layer = LayerManager.getLayer i
			str = layer.name
			if matchPattern str pattern:"*_Mesh*" then layer.wireColor = black
			else if matchPattern str pattern:"*_Ctrl*" then layer.wireColor = yellow
			else layer.wireColor = gray
		)
		(LayerManager.getLayer 0).wireColor = white
	)
	fn Apply_Gradient endColor startColor =
	(
		local level = #()
	  
		for i = 1 to selection.count do
		(
			local node = selection[i]
			local n = 0
			do
			(
				n = n + 1
				node = node.parent
			) while (node != undefined)
			level[i] = n
		)

		local minLevel = level[1]
		local maxLevel = minLevel

		for i = 1 to selection.count do
		(
			if ( minLevel > level[i] ) do minLevel = level[i]
			if ( maxLevel < level[i] ) do maxLevel = level[i]
		)

		local span = maxLevel - minLevel
		if ( span < 1 ) do span = 1

		local colorDiff = endColor - startColor
		local colorDiffDistrib = colorDiff/span
		for i= 1 to selection.count do
		(
			selection[i].wirecolor = startColor + (level[i] - minLevel) * colorDiffDistrib 
		)
		--startColor 	= selection[1].wirecolor
		endColor		= startColor + (maxLevel - minLevel) * colorDiffDistrib
	)
	
	button btn1 "画左" pos:[8,16] width:48 height:24
	button btn2 "画中" pos:[64,16] width:48 height:24
	button btn3 "画右" pos:[120,16] width:48 height:24
	button btn4 "盆骨" pos:[8,64] width:48 height:24
	button btn5 "胸腔" pos:[64,64] width:48 height:24
	button btn6 "头部" pos:[120,64] width:48 height:24
	button btn7 "自动" pos:[120,112] width:48 height:24 toolTip:"自动根据选择物体区分左右"
	button btn9 "层配色" pos:[64,112] width:48 height:24
	colorPicker cp1 "" pos:[8,8] width:48 height:8 enabled:true color:(color 0 249 56)
	colorPicker cp2 "" pos:[64,8] width:48 height:8 color:(color 228 214 153)
	colorPicker cp3 "" pos:[120,8] width:48 height:8 color:(color 15 76 232)
	colorPicker cp4 "" pos:[8,56] width:48 height:8 color:(color 234 228 4)
	colorPicker cp5 "" pos:[64,56] width:48 height:8 color:(color 182 255 249)
	colorPicker cp6 "" pos:[120,56] width:48 height:8 color:(color 188 155 255)
	colorPicker cp7 "" pos:[8,104] width:24 height:8 color:(color 203 21 21)
	colorPicker cp9 "" pos:[67,104] width:12 height:8 color:(color 0 0 0)
	colorPicker cp10 "" pos:[78,104] width:12 height:8 color:(color 255 255 0)
	colorPicker cp11 "" pos:[87,104] width:12 height:8 color:(color 127.5 127.5 127.5)
	colorPicker cp12 "" pos:[96,104] width:12 height:8 color:(color 255 255 255)
	button btn8 "自定" pos:[8,112] width:48 height:24 toolTip:"左击自定1,右击自定2"
	colorPicker cp8 "" pos:[32,104] width:24 height:8 color:(color 255 127 0)
	colorPicker cp_Color1 "" pos:[117,152] width:24 height:8 enabled:true color:(color 122 6 234)
	colorPicker cp_Color2 "" pos:[144,152] width:24 height:8 color:(color 0 188 225)
	button btn15 "渐变色" pos:[120,160] width:48 height:24
	button btn_SelectByColor "按颜色选择" pos:[8,160] width:72 height:24
	colorPicker cp_selectColor "" pos:[8,152] width:104 height:8 color:(color 255 255 255)
	button btn_PickColor "P" pos:[80,160] width:16 height:24 toolTip:"获取当前选择的第一个物体的颜色"
	button btn19 "A" pos:[96,160] width:16 height:24 toolTip:"指定选择物体为当前色块颜色."
	on btn1 pressed do
		for o in selection do o.wirecolor = cp1.color
	on btn2 pressed do
		for o in selection do o.wirecolor = cp2.color
	on btn3 pressed do
		for o in selection do o.wirecolor = cp3.color
	on btn4 pressed do
		for o in selection do o.wirecolor = cp4.color
	on btn5 pressed do
		for o in selection do o.wirecolor = cp5.color
	on btn6 pressed do
		for o in selection do o.wirecolor = cp6.color
	on btn7 pressed do
	(
		sv = 0.001
		for o in selection do 
		case of
		(
			(o.transform.pos.x < -sv) : o.wirecolor = cp1.color --画左
			(o.transform.pos.x > sv) : o.wirecolor = cp3.color --画右
			default : o.wirecolor = cp2.color --画中
		)

	)
	on btn9 pressed do
		reColorLayer()
	on btn8 pressed do
		for o in selection do o.wirecolor = cp7.color
	on btn8 rightclick do
		for o in selection do o.wirecolor = cp8.color
	on btn15 pressed do
		Apply_Gradient cp_color2.color cp_color1.color
	on btn_SelectByColor pressed do
		select(for i in $objects where i.wirecolor == cp_selectColor.color collect i)
	on btn_PickColor pressed do
		try(cp_selectColor.color = selection[1].wirecolor)catch(cp_selectColor.color = white)
	on btn19 pressed do
		selection.wirecolor = cp_selectColor.color
)

createdialog SetColorTool
