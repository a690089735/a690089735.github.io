ColorGetter = rolloutCreator "ColorGetterRollout" "MaxColorGetter" width:800
-- Start creating the rollout
ColorGetter.begin()

x = -120
y = 0

for i = 0 to 103 do
(
	if (mod i 20)as integer == 0 do
	(
		x += 120
		y = -480
	)
	ColorGetter.addControl #colorPicker ("cp_"+(i as string)) (i as string) paramStr:("align:#Left color:"+ (((GetUIColor i)*255) as color) as string + "offset:" + [x,y] as string) --因为有些名字开头是数字,所以加个前缀
	y = 0
)
ColorGetter.end()
createDialog ColorGetter.def
