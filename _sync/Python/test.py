from playwright.sync_api import Playwright, sync_playwright, Request, Download, Error


def run(playwright: Playwright, browse_name: str, headless: bool) -> None:
    with getattr(playwright, browse_name).launch(headless=headless) as browser:
        with browser.new_context() as context:
            with context.new_page() as page:
                # page.on("request", request_started)
                # page.on("requestfinished", request_finished)
                with page.expect_download() as download_info:
                    try:
                        # page.goto("https://norvig.com/unify-bug.pdf",wait_until="networkidle")
                        page.goto('https://txt.zei8.vip/d/file/soft/20180926/%E3%80%8A%E7%A9%BF%E8%B6%8A%E8%AF%B8%E5%A4%A9%E4%B8%87%E7%95%8C%E3%80%8Btxt%E5%85%A8%E6%9C%AC%E7%B2%BE%E6%A0%A1%E7%89%88(www.zei8.me).zip',wait_until="networkidle")
                    except Error as error:
                        print(error)
                download = download_info.value
                print(download.path())
                # download.save_as(r'C:\Users\Administrator\Desktop\unify-bug.pdf')
                download.save_as(r'C:\Users\Administrator\Desktop\test.zip')
                # download_started(download)
with sync_playwright() as playwright:
    run(playwright, 'firefox', False)
