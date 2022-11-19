for i = 0 to 1 by 0.1 do point pos:(pathInterp $ i) wirecolor:yellow --路径插值,会被缩放影响
for i = 0 to 1 by 0.1 do point pos:(lengthInterp $ i) wirecolor:yellow --长度插值,平均插值
--出现多段线插值不准的情况,需要将[steps:<integer> ] 调高,默认是5,一般来说50可以满足一切需求.
-- resetLengthInterp() --如果maxscript对样条线做了更改,需要用这个功能更新插值缓存.
   
--可用长度来获取路径插值,在路径约束中勾选恒定速度就可以了.
-- 这里lengthToPathParam计算出的1.0结果不精确,略大于1.0了,所以报错.如果写0.999999就会少一次循环...
-- for i = 0 to 1 by 0.1 do point pos:(pathInterp $ (lengthToPathParam $ i)) wirecolor:yellow --用长度插值求路径插值,会抵消缩放影响,
for i = 0 to 1 by 0.1 do
(
	ip = (lengthToPathParam $ i);if ip>1 then ip = 1
	point pos:(pathInterp $ ip) wirecolor:yellow --用长度插值求路径插值,会抵消缩放影响,
)