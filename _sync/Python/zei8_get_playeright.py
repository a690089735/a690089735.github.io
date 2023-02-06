import os
from playwright.sync_api import sync_playwright, Error

listPath = r"C:\Users\Administrator\Desktop\zei8Novel"
# savePath = r"C:\Users\Administrator\Desktop\zei8Novel"
extractPath = r"C:\Users\Administrator\Desktop\zei8Novel"
errorFile = r"C:\Users\Administrator\Desktop\zei8Novel\缺失.txt" # 缺失的文件回头找别的地方爬
_temp_img = r'D:/_temp_screenshot.png'


def run() -> None:
    with sync_playwright() as p:
        # 浏览器
        with p.firefox.launch(headless=True) as browser:
            with browser.new_context() as context:
                # 数据
                id = 0
                for iniPath in [os.path.join(listPath, item) for item in next(os.walk(listPath), (None, None, []))[2] if item[-4:].lower() == '.ini']:
                    # print(ini)
                    id+=1
                    className = os.path.splitext(os.path.split(iniPath)[1])[0]
                    print('Download Class:[{}]{}'.format(id, className))
                    savePath = os.path.join(listPath, className)
                    if not os.path.exists(savePath):
                        os.makedirs(savePath)
                    with open(iniPath, 'r', encoding='utf-8') as ini:
                        index = 0
                        for line in ini:
                            index+=1
                            novelName, novelUrl = line.replace('\n', ''), next(ini).replace('\n', '')
                            # print([novelName,novelUrl])
                            with context.new_page() as page:
                                page.goto(novelUrl)
                                page.locator('ul.downurllist > strong:last-child > a').wait_for()
                                downloadPage_url = 'https://www.zei8.vip' + page.locator('ul.downurllist > strong:last-child > a').get_attribute('href')
                                # print(downloadPage_url)## https://www.zei8.vip/e/DownSys/DownSoft/?classid=3&id=62957&pathid=0
                                page.goto(downloadPage_url)
                                page.locator('div.panel > div.panel-body > span.downfile > a').all()[0].wait_for()
                                download_url = page.locator('div.panel > div.panel-body > span.downfile > a').all()[0].get_attribute('href')
                                # print(download_url)
                                # print(os.path.split(download_url)[1])
                                # with context.new_page() as page:
                                print('Download:[{}]{}'.format(index, novelName))
                                with page.expect_download() as download_info:
                                    try:
                                        page.goto(download_url, wait_until="networkidle")
                                    except Error as error: # 报错,但是这个错误是理应出现的正常情况,这样用try包裹一下就能下载了,下载兼容性很强,就是太特娘的慢了...还没进度条... (不过代码是真少啊)
                                        print(str(error).split('\n')[0]) # 由于出现错误,所以必须显示logs,所以这里裁切一下
                                        # pass
                                download = download_info.value
                                # print(download.path())
                                try:
                                    download.save_as(r'{}\{}'.format(savePath,os.path.split(download_url)[1]))
                                    print('Download Finished.')
                                except:
                                        e = "Download Failed:[{}]{}:{}".format(index,novelName,download_url)
                                        print(e)
                                        with open(errorFile,'a',encoding='utf-8') as f:
                                            f.write(e+'\n')
    print('运行完毕.')


run()