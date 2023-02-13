import asyncio
from playwright.async_api import async_playwright
# pip install pytest-playwright
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


async def main():
    async with async_playwright() as p:
        browser_type = p.firefox
        browser = await browser_type.launch()
        page = await browser.new_page()
        await page.goto('https://bot.sannysoft.com/')
        # p.firefox伪装性最好,不会被识别为webDriver
        await page.screenshot(path=f'example-{browser_type.name}.png')
        await browser.close()

asyncio.run(main())
