import time,os
p = os.path.dirname(os.path.abspath(__file__))
fn = '{}\\{}-练习-博客文章.md'.format(p,time.strftime('%Y-%m-%d', time.localtime()))
with open(fn,'w',encoding="utf-8") as f:
    f.write('---\nlayout: post\ntitle: 博客标题\ndate: {}\ncategories: 练习\ntags: 练习\ncomments: false\n---\n\n文章内容'.format(time.strftime("%Y-%m-%d %H:%M:%S.00 +08:00", time.localtime())))
os.system('start \"\" \"{}\"'.format(fn))
