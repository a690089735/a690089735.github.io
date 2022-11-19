-- =================================================================
-- Initial script by Harrison Yu (2007)
--
-- dot Net conversion by Jyrgen Aleksejev  a.k.a  Suvakas (April 2010)
-- [www.jastudio.ee]
-- =================================================================


-- by Suvakas (April 2010)
try(DestroyDialog RTSRO) catch(0)

mapped fn freezeTM obj mode:#{1..2} =
(
		if mode[1] then
		(
			local lstCnt = position_List()
			obj.position.controller = lstCnt
			lstCnt[1].controller = position_xyz()
			lstCnt[2].controller = position_xyz()
			lstCnt.active = 2
			lstCnt.setName 1 "Frozen Position"
			lstCnt.setName 2 "Zero Position"
		)
		if mode[2] then
		(
			local lstCnt = rotation_List()
			obj.rotation.controller = lstCnt
			lstCnt[1].controller = euler_xyz()
			lstCnt[2].controller = euler_xyz()
			lstCnt.active = 2
			lstCnt.setName 1 "Frozen Rotation"
			lstCnt.setName 2 "Zero Rotation"
		)
		if mode[3] then
		(
			local lstCnt = scale_List()
			obj.scale.controller = lstCnt
			lstCnt[1].controller = bezier_scale()
			lstCnt[2].controller = bezier_scale()
			lstCnt.active = 2
			lstCnt.setName 1 "Frozen Scale"
			lstCnt.setName 2 "Zero Scale"
		)
		return true
)
fn makepoint mode pname pcolor psize father=(
		local tempoint
		case mode of
			(
				"axis": (tempoint=Point pos:[0,0,0] isSelected:off box:off cross:off axisTripod:on centerMarker:off;)
				"boxcrossaxis": (tempoint=Point pos:[0,0,0] isSelected:off box:on cross:on axisTripod:on centerMarker:off;)
				"cross":	(tempoint=Point pos:[0,0,0] isSelected:off box:off cross:on axisTripod:off centerMarker:off;)
				"marker":	(tempoint=Point pos:[0,0,0] isSelected:off box:off cross:off axisTripod:off centerMarker:on;)
				"markerbox":	(tempoint=Point pos:[0,0,0] isSelected:off box:on cross:off axisTripod:off centerMarker:on;)				
				"box":	(tempoint=Point pos:[0,0,0] isSelected:off box:on cross:off axisTripod:off centerMarker:off;)				
			)
		if tempoint!=undefined do(
			tempoint.name=pname
			tempoint.wirecolor=pcolor 
			tempoint.size=psize
			if father!=undefined do tempoint.parent=father
		)
		return tempoint
)
RTSpringCA = attributes RTSpring
(
	parameters main
	(
		seageoRTS	type:#integer default:1
		sf 			type:#float	default:0.5
		df 			type:#float default:0.1
		v 			type:#point3 default:[0,0,0]
		cValue		type:#point3 default:[0,0,0]
		oldTime 	type:#float default:0.0
		comment		type:#string default:"no Comment ..."
		enabled		type:#boolean default:true
	)
)
rollout RTSRO "Realtime Spring V1.4 by Harrison Yu(harrisyu@tom.com/seageo.com) BaseOn Zhangy's sample scene(www.zhangy.com)" width:720 height:350
(
	dotNetControl SpringList "System.Windows.Forms.ListView" pos:[8,64] width:704 height:200 
	button btnAddPos "Make" pos:[16,16] width:80 height:20
	edittext edtComment "" pos:[264,16] width:136 height:16
	spinner spnSprFac "" pos:[152,16] width:56 height:16 range:[0,10,1] scale:0.01
	spinner spnDmpFac "" pos:[152,40] width:56 height:16 range:[0,1,0.1] scale:0.01
	spinner spnHelperSize "" pos:[48,40] width:48 height:16 range:[0.1,100,5] scale:0.1
	GroupBox grp1 "Make Spring At First Selected Node Position" pos:[8,0] width:400 height:64
	label lbl2 "Comment" pos:[216,16] width:48 height:16
	label lbl3 "Spring" pos:[104,16] width:40 height:16
	label lbl4 "Damping" pos:[104,40] width:48 height:16
	label lbl5 "Size" pos:[16,40] width:32 height:16
	checkbox chklink "link" pos:[216,40] width:40 height:16 checked:true
	button btnRescan "Rescan" pos:[624,40] width:88 height:20
	button btnMakeChain "Build Chain" pos:[320,40] width:80 height:20
	button btnSelDrv "Select Driver" pos:[400,296] width:80 height:20
	button btnSelSpr "Select Spring" pos:[400,272] width:80 height:20
	spinner spnIncV "" pos:[208,272] width:40 height:16 range:[0.01,1,0.1] scale:0.01
	button btnDecSpr "-" pos:[88,272] width:16 height:20
	button btnIncSpr "+" pos:[104,272] width:16 height:20
	button btnDecDmp "-" pos:[168,272] width:16 height:20
	button btnIncDmp "+" pos:[184,272] width:16 height:20
	label lbl65 "Spring" pos:[40,272] width:40 height:16
	label lbl66 "Damping" pos:[120,272] width:48 height:16
	spinner spnSprValue "" pos:[40,296] width:56 height:16 range:[0.01,10,0]
	spinner spnDmpValue "" pos:[120,296] width:56 height:16 range:[0.01,1,0] scale:0.1
	button btnOn "ON" pos:[8,272] width:24 height:20
	button btnOff "OFF" pos:[8,296] width:24 height:20
	button btnBakeAni "Bake Animation" pos:[624,272] width:88 height:20
	button btnUseBaked "Use Baked" pos:[560,272] width:64 height:20
	button btnUseSpr "Use Spring" pos:[560,296] width:64 height:20
	edittext edtNewComment "Comment" pos:[184,296] width:208 height:16
	button btnselall "Select All" pos:[488,272] width:64 height:20
	edittext edtSelNode "" pos:[256,272] width:136 height:16 enabled:false
	button btnDelAni "Delete Animation" pos:[624,296] width:88 height:20	
	checkbutton ckbForceUpd "Force Update" pos:[624,8] width:88 height:20
	Timer tmr25fps "Timer" pos:[256,40] width:24 height:24 interval:40 active:false
	spinner spnXTime "bake animation speed:1/" pos:[128,328] width:40 height:16 range:[1,100,1] type:#integer scale:1
	spinner spnloop "Loops Before Bake" pos:[272,328] width:40 height:16 range:[0,9,0] type:#integer scale:1
	spinner spnSubF "Subsample" pos:[368,328] width:40 height:16 range:[1,100,1] type:#integer scale:1
	GroupBox grp11 "" pos:[3,264] width:397 height:56
	button btnABake "Bake With Subsample Frame" pos:[560,328] width:152 height:16
	dropdownList ddlComm "" pos:[424,24] width:128 height:22
	button btnfilter "Filter" pos:[560,24] width:48 height:20
	GroupBox grp9 "Filter List By Comment" pos:[416,0] width:200 height:64
	label lbl25 "ESC to exit" pos:[480,328] width:80 height:16
	
	local nodeTab=#()
	local lastselitem
	local commList=#()
	
	fn getherComm comm=(
		local newcomm=true
		for c in commList do if comm==c then (newcomm=false;exit;)
		if newcomm then
		(
		append commList comm	
		ddlComm.items=commList
		)
	)
	fn initListView lv =
	(
		R = dotnetobject "System.Int32" 50
		Colr = dotNetClass "system.drawing.color" 
		
		lv.backcolor = Colr.green --color 50 120 60
		lv.forecolor = Colr.white --color 255 255 255
		
		lv.gridLines = true  
		lv.View = (dotNetClass "System.Windows.Forms.View").Details --#lvwReport  
		lv.MultiSelect =true
		lv.fullRowSelect = true 
		--lv.sorted = false --true 
		lv.LabelEdit=  true
		lv.AllowColumnReorder =false
		lv.Checkboxes = false --true 	
		lv.HideSelection = false
		
		/*
		layout_def = #(#("-",28),#("Comment",120), #("Spring Node",120),#("Driver Node",120), #("Spring",50), #("Damp",50), #("Enabled",54),#("weight",54), #("Keys",50), #("Weight",50),#("Motion Parent",100),#("Value",160), #("Speed",160), #("-",32))
			for i in layout_def do
			(
				column = lv.ColumnHeaders.add() 
				column.text = i[1]
			)
			 LV_FIRST = 0x1000
			 LV_SETCOLUMNWIDTH = (LV_FIRST + 30) 
			 for i = 0 to layout_def.count-1 do 
			  windows.sendMessage lv.hwnd LV_SETCOLUMNWIDTH i layout_def[1+i][2]
			  
		*/
		lv.Columns.add "-" 28
		lv.Columns.add "Comment" 120
		lv.Columns.add "Spring Node" 120
		lv.Columns.add "Driver Node" 120
		lv.Columns.add "Spring" 50
		lv.Columns.add "Damp" 50
		lv.Columns.add "Enabled" 54
		lv.Columns.add "Weight" 54
		lv.Columns.add "Keys" 50
		lv.Columns.add "Weight" 50
		lv.Columns.add "Motion Parent" 100
		lv.Columns.add "Value" 160
		lv.Columns.add "Speed" 160		
		lv.Columns.add "-" 32	
	) 
	
	fn fillInSpreadSheet lv cleanselected filter:false=
	(
		lv.items.Clear()
		if filter==false  then (ddlComm.items=#();commList=#())
--	 	lv.ListItems.clear()
		--lv.Clear()
	    nodeTab =#()
		lastselitem=undefined	
		edtSelNode.text=""
		edtNewComment.text=""
		spnSprValue.value=0
		spnDmpValue.value=0
		
		local index=1
		for o in objects do (
			if isProperty  o "position" then
				if classof o.position.controller==position_list then
			(
				local con=o.position.controller[1].controller			
				if (isProperty  con "seageoRTS")  do (
					if filter and con.comment!=ddlComm.selected then 
					(
					--do nothing
					)
					else
					(
						if filter==false then getherComm con.comment
				append nodeTab o
				
				
				rows=#()		--Empty array to collect rows of data

				li=dotNetObject "System.Windows.Forms.ListViewItem" (index as string)
				
				li.subitems.add (con.comment as string)
				li.subitems.add (o.name as string)
				
				local drvnode=con.GetNode "DrvNode"
				li.subitems.add (drvnode.name as string)
				li.subitems.add (con.sf as string)
				li.subitems.add (con.df as string)
						
				li.subitems.add (con.enabled as string)
				li.subitems.add (o.position.controller.weight[1] as string)				
				li.subitems.add (o.position.controller[3].controller.keys.count as string)
				li.subitems.add (o.position.controller.weight[3] as string)

				local parName=""
				if  drvnode.parent!=undefined then parName=drvnode.parent.name
				li.subitems.add parName

				li.subitems.add (con.cValue as string)
				li.subitems.add (con.v as string)				
				

--				li = lv.ListItems.add()
--				li.text = index as string
				
--				sub_li = li.ListSubItems.add()
--				sub_li.text = con.comment as string
				
--				sub_li = li.ListSubItems.add()
--				sub_li.text = o.name as string
				
--				local drvnode=con.GetNode "DrvNode"
--				sub_li = li.ListSubItems.add()
--				sub_li.text = drvnode.name as string
				
--				sub_li = li.ListSubItems.add()
--					sub_li.text = con.sf as string
			
--				sub_li = li.ListSubItems.add()
--					sub_li.text = con.df as string
					
--				sub_li = li.ListSubItems.add()
--				sub_li.text = con.enabled as string
				
--				sub_li = li.ListSubItems.add()
--					sub_li.text = o.position.controller.weight[1] as string
					
--				sub_li = li.ListSubItems.add()				
--					sub_li.text = o.position.controller[3].controller.keys.count as string
					
--				sub_li = li.ListSubItems.add()				
--					sub_li.text = o.position.controller.weight[3] as string
					
--				sub_li = li.ListSubItems.add()
--					local parName=""
--					if  drvnode.parent!=undefined then parName=drvnode.parent.name
--					sub_li.text = parName					
--				sub_li = li.ListSubItems.add()
--					sub_li.text = con.cValue as string					
--				sub_li = li.ListSubItems.add()
--					sub_li.text = con.v as string

			append rows li		--Added the listViewItem to the rows array
			lv.items.addRange rows		--Add the array of rows to the listView control.
						
				if cleanselected then li.selected=false
				index+=1
				)--end check filter
				)--end if		
			)--end if 	position_list		
		)--end for o
	)	
	fn getFirstSelected =
	(
		if selection.count<=0 then return undefined
		else return selection[1]
	)
	fn makeSpring drvnode springnode enabled:true=
	(
			springnode.transform=drvnode.transform
			freezeTM springnode mode:#{1,2}
			springnode.position.controller[3].controller= Position_XYZ()
			springnode.position.controller.weight[3]=0
			local newScriptController=position_script ()
			springnode.position.controller[1].controller= newScriptController
			custAttributes.add springnode.position.controller[1].controller RTSpringCA
			newScriptController.AddNode "DrvNode" drvnode
			newScriptController.cValue.controller=bezier_point3 ()
			newScriptController.cValue.controller.keyable=false
			newScriptController.v.controller=bezier_point3 ()			
			newScriptController.v.controller.keyable=false			
			newScriptController.cValue=drvnode.pos
			newScriptController.oldTime.controller=bezier_float ()			
			newScriptController.oldTime.controller.keyable=false						
			newScriptController.oldTime=timestamp()/320 as float
			newScriptController.sf=spnSprFac.value
			newScriptController.df=spnDmpFac.value*spnSprFac.value --damp值不要超过spring值
			newScriptController.enabled=enabled
			newScriptController.comment=edtComment.text
			local	sscript="if this.enabled then (\n"
					sscript+="this.v=-this.v*this.df+(DrvNode.pos-this.cValue)*this.sf\n"
					sscript+="if abs(this.cValue.x)>=10000 then\n"
					sscript+="(\nthis.v=[0,0,0]\n"
					sscript+="this.cValue=[0,0,0]\n)\n"
					sscript+="cTime=timestamp()/320 as float\n"
					sscript+="diff=cTime-this.oldTime\n"
					sscript+="this.oldTime=cTime\n"
					sscript+="if diff>0.1 then diff=0.1\n"
					sscript+="if diff<0 then this.cValue\n"
					sscript+="else this.cValue+=this.v*diff\n"
					sscript+=")else(DrvNode.pos)"
			newScriptController.script=sscript	
	)
	fn QuickLookAtUpAxis target Up taxis saxis uaxis=(
		local mycontroller
				mycontroller=LookAt_Constraint()		
				if	target!=undefined then	mycontroller.appendTarget target 50
				mycontroller.viewline_Length_abs = off
				mycontroller.lookat_vector_length = 0				
				if Up!=undefined then
				(
				mycontroller.upnode_world = off
				mycontroller.pickUpnode = Up
				)
				mycontroller.target_axis =taxis 
				mycontroller.StoUp_axis =saxis 
				mycontroller.upnode_axis =uaxis				
		return mycontroller
	)

	on RTSRO open do
	(
		initListView SpringList 
		fillInSpreadSheet SpringList  true 		
	)
	
	--by Suvakas (April 2010)
	on SpringList mouseDown arg do
	(
		hit=(SpringList.HitTest (dotNetObject "System.Drawing.Point" arg.x arg.y))
		idx = hit.item.subItems.item[0].text as integer
		local con=nodeTab[idx].position.controller[1].controller	
		edtSelNode.text=nodeTab[idx].name
		edtNewComment.text=hit.item.subItems.item[1].text
		spnSprValue.value=con.sf
		spnDmpValue.value=con.df
		--print hit.item.subItems.item[1].text
	)

	/*
	on SpringList ItemClick Item do
	(
			lastselitem=Item 
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller	
			edtSelNode.text=nodeTab[idx].name
			edtNewComment.text=item.listSubItems[1].text
			spnSprValue.value=con.sf
			spnDmpValue.value=con.df
	)
	*/
	
	on btnAddPos pressed do
	(
		local selnode= getFirstSelected ()
		if selnode!=undefined do
		(
			local pointname=uniqueName (selnode.name+"_Spr")
			local pointsize=spnHelperSize.value
			local springParent=undefined
			if chklink.checked then springParent=selnode
			local drvpoint= makepoint "markerbox" pointname blue pointsize springParent
			local newpoint= makepoint "cross" (pointname+"N") green pointsize undefined
			drvpoint.transform=selnode.transform
			makeSpring drvpoint newpoint
			fillInSpreadSheet SpringList  true 			
		)
	)
	on btnRescan pressed do
	(
		fillInSpreadSheet SpringList  true 
	)
	on btnMakeChain pressed do
	(
		local selnode= getFirstSelected ()
		if selnode!=undefined do
		(
			local sprnode=#()		
			local node1=selnode
			local node2=undefined
			local node3=undefined			
			local onGoing=true
			while onGoing do
			(
				node2=node1.children[1]
				if node2!=undefined then
				(
					node3=node2.children[1]
					if node3!=undefined then
					(
						local pointname=uniqueName (node2.name+"_Spr")
						local pointsize=spnHelperSize.value
						local springParent=node1
						local drvpoint= makepoint "markerbox" pointname blue pointsize springParent
						local newpoint= makepoint "cross" (pointname+"N") green pointsize undefined
						drvpoint.transform=node3.transform
						makeSpring drvpoint newpoint enabled:false --turn off first fix for max8	
						append sprnode newpoint --fix for max8
						node2.rotation.controller=QuickLookAtUpAxis newpoint node1 0 1 1
						node1=node2
					)
					else  onGoing=false
				)
				else onGoing=false
			) --end while
			for o in sprnode do o.position.controller[1].enabled=true
		fillInSpreadSheet SpringList  true 				
		)	
	)
	on btnSelDrv pressed do
	(
		clearselection()	
		
		--by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local drvnode=nodeTab[idx].position.controller[1].controller.GetNode "DrvNode"
				selectmore drvnode	
			)
		)
		
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local drvnode=nodeTab[idx].position.controller[1].controller.GetNode "DrvNode"
			selectmore drvnode
		)
		*/
	)
	on btnSelSpr pressed do
	(
		clearselection()	
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			selectmore nodeTab[idx]
		)
		*/	
		
		--by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				selectmore nodeTab[idx]		
			)
		)
		
	)
	on btnDecSpr pressed do
	(
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller
				con.sf-=spnIncV.value
				SpringList.SelectedItems.item[i].SubItems.Item[4].text = con.sf as string
			)
		)
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller
			con.sf-=spnIncV.value
			item.listSubItems[4].text=con.sf as string
		)
		*/	
	)
	on btnIncSpr pressed do
	(
		
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller
				con.sf+=spnIncV.value
				SpringList.SelectedItems.item[i].SubItems.Item[4].text = con.sf as string
			)
		)
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller
			con.sf+=spnIncV.value
			item.listSubItems[4].text=con.sf as string
		)
		*/	
	)
	on btnDecDmp pressed do
	(
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller
				con.df-=spnIncV.value
				SpringList.SelectedItems.item[i].SubItems.Item[5].text = con.df as string
			)
		)
		
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller
			con.df-=spnIncV.value
			item.listSubItems[5].text=con.df as string
		)
		*/	
	)
	on btnIncDmp pressed do
	(
		
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller
				con.df+=spnIncV.value
				SpringList.SelectedItems.item[i].SubItems.Item[5].text = con.df as string
			)
		)
		
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller
			con.df+=spnIncV.value
			item.listSubItems[5].text=con.df as string
		)
		*/		
	)
	
	on spnSprValue changed val do
	(
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller
				con.sf=val
				SpringList.SelectedItems.item[i].SubItems.Item[4].text = val as string
			)
		)
		
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller
			con.sf=val 
			item.listSubItems[4].text=val as string
		)
		*/		
	)
	
	on spnDmpValue changed val do
	(
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller
				con.df=val
				SpringList.SelectedItems.item[i].SubItems.Item[5].text = val as string
			)
		)
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller
			con.df=val 
			item.listSubItems[5].text=val as string
		)
		*/	
	)
	on btnOn pressed do
	(
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local drvnode=nodeTab[idx].position.controller[1].controller.GetNode "DrvNode"
			
			local con=nodeTab[idx].position.controller[1].controller
			con.enabled=true
			item.listSubItems[6].text=con.enabled as string
		)*/
		
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local drvnode=nodeTab[i+1].position.controller[1].controller.GetNode "DrvNode"
				local con=nodeTab[idx].position.controller[1].controller
				con.enabled=true
				SpringList.SelectedItems.item[i].SubItems.Item[6].text = (con.enabled as string)		
			)
		)
	)
	on btnOff pressed do
	(
		
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller
--				print nodeTab[idx]
				con.enabled=false
				SpringList.SelectedItems.item[i].SubItems.Item[6].text = (con.enabled as string)		
			)
		)
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller
			con.enabled=false
			item.listSubItems[6].text=con.enabled as string			
		)*/
	)
	
	on btnBakeAni pressed do
	(
	--		local fps=4800.0/ticksPerFrame
		local tps=1000.0/frameRate
		local diff=tps/320.0

		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local obj=nodeTab[idx]		
				local con=nodeTab[idx].position.controller[1].controller
				local anicon=nodeTab[idx].position.controller[3].controller	
				obj.position.controller.weight[1]=0
				obj.position.controller.weight[3]=100
				anicon.value=con.value
		--			con.v=[0,0,0]
				con.cValue=anicon.value	
			)
		)
		
		--设置初始位置
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local obj=nodeTab[idx]		
			local con=nodeTab[idx].position.controller[1].controller	
			local anicon=nodeTab[idx].position.controller[3].controller	
			obj.position.controller.weight[1]=0
			obj.position.controller.weight[3]=100
			anicon.value=con.value
	--			con.v=[0,0,0]
			con.cValue=anicon.value
		)
