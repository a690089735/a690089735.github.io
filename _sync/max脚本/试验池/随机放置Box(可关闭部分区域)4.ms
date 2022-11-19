fn calculateDivisor val:#() = --依赖,求最大公约数(多个数,可计算小数)
(
	local val = sort val
	for i = val.count to 2 by -1 do
	(
		local x = val[i],y = val[i-1],r = mod x y
		while r>0 do
		(
			x = y
			y = r
			r = mod x y
		)
		val[i-1] = y
	)
	return val[1]
)

fn RRBox x:100 y:100 pos:[0,0] s:#([2,2]) spos:#([0,0]) c:10 = 
(
/* 	#好像有个最大公约数什么的,在这里应该会很好用吧.
* 如果 有小数 则 两个数都乘以若干个10倍 然后求 最大公约数n 再 除以刚才的若干个10倍得到新的n 否则 求最大公约数n 
* 块大小 = n
* 块位置列表
* #因为是利用中心,在块范围内生成,所以起始位置应该在无效范围外的半个块大小的地方开始.
* 起始 = (1+0.5n)
* 计次循环 x= 起始 到 50 每 n:
* 		计次循环 y= 起始 到 50:
*             块位置列表.添加(x,y)
*             块位置列表.添加(x,-y)
*             块位置列表.添加(-x,y)
*             块位置列表.添加(-x,-y)
* 计次循环 i= 1 到 10:
* 	放置中心xy = 随机(块位置列表)
* 	位置x = 随机(放置中心xy.x + n, 放置中心xy.x - n)
* 	位置y = 随机(放置中心xy.y + n, 放置中心xy.y - n)
* 	放置方块(位置x, 位置y)
*/
	n = calculateDivisor val:(a = #(x,y);for t in s do a += #(t[1],t[2]);a)
	hx = x/2;hy = y/2;hn = n/2
	xrange = [pos[1] + hx - hn,pos[1] - hx + hn]
	yrange = [pos[2] + hy - hn,pos[2] - hy + hn]
	partPos = #()
	
	for x1 = amin #(xrange[1],xrange[2]) to amax #(xrange[1],xrange[2]) by n do --收集块坐标
		for y1 = amin #(yrange[1],yrange[2]) to amax #(yrange[1],yrange[2]) by n do
			append partPos [x1,y1]
			
	sranges = for i = 1 to spos.count collect #([spos[i][1] + s[i][1]/2 ,spos[i][1] - s[i][1]/2],[spos[i][2] + s[i][2]/2 ,spos[i][2] - s[i][2]/2])
	
	for i = partPos.count to 1 by -1 do
	(
		p = partPos[i]
		for srange in sranges do 
			if (p.x < srange[1][1] and p.x > srange[1][2] and p.y < srange[2][1] and p.y > srange[2][2]) do deleteitem partPos i
	)
		
	--过滤块坐标,可以在上面判断,在这里过滤的原因是考虑到以后可能会有多个减块.
-- 	for i = 1 to c do
		
	
)
