plugin RotationController wheelAutorotation
	name:"Wheel Autorotation"
	classID:#(0x35f477f6, 0x437176b9)
	usePBValidity:true
(
	fn getMatrixX a b c = matrix3 a b c [0,0,0]
	fn getMatrixY a b c = matrix3 c a b [0,0,0]
	fn getMatrixZ a b c = matrix3 b c a [0,0,0]
	fn getTransformedVector pos norm = pos - norm * dot pos norm
	fn getUpnodeVector = (if this.upnodeWorld OR NOT isValidNode this.upnode then matrix3 1 else this.upnode.transform)[this.upnodeAxis]
	
	local localAxis = z_axis
	local getMatrix = getMatrixZ
	local prevPos, prevFrame = 0
	local travelledDistance = 0
	local currentRot = quat 1
	
	parameters pblock rollout:params
	(
		radius type:#float ui:spnRadius default:1
		rotAxis type:#integer ui:rbRotAxis default:3
		flipAxis type:#integer ui:chxFlipAxis default:0
		upnode type:#node ui:pbUpnode
		upnodeAxis type:#integer ui:rbUpnodeAxis default:3
		upnodeWorld type:#boolean ui:chxUpnodeWorld default:true

		on rotAxis set axis do
		(
			localAxis = case axis of (1: x_axis; 2: y_axis; 3: z_axis)
			getMatrix = case axis of (1: getMatrixX; 2: getMatrixY; 3: getMatrixZ)
		)

		on upnodeWorld set state do this.params.pbUpnode.enabled = NOT state
	)

	rollout params "Wheel Rotation Parameters"
	(
		spinner spnRadius "Wheel Radius: " type:#worldUnits align:#left
		group "Local Rotation Axis: "
		(
			radioButtons rbRotAxis labels:#("X", "Y", "Z") columns:3 align:#left across:2
			checkBox chxFlipAxis "Flip" align:#right
		)
		group "Upnode Alignment"
		(
			groupBox gbUpnode "Select Upnode: " offset:[-3,0] width:143 height:42
				checkBox chxUpnodeWorld "World" offset:[5,-28] align:#left across:2
				pickButton pbUpnode "None" width:70 offset:[-1,-31] autoDisplay:true align:#right enabled:(NOT upnodeWorld)
			groupBox gbAxis "Aligned to Upnode Axis: " offset:[-3,3] width:143 height:42
				radioButtons rbUpnodeAxis labels:#("X", "Y", "Z") columns:3 offset:[0,-28] align:#center
			label padding visible:false offset:[0,-10]
		)
	)
	
	on getValue do
	(
		if prevFrame != currentTime AND prevPos != undefined  AND prevPos != parentTransform.pos then
		(
			local norm = getUpnodeVector()
			local vec = parentTransform.pos - prevPos
			local proj = normalize (getTransformedVector vec norm)
			local orth = normalize (cross proj norm)
			local flipMult = 1 - 2 * flipAxis

			travelledDistance += length vec
			currentRot = quat (flipMult * radToDeg (travelledDistance / this.radius)) localAxis
			currentRot = (currentRot as matrix3) * (getMatrix orth proj norm)
		)

		prevFrame = currentTime
		prevPos = parentTransform.pos

		currentRot
	)
)