(
  	global dnListBoxTestRollout
  	try(destroyDialog dnListBoxTestRollout)catch()
  	
  	local dnColor = (dotNetClass "System.Drawing.Color").Black
  	local brushes = dotNetClass "System.Drawing.Brushes"
  	local brushColors = for p in (getPropNames brushes) collect p as string
  	local ListItems = for c in brushColors collect dotNetObject "System.String" c
  	local colorArr = for i in ListItems collect #(dnColor.red, dnColor.green, dnColor.blue)[random 1 3] --(dotNetClass "System.Drawing.Color").fromARGB (random 0 255) (random 0 255) (random 0 255)
  	
  	rollout dnListBoxTestRollout "dnListBoxTestRollout"
  	(
  		local selColor = (dotNetClass "System.Drawing.Color").fromARGB 238 204 85 -- custom selection color (orangey-yellow)
  		local lbBackColor = (dotNetClass "System.Drawing.Color").fromARGB 225 225 225 -- light grey
  		
  		local selBrush = dotNetObject "System.Drawing.SolidBrush" selColor -- create a brush for the selection color
  		local bgBrush = dotNetObject "System.Drawing.SolidBrush" lbBackColor -- create a brush for the backcolor
  		
  		
  		dotNetControl dnListBox "System.Windows.Forms.Listbox" height:400 -- the ListBox
  		radioButtons rdo_exampleMode "Examples:" labels:#("Custom Selection Color", "Named Brushes Colors","Colored Base Off Array") offset:[0,-30] columns:3
  		
  		
  		on rdo_exampleMode changed state do dnListBox.Refresh() -- toggle the drawing state
  		
  		on dnListBox DrawItem arg do --if arg.index == 0 do
  		(
  			case rdo_exampleMode.state of
  			(
  				1: -- use a custom selection color and alternating text color
  				(
  					-- we need to draw a background rectangle first
  					stringState = arg.state.ToString() -- convert the item state to a string
  					-- test the pattern of the string to see if it contains 'selected' since it can contain multiple states eg 'Selected, Focus'
  					if matchPattern stringState pattern:"*selected*" then arg.Graphics.FillRectangle selBrush arg.bounds -- draw the selection color
  					else arg.DrawBackground() -- else draw the background color
  					
  					-- alternatively draw the background color yourself:
  					-- arg.Graphics.FillRectangle bgBrush arg.bounds
  				   
  					-- define a brush to paint the text color
  					brush = if mod arg.index 2 == 0 then brushes.Red else brushes.Black -- alternate between red and black
  					arg.Graphics.DrawString dnListBox.Items.Item[arg.index] arg.font brush arg.bounds.location.x arg.bounds.location.y -- draw the text string
  				)
  				2: -- this mode is not made for selecting - just a demo of the built in colors
  				(
  					-- we need to draw a background rectangle first
  					fillBrush = getProperty brushes brushColors[arg.index+1] -- choose the current brush color by name from the brushes class
  					arg.Graphics.FillRectangle fillBrush arg.bounds -- draw the background
  				   
  					-- define a brush to paint the text color
  					brush = if fillBrush.color.getBrightness() >= 0.5 then brushes.black else brushes.white -- choose black or white based on brightness
  					arg.Graphics.DrawString dnListBox.Items.Item[arg.index] arg.font brush arg.bounds.location.x arg.bounds.location.y -- draw the text string
  				)
  				3: -- assign colors based off a predefined array. To change a color just change the array color and call invalidate() on that item's rectangle
  				(
  					-- we need to draw a background rectangle first
  					stringState = arg.state.ToString() -- convert the item state to a string
  					-- test the pattern of the string to see if it contains 'selected' since it can contain multiple states eg 'Selected, Focus'
  					if matchPattern stringState pattern:"*selected*" then arg.Graphics.FillRectangle selBrush arg.bounds -- draw the selection color
  					else arg.DrawBackground() -- else draw the background color
  					
  					-- define a brush to paint the text color
  					brush = dotNetObject "System.Drawing.SolidBrush" colorArr[arg.index+1]
  					arg.Graphics.DrawString dnListBox.Items.Item[arg.index] arg.font brush arg.bounds.location.x arg.bounds.location.y -- draw the text string
  				)
  			)
  		   
  			arg.DrawFocusRectangle() -- draw the focus rectangle last
  		)
  		
  		on dnListBoxTestRollout open do
  		(
  -- 			dnListBox.drawMode = dnListBox.drawMode.OwnerDrawVariable
  			dnListBox.drawMode = dnListBox.drawMode.OwnerDrawFixed -- fixed seems to be faster than variable, otherwise I can't tell the difference
  			dnListBox.backcolor = lbBackColor
  			dnListBox.SelectionMode = dnListBox.SelectionMode.MultiExtended
  			dnListBox.Items.AddRange ListItems
  		)
  	)
  	createDialog dnListBoxTestRollout width:410 height:420 --pos:[440,85]
  )