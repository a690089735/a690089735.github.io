rollout test "Color Labels" width:200
(
	local dotcolor = dotnetclass "System.Drawing.Color"
	
	dotnetcontrol lb_0 "Label" text:"Label" width:180
	dotnetcontrol lb_1 "Label" text:"Label" width:180
	dotnetcontrol lb_2 "Label" text:"Label" width:180
	dotnetcontrol lb_3 "Label" text:"Label" width:180
	
	local labels = #(lb_0,lb_1,lb_2,lb_3)
	local bcolors = #(dotcolor.Transparent, dotcolor.Orange, dotcolor.Yellow, dotcolor.Pink)
	local fcolors = #(dotcolor.Black, dotcolor.Red, dotcolor.Green, dotcolor.Blue)
	local fonts = #("", "MS Mincho", "Tahoma", "Old English Text MT")
	local sizes = #(8, 9, 7, 9)
	
	on test open do
	(
		for k=1 to labels.count do 
		(
			labels[k].Backcolor = bcolors[k]
			labels[k].Forecolor = fcolors[k]
			labels[k].font = dotnetobject "System.Drawing.Font" fonts[k] sizes[k]
		)
	)
)
createdialog test 