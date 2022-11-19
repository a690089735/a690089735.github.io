fn getselectionname sel:(getcurrentselection()) =
(
	local
	ary = for i in sel collect i.name,
	str = stringstream ""
	with printAllElements on (format "%" ary to:str)
	str as string
)

getselectionname()
