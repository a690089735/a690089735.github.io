import os,re
from charset_normalizer import from_path
sourcePath = r'C:\Users\Administrator\Desktop\src'
tagetPath = r'C:\Users\Administrator\Desktop\tag'
for (root, dirs, files) in os.walk(sourcePath):
        for file in files:
            print('转存{}'.format(file))
            content = str(from_path(os.path.join(root, file)).best())
            content = re.sub(r'\r\n', r'\n', content, flags=re.M)  # 替换windows换行符
            with open(os.path.join(tagetPath, file), 'w', encoding='utf-8') as f:
                f.write(content)