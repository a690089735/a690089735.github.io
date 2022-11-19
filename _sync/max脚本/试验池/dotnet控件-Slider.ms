-- (
--   	global trackBarRollout
--   	try destroydialog trackBarRollout catch()
--   	Rollout trackBarRollout "trackbar" 
--   	(
--   		dotnetControl myTrackBar "system.windows.forms.trackbar"
--   		
--   		on trackBarRollout open do
--   		(
--   			myTrackBar.AutoSize = false
--   			myTrackBar.Size = dotNetObject "System.Drawing.Size" 170 20
--   		)
--   	)
--   	createDialog trackBarRollout 200 50
--   )
  
  try(delete objects) catch()
 
 theNode = box width:10
 theNode.width.controller = bezier_float()
 
 try(destroydialog paramRol) catch()
 rollout paramRol ""
 (
 	dotnetControl slider "system.windows.forms.trackbar"
 	
 	fn updateParams param: = if iscontroller param do slider.value = param.value
   
 	on slider ValueChanged v do if isvalidnode theNode do theNode.width = slider.value
 		
 	on paramRol open do
 	(
 		slider.AutoSize = off
 		slider.TickStyle = slider.TickStyle.None
 		slider.Minimum = 0
 		slider.Maximum = 200
 		slider.Size = dotNetObject "System.Drawing.Size" 200 16
 		if isvalidnode theNode do slider.value = theNode.width
 		
 		if isvalidnode theNode do
 		(
 			deleteAllChangeHandlers id:#my_callback 
 			when parameters theNode.width.controller changes id:#my_callback c do updateParams param:c
 		)
 	)
 	on paramRol close do
 	(
 		deleteAllChangeHandlers id:#my_callback 
 	)
 )
 createdialog paramRol width:230 height:30