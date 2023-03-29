import asyncio
import os
import re
from pyppeteer import launch
# 以后用playwright-python
classList = [
    ['东方玄幻', 'https://www.zei8.vip/xuanhuan'],
    ['传统武侠', 'https://www.zei8.vip/chuantongwuxia'],
    ['恐怖惊悚', 'https://www.zei8.vip/kongbujing'],
    ['现代都市', 'https://www.zei8.vip/xiandaidushi'],
    ['人物传记', 'https://www.zei8.vip/renwuchuanji'],
    ['网游动漫', 'https://www.zei8.vip/wangyoudongman'],
    ['军事历史', 'https://www.zei8.vip/junshilishi'],
    ['热点资源', 'https://www.zei8.vip/redianziyuan'],
    ['西方奇幻', 'https://www.zei8.vip/xifangqihuan'],
    ['仙侠修真', 'https://www.zei8.vip/xianxiaxiuzhen'],
    ['侦探推理', 'https://www.zei8.vip/zhentantuili'],
    ['经典科幻', 'https://www.zei8.vip/jingdiankehuan'],
    ['名著杂志', 'https://www.zei8.vip/mingzhuzazhi'],
    ['历史穿越', 'https://www.zei8.vip/lishichuanyue'],
    ['传统言情', 'https://www.zei8.vip/chuantongyanqing'],
    ['都市社会', 'https://www.zei8.vip/dushishehui'],
    ['幻想现言', 'https://www.zei8.vip/huanxiangxianyan'],
    ['耽美百合', 'https://www.zei8.vip/danmeibaihe']
]
# https://www.zei8.vip/jingdiankehuan/index_2.html

# classUrl = classList[0]
_temp_img = r'D:/_temp_screenshot.png'
recordPath = r'C:\Users\Administrator\Desktop\zei8Novel'


async def main():

    browser = await launch(
        headless=True,
        args=['--lang=zh-CN,en,en-GB,en-US']
    )
    page = await browser.newPage()
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.42")
    await page.evaluateOnNewDocument('() =>{ Object.defineProperties(navigator,'
                                     '{ webdriver:{ get: () => false } }) }')
    # await page.goto(classUrl)
    # await page.waitForSelector('div.listbox')
    # await page.screenshot({'path': _temp_img})

    for className, classUrl in classList:
        # 最大页数
        await page.goto(classUrl, options={"waitUntil": 'load', "timeout": 100000})
        await page.waitForSelector('ul.pagelist > li:last-child > a')
        maxCount = int((re.match(r'.*index\_(\d+).html', await (await (await page.J('ul.pagelist > li:last-child > a')).getProperty('href')).jsonValue()).group(1)))
        # maxCount = re.match(r'index\_(\d+).html', maxCount).group(1)
        # print(maxCount)
        # 收集子页面
        print('访问Class:{}.首页,共{}页'.format(className, maxCount))
        pagesData = [[await(await item.getProperty('textContent')).jsonValue(), await(await item.getProperty('href')).jsonValue()] for item in await page.JJ('div.listbox > ul > li > dl > a')]
        for index in range(2, maxCount+1):
            print('访问Class:{}.{}'.format(className, index))
            await page.goto('{}/index_{}.html'.format(classUrl, index), options={"waitUntil": 'load', "timeout": 100000})
            await page.waitForSelector('ul.pagelist > li:last-child') # 最后一页的最后一个没有a标签
            pagesData += [[await(await item.getProperty('textContent')).jsonValue(), await(await item.getProperty('href')).jsonValue()] for item in await page.JJ('div.listbox > ul > li > dl > a')]
        # 记录子页面
        recordFile = r'{}\{}-{}.ini'.format(recordPath, className, len(pagesData))
        print('获取完成,记录到文件:{}'.format(recordFile))
        if os.path.isfile(recordFile):
            os.remove(recordFile)
        with open(recordFile, 'a', encoding='utf-8') as rf:
            for pageName, pageUrl in pagesData:
                rf.write('{}\n{}\n'.format(pageName, pageUrl))

    await browser.close()

asyncio.get_event_loop().run_until_complete(main())

for i in range(2, 5):
    print(i)
