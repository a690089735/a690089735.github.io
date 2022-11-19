"%e5%95%8a%e5%ae%9e%e6%89%93%e5%ae%9e" --hex 不支持
"%e9%98%bf%e4%b8%89%e5%a4%a7%e8%8b%8f%e6%89%93" --html utf8 不支持
"\e9\98\bf\e4\b8\89\e\a4\a7\e8\8b\8f\e6\89\93" --换了也不行

"\x6b22\x8fce\x0041\x0042\x0043\x0031\x0032\x0033" --unicode编码,吧u换成x可以支持,utf8是unicode的扩展,故也支持
"e4b88ae79a84" --16进制字符串,不支持


--16进制数字
0x1
0x20
0xBB
0xBF

-- 字符串转为unicode16进制代码,支持中文
fn ToUnicode str:"" =
(
	s = ""
	Encoding = (dotNetClass "System.Text.Encoding").Unicode
	byteData = Encoding.GetBytes(str) --asDotnetObject:on
	for i = 1 to byteData.count by 2 do
	(
		s+=(@"\x"+(dotnetobject "System.Int32" byteData[i+1]).tostring("X")+(dotnetobject "System.Int32" byteData[i]).tostring("X"))
	)
	return s
)