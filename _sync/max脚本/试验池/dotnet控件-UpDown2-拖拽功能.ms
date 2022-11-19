--Create a dotNet form control.
form=dotNetObject "form"

--Create a dotNet NumericUpDown control.
nud=dotNetObject "System.Windows.Forms.NumericUpDown"
nud.DecimalPlaces=0 --在这里设置显示精度,2为0.01 小数点后几位
nud.Increment=1 --在这里设置增量,按一下updown增减多少
nud.maximum=512 --最大值
nud.minimum=1 --最小值
nud.value=256 --默认值
nud.ReadOnly=false --可否编辑

nud.Height = 999 --调节高度无效
-- nud.Font = dotnetobject "system.drawing.font" (dotnetobject "system.drawing.fontfamily" "tahoma") 8.5 --(dotNetClass "system.drawing.fontStyle").bold --设置字体,同时会影响高度.

--This is needed so that we can type in the values as well as use the spinner. 
enableAccelerators=false

--Set variables to hold the mouse position and current value of the spinner. 
lastMousePos=0
curVal=0

--Mouse down function to set the variables above to the starting values. 
fn nudMouseDown sender arg=
(
	case arg.button of
	(
	--Check for the left mouse button
	(arg.button.left):
		(
		lastMousePos=(arg.location).y
		curVal=sender.value
		)
	--Check for the right mouse button
	(arg.button.right):
		(
			sender.value=sender.minimum
		)
	)
)

--On mouseMove event
fn nudMouseMove sender arg=
(
	case arg.button of
	(
	--Check for the left mouse button. 
	(arg.button.left):
		(
		--Get the offset from the last position of the mouse
		mouseOffSetY = (lastMousePos-arg.location.y)*sender.Increment
		--Add that position to the curVal variable
		curVal=curVal+=mouseOffSetY

		--Check if the curVal is within limits of the spinner.
		if curVal>=sender.minimum and curVal<=sender.maximum do
		(
		--Set the value of the spinner
		sender.value=curVal
		)
		--Check if the value has gone above or below the min max values and set them.
		--This is needed if the value changes more rapidly then the spinner can react.
		if curVal<sender.minimum do sender.value=sender.minimum
		if curVal>sender.maximum do sender.value=sender.maximum

		--Set the lastMousePos value to the current value of the mouse. 
		lastMousePos=arg.location.y
		)
	)
)

--Create the event handlers
dotNet.addEventHandler nud "mouseDown" nudMouseDown
dotNet.addEventHandler nud "mouseMove" nudMouseMove
--Set the life time control of the spinner to be handled by dot net and not Max script. 
 --This stops garbage collections from deleting the event handlers. 
dotNet.setLifeTimeControl nud #dotNet

--Add the NumericUpDown to the form and show the form. 
form.controls.add nud
form.show()