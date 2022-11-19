
--正常的布雷算法要单独制作,比如半数优化,即当雷数大于一半时,可以取非雷数.避免100个里面取99个雷的情况.(这个情况可以直接取那1个空位.)
fn shuffle ary = --这是个数组通用洗牌算法,简单粗暴,效率稍差一些,玩玩就好,正经布雷还是需要专用算法
(
	local count = ary.count
	for i = count to 1 by -1 do 
	(
		j = random 1 i
		append ary ary[j]
		deleteitem ary j
	)
	return ary
)
-- 		or Oldcode
-- 		j = random 1 i
-- 		_temp = ary[j]
-- 		deleteitem ary j
-- 		ary[count] = _temp

fn mineLayoutor poolSize:#(3,3) mineCount:3 = --应限制雷数小于总数,否则生成雷数的集合,且排序后仍为1.更请限制最大999*999(百万级),当10000*10000时,需要计算数亿次(创建数组,排序数组等等...),估计需要40小时以上完成运算.毕竟这是max内部环境.
(
	local count = poolSize[1] * poolSize[2],ary = (for i = 1 to mineCount collect 1) + (for i = 1 to count - mineCount collect 0)
	return shuffle ary
)
mineLayoutor()

-- fn shuffle_mine poolSize:#(3,3) mineCount:6 = --专用布雷算法,不要用vector2,会被当作浮点数,添加了半数优化
-- (
-- 	local counter = poolSize[1] * poolSize[2],ary = for i = 1 to counter collect i,flip = false --计数器,而非数量
-- 	if (flip = mineCount > (counter + 1) / 2) do mineCount = counter - mineCount --当大于一半时,非雷会比雷少,直接取非雷
-- 	--seed 1234 这个设置好后,每次结果都会一样,很神奇.
-- 	for i = 1 to mineCount do
-- 	(
-- 		j = random 1 counter
-- 		append ary ary[j]
-- 		deleteitem ary j
-- 		counter -= 1
-- 	)
-- 	return ary
-- )
fn shuffle_mine2 poolSize:#(3,3) mineCount:3 = --专用布雷算法针对需求的优化,输出0和1
(
	local counter = poolSize[1] * poolSize[2],ary = for i = 1 to counter collect i,flip = false --计数器,而非数量
	if (flip = mineCount > (counter + 1) / 2) do mineCount = counter - mineCount --当大于一半时,非雷会比雷少,直接取非雷
	blist = for i = 1 to mineCount collect --取列表
	(
		j = random 1 counter
		_temp = ary[j]
		append ary _temp
		deleteitem ary j
		counter -= 1
		_temp
	)
-- 	result = for i = 1 to ary.count collect 0
	if flip then
	(
		result = for i = 1 to ary.count collect 1
		for i in blist do result[i] = 0
	)
	else
	(
		result = for i = 1 to ary.count collect 0
		for i in blist do result[i] = 1
	)
	return result
)