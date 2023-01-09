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
	s = m1.scalepart * (1-weight) + m2.scalepart * weight
	translate (rotate (scale (matrix3 1) s true) r) t  -- ignores scale
)

$Box002.transform = blendMatrix m1:$Box001.transform m2:$Box003.transform weight:.5
