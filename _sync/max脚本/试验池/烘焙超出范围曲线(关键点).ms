/* 
1.按时间距离获得轨迹值
2.或的每个新帧的手柄值(一个能确定方向的参数和长度)
3.将轨迹设置为常量,然后应用在1和2中获取的值
4.目前没有考虑所有类型的超出范围类型
5.目前没有考虑小鼠帧的情况
 */
 
 fn 获取需要处理的次数 轨迹 =
 (
	keys = 轨迹.keys
	kcount = keys.count
	if kcount > 1 do
	(
		开始时间 = keys[1].time
		结束时间 = keys[kcount].time
		时间范围开始 = animationrange.start
		时间范围结束 = animationrange.end
		全长度 = (结束时间 - 开始时间)+1
		向前次数 = if 时间范围开始 < keys[1].time then (结束时间 - 时间范围开始).frame as integer / 全长度 else 0
		向后次数 = if 时间范围结束 > keys[kcount].time then (时间范围结束 - 开始时间).frame as integer / 全长度 else 0
-- 		print \
		#(向前次数,向后次数)
	)
 )
--  获取需要处理的次数 $[3][1][3]
 
 fn 向后塌陷超出范围循环_相对偏移 轨迹 次数 = 
 (
	keys = 轨迹.keys
	kcount = keys.count
	if kcount > 1 do
	(
		tdata = #() --tdata不包括新的首帧 时间数据
		vdata = #() --vdata不包括新的首帧 数值数据
		hdata = #() --hdata包括新的首帧 切线数据
		帧间距 = (keys[kcount].time - keys[1].time).frame as integer
		
		for i = 1 to 次数 do
		(
			for j = 2 to kcount do --不可以在这里直接加key,因为加了key曲线后面的循环就断了.
			(
				t = keys[j].time+帧间距*i
				append tdata t
				append vdata (at time t 轨迹.value)
			)
		)
		
-- 		setAfterORT 轨迹 #constant
		for i = 1 to tdata.count do
		(
			addnewkey 轨迹 tdata[i]
			keys[keys.count].value = vdata[i] --keys会随着添加关键帧而更新
		)
		
		for i = 2 to kcount-1 do
		(
			ktvi = keys[i].inTangent
			ktvo = keys[i].outTangent
			ktti = keys[i].inTangentType
			ktto = keys[i].outTangentType
			ktli = keys[i].inTangentLength
			ktlo = keys[i].outTangentLength
			for j = 1 to 次数 do
			(
				n = i + (kcount-1)*j 
				keys[n].inTangent = ktvi
				keys[n].outTangent = ktvo
				keys[n].inTangentType = ktti
				keys[n].outTangentType = ktto
				keys[n].inTangentLength = ktli
				keys[n].outTangentLength = ktlo
			)
		)
		
		ktvo = keys[1].outTangent
		ktto = keys[1].outTangentType
		ktlo = keys[1].outTangentLength
		for j = 1 to 次数 do
		(
			n = 1 + (kcount-1)*j
			keys[n].outTangent = ktvo
			keys[n].outTangentType = ktto
			keys[n].outTangentLength = ktlo
		)
		
		ktvi = keys[kcount].inTangent
		ktti = keys[kcount].inTangentType
		ktli = keys[kcount].inTangentLength
		for j = 1 to 次数 do
		(
			n = kcount + (kcount-1)*j
			print n
			keys[n].inTangent = ktvi
			keys[n].inTangentType = ktti
			keys[n].inTangentLength = ktli
		)
-- 		print #(tdata,vdata)
	)
	
 )
--  向后塌陷超出范围循环_相对偏移 $[3][1][3] 1
-- 向后塌陷超出范围循环_相对偏移 $[3][1][3] (获取需要处理的次数 $[3][1][3])[2]
向后塌陷超出范围循环_相对偏移 $[3][1][3] (获取需要处理的次数 $[3][1][3])[2]
 
/* 
笔记
addNewKey <controller> <time> --返回key
key.time
key.value

Bezier Controller Keys
<key>.inTangent varies-- float or point3 (see below)
<key>.outTangent varies-- float or point3 (see below)
<key>.inTangentType Name-- see list of permitted names below #smooth #linear #step #fast #slow #custom #auto    
<key>.outTangentType Name-- see list of permitted names below #smooth #linear #step #fast #slow #custom #auto    
<key>.inTangentLength Float
<key>.outTangentLength Float
<key>.freeHandle Boolean
<key>.x_locked Boolean default: true
<key>.y_locked Boolean default: true
<key>.z_locked Boolean default: true
<key>.constantVelocity Boolean default: false
*/


/* 
试验
$[3][1][3].keys
$[3][1][3].value --可直接获取值
$[3][1][3].keys[1].value -- -0.00390625
$[3][1][3].keys[1].inTangent -- 0.0
$[3][1][3].keys[1].outTangent -- -0.199607
$[3][1][3].keys[1].inTangentLength -- undefined
$[3][1][3].keys[1].outTangentLength -- 0.323331
$[3][1][3].keys[1].inTangentType -- #custom
$[3][1][3].keys[1].outTangentType -- #custom
$[3][1][3].keys[1].freeHandle --false

*/