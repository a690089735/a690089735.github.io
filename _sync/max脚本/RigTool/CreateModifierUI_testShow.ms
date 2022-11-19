try (destroydialog MyRigTool)catch()


rollout unnamedRollout "Untitled" width:162 height:300
(
	spinner spn1 "" pos:[38,52] width:102 height:16 range:[1,12,1] type:#integer scale:1
)
/* 笔记
* #preModifierDeleted: #(node, modifier) 
* #postModifierDeleted: #(node, modifier) 
* callbacks.addScript #postModifierDeleted "checkMyRigToolMark()" id:#checkMyRigToolMark persistent:true --在函数中调用callbacks.notificationParam()来获取callback的返回值
* refs.dependentnodes $.modifiers[1]
*/


/*界面*/
rollout MyRigTool "RigTool0.1" width:120 height:216
(
	
--	变量
	-- 	local CHUI = #()--以后用作中英文切换的界面文字列表
	local modList = #()
	local objList = #()
	local childList = #()
-- 	属性
	/*体部属性*/
	local partCA = attributes partAtts
	(
		Parameters main
		(	
			MyRigToolElement type:#string default:"体部:"
		)
		rollout PartRollout "自定义骨骼属性"
		(
			label lbl1 "--体部--" 
			edittext edt1 "体部名称:"
		)
	)
	/*脊链属性*/
	local spineCA = attributes spineAtts --
	(
		Parameters main
		(	
			MyRigToolElement type:#string default:"脊链:"
		)
		rollout SpineRollout "自定义骨骼属性"
		(
			label lbl1 "--脊链--" 
			edittext edt1 "脊链名称:"
			spinner spn1 "脊链段数:" range:[1,32,1] type:#integer scale:1 align:#right
			button btn1 "指定脊链分段" offset:[-30,0]
			button btn2 "选择所有" offset:[42,-26]
			on SpineRollout open do spn1.value = (refs.dependentnodes selection[1].modifiers[1]).count
			fn depend_filt obj = classof obj.baseobject == BoneGeometry and ((findItem (refs.dependentnodes selection[1].modifiers[1] as array) obj) == 0)
			on btn1 pressed do
			(
				objs = selectByName title:"选择其他脊链分段"  filter:depend_filt buttonText:"确认" showHidden:false
				if objs != undefined do for obj in objs do (if isproperty obj.modifiers[1] #MyRigToolElement do deletemodifier obj 1;addmodifier obj (modPanel.getCurrentObject()))--有多个修改器时,只有最上边的有效
				spn1.value = (refs.dependentnodes selection[1].modifiers[1]).count
			)
			on btn2 pressed do
			(
				select (refs.dependentnodes selection[1].modifiers[1])
			)
		)
	)
	
--	函数
	
	fn getMyRigToolElement = 
	(
		modList = for m in (getclassinstances EmptyModifier) where isproperty m #MyRigToolElement collect m
		objList = #()
		for m in modList do objList += refs.dependentnodes m
		objList = makeUniqueArray objList
		childList = #()
		for o in objList do join childList o
	)
	/*显示名称*/
	fn shownames =
	(
	  gw.setTransform (matrix3 1)
	  for obj in makeuniquearray(objList+childList) where isValidNode obj and not obj.isHiddenInVpt do
	  (
		if obj.isSelected then  color = White else color = Yellow
		gw.text obj.center ((try((for m in obj.modifiers do if isproperty obj.modifiers[1] #MyRigToolElement do exit with m).MyRigToolElement)catch("")) + obj.name) color:color
	  )
	  gw.enlargeUpdateRect #whole
	)
	/*显示轴架*/
	fn showAxis = 
	(
		gw.setTransform (matrix3 1)
		for obj in makeUniqueArray(objList + childList) where isValidNode obj and not obj.isHiddenInVpt do (
			
			local m = obj.transform
			local o = m.translation
			
			local len = (viewport.GetScreenScaleFactor o)*0.075
			
			local dx = [len,0,0] * m
			local dy = [0,len,0] * m
			local dz = [0,0,len] * m
			
			if obj.isSelected then  color = White else color = Yellow
				
			gw.setColor #line red
			gw.Polyline #(o,dx) false
			gw.text dx "x" color:red
			
			gw.setColor #line green
			gw.Polyline #(o,dy) false
			gw.text dy "y" color:green
			
			gw.setColor #line blue
			gw.Polyline #(o,dz) false
			gw.text dz "z" color:blue
		)
		gw.enlargeUpdateRect #whole
	)
	/*添加带有自定义属性的修改器*/
	fn addDefinition obj type = --
	if classof obj.baseobject == BoneGeometry do (
		if isproperty obj.modifiers[1] #MyRigToolElement do deletemodifier obj 1 --如果第一个修改器已经是MyRigTool的元素,那么删除它
		local modf
		case type of
		(
			1:(
				modf = (EmptyModifier name:"体部属性"); Custattributes.add modf partCA baseobject:false;
			)
			2:(
				modf = (EmptyModifier name:"脊链属性"); Custattributes.add modf spineCA baseobject:false;
			)
			3:(
			)
			4:(
			)
			5:(
			)
			6:(
			)
			7:(
			)
			8:(
			)
		)
		addmodifier obj modf;append modList modf
	)
	
--	界面
	listbox lbx1 "定义选中骨骼:" pos:[8,24] width:104 height:8 items:#("体部", "脊链", "肢体", "锁骨", "手掌", "脚掌", "指链", "条链")
	button btn2 "创建绑定" pos:[8,184] width:104 height:24
	edittext edt1 "前缀" pos:[8,163] width:104 height:16
	checkbutton ckb1 "显示方向" pos:[4,2] width:56 height:20
	checkbutton ckb2 "显示名称" pos:[60,2] width:60 height:20

	on MyRigTool close do
	(
		unregisterRedrawViewsCallback showAxis;unregisterRedrawViewsCallback shownames;unregisterRedrawViewsCallback getMyRigToolElement
		redrawViews()
	)
	on MyRigTool open do
	(
		unregisterRedrawViewsCallback showAxis;unregisterRedrawViewsCallback shownames;unregisterRedrawViewsCallback getMyRigToolElement
		redrawViews()
		getMyRigToolElement()
	)
	on lbx1 doubleClicked sel do
	(
		for o in (selection as array) do addDefinition o sel
	)
	on ckb1 changed state do
	(
		if state then (registerRedrawViewsCallback getMyRigToolElement; registerRedrawViewsCallback showAxis) else (unregisterRedrawViewsCallback showAxis; if not ckb2.checked do unregisterRedrawViewsCallback getMyRigToolElement)
		redrawViews()
	)
	on ckb2 changed state do
	(
		if state then (registerRedrawViewsCallback getMyRigToolElement; registerRedrawViewsCallback shownames) else (unregisterRedrawViewsCallback shownames; if not ckb1.checked do unregisterRedrawViewsCallback getMyRigToolElement)
		redrawViews()
	)
)

createdialog MyRigTool