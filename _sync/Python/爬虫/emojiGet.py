'''
https://www.wujieai.com/tag-generator
'''
from playwright.sync_api import sync_playwright
import re
from time import sleep
import json

urls = [
    'https://emojixd.com/group/smileys-emotion',
    'https://emojixd.com/group/people-body',
    'https://emojixd.com/group/animals-nature',
    'https://emojixd.com/group/food-drink',
    'https://emojixd.com/group/travel-places',
    'https://emojixd.com/group/activities',
    'https://emojixd.com/group/objects',
    'https://emojixd.com/group/symbols',
    'https://emojixd.com/group/flags'
]
jsonFilePath = r'F:\GitHub\a690089735.github.io\_sync\Python\Emo.json'
#本来想只写一个分类作为组,但是emoji实在太多了,只好单独做一个分类,再另分组了.
with sync_playwright() as p:
    # p.firefox伪装性最好,不会被识别为webDriver
    browser_group = p.firefox
    browser = browser_group.launch(headless=True, slow_mo=50)
    context = browser.new_context()
    page = context.new_page()
    dataLib = {}
    for url in urls:
        page.goto(url)
        page.wait_for_selector('p.my2', timeout=30000)
        category = page.query_selector('h2.h2').text_content()
        dataLib[category] = {}
        for group in page.query_selector_all('div.clearfix'):
            groupName = group.query_selector('h3 > a').text_content()
            print(f'{groupName}')
            dataLib[category][groupName] = {}
            for a in group.query_selector_all('a.p1'):
                parameter = a.query_selector('div > p:nth-child(1)').text_content()
                print(f'--{parameter}')
                dataLib[category][groupName][parameter] = {
                    "text": a.query_selector('div.emoji').text_content(),
                    "order": 11
                }
    print('end---')
    # print(dataLib)
    with open(jsonFilePath, 'w', encoding='utf-8') as f:
        json.dump(dataLib, f, ensure_ascii=False)
