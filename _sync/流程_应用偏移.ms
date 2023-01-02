fn saveTransform objs:(getCurrentSelection()) =
(
	for obj in objs collect obj.transform
)
fn calculateTransform data objs:(getCurrentSelection()) =
(
	for i = 1 to data.count collect data[i] * Inverse objs[i].transform
)
fn applyTransform data objs:(getCurrentSelection()) =
(
	
)