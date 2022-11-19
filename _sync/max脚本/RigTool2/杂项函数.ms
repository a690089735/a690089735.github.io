--冻结0变换
fn setZeroTrans objs clean:true first:true pos:true rot:true state:(getCommandPanelTaskMode()) = --参数为:1物体或物体数组 2绝对冻结,不保留原控制器 3是否第一次运行 4面板状态 3和4用于递归,都不需要指定
(
	if first do setCommandPanelTaskMode #create
	if classof objs == array then
		for obj in objs do setZeroTrans obj clean:clean first:false state:state
	else 
	(
		if isValidNode objs do (
			if pos do
			(
				if clean do (objs.pos.controller = position_script (); objs.pos.controller = bezier_position ())
				local ctrl = objs.pos.controller = position_list ()
				ctrl.Available.controller =  Position_XYZ ()
				ctrl.Active = 2
				ctrl.setName 1 "Zero Position"
				ctrl.setName 2 "XYZ Position"
			)
			if rot do
			(
				if clean do (objs.rotation.controller = rotation_script (); objs.rotation.controller = tcb_rotation ())
				local ctrl = objs.rotation.controller = rotation_list ()
				ctrl.Available.controller = Euler_XYZ ()
				ctrl.Active = 2
				ctrl.setName 1 "Zero Rotation"
				ctrl.setName 2 "XYZ Rotation"
			)
		)
	)
	if first do setCommandPanelTaskMode state
)

--创建图形
-- fn createShape data transform:(matrix3 1) size:1 parent:undefined name:(uniqueName "Shape") wirecolor:(random black white) selected:false = --已经过简化,现在的尺寸是实际尺寸,应当以1为单位了(半径).比如box[2,2,2]
-- (
	--print #(11,data)
-- 	local
-- 	s = line transform:transform name:name wirecolor:wirecolor
-- 	s.parent = parent
-- 	for i = 1 to data.count do
-- 	(
-- 		spl = addNewSpline s
-- 		for j = 1 to data[i].count do
-- 			(x = data[i][j];if classof x == BooleanClass then if x do (close s spl) else (addKnot s spl #bezierCorner #curve (x[1]*size*transform) (x[2]*size*transform) (x[3]*size*transform)))
-- 	)
-- 	updateShape s
-- 	if selected do select s
-- 	return s
-- )

--露出子动画控制器的表达式
-- fn expSubAni subAniObj = substituteString subAniObj.name " " "_"
fn expSubAni subAniObj expStr = substituteString expStr "{]" (substituteString subAniObj.name " " "_")

fn p2pline transform:(Matrix3 1) pos: pos1:[0,0,0] pos2:[0,0,1] parent: wirecolor:(random white black) name:(uniqueName "Shape") boneenable:false boneFreezeLength:true =
(
	local
	s = line transform:transform pos:(if pos == unsupplied then transform.pos else pos) name:name wirecolor:wirecolor parent:parent,
	l = addNewSpline s
	addKnot s l #corner #line pos1
	addKnot s l #corner #line pos2
	updateShape s
	s.boneenable = boneenable
	s.boneFreezeLength = boneFreezeLength
	s
)