try(destroydialog CopyCATool)catch()
rollout CopyCATool "复制自定义属性" width:176 height:152
(
	local CAList = #()--格式为#(#(),#())
	local xCA,xVal
	
	button 'btn_CopyCA' "CopyCA" pos:[16,8] width:64 height:24 toolTip:"从选择的物体列表复制自定义属性." align:#left
	button 'btn_PasteCA' "PasteCA" pos:[104,8] width:64 height:24 toolTip:"粘贴自定义属性到选择的物体列表." align:#left
	listbox 'lbx_CAList' "CAList" pos:[8,40] width:160 height:6 toolTip:"自定义属性列表." align:#left
	checkButton 'ckb2' "B" pos:[96,8] width:8 height:24 toolTip:"fromeBaseObject" checked:true align:#left
	
	--execute中的变量,必须是global
	fn copyCA tgt baseobject:true =
	(
		--记录定义.用于创建属性
		CADs = custAttributes.getDefs tgt baseobject:baseobject
		
		--记录各个属性值,用于粘贴
		count = custAttributes.count tgt baseobject:baseobject
		CAs = for i = 1 to count collect custAttributes.get tgt i baseobject:baseobject--获取属性,数量理应和记录的定义数相等.
		Vals = for i = 1 to count collect 
		(
-- 			print i
			for n in GetPropNames CADs[i] collect (CopyCATool.xCA = CAs[i];execute("CopyCATool.xCA."+n as string))
		)
		#(CADs,Vals)
	)
	fn pasteCA tgt ds vs baseobject:true =
	(
		count = ds.count
		for j = 1 to custAttributes.count tgt baseobject:baseobject do custAttributes.delete tgt j baseobject:baseobject --删除所有自定义属性
		for i = 1 to count do 
		(
			custAttributes.add tgt ds[i] baseobject:baseobject--添加自定义属性
			CAs = custAttributes.get tgt i baseobject:baseobject
			names = GetPropNames ds[i]
			for j = 1 to names.count do (CopyCATool.xCA = CAs;CopyCATool.xVal = vs[i][j];execute("CopyCATool.xCA."+names[j] as string+"=CopyCATool.xVal")) --设置自定义属性
		)
	)
	checkButton 'ckb1' "B" pos:[8,8] width:8 height:24 toolTip:"fromeBaseObject" checked:true align:#left
	on btn_CopyCA pressed do
	(
		sel = selection as Array
		CAList = for i in sel collect copyCA i baseobject:ckb1.checked
		lbx_CAList.items = for i in CAList collect i[1] as string
	)
	on btn_PasteCA pressed do
	(
		sel = selection as Array
		for i = 1 to CAList.count do 
		(
			try(
				pasteCA sel[i] CAList[i][1] CAList[i][2] baseobject:ckb2.checked
			)catch()
		)
		
	)
)
CreateDialog CopyCATool