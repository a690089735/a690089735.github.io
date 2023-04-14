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
from PySide6.QtGui import QIcon
from PySide6LayoutComponent import (
    Position,
    BorderLayout,
    FlowLayout,
)
from PySide6.QtCore import Signal
import sys
import random
import json
import os
import pyperclip
import natsort

# 基本功能
# 支持动态布局
# 支持json数据
# 按规则组合描述词
# 支持英中转换(在复制时仍是英文)
# 添加按钮提示

# 版12
# 复制到剪贴板
# 按颜色标注词块

# 版14
# 添加计数功能,即已选词在选项卡体现数量
# 允许扩展JSON
# 删除预设功能,因为在支持可扩展JSON之后,预设功能可被替代,并且更效果不如扩展JSON好
# 更名为<描述词库>1是工具本质是辅助创建描述词,与SD和AI绘画不相互依赖.2是辞典一词更像是固有的收藏,词库更像是可以随意增删改查的

# 本版15
# 分离类型提示的设置到hint.set,这个文件本质也是个json文件,只是把后缀名和词库区分了一下.但是为了避免类型数量不匹配可能导致的意外情况,这里目前还是固定15个描述类型.
# 重新规划了15个分类提示

# 待做:
# 可调功能区宽度
# [可选]在按钮上提供预览图

# 低优先级待做:
# 词库维护功能:
#   添加一个加号按钮,可通过UI,为词库增加词条(可能导致框架重做,比较麻烦)
#   为按钮添加右键菜单,用于从词库中删除词条(可能导致框架重做,比较麻烦)
#   为按钮添加拖放,用于对词条排序(可能导致框架重做,比较麻烦,并且处理拖放和拖放位置特别麻烦)
#   一旦添加了这些功能,必定还要在标签栏添加一个新建标签的按钮,基于文件的总分类要一个,基于描述类型的分类要一个,基于分组的类型要一个.每一个都要控制不同细度的数据.
#   加了添加的功能,删除功能不能不做吧?
#   加了添加和删除,排序功能也得有吧?
#   !所以说,现在让用户手动维护json词库就能低成本满足以上需求,而且开放度还更高,还能限制用户别搞太繁杂的词库,最后自己都懒得翻了.

# 不再计划:
# 优化和扩展词库,用户依然可以自己定义词库,并且在支持可扩展JSON之后用户的自由度更高了
# 保存和加载预设,删除预设功能,因为在支持可扩展JSON之后,预设功能可被替代,并且更效果不如扩展JSON好
# 随机功能[实现特别复杂(比如要考虑不能重复随机,并且不同分类之间也不能重复随机,要考虑随机权重,要考虑不同类型的描述词的随机个数),却几乎没啥用...还不如手动随便点几个东西来的快.]
"""
质量前缀+前置画风引导+前置镜头效果+前置光照效果+[带描述的物X+物X的各种次要物+镜头效果和光照]*X+全局光照效果+全局镜头效果+画风滤镜                                       作者：日记声音 https://www.bilibili.com/read/cv19552237?from=search 出处：bilibili
质量指示,人物元素,服装饰品,场景元素,画面特效,画风滤镜 -法典
1.Lexica.art
2.KREA.ai
3.promptoMANIA
4.OpenArt.ai

语法 (强调:1.1)[弱化:1.1] 混合A|混合B [渐变A:渐变B:中割步数或比值] [迭代A|迭代B|迭代C|迭代D|迭代...]
"""
hint = os.path.join(os.path.dirname(sys.argv[0]), r"hint.set")
with open(hint, "r", encoding="utf-8") as f:
    hintData: dict = json.load(f)
