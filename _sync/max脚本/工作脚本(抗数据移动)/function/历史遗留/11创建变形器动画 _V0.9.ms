try(destroydialog CMRollout)catch()
rollout CMRollout "创建变形器" width:160 height:104
(
	button btn33 "生成变形器动画" pos:[8,56] width:144 height:32
	label lbl2 "先设置好帧数位,然后点击生成" pos:[8,16] width:144 height:32
	on btn33 pressed do
	(
	--记录原模型
	sobj = selection[1]
	
	--逐帧复制模型 命名 记录在变量objs
	objs = #()
	for i = animationrange.start to animationrange.end do 
	(	slidertime = i
		j = instance sobj
		ConverttoPoly j
		j.name = i as string
		append objs j)
	
	--添加变形器
	addModifier sobj (Morpher()) 
	
	--创建通道,并添加所有变形
	WM3_MC_BuildFromNode sobj.morpher 1 objs[1]
	for i = 2 to objs.count do WM3_AddProgressiveMorphNode sobj.morpher 1 objs[i]
	
	--设置变形张力
	WM3_SetProgressiveMorphTension sobj.morpher 1 0.0
	
	--获取所有帧数值
	local valList = #()
	for i in objs do append valList (WM3_GetProgressiveMorphWeight sobj.Morpher 1 i)
	
	--	--设置浮点脚本控制器 输入脚本
	--	for i = 1 to objs.count do
	--	(
	--	j = i - 1 
	--	sobj.morpher[i].controller =  float_script()
	--	sobj.morpher[i].controller.script = "if F == " + j as string + " then 100 else 0"
	--	)
	
	--设置帧
	for i = 1 to valList.count do 
	(
		slidertime = i-1
		animate on(WM3_MC_SetValue sobj.Morpher 1 valList[i])
	)
	
	--删除变形模型
	Delete objs
		)
)
createdialog CMRollout