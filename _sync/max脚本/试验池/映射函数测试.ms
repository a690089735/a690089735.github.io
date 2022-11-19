-- 映射函数的测试

(getcurrentselection()).wirecolor = random black white

mapped fn Colored objs =
(
	objs.wirecolor = random black white
)
Colored (getcurrentselection())
Colored selection[1]

-- 可以看出二者的不同,代码本身只执行一次.而映射函数可以为集合中的每个对象执行一次,省去了循环,还有个好处是,单个物体和集合也可以同时作为参数