/* 打开数据文件 */
-- fp = @"E:\006.游鱼\" + @"t1.txt"
-- f = openfile fp
-- txt = readline f
-- close f

/* 文本转坐标 */
fn txt2poslist txt =
(
	itemList = filterString txt ","
	for i = 1 to itemList.count by 3 collect [itemList[i] as float,itemList[i+1] as float,itemList[i+2] as float]
)
-- posList = txt2poslist txt

/* 创建样条线 */
fn createSplineByPosList poslist = 
(
	l = line wirecolor:red name:(uniqueName "Spl_");select l
	addnewSpline l
	for pos in poslist do addKnot l 1 #corner #line pos
	updateShape l
	print poslist.count
)
-- createSplineByPosList poslist

/* 限定的范围 */
-- 11>=x>=-11;5>=y>=-5;12>=z>=6

/* 验算是否有超出范围的坐标点 */
fn checkPos posList adjust:true =
try(
	overI = for i = 1 to posList.count where (pos = posList[i];(pos.x > 11 and pos.x < -11 and pos.y > 5 and pos.y < -5 and pos.z > 12 and pos.z < 6)) collect i
	if overI.count == 0 then true
	else
	(
		if adjust then
		(
			for i in overI do
			(
				if posList[i].x > 11 do posList[i].x = 11
				if posList[i].x < -11 do posList[i].x = -11
				if posList[i].y > 5 do posList[i].y = 5
				if posList[i].y < -5 do posList[i].y = -5
				if posList[i].z > 12 do posList[i].z = 12
				if posList[i].z < 6 do posList[i].z = 6
			)
			OK
		)
		else overI
	)
)catch("ERROR!")
-- checkPos posList adjust:false

/* 按帧数,从指定曲线输出位置信息 (注意,输出前要设置细节步数,才可避免有直线运动) */
fn GetSplPos spl count =
try(
	steps = spl.steps
	spl.steps = 100
	
	results = for i in 0 to 1 by (1.0/(count-1)) collect pathInterp spl 1 i
	
	spl.steps = steps
	results
)catch("ERROR!")

/* 将位置转为文本 */
fn posList2txt posList tofile:"" =
(
	str = ""
	for pos in posList do 
	(
		str += pos.x as string;str += ","
		str += pos.y as string;str += ","
		str += pos.z as string;str += ","
	)
	str[str.count] = ""
	if tofile != "" then
		try(
			f = tofile
			fs = (filterString f ".")
			suffix = fs[fs.count]
			if not matchpattern suffix pattern:"txt" do f += ".txt"
			
			deletefile f
			save_file = createfile f
			format "%" str to:save_file
			close save_file
		)catch(messagebox "写文件错误!")
	else
		str
)
-- posList2txt #([1,2,3],[6,7,8]) tofile:"c:/test.txt"

/* 按样条线长度转换帧数 */
fn GetFrameByCurveLength spl = (CurveLength spl 1 * 17) as integer 
/* 缩放帧数,越小越快,越大越慢比如10帧0.5倍,会变为5帧 */
fn ScaleFrame f p = (f*p) as integer 

/* main主函数 */
tf = @"E:\006.游鱼\"+@"t6.txt"
selspl = selection[1]
poslist = GetSplPos selspl (GetFrameByCurveLength selspl)
-- if checkPos (poslist) adjust:false then posList2txt poslist tofile:tf --检查
posList2txt poslist tofile:tf --不检查
