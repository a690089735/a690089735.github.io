try(destroydialog bipaxisRollout)catch()
rollout bipaxisRollout "bipaxis" width:120 height:40
(
	fn GetBips =  --获取Bip根节点(质心)
	(
		Ctrls = (getClassInstances Vertical_Horizontal_Turn)
		COMs = for c in Ctrls collect c.rootnode
		result = #()
		for c in COMs do join result c
		result
	)
	local bips = GetBips()
	
	fn GW_displayBipAxis =
	(
		gw.setTransform (matrix3 1)
		for o in bipaxisRollout.bips where not o.isHiddenInVpt do
		(
			local m = o.transform
			local t = m.translation
			
			local len = (viewport.GetScreenScaleFactor t)*0.075
			
			local dx = [len,0,0] * m
			local dy = [0,len,0] * m
			local dz = [0,0,len] * m
			
			if o.isSelected then color = White else color = Yellow
				
			gw.setColor #line red
			gw.Polyline #(t,dx) false
			gw.text dx "x" color:red
			
			gw.setColor #line green
			gw.Polyline #(t,dy) false
			gw.text dy "y" color:green
			
			gw.setColor #line blue
			gw.Polyline #(t,dz) false
			gw.text dz "z" color:blue
		)
		gw.enlargeUpdateRect #whole
	)
	
	on bipaxisRollout open do
	(
		unregisterRedrawViewsCallback GW_displayBipAxis
		registerRedrawViewsCallback GW_displayBipAxis
		redrawviews()
	)
	on bipaxisRollout close do
	(
		unregisterRedrawViewsCallback GW_displayBipAxis
		redrawviews()
	)
)
 CreateDialog bipaxisRollout