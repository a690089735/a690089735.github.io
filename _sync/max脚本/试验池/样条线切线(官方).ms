(
	--创建平滑线条
	local sp = splineShape()
	addnewSpline sp
	for i = 0 to 100 by 10 do
	(
		addknot sp 1 #smooth #curve [i, (i*i / 100.0), i]
	)
	updateShape sp
	sp.wirecolor = color 255 0 0
	--创建线条的切线
	local count = (numknots sp) - 1
	for i = 1 to count do
	(
		local offset = 0.5
		local pathp = true
		
		--插值贝塞尔 interpBezier3D <splineShape> <spline_index> <segment_index> <param_float> pathParam：<布尔值> 返回point3 <param_float>控制插值点沿线段长度的偏移 pathParam：为true,则以段(路径)为插值(路径会受手柄缩放影响)
		local pt = interpBezier3D sp 1 i offset pathParam:pathp
		
		--切线贝塞尔 tangentBezier3D <splineShape> <spline_index> <segment_index> <param_float> pathParam：<布尔值>
		local tn = tangentBezier3D sp 1 i offset pathParam:pathp
		
		local sr = splineShape()
		addnewSpline sr
		addknot sr 1 #corner #line pt
		addknot sr 1 #corner #line (pt + (tn * 30))
		updateShape sr
		sr.wirecolor =blue
	)
)
--interpBezier3D <splineShape> <spline_index> <segment_index> <param_float> pathParam：
for f in #(0, 0.5, 1) do point pos:(interpBezier3D $ 1 1 f pathParam:true) --即使是小于0或大于1.会被钳制,为不会报错.

for f in #(-10, 0, 10) do point pos:((tangentBezier3D $ 1 1 f pathParam:true))--(interpBezier3D $ 1 1 0.5 pathParam:true) + 


(tangentBezier3D $ 1 1 110 pathParam:true)