

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

-- global fposList = getfposList $LLian_Body_Mesh 

fn rig2Mesh_SplIK attMesh boneList rigname:"Test" side:1 = --side 0,1,2 主要用于寻找骨骼链的侧面(辅助注视用),一般不可能是0(X),用侧面会很难处理上方向,一般用前后,即1
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
	fposList = getfposList attMesh,
	count = boneList.count,
	old = boneList[1].parent,
	bDummy = #(),--用于约束到样条线,给rigBone作为注视
	aPoints = #(),
	rBones = #(),
	rSpl, --样条线
	rIK,rIKm, --IK和IK修改器
	pTransP = #()
	 --snapshotasmesh
	
	fn attach2Mesh attMesh fposList b n aPoints keep:true = --keep表示添加父层级 分别传递附着的网格,计算好的位置列表,用于参考位置的骨骼(因为ik点不刷新),和要被附着的点.
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
			p = point name:(n.name+"_AtP") centermarker:on axistripod:on cross:off Box:off size:5 wirecolor:green
			append aPoints p
			ctrl = p.pos.controller = (Attachment())
			key1 = AttachCtrl.addNewKey ctrl  0f
			key1.face = (index - 1)
			key1.coord = [0.5,0.0]
			p.parent = ctrl.node = attMesh
			p.rotation *=  p.transform.rotation * (inverse b.transform.rotation) --这个很有用欸.直接设置旋转和变换都不行,只有自增才可以
			
			n.parent = p
		)
	)
	
	--创建符合层次的虚拟体
	bDummy = for b in boneList collect
	(
		local
		d = dummy name:(b.name+"_bD") boxsize:[1,1,1] transform:b.transform
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
	rIKm = (Spline_IK_Control box:on helper_axistripod:off helper_centermarker:off helper_cross:off linkTypes:2 helper_size:10)
	addmodifier rSpl rIKm
	rIKm.createHelper boneList.count
	for h in rIKm.helper_list do h.wirecolor = yellow
-- 	稍后在此处lockTrans
	
	--绑定样条线到模型,可能仍需要 ]手动修改[
	for i = 2 to count do (rIKm.helper_list[i].name = rigname + "_H_" + i as string;attach2Mesh attMesh fposList boneList[i] rIKm.helper_list[i] aPoints)
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
		p = point name:(b.name+"_lk") transform:b.transform size:10 box:off xistripod:on centermarker:off cross:off wirecolor:blue
		p.parent = old
		old = p
		
		--创建注视
		ctrl = p[3][2].controller = LookAt_Constraint()
		ctrl.appendTarget d 50.0
		ctrl.lookat_vector_length = 0.0
		ctrl.upnode_world = off
		ctrl.pickUpNode = u
		ctrl.StoUP_axis = side
		ctrl.upnode_axis = side
		
		--创建骨骼承载
		x = point name:(b.name+"_pt") transform:b.transform size:10 box:on xistripod:off centermarker:off cross:off wirecolor:gray
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
rig2Mesh_SplIK $LLian_Body_Mesh (getcurrentselection()) rigname:"LLian_Board_R"