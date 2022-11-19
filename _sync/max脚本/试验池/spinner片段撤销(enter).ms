(
	try (destroydialog ::RO_SCALE) catch()
	rollout RO_SCALE "Scale Nodes" width:162 height:176
	(
		spinner spn_scale "Scale: "	   pos:[24, 16] fieldwidth:68 range:[-1E9,1E9,0] type:#worldunits scale:0.01
		button bt_print   "Print Info"	pos:[24,128] width:112 height:32
		button bt_default "Default Scale" pos:[24, 48] width:112 height:32
		button bt_reset   "Reset Scale"   pos:[24, 80] width:112 height:32

		local nodes = #()
		
		fn Hold mAction mString: =
		(
			case mAction of
			(
				#start: if not thehold.holding() do thehold.begin()
				#accept: if thehold.holding() do thehold.accept mString
				#cancel: if thehold.holding() do thehold.cancel()
			)
		)
		
		fn ScaleNodes val =
		(
			for j in nodes do j[1].scale = (j[2]+val) / j[2] * j[3]
		)
		
		fn StoreNodes =
		(
			Hold #start
			nodes = for j in selection collect #(j, j.max-j.min, j.scale)
		)
		
		on spn_scale buttondown do StoreNodes()
		
		on spn_scale changed arg do ScaleNodes arg
		
		on spn_scale entered inSpin inCancel do
		(
			if not inSpin do
			(
				StoreNodes()
				ScaleNodes spn_scale.value
				spn_scale.value = 0.0
				Hold #accept mString:"ScaleNodes"
			)
			if not inCancel then
			(
				spn_scale.value = 0.0
				Hold #accept mString:"ScaleNodes"
			)else(
				Hold #cancel
			)
			nodes = #()
		)
		
		on bt_default pressed do
		(
			Hold #start
			selection.scale = [1,1,1]
			Hold #accept mString:"ScaleNodes"
		)
			
		on bt_reset pressed do
		(
			Hold #start
			resetscale selection
			Hold #accept mString:"ScaleNodes"
		)
		
		on bt_print pressed do
		(
			for j in selection do format "% :
	 size: %
	scale: %

" j.name (j.max-j.min) j.scale
		)
	)
	createdialog RO_SCALE
)