import os,re
from charset_normalizer import from_path

sourceFile = r'C:\Users\Administrator\Desktop\_NovelTruing'
tagetPath = r'C:\Users\Administrator\Desktop\_NovelTruing'
total = len([file for (root, dirs, files) in os.walk(sourcePath) for file in files])
count = 0
for (root, dirs, files) in os.walk(sourcePath):
        for file in files:
            count += 1
            print('\r转存:{} 进度:{:.3f}%({}/{})                    '.format(file, count/total*100, count, total), flush=True, end='')
            content = str(from_path(os.path.join(root, file)).best())
            content = re.sub(r'\r\n', r'\n', content, flags=re.M)  # 替换windows换行符
            with open(os.path.join(tagetPath, file), 'w', encoding='utf-8') as f:
                f.write(content)