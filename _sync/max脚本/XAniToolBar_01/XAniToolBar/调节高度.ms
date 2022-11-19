rollout testRollout "" width:50 height:25
(
	button btnEmpty "Empty" align:#center

	on testRollout open do
	(
		cui.RegisterDialogBar testRollout style:#(#cui_dock_top, #cui_max_sized, #cui_floatable, #cui_handles) maxSize:[50,25] minSize:[50,25]
		cui.DockDialogBar testRollout #cui_dock_top

		local pySide2 = python.import "PySide2"
		local toolbarWidget = pySide2.QtWidgets.QWidget.find (UIAccessor.GetParentWindow (UIAccessor.GetParentWindow testRollout.hwnd))
		toolbarWidget.setFixedHeight 52
		print toolbarWidget
	)
)
createDialog testRollout

-- pySide2 = python.import "PySide2"
-- toolbarWidget = pySide2.QtWidgets.QWidget.find (UIAccessor.GetParentWindow (UIAccessor.GetParentWindow testRollout.hwnd))
-- 		toolbarWidget.setFixedHeight 52

-- show python