try(destroydialog unnamedRollout)catch()
rollout unnamedRollout "Untitled" width:176 height:208
(
	dotNetControl lbl1 "DevExpress.XtraEditors.LabelControl" pos:[8,8] width:160 height:192
	
	fn set_Xtra_lbl lbl content:"<h1>test</h1>" =
	(
		Lbl.Appearance.BackColor = (colr = (colorMan.getColor #background)*255;(DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3])
		lbl.AllowHtmlString = true
		lbl.text = content
		lbl.Appearance.TextOptions.HAlignment = lbl.Appearance.TextOptions.HAlignment.Center
	)
	on unnamedRollout open do
	(
		html = 
"
<color=255,255,255>颜色</color> --不支持<color=\"#8000FF\">颜色写法2</color>
<b>加粗</b> --不支持 <strong>
<i>斜体</i>
<u>下划线</u>
<size=6>文字大小 = 6</size><br>
<href=www.devexpress.com>超文本链接</href>
不支持<a href=\"http://www.runoob.com\">访问菜鸟教程!</a>
<p align=\"right\">This is some text in a very short paragraph</p>
"
		set_Xtra_lbl lbl1 content:html
	)
-- 	dotNetObject  ; defLabel lbl1 300 30 0 0 (randomChars tb1.Text)
)
createdialog unnamedRollout

-- 记录
-- <color=255,255,255>颜色</color>
-- <b>加粗</b> --注意 不支持 <strong>
-- <i>斜体</i>
-- <u>下划线</u>
-- <size=6>文字大小 = 6<br>
-- <href=www.devexpress.com>超文本链接</href> 不支持<a>超文本链接</a> 
-- 不支持<button>

--只支持简单的html,可能不支持html5,js 详细支持目录https://docs.devexpress.com/WindowsForms/4874/common-features/html-text-formatting
teststr = "
<!DOCTYPE html>
<html>
<head>
<meta charset=\"utf-8\">
<title>菜鸟教程(runoob.com)</title>
<script>
function displayDate(){
	document.getElementById(\"demo\").innerHTML=Date();
}
</script>
</head>
<body>

<h1>我的第一个 JavaScript 程序</h1>
<p id=\"demo\">这是一个段落</p>

<button type=\"button\" onclick=\"displayDate()\">显示日期</button>

</body>
</html>
"

teststr = "
<size=14>Size = 14<br>
<b>Bold</b> <i>Italic</i> <u>Underline</u><br>
<size=11>Size = 11<br>
<color=255, 0, 0>Sample Text</color></size>
<href=www.devexpress.com>Hyperlink</href>
"