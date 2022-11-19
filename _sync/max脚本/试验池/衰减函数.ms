delete objects
-- for i in #{1..10} do
-- 	point pos:[i*100,0,i^3]

-- for i in #{11..20} do
-- 	point pos:[i*100,0,1.0/((i-10)^3)]
-- 	
	
	


-- for i = 0 to 1 by 0.1 do
-- 	if i <= 0.5 then
-- 		point pos:[i*0.5,0,i^3] size:0.1
-- 	else
-- 		(
-- 			point pos:[i*0.5,0,(1/i)^3] size:0.1
-- 		)

-- fn GetCurveValue t exp1:3.0=
-- (
-- 	print t
-- 	if t <= 0.5 then
-- 		0.5 * (t*2.0)^exp1
-- 	else
-- 		1 - GetCurveValue (1-t) exp1:exp1
-- )
fn GetCurveValue t exp1:3.0=
(
	t = (((t+0.000005)*100000) as integer) * 0.00001 --max底层在计算时会将接近0的数的幂算为无限小引发错误.这里四舍五入限制一下精度.飘带脚本的问题应该也是如此.
	if t <= 0.5 then
		0.5 * (pow (t*2.0) exp1)
	else
		1 - GetCurveValue (1-t) exp1:exp1
)
-- for i = 0 to 1 by 0.1 do print(GetCurveValue i exp1:6)


for i = 0 to 1 by 0.1 do (point pos:[i,0,(GetCurveValue i exp1:1.5)] size:0.1) --11次


--想法,区间循环功能.(可能绝对,可能相对)
--1提供时间范围,设置目标帧为起始还是结束,设置衰减曲线1.0-10.0.执行默认为1.25
--相对,则逐帧直接加减差值即可
--绝对,则需要逐帧rotate旋转的差值.