fn buildTransform \
axis:"x"				--镜像轴
flip:"x"				--翻转轴
tm:(matrix3 1) 			--要镜像的变换
pivotTm:(matrix3 1) 	--镜像参考
mirrorPos:true
mirrorRot:true
=						/*By Mike Biddlecombe and Paul Neale.  I'm just ripping it off!*/ --翻转变换的原作者(们),我只是整理和扩展了一下,便于适配我自己的实际情况.
(
	fn FetchReflection a =
	(
		case a of
		(
			"x": [-1,1,1]  -- reflect in YZ plane
			"y": [1,-1,1]  --         in ZX plane
			"z": [1,1,-1]  --         in XY plane
			"xy": [-1,-1,1]
			"yz": [1,-1,-1]
			"xz": [-1,1,-1]
			"xyz": [-1,-1,-1]
		)
	)

	aReflection = scalematrix (FetchReflection axis)
	fReflection = scalematrix (FetchReflection flip)

	resultTrans = fReflection * (tm * (inverse pivotTm)) * aReflection * pivotTm
		
	if not mirrorPos do resultTrans.pos = tm.pos
	if not mirrorRot do (tm.pos = resultTrans.pos;resultTrans = tm)
	
	resultTrans
)


buildTransform axis:"x" flip:"x" tm:$.transform pivotTm:(matrix3 1) mirrorPos:false mirrorRot:true