fn setInherit objs:(getcurrentselection()) move:#(true,true,true) rotate:#(true,true,true) scale:#(true,true,true) =
(
	local c = #{},s = move+rotate+scale
	for i = 1 to 9 do c[i] = s[i]
	for i in objs do setInheritanceFlags i c
-- 	print c
)
setInherit scale:#(false,false,false)