--根据摄影机创建平面

fn create_Camera_Plane cam =
if superclassof cam == camera do(
	dst=case classof cam of
	(
		Targetcamera : try(distance cam cam.target)catch(cam.baseobject.targetDistance)
-- 		Freecamera : cam.baseobject.targetDistance
		default : cam.baseobject.targetDistance
	)
	vfov = 2.0*atan(tan(cam.fov/2.0)/((renderWidth*renderPixelAspect as float)/renderHeight)) 
-- 	w = dst*tan(cam.fov/2)
-- 	l = dst*tan(vfov/2)
	pw = (dst*tan(cam.fov/2))*2
	pl = (dst*tan(vfov/2))*2
	
	pnl = Plane name:(cam.name+"_ImagePlane") transform:cam.transform width:pw length:pl parent:cam ignoreExtents:true isFrozen:false showFrozenInGray:false wirecolor:(color 0 0 0) --material:IP_Material--在透视摄影机时,可以试着将平面大小绑定到与摄影机的距离

	in coordsys cam (pnl.pos = [0, 0, -dst])
)
create_Camera_Plane $