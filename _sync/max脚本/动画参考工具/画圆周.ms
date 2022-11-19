radius = 100--segment = 12  100:120  pi * 20 / 12 = 5.23599  pi * 200 / 5.23599  = 
segment = (radius * 1.2) as integer
inc = 360.0/segment
mpos = mouse.pos
offset = [mpos[1],mpos[2],0]
points_list = for a in 0 to 360.1-inc by inc collect [sin a,cos a,0] * radius
	
for p in points_list do point pos:(gw.mapCPToWorld (gw.getPointOnCP (p+offset)))