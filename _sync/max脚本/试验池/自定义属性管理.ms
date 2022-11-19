--通过自定义属性,获取物体
ca= attributes caData
(
	fn getNode = (refs.dependentnodes (custattributes.getowner this) firstonly:false)
	rollout rol "Test"
	(
		button printNode "PrintNode" 
		on printNode pressed do format "%\n" (getNode())
	)
)
cb= attributes caData
(
	fn getNode = (refs.dependentnodes (custattributes.getowner this) firstonly:false)
	rollout rol "Test"
	(
		button printNode "PrintNode" 
		on printNode pressed do format "%\n" (getNode())
	)
)
custAttributes.getDefClass ca == custAttributes.getDefClass cb --false
d = Dummy isselected:on 
custAttributes.add d ca baseobject:false --这里要给节点而不是baseobject,才能获取到

Instances = custAttributes.getDefInstances CA
custAttributes.getOwner Instances[1]
custAttributes.getOwner Instances[2]
custAttributes.getOwner Instances[3]--出来的是逆序的.


-- for attrDef in custAttributes.getSceneDefs() do 
-- (
-- 	format "caDef:% :" attrDef
-- 	for attr in (custAttributes.getDefInstances attrDef) do
-- 	(
-- 		format "	ca:% owner:%" attr (custAttributes.getOwner attr)
-- 	)
-- )

cc= attributes caData attribID:#(1030507090L, 2949698909L)
(
	parameters GhostCA
	(
		Ghost_Countermark type:#point4Tab tabSizeVariable:true invisibleInTV:true
	)
)
d = Dummy isselected:on
custAttributes.add d cc baseobject:false --如果加了#unique 会导致attribID随机
(custAttributes.getDef d.caData).attribID
d.Ghost_Countermark = for i = 1 to 10 collect random [-9999, -9999, -9999, -9999] [9999, 9999, 9999, 9999]
	

-- qsort d.Ghost_Countermark --需要先转化成array,才支持qSort


test = 
attributes HiderCA
(
	parameters HiderCA rollout:HiderRL
	(
		statetab type:#boolTab tabSizeVariable:true animatable:false invisibleInTV:true
		hide1 type:#intTab tabSizeVariable:true animatable:false invisibleInTV:true --程序生成
		nodes1 type:#nodeTab tabSizeVariable:true animatable:false invisibleInTV:true --程序生成
	)
	rollout HiderRL "部分隐藏"
	(
		fn ChangeHide =
		(
			owner = exprForMAXObject(custattributes.getowner this) --string
			hideface = #()
			for i = 1 to HiderRL.controls.count where statetab[i] do hideface += execute(owner + ".hide" + i as string)
				--(refs.dependentnodes (custattributes.getowner this) firstonly:on)--获得节点,这里仅调用属性,所以不需要
		)
		on HiderRL open do
		(
			i = 0
			for c in HiderRL.controls do 
			(
				i += 1
				c.checked = statetab[i]
			)
		)
		checkbutton ckb1 "部分名" width:52 height:21 offset:[1,5] align:#left --程序生成
		on ckb1 changed state do (statetab[finditem HiderRL.controls ckb1] = state;ChangeHide()) --程序生成
	)
)
holder = $.modifiers[1]
clearselection()
custAttributes.add holder test baseobject:false
holder.statetab = #(true)
holder.hide1 = #(1,2,3,4)