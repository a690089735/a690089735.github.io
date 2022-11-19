
obj = $

bbox = nodeGetBoundingBox obj (Matrix3 1) --¹¹½¨ºÐ
inc = (distance bbox[1] bbox[2])/64

-- intersects <node> <node>

rm = RayMeshGridIntersect()
rm.Initialize 64 --init. the voxel grid size to 64*64*64
rm.addNode obj--add the sphere to the grid
rm.buildGrid()

print "do"
rm.intersectSphere $Sphere001.transform.pos $Sphere001.radius
rm.getPerpDist 1
rm.getClosestHit()
rm.intersectSphere $Sphere002.transform.pos $Sphere002.radius
rm.getPerpDist 2
rm.intersectSphere $Sphere003.transform.pos $Sphere003.radius
rm.getPerpDist 3

print "end"
rm.free()
gc light:true
