# \b回退一个字符 \r回到行首

from time import sleep
# Rich库,多彩文本输出,自带进度条,甚至多行进度条.这个库甚至可以直接做一个多重检视器甚至文字版的模拟经营游戏
import os
# for i in range(101):
#     print('\r百分比测试:{}%'.format(i), flush=True, end='')
#     sleep(0.01)
# print()

# 反例,当新的输出比旧的输出短的时候,末尾会剩下一些字符(类似残影,必须在结尾输出一些空字符才行,不过空字符的数量要大于最长和最短的行的差才行)
# for i in range(101, 1, -1):
#     print('\r百分比测试:{}%'.format(i), flush=True, end='')
#     sleep(0.01)
# print()

# print('转圆测试:/', flush=True, end='')
# c = ['—','\\','|','/']
# for i in range(31):
#     print('\b{}'.format(c[i%4]), flush=True, end='')
#     sleep(0.1)
# print('\bOK!')

for i in range(101):
    print('内容{}'.format(i), flush=True)
    os.system('cls')  # 消除前面的所有内容
    print('\r百分比测试:{}%'.format(i), flush=True, end='')
    sleep(0.01)
print()
