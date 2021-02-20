---
layout: post
title: 3ds Max File Format (Part 3: The department of redundancy department; Config)
date: 2021-02-15 13:32:30.00 +08:00
categories: 转载
tags: 转载
comments: false
---

转自:https://blog.kaetemi.be/2012/08/19/3ds-max-file-format-part-3/

Now we’ll have a look at the Config stream. It begins like follows, and goes on forever with various integer fields and other binary blobs.

```
(StorageContainer) [15] { 
0 0x2090: (StorageRaw) { 
        Size: 4
        String: .... 
        Hex: 00 00 00 00 } 
1 0x20e0: (StorageContainer) [4] { 
        0 0x0100: (StorageRaw) { 
                Size: 12
                String: .. A........ 
                Hex: 00 00 20 41 0a 00 00 00 01 00 00 00 } 
        1 0x0400: (StorageRaw) { 
                Size: 8
                String: ........ 
                Hex: 07 00 00 00 01 00 00 00 } 
```

As most of the contents seems fairly different from eachother, it’s best to look from a distance to the main container.

```
(StorageContainer) [15] {
0 0x2090: (StorageRaw)
1 0x20e0: (StorageContainer) [4]
2 0x20a0: (StorageContainer) [2]
3 0x20a5: (StorageContainer) [2]
4 0x20a6: (StorageContainer) [1]
5 0x2190: (StorageContainer) [2]
6 0x20b0: (StorageContainer) [10]
7 0x2130: (StorageContainer) [3]
8 0x2080: (StorageContainer) [213]
9 0x20d0: (StorageContainer) [9]
10 0x2160: (StorageContainer) [5]
11 0x21a0: (StorageContainer) [82]
12 0x2180: (StorageContainer) [1]
13 0x2007: (StorageContainer) [1]
14 0x2008: (StorageContainer) [3] }
```

The first id seems to be unique, so we can assume that each of these containers has a specific set of information in it. Comparing between files of max versions, there are some less and some more of these identifiers, but the contents of them remains pretty much the same.

One container in this file particularly interests me, as it contains strings related to the NeL Material, and thus will likely be necessary to parse the Scene format where this is stored. More specifically, chunk 0x2180 contains stuff like the following:

```
9 0x0007: (StorageContainer) [3] { 
        0 0x0060: (StorageRaw) { 
                Size: 4
                String: .... 
                Hex: 02 00 00 00 } 
        1 0x0006: (StorageRaw) { 
                Size: 17
                String: ....bForceZWrite. 
                Hex: 0d 00 00 00 62 46 6f 72 63 65 5a 57 72 69 74 65 00 } 
        2 0x0007: (StorageContainer) [7] { 
                0 0x0060: (StorageRaw) { 
                        Size: 4
                        String: .... 
                        Hex: 06 00 00 00 } 
                1 0x0006: (StorageRaw) { 
                        Size: 9
                        String: ....type. 
                        Hex: 05 00 00 00 74 79 70 65 00 } 
                2 0x0006: (StorageRaw) { 
                        Size: 12
                        String: ....boolean. 
                        Hex: 08 00 00 00 62 6f 6f 6c 65 61 6e 00 } 
...
```

The block itself begins like:

```
12 0x2180: (StorageContainer) [1] { 
        0 0x0040: (StorageContainer) [2] { 
                0 0x0050: (StorageRaw) { 
                        Size: 12
                        String: ....._.d..+" 
                        Hex: 00 0c 00 00 ec 5f c7 64 b9 9e 2b 22 } 
                1 0x0007: (StorageContainer) [10] { 
                        0 0x0060: (StorageRaw) { 
                                Size: 4
                                String: .... 
                                Hex: 09 00 00 00 } 
                        1 0x0007: (StorageContainer) [15] { 
                                0 0x0060: (StorageRaw) { 
                                        Size: 4
                                        String: .... 
                                        Hex: 0e 00 00 00 } 
                                1 0x0006: (StorageRaw) { 
                                        Size: 9
                                        String: ....nlbp. 
                                        Hex: 05 00 00 00 6e 6c 62 70 00 } 
...
```

A max file that has the NeL Multi Bitmap script used in it as well, has 2 0x0040 entries in the 0x2180 container. We’ll call the 0x2180 block ConfigScript, and the 0x0040 container ConfigScriptEntry from now on, as these seem to be related to how script parameters will be stored in the file. What’s also interesting is that all the chunks with id 0x0007 in this entire block are containers, and all the 0x0060 blocks are integers. The 0x0050 block is the header block for the ConfigScriptEntry, and contains the same SuperClassID and ClassID from the NeL Material script as seen previously.

Here are a few 0x0007 blocks from a specific depth inside the tree structure:

