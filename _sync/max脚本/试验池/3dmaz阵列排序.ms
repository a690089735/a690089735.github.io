fn myqSortFunction v1 v2 =
(
	local d = distance [0,0] v1
	local dd = distance [0,0] v2
	case of
	(
		(d < dd) : -1 
		(d > dd) : 1
		default: 0
	)
)
vals = #([10,10],[5,5],[4,4],[2,2],[1,1],[3,3])
qSort vals myqSortFunction
vals

 
 
fn ASort P L a:1 = --轴向比较排序,1为x,2y3z,p是位置列表,L是点列表
(
	
	for i = L.count - 1 to 1 by -1 do for j = 1 to i do
		if P[j][a] > P[j+1][a] then (t = L[j]; L[j]=L[j+1]; L[j+1]=t; t = P[j]; P[j]=P[j+1]; P[j+1]=t) --1大于2,表示1应该在2的后面,需要换位置,否则不管(false跳过)
		else continue
	
)

p1 = #([10,10], [5,5], [4,4], [2,2], [1,1], [3,3])
L1 =  #(1, 2, 3, 4, 5, 6)

ASort p1 L1

p1
L1 
