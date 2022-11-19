--需求:一键切换
ca2 = attributes ResetUI--声明自定义属性
(
	rollout Layerswitch "功能" width:160 height:64
	(
		fn switchLayer =
		(
			local layername1 = #("adou_Hat1_Ctrl","adou_Hat1_Mesh")
			local layername2 = #("adou_Hat2_Ctrl","adou_Hat2_Mesh")
			local layername3 = #("adou_Hat_Ctrl")
			bool = (LayerManager.getLayerFromName layername1[1]).on
			for n in layername1 do (LayerManager.getLayerFromName n).on = not bool
			for n in layername2 do (LayerManager.getLayerFromName n).on = bool
			for n in layername3 do (LayerManager.getLayerFromName n).on = true
		)
		fn hideLayer =
		(
			local layername = #("adou_Hat1_Ctrl","adou_Hat1_Mesh","adou_Hat2_Ctrl","adou_Hat2_Mesh","adou_Hat_Ctrl")
			for n in layername do (LayerManager.getLayerFromName n).on = false
		)
		button btn_switch "切换" pos:[32,16] width:96 height:32 toolTip:"切换显示,右键全部隐藏"
		label lbl1 "" pos:[32,50] width:98 height:13
		on btn_switch pressed do switchLayer()
		on btn_switch rightclick do hideLayer()
	)
)

	