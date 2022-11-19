delete objects

bipObj = biped.createNew 100 -90 [0,0,0] \ -- <height_float> <angle_float> <wpos_point3>
arms:true \
neckLinks:1 \ 
spineLinks:4 \
legLinks:3 \
tailLinks:0 \
ponyTail1Links:0 \ 
ponyTail2Links:0 \
fingers:1 \
fingerLinks:1 \
toes:5 \ 
toeLinks:3 \
ankleAttach:0.2 \
trianglePelvis:True \
triangleNeck:false \
prop1Exists:False \
prop2Exists:False \
forearmTwistLinks:0

/* 
1.根据高点取高度,创建bip(不提供bipCOM和盆骨点)(只提供蓝色肢体,另一侧可在创建后手动更改.);转为体型模式
2.移动bip根节点到两腿中间
3.整体缩放盆骨来对齐腿部点(两腿距离/盆骨z轴长度)
4.计算大腿的方向和IK朝向(cross前两根骨骼的朝向),以及距离,并匹配
5.计算小腿的方向和IK朝向,以及距离,并匹配
↑(如果有hoselink,则先平化IK平面,再计算距离和旋转)
6.计算脚的平面方向(腿末端到脚的feel和sole点的投影),设置Ankle Attach和yz缩放,x缩放根据投影点距离计算
7.计算各个脚趾位置,方向(一段用脚的方向计算,多段用前两节方向计算)
8.计算脊柱0的位置和朝向,以及x长度(均匀缩放)
9.逐个计算脊柱朝向和x长度(均匀缩放)
10.计算脖子0的位置和朝向,以及x长度(均匀缩放)
11.逐个计算脖子朝向和x长度(均匀缩放)
12.计算头的位置和方向,以及长度(均匀缩放)
13.计算肩膀的位置和方向及长度(均匀缩放)
14.计算两个胳膊的方向和长度(根据IK平面)(均匀缩放)
15.计算手的方向和长度(提供一个手掌的末端点)
16.计算手指0的位置,方向和长度
17.计算其他手指的方向和长度
-- 下面的都不需要了,下面的不算复杂,手动添加的成本是可以接受的
-- 18.如果有尾巴,计算尾巴0的位置方向和长度
-- 19.如果有马尾辫,计算马尾辫0的位置方向和长度,然后依次计算马尾辫的方向和长度
*/


-- Description:

-- This class represents the individual Biped body part and footstep nodes’ baseobject.

-- There are no class-specific properties or methods associated with this class.

-- For the COM, the transform controller type is Vertical_Horizontal_Turn.

-- For footsteps, the transform controller type is FootSteps.

-- For the remaining biped body parts, the transform controller type is BipSlave_Control.