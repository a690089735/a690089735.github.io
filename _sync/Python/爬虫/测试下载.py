import requests
video_data = requests.get(r'https://seccon.oa.wanmei.net/video/cce30d454f84c3eb3cab4399d630dcb0.mp4', verify=False)#不验证证书

with open("D:/test.mp4", "wb") as video_file:
    video_file.write(video_data.content)

import requests
print(requests.__version__)