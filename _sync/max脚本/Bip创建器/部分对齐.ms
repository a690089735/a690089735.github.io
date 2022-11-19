-- fn 对齐肩膀 bip pos1 pos2 =
-- (
-- 	local
-- 	nd = biped.getNode bip #lArm link:1,
-- 	subnd = biped.getNode bip #lArm link:2,
-- 	oldTrans = orthogonalize nd.transform,
-- 	x = normalize (pos2 - pos1),
-- 	a = normalize (cross x oldTrans[1]),
-- 	q = quat (amax #(acos(dot x oldTrans[1]), 0)) a,
-- 	newTrans0 = rotate (Matrix3 oldTrans[1] oldTrans[2] oldTrans[3] [0,0,0]) q
-- 	bip.controller.figureMode = true
-- 		
-- 		
-- 	print newTrans0.rotationpart
-- 	biped.setTransform nd #pos pos1 false
-- 	biped.setTransform nd #rotation newTrans0.rotationpart false
-- 	print oldTrans
-- 	
-- 	local
-- 	dis = distance pos2 pos1,
-- 	oldScale = biped.getTransform nd #scale,
-- 	len = (nodeGetBoundingBox nd nd.transform)[2][1],
-- 	newScale = [(dis / len)*oldScale[1],oldScale[2],oldScale[3]]
-- 		
-- 	biped.setTransform nd #scale newScale false
-- )

fn 对齐肩膀 bip pos1 pos2 = --只能:动画模式设置方向,复制posture,到体型模式粘贴,然后设置缩放,
(
	local
	nd = biped.getNode bip #lArm link:1,
	oldTrans = orthogonalize nd.transform,
	x = normalize (pos2 - pos1),
	z = normalize (cross x oldTrans[2]),
	y = normalize (cross z x),
	
	newTrans = (Matrix3 x y z pos1)
	
-- 	print newTrans
	try(bip.controller.figureMode = true)catch((biped.getNode bip #turn).controller.figureMode = true)

	biped.setTransform nd #pos newTrans.translationpart false
	biped.setTransform nd #rotation newTrans.rotationpart false
	
	local
	dis = distance pos2 pos1,
	oldScale = biped.getTransform nd #scale,
	len = (nodeGetBoundingBox nd nd.transform)[2][1],
	newScale = [(dis / len)*oldScale[1],oldScale[2],oldScale[3]]
		
	biped.setTransform nd #scale newScale false
)

对齐肩膀 $ $Point008.pos $Point005.pos