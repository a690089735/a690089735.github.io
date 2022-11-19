	rollout FMBN "功能" width:160 height:67
	(
		fn freezeMeshByName bool=
		(
			namearray = #("adou_body_RenderMesh",
			"adou_caomaohair_Hmesh",
			"adou_caomaoshengzi_Hmesh",
			"adou_caomao_Hmesh",
			"adou_caomao_LowMesh",
			"adou_caomaohair_Lowmesh",
			"adou_brow_Hmesh",
			"adou_brow_LowMesh",
			"adou_teeth_Dw_mesh",
			"adou_tongue_mesh",
			"adou_teeth_Up_mesh",
			"adou_eyeball_L_O_mesh",
			"adou_eyeball_L_I_mesh",
			"adou_eyeball_R_O_mesh",
			"adou_eyeball_R_I_mesh",
			"adou_bengdai_Hmesh",
			"adou_trousers_Hmesh",
			"adou_belt_Hmesh",
			"adou_bottom_L_Hmesh",
			"adou_shoes_L_Hmesh",
			"adou_shoe_R_Hmesh",
			"adou_bottom_R_Hmesh",
			"adou_sock_Hmesh",
			"adou_belt_LowMesh",
			"adou_trousers_Lowmesh",
			"adou_cloth_Hmesh",
			"adou_cloth_Lowmesh",
			"adou_hat2_rope_HMesh",
			"adou_hat2_ropeRib_HMesh",
			"adou_hat2_ropeRib_Lowmesh",
			"adou_douli_Hmesh",
			"adou_douli_LowMesh",
			"adou_rope_LowMesh")
			
			if bool then for n in namearray do  freeze (getNodeByName n) else for n in namearray do  unfreeze (getNodeByName n) 
		)

		button btn_freeze "冻结模型" pos:[16,16] width:56 height:32 toolTip:"切换显示,右键全部隐藏"
		button btn_unfreeze "解冻模型" pos:[88,16] width:56 height:32 toolTip:"切换显示,右键全部隐藏"
		label lbl1 "" pos:[32,50] width:98 height:13
		on btn_freeze pressed  do
		(
			freezeMeshByName true
		)
		on btn_unfreeze pressed  do
		(
			freezeMeshByName false
		)
	)

	createdialog FMBN