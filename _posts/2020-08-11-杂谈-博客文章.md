---
layout: post
title: GitHub Desktop的重置
date: 2020-08-11 10:25:01.00 +08:00
categories: 未分类
tags: 杂谈 github
comments: false
---

我的GitHub Desktop果然是有问题...

在删除过一次库之后,后来所建的所有同名库都会有异常.要么创建后推文件,仍提示新建库且无法新建,要么无法推,要么推的时候完全没有提示.十分恼人.

再怎么删了库也还是一样.把GitHub Desktop删了再安也无法解决.而且应用删了再安竟然能直接登录我原来的账号???看来还是有某个地方储存着数据...

经过多方查询,可以指向下方地址删除应用数据文件夹,这个文件夹就算卸载了也不会自动被删除.这里面的数据就是导致库冲突的元凶了.

%userprofile%\AppData\Roaming\GitHub Desktop

经实测,删除了这个目录,GitHub Desktop果然焕然一新,各种操作和显示,也一切正常了.