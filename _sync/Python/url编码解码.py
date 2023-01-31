from urllib.parse import quote,unquote
url = 'http://185.163.45.196/01/huangjintong(diandang)%20zuozhedayant.rar'
print(quote(url,'utf-8'))
print(unquote(url,'utf-8'))