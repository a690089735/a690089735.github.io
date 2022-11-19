(
 	rollout upDownRolloutTest "NumericUpDown Control Test" width:220 height:45
 	(
 		dotNetControl upDownCtrl "System.Windows.Forms.NumericUpDown" pos:[10,10] width:50 height:25
 		dotNetControl btnGetValue "System.Windows.Forms.Button" pos:[90,10] width:100 height:21
 		
 		on upDownRolloutTest open do
 		(
 			upDownCtrl.DecimalPlaces = 1
 			upDownCtrl.Increment = 0.1
 			
 			upDownCtrl.Value = 1.0
 			upDownCtrl.Minimum = 0.0
 			upDownCtrl.Maximum = 10.0
 			
 			
 			btnGetValue.Text = "Get Value"
 			btnGetValue.FlatStyle = (dotNetClass "System.Windows.Forms.FlatStyle").System
 		)
 		
 		on btnGetValue MouseClick do
 		(
 			-- Get the value auto converted by MAXScript
 			fValue = upDownCtrl.Value
 			format "Wrong Value : %
" fValue
 			
 			-- Get the decimal value as a .NET object
 			dValue = getProperty upDownCtrl #value asDotNetObject:true
 			
 			-- Convert it to single object value then auto converted to float value by MAXScript
 			fValue = (dotNetClass "System.Decimal").ToSingle dValue
 			format "Good Value : %
" fValue
 		)
 	)
 
 	createDialog upDownRolloutTest
 )