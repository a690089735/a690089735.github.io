--测试旋转插值
-- $[3].rotation = slerp $[1].rotation $[2].rotation 0.5
-- $[3].position = ($[1].position + $[2].position)/2

-- $[3][3][2].value = (slerp $[1].rotation $[2].rotation 0.5) * inverse $[3].parent.transform 

-- $[3][3][2].value = $[3].parent.rotation  - (slerp $[1].rotation $[2].rotation 0.5) --要用父级减去本级???

$[3][3][2].value = (slerp $[1].rotation $[2].rotation 0.5) *  $[3].parent.rotation --要用父级减去本级???
q
(eulerAngles 90 0 0) as quat 

(eulerAngles (90+360) 0 0) as quat 

(eulerAngles -90 0 0) as quat


fn dotQuat q q_prev =
( 
   (q.w * q_prev.w + q.x * q_prev.x + q.y * q_prev.y + q.z * q_prev.z) < 0 
)

fn blendMatrix m1: m2: weight:0.5 =
(
	r1 = m1.rotationpart
	r2 = m2.rotationpart
    if (dotQuat r1 r2) do r1 *=-1
	
    r = slerp (normalize r1) (normalize r2) weight
	t = m1.translationpart + (m2.translationpart - m1.translationpart) * weight
	s = m1.scalepart
	translate (rotate (scale (matrix3 1) s true) r) t  -- ignores scale
)