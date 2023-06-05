from pykeyboard import *
from pymouse import *
from pymouse import PyMouse
# 以上两个库来自于PyUserInput 依赖于win32api(pip install pywin32)
from time import sleep
import time
import datetime



def Get_Offset():
    result = []
    now = datetime.datetime.now().time()
    for t in ['19:02:00','20:36:00','21:01:00']:
        target_time = datetime.datetime.strptime(t, '%H:%M:%S').time()
        time_diff = datetime.datetime.combine(datetime.date.min, target_time) - datetime.datetime.combine(datetime.date.min, now)
        seconds_diff = time_diff.total_seconds()
        # print(f"距离{t}有{seconds_diff}秒")
        result.append(seconds_diff)
    return result
# Get_Offset()

def Task_TimeOut_ClickPosition(posList:list, tick: int = 1000, sep: int = 1):
    print(f"{tick}秒后执行")
    sleep(tick)
    for pos in posList:
        PyMouse().click(pos[0], pos[1])
        sleep(sep)
Task_TimeOut_ClickPosition([(2055, 249),(3027, 610)], tick = (Get_Offset())[0], sep = 3) ##右侧网页