unregisterRedrawViewsCallback GW_displayObjectNames
fn GW_displayObjectNames =
(
	gw.setTransform (matrix3 1)
	cam = $Camera001
	gw.htext [10,10,0] (cam.name+ ".fov:" + cam.fov as string) color:yellow
	gw.enlargeUpdateRect #whole 
)
registerRedrawViewsCallback GW_displayObjectNames
