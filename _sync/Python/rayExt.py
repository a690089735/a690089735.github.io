from unrar import rarfile

# 妈蛋,unrar太特喵的难搞了.要下载dll,解压后一大堆东西,必须用x64的,然后必须建一个叫UNRAR_LIB_PATH的系统变量,指向那个dll,注意,不是文件夹,是dll...

rarname = r"C:\Users\Administrator\Desktop\申请.rar"
extractPath = r"C:\Users\Administrator\Desktop\novel"
if rarfile.is_rarfile(rarname):
    rar = rarfile.RarFile(rarname)
    rar.extractall(extractPath)
else:
    print("非rar! {}".format(rarname))