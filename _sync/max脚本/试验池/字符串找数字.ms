
fn GetNumFromStr str suffix:false onlystr:false =
(
	numstr = "0123456789"
	r = ""
	if suffix then
	(
		for i = str.count to 1 by -1 do if findString numstr str[i] != undefined then r = str[i] + r else exit
		if onlystr do r = substituteString str r ""
	)
	else
	(
		if onlystr then
			for i = str.count to 1 by -1 where findString numstr str[i] == undefined do r = str[i] + r
		else
			for i = str.count to 1 by -1 where findString numstr str[i] != undefined do r = str[i] + r
	)
	return r
)

GetNumFromStr "01point001"
GetNumFromStr "01point001" suffix:true
GetNumFromStr "01point001" onlystr:true
GetNumFromStr "01point001" suffix:true onlystr:true

-- findString "0123456789" "67"