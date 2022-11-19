--依照某物体的某个轴,计算每帧偏移多少单位.
try(destroydialog calculateAxisOffsetRollout)catch()
rollout calculateAxisOffsetRollout "匀速移动生成器" width:152 height:80
(
	fn calculateAxisOffset offObj: refObj: axis:1 val:1.0 recalc:false = 
	(
		if not isValidNode refObj do refObj = offObj
		ts = animationrange.start+1;te = animationrange.end
		with animate on(
			if recalc do try(at time 0(deleteKeys offObj[3][1].keys #allKeys))catch()
			case axis of
			(
				1 :	for t in ts to te do (at time t(move offObj (refObj.transform.row1 * val)))
				2 :	for t in ts to te do (at time t(move offObj (refObj.transform.row2 * val)))
				3 :	for t in ts to te do (at time t(move offObj (refObj.transform.row3 * val)))
			)
		)
	)

	radiobuttons rdo1 "" pos:[48,8] width:97 height:16 labels:#("X", "Y", "Z") columns:3
	label lbl1 "方向:" pos:[8,8] width:32 height:16
	spinner spn1 "每帧距离:" pos:[8,26] width:136 height:16 range:[-99999,99999,1] type:#worldunits scale:0.001
	button btn1 "计算选中" pos:[64,48] width:80 height:24 toolTip:""
	pickbutton btn2 "参照" pos:[8,48] width:32 height:24 toolTip:"拾取一个物体作为方向参考,不拾取则使用自身方向."
	checkbutton ckb1 "R" pos:[40,48] width:16 height:24 highlightColor:green toolTip:"计算前删除位移帧" checked:true
	on btn1 pressed do
		undo "CreateOffset" on(for o in getcurrentselection() do calculateAxisOffset offObj:o refObj:btn2.object axis:rdo1.state val:spn1.value recalc:ckb1.checked)
)
createdialog calculateAxisOffsetRollout