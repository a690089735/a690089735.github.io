import json
import pandas as pd


def writeDataIntoExcel(xlsPath: str, allData: dict):
    writer = pd.ExcelWriter(xlsPath)
    sheetNames = allData.keys()  # 获取所有sheet的名称
    # sheets是要写入的excel工作簿名称列表

    
    for sheetName in sheetNames:
        groups = []
        orders = []
        names = []
        words = []
        for groupData in allData[sheetName]:
            # print(groupData)
            for k,v in allData[sheetName][groupData].items():
                # print(k,v)
                groups.append(groupData)
                orders.append(v["order"])
                names.append(k)
                words.append(v["text"])
        
        data = pd.DataFrame({"groups": groups, "orders": orders, "names": names, "words": words})
        data.to_excel(writer, sheet_name=sheetName, header=None, index=False)
    # 保存writer中的数据至excel
    # 如果省略该语句,则数据不会写入到上边创建的excel文件中
    writer.close()


jsonPaths = [r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\01.文本词条.json", r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\02.Emoji.json"]

for jsonPath in jsonPaths:
    with open(jsonPath, "r", encoding="utf-8") as f:
        jsonData: dict = json.load(f)
    excelPath = jsonPath[:-5] + ".xlsx"
    writeDataIntoExcel(excelPath, jsonData)
