try(if $fish_106004_Show_Ctrl.modifiers[1].anodes.count < 23 then $fish_106004_Show_Ctrl.modifiers[1].anodes = $fish_106004_Show_Ctrl.modifiers[1].anodes as array +
#($fish_1060004A_Cloth_Bn_001,
$fish_1060004A_Cloth_Bn_002,
$fish_1060004A_Cloth_Bn_003,
$fish_1060004A_Cloth_Bn_004,
$fish_1060004A_Cloth_Bn_005)
else
messagebox "已修复的龙女场景.")catch(messagebox "不支持的场景")