/*
created By: Muhammad Fredo Syahrul Alam
Company: studio Kasatmata
E-Mail: muhammadfredo@gmail.com
Start Date: 24 nov 2010
Purpose: to help create morph
Max version 2009

Warning:
-Use this script at your own risk.
*/
macroScript FR_morphTools
category:"Fredo Tools"
buttontext:"FR Morph Tools"
(
	global FR_morphTools_Float
	
	rollout FR_morphTools "FR morph Tools"
	(
		local master= undefined, selected= #(), masterArray=#() --node var
		local leftMaster=#(), rightMaster=#(), centerMaster=#(), tempMaster=#() --vert array master
		local leftNo=#(), rightNo=#(), centerNo=#(), tempNo=#() --num vert master
		local leftArray=#(), rightArray=#(), centerArray=#(), tempArray=#() --vert array selection
		local leftNum=#(), rightNum=#(), centerNum=#(), tempNum=#() --num vert selection
		local channelArray=#(), data1=#(), data2=#() --morpher master data
		local masterHaveMorph=false, masterIsSymmetry=false, selectedIsSymmetry=false, brokenVert=false, isSymmetry=false, data=#() --var check
		local offsetPos=undefined, offsetCord="1"
		
		group "Master Object"
		(
			pickbutton master_pick "Pick" align:#left width:40 across:2 tooltip:"pick master object"
			dropdownlist master_drop align:#right width:130 tooltip:"select and change the master morph object"
			listbox master_list1 height: 3 width:85 readOnly:true across:2
			listbox master_list2 height: 3 width:85 readOnly:true
			button master_addMorph "add Morpher" align:#left tooltip:"add modifier morpher" width:85 across:2
			button master_removeMaster "Remove Master" align:#right tooltip:"remove selected dropdown master" width:85
			button master_refresh "Refresh" align:#left tooltip:"update selected dropdown master" width:85 across:2
			button master_copy "Copy" align:#right tooltip:"copy master" width:85
		)
		group "Offset"
		(
			radiobuttons offset_radio "" align:#left labels:#("X:", "Y:","Z:") columns:3 across:2
			spinner offset_num "" align:#right width:60 range:[-500,500,0]
		)
		group "Morpher"
		(
			dropdownlist morpher_channel "Channel : " align:#left width:180 tooltip:"channel morph list" across:2
			label morpher_number align:#left
			slider morpher_slider range:[0,100,0] align:#right
			button morpher_reset "Reset all value" align:#left tooltip:"reset all value channel morph" width:85 across:2
			checkbutton morpher_channelEdit "Edit Channel" align:#right tooltip:"edit target morph selected channel" width:85
			button morpher_extract "Extract" align:#left tooltip:"extract selected channel" width:85 across:2
			button morpher_clear "Clear channel" align:#right tooltip:"delete selected channel" width:85
		)
		group "Selection"
		(
			button selection_mirror "Mirror Morph" align:#left tooltip:"mirror selected object as a new object" width:85 across:2
			button selection_symmetry "Symmetry Morph" align:#right tooltip:"symmetry selected object" width:85
			button selection_minToPlus "- to +" align:#left tooltip:"min vert to plus vert" width:85 across:2
			button selection_plusToMin "+ to -" align:#right tooltip:"plus vert to min vert" width:85
			button selection_flipSymmetry "Flip Symmetry" align:#center tooltip:"symmetry selected object" width:175
			button selection_toChannel "Send to Channel" align:#left tooltip:"send selected object to master morph channel" width:175
		)
		--function list
		fn get_masterArray master=
		(
			check=findItem masterArray master
			if check == 0 then
			(
				append masterArray master
				master_drop.items = for i=1 to masterArray.count collect masterArray[i].name
				master_drop.selection = masterArray.count
			)else(messagebox "Object already picked." Title:"Morph Tools Error")
		)
		fn get_selectionArray=
		(
			selectionArray=for i in selection where classof i.baseobject==Editable_Poly collect i
			selectionArray
		)
		fn get_vert obj=
		(
			local left=#(), right=#(), center=#(), temp=#() --local vert pos array
			local numL=#(), numR=#(), numC=#(), numT=#() --local vert number array
			isSymmetry=false; brokenVert=false; totalVert --normalize check
			objPoly=obj.baseobject
			if classOf objPoly==Editable_Poly do
			(
				totalVert=polyOp.getNumVerts objPoly
				t=0.5
				for i=1 to totalVert do
				(
					vert=polyOp.getVert objPoly i
					if vert[1] <t and vert[1]>-t do
					(
						append numC i
						append center vert
					)
					if vert[1]>t do
					(
						append numR i
						append right vert
					)
					if vert[1]<-t do
					(
						append numT i
						append temp vert
					)
				)
				for j=1 to temp.count do
				(
					bool=finditem (temp) ([-right[j][1], right[j][2], right[j][3]])
					if bool == 0 do
					(
						brokenVert=true
						exit
					)
					newArray=temp[bool]
					newNum=numT[bool]
					append numL newNum
					append left newArray
				)
			)
			if right.count == temp.count and center.count>0 and ((right.count+temp.count+center.count)==totalVert)do
			(
				isSymmetry=true
			)
			data=#(left,numL,right,numR,center,numC,temp,numT)
		)
		fn check_morphMaster master=
		(
			masterHaveMorph=false; channelArray=#(); data1=#(); data2=#()
			for m in master.modifiers do
			(
				if classOf m==morpher do
				(
					masterHaveMorph=true
				)
			)
			if masterHaveMorph==true then
			(
				obj=master.morpher
				for i=1 to 100 do
				(
					a = WM3_MC_HasData obj i
					if a==true do
					(
						chn=WM3_MC_GetName obj i
						append channelArray chn
					)
				)
				morpher_channel.items = channelArray
				morpher_slider.enabled=true
				if channelArray.count > 0 then
				(
					morpher_channel.selection = (channelArray.count)
					morpher_number.text=morpher_channel.selection as string
				)
				else
				(
					morpher_slider.value=0
					morpher_slider.enabled=false
					morpher_number.text=""
				)
			)
			else
			(
				morpher_channel.items = channelArray
				morpher_slider.enabled=false
				morpher_number.text=""
			)
			get_vert master
			masterIsSymmetry=isSymmetry
			data1=#("Symmetry: "+masterIsSymmetry as string, "Morpher: "+masterHaveMorph as string, "Channel: "+channelArray.count as string)
			data2=#("Center: "+(data[5].count) as string, "Right: "+(data[3].count) as string, "left: "+(data[7].count) as string)
			master_list1.items= data1
			master_list2.items= data2
		)
		fn check_offsetRadio state=
		(
			case state of
			(
				1:( offsetCord = "1" )
				2:( offsetCord = "2" )
				3:( offsetCord = "3" )
			)
		)
		fn do_extract numChannel=
		(
			master=masterArray[master_drop.selection]
			newTarget=copy master
			for m in newTarget.modifiers do
			(
				if classOf m==TurboSmooth do
				(
					deleteModifier newTarget 1
				)
			)
			objTarget=newTarget.morpher
			objMorph=master.morpher
			
			WM3_MC_SetValue objTarget numChannel 100.00
			new=snapshot newTarget
			delete newTarget
			convertto new editable_poly
			objMorph.Autoload_of_targets =1
			WM3_MC_BuildFromNode objMorph numChannel new
			
			new
		)
		fn do_copyMaster=
		(
			master=masterArray[master_drop.selection]
			newObj=copy master
			newObj.wireColor=master.wireColor
			counted=newObj.modifiers.count
			if counted > 0 do
			(
				for i=1 to counted do deleteModifier newObj 1
			)
			
			newObj
		)
		fn do_mirror selected=
		(
			target=do_copyMaster()
			target.wireColor=selected.wireColor
			copyT=copy target
			hide copyT
			pos=target.pos
			inv=target.objecttransform
			
			addModifier copyT (Morpher Autoload_of_targets:1)
			meshList=copyT.Morpher
			WM3_MC_BuildFromNode meshList 1 selected
			addModifier copyT (Mirror ())
			center=copyT.Mirror
			center.mirror_center[1].value = pos * (inverse inv)
			
			addModifier target (Skin_Wrap falloff:0.001 distance:0.001 faceLimit:1 engine:1 meshList:#(copyT))
			set animate on
			sliderTime = 0f
			WM3_MC_SetValue meshList 1 100.00
			set animate off
			convertto target editable_poly
			delete copyT
			target.pos = selected.pos
			target
		)
		fn do_symetry selected=
		(
			target=selected --selection object to new var
			copyS1=copy target --build side no 1(copy from selected)
			hide copyS1
			copyS1.name="copyS1"
			copyM=do_copyMaster() --build morph obj to make symmetry
			hide copyM
			copyM.transform = target.transform --move morph obj to selected obj
			copyM.name="copyM"
			copyS2=do_mirror copyS1--build side no 2(copy from morph(have normal vert))
			copyS2.transform = target.transform
			copyS2.name="copyS2"
			
			addModifier copyM (Morpher Autoload_of_targets:1)
			copyMm=copyM.morpher
			WM3_MC_BuildFromNode copyMm 1 copyS1
			WM3_MC_SetValue copyMm 1 100.00
			addModifier target (Skin_Wrap falloff:0.001 distance:0.001 faceLimit:1 engine:1 meshList:#(copyM))
			
			set animate on
			sliderTime = 0f
			WM3_MC_BuildFromNode copyMm 2 copyS2
			WM3_MC_SetValue copyMm 2 100.00
			set animate off
			delete copyS1
			delete copyS2
			convertto target editable_poly
			delete copyM
			target
		)
		fn do_mirorVert var=
		(
			rightArray=#();leftArray=#()
			selected=get_selectionArray()
			selected=selected[1].baseobject
			rightNum=for i in data[4] collect i
			leftNum=for j in data[2] collect j
			for r1 in rightNum do
			(
				vert=polyOp.getVert selected r1
				append rightArray vert
			)
			for l1 in leftNum do
			(
				vert=polyOp.getVert selected l1
				append leftArray vert
			)
			
			if var==1 do
			(				
				for r2=1 to rightNum.count do
				(
					polyOp.setVert selected rightNum[r2] ([-leftArray[r2][1],leftArray[r2][2],leftArray[r2][3]])
				)
			)
			if var==2 do
			(
				for l2=1 to leftNum.count do
				(
					polyOp.setVert selected leftNum[l2] ([-rightArray[l2][1],rightArray[l2][2],rightArray[l2][3]])
				)
			)
			if var==3 do
			(
				for r2=1 to rightNum.count do
				(
					polyOp.setVert selected rightNum[r2] ([-leftArray[r2][1],leftArray[r2][2],leftArray[r2][3]])
				)
				for l2=1 to leftNum.count do
				(
					polyOp.setVert selected leftNum[l2] ([-rightArray[l2][1],rightArray[l2][2],rightArray[l2][3]])
				)
			)
		)
		fn do_offset obj=
		(
			state=execute (offsetCord)
			oldPos=obj.pos
			pos=offset_num.value
			newPos=oldPos[state]+pos
			oldPos[state]=newPos
			obj.pos=oldPos
		)
		fn edit_selectedChannel state=
		(
			master=masterArray[master_drop.selection]
			master=master.morpher
			master.Autoload_of_targets =0
			if state==true then
			(
				master.Autoload_of_targets =1
				if morpher_channel.items.count > 0 do
				(
					morpher_slider.enabled = false
					num=morpher_channel.selection
					for i=1 to channelArray.count do
					(
						WM3_MC_SetValue master i 0.00
					)
					WM3_MC_SetValue master num 100.0
					val=WM3_MC_GetValue master num
					morpher_slider.value=val
				)
			)
			else
			(
				if morpher_channel.items.count > 0 do
				(
					morpher_slider.value = 0
					morpher_slider.enabled = true
					num=morpher_channel.selection
					for i=1 to channelArray.count do
					(
						WM3_MC_SetValue master i 0.00
					)
					val=WM3_MC_GetValue master num
					morpher_slider.value=val
				)
			)
		)
		fn set_toChannel selected=
		(
			master=masterArray[master_drop.selection]
			master=master.morpher
			num=channelArray.count
			num=num+1
			master.Autoload_of_targets =1
			
			for j=num to selected.count do
			(
				boolName=(morpher_channel.items as string)
				nama=selected[num].name
				pattren1 = append "*"  nama
				pattren2 = append  pattren1 "*"
				bool = matchPattern boolName pattern:pattren2
				if bool == false then
				(
						WM3_MC_BuildFromNode master j selected[j]
				)else(messageBox "Morph Target name has been entered" Title:"Morph Tools Error")
			)
			master=masterArray[master_drop.selection]
			check_morphMaster master
		)
		
		on master_pick picked master do
		(
			get_masterArray master
			if masterArray.count > 0 do
			(
				check_morphMaster master
			)
		)
		on master_drop selected list do
		(
			master = masterArray[list]
			select master
			check_morphMaster master
		)
		on master_addMorph pressed do
		(
			if masterHaveMorph==false and masterArray.count > 0 do
			(
				master = masterArray[master_drop.selection]
				local turbo=false
				for m in master.modifiers do
				(
					if classOf m==turbosmooth do
					(
						turbo=true
					)
				)
				if turbo==true then
				(
					addmodifier master (morpher()) before:1
				)
				else
				(
					addmodifier master (morpher())
				)
				check_morphMaster master
			)
		)
		on master_removeMaster pressed do
		(
			if masterArray.count > 0 do
			(
				num=master_drop.selection
				deleteItem masterArray num
				deleteItem master_drop.items num
				master_drop.items=master_drop.items
				if masterArray.count > 0 then
				(
					master_drop.selection = masterArray.count
					master=masterArray[master_drop.selection]
					check_morphMaster master
				)
				else
				(
					master_drop.items=#()
					master_list1.items=#()
					master_list2.items=#()
					morpher_channel.items=#()
					morpher_number.text=""
				)
			)
		)
		on master_refresh pressed do
		(
			if masterArray.count > 0 do
			(
				master=masterArray[master_drop.selection]
				check_morphMaster master
			)
		)
		on master_copy pressed do
		(
			if masterArray.count > 0 do
			(
				obj=do_copyMaster()
				do_offset obj
				select obj
			)
		)
		
		on offset_radio changed state do
		(
			check_offsetRadio state
		)
		
		on morpher_channel selected list do
		(
			if morpher_channel.items.count > 0 do
			(
				master=masterArray[master_drop.selection]
				if morpher_channelEdit.state == true do
				(
					state=true
					edit_selectedChannel state
					obj = execute ("$"+channelArray[list])
					select obj
				)
				obj=master.morpher
				val=WM3_MC_GetValue obj list
				morpher_slider.value=val
				morpher_number.text=morpher_channel.selection as string
			)
		)
		on morpher_slider changed val do
		(
			if morpher_channel.items.count > 0 do
			(
				master=masterArray[master_drop.selection]
				obj=master.morpher
				if morpher_channel.items.count > 0 do
				(
					num =morpher_channel.selection
					WM3_MC_SetValue obj num val
				)
			)
		)
		on morpher_reset pressed do
		(
			if morpher_channel.items.count > 0 do
			(
				master=masterArray[master_drop.selection]
				obj=master.morpher
				for i=1 to channelArray.count do
				(
					WM3_MC_SetValue obj i 0.0
				)
				morpher_slider.value=0
			)
		)
		on morpher_channelEdit changed state do
		(
			if morpher_channel.items.count > 0 do
			(
				edit_selectedChannel state
			)
		)
		on morpher_extract pressed do
		(
			if morpher_channel.items.count > 0 do
			(
				numChannel=morpher_channel.selection
				obj=do_extract numChannel
				do_offset obj
				select obj
			)
		)
		on morpher_clear pressed do
		(
			if morpher_channel.items.count > 0 do
			(
				master=masterArray[master_drop.selection]
				objMorph=master.morpher
				for i=1 to channelArray.count do
				(
					WM3_MC_Delete objMorph i
				)
				check_morphMaster master
			)
		)
		
		on selection_mirror pressed do with undo "Morph Tool" on
		(
			selected=get_selectionArray()
			if selected.count > 0 and masterArray.count > 0 do
			(
				obj=do_mirror selected[1]
				do_offset obj
				select obj
			)
		)
		on selection_symmetry pressed do with undo "Morph Tool" on
		(
			selected=get_selectionArray()
			if selected.count > 0 and masterArray.count > 0 do
			(
				obj=do_symetry selected[1]
				select obj
			)
		)
		on selection_minToPlus pressed do with undo "Morph Tool" on
		(
			selected=get_selectionArray()
			if selected.count > 0 and masterArray.count > 0 do
			(
				if brokenVert==false then
				(
					do_mirorVert 1
				)else(messageBox "your object vertices are broken, use mirror morph" Title:"Morph Tools Error")
			)
		)
		on selection_plusToMin pressed do with undo "Morph Tool" on
		(
			selected=get_selectionArray()
			if selected.count > 0 and masterArray.count > 0 do
			(
				if brokenVert==false then
				(
					do_mirorVert 2
				)else(messageBox "your object vertices are broken, use mirror morph" Title:"Morph Tools Error")
			)
		)
		on selection_flipSymmetry pressed do with undo "Morph Tool" on
		(
			selected=get_selectionArray()
			if selected.count > 0 and masterArray.count > 0 do
			(
				if brokenVert==false then
				(
					do_mirorVert 3
				)else(messageBox "your object vertices are broken, use mirror morph" Title:"Morph Tools Error")
			)
		)
		on selection_toChannel pressed do with undo "Mirror Morph" on
		(
			selected=get_selectionArray()
			if selected.count > 0 and masterArray.count > 0 do
			(
				if masterHaveMorph != false do
				(
					set_toChannel selected
				)
			)
		)
	)
	try
	(
		cui.UnRegisterDialogBar FR_morphTools_Float
		closerolloutfloater FR_morphTools_Float
	)
	catch()
	FR_morphTools_Float = newrolloutfloater "FR morph Tools" 215 450
	addrollout FR_morphTools FR_morphTools_Float
	cui.RegisterDialogBar FR_morphTools_Float style:#(#cui_dock_vert,#cui_floatable,#cui_handles)
)