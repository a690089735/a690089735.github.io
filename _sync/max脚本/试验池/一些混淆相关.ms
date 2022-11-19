fn encryptText plainText tKey: tIV: =
(
	dnConvert = dotnetClass "System.Convert"
	dnUTF8 = dotNetObject "System.Text.UTF8Encoding"
	algorithm = (dotnetClass "System.Security.Cryptography.SymmetricAlgorithm").Create()
	
	encText = dnUTF8.GetBytes plainText
	memStream = dotnetObject "System.IO.MemoryStream"
	cStreamMode = (dotnetClass "System.Security.Cryptography.CryptoStreamMode")
	cStreamTransform = algorithm.CreateEncryptor tKey tIV
	cStream = dotnetObject "System.Security.Cryptography.CryptoStream" memStream cStreamTransform cStreamMode.Write
	cStream.Write encText 0 encText.Count
	cStream.FlushFinalBlock()
	cipherBytes = memStream.ToArray()			
	memStream.Close()
	cStream.Close()

	dnConvert.ToBase64String cipherBytes
)
bKey=#(1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2)
bIV=#(1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6)

encryptText "fn test = print 1" tKey:bKey tIV:bIV