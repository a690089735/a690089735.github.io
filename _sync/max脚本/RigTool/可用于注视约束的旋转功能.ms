
fn rotate2 obj rot_q = --可用于注视约束的旋转功能,当.set_orientation 为真,且.relative为假时.可以交互式的设置旋转偏移.
(
	rotate obj (quatToEuler2(rot_q - obj.transform.rotation)) --注意,$.rotation和$.transform.rotation的结果并不一定一样.
)
-- 注视约束的上方节点是pickupnode