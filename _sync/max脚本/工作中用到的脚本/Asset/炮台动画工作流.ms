try(destroydialog paotaiaflow)catch()
rollout paotaiaflow "炮台动画工作流" width:160 height:296
(
	local 
	sel1 = #(),
	sel2 = #(),
	--剪贴板
	bufferTM = #(),--每物体
	bufferTMPerKeys = #(),--每物体每帧
	bufferAllKeys = #()--每物体的关键帧
	
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
	GroupBox 'grp1' "清理模型" pos:[8,8] width:144 height:48 align:#left
	button 'btn_Clr' "清理模型" pos:[16,24] width:56 height:24 toolTip:"清理选中模型." align:#left
	
	GroupBox 'grp2' "复制粘贴轴和动画" pos:[8,64] width:144 height:88 align:#left
	button 'btn_CopySet' "复制集" pos:[16,88] width:56 height:24 toolTip:"按顺序选择要复制的物体" align:#left
	button 'btn_PasteSet' "粘贴集" pos:[88,88] width:56 height:24 toolTip:"按顺序选择要粘贴的物体" align:#left
	checkbox 'chk_Mirror' "镜像粘贴" pos:[16,123] width:62 height:16 align:#left
	button 'btn_CopyPaste' "粘贴/复制" pos:[88,120] width:56 height:24 toolTip:"右键复制,左键粘贴.
Shift仅粘贴枢轴.
Alt粘贴关键帧." align:#left
	label 'lbl1' "=>" pos:[72,92] width:16 height:16 align:#left

	GroupBox 'grp3' "转化为骨骼动画" pos:[8,160] width:144 height:72 align:#left
	spinner 'spn_Time' "基准" pos:[22,205] width:62 height:16 range:[-100,100,0] type:#integer scale:1 toolTip:"基本型的参考帧." align:#left
	button 'btn_ConvertBoneAnimation' "转换" pos:[88,201] width:56 height:24 toolTip:"将选择物体转换为骨骼动画." align:#left
	
	button 'btn6' "随机色彩" pos:[88,24] width:56 height:24 toolTip:"清理选中模型." align:#left
	edittext 'edt1' "paotai" pos:[16,180] width:128 height:16 align:#left
	groupBox 'grp4' "其他" pos:[8,240] width:136 height:48 align:#left
	button 'btn7' "反向骨骼长度" pos:[16,256] width:80 height:24 align:#left
	on btn_Clr pressed do
	(
		sel = getcurrentselection()
		for i in sel do
		(
			m = mesh vertices:#() faces:#() wirecolor:gray name:i.name
			converttopoly m
			polyop.attach m i
			converttomesh m
		)
	)
	on btn_CopySet pressed do
	(
		sel1 = getcurrentselection()
		btn_CopySet.caption = sel1.count as string
		t = "物体列表:"
		for s in sel1 do t += ("\n" + s.name)
		btn_CopySet.tooltip = t
	)
	on btn_PasteSet pressed do
	(
		sel2 = getcurrentselection()
		btn_PasteSet.caption = sel2.count as string
		t = "物体列表:"
		for s in sel2 do t += ("\n" + s.name)
		btn_PasteSet.tooltip = t
	)
	on btn_CopyPaste pressed do
	(
		--判断可行
	count = bufferTM.count
	if count > 0 then
	if count == sel2.count then
	undo "粘贴变换" on(
		--读取设置
		mAxis = "x"
		fAxis = "x"
		oTrans = matrix3 1 --参考变换
		mPaste = chk_Mirror.checked
		--执行操作
		case of
		(
			(keyboard.altPressed) : animate on( --逐关键帧镜像(按拷贝时的关键帧)
				s = animationrange.start
				for i = 1 to count do
				(
					keys = bufferAllKeys[i] --记录的关键帧们
					TMs = bufferTMPerKeys[i] --记录的变换们(逐帧)
					for t in keys do
					(
						abst = t+s
						if abst > animationrange.end do exit --超出范围退出.
						at time abst (sel2[i].transform = buildTransform axis:mAxis flip:fAxis tm:TMs[t.frame as integer + 1] pivotTm:oTrans mirrorPos:mPaste mirrorRot:mPaste)
					)
				)
			)
			(keyboard.ShiftPressed) : --仅影响枢轴
				animate off(for i = 1 to count do (pasteTransToPivot obj:sel2[i] tm:(buildTransform axis:mAxis flip:fAxis tm:bufferTM[i] pivotTm:oTrans mirrorPos:mPaste mirrorRot:mPaste)))
			default : --普通的粘贴
				for i = 1 to count do sel2[i].transform = buildTransform axis:mAxis flip:fAxis tm:bufferTM[i] pivotTm:oTrans mirrorPos:mPaste mirrorRot:mPaste
		)
		
	-- 		print "镜像变换"
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
	on btn_CopyPaste rightClick do
	try(--来排除可能删除过物体.
		if Sel1.count > 0 then(
			bufferTM = for i in Sel1 collect i.transform
			st = animationrange.start
			et = animationrange.end
			bufferTMPerKeys = for i in Sel1 collect for t = st to et collect at time t i.transform --逐帧的变换
			bufferAllKeys = for i in Sel1 collect GetKeys objs:i --复制时的所有关键帧,注意,是相对的.起始帧是0f,且需要转换为number才能使用.
		)else
		(
			messagebox "复制集中没有物体信息."
		)
	)catch(messagebox "复制变换数据出错.")
	on btn_ConvertBoneAnimation pressed do
(
		if queryBox "请另存文件后再点击确认.\t" title:"警告:当前操作无法撤销!" beep:true do 
		undo off(
		local
		baseTime = spn_Time.value,
		sel = getcurrentselection(),
		vertexgroup = #(),
		count = 0,
		b = BoneSys.createBone [0,0,0] [10,0,0] [0,0,1],
		bobj = (b.Taper = 0;b.width = b.height = 1;b.sidefins=b.frontfin=b.backfin = off;bb = b.baseobject;delete b;bb),
		m = mesh vertices:#() faces:#() wirecolor:gray name:"Ani_Mesh"
		for n in sel do converttopoly n --用于引入撤销
		converttopoly m
		slidertime = baseTime
		vertexgroup = for n in sel collect (polyop.attach m (copy n);#{(count+1)..(count+=n.numverts)})
		converttomesh m
		
		for n in sel do (n.baseobject = bobj;n.boneEnable=true;n.boneFreezeLength=n.boneAutoAlign=false;n.boneScaleType=#None;n.wirecolor = gray;n.mat = undefined)
		
		m.name = edt1.text + "_" + m.name
		count = (sel.count as string).count --计数长度
		i = 0
		for n in sel do 
		(
		-- 			print n
			i+=1
			id = i as string
			icount = id.count
			for i = 1 to count - id.count do id = "0" + id
			n.name = edt1.text + "_Bn_" + id
		-- 			print n.name
		)
			
		local sk = skin()
		sk.ref_frame = baseTime
		
		setCommandPanelTaskMode #modify
		select m
		addmodifier m sk
		
		id = 0
		for n in sel do
		(
			skinOps.addbone sk n 0
			id+=1
			classof m
			for vid in vertexgroup[id] do skinOps.ReplaceVertexWeights sk vid id 1
		)
		
		)
	)
	on btn6 pressed do
	(
		undo "随机色彩" on(
			for i in selection do i.wirecolor = random black white
		)
	)
	on btn7 pressed  do
		for i in selection where classof i == bone do i.length *= -1
)
createdialog paotaiaflow



