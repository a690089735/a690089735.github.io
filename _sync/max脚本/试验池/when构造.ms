trans2 = ($Dummy002.transform) as matrix3
trans1 = ($Dummy001.transform) as matrix3

deleteAllChangeHandlers id:#test
when transform $Dummy003 change id:#test currentobj do 
(
	trans = (currentobj.transform) as matrix3
	trans2 = translate trans (normalize(trans2.pos - trans.pos)*15)
-- 	trans1 = translate trans2 (normalize(trans1.pos - trans2.pos)*15)
	$Dummy002.transform = trans2
-- 	$Dummy001.transform = trans1
) --有父子关系时可能会有问题.要有一个单独的变换信息变量用于循环处理,直接用transform计算会有乱跳.变换信息变量要随时保持最新更新.


-- [ <object_parameter> ] 

