macroscript viewportAlign
	category:"# Scripts"
	tooltip:"Viewport Align"
	buttontext:"Viewport Align"
(
	fn getVector =
	(
		local p1, p2 = undefined
		
		if selection.count == 1 then
		(
			local obj = selection[1]
			local modObj = modpanel.getCurrentObject()
			
			-- editable poly | vertex
			if classof modObj == Editable_Poly and subObjectLevel == 1 then
			(
				local lSel = (polyop.getVertSelection modObj) as array
				
				if lSel.count == 2 then
				(
					p1 = polyop.getVert obj lSel[1]
					p2 = polyop.getVert obj lSel[2]
				)
			)
			
			-- editable poly | edge
			if classof modObj == Editable_Poly and subObjectLevel == 2 then
			(
				local lSel = (polyop.getEdgeSelection modObj) as array
				
				if lSel.count == 1 then
				(
					local lVerts = (polyop.getVertsUsingEdge obj lSel[1]) as array
					
					p1 = polyop.getVert obj lVerts[1]
					p2 = polyop.getVert obj lVerts[2]
				)
			)
			
			-- editable mesh | vertex
			if classof modObj == Editable_Mesh and subObjectLevel == 1 then
			(
				local lSel = (getVertSelection obj) as array
				
				if lSel.count == 2 then
				(
					p1 = getVert obj lSel[1]
					p2 = getVert obj lSel[2]
				)
			)
			
			-- editable mesh | edge
			if classof modObj == Editable_Mesh and subObjectLevel == 2 then
			(
				local lSel = (getEdgeSelection obj) as array
				
				if lSel.count == 1 then
				(
					local lVerts = (meshop.getVertsUsingEdge obj lSel[1]) as array
					
					p1 = getVert obj lVerts[1]
					p2 = getVert obj lVerts[2]
				)
			)
			
			-- edit poly modifier | vertex
			if classof modObj == Edit_Poly and subObjectLevel == 1 then
			(
				local lSel = (EditPolyMod.GetSelection modObj #vertex) as array
				
				if lSel.count == 2 then
				(
					p1 = EditPolyMod.GetVertex modObj lSel[1]
					p2 = EditPolyMod.GetVertex modObj lSel[2]
				)
			)
			
			-- edit poly modifier | edge
			if classof modObj == Edit_Poly and subObjectLevel == 2 then
			(
				local lSel = (EditPolyMod.GetSelection modObj #edge) as array
				
				if lSel.count == 1 then
				(
					local n1 = EditPolyMod.GetEdgeVertex modObj lSel[1] 1
					local n2 = EditPolyMod.GetEdgeVertex modObj lSel[1] 2
					
					p1 = EditPolyMod.GetVertex modObj n1
					p2 = EditPolyMod.GetVertex modObj n2
				)
			)
			
			-- edit mesh modifier | vertex
			if classof modObj == Edit_Mesh and subObjectLevel == 1 then
			(
				local lSel = (getVertSelection obj) as array
				
				if lSel.count == 2 then
				(
					p1 = getVert obj lSel[1]
					p2 = getVert obj lSel[2]
				)
			)
			
			-- edit mesh modifier | edge
			if classof modObj == Edit_Mesh and subObjectLevel == 2 then
			(
				local lSel = (getEdgeSelection obj) as array
				
				if lSel.count == 1 then
				(
					local lVerts = (meshop.getVertsUsingEdge obj lSel[1]) as array
					
					p1 = getVert obj lVerts[1]
					p2 = getVert obj lVerts[2]
				)
			)
		)
		
		if p1 == undefined or p2 == undefined
			then return undefined
			else return #(p1, p2)
	)
	
	if selection.count == 1 and subObjectLevel != 0 then
	(
		local viewportTM = viewport.getTM()
		local vectViewport = -(inverse viewportTM).row3 -- z-axis of current viewport
		
		local lVectSpline = getVector()
		if lVectSpline != undefined then
		(
			local p1 = lVectSpline[1]
			local p2 = lVectSpline[2]
			local vectSpline = if p1.x > p2.x then (p1 - p2) else (p2 - p1)
			
			if vectViewport == [0,0,-1] then
			(
				local a_x = vectSpline.x as double
				local a_y = vectSpline.y as double
				local b_x = 1
				local b_y = 0
				
				local nUpper = a_x * b_x + a_y * b_y
				local nLower = sqrt(a_x^2 + a_y^2) * sqrt(b_x^2 + b_y^2)
				local rotSpline = acos (nUpper as double / nLower as double)
				local rotViewport = (quattoeuler (inverse viewportTM).rotationpart).z
				
				local tmRow = viewportTM.row3
				
				local nAngle = if a_x > 0 and a_y > 0 
					then -rotSpline + rotViewport
					else rotSpline + rotViewport
			
				if nAngle < -90 then nAngle +=180
				else if nAngle > 90 then nAngle -=180
				
				if (abs nAngle < 0.0001) then nAngle += 90
				
				local nSteps = 10
				for n = 1 to nSteps do
				( 
					viewport.rotate (quat (nAngle / nSteps) tmRow)
					local nFov = viewport.getfov()
					actionMan.executeAction 0 "310"  -- Tools: Zoom Extents Selected
					local nNewFov = viewport.getfov()
					viewport.zoom (nFov / nNewFov)
					completeredraw()
				)
			)
		)
	)
)