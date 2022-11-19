--需求:去除父级
fn removePrent = 
(
	sel = selection as Array
	for o in sel do prt = o.parent; o.parent = prt.parent; delete prt
)