try(destroyDialog dgvDialog) catch()
rollout dgvDialog "DataGridView" width:200 height:300
(
	fn onCellBeginEdit s e = 
	(
		format "start edit >> % %
" s e
		enableAccelerators = off
	)
	fn onCellEndEdit s a = 
	(
		format "end edit >> % %
" s e
		enableAccelerators = on
	)
	fn onEditingControlShowing s e =
	(
		fn onEditKeyPress s e = 
		(
			char = e.get_KeyChar asdotnetobject:on
			if not ((dotnetclass "System.Char").IsControl char) and not ((dotnetclass "System.Char").IsDigit char) do
			(
				e.Handled = on
			)
		)
		edt = e.Control
		dotnet.addEventHandler edt "KeyPress" onEditKeyPress
	)
	
	dotnetcontrol panel "ContainerControl" width:190 height:290 pos:[5,5]
	
	fn initDGV panel =
	(
		dgv = dotnetobject "DataGridView"
		
		dgv.RowHeadersVisible = off
		dgv.AutoSizeColumnsMode = dgv.AutoSizeColumnsMode.Fill    
		dgv.AllowUserToAddRows = off
		dgv.ShowEditingIcon = off
		dgv.Dock = dgv.Dock.Fill
		dgv.ReadOnly = off
		
		col = dotnetobject "DataGridViewTextBoxColumn"
		col.HeaderText = "Name"
		dgv.columns.add col

		col = dotnetobject "DataGridViewTextBoxColumn"
		col.HeaderText = "End Frame"
		col.ValueType = dotnetclass "System.Single"
		dgv.columns.add col
		
		for i = 1 to 5 do
		(
			row = dotnetobject "DataGridViewRow"
			dgv.rows.add row
			
			row.cells.item[0].value = ""
			row.cells.item[1].value = random 1 100
		)
		
		dotnet.addEventHandler dgv "CellBeginEdit" onCellBeginEdit
		dotnet.addEventHandler dgv "CellEndEdit" onCellEndEdit
		dotnet.addEventHandler dgv "EditingControlShowing" onEditingControlShowing
		
		panel.Controls.Add dgv 
		
		dgv
	)
				
	on dgvDialog open do 
	(
		initDGV panel
	)
)
createdialog dgvDialog