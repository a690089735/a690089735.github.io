import os

file_path = r'C:\Users\Administrator\Desktop\个人办公设备.txt'
st_atime, st_mtime, st_ctime = os.stat(file_path)[7:] #访问时间access_time,修改时间ModificationTime,创建时间CreationTime ctime:由操作系统报告的"ctime"。在某些系统上（如Unix）是最新的元数据更改的时间，在其它系统上（如Windows）是创建时间（详细信息参见平台的文档）。
print(st_atime, st_mtime, st_ctime)

os.utime(file_path, (1576335480, 1576335480)) #只能设置访问时间和修改时间

''' 可能可以设置创建时间
from ctypes import windll, wintypes, byref

# Arbitrary example of a file and a date
filepath = "my_file.txt"
epoch = 1561675987.509

# Convert Unix timestamp to Windows FileTime using some magic numbers
# See documentation: https://support.microsoft.com/en-us/help/167296
timestamp = int((epoch * 10000000) + 116444736000000000)
ctime = wintypes.FILETIME(timestamp & 0xFFFFFFFF, timestamp >> 32)

# Call Win32 API to modify the file creation date
handle = windll.kernel32.CreateFileW(filepath, 256, 0, None, 3, 128, None)
windll.kernel32.SetFileTime(handle, byref(ctime), None, None)
windll.kernel32.CloseHandle(handle)
'''
'''pip install filedate
import filedate
Path = "~/Documents/File.txt"

filedate.File(Path).set(
    created = "1st February 2003, 12:30",
    modified = "3:00 PM, 04 May 2009",
    accessed = "08/07/2014 18:30:45"
)
'''