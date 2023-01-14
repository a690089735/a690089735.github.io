import asyncio
from pyppeteer import launch

# Element.getBoundingClientRect()

async def main():
    browser = await launch()
    page = await browser.newPage()
    await page.goto(r'D:/OBSIDIAN/记录/2.笔记/学习MagicaCloth/MagicaCloth的构成.html')
    await page.screenshot({'path': r'd:/example.png'})
    # await page.pdf({'path': r'd:/page.pdf'})

    # info = await page.getBoundingClientRect() #page没有这个函数
    # print(info)

    dimensions = await page.evaluate('''() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio,
        }
    }''')
    print(dimensions)

    await browser.close()

asyncio.get_event_loop().run_until_complete(main())