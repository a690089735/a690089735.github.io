subObjectLevel  --获取和设置子对象级别
modPanel.getCurrentObject() --获取当前对象(由选择决定),如果不是修改面板,这里会返回undefined

--做一个节点事件响应的测试
allevents = #()--#(#geometryChanged, #topologyChanged, #mappingChanged, #extentionChannelChanged, #modelOtherEvent, #renderPropertiesChanged, #displayPropertiesChanged, #subobjectSelectionChanged)
-- sevents = #()
fn _NodeEv s e = 
(
	--伪代码
	--modPanel.getCurrentObject() == skin 并且 modPanel.getCurrentObject() 和之前一样 --> 那么刷新;
	--和之前的不一样 --> 看看有没有属性,
	--		没有属性-->则新建
	--		有属性-->则看属性1需2不需要重建(可能在未开启事件时添加或删除了骨骼),不需要重建则直接调用刷新.
	if finditem allevents s == 0 and s != #callbackBegin and s != #callbackEnd do append allevents s
	print allevents  #nomap
-- 	if s ==  #modelOtherEvent do print 1
-- 	if s == #subobjectSelectionChanged do print 1
)

ne = NodeEventCallback all:_NodeEv

ne = undefined;gc light:true

--依赖节点
-- refs.dependentNodes (modPanel.getCurrentObject())
--依赖对象
refs.dependson (modPanel.getCurrentObject())
isvalidnode (refs.dependson (modPanel.getCurrentObject()))[1]
for i in refs.dependson (modPanel.getCurrentObject()) where isvalidnode i collect i--由此可获取骨骼,需要一个对比方案,骨骼删了再加,会导致这个列表顺序改变.
--依赖目标
-- refs.dependents (modPanel.getCurrentObject()) --[ immediateOnly:&<boolean>]
-- refs.dependents (modPanel.getCurrentObject()) immediateOnly:true
	
--取目标
fn _NodeEv s e = 
(
	print(GetAnimByHandle e[1])
)
ne = NodeEventCallback modelOtherEvent:_NodeEv
ne = undefined;gc light:true

--实际测验-按Skin刷新
fn _NodeEv s e = 
(
	m = modPanel.getCurrentObject()
	if m == skin and subObjectLevel == 1 do
	(
		sk = m
		currentNode = GetAnimByHandle e[1]
	)
)
ne = NodeEventCallback modelOtherEvent:_NodeEv
ne = undefined;gc light:true