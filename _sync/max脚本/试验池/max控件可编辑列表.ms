try(DestroyDialog unnamedRollout) catch()
rollout unnamedRollout "Untitled" width:162 height:300
(
	dropdownList 'ddl1' "DropDownList" pos:[11,11] width:136 height:41 enabled:true items:#("x","2","3","4") align:#left
	combobox 'cbx1' "ComboBox" pos:[16,66] width:129 height:5 items:#("1","2","3","4") align:#left
)
CreateDialog unnamedRollout