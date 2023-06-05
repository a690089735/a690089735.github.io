---
layout: post
title: [转载]手机访问电脑本地localhost
date: 2023-06-05 14:01:22.00 +08:00
categories: 经验
tags: 经验
comments: false
typora-root-url: ..
---

如何利用手机访问电脑本地的localhost？

[![img](./assets-images/2023-06-05-经验-[转载]手机访问电脑本地localhost-imgs/webp.webp)](https://www.jianshu.com/u/37de4cd8d3b7)

来自简书,原作者:[冻冬龙东墙](https://www.jianshu.com/u/37de4cd8d3b7)

最近在做微信小程序项目时，手机上真机调试无法访问电脑的localhost。这时候我就在想怎样才能实现手机去访问电脑的项目呢？
方法是：**在同个局域网内通过电脑开放端口可以实现**
好，说干就干！

## **第一步，让电脑和手机同属一个局域网，我这里让手机开热点，电脑连接**

![img](./assets-images/2023-06-05-经验-[转载]手机访问电脑本地localhost-imgs/webp-1685944889121-1.webp)

电脑端

![img](./assets-images/2023-06-05-经验-[转载]手机访问电脑本地localhost-imgs/webp-1685944889121-2.webp)

手机端

## 第二步，让电脑开放80与8080端口

右键我的电脑-》点击属性 -》点击系统与安全-》点击防火墙

![img](./assets-images/2023-06-05-经验-[转载]手机访问电脑本地localhost-imgs/webp-1685944889121-3.webp)

防火墙

- 点击**高级属性**进去，然后点击**入站规则**，右边选择**新建规则**
  创建的规则**选端口**，端口号选80.其他的默认即可，然后一直下一步下一步完成，出站规则也是同样道理。
- 然后**8080端口**也给它设置出站入站规则

**当然还有一种更暴力的方法就是把防火墙关闭，这样做非常不推荐，会很危险哈**

## 第三步，获取ip地址

每换一个局域网，ip地址都会跟随改变，因此我们要获取当前局域网的ip地址
windows键+R并输入cmd打开命令行，输入ipconfig获取ip地址，其中ipv4就是大家想要的

![img](./assets-images/2023-06-05-经验-[转载]手机访问电脑本地localhost-imgs/webp-1685944889121-4.webp)

ip地址

## 第四步，测试结果

在这里，你们可以通过在手机浏览器输入**ip：端口号**的方式访问电脑，我把电脑的tomcat打开，我这里测试访问成功！

![img](./assets-images/2023-06-05-经验-[转载]手机访问电脑本地localhost-imgs/webp-1685944889121-5.webp)

手机测试成功！



## 番外~

其实到这里就结束了，我现在测试一下手机上真机调试访问项目嘿嘿
修改app.js小程序项目中自己定义的主机地址，这样项目的请求都调用此服务器地址

![img](./assets-images/2023-06-05-经验-[转载]手机访问电脑本地localhost-imgs/webp-1685944889122-6.webp)

修改主机地址

手机真机调试，手机上都能正常请求数据访问

![img](./assets-images/2023-06-05-经验-[转载]手机访问电脑本地localhost-imgs/webp-1685944889122-7.webp)

真机调试成功！

至此，大功告成！
我是冻冬龙东墙，喜欢请点赞❤

其他相关文章:
[用手机访问电脑本地 localhost 网页或者服务器](https://zhuanlan.zhihu.com/p/62954335)
[同一Wifi下允许手机访问电脑(win10)](https://blog.csdn.net/SJ1551/article/details/106579411)