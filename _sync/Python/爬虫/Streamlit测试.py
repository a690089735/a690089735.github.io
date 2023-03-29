import streamlit as st
import streamlit.web.cli as stcli
import sys
#https://www.cnblogs.com/wengzx/p/16837339.html --高阶用法

# 标签页
tab1, tab2 = st.tabs(["类别1", "类别2"])
with tab1:
    st.header('Header1')

with tab2:
    st.header('Header2')

# markdown
st.markdown('Streamlit is **_really_ cool**.')

# 设置网页标题
st.title('This is a title')

# 展示一级标题
st.header('This is a header')

# 展示二级标题
st.subheader('This is a subheader')

# 展示代码，有高亮效果
code = '''def hello():
  print("Hello, Streamlit!")'''
st.code(code, language='python')

# 纯文本
st.text('This is some text.')

# LaTeX 公式
st.latex(r'''
  a + ar + a r^2 + a r^3 + \cdots + a r^{n-1} =
  \sum_{k=0}^{n-1} ar^k =
  a \left(\frac{1-r^{n}}{1-r}\right)
''')

# 按钮
# st.button('开始训练',key =10)

# 输入值
ctx_len = st.number_input('ctx_len-学习时参考的上下文字数,建议512.显存不足就256.', min_value=0, max_value=4096, value=4096, step=1,key =1)


