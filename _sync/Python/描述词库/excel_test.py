import pandas as pd

# df = pd.read_excel(io=r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\sd词库表格格式.xlsx", header=None)  ## dependency 'openpyxl'
# df = pd.read_excel(io=r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\sd词库表格格式.xls")  ## dependency 'xlrd'
fileName = r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\sd词库表格格式.xlsx"
# excelFile = pd.ExcelFile(fileName)
# # print(excelFile.sheet_names)
# for sheetName in excelFile.sheet_names:
#     print(sheetName)
#     # df = pd.read_excel(io=r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\sd词库表格格式.xlsx", header=None)
#     dataParse = excelFile.parse(sheetName, header=None)
#     # print(dataParse)
#     for item in dataParse:
#         print(item)

# dataFile = pd.read_excel(io=r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\sd词库表格格式.xlsx", sheet_name=None, header=None)
# # print(list(dataFile.keys()))
# for item in dataFile.keys():
#     print(item)
#     print(dataFile.values)

# # print(dataFile.values())

# dataFile = pd.read_excel(io=r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\sd词库表格格式.xlsx", sheet_name=None, header=None)
# # print(list(dataFile.keys()))
# for pageName, page in dataFile.items():
#     print(pageName)
#     for row in page.index.values:
#         print(tuple(page.loc[row].values))
#     # print(v.loc[0].values)

# # print(dataFile.values())


# dataFile = pd.read_excel(io=r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\sd词库表格格式.xlsx", sheet_name=None, header=None)
# # print(list(dataFile.keys()))
# for pageName, page in dataFile.items():
#     print(pageName)
#     for row in page.index.values:
#         print(tuple(page.loc[row].values)) # 逐行读入,每行四项,但注意第二项需要转整数,将这四个数据创建一个字典,不断添加新的项,再按照字典创建UI -> {食品:[[鸡蛋,egg,3],[苹果,apple,3]]}


# type([]) == list
# isinstance([],list)
# a = {'aa':1}
# 'aa' in a