"""
    "质量指示",
    "画风引导","镜头效果","光照效果",
    "人物元素","人物描述","人物表情","人物动作","服装饰品",
    "场景元素","纹理细节","Emoji",
    "画面特效","画风滤镜",
    "其他"
"""
""" 提示类型:从粗到细, 从大到小, 从上到下
    1预设指示(模型Tag等),2质量指示,3画风引导:大体类型比如画作类型,特定画风等,比如二次元,写实,NSFW # 画质画风
    4镜头效果,5光照效果,6画面结构:背景,构图等,7画面内容主体(景,人,事,物),8内容主要特征(特点,动作,动态,表情), # 画面主体
    9场景细节(元素),0主体描写(景,人,事,物 的 细节:比如次要动作,次要外观,元素,纹理,配套道具:比如服装,饰品,挂件) # 画面细节
    1艺术风格:细致的艺术风格,比如某个艺术家等, 2画面特效:比如粒子,光晕等后期效果等,不如不同渲染器等, 3画风滤镜:比如embedding tag,lora等 # 风格参考
    4其他:补充内容, 5未分类
    Emoji应该按描述拆分提示类型
"""
hints = []
colors = []
for k, v in hintData.items():
    hints.append(k)
    colors.append(v)

parameters = [[] for category in hints]

icon = os.path.join(os.path.dirname(sys.argv[0]), r"icon.ico")
# 将这里拆分为可自动读取配置
dataPaths = []
for root, dirs, files in os.walk(os.path.dirname(sys.argv[0])):
    dataPaths = natsort.os_sorted([os.path.join(root, file) for file in files if file[-5:].lower() == ".json"])
    break

jsonData: dict = {}
for dataPath in dataPaths:
    with open(dataPath, "r", encoding="utf-8") as f:
        jsonData[os.path.splitext(os.path.split(dataPath)[-1])[0]] = json.load(f)

showName: bool = False

categorysSelectedCount: list = [0 for i in dataPaths]


def shortText(t: str) -> str:
    if len(t) > 28:
        return t[:25] + "..."
    else:
        return t


def combineText(strList: list, showName: bool = False, color: bool = False):
    result = ""
    tid = 1
    if showName:
        tid = 0
    cid = -1
    for strItems in strList:
        cid += 1
        if color:
            result += f"<span style='background-color:{colors[cid]}'>"
        for str in strItems:
            result += f"{str[tid]},"
        if color:
            result += "</span>"
    return result.replace(",</span>", "</span>").replace(",", ", ")


# tabs
class WordLibrary(QTabWidget):

    dataName = ""
    libraryIndex = 0
    categorys = []
    selectionCount = []

    textChange = Signal(str)
    selectionChanged = Signal(int, str)

    def __init__(self, data: dict = {}):
        super().__init__()
        categorys = data.keys()
        contents = iter(data.values())
        self.categorys = [c for c in categorys]
        # categoryMax = -1

        for category in categorys:
            # categoryMax += 1
            self.selectionCount.append(0)
            area = QScrollArea(self)
            container = QWidget(area)
            container_layout = QVBoxLayout()

            content = next(contents)
            for header, parameters in content.items():
                group = QGroupBox(f"{header}", container)
                layout = FlowLayout(margin=10)
                group.setLayout(layout)
                layout.heightChanged.connect(group.setMaximumHeight)
                for parameter, value in parameters.items():
                    # value: dict = value
                    qPushButton: QPushButton = QPushButton(f'{parameter} {shortText(value["text"])}', group)
                    qPushButton.setCheckable(True)
                    qPushButton.setToolTip(f'{hints[value["order"]]}:{value["text"]}')

                    qPushButton.clicked.connect(
                        (lambda qPushButton=qPushButton, textcn=parameter, texten=value['text'], order=value['order'], categoryIndex=self.count(), categoryName=category: self.buttonClicked(qPushButton, textcn, texten, order, categoryIndex, categoryName)
                        ))  # 这里坑了很长时间,lambda表达式在循环中有问题(只在运行时找变量,所以只有最后一个变量有效),所以指定一下lambda表达式的默认参数
                    layout.addWidget(qPushButton)

                container_layout.addWidget(group)
            container_layout.addStretch()
            container.setLayout(container_layout)
            area.setWidgetResizable(True)
            area.setWidget(container)
            self.addTab(area, f"{category}")

    def buttonClicked(
        self,
        sender: QPushButton,
        textcn: str,
        texten: str,
        order: int,
        categoryIndex: int,
        categoryName: int,
    ):
        if sender.isChecked():
            parameters[order].append([textcn, texten])
            self.selectionCount[categoryIndex] += 1
        else:
            parameters[order].remove([textcn, texten])
            self.selectionCount[categoryIndex] -= 1

        self.textChange.emit(combineText(parameters, showName=showName, color=True))
        # tabName = ""
        if self.selectionCount[categoryIndex] > 0:
            tabName = f"{categoryName} {self.selectionCount[categoryIndex]}"
        else:
            tabName = categoryName
        self.setTabText(categoryIndex, tabName)
        allSelectionCount = sum(self.selectionCount)
        if allSelectionCount > 0:
            parentTabName = f"{self.dataName} {allSelectionCount}"
        else:
            parentTabName = f"{self.dataName}"
        self.selectionChanged.emit(self.libraryIndex, parentTabName)

    def clearSelection(self):
        # self.selectionCount = []
        for i in range(self.count()):
            self.setTabText(i, self.categorys[i])
            self.selectionCount[i] = 0
        tabName = self.dataName
        self.selectionChanged.emit(self.libraryIndex, tabName)


