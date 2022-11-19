try(DestroyDialog copySoftSelectionRollout)catch()
SoftValList = #()
rollout copySoftSelectionRollout "copySoftSelection" width:128 height:88
(
	button btn_copy "copy" pos:[8,8] width:112 height:32
	button btn_paste "Paste" pos:[8,48] width:112 height:32
	on btn_copy pressed  do
	(
		polyop.getNumVerts $
		SoftValList = for i = 1 to 5275 collect polyop.getVDataValue $ 1 i
	)
	on btn_paste pressed  do
		for i = 1 to SoftValList.count do polyop.setVDataValue $ 1 #(i) SoftValList[i]
)

CreateDialog copySoftSelectionRollout