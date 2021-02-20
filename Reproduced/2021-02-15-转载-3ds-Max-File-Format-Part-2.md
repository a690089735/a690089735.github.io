---
layout: post
title: 3ds Max File Format (Part 2: The first inner structures; DllDirectory, ClassDirectory3)
date: 2021-02-15 13:32:11.00 +08:00
categories: 转载
tags: 转载
comments: false
---

转自:https://blog.kaetemi.be/2012/08/19/3ds-max-file-format-part-2/

Now that we understand the outer structure of the file, it’s time to look closer to what’s inside. The DllDirectory stream looks like a good starting point. After cleaning up a whole bunch of code to make it easier to plug in specialized handling code, a nice and readable output of this structure shows up as follows:

```
DllDirectory
(StorageContainer) [20] { 
0 0x21c0: (StorageRaw) { 
        Size: 4
        String: .... 
        Hex: d8 00 e0 2e } 
1 0x2038: (StorageContainer) [2] { 
        0 0x2039: (StorageRaw) { 
                Size: 78
                String: V.i.e.w.p.o.r.t. .M.a.n.a.g.e.r. .f.o.r. .D.i.r.e.c.t.X. .(.A.u.t.o.d.e.s.k.). } 
        1 0x2037: (StorageRaw) { 
                Size: 38
                String: V.i.e.w.p.o.r.t.M.a.n.a.g.e.r...g.u.p. } } 
2 0x2038: (StorageContainer) [2] { 
        0 0x2039: (StorageRaw) { 
                Size: 98
                String: m.e.n.t.a.l. .r.a.y.:. .M.a.t.e.r.i.a.l. .C.u.s.t.o.m. .A.t.t.r.i.b.u.t.e.s. .(.A.u.t.o.d.e.s.k.). } 
        1 0x2037: (StorageRaw) { 
                Size: 42
                String: m.r.M.a.t.e.r.i.a.l.A.t.t.r.i.b.s...g.u.p. } } 
...
19 0x2038: (StorageContainer) [2] { 
        0 0x2039: (StorageRaw) { 
                Size: 54
                String: B.i.p.e.d. .C.o.n.t.r.o.l.l.e.r. .(.A.u.t.o.d.e.s.k.). } 
        1 0x2037: (StorageRaw) { 
                Size: 18
                String: b.i.p.e.d...d.l.c. } } } 
```

Thanks to the chunks, most of this is self-explanatory, and fairly easy to handle. The 0x21c0 chunk seems to be a header chunk for the DllDirectory, so we can call it DllHeader or something similar, and contains 4 bytes. This chunk is found in a version 2010 file, but doesn’t seem to exist in files from version 3, so it’s probably not crucial to handle and we can ignore it’s contents until it seems we need it for something. The rest of the chunks in this container are all of id 0x2038, and are the entries in this list, so they are called DllEntry. Inside each of these, there is a 0x2039 chunk containing a description, and a 0x2037 chunk containing a name, both in UTF-16.

The meaning of chunk identifiers depends on the parent container chunk, so we have to code it like that as well. Each container type is set up with a handler to create the class that handles a chunk of a specified identifier. Parsing this block with some smarter code results in a data reading that looks as follows:

```
(DllDirectory) [20] { 
0 0x21c0: (CStorageValue) { 786432216 } 
1 0x2038: (DllEntry) [2] { 
        0 0x2039: (CStorageValue) { Viewport Manager for DirectX (Autodesk) } 
        1 0x2037: (CStorageValue) { ViewportManager.gup } } 
2 0x2038: (DllEntry) [2] { 
        0 0x2039: (CStorageValue) { mental ray: Material Custom Attributes (Autodesk) } 
        1 0x2037: (CStorageValue) { mrMaterialAttribs.gup } } 
...
19 0x2038: (DllEntry) [2] { 
        0 0x2039: (CStorageValue) { Biped Controller (Autodesk) } 
        1 0x2037: (CStorageValue) { biped.dlc } } } 
```

Next, we do a similar thing for the ClassDirectory3 stream.

```
ClassDirectory3
(StorageContainer) [57] { 
0 0x2040: (StorageContainer) [2] { 
        0 0x2060: (StorageRaw) { 
                Size: 16
                String: ................ 
                Hex: ff ff ff ff 82 00 00 00 00 00 00 00 82 00 00 00 } 
        1 0x2042: (StorageRaw) { 
                Size: 22
                String: P.a.r.a.m.B.l.o.c.k.2. } } 
1 0x2040: (StorageContainer) [2] { 
        0 0x2060: (StorageRaw) { 
                Size: 16
                String: ....<).Z..B0`... 
                Hex: 00 00 00 00 3c 29 06 5a 1e 0c 42 30 60 11 00 00 } 
        1 0x2042: (StorageRaw) { 
                Size: 30
                String: V.i.e.w.p.o.r.t.M.a.n.a.g.e.r. } } 
