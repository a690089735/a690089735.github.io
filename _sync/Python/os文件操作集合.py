import os,re
from charset_normalizer import from_path

def 获取文件数量_深层(目录:str, 过滤:str = '.*\..*', 匹配大小写:bool = False): #正则不用tolower
    return len([file for (root, dirs, files) in os.walk(目录) for file in files])
def 获取文件数量(目录:str):
    return len([file for (root, dirs, files) in os.walk(目录) for file in files])
def 获取文件夹数量_深层(目录:str):
    return len([dir for (root, dirs, files) in os.walk(目录) for dir in dirs])
def 获取文件夹数量(目录:str):
    return len([dir for (root, dirs, files) in os.walk(目录) for dir in dirs])

def 搜索文件内容_深层(目录:str, 内容:str = '.*'):
    return [filePath for filePath in [os.path.join(root, file) for (root, dirs, files) in os.walk(目录) for file in files] if re.match(内容, str(from_path(filePath).best()), re.M)]
