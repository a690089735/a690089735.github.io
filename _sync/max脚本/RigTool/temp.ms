att = attributes atts
(
	Parameters main
	(
		tobject type:#maxobjecttab tabSize:0 tabSizeVariable:true
		tnode type:#nodetab tabSize:0 tabSizeVariable:true
	)
)

Custattributes.add selection[1] att baseobject:false
selection[1].tnode
append selection[1].tnode selection[2]
append selection[1].tnode selection[3]
selection[1].tobject
append selection[1].tobject selection[2]
append selection[1].tobject selection[3]