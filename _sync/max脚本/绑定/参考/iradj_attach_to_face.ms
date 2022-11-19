/* Iradj Attach to face Tools
    Version 1.5
    Written By Iradj Khosronia 19/3/2012
	
    This script is distributed in the hope that it will be useful but	
	WITHOUT ANY WARRANTY !
     MODIFY THIS AT YOUR OWN RISK !!!	
	 
	How to use it :
		This script Attach  a Point Helper to Surface of an Editable Mesh 
		it use Script Controller, for Position and Rotation, you can link
		an object to this Point for Attachment, but be carefull : No Turbo or Mesh Smooth after that
		because it use Barycentric Coordinate !!
		This script use Ray feature so you must not go to SubObject level to chose a point, just choose it in Object level !!
*/
try (closeRolloutFloater rlf_iradj_attach_to_face) catch()
rollout rlt_attach_to_face "Attach Point To Face"
(
	local iradj_attach_to_face_version = "1.5"
	local object_to_attach
	local point_on_face	
	local point_placement
	local face_number
	
	fn mesh_filt obj = classof obj == Editable_mesh
		
	group "Point Color and Size :"
	(
		colorpicker colp_helperColor "Color :"default:[0,255,0] across:2	
		spinner spn_helper_size "Size :" range:[0.1,20,5] type:#float scale:0.1  fieldWidth:40 align:#right
	)	
	
	group "Attachment Type :"
	(
		radiobuttons rdb_attachment_type labels:#("Position","Position + Rotation") default:1 columns:1
	)
	
	group ""
	(
		dotNetControl dn_btn_pick_point_on_face "system.windows.forms.button" text:"Pick a Point On Selected Surface" \
																			width:160 height:45 align:#center offset:[0,-5]	
	)	
	
	edittext edtx_iradj_attach_to_face_version "Version"  text:"" fieldWidth:35 offset:[0,0] align:#left readOnly:true 
	
	fn fn_InitDotNetButton_pick_point_on_face  dnButton fontSize =	
	(
		dnFontStyle = dotNetClass "System.Drawing.FontStyle"
		myFontStyle = dotnet.combineenums    dnFontStyle.bold --dnFontStyle.italic
		dnButton.font = dotNetObject "System.Drawing.Font" "Arial" fontSize myFontStyle
		dnButton.backColor = dnButton.backColor.Orchid         
		dnButton.ForeColor = dnButton.ForeColor.Black
	)		

	--MouseTrack Function Call
	fn fn_pick_point_on_face message intRay obj faceNumber shift ctrl alt =
	(
		returnValue = case message of
		(
			#freeMove:
			(
				if(obj != undefined) and (intRay != undefined) then
				(
					point_on_face.pos = intRay.pos
					point_on_face.dir = intRay.dir
					face_number = faceNumber
				)
				#continue
			)
			#mouseAbort: (undefined)
			#mousePoint:  (undefined)
			#mouseMove: (#continue)
		)
		returnValue
	)
	on rlt_attach_to_face open do
	(
		fn_InitDotNetButton_pick_point_on_face dn_btn_pick_point_on_face 12
		edtx_iradj_attach_to_face_version.text = (iradj_attach_to_face_version as string)
	)
	
	on dn_btn_pick_point_on_face click do 
	(
		undo on
		(
			object_to_attach = selection[1]
			if classof object_to_attach == Editable_Mesh then
			(
				point_on_face = Point Box:off  size:spn_helper_size.value axistripod:on cross:on \
								   centermarker:on constantscreensize:off drawontop:on
				point_on_face.wirecolor = colp_helperColor.color
				mousetrack on:object_to_attach prompt:"Tracking" trackCallBack:fn_pick_point_on_face
				point_placement = point_on_face.transform.translationpart
				vertex_array = getFace object_to_attach face_number
				baryCoord = meshop.getbarycoords object_to_attach face_number point_placement 
				script_controller = point_on_face.pos.controller = position_script ()
				script_controller.AddNode "obj" object_to_attach
				script_controller.AddConstant "baryCordX" baryCoord.x
				script_controller.AddConstant "baryCordY" baryCoord.y
				script_controller.AddConstant "baryCordZ" baryCoord.z
				script_controller.AddConstant "vertex1" vertex_array.x
				script_controller.AddConstant "vertex2" vertex_array.y
				script_controller.AddConstant "vertex3" vertex_array.z							   
				posCmdString = "dependsOn obj\n"
				posCmdString += "(getvert obj vertex1)*baryCordX + (getvert obj vertex2)*baryCordY + (getvert obj vertex3)*baryCordZ"
				script_controller.script = posCmdString
				
				if rdb_attachment_type.state == 2 then
				(
					script_controller = point_on_face.rotation.controller = rotation_script ()
					script_controller.AddNode "obj" object_to_attach
					script_controller.AddConstant "faceNumber" face_number
					rotCmdString = "dependsOn obj\n"				
					rotCmdString += "theFace = getface obj faceNumber\n"
					rotCmdString += "theVertex1 = getvert obj theFace.x\n"
					rotCmdString += "theVertex2 = getvert obj theFace.y\n"
					rotCmdString += "theVertex3 = getvert obj theFace.z\n"
					rotCmdString += "theVector1 = normalize (theVertex2 - theVertex1)\n"
					rotCmdString += "theVector2 = normalize (theVertex3 - theVertex1)\n"
					rotCmdString += "upVector = normalize (cross theVector1 theVector2)\n"
					rotCmdString += "rightVector = normalize (cross upVector theVector1)\n"
					rotCmdString += "theMatrix = matrix3 theVector1 rightVector upVector [0,0,0]\n"
					rotCmdString += "return ( theMatrix.rotationpart )"
					script_controller.script = rotCmdString
				)
				clearListener()	
				format "point_placement: %\n"  point_placement				
				format "face_number: %\n" face_number
				format "vertex_array: %\n" vertex_array
				format "baryCoord: %\n" baryCoord
			)
			else
				messagebox "Select an Editable Mesh\n    to Attach a Point !" title:"Attach Point To Face, Error"
		)
	)
)	
global rlf_iradj_attach_to_face
rlf_iradj_attach_to_face = newRolloutFloater "Iradj Attach to Face Tools"  220 235
addRollout rlt_attach_to_face rlf_iradj_attach_to_face
