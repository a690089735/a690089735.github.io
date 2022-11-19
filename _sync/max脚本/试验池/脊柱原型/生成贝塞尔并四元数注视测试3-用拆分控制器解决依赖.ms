--贝塞尔测试

-- delete helpers

--公式 
--B(t) = (1-t)^3*P0 + 3(1-t)^2t*P1 + 3(1-t)*t^2*P2 + t^3 * P3 , 0 <= t <= 1

-- P0 = $P0.pos; P1 = $P1.pos; P2 = $P2.pos; P3 = $P3.pos


CS = $Bone001; CE= $Bone002; prt = $Dummy001
offset = (distance CS.pos CE.pos)/2

P0 = CS.pos; P1 = [offset,0,0] * CS.transform; P2 = [-offset,0,0] * CE.transform; P3 = CE.pos

plist = for t = 0 to 1 by 0.1 collect
(
	rt = 1-t
	p = point pos:(rt^3*P0 + 3*rt^2*t*P1 + 3*rt*t^2*P2 + t^3*P3) parent:CS
	ctrl = p[3][1].controller = position_script()
	ctrl.AddNode "CS" CS; ctrl.AddNode "CE" CE
	ctrl.script = "(" + rt as string + "^3*CS.pos + 3*"+rt as string+"^2*"+t as string+"*(["+offset as string+",0,0]*CS.transform) + 3*"+rt as string+"*"+t as string+"^2*([-"+offset as string+",0,0]*CE.transform) + "+t as string+"^3*CE.pos) * inverse CS.transform"
	p
)

space = plist[1] --第一个比较麻烦,先不管了.
for i = 2 to plist.count-1 do --最后一个也先不管
(
	p = plist[i]
	ctrl = p[3][2].controller = rotation_script()
	ctrl.AddNode "L" plist[i+1]; ctrl.AddNode "Self" p; ctrl.AddNode "P" plist[i-1]
	
	ctrl.script = 
	"vec = L[3][1].value - Self[3][1].value
dir = L[3][1].value - P[3][1].value
dir = [1,0,0]
axis = normalize (cross vec dir)
angle = acos (dot (normalize vec) (normalize dir))
quat angle axis"
)
