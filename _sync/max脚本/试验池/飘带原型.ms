st = animationrange.start
et = animationrange.end

n = $

follow = 1
with animate on(
	for t = st+1 to et do
	(
		currentPos = at time t n.transform.pos
		curentVec = at time t ([1,0,0] * n.transform.rotation)
		beforePos = at time (t-1) n.transform.pos
		pathVec = normalize(beforePos - currentPos)
		ax = normalize(cross pathVec curentVec)
		al = acos(dot pathVec curentVec)
		rot = quat al ax
		rot = rot * n.transform.rotation
		at time t n[3][2].value = rot
		print (t as string + rot as string) 
	)
)