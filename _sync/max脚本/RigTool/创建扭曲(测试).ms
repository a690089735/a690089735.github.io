--放到依赖的最下面
fn CreateTwistBySpline spl --样条线
rigPrt:undefined
bnPrt:undefined --骨骼的父物体(仅作为方便导出骨架的层级链接)
type:true --FKIK混合类型,true为直接混合,false为创建露出变换混合
end:undefined --FK旋转节点
end1:undefined --IK旋转节点
FKIKswitch:undefined --FKIK控制器(直接实例化原有的FKIK切换控制器)
FKIKswitch1:undefined --1-FKIK控制器(直接实例化原有的FKIK切换控制器)
size:10 --尺寸大小
seg:3 --段数
name:"test" --名称
sep:"_"
= --改成了仅适用于Myrig系统的方案(因为Myrig中创建的样条线transformX轴正对线条方向),type:true,表示直接链接,false表示连接到露出变换
(
	knots = #()
	psize = size*0.1
	Bonepos = #()
	dir = spl.dir
	
	num = seg+1
	for i = num to 1.0 by -1 do --创建点e
	(
		per = (i-1)/seg
		pos = pathInterp spl 1 per --线的顶点的贝塞尔手柄的缩放,会影响结果
-- 		print #(i,per,pos)
		p = point transform:spl.transform name:(name+"_knot"+(i as integer) as string) pos:pos wirecolor:gray size:psize centermarker:on axistripod:on cross:off Box:off
		p.parent = spl
		insertItem p knots 1
		insertItem pos Bonepos 1
		--绑定路径约束(列表控制器)
		Lctrl = p[3][1].controller = position_list ()
		ctrl = Lctrl[1].controller = Path_Constraint()
		ctrl.appendTarget spl 50.0
		deleteKeys ctrl.percent.keys #allKeys
		ctrl.percent = per*100
-- 		--ctrl.follow = true --可惜路径的上方向只能是世界Z(不能选自定义的上方向参照),所以无法解决反转问题,否则可以很简单的实现绑定了
-- 		--ctrl.allowUpsideDown = true--使用会有抖动,不可开启
		ctrl.loop = false
		Lctrl[2].controller = Position_XYZ()
		Lctrl.Active = 2
		--绑定过渡旋转
		Lctrl = p[3][2].controller = Rotation_List()
		Lctrl[2].controller = Euler_XYZ()
		Lctrl.Active = 2
		ctrl = Lctrl[1][1].controller = Float_List()
		ctrl[2].controller = bezier_float()
		ctrl.Active = 2
		ctrl.average = on --平均权重
		if i < num do 
			if type then
			(--实际是FKIK,但是为了匹配切换值,将二者倒置
				
-- 				print #(end,end[3][2][2])
-- 				paramWire.connect end[3][2][2][1] ctrl[1] (s2s end[3][2][2][1] str:("{}*"+ ((i-1)/(seg-1)) as string)) --IK
				--这里IK的末端也不能直接连接,需要在末端建立变换,反向读取LocalX绑定
				ET = ExposeTm transform:spl.transform name:(name+sep+"ET") useParent:off displayExposedVals:off parent:spl
				ET.exposeNode = spl
				ET.localReferenceNode = end
				paramWire.connect ET[4][2] ctrl[1] (s2s ET[4][2] str:("-{}*"+ ((i-1)/(seg-1)) as string)) --IK,因为从末端计算,所以数值为负
				paramWire.connect end1[3][2][2][1] ctrl[2] (s2s end1[3][2][2][1] str:("{}*"+ ((i-1)/(seg-1)) as string)) --FK
				ctrl.weights[1].controller = FKIKswitch
				ctrl.weights[2].controller = FKIKswitch1
			)
			else
			(
				
				ET = ExposeTm transform:spl.transform name:(name+sep+"ET") useParent:off displayExposedVals:off parent:spl
				ET.exposeNode = spl
				ET.localReferenceNode = RigPrt
				
				paramWire.connect ET[4][2] ctrl[1] (s2s ET[4][2] str:("{}*"+ ((i-1)/(seg-1)) as string))
-- 				
-- 				--建立露出变换(露出spl,相对于BnPrt)
-- 				--绑定到X轴
				paramWire.connect end1[3][2][2][1] ctrl[2] (s2s end1[3][2][2][1] str:("{}*"+ ((i-1)/(seg-1)) as string))
					
				ctrl.weights[1].controller = FKIKswitch
				ctrl.weights[2].controller = FKIKswitch1
			)
			
	)
	localpos = Bonepos[num] - Bonepos[seg];append Bonepos (localpos*(1+size/length(localpos))+Bonepos[seg])--尾端骨骼的pos
	
	for i = 1 to num do
	(
		bn = BoneSys.createBone Bonepos[i] Bonepos[i+1] dir
		bn.width = bn.height = size
		bn.parent = bnPrt --链接父子
		bnPrt = bn --更新父
		bn.name = (name+sep+i as string)
		--绑定位置约束和注视约束到knots
		ctrl = bn[3][1].controller = Position_Constraint()
		ctrl.appendTarget knots[i] 50.0
		ctrl = bn[3][2].controller = Orientation_Constraint()
		ctrl.appendTarget knots[i] 50.0
		if i < num do
		(
			ctrl = bn[3][2].controller = LookAt_Constraint()
			ctrl.appendTarget knots[i+1] 50.0
			ctrl.lookat_vector_length = 0.0
			ctrl.upnode_world = off
			ctrl.pickUpNode = knots[i]
			ctrl.target_axis = 0
			ctrl.upnode_axis = 2
			ctrl.StoUP_axis = 2
		)
	)
)
-- CreateTwistBySpline $
