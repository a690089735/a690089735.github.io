# 这个基本完成了,结果卡在了最后的下载,下载需要验证user-agent,但是wget没有设置令牌的选项,导致403拒绝服务无法下载...
# 废了半天劲,又用palyeright重写了一个能用的,但是又慢又没有进度条,好家伙,重写了个下载功能就行了....还挺快....
import asyncio
import os
import re
import time
import wget
import requests
from urllib.parse import quote, unquote # 传到wget的地址,必须是未编码的(比如空格,编码后是%20,wget会再编码一次,变成%5020,导致地址404,必须传入实际的空格才行,如果已经编码,先解码再传)
from unrar import rarfile
from pyppeteer import launch
from urllib3.exceptions import InsecureRequestWarning
requests.urllib3.disable_warnings(InsecureRequestWarning)

listPath = r"C:\Users\Administrator\Desktop\zei8Novel"
# savePath = r"C:\Users\Administrator\Desktop\zei8Novel"
extractPath = r"C:\Users\Administrator\Desktop\zei8Novel"
errorFile = r"C:\Users\Administrator\Desktop\zei8Novel\缺失.txt" # 缺失的文件回头找别的地方爬
_temp_img = r'D:/_temp_screenshot.png'


def Download(url,path):
    """ 带进度条的下载函数 """
    try:
        start = time.time() #下载开始时间
        response = requests.get(url, stream=True) #stream=True必须写上
        size = 0    #初始化已下载大小
        chunk_size = 1024  # 每次下载的数据大小
        content_size = int(response.headers['content-length'])  # 下载文件总大小
        if response.status_code == 200:   #判断是否响应成功
            print('Start download,[File size]:{size:.2f} MB'.format(size = content_size / chunk_size /1024))   #开始下载，显示下载文件大小
            filepath = path
            with open(filepath,'wb') as file:   #显示进度条
                for data in response.iter_content(chunk_size = chunk_size):
                    file.write(data)
                    size +=len(data)
                    print('\r'+'Download:%s%.2f%%' % ('>'*int(size*50/ content_size), float(size / content_size * 100)) ,end=' ')
        end = time.time()   #下载结束时间
        print('Download completed! times: %.2f秒' % (end - start))  #输出下载用时时间
        return True
    except:
        print('Download failed!')
        return False

async def main():
    # 浏览器
    browser = await launch(
        headless=True,
        args=['--lang=zh-CN,en,en-GB,en-US']
    )
    page = await browser.newPage()
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.42")
    await page.evaluateOnNewDocument('() =>{ Object.defineProperties(navigator,'
                                     '{ webdriver:{ get: () => false } }) }')
    # 数据
    id = 0
    for iniPath in [os.path.join(listPath, item) for item in next(os.walk(listPath), (None, None, []))[2] if item[-4:].lower() == '.ini']:
        # print(ini)
        id+=1
        className = os.path.splitext(os.path.split(iniPath)[1])[0]
        print('Download_Class:[{}]{}'.format(id, className))
        savePath = os.path.join(listPath, className)
        if not os.path.exists(savePath):
            os.makedirs(savePath)
        with open(iniPath, 'r', encoding='utf-8') as ini:
            index = 0
            for line in ini:
                index+=1
                novelName, novelUrl = line.replace('\n', ''), next(ini).replace('\n', '')
                # print([novelName,novelUrl])
                await page.goto(novelUrl, options={"waitUntil": 'load', "timeout": 100000})
                await page.waitForSelector('ul.downurllist > strong:last-child > a')
                downloadPage_url = (await (await (await page.J('ul.downurllist > strong:last-child > a')).getProperty('href')).jsonValue())
                await page.goto(downloadPage_url, options={"waitUntil": 'load', "timeout": 100000})
                await page.waitForSelector('div.panel > div.panel-body > span.downfile > a')
                download_url = unquote((await (await (await page.J('div.panel > div.panel-body > span.downfile > a')).getProperty('href')).jsonValue()),'utf-8')
                # print(download_url)
                print('Download:[{}]{}'.format(index, novelName))
                packageName = os.path.join(savePath, os.path.split(download_url)[1])
                # 下载
                if Download(download_url, packageName):
                    # 解压,解压的时间也可以给网站缓解压力.
                    # print('Extract:[{}]{}'.format(index, novelName))
                    # if rarfile.is_rarfile(rarname):
                    #     rar = rarfile.RarFile(rarname)
                    #     rar.extractall(extractPath)
                    # else:
                    #     print("ExtractFailed:[{}]{}非rar! {}".format(id,novelName,rarname), flush=True)
                    pass
                else:
                    e = "DownloadFailed:[{}]{}:{}".format(index,novelName,download_url)
                    # print(e, flush=True)
                    with open(errorFile,'a',encoding='utf-8') as f:
                        f.write(e+'\n')
    await browser.close()
    print('运行完毕.')


asyncio.get_event_loop().run_until_complete(main())
