in coordsys world
(
	bb = box3()
	sel = (getCurrentSelection())[1]
	vlist = sel.selectedverts as bitarray
	center = if vlist.numberset == 0 or vlist.numberset == sel.verts.count then sel.center else (for v in vlist do expandToInclude bb sel.verts[v].pos;bb.center)
	bb
	point pos:center
)