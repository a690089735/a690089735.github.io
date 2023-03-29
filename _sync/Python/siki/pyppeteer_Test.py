import asyncio
from pyppeteer import launch

async def main():
    # headless参数设为False，则变成有头模式
    browser = await launch(headless=False) #第一次运行可能会下载浏览器核心

    page = await browser.newPage()
    await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88")
    await page.goto('http://www.sikiedu.com/login')
    await page.click('a.social-weixin')
    qrcode_img = await page.waitForSelector("img.web_qrcode_img")

    # 页面截图
    await page.screenshot({'path': r'D:\example.png'})
    await qrcode_img.screenshot({'path': r'D:\qrcode.png'})
    # 打印页面cookies
    # print(await page.cookies())
    
    # 打印页面文本
    # print(await page.content())
    
    # 打印当前页标题
    # print(await page.title())
    
    # 抓取新闻标题
    title_elements = await page.xpath('//div[@class="title-box"]/a')
    for item in title_elements:
        # 获取文本
        title_str = await (await item.getProperty('textContent')).jsonValue()
        print(await item.getProperty('textContent'))
        # 获取链接
        title_link = await (await item.getProperty('href')).jsonValue()
        print(title_str)
        print(title_link)
    
    # 关闭浏览器
    # await browser.close()

asyncio.get_event_loop().run_until_complete(main())