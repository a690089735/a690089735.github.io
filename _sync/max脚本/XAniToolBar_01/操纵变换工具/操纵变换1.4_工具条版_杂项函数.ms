--窗口布局响应
fn set_transform_toolstrip_layuout w h ctrl anchor_pos:[0,0] = 
(
    local top=5,side = 12 --顶边5,侧边10,底边6(可无视)
    new_pos = case ctrl.name of --anchor_pos为偏移锚点,为了未来能做上下伸缩使用
    (
		"_grp1":(ctrl.width = w;[0,-6])
        "_names_ddl":[side,top]
        "_names_btn1":[side,top+22]
        "_names_btn2":[side+20,top+22]
        "_names_btn3":[side+40,top+22]
        "_names_btn4":[side+80,top+22]
        "_trans_ddl":[w-ctrl.width-side,top]
        "_trans_btn1":[w-ctrl.width-side-100,top+22]
        "_trans_btn2":[w-ctrl.width-side-80,top+22]
        "_trans_btn3":[w-ctrl.width-side-40,top+22]
        "_trans_btn4":[w-ctrl.width-side,top+22]
        default: ctrl.pos --容错
    )
	ctrl.pos = new_pos + anchor_pos
)
-- 获取颜色到dotnet
fn getColor colr val:32 asDotNet:true dir:false =  --文字色 背景色为反求 val:0-1
(
	--假如背景色 68 68 68 面板色100 100 100 字体色 220 220 220
	--要从68 获取到另外两者,但不能大于255 或小于0,且三个颜色要互相配合满足对比度
	colr = copy colr
	if classOf colr == Color do colr = colr as point3
	if dir do return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3]
	for i = 1 to 3 do (colr[i] += val;if colr[i] > 255 do colr[i] -= 255;if colr[i] < 0 do colr[i] += 255)
	if asDotNet then return (DotNetClass "System.Drawing.Color").fromARGB colr[1] colr[2] colr[3] else return (colr  as Color)
)
-- base64图片
fn StringToImage str = -- http://lonerobot.net/ --给UI初始化调用
(
	local ConvertClass = dotNetClass "System.Convert"
	local ImageClass = dotNetClass "System.Drawing.Image"
	byteArr = ConvertClass.FromBase64String str
	memstream = dotnetobject "System.IO.MemoryStream" byteArr
	DecodedImg = ImageClass.fromstream memstream
	memstream.close() ; return DecodedImg
)
-- 设置按钮风格
fn set_dotnet_buttons_properties btns = 
(
	local
	BC = (colorMan.getColor #background)*255,BackColor = getColor BC dir:true,ForeColor = getColor BC val:152,
	BorderStyle = (dotNetClass "System.Windows.Forms.BorderStyle").None,BorderSize = 0,Flat = (dotnetclass "System.Windows.Forms.FlatStyle").Flat
	for btn in btns do
	try(
		btn.BackColor = BackColor;btn.ForeColor = ForeColor;btn.Flatstyle = Flat;btn.Flatappearance.borderSize = BorderSize
	)catch()
)
--窗口初始化
fn init_set_transform_toolstrip dialog =
(
    for c in dialog.controls do try(c.name = (FilterString (c as string) ":" )[2])catch() --设置控件名,dotnet控件name默认不是变量名,加try是因为max默认控件的name是只读的
	set_dotnet_buttons_properties dialog.controls--设置按钮风格
--     dialog.resized [500,52] --参数决定了窗口矩形大小,这里主要起作用的是x宽度,不需要了,已经在主体的时钟1内了
	
	--初始化数据文件夹
	makeDir dialog.data_path
)
--整理文件目录,并返回一个新的可用的文件名,如果文件超过99个,则提示覆盖
fn make_save_file_name type:#names =
(
	
)