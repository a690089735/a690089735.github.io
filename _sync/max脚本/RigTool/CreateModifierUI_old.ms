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
rollout MyRigTool "RigTool0.1" width:120 height:226
(
--	变量
	-- 	local CHUI = #()--以后用作中英文切换的界面文字列表
	local modList = #()
	local objList = #()
	local showList = #()
	local rigname = "_"
	local separator = "_"
	
--	属性函数
	fn selectdependentnodes = select(refs.dependentnodes selection[1].modifiers[1])
		
-- 	属性
	/*根部属性*/
	local partCA = attributes partAtts
	(
		Parameters main
		(	
			MyRigToolElement type:#string default:"根部"
			ElementName type:#string default:""
		)
		rollout PartRollout "自定义骨骼属性"
		(
			label lbl1 "--根部--" 
			edittext edt1 "根部名称:"
			on edt1 changed t do ElementName = t
			on PartRollout open do (edt1.text = ElementName;selection[1].modifiers[1].name = MyRigToolElement+"属性";max create mode;max modify mode)
		)
	)
	/*体部属性*/
	local spineCA = attributes spineAtts
	(
		Parameters main
		(	
			MyRigToolElement type:#string default:"体部"
			ElementName type:#string default:""
		)
		rollout RootRollout "自定义骨骼属性"
		(
			label lbl1 "--体部--" 
			edittext edt1 "体部名称:"
-- 			spinner spn1 "体部段数:" range:[1,32,1] type:#integer scale:1 align:#right
-- 			button btn1 "指定体部分段" offset:[-40,0]
			button btn1 "选择所有" offset:[52,0]
-- 			on SpineRollout open do spn1.value = (refs.dependentnodes selection[1].modifiers[1]).count
-- 			fn depend_filt obj = classof obj.baseobject == BoneGeometry and ((findItem (refs.dependentnodes selection[1].modifiers[1] as array) obj) == 0)
-- 			on btn1 pressed do
-- 			(
-- 				objs = selectByName title:"选择其他体部分段"  filter:depend_filt buttonText:"确认" showHidden:false
-- 				if objs != undefined do for obj in objs do (if isproperty obj.modifiers[1] #MyRigToolElement do deletemodifier obj 1;addmodifier obj (modPanel.getCurrentObject()))--有多个修改器时,只有最上边的有效
-- 				spn1.value = (refs.dependentnodes selection[1].modifiers[1]).count
-- 			)
			on btn1 pressed do selectdependentnodes()
			on edt1 changed t do ElementName = t
			on RootRollout open do (edt1.text = ElementName;selection[1].modifiers[1].name = MyRigToolElement+"属性";max create mode;max modify mode)
		)
	)
	/*肢部属性*/
	local LimbCA = attributes LimbAtts
	(
		Parameters main
		(	
			MyRigToolElement type:#string default:"肩部"
			ElementName type:#string default:""
		)
		rollout LimbRollout "自定义骨骼属性"
		(
			label lbl1 "--肢部--" 
			edittext edt1 "肢部名称:"
			button btn1 "选择所有" offset:[52,0]
			fn depend_filt obj = classof obj.baseobject == BoneGeometry and ((findItem (refs.dependentnodes selection[1].modifiers[1] as array) obj) == 0)
			on btn1 pressed do selectdependentnodes()
			on edt1 changed t do ElementName = t
			on LimbRollout open do (edt1.text = ElementName;selection[1].modifiers[1].name = MyRigToolElement+"属性";max create mode;max modify mode)
		)
	)
	/*肩部属性*/
	local ShoulderCA = attributes ShoulderAtts
	(
		Parameters main
		(	
			MyRigToolElement type:#string default:"肩部"
			ElementName type:#string default:""
		)
		rollout shoulderRollout "自定义骨骼属性"
		(
			label lbl1 "--肩部--" 
			edittext edt1 "肩部名称:"
			button btn1 "选择所有" offset:[52,0]
			fn depend_filt obj = classof obj.baseobject == BoneGeometry and ((findItem (refs.dependentnodes selection[1].modifiers[1] as array) obj) == 0)
			on btn1 pressed do selectdependentnodes()
			on edt1 changed t do ElementName = t
			on ShoulderRollout open do (edt1.text = ElementName;selection[1].modifiers[1].name = MyRigToolElement+"属性";max create mode;max modify mode)
		)
	)
--	函数
	/*回调获取元素物体*/
	local getMyRigToolElement = 
	@"
	modList = for m in (getclassinstances EmptyModifier) where isproperty m #MyRigToolElement collect m
	objList = #()
	for m in modList do objList += refs.dependentnodes m
	for obj in objList do for i = obj.modifiers.count to 2 by -1  where isproperty obj.modifiers[i] #MyRigToolElement do deletemodifier obj i
	MyRigTool.objList = makeUniqueArray objList
	showList = for o in objList where o.parent != undefined collect o.parent;for o in objList do join showList o
	MyRigTool.showList = makeuniquearray (showList + objList)
	"
	/*显示名称*/
	fn shownames =
	(
	  gw.setTransform (matrix3 1)
	  for obj in showList where isValidNode obj and not obj.isHiddenInVpt do
	  (
		if obj.isSelected then  color = White else color = Yellow
		gw.text obj.center ((try((for m in obj.modifiers do if isproperty obj.modifiers[1] #MyRigToolElement do exit with m).MyRigToolElement + ":")catch("")) + obj.name) color:color
	  )
	  gw.enlargeUpdateRect #whole
	)
	/*显示轴架*/
	fn showAxis = 
	(
		gw.setTransform (matrix3 1)
		for obj in showList where isValidNode obj and not obj.isHiddenInVpt do (
			
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
-- 		for i = obj.modifiers.count to 1 by -1  where isproperty obj.modifiers[i] #MyRigToolElement do deletemodifier obj i --去除所有已经拥有MyRigTool元素属性的修改器
-- 		if isproperty obj.modifiers[1] #MyRigToolElement do deletemodifier obj 1 --如果第一个修改器拥有MyRigTool元素属性
		local modf
		case type of
		(
			1:(
				modf = (EmptyModifier name:"根部属性"); Custattributes.add modf partCA baseobject:false;
			)
			2:(
				modf = (EmptyModifier name:"体部属性"); Custattributes.add modf spineCA baseobject:false;
			)
			3:(
				modf = (EmptyModifier name:"肢部属性"); Custattributes.add modf LimbCA baseobject:false;
			)
			4:(
				modf = (EmptyModifier name:"肩部属性"); Custattributes.add modf shoulderCA baseobject:false;
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
	
	
	fn RigAll n = --提供绑定名前缀
	(
		--0.开发期间可以导入core.ms,使用其中函数,发布时将其中函数包装到卷展栏内.
		filein(getfilenamepath(getThisScriptFilename())+"Croe.ms")
		--1.收集体块,已经在各操作过程中收集到了objList,但保险起见,再收集一次
		execute getMyRigToolElement
		EL = #(#(),#(),#(),#(),#(),#(),#(),#())
		for o in objList do
			case o.modifiers[1].MyRigToolElement of
			(
				"根部":EL[1] += o
				"体部":EL[2] += o
				"肢部":EL[3] += o
				"肩部":EL[4] += o
				"手部":EL[5] += o
				"脚部":EL[6] += o
				"指节":EL[7] += o
				"链条":EL[8] += o
			)
		--2.分组体块

		--3.调用绑定
			--切换为创建面板
			--选择顶级节点,然后切换为修改面板
	)
--	界面
	listbox lbx1 "定义选中骨骼:" pos:[8,24] width:104 height:8 items:#("根部", "体部", "肢部", "肩部", "手部", "脚部", "指节", "链条")
	button btn1 "创建绑定" pos:[8,194] width:104 height:26
	edittext edt1 "命名" pos:[8,152] width:80 height:20 bold:true labelOnTop:true
	edittext edt2 "" pos:[88,170] width:24 height:20 bold:true labelOnTop:true toolTip:"分隔符" text:separator
	checkbutton ckb1 "显示方向" pos:[4,2] width:56 height:20
	checkbutton ckb2 "显示名称" pos:[60,2] width:60 height:20

	on btn1 pressed do RigAll (rigname + separator)
	on lbx1 doubleClicked sel do
	(
		for o in (selection as array) do addDefinition o sel
	)
	/* 回调响应 */
	on edt1 changed t do rigname = t
	on edt2 changed t do separator = t
	on MyRigTool close do
	(
		unregisterRedrawViewsCallback showAxis;unregisterRedrawViewsCallback shownames
		callbacks.removeScripts ID:#getMyRigToolElement
		redrawViews()
	)
	on MyRigTool open do
	(
		unregisterRedrawViewsCallback showAxis;unregisterRedrawViewsCallback shownames
		callbacks.addScript #postModifierAdded getMyRigToolElement ID:#getMyRigToolElement
		callbacks.addScript #postModifierDeleted getMyRigToolElement ID:#getMyRigToolElement
		callbacks.addScript #nodeLinked getMyRigToolElement ID:#getMyRigToolElement
		callbacks.addScript #nodeUnlinked getMyRigToolElement ID:#getMyRigToolElement
		redrawViews()
		execute getMyRigToolElement
	)
	on ckb1 changed state do
	(
		if state then (registerRedrawViewsCallback showAxis) else unregisterRedrawViewsCallback showAxis
		redrawViews()
	)
	on ckb2 changed state do
	(
		if state then registerRedrawViewsCallback shownames else unregisterRedrawViewsCallback shownames
		redrawViews()
	)
)

createdialog MyRigTool