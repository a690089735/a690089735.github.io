fn blend_quat q_ary w_ary = --计算量大,但测试后好像这个仍是最快的0.13ms左右,需要谨慎设计使用,混合非常优秀,自带球面插值效果,即使是当各个pose有反冲时(ax-45,bx45,cy45,目标cy刚好为45)
(
-- 	if q_ary.count == w_ary.count then
-- 	(
		local q0 = (quat 0 0 0 1),qsum = (quat 0 0 0 0)
		for i = 1 to q_ary.count do(qn = Slerp q0 (logN q_ary[i]) w_ary[i];qsum = (quat (qsum.x+qn.x) (qsum.y+qn.y) (qsum.z+qn.z) (qsum.w+qn.w)))
		exp qsum
-- 	)else print("数量不和")
)
/* 
fn blend_quat q_ary w_ary = --四元数乘角版,没有差别,或许更慢一点点,需要谨慎设计使用,混合非常优秀,自带球面插值效果,即使是当各个pose有反冲时(ax-45,bx45,cy45,目标cy刚好为45)
(
-- 	if q_ary.count == w_ary.count then
-- 	(
		local q0 = (quat 0 0 0 1),qsum = (quat 0 0 0 0)
		for i = 1 to q_ary.count do(qn = q_ary[i];qn.angle*=w_ary[i];qsum = (quat (qsum.x+qn.x) (qsum.y+qn.y) (qsum.z+qn.z) (qsum.w+qn.w)))
		exp qsum
-- 	)else print("数量不和")
)
 */
/* 
(
	tt = 0
	t0 = (dotNetClass "System.DateTime").Now
	for i = 1 to 10000 do
	(
		
		$Box001.rotation = blend_quat #($Box003.rotation,$Box004.rotation,$Box005.rotation) #(.5,.5,.5)
	)
	t1 = (dotNetClass "System.DateTime").Now.Subtract t0
	t1.TotalSeconds as float/1000
)
0.00013s
0.13ms
二者速度差不多,且都会偶尔有一次双倍时间.用哪个都行,
 */
/* 
(t0 = timeStamp()
$Box001.rotation = blend_quat #($Box003.rotation,$Box004.rotation,$Box005.rotation) #(.5,.5,.5)
t1 = timeStamp() - t0
print(t1))
0-1ms
 */
 /* 
script_controller 版
轨迹变量 q1,q2,q3...
轨迹变量 w1,w2,w3...(绑定到滑块)
local q0 = (quat 0 0 0 1),qsum = (quat 0 0 0 0)
for i = 1 to q_ary.count do(qn = Slerp q0 (logN q_ary[i]) w_ary[i];qsum = (quat (qsum.x+qn.x) (qsum.y+qn.y) (qsum.z+qn.z) (qsum.w+qn.w)))
exp qsum
 */
 /* 
script_controller 版2,上一版较优
轨迹变量 q1,q2,q3...
轨迹变量 w1,w2,w3...(绑定到滑块)
local q0 = (quat 0 0 0 1),qsum = (quat 0 0 0 0)
for i = 1 to q_ary.count do(qn = q_ary[i];qn.angle*=w_ary[i];qsum = (quat (qsum.x+qn.x) (qsum.y+qn.y) (qsum.z+qn.z) (qsum.w+qn.w)))
exp qsum
 */

-- fn blend_quat2 q_ary w_ary = --使用轴角取权重插值,计算量大,需要谨慎设计使用,混合非常优秀,自带球面插值效果,即使是当各个pose有反冲时(ax-45,bx45,cy45,目标cy刚好为45)
-- (
-- 	if q_ary.count == w_ary.count then
-- 	(
-- 		local q0 = (quat 0 0 0 1),qsum = (quat 0 0 0 0),qaa,qn
-- 		for i = 1 to q_ary.count do(qaa = q_ary[i] as angleaxis;qn = quat (qaa.angle * w_ary[i]) qaa.axis;qsum = (quat (qsum.x+qn.x) (qsum.y+qn.y) (qsum.z+qn.z) (qsum.w+qn.w)))
-- 		exp qsum
-- 	)else print("数量不和")
-- )
-- fn blend_quat2 q_ary w_ary = --使用轴角取权重插值(短代码版),计算量大,需要谨慎设计使用,混合非常优秀,自带球面插值效果,即使是当各个pose有反冲时(ax-45,bx45,cy45,目标cy刚好为45)
-- (
-- 	if q_ary.count == w_ary.count then
-- 	(
-- 		local q0 = (quat 0 0 0 1),qsum = (quat 0 0 0 0),qaa,qn
-- 		for i = 1 to q_ary.count do(qaa = q_ary[i] as angleaxis;qaa.angle *= w_ary[i];qn = qaa as quat;qsum = (quat (qsum.x+qn.x) (qsum.y+qn.y) (qsum.z+qn.z) (qsum.w+qn.w)))
-- 		exp qsum
-- 	)else print("数量不和")
-- )
/* 
(t0 = timeStamp()
$Box002.rotation = blend_quat2 #($Box003.rotation,$Box004.rotation,$Box005.rotation) #(.5,.5,.5)
t1 = timeStamp() - t0
print(t1))
0-1ms
 */
/* 
script_controller 版
轨迹变量 q1,q2,q3...
轨迹变量 w1,w2,w3...(绑定到滑块)
local q0 = (quat 0 0 0 1),qsum = (quat 0 0 0 0)
for i = 1 to q_ary.count do(qaa = q_ary[i] as angleaxis;qn = quat (qaa.angle * w_ary[i]) qaa.qaxis;qsum = (quat (qsum.x+qn.x) (qsum.y+qn.y) (qsum.z+qn.z) (qsum.w+qn.w)))
exp qsum
 */

fn blend_quat3 q_ary w_ary = --单纯使用轴角计算,结果怎么说呢,不知道对还是不对...也许这个更像是多数插值吧..
(
	if q_ary.count == w_ary.count then
	(
		local qangle = 0,qaxis=[0,0,0]
		for i = 1 to q_ary.count do
		(
			local qaa = q_ary[i] as angleaxis
			qangle += qaa.angle * w_ary[i];qaxis += qaa.axis * w_ary[i]
		)
		quat qangle (normalize qaxis)
	)else print("数量不和")
)
/* 
t0 = timeStamp()
$Box002.rotation = blend_quat3 #($Box003.rotation,$Box004.rotation,$Box005.rotation) #(1,1,1)
timeStamp() - t0
17-21ms 平均19ms左右
 */
--上面适合多个pose叠加混合,但是注意,我们q值是标量(基准),w是变量.



fn blend_quat_lite q_ary w_ary = --快速,混合不准,尤其是当各个pose有反冲时(ax-45,bx45,cy45,目标cy仅有15.722)
(
	if q_ary.count == w_ary.count then
	(
		local q0 = (quat 0 0 0 1),qsum = (quat 0 0 0 0)
		for i = 1 to q_ary.count do(qn = Slerp q0 q_ary[i] w_ary[i];qsum = (quat (qsum.x+qn.x) (qsum.y+qn.y) (qsum.z+qn.z) (qsum.w+qn.w)))
		qsum
	)else print("数量不和")
)
blend_quat_lite #($Box003.rotaion,$Box004.rotaion,$Box005.rotaion) #(1,1,1)
/* 
t0 = timeStamp()
$Box002.rotation = blend_quat_lite  #($Box003.rotation,$Box004.rotation,$Box005.rotation) #(1,1,1)
timeStamp() - t0
17-21ms 平均19ms左右
*/

-- timeStamp()
quat 0 0 0 1 as angleaxis