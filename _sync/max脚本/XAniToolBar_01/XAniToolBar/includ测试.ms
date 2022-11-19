
try(DestroyDialog include_test)catch()
rollout include_test "Œﬁ±ÍÃ‚" width:146 height:91
(
	include "includ≤‚ ‘_fn.ms"
	button 'btn1' "Button" pos:[44,21] width:78 height:21 align:#left
	on btn1 pressed  do
		do_print()
	on include_test open do
		create_var()
)
CreateDialog include_test