...
8 0x2040: (StorageContainer) [2] { 
        0 0x2060: (StorageRaw) { 
                Size: 16
                String: ................ 
                Hex: 03 00 00 00 02 00 00 00 00 00 00 00 00 0c 00 00 } 
        1 0x2042: (StorageRaw) { 
                Size: 16
                String: S.t.a.n.d.a.r.d. } } 
...
13 0x2040: (StorageContainer) [2] { 
        0 0x2060: (StorageRaw) { 
                Size: 16
                String: ....._.d..+".... 
                Hex: fe ff ff ff ec 5f c7 64 b9 9e 2b 22 00 0c 00 00 } 
        1 0x2042: (StorageRaw) { 
                Size: 24
                String: N.e.L. .M.a.t.e.r.i.a.l. } } 
...
56 0x2040: (StorageContainer) [2] { 
        0 0x2060: (StorageRaw) { 
                Size: 16
                String: ...."".......... 
                Hex: ff ff ff ff 22 22 00 00 00 00 00 00 00 01 00 00 } 
        1 0x2042: (StorageRaw) { 
                Size: 10
                String: S.c.e.n.e. } } } 
```

This container does not seem to have a header chunk, but again simply contains a whole bunch of entries of id 0x2040, containing a binary blob with id 0x2060 and a UTF-16 string with id 0x2042 that has a description. There’s a block in here with some data that I can recognize and reference from our own code. The NeL Material, which is a MAXScript, has a class id of (0x64c75fec, 0x222b9eb9) which matches the middle 8 bytes of the 16 byte blob (read them backwards). The last four bytes in the blob match with the last four bytes in the Standard (material) class entry, and appear to be the SuperClassID. When we look closer at the first four bytes, this appears to be a signed integer, given that there’s both ff ff ff as 00 00 00 numbers without too much inbetween. For the NeL Material, which is a script, this value is -2, cross-referencing with other max files with scripted classes reveals the same. Builtin types, such as Scene, have this number as -1. Classes that come from plugins, such as ViewPortManager, have a positive value. Even closer inspection reveals that this value matches with the index of the associated dll in the DllDirectory, ViewPortManager being part of ViewPortManager.gup, and Standard being part of mtl.dlt. It can be expected that the indices of the classes in this list will be needed later on as well. A smarter parsing output looks as follows:

```
(ClassDirectory3) [57] { 
0 0x2040: (ClassEntry) [2] { 
        0 0x2060: (ClassDirectoryHeader) { 
                DllIndex: -1
                ClassID: (0x00000000, 0x00000082)
                SuperClassID: 130 } 
        1 0x2042: (CStorageValue) { ParamBlock2 } } 
1 0x2040: (ClassEntry) [2] { 
        0 0x2060: (ClassDirectoryHeader) { 
                DllIndex: 0
                ClassID: (0x30420c1e, 0x5a06293c)
                SuperClassID: 4448 } 
        1 0x2042: (CStorageValue) { ViewportManager } } 
...
56 0x2040: (ClassEntry) [2] { 
        0 0x2060: (ClassDirectoryHeader) { 
                DllIndex: -1
                ClassID: (0x00000000, 0x00002222)
                SuperClassID: 256 } 
        1 0x2042: (CStorageValue) { Scene } } } 
```

The ClassData stream is very similar, and seems to contain a global data storage for classes, or something in that style. It doesn’t seem to have anything in it that interests me or seems crucial at this point, so I won’t bother with it too much for now. It’s fairly self-explanatory.

```
(ClassData) [7] { 
0 0x2100: (ClassDataEntry) [2] { 
        0 0x2110: (ClassDataHeader) { 
                ClassID: (0xbe7c7e52, 0x87d987f4)
                SuperClassID: 16 } 
        1 0x2120: (StorageRaw) { 
                Size: 0
                String:  
                Hex: } } 
...
4 0x2100: (ClassDataEntry) [2] { 
        0 0x2110: (ClassDataHeader) { 
                ClassID: (0x33b673a4, 0x44b50d1e)
                SuperClassID: 4128 } 
        1 0x2120: (StorageContainer) [14] { 
                0 0x0190: (StorageRaw) { 
                        Size: 48
                        String: ...................=...=.......@.z.B.......@...= 
                        Hex: 00 00 00 00 00 00 00 00 1f 1c c1 c3 01 00 00 00 cd cc cc 3d cd cc cc 3d 00 00 00 00 cf f7 7b 40 e1 7a 1d 42 01 00 00 00 00 00 a0 40 cd cc cc 3d } 
                1 0x019c: (StorageRaw) { 
                        Size: 72
                        String: ...................?...@.......@.z.B.......@...=...=.@.E...=..........HC 
                        Hex: 00 00 00 00 00 00 00 00 1f 1c c1 c3 01 00 00 00 00 00 80 3f 00 00 a0 40 00 00 00 00 cf f7 7b 40 e1 7a 1d 42 01 00 00 00 00 00 a0 40 cd cc cc 3d cd cc cc 3d 00 40 9c 45 cd cc cc 3d 01 00 00 00 01 00 00 00 00 00 48 43 } 
...
```

So far, this was easy. After this comes the real stuff.