-- 1.通过范围,获取尺寸
fn GetSize size:(selection.max-selection.min) = return (size[1]+size[2]+size[3])*0.02
-- 2.计算某变换的附着面,输出面上的点的位置,某变换必须是Z轴朝前,即法线方向.(其实也没事....只是生成的模型看起来比较乱)
fn Trans2Face trans size =
(
-- 	tri = #([0,0.866025,0.5],[0,-0.866025,0.5],[0,0,-1]) --先构建一个单位为1的等边三角形坐标 --以x轴坐标为主,好看,不容易与附着相配合,一些变形时特别有效
	tri = #([-0.866025,-0.5,0],[0.866025,-0.5,0],[0,1,0]) --先构建一个单位为1的等边三角形坐标 --应转换为以z轴坐标为主
	return for p in tri collect (p*size)*trans --算出三角面坐标
)	
-- 3. 从物体列表生成网格
fn Nodes2Mesh nodes:(selection as array) name:(currenttime as string) vList:#() size:(GetSize()) =
(
	for n in nodes do join vList (Trans2Face n.transform size)  --填充顶点列表
	fList = for i = 1 to nodes.count collect (v=3*i;[v-2,v-1,v]) --填充面列表

	mesh vertices:vList faces:fList name:name --创建网格
)
Nodes2Mesh()