import os
from charset_normalizer import from_path
import re
sourcePath = r'C:\Users\Administrator\Desktop\NovelTruing'
tagetPath = r'D:\tri\hq20G02.txt'

# 预处理使用 zei82train_pre.py 和 转存utf-8.py

if os.path.isfile(tagetPath):
    print('覆盖文件.')
    os.remove(tagetPath)

with open(tagetPath, 'a', encoding='utf-8') as tagetFile:
    total = len([file for (root, dirs, files) in os.walk(sourcePath) for file in files])
    count = 0
    for (root, dirs, files) in os.walk(sourcePath):
        for file in files:
            count += 1
            print('\r写入:{} 进度:{:.3f}%({}/{})                '.format(file, count/total*100, count, total), flush=True, end='')
            with open(os.path.join(root, file),'r',encoding='utf-8') as cf:
                content = cf.read()
                                
            # print(content)
            # content = re.sub(r'　', r' ', content, flags=re.M)  # 替换全角空格
            # content = re.sub(r'（', r'\(', content, flags=re.M)  # 替换括号
            # content = re.sub(r'）', r'\)', content, flags=re.M)  # 替换括号
            # content = re.sub(r'：', r':', content, flags=re.M)  # 替换冒号

            content = re.sub(r'^  ', r'　　', content, flags=re.M)  # 开头半角空格转全角空格
            content = re.sub(r'^　　\n', r'', content, flags=re.M) # 替换空格行
            # content = re.sub(r'\r\n', r'\n', content, flags=re.M)  # 替换其他换行符,已在预处理完成
            content = re.sub(r'.*===.*', r'', content, flags=re.M)  # 替换等号行
            content = re.sub(r':', r'：', content, flags=re.M)  # 换回冒号
            
            content = re.sub(r'.*更多.*小说.*', r'', content, flags=re.M)  # 替换广告行
            content = re.sub(r'\\', r'', content, flags=re.M)  # 替换符号
            content = re.sub(r'.*(\(|（|【).*(完|终)(\)|）||】).*', r'\n', content, flags=re.M) # 替换结束行
            content = re.sub(r'\n+', r'\n', content)  # 替换连续换行
            
            content = re.sub(r'^\S.*', r'\n', content, flags=re.M) # 替换顶格行,标题等处保留一个换行
            content = re.sub(r'.*(作.*者|著.*者|博.*客|字.*数|点.*击|书.*名|原书名|原书名《.*》|又.*名|注|契.*子|引.*子|内容简介|完本感言)：*.+\n', r'\n', content, flags=re.M)  # 替换
            content = re.sub(r'^(　　)*【(?!.*(攻击|生命|魔法|技能|体力|HP|AP|MP|药剂|状态|道具|武器|装备|强化|属性|冷却|CD|卷轴|等级|经验|称号|天赋|速度|擅长|魔力|力量|智慧|是)).*[0123456789零一二三四五六七八九十壹贰叁肆伍陆柒捌玖拾日天场].*】$', r'', content, flags=re.M)
            tagetFile.write(content)
            tagetFile.write('\n')
    print('\n处理完成.')
