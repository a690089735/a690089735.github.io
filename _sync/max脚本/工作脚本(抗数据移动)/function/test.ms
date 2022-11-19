try(destroydialog testRollout)catch()
rollout testRollout "Untitled" width:160 height:216
(
	Timer tmr1 "Timer" pos:[96,160] width:24 height:24 interval:1000 active:true
	on testRollout mouseMove pos do
	(
-- 		print (pos)
-- 		print (mouse.pos)
-- 		print (mouse.screenpos)
-- 		print get
-- 		print "_____"
	)
	on tmr1 tick  do
	(
		print tmr1.interval
-- 		GetDialogPos GhostRollout + GetDialogSize GhostRollout
-- 		cursor = dotnetclass "System.Windows.Forms.Cursor"
-- 		print cursor.position
-- 		showproperties cursor.position
-- 		print cursor.position.y
	)
)
createdialog testRollout