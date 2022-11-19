fn CreatePoint =
(
	fn pickVert obj =
	(
		local closestVert
		local closestPos 
		local theRay = mapscreenToWorldRay mouse.pos
		local theInt = intersectRay obj theRay
		print theInt
		if theInt != undefined do
		(
			local 
				pt = theInt.pos,
				msh = snapshotAsMesh obj,
				closestDist = distance pt (getVert msh 1)
			print #(pt,msh,closestDist)
			closestVert = 1;closestPos = closestDist
			for i = 2 to msh.numVerts do (
				local vPos = (getVert msh i)
				local dist = distance pt vPos
				if dist < closestDist do (closestDist = dist ; closestVert = i; closestPos = vPos)
			)
		)
		print #(closestVert, closestPos)
		#(closestVert, closestPos)
	)
	fn geometryFilt o = (SuperclassOf o == geometryClass)
	local obj = pickObject message:"提示:点击物体上需要创建跟随点的位置." count:1 pickFrozen:false filter:geometryFilt rubberBand:[0,0,0] rubberBandColor:red
	print obj
	if isValidNode obj do
	(
		print 1
		local res = pickVert obj
		local vert = res[1]
		local pos = res[2]
		
		if vert != undefined do
		with animate off(undo "create follow point" on(
			print 2
			p = point size:10 wirecolor:Blue axistripod:off centermarker:off cross:on Box:off name:(uniquename "FollowPoint") isSelected:on
			p.showTrajectory = on
			--仅能跟随到点,且不可自由位移,因为二级位移很难以顶点为参照.
			--X现在是最简单适用的,不要更改,忽略用户可能添加父级的可能性,添加父级可能出现的错误也会使用户减少意外操作.X使用变换脚本X要除去自身父级,但不能用变换脚本,因为需要控制位移.去除自身父级比想象的麻烦,因为要涉及二级位移.
			local sc = "if isValidNode R then meshop.getVert R.mesh I node:R else [0,0,0]" 
			
			ctrl = p.position.controller = position_script()
			ctrl.addNode "R" obj
			ctrl.addConstant "I" (vert as integer)
			ctrl.script = (sc as stringstream)
		))
	)
)
CreatePoint()