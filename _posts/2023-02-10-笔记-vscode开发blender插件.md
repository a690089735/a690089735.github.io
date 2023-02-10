---
layout: post
title: vscode开发blender插件
date: 2023-02-10 13:03:03.00 +08:00
categories: 笔记
tags: 笔记
comments: false
typora-root-url: ..
---

文章内容

1. pip install fake-bpy-module-3.3 安装假的bpy,在python中可以正常引用和自动完成

2. vscode安装Blender Development插件

3. 配置Blender Development 用户设置
   Blender:Reload On Save (保存时在blender中重新加载插件)
   Blender:Addon Folders (插件文件夹,如果空,则用工作文件夹) 允许指定在其中搜索插件的绝对或根工作空间相对目录。如果未指定，将搜索所有工作区文件夹。
   Blender:Executables (blender执行文件)
   Blender>Scripts:Directories (脚本库文件夹)
   填写Executables,一定要按这个格式写

   > "blender.executables": [
   >
   > ​    {
   >
   > ​      "path": "C:\\Program Files\\Blender Foundation\\Blender 3.3\\blender.exe",
   >
   > ​      "name": "",
   >
   > ​      "isDebug": false
   >
   > ​    }
   >
   >   ]

4. Blender:Start 开始运行,然后才能在blender中运行脚本