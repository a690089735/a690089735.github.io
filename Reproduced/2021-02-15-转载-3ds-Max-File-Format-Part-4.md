---
layout: post
title: 3ds Max File Format (Part 4: The first useful data; Scene, AppData, Animatable)
date: 2021-02-15 13:37:51.00 +08:00
categories: 转载
tags: 转载
comments: false
---

转自:https://blog.kaetemi.be/2012/08/21/3ds-max-file-format-part-4/

The most interesting part of this file is, evidently, the Scene. Opening it up in the chunk parser, it begins like follows, and goes on for a few ten thousands of lines:

```
0 0x2012: (StorageContainer) [452] { 
        0 0x0000: (StorageContainer) [6] { 
                0 0x000b: (StorageRaw) { 
                        Size: 24
                        String: <).Z..B0`......!........ 
                        Hex: 3c 29 06 5a 1e 0c 42 30 60 11 00 00 00 00 00 21 e0 2e 04 00 01 00 00 00 } 
                1 0x000e: (StorageRaw) { 
                        Size: 19
                        String: ..............@.... 
                        Hex: 00 00 04 00 00 00 00 00 82 00 00 00 00 00 40 00 00 00 00 } 
                2 0x000e: (StorageRaw) { 
                        Size: 19
                        String: ..............@.... 
                        Hex: 01 00 01 00 00 00 00 00 82 00 00 00 00 00 40 00 00 00 00 } 
