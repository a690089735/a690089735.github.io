'''
## "　"替换为""
"："替换为":"
"“"替换为"""
"”"替换为"""

*知轩藏书* 跳过
*www.zxcs.me* 跳过
*===* 跳过
作者:.* 跳过

*内容简介* 往下依次跳过,直到空行 空行

如果刚刚写入了一个空行 跳过空行

前64行内有 *内容简介* 则从这一行开始处理

第.*季 空行
第.*卷 空行
第.*章 空行
第.*回 空行
第.*节 空行
第.*集 空行
引子 空行
契子 空行

*全文完* 空行

读取完毕 强制空行

'''

'''
行首不是"　"则非文章部分

"【"替换为"“"
"】"替换为"”"
（ 替换为 (
） 替换为 )
行首不是"　",内容替换为\n

如果刚刚写入了一个\n 跳过当前\n
'''

'''
测试内容
　　测试内容



天啊,完了完了,这下糟糕了
　　（完）
　　（全文完）
（完）
（全文完）

天啊,完了完了,这下糟糕了
　　(完)
(全文完)
'''
# 逻辑
# （替换为(
# ）替换为)
# .*（.*完）.* 替换为\n !!不要这个了
# .*\(.*完\).*
# ^(?!　+).* 替换为\n
# ^\n+ 替换为\n
# (替换为（
# )替换为）
# 结尾强制\n


# sourcePath = r'C:\Users\Administrator\Desktop\novel\allTXT\_test'
# tagetPath = r'C:\Users\Administrator\Desktop\novel\allTXT\_test\allTXT.txt'
import os
from charset_normalizer import from_path
import re
sourcePath = r'C:\Users\Administrator\Desktop\novel\allTXT'
tagetPath = r'C:\Users\Administrator\Desktop\novel\allTXT.txt'

if os.path.isfile(tagetPath):
    os.remove(tagetPath)

with open(tagetPath, 'a', encoding='utf-8') as tagetFile:
    for (root, dirs, files) in os.walk(sourcePath):
        for file in files:
            print('写入:{}'.format(file))
            content = (str(from_path(os.path.join(root, file)
                                     ).best()).encode()).decode('utf-8')
            # print(content)
            content = re.sub(r'　', r' ', content, flags=re.M)  # 替换全角空格
            content = re.sub(r'（', r'\(', content, flags=re.M)  # 替换括号
            content = re.sub(r'）', r'\)', content, flags=re.M)  # 替换括号
            content = re.sub(r'：', r':', content, flags=re.M)  # 替换冒号

            # content = re.sub(r'.*作者:.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*博客:.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*字数:.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*点击:.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*书名:.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*原书名:.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*原书名《.*》.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*又名:.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*注:.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*契子.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*内容简介.*', r'\n', content, flags=re.M) #替换
            # content = re.sub(r'.*完本感言.*', r'\n', content, flags=re.M) #替换

            content = re.sub(r'\r\n', r'\n', content, flags=re.M)  # 替换其他换行符
            content = re.sub(r'.*\(.*完\).*', r'\n', content, flags=re.M)
            content = re.sub(r'^\S.*', r'\n', content, flags=re.M) #开头不是空的删除,全角空格很有意思,\s和\S都匹配不到它...
            content = re.sub(r'.*(作者:|博客:|字数:|点击:|书名:|原书名:|原书名《.*》|又名:|注:|契子|引子|内容简介|完本感言).*', r'\n', content, flags=re.M)  # 替换
            content = re.sub(r'^\n+', r'\n', content, flags=re.M)  # 替换连续换行

            
            content = re.sub(r' ', r'　', content, flags=re.M)  # 换回全角空格
            content = re.sub(r'\(', r'（', content, flags=re.M)  # 换回括号
            content = re.sub(r'\)', r'）', content, flags=re.M)  # 换回括号
            content = re.sub(r':', r'：', content, flags=re.M)  # 换回冒号

            tagetFile.write(content)
            tagetFile.write('\n')
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
