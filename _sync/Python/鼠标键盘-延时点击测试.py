import datetime

now = datetime.datetime.now().time()
target_time = datetime.datetime.strptime('19:00:00', '%H:%M:%S').time()
time_diff = datetime.datetime.combine(datetime.date.min, target_time) - datetime.datetime.combine(datetime.date.min, now)

seconds_diff = time_diff.total_seconds()

print("当前时间为：", now)
print("目标时间为：", target_time)
print("时间差为：", seconds_diff, "秒")