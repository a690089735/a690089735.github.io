# [Unity下实现弹簧骨骼（Spring Bone）](https://www.cnblogs.com/yangrouchuan/p/7650115.html)

关于这个效果的名称，我一直没找到一个比较正式的说法。Spring Bone这个说法是来自于Anima2D这个插件中的一个演示用的脚本，我直接译成弹簧骨骼。

一般常见于对人物的头发的模拟上。
![img](https://images2017.cnblogs.com/blog/871155/201710/871155-20171011130950652-700310711.gif)

当然也可以直接用在普通物体上
![img](https://images2017.cnblogs.com/blog/871155/201710/871155-20171011133250418-969814817.gif)

效果的实现是通过改变物体的旋转进行的。在LateUpdate执行代码。我们在脚本中保存上一帧的骨骼末端位置，当运行当前帧时，如AnimatorController之类的组件会在Update中将物体的旋转设置为指定值。我们在LateUpdate中，通过保存的上一帧的骨骼末端位置以及当前的旋转值，进行计算，得到一个类似的插值位置，然后转化为旋转值，将物体旋转到对应位置。

部分代码如下：

```C#
        currentTipPos = transform.TransformPoint(springEnd);

        currentTipPos = Vector3.Lerp(lastFrameTip, currentTipPos, Time.deltaTime);

        currentTipPos = springLength * (currentTipPos - transform.position).normalized + transform.position;    //clamp length.

        transform.rotation =
            Quaternion.FromToRotation(transform.TransformDirection(springEnd), (currentTipPos - transform.position).normalized)
            * transform.rotation;
        currentTipPos = springLength * (currentTipPos - transform.position).normalized + transform.position;    //clamp length.

        transform.rotation =
            Quaternion.FromToRotation(transform.TransformDirection(springEnd), (currentTipPos - transform.position).normalized)
            * transform.rotation;
```

这样的实现快速有效，但是最终效果仅仅是物体的运动变为慢慢靠近目标点，显得不够真实。
![img](https://images2017.cnblogs.com/blog/871155/201710/871155-20171011132256152-1385351622.gif)

想要加入类似弹簧的效果，我们需要进行真实的力、速度的计算。我们保存当前的速度，根据位置计算当前受到的力，然后根据力修改速度，通过这个速度去修改目标位置。

```C#
        currentTipPos = transform.TransformPoint(springEnd);

        var force = bounciness * (currentTipPos - lastFrameTip);  //spring force.

        force += stiffness * (currentTipPos - transform.position).normalized;  //stiffness

        force -= dampness * velocity;               //damp force. 

        velocity = velocity + force * Time.deltaTime;       //v = v0 + at. we don't need integration here, you won't notice any "wrong".

        currentTipPos = lastFrameTip + velocity * Time.deltaTime; //s = s0 + vt

        currentTipPos = springLength * (currentTipPos - transform.position).normalized + transform.position;    //clamp length.

        transform.rotation =
            Quaternion.FromToRotation(transform.TransformDirection(springEnd), (currentTipPos - transform.position).normalized)
            * transform.rotation;
```

我设置了3个力的选项，分别是bounciness弹性力，提供“归位“的力，力由当前骨骼末端指向归位时的骨骼末端，stiffness刚性力，提供保持原状的力，力方向往骨骼方向延长，以及dampbess阻力，沿着速度反方向。

通过设置三个力的大小，可以实现不同的效果。最终效果如文章开篇的图2

此外还有一个细节需要注意，骨骼更新的顺序应该严格的遵守从父物体的骨骼更新到子物体。不然可能会出现奇怪的情况。

github: https://github.com/yangrc1234/SpringBone