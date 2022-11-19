--美化Blender导出的骨骼

-- fn BBB objs =
-- (
-- 	for o in objs where (classof o == BoneGeometry and o.children[1] != undefined) do
-- 	(
-- 		c = o.children[1]
-- 		o.length = c[3][1][1].value
-- 	)
-- )	

fn BBB objs = --使用正确导出的结果美化
(
	for o in objs where classof o == BoneGeometry do
	(
		if not matchPattern o.name pattern:"*_end" do o.width = o.height = o.length/4
	)
)	
BBB selection

fn DBE =
(
	for o in Geometry where classof o == BoneGeometry and matchPattern o.name pattern:"*_end" do delete o
)
DBE()