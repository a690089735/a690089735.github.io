import easyocr
reader = easyocr.Reader(['ch_sim', 'en'], gpu=False)  # 只需要运行一次就可以将模型加载到内存中
result = reader.readtext(
    r'C:\Users\Administrator\Desktop\Snipaste_2022-11-18_10-37-11.png', detail=0)
# for r in result:
#     print(r)
print(result)

# ([[43, 217], [111, 217], [111, 233], [43, 233]], '说朋0.3xlsx', 0.17437481006509292)
# 边框坐标,文本,识别概率
