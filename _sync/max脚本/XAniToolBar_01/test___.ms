::XAniTools_UI
(
	try(cui.unRegisterDialogBar ::XAniTools_UI)catch()
	try(destroydialog ::XAniTools_UI)catch()

	XAniTools_UI=
	rollout XAniTools_UI "XAniToolStrip" width:1920 height:100
	(
		include "Depends.ms"
		include "Other.ms"
	)
)