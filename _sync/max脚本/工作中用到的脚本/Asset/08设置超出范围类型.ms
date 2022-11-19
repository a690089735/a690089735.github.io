fn set_out_range pos rot scl type =(
	--#constant(default) #cycle #loop(common) #pingPong #linear #relativeRepeat
	for i in selection as array do(
		if pos and rot and scl then(
			setBeforeORT i.controller type
			setAfterORT i.controller type)
		else(
			if pos do(
			setBeforeORT i.controller[1] type
			setAfterORT i.controller[1] type)
			if rot do(
			setBeforeORT i.controller[2] type
			setAfterORT i.controller[2] type)
			if scl do(
			setBeforeORT i.controller[3] type
			setAfterORT i.controller[3] type)
		)
	)
)

---*** TEST ***---

try(destroyDialog setOutRangeTypeRollout)catch()
type = #constant
rollout setOutRangeTypeRollout "setOutRangetype" width:160 height:168
(
	checkbox posc "Pos" pos:[8,8] width:40 height:16 checked:true
	checkbox rotc "Rot" pos:[56,8] width:40 height:16 checked:true
	checkbox sclc "Scale" pos:[104,8] width:48 height:16 checked:true
	listbox lbx1 "type_List" pos:[8,32] width:144 height:7 items:#("#constant(default)", "#cycle", "#loop(common)", "#pingPong", "#linear", "#relativeRepeat")
	on lbx1 doubleClicked sel do
	(
		type = case sel of(
			1:#constant
			2:#cycle 
			3:#loop
			4:#pingPong
			5:#linear
			6:#relativeRepeat)
		set_out_range posc.checked rotc.checked sclc.checked type
	)
)
createdialog setOutRangeTypeRollout