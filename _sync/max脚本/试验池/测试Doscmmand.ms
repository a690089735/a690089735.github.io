dpath = 
command = dpath+@"\DemBones.exe -a= -i=test.fbx -o=out.fbx -b=64"
command += ""

fn bulid_dembones_command path0 patha pathi patho bnum =
(
	fn restr str = substituteString str "\\" "\\\\"
	s=stringstream ""
-- 	format "% -a=% -i=% -o=% -b=%" (restr path0) (restr patha) (restr pathi) (restr patho) bnum to:s
	format "% -a=% -i=% -o=% -b=%" path0 patha pathi patho bnum to:s
	s as string
-- 	str = ""
-- 	for s in #(path0,patha,pathi,patho) do str += (s + " ")
-- 	str + "-b=" + bnum as string
)
command = bulid_dembones_command @"C:\Users\许铮\Desktop\dem-bones-master\bin\Windows\DemBones.exe" @"C:\Users\许铮\Desktop\dem-bones-master\bin\Windows\test.abc" @"C:\test.fbx" @"C:\Users\许铮\Desktop\dem-bones-master\bin\Windows\out.fbx" 64
DOSCommand command --返回0则成功,会一直等待结果,
-- hiddendoscommand command exitCode:&exitcode --exitcode为0则成功,在计算前启用个时钟,按秒计时免得让用户觉得太卡了...
--绝对路径中有中文会报错.仅input路径会有这个问题.
--初始姿态好像必须和第一帧一样?
--abc格式可以导出粒子(可选作为网格)
--这里暂时只有根据模型序列创建骨骼的功能,保留现有骨骼,计算补充权重啥的,是咋做到的?