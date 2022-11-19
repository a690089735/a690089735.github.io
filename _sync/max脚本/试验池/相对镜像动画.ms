--研究记录
-- ctrl = $[3][2]
-- rx = #()
-- ry = #()
-- rz = #()
-- for t in animationrange.start to animationrange.end do 
-- at time t(
-- 	append rx ctrl[1].value
-- 	append ry ctrl[2].value
-- 	append rz ctrl[3].value
-- )
-- print #(rx,ry,rz)

-- basex = rx[1]
-- basey = ry[1]
-- basez = rz[1]

--可行,但只支持单物体和最基本的控制器
-- ctrl = $[3][2]
-- basex = ctrl[1].value * 2 -- "-(y - x) + x"
-- basey = ctrl[2].value * 2
-- basez = ctrl[3].value * 2
-- for t in animationrange.start to animationrange.end do
-- with undo on(with animate on(
-- 	at time t(
-- 		ctrl[1].value = basex - ctrl[1].value
-- 		ctrl[2].value = basey - ctrl[2].value
-- 		ctrl[3].value = basez - ctrl[3].value
-- 	)
-- ))

--封装函数-应当可以选择某些轴,不选择某些轴,注意,镜像基于当前帧的值.此函数目前已初步可用.
--存在的问题,此时是逐帧镜像,应当可选只在有关键帧的部分镜像.
fn relmirroranimation ctrl x:true y:true z:true = --state 0 xyz 1 x 2y 3z  000 100 010 001 110 101 011 111这几种 排序:000 001 010 011 100 101 110 111
(
	global
	_ctrl = ctrl
	
	local
	code = 
"(
local
	basex = _ctrl[1].value * 2,
	basey = _ctrl[2].value * 2,
	basez = _ctrl[3].value * 2
	for t in animationrange.start to animationrange.end do
undo \"Rel Mirror Animation\" on(with animate on(
	at time t("
	
	if x do code += "\n		_ctrl[1].value = basex - _ctrl[1].value"
	if y do code += "\n		_ctrl[2].value = basey - _ctrl[2].value"
	if z do code += "\n		_ctrl[3].value = basez - _ctrl[3].value"
	
	code += "
	)
))
)"
	execute code
)

--函数2,因为execute有较低的性能,所以尽量将所有任务压缩到一次execute里执行.--函数1的批量版本,应当仅关键帧
--函数2暂且不用了,因为无非就是一次位置,一次旋转.
fn relmirroranimation ctrls x:true y:true z:true = --state 0 xyz 1 x 2y 3z  000 100 010 001 110 101 011 111这几种 排序:000 001 010 011 100 101 110 111
(
	global
	_ctrls = ctrls
	
	local
	code = 
"undo \"Rel Mirror Animation\" on(with animate on(
local
	basex = _ctrl[1].value * 2,
	basey = _ctrl[2].value * 2,
	basez = _ctrl[3].value * 2
	for t in animationrange.start to animationrange.end do
(
	at time t("
	
	if x do code += "\n		_ctrl[1].value = basex - _ctrl[1].value"
	if y do code += "\n		_ctrl[2].value = basey - _ctrl[2].value"
	if z do code += "\n		_ctrl[3].value = basez - _ctrl[3].value"
	
	code += "
	)
)
))"
	execute code
)
