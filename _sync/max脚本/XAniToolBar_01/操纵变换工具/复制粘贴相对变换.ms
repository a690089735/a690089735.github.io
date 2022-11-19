-- rel_trans_list = #()
-- fn copy_rel_trans sources ref trans_list:rel_trans_list =
-- (
-- 	for o in sources collect o.transform * inverse ref.transform
-- )
-- rel_trans_list = (copy_rel_trans selection $Lingzhuxie_Body_Ctrl trans_list:rel_trans_list)
fn paste_rel_trans sources ref trans_list:rel_trans_list =
(
	for i = 1 to trans_list.count do 
	(
		o = sources[i]
		o.transform = trans_list[i] * ref.transform
	)
)
paste_rel_trans selection $Lingzhuxie_Body_Ctrl trans_list:rel_trans_list