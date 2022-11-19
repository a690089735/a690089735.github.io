-- HandMaker.ms
-- Parametric Hand MAXScript
-- By Michele Bousquet, Technical Writer at Discreet
-- michele.bousquet@discreet.com
-- v1.0 11/30/2003

-- I wrote this script as an exercise in scripting a parametric object. This script is not officially
-- supported by Discreet, and any support for it will be provided by me at my discretion.
-- Also I am not responsible for anything bad that happens to you, your computer, your models, or your
-- 3ds max program as a result of using this script. However, I take full responsibility for all the good things.

-- TO RUN THIS SCRIPT:
-- Put this script in your 3dsmax/plugins folder before starting 3ds max.
-- Create panel > Geometry > Body Parts, click Hand, drag up and right in the Top viewport to create the hand.
-- Click Smooth to add a MeshSmooth modifier and see what it looks like smoothed.
-- Work with parameters to set number of fingers, etc. When you're ready to edit the hand at the vertex level,
-- click Collapse to Editable Poly.

-- This script uses the following techniques repeatedly:
-- 		Creating vertices at specific points in space
-- 		Creating faces with those vertices
--		Trigonometric functions to angle the thumb and splay the fingers
-- Every vertex created has a number associated with it. The vertices were placed in a specific pattern
-- so I could run loops on them to create the faces. Lots of scribbling on paper was involved, plus
-- a re-read of my high school trigonometry book.
-- 
-- The accompanying document, HandMaker.doc, gives more details on vertex numbering and some
-- of the processes I used. 

-- There are a lot of comments in this script. If you're looking for a reference on making a parametric
-- object, I hope this helps you.


plugin simpleObject HandMaker
name:"Hand" 
classID:#(0x77b10bdb, 0x1ab51bb7)
category:"Body Parts" 

