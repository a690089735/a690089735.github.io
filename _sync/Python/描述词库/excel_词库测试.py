import pandas as pd
import os, sys, natsort, math

# df = pd.read_excel(io=r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\sd词库表格格式.xlsx", header=None)  ## dependency 'openpyxl'
# df = pd.read_excel(io=r"D:\GitHub\a690089735.github.io\_sync\Python\描述词库\sd词库表格格式.xls")  ## dependency 'xlrd'
# xlsb dependency 'pyxlsb'
# ods dependency 'odfpy'


def verifyData(data):
    # print(data)
    for d in data:
        # print(isinstance(d, float) and math.isnan(d))
        if isinstance(d, float) and math.isnan(d):
            return False
    return True


# 从excel文件创建旧版数据格式,支持的excel文件格式有 (".xls", ".xlsb", ".xlsm", ".xlsx", ".ods", "odf", "odt") 对libreoffice和WPS的支持是实验性的,主要是没做临时文件和文件格式的测试,可能导致意外问题. 现在仅支持xls系列格式.
dataPaths = []
for root, dirs, files in os.walk(os.path.dirname(sys.argv[0])):
    dataPaths = natsort.os_sorted([os.path.join(root, file) for file in files if file[:2] != "~$" and os.path.splitext(file)[-1].lower() in (".xls", ".xlsb", ".xlsm", ".xlsx")])
    break
# print(dataPaths)  # !注意:不同格式的文件,同名文件会替换为字母最靠后的一个,顺序如上方后缀名元组.
dictData = {}
for dataPath in dataPaths:  # 每个文件
    dataFile = pd.read_excel(io=dataPath, sheet_name=None, header=None)
    pages = {}
    for pageName, page in dataFile.items():  # 文件中的每个表
        # print(pageName)
        groups = {}
        for row in page.index.values:
            data = tuple(page.loc[row].values)[:4]  # 逐行读入,每行四项,但注意第二项需要转整数,将这四个数据创建一个字典,不断添加新的项,再按照字典创建UI -> {食品:[[3,鸡蛋,egg],[3,苹果,apple]]}
            if verifyData(data):
                if data[0] in groups:
                    groups[data[0]].update({data[2]: {"text": data[3], "order": int(data[1])}})  # 注意,重名的词条会替换为最靠后的一个
                else:
                    groups[data[0]] = {data[2]: {"text": data[3], "order": int(data[1])}}
        pages[pageName] = groups
    dictData[os.path.splitext(os.path.split(dataPath)[-1])[0]] = pages
print(dictData)
