fn CIPfn = (
	createdNode = callbacks.notificationParam()
	if (classof createdNode == Targetcamera) or (classof createdNode == Freecamera) do(
		CIPCusAttr = attributes CIPAttr
		(
		parameters main rollout:params(
			IP_Enabled type:#boolean default:false ui:EnableCBox
			IP_Node type:#node
			IP_Material type:#material
			IP_Renderable type:#boolean default:false ui:RenderableCBox
			DistanceVal type:#worldUnits animatable:false default:100 ui:DistanceSpn 
			StartAtVal type:#integer animatable:false default:1 ui:StartAtSpn
			ImagePathVal type:#string ui:ImagePathETxt
			UseImgSizeVal type:#boolean default:false ui:UseImgSizeCBox
			)
			
		fn ChangeIPSizeFn cam node dst = (
			vfov = 2.0*atan(tan(cam.fov/2.0)/((renderWidth*renderPixelAspect as float)/renderHeight)) 
			w = dst*tan(cam.fov/2)
			l = dst*tan(vfov/2)
			node.width = 2*w
			node.length = 2*l

			in coordsys $ ( node.pos = [0, 0, -dst] )
			)
			
		rollout params "Image Plane"(
			checkbox EnableCBox "Enable Image Plane" align:#left
			spinner DistanceSpn "Distance" range:[0,1e32,100] fieldWidth:84 type:#worldUnits align:#left enabled:IP_Enabled
			spinner StartAtSpn "Start at" type:#integer fieldWidth:88 range:[-9999,9999,1] align:#left enabled:IP_Enabled
			editText ImagePathETxt align:#left fieldWidth:80 enabled:IP_Enabled;
			button BrowseBtn "Browse" align:#right offset:[0,-24] enabled:IP_Enabled
			checkbox RenderableCBox "Renderable" aligh:#left enabled:IP_Enabled
			checkbox UseImgSizeCBox "Use Image Size" align:#left enabled:IP_Enabled
			
			on EnableCBox changed state do(
				if IP_Material == undefined do IP_Material = Standardmaterial name:($.name+"_ImagePlaneMat") selfIllumMapAmount:100 diffuse:(color 128 128 128) showInViewport:true
				if state == true then(
					IP_Node = Plane name:($.name+"_ImagePlane") transform:$.transform parent:$ ignoreExtents:true isFrozen:true showFrozenInGray:false wirecolor:(color 0 0 0) material:IP_Material
					ChangeIPSizeFn $ IP_Node DistanceVal
					)else delete IP_Node
				DistanceSpn.enabled = state
				StartAtSpn.enabled = state
				ImagePathETxt.enabled = state
				BrowseBtn.enabled = state
				RenderableCBox.enabled = state
				)
				
			on DistanceSpn changed val do(
				ChangeIPSizeFn $ IP_Node DistanceVal
				)
				
			on BrowseBtn pressed do(
				IP_Material.diffuseMap = Bitmaptexture()
				IP_Material.diffuseMap.bitmap = selectbitmap()
				ImagePathVal = IP_Material.diffuseMap.fileName
				ImagePathETxt.text = ImagePathVal
				UseImgSizeCBox.enabled = true
				if UseImgSizeVal == true do(
					renderHeight = IP_Material.diffuseMap.bitmap.height
					renderWidth = IP_Material.diffuseMap.bitmap.width
					ChangeIPSizeFn $ IP_Node DistanceVal
					)
				)
				
			on ImagePathETxt entered val do(
				IP_Material.diffuseMap = Bitmaptexture()
				IP_Material.diffuseMap.fileName = ImagePathETxt.text
				UseImgSizeCBox.enabled = true
				if UseImgSizeVal == true do(
					renderHeight = IP_Material.diffuseMap.bitmap.height
					renderWidth = IP_Material.diffuseMap.bitmap.width
					ChangeIPSizeFn $ IP_Node DistanceVal
					)
				)
				
			on StartAtSpn changed val do(
				IP_Material.diffuseMap.startTime = StartAtVal
				)
				
			on UseImgSizeCBox changed state do(
				renderHeight = IP_Material.diffuseMap.bitmap.height
				renderWidth = IP_Material.diffuseMap.bitmap.width
				
				ChangeIPSizeFn $ IP_Node DistanceVal
				)
				
			on RenderableCBox changed state do(
				IP_Node.renderable = IP_Renderable
				)
			)
		)
		custAttributes.add createdNode CIPCusAttr
	)
)

fn CIPDelFn = (
	deletedNode = callbacks.notificationParam()
	if (classof deletedNode == Targetcamera) or (classof deletedNode == Freecamera)do(
		try(delete deletedNode.IP_Node)catch()
		)
	)

callbacks.removeScripts id:#CIPCallback
callbacks.addScript #nodeCreated "CIPfn()" id:#CIPCallback
callbacks.removeScripts id:#CIPDelCallback
callbacks.addScript #nodePreDelete "CIPDelfn()" id:#CIPDelCallback