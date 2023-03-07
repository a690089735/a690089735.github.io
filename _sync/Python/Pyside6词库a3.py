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

class WordLibrary(QScrollArea):
    def __init__(self,data:dict={}):
        super().__init__()
        tabs = QTabWidget()
        tab1 = QWidget()
        tab2 = QWidget()

        container = QWidget()
        container_layout = QVBoxLayout()

        for i in range(2):
            g = QGroupBox(f'Group {i}')
            l = FlowLayout(margin=10)
            # l.heightChanged.connect(self.setMinimumHeight) # 正常是给container,但是出现不变高的问题,临时试试改成self竟然解决了,怕以后有问题,这里记录一下.
            l.heightChanged.connect(container.setMinimumHeight)
            # l.heightChanged.connect(tabs.setMinimumHeight)
            # l.heightChanged.connect(tab1.setMinimumHeight)
            g.setLayout(l)
            l.addWidget(QPushButton('Short'))
            l.addWidget(QPushButton('Longer'))
            l.addWidget(QPushButton('Different text'))
            l.addWidget(QPushButton('More text'))
            l.addWidget(QPushButton(random.choice(['大大青蛙挖法实打实打算','大苏打','锟斤拷囤囤囤'])))
            l.addWidget(QPushButton('Short'))
            l.addWidget(QPushButton('Longer'))
            l.addWidget(QPushButton('Different text'))
            l.addWidget(QPushButton('More text'))
            l.addWidget(QPushButton(random.choice(['大大青蛙挖法实打实打算','大苏打','锟斤拷囤囤囤'])))
            container_layout.addWidget(g)
        container_layout.addStretch()
        container.setLayout(container_layout)

        tabs.addTab(container,"Tab 0")
        tabs.addTab(tab1,"Tab 1")
        tabs.addTab(tab2,"Tab 2")

        # container.setMinimumHeight(1000)
        # container.minimumHeight
        # container
        # tabs.setMinimumHeight(1000)
        # container.setMinimumHeight

        self.setWidgetResizable(True)
        self.setWidget(tabs)

    @staticmethod
    def create_label(text: str):
        label = QLabel(text)
        label.setFrameStyle(QFrame.Box | QFrame.Raised)
        return label

class ControlBoard(QWidget):
    def __init__(self):
        super().__init__()
        textContent = QTextBrowser()
        borderLayout = BorderLayout()
        borderLayout.addWidget(textContent, Position.Center)

        btn_copy = QPushButton('复制')
        borderLayout.addWidget(btn_copy, Position.South)
        btn_random = QPushButton('随机')
        borderLayout.addWidget(btn_random, Position.South)
        btn_clear = QPushButton('清空')
        borderLayout.addWidget(btn_clear, Position.South)

        self.setLayout(borderLayout)

    @staticmethod
    def create_label(text: str):
        label = QLabel(text)
        label.setFrameStyle(QFrame.Box | QFrame.Raised)
        return label

if __name__ == '__main__':
    class Window(QWidget):
        def __init__(self):
            super().__init__()

            wordLibrary = WordLibrary() # 左侧数据
            controlBoard = ControlBoard() # 右侧栏

            #主窗口设置
            border_layout = BorderLayout()
            border_layout.addWidget(wordLibrary, Position.Center)
            border_layout.addWidget(controlBoard, Position.East)
            self.setLayout(border_layout)
            self.setMinimumWidth(480)
            self.setWindowTitle('StableDiffusion词库')

    app = QApplication(sys.argv)
    window = Window()
    window.resize(680, 240) # 32:9 也有21:9 * 50:20 1050, 180(可以换成40:20)
    window.show()
    sys.exit(app.exec())