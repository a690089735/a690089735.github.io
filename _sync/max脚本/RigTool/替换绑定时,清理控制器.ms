fn controller_to_prs node_list =
undo "reset controller" on(
	for n in node_list do
	(
		local
		m3 = n.transform
		
		n[3].controller = transform_script()
		n[3].controller = prs()
		
		n.transform = m3
	)
)
controller_to_prs (getCurrentSelection())