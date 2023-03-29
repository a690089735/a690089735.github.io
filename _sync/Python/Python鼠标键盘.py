from pykeyboard import *
from pymouse import *
# 以上两个库来自于PyUserInput 依赖于win32api(pip install pywin32)
from time import sleep
import time

# m = PyMouse()  # 建立鼠标对象
# k = PyKeyboard()  # 建立键盘对象

# def getMousePosition():
#     m = PyMouse()
#     for i in range(10):
#         print(m.position())
#         sleep(2)
# getMousePosition()

# print(time.time())  # 当前时间戳
# print(time.ctime())  # 当前时间
# print(time.mktime(time.strptime('Sat Feb 11 19:00:11 2023','%a %b %d %H:%M:%S %Y')))  # 时间转时间戳 按格式拆分时间后生成时间
# 时间戳转换时间 先转化时间戳为本地时间后重格式化时间
# print(time.strftime('%a %b %d %H:%M:%S %Y', time.localtime(time.time())))
# print(time.mktime(time.ctime()))
# sleep(10)
# m.move(269,132)
# m.click(269,132,n=2) # 取决于当前状态.比如,锁屏状态操作锁屏状态的鼠标.


# def Task_TimeOut_ClickPosition(x:int, y:int, endTime: str, endTimeFormat: str, tick: int = 1):
#     et = time.mktime(time.strptime(endTime, endTimeFormat))
#     while et > time.time():
#         sleep(tick)
#     PyMouse().click(x, y)

# Task_TimeOut_ClickPosition(2055, 249, 'Sat Feb 11 18:50:11 2023', '%a %b %d %H:%M:%S %Y')
# Task_TimeOut_ClickPosition(2652, 257, 'Sat Feb 11 17:59:25 2023', '%a %b %d %H:%M:%S %Y')

# (2055, 249)
# (3027, 610)
def Task_TimeOut_ClickPosition(posList:list, endTime: str, endTimeFormat: str, tick:int = 1, sep: int = 3):
    et = time.mktime(time.strptime(endTime, endTimeFormat))
    while et > time.time():
        sleep(tick)
    for pos in posList:
        PyMouse().click(pos[0], pos[1])
        sleep(sep)
Task_TimeOut_ClickPosition([(2055, 249),(3027, 610)], 'Sat Mar 25 19:00:10 2023', '%a %b %d %H:%M:%S %Y') ##右侧网页
# Task_TimeOut_ClickPosition([(3152, 493)], 'Sat Feb 18 19:15:52 2023', '%a %b %d %H:%M:%S %Y')