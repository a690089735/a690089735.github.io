fn addTransEx obj holder:undefined  FPos:true FRot:true FScl:true tobase:false = --请注意,目前仅支持了各种XYZ控制器,使用了其他控制器会报错,可以使用强制参数(默认强制)
(
	local TransExCA = attributes TransExAtt
	(
		Parameters TransEx rollout:TransformRollout
		(	
			posx type:#float ui:posx
			posy type:#float ui:posy
			posz type:#float ui:posz
			rotx type:#float ui:rotx
			roty type:#float ui:roty
			rotz type:#float ui:rotz
			sclx type:#float ui:sclx
			scly type:#float ui:scly
			sclz type:#float ui:sclz
		)
		rollout TransformRollout "Local Transform"
		(
			group "Position" 
			(
				spinner posx "x" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#left offset:[-3,0]
				spinner posy "y" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#center offset:[2,-21]
				spinner posz "z" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right offset:[3,-21]
			)
			group "Rotation" 
			(
				spinner rotx "x" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#left offset:[-3,0]
				spinner roty "y" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#center offset:[2,-21]
				spinner rotz "z" width:60 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right offset:[3,-21]
			)
			group "Scale" 
			(
				spinner sclx "x" width:60 range:[-1e+007, 1e+007, 1] type:#float scale:0.001 align:#left offset:[-3,0]
				spinner scly "y" width:60 range:[-1e+007, 1e+007, 1] type:#float scale:0.001 align:#center offset:[2,-21]
				spinner sclz "z" width:60 range:[-1e+007, 1e+007, 1] type:#float scale:0.001 align:#right offset:[3,-21]
			)
			
		)
	)
	
	if holder == undefined do holder = (modf=EmptyModifier();addmodifier obj modf;modf)
	Custattributes.add holder TransExCA baseobject:tobase
	
	if FPos do obj.position.controller = Position_XYZ()
	ctrl = obj.position.controller
	holder.posx.controller = ctrl[1].controller
	holder.posy.controller = ctrl[2].controller
	holder.posz.controller = ctrl[3].controller
	
	if FRot do obj.rotation.controller = Euler_XYZ ()
	ctrl = obj.rotation.controller
	holder.rotx.controller = ctrl[1].controller
	holder.roty.controller = ctrl[2].controller
	holder.rotz.controller = ctrl[3].controller
	
	if FScl do obj.scale.controller = ScaleXYZ ()
	ctrl = obj.scale.controller
	holder.sclx.controller = ctrl[1].controller
	holder.scly.controller = ctrl[2].controller
	holder.sclz.controller = ctrl[3].controller
	
	
	
)
addTransEx (selection[1]) 