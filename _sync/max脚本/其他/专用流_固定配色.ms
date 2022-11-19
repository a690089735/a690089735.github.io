try(destroydialog SetColorTool)catch()

rollout SetColorTool "…Ë÷√—’…´" width:176 height:144
(
	fn reColorLayer = (
		for i = 1 to (LayerManager.count-1) do
		(
			layer = LayerManager.getLayer i
			str = layer.name
			if matchPattern str pattern:"*_Mesh*" then layer.wireColor = black
			else if matchPattern str pattern:"*_Ctrl*" then layer.wireColor = yellow
			else layer.wireColor = gray
		)
		(LayerManager.getLayer 0).wireColor = white
	)
	
	dotNetControl btn1 "Button" text:"ª≠◊Û" pos:[8,8] width:48 height:32
	dotNetControl btn2 "Button" text:"ª≠÷–" pos:[64,8] width:48 height:32
	dotNetControl btn3 "Button" text:"ª≠”“" pos:[120,8] width:48 height:32
	dotNetControl btn4 "Button" text:"≈Ëπ«" pos:[8,56] width:48 height:32
	dotNetControl btn5 "Button" text:"–ÿ«ª" pos:[64,56] width:48 height:32
	dotNetControl btn6 "Button" text:"Õ∑≤ø" pos:[120,56] width:48 height:32
	dotNetControl btn7 "Button" text:"µ≠∫Ï" pos:[8,104] width:48 height:32
	dotNetControl btn8 "Button" text:"≤„≈‰…´" pos:[64,104] width:104 height:32
	
	local color1 = (color 0 249 56)
	local color2 = (color 228 214 153)
	local color3 = (color 15 76 232)
	local color4 = (color 234 228 4)
	local color5 = (color 182 255 249)
	local color6 = (color 188 155 255)
	local color7 = (color 203 21 21)
	local color8 = #(black,gray,yellow,white)
	
	local bgcolor1 = ((DotNetClass "System.Drawing.Color").fromARGB 0 249 56)
	local bgcolor2 = ((DotNetClass "System.Drawing.Color").fromARGB 228 214 153)
	local bgcolor3 = ((DotNetClass "System.Drawing.Color").fromARGB 15 76 232)
	local bgcolor4 = ((DotNetClass "System.Drawing.Color").fromARGB 234 228 4)
	local bgcolor5 = ((DotNetClass "System.Drawing.Color").fromARGB 182 255 249)
	local bgcolor6 = ((DotNetClass "System.Drawing.Color").fromARGB 188 155 255)
	local bgcolor7 = ((DotNetClass "System.Drawing.Color").fromARGB 203 21 21)
	
	on SetColorTool Open do
	(
		btn1.flatstyle = btn2.flatstyle = btn3.flatstyle = btn4.flatstyle = btn5.flatstyle = btn6.flatstyle = btn7.flatstyle = btn8.flatstyle = btn8.flatstyle.flat
		btn1.BackColor = bgcolor1
		btn2.BackColor = bgcolor2
		btn3.BackColor = bgcolor3
		btn4.BackColor = bgcolor4
		btn5.BackColor = bgcolor5
		btn6.BackColor = bgcolor6
		btn7.BackColor = bgcolor7
	)
	on btn1 mouseDown e do
		for o in selection do o.wirecolor = color1
	on btn2 mouseDown e do
		for o in selection do o.wirecolor = color2
	on btn3 mouseDown e do
		for o in selection do o.wirecolor = color3
	on btn4 mouseDown e do
		for o in selection do o.wirecolor = color4
	on btn5 mouseDown e do
		for o in selection do o.wirecolor = color5
	on btn6 mouseDown e do
		for o in selection do o.wirecolor = color6
	on btn7 mouseDown e do
		for o in selection do o.wirecolor = color7
	on btn8 mouseDown e do
		reColorLayer()
)

createdialog SetColorTool
