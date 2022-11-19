
-- 示例,按照一个参考列表,排序另一个列表
_ID_pool = for i = 1 to 7 collect (random [-10, -10, -10, -10] [10, 10, 10, 10])
_count = _ID_pool.count
_a = for i = 1 to _count collect i --#(1,2,3,4,5)
_test = for i = 1 to _count-4 collect
(
	i = random 1 _a.count
	j = _a[i]
	deleteItem _a i
	_ID_pool[j]
)
i = 0
fn qSortID v1 v2 = 
(
	local i1 = finditem _ID_pool v1
	local i2 = finditem _ID_pool v2
	format "% v1:% v2:% bool:%\n" (i+=1) v1 v2 (i2 < i1)
	if i2 < i1 then 1 else -1
)--注意:这里的1和-1,只是作为加1和减1的返回,也可以是0 比如cas eof 然后 < 1 > -1 default 0 0就是两个一样,保持不变,不换位置,大概知道是哪个算法,没完全理解,描述起来比较吃力.
-- v1是后一个值,v2是前一个值,这组判断主要逐次两两判断是否要交换顺序,1不用交换,继续下一组对比. -1则需要交换,交换后,继续判断下一组,到最后一组后,确定最后的值是最大的,再从头开始确定新的最大的,直到不再需要判断和向前移动.
-- 查询后,这是[冒泡排序](根据输出,发现其实可以记录一下第一次出现false,-1的位置,下次循环直接从这里开始即可,但会多一个判断,使算法变得复杂,可能反而增加无谓的计算时间)
_test1 = _test as array
qSort _test1 qSortID
_test1

fn myqSortFunction v1 v2 hittest: = 
(
	local d = distance hittest v1
	local dd = distance hittest v2
	case of
	(
		(d < dd) : -1
		(d > dd) : 1
		default: 0
	)
)
vals = #([10,10],[5,5],[4,4],[2,2],[1,1],[3,3])
qSort vals myqSortFunction hittest:[10,10]--[start:<integer>] [end:<integer>] 可以指定开始和结束的范围
vals
