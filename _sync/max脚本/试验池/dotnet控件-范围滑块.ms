try(form.close()) catch()
(
	global form = dotnetobject "MaxCustomControls.Maxform"
	form.Text = "DevX Bars"

	form.controls.add \
	(
		bt = dotnetobject "DevExpress.XtraEditors.ProgressBarControl" 
		bt.EditValue = 10
		bt.Dock = bt.Dock.Top

		bt
	)
	form.controls.add \
	(
		bt = dotnetobject "DevExpress.XtraEditors.ZoomTrackBarControl" 
		bt.EditValue = 10
		bt.Dock = bt.Dock.Top

		bt
	)
	form.controls.add \
	(
		bt = dotnetobject "DevExpress.XtraEditors.RangeTrackBarControl"
		bt.Properties.Minimum
		bt.Properties.Maximum = 100
		bt.Properties.TickStyle = bt.Properties.TickStyle.None
		bt.Value = dotnetobject "DevExpress.XtraEditors.Repository.TrackBarRange" 10 40
		bt.BorderStyle = bt.BorderStyle.Style3D
		bt.Dock = bt.Dock.Top

		bt
	)
	form.Show()
	ok
)