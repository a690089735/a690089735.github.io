fn 选择重名 =
(
	clearSelection()
	local
	objs = objects as array,
	names = #(),
	sel = #()
	for id = 1 to objs.count do 
	(
		local n = objs[id].name
		if (fid = findItem names n) > 0 do (appendIfUnique sel objs[fid];append sel objs[id])
		append names n
	)
	select sel
)
选择重名()