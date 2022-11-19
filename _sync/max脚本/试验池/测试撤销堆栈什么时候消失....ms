rollout undoTestRollout "显示当前撤销级别" width:160 height:36
(
	Timer tmr1 "Timer" pos:[8,8] width:24 height:24 interval:10
	label lbl1 "Label" pos:[40,8] width:104 height:24
	
	local oldLevel = 0
	
	on undoTestRollout open  do
	(
		lbl1.caption = theHold.getCurrentUndoLevels()  as string
	)
	on tmr1 tick do
	(
		currentLevel = theHold.getCurrentUndoLevels()
		if currentLevel != oldLevel do lbl1.caption = currentLevel as string
	)
)
createdialog undoTestRollout