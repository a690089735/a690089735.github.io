test = 
attributes HiderCA
(
	parameters HiderCA rollout:HiderRL
	(
		statetab type:#boolTab tabSizeVariable:true animatable:false invisibleInTV:true
		hide1 type:#intTab tabSizeVariable:true animatable:false invisibleInTV:true --程序生成
		nodes1 type:#nodeTab tabSizeVariable:true animatable:false invisibleInTV:true --程序生成
	)
	rollout HiderRL "部分隐藏"
	(
		fn ChangeHide =
		(
			owner = custattributes.getowner this
			print owner
			nd = (refs.dependentnodes owner)[1]
			
			ownerS =exprForMAXObject(owner)
			hidefaces = #()
			hidenodes = #()
			unhidenodes = #()
			for i = 1 to HiderRL.controls.count do
			if statetab[i] then
			(
				hidefaces += execute(ownerS + ".hide" + i as string)
				hidenodes += execute(ownerS + ".nodes" + i as string)
			)else unhidenodes += execute(ownerS + ".nodes" + i as string)
			meshop.setHiddenFaces nd.baseobject (hidefaces as bitarray) --没指定的会被显示
			update nd
			unhide unhidenodes
			hide hidenodes
		)
		on HiderRL open do
		(
			i = 0
			for c in HiderRL.controls do 
			(
				i += 1
				c.checked = statetab[i]
			)
		)
		checkbutton ckb1 "部分名" width:52 height:21 offset:[1,5] align:#left --程序生成
		on ckb1 changed state do (statetab[finditem HiderRL.controls ckb1] = state;ChangeHide()) --程序生成
	)
)
print (custAttributes.getPBlockDefs test)
sels = getcurrentselection()
if sels.count == 1 then
(
	local
		obj = sels[1],
		holder = for m in obj.modifiers where classof m == EmptyModifier do exit with m
	if classof holder != EmptyModifier do
	(
		holder = EmptyModifier()
		addmodifier obj holder
	)
	clearselection()
	custAttributes.add holder test --baseobject:false
	holder.statetab = #(false)
	holder.hide1 = #(1,2,3,4) --程序生成
	holder.nodes1 = #($Sphere001, $Sphere002) --程序生成
	select obj
)else messagebox "必需 1 个物体(基本体为 Editable_mesh)."