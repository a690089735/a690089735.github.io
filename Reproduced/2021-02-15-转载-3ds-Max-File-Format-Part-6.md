---
layout: post
title: 3ds Max File Format (Part 6: We get signal)
date: 2021-02-15 13:38:06.00 +08:00
categories: 转载
tags: 转载
comments: false
---

转自:https://blog.kaetemi.be/2012/08/25/3ds-max-file-format-part-6/

Let’s see what we can do now.

```
INode *node = scene.container()->scene()->rootNode()->find(ucstring("TR_HOF_civil01_gilet")); nlassert(node);
exportObj("tr_hof_civil01_gilet.obj", node->getReference(1)->getReference(1));
```

![Main screen turn on!!](F:%5CGitHub%5Ca690089735.github.io%5Cassets-images%5C2021-02-15-%E7%AC%94%E8%AE%B0-3ds-Max-File-Format-Part-6%5Cwe_get_signal.png)

Plain easy, right?