delete objects

A = Box lengthsegs:1 widthsegs:1 heightsegs:1 length:30 width:30 height:80 mapcoords:on pos:[-61.7472,85.5569,1]
B = Sphere radius:41.2374 smooth:on segs:32 chop:0 slice:off sliceFrom:0 sliceTo:0 mapcoords:on recenter:off pos:[105.458,-33.8221,1]

fn GetVectorsAngle v1 v2 = --求两三维点角度
(
theAngle = acos(dot (normalize v1) (normalize v2))
)

v1 = A.transform.pos
v2 = B.transform.pos

vAngle  = GetVectorsAngle v1 v2

axis = cross v1 v2

about A rotate A vAngle axis

