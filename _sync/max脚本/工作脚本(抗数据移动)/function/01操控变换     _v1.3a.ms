try(destroyDialog ControlTans1_3Rollout)catch()
--将缓存记录到硬盘,节省内存,容灾,可跨场景,可跨版本(使用sysInfo.tempdir)
--待做:收集物体时,
rollout ControlTans1_3Rollout "操控变换1.3" width:168 height:306
(
	local
	sel1 = #(),
	sel2 = #(),
	--变换剪贴板
	bufferTM = #(),--每物体
	bufferTMPerKeys = #(),--每物体每帧
	bufferAllKeys = #(),--每物体的关键帧
	--选择剪贴板
	buffer_selected_names=#(),--记录物体名
	--相对变换剪贴板
	RelList = #(),
-- 	refobj,
	--塌陷剪贴板
	times = #(),
	selt = #(),
	frames = #(),
	selft = #()
	

	fn buildTransform \
	axis:"x"				--镜像轴
	flip:"x"				--翻转轴
	otm:(matrix3 1) 		--源物体的变换
	tm:(matrix3 1) 			--要镜像的变换(可能是复制的变换而不是原物体的变换)
	pivotTm:(matrix3 1) 	--镜像参考
	mirrorPos:true
	mirrorRot:true
	=						/*By Mike Biddlecombe and Paul Neale.  I'm just ripping it off!*/ --翻转变换的原作者(们),我只是整理和扩展了一下,便于适配我自己的实际情况.
	(
		fn FetchReflection a =
		(
			case a of
			(
				"x": [-1,1,1]  -- reflect in YZ plane
				"y": [1,-1,1]  --         in ZX plane
				"z": [1,1,-1]  --         in XY plane
				"xy": [-1,-1,1]
				"yz": [1,-1,-1]
				"xz": [-1,1,-1]
				"xyz": [-1,-1,-1]
			)
		)

		aReflection = scalematrix (FetchReflection axis)
		fReflection = scalematrix (FetchReflection flip)

		resultTrans = fReflection * (tm * (inverse pivotTm)) * aReflection * pivotTm
			
-- 		print mirrorPos
-- 		print mirrorRot
		if not mirrorPos do resultTrans.pos = tm.pos
		if not mirrorRot do (tm.pos = resultTrans.pos;resultTrans = tm)
		
		resultTrans
	)
	fn pasteTransToPivot obj:selection[1] tm:(matrix3 1) =
	(
		objtrans = translate (rotate (scale (matrix3 1) obj.objectoffsetscale) obj.objectoffsetrot) obj.objectoffsetpos
		subtrans = objtrans * obj.transform
		newobjtrans = subtrans * inverse tm
		obj.transform = tm
		obj.objectoffsetpos = newobjtrans.translationpart
		obj.objectoffsetrot = newobjtrans.rotationpart
		obj.objectoffsetscale = newobjtrans.scalepart
	)

	fn GetKeys objs:(getcurrentselection()) rel:true = with undo off --获取物体关键帧,带有相对帧功能
	(
		mapkeys objs (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
		result = sort(makeuniquearray keys)
		if rel do (s = animationrange.start; result = for i in result where s <= i collect i-s) --不再收集小于起始帧的帧
		return result
	)
	
	fn sort_by_hierarchy obj_list:(getcurrentselection()) combine:false = --按层级匹配物体,combine:false时返回拆解后的多个数组,combine:true时返回重拼后的数组.
	(
		local result = #()
		if combine then for o in obj_list do result+=(for n in (#()+o) where (fid = finditem obj_list n)>0 collect (deleteitem obj_list fid;n))
		else result = for o in obj_list collect for n in (#()+o) where (fid = finditem obj_list n)>0 collect (deleteitem obj_list fid;n)
		return result
	)
	
	fn getKeyFrameByBar = 
	(
		local temp
		result = makeUniqueArray(for t = animationRange.start+1 to animationRange.end+1 where (temp = at time t(trackbar.GetPreviousKeyTime()); temp != undefined) collect temp)--不用排序,到边缘会获取到边远之外的帧.需要排序,读取的顺序可能不稳定.比如0帧有时候会获取到最后一个关键帧,但有时候会获取到负帧
		if result.count > 0 and result[1] < animationRange.start do deleteitem result 1
		result
	)
	
	fn copy_selTransform = --同理,需要对biped物体做slidertime兼容,更改后不要变更版本号.(好像attime可以复制bip变换,只是不能粘贴,遇到了再改吧)
	(
		--Process selected object
		local sel = getcurrentselection()
		--resetArray
		times = for t = animationRange.start to animationRange.end collect t
		selt = #()
		--resetArray
		selft = #()
		frames = getKeyFrameByBar()
		--recordInfo
		for i = 1 to sel.count do (
			--Frame by frame to copy
			append selt #()
			for time1 in times do(at time time1(append selt[i] sel[i].transform))
			--Keyframe copy
			append selft #() 
			for t in frames do(at time t(append selft[i] sel[i].transform))
		)
	)

	fn paste_TransformPerKey kf:false = 
	(
		local 
		sel = getcurrentselection(),
		st = slidertime,
		undostr,
		tList,
		seltList
		
		if kf then(undostr = "PasteKeyFrame";tList = frames;seltList = selft)else (undostr = "PasteKey";tList = times;seltList = selt)
		
		undo undostr on(
			animate on (
				for i = 1 to (if kf then selft else selt).count do
				(
					if keyboard.escpressed do exit --按下esc退出
					o = sel[i]
					isbip = try(biped.getNode o 1;on)catch(off) --如果是bip的话,必须用slidertime而不能用at time,且不可以关闭重画-- classof o.baseobject == biped_object --这个对被塌陷成其他物体的bip骨骼不管用.
-- 					with redraw isbip
-- 					(
					if isbip then for j = 1 to tList.count do
					(
						if keyboard.escpressed do exit --按下esc退出
						slidertime = tList[j];o.transform = seltList[i][j]
					)
					else for j = 1 to tList.count do at time tList[j](o.transform = seltList[i][j])
-- 					)
					
				)
			)
		slidertime = st
		) 
	)
	
	GroupBox 'grp1' "选择集" pos:[0,0] width:168 height:48 align:#left
	button 'btn_Sel1' "复制集" pos:[8,16] width:64 height:24 toolTip:"右键记录复制集,左键选择" align:#left
	button 'btn_Sel2' "粘贴集" pos:[96,16] width:64 height:24 align:#left
	label 'lbl1' "=>" pos:[76,20] width:16 height:16 align:#left
	
	checkbox 'chk_World' "" pos:[8,132] width:16 height:16 checked:true align:#left
	pickbutton 'btn_pickref' "参考物体" pos:[24,130] width:56 height:20 enabled:false toolTip:"围绕某个参考物体的坐标进行镜像" align:#left
	--右键拾取参考物体,按Ctrl+右键以参考物体进行复制.按Ctrl+左键以参考物体进行粘贴.
	
	GroupBox 'grp2' "镜像变换" pos:[0,49] width:168 height:110 align:#left
	checkbox 'chk_mpos' "镜像位置" pos:[8,68] width:72 height:16 checked:true align:#left
	checkbox 'chk_mrot' "镜像方向" pos:[88,68] width:72 height:16 checked:true align:#left
	radiobuttons 'rdo_maxis' "" pos:[62,88] width:97 height:16 labels:#("X", "Y", "Z") columns:3 align:#left
	radiobuttons 'rdo_faxis' "" pos:[62,107] width:97 height:16 labels:#("X", "Y", "Z") columns:3 align:#left
	label 'lbl2' "镜像轴:" pos:[8,88] width:40 height:16 align:#left
	label 'lbl3' "反转轴:" pos:[8,108] width:40 height:16 align:#left
	
-- 	button 'btn9' "复制" pos:[8,149] width:72 height:24 toolTip:"按顺序复制变换信息" align:#left
	button 'btn_trans' "粘贴/复制" pos:[88,127] width:72 height:24 toolTip:"按顺序粘贴/复制变换信息.
右键复制变换.
左键粘贴.
按住Ctrl逐帧粘贴.
按住Alt按关键帧粘贴.
按住Shift仅影响枢轴.
按住Ctrl+Shift粘贴到现有帧." align:#left
	
	
	GroupBox 'grp4' "选择/粘贴相对变换" pos:[0,162] width:168 height:48 align:#left
	--记录和重选择
	button 'btn_rs' "选择/记录" pos:[8,178] width:72 height:24 toolTip:"左键选取,右键记录。" align:#left
	--记录粘贴相对变换
	button 'btn_rel' "相对/记录" pos:[88,178] width:72 height:24 toolTip:"左键粘贴,右键复制" align:#left
	
	GroupBox 'grp5' "塌陷变换动画" pos:[0,212] width:168 height:70 align:#left
	button 'btn_collapse' "塌陷/记录" pos:[8,252] width:72 height:24 toolTip:"左键塌陷,右键记录" align:#left
	button 'btn27' "整理控制器" pos:[88,252] width:72 height:24 toolTip:"整理控制器" align:#left
	
	label 'state' "已就绪." pos:[0,286] width:168 height:16 style_sunkenedge:true align:#left
	
	edittext 'edt_keys_time' "" pos:[8,230] width:136 height:16 align:#left toolTip:"1000"
	button 'btn_keys_time' "T" pos:[144,230] width:16 height:16 toolTip:"右键获取时间帧
Alt+右键获取当前选择的帧
左键按范围选取
Alt+左键按范围收纳选取
Ctrl+Alt+左键清除所有帧/nCtrl+右键切换超出范围类型(不统一则设为恒定)" align:#left

	--物体列表
	on btn_Sel1 rightclick do
	(
		sel1 = getcurrentselection()
		btn_Sel1.caption = sel1.count as string
		t = "物体列表:"
		for s in sel1 do t += ("\n" + s.name)
		btn_Sel1.tooltip = t
	)
	on btn_Sel1 pressed do
	(
		try(select sel1)catch("选择复制集物体失败")
	)
	on btn_Sel2 rightclick do
	(
		sel2 = getcurrentselection()
		btn_Sel2.caption = sel2.count as string
		t = "物体列表:"
		for s in sel2 do t += ("\n" + s.name)
		btn_Sel2.tooltip = t
	)
	on btn_Sel2 pressed do
	(
		try(select sel2)catch("选择粘贴集物体失败")
	)
	--粘贴选项
	on chk_World changed state do
	(
		btn_pickref.enabled = not state
	)
	on btn_pickref picked obj do
	(
		btn_pickref.caption = obj.name
	)
	on btn_trans pressed do
	(
		--判断可行
	count = bufferTM.count
	if count > 0 then
	if count == sel2.count then
	undo "粘贴变换" on(--animate on(
		--读取设置
		mAxis = case rdo_maxis.state of
		(
			1: "x"
			2: "y"
			3: "z"
		)
		fAxis = case rdo_faxis.state of
		(
			1: "x"
			2: "y"
			3: "z"
		)
		oTrans = if isvalidnode btn_pickref.object and not chk_World.checked then btn_pickref.object.transform else matrix3 1 --参考变换
		mPos = chk_mpos.checked
		mRot = chk_mrot.checked
		--执行操作
		case of
		(
			--这三个在
			(keyboard.controlPressed and keyboard.altPressed) : (--批量粘贴到物体现有帧上
			)
			(keyboard.controlPressed) : animate on(--逐帧批量镜像
				s = animationrange.start
				for i = 1 to count do
				(
					TMs = bufferTMPerKeys[i] --记录的变换们(逐帧)
					for t = 1 to TMs.count do
					(
						abst = t+s-1
						if abst > animationrange.end do exit --超出范围退出.
						at time abst (sel2[i].transform = buildTransform axis:mAxis flip:fAxis tm:TMs[t] pivotTm:oTrans mirrorPos:mPos mirrorRot:mRot)
					)
				)
			)
			(keyboard.altPressed) : animate on( --逐关键帧镜像(按拷贝时的关键帧)
				s = animationrange.start
				for i = 1 to count do
				(
					keys = bufferAllKeys[i] --记录的关键帧们
					TMs = bufferTMPerKeys[i] --记录的变换们(逐帧)
	-- 					print #(keys,TMs)
					for t in keys do
					(
						abst = t+s
						if abst > animationrange.end do exit --超出范围退出.
	-- 						print abst
	-- 						print TMs[t.frame as integer + 1]
						at time abst (sel2[i].transform = buildTransform axis:mAxis flip:fAxis tm:TMs[t.frame as integer + 1] pivotTm:oTrans mirrorPos:mPos mirrorRot:mRot)
					)
				)
			)
			(keyboard.ShiftPressed) : --仅影响枢轴
				animate off(for i = 1 to count do (pasteTransToPivot obj:sel2[i] tm:(buildTransform axis:mAxis flip:fAxis tm:bufferTM[i] pivotTm:oTrans mirrorPos:mPos mirrorRot:mRot)))
			default : --普通的粘贴
				for i = 1 to count do sel2[i].transform = buildTransform axis:mAxis flip:fAxis tm:bufferTM[i] pivotTm:oTrans mirrorPos:mPos mirrorRot:mRot
		)
		
	-- 		print "镜像变换"
	--)
	)else
	(
		errorText = ""
		errorText = "剪贴板中存在" + bufferTM.count as string + "个变换信息.\t\t"
		errorText += "\n但选择了" + sel2.count as string + "个物体.\t\t"
	
		messagebox errorText title:"选择不匹配:"
	)
	else
		messagebox "没有变换信息." title:"剪贴板无内容:"
	)
	on btn_trans rightClick do
	try(--来排除可能删除过物体.
		if Sel1.count > 0 then(
			bufferTM = for i in Sel1 collect i.transform
			st = animationrange.start
			et = animationrange.end
			bufferTMPerKeys = for i in Sel1 collect for t = st to et collect at time t i.transform --逐帧的变换
			bufferAllKeys = for i in Sel1 collect GetKeys objs:i --复制时的所有关键帧,注意,是相对的.起始帧是0f,且需要转换为number才能使用.
	-- 			print "复制"
			
	-- 			print bufferTM
	-- 			print bufferTMPerKeys
	-- 			print bufferAllKeys
		)else
		(
			messagebox "复制集中没有物体信息."
		)
	)catch(messagebox "复制变换数据出错.")
	on btn_rs pressed do
	(
		local nodeList = for n in buffer_selected_names collect getnodebyname n
		if nodeList.count < 1 do return(messagebox "没有名称记录.")
		try(
			undo "Select" on(select nodeList)
		)catch(if queryBox "选择失败,可能是对应名称的物体不存在,是否试着跳过无效物体,排除错误并再选一次?" do undo "Select" on(select(for n in nodeList where isValidNode n collect n)))
	)
	on btn_rs rightClick do
	(
		local txt = "按名称选择,Ctrl记录当前选中物体名称\nNames:"
		buffer_selected_names = for i in getcurrentselection() collect (txt += ("\n"+i.name);i.name)
		btn_rs.tooltip = txt
	)
	on btn_rel pressed do
	undo "粘贴相对变换" on(
		local objs = getcurrentselection()
		for i = 1 to objs.count do
		(
			o = objs[i];trans = RelList[i]
			try(o.transform = if isvalidnode o.parent then trans * o.parent.transform else trans)catch(messagebox ("粘贴失败:\n"+getCurrentException()) title:"错误:")
		)
	)
	on btn_rel rightClick do
		RelList = for o in getcurrentselection() collect if isvalidnode o.parent then o.transform * inverse o.parent.transform else o.transform
	on btn_collapse pressed do
		paste_TransformPerKey kf:keyboard.altPressed
	on btn_collapse rightClick do
		copy_selTransform()
	
	--关键帧时间相应
	on edt_keys_time entered txt do
	(
		print txt
	)
	on btn_keys_time rightClick do
	(
		fn getKeyFrameByBar asString:false = 
		(
			local temp
			result = makeUniqueArray(for t = animationRange.start+1 to animationRange.end+1 where (temp = at time t(trackbar.GetPreviousKeyTime()); temp != undefined) collect temp)--不用排序,到边缘会获取到边远之外的帧.需要排序,读取的顺序可能不稳定.比如0帧有时候会获取到最后一个关键帧,但有时候会获取到负帧
			if result.count > 0 and result[1] < animationRange.start do deleteitem result 1
			if asString then
			(
				if result.count > 0 then
				(
					local str = (result[1].frame as integer) as string
					for i = 2 to result.count do str += "-" + (result[i].frame as integer) as string
					return str
				)else return ""
			)
			else return result
		)
		edt_keys_time.entered(edt_keys_time.tooltip = edt_keys_time.text = getKeyFrameByBar asString:true) --使用entered可以触发回调
	)
	
)
createdialog ControlTans1_3Rollout
