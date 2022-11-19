global Dos_Command
struct DOSCMD (
    fn run exe_path arg_array:undefined as_string:false =
    (
        local process = dotNetObject "System.Diagnostics.Process"

        process.StartInfo.UseShellExecute = false
        process.StartInfo.RedirectStandardOutput = true
        process.StartInfo.RedirectStandardError = true
        process.StartInfo.FileName = exe_path
        process.StartInfo.Arguments = ""
        
        if arg_array != undefined then
        (
        	for arg in arg_array do (process.StartInfo.Arguments += (" " + arg as string))
        )

        process.Start()
        process.WaitForExit()

        local _output = process.StandardOutput.ReadToEnd()
        local _error = process.StandardError.ReadToEnd()

        process.Close()
        process.Dispose()
        
        if _error == "" then
        (
            if as_string then return (trimRight _output "\r\n")
            else return (filterString _output "\r\n" splitEmptyTokens:false)
        )
        else
        (
            if as_string then return (trimRight _error "\r\n")
            else return (filterString _error "\r\n" splitEmptyTokens:false)
        )
    )
)
if Dos_Command == undefined then Dos_Command = DOSCMD()

print(
	Dos_Command.run "\"C:\\Users\\LiSa\\Desktop\\temp\\ffmpeg\"" arg_array:#(
		"-framerate 30",
		"-start_number 8",
		"-i \"C:\\Users\\LiSa\\AppData\\Local\\Autodesk\\3dsMax\\2020 - 64bit\\ENU\\temp\\_preview_temp\\_preview_temp_%05d.bmp\"",
		"-vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\"",
		"-vcodec libx264",
		"-pix_fmt yuv420p",
		"-preset ultrafast",
		"\"C:\\Users\\LiSa\\AppData\\Local\\Autodesk\\3dsMax\\2020 - 64bit\\ENU\\temp\\output.mp4\""
		)
)

      