import time,os
p = os.path.dirname(os.path.abspath(__file__))
fn = '{}\\{}-转载-转载文章.md'.format(p,time.strftime('%Y-%m-%d', time.localtime()))
with open(fn,'w',encoding="utf-8") as f:
    f.write('---\nlayout: post\ntitle: 转载标题\ndate: {}\ncategories: 转载\ntags: 转载\ncomments: false\n---\n\n转自:'.format(time.strftime("%Y-%m-%d %H:%M:%S.00 +08:00", time.localtime())))
os.system('start \"\" \"{}\"'.format(fn))
