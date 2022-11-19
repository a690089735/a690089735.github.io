



fn addTransEx obj holder = --请注意,目前仅支持了各种XYZ控制器,使用了其他控制器会报错,(默认强制转换为XYZ控制器)
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
	
	Custattributes.add holder TransExCA baseobject:false
	
	ctrl = obj.position.controller = Position_XYZ()
	holder.posx.controller = ctrl[1].controller
	holder.posy.controller = ctrl[2].controller
	holder.posz.controller = ctrl[3].controller
	
	ctrl = obj.rotation.controller = Euler_XYZ ()
	holder.rotx.controller = ctrl[1].controller
	holder.roty.controller = ctrl[2].controller
	holder.rotz.controller = ctrl[3].controller
	
	ctrl = obj.scale.controller = ScaleXYZ ()
	holder.sclx.controller = ctrl[1].controller
	holder.scly.controller = ctrl[2].controller
	holder.sclz.controller = ctrl[3].controller
)
-- addTransEx selection[1] selection[1] .modifiers[1]

fn addLimbProp obj holder FKCtrls:#() IKCtrls:#() secondCtrls:#() fineCtrls:#() = --请添加给一个单独的控制器
(
	local LimbCA = attributes LimbAtt
	(
		Parameters Limb rollout:LimbRollout
		(	
-- 			FKBone type:#maxObjectTab tabsize:0 Variable:true
			FKCtrls type:#nodeTab tabsize:0 Variable:true
			
-- 			IKBones type:#maxObjectTab tabsize:0 Variable:true
			IKCtrls type:#nodeTab tabsize:0 Variable:true
			
			secondCtrls type:#nodeTab tabsize:0 Variable:true
			fineCtrls type:#nodeTab tabsize:0 Variable:true
			
			FKIK type:#float UI:FKIK Default:0.0
			IKSoft type:#float UI:SoftIK Default:0.0
			IKstretch type:#float UI:stretchIK Default:0.0
		)
		rollout LimbRollout "FK IK Setting"
		(
			group "Switch FK/IK"
			(
				spinner FKIK "FK/IK" width:62 range:[0,1,0]  Align:#Left type:#float scale:0.1 controller:(linear_float())
					
				button toFK "FK->IK" Align:#Center offset:[14,-24]
				button toIK "IK->FK" Align:#Right offset:[0,-26]
					
				on toFK pressed do (IKCtrls)
				on toIK pressed do ()
			)
			
			group"IK Property"
			(
				spinner SoftIK "IK Soft" width:62 range:[0,1,0]  Align:#Right type:#float scale:0.1 controller:(linear_float())
				spinner stretchIK "IK stretch" width:62 range:[0,1,0]  Align:#Right type:#float scale:0.1 controller:(linear_float())
			)
			
			group"Hide/Show"
			(
				button 'FK' "FK" Align:#Left width:48
				button 'IK' "IK" Align:#Left width:48 offset:[48,-26]
				button 'second' "second" Align:#Left width:48 offset:[96,-26]
				button 'fine' "fine" Align:#Left width:48 offset:[144,-26]
				
				on FK pressed do hide(join #() FKctrls)
				on FK rightClick do unhide(join #() FKCtrls)
				on IK pressed do hide(join #() IKCtrls)
				on IK rightClick do unhide(join #() IKCtrls)
				on second pressed do hide(join #() secondCtrls)
				on second rightClick do unhide(join #() secondCtrls)
				on fine pressed do hide(join #() fineCtrls)
				on fine rightClick do unhide(join #() fineCtrls)
			)
		)
	)	
	Custattributes.add holder LimbCA baseobject:false
	holder.FKCtrls = FKCtrls
	holder.IKCtrls = IKCtrls
	holder.secondCtrls = secondCtrls
	holder.fineCtrls = fineCtrls
)
addLimbProp selection[1] selection[1].modifiers[1]