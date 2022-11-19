
--与qSort写法一样, 但这个必须是已经经过排序的有序的列表,
--搜索时先搜索中间, 然后根据返回值1和-1, 分别从后面(正方向)的或前面(负方向)的[中间(尽量)]继续搜索, 0则返回. 两个值必须可以比较大小(当然,就像qsort,可以找一些间接的比较方法).
--a和b是两个条件, 里面的a[1]和b[1]是对比方式, 这里利用了字符串可以比较大小的方法(估计是比较了某种字符编码.比如 "4" > "9" 为 fasle "4" > "10" 为 true,"x" > "y" = fasle)
-- i = 0
-- fn LookupTableComparator a b = ( 
-- 	i += 1
-- 	format "%: a-%,a[1]-%, b-%,b[1]-%; %|%\n" i a a[1] b b[1] (a[1] > b[1]) (a[1] < b[1])
-- 	case of
-- 	(
-- 		(a[1] > b[1]) : 1
-- 		(a[1] < b[1]r) : -1
-- 		default : 0
-- 	)
-- )
--这里我把数组扩大到了20,但是因为字符串对比大小时的一些我还不懂的特性,必须[针对目前的情况]做出如下更改,为了方便与上面对比,没有优化
i = 0
fn LookupTableComparator a b = ( 
	i += 1
	format "%: a-%,a[1]-%, b-%,b[1]-%; %|%.\n" i a a[1] b b[1] (a[1] as integer > b[1] as integer) (a[1] as integer < b[1] as integer) 
	case of
	(
		(a[1] as integer > b[1] as integer) : 1
		(a[1] as integer < b[1] as integer) : -1
		default : 0
	)
)

searchTable =for i = 1 to 20 collect #( (i as string), "Test"+(i as string), i)
-- append searchTable #("99")
-- append searchTable "999"
-- append searchTable "阿松大"

bsearch "4" searchTable LookupTableComparator
bsearch "9" searchTable LookupTableComparator


-- Same compare function used by bsearch and qsort:
-- fn LookupTableComparator a b = (
-- if a[1] > b[1] then 1
-- else if a[1] < b[1] then -1
-- else 0
-- )
 
-- Finds an item in a lookup table; -- A lookup table is a sorted array of items, -- where each item is an array with its key as the same entry as the sort key. -- In our case the LookupTableComparator uses the first element as the key --So we have to make the search key an array too --in order to make it compatible with the qsort function!
-- fn LookupTableLookup itemKey itemTable = (
-- local lookupKey = #(itemKey)
-- bsearch lookupKey itemTable LookupTableComparator
-- )