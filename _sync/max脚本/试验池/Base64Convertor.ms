--文本转换
fn base64encode str=
(
	dncConvert = dotNetClass "System.Convert"
	dnoUTF8 = dotNetObject "System.Text.UTF8Encoding"
	dnvStringIn = dotNetObject "System.String" str
	dnvByteArrayIn = dnoUTF8.getBytes dnvStringIn
	dnvB64String = dncConvert.ToBase64String dnvByteArrayIn
)

fn base64decode str=
(
	dncConvert = dotNetClass "System.Convert"
	dnoUTF8 = dotNetObject "System.Text.UTF8Encoding"
	dnvByteArrayOut = dncConvert.FromBase64String str
	dnvStringOut = dnoUTF8.getString dnvByteArrayOut
)
--图片转换
fn ConvertImageToBase64String filename =
(
	if (doesfileexist filename) do
	(
		local ImageClass = dotNetClass "System.Drawing.Image"
		local ConvertClass = dotNetClass "System.Convert"
		memstream = dotnetobject "System.IO.MemoryStream"
		ImgLoaded = ImageClass.fromfile filename
		ImgLoaded.save memstream ImgLoaded.rawformat
		Base64string = ConvertClass.ToBase64String (memstream.ToArray())
		memstream.close()
		return Base64String
	)
)
-- ConvertImageToBase64String @"C:\Users\windows\Downloads\HeartIcon.png"

fn ConvertBase64StringToImage str =
(
	local ImageClass = dotNetClass "System.Drawing.Image"
	local ConvertClass = dotNetClass "System.Convert"
	bytearr = convertclass.FromBase64String str
	memstream = dotnetobject "System.IO.MemoryStream" bytearr
	DecodedImg = ImageClass.fromstream memstream
	memstream.close()
	return DecodedImg
)
-- ConvertBase64StringToImage "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAA9QTFRFgICA/56U/y0tzRcw6cCs78oQDAAAAFJJREFUeJxVyckNwCAMRNGhA0wq8IQGgjuI6L8mvCiHHCx/vQFEkNcGe6N2yKKOScG1SO5XK7i/mB72Cyqa5dY9rMK3FQuSbocge+IHJTgVOAUc75IMkyy9jPQAAAAASUVORK5CYII="
