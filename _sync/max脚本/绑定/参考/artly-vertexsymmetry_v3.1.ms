
(--h
	global NumVertCoord = #()	
	global CenterVertexNum = #()
	global LeftVertexNum = #()
	global RightVertexNum = #()	
	
	global MirrorVertexLeft = #()
	global MirrorVertexRight = #()
	
	
	--global mirrorSel = #()
	
	
	local CenterMass = 0
	local AllVert = 0
	local AllVertSymmetryHystory = 0
	local SourceObj
	local GoMorph = 0
	local FirstStart = 0
	-----------------------
	--setting
	local DistanceVert = 0.001
	
	----------------------------------------------------------------------------------
	
	function GetVertObject Obj =
	(--1
		NumVertCoord = #()
		TimeMassive = #()
		AllVert = Obj.vertices.count
		format "All vertex = %\n" AllVert
		GetVert = polyop.getVert
		for n = 1 to AllVert do
		(
			VertPose = GetVert obj n
			append NumVertCoord VertPose
			append TimeMassive VertPose.x
		)
		if FirstStart == 0 then
		(
			a = amin TimeMassive
			b = amax TimeMassive
			c = ((b-a) / 2)
			CenterMass = (b-c)
			format "Center OBJ= %\n" CenterMass
			FirstStart = 1
		)
		else
		(
			CenterMass = Obj.pos.x
			format "Center OBJ= %\n" CenterMass
		)
	
	)--1

--=======================================
rollout RAbout "About..."
(
	label blubber1 "Vertex Symmetry v.3.1"
	label blubber2 "Created by: ArtLy"
	label blubber5 "Send feedback to"
	label blubber6 "alexmoney2000@yandex.ru"
)
--========================================
rollout RPosition "Position" width:160 height:190
(
	pickbutton SelectOBJB ">> Pick Target Object <<" pos:[0,0] width:161 height:32 toolTip:"Pick Target Object as (Editable Poly)"
	button FindSymB "Find SymVertex" pos:[0,32] width:161 height:32 toolTip:"Use button for get symmetry vertex"
	button MorphToRight "Morph -->" pos:[0,64] width:161 height:32 toolTip:"Morph Obect left to right side"
	button MorphToLeft "<-- Morph" pos:[0,96] width:161 height:32 toolTip:"Morph Obect left to right side"
	
	on SelectOBJB picked val do
	(--5
		SelectOBJB.text = val.name
		SourceObj = val
		subobjectlevel = 1
		GetVertObject SourceObj
	)--5
	on FindSymB pressed do
	(--3	
		
		
		if MirrorVertexLeft.count > 0 then
		(
			CenterVertexNum = #()
			LeftVertexNum = #()
			RightVertexNum = #()	
			MirrorVertexLeft = #()
			MirrorVertexRight = #()	
		)
		
		AllVertSymmetryHystory = AllVert
		
		--Razdelenie na levie i pravie vershini
		for n = 1 to AllVert do
		(
			CenterX = (NumVertCoord[n].x-CenterMass) as integer
			if (CenterX == 0) then
			(
				--format "Num % = Center\n" n
				append CenterVertexNum n
			)
			else
			(
				if (((NumVertCoord[n].x-CenterMass) as float) < -DistanceVert) then
				(
					--format "NumVertCoord[n].x - CenterMass: % - % = %\n" NumVertCoord[n].x CenterMass ((NumVertCoord[n].x-CenterMass) as float)
					--format "NumVert % in (Left)Coord %\n" n NumVertCoord[n]	
					append LeftVertexNum n
				)
				else
				(
					--format "NumVert % in (Right)Coord %\n" n NumVertCoord[n]	
					append RightVertexNum n
				)
			)
		)
		--Prostaya proverka na ravenstro massivov
		if LeftVertexNum.count != RightVertexNum.count then
		(
			MessageBox "左右存在数量差异 - 例外" \
			title:"错误!"
		)
		--Poisk simmetrii
		ErrorVertex = #{}
		Nm = 0
		format "Count: %\n" LeftVertexNum.count
		for n = 1 to LeftVertexNum.count do
		(
			
			--preobrazuem v matricu coordinat
			Pos = NumVertCoord[LeftVertexNum[n]]
			XYZVert  = [Pos.x, Pos.y, Pos.z]
			XYZVert.x = -(XYZVert.x - CenterMass)+CenterMass --izmenit x coordinat na protivopolozhnuyu
			
			Nm = 0
			for v = 1 to RightVertexNum.count do
			(
				-----X
				x1 = NumVertCoord[RightVertexNum[v]].x
				x2 = XYZVert.x
				if ((x1+DistanceVert) >= x2) And ((x1-DistanceVert) <= x2) then	
				(
					Nm = Nm + 1
				)
				-----Y
				y1 = NumVertCoord[RightVertexNum[v]].y
				y2 = XYZVert.y
				if ((y1+DistanceVert) >= y2) And ((y1-DistanceVert) <= y2) then	
				(
					Nm = Nm + 1
				)	
				-----Z
				z1 = NumVertCoord[RightVertexNum[v]].z
				z2 = XYZVert.z
				if ((z1+DistanceVert) >= z2) And ((z1-DistanceVert) <= z2) then	
				(
					Nm = Nm + 1
				)		
				-----END
				if Nm == 3 then
				(
					append MirrorVertexLeft LeftVertexNum[n]
					append MirrorVertexRight RightVertexNum[v]
					--format "100 procentov NumLeft % = NumRight %\n" NumVertCoord[LeftVertexNum[n]] NumVertCoord[RightVertexNum[v]]
					format "对称顶点 左边/右边 % / %\n" LeftVertexNum[n] RightVertexNum[v]
					Exit
				)
				else
				(
					Nm = 0
				)
			)
			if Nm != 3 then
			(
				append ErrorVertex LeftVertexNum[n]
			)
		)	
		--Proverka oshbok po vershinam
		GoMorph = 1
		if ErrorVertex.count > 0 then
		(
			GoMorph = 0
			polyop.setvertselection SourceObj ErrorVertex
			forceCompleteRedraw()
			MessageBox "选择不对称顶点. 需要对正位置!" \
			title:"错误!"		
		)
		else
		(
			MessageBox "完成!所有顶点记录在内存中 - 可以变形了" \
			title:"成功"
		)
	)--3
	on MorphToRight pressed do
	(--8
		if AllVertSymmetryHystory != AllVert then
		(
			MessageBox "Vertex count error - need retarget object!" \
			title:"ERROR!"			
		)
		else
		(
			for i = 1 to MirrorVertexLeft.count do
			(
				GetVertexLeft = polyop.getVert SourceObj MirrorVertexLeft[i]
				VertexLeftCopy = copy (GetVertexLeft)
				MirrorPos = VertexLeftCopy
				MirrorPos = [-(VertexLeftCopy.x - CenterMass)+CenterMass, MirrorPos.y, MirrorPos.z]
				--Set
				polyOp.setVert SourceObj MirrorVertexRight[i] MirrorPos
			)
		)
	)--8
	on MorphToLeft pressed do
	(--8
		if AllVertSymmetryHystory != AllVert then
		(
			MessageBox "Vertex count error - need retarget object!" \
			title:"ERROR!"			
		)
		else
		(
			for i = 1 to MirrorVertexRight.count do
			(
				GetVertexRight = polyop.getVert SourceObj MirrorVertexRight[i]
				VertexRightCopy = copy (GetVertexRight)
				MirrorPos = VertexRightCopy
				MirrorPos = [-(VertexRightCopy.x - CenterMass)+CenterMass, MirrorPos.y, MirrorPos.z]
				--Set
				polyOp.setVert SourceObj MirrorVertexLeft[i] MirrorPos
			)			
			
		)
	)--8
)

if win != undefined then closeRolloutFloater win
win = newRolloutFloater "VertSym v3.1" 174 200
addRollOut RPosition win 
addRollOut RAbout win rolledUp: TRUE
)--h