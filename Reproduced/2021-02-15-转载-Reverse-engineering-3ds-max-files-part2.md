---
layout: post
title: Reverse engineering 3ds max files part 2
date: 2021-02-15 22:42:20.00 +08:00
categories: 转载
tags: 转载
comments: false
---

转自:https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/

April 15, 2013

This next post is for programmers who like working with files at the low level. I’ve figured out another part of the .max file format and it’s useful for grabbing thumbnails out of the files without needing 3DS Max to be installed. If anyone figures out the parts I have question marks on, please leave a message at the bottom. I would like to flesh this out some more. Especially the thumbnail header. I just can’t seem to find any standard bitmap header that works.

## Summary Information

| FE FF                                                        | short -2                                  | File Type                                                    |
| ------------------------------------------------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| 00 00                                                        | short 0                                   | Version                                                      |
| 06 01 02 00                                                  | int 131334                                | System Identifier                                            |
| 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00              | GUID 00000000-0000-0000-0000-000000000000 |                                                              |
| 01 00 00 00                                                  | int 1                                     | Property Set count. Almost always 1                          |
| E0 85 9F F2 F9 4F 68 10 AB 91 08 00 2B 27 B3 D9              | GUID f29f85e0-4ff9-1068-ab91-08002b27b3d9 | The following file is a “Microsoft Office Summary Information property set” |
| 30 00 00 00                                                  | int 48                                    | Section Offset – Use this to mark the offsets of the property id’s |
| 18 5C 00 00                                                  | int 23576                                 | Section length (Remaining?)                                  |
| 0F 00 00 00                                                  | int 15                                    | Property Count (0 – 15 inclusive)                            |
| 56 bytes                                                     |                                           |                                                              |
| 01 00 00 00                                                  | int 1                                     | Property id                                                  |
| 80 00 00 00                                                  | int 128                                   | [Offset](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#offset128) |
| 00 00 00 80                                                  | int -2147483684                           | [Property Id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property2) |
| 88 00 00 00                                                  | int 136                                   | Offset                                                       |
| 23 00 00 00                                                  | int 35                                    | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property3) |
| 90 00 00 00                                                  | int 144                                   | Offset                                                       |
| 0C 00 00 00                                                  | int 12                                    | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property4) |
| A4 00 00 00                                                  | int 164                                   | Offset                                                       |
| 22 00 00 00                                                  | int 34                                    | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property5) |
| B0 00 00 00                                                  | int 176                                   | Offset                                                       |
| 0D 00 00 00                                                  | int 13                                    | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property6) |
| D4 00 00 00                                                  | int 212                                   | Offset                                                       |
| 08 00 00 00                                                  | int 8                                     | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property7) |
| E0 00 00 00                                                  | int 224                                   | Offset                                                       |
| 25 00 00 00                                                  | int 37                                    | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property8) |
| 04 01 00 00                                                  | int 260                                   | Offset                                                       |
| 09 00 00 00                                                  | int 9                                     | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property9) |
| 14 01 00 00                                                  | int 276                                   | Offset                                                       |
| 06 00 00 00                                                  | int 6                                     | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property10) |
| 20 01 00 00                                                  | int 288                                   | Offset                                                       |
| 02 00 00 00                                                  | int 2                                     | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property11) |
| 3C 01 00 00                                                  | int 316                                   | Offset                                                       |
| 03 00 00 00                                                  | int 3                                     | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property12) |
| 54 01 00 00                                                  | int 340                                   | Offset                                                       |
| 04 00 00 00                                                  | int 4                                     | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property13) |
| 70 01 00 00                                                  | int 368                                   | Offset                                                       |
| 05 00 00 00                                                  | int 5                                     | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property14) |
| 88 01 00 00                                                  | int 392                                   | Offset                                                       |
| 11 00 00 00                                                  | int 17                                    | [Property id](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/#property15) |
| A4 01 00 00                                                  | int 420                                   | Offset                                                       |
| 128 bytes from the section offset                            |                                           |                                                              |
| Property 1 – Code page (02)                                  |                                           |                                                              |
| 02 00 00 00                                                  | int 2                                     | Following property is int. 2 = VT_i2 = signed int            |
| B0 04 00 00                                                  | int 1200                                  | Codepage. 1200 = UTF-16 1252 = ANSI (Always 1200)            |
| Property Locale – The Locale                                 |                                           |                                                              |
| 13 00 00 00                                                  | int 19                                    | Following property is unsigned int. 19 = VT_ui4 = unsigned int |
| 09 04 00 00                                                  | int 1033                                  | Locale 1033 = US                                             |
| Property 35 – ?                                              |                                           |                                                              |
| 48 00 00 00                                                  | int 72                                    | ?                                                            |
| 3C D6 F9 43 34 5F CE 4F A9 38 2C 41 7C 5D 0E 47              | GUID?                                     | ?                                                            |
| Property 12 – Create Time/Date (40)                          |                                           |                                                              |
| 40 00 00 00                                                  | int 64                                    | date field                                                   |
| 70 2F FE BF AC 2F CE 01                                      | datetime 02/04/2013 10:17:04 AM           | First Created                                                |
| Property 34 – Created By                                     |                                           |                                                              |
| 1E 00 00 00                                                  | int 30                                    | String Field                                                 |
| 1C 00 00 00                                                  | int                                       | String Length                                                |
| 6E 00 65 00 69 00 6C 00 2E 00 6D 00 61 00 72 00 73 00 68 00 61 00 6C 00 6C 00 00 00 | string neil.marshall                      | Created by Username                                          |
| Property 13 – Last Saved Time (40)                           |                                           |                                                              |
| 40 00 00 00                                                  | int 64                                    | Date Field                                                   |
| 90 FC 69 1D 64 35 CE 01                                      | datetime 09/04/2013 4:52:14 PM            | Last Saved                                                   |
| Property 8 – Last saved by (1e)                              |                                           |                                                              |
| 1E 00 00 00                                                  | int 30                                    | String Field                                                 |
| 1C 00 00 00                                                  | int                                       | String Length                                                |
| 6E 00 65 00 69 00 6C 00 2E 00 6D 00 61 00 72 00 73 00 68 00 61 00 6C 00 6C 00 00 00 | string neil.marshall                      | Last saved by                                                |
| Property 37 – ?                                              |                                           |                                                              |
| 1E 00 00 00                                                  | int 30                                    | String Field                                                 |
| 08 00 00 00                                                  | int                                       | String Length                                                |
| 31 00 2E 00 32 00 00 00                                      | string 1.2                                | Not sure what this is. This string is 1.0 in a 2010 file, but needs more testing. |
| Property 9 – Revision number (1e) (This is 30 4 49 in a 2010 file.) |                                           |                                                              |
| 1E 00 00 00                                                  | int 30                                    | String Field                                                 |
| 04 00 00 00                                                  | int 4                                     | String Length                                                |
| 33 00 00 00                                                  | string 1                                  | Version 1?                                                   |
| Property 6 – Comment field (1e)                              |                                           |                                                              |
| 1E 00 00 00                                                  | int 30                                    | String Field                                                 |
| 14 00 00 00                                                  | int                                       | String Length                                                |
| 6E 00 43 00 6F 00 6D 00 6D 00 65 00 6E 00 74 00 73 00 00 00  | string nComments                          | The Comments field.                                          |
| Property 2 – Title (1e)                                      |                                           |                                                              |
| 1E 00 00 00                                                  | int 30                                    | String Field                                                 |
| 0E 00 00 00                                                  | int                                       | String Length                                                |
| 6E 00 54 00 69 00 74 00 6C 00 65 00 00 00 00 00              | string nTitle                             | The Title field.                                             |
| Property 3 – Subject (1e)                                    |                                           |                                                              |
| 1E 00 00 00                                                  | int 30                                    | String Field                                                 |
| 12 00 00 00                                                  | int                                       | String Length                                                |
| 6E 00 53 00 75 00 62 00 6A 00 65 00 63 00 74 00 00 00 00 00  | string nSubject                           | The Subject field.                                           |
| Property 4 – Author (1e)                                     |                                           |                                                              |
| 1E 00 00 00                                                  | int 30                                    | String Field                                                 |
| 10 00 00 00                                                  | int                                       | String Length                                                |
| 6E 00 41 00 75 00 74 00 68 00 6F 00 72 00 00 00              | string nAuthor                            | The Author field                                             |
| Property 5 – Keywords (1e)                                   |                                           |                                                              |
| 1E 00 00 00                                                  | int 30                                    | String Field                                                 |
| 14 00 00 00                                                  | int                                       | String Length                                                |
| 6E 00 4B 00 65 00 79 00 77 00 6F 00 72 00 64 00 73 00 00 00  | string nKeywords                          | The Keywords Field                                           |
| Property 17 – Thumbnail[![ExtractedThumbnail](F:%5CGitHub%5Ca690089735.github.io%5Cassets-images%5C2021-02-15-%E8%BD%AC%E8%BD%BD-%E8%BD%AC%E8%BD%BD%E6%96%87%E7%AB%A0%5Cextractedthumbnail.png)](https://neiltech.files.wordpress.com/2013/04/extractedthumbnail.png) |                                           |                                                              |
| 47 00 00 00                                                  | int 71                                    | 0x47 means “clipboard format” apparently. Still have to figure out what format that is. |
| 6C 5A                                                        | short 23148                               | Pixels in bytes?                                             |
| 00 00                                                        | short 0                                   | Padding the short to 4 bytes                                 |
| FF FF FF FF                                                  | int -1                                    | ?                                                            |
| 03 00 00 00                                                  | int 3                                     | ?                                                            |
| 01 00                                                        | short 1                                   | ?                                                            |
| 80 00                                                        | short 128                                 | Image Width                                                  |
| 3C 00                                                        | short 60                                  | Image Height                                                 |
| 00 00                                                        | short 0                                   | ?                                                            |
| 01 00                                                        | short 1                                   | ?                                                            |
| 09 00                                                        | short 9                                   | ?                                                            |
| 00 03                                                        | short 768                                 | ?                                                            |
| 2E 2D                                                        | short 11566                               | ?                                                            |
| 00 00                                                        |                                           | ?                                                            |
| 00 00                                                        |                                           | ?                                                            |
| 22 2D                                                        |                                           | ?                                                            |
| 00 00                                                        |                                           | ?                                                            |
| 00 00                                                        |                                           | ?                                                            |
| 22 2D                                                        |                                           | ?                                                            |
| 00 00                                                        |                                           | ?                                                            |
| 43 0F                                                        |                                           | ?                                                            |
| 20 00                                                        |                                           | ?                                                            |
| Thumbnail Data                                               |                                           |                                                              |
| CC                                                           | byte 204                                  | Blue colour value                                            |
| 00                                                           | byte 0                                    | Green colour value                                           |
| 00                                                           | byte 0                                    | Red colour value                                             |
| RGB Data is repeated for every pixel until the end of the Summary information section. The Y coordinate is flipped meaning the image is stored from the bottom up. |                                           |                                                              |