```
2 0x0007: (StorageContainer) [5] { 
        0 0x0060: (StorageRaw) { 
                Size: 4
                String: .... 
                Hex: 04 00 00 00 } 
        1 0x0006: (StorageRaw) { 
                Size: 9
                String: ....type. 
                Hex: 05 00 00 00 74 79 70 65 00 } 
        2 0x0006: (StorageRaw) { 
                Size: 12
                String: ....boolean. 
                Hex: 08 00 00 00 62 6f 6f 6c 65 61 6e 00 } 
        3 0x0006: (StorageRaw) { 
                Size: 12
                String: ....default. 
                Hex: 08 00 00 00 64 65 66 61 75 6c 74 00 } 
        4 0x0001: (StorageRaw) { 
                Size: 4
                String: .... 
                Hex: 00 00 00 00 } } } 
2 0x0007: (StorageContainer) [7] { 
        0 0x0060: (StorageRaw) { 
                Size: 4
                String: .... 
                Hex: 06 00 00 00 } 
        1 0x0006: (StorageRaw) { 
                Size: 9
                String: ....type. 
                Hex: 05 00 00 00 74 79 70 65 00 } 
        2 0x0006: (StorageRaw) { 
                Size: 10
                String: ....float. 
                Hex: 06 00 00 00 66 6c 6f 61 74 00 } 
        3 0x0006: (StorageRaw) { 
                Size: 12
                String: ....default. 
                Hex: 08 00 00 00 64 65 66 61 75 6c 74 00 } 
        4 0x0004: (StorageRaw) { 
                Size: 4
                String: ..#< 
                Hex: 0a d7 23 3c } 
        5 0x0006: (StorageRaw) { 
                Size: 7
                String: ....ui. 
                Hex: 03 00 00 00 75 69 00 } 
        6 0x0007: (StorageContainer) [2] { 
                0 0x0060: (StorageRaw) { 
                        Size: 4
                        String: .... 
                        Hex: 01 00 00 00 } 
                1 0x0006: (StorageRaw) { 
                        Size: 17
                        String: ....cfBumpUSpeed. 
                        Hex: 0d 00 00 00 63 66 42 75 6d 70 55 53 70 65 65 64 00 } } } } 
2 0x0007: (StorageContainer) [5] { 
        0 0x0060: (StorageRaw) { 
                Size: 4
                String: .... 
                Hex: 04 00 00 00 } 
        1 0x0006: (StorageRaw) { 
                Size: 9
                String: ....type. 
                Hex: 05 00 00 00 74 79 70 65 00 } 
        2 0x0006: (StorageRaw) { 
                Size: 12
                String: ....integer. 
                Hex: 08 00 00 00 69 6e 74 65 67 65 72 00 } 
        3 0x0006: (StorageRaw) { 
                Size: 12
                String: ....default. 
                Hex: 08 00 00 00 64 65 66 61 75 6c 74 00 } 
        4 0x0003: (StorageRaw) { 
                Size: 4
                String: .... 
                Hex: 01 00 00 00 } } } 
```

If you have an understanding of the file format at this point, and try to understand the contents of these blocks, you should notice how ridiculous this looks.

It’s like making an xml file that goes

```
<name>Name</name><value>Number</value>
<name>Value</name><value>2</value>
```

instead of

```
<Number>2</Number>
```

thanks to abstraction layers being piled up on each other.

The 0x0060 entry contains an integer which states the number of chunks that follow in the container, and is thus basically the size header of an array. Chunks with id 0x0006 recognizably contain strings, prefixed with their size, which is already known by the chunk header, and followed by an unnecessary null value byte suffix. It gets even sillier. The blocks shown above are actually not arrays, but tables of two columns stored in an array stored in the chunk tree structure. The first value in the array is the name column, and the second value the value column.

These blocks are child chunks of containers, containing a chunk with a name of a data field, and describe the format of this data field. It is fairly straightforward, the value of the name ‘type’ is the type, the ‘default’ is the default, and so on. For the default value, and this actually goes for the entire format of the ConfigScript block, the id of the chunk is directly related to the type field, and defines the actual low level storage of the field. The type fields is very helpful in finding out the meanings of these chunk ids.

0x0001 is a boolean stored as 4 bytes, 0x0002 does not appear in my file, 0x0003 is a 32 bit possibly signed integer, 0x0004 is a float, 0x0005 is a string in the same format as the 0x0006 internal strings, 0x0007 is the previously covered array-in-a-container, 0x0008 is a color stored as a 3 floating point vector with value 255.f being the maximum. With this information, the file can be made much more readable. Here’s a short excerpt (pun intended) from inside the ConfigScript block.

