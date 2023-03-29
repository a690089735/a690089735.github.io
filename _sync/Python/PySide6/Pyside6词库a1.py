from PySide6.QtWidgets import (
    QApplication,
    QFrame,
    QLabel,
    # QLayout,
    # QLayoutItem,
    QTextBrowser,
    QWidget,
    # QWidgetItem,
    QApplication, 
    QPushButton, 
    QScrollArea, 
    QVBoxLayout, 
    QWidget, 
    QGroupBox
)
from PySide6LayoutComponent import (
    Position,
    BorderLayout,
    FlowLayout,
)
import sys
import random

if __name__ == '__main__':
    class Window(QWidget):
        def __init__(self):
            super().__init__()

            container = QWidget()
            container_layout = QVBoxLayout()
            for i in range(2):
                g = QGroupBox(f'Group {i}')
                l = FlowLayout(margin=10)
                # l.heightChanged.connect(container.setMinimumHeight)
                g.setLayout(l)
                l.addWidget(QPushButton('Short'))
                l.addWidget(QPushButton('Longer'))
                l.addWidget(QPushButton('Different text'))
                l.addWidget(QPushButton('More text'))
                l.addWidget(QPushButton(random.choice(['大大青蛙挖法实打实打算','大苏打','酷酷酷酷酷酷'])))
                container_layout.addWidget(g)
            container_layout.addStretch()
            container.setLayout(container_layout)

            self.central_widget = QScrollArea()
            self.central_widget.setWidgetResizable(True)
            self.central_widget.setWidget(container)

            border_layout1 = BorderLayout()
            border_layout1.addWidget(self.central_widget, Position.Center)

            # label_east = self.create_label("East 1")
            # border_layout.addWidget(label_east, Position.East)

            # 右侧栏
            textContent = QTextBrowser()

            border_layout2 = BorderLayout()
            border_layout2.addWidget(textContent, Position.Center)

            btn_copy = QPushButton('复制')
            border_layout2.addWidget(btn_copy, Position.South)
            btn_random = QPushButton('随机')
            border_layout2.addWidget(btn_random, Position.South)
            btn_clear = QPushButton('清空')
            border_layout2.addWidget(btn_clear, Position.South)

            container2 = QWidget()
            container2.setLayout(border_layout2)

            #主窗口设置
            border_layout1.addWidget(container2, Position.East)
            self.setLayout(border_layout1)
            self.setWindowTitle("Border Layout")

        @staticmethod
        def create_label(text: str):
            label = QLabel(text)
            label.setFrameStyle(QFrame.Box | QFrame.Raised)
            return label


    app = QApplication(sys.argv)
    window = Window()
    window.resize(640, 180) # 32:9 也有21:9 * 50:20 1050, 180(可以换成40:20)
    window.show()
    sys.exit(app.exec())