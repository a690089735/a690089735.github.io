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

dataPath = os.path.join(os.path.dirname(
    sys.argv[0]), r'StableDiffusionTagsLib.json')
with open(dataPath, 'r', encoding='utf-8') as f:
    jsonData: dict = json.load(f)

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
                        f'{parameter}', group)
                    qPushButton.setCheckable(True)
                    # qPushButton.setChecked(True)
                    qPushButton.clicked.connect(
                        lambda: self.buttonClicked(qPushButton, value['text'], value['order']))
                    layout.addWidget(qPushButton)

                container_layout.addWidget(group)
            container_layout.addStretch()
            container.setLayout(container_layout)
            area.setWidgetResizable(True)
            area.setWidget(container)
            self.addTab(area, f'{category}')

    @staticmethod
    def buttonClicked(sender: QPushButton, text: str, order: int):
        sender.setChecked = not sender.isChecked()
        print(f'del:{sender.isChecked()}', text, order)
        # return label


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
            self.setWindowTitle('StableDiffusion词库')

    app = QApplication(sys.argv)
    window = Window()
    window.resize(680, 240)  # 32:9 也有21:9 * 50:20 1050, 180(可以换成40:20)
    window.show()
    sys.exit(app.exec())
