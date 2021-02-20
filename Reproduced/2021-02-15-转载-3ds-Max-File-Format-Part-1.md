---
layout: post
title: 3ds Max File Format (Part 1: The outer file format; OLE2)
date: 2021-02-15 13:29:04.00 +08:00
categories: 转载
tags: 转载
comments: false
---

转自:https://blog.kaetemi.be/2012/08/17/3ds-max-file-format-part-1/

The 3ds Max file format, not too much documentation to be found about it. There are some hints here and there about how it’s built up, but there exists no central documentation on it.

Right now we are in the following situation. A few thousand of max files, created by a very old version of max (3.x), containing path references to textures and other max files that have been renamed and relocated or which simply no longer exist. Yes, we have a maxscript that can go through them all, and that manages to fix a large number of paths. However, there are a lot of paths that are stored as part as fields in plugins and material scripts that don’t get noticed, and the performance of opening and closing this number of files from 3ds Max directly is horrible. The obvious solution? Figure out how we can read and save the max file with modified contents, without having to understand all of the actual data it contains. Fortunately, this is actually possible without too much work.

Some research online brings up the following blog post, relating to a change in the max file format in version 2010, which would make it easier to update asset paths: http://www.the-area.com/blogs/chris/reading_and_modifying_asset_file_paths_in_the_3ds_max_file. That’s nice and all, but it’s only from version 2010 on, and it very likely won’t contain any assets referenced by path by old plugins and such.

So, starting at the beginning. The blog post I referred to above nicely hints us to the OLE structured file format. Since there exist a wide range of implementations for that, we can pretty much skip that, and accept that it’s basically a filesystem in a file, so it’s a file containing multiple file streams. A reliable open source implementation of this container format can be found in libgsf. When scanning a fairly recent max file, using the command `gsf list`, we can find the following streams inside this file:

```
f         52 VideoPostQueue
f     147230 Scene
f        366 FileAssetMetaData2
f       2198 DllDirectory
f      29605 Config
f       3438 ClassDirectory3
f        691 ClassData
f      29576 SummaryInformation
f       2320 DocumentSummaryInformation
```

The FileAssetMetaData2 is new in 3ds Max 2010.

One step further, we can start examining the contents of these streams. And it’s usually easiest to start off with one of the more simple ones. VideoPostQueue seems small enough to figure out the overall logic of the file format, hoping that the rest is serialized in a similar way. Using the command `gsf dump` we can get a hex output of one of the streams, and using a simple text editor we can find how it’s structured. Binary formats often contain 32 bit length values, which are usually easy to spot in small files, since they’ll contain a large number of 00 values. It’s basically a matter of finding possible 32bit length integers, and matching them together with various fixed length fields and other typical binary file contents, until something programatically logical turns up. Here’s a manually parsed VideoPostQueue storage stream:

```
[
        50 00 (id: 0x0050)
        0a 00 00 00 (size: 10 - 6 = 4)
        [
                01 00 00 00 (value: 1)
        ]
]
[
        60 00 (id: 0x0060)
        2a 00 00 80 (size: 42 - 6 = 36) (note: negative bit = container)
        [
                10 00 (id: 0x0010)
                1e 00 00 00 (size: 30 - 6 = 24)
                [
                        07 00 00 00 (value: 7)
                        01 00 00 00 (value: 1)
                        00 00 00 00
                        00 00 00 00
                        20 12 00 00 (value: 4610)
                        00 00 00 00
                ]
                20 00 (id: 0x0020)
                06 00 00 00 (size: 6 - 6 = 0)
        ]
]
```

The storage streams in the max container file contain a fairly simple chunk based file format (and in fact similar in format to the fairly well known .3ds file format). Being based on chunks is what allows 3ds Max to open a file for which certain plugins are missing. It’s basically a tree structured format where every entry has an identifier and a size, so when an identifier is unknown, or when it’s contents are incompatible, it can simply be kept as is or discarded. The only exceptions in the file that don’t use this structure are SummaryInformation and DocumentSummaryInformation, which are supposedly in a standard Windows format, and the new FileAssetMetaData2 section is formatted differently as well unfortunately.

In this format, the chunk header consists of a 2-byte unsigned integer which is the identifier, and a 4-byte unsigned integer, where the 31 least significant bits are the size and the msb is a flag that helpfully lets us know if the chunk itself contains more chunks, and thus is a container, or not. For very large files, where 31 bits is insufficient for the size, the entire size field is set to 0, and the header increases with an additional 64-bit unsigned integer field which is similarly structured as the 32-bit size field. The size field includes the size of the header.

```
       0 | 0f 20 (id)
                 00 00 00 00 (size missing)
                             17 fe 01 00 00 00 00 80 (size in 64 bits)
```

With this information it is possible to read a max file, modify the binary contents of chunks (most of them are fairly basic of format), and we should be able to re-save the max file with our modified data. The DllDirectory section, for example, parsed programatically starts like this:

```
CStorageContainer - items: 20
        [0x21C0] CStorageValue - bytes: 4
        786432216
        [0x2038] CStorageContainer - items: 2
                [0x2039] CStorageUCString - length: 39
                Viewport Manager for DirectX (Autodesk)
                [0x2037] CStorageUCString - length: 19
                ViewportManager.gup
        [0x2038] CStorageContainer - items: 2
                [0x2039] CStorageUCString - length: 49
                mental ray: Material Custom Attributes (Autodesk)
                [0x2037] CStorageUCString - length: 21
                mrMaterialAttribs.gup
        [0x2038] CStorageContainer - items: 2
                [0x2039] CStorageUCString - length: 37
                Custom Attribute Container (Autodesk)
                [0x2037] CStorageUCString - length: 23
                CustAttribContainer.dlo
...
```

Of course, it would be interesting if we could go further, and directly manipulate the parameters of our own plugins and scripts from our own tools back into the max files so that everything is centrally stored without any duplicate source data in the way. And that’s exactly what I’ll be doing next.