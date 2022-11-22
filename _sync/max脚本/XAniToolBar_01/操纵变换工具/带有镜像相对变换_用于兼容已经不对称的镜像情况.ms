/* 
getUserProp $ "Mirrored_relative_transformation" --undefined  如果不为undefined,镜像轴和轴向以设置时为准,然后计算相对变换

setUserProp $ "Mirrored_relative_transformation" true --直接读写
getUserProp $ "Mirrored_relative_transformation"

setUserProp $ "Mirrored_relative_transformation" (Matrix3 1) --转换为文本
execute(getUserProp $ "Mirrored_relative_transformation")
*/

try(DestroyDialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:184 height:104
(
	radioButtons 'rdo_maxis' "对称轴" pos:[8,8] width:103 height:30 labels:#("x","y","z") align:#left
	radioButtons 'rdo_faxis' "反转轴" pos:[8,40] width:103 height:30 labels:#("x","y","z") align:#left
	button 'btn_select' "选择" pos:[8,74] width:28 height:24 align:#left
	button 'btn_do' "配对并设置" pos:[40,74] width:136 height:24 align:#left
	
	fn buildTransform \
	axis:"x"				--镜像轴
	flip:"x"				--翻转轴
	otm:(matrix3 1) 		--源物体的变换
	tm:(matrix3 1)			--要镜像的变换(可能是复制的变换而不是原物体的变换)
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
	
	on btn_do pressed do --设置时,自身和匹配对象都会设置
	(
		local sels = getCurrentSelection()
		clearSelection()
		
		local
		mAxis = #("x","y","z")[rdo_maxis.state],
		fAxis = #("x","y","z")[rdo_faxis.state],
		tags = for sel in sels where isValidNode(select sel;local tag = pickObject message:"选择对应的粘贴目标" rubberBand:sel.center) collect
		(
			local
			sTrans = sel.transform,
			tTrans = tag.transform
			print #(#(tTrans * Inverse (buildTransform axis:mAxis flip:fAxis tm:sTrans),buildTransform axis:mAxis flip:fAxis tm:sTrans,sTrans))
			setUserProp sel "Mirrored_relative_transformation" (sTrans * Inverse (buildTransform axis:mAxis flip:fAxis tm:tTrans))
			setUserProp tag "Mirrored_relative_transformation" (tTrans * Inverse (buildTransform axis:mAxis flip:fAxis tm:sTrans))
-- 			print #(#(sel,tag))
			tag
		)
		
		select (sels+tags)
		
	)
	on btn_select pressed do
	(
		select (for obj in objects where (getUserProp obj "Mirrored_relative_transformation") != undefined collect obj)
	)
)
CreateDialog unnamedRollout