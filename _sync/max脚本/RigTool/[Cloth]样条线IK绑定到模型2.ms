--手动让Y轴朝外,即Z轴朝侧,则参数为side:2
--手动让Z轴朝外,即Y轴朝侧,则参数为side:1
-- fn rotate2 obj rot_q = --可用于注视约束的旋转功能,当.set_orientation 为真,且.relative为假时.可以交互式的设置旋转偏移.
-- (
-- 	rotate obj (quatToEuler2(rot_q - obj.transform.rotation)) --注意,$.rotation和$.transform.rotation的结果并不一定一样.
-- )

/*
fn getfposList attMesh =(
	local --数据变量
	_tempvID, --总觉的把变量放到更高的级别,会减少内存存取时间.
	_pTrans = attMesh.objecttransform,
	vposList = for i = 1 to attMesh.mesh.numverts collect (getVert attMesh.mesh i)*_pTrans,
	fposList = for i = 1 to attMesh.mesh.numFaces collect --收集到的面位置列表
	(
		_tempvID = getFace attMesh.mesh i--获取顶点位置列表(按顶点序号排序)
		(vposList[_tempvID[1]]+vposList[_tempvID[2]]+vposList[_tempvID[3]])/3
	)
)

global fposList = getfposList $adou_body_RigMesh --因为这一步很慢,所以拿到外边来
*/

