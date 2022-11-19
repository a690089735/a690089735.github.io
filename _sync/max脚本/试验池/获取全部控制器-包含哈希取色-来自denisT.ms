try(destroydialog subAnimsInspector) catch()
rollout subAnimsInspector "Find SubAnims with denisT" width:240
(
	fn dotcolor c darker:0.4 = (dotnetclass "System.Drawing.Color").FromArgb (c.r*darker) (c.g*darker) (c.b*darker)
	
	fn getNodeColor node tvnode: = 
	(
		fn colorbyname name c: asdotnet:on = 
		(
			maxOps.colorById (gethashvalue (name as string) 10227) &c
			if asdotnet then dotcolor c else c
		)
		case of
		(	
			(iscontroller node.controller): tvnode.forecolor = colorbyname (superclassof node.controller) 
			(isvalidnode node): tvnode.forecolor = colorbyname (superclassof node)
			(iskindof node modifier): tvnode.forecolor = colorbyname (superclassof node)
			(iskindof node material): tvnode.forecolor = colorbyname (classof node)
			(iskindof node subanim and node.value != undefined): tvnode.forecolor = colorbyname (classof node.value)
			(iskindof node subanim and node.controller == undefined): tvnode.forecolor = dotcolor (color 250 250 250)
		)
	)
	fn collectSubAnims node tvnode: =  
	(	  
		if iskindof node subanim do 
		(
			tvnode.nodes.add (tvnode = dotnetobject "TreeNode" node.name)
			getNodeColor node tvnode:tvnode
		)
		for k=1 to node.numsubs do collectSubAnims node[k] tvnode:tvnode
	)

	dotnetcontrol tv "TreeView" pos:[4,4] width:232 height:490
	button search_bt "Find Subs" width:232 align:#right offset:[9,0]
	
	on search_bt pressed do if (node = selection[1]) != undefined do
	(
		tv.BeginUpdate()
		tv.Sorted = true
		tv.nodes.clear()
		root = dotnetobject "TreeNode" node.name
		getNodeColor node tvnode:root
		collectSubAnims node tvnode:root
		tv.nodes.add root
		tv.ExpandAll()
		tv.EndUpdate()
	)
	on subAnimsInspector open do search_bt.pressed()
)
createdialog subAnimsInspector