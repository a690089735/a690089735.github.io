--https://www.cnblogs.com/sitt/archive/2011/07/05/2098176.html
--数据可参考https://github.com/mozillazg/pinyin-data/blob/master/pinyin.txt


Struct ChMappingDictStruct 
(
    self = DotNetObject "System.Collections.Generic.Dictionary`2[System.String,System.String]"
    ,
    Fn Add inputKey inputValue = 
    (
        if not self.ContainsKey inputKey  do self.Add inputKey inputValue
    )
    ,
    Fn Get inputKey = 
    (
        if self.ContainsKey inputKey then self.Item inputKey else undefined
    )
)

ChMappingDict = ChMappingDictStruct()
ChineseDictFileName = "汉字拼音.txt"
ChineseDictFileStream = OpenFile (GetFilenamePath(GetSourceFileName()) + ChineseDictFileName )

while not Eof ChineseDictFileStream  do
(
    tempLine = ReadLine ChineseDictFileStream
    dictArray = FilterString tempLine " "
    if dictArray.Count >= 2 do
    ( 
        tempValue = dictArray[1]
        tempKeys =  dictArray[2]
        for i = 1 to tempKeys.Count do
        (
            tempKey = tempKeys[i]
            ChMappingDict.Add tempKey tempValue
        )
    )
)
Close ChineseDictFileStream 

testChinese = "呼呼哈哈嘿嘿二大爷"
for i = 1 to testChinese.Count do print (ChMappingDict.Get testChinese[i])