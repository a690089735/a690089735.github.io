fn expBoneStretch obj isSelect:true =
undo "" on(
	if obj != undefined do
	(
		local plist = #()
		mapped fn expStretchExe obj plist:plist = --使用mapped时无法使用objects.count来获取新创建的节点
		(
			local
			ot = obj.transform,
			bbox = nodeGetBoundingBox obj ot,rb = bbox[2]-bbox[1],
			pt = point name:(obj.name+"_Stretch") size:((rb[2]+rb[3])*.5) transform:ot parent:obj wirecolor:black box:off axistripod:on cross:off centermarker:off constantscreensize:off drawontop:off select:true,
			ctrl = pt[3].controller = transform_script(); ctrl.addNode "tag" obj; ctrl.script = "tag.stretchTM"
			append plist pt
		)
		expStretchExe obj plist:plist
		if isSelect do select plist
	)
)
expBoneStretch $