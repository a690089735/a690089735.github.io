--Destroy dialog if it already exists.
try(destroyDialog theRollout)catch()

--Create a rollout
rollout theRollout "The Rollout" width:300
(
	--Create the dotNet listview control
	dotNetControl lv "system.windows.forms.listView" height:200
	
	--Innitialize the listview control
	fn initLv theLv=
	(
		--Setup the forms view
		theLv.view=(dotNetClass "system.windows.forms.view").details
		theLv.FullRowSelect=true		--Set so full width of listView is selected and not just first column.
		theLv.GridLines=true			--Show lines between the items. 
		theLv.MultiSelect=true			--Allow for multiple selections. 
	)
	
	--Add columns. 
	fn addColumns theLv columnsAr=
	(
		w=(theLv.width/columnsAr.count)-1		--Calculate the width of each column.
		for x in columnsAr do		--Loop through all the column names to be added. 
		(
			theLv.columns.add x w		--Add each new column to the listview control. 
		)
	)
	
	--Adds rows of data to the listView
	fn populateList theLv=
	 (
		colorClass = dotNetClass "System.Drawing.Color"
		
		rows=#()		--Empty array to collect rows of data
		for x in objects do		--Loop through all the objects in the scene. 
		(
			li=dotNetObject "System.Windows.Forms.ListViewItem" x.name		--Create a listViewItem object and name it. 
			li.subitems.add ((classOf x) as string)		--Add data to the second column.
			li.subitems.add ("")
			li.UseItemStyleForSubItems = false
			c = random black white
			li.SubItems.item[2].BackColor = ColorClass.FromArgb c.r c.g c.b
			append rows li		--Added the listViewItem to the rows array
		)
		theLv.items.addRange rows		--Add the array of rows to the listView control.
	 )
		
	on lv mouseDown arg do
	(
	)
	
	on theRollout open do
	(
		initLv lv
		addColumns lv #("Object","Class","Wirecolor")
		populateList lv
	)
)

--Create a dialog and assign the rollout to it. 
createDialog theRollout