# board
class ControlBoard(QWidget):
    showNameChange = Signal(str)

    tabsRef: list[WordLibrary] = []

    def __init__(self):
        super().__init__()
        self.wordLibrary: WordLibrary
        self.textContent = QTextBrowser()
        borderLayout = BorderLayout()
        borderLayout.addWidget(self.textContent, Position.Center)

        lbl_title = QLabel("描述词预览")
        borderLayout.addWidget(lbl_title, Position.North)
        lbl_title.setDisabled(True)

        # 四功能按钮布局
        layoutV = QVBoxLayout()
        layoutH1 = QHBoxLayout()
        layoutH2 = QHBoxLayout()

        btn_random = QPushButton("随机")
        layoutH1.addWidget(btn_random)
        btn_random.setEnabled(False)

        btn_copy = QPushButton("复制")
        btn_copy.clicked.connect(self.copyText)
        layoutH1.addWidget(btn_copy)

        btn_language = QPushButton("英>中")
        btn_language.setCheckable(True)
        btn_language.clicked.connect(self.language)
        layoutH2.addWidget(btn_language)

        btn_clear = QPushButton("清空")
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
        parameters = [[] for category in hints]
        for tab in self.tabsRef:
            tab.clearSelection()

    def language(self):
        global showName
        sender: QPushButton = self.sender()
        showName = sender.isChecked()
        if showName:
            sender.setText("中>英")
        else:
            sender.setText("英>中")
        self.showNameChange.emit(combineText(parameters, showName=showName, color=True))

    def copyText(self):
        pyperclip.copy(combineText(parameters, showName=False))


if __name__ == "__main__":

    class Window(QWidget):

        def __init__(self):
            super().__init__()

            controlBoard = ControlBoard()  # 右侧栏
            controlBoard.setFixedWidth(320)
            controlBoard.showNameChange.connect(controlBoard.textContent.setText)

            # 添加选项卡
            tabs = QTabWidget()
            i = -1
            for data, value in jsonData.items():
                i += 1
                wordLibrary = WordLibrary(data=value)  # 左侧数据
                wordLibrary.libraryIndex = i  # 标记选项卡编号
                wordLibrary.dataName = data
                tabs.addTab(wordLibrary, data)
                wordLibrary.textChange.connect(controlBoard.textContent.setText)
                wordLibrary.selectionChanged.connect(tabs.setTabText)
                controlBoard.tabsRef.append(wordLibrary)

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
            self.setWindowTitle("描述词库0.14")

    app = QApplication(sys.argv)
    app.setWindowIcon(QIcon(icon))
    window = Window()
    window.resize(980, 460)  # 32:9 也有21:9 * 50:20 1050, 180(可以换成40:20)
    window.show()
    sys.exit(app.exec())
