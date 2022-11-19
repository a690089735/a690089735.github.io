--按前缀,名称1,名称2,后缀,序号,自动方向来命名,设置自动方向时,不同方向的序号不叠加.

/*
name = "limb,a" --拆分成两个
tag = "character,alpha,bn"
起始编号 = 11,1
编号位数 = 4,2 --不输入或输入有误默认为3
direction = "L,R,M"
阈值 = 0.001
例如:
{tag1}_{tag2}_{name1}_{name2}_{tag3}_{num1}-{num2}.{x} --x表示x轴正方向为左,-x表示,x轴负方向为左,
character_limb_a_bn_0011-01.L
*/
filein @"E:\BaiduSyncdisk\我的坚果云\max脚本\拼图命名器3\C_拼图命名器3.ms"