t

-- fn RotatePivotOnly obj rotation = 
-- (
-- 	local rotValInv=inverse (rotation as quat)
-- 	animate off in coordsys local obj.rotation*=RotValInv
-- 	obj.objectoffsetrot*=RotValInv
-- 	obj.objectoffsetpos*=RotValInv
-- )

-- fn copyTrans =
-- (
-- 	t = selection[1].transform
-- )
-- copyTrans()

fn pasteTransToPivot s:selection[1] =
(
	objtrans = translate (rotate (scale (matrix3 1) s.objectoffsetscale) s.objectoffsetrot) s.objectoffsetpos
	subtrans = objtrans * s.transform
	newobjtrans = subtrans * inverse t
	s.transform = t
	s.objectoffsetpos = newobjtrans.translationpart
	s.objectoffsetrot = newobjtrans.rotationpart
	s.objectoffsetscale = newobjtrans.scalepart
-- 	print subtrans
)
pasteTransToPivot()


fn pasteTransToPivot obj:selection[1] otm:(matrix3 1) =
(
	objtrans = translate (rotate (scale (matrix3 1) obj.objectoffsetscale) obj.objectoffsetrot) obj.objectoffsetpos
	subtrans = objtrans * obj.transform
	newobjtrans = subtrans * inverse otm
	obj.transform = t
	obj.objectoffsetpos = newobjtrans.translationpart
	obj.objectoffsetrot = newobjtrans.rotationpart
	obj.objectoffsetscale = newobjtrans.scalepart
)pasteTransToPivot()
