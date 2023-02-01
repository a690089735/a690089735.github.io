import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        for browser_type in [p.chromium, p.firefox, p.webkit]: ## 这里很厉害啊,直接调用多种浏览器
            browser = await browser_type.launch()
            page = await browser.new_page()
            await page.goto('https://bot.sannysoft.com/')
            await page.screenshot(path=f'example-{browser_type.name}.png') ## p.firefox伪装性最好,不会被识别为webDriver
            await browser.close()

asyncio.run(main())