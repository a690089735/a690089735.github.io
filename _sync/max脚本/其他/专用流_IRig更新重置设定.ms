--更新了$.m3a自定义变量,重置了冻结变换的控制器.
fn UpdataRecord obj = 
(
	try(obj.m3a = (obj.transform * inverse obj.prnt.node.transform))catch()
	obj.pos.controller = bezier_position ();obj.pos.controller = position_list ();obj.pos.controller.Available.controller = Position_XYZ ();obj.pos.controller.setActive 2
	obj.pos.controller.setname 1 "Zero";obj.pos.controller.setname 2 "XYZ"
	obj.rotation.controller = Euler_XYZ ();obj.rotation.controller = rotation_list ();obj.rotation.controller.Available.controller = Euler_XYZ ();obj.rotation.controller.setActive 2
	obj.rotation.controller.setname 1 "Zero";obj.rotation.controller.setname 2 "XYZ"
)

for s in selection as array do UpdataRecord s