```
2 0x0007: (ConfigScriptMetaContainer) [42] { 
        0 0x0060: (CStorageValue) { 41 } 
        1 0x0006: (ConfigScriptMetaString) { main } 
        2 0x0003: (CStorageValue) { 1 } 
        3 0x0003: (CStorageValue) { 2 } 
        4 0x0007: (ConfigScriptMetaContainer) [3] { 
                0 0x0060: (CStorageValue) { 2 } 
                1 0x0006: (ConfigScriptMetaString) { rollout } 
                2 0x0006: (ConfigScriptMetaString) { NelParams } } 
        5 0x0007: (ConfigScriptMetaContainer) [3] { 
                0 0x0060: (CStorageValue) { 2 } 
                1 0x0006: (ConfigScriptMetaString) { bLightMap } 
                2 0x0007: (ConfigScriptMetaContainer) [5] { 
                        0 0x0060: (CStorageValue) { 4 } 
                        1 0x0006: (ConfigScriptMetaString) { type } 
                        2 0x0006: (ConfigScriptMetaString) { boolean } 
                        3 0x0006: (ConfigScriptMetaString) { default } 
                        4 0x0001: (CStorageValue) { 0 } } } 
        6 0x0007: (ConfigScriptMetaContainer) [3] { 
                0 0x0060: (CStorageValue) { 2 } 
                1 0x0006: (ConfigScriptMetaString) { bUnlighted } 
                2 0x0007: (ConfigScriptMetaContainer) [7] { 
                        0 0x0060: (CStorageValue) { 6 } 
                        1 0x0006: (ConfigScriptMetaString) { type } 
                        2 0x0006: (ConfigScriptMetaString) { boolean } 
                        3 0x0006: (ConfigScriptMetaString) { default } 
                        4 0x0001: (CStorageValue) { 0 } 
                        5 0x0006: (ConfigScriptMetaString) { ui } 
                        6 0x0007: (ConfigScriptMetaContainer) [2] { 
                                0 0x0060: (CStorageValue) { 1 } 
                                1 0x0006: (ConfigScriptMetaString) { cbUnlighted } } } } 
        7 0x0007: (ConfigScriptMetaContainer) [3] { 
                0 0x0060: (CStorageValue) { 2 } 
                1 0x0006: (ConfigScriptMetaString) { bStainedGlassWindow } 
                2 0x0007: (ConfigScriptMetaContainer) [7] { 
                        0 0x0060: (CStorageValue) { 6 } 
                        1 0x0006: (ConfigScriptMetaString) { type } 
                        2 0x0006: (ConfigScriptMetaString) { boolean } 
                        3 0x0006: (ConfigScriptMetaString) { default } 
                        4 0x0001: (CStorageValue) { 0 } 
                        5 0x0006: (ConfigScriptMetaString) { ui } 
                        6 0x0007: (ConfigScriptMetaContainer) [2] { 
                                0 0x0060: (CStorageValue) { 1 } 
                                1 0x0006: (ConfigScriptMetaString) { cbStainedGlassWindow } } } } 
```

Most other blocks in this file seem to contain value sets where the type is fixed to the id, and the id is basically the name of the config value. Right now, there doesn’t seem to be anything in there that interests me, so I won’t bother with them too much, but here’s an example of one simplified anyways.

```
2 0x20a0: (Config20a0) [2] { 
        0 0x0100: (CStorageValue) { 1 } 
        1 0x0110: (Config20a0Entry) [25] { 
                0 0x0100: (CStorageValue) { 220 } 
                1 0x0110: (CStorageValue) { 0 } 
                2 0x0120: (CStorageValue) { 1 } 
                3 0x0130: (CStorageValue) { 0 } 
                4 0x0140: (CStorageValue) { 0 } 
                5 0x0150: (CStorageValue) { 0 } 
                6 0x0160: (CStorageValue) { 1 } 
                7 0x0161: (CStorageValue) { 1 } 
                8 0x0170: (CStorageValue) { 1 } 
                9 0x0180: (CStorageValue) { 0 } 
                10 0x0190: (CStorageValue) { 0 } 
                11 0x0200: (CStorageValue) { 0 } 
                12 0x0210: (CStorageValue) { 0 } 
                13 0x0220: (CStorageValue) { 994352038 } 
                14 0x0230: (CStorageValue) { 1041059807 } 
                15 0x0240: (CStorageValue) { 266338296 } 
                16 0x0250: (CStorageValue) { 131008 } 
                17 0x0260: (CStorageValue) { 0 } 
                18 0x0270: (CStorageValue) { 1 } 
                19 0x0280: (CStorageValue) { 0 } 
                20 0x0310: (CStorageValue) { 0 } 
                21 0x0290: (CStorageValue) {  } 
                22 0x0390: (CStorageValue) { default } 
                23 0x0300: (StorageContainer) [1] { 
                        0 0x0100: (StorageRaw) { 
                                Size: 4
                                String: .... 
                                Hex: 00 00 00 00 } } 
                24 0x0330: (StorageRaw) { 
                        Size: 16
                        String: ................ } } } 
```

Quite boring, right?

Next up is the long awaited Scene.