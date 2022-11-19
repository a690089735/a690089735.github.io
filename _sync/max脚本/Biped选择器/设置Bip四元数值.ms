try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:152 height:192
(
	--依赖函数,获取当前Bip帧
	fn getCurrentBipedKey ctrl = 
	(
		local _temp
		for i = 1 to ctrl.keys.count where (_temp = biped.getKey ctrl i;_temp.time == currenttime) do exit with _temp
	)
	--通用的设置biped帧功能,依赖于上面的getCurrentBipedKey
	fn setBipKeysVal ctrl val type:#bias = --val:50后偏(前稳定),默认25平滑,0前偏(后稳定)
	(
		case (classof ctrl) of
		(
			Vertical_Horizontal_Turn : for i = 1 to 3 do setBipKeysVal ctrl[i].controller val
			BipSlave_Control : 
			(
				bipkey = getCurrentBipedKey ctrl
				if classof bipkey == BipedKey do case type of
				(
					#easeTo : bipkey.easeTo = val --0-50,0
					#easeFrom : bipkey.easeFrom = val --0-50,0
					#tension : bipkey.tension = val --0-50,25
					#continuity : bipkey.continuity = val --0-50,25
					#bias : bipkey.bias = val --0-50,25
				)
			)
		)
	)
	
	slider Bias_sdl "" pos:[16,40] width:128 height:25 range:[0,50,25] ticks:8
	spinner Bias_spn "Bias:        " pos:[16,16] width:96 height:16 range:[0,50,25]
	button Bias_btn1 "<" pos:[116,16] width:10 height:16
	button Bias_btn2 ">" pos:[126,16] width:10 height:16
	label lbl1 "稳入|-->|----------|-->|稳出" pos:[8,72] width:136 height:16
	fn B_setbias val = for i in getcurrentselection() do setBipKeysVal i.controller val type:#bias

	on Bias_sdl changed val do
	(
		Bias_spn.value = val
		B_setbias val
	)
	on Bias_spn changed val do
	(
		Bias_sdl.value = val
		B_setbias val
	)
	on Bias_btn1 pressed do
	(
		val = Bias_spn.value
		val = Bias_spn.value = Bias_sdl.value = case of
		(
			(val > 43.75) : 43.75
			(val > 37.5) : 37.5
			(val > 31.25) : 31.25
			(val > 25.0) : 25.0
			(val > 18.75) : 18.75
			(val > 12.5) : 12.5
			(val > 6.25) : 6.25
			(val > 0.0) : 0.0
			default : val
		)
		B_setbias val
	)
	on Bias_btn2 pressed do
	(
		val = Bias_spn.value
		val = Bias_spn.value = Bias_sdl.value = case of
		(
			(val < 6.25) : 6.25
			(val < 12.5) : 12.5
			(val < 18.75) : 18.75
			(val < 25.0) : 25.0
			(val < 31.25) : 31.25
			(val < 37.5) : 37.5
			(val < 43.75) : 43.75
			(val < 50.0) : 50.0
			default : val
		)
		B_setbias val
	)
)
createdialog unnamedRollout