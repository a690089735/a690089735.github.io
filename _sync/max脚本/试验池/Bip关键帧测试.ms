k = (biped.getkey $.controller 1)

k.time
k.selected
k.tension
k.continuity
k.bias
k.easeTo
k.easeFrom
k.type
k.ikBlend
k.ikSpace
k.ikAnkleTension
k.ikJoinedPivot
k.ikPivotIndex
k.ikNumPivots
k.ikPivots

-- k.time : time
-- k.selected : boolean
-- k.tension : float
-- k.continuity : float
-- k.bias : float
-- k.easeTo : float
-- k.easeFrom : float
-- k.type : name
-- k.ikBlend : float
-- k.ikSpace : int
-- k.ikAnkleTension : float
-- k.ikJoinedPivot : boolean
-- k.ikPivotIndex : int
-- k.ikNumPivots : int
-- k.ikPivots : array, read-only

--滑动		自由		踩踏
-- 0f		0f		0f	--帧
-- false		false	false--选择
-- 25.0		25.0		25.0
-- 25.0		25.0		25.0
-- 25.0 		25.0		25.0
-- 0.0		0.0		0.0
-- 0.0		0.0		0.0
-- #body		#body	#body--只读
-- 1.0		0.0		1.0	--!不同!
-- 1			0		1	--!不同!
-- 0.0		0.0		0.0	--不用设置
-- false		false	true	--!不同!
-- 6			6		6	--不用设置
-- 17		17		17	--只读
-- 大家都缺少最后一个ikPivots --只读


























