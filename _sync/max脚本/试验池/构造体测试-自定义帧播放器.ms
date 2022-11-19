-- 按关键帧播放动画
-- 原理,收集关键帧,播放时空帧跳过.


-- theCusTimePlayer =  CusTimePlayer()

-- theCusTimePlayer.play()

-- theCusTimePlayer.stop()

try(destroydialog CusPlayerRollout)catch()

rollout CusPlayerRollout "Untitled" width:120 height:64
(
	struct CusTimePlayer
	(
		private
		thetimer = dotnetobject "timer",
		fps = 10,
		
		public
		frame = false,
		fn play fps:fps =
		(
			thetimer.Interval = 1000 / fps
			thetimer.Start()
-- 			print "play!"
		),
		fn stop =
		(
			thetimer.Stop()
-- 			print "stop!"
		),
		
		on create do 
		(
			fn playStep s e =
			try(
				if slidertime == animationrange.end then slidertime = animationrange.start else slidertime += 1
				redrawViews()
			)catch(s.Stop();print "Error!")
			dotnet.addEventHandler thetimer "Tick" playStep
-- 			print "ready!"
			
		)
	)
	
	local theCusTimePlayer =  CusTimePlayer()
	
	spinner spn1 "每秒帧数" pos:[8,8] width:104 height:16 range:[1,1000,4] type:#integer scale:1
	checkbutton btn1 "播放" pos:[56,32] width:55 height:24
	checkbox chk1 "关键帧" pos:[8,32] width:48 height:32

	on btn1 changed state do
	(
		if state then theCusTimePlayer.play fps:spn1.value else theCusTimePlayer.stop()
	)
)
createdialog CusPlayerRollout