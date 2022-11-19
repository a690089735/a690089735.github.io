fn addTransEx holder tobase:false  = --暴露变换,指定Holder可以直接为其添加属性. 
(-- 位置微调器的scale属性(精度),应当取决于整体高度的千分之一.(再试试,说不定是百分之1)
	local TransExCA = attributes TransExAtt
	(
		rollout TransformRollout "Controller Transform"
		(
			group "Position" 
			(
				spinner posx "x:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.001 align:#right Indeterminate:true enabled:false
				spinner posy "y:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.001 align:#right Indeterminate:true enabled:false
				spinner posz "z:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.001 align:#right Indeterminate:true enabled:false
			)
			group "Rotation" 
			(
				spinner rotx "x:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right Indeterminate:true enabled:false
				spinner roty "y:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right Indeterminate:true enabled:false
				spinner rotz "z:" width:80 range:[-1e+007, 1e+007, 0] type:#float scale:0.01 align:#right Indeterminate:true enabled:false
			)
			group "Scale" 
			(
				spinner sclx "x:" width:80 range:[-1e+007, 1e+007, 100] type:#float scale:0.1 align:#right Indeterminate:true enabled:false
				spinner scly "y:" width:80 range:[-1e+007, 1e+007, 100] type:#float scale:0.1 align:#right Indeterminate:true enabled:false
				spinner sclz "z:" width:80 range:[-1e+007, 1e+007, 100] type:#float scale:0.1 align:#right Indeterminate:true enabled:false
			)
			on TransformRollout open do
			(
				if selection.count == 1 do
				try(
					tc = selection[1].controller
					if classof(tc) == prs do 
					(
						--处理位置控制器
						pc = tc[1].controller
						if classof pc == position_list do pc = pc[pc.active].controller
						if classof pc == Position_XYZ do
						(
							posx.controller = pc[1].controller;posx.enabled = true;posx.Indeterminate = false 
							posy.controller = pc[2].controller;posy.enabled = true;posy.Indeterminate = false 
							posz.controller = pc[3].controller;posz.enabled = true;posz.Indeterminate = false 
						)
						--处理旋转控制器
						rc = tc[2].controller
						if classof rc == rotation_list do rc = rc[rc.active].controller
						if classof rc == Euler_XYZ do
						(
							rotx.controller = rc[1].controller;rotx.enabled = true;rotx.Indeterminate = false 
							roty.controller = rc[2].controller;roty.enabled = true;roty.Indeterminate = false 
							rotz.controller = rc[3].controller;rotz.enabled = true;rotz.Indeterminate = false 
						)
	 					--处理缩放控制器
						sc = tc[3].controller
						case classof sc of
						(
							bezier_scale : sc = tc[3].controller = ScaleXYZ()
							scale_list : if classof sc[sc.active].controller == ScaleXYZ then sc = sc[sc.active].controller else sc = sc[sc.active].controller == ScaleXYZ()
						)
						if classof sc == ScaleXYZ do
						(
							sclx.controller = sc[1].controller;sclx.enabled = true;sclx.Indeterminate = false 
							scly.controller = sc[2].controller;scly.enabled = true;scly.Indeterminate = false 
							sclz.controller = sc[3].controller;sclz.enabled = true;sclz.Indeterminate = false 
						)
					)
				)catch()
			)
		)
	)
	
	if classof holder != EmptyModifier do holder = (modf=EmptyModifier();addmodifier holder modf;modf)
	Custattributes.add holder TransExCA baseobject:tobase
)

addTransEx selection[1]