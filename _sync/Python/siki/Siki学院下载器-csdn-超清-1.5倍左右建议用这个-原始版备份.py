import asyncio
from asyncio.locks import Semaphore
from typing import List
from pyppeteer import launch
import os
from PIL import Image #pip install Pillow
from pyzbar import pyzbar
import qrcode
from tempfile import TemporaryDirectory
import os
from aiohttp import ClientSession
from lxml import etree
from loguru import logger
import re
import os
from Crypto.Cipher import AES #pip install pycryptodome
import re
from tqdm import tqdm
import json
from prettytable import PrettyTable  # 终端打印表格
logger.add(f"{os.path.expanduser('~')}\AppData\Local\siki\log\log.log", level='DEBUG', format='<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>', encoding="UTF-8", rotation="1 MB", retention="5 days")

class Siki(object):
    def __init__(self) -> None:
        self.qrcode_file = "qrcode.png"
        self.cookies = {}
        self.base_url = "http://www.sikiedu.com"
        self.qxd = "超清"  # 标清， 高清， 超清
        self.headers = {
            "Host": "www.sikiedu.com",
            "Origin": "http://service-cdn.qiqiuyun.net",
            "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
        }
        self.max_worker = 80
        self.page_url = "http://www.sikiedu.com/my/courses/learning?page="
        self.page_index = "1"

    def show_qrcode(self, file):
        url = pyzbar.decode(Image.open(os.path.join(file)), symbols=[
                            pyzbar.ZBarSymbol.QRCODE])[0].data.decode()
        q = qrcode.QRCode()
        q.add_data(url)
        q.make()
        q.print_ascii()

    async def login(self):
        # browser = await launch(headless=True, executablePath="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
        browser = await launch() #第一次运行可能会下载浏览器核心

        page = await browser.newPage()
        await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88")
        await page.goto('http://www.sikiedu.com/login')
        await page.click('a.social-weixin')
        # qrcode_img = await page.waitForSelector("div.wrp_code > img")
        qrcode_img = await page.waitForSelector("img.web_qrcode_img") #这里的选择导致后面截图一直报错,只能改成img了
        # 直接获取二维码url
        # qrcode_url = await (await qrcode_img.getProperty("src")).jsonValue()
        
        # 也可以获取图片然后识别内容
        await page.waitFor(500)
        with TemporaryDirectory() as tmpdirname:
            await qrcode_img.screenshot({"path": os.path.join(tmpdirname, self.qrcode_file)})
            # logger.info("等待扫码")
            self.show_qrcode(os.path.join(tmpdirname, self.qrcode_file))
        
        # 等待扫码完成
        await page.evaluate('''() => {
        var wx_scan_interval = setInterval(() => {
            if ($("#wx_after_scan").is(':visible')) {
                $("#wx_after_scan").after('<scan id="scaned"></scan>');
                clearInterval(wx_scan_interval);
            }
        }, 200);
    }''')
        await page.waitForSelector("#scaned")
        os.system("cls")
        logger.info("扫码成功")
        await page.waitForSelector(".navbar-user")
        logger.info("登录成功")
        
        # 获取cookie， 至此就不用pyppeteer了， 用pyppeteer是为了简化登录， 之后用aiohttp爬取， 异步爬取速度优势
        cookies = await page.cookies("http://www.sikiedu.com")
        await browser.close()
        self.cookies.update({cookie["name"]: cookie["value"]
                             for cookie in cookies})
        

    async def main(self):
        await self.login()
        # print(self.cookies)
        # 这里手动设置cookie， 便于测试
        # self.cookies = 

        async with ClientSession(cookies=self.cookies, headers=self.headers) as session:
            self.session: ClientSession = session
            learning_list = await self.get_learning_list()
            
            # 选择下载课程
            tb = PrettyTable()
            tb.field_names=["序号", "课程名", "课程ID"]
            for index, course in enumerate(learning_list):
                tb.add_row([index, course['name'], course['courseid']])
            print(tb)
            xh = int(input("输入序号:"))
            os.system("cls")
            # 选择下载集
            tb.clear()
            tb.field_names = ["序号", "标题", "ID", "时长"]
            tb.title = f"[{learning_list[xh]['courseid']}]{learning_list[xh]['name']}"
            course_detail_list = await self.get_course_detail_list(learning_list[xh]['courseid'], learning_list[xh]['name'])
            for index, t in enumerate(course_detail_list):
                tb.add_row([index, t['name'], t['taskid'], t['activityLength']])
            tb.add_row(["", "", "", ""])
            tb.add_row(["总计", f"{len(course_detail_list)}个", "", ""])
            print(tb)
            d_list_i = self.get_input_list(input("输入序号:(可输入n-m来批量下载):"))
            logger.info(f"一共选择 {len(d_list_i)} 个视频")
            for i in d_list_i:
                print(i)
                # logger.info(f"正在下载 {t['name']}")
                await self.download_task(**course_detail_list[i])

    async def get_learning_list(self):
        self.page_index = input("输入页码(请自行到http://www.sikiedu.com/my/courses/learning获取):")
        
        # print("获取最大页码")
        #自动获取最大页码
        # response_pageid = await self.session.get("https://www.sikiedu.com/my/courses/learning?page=1")
        # html_pageid = etree.HTML(await response_pageid.text())
        # pageid_max = html_pageid.xpath("//*[@class=\"cd-icon cd-icon-last-page\"]/..")
        # print(pageid_max[0].text,pageid_max[1].text)

        url = self.page_url + self.page_index
        response = await self.session.get(url)
        html = etree.HTML(await response.text())
        course_divs = html.xpath("//div[contains(@class, 'my-course-item ')]")
        course_infos = []
        for course_div in course_divs:
            try:
                name = course_div.xpath(
                    ".//a[@class='cd-link-major']/text()")[0]
                url = course_div.xpath(
                    ".//div[@class='my-course-item__btn']/a/@href")[0]
                course_infos.append(
                    {"name": name, "courseid": url.split("/")[-1]})
            except Exception as e:
                logger.debug(e)
        return course_infos

    async def get_course_detail_list(self, courseid, coursename):
        url = f"http://www.sikiedu.com/my/course/{courseid}"
        response = await self.session.get(url, headers={"Referer": (self.page_url + self.page_index), "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/4E423F"})
        html = etree.HTML(await response.text())
        tasks = json.loads(html.xpath(
            "//div[@class='hidden js-hidden-cached-data']/text()")[0].strip())
        task_infos = []
        for task in tasks:
            if task.get("type") == "video":
                task_infos.append({
                    "name": task["title"],
                    "taskid": task["taskId"],
                    "activityLength": task['activityLength'],
                    "courseid": courseid,
                    'coursename': coursename
                })
        return task_infos

    async def download_task(self, *, courseid, taskid, name, coursename, **kwargs):
        logger.info(f"准备下载 {name}")
        # 第一层
        logger.debug("解析第一层")
        activity_show_response = await self.session.get(f"http://www.sikiedu.com/course/{courseid}/task/{taskid}/activity_show")
        HTML = etree.HTML(await activity_show_response.text())
        info_div = HTML.xpath("//div[(@data-file-global-id)]")[0]
        # file_global_id = info_div.xpath("./@data-file-global-id")[0]
        data_url = info_div.xpath("./@data-url")[0]

        # 第二层
        logger.debug("解析第二层")
        response = await self.session.get(data_url)
        m3u8info = {}
        lines = (await response.text()).split('\n')
        i = 0
        url = ""
        while i < len(lines):
            result = re.match(
                r"#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=(?P<width>\d+?),NAME=(?P<name>\w+)", lines[i].strip())
            if result:
                i += 1
                url = lines[i].strip()
                m3u8info[result.group("name")] = lines[i].strip()
            i += 1

        if self.qxd in m3u8info:
            url = m3u8info[self.qxd]

        # 第三层
        logger.debug("解析第三层")
        with TemporaryDirectory() as tempdir:
            response = await self.session.get(url)
            all_content = await response.text()
            if "#EXTM3U" not in all_content:
                raise BaseException("非M3U8的链接")

            file_line = all_content.split("\n")
            match = re.search(
                r"#EXT-X-KEY:METHOD=AES-128,URI=\"(?P<uri>.*?)\",IV=(?P<iv>0x[\d\w]*)", all_content)
            key_uri = match.group("uri")
            response = await self.session.get(key_uri)
            key = (await response.text()).strip()

            iv = match.group("iv")
            iv = int(iv, 16).to_bytes(length=16, byteorder='big')
            cryptor = AES.new(key.encode("utf8"), AES.MODE_CBC, key.encode("utf8"))

            tasks = []
            i = 0
            sem = Semaphore(self.max_worker)
            async with ClientSession(headers={"user-agent": "user-agent"}) as session:
                for url in file_line:
                    if url.startswith("http"):
                        tasks.append(self.download(session, url, i, sem))
                        i += 1
                    if url.startswith("#EXT-X-ENDLIST"):
                        break
                logger.info("开始下载")
                for task in tqdm(asyncio.as_completed(tasks), total=len(tasks)):
                    num, content = await task
                    with open(os.path.join(tempdir, f"{num}.ts"), "wb") as f:
                        f.write(cryptor.decrypt(content))
            # 合并
            logger.debug("合并中")
            coursename = re.sub(r"[^\d\w]", "", coursename)
            if not (os.path.exists(f"./{coursename}") and os.path.isdir(f"./{coursename}")):
                os.mkdir(f"./{coursename}")

            with open(f"./{coursename}/{name}.mp4", "wb") as f:
                for num in tqdm(range(i)):
                    with open(os.path.join(tempdir, f"{num}.ts"), "rb") as ff:
                        f.write(ff.read())

    async def download(self, session, url, num, sem) -> bytes:
        async with sem:
            response = await session.get(url)
            content = await response.content.read()
            return num, content
    def get_input_list(self, r_input):
        """解析选择的序号
        Args:
            r_input (str): [原始输入]
        >>> get_input_list("1, 2, 3")
        [1, 2, 3]
        >>> get_input_list("1-3")
        [1, 2, 3]
        >>> get_input_list("1-4,5,6-8")
        [1, 2, 3, 4, 5, 6, 7, 8]
        """
        result = []
        r_input = re.sub(r"[^\d\-\,]", "", r_input)  # 去掉多余不支持的符号
        d_s: List[str] = r_input.split(",")  # 先按照都好分隔
        for d in d_s:
            if d.isdigit():
                result.append(int(d))
            elif "-" in d:
                start, end = d.split("-")
                result += list(range(int(start), int(end)+1))
        return result

if __name__ == "__main__":
    try:
        asyncio.run(Siki().main())
    except Exception as e:
        logger.error(f"{e}")
    finally:
        os.system("pause")

# asyncio.run(Siki().main())