fn rig2Mesh_SplIK attMesh boneList uplist rigname:"Test" side:1 = --side 0,1,2 主要用于寻找骨骼链的侧面(辅助注视用),一般不可能是0(X),用侧面会很难处理上方向,一般用前后,即1
undo "rig to mesh" on(
	
-- 	mapped lockTrans obj p:false r:false s:false = 
-- 	(
-- 		local flag = #{}
-- 		if p do flag += #{1..3}
-- 		if r do flag += #{4..6}
-- 		if s do flag += #{7..9}
-- 		setTransformLockFlags obj flag
-- 	)
-- 	print attmesh

		
	local --绑定变量
-- 	fposList = getfposList attMesh,
	count = boneList.count,
	old = boneList[1].parent,
	bDummy = #(),--用于约束到样条线,给rigBone作为注视
	aPoints = #(),
	rBones = #(),
	rSpl, --样条线
	rIK,rIKm, --IK和IK修改器
	pTransP = #()
	 --snapshotasmesh
	local
	size = 0.5
	
	/*
	fn attach2Mesh attMesh fposList b n aPoints keep:true size:size = --keep表示添加父层级 分别传递附着的网格,计算好的位置列表,用于参考位置的骨骼(因为ik点不刷新),和要被附着的点.
	(
-- 	--获得最近的面序号
-- 		print attMesh
		local
		index = 1,
		_tempdis = distance b.transform.pos fposList[1]
		for i = 2 to fposList.count do 
		(
			local _cdis = distance b.transform.pos fposList[i]
			if _cdis < _tempdis do (index = i;_tempdis = _cdis)
		)
		--距离集合
-- 		print index
-- 		print #(n,n.transform.pos) #nomap
-- 		print #(distance b.transform.pos fposList[19],distance b.transform.pos fposList[46]) #nomap
		if keep then
		(
			p = point name:(n.name+"_AtP") centermarker:on axistripod:on cross:off Box:off size:(size*2) wirecolor:green
			append aPoints p
			ctrl = p.pos.controller = (Attachment())
			key1 = AttachCtrl.addNewKey ctrl -1f
			key1.face = (index - 1)
			key1.coord = [0.5,0.0]
			p.parent = ctrl.node = attMesh
			p.rotation *=  p.transform.rotation * (inverse b.transform.rotation) --这个很有用欸.直接设置旋转和变换都不行,只有自增才可以
-- 			rotate2 p b.transform.rotation
			n.parent = p
		)
	)
	*/
	fn attach2Mesh attMesh b n aPoints align:true keep:true t:-1f size:size = --n附着到m,createPrt表示使用父物体附着,p2m:是否将附着物体链接给m物体
	(
		--准备数据
		local
		tm = snapshot attMesh, --对于一些物体,面起始索引可能有问题,转换一下可以兼容(比如球体和box的起始索引不同,具体原因不明,但是确实发生了这些问题.)
		IPM = MeshProjIntersect()
		IPM.SetNode tm
		IPM.Build()
		
		IPM.ClosestFace b.pos
		
		--获取数据
		local
		pos = IPM.GetHitPos(), --获取最近的坐标
		dis = IPM.GetHitDist(), --获取距离
		face = IPM.GetHitFace(), --获取面id,从0开始
		coor = IPM.GetHitBary() --获取重心坐标,取其1和2即可
		
		--准备控制器
		local ctrl = Attachment()
		ctrl.node = attMesh
		ctrl.align = align
		local key1 = AttachCtrl.addNewKey ctrl t
		key1.face = face
		key1.coord = [coor[1],coor[2]]
		
		local
		rq = n.transform.rotation
		
		if keep then 
		(
			local p = point name:(n.name+"_Atp") pos:pos centermarker:on axistripod:off cross:off Box:off size:(dis*0.5) wirecolor:green
			append aPoints p
-- 			p.parent = if p2m then m else n.parent
			p[3][1].controller = ctrl
-- 				if align do if isvalidnode p.parent then p.rotation = p.parent.rotation else p.rotation = (quat 0 0 0 1)--纠正旋转,不好用
			p.rotation *=  p.transform.rotation * (inverse b.transform.rotation)
			n.parent = p
		)
		rotate2 n rq --纠正旋转
		--释放内存
		IPM.free()
		delete tm
	)
	
	--创建符合层次的虚拟体
	bDummy = for b in boneList collect
	(
		local
		d = dummy name:(b.name+"_bD") boxsize:[size,size,size] transform:b.transform
		d.parent = old
		old = d
		--锁定这些点的变换操作.
		d
	)
	
	--创建样条线,样条线IK
	rSpl = line wirecolor:red name:(rigname + "_Spl")
	addnewSpline rSpl
	for b in boneList do
	(
		addKnot rSpl 1 #smooth #curve b.transform.pos
	)
	updateShape rSpl
	
	--为刚才的点和样条线创建SplineIK
	rIK = (ikSys.ikChain bDummy[1] bDummy[bDummy.count] "SplineIKSolver")
	rIK.name = (rigname + "_IK")
	IKC = rIK[3].controller
	IKC.pickShape = rSpl
	IKC.upnode = boneList[1].parent
	IKC.useUpnode = on
		
	--设置样条线绑定样式
	rIKm = (Spline_IK_Control box:on helper_axistripod:off helper_centermarker:off helper_cross:off linkTypes:2 helper_size:(size*6))
	addmodifier rSpl rIKm
	rIKm.createHelper boneList.count
	for h in rIKm.helper_list do h.wirecolor = yellow
-- 	稍后在此处lockTrans
	
	--绑定样条线到模型,可能仍需要 ]手动修改[ --我已经忘了手动修改什么了...
-- 	for i = 2 to count do (rIKm.helper_list[i].name = rigname + "_H_" + i as string;attach2Mesh attMesh fposList boneList[i] rIKm.helper_list[i] aPoints)
	for i = 2 to count do (rIKm.helper_list[i].name = rigname + "_H_" + i as string;
		attach2Mesh attMesh boneList[i] rIKm.helper_list[i] aPoints)
	rIKm.helper_list[1].name = rigname + "_H_1"
	rIKm.helper_list[1].parent = boneList[1].parent
	
		
	--为绑定的侧转提供注视约束参考
	--此时可以直接使用刚才对齐好的附着点
	
	--创建旋转骨骼,注视到各个虚拟体,说是骨骼,其实也就是一堆有层级关系的点.
	old = boneList[1].parent
	rBones = for i = 1 to count-1 collect
	(
		local 
		b = boneList[i],
		d = bDummy[i+1],
		u = aPoints[i],
		p = point name:(b.name+"_lk") transform:b.transform size:(size*3.5) box:off xistripod:on centermarker:off cross:off wirecolor:blue
		p.parent = old
		old = p
		
		--创建注视
		ctrl = p[3][2].controller = LookAt_Constraint()
		ctrl.appendTarget d 50.0
		ctrl.lookat_vector_length = 0.0
		ctrl.upnode_world = off
-- 		ctrl.pickUpNode = u
		ctrl.pickUpNode = uplist[i]
		ctrl.StoUP_axis = side
		ctrl.upnode_axis = side
		--偏移注视
		
		--创建骨骼承载
		x = point name:(b.name+"_pt") transform:b.transform size:(size*5) box:on xistripod:off centermarker:off cross:off wirecolor:gray
		x.parent = b.parent
		append pTransP x
-- 		ctrl = x[3][1].controller = Position_Constraint()
-- 		ctrl.appendTarget p 50.0
		
		ctrl = x[3][2].controller = Orientation_Constraint()
		ctrl.appendTarget p 50.0
		ctrl.RELATIVE = on
		
		b.parent = x
	)
	select (bDummy + aPoints + rIKm.helper_list + pTransP + #(rIK,rSpl))
	ok
)

sel = getcurrentselection()
bone_list = for i = 1 to (sel.count + 1)/2 collect sel[i]
uplist = for i = (sel.count + 1)/2+1 to sel.count collect sel[i]

rig2Mesh_SplIK $adou_body_RigMesh bone_list uplist rigname:"adou_Cloth1_R_1"