(   
	parameters main rollout:params 
	( 
		hand_height type:#float ui:hand_height default:0 
		hand_length type:#float ui:hand_length default:0 
		hand_width type:#float ui:hand_width default:0 
		palm_ratio type:#float ui:palm_ratio default:50 
		palm_segs type:#float ui:palm_segs default:3 
		finger_num type:#integer ui:finger_num default:4 
		finger_joints type:#integer ui:finger_joints default:3 
		finger_taper type:#float ui:finger_taper default:30 
		finger_endlength type:#float ui:finger_endlength default:80 
		finger_splay type:#float ui:finger_splay default:12
		thumb_span_start type:#integer ui:thumb_span_start default:2
		thumb_span_end type:#integer ui:thumb_span_end default:2
		thumb_angle type:#float ui:thumb_angle default:50
		thumb_length type:#float ui:thumb_length default:80
		cbx_thumb type:#boolean ui:cbx_thumb default:true
		cbx_wrist type:#boolean ui:cbx_wrist default:true
		wrist_taper type:#float ui:wrist_taper default:60 
		smooth_iterations type:#integer ui:smooth_iterations default:1
		cbx_isoline type:#boolean ui:cbx_isoline default:true
		cbx_221 type:#boolean ui:cbx_221 default:true
	) 

	rollout params "Parameters" 
	( 
		local a, b, i, j, k, p, q, r, s, t, pS, nN, fJ, fI, fT, tV
		global x, y, z
		global flip=false
		global vert_array = #()
		global face_array = #()
		global finger_array = #()
		global edge_array = #()
		global smoothMod = MeshSmooth Iterations:1
		spinner hand_height "Height " type:#float range:[-1000,2000,0] fieldwidth:60
		spinner hand_length "Length " type:#float range:[-1000,2000,0] fieldwidth:60
		spinner hand_width "Width " type:#float range:[-1000,2000,0] fieldwidth:60

		group "Wrist"
		(
  			checkbox cbx_wrist "Wrist Cap" checked:true
			spinner wrist_taper "Wrist Taper %" type:#float range:[0,100,60] fieldwidth:35
		)
		group "Palm"
 		(
			spinner palm_ratio "Palm/Finger Ratio %" type:#float range:[1,99,50] fieldwidth:35
			spinner palm_segs "Palm Segments " type:#integer range:[3,15,3] fieldwidth:35
 		)
 
		group "Fingers"
 		(
			spinner finger_num "Number of Fingers " type:#integer range:[1,10,4] fieldwidth:35
 			spinner finger_joints "Number of Joints " type:#integer range:[1,8,3] fieldwidth:35
			checkbox cbx_221 "2-2-1 Joint Ratios" type:#boolean checked:true 
 			spinner finger_taper "Finger Taper %" type:#float range:[0,100,30] fieldwidth:35
 			spinner finger_endlength "End Fingers %" type:#float range:[30,100,80] fieldwidth:35
			spinner finger_splay "Finger Splay " type:#float range:[0,60,12] fieldwidth:35
		)

		group "Thumb"
 		(
 			checkbox cbx_thumb "Thumb" checked:true
  			spinner thumb_span_start "Span from Palm Seg " type:#integer range:[1,15,2] fieldwidth:20
 			spinner thumb_span_end "To " type:#integer range:[1,15,2] fieldwidth:20
 			spinner thumb_angle "Angle " type:#float range:[10,85,30] fieldwidth:35
 			spinner thumb_length "Length %" type:#float range:[1,100,80] fieldwidth:35
		)

		group "Smoothing"
		(
			button smooth_button "Smooth"
			spinner smooth_iterations "Iterations " type:#integer range:[0,3,1] enabled:false
			checkbox cbx_isoline "Isoline Display" checked:true enabled:false
		)
		
		group "Finishing"
		(
			button collapse_button "Collapse to Editable Poly" enabled:false
			radiobuttons mod_action "Collapse Options" labels:#("Mesh Only","Mesh + MeshSmooth") enabled:false
			checkbox cbx_onstack "Leave MS Mod on Stack" checked:true enabled:false
		)

		-- Deletes the MeshSmooth modifier, collapses the mesh, and reapplies the modifier.
		on collapse_button pressed do
		(
			if mod_action.state == 1 then deletemodifier $ 1
			convertToPoly $
			collapse $
			if mod_action.state == 1 and cbx_onstack.checked == true then 
			(
				modpanel.addmodtoselection smoothMod
				modpanel.setcurrentobject $
				showendresult = true
			)
		)	
		
		-- Enables collapse options
		on mod_action changed state do
		(
			if mod_action.state == 1 then cbx_onstack.enabled = true
			else cbx_onstack.enabled = false
		)

		-- Goes to Modify panel, applies MeshSmooth, enables smoothing and finishing options
		on smooth_button pressed do
		(
			-- Apply MeshSmooth modifier
			max modify mode
			modpanel.addmodtoselection smoothMod
			modpanel.setcurrentobject $
			showendresult = true
			-- Enable options
			smooth_button.enabled = false
			smooth_iterations.enabled = true
			cbx_isoline.enabled = true
			collapse_button.enabled = true
			mod_action.enabled = true
			cbx_onstack.enabled = true
		)	
		
		-- Sets the MeshSmooth iterations to the value on the rollout.
		on smooth_iterations changed state do
		(
			smoothMod.iterations = smooth_iterations.value
		)
		
		-- Turns the thumb options on and off.
  		on cbx_thumb changed state do 
		(
			thumb_span_start.enabled = cbx_thumb.checked
			thumb_span_end.enabled = cbx_thumb.checked
			thumb_angle.enabled = cbx_thumb.checked
			thumb_length.enabled = cbx_thumb.checked
		)

		-- Turns Isoline Display on and off.
  		on cbx_isoline changed state do 
		(
			smoothMod.isolinedisplay = cbx_isoline.checked
		)
	) 

	-- BUILD FIRST PALM SIDE VERTICES 
	fn buildSideVerts =
	(
		x = hand_length * palm_ratio / 100 -- width of palm part of hand
		y = 0
		z = hand_height
		psF = x / palm_segs  -- Length of each palm segment

		-- PUT VERTICES IN ARRAY
		-- Make verts across top at hand width (y=0) and max height (z).

		-- Create first vert with wrist taper in mind. 
		-- wT = (Width of palm / finger nums = Width of palm segment)
		-- Then multiply by wrist taper amount to get the taper distance.
		wT =  (hand_width / finger_num) * (wrist_taper / 60) -- Multiplier of 60 is arbitrary for nice taper.
		-- Add taper distance to y (width) to place the vertex at the wrist.
		append vert_array [0,y+wT,z]
		-- Make the remaining vertices up the non-thumb side of the hand 
  		for j = 1 to palm_segs do append vert_array [j*psF,y,z] 
		-- Make corresponding verts across bottom, where height (z) = 0.
		append vert_array [0,y+wT,0]
		for j = 1 to palm_segs do append vert_array [j*psF,y,0]
	)
	
	-- SET FACES ON SIDES OF PALM
	fn buildSideFaces rN flip =
	(

		-- rN = 0 if first side, finger_num if far side
		-- eN = number of first vertex on side in question
		eN = (rN * ((palm_segs + 1) * 2)) + 1

		-- Set whether to leave open faces for thumb creation
		-- If flip is true, it is creating faces on the thumb side of the hand 
		thumbSide = flip
		doThumb = false
		if cbx_thumb and thumbSide then doThumb = true
		
		for j = 1 to palm_segs do 
		(
			-- Check to see if we should leave the space open for the thumb
			-- If not, create the faces
			if ((doThumb == false) or (j < thumb_span_start) or (j > thumb_span_end)) then
			(
				v1 = eN + j - 1
				v2 = eN + j
				v3 = eN + palm_segs + j
				v4 = eN + palm_segs + j + 1
				-- Vertices must be listed counter-clockwise to have the face normals pointing
				-- in the appropriate direction.
				-- flip indicates the order in which the vertices are listed.
				if flip then append face_array [v1,v2,v4] else append face_array [v4,v2,v1]
				if flip then append face_array [v4,v3,v1] else append face_array [v1,v3,v4]
			)
		)
	)


	-- SET VERTS AND FACES FOR TOP AND BOTTOM OF PALM
	fn buildMid =
	(
		x = hand_length * palm_ratio / 100 -- width of palm part of hand
		y = hand_width
		z = hand_height
		pS = palm_segs -- Put variables in shorter variables, less typing to do
		nN = finger_num
		psF = x/pS  -- Divide length (x) by palm segments (pS) to get incremental vertex row fraction amount (psF).
		nnF = y/nN  -- Divide width (y) by number of fingers (nN) to get incremental column row fraction amount (nnF).

		-- SPLAY CALCULATIONS
		-- When creating the splay, the calculation is treated differently depending on whether
		-- the number of fingers is odd or even.
		-- When the number of fingers is odd, the center finger does not splay, ie. the vertices that
		-- define its base are at the same x value.
		-- When the number is even, the vertex between the two center fingers is at the peak.
		-- The following figures out whether there's an even or odd number of fingers.
		even = false
		if (mod finger_num 2) == 0 then even = true -- mod divides number of fingers by 2 and returns the remainder of the division.

		-- These values assist in calculating the amount by which vertices must be offset to create the splay.
		trueHalfNum = finger_num * 0.5  -- Half the number of fingers, put in a float value
		halfNum = ceil trueHalfNum -- Rounded to highest integer.
		
		 
		extraSplay = 0  -- -- Amount to add to x (length) to create splay. Calculated for each finger.
		extraWristTaper = 0 -- Amount to add to y (width) for wrist taper.
		wtFactor = nnF * wrist_taper / 60 	-- Wrist taper factor = Width of one finger segment * wrist taper amount. 
											-- Arbitrarily divided by 60 to make a nice taper.
	

		-- Make verts: for 1 to number of fingers
		for k = 1 to nN do 
		(
			-- Make verts across top (height = z)
			-- Incrementally subtract or add to y (hand width) to make vertices at wrist taper
			extraWristTaper = wtFactor * (trueHalfNum - k) / trueHalfNum
			append vert_array [0,(k*nnF)+extraWristTaper,z]
			for j = 1 to (palm_segs - 1) do append vert_array [j*psF,k*nnF,z]

			-- Incrementally adds or subtracts from the x (hand length) to make the vertices splay	
			addExtra = 0
			if k < halfNum then addExtra = (sin (finger_splay/k)) * psF
			if k > halfNum and k < nN then addExtra = - (sin (finger_splay/(nN - k + 1))) * psF
			-- Special cases for halfway point of odd and even
			if even then
			(
				if k == halfNum then addExtra = ((sin (finger_splay/k)) * psF) / 2
  				if k == (halfNum + 1) then addExtra = -(((sin (finger_splay/k)) * psF) / 2)
			)
			if not even and k == halfNum then addExtra = 0 	-- If odd number of fingers and have reached 
															-- the halfway point, do not increment.
			extraSplay = extraSplay + addExtra
			if k == nN then extraSplay = 0 -- Special case of last vert, x should be at original value.
			append vert_array [(x + extraSplay),k*nnF,z]

			-- Make verts across bottom (height = 0)
			append vert_array [0,(k*nnF)+extraWristTaper,0]
			for j = 1 to (palm_segs - 1) do append vert_array [j*psF,k*nnF,0]
			append vert_array [(x + extraSplay),k*nnF,0]
		)

		-- Create faces on top and bottom of palm
		-- k = vertex increment (number of vertices in each row based on palm segments pS)
		-- For example, if Palm Segments (pS) is 3, each row of palm has 8 vertices (3 + 1) * 2
		-- nvN = next base vertex number
		nvN = 1
		pV = pS + 1
		k = pV * 2
		
		-- For i to number of fingers do
		for i = 1 to nN do 
		(
			-- Create pairs of faces on ends (finger faces)
			-- And append the face numbers to the finger array for later extrusion
			append face_array [nvN+pS+pV+k,nvN+pS+k,nvN+pS]
			append finger_array face_array.count
			append face_array [nvN+pS,nvN+pS+pV,nvN+pS+pV+k]
			append finger_array face_array.count

			-- Wrist faces - create only if Wrist checked
			if cbx_wrist do
			(
				append face_array [nvN+pV+k,nvN+pV,nvN] 
				append face_array [nvN,nvN+k,nvN+pV+k] 
			)
			-- Create pairs of faces across top
			for j = 0 to (pS-1) do 
			(
				append face_array [nvN+k+j+1,nvN+k+j,nvN+j] 
 				append face_array [nvN+j,nvN+j+1,nvN+k+j+1] 
			)
			-- Create pairs of faces across bottom
			-- increment nvN (next vertex number) to get to bottom of row
			nvN = nvN + pS + 1

			for j = 0 to (pS-1) do 
			(
				append face_array [nvN+j,nvN+k+j,nvN+k+j+1]
				append face_array [nvN+k+j+1,nvN+j+1,nvN+j] 
			)
			-- Increment next starting vertex number
			nvN = nvN + pV
		)
	)
	
	-- EXTRUDE FINGERS based on face numbers stored in finger_array
	fn extrudeFingers =
	(
		-- Check if 2-2-1 Joint Ratios is selected, and set fI variable accordingly.
		-- Length of finger section is hand_length * (100 - palm_ratio) / 100
		-- If 2-2-1 is not selected, then fI is set to finger length / finger_joints.
		-- If 2-2-1 is selected, fI is finger length / (finger_joints + 2)
		-- Then fI will be 1 length of a 2-2-1 ratio.
		if cbx_221 == false then fI = (hand_length * (100 - palm_ratio) / 100) / finger_joints
		if cbx_221 == true then fI = (hand_length * (100 - palm_ratio) / 100) / (finger_joints + 2)
		flFactor = 1
		
  		endNum = finger_array.count / 2 -- Determines how many times the loop should be run.
										-- Should be same as number of fingers.

		-- Extrude to next to last joint. Last joint is done separately later so taper can be applied.
		for j = 1 to (finger_joints - 1) do
		(
			-- Even after the faces are extruded, the fingertip face number is the same, so we use the same values 
			-- over and over again for each finger.
			for i = 1 to endNum do
			(
				-- Extrude pairs of triangular faces
				face1 = finger_array[(i * 2) - 1]
				face2 = finger_array[i * 2]
				-- If extruding first or last finger (end fingers), use End Fingers % to reduce extrusion length
				-- flFactor = multiplier for extrusion length
				if i == 1 or i == endNum then flFactor = finger_endlength / 100
				else flFactor = 1
				-- If extruding 1st or 2nd joint and using 2-2-1, multiply fI by 2 to extrude a 2-joint
				if cbx_221 == true and ((j == 1) or (j == 2)) then extrudeFace mesh #(face1,face2) (fI * 2 * flFactor) 100 dir:#common
				else extrudeFace mesh #(face1,face2) (fI * flFactor) 100 dir:#common
			)
		)
		-- Apply taper to last joint only
		-- First, a little calculation to help control tapering when the height is low,
		-- as in when the hand is being created and height is close to 0.
		minTipSize = hand_width / finger_num    -- The minimum width the tip of a finger would have to be
												-- in order to accept the taper in full force.
		ftFactor = (hand_height / minTipSize) * finger_taper	-- if hand_height is less than minTipSize,
																-- this lowers the ftFactor so there is less tapering.
		fT = 100 - ftFactor
		for i = 1 to endNum do
		(
			face1 = finger_array[(i * 2) - 1]
			face2 = finger_array[i * 2]
			-- Extrude by the fI finger segment amount calculated earlier.
			extrudeFace mesh #(face1,face2) fI fT dir:#common
		)		
	)
	
	-- BUILD THE THUMB
	fn buildThumb hand_length hand_height hand_width =
	(
		-- A little something to keep the thumb from looking completely mangled while 
		-- the user is dragging in the viewport to create the hand.
--		fT = finger_taper
--		if hand_height == 0 then fT = 100
		
		-- CREATE THUMB VERTICES

		-- Create first set of verts near the palm.
		-- Get the starting x position based on thumb_span_start
		-- x = width of palm part of hand
  		x = hand_length * palm_ratio / 100
		psW = x / palm_segs 						-- width of one palm segment
		i = psW * (thumb_span_start - 1)

		-- diff = number of segments in thumb
		diff = thumb_span_end - thumb_span_start + 1

		-- tV = number of first thumb vertex (last palm vertex + 1)
		tV = vert_array.count + 1
		-- Create thumb verts based on trig and length of outside thumb seg
		-- Do all but last joint.
		for q = 1 to (finger_joints - 1) do
		(
			-- fI = lengh of long end of one segment, incremented within next loop
			fI = ((hand_length * ((100 - palm_ratio)/100)) * (thumb_length / 100)) / finger_joints
			for a = 0 to diff do
			(
				j = q * fI * cos thumb_angle
				k = q * fI * sin thumb_angle
				u = j + i + (psW * a)
				append vert_array [u,y+k,z]
		 		append vert_array [u,y+k,0]
				fI = fI - ((psW  * (cos thumb_angle) / finger_joints))
			)
		)

		-- Create thumb tip verts (last joint) with taper factor. 10 is arbitrary to make it work well.
		angleFactor = (finger_taper / 100) * 10
		fI = ((hand_length * ((100 - palm_ratio)/100)) * (thumb_length / 100)) / finger_joints

		for a = 0 to diff do
		(
			extraAngle = 0
			-- If a vert at the outside of the thumb, taper it.
			if a == 0 then extraAngle = -angleFactor
			if a == diff then extraAngle = angleFactor

			newAngle = thumb_angle + extraAngle
			j = finger_joints * fI * cos newAngle
			k = finger_joints * fI * sin newAngle
			u = j + i + (psW * a)
			append vert_array [u,y+k,z]
		 	append vert_array [u,y+k,0]
			fI = fI - ((psW  * (cos thumb_angle) / finger_joints))
		)

		-- CREATE FACES AT THUMB BASE
		
		-- I could not create the faces at the base of the thumb in a loop because the vertex numbers 
		-- they use do not follow a pattern. The vertices on the palm were created first, and they followed 
		-- a certain pattern, so I was able to write loops that work with them.
		-- The first set of base thumb verts away from the hand start with a number that depends on the 
		-- number of palm segments, fingers, etc. It's basically whatever the next vertex number was
		-- after the palm was created. The set of vertices on the palm that form the thumb base are 
		-- determined by the thumb span values.
		--
		-- The thumb vertices after the base, the ones that form the thumb joints, do follow a pattern,
		-- so I can use a loop to create their faces once the base is created.
		--

		-- Create thumb base side faces near wrist
		-- eN = number of first vertex on thumb side that will be used in the thumb
		eN = ((finger_num * ((palm_segs + 1) * 2)) + 1) + thumb_span_start - 1
		v1 = eN
		v2 = tV
		v3 = eN + palm_segs + 1
		v4 = tV + 1
  		append face_array [v1,v2,v4]
		append face_array [v4,v3,v1]
		
		-- Create all thumb base top and bottom faces
		for a = 0 to (diff - 1) do
		(
  			v1 = eN + a
			v2 = v1 + 1
			v3 = tV + (a * 2)
			v4 = v3 + 2
  			append face_array [v1,v2,v4]
			append face_array [v4,v3,v1]
			v1 = eN + a + (palm_segs + 1)
			v2 = v1 + 1
			v3 = tV + (a * 2) + 1
			v4 = v3 + 2
  			append face_array [v4,v2,v1]
			append face_array [v1,v3,v4]
		)
		
		-- Create thumb base side faces near fingers
		v1 = eN + diff
		v2 = v1 + palm_segs + 1
		v3 = tV + (diff * 2)
		v4 = v3 + 1
  		append face_array [v1,v2,v4]
		append face_array [v4,v3,v1]
		
	
		-- CREATE THUMB FACES FOR FINGER JOINTS

		-- Create additional faces for finger joints, if necessary
		if finger_joints > 1 then
		(
			-- Create caps at sides
			for a = 0 to (finger_joints - 2) do
			(
				-- Create cap faces
				-- Create cap near wrist
				v1 = tV + (a * ((diff + 1) * 2))
				v2 = v1 + ((diff + 1) * 2)
				v3 = v1 + 1
				v4 = v2 + 1
  				append face_array [v1,v2,v4]
				append face_array [v4,v3,v1]
				
				-- Create cap near fingers
				v1 = tV + (a * ((diff + 1) * 2)) + (diff * 2)
				v2 = v1 + ((diff + 1) * 2)
				v3 = v1 + 1
				v4 = v2 + 1
  				append face_array [v4,v2,v1]
				append face_array [v1,v3,v4]

				-- Create top and bottom faces
		  		for t = 0 to (diff - 1) do
	  			(
					v1 = tV + (a * ((diff + 1) * 2)) + (t * 2)
					v2 = v1 + 2
					v3 = v1 + ((diff + 1) * 2)
					v4 = v3 + 2
					append face_array [v1,v2,v4]
					append face_array [v4,v3,v1]
					v1 = tV + (a * ((diff + 1) * 2)) + (t * 2) + 1
					v2 = v1 + 2
					v3 = v1 + ((diff + 1) * 2)
					v4 = v3 + 2
					append face_array [v4,v2,v1]
					append face_array [v1,v3,v4]
				)
			)
		)

		-- CREATE THUMB CAP
		for t = 0 to (diff - 1) do
		(
			v1 = tV + (2 * (diff + 1) * (finger_joints - 1)) + (t * 2)
			v2 = v1 + 2
			v3 = v1 + 1
			v4 = v2 + 1
  	 		append face_array [v1,v2,v4]
			append face_array [v4,v3,v1]
		)
	)	


	-- BUILD THE MESH - This routine is called when you click and drag on the screen.
	on buildMesh do 
	( 
		vert_array = #()
		face_array = #()
		finger_array = #()
		edge_array = #()
		
		undo off
		zeroNum = 0

		-- Test values and fix as needed
		if thumb_span_start > thumb_span_end do thumb_span_end = thumb_span_start
		if thumb_span_end > palm_segs do palm_segs = thumb_span_end

		-- CREATE THE PALM ARRAY
		-- Create first set of vertices on first side of palm
		buildSideVerts()
		-- Add first side's faces to array
		-- flip indicates the direction the faces will face
		flip = false
		buildSideFaces zeroNum flip
		-- Add vertices and faces around each strip to the arrays
		buildMid()
		-- Add closing side's faces to face_array
		flip = true
		buildSideFaces finger_num flip

		-- CREATE THE THUMB ARRAY
		if cbx_thumb do buildThumb hand_length hand_width hand_height
		
		-- BUILD THE MESH
		undo on
		-- This line takes all the vertices and faces in the arrays and makes the actual mesh.
		setmesh mesh vertices:vert_array faces:face_array 
		-- Make diagonal edges invisible. All diagonals are edge 3.
		for face = 1 to mesh.numfaces do setEdgeVis mesh face 3 false
 
		-- EXTRUDE THE FINGERS
		extrudeFingers()

	)

	-- MOUSE CLICKS - Tells the program what you do when you click the mouse.
	tool create
	(
		on mousePoint click do 
		case click of 
		( 
			1: nodeTM.translation = gridPoint 
			3: #stop
		) 
		on mouseMove click do 
		case click of 
		( 
			2: (hand_length = gridDist.x; hand_width = gridDist.y) 
			3: hand_height = gridDist.z 
		) 
	) 
		
)
