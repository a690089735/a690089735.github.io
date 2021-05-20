---
layout: post
title: 较好的Python轻量流程--VSCode
date: 2021-04-10 08:25:05.00 +08:00
categories: 经验
tags: 经验
comments: false
---

文章内容

### 预览

界面如下

![image-20210410083511106](F:%5CGitHub%5Ca690089735.github.io%5Cassets-images%5C2021-04-10-%E7%BB%8F%E9%AA%8C-%E5%8D%9A%E5%AE%A2%E6%96%87%E7%AB%A0%5Cimage-20210410083511106.png)

 对于日常开发需求不多的自己,平常最多使用的是Python自带的IDLE,但是最近实在是受不了中文输入法下出现错误输入的问题了,就按一些需求找到了这个替代品.

1. 简单便捷,体积小,至少不要启动一下都得等好一会儿.
1. 自动完成,错误提示功能,.
1. 方便调试,可以像IDLE一样交互式调试,直接运行看到结果,也可以单步测试



### 配置使用

1. 先有一个最新版的VSCode,然后安装Python扩展.

2. 然后新建文件,保存为后缀名为.py的文件,这样可以自动启用扩展.

3. 第一次启用扩展时会出现一个说明界面,,可以按照里面的项目测试一下.

4. 第一次运行交互式模式,会提示安装 Jupyter来启用扩展调试功能,Jupyter扩展运行时,会提示需要安装ipykernel,但因为pip的连接问题,自动安装大概率失败.

   可以直接用cmd:`pip install ipykernel`,然后后面加个`-i https://pypi.tuna.tsinghua.edu.cn/simple/`,这是用清华大学的pip源来安装.(来源[python中用pip安装包出现ConnectTimeoutError](https://blog.csdn.net/qq_25964837/article/details/80295041))

4. 就好了,在代码中输入`#%%`可以启用扩展功能.注意安装完扩展和预期效果不符的话,可以重启一下VSCode试试.



### 提示

VSCode切换行注释的快捷键 `Ctrl+/`.

上面Python扩展安装齐全之后,Ctrl/Shift/Alt 这仨可以和Enter组合,有奇效.