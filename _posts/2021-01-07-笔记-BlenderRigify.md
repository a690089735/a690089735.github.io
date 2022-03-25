---
layout: post
title: Blender Rigify使用笔记
date: 2021-01-07 21:35:23.00 +08:00
categories: 未分类
tags: 笔记 Blender
comments: false
typora-root-url: ..
---

文章内容

综合来看,rigify既足够丰富,又足够简便,应该是Blender上最好的绑定工具了(相较于autorigpro和blenrig)

但一直没找到比较好的rigfy说明,很多坑和规则还是要自己试出来.

### Rigify中的BendyBone(弯曲骨骼)

注意:如果制作的动画需要在其他软件中使用,就**不要使用BendyBone**,目前任何Blender以外的软件都不支持这个弯曲骨骼特性,而且也没有额外的转换和导出的解决方案.(2018-2021.1)

在rigify的设置属性中,可以将其BendyBoen段数设为1,相当于关闭BendyBone.

![image-20210107233002520](/assets-images/2021-01-07-笔记-BlenderRigify-imgs/image-20210107233002520.png)

(日常使用,建议把所有的BendyBone段数都设为1(包括脊柱,脖子等),因为多个BendyBone组合在一起使用时,其插值算法可能会使动画有很小的意料之外的变化)



### Limb绑定的骨骼层

骨骼层的名字要在RigifyLayerNames卷展览里添加和设置,这部分很不直观,因为正常骨骼层是左右两组,他这里是按上下两行来排序的.

![image-20210107225109095](/assets-images/2021-01-07-笔记-BlenderRigify-imgs/image-20210107225109095.png)

Limb的骨骼层一共有三个,IK层,FK层,和Tweak层(扭结层),但是选项里只能看到KF和Tweak的选项.

经过测试,发现IK层其实就是骨骼本身的所在层.(基本原理是:不勾选这两个指定层的选项,所有的内容都会在骨骼所在层,勾选后,会把设置过的部分放在指定的层)

![image-20210107232919311](/assets-images/2021-01-07-笔记-BlenderRigify-imgs/image-20210107232919311.png)

### 手指的旋转方向

很多绑定类型下面都有一个**弯曲旋转轴**的属性,这个是用来控制默认旋转方向的(比如缩放控制器控制手指回卷),有些时候,如果保持默认的自动,可能会有问题,可以自己手动选择一个方向.

![image-20210107233834248](/assets-images/2021-01-07-笔记-BlenderRigify-imgs/image-20210107233834248.png)