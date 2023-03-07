import streamlit as st
import json
import os
import sys

with st.container():
    st.write("This is inside the container")
    for i in range(3):
        st.button('btn_{}'.format(i), help='tip_{}'.format(i))
    # You can call any Streamlit command, including custom components:
#    st.bar_chart(666)

st.write("This is outside the container")

if st.button("the notice you want to show"):
    st.write("content you want to show")

# https://www.cnblogs.com/wengzx/p/16837339.html --高阶用法
with open(os.path.join(os.path.dirname(sys.argv[0]), r'StableDiffusionTagsLib.json'), 'r', encoding='utf-8') as f:
    jsonData = json.load(f)

categorys = jsonData.keys()
contents = iter(jsonData.values())
# 标签页
for tab in st.tabs(categorys):
    with tab:
        try:
            content = next(contents)
            groups = content.keys()
            groupsContents = iter(content.values())
            for group in groups:
                st.header(group)
                # print(group,parameters)
                parameters = next(groupsContents)
                # print(type(parameters))
                # print('\n',group,'---\n',parameters)
                for parameter, value in parameters.items():
                    # print(parameter,value['text'],value['order'])
                    # st.subheader(parameter)
                    st.button(parameter, help=value['text'], kwargs=value)
        except:
            continue

# 设置网页标题
# st.title('AI绘画词库')