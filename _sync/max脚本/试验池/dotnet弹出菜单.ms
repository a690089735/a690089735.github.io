
	state = true

	form = dotnetobject "MaxCustomControls.Maxform"
	form.Text = "Dynamic ContextMenu"
	cm = dotNetObject "ContextMenu"
	form.ContextMenu = cm
	
		items = #("Fliter","Create Object", "Delete Object", "-", "Select")
		
		for i in items do
		(
			item = cm.menuitems.add i
			item.name = i
		)
		dotnet.addEventHandler cm.menuitems.item[0] "Click" (fn '' = state = not state)
		fn addObject s e = with undo "Create *Object*" on (box pos:(random [-100,-100,-100] [100,100,100]))
		fn delObject s e = with undo "Delete *Object*" on (if objects.count > 0 do delete objects[objects.count])
		dotnet.addEventHandler cm.menuitems.item[1] "Click" addObject
		dotnet.addEventHandler cm.menuitems.item[2] "Click" delObject
		
	fn onPopup s e = 
	(
		i = (s.menuitems.Find "Fliter" off)[1]
		i.checked = state
		
		i = (s.menuitems.Find "Delete Object" off)[1]
		i.enabled = (objects.count > 0)
		
		

		i = (s.menuitems.Find "Select" off)[1]
		i.menuitems.clear()
		
		fn selObject s e = with undo "Select *Object*" on
		(
			select (maxops.getnodebyhandle (s.name as integer))
		) 

		if objects.count > 0 then 
		(
			for n in objects do
			(
				item = i.menuitems.add n.name
				item.name = n.inode.handle as string
				dotnet.addEventHandler item "Click" selObject
			)
		)
		else 
		(
			item = i.menuitems.add "No Objects"
			item.enabled = off
		)
	)
	
	dotnet.addEventHandler cm "Popup" onPopup
	form.showmodeless()
-- (cm.menuitems.Find "Delete Object" off)[1]