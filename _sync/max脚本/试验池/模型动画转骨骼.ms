-- 模型动画转骨骼
-- 1.确定一个基本帧(最终形态的帧)
-- 2.按顺序收集模型顶点.(用于后面处理蒙皮用)
-- 3.创建一个空mesh,从第一个模型开始,按顺序附加模型.
-- 4.将原模型转化为骨骼
-- 5.添加skin修改器给mesh,设置蒙皮参考帧是基本帧.
-- 6.添加骨骼并按照第二步收集的顶点设置权重.

try(destroydialog ConvertAnimationToBoneRollout)catch()
rollout ConvertAnimationToBoneRollout "Untitled" width:120 height:96
(
	spinner 'spn1' "参考帧" pos:[8,48] width:62 height:16 range:[-999999,999999,0] type:#integer scale:1 align:#left
	button 'btn1' "转换为骨骼动画" pos:[8,64] width:104 height:24 align:#left
	checkbox 'chk1' "自动重命名" pos:[8,8] width:72 height:16 checked:true align:#left
	edittext 'edt1' "项目名" pos:[8,24] width:104 height:16 align:#left
	
	on btn1 pressed do
	undo "模型动画转骨骼" on(
		local
		baseTime = spn1.value,
		sel = getcurrentselection(),
		vertexgroup = #(),
		count = 0,
		bobj = (b = BoneSys.createBone [0,0,0] [10,0,0] [0,0,1];b.Taper = 0;b.width = b.height = 1;b.sidefins=b.frontfin=b.backfin = off;bb = b.baseobject;delete b;bb),
		m = mesh vertices:#() faces:#() wirecolor:gray name:"Ani_Mesh"
		converttopoly m
		at time baseTime(
	-- 			vertexgroup = for n in sel collect (meshop.attach m (copy n);#{(count+1)..(count+=n.numverts)}) --获取顶点集
			vertexgroup = for n in sel collect (polyop.attach m (copy n);#{(count+1)..(count+=n.numverts)}) --获取顶点集
			converttomesh m
	-- 		print vertexgroup
			
			for n in sel do (n.baseobject = copy bobj;n.boneEnable=true;n.boneFreezeLength=n.boneAutoAlign=false;n.boneScaleType=#None;n.wirecolor = gray;n.mat = undefined)
				
			local sk = skin()
			sk.ref_frame = baseTime
			
			addmodifier m sk
			select m
			setCommandPanelTaskMode #modify
			
			id = 0 --因为一个骨骼就是一组点,所以可以直接共用id.
			for n in sel do
			(
				skinOps.addbone sk n 0
				id+=1
				classof m
	-- 				print(skinops.GetNumberVertices sk)
				for vid in vertexgroup[id] do skinOps.ReplaceVertexWeights sk vid id 1--print vid
			)
			
			if chk1.checked do
			(
				m.name = edt1.text + m.name
				count = sel.count
			)
		)
	)
	on chk1 changed state do
	(
		edt1.enabled = state
	)
)
createdialog ConvertAnimationToBoneRollout

