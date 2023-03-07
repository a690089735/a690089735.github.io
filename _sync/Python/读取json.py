import json

filename = r'C:\Users\Administrator\Desktop\[FaceFX]城南Polt内FaceFX制作\引擎中facefx动画资源文件目录.json'

path_list=[]

with open(filename,'r',encoding='utf-8') as f:
    path_list = json.load(f)
path_list.pop('提示')

characts = list(path_list.keys())

i=-1
for c in characts:
    i+=1
    print('{:3}.{}'.format(i,c))

id = int(input('输入角色编号:'))

print(characts[id],path_list[characts[id]])