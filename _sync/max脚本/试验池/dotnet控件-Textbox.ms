try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:160 height:128
(
	local Regex = dotNetClass "System.Text.RegularExpressions.Regex"
	dotnetcontrol 'edt1' "TextBox"
	dotnetcontrol 'edt2' "TextBox" 
	dotnetcontrol 'edt3' "TextBox"
	on unnamedRollout open do
	(
-- 		edt1.BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None
		edt2.BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None
		edt3.BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None
-- 		edt3.MultiLine = true
-- 		edt3.AcceptsReturn = true
--         edt3.AcceptsTab = true
	)
-- 	on edt3 
-- 	
-- 	Regex.IsMatch(inputerstr, "^([0-9]{1,}[.][0-9]*)$")
	on edt3 TextChanged s e do
	(
-- 		print (e.ToString())
-- 		print "======"
-- 		showMethods e
-- 		print "---"
-- 		showProperties e
-- 		print "---"
-- 		showEvents e
-- 		print "======"
		print (Regex.IsMatch s.text "[^0-9]+")
	)
-- 	on edt3 enter s e do
-- 	(
-- 		print (Regex.IsMatch s.text "^(([1-9]\d+)|([2-9]))$")
-- 	)
-- 	on edt3 LostFocus s e do
-- 	(
-- 		print (Regex.IsMatch s.text "^(([1-9]\d+)|([2-9]))$")
-- 	)
	on edt3 TextChanged s e do --KeyDown
	(
-- 		blockChar = not ((dotnetclass "System.Single").tryParse (s.text + e.keyCode.ToString()) &result)

-- 		if (e.keyCode.ToString()) == "Up" do (s.Text = numConvert s.Text 1 dp rangeArr[itm].x rangeArr[itm].y ; s.Select s.TextLength 0) --UpKey
-- 		if (e.keyCode.ToString()) == "Down" do (s.Text = numConvert s.Text -1 dp rangeArr[itm].x rangeArr[itm].y ; s.Select s.TextLength 0) --DownKey
	)
)
createdialog unnamedRollout