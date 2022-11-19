fn preM = 
(
	box()
	print 1
)
fn postM = 
(
	print 2
)
fn finalM = 
(
	print 3
)
fn preO = 
(
	print 11
)
fn postO = 
(
	print 22
)
fn finalO = 
(
	box()
	print 33
)
fn changeAni =
(
	print 44
)
try(destroydialog testRoll)catch()
rollout testRoll "无标题" width:160 height:232
(
	local test = 999
	button 'btn1' "Button" pos:[8,16] width:88 height:32 align:#left
	on testRoll open do
	(
		print "open"
-- 		callbacks.removescripts id:#Test
		callbacks.addscript #filePreMerge "preM()" id:#Test
		callbacks.addscript #filePostMerge "postM()" id:#Test
		callbacks.addscript #filePostMergeProcess "finalM()" id:#Test --这个玩意没啥反应,成功或取消都是Post
		callbacks.addscript #filePreOpen "preO()" id:#Test
		callbacks.addscript #filePostOpen "postO()" id:#Test
		callbacks.addscript #filePostOpenProcess "finalO()" id:#Test
		
	)
	on testRoll close do
	(
		callbacks.removescripts id:#Test
	)
)

createdialog testRoll