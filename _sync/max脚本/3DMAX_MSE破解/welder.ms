/* 
thickness: 2
strength: 0.6
size: 3.0

thickness: 1.2
strength: 0.6
size: 2.0
 */

try(destroyDialog ::WelderTool)catch()

rcmenu rc_main_menu
(
	subMenu "File"
	(
		menuItem mi_save_preset "Save Preset"
		menuItem mi_load_preset "Load Preset"
	)
	
	on mi_save_preset picked do
	(
		if WelderTool != undefined do
		(
			WelderTool.save_preset()
		)
	)
	on mi_load_preset picked do
	(
		if WelderTool != undefined do
		(
			WelderTool.load_preset()
		)
	)
)

rollout WelderTool "Welder 2.2.1"
(
	local gpA = 10
	local gpB = 120
	local gpC = 335
	local new_welds = #()

	groupbox gp_weld_settings "Weld Settings" pos:[10,gpA] width:180 height:105
	
	label lb_thickness "Thickness:" pos:[19,gpA+20]
	spinner ui_thickness "" fieldwidth:55 range:[0,1e9,4.0] type:#worldUnits pos:[115,gpA+20]
	label lb_sides "Side Segments:" pos:[19,gpA+40]
	spinner ui_sides "" fieldwidth:55 range:[3,1e9,8] type:#integer pos:[115,gpA+40]
	label lb_angle "Angle:" pos:[19,gpA+60] visible:true
	spinner ui_angle fieldwidth:55 range:[-1e9,1e9,0.0] type:#float pos:[115,gpA+60]
	
	label lb_sharp_corners "Sharp Corners:" pos:[19,gpA+80]
	label lb_sharp_1 "1" pos:[115,gpA+80]
	checkbox ui_sharp_1 width:19 pos:[130,gpA+80] checked:false
	label lbSharp_2 "2" pos:[155,gpA+80]
	checkbox ui_sharp_2 width:19 pos:[169,gpA+80] checked:false

	groupbox gp_weld_bead_settings "Weld Bead Settings" pos:[10,gpB] width:180 height:45
	label lb_bead_type "Type:" pos:[20, gpB+20]
	dropdownlist ui_bead_type items:#("Cellular","Shape","None") selection:1 width:100 pos:[80, gpB+16]
	
	groupbox gp_bead_settings pos:[10,gpB+38] width:180 height:170
	
	/* Cellular */
	label lb_displace_strength "Strength:" pos:[19,gpB+50] visible:false
	spinner ui_displace_strength "" fieldwidth:55 range:[-1e9,1e9,2.5] type:#worldUnits pos:[115,gpB+50] visible:false
	label lb_cellular_size "Size:" pos:[19,gpB+70] visible:false
	spinner ui_cellular_size "" fieldwidth:55 range:[0.0001,1e9,8.0] type:#float pos:[115,gpB+70] visible:false
	label lb_cellular_spread "Spread:" pos:[19,gpB+90] visible:false
	spinner ui_cellular_spread "" fieldwidth:55 range:[0.0001,1e9,0.2] type:#float pos:[115,gpB+90] visible:false
	label lb_cellular_iterations "Iterations:" pos:[19,gpB+110] visible:false
	spinner ui_cellular_iterations "" fieldwidth:55 range:[1.0,1e9,1.0] type:#float pos:[115,gpB+110] visible:false	
	label lb_cellular_thresholds_low "Threshold Low:" pos:[19,gpB+130] visible:false
	spinner ui_cellular_threshold_low fieldwidth:55 range:[0.0,1.0,0.0] type:#float pos:[115,gpB+130] visible:false
	label lb_cellular_thresholds_mid "Threshold Mid:" pos:[19,gpB+150] visible:false
	spinner ui_cellular_threshold_mid fieldwidth:55 range:[0.0,1.0,0.5] type:#float pos:[115,gpB+150] visible:false
	label lb_cellular_thresholds_high "Threshold High" pos:[19,gpB+170] visible:false
	spinner ui_cellular_threshold_high fieldwidth:55 range:[0.0,1.0,1.0] type:#float pos:[115,gpB+170] visible:false
	label lb_cellular_fractal "Fractal:" pos:[19,gpB+190] visible:false
	checkbox ui_cellular_fractal pos:[118,gpB+190] checked:true visible:false

	/* Shape */
	label lb_shape_option "Shape:" pos:[19,gpB+50]
	dropdownlist ui_shape_option items:#("Convex","Concave") selection:1 width:65 pos:[118, gpB+50]
	label lb_shape_spacing "Spacing:" pos:[19,gpB+75]
	spinner ui_shape_spacing "" fieldwidth:55 range:[0.0001,1e9,4.0] type:#worldUnits pos:[115,gpB+75]
	label lb_shape_min_max "Min/Max Thickness:" pos:[19,gpB+95]
	spinner ui_shape_min_max "" fieldwidth:55 range:[0.0,1e4,0.25] type:#worldUnits pos:[115,gpB+95]
	label lb_shape_angle "Angle:" pos:[19,gpB+115]
	spinner ui_shape_angle "" fieldwidth:55 range:[-360,360,50.0] type:#float pos:[115,gpB+115]

	button ui_generate_selected "Generate For Selected Edges" width:180 height:25 pos:[10,gpC]
	button ui_generate_welds "Generate Intersecting Welds" width:180 height:25 pos:[10,gpC+30]

	/* Functions */
	/* 
		Cellular = 1
		Noise = 2
	*/
	fn get_weld_bead_type = 
	(
		local type = 0

		if matchpattern ui_bead_type.selected pattern:"shape" do type = 2
		if matchpattern ui_bead_type.selected pattern:"cellular" do type = 1
		if matchpattern ui_bead_type.selected pattern:"none" do type = 0

		type
	)

	/* 
		Convex = 1
		Concave = 2
	*/
	fn get_shape_type =
	(
		local type = 1

		if matchpattern ui_shape_option.selected pattern:"convex" do type = 1
		if matchpattern ui_shape_option.selected pattern:"concave" do type = 2

		type
	)

	fn update_ui_controls =
	(
		local type = get_weld_bead_type()
		local cellular_controls = #(lb_displace_strength, ui_displace_strength, lb_cellular_size, ui_cellular_size, lb_cellular_spread, ui_cellular_spread, lb_cellular_iterations, ui_cellular_iterations, lb_cellular_thresholds_low, ui_cellular_threshold_low, lb_cellular_thresholds_mid, ui_cellular_threshold_mid, lb_cellular_thresholds_high, ui_cellular_threshold_high, lb_cellular_fractal, ui_cellular_fractal)
		local shape_controls = #(lb_shape_spacing, ui_shape_spacing, lb_shape_min_max, ui_shape_min_max, lb_shape_angle, ui_shape_angle, ui_shape_option, lb_shape_option)

		for c in cellular_controls do c.visible = false
		for c in shape_controls do c.visible = false

		case type of
		(
			1: (for c in cellular_controls do c.visible = true)
			2: (for c in shape_controls do c.visible = true)
		)
	)

	fn get_ini filepath category key default_value value_type =
	(
		local val = default_value

 		if doesFileExist filepath do
		(
			local results = getINISetting filepath category key
			if results != "" do
			(
				try
				(
					val = results as value_type
				)
				catch
				(
					val = default_value
				)
 			)
 		)
 		val
	)

	fn save_preset =
	(
		local filepath = getSaveFileName caption:"Save Weld Preset As" \
		filename:(getDir #plugcfg + @"\") \
		types:"Welder Preset(*.weld)|*.weld" \
		historyCategory:"JokerMartini_Welder"

		if filepath == undefined do return False

		setINISetting filepath "settings" "thickness" (ui_thickness.value as string)
		setINISetting filepath "settings" "sides" (ui_sides.value as string)
		setINISetting filepath "settings" "angle" (ui_angle.value as string)
		setINISetting filepath "settings" "displace_strength" (ui_displace_strength.value as string)
		setINISetting filepath "settings" "cell_size" (ui_cellular_size.value as string)
		setINISetting filepath "settings" "cell_spread" (ui_cellular_spread.value as string)
		setINISetting filepath "settings" "cell_iterations" (ui_cellular_iterations.value as string)
		setINISetting filepath "settings" "cell_threshold_low" (ui_cellular_threshold_low.value as string)
		setINISetting filepath "settings" "cell_threshold_mid" (ui_cellular_threshold_mid.value as string)
		setINISetting filepath "settings" "cell_threshold_high" (ui_cellular_threshold_high.value as string)
		setINISetting filepath "settings" "cell_fractal" (ui_cellular_fractal.state as string)
		setINISetting filepath "settings" "turbo_sharp_1" (ui_sharp_1.state as string)
		setINISetting filepath "settings" "turbo_sharp_2" (ui_sharp_2.state as string)
		setINISetting filepath "settings" "bead_type" (ui_bead_type.selection as string)
		setINISetting filepath "settings" "bead_option" (ui_shape_option.selection as string)
		setINISetting filepath "settings" "shape_spacing" (ui_shape_spacing.value as string)
		setINISetting filepath "settings" "shape_min_max" (ui_shape_min_max.value as string)
		setINISetting filepath "settings" "shape_angle" (ui_shape_angle.value as string)
	)

	fn load_preset =
	(
		local filepath = getOpenFileName caption:"Load Weld Preset" \
		filename:(getDir #plugcfg + @"\") \
		types:"Welder Preset(*.weld)|*.weld" \
		historyCategory:"JokerMartini_Welder"

		if filepath == undefined do return False

		ui_thickness.value = get_ini filepath "settings" "thickness" 4.0 float
		ui_sides.value = get_ini filepath "settings" "sides" 8 integer
		ui_angle.value = get_ini filepath "settings" "angle" 0.0 float
		ui_displace_strength.value = get_ini filepath "settings" "displace_strength" 2.5 float
		ui_cellular_size.value = get_ini filepath "settings" "cell_size" 8.0 float
		ui_cellular_spread.value = get_ini filepath "settings" "cell_spread" 0.2 float
		ui_cellular_iterations.value = get_ini filepath "settings" "cell_iterations" 1.0 float
		ui_cellular_threshold_low.value = get_ini filepath "settings" "cell_threshold_low" 0.0 float
		ui_cellular_threshold_mid.value = get_ini filepath "settings" "cell_threshold_mid" 0.5 float
		ui_cellular_threshold_high.value = get_ini filepath "settings" "cell_threshold_high" 1.0 float
		ui_cellular_fractal.state = get_ini filepath "settings" "cell_fractal" true booleanclass
		ui_sharp_1.state = get_ini filepath "settings" "turbo_sharp_1" false booleanclass
		ui_sharp_2.state = get_ini filepath "settings" "turbo_sharp_2" false booleanclass
		ui_bead_type.selection = get_ini filepath "settings" "bead_type" 1 integer
		ui_shape_option.selection = get_ini filepath "settings" "bead_option" 1 integer
		ui_shape_spacing.value = get_ini filepath "settings" "shape_spacing" 4.0 float
		ui_shape_min_max.value = get_ini filepath "settings" "shape_min_max" 0.25 float
		ui_shape_angle.value = get_ini filepath "settings" "shape_angle" 50.0 float

		update_ui_controls()
	)

	fn valid_objects nodes =
	(
		for n in nodes do
		(
			if superClassOf n != GeometryClass and superClassOf n != Shape do 
			(
				local msg = "Process canceled.\nInvalid object found in selection: " + n.name + "\n"
				msg += "Objects must be of type Geometry or Shape to continue."
				messagebox msg
				return false
			)
		)
		return true
	)

	fn get_poly_snapshot obj =
	(
		(convertToPoly (snapshot obj))
	)

	fn set_property obj prop val =
	(
		if isproperty obj prop do setproperty obj prop val
	)

	fn set_spline_property prop val = 
	(
		undo on 
		(
			for obj in selection where superclassof obj.baseobject == shape do
			(
				set_property obj prop val
			)
		)
	)

	-- mod_int represents which instance of the modifier to change. 1 means the first instances, 2 means second instance etc..
	fn set_modifier_property classname mod_int prop val =
	(
		undo on 
		(
			for i = 1 to selection.count do
			(
				local mods = for m in selection[i].modifiers where (classOf m == classname) collect m
				if mods.count >= mod_int do set_property mods[mod_int] prop val
			)
		)
	)

	fn set_map_property classname prop val =	
	(
		undo on 
		(
			for i = 1 to selection.count do
			(
				for m in selection[i].modifiers where (classOf m == Displace) and (classof m.map == classname) do
				(
					set_property m.map prop val
				)
			)
		)
	)

	-- Converts edge selection to spline
	fn convert_edge_selection_to_weld obj = 
	(
		--obj.EditablePoly.createShape name:"weld7Unique" off obj
		local edges = polyop.getEdgeSelection obj
		polyop.createShape obj edges name:"__the_weld__" smooth:off
		
		local the_weld = getNodeByName "__the_weld__"
		the_weld.name = uniqueName "Weld_"
		the_weld.wirecolor = red
		the_weld.baseObject.render_renderable = true
		the_weld.baseObject.render_displayRenderMesh = true
		the_weld.baseObject.render_mapcoords = true
 		the_weld.baseObject.render_thickness = ui_thickness.value
 		the_weld.baseObject.render_sides = ui_sides.value

 		return the_weld
	)

	fn attachSplines splines = 
	(
		if splines.count <= 1 do return false
		converttosplineshape splines[1]
		for i = 2 to splines.count where canconvertto splines[i] SplineShape do
		(
			addandweld splines[1] (converttosplineshape splines[i]) -1
		)
		splines[1]
	)

	fn get_curve_length spline =
	(
		local total_length = 0
		for i = 1 to (numSplines spline) do
		(
			total_length += curveLength spline i
		)
		total_length
	)

	fn get_count_from_spacing spline dist =
	(
		local cnt = 0
		for i = 1 to (numSplines spline) do
		(
			cnt += (floor ((curveLength spline i) / dist) as integer) + 1
		)
		cnt
	)

	fn create_beaded_shape spline profile_shape dist min_val max_val = 
	(
		if numSplines spline == 0 do return false

		local curve_length = get_curve_length spline
	 	local cnt = get_count_from_spacing spline dist
	 	new_welds = #()

		/* Distribute */
		for idx = 1 to numSplines spline do
		(
			local objs = #()

			local steps = floor ((curveLength spline idx) / dist) as integer 
			for i = 0 to steps do
			(
				local cp = copy profile_shape
				cp.wirecolor = yellow
				append objs cp

				local interp = i * dist / (curveLength spline idx)
				cp.pos = lengthInterp spline idx interp
				local dir = lengthTangent spline idx interp
	 			cp.dir = dir
				--for o in selection do o.transform = (rotateZmatrix 10) * o.transform
				cp.transform = (rotateYmatrix ui_shape_angle.value) * cp.transform

				local val = random min_val max_val
				cp.scale = [val, val, val]
			)
			local bead = attachSplines objs
			addmodifier bead (CrossSection())
			addmodifier bead (Surface steps:2 threshold:0.0)
			addmodifier bead (Normalmodifier flip:true)
			addmodifier bead (TurboSmooth iterations:0 useRenderIterations:true renderIterations:1)
			append new_welds bead
		)
		select new_welds
	)

	fn custom_profile_shape =
	(
		local sp
		
		local type = get_shape_type()
		case type of
		(
			default: (
				sp = circle radius:(ui_thickness.value*0.5) wirecolor:yellow
			)
			2: (
				sp = splineshape wirecolor:yellow()
				addnewspline sp
				local rad = (ui_thickness.value*0.5)
				local ptOffset = rad * 0.55
				local pA = [rad,0,0]
				local pB = [0,rad,0]
				local pC = [-rad,0,0]
				local pD = [0,-rad,0]
				addknot sp 1 #beziercorner #curve pA (pA + ([-1,0,0]) * ptOffset) (pA + ([-1,0,0]) * ptOffset) 
				addknot sp 1 #beziercorner #curve pB (pB + ([0,-1,0]) * ptOffset) (pB + ([0,-1,0]) * ptOffset) 
				addknot sp 1 #beziercorner #curve pC (pC + ([1,0,0]) * ptOffset) (pC + ([1,0,0]) * ptOffset) 
				addknot sp 1 #beziercorner #curve pD (pD + ([0,1,0]) * ptOffset) (pD + ([0,1,0]) * ptOffset) 
				--addknot sp 1 #beziercorner #curve pA (pA + ([0,-1,0]) * ptOffset) (pA + ([-1,0,0]) * ptOffset) 
				--addknot sp 1 #beziercorner #curve pB (pB + ([0,-1,0]) * ptOffset) (pB + ([-1,0,0]) * ptOffset) 
				--addknot sp 1 #beziercorner #curve pC (pC + ([0,1,0]) * ptOffset) (pC + ([0,-1,0]) * ptOffset) 
				--addknot sp 1 #beziercorner #curve pD (pD + ([-1,0,0]) * ptOffset) (pD + ([1,0,0]) * ptOffset) 
				close sp 1
				updateShape sp
			)
		)
		sp
	)

	fn set_weld_type obj =
	(
		local type = get_weld_bead_type()
		case type of
		(
			1: (
				local the_map = Cellular size:ui_cellular_size.value spread:ui_cellular_spread.value iteration:ui_cellular_iterations.value fractal:ui_cellular_fractal.state lowThresh:ui_cellular_threshold_low.value midThresh:ui_cellular_threshold_mid.value highThresh:ui_cellular_threshold_high.value
				the_map.coords.coordType = 0 -- Object XYZ
				addModifier obj (Turbosmooth sepBySmGroups:ui_sharp_1.state)
				addModifier obj (Displace map:the_map strength:ui_displace_strength.value lumCenterEnable:true useMap:true)
				addModifier obj (Turbosmooth sepBySmGroups:ui_sharp_2.state)
				--select obj
				append new_welds obj
			)
			2: (
				local spacing = ui_shape_spacing.value
				local min_val = 1.0 - ui_shape_min_max.value
				local max_val = 1.0 + ui_shape_min_max.value
				local c = custom_profile_shape()
				create_beaded_shape obj c spacing min_val max_val
				delete obj
				delete c
			)
			default:()
		)
	)

	fn create_intersecting_welds =
	(
		local obj_to_weld = undefined -- main object everything is getting welded to
		local sub_objs_to_weld = #()
		local weld_obj = undefined
		local nodes = getCurrentSelection()
		new_welds = #()

		if not valid_objects nodes do 
		(
			return false
		)
		if nodes.count <= 1 do
		(
			messagebox "Process canceled.\nA selection of 2 or more objects is required to continue."
			return false
		)

		setCommandPanelTaskMode #create 
		disableSceneRedraw()

		with undo off
		(
			obj_to_weld = get_poly_snapshot nodes[1]
			sub_objs_to_weld = for i = 2 to nodes.count collect get_poly_snapshot nodes[i]

			ProBoolean.createBooleanObjects obj_to_weld sub_objs_to_weld 2 1 0
			ProBoolean.SetMakeQuad obj_to_weld true
			weld_obj = convertToPoly obj_to_weld
			weld_spl = convert_edge_selection_to_weld weld_obj
			set_weld_type weld_spl
	 		delete weld_obj
		)

		select new_welds
		enableSceneRedraw()
		forceCompleteRedraw()
	)

	fn create_selected_edge_welds = 
	(
		local nodes = getCurrentSelection()
		new_welds = #()

		if not valid_objects nodes do 
		(
			return false
		)
		if nodes.count == 0 do
		(
			messagebox "Process canceled.\nA selection of 1 or more objects is required to continue."
			return false
		)

		setCommandPanelTaskMode #create 
		disableSceneRedraw()

		for n in nodes do
		(
			local weld_obj = get_poly_snapshot n
			weld_spl = convert_edge_selection_to_weld weld_obj
			set_weld_type weld_spl
			delete weld_obj
		)

		select new_welds

		enableSceneRedraw()
		forceCompleteRedraw()
	)

	/* Actions */
	on ui_generate_welds pressed do create_intersecting_welds()
	on ui_generate_selected pressed do create_selected_edge_welds()
	
	on ui_thickness changed val do set_spline_property #thickness val
	on ui_sides changed val do set_spline_property #sides val
	on ui_angle changed val do set_spline_property #angle val

	on ui_bead_type selected idx do update_ui_controls()

	on ui_sharp_1 changed state do set_modifier_property Turbosmooth 2 #sepBySmGroups state
	on ui_sharp_2 changed state do set_modifier_property Turbosmooth 1 #sepBySmGroups state

	on ui_displace_strength changed val do set_modifier_property Displace 1 #strength val

	on ui_cellular_size changed val do set_map_property Cellular #size val
	on ui_cellular_spread changed val do set_map_property Cellular #spread val
	on ui_cellular_iterations changed val do set_map_property Cellular #iteration val
	on ui_cellular_fractal changed state do set_map_property Cellular #fractal state
	on ui_cellular_threshold_low changed val do set_map_property Cellular #lowThresh val
	on ui_cellular_threshold_mid changed val do set_map_property Cellular #midThresh val
	on ui_cellular_threshold_high changed val do set_map_property Cellular #highThresh val

	on WelderTool open do update_ui_controls()
)
createDialog WelderTool 200 400 menu:rc_main_menu