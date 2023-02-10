
import os
from charset_normalizer import from_path
import re
sourcePath = r'C:\Users\Administrator\Desktop\NovelTruing\旧实体'
targetPath = r'C:\Users\Administrator\Desktop\NovelTruing\新实体'

# 预处理,简单排版,zei8的东西质量较差,加个简单的正则排版 ^(?![(\s*\r\n|\s*\n)(作者)(《.*》)(【)(第.*(部|集|回|章|节|季|本))(　　)].+)

for (root, dirs, files) in os.walk(sourcePath):
    for file in files:
        print('覆盖:{}'.format(file))
        rfile = os.path.join(root,file)
        wfile = os.path.join(targetPath,file)
        content = str(from_path(os.path.join(root, rfile)).best())
        content = re.sub(r'(※|●|#)', r'', content, flags=re.M)  # 替换其他符号
        content = re.sub(r'(<|【|\[|［|\(|（).*[zZｚＺ].*[eEｅＥ].*[iIｉＩ].*[8８].*(>|】|\]|］|\)|）)', r'', content, flags=re.M) #清理水印,默认贪婪,可能误删一部分内容 .*[zZｚＺ].*[eEｅＥ].*[iIｉＩ].*[8８].*
        content = re.sub(r'.*[zZｚＺ].*[eEｅＥ].*[iIｉＩ].*[8８].*', r'', content, flags=re.M) #再删一遍，以免有遗漏,可能误删一部分内容，但认了
        content = re.sub(r'^(?![(\s*\r\n|\s*\n)(作者)(《.*》)(【)(第.*(部|集|回|章|节|季|本))(　　)].+)', r'　　', content, flags=re.M)  # 简单排版
        with open(wfile, 'w', encoding='utf-8') as f:
            f.write(content)
print('结束.')


# a = '123'
# a.replace('23','56')
# print(a)

# a = '''


# 内容
# 内容
#   内容1
#   内容1

# 　　内容1
# 　　内容1
# '''
# a = '''
# 123
# '''
# print(re.sub(r'^\S.*', r'0', a))
# print(re.sub(r'^\S.*', r'0', a, flags=re.S))
# print(re.sub(r'^\S.*', r'0', a, flags=re.DOTALL))
# print(re.sub(r'^\S.*', r'0', a, flags=re.M))
# print(re.sub(r'^\S.*$', r'0', a, flags=re.MULTILINE))

# s = '12 34\n56 78\n90'
# print(re.sub(r'^\d+', 'sss', s, flags=re.M))
