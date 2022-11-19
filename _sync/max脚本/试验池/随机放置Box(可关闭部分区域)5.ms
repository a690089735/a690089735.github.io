--不可用,因为切割后,是无限范围被切割,2*2方块切割后,其实只有四个角可创建

fn CutRange val:[50,-50] cut:[1,-1] = --返回从大到小的排序,并且以1为限制
(
	ranges = #([val[1],cut[1]],[cut[2],val[2]])
	ranges = case of
	(
		(val[1]>cut[1] and val[2]<cut[2]) : #([val[1],cut[1]],[cut[2],val[2]])--在区域内,则切割
	)
	print ranges
)
fn CalculateRanges rangeX:[50,-50] rangeY:[50,-50] excludeX:#([1,-1],[0,-2]) excludeY:#([1,-1],[3,1]) = --Point4是x,-x,y,-y,由于输入都是正数,所以很容易求出前大后小规范数组
(
-- 	XLimit1 = returnSort [range[1],exclude[1]]
-- 	XLimit2 = returnSort [range[2],exclude[2]]
-- 	YLimit1 = returnSort [range[3],exclude[3]]
-- 	YLimit2 = returnSort [range[4],exclude[4]]
	for i = 1 to 4 collect for exc in exclude collect returnSort val:[range[i],exc[i]]
)
