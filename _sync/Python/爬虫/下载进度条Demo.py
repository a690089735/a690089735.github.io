import time
import os
import requests


def Download(url, savePath):
    '''
        带进度条的下载函数
        后续优化
        1.优化显示">:xxxx[xxxMB] Date:YYMMDD.hh:mm:ss"第二行"\r[>*50]000.00% 0s/0s"
          优化显示失败时">:xxxx[xxxMB] Date:YYMMDD.hh:mm:ss 0s/0s" 或 ">:xxxx[?MB] Date:YYMMDD.hh:mm:ss 0s/0s"
          计算已用时间和预计剩余时间 50.00s/300.00s(预计剩余时间/已用时间)
        2.添加user-agent选项
            import requests
            url = 'https://Your-url'
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}
            response= requests.get(url.strip(), headers=headers, timeout=10)
        3.[不可控成分太多,要求保存path必须是文件名,其他部分让用户考虑,不论如何,都按照文件名尝试下载]如果path是目录,则保持文件名(先解码地址)
        4.[可选,最后打算让用户自己考虑]自动替换不支持的文件名符号(不开启时遇到不支持的符号自动断言)
        顺带写在这里,加一个强制提示模块,可以叫前台信息,用于弹出系统信息框
    '''
    start = time.time()  # 下载开始时间
    try:
        response = requests.get(url, stream=True)  # stream=True必须写上
        size = 0  # 初始化已下载大小
        chunk_size = 1024  # 每次下载的数据大小
        content_size = int(response.headers['content-length'])  # 下载文件总大小
        fileName = os.path.split(savePath)[-1]
        if response.status_code == 200:  # 判断是否响应成功
            print('开始下载: {} {size:.2f}MB'.format(
                fileName, size=content_size / chunk_size / 1024))  # 开始下载，显示下载文件大小
            with open(savePath, 'wb') as file:  # 显示进度条
                for data in response.iter_content(chunk_size=chunk_size):
                    file.write(data)
                    size += len(data)
                    print('\r'+'下载进度:%s%.2f%%' % ('>'*int(size*50 / content_size),
                          float(size / content_size * 100)), flush=True, end='')
        end = time.time()  # 下载结束时间
        print('\b\b\b\b\b\b\b%.2f秒,下载完成!' % (end - start))  # 输出下载用时时间
    except:
        print('下载出错!')


if __name__ == '__main__':
    Download('https://txt.zei8.vip/d/file/soft/20180926/%E3%80%8A%E7%A9%BF%E8%B6%8A%E8%AF%B8%E5%A4%A9%E4%B8%87%E7%95%8C%E3%80%8Btxt%E5%85%A8%E6%9C%AC%E7%B2%BE%E6%A0%A1%E7%89%88(www.zei8.me).zip',
             r'C:\Users\Administrator\Desktop\test.zip')
