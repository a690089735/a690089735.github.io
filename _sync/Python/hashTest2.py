import binascii
from pyblake2 import blake2s

def hash_file(fileName=None, hash_type="crc32"):
    if fileName is None:
        return ''
    if hash_type == "crc32":
        with open(fileName, 'rb') as f:
            data = f.read()
        hashCode = binascii.crc32(data) & 0xffffffff
        hashCode = format(hashCode, '08x')  # 转换为8字节的16进制字符串
    elif hash_type == "blake2s":
        with open(fileName, 'rb') as f:
            data = f.read()
        hashCode = blake2s(data).hexdigest()
    else:
        print("Error: Invalid hash type")
        return None
    return hashCode


code = hash_file(fileName=r"C:\Users\Administrator\Desktop\vo_kujouSara_character_idle_02.wem", hash_type="blake2s")
print(code)