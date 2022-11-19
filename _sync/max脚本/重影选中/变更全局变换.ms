
fn ToFreeCOM obj = 
(
	local att = attributes AniCOM
	(
		parameters AniCOM
		(
			CtrlrCOM type:#maxobject
			PrtCOM type:#node
		)
	)
	custAttributes.add obj att baseobject:false --添加到节点本身
	obj.CtrlrCOM = obj.transform.controller
	obj.transform.controller = transform_script ();obj.transform.controller = prs()
	obj.PrtCOM = obj.parent
	obj.parent = undefined
	ok
)
ToFreeCOM $
fn ToOldCOM obj =
(
	isproperty obj #AniCOM
	obj.transform.controller = obj.CtrlrCOM
	obj.parent = obj.PrtCOM
	for a in (custAttributes.getDefs obj baseobject:false) where a.name == #AniCOM do custAttributes.delete obj a baseobject:false
)
ToOldCOM $

-- (custAttributes.getDefs $ baseobject:false)[1].name == #AniCOM