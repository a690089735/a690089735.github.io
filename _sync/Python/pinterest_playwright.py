# import asyncio
# from playwright.sync_api import sync_playwright
# # from playwright.async_api import async_playwright
# # pip install pytest-playwright
# urlList = [
#     'https://www.pinterest.com/11uuohczsenvmdgu3qhbj16ze54a2u/%E7%9F%B3%E8%86%8F%E9%9D%99%E7%89%A9/'
# ]

# url = urlList[0]

# with sync_playwright() as p:
#     # p.firefox伪装性最好,不会被识别为webDriver
#     browser_type = p.firefox
#     browser = browser_type.launch(headless=False, slow_mo=50)
#     page = browser.new_page()
#     page.goto(url)
#     print(page.title())
#     browser.close()
#     # page.screenshot(path=f'example-{browser_type.name}.png')
#     # browser.close()

'''
<img alt="其中包括图片：Натюрморт  с подсолнухами" class="hCL kVc L4E MIw" fetchpriority="auto" loading="auto" src="https://i.pinimg.com/236x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg" srcset="https://i.pinimg.com/236x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg 1x, https://i.pinimg.com/474x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg 2x, https://i.pinimg.com/736x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg 3x, https://i.pinimg.com/originals/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg 4x">
<img alt="" class="hCL kVc L4E MIw" fetchpriority="auto" loading="auto" src="https://i.pinimg.com/564x/80/40/a9/8040a9ecfe684fcd055afa4c3242c834.jpg">
'''

import requests
import os

def getPages(keyword, pages):
    params = []
    for i in range(30, 30 * pages + 30, 30):
        params.append({
            'tn': 'resultjson_com',
            'ipn': 'rj',
            'ct': 201326592,
            'is': '',
            'fp': 'result',
            'queryWord': keyword,
            'cl': 2,
            'lm': -1,
            'ie': 'utf-8',
            'oe': 'utf-8',
            'adpicid': '',
            'st': -1,
            'z': '',
            'ic': 0,
            'word': keyword,
            's': '',
            'se': '',
            'tab': '',
            'width': '',
            'height': '',
            'face': 0,
            'istype': 2,
            'qc': '',
            'nc': 1,
            'fr': '',
            'pn': i,
            'rn': 30,
            'gsm': '1e',
            '1509347955280': ''
        })
    url = 'https://image.baidu.com/search/acjson'
    urls = []
    for i in params:
        urls.append(requests.get(url, params=i).json().get('data'))
    return urls
https://i.pinimg.com/236x/57/6a/4c/576a4cb102a81ac4c97fa7199a7febcf.jpg

def getImg(dataList, localPath):
    if not os.path.exists(localPath):
        os.mkdir(localPath)

    try:
        x = 0
        for list in dataList:
            for i in list:
                if i.get('thumbURL') != None:
                    print('正在下载：%s' % i.get('thumbURL'))
                    ir = requests.get(i.get('thumbURL'))
                    open(localPath + '%d.jpg' % x, 'wb').write(ir.content)
                    x += 1
        print('图片下载完成')
    except Exception:
        print("图片下载失败")


if __name__ == '__main__':    
    dataList = getPages('哈士奇', 1)
    print(dataList)
    getImg(dataList, '/home/rui/images/')

