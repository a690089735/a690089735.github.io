filein "杂项函数.ms"
filein "创建控制图形2.ms"
filein "颜色定义.ms"
clearlistener()

--经验
--现在path约束可以直接用位置约束,原因1.因为图形更新问题,不打算用skin.2.当样条线有父物体时,样条线IK会导致曲线的贝塞尔手柄多倍偏移,换成直线的话,效果和位置约束效果一样.3位置约束有更少的物体和控制器.(当然,极端情况也可以用之前的位置贝塞尔控制).4.做到这种级别的细节,除非有6个及以上点,否则还是手调更方便(比如波浪抖动).
--直接用位置约束效果很差,没有两端的缓动,会让附着在链上的附件骨骼跟随过大.后面手动采用了用四个point3_script的贝塞尔控制(效率不是最高,贵在稳定),两个手柄点根据距离的1/3来取偏移
--acos需要加限制,经常会因为浮点数误差导致问题.
--

fn rig_spine bonelist rigname:"tst" partname:"_spn" = --10根,包括末端
(
	local
	--基本结构
	fullname = rigname + partname,
	fulllength = distance bonelist[1] bonelist[9],
	hsize1 = fulllength * 0.05,
	hsize2 = fulllength * 0.15,
	hsize3 = fulllength * 0.3,
	hsize4 = fulllength * 0.5,
	hsize5 = fulllength * 0.6,
	sk_hub = bonelist[1],
	sk_spine1 = bonelist[2],
	sk_spine2 = bonelist[3],
	sk_chest = bonelist[4],
	sk_neck1 = bonelist[5],
	sk_neck2 = bonelist[6],
	sk_neck3 = bonelist[7],
	sk_neck4 = bonelist[8],
	sk_head = bonelist[9],
	sk_tip = bonelist[10],
	t1 = bonelist[1].transform,t2 = bonelist[2].transform,t3 = bonelist[3].transform,t4 = bonelist[4].transform,t5 = bonelist[5].transform,t6 = bonelist[6].transform,t7 = bonelist[7].transform,t8 = bonelist[8].transform,t9 = bonelist[9].transform,t10 = bonelist[10].transform,
	prt_ctrl = ctrl_shape type:"MedianHexagon" pos1:t1.pos pos2:t5.pos dir:t1[2] transform:t1 pos:((t1.pos+t5.pos)*.5) size:hsize5 parent:unsupplied name:(fullname+"_prt_Ctrl") wirecolor:red,
	
	hub_prt_ctrl = ctrl_shape type:"CenterCircle" pos1:t1.pos pos2:t2.pos dir:t1[2] transform:t1 pos:t1.pos size:hsize4 parent:prt_ctrl name:(fullname+"_hub_prt_ctrl") wirecolor:green,
	spine_prt_ctrl = ctrl_shape type:"CenterCircle" pos1:t2.pos pos2:t4.pos dir:t2[2] transform:t2 pos:t2.pos size:hsize4 parent:hub_prt_ctrl name:(fullname+"_spine_prt_ctrl") wirecolor:green,
	chest_prt_ctrl = ctrl_shape type:"CenterCircle" pos1:t4.pos pos2:t5.pos dir:t4[2] transform:t4 pos:t4.pos size:hsize4 parent:spine_prt_ctrl name:(fullname+"_chest_prt_ctrl") wirecolor:green,
	neck_prt_ctrl = ctrl_shape type:"CenterCircle" pos1:t5.pos pos2:t9.pos dir:t5[2] transform:t5 pos:t5.pos size:hsize4 parent:chest_prt_ctrl name:(fullname+"_neck_prt_ctrl") wirecolor:green,
	head_prt_ctrl = ctrl_shape type:"CenterCircle"  pos1:t9.pos pos2:t10.pos dir:t9[2] transform:t9 pos:t9.pos size:hsize4 parent:neck_prt_ctrl name:(fullname+"_head_prt_ctrl") wirecolor:green,
	
	hub_ctrl = ctrl_shape type:"HalfCylinder" pos1:t1.pos pos2:t2.pos dir:t1[2] transform:t1 pos:((t1.pos+t2.pos)*.5) size:hsize4 parent:hub_prt_ctrl name:(fullname+"_hub_Ctrl") wirecolor:yellow,
	chest_ctrl = ctrl_shape type:"HalfCylinder" pos1:t4.pos pos2:t5.pos dir:t1[2] transform:t4 pos:((t4.pos+t5.pos)*.5) size:hsize4 parent:chest_prt_ctrl name:(fullname+"_chest_Ctrl") wirecolor:yellow,
	head_ctrl = ctrl_shape type:"HalfCylinder" pos1:t9.pos pos2:t10.pos dir:t9[2] transform:t9 pos:((t9.pos+t10.pos)*.5) size:hsize4 parent:head_prt_ctrl name:(fullname+"_head_Ctrl") wirecolor:yellow,
	
	knot_spine = #(point name:(fullname+"_kn_spine1") size:hsize3 transform:t2 parent:hub_ctrl wirecolor:yellow box:true axistripod:false cross:false centermarker:true constantscreensize:false drawontop:false,
		point name:(fullname+"_kn_spine2_ctrl") size:hsize3 transform:t4 parent:chest_ctrl wirecolor:yellow box:true axistripod:false cross:false centermarker:true constantscreensize:false drawontop:false),
	line_spine = p2pline name:(fullname+"_li_spine") transform:t2 pos1:t2.pos pos2:t4.pos wirecolor:brown parent:knot_spine[1] boneenable:true,
	
	knot_neck = #(point name:(fullname+"_kn_neck1_ctrl") size:hsize3 transform:t5 parent:chest_ctrl wirecolor:yellow box:true axistripod:false cross:false centermarker:true constantscreensize:false drawontop:false,
		point name:(fullname+"_kn_neck2_ctrl") size:hsize3 transform:t9 parent:head_ctrl wirecolor:yellow box:true axistripod:false cross:false centermarker:true constantscreensize:false drawontop:false),
	line_neck = p2pline name:(fullname+"_li_neck_ctrl") transform:t5 pos1:t5.pos pos2:t9.pos wirecolor:brown parent:knot_neck[1] boneenable:true,
		
	knot_hub = point name:(fullname+"_kn_hub") transform:t1 size:hsize3 parent:hub_ctrl wirecolor:yellow box:true axistripod:false cross:false centermarker:true constantscreensize:false drawontop:false,
	knot_tip= point name:(fullname+"_kn_tip") transform:t10 size:hsize3 parent:head_ctrl wirecolor:yellow  box:true axistripod:false cross:false centermarker:true constantscreensize:false drawontop:false

	--设置线段绑定
	setKnotType line_spine 1 1 #bezier
	setKnotType line_spine 1 2 #bezier
	setSegmentType line_spine 1 1 #curve
	addModifier line_spine (Spline_IK_Control helper_list:#(point name:(fullname+"_kn_spine1") wirecolor:green,point name:(fullname+"_kn_spine2_ctrl") wirecolor:green) linkTypes:2 helper_size:hsize1 box:false helper_axistripod:false helper_cross:false helper_centermarker:true constantscreensize:false drawontop:false)
-- 	classof line_spine
	for i = 1 to 2 do line_spine.modifiers[1].helper_list[i].parent = knot_spine[i]
	setKnotType line_neck 1 1 #bezier
	setKnotType line_neck 1 2 #bezier
	setSegmentType line_neck 1 1 #curve
	addModifier line_neck (Spline_IK_Control helper_list:#(point name:(fullname+"_kn_neck1") wirecolor:green,point name:(fullname+"_kn_neck2") wirecolor:green) linkTypes:2 helper_size:hsize1 box:false helper_axistripod:false helper_cross:false helper_centermarker:true constantscreensize:false drawontop:false)
	for i = 1 to 2 do line_neck.modifiers[1].helper_list[i].parent = knot_neck[i]
	
	local
-- 	--次级绑定1(可控制三个大骨骼的方向)
	subT_hub = point name:(fullname+"_subT_hub") size:hsize1 transform:hub_ctrl.transform parent:hub_ctrl wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subR_hub = ctrl_shape type:"Rectangle" name:(fullname+"_subR_hub") size:hsize4 transform:subT_hub.transform wirecolor:yellow parent:subT_hub,
	subT_chest = point name:(fullname+"_subT_chest") size:hsize1 transform:chest_ctrl.transform parent:chest_ctrl wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subR_chest = ctrl_shape type:"Rectangle" name:(fullname+"_subR_chest") size:hsize4 transform:subT_chest.transform wirecolor:yellow parent:subT_chest,
	subT_head = point name:(fullname+"_subT_head") size:hsize1 transform:head_ctrl.transform parent:head_ctrl wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subR_head = ctrl_shape type:"Rectangle" name:(fullname+"_subR_head") size:hsize4 transform:subT_head.transform wirecolor:yellow parent:subT_head
	local ctrl = subT_hub[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget knot_hub 50
	ctrl.appendTarget knot_spine[1] 50
	ctrl = subT_hub[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = hub_ctrl;ctrl.upnode_world = false
	ctrl.appendTarget knot_spine[1] 50
	local ctrl = subT_chest[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget knot_spine[2] 50
	ctrl.appendTarget knot_neck[1] 50
	ctrl = subT_chest[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = chest_ctrl;ctrl.upnode_world = false
	ctrl.appendTarget knot_neck[1] 50
	local ctrl = subT_head[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget knot_neck[2] 50
	ctrl.appendTarget knot_tip 50
	ctrl = subT_head[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = head_ctrl;ctrl.upnode_world = false
	ctrl.appendTarget knot_tip 50
	 
	local
	--路径方向点
	subT_spine_dir1 = point name:(fullname+"_subT_spine_dir1") size:hsize1 transform:t2 parent:knot_spine[1] wirecolor:gray centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off,
	subT_spine_dir2 = point name:(fullname+"_subT_spine_dir2") size:hsize1 transform:t4 parent:knot_spine[2] wirecolor:gray centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off,
	subT_neck_dir1 = point name:(fullname+"_subT_neck_dir1") size:hsize1 transform:t5 parent:knot_neck[1] wirecolor:gray centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off,
	subT_neck_dir2 = point name:(fullname+"_subT_neck_dir2") size:hsize1 transform:t9 parent:knot_neck[2] wirecolor:gray centermarker:off axistripod:on cross:off Box:off constantscreensize:off drawontop:off,
	--绑定spine方向点
	ctrl = subT_spine_dir1[3][2].controller = LookAt_Constraint()
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = knot_spine[1];ctrl.upnode_world = false
	ctrl.appendTarget knot_spine[2] 50
	ctrl = subT_spine_dir2[3].controller = transform_script()
	ctrl.AddNode "pre" subT_spine_dir1 --knot_spine[1]
	ctrl.AddNode "prt" knot_spine[2]
	ctrl.script = "preT = pre.transform * inverse prt.transform\nrotate (matrix3 1) (quat (amax (acos(dot preT[1] [1,0,0])) 0) (normalize(cross preT[1] [1,0,0])))"
	--绑定neck方向点
	ctrl = subT_neck_dir1[3][2].controller = LookAt_Constraint()
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = knot_neck[1];ctrl.upnode_world = false
	ctrl.appendTarget knot_neck[2] 50
	ctrl = subT_neck_dir2[3].controller = transform_script()
	ctrl.AddNode "pre" subT_neck_dir1
	ctrl.AddNode "prt" knot_neck[2]
	ctrl.script = "preT = pre.transform * inverse prt.transform\nrotate (matrix3 1) (quat (amax (acos(dot preT[1] [1,0,0])) 0) (normalize(cross preT[1] [1,0,0])))"
	
	local
	--路径点
	subT_spine1 = point name:(fullname+"_subT_spine1") size:hsize1 transform:t2 parent:line_spine wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subT_spine2 = point name:(fullname+"_subT_spine2") size:hsize1 transform:t3 parent:line_spine wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subT_spine_count = 2,
	subT_neck1 = point name:(fullname+"_subT_neck1") size:hsize1 transform:t5 parent:line_neck wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subT_neck2 = point name:(fullname+"_subT_neck2") size:hsize1 transform:t6 parent:line_neck wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subT_neck3 = point name:(fullname+"_subT_neck3") size:hsize1 transform:t7 parent:line_neck wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subT_neck4 = point name:(fullname+"_subT_neck4") size:hsize1 transform:t8 parent:line_neck wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subT_neck_count = 4,
	--路径点位置和旋转绑定
	ctrl = subT_spine1[3][1].controller = Path_Constraint() --spine1
	ctrl.path = line_spine;ctrl.percent = (nearestPathParam line_spine 1 t2.pos steps:512)*100
	ctrl = subT_spine1[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget subT_spine_dir1 (2/3.0)--i = 1 (subT_spine_count+1.0-i)/(subT_spine_count+1.0)
	ctrl.appendTarget subT_spine_dir2 (1/3.0)--i = 1 (i)/(subT_spine_count+1.0)
	ctrl = subT_spine2[3][1].controller = Path_Constraint()
	ctrl.path = line_spine;ctrl.percent = (nearestPathParam line_spine 1 t3.pos steps:512)*100
	ctrl = subT_spine2[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget subT_spine_dir1 (1/3.0)--i = 2 (subT_spine_count+1.0-i)/(subT_spine_count+1.0)
	ctrl.appendTarget subT_spine_dir2 (2/3.0)--i = 2 (i)/(subT_spine_count+1.0)
	ctrl = subT_neck1[3][1].controller = Path_Constraint() --neck1
	ctrl.path = line_neck;ctrl.percent = (nearestPathParam line_neck 1 t5.pos steps:512)*100
	ctrl = subT_neck1[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget subT_neck_dir1 (4/5.0)--i = 1 (subT_neck_count+1.0-i)/(subT_neck_count+1.0)
	ctrl.appendTarget subT_neck_dir2 (1/5.0)--i = 1 (i)/(subT_neck_count+1.0)
	ctrl = subT_neck2[3][1].controller = Path_Constraint()
	ctrl.path = line_neck;ctrl.percent = (nearestPathParam line_neck 1 t6.pos steps:512)*100
	ctrl = subT_neck2[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget subT_neck_dir1 (3/5.0)--i = 2 (subT_neck_count+1.0-i)/(subT_neck_count+1.0)
	ctrl.appendTarget subT_neck_dir2 (2/5.0)--i = 2 (i)/(subT_neck_count+1.0)
	ctrl = subT_neck3[3][1].controller = Path_Constraint()
	ctrl.path = line_neck;ctrl.percent = (nearestPathParam line_neck 1 t7.pos steps:512)*100
	ctrl = subT_neck3[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget subT_neck_dir1 (2/5.0)--i = 3 (subT_neck_count+1.0-i)/(subT_neck_count+1.0)
	ctrl.appendTarget subT_neck_dir2 (3/5.0)--i = 3 (i)/(subT_neck_count+1.0)
	ctrl = subT_neck4[3][1].controller = Path_Constraint()
	ctrl.path = line_neck;ctrl.percent = (nearestPathParam line_neck 1 t8.pos steps:512)*100
	ctrl = subT_neck4[3][2].controller = Orientation_Constraint()
	ctrl.appendTarget subT_neck_dir1 (1/5.0)--i = 4 (subT_neck_count+1.0-i)/(subT_neck_count+1.0)
	ctrl.appendTarget subT_neck_dir2 (4/5.0)--i = 4 (i)/(subT_neck_count+1.0)
	
	--次级绑定2(可以单独调节路径骨骼)
	local
	--微调点
-- 	subN_spine1 = point name:(fullname+"_subN_spine1") size:hsize2 transform:t2 parent:subN_spine1 wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_spine2 = point name:(fullname+"_subN_spine2") size:hsize2 transform:t3 parent:subT_spine2 wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
-- 	subN_neck1 = point name:(fullname+"_subN_neck1") size:hsize2 transform:t5 parent:line_neck wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_neck2 = point name:(fullname+"_subN_neck2") size:hsize2 transform:t6 parent:subT_neck2 wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_neck3 = point name:(fullname+"_subN_neck3") size:hsize2 transform:t7 parent:subT_neck3 wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	subN_neck4 = point name:(fullname+"_subN_neck4") size:hsize2 transform:t8 parent:subT_neck4 wirecolor:yellow centermarker:off axistripod:off cross:off Box:on constantscreensize:off drawontop:off,
	--旋转控制父物体
	subP_spine1 = point name:(fullname+"_subP_spine1") size:hsize1 transform:t2 pos:((t2.pos+t3.pos)*.5) parent:subT_spine1 wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subP_spine2 = point name:(fullname+"_subP_spine2") size:hsize1 transform:t3 pos:((t3.pos+t4.pos)*.5) parent:subT_spine2 wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subP_neck1 = point name:(fullname+"_subP_neck1") size:hsize1 transform:t5 pos:((t5.pos+t6.pos)*.5) parent:subT_neck1 wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subP_neck2 = point name:(fullname+"_subP_neck2") size:hsize1 transform:t6 pos:((t6.pos+t7.pos)*.5) parent:subT_neck2 wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subP_neck3 = point name:(fullname+"_subP_neck3") size:hsize1 transform:t7 pos:((t7.pos+t8.pos)*.5) parent:subT_neck3 wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	subP_neck4 = point name:(fullname+"_subP_neck4") size:hsize1 transform:t8 pos:((t8.pos+t9.pos)*.5) parent:subT_neck4 wirecolor:gray centermarker:on axistripod:off cross:off Box:off constantscreensize:off drawontop:off,
	--旋转控制
	subR_spine1 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_spine1") size:hsize3 transform:subP_spine1.transform wirecolor:yellow parent:subP_spine1,
	subR_spine2 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_spine2") size:hsize3 transform:subP_spine2.transform wirecolor:yellow parent:subP_spine2,
	subR_neck1 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_neck1") size:hsize3 transform:subP_neck1.transform wirecolor:yellow parent:subP_neck1,
	subR_neck2 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_neck2") size:hsize3 transform:subP_neck2.transform wirecolor:yellow parent:subP_neck2,
	subR_neck3 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_neck3") size:hsize3 transform:subP_neck3.transform wirecolor:yellow parent:subP_neck3,
	subR_neck4 = ctrl_shape type:"Rectangle" name:(fullname+"_subR_neck4") size:hsize3 transform:subP_neck4.transform wirecolor:yellow parent:subP_neck4
	--绑定父物体位置和注视
	local
	--spine
	ctrl = subP_spine1[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subT_spine_dir1 50
	ctrl.appendTarget subN_spine2 50
	ctrl = subP_spine1[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subT_spine1;ctrl.upnode_world = false
	ctrl.appendTarget subN_spine2 50
	ctrl = subP_spine2[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_spine2 50
	ctrl.appendTarget subT_spine_dir2 50
	ctrl = subP_spine2[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subT_spine2;ctrl.upnode_world = false
	ctrl.appendTarget subT_spine_dir2 50
	--neck
	ctrl = subP_neck1[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subT_neck_dir1 50
	ctrl.appendTarget subN_neck2 50
	ctrl = subP_neck1[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subT_neck1;ctrl.upnode_world = false
	ctrl.appendTarget subN_neck2 50
	ctrl = subP_neck2[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_neck2 50
	ctrl.appendTarget subN_neck3 50
	ctrl = subP_neck2[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subT_neck2;ctrl.upnode_world = false
	ctrl.appendTarget subN_neck3 50
	ctrl = subP_neck3[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_neck3 50
	ctrl.appendTarget subN_neck4 50
	ctrl = subP_neck3[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subT_neck3;ctrl.upnode_world = false
	ctrl.appendTarget subN_neck4 50
	ctrl = subP_neck4[3][1].controller = Position_Constraint() --位置
	ctrl.appendTarget subN_neck4 50
	ctrl.appendTarget subT_neck_dir2 50
	ctrl = subP_neck4[3][2].controller = LookAt_Constraint() --旋转
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subT_neck4;ctrl.upnode_world = false
	ctrl.appendTarget subT_neck_dir2 50
	
/* 绑定到骨骼 */
	local
	ctrl = sk_hub[3][1].controller = Position_Constraint() --位置hub
	ctrl.appendTarget knot_hub 50
	ctrl = sk_hub[3][2].controller = LookAt_Constraint() --旋转hub
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_hub;ctrl.upnode_world = false
	ctrl.appendTarget subT_spine_dir1 50
	ctrl = sk_spine1[3][1].controller = Position_Constraint() --位置spine1
	ctrl.appendTarget subT_spine_dir1 50
	ctrl = sk_spine1[3][2].controller = LookAt_Constraint() --旋转spine1
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_spine1;ctrl.upnode_world = false
	ctrl.appendTarget subN_spine2 50
	ctrl = sk_spine2[3][1].controller = Position_Constraint() --位置spine2
	ctrl.appendTarget subN_spine2 50
	ctrl = sk_spine2[3][2].controller = LookAt_Constraint() --旋转spine2
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_spine2;ctrl.upnode_world = false
	ctrl.appendTarget subT_spine_dir2 50
	ctrl = sk_chest[3][1].controller = Position_Constraint() --位置chest
	ctrl.appendTarget subT_spine_dir2 50
	ctrl = sk_chest[3][2].controller = LookAt_Constraint() --旋转chest
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_chest;ctrl.upnode_world = false
	ctrl.appendTarget subT_neck_dir1 50
	ctrl = sk_neck1[3][1].controller = Position_Constraint() --位置neck1
	ctrl.appendTarget subT_neck_dir1 50
	ctrl = sk_neck1[3][2].controller = LookAt_Constraint() --旋转neck1
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_neck1;ctrl.upnode_world = false
	ctrl.appendTarget subN_neck2 50
	ctrl = sk_neck2[3][1].controller = Position_Constraint() --位置neck2
	ctrl.appendTarget subN_neck2 50
	ctrl = sk_neck2[3][2].controller = LookAt_Constraint() --旋转neck2
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_neck2;ctrl.upnode_world = false
	ctrl.appendTarget subN_neck3 50
	ctrl = sk_neck3[3][1].controller = Position_Constraint() --位置neck3
	ctrl.appendTarget subN_neck3 50
	ctrl = sk_neck3[3][2].controller = LookAt_Constraint() --旋转neck3
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_neck3;ctrl.upnode_world = false
	ctrl.appendTarget subN_neck4 50
	ctrl = sk_neck4[3][1].controller = Position_Constraint() --位置neck4
	ctrl.appendTarget subN_neck4 50
	ctrl = sk_neck4[3][2].controller = LookAt_Constraint() --旋转neck4
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_neck4;ctrl.upnode_world = false
	ctrl.appendTarget subT_neck_dir2 50
	ctrl = sk_head[3][1].controller = Position_Constraint() --位置head
	ctrl.appendTarget subT_neck_dir2 50
	ctrl = sk_head[3][2].controller = LookAt_Constraint() --旋转head
	ctrl.lookat_vector_length = ctrl.target_axis = 0
	ctrl.StoUP_axis = ctrl.upnode_axis = 2
	ctrl.pickUpNode = subR_head;ctrl.upnode_world = false
	ctrl.appendTarget knot_tip 50
	ctrl = sk_tip[3][1].controller = Position_Constraint() --位置tip
	ctrl.appendTarget knot_tip 50
	
/* 整理层 */
	layerManager.newLayerFromName (rigname+"_Rigs")
	layerManager.newLayerFromName (rigname+"_Ctrls")
	layerManager.newLayerFromName (rigname+"_Bones")
	local
	layer_Rigs = LayerManager.getLayerFromName (rigname+"_Rigs"),
	layer_Ctrls = LayerManager.getLayerFromName (rigname+"_Ctrls"),
	layer_Bones = LayerManager.getLayerFromName (rigname+"_Bones")
	
	for b in #(sk_hub,sk_spine1,sk_spine2,sk_chest,sk_neck1,sk_neck2,sk_neck3,sk_neck4,sk_head,sk_tip)
	do layer_Bones.addnode b
		
	for r in #(sk_tip)+
		#(subT_hub,subT_head,subT_chest)+
		#(subP_spine1,subP_spine2,subP_neck1,subP_neck2,subP_neck3,subP_neck4)+
		(join #() line_neck.modifiers[1].helper_list + join #() line_spine.modifiers[1].helper_list)+
		#(line_spine,line_neck)+
		#(subT_spine1,subT_spine2,subT_neck1,subT_neck2,subT_neck3,subT_neck4)+
		#(subT_spine_dir1,subT_spine_dir2,subT_neck_dir1,subT_neck_dir2)
	do layer_Rigs.addnode r
		
	for c in #(prt_ctrl,hub_prt_ctrl,spine_prt_ctrl,chest_prt_ctrl,neck_prt_ctrl,head_prt_ctrl,hub_ctrl,chest_ctrl,head_ctrl)+
		#(subR_hub,subR_chest,subR_head)+
		knot_spine+knot_neck+
		#(subN_spine2,subN_neck2,subN_neck3,subN_neck4)+#(knot_hub,knot_tip)+
		#(subR_spine1,subR_spine2,subR_neck1,subR_neck2,subR_neck3,subR_neck4)
	do layer_Ctrls.addnode c
	
	layer_Rigs.on = false;layer_Rigs.lock = true
	layer_Bones.lock = true

/* 添加属性 */
	local
	prop_holder = EmptyModifier(),
	prop = attributes prop
	(
		Parameters Properties rollout:PropRollout
		(			
			FKCtrls type:#maxObjectTab tabsize:5 --tabSizeVariable:true
			
			IKCtrls type:#maxObjectTab tabsize:3 --tabSizeVariable:true
			
			secondCtrls type:#maxObjectTab tabsize:10 --tabSizeVariable:true
			fineCtrls type:#maxObjectTab tabsize:9 --tabSizeVariable:true
		)
		rollout PropRollout "Display Controllers"
		(
-- 				prop_holder.Prop.FKCtrls = for i in #(fk_leg1_ctrl,fk_leg2_ctrl,fk_leg3_ctrl,fk_leg4_ctrl,fk_foot_ctrl,fk_toe_ctrl) collect nodeTransformMonitor node:i --6
-- 				prop_holder.Prop.IKTags = for i in #(ik_exp1,ik_exp2,ik_exp3,ik_exp4,ik_foot,ik_toe) collect nodeTransformMonitor node:i --6
-- 				prop_holder.Prop.IKCtrls = for i in #(ik_foot_ctrl,ik_foot_sub_ctrl,ik_foot,ik_toe,sik_ctrl1,sik_ctrl2) collect nodeTransformMonitor node:i --6
			group"Display"
			(
				button 'FK' "FK" Align:#Left width:32 tooltip:"Show/Hide FK controller.\nClick mouse:Left or Right."
				button 'IK' "IK" Align:#Left width:32 offset:[34,-25] tooltip:"Show/Hide IK controller.\nClick mouse:Left or Right."
				button 'second' "sec" Align:#right width:32 offset:[-34,-25] tooltip:"Show/Hide sec controller.\nClick mouse:Left or Right."
				button 'fine' "fine" Align:#right width:32 offset:[0,-25] tooltip:"Show/Hide fine controller.\nClick mouse:Left or Right."
				
				on FK pressed do undo "Show FK Ctrls" on unhide(for i in FKctrls collect i.node)
				on FK rightClick do undo "Hide FK Ctrls" on hide(for i in FKctrls collect i.node)
				on IK pressed do  undo "Show IK Ctrls" on unhide(for i in IKCtrls collect i.node)
				on IK rightClick do undo "Hide IK Ctrls" on hide(for i in IKCtrls collect i.node)
				on second pressed do undo "Show Second Ctrls" on unhide(for i in secondCtrls collect i.node)
				on second rightClick do undo "Hide Second Ctrls" on hide(for i in secondCtrls collect i.node)
				on fine pressed do undo "Show Fine Ctrls" on unhide(for i in fineCtrls collect i.node)
				on fine rightClick do undo "Hide Fine Ctrls" on hide(for i in fineCtrls collect i.node)
			)
		)
	)
	Custattributes.add prop_holder prop baseobject:false
	addmodifier prt_ctrl prop_holder
	
	prop_holder.Prop.FKCtrls = for i in #(hub_prt_ctrl,spine_prt_ctrl,chest_prt_ctrl,neck_prt_ctrl,head_prt_ctrl) collect nodeTransformMonitor node:i --5
	prop_holder.Prop.IKCtrls = for i in #(hub_ctrl,chest_ctrl,head_ctrl) collect nodeTransformMonitor node:i --3
	prop_holder.Prop.secondCtrls = for i in #(knot_hub,knot_tip)+knot_spine+knot_neck+#(subN_spine2,subN_neck2,subN_neck3,subN_neck4) collect nodeTransformMonitor node:i --10
	prop_holder.Prop.fineCtrls = for i in #(subR_hub,subR_chest,subR_head)+#(subR_spine1,subR_spine2,subR_neck1,subR_neck2,subR_neck3,subR_neck4) collect nodeTransformMonitor node:i --9
	
	hide (#(knot_hub,knot_tip)+knot_spine+knot_neck+#(subN_spine2,subN_neck2,subN_neck3,subN_neck4))
	hide (#(subR_hub,subR_chest,subR_head)+#(subR_spine1,subR_spine2,subR_neck1,subR_neck2,subR_neck3,subR_neck4))
)
rig_spine (getcurrentselection())