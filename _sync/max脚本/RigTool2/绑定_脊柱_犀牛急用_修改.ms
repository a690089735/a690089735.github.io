undo "test" on(
prop = attributes prop
(
	Parameters Properties rollout:PropRollout
	(
		ChainLens type:#floatTab tabsize:5
		
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
		group "Function"
		(
			button 'match' "Match Pose" Align:#Center width:76 tooltip:"Match IKFK Controller Pose."
			on match pressed do
			undo "Match Controllers" on(
				local
				t1 = IKCtrls[1].node.transform,t3 = IKCtrls[2].node.transform,t5 = IKCtrls[3].node.transform
				t1[4] = [-ChainLens[1]*.5,0,0] * t1; t3[4] = [-ChainLens[3]*.5,0,0] * t3; t5[4] = [-ChainLens[5]*.5,0,0] * t5
				local
				t2 = 
				(
					local
					pos = [ChainLens[1],0,0] * t1,
					x = normalize(t3.pos - pos),
					pt3 = rotate (Matrix3 t3[1] t3[2] t3[3] [0,0,0]) (quat (amax (acos(dot t1[1] t3[1])) 0) (normalize(cross t1[1] t3[1])))
					
					Translate (rotate (rotate pt3 (quat ((amax (acos(dot t1[2] pt3[2])) 0)*.5) (normalize(cross t1[2] pt3[2])))) (quat (amax (acos(dot x pt3[1])) 0) (normalize(cross x pt3[1])))) pos
				),
				t4 = 
				(
					local
					pos = [ChainLens[3],0,0] * t3,
					x = normalize(t5.pos - pos),
					pt5 = rotate (Matrix3 t5[1] t5[2] t5[3] [0,0,0]) (quat (amax (acos(dot t3[1] t5[1])) 0) (normalize(cross t3[1] t5[1])))
					
					Translate (rotate (rotate pt5 (quat ((amax (acos(dot t3[2] pt5[2])) 0)*.5) (normalize(cross t3[2] pt5[2])))) (quat (amax (acos(dot x pt5[1])) 0) (normalize(cross x pt5[1])))) pos
				)
				
-- 				for i in #(t1,t2,t3,t4,t5) do point transform:i wirecolor:green box:on axistripod:on size:1
				
				--对齐控制器,用位置,长度,和[3].value(相对变换)
				FKCtrls[1].node.transform = orthogonalize t1
				FKCtrls[2].node[3].value = orthogonalize t2 * Inverse FKCtrls[1].node.transform
				FKCtrls[3].node[3].value = orthogonalize t3 * Inverse FKCtrls[2].node.transform
				FKCtrls[4].node[3].value = orthogonalize t4 * Inverse FKCtrls[3].node.transform
				FKCtrls[5].node[3].value = t5 * Inverse FKCtrls[4].node.transform
				--归零IK控制器
				IKCtrls[1].node[3].value = Translate (Matrix3 1) [ChainLens[1]*.5,0,0]
				IKCtrls[2].node[3].value = Translate (Matrix3 1) [ChainLens[3]*.5,0,0]
				IKCtrls[3].node[3].value = Translate (Matrix3 1) [ChainLens[5]*.5,0,0]
			)
		)
		group "Display"
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

prop_holder = EmptyModifier()
Custattributes.add prop_holder prop baseobject:false
addmodifier $ prop_holder

prop_holder.Prop.ChainLens = #(
	$Cargorhino_Hip_Bn_001.length,
	$Cargorhino_Spine_Bn_001.length+$Cargorhino_Spine_Bn_002.length,
	$Cargorhino_Spine_Bn_003.length,
	$Cargorhino_Nack_Bn_001.length+$Cargorhino_Nack_Bn_002.length+$Cargorhino_Nack_Bn_003.length+$Cargorhino_Nack_Bn_004.length,
	$Cargorhino_Head_Bn.length
)

prop_holder1 = $.modifiers[$.modifiers.count]

prop_holder.Prop.FKCtrls = prop_holder1.Prop.FKCtrls
prop_holder.Prop.IKCtrls = prop_holder1.Prop.IKCtrls
prop_holder.Prop.secondCtrls = prop_holder1.Prop.secondCtrls
prop_holder.Prop.fineCtrls = prop_holder1.Prop.fineCtrls
)