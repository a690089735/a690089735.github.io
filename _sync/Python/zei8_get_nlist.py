import asyncio
from pyppeteer import launch
## 以后用playwright-python

classList = [
    "https://www.zei8.vip/xuanhuan",
    "https://www.zei8.vip/chuantongwuxia",
    "https://www.zei8.vip/kongbujing",
    "https://www.zei8.vip/xiandaidushi",
    "https://www.zei8.vip/renwuchuanji",
    "https://www.zei8.vip/wangyoudongman",
    "https://www.zei8.vip/junshilishi",
    "https://www.zei8.vip/redianziyuan",
    "https://www.zei8.vip/xifangqihuan",
    "https://www.zei8.vip/xianxiaxiuzhen",
    "https://www.zei8.vip/zhentantuili",
    "https://www.zei8.vip/jingdiankehuan",
    "https://www.zei8.vip/mingzhuzazhi",
    "https://www.zei8.vip/lishichuanyue",
    "https://www.zei8.vip/chuantongyanqing",
    "https://www.zei8.vip/dushishehui",
    "https://www.zei8.vip/huanxiangxianyan",
    "https://www.zei8.vip/danmeibaihe"
]
# https://www.zei8.vip/jingdiankehuan/index_2.html

classUrl = classList[0]
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
    # await page.goto(classUrl)
    # await page.waitForSelector('div.listbox')
    # await page.screenshot({'path': _temp_img})

    # 最大页数
    await page.waitForSelector('ul.pagelist > li:last-child > a')
    maxCount = await (await (await page.J('ul.pagelist > li:last-child > a')).getProperty('href')).jsonValue()
    print(maxCount)


asyncio.get_event_loop().run_until_complete(main())