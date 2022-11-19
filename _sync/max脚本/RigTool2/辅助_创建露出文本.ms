fn createExpText nd =
(
	local
	txt = text size:10 kerning:0 leading:0 transform:(matrix3 1) isSelected:on,
	ctrl = txt.baseobject[8].controller = float_script (),
	str = "
str = StringStream \"
Local Euler Rotation: l01
Local Euler X: l02
Local Euler Y: l03
Local Euler Z: l04
World Euler Rotation: l05
World Euler X: l06
World Euler Y: l07
World Euler Z: l08
Local Position: l09
Local Position X: l10
Local Position Y: l11
Local Position Z: l12
World Position: l13
World Position X: l14
World Position Y: l15
World Position Z: l16
Distance: l17
World Bounding Box Size: l18
World Bounding Box Width: l19
World Bounding Box Length: l20
World Bounding Box Height: l21
Angle: l22
Time Offset: l23
Size: l24
\"
this.text = str as string
1.0
	"
	ctrl.AddNode "this" txt 
	ctrl.script = str
	
)
createExpText $