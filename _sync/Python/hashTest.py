import hashlib


def hash_file(fileName=None, hash_type="md5"):
    if fileName is None:
        return ''
    hash_type = hash_type.lower()
    if type == "sha256":
        hashGen = hashlib.sha256()
    else:
        hashGen = hashlib.md5()
    with open(fileName, 'rb') as f:
        data = f.read()
    hashGen.update(data)
    hashCode = hashGen.digest()
    hashGen = None
    return hashCode


code = hash_file(fileName=r"C:\Users\Administrator\Desktop\vo_kujouSara_character_idle_02.wem")
print(code)