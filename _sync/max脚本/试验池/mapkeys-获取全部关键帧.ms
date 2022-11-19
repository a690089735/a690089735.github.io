-- ( --原代码来自PolyTools3D
-- 	fn GetStartEndKeys = with undo off
-- 	(
-- 		mapkeys objects (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
-- 		return #(amin keys, amax keys)
-- 	)
-- 	
-- 	GetStartEndKeys()
-- )

-- fn TestKeys = with undo off
-- (
-- 	mapkeys (getcurrentselection()) (fn CollectKeys t k = (print "k:" ;print k;print "t:" ;print t)) (keys=#()) #allkeys
-- 	sort(makeuniquearray keys)
-- )
-- TestKeys()

fn TestKeys = with undo off
(
	mapkeys (getcurrentselection()) (fn CollectKeys t k = (print k;print t)) (keys=#()) #allkeys
	sort(makeuniquearray keys)
)
TestKeys()

(
	fn GetKeys objs:(getcurrentselection()) = with undo off
	(
		mapkeys objs (fn CollectKeys t k = (append k t; t)) (keys=#()) #allkeys
		return sort(makeuniquearray keys)
	)
	
	GetKeys()
)
--只能这样写,因为bitarray不能是负的.


( --相对版,获取的都是相对首帧的偏移
	fn GetKeys objs:(getcurrentselection()) = with undo off
	(
		mapkeys objs (fn CollectKeys t k = (append k (t-animationrange.start); t)) (keys=#()) #allkeys
		return keys as bitarray
	)
	
	GetKeys()
)