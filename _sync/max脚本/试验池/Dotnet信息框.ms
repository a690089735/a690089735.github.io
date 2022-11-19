(
	local str = @"C:\Program Files (x86)\Autodesk\3ds Max 2010 SDK\maxsdk\ProjectSettings\AdditionalCompilerOptions.Readme.txt"

	local mb = dotnetclass "MessageBox"
	local button = (dotnetclass "MessageBoxButtons").YesNo
	local icon = (dotnetclass "MessageBoxIcon").Warning
	
	local result = mb.show (str + "\n\nDo you want to save the file?") "Quit" button icon
	format "action: %\n" (result.ToString())
) 

