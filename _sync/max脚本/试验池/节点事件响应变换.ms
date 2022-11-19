test_event = undefined;gc light:true
a = 0

fn test ev nd = 
(
	a+=1
	print a
	print $Dummy002.transform
)

test_event = NodeEventCallback delay:250 controllerOtherEvent:test