---
layout: post
title: 3ds Max File Format (Part 5: How it all links together; ReferenceMaker, INode)
date: 2021-02-15 13:37:51.00 +08:00
categories: 转载
tags: 转载
comments: false
---

转自:https://blog.kaetemi.be/2012/08/23/3ds-max-file-format-part-5/

At this point, you should start to familiarize yourself a bit with the publicly available [3ds Max API documentation](http://docs.autodesk.com/3DSMAX/15/ENU/3ds-Max-SDK-Programmer-Guide/). The contents of the file map practically 1:1 with how the system is built up internally. Most important is the inheritance of the classes, as we need to be aware of all the parent classes, and preferably structure our parser classes in a similar way.

As a reminder, check out [the output that we got out of the file in the last part](http://dl.kaetemi.be/blog/maxfile_dump_4.txt). Turn on some good music, and scroll away. The file starts with a ParamBlock2, and ends with a Scene, which is interesting, isn’t it? ParamBlock2 is one of the lowest classes in power, while Scene stands basically at the top of the entire system. It means that the deepest structures, or rather the structures on which everything depends, are serialized out first, followed by the higher classes, which are very likely to refer to them in some way. Chances are high that the second class that is serialized directly refers to the first one; and, as you can easily spot, the class with index 1 has two values that equal 0.

```
        1 0x0001: (SceneClassUnknown: ViewportManager, (0x5a06293c, 0x30420c1e), ViewportManager.gup) [3] { 
                0 0x2034: (StorageRaw) { 
                        Size: 8
                        String: ........ 
                        Hex: 00 00 00 00 ff ff ff ff } 
                1 0x204b: (StorageRaw) { 
                        Size: 1
                        String: . 
                        Hex: 2e } 
                2 0x1000: (StorageRaw) { 
                        Size: 4
                        String: .... 
                        Hex: 00 00 00 00 
                        Int: 0 
                        Float: 0 } } 
```

Unfortunately, 0 is not much of a trustworthy value (which reminds me that you should search for Float: 1 values appearing in the scene, those tend to reveal a lot). But, we do have at least two potential chunks, 0x2034 or 0x1000, that may possibly refer to the first class. Moving on to the next class, at index 2 there’s another ParamBlock2; which is unlikely to refer to something else, and at index three we can find another class which happens to have a reference to index 2 in one of it’s values, 0x2034, which, as it will appear by examining more data, is no coincidence.

```
        3 0x0002: (SceneClassUnknown: mental ray: material custom attribute, (0x218ab459, 0x25dc8980), mrMaterialAttribs.gup) [2] { 
                0 0x2034: (StorageRaw) { 
                        Size: 4
                        String: .... 
                        Hex: 02 00 00 00 
                        Int: 2 
                        Float: 2.8026e-45 } 
                1 0x204b: (StorageRaw) { 
                        Size: 1
                        String: . 
                        Hex: 2e } } 
```

As we saw in the previous part, the first chunk that could be found in many of the class instances in the scene, was related to AppData, which is implemented in the Animatable class. The chunks containing the references appear either first, or after this AppData chunk. They are handled by the ReferenceMaker class, a subclass of Animatable, which is one of the base classes that all of the scene classes derive from. Given this, we can fairly assume that the chunks are written in order of inheritance. This is fairly logical. And it also allows us to guess more accurately at which level chunks are implemented that we have not encountered before.

The references, however, are not related to the more user-centric scene graph. Consultation of the documentation will clarify that the scene graph itself is stored in Node classes, which then reference the objects that they represent in the scene, and that the objects normally have no need for knowledge of their position or rank in the scene. In the file, we can find two node entries. After improving our parser to better show the references, these appear as follows.

```
        380 0x0012: (NodeUnknown: RootNode, (0x00000002, 0x00000000), Builtin) [0] { 
                References 0x2035: (StorageArray) { 
                        0: 16 } 
                0x204B Equals 0x2E (46): (CStorageValue) { 46 } 
                Orphan[0] 0x0120: (StorageRaw) { 
                        Size: 0
                        String:  
                        Hex: } } 
```

and

```
        389 0x001a: (NodeImpl: Node, (0x00000001, 0x00000000), Builtin) [0] { 
                AppData: (AppData) [83] PARSED { 
... etc ... }
                References 0x2035: (StorageArray) { 
                        0: 16
                        1: 0
                        2: 384
                        3: 1
                        4: 387
                        5: 3
                        6: 134
                        7: 6
                        8: 388 } 
                0x204B Equals 0x2E (46): (CStorageValue) { 46 } 
                Orphan[0] 0x09ce: (StorageRaw) { 
                        Size: 4
                        String: .... 
                        Hex: bc 02 00 00 
                        Int: 700 
                        Float: 9.80909e-43 } 
                Orphan[1] 0x0960: (StorageRaw) { 
                        Size: 8
                        String: |....... 
                        Hex: 7c 01 00 00 00 08 00 00 } 
                Orphan[2] 0x0962: (StorageRaw) { 
                        Size: 40
                        String: G.E._.A.c.c._.M.i.k.o.t.o.B.a.n.i.e.r.e. } 
                Orphan[3] 0x09ba: (StorageRaw) { 
                        Size: 0
                        String:  
                        Hex: } 
... etc ....
```

The RootNode appears before the Node, which is opposite to how the Scene stores the classes. This would mean that a node holds a reference to it’s parent somewhere. It does not seem to be in the references block, though. The index of the parent, 380, would be found in the hex print as 7c 01. Easily spotted. The first four bytes of 0x0960 refer to the parent index, the four bytes after that suspicously look like flags of some sort. The chunk before it, 0x09ce, is constant across the file, and is different in different file versions, and I would expect it to be a version number. The chunk with the name after that speaks for itself, and the empty one doesn’t seem to interesting right now, because it’s empty. Empty chunks tend to contain strings or arrays, that’s all you can guess.

But, this node is just some metadata, and it does not actually contain the mesh. It must point to the mesh somehow. In the file there’s an Editable Poly at index 387.

```
387 0x0018: (SceneClassUnknown: Editable Poly, (0x1bf8338d, 0x192f6098), EPoly.dlo) [12] { 
```

Which happens to be refered to at index 4 in the 0x2035 block. The chunk refers to more, so we look up those as well.

```
384 0x0016: (SceneClassUnknown: Position/Rotation/Scale, (0x00002005, 0x00000000), Builtin) [5] { 
134 0x000d: (SceneClassUnknown: NeL Material, (0x64c75fec, 0x222b9eb9), Script) [8] { 
388 0x0019: (SceneClassUnknown: Base Layer, (0x7e9858fe, 0x1dba1df0), Builtin) [9] { 
```

There are other values in this 0x2035 chunk, but they are not references. Two different chunks are used for storing references to other classes, 0x2034 and 0x2035, either one of them and never both of them in the same class. The 0x2034 block simply is an array of all references directly, where -1 indices map to pointer NULL. Here, however, we see the block 0x2035 in use. Cross referencing with different files reveals that the object appears after the number 1, a controller after 0, a material after 3, and a layer after 6. It would appear that this chunk stores the both the class’s index and the reference’s index as a map instead, preceeded by some other integer value that probably contains flags of some sort.

At this point, we can parse [the scene graph](http://dl.kaetemi.be/blog/scene_graph_5.txt). That’s very nice, but we’re not geting any actual 3d data yet, which, for curiosity’s sake would be totally fun to get out of all this, right? Even though my initial plan was just to parse the file to change some filepath strings inside there.