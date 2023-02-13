import time
import os
p = os.path.dirname(os.path.abspath(__file__))
type = '笔记'
title = input('文章标题:')
fileName = '{}\\{}-{}-{}.md'.format(p, time.strftime(
    '%Y-%m-%d', time.localtime()), type, title)
with open(fileName, 'w', encoding="utf-8") as f:
    f.write('---\nlayout: post\ntitle: {}\ndate: {}\ncategories: {}\ntags: {}\ncomments: false\ntypora-root-url: ..\n---\n\n© {} 无名玩家X'.format(title, time.strftime("%Y-%m-%d %H:%M:%S.00 +08:00", time.localtime()), type, type, time.strftime('%Y', time.localtime())))
os.system('start \"\" \"{}\"'.format(fileName))
