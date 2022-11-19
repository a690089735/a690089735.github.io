folderBrowser = DotnetObject "System.Windows.Forms.OpenFileDialog"
folderBrowser.ValidateNames = false
folderBrowser.CheckFileExists = false
folderBrowser.CheckPathExists = true
folderBrowser.Title = "选择文件夹"

folderBrowser.FileName = "Folder Selection."
fn FileOK s e = 
(
	print s.fileName
)
dotnet.addEventHandler folderBrowser "FileOk" FileOK --这个实际上是在一切都OK后发生,而不是点击OK时发生.
dotNet.setLifetimeControl folderBrowser #dotnet

if (folderBrowser.ShowDialog() == (dotNetClass "System.Windows.Forms.DialogResult").ok) do print(getFilenamePath(folderBrowser.FileName))
-- showmethods folderBrowser
-- showevents folderBrowser