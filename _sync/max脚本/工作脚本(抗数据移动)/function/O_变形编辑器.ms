--如果你看到了这几行文字,说明代码已经被破解,但既然分享了mse文件,这也是意料之中的事.
--这些内容可以用作资源创作和学习参考.唯一的请求是:不要直接通过本工具的代码来盈利.(至少改一改,加入一点自己的奇思妙想.)

try(destroydialog MorpherEditorRollout)catch()
rollout MorpherEditorRollout "变形目标重编辑" width:192 height:184
(
	listbox lbx1 "变形通道列表" pos:[8,8] width:176 height:10
	local modf,chl,names,callbackItem
	fn getMorpher a b =
	(
		try(
			modf = for m in $.modifiers do if IsValidMorpherMod m do exit with m
			chl = #()
			names = for i = 1 to 100 where WM3_MC_HasData modf i collect (append chl i;i as string + ":" + substituteString (WM3_MC_GetName modf i) " " "_")
			lbx1.items = names
		)catch(lbx1.items = #())
		
	)
	fn createTarget index =
	with redraw off(
		state = getCommandPanelTaskMode();setCommandPanelTaskMode #create
		tempobj = copy $
		select tempobj
		
		for i = tempobj.modifiers.count to 1 by -1 do if not IsValidMorpherMod tempobj.modifiers[i] do deletemodifier $ i
		for i = 1 to 100 do 
		try(
			(ctrl = tempobj.modifiers[1][i].controller = Bezier_Float();ctrl.value = 0)
		)catch()
		WM3_MC_SetValue tempobj.modifiers[1] index 100.0
		meshobj = snapshot tempobj name:(WM3_MC_GetName modf index) pos:(tempobj.pos-[tempobj.max.x,0,0])

		WM3_MC_SetValue modf index 100.0
		modf.Autoload_of_targets = 1
		
		WM3_MC_BuildFromNode modf index meshobj
		
		select meshobj;delete tempobj
		setCommandPanelTaskMode state
	)

	on MorpherEditorRollout open do
	(
		getMorpher 0 0
		callbackItem = NodeEventCallback mouseUp:true delay:0 callbackBegin:getMorpher
	)
	on MorpherEditorRollout close do
	(
		callbackItem = undefined
		gc light:true
	)
	on lbx1 doubleClicked sel do
	(
		createTarget chl[sel]
	)
)

createdialog MorpherEditorRollout