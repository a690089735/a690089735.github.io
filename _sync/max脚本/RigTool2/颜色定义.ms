-- try(DestroyDialog ColorSetter.def)catch()

level = 4
offset = 256 / level
Ramps = #(0) + (for i = 1 to level-1 collect offset * i - 1)

RampRed = for c in Ramps collect color 255 (c^2/Ramps[Ramps.count]) (c+offset*.5)
RampGreen = for c in Ramps collect color (c+offset*.5) 255 (c^2/Ramps[Ramps.count])
RampBlue = for c in Ramps collect color (c^2/Ramps[Ramps.count]) (c+offset*.5) 255
RampYellow = for c in Ramps collect color 255 255 c
RampCyan = for c in Ramps collect color c 255 255
RampPurple = for c in Ramps collect color (c+offset) c 255

OtherColor = #(orange,brown,white,gray,black)

ColorSetter = rolloutCreator "ColorSetterRollout" "WireColorSetter"
	--Start creating the rollout
ColorSetter.begin()
i = 0
for c in RampRed+RampGreen+RampBlue+RampYellow+RampCyan+RampPurple+OtherColor do
(	
	i+=1
	local suffix = i as string
	for i = 1 to 3 - suffix.count do suffix = "0"+suffix
	ColorSetter.addControl #colorPicker ("cp_"+suffix) suffix paramStr:("align:#Left color:"+ c as string) --因为有些名字开头是数字,所以加个前缀
	ColorSetter.addControl #button ("btn_"+suffix) "Assign" paramStr:("align:#Right offset:[0,-25]")
	ColorSetter.addHandler ("btn_"+suffix) #pressed codeStr:("undo @Set Wirecolor@ on (selection.wirecolor = cp_"+suffix+".color)") filter:on
)
ColorSetter.end()
createDialog ColorSetter.def

