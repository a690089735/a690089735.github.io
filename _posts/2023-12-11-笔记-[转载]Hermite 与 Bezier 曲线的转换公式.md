---
layout: post
title: [转载]Hermite 与 Bezier 曲线的转换公式
date: 2023-12-11 18:00:48.00 +08:00
categories: 笔记
tags: 笔记
comments: false
typora-root-url: ..
---

© 2023 无名玩家X

## 简介

本文给出 Hermite 与 Bezier 曲线互转的公式及其推导过程。

## Bezier 曲线

![image-20231211180232866](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231211180232866.png)

其中：

![image-20231212135035728](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135035728.png)

[矩阵](https://so.csdn.net/so/search?q=矩阵&spm=1001.2101.3001.7020)形式：

![image-20231212135058198](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135058198.png)

## Hermite 曲线

![image-20231212135113442](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135113442.png)

其中：

![image-20231212135132863](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135132863.png)

矩阵形式：

![image-20231212135151041](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135151041.png)

转换公式
推导
将 hermite 和 bezier 的参数写成矩阵![image-20231212135218556](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135218556.png)和![image-20231212135229016](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135229016.png),如下：

![image-20231212135243488](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135243488.png)

由于 bezier 和 hermite 是等价的，有：

![image-20231212135255627](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135255627.png)

其中矩阵 M 是 hermite 和 bezier 矩阵形式中间的那个矩阵。

于是：

![image-20231212135311175](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135311175.png)

所以有：

![image-20231212135323926](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135323926.png)

所以，Herimite 控制参数与 Bezier 控制参数的关系是：

![image-20231212135336806](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135336806.png)

### Hermite 转 Bezier

由推导的公式，可知：

![image-20231212135348604](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135348604.png)

### Bezier 转 Hermite

由推导的公式，可知：

![image-20231212135423959](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/image-20231212135423959.png)

### 转换效果示例

可以看到，两条曲线完美重合

![img](./assets-images/2023-12-11-笔记-[转载]Hermite 与 Bezier 曲线的转换公式-imgs/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM2MTQxMjY=,size_16,color_FFFFFF,t_70.png)

上图为 Tikz 绘制，绘制代码为：

``````Tikz
\begin{tikzpicture}[scale=8]
\draw[help lines,thick,color=gray,step=.5cm,
dashed] (0,0) grid (1,1);
\draw[->] (-0.2,0) -- (1.2,0) node[right] {$x$};
\draw[->] (0,-0.2) -- (0,1.2) node[above] {$y$};
% 0, 1, 0, 1 for bezier
\draw[scale=1,domain=0:1, samples=50, smooth, variable=\x,blue] plot ({\x},{ 0 * (1 - \x) ^ 3 + 3 * 1 * (1 - \x)^2 * \x + 3 * 0 * (1 - \x) * \x ^ 2 + \x ^ 3});
\node[down] at (0, 0.8) {$f(x) = 0 * B_0(x) + 1 * B_1(x) + 0 * B_2 (x) + 1 * B_3 (x)$};

\draw[scale=1,domain=0:1, samples=50, smooth,variable=\x,red] plot ({\x},{
0 + 3 * 1 * \x * (1 - \x) ^ 2 + 1 * \x ^ 2 * (3 - 2 * \x) + 3 * 1 * (-1) * \x ^ 2 * (1 - \x)
});
\node[down] at (1, 0.2) {$f(x) = 0 * H_{00}(x) + 3 * H_{10}(x) + 1 * H_{01}(x) + 3 * H_{11}(x)$};
\end{tikzpicture}

``````

