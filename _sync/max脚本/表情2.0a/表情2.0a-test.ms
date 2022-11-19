--1.合并脸部标记-->用户对齐
--2.创建左半边脸的线,带绑定(此步已将样条线做skin)

--3.用户调整

--4.开始生成
	--设置名称前缀
	--准备线条:塌陷样条线-->分离样条线-->重新绑定样条线
	--创建绑定:路径约束点-->创建子物体-->创建骨骼-->约束骨骼(注意命名)
--5.整理父子关系,整理层级关系

--6.提示完成

try (destroydialog FaceRigTool)catch()
rollout FaceRigTool "表情绑r定工具" width:120 height:184
(
	button btn_Next "开始" pos:[40,152] width:72 height:24
	label lbl_tips "欢迎." pos:[8,8] width:104 height:136
	
	on btn_Next pressed  do
	(
		case btn_Next.caption of
		(
			"开始":
			(
			--合并基本对位线,用户对齐
				lbl_tips.text = "请将表情标线对齐模型\n控制虚拟体的旋转来匹配曲度\n(请尽量对齐位置和曲度,但没必要100%对齐)\n完成后点击'开始构建'."
				btn_Next.caption = "开始构建"
			)
			"第一步":
			(
				lbl_tips.text = "请等待构建完成\n完成后点击'结束构建'."
			--创建对称-->创建骨骼绑定(自动计算大小)-->创建控制点(自动计算大小)-->蒙皮
				btn_Next.caption = "结束构建"
			)
			"结束构建":
			(
				lbl_tips.text = "现在你可以自己添加样条线到需要的位置\n注意起始点位置\n然后选择一条或者多条样条线\n最后点击'自定义构建'."
				btn_Next.caption = "自定义构建"
			)
			"自定义构建":
			(
				--为选中的样条线创建绑定固定
			)
		)
	)
)
createdialog FaceRigTool