```

Inside the Scene stream, we can find a single chunk container. In this case the id of this chunk is 0x2012, and is apparently related to which version, 2010, the file was saved with. This container contains a large number of objects, 452 in this case, with ids that are all very low in value. So, we go look for something we recognize.

While scrolling through the file, I found a short string that I recognized, “no fx”, which is part of the NeL node properties plugin. It appears in the file under the following section:

```
        389 0x001a: (StorageContainer) [25] { 
                0 0x2150: (StorageContainer) [84] { 
                        0 0x0100: (StorageRaw) { 
                                Size: 4
                                String: S... 
                                Hex: 53 00 00 00 
                                Int: 83 
                                Float: 1.16308e-43 } 
...
                        18 0x0110: (StorageContainer) [2] { 
                                0 0x0120: (StorageRaw) { 
                                        Size: 20
                                        String: XH...u.. ....'...... 
                                        Hex: 58 48 d6 04 1d 75 d1 16 20 10 00 00 2e 27 0c 05 09 00 00 00 } 
                                1 0x0130: (StorageRaw) { 
                                        Size: 9
                                        String: no sound. } } 
                        19 0x0110: (StorageContainer) [2] { 
                                0 0x0120: (StorageRaw) { 
                                        Size: 20
                                        String: XH...u.. .../'...... 
                                        Hex: 58 48 d6 04 1d 75 d1 16 20 10 00 00 2f 27 0c 05 06 00 00 00 } 
                                1 0x0130: (StorageRaw) { 
                                        Size: 6
                                        String: no fx. } } 
                        20 0x0110: (StorageContainer) [2] { 
                                0 0x0120: (StorageRaw) { 
                                        Size: 20
                                        String: XH...u.. ........... 
                                        Hex: 58 48 d6 04 1d 75 d1 16 20 10 00 00 b2 07 00 00 01 00 00 00 } 
                                1 0x0130: (StorageRaw) { 
                                        Size: 1
                                        String: . 
                                        Hex: 00 } } 
...
```

The 0x2150 chunk seems to exclusively contain 0x0110 entries, preceeded one 0x0100 header entry stating the number of 0x0110 entries. Every entry has a 0x0130 binary blob which is the value of some property, and a 0x0120 binary blob which would likely be some sort of identifier header of this value. Now we should find out how our own nel plugin code puts this value in there, to see if we can make sense of this header.

```
CExportNel::getScriptAppData(pNode, NEL3D_APPDATA_ENV_FX, "no fx");
```

This is the line of code that reads the environment fx property from a node. The value of NEL3D_APPDATA_ENV_FX is defined as:

```
#define NEL3D_APPDATA_ENV_FX (84682543)
```

Which should appear as 2f 27 0c 05 in the hex output. And it can indeed be found at byte index 12, followed by another integer 6 which happens to match with the length of the value in the value chunk. There’s that redundancy showing up again. Looking deeper into the function to figure out the rest of the bytes, we can find this in the getScriptAppData function

```
AppDataChunk *ap=node->GetAppDataChunk (MAXSCRIPT_UTILITY_CLASS_ID, UTILITY_CLASS_ID, id);
```

Where the class id MAXSCRIPT_UTILITY_CLASS_ID matches with the first 8 bytes of the header, and the super class id UTILITY_CLASS_ID matches with the following 4 bytes. In short:

```
58 48 d6 04 1d 75 d1 16 // MAXSCRIPT_UTILITY_CLASS_ID
20 10 00 00 // UTILITY_CLASS_ID
2f 27 0c 05 // NEL3D_APPDATA_ENV_FX
06 00 00 00 // SIZE
```

We can now be quite sure that the 0x2150 block contains all of the AppData entries. According to the public SDK documentation, the AppData functionality is part of the Animatable base class. Which means that the chunk which contains this block is either an instance of this Animatable class, or more likely a subclass of it. It is of course very likely that the class is somehow identified by the chunk id, which in this case is 0x001a, or 26 in decimal.

Now, the reason why you shouldn’t have skipped part 1 and part 2 of this series, is because the data in the DllDirectory and ClassDirectory3 streams is needed to make sense of the Scene stream. Similar to how the ClassDirectory3 references a dll in the DllDirectory by index, the Scene is here referencing a class by index in the ClassDirectory3. This allows to get hold of the ClassId, needed to instantiate the class from the associated class description instance, or to provide a fallback mechanism when the class is part of a missing plugin, and be able to provide the user with the name and description of what is missing from his installation.

At index 26 of the ClassDirectory3 in this file, I can find the following entry:

```
Entries[26]: (ClassEntry) [2] PARSED { 
        Header: (ClassEntryHeader) { 
                DllIndex: -1
                ClassId: (0x00000001, 0x00000000)
                SuperClassId: 1 } 
        Name: Node}
```

Which is the builtin class Node, which probably implements the INode interface that ends up deriving from the Animatable base class.

To confirm this theory, I go the other way, and look for a class I know about.

```
Entries[13]: (ClassEntry) [2] PARSED { 
        Header: (ClassEntryHeader) { 
                DllIndex: -2
                ClassId: (0x64c75fec, 0x222b9eb9)
                SuperClassId: 3072 } 
        Name: NeL Material} 
```

At index 13 I find the NeL material script class, which would then be found as a chunk in the file with id 0x000d. And there exists one.

```
        134 0x000d: (StorageContainer) [8] { 
                0 0x2034: (StorageRaw) { 
                        Size: 40
                        String: |.......~............................... 
                        Hex: 7c 00 00 00 7d 00 00 00 7e 00 00 00 7f 00 00 00 80 00 00 00 81 00 00 00 82 00 00 00 83 00 00 00 84 00 00 00 85 00 00 00 } 
                1 0x204b: (StorageRaw) { 
                        Size: 1
                        String: . 
                        Hex: 2e } 
                2 0x21b0: (StorageContainer) [1] { 
                        0 0x1020: (StorageRaw) { 
                                Size: 4
                                String: ^... 
                                Hex: 5e 00 00 00 
                                Int: 94 
                                Float: 1.31722e-43 } } 
                3 0x0010: (StorageRaw) { 
                        Size: 8
                        String: ........ 
                        Hex: 0e 00 00 00 09 00 00 00 } 
                4 0x4001: (StorageRaw) { 
                        Size: 50
                        String: M.T.R.L._.G.E._.A.c.c._.M.i.k.o.t.o.B.a.n.i.e.r.e. } 
                5 0x4003: (StorageRaw) { 
                        Size: 4
                        String: .... 
                        Hex: 0a 02 00 00 
                        Int: 522 
                        Float: 7.31478e-43 } 
                6 0x4020: (StorageRaw) { 
                        Size: 4
                        String: .... 
                        Hex: 00 00 00 00 
                        Int: 0 
                        Float: 0 } 
                7 0x4030: (StorageRaw) { 
                        Size: 16
                        String: ...............? 
                        Hex: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 80 3f } } 
```

Which, as entry 0x4001 helpfully lets us know by the UTF-16 name MTRL_GE_Acc_MikotoBaniere, is indeed a NeL Material.

So, using this knowledge, we can parse the scene container in a smarter way. Here I provide for you the output at this point.

http://dl.kaetemi.be/blog/maxfile_dump_4.txt

Now that we have figured out which chunks are contained in the Scene streams, and we know how and where some of the data inside it is formatted, how does it all link together? That will be the next subject.