'''
https://www.wujieai.com/tag-generator
'''
from playwright.sync_api import sync_playwright
import re
from time import sleep
import json

url = 'https://www.wujieai.com/tag-generator'
jsonFilePath = r'D:\GitHub\a690089735.github.io\_sync\Python\wujieaiTags.json'

with sync_playwright() as p:
    # p.firefox伪装性最好,不会被识别为webDriver
    browser_group = p.firefox
    browser = browser_group.launch(headless=True, slow_mo=50)
    context = browser.new_context()
    page = context.new_page()
    page.goto(url)
    page.wait_for_selector('#meiqia-sdk', timeout=30000, state='hidden')
    divList = [div for div in page.query_selector_all('#__next > div > main > div > div > div.flex-1 > div.mt-4.rounded-xl.overflow-hidden.min-h-\[464px\].border-2.border-neutral-100 > div.AutoScroll_autoScrollWrap__WisFB.bg-neutral-200 > div > div > div')]
    dataLib = {}
    for div1 in divList:
        category = div1.text_content()
        print(category)
        dataLib[category] = {}
        div1.click()
        for div2 in page.query_selector_all('#__next > div > main > div > div > div.flex-1 > div.mt-4.rounded-xl.overflow-hidden.min-h-\[464px\].border-2.border-neutral-100 > div.p-4 > div'):
            group = div2.query_selector_all('div')[0].text_content()
            print('-{}'.format(group))
            dataLib[category][group] = {}
            for div3 in div2.query_selector_all('div.tagName'):
                parameter = div3.text_content()
                print('--{}'.format(parameter))
                dataLib[category][group][parameter] = {
                    "text":parameter[parameter.find(' ')+1:],
                    "order":0
                }
    print('end---')
    print(dataLib)
    with open(jsonFilePath,'w',encoding='utf-8') as f:
        json.dump(dataLib,f,ensure_ascii=False)