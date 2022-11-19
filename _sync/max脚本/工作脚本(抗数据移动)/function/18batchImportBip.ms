/* 批量导动作并保存 */

try(destroydialog Bips_UI)catch()

Bipdir = ""
BIplist = #()

fn getAndSetBipMaxKey = --获取并设置最大帧范围
	(
		maxIndex = 1f
		list = #($Bip*[1].transform.controller.horizontal.controller,$Bip*[1].transform.controller.vertical.controller,$Bip*Hand[1].transform.controller,$Bip*Hand[2].transform.controller,$Bip*Foot[1].transform.controller,$Bip*Foot[2].transform.controller,$Bip*Head[1].transform.controller)
		for bip in list do
		(
			n = 1
			try(
				while true do
				(
					n += 1
					x = (biped.getKey bip n).time	
					if x>maxIndex do maxIndex = x
				)
			)catch()
		)
		animationRange = interval 0 maxIndex
	)

rollout Bips_UI "First Open \"Skin\" File" width:552 height:40
(
	edittext filesBox "BipFilesPath:" pos:[24,8] width:448 height:24
	button btn_Execute "Execute" pos:[480,8] width:64 height:24
	button btn_E "E" pos:[8,8] width:12 height:24

	on btn_E pressed do
	(
		bipdir = getOpenFileName types:"Bipfile(*.bip)|*.bip" historyCategory:"BipFilePresets"
		if bipdir != undefined then 
		(
			bipdir = getfilenamepath(bipdir)
			Biplist = getFiles (bipdir + "*.bip")
			filesBox.text = bipdir
		)
	)
	on btn_Execute pressed  do
	(
		filename = maxfilepath + maxfilename
		for b in biplist do 
		(
			loadMaxFile filename
			bip = $Bip*[1]
			Bip.controller.figureMode = false
			biped.loadBipFile Bip.controller b  #loadMaxObjects
			getAndSetBipMaxKey()
			suffix = getfilenamefile b; suffix = replace suffix 1 2 ""; suffix = substituteString suffix "魔法师" ""; suffix = substituteString suffix "战士" ""; suffix = substituteString suffix "有挂点" ""; suffix = substituteString suffix "男" ""; suffix = substituteString suffix "女" ""; suffix = substituteString suffix "-" ""
			saveMaxFile (substituteString filename "skin" suffix)
		)
		
	)
)

createdialog Bips_UI