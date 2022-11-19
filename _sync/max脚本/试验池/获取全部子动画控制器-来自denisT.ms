try(form.close()) catch()
(
	global form = dotnetobject "MaxCustomControls.Maxform"
	form.ShowInTaskbar = form.MinimizeBox = form.MaximizeBox = off
	form.StartPosition = form.StartPosition.Manual
	form.Bounds = dotnetobject "System.Drawing.Rectangle" 800 200 100 60

	cm = dotNetObject "ContextMenu"
	
	fn makeSubAnimItem node: = 
	(
		local item
		fn onClick s e = (format "picked: %
" s.tag.value)
		if node != undefined and node.Name != ": None" do
		(
			item = dotnetobject "MenuItem" node.name
			item.tag = dotnetmxsvalue node
			if node.numsubs == 0 do dotnet.addEventHandler item "Click" onClick
				
			for k=1 to node.numsubs do
			(
				i = makeSubAnimItem node:(getSubAnim node k)
				if i != undefined do item.menuitems.add i
			)
		)
		item
	)
	fn onPopup s e = 
	if not isvalidnode (node = selection[1]) then 
		s.menuitems.Clear()
	else
	(
		print node
		s.menuitems.add (makeSubAnimItem node:node)
	)
	fn onCollapse s e = s.menuitems.Clear()
	
	dotnet.addEventHandler cm "Popup" onPopup
	dotnet.addEventHandler cm "Collapse" onCollapse
	
	form.ContextMenu = cm	
	form.showmodeless()
)		