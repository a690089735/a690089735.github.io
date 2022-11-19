--基于选择顺序,复制粘贴相对变换

--复制相对变换
transList = #()
fn copyRelTrans objs:(getcurrentselection()) = 
(
	transList = for o in objs collect if isvalidnode o.parent then o.transform * inverse o.parent.transform else o.transform	
)
--粘贴相对变换
fn PasteRelTrans objs:(getcurrentselection()) = 
(
	for i = 1 to objs.count do
	(
		o = objs[i];trans = transList[i]
		o.transform = if isvalidnode o.parent then trans * o.parent.transform else trans
	)
)