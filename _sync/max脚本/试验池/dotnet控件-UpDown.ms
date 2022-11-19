rollout NumericUpDownTestRollout "" height:50 width:80
(
	dotNetControl upDown "System.Windows.Forms.NumericUpDown" align:#center height:50 width:50

	on NumericUpDownTestRollout open do
	(
		upDown.Value = 50
		upDown.Maximum = 100
		upDown.Minimum = 0
	)
)

createdialog NumericUpDownTestRollout