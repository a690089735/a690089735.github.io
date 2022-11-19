rollout _rollout "Vertex Animation Export"
	(
		label objectName "Object" align:#center

		spinner channel "Index Channel:" range:[0,99,2] type:#integer

		spinner startFrame "Start Frame:" range:[0,1000,0] type:#integer
		spinner endFrame "End Frame:" range:[0,1000,63] type:#integer

		-- e.g. centimeter in max -> meter in unity => scale = 0.01
		spinner unitScale "Unit Scale" range:[0, 1000, 0.01] type:#float
		button export "Export"

		edittext vertCountText "Vertex Count" text:"..." readOnly:true
		edittext frameCountText "Frame Count" text:"..." readOnly:true

		edittext offsetText "Offset" text:"..." readOnly:true
		edittext scaleText "Scale" text:"..." readOnly:true

		-- support editable_mesh only for now
		fn checkMesh mesh =
		(
			local ret = isvalidnode mesh and ( classof mesh == editable_mesh )
			print ret
			ret
		)

		on export pressed do
		(
			if selection.count == 1 and checkMesh selection[1] then
			(
				local target = selection[1]
				print target

				objectName.text = target.name

				local vertexCount = getNumVerts target
				print vertexCount

				vertCountText.text = vertexCount as string

				local modifiersEnabled = #()

				-- disable all modifiers temporarily to get original initial positions
				for i = 1 to target.modifiers.count do
				(
					append modifiersEnabled target.modifiers[i].enabled
					target.modifiers[i].enabled = false
				)

				-- record initial positions
				local initPositions = #()
				for i = 1 to vertexCount do
				(
					local pos = meshop.getVert target i
					append initPositions pos

					meshop.setVertColor target channel.value i [(i - 0.5) * (1.0 / vertexCount) * 255.0,0,0]
				)

				-- re-enable modifiers
				for i = 1 to target.modifiers.count do
				(
					target.modifiers[i].enabled = modifiersEnabled[i]
				)

				local offsetsByFrames = #()
				local maxValue = 0.0
				local minValue = 0.0

				-- process frames, record position offsets
				for f = startFrame.value to endFrame.value do
				(
					local offsets = #()

					slidertime = f					
					for i = 1 to vertexCount do
					(
						local pos = meshop.getVert target i
						local offset = pos - initPositions[i]

						offset *= unitScale.value

						append offsets offset
						
						minValue = amin minValue offset.x
						minValue = amin minValue offset.y
						minValue = amin minValue offset.z

						maxValue = amax maxValue offset.x
						maxValue = amax maxValue offset.y
						maxValue = amax maxValue offset.z
					)

					append offsetsByFrames offsets
				)

				format "minValue = %\n" minValue
				format "maxValue = %\n" maxValue

				min2max = maxValue - minValue
				offsetValue = minValue
				scaleValue = min2max

				offsetText.text = offsetValue as string
				scaleText.text = scaleValue as string

				local width = vertexCount
				local height = endFrame.value - startFrame.value + 1

				frameCountText.text = height as string

				-- save offsets as texture
				local filePath = getSaveFileName types:"BMP (*.BMP)|*.BMP"
				if filePath == undefined then 
				(
					messagebox "please select a file location"
				) 
				else 
				(
					local texture = bitmap width height filename:filePath hdr:false gamma:1.0

					for h = 1 to height do
					(
						local colors = #()
						
						for w = 1 to width do
						(
							local offset = offsetsByFrames[h][w]
							local x = (offset.x - minValue) / min2max * 255.0
							local y = (offset.y - minValue) / min2max * 255.0
							local z = (offset.z - minValue) / min2max * 255.0
							local w = 0
							append colors (color x y z w)
						)
						
						setPixels texture [0, h - 1] colors
					)

					save texture gamma:1.0
					close texture
				)
			)
			else
			(
				messagebox "Select a Editable Mesh first"
			)
		)
	)

	createDialog _rollout