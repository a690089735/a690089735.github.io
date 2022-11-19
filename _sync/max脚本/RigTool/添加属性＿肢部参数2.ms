fn addLimbProp obj holder FKBones:#() FKCtrls:#() IKBones:#() IKCtrls:#() secondCtrls:#() fineCtrls:#() = --Limb一定是一个两段结构(两段,三个骨骼,三个控制器)
(
	local LimbCA = attributes LimbAtt
	(
		Parameters Limb rollout:LimbRollout
		(	
			FKBones type:#nodeTab tabsize:0 tabSizeVariable:true
			FKCtrls type:#nodeTab tabsize:0 tabSizeVariable:true
			
			IKBones type:#nodeTab tabsize:0 tabSizeVariable:true
			IKCtrls type:#nodeTab tabsize:0 tabSizeVariable:true
			
			secondCtrls type:#nodeTab tabsize:0 tabSizeVariable:true
			fineCtrls type:#nodeTab tabsize:0 tabSizeVariable:true
			
			FKIK type:#float UI:FKIK Default:0.0
			IKSoft type:#float UI:SoftIK Default:0.0
			IKstretch type:#float UI:stretchIK Default:0.0
		)
		rollout LimbRollout "FK IK Setting"
		(
			group "Switch FK/IK"
			(
				spinner FKIK "FK/IK" width:62 range:[0,1,0]  Align:#Left type:#float scale:0.1 controller:(bezier_float())
					
				button toFK "FK->IK" Align:#Center offset:[14,-24]
				button toIK "IK->FK" Align:#Right offset:[0,-26]
					
				on toFK pressed do (IKCtrls)
				on toIK pressed do ()
			)
			
			group"IK Property"
			(
				spinner SoftIK "IK Soft" width:62 range:[0,1,0]  Align:#Right type:#float scale:0.1 controller:(bezier_float())
				spinner stretchIK "IK stretch" width:62 range:[0,1,0]  Align:#Right type:#float scale:0.1 controller:(bezier_float())
			)
			 
			group"Show/Hide"
			(
				button 'FK' "FK" Align:#Left width:48
				button 'IK' "IK" Align:#Left width:48 offset:[48,-26]
				button 'second' "second" Align:#Left width:48 offset:[96,-26]
				button 'fine' "fine" Align:#Left width:48 offset:[144,-26]
				
				on FK pressed do unhide(join #() FKctrls)
				on FK rightClick do hide(join #() FKCtrls)
				on IK pressed do unhide(join #() IKCtrls)
				on IK rightClick do hide(join #() IKCtrls)
				on second pressed do unhide(join #() secondCtrls)
				on second rightClick do hide(join #() secondCtrls)
				on fine pressed do unhide(join #() fineCtrls)
				on fine rightClick do hide(join #() fineCtrls)
			)
		)
	)	
	Custattributes.add holder LimbCA baseobject:false
	for i in FKCtrls do append holder.FKCtrls i
	for i in FKBones do append holder.FKBones i
	for i in IKCtrls do append holder.IKCtrls i
	for i in IKBones do append holder.IKBones i
	for i in secondCtrls do append holder.secondCtrls i
	for i in fineCtrls do append holder.fineCtrls i
)
modf = EmptyModifier ()
addLimbProp selection[1] modf
addmodifier selection[1] modf