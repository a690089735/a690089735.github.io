ta = $.transform
a = $point001
b = $point002
c = $point003

(matrix3 [1,0,0] [0,1,0] [0,0,1] [31.7002,-14.1251,0])

-- bµÄxÖ¸Ïòa
relv = a.transform.pos - b.transform.pos

pos = [31.7002,-14.1251,0]
relv = a.transform.pos - [31.7002,-14.1251,0]
xo = normalize relv
tzo = normalize(cross a.transform.row2 xo)
yo = normalize(cross xo tzo)
zo = normalize(cross xo yo)

(matrix3 xo yo zo pos)

fn dotQuat q q_prev =
( 
   (q.w * q_prev.w + q.x * q_prev.x + q.y * q_prev.y + q.z * q_prev.z) < 0 
)
dotQuat a.rotation b.rotation

dot $[2].transform.row3 $[1].transform.row3
dot $[2].transform.row2 $[1].transform.row2
dot $[2].transform.row1 $[1].transform.row2