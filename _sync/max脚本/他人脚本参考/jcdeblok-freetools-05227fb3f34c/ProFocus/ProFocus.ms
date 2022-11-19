macroScript ProFocus category:"JDBgraphics"
(
	 
	fn ProFocus_setDepth c depth =
	(

		if classof c == Targetcamera do
		(
				c.mpassEffect.useTargetDistance = off  
				c.mpassEffect.focalDepth = depth
		)

		if classof c == Freecamera do
		(
			if ( c.mpassEffect.useTargetDistance == off ) then
			(
				c.mpassEffect.focalDepth = depth
			) else  
			(
				c.target_distance = depth
			)
		)

		if classof c == Physical do
		(
			c.specify_focus = 1
			c.focus_distance = depth
		)

		if classof c == Physical do
		(
			c.specify_focus = 1
			c.focus_distance = depth
		)

		if classof c == CoronaCam do
		(
			c.overrideFocusDistance = on
			c.dofOverrideFocusDistance = depth	
		)
	)

	tool PFocus2
	(
		on mousePoint click do
		(
			temp = intersectRayScene ( mapScreenToWorldRay mouse.pos)
			c=getActiveCamera()

			if (temp.count!=0 AND c!=undefined) then
			(
				n=temp[1][1].name
				depth = 10000000
				
				for i=1 to temp.count do
				(
					if (	depth > distance temp[i][2].pos c.position AND temp[i][1].isHidden == false ) then
					(
						n=temp[i][1].name
						depth = distance temp[i][2].pos c.position
		 
					) 
				
				)
				ProFocus_setDepth c depth
				print (("focal depth on " +c.name  +" set to: "+depth as string)+" at "+n	)
			) else
			(
				print "No node or camera found"	
			)

		  #stop
		)
		
		on start do 
		(
			print "pick a focus point"
		)
	)
	 
	starttool PFocus2
)
 

