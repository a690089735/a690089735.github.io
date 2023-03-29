import re
# from charset_normalizer import from_path

sourceFile = r'D:\tri\hq10G.txt'
tagetFile = r'D:\tri\hq10G_post.txt'
with open(sourceFile,'r',encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'[¤←↑→↓↖↗↘↙∈∏∑∕√∝∞∟∠∣∧∩∪∫∮∴∵∽≈≌≠≡≤≥≦≧≮≯⊙⌒①②③④⑤⑥⑦⑧⑨⑩─━│┃┅┌┍┏┐┑┓└┗┘┙┛├┠┤┨┬┰┴┻╄╥╬╭╮╯╰╳▂▅▆▇█■□▲△▽◆◇◎●◤]', r'', content)  # 替换乱符号
content = re.sub(r'.*[〤〩あぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちっつづてでとどなにぬねのはばぱひびふぶへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゑをん゜ゝァアィイゥウェエォオカガキクグケゲコゴサザシジスセゼソゾタダチッツテデトドナニヌネノハバパヒフブプヘベボポマミムメモャヤュョラリルレロワヲンーヾㄅㄆㄇㄌ걸겠김꿍너녕놈눈는니동떨랑려리멋못무및봉부빠사산삼석셔소수순숨쉬슨식십쌍암어오요을이자작져팔해].*', r'', content, flags=re.M)  # 替换有其他语言的行

with open(tagetFile,'w',encoding='utf-8') as f:
    f.write(content)