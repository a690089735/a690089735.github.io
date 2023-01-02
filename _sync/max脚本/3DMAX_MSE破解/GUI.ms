mycode = "

import sys
import os
import json
import shutil
import MaxPlus
from PySide import QtGui, QtCore

try:	   

	imagesPath = filePath + '\images'
	posesPath = filePath + '\poses'
	thumbsPath = filePath + '\poses\\\\thumbs'
	tempData = filePath + '\\\\tempData.json'
	   
	deleteListTemp = []
	dict_a = {}
	headerPng = imagesPath + '\headerB.png'
	iconheaderPng = imagesPath + '\iconMPM.png'
	   
	json_data = open(filePath + '\paths.json', 'r').read()
	data = json.loads(json_data)	   

	class _GCProtector(object):
		widgets = [] 
	   
	class MainWindow(QtGui.QWidget):
			  

		def __init__(self):
			super(MainWindow, self).__init__(None, QtCore.Qt.WindowStaysOnTopHint)
				 
			self.setupUI()
		   
		def setupUI(self):

			# MainWindow Properties
			self.setGeometry(50, 50, 300, 600)
			self.setMaximumSize(300, 600)
			self.setWindowTitle('Pose Manager')
			self.setWindowIcon(QtGui.QIcon(iconheaderPng))
	   
			# Buttons
			self.btn_savePose = QtGui.QPushButton('Save Pose')
			self.btn_savePose.setObjectName('Save Pose')
			self.btn_savePose.clicked.connect(self.windowNamePose)
   
			 
			self.btn_deletePose = QtGui.QPushButton('Delete Pose')
			self.btn_deletePose.clicked.connect(self.deletePoseBtn)
			 
			self.btn_saveArchive= QtGui.QPushButton('Save Archive')
			self.btn_saveArchive.setObjectName('Save Archive')
			self.btn_saveArchive.clicked.connect(self.saveArchiveDialog)
			 
			 
			self.btn_loadArchive= QtGui.QPushButton('Load Archive')
			self.btn_loadArchive.clicked.connect(self.loadArchiveDialog)
			 
			self.btn_renamePose= QtGui.QPushButton('Rename Pose')
			self.btn_renamePose.setObjectName('Rename Pose')
			self.btn_renamePose.clicked.connect(self.renameSnapshootDialog)
			 
			self.sliderIconSize = QtGui.QSlider(self)
			self.sliderIconSize.setOrientation(QtCore.Qt.Horizontal)
			self.sliderIconSize.setMinimum(-100)
			self.sliderIconSize.setMaximum(100)				 
			self.sliderIconSize.valueChanged.connect(self.sliderValue)

			# Header and properties
			self.headerImg = QtGui.QLabel()
			self.headerImg.setSizePolicy(QtGui.QSizePolicy.Fixed, QtGui.QSizePolicy.Fixed)
			self.headerImg.setGeometry(300, 100, 0, 0)
			self.headerImg.setMinimumSize(300, 100)
			self.headerImg.setPixmap(QtGui.QPixmap(headerPng))
	   
			# Content for scroll
			self.scrollWidget = QtGui.QWidget()
			self.scrollContent = QtGui.QListWidget(self.scrollWidget)
			self.scrollContent.setIconSize(QtCore.QSize(100, 100))
			self.scrollContent.setGeometry(0, 0, 300, 360)
			self.scrollContent.setViewMode(QtGui.QListView.IconMode)
			self.scrollContent.doubleClicked.connect(self.ApplyPose)
					 
			# Make scroll a set the content
			self.scroll = QtGui.QScrollArea()
			self.scroll.setWidgetResizable(True)
			self.scroll.setWidget(self.scrollWidget)

			# CentralLayout and properties
			self.centralLayout = QtGui.QGridLayout()
			self.centralLayout.setContentsMargins(1,1,1,1)
			self.centralLayout.setSpacing(0)
			 
			# Label for set actual Dir
			self.labelDir = QtGui.QLabel()
			self.labelDir.setText('Current Path : ' + filePath)
			self.labelDir.setToolTip('Current Path : ' + filePath)
			self.labelDir.setMaximumWidth(150)
			 
			# Add widgets to centralayout
			self.centralLayout.addWidget(self.headerImg, 0, 0, 1, 2)
			self.centralLayout.addWidget(self.btn_savePose, 2, 0, 1, 1)
			self.centralLayout.addWidget(self.btn_deletePose, 2, 1, 1, 1)
			self.centralLayout.addWidget(self.scroll, 3, 0, 1, 2)
			self.centralLayout.addWidget(self.btn_saveArchive, 4, 0, 1, 2)
			self.centralLayout.addWidget(self.btn_loadArchive, 5, 0, 1, 2)
			self.centralLayout.addWidget(self.btn_renamePose, 6, 0, 1, 2)
			self.centralLayout.addWidget(self.sliderIconSize, 7, 0, 1, 2)
			self.centralLayout.addWidget(self.labelDir, 8, 0, 1, 2 )
					 
			# set centralLayout as child MainWindow
			self.setLayout(self.centralLayout)

		# Slider for change the icons size       
		def sliderValue(self, value):
			self.scrollContent.setIconSize(QtCore.QSize(100+value, 100+value))
		
		# Insert dict data - name and morph values	 
		def appendDic(self):
		 
			dic_Data = {}
			listData = []
			rotLista = []
			posLista = []
			scaleLista = []
			currentSelection = MaxPlus.SelectionManager.GetNodes()
			currentSelectionCount = MaxPlus.SelectionManager.GetCount()
		 
			for i in range(0, currentSelectionCount):
		 
				nameCtrl = currentSelection[i].GetName()

				posPoint3 = currentSelection[i].GetTMController().GetPositionController().GetPoint3Value()
				posX = posPoint3.GetX()
				posY = posPoint3.GetY()
				posZ = posPoint3.GetZ()
				posLista.append(posX)
				posLista.append(posY)
				posLista.append(posZ)

				rotQuat = currentSelection[i].GetTMController().GetRotationController().GetQuatValue()
				rotX = rotQuat.GetX()
				rotY = rotQuat.GetY()
				rotZ= rotQuat.GetZ()
				rotW = rotQuat.GetW()
				rotLista.append(rotX)
				rotLista.append(rotY)
				rotLista.append(rotZ)
				rotLista.append(rotW)

				scalePoint3 = currentSelection[i].GetTMController().GetScaleController().GetScaleValue().GetS()
				scaleX = scalePoint3.GetX()
				scaleY = scalePoint3.GetY()
				scaleZ = scalePoint3.GetZ()
				scaleLista.append(scaleX)
				scaleLista.append(scaleY)
				scaleLista.append(scaleZ)

				listData.append(posLista)
				listData.append(rotLista)
				listData.append(scaleLista)

				# set keys and values

				dic_Data[nameCtrl] = listData
				dict_a[self.namePose] = dic_Data
				listData = []
				rotLista = []
				posLista = []
				scaleLista = []

			self.updateDic()
			 
		def updateDic(self):
			with open(tempData, 'r') as jsonData:
				data = json.load(jsonData) 
																	 
		data.update(dict_a) 
						 
		with open(tempData, 'w') as jsondata:
			json.dump(dict_a, jsondata, indent=4)                                 
						 

		# Make new window and set name button
		def windowText(self):
			sender = self.sender()
			nameW = sender.objectName()
			MaxPlus.CUI.DisableAccelerators()
			self.nameWindow = QtGui.QWidget(None, QtCore.Qt.WindowStaysOnTopHint)
			self.nameWindow.setWindowTitle(nameW)
			hLayout = QtGui.QHBoxLayout(self.nameWindow)
			self.nameText = QtGui.QLineEdit()
			self.btnOK = QtGui.QPushButton('OK')

			hLayout.addWidget(self.nameText)
			hLayout.addWidget(self.btnOK)

			self.nameWindow.show()

		def windowNamePose(self):
			self.windowText()
			self.btnOK.clicked.connect(self.makePoseBtn)
		 
		# Take snapShoot
		def snapShoot(self):
			snapShootPath = (thumbsPath + '\\\\' + self.namePose + '.png')
			#snapShootPathR = snapShootPath.replace('\\','\\\\')
			view = MaxPlus.ViewportManager.GetActiveViewport()
			bm = MaxPlus.Factory.CreateBitmap()
			storage = MaxPlus.Factory.CreateStorage(7)
			info = storage.GetBitmapInfo()
			bm.SetStorage(storage)
			bm.DeleteStorage()
			res = view.GetDIB(info,bm)
			a = info.SetName(snapShootPath)
			bm.OpenOutput(info)
			bm.Write(info)
			bm.Close(info)
		 
		# Make button and set name 
		def makePoseBtn(self):
			self.namePose = self.nameText.text()
			self.dirPoses = posesPath + '\\\\thumbs'
			if not os.path.exists(self.dirPoses):
				os.makedirs(self.dirPoses)

			icon = QtGui.QIcon(thumbsPath + '\\\\' + self.namePose + '.png')
			self.tableb = QtGui.QListWidgetItem(icon, self.namePose)
			self.scrollContent.addItem(self.tableb)
			self.snapShoot()
			self.nameWindow.close()
			self.appendDic()
	  
		# Apply morph values from Dic
		def ApplyPose(self):
			currentSelection = MaxPlus.SelectionManager.GetNodes()
			currentItem = self.scrollContent.currentItem()
			currentItemName = currentItem.text()
			for i in range(0,2):
				for key in dict_a[currentItemName]:
					inodeName = MaxPlus.INode.GetINodeByName(key)
					inodeName.GetTMController().GetRotationController().SetQuatValue(MaxPlus.Quat (dict_a[currentItemName][key][1][0], dict_a[currentItemName][key][1][1], dict_a[currentItemName][key][1][2], dict_a[currentItemName][key][1][3]))
					inodeName.GetTMController().GetPositionController().SetPoint3Value(MaxPlus.Point3 (dict_a[currentItemName][key][0][0], dict_a[currentItemName][key][0][1], dict_a[currentItemName][key][0][2]))
					inodeName.GetTMController().GetScaleController().SetScaleValue(MaxPlus.ScaleValue(MaxPlus.Point3(dict_a[currentItemName][key][2][0], dict_a[currentItemName][key][2][1], dict_a[currentItemName][key][2][2])))

				MaxPlus.ViewportManager.ForceCompleteRedraw()
				
				
		# Delete button and clear dic values
		def deletePoseBtn(self):
			try:
				self.Qlw_CurrentItem = self.scrollContent.currentItem()
				self.Qlw_Name = self.Qlw_CurrentItem.text()                                  
				deleteRow = self.scrollContent.currentRow()
				self.scrollContent.takeItem(deleteRow)
				dict_a.pop(self.Qlw_Name, None)
				self.updateDic()

				deleteListTemp.append(self.Qlw_Name + '.png')

				if os.path.exists(thumbsPath + '\\\\'  + self.Qlw_Name + '.png'):
					os.remove(thumbsPath + '\\\\'  + self.Qlw_Name + '.png')
			except:
				pass
		def loadArchiveDialog(self): 
			self.fileNameOpen = QtGui.QFileDialog.getOpenFileName(self, 'Open File', os.getenv('HOME'), '*.json')
			fileInfo = QtCore.QFileInfo(self.fileNameOpen[0])
			self.fileDir = fileInfo.absolutePath()
		 
			try:
				dict_a.clear()

				self.labelDir.setText('Current Path\\\\' + self.fileNameOpen[0])

				with open(self.fileNameOpen[0], 'r') as jsonData:
					loadData = json.load(jsonData)

				dict_a.update(loadData)				 

				self.scrollContent.clear()

				for key, value in dict_a.items():
					r = self.fileDir + '/' + 'thumbs/' + key + '.png'
					icon = QtGui.QIcon(r)
					tableLoad = QtGui.QListWidgetItem(icon, key)
					self.scrollContent.addItem(tableLoad)

				for files in os.walk(thumbsPath):
					for i in files[2]:
						os.remove(thumbsPath + '\\\\'  + i)
			except:
				pass

		def saveArchiveDialog(self):
			fileNameSave = QtGui.QFileDialog.getSaveFileName(self, 'Save File', os.getenv('HOME'), '*.json')
			fileInfo = QtCore.QFileInfo(fileNameSave[0])
			fileDir = fileInfo.absolutePath()
			filenamer = fileInfo.baseName()

			try:

				if not os.path.exists(fileDir + '\\\\' + 'thumbs'):
					os.makedirs(fileDir + '\\\\' + 'thumbs')

				file = open (fileNameSave[0], 'w')
				file.write('{}')
				file.close()

				with open(fileNameSave[0], 'r') as jsonData:
					data = json.load(jsonData) 

				data.update(dict_a)

				with open(fileNameSave[0], 'w') as jsondata:
					json.dump(dict_a, jsondata, indent=4, separators=(',', ': '))				 

				for key in dict_a:
					if os.path.exists(thumbsPath + '/' + key + '.png'):
						shutil.copyfile((thumbsPath + '/' + key + '.png'), fileDir + '/' + 'thumbs' + '/' + key + '.png')
						os.remove(thumbsPath + '/' + key + '.png')

				for i in deleteListTemp:
					kk = fileDir + '/' + 'thumbs/' + i
					os.remove(fileDir + '/' + 'thumbs/' + i)

				self.scrollContent.clear()
				dict_a.clear()

			except:
				pass
				
		 
		def renameSnapshootDialog(self):
			self.tempPose = []
			self.currentItem = self.scrollContent.currentItem()
			nameCurrentItem = self.currentItem.text()
			self.tempPose.append(nameCurrentItem)
			self.windowText()
			self.btnOK.clicked.connect(self.renameSnapshoot)
		 
		def renameSnapshoot(self):

			namePose = self.nameText.text()
			self.currentItem.setText(namePose)
			dict_a[namePose] = dict_a.pop(self.tempPose[0])
			print dict_a[namePose]
			
			if os.path.exists(thumbsPath + '\\\\' + self.tempPose[0] + '.png'):
				os.rename(thumbsPath + '\\\\' + self.tempPose[0] + '.png', thumbsPath + '\\\\' + namePose + '.png')
		
			try:
				self.fileNameOpen[0]
				os.rename(self.fileDir + '\\\\thumbs' + '\\\\' + self.tempPose[0] + '.png', self.fileDir + '\\\\thumbs' + '\\\\' + namePose + '.png')
			except:
				pass

			self.nameWindow.close()
	def main():			 

		app = QtGui.QApplication.instance()
		if not app:
			app = QtGui.QApplication([])
		myUI = MainWindow()
		_GCProtector.widgets.append(myUI)	
		myUI.show()
		sys.exit()

	if __name__ == '__main__':
		main()
except SystemExit:
	pass
"
python.Execute mycode