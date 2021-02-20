---
layout: post
title: Reverse engineering the Max file format
date: 2021-02-15 22:34:07.00 +08:00
categories: 转载
tags: 转载
comments: false
---

转自:https://neiltech.wordpress.com/2013/04/07/reverse-engineering-the-max-file-format/

April 7, 2013

I recently found some blog posts that describe a portion of the .max file format and I figured, why not try to write a reader and possibly even decode more of the file format than what these posts document. It’s taken me two days, but I have successfully read changed and written materials in a max file using nothing but C#.

The first challenge is opening the .max file in a way that is useful. The trick was downloading and using [OpenMcdf](http://sourceforge.net/projects/openmcdf/). This .dll allows you to open OLE data streams with little fuss. Eventually I might go back and figure out how to do this part myself, but for now it’s a useful starting place. OpenMCDF comes with a handy utility that will allow you to browse the top level of the file format and not only can you view .max files, but also .doc, .xls, and thumbs.db files. Opening a max file in the software reveals a few different sections but the one I was most interested in was **FileAssetMetaData2**. As of 3dsmax 2010 File Asset Meta Data 2 is where the bitmap information is contained.

In C# I created a command line program with a class called MaxFileParser. Inside of it I created a Load(string filename) function that reads in the file, grabs the **FileAssetMetaData2** section and closes it.

```
private byte[] m_RawAssetMetadata; // The file buffer

CompoundFile cf = new CompoundFile(filename);
CFStream stream = cf.RootStorage.GetStream("FileAssetMetaData2");
m_RawAssetMetadata = stream.GetData();
cf.Close();
```

This reads the bytes of the binary file into an array. Once that was done I created a loop that created a new AssetMetadata() class to store the information. It reads in one chunk of data, increases a counter, and repeats.

```
int ctr = 0;
while (ctr < m_RawAssetMetadata.Length)
{
    AssetMetadata amd = new AssetMetadata();
    ctr = amd.ParseMetadata(m_RawAssetMetadata, ctr);
    m_Metadata.Add(amd);
}
```

The AssetMetadata class is where the real fun happens. Each chunk of Metadata is divided up like so:

```
16 Bytes - The Asset ID.
4 Bytes - The length of the following string
(n Bytes + 1) * 2 - A string of text (UTF-16) followed by 00
4 Bytes - The length of the following string
(n Bytes + 1) * 2 - A string of text (UTF-16) followed by 00
```

| 08 00         | A string          | 00              |
| ------------- | ----------------- | --------------- |
| String length | The string itself | Null terminator |

The strings are UTF-16 format, which means that each character is two bytes, which is the reason why the length is multiplied by two. The addition of one is because the string is null terminated. C# never needs to use it, but max requires it to know where the end is.

16 Bytes for the asset ID is way longer than an integer (4 Bytes) so that couldn’t be it. GUID’s are long, so I searched the web and I found that a GUID is also 16 Bytes. After a little programming, I was able to store the Asset ID in a GUID and convert it back without losing any information.

```
private Guid GetGUID(byte[] buffer, int offset)
{
    byte[] bGuid = new byte[16];
    Buffer.BlockCopy(buffer, offset, bGuid, 0, bGuid.Length);
    Guid g = new Guid(bGuid);
    return g;
}

private int GetInt(byte[] buffer, int offset)
{
    int result = 0;
    byte[] bByte = new byte[4];
    Buffer.BlockCopy(buffer, offset, bByte, 0, bByte.Length);
    result = BitConverter.ToInt32(bByte, 0);

    return result;
}

private string GetString(byte[] buffer, int offset, int byteCount)
{
    string result = "";

    byte[] bString = new byte[byteCount];
    Buffer.BlockCopy(buffer, offset, bString, 0, bString.Length);
    result = Encoding.Unicode.GetString(bString);

    return result;
}
```

Writing out the data was a little more tricky as it had to be perfect in order to have Max load it. Some weird things happen in max if you do things like forget that trailing null character on strings. Max never crashed on me (A miracle, I know) but the bitmaps attached to the materials sure did have weird file names.

The CFStream class provided by OpenMCDF has a cf.Save(filename) function that takes the current open file and will save it with a new name. That way I didn’t overwrite the existing file with bad data.

In MaxFileParser.cs I looped through all of the AssetMetadata instances and called their WriteMetadata() functions. The functions return a List so that they could be appended to one another to construct the entire file before converting it to a byte[] in the end.

After those are called stream.SetData(finalByteStream); is called to replace the stream currently in memory, and then cf.save(newFilename); is called to write the file to the hard drive.

The WriteMetadata() in AssetMetadata.cs looks like this:

```
        public List<byte> WriteMetadata()
        {
            byte[] nullByte = new byte[2];
            List<byte> output = new List<byte>();
            byte[] guid = m_id.ToByteArray();
            output.AddRange(guid);
            int nameSize = Encoding.Unicode.GetByteCount(Name) / 2;
            output.AddRange(BitConverter.GetBytes(nameSize));
            output.AddRange(Encoding.Unicode.GetBytes(Name));
            output.AddRange(nullByte);
            int valueSize = Encoding.Unicode.GetByteCount(Value) / 2;
            output.AddRange(BitConverter.GetBytes(valueSize));
            output.AddRange(Encoding.Unicode.GetBytes(Value));
            output.AddRange(nullByte);
            return output;
        }
```

Now it’s possible to read, change, and write the paths to materials in the max file. That’s a quick rundown on how to rewrite the textures in a .max file. What I hope to do next is grab the thumbnails stored in the max files. They’re stored in a section of the file called “\x005SummaryInformation” which is apparently an older way of storing metadata in word, excel, and power point files (NTFS now stores this information internally), but max files still has the information kicking around. Looking at the binary data I think there is a thumbnail stored in there in the clipboard format and that’s what my future attempts will be to read.

Most of the other sections of the max file format seem to follow a uniform structure. All of the information is stored in “chunks” and chunks can have child chunks of data as well. Each chunk has an id number and depending on the id, it means something different. The trick is documenting which chunk does what. That is where you start to get into uncharted territory. The first site in the list of links below is the best documentation of it that I have found to date on how to parse the chunks if you would like to dive into that part.

That’s all for now.

#### Useful Links

http://www.kaetemi.be/wp/2012/08/17/3ds-max-file-format-part-1-outer-file-format-ole2/ This site wasn’t the first one I found on the subject, but it’s the most useful. It documents how the chunk formats in the other sections of the max file are stored and if I go further with my .max file reader, this site looks to be invaluable.

http://blog.duber.cz/3ds-max/repathing-your-assets-in-max-files-without-3ds-max#more-1078 This was the page that got me started down this insane path.

### *Related*

[Reverse engineering 3ds max files part 2](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/)In "3d"

[Photoshop Scripting Beginners Guide](https://neiltech.wordpress.com/2013/01/11/photoshop-scripting-beginners-guide/)In "2d"

[How to create a class in MaxScript](https://neiltech.wordpress.com/2012/11/16/how-to-create-a-class-in-maxscript/)In "3d"

From → [3d](https://neiltech.wordpress.com/category/3d/), [3ds max](https://neiltech.wordpress.com/category/3ds-max/), [C#](https://neiltech.wordpress.com/category/programming/c-programming/), [Misc. Tech](https://neiltech.wordpress.com/category/misc-tech/), [Programming](https://neiltech.wordpress.com/tag/programming/)

3 Comments

1. ![img](F:%5CGitHub%5Ca690089735.github.io%5Cassets-images%5C2021-02-15-%E7%AC%94%E8%AE%B0-%E8%BD%AC%E8%BD%BD%E6%96%87%E7%AB%A0%5Cphoto.jpg)

   [George Rolfe](https://plus.google.com/111449772257654575648) [permalink](https://neiltech.wordpress.com/2013/04/07/reverse-engineering-the-max-file-format/#comment-236)

   It appears with Max 2014, the stream is “FileAssetMetaData3”, and the structure has changed.

   [Reply](https://neiltech.wordpress.com/2013/04/07/reverse-engineering-the-max-file-format/?replytocom=236#respond)

   1. ![img](F:%5CGitHub%5Ca690089735.github.io%5Cassets-images%5C2021-02-15-%E7%AC%94%E8%AE%B0-%E8%BD%AC%E8%BD%BD%E6%96%87%E7%AB%A0%5C2ff479805012167816df2b4347afc354)

     [neiltech](https://neiltech.wordpress.com/) [permalink](https://neiltech.wordpress.com/2013/04/07/reverse-engineering-the-max-file-format/#comment-237)

     Well that’s both good and bad. Is it more human readable?

     [Reply](https://neiltech.wordpress.com/2013/04/07/reverse-engineering-the-max-file-format/?replytocom=237#respond)

### Trackbacks & Pingbacks

1. [Reverse engineering 3ds max files part 2 | Neil Marshall's Tech Art Blog](https://neiltech.wordpress.com/2013/04/15/reverse-engineering-3ds-max-files-part-2/)

