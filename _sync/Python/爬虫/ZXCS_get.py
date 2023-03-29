import asyncio
import os
import re
import wget
import time
import requests
from urllib.parse import quote,unquote # 传到wget的地址,必须是未编码的(比如空格,编码后是%20,wget会再编码一次,变成%5020,导致地址404,必须传入实际的空格才行,如果已经编码,先解码再传)
from unrar import rarfile
from pyppeteer import launch
from urllib3.exceptions import InsecureRequestWarning
requests.urllib3.disable_warnings(InsecureRequestWarning)

savePath = r"C:\Users\Administrator\Desktop\novel"
extractPath = r"C:\Users\Administrator\Desktop\novel"
errorFile = r"C:\Users\Administrator\Desktop\novel\缺失.txt" # 缺失的文件回头找别的地方爬
_temp_img = r'D:/_temp_screenshot.png'


async def main():

    browser = await launch(
        headless=True,
        args=['--lang=zh-CN,en,en-GB,en-US']
    )
    page = await browser.newPage()
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.42")
    await page.evaluateOnNewDocument('() =>{ Object.defineProperties(navigator,'
                                     '{ webdriver:{ get: () => false } }) }')
    # await page.goto('http://zxcs.me/')
    # await page.waitForSelector('#ilogo')
    # await page.screenshot({'path': _temp_img})

    for id in range(20000, 20001):
        url = 'http://zxcs.me/download.php?id={}'.format(id)
        await page.goto(url, options={"waitUntil": 'load', "timeout": 100000})
        await page.waitForSelector('body > div.wrap > div.content > h2')
        title = await (await (await page.J('body > div.wrap > div.content > h2')).getProperty('textContent')).jsonValue()
        if title != '':
            try:
                print('Download:[{}]{}'.format(id, title))
                download_url = unquote((await (await (await page.J('body > div.wrap > div.content > div.panel > div.panel-body > span.downfile > a')).getProperty('href')).jsonValue()),'utf-8')
                rarname = os.path.join(extractPath, '{}.rar'.format(title))
                # print(download_url)
                wget.download(download_url, rarname)
                print('\n')
                # 解压,解压的时间也可以给网站缓解压力.
                if rarfile.is_rarfile(rarname):
                    rar = rarfile.RarFile(rarname)
                    rar.extractall(extractPath)
                else:
                    print("[{}]{}非rar! {}".format(id,title,rarname), flush=True)
            except:
                e = "[{}]{}下载失败! {}".format(id,title,download_url)
                print(e, flush=True)
                with open(errorFile,'a',encoding='utf-8') as f:
                    f.write(e+'\n')
        else:
            print('Skip:{}'.format(id), flush=True)
        # time.sleep(1)  # 知轩藏书真的是良心网站,网站不易,每个操作停一秒,给服务器缓缓压力.# 不过这个爬虫本来也不快....

    # http://zxcs.me/download.php?id=13512
    # <div class = "panel-body" >
    #     <span class="downfile"><a href="http://185.163.45.196/23/qyz,eslw.rar" target="_blank">线路一</a></span>
    #     <span class="downfile"><a href="http://45.138.97.38/23/qyz,eslw.rar" target="_blank">线路二</a></span>
    # </div>
    # body > div.wrap > div.content > h2 --标题,注意替换不允许的文件名符号,这个标签内容为空,则资源无效

# 解压文件
# import rarfile

# file_path = r"D:\123\wenjianbao.rar"
# to_path = r"D:\123"

# rf = rarfile.RarFile(file_path) # 待解压文件
# rf.extractall(to_path) # 解压到指定的目录（不填的话，默认为当前脚本所在的目录）


asyncio.get_event_loop().run_until_complete(main())
# msg %username% /time:10 终于等到你 弹出对话框演示，修改这里的文字即可。