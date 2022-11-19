dotnetcontrol 'tb' "TabControl" pos:[0,0] width:272 height:24

local
controls = #(
#(lbl_names,edt_names,lbl_tags,edt_tags,lbl_basenum,edt_basenum,lbl_digit,edt_digit,lbl_direction,edt_direction,lbl_threshold,spn_threshold,edt_rename,btn_load,btn_rename,tip_names,tip_tags,tip_basenum,tip_direction,tip_rename),
#(edt_select,btn_select,edt_replace_source,edt_replace_target,lbl_replace,btn_replace)
)
on tb selected s e do
(
	for id in #{1..2} - #{e.TabPageIndex + 1} do for i in controls[id] do i.visible = false
	for i in controls[e.TabPageIndex + 1] do i.visible = true
)