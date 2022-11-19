--根据现有的样条线,按最大长度的指定段数,重新建立样条线.可选绝对和平均两种适配方式.
try(destroydialog ReBuildSplRollout)catch()
rollout ReBuildSplRollout "ReBuildSpl" width:168 height:88
(
	radiobuttons rdo_type "" pos:[8,32] width:189 height:30 labels:#("平均", "按长度", "按比例") default:3 columns:3 offsets:#([-2,0], [-10,0], [-5,0]) toolTip:"用于设置非最长线段的适配方式.\n平均:所有线条段数一样,\n按长度:所有段长尽量等长,距离小于0.1段长的点会被移除,\n按比例:段数基于长度比例适配." 
	spinner spn_seg "最大段数及分配方式" pos:[35,8] width:128 height:16 range:[1,100,6] type:#integer scale:1 toolTip:"用于适配最长线条的段数,其余线条将以此为参考." 
	button btn_run "按选中图形生成" pos:[8,56] width:152 height:24 toolTip:"执行" 
 
	fn ReBuildSpl spl maxseg:6 type:3 gain:50 del:false = --1为绝对平均,2,为绝对长度,3为适配平均 ;gain是步数精度倍数,将最长长度乘以这个值,函数原本的默认值是长度乘以5
	(
	-- 	1.读取多有曲线长度,取最长的一条计算基本数据
		count = numSplines spl
		maxlen = 0 --最大长度
		lens = for i = 1 to count collect (len = curveLength spl i;if len > maxlen do maxlen = len;len)
		d = (maxlen * gain) as integer
	--	2.按选项生产点
		nl = line wirecolor:red name:(uniqueName "Spl_");select nl
		case type of
		(
			1:(-- 平均方式
				for i = 1 to count do
				(
					addnewSpline nl
					seg = maxseg as integer --平均取出段数
					for j = 0.0 to seg do 
					(
						addKnot nl i #corner #line (lengthInterp spl i (j / seg) steps:d)
					)
				)
			)
			2:(-- 按长度方式,如果倒数第二个点和最后一个点的距离小于段数的十分之一,则会被移除
				for i = 1 to count do
				(
					addnewSpline nl
					scl = maxlen/lens[i]
					seg = maxseg as integer --段数
					k = 0
					for j = 0.0 to seg-1 do 
					(
						p = (j / seg) * scl
						if p <= 1 then
						(
							addKnot nl i #corner #line (lengthInterp spl i p steps:d)
							k += 1
						)else exit
					)
					if k == 0 do
					(
						addKnot nl i #corner #line (lengthInterp spl i 0 steps:d)
						messagebox("提示:\n刚刚为线段: " + i as string + " 创建了一个极短分段!\t")
					)
					addKnot nl i #corner #line (lengthInterp spl i 1 steps:d)
					ncount = numKnots nl i
					if ncount > 2 do --如果倒数第二个的坐标和最后一个坐标的距离,小于一段的十分之一,则将倒数第二个结点删除
					(
						len = (distance (getKnotPoint nl i 1) (getKnotPoint nl i 2))*0.2
						if (distance (getKnotPoint nl i (ncount-1)) (getKnotPoint nl i ncount)) < len do deleteKnot nl i (ncount-1) --不知道为啥,明明是减1,但是写减2才正确...
					)
				)
			)
			3:(-- 按比例方式
				for i = 1 to count do
				(
					addnewSpline nl
					seg = (maxseg * lens[i] / maxlen + 0.5) as integer --按比例取出段数
					if seg > 0 then
					(
						for j = 0.0 to seg do addKnot nl i #corner #line (lengthInterp spl i (j / seg) steps:d)
					)else
					(
						addKnot nl i #corner #line (lengthInterp spl i 0 steps:d)
						addKnot nl i #corner #line (lengthInterp spl i 1 steps:d)
						messagebox("提示:\n刚刚为线段: " + i as string + " 创建了一个极短分段!\t")
					)
				)
			)
		)
		updateShape nl
		if del do delete spl
	--	3.按数据创建样条线
		ok
	)
 
	on btn_run pressed do
	(
		undo "ReBuildSpl" on(
			for s in (selection as array) do if superclassof s == shape do ReBuildSpl s maxseg:spn_seg.value type:rdo_type.state
		)
	)
)
createdialog ReBuildSplRollout