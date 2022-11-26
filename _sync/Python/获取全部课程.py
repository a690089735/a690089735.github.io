"""
1. 开始登录
2. 打开网页开始爬取
比如: http://renzhouyike.oa.wanmei.net/course/enter/videoCoursesDetail.do?videoCoursesId=725
"""

# http://renzhouyike.oa.wanmei.net/course/enter/videoCoursesPlayback.do 视频回放页面首页,用于登录
# 模拟标签头部
# 实机 Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.42
# headers = {
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
# }
# 点击扫码 //li[@class="text-left sao"]/a 事先等待标签 await page.waitForSelector('.btn.btn-login')
# 截图获取二维码,弹出图片
# Promise.all:page.waitForNavigation()--等待跳转 文档示例:https://pptr.dev/api/puppeteer.page.waitfornavigation/ 加选项参考示例https://stackoverflow.com/a/52212395 选项参考https://www.jianshu.com/p/31375cae68d1
# 补充等待跳转https://www.jianshu.com/p/f1a8fb7037d7 --同时也有绕过webdriver的方法
# 等待发生跳转,并且获得到标签:<a href="http://sso.oa.wanmei.net/PWForms/logout.html" class="quit">登出</a>,这算登录成功

# 跳转到要爬取的页面
# 课程名=文件夹名=//div[@class="course-info"]/div[@class="title"]
# 视频(多个)=//div[@class="videos"]/div[@class="full-item"]
# <a href="https://seccon.oa.wanmei.net/video-play?video_id=2030" target="_blank">为视频页地址
# <div class="num"><span>1</span></div>为视频编号
# <div class="name">游戏IP与文旅结合案例：杭州完美世界数字沉浸式体验中心(上) -1</div>为视频标题

# 跳转到href中的视频播放页地址(有播放记录的课程可能会弹出提示框,刷新一下即可,(如果没获取到数据,就刷新,最多刷新5次,还是不行就记录并跳过))
# 实测:即使出现提示框,也能得到视频地址.
# 刷新数据,找到media网络数据,状态为206,且结尾为.mp4即可 page.setRequestInterception(true) 内容类型:video/mp4 还有一个Content-Type: text/html; charset=UTF-8 其实也能用..(text这个更早发起,可能更稳定)
# https://github.com/puppeteer/puppeteer/issues/1680 --
# https://pptr.dev/api/puppeteer.page.setrequestinterception/ --请求拦截
# https://learnku.com/docs/puppeteer/3.1.0/class-tracing/8551 --page.tracing.start 估计是会把信息记录到一个json文件,然后我们再解析这个json文件,记得清理
# 下载后,重命名视频标题
# 下载视频 https://blog.csdn.net/weixin_46245322/article/details/104706985
# 下载视频 https://www.cnblogs.com/dcb3688/p/4608037.html --带有进度条

# 截图可以fullpage
# await page.screenshot({
#         path: './files/capture.png',  //图片保存路径
#         type: 'png',
#         fullPage: true //边滚动边截图
#         // clip: {x: 0, y: 0, width: 1920, height: 800}
#     });

# 标识检测 https://intoli.com/blog/not-possible-to-block-chrome-headless/chrome-headless-test.html

import asyncio,os,re,wget,requests
from pyppeteer import launch 
from urllib3.exceptions import InsecureRequestWarning  
requests.urllib3.disable_warnings(InsecureRequestWarning)
'''
#（1）针对requests 2.5.0版本以下的,不包含2.5.0版本
from urllib3.exceptions import InsecureRequestWarning  
#在请求前加入以下代码：　　　　　　requests.urllib3.disable_warnings(InsecureRequestWarning)
（2） 针对requests 2.5.0版本及以上的版本
from requests.packages.urllib3.exceptions import InsecureRequestWarning
#在请求前,加入以下代码　　　　　requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
'''


save_path :str= r'D:\人周一课'
page_list = [
    'http://renzhouyike.oa.wanmei.net/course/enter/videoCoursesDetail.do?videoCoursesId=716'
]

async def main():
    # 启动和配置zh-CN zh-CN,en,en-GB,en-US
    _temp_img = r'D:/_temp_screenshot.png'
    _temp_j_img = r'D:/_temp_jump_screenshot.png'
    _temp_json = r'D:/_temp_json.json'

    browser = await launch(
            headless = False, #True
            args = ['--lang=zh-CN,en,en-GB,en-US']
    )
    page = await browser.newPage()
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.42")
    await page.evaluateOnNewDocument('() =>{ Object.defineProperties(navigator,'
                                     '{ webdriver:{ get: () => false } }) }')
    await page.goto('http://renzhouyike.oa.wanmei.net/course/enter/videoCoursesPlayback.do')
    await page.waitForSelector('body > div > div.main.wrapper_login.media-loginWrapper.media-main.media-loginWrapper-on.media-main-on > div.loginWrap.media-loginWrap.media-loginWrap-on > ul > li.text-left.sao > a')
    await page.click('body > div > div.main.wrapper_login.media-loginWrapper.media-main.media-loginWrapper-on.media-main-on > div.loginWrap.media-loginWrap.media-loginWrap-on > ul > li.text-left.sao > a')
    await page.screenshot({'path': _temp_img})
    await asyncio.sleep(2) #缓一下等图片
    os.startfile(_temp_img) #打开太快了,图片还没写完就打开了.所以是空白的,接完图稍微等会,或者有其他方法知道什么时候截图完毕?
    await page.waitForNavigation() #这里是被动跳转,click引发的主动跳转不能这么用的,要按顶上参考那样用

    # 登录完成
    # os.remove(_temp_img)
    # await page.screenshot({'path': _temp_j_img})
    # await asyncio.sleep(2) #缓一下等图片
    # os.startfile(_temp_j_img)
    # os.remove(_temp_img)
    # await page.waitForSelector('#video-list')

    # 获取全部课程号
    # course_all_list = []
    # course_last_list = []
    # course_current_list = [item.getProperty('data-id').jsonValue() for item in await page.JJ('#video-list > div.video-item')]
    # print(course_current_list)
    # while course_last_list != course_current_list:
    #     course_all_list += course_current_list
    #     course_last_list = course_current_list
    #     await page.click('#list-content > div.page-container > div > a.list-arrow.next.vo-null')
    #     course_current_list = [item.getProperty('data-id').jsonValue() for item in await page.JJ('#video-list > div.video-item')]

    # # 输出
    # print(course_all_list)

    # 退出
    # await browser.close()
    while True:
        await page.waitForNavigation()
asyncio.get_event_loop().run_until_complete(main())
