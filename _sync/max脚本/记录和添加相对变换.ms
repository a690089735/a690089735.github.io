try(DestroyDialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:112 height:104
(
	spinner 'spn1' "参考帧" pos:[8,8] width:102 height:16 range:[-99999,99999,0] type:#integer scale:1 align:#left
	spinner 'spn2' "变形帧" pos:[8,27] width:102 height:16 range:[-99999,99999,100] type:#integer scale:1 align:#left
	button 'btn1' "记录相对变换" pos:[8,48] width:96 height:24 align:#left
	button 'btn2' "添加相对变换" pos:[8,72] width:96 height:24 align:#left
	
	local rel_trans_list = #()
	
	on btn1 pressed  do
	(
		local sel = getCurrentSelection()
		rel_trans_list = for i in sel collect (at time spn2.value i.transform) * inverse (at time spn1.value i.transform)
	)
	on btn2 pressed  do
	undo "add RelTrans" on(
		local
		sel = getCurrentSelection(),
		new_rel_trans_list = for i = 1 to sel.count collect rel_trans_list[i] * sel[i].transform
		for i = 1 to sel.count do sel[i].transform = new_rel_trans_list[i]
		--注意,以上代码会被父子关系影响,目前未加适配
	)
)
CreateDialog unnamedRollout