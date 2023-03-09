from PySide6.QtWidgets import (
    QApplication,
    QFrame,
    QLabel,
    QTextBrowser,
    QWidget,
    QApplication,
    QPushButton,
    QScrollArea,
    QVBoxLayout,
    QWidget,
    QGroupBox,
    QTabWidget,
)
from PySide6LayoutComponent import (
    Position,
    BorderLayout,
    FlowLayout,
)
import sys
import random
import json
import os


'''
质量前缀+前置画风引导+前置镜头效果+前置光照效果+[带描述的物X+物X的各种次要物+镜头效果和光照]*X+全局光照效果+全局镜头效果+画风滤镜 作者：日记声音 https://www.bilibili.com/read/cv19552237?from=search 出处：bilibili
质量指示,人物元素,服装饰品,场景元素,画面特效,画风滤镜 -法典
1.Lexica.art
2.KREA.ai
3.promptoMANIA
4.OpenArt.ai
质量指示,画风引导,镜头效果,光照效果,人物元素,服装饰品,场景元素,纹理细节,画面特效,画风滤镜
(强调:1.1)[弱化:1.1]
'''

dataPath = os.path.join(os.path.dirname(
    sys.argv[0]), r'StableDiffusionTagsLib.json')
with open(dataPath, 'r', encoding='utf-8') as f:
    jsonData: dict = json.load(f)

def shortText(t: str) -> str:
    if len(t) > 28:
        return t[:25]+'...'
    else:
        return t
# abstractText('dasddddqwdewd,sddsd34dafdgwrrfsfa,asafafaffd')
# abstractText('dasddddqwdewd,sd')

# 更改布局,让滚动在tabs之下
class WordLibrary(QTabWidget):
    def __init__(self, data: dict = {}):
        super().__init__()
        categorys = jsonData.keys()
        contents = iter(jsonData.values())

        for category in categorys:
            area = QScrollArea(self)
            container = QWidget(area)
            container_layout = QVBoxLayout()

            content = next(contents)
            for header, parameters in content.items():
                group = QGroupBox(f'{header}', container)
                layout = FlowLayout(margin=10)
                group.setLayout(layout)
                layout.heightChanged.connect(group.setMaximumHeight)
                for parameter, value in parameters.items():
                    qPushButton: QPushButton = QPushButton(
                        f'{parameter} {shortText(value["text"])}', group)
                    qPushButton.setCheckable(True)
                    qPushButton.clicked.connect(
                        (lambda qPushButton=qPushButton, text=value["text"], order=value["order"]: self.buttonClicked(qPushButton, text, order)))  # 这里坑了很长时间,lambda表达式在循环中有惰性问题(只在运行时找变量),所以指定一下lambda表达式的默认参数
                    layout.addWidget(qPushButton)

                container_layout.addWidget(group)
            container_layout.addStretch()
            container.setLayout(container_layout)
            area.setWidgetResizable(True)
            area.setWidget(container)
            self.addTab(area, f'{category}')

    @staticmethod  # 不用传self的方法
    def buttonClicked(sender: QPushButton, text: str, order: int):
        sender.setChecked = not sender.isChecked()
        print(sender, sender.text())
        print(f'del:{sender.isChecked()}', text, order)


class ControlBoard(QWidget):
    def __init__(self):
        super().__init__()
        textContent = QTextBrowser()
        borderLayout = BorderLayout()
        borderLayout.addWidget(textContent, Position.Center)

        btn_preset = QPushButton('预设')
        borderLayout.addWidget(btn_preset, Position.North)

        btn_copy = QPushButton('复制')
        borderLayout.addWidget(btn_copy, Position.South)
        btn_random = QPushButton('随机')
        borderLayout.addWidget(btn_random, Position.South)
        btn_clear = QPushButton('清空')
        borderLayout.addWidget(btn_clear, Position.South)

        self.setLayout(borderLayout)


if __name__ == '__main__':
    class Window(QWidget):
        def __init__(self):
            super().__init__()

            wordLibrary = WordLibrary(data=jsonData)  # 左侧数据
            controlBoard = ControlBoard()  # 右侧栏

            # 主窗口设置
            border_layout = BorderLayout()
            border_layout.addWidget(wordLibrary, Position.Center)
            border_layout.addWidget(controlBoard, Position.East)
            self.setLayout(border_layout)
            self.setMinimumWidth(480)
            self.setWindowTitle('AI绘画辞典')

    app = QApplication(sys.argv)
    window = Window()
    window.resize(680, 240)  # 32:9 也有21:9 * 50:20 1050, 180(可以换成40:20)
    window.show()
    sys.exit(app.exec())
