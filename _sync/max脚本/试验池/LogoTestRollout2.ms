/*
try(destroydialog testRoll) catch() 
rollout testRoll "LOGO"
(
	local img_logo = @"c:\Program Files\Autodesk\3ds Max 2012\Scripts\smiley.bmp"
	button logo "" pos:[0,0] width:100 height:100 images:#(img_logo, undefined, 1, 1, 1, 1, 1) enabled:false
)
createDialog testRoll 100	100 style:#(#style_titlebar, #style_sysmenu, #style_toolwindow)
*/

try(destroydialog testRoll) catch() 
rollout testRoll "LOGO"
(
	--if you want to convert image to string see these link: http://www.scriptspot.com/3ds-max/scripts/base64-dotnet-image-encoder
	local img_logo = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiIAAC4iAari3ZIAAABuSURBVDhPzUyBDYAwCNt//H8PWmALuKqJzsQmHdC1bar6iv7MgMhYUApUxGi6CGX8dd8HBaaRYGZ44L0vyHffY8Lr2X8XMIYH3sUFOybzGeH1wMICaryi50kB9uOdZ9FTAWCir4Z85zn0UfCc2jb+mfUonpKz7gAAAABJRU5ErkJggg=="
	
	fn ConvertImageToBase64String filename =
	(
		if (doesfileexist filename) do
		(
			memstream = dotnetobject "System.IO.MemoryStream"
			ImgLoaded = ImageClass.fromfile filename
			ImgLoaded.save memstream ImgLoaded.rawformat
			Base64string = ConvertClass.ToBase64String (memstream.ToArray())
			memstream.close()
			return Base64String
		)
	)
	fn StringToImage str = -- http://lonerobot.net/
	(
		byteArr = ConvertClass.FromBase64String str
		memstream = dotnetobject "System.IO.MemoryStream" byteArr
		DecodedImg = ImageClass.fromstream memstream
		memstream.close() ; return DecodedImg
	)
	dotnetcontrol logo "Label" pos:[0,0] width:100 height:100 
	dotnetcontrol btn "Button" text:"button" width:100 height:24
	on testRoll open do (
		logo.image = (StringToImage img_logo)
		btn.image = (StringToImage img_logo)
		btn.ImageAlign = (dotnetclass "System.Drawing.ContentAlignment").MiddleLeft
		btn.TextAlign = (dotnetclass "System.Drawing.ContentAlignment").MiddleRight
		print (ConvertImageToBase64String @"H:\01经验\03.MyMaxScript\动画辅助\重影选中\正确图标.png")
		print (ConvertImageToBase64String @"H:\01经验\03.MyMaxScript\动画辅助\重影选中\错误图标.png")
		print (ConvertImageToBase64String @"H:\01经验\03.MyMaxScript\动画辅助\重影选中\红图标.png")
		print (ConvertImageToBase64String @"H:\01经验\03.MyMaxScript\动画辅助\重影选中\黄图标.png")
		print (ConvertImageToBase64String @"H:\01经验\03.MyMaxScript\动画辅助\重影选中\绿图标.png")
		print (ConvertImageToBase64String @"H:\01经验\03.MyMaxScript\动画辅助\重影选中\蓝图标.png")
		print (ConvertImageToBase64String @"H:\01经验\03.MyMaxScript\动画辅助\重影选中\标记图标.png")
		)
)
createDialog testRoll style:#(#style_titlebar, #style_sysmenu, #style_toolwindow)