*/	
		for loop=1 to spnloop.value do --空运行，寻找稳定状态
		(
							for currFrame=animationRange.start to animationRange.end do
							(
								if keyboard.escPressed then exit									
								for l=1 to spnXTime.value do --多计算几次
								
								-- by Suvakas (April 2010)
								if SpringList.SelectedItems.count > 0 then
								(
									for i = 0 to (SpringList.SelectedItems.count - 1) do
									(
										idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
										local obj=nodeTab[idx]		
										local con=nodeTab[idx].position.controller[1].controller	
										local anicon=nodeTab[idx].position.controller[3].controller
										slidertime=currFrame
										DrvNode=con.GetNode "DrvNode"
										con.v=-con.v*con.df+(DrvNode.pos-con.cValue)*con.sf
										if abs(con.cValue.x)>=10000 then
										(
										con.v=[0,0,0]
										con.cValue=[0,0,0]
										)
										con.cValue+=con.v*diff
										anicon.value=con.cValue --不记录
									)
								)
								
								/*
								for item in SpringList.listItems do if item.selected then (		
									idx=item.text as integer
									local obj=nodeTab[idx]		
									local con=nodeTab[idx].position.controller[1].controller	
									local anicon=nodeTab[idx].position.controller[3].controller			
									slidertime=currFrame
										DrvNode=con.GetNode "DrvNode"
										con.v=-con.v*con.df+(DrvNode.pos-con.cValue)*con.sf
										if abs(con.cValue.x)>=10000 then
										(
										con.v=[0,0,0]
										con.cValue=[0,0,0]
										)
										con.cValue+=con.v*diff
										anicon.value=con.cValue --不记录
								)
								*/
							)		
		)
		
		for currFrame=animationRange.start to animationRange.end do
		(
			if keyboard.escPressed then exit		
			for l=1 to spnXTime.value do --多计算几次
			-- by Suvakas (April 2010)
			if SpringList.SelectedItems.count > 0 then
			(
				for i = 0 to (SpringList.SelectedItems.count - 1) do
				(
					idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
					local obj=nodeTab[idx]		
					local con=nodeTab[idx].position.controller[1].controller	
					local anicon=nodeTab[idx].position.controller[3].controller			
					slidertime=currFrame
						DrvNode=con.GetNode "DrvNode"
						con.v=-con.v*con.df+(DrvNode.pos-con.cValue)*con.sf
						if abs(con.cValue.x)>=10000 then
						(
						con.v=[0,0,0]
						con.cValue=[0,0,0]
						)
						con.cValue+=con.v*diff
					with animate on (
						anicon.value=con.cValue
				)
				)
			)
			/*
			for item in SpringList.listItems do if item.selected then (		
				idx=item.text as integer
				local obj=nodeTab[idx]		
				local con=nodeTab[idx].position.controller[1].controller	
				local anicon=nodeTab[idx].position.controller[3].controller			
				slidertime=currFrame
					DrvNode=con.GetNode "DrvNode"
					con.v=-con.v*con.df+(DrvNode.pos-con.cValue)*con.sf
					if abs(con.cValue.x)>=10000 then
					(
					con.v=[0,0,0]
					con.cValue=[0,0,0]
					)
					con.cValue+=con.v*diff
				with animate on (
					anicon.value=con.cValue
	
				)
			)
			*/
		)
		fillInSpreadSheet SpringList  false		
	)
	on btnUseBaked pressed do
	(
		
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller
				local obj=nodeTab[idx]
				local listcon=obj.position.controller
				listcon.weight[1]=0
				listcon.weight[3]=100
				SpringList.SelectedItems.item[i].SubItems.Item[7].text = listcon.weight[1] as string
				SpringList.SelectedItems.item[i].SubItems.Item[9].text = listcon.weight[3] as string
			)
		)
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller
			local obj=nodeTab[idx]
			local listcon=obj.position.controller
			listcon.weight[1]=0
			listcon.weight[3]=100
			item.listSubItems[7].text=listcon.weight[1] as string
			item.listSubItems[9].text=listcon.weight[3] as string			
		)
		*/		
	)
	
	on btnUseSpr pressed do
	(
		
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller
				local obj=nodeTab[idx]
				local listcon=obj.position.controller
				listcon.weight[1]=100
				listcon.weight[3]=0
				SpringList.SelectedItems.item[i].SubItems.Item[7].text = listcon.weight[1] as string
				SpringList.SelectedItems.item[i].SubItems.Item[9].text = listcon.weight[3] as string
			)
		)
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local con=nodeTab[idx].position.controller[1].controller
			local obj=nodeTab[idx]
			local listcon=obj.position.controller
			listcon.weight[1]=100
			listcon.weight[3]=0
			item.listSubItems[7].text=listcon.weight[1] as string
			item.listSubItems[9].text=listcon.weight[3] as string			
		)
		*/		
	)
	
	on edtNewComment entered text do
	(
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local con=nodeTab[idx].position.controller[1].controller	
				con.Comment=text 
				SpringList.SelectedItems.item[i].SubItems.Item[1].text = text
			)
			fillInSpreadSheet SpringList  true 
		)
		
		/*
		if	lastselitem!=undefined then
		(	
			idx=lastselitem.text as integer
			local con=nodeTab[idx].position.controller[1].controller	
			con.Comment=text 
			lastselitem.listSubItems[1].text=text
		)
		*/
	)
	on btnselall pressed do
	(
		-- by Suvakas (April 2010)
 		for i = 0 to SpringList.items.count-1 do
 		(
 			 SpringList.items.item[i].selected=true
 		)
	)
	on btnDelAni pressed do
	(
		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local obj=nodeTab[idx]		
	--			local con=nodeTab[idx].position.controller[1].controller	
				local anicon=nodeTab[idx].position.controller[3].controller	
				deleteKeys anicon #allKeys
			)
		)	
		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local obj=nodeTab[idx]		
	--			local con=nodeTab[idx].position.controller[1].controller	
			local anicon=nodeTab[idx].position.controller[3].controller	
			deleteKeys anicon #allKeys
		)
		*/
		fillInSpreadSheet SpringList  true 				
	)
	
	on ckbForceUpd changed state do
	(
		tmr25fps.active=state
	)
	on tmr25fps tick do
	(
		for o in nodeTab do o.pos
	)
	on btnABake pressed do
	(
		local tps=1000.0/frameRate
		local diff=tps/320.0		

		-- by Suvakas (April 2010)
		if SpringList.SelectedItems.count > 0 then
		(
			for i = 0 to (SpringList.SelectedItems.count - 1) do
			(
				idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
				local obj=nodeTab[idx]		
				local con=nodeTab[idx].position.controller[1].controller	
				local anicon=nodeTab[idx].position.controller[3].controller	
				obj.position.controller.weight[1]=0
				obj.position.controller.weight[3]=100
				anicon.value=con.value
				con.cValue=anicon.value
			)
		)

		/*
		for item in SpringList.listItems do if item.selected then (
			idx=item.text as integer
			local obj=nodeTab[idx]		
			local con=nodeTab[idx].position.controller[1].controller	
			local anicon=nodeTab[idx].position.controller[3].controller	
			obj.position.controller.weight[1]=0
			obj.position.controller.weight[3]=100
			anicon.value=con.value
			con.cValue=anicon.value
		)
		*/
	
		for loop=1 to spnloop.value do --空运行，寻找稳定状态
		(
							for currFrame=animationRange.start to animationRange.end do
							(
									if keyboard.escPressed then exit																	
								for l=1 to spnXTime.value do --多计算几次
								(
									-- by Suvakas (April 2010)
									if SpringList.SelectedItems.count > 0 then
									(
										for i = 0 to (SpringList.SelectedItems.count - 1) do
										(
											idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
											local obj=nodeTab[idx]		
											local con=nodeTab[idx].position.controller[1].controller	
											local anicon=nodeTab[idx].position.controller[3].controller			
											slidertime=currFrame
												DrvNode=con.GetNode "DrvNode"
												con.v=-con.v*con.df+(DrvNode.pos-con.cValue)*con.sf
												if abs(con.cValue.x)>=10000 then
												(
												con.v=[0,0,0]
												con.cValue=[0,0,0]
												)
												con.cValue+=con.v*diff
												anicon.value=con.cValue --不记录
												)
									)

								/*
								for item in SpringList.listItems do if item.selected then (		
									idx=item.text as integer
									local obj=nodeTab[idx]		
									local con=nodeTab[idx].position.controller[1].controller	
									local anicon=nodeTab[idx].position.controller[3].controller			
									slidertime=currFrame
										DrvNode=con.GetNode "DrvNode"
										con.v=-con.v*con.df+(DrvNode.pos-con.cValue)*con.sf
										if abs(con.cValue.x)>=10000 then
										(
										con.v=[0,0,0]
										con.cValue=[0,0,0]
										)
										con.cValue+=con.v*diff
										anicon.value=con.cValue --不记录
									)
								*/
								)
							)		
		)
		local subframe=1/spnSubF.value as time
		local diff=diff/spnSubF.value as float
		for currFrame=animationRange.start to animationRange.end do
		(
			if keyboard.escPressed then exit		
			for l=1 to spnXTime.value do --多计算几次
			for sl=0 to (spnSubF.value-1) do --subframe
			-- by Suvakas (April 2010)
			if SpringList.SelectedItems.count > 0 then
			(
				for i = 0 to (SpringList.SelectedItems.count - 1) do
				(
					idx = SpringList.SelectedItems.item[i].SubItems.Item[0].text as integer
					local obj=nodeTab[idx]		
					local con=nodeTab[idx].position.controller[1].controller	
					local anicon=nodeTab[idx].position.controller[3].controller			
					slidertime=currFrame
						DrvNode=con.GetNode "DrvNode"
						DrvNodepos=at time (currFrame+subframe*sl as time) DrvNode.pos
						con.v=-con.v*con.df+(DrvNodepos-con.cValue)*con.sf
						if abs(con.cValue.x)>=10000 then
						(
						con.v=[0,0,0]
						con.cValue=[0,0,0]
						)
						con.cValue+=con.v*diff
					with animate on (	anicon.value=con.cValue		)

				)
			)
			
			/*
			for item in SpringList.listItems do if item.selected then (		
				idx=item.text as integer
				local obj=nodeTab[idx]		
				local con=nodeTab[idx].position.controller[1].controller	
				local anicon=nodeTab[idx].position.controller[3].controller			
				slidertime=currFrame
					DrvNode=con.GetNode "DrvNode"
					DrvNodepos=at time (currFrame+subframe*sl as time) DrvNode.pos
					con.v=-con.v*con.df+(DrvNodepos-con.cValue)*con.sf
					if abs(con.cValue.x)>=10000 then
					(
					con.v=[0,0,0]
					con.cValue=[0,0,0]
					)
					con.cValue+=con.v*diff
				with animate on (	anicon.value=con.cValue		)
			)
			*/
		)
		fillInSpreadSheet SpringList  false			
	)
	on btnfilter pressed do
	(
		fillInSpreadSheet SpringList  true filter:true
	)
)


createdialog RTSRO 