import os,sys

oldstr='{{site.img}}images\\'
newstr=r'{{site.img}}'
r = input('输入1为直接替换,其他均会生成后缀为.txt的新文件:\n')

for i in sys.argv[1:]:
    with open(i,'r',encoding="utf-8") as f1:
        with open(i+'.txt','w',encoding="utf-8") as f2:
            for ss in f1.readlines():
                f2.write(ss.replace(oldstr,newstr))
    if r == '1':
              os.remove(i)
              os.rename(i+'.txt', i)

