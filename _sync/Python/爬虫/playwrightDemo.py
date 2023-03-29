'''
https://playwright.dev/python/docs/library#first-script
'''

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    # for browser_type in [p.chromium, p.firefox, p.webkit]:
    #     browser = browser_type.launch(headless=False)
    #     page = browser.new_page()
    #     page.goto('https://bot.sannysoft.com/')
    #     page.screenshot(path=f'example-{browser_type.name}.png')# p.firefox伪装性最好,不会被识别为webDriver
    #     browser.close()
    browser = p.firefox.launch(headless=False)
    page = browser.new_page()
    # page.goto('https://www.zei8.vip/e/DownSys/DownSoft/?classid=3&id=62957&pathid=0')
    # Start waiting for the download
    # page.eval_on_selector('span.downfile > a').click()
    # page.goto('https://txt.zei8.vip/d/file/soft/20180926/%E3%80%8A%E7%A9%BF%E8%B6%8A%E8%AF%B8%E5%A4%A9%E4%B8%87%E7%95%8C%E3%80%8Btxt%E5%85%A8%E6%9C%AC%E7%B2%BE%E6%A0%A1%E7%89%88(www.zei8.me).zip')
    # Start waiting for the download
    with page.expect_download() as download_info:
        # Perform the action that initiates download
        # page.get_by_text("Download file").click()
        page.goto('https://txt.zei8.vip/d/file/soft/20180926/%E3%80%8A%E7%A9%BF%E8%B6%8A%E8%AF%B8%E5%A4%A9%E4%B8%87%E7%95%8C%E3%80%8Btxt%E5%85%A8%E6%9C%AC%E7%B2%BE%E6%A0%A1%E7%89%88(www.zei8.me).zip')
    # Wait for the download to start
    download = download_info.value
    # Wait for the download process to complete
    print(download.path())
    # Save downloaded file somewhere
    download.save_as("/path/to/save/download/at.txt")
    browser.close()

    
