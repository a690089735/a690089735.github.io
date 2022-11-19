fn Get_Trans_Times obj = --新版的递归可以支持node,node[3],甚至array和collection或ObjectSet等,但是处于效率考虑,必须在递归之外排序和整理列表. 现在仅获取变换帧来加速获取帧列表,以及跳过无用的可见性帧之类的帧
(
	local result = #()
	case of
	(
		(isValidObj obj):(
			local
			keys = obj.keys
			result += if keys != undefined then for k in keys collect k.time else #()
			for i = 1 to obj.numSubs do 
			(
				local
				SubAni = getSubAnim obj i,
				keys = SubAni.keys
				result += if keys != undefined then for k in keys collect k.time else #()
				if SubAni.numSubs > 0 do result += Get_Trans_Times SubAni
			)
		)
		(isValidNode obj): result += Get_Trans_Times obj[3]
		default : for o in obj do result += Get_Trans_Times o[3]
	)
	result
)
sort(makeUniqueArray(Get_Trans_Times $)) --必须在之外整理,这样可以仅整理一次