try(destroydialog WeightToolPlusB)catch()
rollout WeightToolPlusB "WeightToolPlusB" width:180 height:340
(	
	--选择栏
	dotNetControl 'Btn_Shrink' "Button" text:"Shrink" pos:[2,2] width:44 height:24
	dotNetControl 'Btn_Grow' "Button" text:"Grow" pos:[46,2] width:44 height:24
	dotNetControl 'Btn_Ring' "Button" text:"Ring" pos:[90,2] width:44 height:24
	dotNetControl 'Btn_Loop' "Button" text:"Loop" pos:[134,2] width:44 height:24
	--快速权重栏
	dotNetControl 'Btn_000' "Button" text:"0" pos:[2,28] width:25 height:24
	dotNetControl 'Btn_010' "Button" text:".1" pos:[27,28] width:25 height:24
	dotNetControl 'Btn_025' "Button" text:".25" pos:[52,28] width:25 height:24
	dotNetControl 'Btn_050' "Button" text:".5" pos:[77,28] width:25 height:24
	dotNetControl 'Btn_075' "Button" text:".75" pos:[102,28] width:25 height:24
	dotNetControl 'Btn_090' "Button" text:".9" pos:[127,28] width:25 height:24
	dotNetControl 'Btn_100' "Button" text:"1" pos:[152,28] width:25 height:24
	--设置权重栏
	dotNetControl 'Btn_SetWeight' "Button" text:"SetWeight" pos:[2,54] width:70 height:24
	Spinner 'Spn_SetWeight' ""  pos:[74,58] width:50 height:24 range:[0,1,0.05] type:#float scale:0.005
	dotNetControl 'Btn_AddWeight' "Button" text:"+" pos:[126,54] width:25 height:24
	dotNetControl 'Btn_MinusWeight' "Button" text:"-" pos:[153,54] width:25 height:24
	--缩放权重栏
	dotNetControl 'Btn_ScaleWeight' "Button" text:"SetWeight" pos:[2,80] width:70 height:24
	Spinner 'Spn_ScaleWeight' ""  pos:[74,84] width:50 height:24 range:[0,5,0.1] type:#float scale:0.005
	dotNetControl 'Btn_AddScaleWeight' "Button" text:"+" pos:[126,80] width:25 height:24
	dotNetControl 'Btn_MinusScaleWeight' "Button" text:"-" pos:[153,80] width:25 height:24
	--复制粘贴栏
	dotNetControl 'Btn_CopyWeight' "Button" text:"Copy" pos:[2,106] width:48 height:24
	dotNetControl 'Btn_PasteWeight' "Button" text:"Paste" pos:[52,106] width:48 height:24
	dotNetControl 'Btn_BlendWeight' "Button" text:"Blend" pos:[130,106] width:48 height:24
-- 	dotNetControl 'Btn_Paste_PosWeight' "Button" text:"Paste-Pos" pos:[4,152] width:68 height:24
-- 	Spinner 'Spn_Paste_Pos_Tolerance' "Tolerance"  pos:[79,156] width:82 height:24 range:[0,10,0.1] type:#worldunits scale:0.1 align:#left
	--状态栏
	Label 'lbl_VSelected' "Selected 0" pos:[2,140] width:87 height:18 align:#left style_sunkenedge:true
	Label 'lbl_CopyBuffer' "Buffer 0" pos:[91,140] width:87 height:18 align:#left style_sunkenedge:true
	--骨骼信息栏
	dotNetControl 'lbl_BoneInfo_Ico' "Label" text:"" pos:[2,164] width:16 height:16
	dotNetControl 'lbl_BoneInfo' "Label" text:"SelectBoneInfo" pos:[18,166] width:108 height:16
	Spinner 'Spn_BoneWeight' "" pos:[128,164] width:50 height:24 range:[0,1,0] type:#float scale:0.001 --0.001的手感最好,虽然0.005最合理
	dotNetControl 'Lbx_Bones' "ListView" pos:[2,184] width:176 height:134
	
	--蒙皮显示栏
	--对象颜色和材质颜色切换,顶点颜色,关闭封套,选择顶点,选择元素,
	
	local
	_changging = false, --用于判断撤销
	
	_FunctionState = true, --用于确认当前各个功能是否可用

	--标题栏功能
	_Cursor = (dotnetclass "System.Windows.Forms.Cursor"),
	_Offset = [0,0],
	_Pin = false,
	--锁头图标
	lockimg,
	unlockimg,
	--UI数据
	btns = #(
	'Btn_Shrink', 'Btn_Grow', 'Btn_Ring', 'Btn_Loop',--选择栏
	'Btn_000', 'Btn_010', 'Btn_025', 'Btn_050', 'Btn_075', 'Btn_090', 'Btn_100', --快速权重栏
	'Btn_SetWeight', 'Btn_AddWeight', 'Btn_MinusWeight',--设置权重栏
	'Btn_ScaleWeight', 'Btn_AddScaleWeight', 'Btn_MinusScaleWeight',--设置权重栏
	'Btn_CopyWeight', 'Btn_PasteWeight', 'Btn_BlendWeight'--复制粘贴栏
	),
	rolloutSize = 20,

	--必要数据
	sk = 0,--当前正在处理的skin修改器,初始值不可以是undefined,因为modPanel.getCurrentObject()可能获取到未定义
	_LockList,--关联的sk的锁定列表(记录在skin中)
	_BoneList,--关联的第一次收集到sk的骨骼列表(记录在skin中),用于对照skin修改器的骨骼是否发生变化,包括顺序变化也会让其更新哦.
	_SelectedVertices = #{},
	_lastVertex = 1,
	_CurrentBonesID = #(),
	_SelectedBoneID = 0,
	_lastVertexWeigths = #(),
	_DQpaintmode = false,
	_DQsupport = false,
	
	--其他数据
	_WeightLayout = #(),
	_DQWeights = #(),
	
	--响应事件
	_upToolState,--在#SelectionChanged和#subobjectSelectionChanged
	_upListView --在#modelOtherEvent时刷新权重数据
	
	
	include "功能函数.ms"
-- 	include "菜单功能.ms"
	include "界面功能.ms"
)
createdialog WeightToolPlusB
-- setFocus WeightToolPlusB --不加这个会让工具提示无效