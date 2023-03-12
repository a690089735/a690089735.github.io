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
    QHBoxLayout,
    QWidget,
    QGroupBox,
    QTabWidget,
)
from PySide6LayoutComponent import (
    Position,
    BorderLayout,
    FlowLayout,
)
from PySide6.QtCore import (
    Signal
)
import sys
import random
import json
import os

# 支持英中转换(在复制时仍是英文)

'''
质量前缀+前置画风引导+前置镜头效果+前置光照效果+[带描述的物X+物X的各种次要物+镜头效果和光照]*X+全局光照效果+全局镜头效果+画风滤镜 作者：日记声音 https://www.bilibili.com/read/cv19552237?from=search 出处：bilibili
质量指示,人物元素,服装饰品,场景元素,画面特效,画风滤镜 -法典
1.Lexica.art
2.KREA.ai
3.promptoMANIA
4.OpenArt.ai

(强调:1.1)[弱化:1.1]
'''
segments = ["质量指示", "画风引导", "镜头效果", "光照效果", "人物元素", "人物描述", "人物表情",
            "人物动作", "服装饰品", "场景元素", "纹理细节", "Emoji", "画面特效", "画风滤镜", "其他"]
# textContent: QTextBrowser
parameters = [[] for category in segments]

# dataPath = os.path.join(os.path.dirname(sys.argv[0]), r'文本.json')
dataPaths = [
    os.path.join(os.path.dirname(sys.argv[0]), r'文本.json'),
    os.path.join(os.path.dirname(sys.argv[0]), r'Emoji.json')
]
jsonData: dict = {}
for dataPath in dataPaths:
    with open(dataPath, 'r', encoding='utf-8') as f:
        jsonData[os.path.splitext(os.path.split(
            dataPath)[-1])[0]] = json.load(f)
chinese: bool = False


def shortText(t: str) -> str:
    if len(t) > 28:
        return t[:25]+'...'
    else:
        return t


def combineText(strList: list):
    result = ""
    id = 1
    if chinese:
        id = 0
    for strItems in strList:
        for str in strItems:
            result += f'{str[id]},'
    return result[:-1].replace(',', ', ')


# tabs
class WordLibrary(QTabWidget):
    textChange = Signal(str)

    def __init__(self, data: dict = {}):
        super().__init__()
        categorys = data.keys()
        contents = iter(data.values())

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
                    qPushButton.setToolTip(
                        f'{segments[value["order"]]}:{value["text"]}')
                    qPushButton.clicked.connect(
                        (lambda qPushButton=qPushButton, textcn=parameter, texten=value["text"], order=value["order"]: self.buttonClicked(qPushButton, textcn, texten, order)))  # 这里坑了很长时间,lambda表达式在循环中有惰性问题(只在运行时找变量),所以指定一下lambda表达式的默认参数
                    layout.addWidget(qPushButton)

                container_layout.addWidget(group)
            container_layout.addStretch()
            container.setLayout(container_layout)
            area.setWidgetResizable(True)
            area.setWidget(container)
            self.addTab(area, f'{category}')

    def buttonClicked(self, sender: QPushButton, textcn: str, texten: str, order: int):
        if sender.isChecked():
            parameters[order].append([textcn, texten])
        else:
            parameters[order].remove([textcn, texten])
        self.textChange.emit(combineText(parameters))

# board


class ControlBoard(QWidget):
    languageChange = Signal(str)

    def __init__(self):
        super().__init__()
        self.wordLibrary: WordLibrary
        self.textContent = QTextBrowser()
        borderLayout = BorderLayout()
        borderLayout.addWidget(self.textContent, Position.Center)

        btn_preset = QPushButton('预设')
        borderLayout.addWidget(btn_preset, Position.North)
        btn_preset.setEnabled(False)

        # 四功能按钮布局
        layoutV = QVBoxLayout()
        layoutH1 = QHBoxLayout()
        layoutH2 = QHBoxLayout()

        btn_random = QPushButton('随机')
        layoutH1.addWidget(btn_random)
        btn_random.setEnabled(False)

        btn_copy = QPushButton('复制')
        layoutH1.addWidget(btn_copy)

        btn_language = QPushButton('英>中')
        btn_language.setCheckable(True)
        btn_language.clicked.connect(self.language)
        layoutH2.addWidget(btn_language)

        btn_clear = QPushButton('清空')
        btn_clear.clicked.connect(self.clear)
        layoutH2.addWidget(btn_clear)

        layoutV.addLayout(layoutH1)
        layoutV.addLayout(layoutH2)

        widget = QWidget()
        widget.setLayout(layoutV)

        borderLayout.addWidget(widget, Position.South)

        self.setLayout(borderLayout)

    def clear(self):
        global parameters
        for obj in self.wordLibrary.findChildren(QPushButton):
            obj.setChecked(False)
        self.textContent.setText("")
        parameters = [[] for category in segments]

    def language(self):
        global chinese
        sender :QPushButton= self.sender()
        chinese = sender.isChecked()
        if chinese:
            sender.setText('中>英')
        else:
            sender.setText('英>中')
        self.languageChange.emit(combineText(parameters))


if __name__ == '__main__':
    class Window(QWidget):
        def __init__(self):
            super().__init__()

            controlBoard = ControlBoard()  # 右侧栏
            controlBoard.setFixedWidth(320)
            controlBoard.languageChange.connect(
                controlBoard.textContent.setText)

            tabs = QTabWidget()
            for data, value in jsonData.items():
                wordLibrary = WordLibrary(data=value)  # 左侧数据
                tabs.addTab(wordLibrary, data)
                wordLibrary.textChange.connect(
                    controlBoard.textContent.setText)
            # tabs.addTab( QTabWidget(), 'data')

            controlBoard.wordLibrary = tabs
            # help(textContent)
            # textContent.text

            # 主窗口设置
            border_layout = BorderLayout()
            border_layout.addWidget(tabs, Position.Center)
            border_layout.addWidget(controlBoard, Position.East)
            self.setLayout(border_layout)
            self.setMinimumWidth(500)
            self.setWindowTitle('AI绘画辞典0.11')

    app = QApplication(sys.argv)
    window = Window()
    window.resize(980, 460)  # 32:9 也有21:9 * 50:20 1050, 180(可以换成40:20)
    window.show()
    sys.exit(app.exec())
