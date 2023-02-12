# import asyncio
from playwright.sync_api import sync_playwright
from time import sleep
import re
# # from playwright.async_api import async_playwright
# # pip install pytest-playwright
urlList = [
    'https://www.pinterest.com/11uuohczsenvmdgu3qhbj16ze54a2u/%E7%9F%B3%E8%86%8F%E9%9D%99%E7%89%A9/'
]
#注意,画板标签规则和搜索标签规则不同
# url = urlList[0]
url = 'https://www.pinterest.com/11uuohczsenvmdgu3qhbj16ze54a2u/%E7%9F%B3%E8%86%8F%E9%9D%99%E7%89%A9/'

with sync_playwright() as p:
    # p.firefox伪装性最好,不会被识别为webDriver
    browser_type = p.firefox
    browser = browser_type.launch(headless=False, slow_mo=50)
    context = browser.new_context()
    # page = browser.new_page()
    page = context.new_page()
    page.goto(url)
    print(page.title())
    # print(111)
    page.wait_for_selector('div.gridCentered> div > div[role="list"]',timeout=30000)
    # print(222)
    imgUrls = []
    for i in range(50):
        # print(i)
        page.mouse.wheel(0, 15000)
        page.wait_for_load_state('domcontentloaded')
        # div.static:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)
        # page.query_selector_all('div.gridCentered> div > div[role="list"] > div[role="listitem"]  img')
        for imgUrl in [item.get_attribute('src') for item in page.query_selector_all('div.gridCentered> div > div[role="list"] > div[role="listitem"]  img')]:
            # https://i.pinimg.com/originals  /4c/9b/7d/4c9b7d3b831a5257411a4f1457b3e0fe.jpg
            # https://i.pinimg.com/236x       /4c/9b/7d/4c9b7d3b831a5257411a4f1457b3e0fe.jpg
            # (?<=https://.*\.com/).*?(?=/)
            imgUrl = re.sub('(?<=https://i\.pinimg\.com/).*?(?=/)', 'originals', imgUrl) # pythonRE,后视只能固定宽度
            if imgUrl not in imgUrls:
                imgUrls.append(imgUrl)
                print(imgUrl)
    print(len(imgUrls))
    browser.close()

'''
<img alt="其中包括图片：Натюрморт  с подсолнухами" class="hCL kVc L4E MIw" fetchpriority="auto" loading="auto" src="https://i.pinimg.com/236x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg" srcset="https://i.pinimg.com/236x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg 1x, https://i.pinimg.com/474x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg 2x, https://i.pinimg.com/736x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg 3x, https://i.pinimg.com/originals/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg 4x">
<img alt="" class="hCL kVc L4E MIw" fetchpriority="auto" loading="auto" src="https://i.pinimg.com/564x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg">
'''
# import re
# re.sub('(?<=https://i\.pinimg\.com/).*?(?=/)', 'originals', 'https://i.pinimg.com/236x/4c/9b/7d/4c9b7d3b831a5257411a4f1457b3e0fe.jpg')